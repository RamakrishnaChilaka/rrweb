(self.System =
  self.System ||
  (() => {
    const e = {},
      t = {},
      n = e => e.replace(/^.\/(\w+)-[a-f0-9]{8,}.js$/, './$1.js'),
      s = {
        register(o, i) {
          const r = n(
              `./${((document.currentScript || {}).src || '')
                .split('?')
                .shift()
                .split('/')
                .pop()}`,
            ),
            a = {},
            c = i((e, t) => (t ? (a[e] = t) : Object.assign(a, e)), s);
          (e[r] = Promise.all(o.map((e, t) => s.import(n(e)).then(c.setters[t])))
            .then(() => (c.execute(), a))
            .catch(e => {
              throw ((e.message = `evaluating module ${r}: ${e.message}`), e);
            })),
            t[r] && (t[r](e[r]), delete t[r]);
        },
        import: n =>
          e[n] ||
          (e[n] = new Promise((e, s) => {
            const o = setTimeout(() => {
              s(new Error(`could not resolve ${n}`));
            }, 1e4);
            t[n] = t => {
              clearTimeout(o), e(t);
            };
          })),
      };
    return s;
  })()),
  System.register(['./frameworks-e3b03578.js'], function(e, t) {
    'use strict';
    var n,
      s,
      o,
      i,
      r,
      a,
      c,
      l,
      u,
      d,
      m,
      f,
      p,
      g,
      h,
      b,
      v,
      j,
      y,
      L,
      w,
      E,
      T,
      k,
      M,
      A,
      x,
      S,
      H,
      C,
      q,
      I,
      _,
      $,
      D,
      R,
      N,
      B,
      P,
      F,
      O,
      W,
      U,
      z,
      V,
      K,
      Y,
      X,
      J,
      G,
      Q,
      Z,
      ee,
      te,
      ne,
      se,
      oe,
      ie,
      re,
      ae,
      ce,
      le,
      ue,
      de,
      me,
      fe,
      pe,
      ge,
      he,
      be,
      ve,
      je,
      ye,
      Le,
      we,
      Ee,
      Te,
      ke,
      Me,
      Ae,
      xe,
      Se,
      He,
      Ce,
      qe,
      Ie,
      _e,
      $e,
      De,
      Re,
      Ne,
      Be,
      Pe,
      Fe,
      Oe,
      We,
      Ue,
      ze,
      Ve,
      Ke,
      Ye,
      Xe,
      Je,
      Ge,
      Qe,
      Ze,
      et,
      tt,
      nt,
      st,
      ot,
      it,
      rt,
      at,
      ct,
      lt,
      ut;
    return {
      setters: [
        function(e) {
          (n = e.L),
            (s = e.M),
            (o = e.N),
            (i = e.e),
            (r = e.O),
            (a = e.P),
            (c = e.j),
            (l = e.o),
            (u = e.d),
            (d = e.n),
            (m = e.g),
            (f = e.u),
            (p = e.i),
            (g = e.b),
            (h = e.f),
            (b = e.Q),
            (v = e.r),
            (j = e.R),
            (y = e.p),
            (L = e.h),
            (w = e.G),
            (E = e.x),
            (T = e.y),
            (k = e.S),
            (M = e.T),
            (A = e.t),
            (x = e.q),
            (S = e.U),
            (H = e.V),
            (C = e.k),
            (q = e.W),
            (I = e.X),
            (_ = e.I),
            ($ = e.Y),
            (D = e.Z),
            (R = e.m),
            (N = e._),
            (B = e.$),
            (P = e.a0),
            (F = e.a1),
            (O = e.a2),
            (W = e.a3),
            (U = e.a4),
            (z = e.a5),
            (V = e.a6),
            (K = e.H),
            (Y = e.s),
            (X = e.a7),
            (J = e.a8),
            (G = e.a9),
            (Q = e.aa),
            (Z = e.ab),
            (ee = e.J),
            (te = e.ac),
            (ne = e.v),
            (se = e.ad),
            (oe = e.ae),
            (ie = e.af),
            (re = e.ag),
            (ae = e.ah),
            (ce = e.ai),
            (le = e.aj),
            (ue = e.ak),
            (de = e.al),
            (me = e.am),
            (fe = e.an),
            (pe = e.ao),
            (ge = e.ap),
            (he = e.aq),
            (be = e.ar),
            (ve = e.as),
            (je = e.l),
            e.at,
            (ye = e.au),
            (Le = e.av),
            (we = e.aw),
            (Ee = e.ax),
            (Te = e.ay),
            (ke = e.az),
            (Me = e.K),
            (Ae = e.aA),
            (xe = e.w),
            (Se = e.aB),
            (He = e.aC),
            (Ce = e.aD),
            (qe = e.aE),
            (Ie = e.aF),
            (_e = e.aG),
            ($e = e.aH),
            (De = e.aI),
            (Re = e.aJ),
            (Ne = e.aK),
            (Be = e.F),
            (Pe = e.aL),
            (Fe = e.aM),
            (Oe = e.aN),
            (We = e.aO),
            (Ue = e.aP),
            (ze = e.aQ),
            (Ve = e.aR),
            (Ke = e.aS),
            (Ye = e.aT),
            (Xe = e.aU),
            (Je = e.aV),
            (Ge = e.c),
            (Qe = e.a),
            (Ze = e.aW),
            (et = e.aX),
            (tt = e.aY),
            (nt = e.aZ),
            (st = e.a_),
            (ot = e.a$),
            (it = e.C),
            (rt = e.b0),
            (at = e.b1),
            (ct = e.b2),
            (lt = e.b3),
            (ut = e.b4);
        },
      ],
      execute: function() {
        (window.requestIdleCallback =
          window.requestIdleCallback ||
          function(e) {
            var t = Date.now();
            return setTimeout(function() {
              e({
                didTimeout: !1,
                timeRemaining: function() {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          }),
          (window.cancelIdleCallback =
            window.cancelIdleCallback ||
            function(e) {
              clearTimeout(e);
            });
        n(function(e, t) {
          !(function() {
            var t = window,
              n = document;
            e.exports = {
              polyfill: function() {
                if (
                  !(
                    'scrollBehavior' in n.documentElement.style &&
                    !0 !== t.__forceSmoothScrollPolyfill__
                  )
                ) {
                  var e,
                    s = t.HTMLElement || t.Element,
                    o = 468,
                    i =
                      ((e = t.navigator.userAgent),
                      new RegExp(['MSIE ', 'Trident/', 'Edge/'].join('|')).test(e) ? 1 : 0),
                    r = {
                      scroll: t.scroll || t.scrollTo,
                      scrollBy: t.scrollBy,
                      elementScroll: s.prototype.scroll || c,
                      scrollIntoView: s.prototype.scrollIntoView,
                    },
                    a =
                      t.performance && t.performance.now
                        ? t.performance.now.bind(t.performance)
                        : Date.now;
                  (t.scroll = t.scrollTo = function() {
                    void 0 !== arguments[0] &&
                      (!0 !== l(arguments[0])
                        ? p.call(
                            t,
                            n.body,
                            void 0 !== arguments[0].left
                              ? ~~arguments[0].left
                              : t.scrollX || t.pageXOffset,
                            void 0 !== arguments[0].top
                              ? ~~arguments[0].top
                              : t.scrollY || t.pageYOffset,
                          )
                        : r.scroll.call(
                            t,
                            void 0 !== arguments[0].left
                              ? arguments[0].left
                              : 'object' != typeof arguments[0]
                              ? arguments[0]
                              : t.scrollX || t.pageXOffset,
                            void 0 !== arguments[0].top
                              ? arguments[0].top
                              : void 0 !== arguments[1]
                              ? arguments[1]
                              : t.scrollY || t.pageYOffset,
                          ));
                  }),
                    (t.scrollBy = function() {
                      void 0 !== arguments[0] &&
                        (l(arguments[0])
                          ? r.scrollBy.call(
                              t,
                              void 0 !== arguments[0].left
                                ? arguments[0].left
                                : 'object' != typeof arguments[0]
                                ? arguments[0]
                                : 0,
                              void 0 !== arguments[0].top
                                ? arguments[0].top
                                : void 0 !== arguments[1]
                                ? arguments[1]
                                : 0,
                            )
                          : p.call(
                              t,
                              n.body,
                              ~~arguments[0].left + (t.scrollX || t.pageXOffset),
                              ~~arguments[0].top + (t.scrollY || t.pageYOffset),
                            ));
                    }),
                    (s.prototype.scroll = s.prototype.scrollTo = function() {
                      if (void 0 !== arguments[0])
                        if (!0 !== l(arguments[0])) {
                          var e = arguments[0].left,
                            t = arguments[0].top;
                          p.call(
                            this,
                            this,
                            void 0 === e ? this.scrollLeft : ~~e,
                            void 0 === t ? this.scrollTop : ~~t,
                          );
                        } else {
                          if ('number' == typeof arguments[0] && void 0 === arguments[1])
                            throw new SyntaxError("Value couldn't be converted");
                          r.elementScroll.call(
                            this,
                            void 0 !== arguments[0].left
                              ? ~~arguments[0].left
                              : 'object' != typeof arguments[0]
                              ? ~~arguments[0]
                              : this.scrollLeft,
                            void 0 !== arguments[0].top
                              ? ~~arguments[0].top
                              : void 0 !== arguments[1]
                              ? ~~arguments[1]
                              : this.scrollTop,
                          );
                        }
                    }),
                    (s.prototype.scrollBy = function() {
                      void 0 !== arguments[0] &&
                        (!0 !== l(arguments[0])
                          ? this.scroll({
                              left: ~~arguments[0].left + this.scrollLeft,
                              top: ~~arguments[0].top + this.scrollTop,
                              behavior: arguments[0].behavior,
                            })
                          : r.elementScroll.call(
                              this,
                              void 0 !== arguments[0].left
                                ? ~~arguments[0].left + this.scrollLeft
                                : ~~arguments[0] + this.scrollLeft,
                              void 0 !== arguments[0].top
                                ? ~~arguments[0].top + this.scrollTop
                                : ~~arguments[1] + this.scrollTop,
                            ));
                    }),
                    (s.prototype.scrollIntoView = function() {
                      if (!0 !== l(arguments[0])) {
                        var e = (function(e) {
                            var t;
                            do {
                              t = (e = e.parentNode) === n.body;
                            } while (!1 === t && !1 === m(e));
                            return (t = null), e;
                          })(this),
                          s = e.getBoundingClientRect(),
                          o = this.getBoundingClientRect();
                        e !== n.body
                          ? (p.call(
                              this,
                              e,
                              e.scrollLeft + o.left - s.left,
                              e.scrollTop + o.top - s.top,
                            ),
                            'fixed' !== t.getComputedStyle(e).position &&
                              t.scrollBy({ left: s.left, top: s.top, behavior: 'smooth' }))
                          : t.scrollBy({ left: o.left, top: o.top, behavior: 'smooth' });
                      } else r.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
                    });
                }
                function c(e, t) {
                  (this.scrollLeft = e), (this.scrollTop = t);
                }
                function l(e) {
                  if (
                    null === e ||
                    'object' != typeof e ||
                    void 0 === e.behavior ||
                    'auto' === e.behavior ||
                    'instant' === e.behavior
                  )
                    return !0;
                  if ('object' == typeof e && 'smooth' === e.behavior) return !1;
                  throw new TypeError(
                    'behavior member of ScrollOptions ' +
                      e.behavior +
                      ' is not a valid value for enumeration ScrollBehavior.',
                  );
                }
                function u(e, t) {
                  return 'Y' === t
                    ? e.clientHeight + i < e.scrollHeight
                    : 'X' === t
                    ? e.clientWidth + i < e.scrollWidth
                    : void 0;
                }
                function d(e, n) {
                  var s = t.getComputedStyle(e, null)['overflow' + n];
                  return 'auto' === s || 'scroll' === s;
                }
                function m(e) {
                  var t = u(e, 'Y') && d(e, 'Y'),
                    n = u(e, 'X') && d(e, 'X');
                  return t || n;
                }
                function f(e) {
                  var n,
                    s,
                    i,
                    r,
                    c = (a() - e.startTime) / o;
                  (r = c = c > 1 ? 1 : c),
                    (n = 0.5 * (1 - Math.cos(Math.PI * r))),
                    (s = e.startX + (e.x - e.startX) * n),
                    (i = e.startY + (e.y - e.startY) * n),
                    e.method.call(e.scrollable, s, i),
                    (s === e.x && i === e.y) || t.requestAnimationFrame(f.bind(t, e));
                }
                function p(e, s, o) {
                  var i,
                    l,
                    u,
                    d,
                    m = a();
                  e === n.body
                    ? ((i = t),
                      (l = t.scrollX || t.pageXOffset),
                      (u = t.scrollY || t.pageYOffset),
                      (d = r.scroll))
                    : ((i = e), (l = e.scrollLeft), (u = e.scrollTop), (d = c)),
                    f({ scrollable: i, method: d, startTime: m, startX: l, startY: u, x: s, y: o });
                }
              },
            };
          })();
        }).polyfill;
        window.getSelection &&
          !(function() {
            const e = document.createElement('div');
            return (
              (e.style.cssText = '-ms-user-select: element; user-select: contain;'),
              'element' === e.style.getPropertyValue('-ms-user-select') ||
                'contain' === e.style.getPropertyValue('-ms-user-select') ||
                'contain' === e.style.getPropertyValue('user-select')
            );
          })() &&
          document.addEventListener('click', function(e) {
            if (!(e.target instanceof Element)) return;
            const t = e.target.closest('.user-select-contain');
            if (!t) return;
            const n = window.getSelection();
            if (!n.rangeCount) return;
            const s = n.getRangeAt(0).commonAncestorContainer;
            t.contains(s) || n.selectAllChildren(t);
          }),
          window.Element &&
            !Element.prototype.toggleAttribute &&
            (Element.prototype.toggleAttribute = function(e, t) {
              var n = !!t,
                s = 2 === arguments.length && !t;
              return null !== this.getAttribute(e)
                ? !!n || (this.removeAttribute(e), !1)
                : !s && (this.setAttribute(e, ''), !0);
            });
        let e = 0;
        function t(e) {
          const t = e.body || {},
            n = new Error('ReportingObserverError');
          mt({
            bucket: 'github-js-reports',
            error: {
              columnNumber: t.columnNumber,
              fileName: '' === t.sourceFile ? n.fileName : t.sourceFile,
              lineNumber: t.lineNumber,
              message: t.message || n.message,
              name: t.id,
              stack: n.stack,
            },
            url: e.url,
          });
        }
        function dt(e, t = {}) {
          mt(pt(e, t));
        }
        function mt(t) {
          const n = o(document, 'browser-errors-url');
          n &&
            (e++,
            window.fetch(n, { method: 'post', body: JSON.stringify(t) }).catch(function() {}));
        }
        const ft = new Date().getTime();
        function pt(e, t = {}) {
          let n;
          if (e) {
            let s;
            if (e.stack) {
              const { framesToPop: t } = e;
              s = (function(e, t) {
                let n = e.split('\n');
                n.length >= 2 && gt.test(n[0]) && ht.test(n[1]) && n.shift();
                null != t && (n = n.slice(t));
                return n.join('\n');
              })(e.stack, t);
            } else {
              let { fileName: n, lineNumber: o, columnNumber: i } = e;
              null == n && (n = String(t.filename)),
                null == o && (o = t.lineno || 0),
                null == i && (i = t.colno || 0),
                (s = `${n}:${o}:${i}`);
            }
            n = { message: e.message, name: e.name, stack: s, toString: e.toString() };
          }
          return Object.assign(
            {
              error: n,
              filename: '',
              lineno: 0,
              colno: 0,
              url: window.location.href,
              readyState: document.readyState,
              referrer: document.referrer,
              timeSinceLoad: Math.round(new Date().getTime() - ft),
              user: bt(),
            },
            t,
          );
        }
        const gt = /^\S/,
          ht = /^\s+at /;
        function bt() {
          const e = o(document, 'user-login');
          if (e) return e;
          const t = window._octo && window._octo._clientId();
          return t ? `anonymous-${t}` : null;
        }
        let vt = !1;
        function jt() {
          return (
            !vt &&
            e < 10 &&
            'function' == typeof Blob &&
            'undefined' != typeof customElements &&
            'undefined' != typeof Intl &&
            'undefined' != typeof MutationObserver &&
            !s(document)
          );
        }
        function yt(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        window.addEventListener('pageshow', () => {
          vt = !1;
        }),
          window.addEventListener('pagehide', () => {
            vt = !0;
          }),
          window.addEventListener('error', function(e) {
            jt() &&
              mt(
                (function(e) {
                  const { message: t, filename: n, lineno: s, colno: o, error: i } = e;
                  return pt(i, { message: t, filename: n, lineno: s, colno: o });
                })(e),
              );
          }),
          window.addEventListener('unhandledrejection', function(e) {
            jt() &&
              e.promise &&
              e.promise.catch(e => {
                const t = {};
                if (e && e.response instanceof Response) {
                  if (/^HTTP (401|403|405|429|502)/.test(e.message)) return;
                  t.dataRemoteUrl = e.response.url;
                }
                dt(e, t);
              });
          }),
          '#b00m' === window.location.hash &&
            setTimeout(() => {
              throw new Error('b00m');
            }),
          (function() {
            const e = window.ReportingObserver;
            e &&
              new e(
                e => {
                  for (const n of e) t(n);
                },
                { buffered: !0 },
              ).observe();
          })();
        class Lt extends Error {
          constructor(e, t, n) {
            super(),
              yt(this, 'statusCode', void 0),
              yt(this, 'responseText', void 0),
              yt(this, 'contentType', void 0),
              (this.statusCode = e),
              (this.responseText = t),
              (this.contentType = n);
          }
        }
        const wt = new WeakMap(),
          Et = new WeakMap(),
          Tt = new WeakMap();
        class AutoCheckElement extends HTMLElement {
          constructor() {
            super(),
              Tt.set(
                this,
                (function(e, t) {
                  let n;
                  return function() {
                    for (var s = arguments.length, o = new Array(s), i = 0; i < s; i++)
                      o[i] = arguments[i];
                    const r = this;
                    clearTimeout(n),
                      (n = setTimeout(function() {
                        clearTimeout(n), e.apply(r, o);
                      }, t));
                  };
                })(
                  function(e) {
                    const t = e.src;
                    if (!t) throw new Error('missing src');
                    const n = e.csrf;
                    if (!n) throw new Error('missing csrf');
                    const s = e.input;
                    if (!s) return;
                    const o = new FormData();
                    o.append('authenticity_token', n), o.append('value', s.value);
                    const i = o.entries ? [...o.entries()].sort().toString() : null;
                    if (i && i === Et.get(s)) return;
                    if (
                      (Et.set(s, i),
                      s.dispatchEvent(
                        new CustomEvent('auto-check-send', { detail: { body: o }, bubbles: !0 }),
                      ),
                      !s.value.trim())
                    )
                      return void s.dispatchEvent(
                        new CustomEvent('auto-check-complete', { bubbles: !0 }),
                      );
                    const r = () => {
                      e.dispatchEvent(new CustomEvent('loadend')),
                        s.dispatchEvent(new CustomEvent('auto-check-complete', { bubbles: !0 }));
                    };
                    e.required && s.setCustomValidity('Verifying…');
                    e.dispatchEvent(new CustomEvent('loadstart')),
                      (function(e, t, n) {
                        const s = wt.get(e);
                        s && s.abort();
                        const o = () => wt.delete(e),
                          i = new XMLHttpRequest();
                        wt.set(e, i),
                          i.open('POST', n, !0),
                          i.setRequestHeader('Accept', 'text/html; fragment');
                        const r = (function(e, t) {
                          return new Promise((n, s) => {
                            (e.onload = function() {
                              e.status >= 200 && e.status < 300
                                ? n(e.responseText)
                                : s(
                                    new Lt(
                                      e.status,
                                      e.responseText,
                                      e.getResponseHeader('Content-Type'),
                                    ),
                                  );
                            }),
                              (e.onerror = function() {
                                s(
                                  new Lt(
                                    e.status,
                                    e.responseText,
                                    e.getResponseHeader('Content-Type'),
                                  ),
                                );
                              }),
                              e.send(t);
                          });
                        })(i, t);
                        return r.then(o, o), r;
                      })(s, o, t)
                        .then(t => {
                          e.dispatchEvent(new CustomEvent('load'));
                          const n = t ? t.trim() : null;
                          e.required && s.setCustomValidity(''),
                            s.dispatchEvent(
                              new CustomEvent('auto-check-success', {
                                detail: { message: n },
                                bubbles: !0,
                              }),
                            );
                        })
                        .catch(t => {
                          e.required && s.setCustomValidity(kt(t) || 'Something went wrong'),
                            e.dispatchEvent(new CustomEvent('error')),
                            s.dispatchEvent(
                              new CustomEvent('auto-check-error', {
                                detail: { message: kt(t) },
                                bubbles: !0,
                              }),
                            );
                        })
                        .then(r, r);
                  }.bind(null, this),
                  300,
                ),
              );
          }
          connectedCallback() {
            const e = this.input;
            if (!e) return;
            const t = Tt.get(this);
            t &&
              (e.addEventListener('change', t),
              e.addEventListener('input', t),
              (e.autocomplete = 'off'),
              (e.spellcheck = !1));
          }
          disconnectedCallback() {
            const e = this.input;
            if (!e) return;
            const t = Tt.get(this);
            t &&
              (e.removeEventListener('change', t),
              e.removeEventListener('input', t),
              e.setCustomValidity(''));
          }
          get input() {
            const e = this.querySelector('input');
            return e instanceof HTMLInputElement ? e : null;
          }
          get src() {
            const e = this.getAttribute('src');
            if (!e) return '';
            const t = this.ownerDocument.createElement('a');
            return (t.href = e), t.href;
          }
          set src(e) {
            this.setAttribute('src', e);
          }
          get csrf() {
            return this.getAttribute('csrf') || '';
          }
          set csrf(e) {
            this.setAttribute('csrf', e);
          }
          get required() {
            return this.hasAttribute('required');
          }
          set required(e) {
            const t = this.input;
            t &&
              ((t.required = e),
              e ? this.setAttribute('required', '') : this.removeAttribute('required'));
          }
        }
        function kt(e) {
          if (
            422 === e.statusCode &&
            e.responseText &&
            e.contentType.includes('text/html; fragment')
          )
            return e.responseText;
        }
        function Mt(e) {
          if ('clipboard' in navigator) return navigator.clipboard.writeText(e.textContent);
          const t = getSelection();
          if (null == t) return Promise.reject(new Error());
          t.removeAllRanges();
          const n = document.createRange();
          return (
            n.selectNodeContents(e),
            t.addRange(n),
            document.execCommand('copy'),
            t.removeAllRanges(),
            Promise.resolve()
          );
        }
        function At(e) {
          if ('clipboard' in navigator) return navigator.clipboard.writeText(e);
          const t = document.body;
          if (!t) return Promise.reject(new Error());
          const n = (function(e) {
            const t = document.createElement('pre');
            return (
              (t.style.width = '1px'),
              (t.style.height = '1px'),
              (t.style.position = 'fixed'),
              (t.style.top = '5px'),
              (t.textContent = e),
              t
            );
          })(e);
          return t.appendChild(n), Mt(n), t.removeChild(n), Promise.resolve();
        }
        function xt(e) {
          const t = e.getAttribute('for'),
            n = e.getAttribute('value');
          function s() {
            e.dispatchEvent(new CustomEvent('clipboard-copy', { bubbles: !0 }));
          }
          if (n) At(n).then(s);
          else if (t) {
            const n = e.ownerDocument.getElementById(t);
            n &&
              ((o = n),
              o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement
                ? 'hidden' === o.type
                  ? At(o.value)
                  : (function(e) {
                      if ('clipboard' in navigator) return navigator.clipboard.writeText(e.value);
                      e.select(), document.execCommand('copy');
                      const t = getSelection();
                      return null != t && t.removeAllRanges(), Promise.resolve();
                    })(o)
                : o instanceof HTMLAnchorElement && o.hasAttribute('href')
                ? At(o.href)
                : Mt(o)).then(s);
          }
          var o;
        }
        function St(e) {
          const t = e.currentTarget;
          t instanceof HTMLElement && xt(t);
        }
        function Ht(e) {
          if (' ' === e.key || 'Enter' === e.key) {
            const t = e.currentTarget;
            t instanceof HTMLElement && (e.preventDefault(), xt(t));
          }
        }
        function Ct(e) {
          e.currentTarget.addEventListener('keydown', Ht);
        }
        function qt(e) {
          e.currentTarget.removeEventListener('keydown', Ht);
        }
        window.customElements.get('auto-check') ||
          ((window.AutoCheckElement = AutoCheckElement),
          window.customElements.define('auto-check', AutoCheckElement));
        class It extends HTMLElement {
          constructor() {
            super(),
              this.addEventListener('click', St),
              this.addEventListener('focus', Ct),
              this.addEventListener('blur', qt);
          }
          connectedCallback() {
            this.hasAttribute('tabindex') || this.setAttribute('tabindex', '0'),
              this.hasAttribute('role') || this.setAttribute('role', 'button');
          }
          get value() {
            return this.getAttribute('value') || '';
          }
          set value(e) {
            this.setAttribute('value', e);
          }
        }
        window.customElements.get('clipboard-copy') ||
          ((window.ClipboardCopyElement = It), window.customElements.define('clipboard-copy', It));
        const _t = 'data-close-dialog',
          $t = `[${_t}]`;
        function Dt(e) {
          let t = e.querySelector('[autofocus]');
          t || ((t = e), e.setAttribute('tabindex', '-1')), t.focus();
        }
        function Rt(e) {
          const t = e.currentTarget;
          t instanceof Element &&
            ('Escape' === e.key || 'Esc' === e.key
              ? (Ot(t, !1), e.stopPropagation())
              : 'Tab' === e.key &&
                (function(e) {
                  if (!(e.currentTarget instanceof Element)) return;
                  const t = e.currentTarget.querySelector('details-dialog');
                  if (!t) return;
                  e.preventDefault();
                  const n = Array.from(t.querySelectorAll('*')).filter(Nt);
                  if (0 === n.length) return;
                  const s = e.shiftKey ? -1 : 1,
                    o = n.filter(e => e.matches(':focus'))[0];
                  let i = 0;
                  if (o) {
                    const e = n.indexOf(o);
                    if (-1 !== e) {
                      const t = e + s;
                      t >= 0 && (i = t % n.length);
                    }
                  }
                  n[i].focus();
                })(e));
        }
        function Nt(e) {
          return (
            e.tabIndex >= 0 &&
            !e.disabled &&
            !e.hidden &&
            (!e.type || 'hidden' !== e.type) &&
            !e.closest('[hidden]')
          );
        }
        function Bt(e) {
          const t = e.querySelector('details-dialog');
          return (
            !(t instanceof DetailsDialogElement) ||
            t.dispatchEvent(
              new CustomEvent('details-dialog-close', { bubbles: !0, cancelable: !0 }),
            )
          );
        }
        function Pt(e) {
          if (!(e.currentTarget instanceof Element)) return;
          const t = e.currentTarget.closest('details[open]');
          t && (Bt(t) || (e.preventDefault(), e.stopPropagation()));
        }
        function Ft(e) {
          const t = e.currentTarget;
          if (!(t instanceof Element)) return;
          const n = t.querySelector('details-dialog');
          if (n instanceof DetailsDialogElement)
            if (t.hasAttribute('open'))
              document.activeElement &&
                Vt.set(n, { details: t, activeElement: document.activeElement }),
                Dt(n),
                t.addEventListener('keydown', Rt);
            else {
              for (const t of n.querySelectorAll('form')) t instanceof HTMLFormElement && t.reset();
              const e = (function(e, t) {
                const n = Vt.get(t);
                return n && n.activeElement instanceof HTMLElement
                  ? n.activeElement
                  : e.querySelector('summary');
              })(t, n);
              e && e.focus(), t.removeEventListener('keydown', Rt);
            }
        }
        function Ot(e, t) {
          t !== e.hasAttribute('open') &&
            (t ? e.setAttribute('open', '') : Bt(e) && e.removeAttribute('open'));
        }
        function Wt(e) {
          const t = e.currentTarget;
          if (!(t instanceof Element)) return;
          const n = t.querySelector('details-dialog');
          if (!(n instanceof DetailsDialogElement)) return;
          const s = n.querySelector('include-fragment:not([src])');
          if (!s) return;
          const o = n.src;
          null !== o &&
            (s.addEventListener('loadend', () => {
              t.hasAttribute('open') && Dt(n);
            }),
            s.setAttribute('src', o));
        }
        function Ut(e, t, n) {
          zt(e),
            t && e.addEventListener('toggle', Wt, { once: !0 }),
            t && n && e.addEventListener('mouseover', Wt, { once: !0 });
        }
        function zt(e) {
          e.removeEventListener('toggle', Wt), e.removeEventListener('mouseover', Wt);
        }
        const Vt = new WeakMap();
        class DetailsDialogElement extends HTMLElement {
          static get CLOSE_ATTR() {
            return _t;
          }
          static get CLOSE_SELECTOR() {
            return $t;
          }
          constructor() {
            super(),
              Vt.set(this, { details: null, activeElement: null }),
              this.addEventListener('click', function(e) {
                let t = e.target;
                if (!(t instanceof Element)) return;
                const n = t.closest('details');
                n && t.closest($t) && Ot(n, !1);
              });
          }
          get src() {
            return this.getAttribute('src');
          }
          set src(e) {
            this.setAttribute('src', e);
          }
          get preload() {
            return this.hasAttribute('preload');
          }
          set preload(e) {
            e ? this.setAttribute('preload', '') : this.removeAttribute('preload');
          }
          connectedCallback() {
            this.setAttribute('role', 'dialog'), this.setAttribute('aria-modal', 'true');
            const e = Vt.get(this);
            if (!e) return;
            const t = this.parentElement;
            if (!t) return;
            const n = t.querySelector('summary');
            n &&
              (n.hasAttribute('role') || n.setAttribute('role', 'button'),
              n.addEventListener('click', Pt, { capture: !0 })),
              t.addEventListener('toggle', Ft),
              (e.details = t),
              Ut(t, this.src, this.preload);
          }
          disconnectedCallback() {
            const e = Vt.get(this);
            if (!e) return;
            const t = e.details;
            if (!t) return;
            t.removeEventListener('toggle', Ft), zt(t);
            const n = t.querySelector('summary');
            n && n.removeEventListener('click', Pt, { capture: !0 }), (e.details = null);
          }
          toggle(e) {
            const t = Vt.get(this);
            if (!t) return;
            const n = t.details;
            n && Ot(n, e);
          }
          static get observedAttributes() {
            return ['src', 'preload'];
          }
          attributeChangedCallback() {
            const e = Vt.get(this);
            if (!e) return;
            const t = e.details;
            t && Ut(t, this.src, this.preload);
          }
        }
        window.customElements.get('details-dialog') ||
          ((window.DetailsDialogElement = DetailsDialogElement),
          window.customElements.define('details-dialog', DetailsDialogElement));
        class DetailsMenuElement extends HTMLElement {
          constructor() {
            super();
          }
          get preload() {
            return this.hasAttribute('preload');
          }
          set preload(e) {
            e ? this.setAttribute('preload', '') : this.removeAttribute('preload');
          }
          get src() {
            return this.getAttribute('src') || '';
          }
          set src(e) {
            this.setAttribute('src', e);
          }
          connectedCallback() {
            this.setAttribute('role', 'menu');
            const e = this.parentElement;
            if (!e) return;
            const t = e.querySelector('summary');
            t && t.setAttribute('aria-haspopup', 'menu'),
              e.addEventListener('click', en),
              e.addEventListener('change', en),
              e.addEventListener('keydown', nn),
              e.addEventListener('toggle', Yt, { once: !0 }),
              e.addEventListener('toggle', Jt),
              this.preload && e.addEventListener('mouseover', Yt, { once: !0 });
            const n = [Xt(e)];
            Kt.set(this, { details: e, subscriptions: n, loaded: !1 });
          }
          disconnectedCallback() {
            const e = Kt.get(this);
            if (!e) return;
            Kt.delete(this);
            const t = e.details,
              n = e.subscriptions;
            for (const s of n) s.unsubscribe();
            t.removeEventListener('click', en),
              t.removeEventListener('change', en),
              t.removeEventListener('keydown', nn),
              t.removeEventListener('toggle', Yt, { once: !0 }),
              t.removeEventListener('toggle', Jt),
              t.removeEventListener('mouseover', Yt, { once: !0 });
          }
        }
        const Kt = new WeakMap();
        function Yt(e) {
          const t = e.currentTarget;
          if (!(t instanceof Element)) return;
          const n = t.querySelector('details-menu');
          if (!n) return;
          const s = n.getAttribute('src');
          if (!s) return;
          const o = Kt.get(n);
          if (!o) return;
          if (o.loaded) return;
          o.loaded = !0;
          const i = n.querySelector('include-fragment');
          i &&
            !i.hasAttribute('src') &&
            (i.addEventListener('loadend', () => Gt(t)), i.setAttribute('src', s));
        }
        function Xt(e) {
          let t = !1;
          const n = () => (t = !0),
            s = () => (t = !1),
            o = () => {
              Gt(e),
                e.hasAttribute('open') &&
                  !t &&
                  (function(e) {
                    const t = document.activeElement;
                    if (t && sn(t) && e.contains(t)) return;
                    const n = Qt(e, !0);
                    n && n.focus();
                  })(e);
            };
          return (
            e.addEventListener('mousedown', n),
            e.addEventListener('keydown', s),
            e.addEventListener('toggle', o),
            {
              unsubscribe: () => {
                e.removeEventListener('mousedown', n),
                  e.removeEventListener('keydown', s),
                  e.removeEventListener('toggle', o);
              },
            }
          );
        }
        function Jt(e) {
          const t = e.currentTarget;
          if (t instanceof Element && t.hasAttribute('open'))
            for (const n of document.querySelectorAll('details[open] > details-menu')) {
              const e = n.closest('details');
              e && e !== t && !e.contains(t) && e.removeAttribute('open');
            }
        }
        function Gt(e) {
          if (!e.hasAttribute('open')) return;
          const t = e.querySelector('[autofocus]');
          t && t.focus();
        }
        function Qt(e, t) {
          const n = Array.from(
              e.querySelectorAll(
                '[role^="menuitem"]:not([hidden]):not([disabled]):not([aria-disabled="true"])',
              ),
            ),
            s = document.activeElement,
            o = n.indexOf(s),
            i = t ? n[o + 1] : n[o - 1],
            r = t ? n[0] : n[n.length - 1];
          return i || r;
        }
        const Zt = navigator.userAgent.match(/Macintosh/);
        function en(e) {
          const t = e.target;
          if (!(t instanceof Element)) return;
          const n = e.currentTarget;
          if (n instanceof Element && t.closest('details') === n)
            if ('click' === e.type) {
              const e = t.closest('[role="menuitem"], [role="menuitemradio"]'),
                s = e && 'LABEL' === e.tagName && e.querySelector('input');
              e && !s && tn(e, n);
            } else if ('change' === e.type) {
              const e = t.closest('[role="menuitemradio"], [role="menuitemcheckbox"]');
              e && tn(e, n);
            }
        }
        function tn(e, t) {
          if (e.hasAttribute('disabled') || 'true' === e.getAttribute('aria-disabled')) return;
          const n = e.closest('details-menu');
          n &&
            n.dispatchEvent(
              new CustomEvent('details-menu-select', {
                cancelable: !0,
                detail: { relatedTarget: e },
              }),
            ) &&
            (!(function(e, t) {
              const n = t.querySelector('[data-menu-button]');
              if (!n) return;
              const s = (function(e) {
                if (!e) return null;
                const t = e.hasAttribute('data-menu-button-text')
                  ? e
                  : e.querySelector('[data-menu-button-text]');
                return t ? t.getAttribute('data-menu-button-text') || t.textContent : null;
              })(e);
              if (s) n.textContent = s;
              else {
                const t = (function(e) {
                  if (!e) return null;
                  const t = e.hasAttribute('data-menu-button-contents')
                    ? e
                    : e.querySelector('[data-menu-button-contents]');
                  return t ? t.innerHTML : null;
                })(e);
                t && (n.innerHTML = t);
              }
            })(e, t),
            (function(e, t) {
              for (const n of t.querySelectorAll(
                '[role="menuitemradio"], [role="menuitemcheckbox"]',
              )) {
                const t = n.querySelector('input[type="radio"], input[type="checkbox"]');
                let s = n === e;
                t instanceof HTMLInputElement && (s = t.indeterminate ? 'mixed' : t.checked),
                  n.setAttribute('aria-checked', s.toString());
              }
            })(e, t),
            'menuitemcheckbox' !== e.getAttribute('role') && on(t),
            n.dispatchEvent(
              new CustomEvent('details-menu-selected', { detail: { relatedTarget: e } }),
            ));
        }
        function nn(e) {
          const t = e.currentTarget;
          if (!(t instanceof Element)) return;
          const n = e.target instanceof Element && 'SUMMARY' === e.target.tagName;
          if (!t.querySelector('details[open]'))
            switch (e.key) {
              case 'Escape':
                t.hasAttribute('open') && (on(t), e.preventDefault(), e.stopPropagation());
                break;
              case 'ArrowDown':
                {
                  n && !t.hasAttribute('open') && t.setAttribute('open', '');
                  const s = Qt(t, !0);
                  s && s.focus(), e.preventDefault();
                }
                break;
              case 'ArrowUp':
                {
                  n && !t.hasAttribute('open') && t.setAttribute('open', '');
                  const s = Qt(t, !1);
                  s && s.focus(), e.preventDefault();
                }
                break;
              case 'n':
                if (Zt && e.ctrlKey) {
                  const n = Qt(t, !0);
                  n && n.focus(), e.preventDefault();
                }
                break;
              case 'p':
                if (Zt && e.ctrlKey) {
                  const n = Qt(t, !1);
                  n && n.focus(), e.preventDefault();
                }
                break;
              case ' ':
              case 'Enter': {
                const n = document.activeElement;
                n &&
                  sn(n) &&
                  n.closest('details') === t &&
                  (e.preventDefault(), e.stopPropagation(), n.click());
              }
            }
        }
        function sn(e) {
          const t = e.getAttribute('role');
          return 'menuitem' === t || 'menuitemcheckbox' === t || 'menuitemradio' === t;
        }
        function on(e) {
          e.removeAttribute('open');
          const t = e.querySelector('summary');
          t && t.focus();
        }
        window.customElements.get('details-menu') ||
          ((window.DetailsMenuElement = DetailsMenuElement),
          window.customElements.define('details-menu', DetailsMenuElement));
        class GEmojiElement extends HTMLElement {
          get image() {
            return this.firstElementChild instanceof HTMLImageElement
              ? this.firstElementChild
              : null;
          }
          connectedCallback() {
            if (
              null === this.image &&
              !(function() {
                const e = /\bWindows NT 6.1\b/.test(navigator.userAgent),
                  t = /\bWindows NT 6.2\b/.test(navigator.userAgent),
                  n = /\bWindows NT 6.3\b/.test(navigator.userAgent),
                  s = /\bFreeBSD\b/.test(navigator.userAgent),
                  o = /\bLinux\b/.test(navigator.userAgent);
                return !(e || t || n || o || s);
              })()
            ) {
              this.textContent = '';
              const e = (function(e) {
                const t = document.createElement('img');
                return (
                  (t.className = 'emoji'),
                  (t.alt = e.getAttribute('alias') || ''),
                  (t.height = 20),
                  (t.width = 20),
                  t
                );
              })(this);
              (e.src = this.getAttribute('fallback-src') || ''), this.appendChild(e);
            }
          }
        }
        window.customElements.get('g-emoji') ||
          ((window.GEmojiElement = GEmojiElement),
          window.customElements.define('g-emoji', GEmojiElement));
        const rn = document.createElement('template');
        rn.innerHTML =
          '\n  <div class="crop-wrapper">\n    <img width="100%" class="crop-image" alt="">\n    <div class="crop-container">\n      <div data-crop-box class="crop-box">\n        <div class="crop-outline"></div>\n        <div data-direction="nw" class="handle nw"></div>\n        <div data-direction="ne" class="handle ne"></div>\n        <div data-direction="sw" class="handle sw"></div>\n        <div data-direction="se" class="handle se"></div>\n      </div>\n    </div>\n  </div>\n';
        const an = new WeakMap(),
          cn = new WeakMap(),
          ln = new WeakMap();
        function un(e) {
          const t = e.currentTarget;
          if (!(t instanceof ImageCropElement)) return;
          const n = ln.get(t) || {},
            s = n.box,
            o = n.image;
          let i = 0,
            r = 0;
          if ('keydown' === e.type)
            'ArrowUp' === e.key
              ? (r = -1)
              : 'ArrowDown' === e.key
              ? (r = 1)
              : 'ArrowLeft' === e.key
              ? (i = -1)
              : 'ArrowRight' === e.key && (i = 1);
          else if (cn.has(t) && e instanceof MouseEvent) {
            const n = cn.get(t);
            if (!n) return;
            (i = e.pageX - n.dragStartX), (r = e.pageY - n.dragStartY);
          }
          if (0 !== i || 0 !== r) {
            const e = Math.min(Math.max(0, s.offsetLeft + i), o.width - s.offsetWidth),
              n = Math.min(Math.max(0, s.offsetTop + r), o.height - s.offsetHeight);
            (s.style.left = `${e}px`),
              (s.style.top = `${n}px`),
              bn(t, { x: e, y: n, width: s.offsetWidth, height: s.offsetHeight });
          }
          e instanceof MouseEvent && cn.set(t, { dragStartX: e.pageX, dragStartY: e.pageY });
        }
        function dn(e) {
          const t = e.target;
          if (!(t instanceof HTMLElement)) return;
          const n = t.closest('image-crop');
          if (!(n instanceof ImageCropElement)) return;
          const s = (ln.get(n) || {}).box,
            o = n.getBoundingClientRect();
          let i, r, a;
          if (e.key) {
            if ('Escape' === e.key) return gn(n);
            if (('-' === e.key && (a = -10), '=' === e.key && (a = 10), !a)) return;
            (i = s.offsetWidth + a),
              (r = s.offsetHeight + a),
              an.set(n, { startX: s.offsetLeft, startY: s.offsetTop });
          } else if (e instanceof MouseEvent) {
            const t = an.get(n);
            if (!t) return;
            (i = e.pageX - t.startX - o.left - window.pageXOffset),
              (r = e.pageY - t.startY - o.top - window.pageYOffset);
          }
          i && r && fn(n, i, r, !(e instanceof KeyboardEvent));
        }
        function mn(e) {
          const t = e.currentTarget;
          if (!(t instanceof HTMLElement)) return;
          const n = t.closest('image-crop');
          if (!(n instanceof ImageCropElement)) return;
          const s = (ln.get(n) || {}).box,
            o = e.target;
          if (o instanceof HTMLElement)
            if (o.hasAttribute('data-direction')) {
              const t = o.getAttribute('data-direction');
              n.addEventListener('mousemove', dn),
                ['nw', 'se'].indexOf(t) >= 0 && n.classList.add('nwse'),
                ['ne', 'sw'].indexOf(t) >= 0 && n.classList.add('nesw'),
                an.set(n, {
                  startX: s.offsetLeft + (['se', 'ne'].indexOf(t) >= 0 ? 0 : s.offsetWidth),
                  startY: s.offsetTop + (['se', 'sw'].indexOf(t) >= 0 ? 0 : s.offsetHeight),
                }),
                dn(e);
            } else n.addEventListener('mousemove', un);
        }
        function fn(e, t, n) {
          let s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            o = Math.max(Math.abs(t), Math.abs(n), 10);
          const i = an.get(e);
          if (!i) return;
          const r = ln.get(e) || {},
            a = r.box,
            c = r.image;
          o = Math.min(
            o,
            n > 0 ? c.height - i.startY : i.startY,
            t > 0 ? c.width - i.startX : i.startX,
          );
          const l = s ? Math.round(Math.max(0, t > 0 ? i.startX : i.startX - o)) : a.offsetLeft,
            u = s ? Math.round(Math.max(0, n > 0 ? i.startY : i.startY - o)) : a.offsetTop;
          (a.style.left = `${l}px`),
            (a.style.top = `${u}px`),
            (a.style.width = `${o}px`),
            (a.style.height = `${o}px`),
            bn(e, { x: l, y: u, width: o, height: o });
        }
        function pn(e) {
          const t = e.currentTarget;
          if (!(t instanceof HTMLElement)) return;
          const n = t.closest('image-crop');
          n instanceof ImageCropElement && ((n.loaded = !0), gn(n));
        }
        function gn(e) {
          const t = (ln.get(e) || {}).image,
            n = Math.round(t.clientWidth > t.clientHeight ? t.clientHeight : t.clientWidth);
          an.set(e, { startX: (t.clientWidth - n) / 2, startY: (t.clientHeight - n) / 2 }),
            fn(e, n, n);
        }
        function hn(e) {
          const t = e.currentTarget;
          t instanceof ImageCropElement &&
            (cn.delete(t),
            t.classList.remove('nwse', 'nesw'),
            t.removeEventListener('mousemove', dn),
            t.removeEventListener('mousemove', un));
        }
        function bn(e, t) {
          const n = (ln.get(e) || {}).image,
            s = n.naturalWidth / n.width;
          for (const o in t) {
            const n = Math.round(t[o] * s);
            t[o] = n;
            const i = e.querySelector(`[data-image-crop-input='${o}']`);
            i instanceof HTMLInputElement && (i.value = n.toString());
          }
          e.dispatchEvent(new CustomEvent('image-crop-change', { bubbles: !0, detail: t }));
        }
        class ImageCropElement extends HTMLElement {
          connectedCallback() {
            if (ln.has(this)) return;
            this.appendChild(document.importNode(rn.content, !0));
            const e = this.querySelector('[data-crop-box]');
            if (!(e instanceof HTMLElement)) return;
            const t = this.querySelector('img');
            t instanceof HTMLImageElement &&
              (ln.set(this, { box: e, image: t }),
              t.addEventListener('load', pn),
              this.addEventListener('mouseleave', hn),
              this.addEventListener('mouseup', hn),
              e.addEventListener('mousedown', mn),
              this.addEventListener('keydown', un),
              this.addEventListener('keydown', dn),
              this.src && (t.src = this.src));
          }
          static get observedAttributes() {
            return ['src'];
          }
          get src() {
            return this.getAttribute('src');
          }
          set src(e) {
            e ? this.setAttribute('src', e) : this.removeAttribute('src');
          }
          get loaded() {
            return this.hasAttribute('loaded');
          }
          set loaded(e) {
            e ? this.setAttribute('loaded', '') : this.removeAttribute('loaded');
          }
          attributeChangedCallback(e, t, n) {
            const s = (ln.get(this) || {}).image;
            'src' === e && ((this.loaded = !1), s && (s.src = n));
          }
        }
        window.customElements.get('image-crop') ||
          ((window.ImageCropElement = ImageCropElement),
          window.customElements.define('image-crop', ImageCropElement));
        const vn = new WeakMap();
        function jn(e, t) {
          setTimeout(function() {
            t.dispatchEvent(new Event(e));
          }, 0);
        }
        function yn(e) {
          return Ln(e).then(
            function(t) {
              const n = e.parentNode;
              n && (e.insertAdjacentHTML('afterend', t), n.removeChild(e));
            },
            function() {
              e.classList.add('is-error');
            },
          );
        }
        function Ln(e) {
          const t = e.src;
          let n = vn.get(e);
          return n && n.src === t
            ? n.data
            : ((n = t ? e.load() : Promise.reject(new Error('missing src'))),
              vn.set(e, { src: t, data: n }),
              n);
        }
        class wn extends HTMLElement {
          constructor() {
            super();
          }
          static get observedAttributes() {
            return ['src'];
          }
          get src() {
            const e = this.getAttribute('src');
            if (e) {
              const t = this.ownerDocument.createElement('a');
              return (t.href = e), t.href;
            }
            return '';
          }
          set src(e) {
            e ? this.setAttribute('src', e) : this.removeAttribute('src');
          }
          get data() {
            return Ln(this);
          }
          attributeChangedCallback(e) {
            'src' === e && this._attached && yn(this);
          }
          connectedCallback() {
            (this._attached = !0), this.src && yn(this);
          }
          disconnectedCallback() {
            this._attached = !1;
          }
          request() {
            const e = this.src;
            if (!e) throw new Error('missing src');
            return new Request(e, {
              method: 'GET',
              credentials: 'same-origin',
              headers: { Accept: 'text/html' },
            });
          }
          load() {
            return Promise.resolve()
              .then(() => (jn('loadstart', this), this.fetch(this.request())))
              .then(e => {
                if (200 !== e.status)
                  throw new Error(
                    `Failed to load resource: the server responded with a status of ${e.status}`,
                  );
                const t = e.headers.get('Content-Type');
                if (!t || !t.match(/^text\/html/))
                  throw new Error(`Failed to load resource: expected text/html but was ${t}`);
                return e;
              })
              .then(e => e.text())
              .then(
                e => (jn('load', this), jn('loadend', this), e),
                e => {
                  throw (jn('error', this), jn('loadend', this), e);
                },
              );
          }
          fetch(e) {
            return fetch(e);
          }
        }
        function En(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        window.customElements.get('include-fragment') ||
          ((window.IncludeFragmentElement = wn),
          window.customElements.define('include-fragment', wn));
        const Tn = new WeakMap();
        class MarkdownButtonElement extends HTMLElement {
          constructor() {
            super();
            const e = () => {
              const e = Tn.get(this);
              e && In(this, e);
            };
            var t;
            this.addEventListener(
              'keydown',
              ((t = e),
              function(e) {
                (' ' !== e.key && 'Enter' !== e.key) || (e.preventDefault(), t(e));
              }),
            ),
              this.addEventListener('click', e);
          }
          connectedCallback() {
            this.hasAttribute('tabindex') || this.setAttribute('tabindex', '0'),
              this.hasAttribute('role') || this.setAttribute('role', 'button');
          }
          click() {
            const e = Tn.get(this);
            e && In(this, e);
          }
        }
        class MarkdownHeaderButtonElement extends MarkdownButtonElement {
          constructor() {
            super(), Tn.set(this, { prefix: '### ' });
          }
        }
        window.customElements.get('md-header') ||
          ((window.MarkdownHeaderButtonElement = MarkdownHeaderButtonElement),
          window.customElements.define('md-header', MarkdownHeaderButtonElement));
        class MarkdownBoldButtonElement extends MarkdownButtonElement {
          constructor() {
            super(), Tn.set(this, { prefix: '**', suffix: '**', trimFirst: !0 });
          }
          connectedCallback() {
            super.connectedCallback(), this.setAttribute('hotkey', 'b');
          }
        }
        window.customElements.get('md-bold') ||
          ((window.MarkdownBoldButtonElement = MarkdownBoldButtonElement),
          window.customElements.define('md-bold', MarkdownBoldButtonElement));
        class MarkdownItalicButtonElement extends MarkdownButtonElement {
          constructor() {
            super(), Tn.set(this, { prefix: '_', suffix: '_', trimFirst: !0 });
          }
          connectedCallback() {
            super.connectedCallback(), this.setAttribute('hotkey', 'i');
          }
        }
        window.customElements.get('md-italic') ||
          ((window.MarkdownItalicButtonElement = MarkdownItalicButtonElement),
          window.customElements.define('md-italic', MarkdownItalicButtonElement));
        class MarkdownQuoteButtonElement extends MarkdownButtonElement {
          constructor() {
            super(), Tn.set(this, { prefix: '> ', multiline: !0, surroundWithNewlines: !0 });
          }
        }
        window.customElements.get('md-quote') ||
          ((window.MarkdownQuoteButtonElement = MarkdownQuoteButtonElement),
          window.customElements.define('md-quote', MarkdownQuoteButtonElement));
        class MarkdownCodeButtonElement extends MarkdownButtonElement {
          constructor() {
            super(),
              Tn.set(this, { prefix: '`', suffix: '`', blockPrefix: '```', blockSuffix: '```' });
          }
        }
        window.customElements.get('md-code') ||
          ((window.MarkdownCodeButtonElement = MarkdownCodeButtonElement),
          window.customElements.define('md-code', MarkdownCodeButtonElement));
        class MarkdownLinkButtonElement extends MarkdownButtonElement {
          constructor() {
            super(),
              Tn.set(this, {
                prefix: '[',
                suffix: '](url)',
                replaceNext: 'url',
                scanFor: 'https?://',
              });
          }
          connectedCallback() {
            super.connectedCallback(), this.setAttribute('hotkey', 'k');
          }
        }
        window.customElements.get('md-link') ||
          ((window.MarkdownLinkButtonElement = MarkdownLinkButtonElement),
          window.customElements.define('md-link', MarkdownLinkButtonElement));
        class MarkdownUnorderedListButtonElement extends MarkdownButtonElement {
          constructor() {
            super(), Tn.set(this, { prefix: '- ', multiline: !0, surroundWithNewlines: !0 });
          }
        }
        window.customElements.get('md-unordered-list') ||
          ((window.MarkdownUnorderedListButtonElement = MarkdownUnorderedListButtonElement),
          window.customElements.define('md-unordered-list', MarkdownUnorderedListButtonElement));
        class MarkdownOrderedListButtonElement extends MarkdownButtonElement {
          constructor() {
            super(), Tn.set(this, { prefix: '1. ', multiline: !0, orderedList: !0 });
          }
        }
        window.customElements.get('md-ordered-list') ||
          ((window.MarkdownOrderedListButtonElement = MarkdownOrderedListButtonElement),
          window.customElements.define('md-ordered-list', MarkdownOrderedListButtonElement));
        class MarkdownTaskListButtonElement extends MarkdownButtonElement {
          constructor() {
            super(), Tn.set(this, { prefix: '- [ ] ', multiline: !0, surroundWithNewlines: !0 });
          }
          connectedCallback() {
            super.connectedCallback(), this.setAttribute('hotkey', 'L');
          }
        }
        window.customElements.get('md-task-list') ||
          ((window.MarkdownTaskListButtonElement = MarkdownTaskListButtonElement),
          window.customElements.define('md-task-list', MarkdownTaskListButtonElement));
        class MarkdownMentionButtonElement extends MarkdownButtonElement {
          constructor() {
            super(), Tn.set(this, { prefix: '@', prefixSpace: !0 });
          }
        }
        window.customElements.get('md-mention') ||
          ((window.MarkdownMentionButtonElement = MarkdownMentionButtonElement),
          window.customElements.define('md-mention', MarkdownMentionButtonElement));
        class MarkdownRefButtonElement extends MarkdownButtonElement {
          constructor() {
            super(), Tn.set(this, { prefix: '#', prefixSpace: !0 });
          }
        }
        window.customElements.get('md-ref') ||
          ((window.MarkdownRefButtonElement = MarkdownRefButtonElement),
          window.customElements.define('md-ref', MarkdownRefButtonElement));
        const kn = navigator.userAgent.match(/Macintosh/) ? 'Meta' : 'Control';
        class MarkdownToolbarElement extends HTMLElement {
          constructor() {
            super();
          }
          connectedCallback() {
            const e = function(e, t) {
              if ((t.metaKey && 'Meta' === kn) || (t.ctrlKey && 'Control' === kn)) {
                const n = e.querySelector(`[hotkey="${t.key}"]`);
                n && (n.click(), t.preventDefault());
              }
            }.bind(null, this);
            this.field && (this.field.addEventListener('keydown', e), Mn.set(this, e));
          }
          disconnectedCallback() {
            const e = Mn.get(this);
            e && this.field && (this.field.removeEventListener('keydown', e), Mn.delete(this));
          }
          get field() {
            const e = this.getAttribute('for');
            if (!e) return;
            const t = document.getElementById(e);
            return t instanceof HTMLTextAreaElement ? t : null;
          }
        }
        const Mn = new WeakMap();
        function An(e) {
          return e.trim().split('\n').length > 1;
        }
        function xn(e, t) {
          return Array(t + 1).join(e);
        }
        function Sn(e, t, n) {
          let s = t;
          const o = n ? /\n/ : /\s/;
          for (; e[s] && !e[s].match(o); ) s++;
          return s;
        }
        window.customElements.get('markdown-toolbar') ||
          ((window.MarkdownToolbarElement = MarkdownToolbarElement),
          window.customElements.define('markdown-toolbar', MarkdownToolbarElement));
        let Hn = null;
        function Cn(e, t) {
          const n = e.value.slice(e.selectionStart, e.selectionEnd);
          let s;
          (s = t.orderedList
            ? (function(e) {
                const t = /^\d+\.\s+/,
                  n = e.selectionStart === e.selectionEnd;
                let s,
                  o,
                  i,
                  r,
                  a = e.value.slice(e.selectionStart, e.selectionEnd),
                  c = a,
                  l = a.split('\n');
                if (n) {
                  const t = e.value.slice(0, e.selectionStart).split(/\n/);
                  (i = e.selectionStart - t[t.length - 1].length),
                    (r = Sn(e.value, e.selectionStart, !0)),
                    (c = e.value.slice(i, r));
                }
                const u = c.split('\n');
                if (u.every(e => t.test(e))) {
                  if (((l = u.map(e => e.replace(t, ''))), (a = l.join('\n')), n && i && r)) {
                    const t = u[0].length - l[0].length;
                    (o = s = e.selectionStart - t), (e.selectionStart = i), (e.selectionEnd = r);
                  }
                } else {
                  (l = (function() {
                    let e, t, n;
                    const s = [];
                    for (n = e = 0, t = l.length; e < t; n = ++e) {
                      const e = l[n];
                      s.push(`${n + 1}. ${e}`);
                    }
                    return s;
                  })()),
                    (a = l.join('\n'));
                  const t = qn(e),
                    i = t.newlinesToAppend,
                    r = t.newlinesToPrepend;
                  (o = e.selectionStart + i.length),
                    (s = o + a.length),
                    n && (o = s),
                    (a = i + a + r);
                }
                return { text: a, selectionStart: o, selectionEnd: s };
              })(e)
            : t.multiline && An(n)
            ? (function(e, t) {
                const n = t.prefix,
                  s = t.suffix,
                  o = t.surroundWithNewlines;
                let i = e.value.slice(e.selectionStart, e.selectionEnd),
                  r = e.selectionStart,
                  a = e.selectionEnd;
                const c = i.split('\n');
                if (c.every(e => e.startsWith(n) && e.endsWith(s)))
                  (i = c.map(e => e.slice(n.length, e.length - s.length)).join('\n')),
                    (a = r + i.length);
                else if (((i = c.map(e => n + e + s).join('\n')), o)) {
                  const t = qn(e),
                    n = t.newlinesToAppend,
                    s = t.newlinesToPrepend;
                  (r += n.length), (a = r + i.length), (i = n + i + s);
                }
                return { text: i, selectionStart: r, selectionEnd: a };
              })(e, t)
            : (function(e, t) {
                let n, s;
                const o = t.prefix,
                  i = t.suffix,
                  r = t.blockPrefix,
                  a = t.blockSuffix,
                  c = t.replaceNext,
                  l = t.prefixSpace,
                  u = t.scanFor,
                  d = t.surroundWithNewlines,
                  m = e.selectionStart,
                  f = e.selectionEnd;
                let p = e.value.slice(e.selectionStart, e.selectionEnd),
                  g = An(p) && r.length > 0 ? `${r}\n` : o,
                  h = An(p) && a.length > 0 ? `\n${a}` : i;
                if (l) {
                  const t = e.value[e.selectionStart - 1];
                  0 === e.selectionStart || null == t || t.match(/\s/) || (g = ` ${g}`);
                }
                p = (function(e, t, n) {
                  let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                  if (e.selectionStart === e.selectionEnd)
                    (e.selectionStart = (function(e, t) {
                      let n = t;
                      for (; e[n] && null != e[n - 1] && !e[n - 1].match(/\s/); ) n--;
                      return n;
                    })(e.value, e.selectionStart)),
                      (e.selectionEnd = Sn(e.value, e.selectionEnd, s));
                  else {
                    const s = e.selectionStart - t.length,
                      o = e.selectionEnd + n.length,
                      i = e.value.slice(s, e.selectionStart) === t,
                      r = e.value.slice(e.selectionEnd, o) === n;
                    i && r && ((e.selectionStart = s), (e.selectionEnd = o));
                  }
                  return e.value.slice(e.selectionStart, e.selectionEnd);
                })(e, g, h, t.multiline);
                let b = e.selectionStart,
                  v = e.selectionEnd;
                const j = c.length > 0 && h.indexOf(c) > -1 && p.length > 0;
                if (d) {
                  const t = qn(e);
                  (n = t.newlinesToAppend), (s = t.newlinesToPrepend), (g = n + o), (h += s);
                }
                if (p.startsWith(g) && p.endsWith(h)) {
                  const e = p.slice(g.length, p.length - h.length);
                  if (m === f) {
                    let t = m - g.length;
                    (t = Math.max(t, b)), (t = Math.min(t, b + e.length)), (b = v = t);
                  } else v = b + e.length;
                  return { text: e, selectionStart: b, selectionEnd: v };
                }
                if (j) {
                  if (u.length > 0 && p.match(u)) {
                    h = h.replace(c, p);
                    const e = g + h;
                    return (b = v = b + g.length), { text: e, selectionStart: b, selectionEnd: v };
                  }
                  {
                    const e = g + p + h;
                    return (
                      (b = b + g.length + p.length + h.indexOf(c)),
                      (v = b + c.length),
                      { text: e, selectionStart: b, selectionEnd: v }
                    );
                  }
                }
                {
                  let e = g + p + h;
                  (b = m + g.length), (v = f + g.length);
                  const n = p.match(/^\s*|\s*$/g);
                  if (t.trimFirst && n) {
                    const t = n[0] || '',
                      s = n[1] || '';
                    (e = t + g + p.trim() + h + s), (b += t.length), (v -= s.length);
                  }
                  return { text: e, selectionStart: b, selectionEnd: v };
                }
              })(e, t)),
            (function(e, t) {
              let n = t.text,
                s = t.selectionStart,
                o = t.selectionEnd;
              const i = e.selectionStart,
                r = e.value.slice(0, i),
                a = e.value.slice(e.selectionEnd);
              if (null === Hn || !0 === Hn) {
                e.contentEditable = 'true';
                try {
                  Hn = document.execCommand('insertText', !1, n);
                } catch (c) {
                  Hn = !1;
                }
                e.contentEditable = 'false';
              }
              if ((Hn && !e.value.slice(0, e.selectionStart).endsWith(n) && (Hn = !1), !Hn)) {
                try {
                  document.execCommand('ms-beginUndoUnit');
                } catch (l) {}
                e.value = r + n + a;
                try {
                  document.execCommand('ms-endUndoUnit');
                } catch (l) {}
                e.dispatchEvent(new CustomEvent('input', { bubbles: !0, cancelable: !0 }));
              }
              null != s && null != o
                ? e.setSelectionRange(s, o)
                : e.setSelectionRange(i, e.selectionEnd);
            })(e, s);
        }
        function qn(e) {
          const t = e.value.slice(0, e.selectionStart),
            n = e.value.slice(e.selectionEnd),
            s = t.match(/\n*$/),
            o = n.match(/^\n*/),
            i = s ? s[0].length : 0,
            r = o ? o[0].length : 0;
          let a, c;
          return (
            t.match(/\S/) && i < 2 && (a = xn('\n', 2 - i)),
            n.match(/\S/) && r < 2 && (c = xn('\n', 2 - r)),
            null == a && (a = ''),
            null == c && (c = ''),
            { newlinesToAppend: a, newlinesToPrepend: c }
          );
        }
        function In(e, t) {
          const n = e.closest('markdown-toolbar');
          if (!(n instanceof MarkdownToolbarElement)) return;
          const s = (function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  s = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                  (s = s.concat(
                    Object.getOwnPropertySymbols(n).filter(function(e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    }),
                  )),
                  s.forEach(function(t) {
                    En(e, t, n[t]);
                  });
              }
              return e;
            })(
              {},
              {
                prefix: '',
                suffix: '',
                blockPrefix: '',
                blockSuffix: '',
                multiline: !1,
                replaceNext: '',
                prefixSpace: !1,
                scanFor: '',
                surroundWithNewlines: !1,
                orderedList: !1,
                trimFirst: !1,
              },
              t,
            ),
            o = n.field;
          o && (o.focus(), Cn(o, s));
        }
        class TabContainerElement extends HTMLElement {
          constructor() {
            super(),
              this.addEventListener('keydown', e => {
                const t = e.target;
                if (!(t instanceof HTMLElement)) return;
                if ('tab' !== t.getAttribute('role') && !t.closest('[role="tablist"]')) return;
                const n = Array.from(this.querySelectorAll('[role="tablist"] [role="tab"]')),
                  s = n.indexOf(n.find(e => e.matches('[aria-selected="true"]')));
                if ('ArrowRight' === e.code) {
                  let e = s + 1;
                  e >= n.length && (e = 0), _n(this, e);
                } else if ('ArrowLeft' === e.code) {
                  let e = s - 1;
                  e < 0 && (e = n.length - 1), _n(this, e);
                } else
                  'Home' === e.code
                    ? (_n(this, 0), e.preventDefault())
                    : 'End' === e.code && (_n(this, n.length - 1), e.preventDefault());
              }),
              this.addEventListener('click', e => {
                const t = Array.from(this.querySelectorAll('[role="tablist"] [role="tab"]'));
                if (!(e.target instanceof Element)) return;
                const n = e.target.closest('[role="tab"]');
                n && n.closest('[role="tablist"]') && _n(this, t.indexOf(n));
              });
          }
        }
        function _n(e, t) {
          const n = e.querySelectorAll('[role="tablist"] [role="tab"]'),
            s = e.querySelectorAll('[role="tabpanel"]'),
            o = n[t],
            i = s[t];
          if (
            !!e.dispatchEvent(
              new CustomEvent('tab-container-change', {
                bubbles: !0,
                cancelable: !0,
                detail: { relatedTarget: i },
              }),
            )
          ) {
            for (const e of n)
              e.setAttribute('aria-selected', 'false'), e.setAttribute('tabindex', '-1');
            for (const e of s) (e.hidden = !0), e.setAttribute('tabindex', '0');
            o.setAttribute('aria-selected', 'true'),
              o.removeAttribute('tabindex'),
              o.focus(),
              (i.hidden = !1),
              e.dispatchEvent(
                new CustomEvent('tab-container-changed', {
                  bubbles: !0,
                  detail: { relatedTarget: i },
                }),
              );
          }
        }
        function $n(e, t) {
          (function(e, t) {
            const n = e.scrollTop,
              s = n + e.clientHeight,
              o = t.offsetTop,
              i = o + t.clientHeight;
            return o >= n && i <= s;
          })(e, t) || (e.scrollTop = t.offsetTop);
        }
        function Dn(e, t) {
          e.addEventListener('compositionstart', Wn),
            e.addEventListener('compositionend', Wn),
            e.addEventListener('keydown', Bn),
            t.addEventListener('click', Pn);
        }
        window.customElements.get('tab-container') ||
          ((window.TabContainerElement = TabContainerElement),
          window.customElements.define('tab-container', TabContainerElement));
        let Rn = !1;
        const Nn = !!navigator.userAgent.match(/Macintosh/);
        function Bn(e) {
          if (e.shiftKey || e.metaKey || e.altKey) return;
          const t = e.currentTarget;
          if (!(t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement)) return;
          if (Rn) return;
          const n = document.getElementById(t.getAttribute('aria-owns') || '');
          if (n)
            switch (e.key) {
              case 'Enter':
              case 'Tab':
                (function(e, t) {
                  const n = t.querySelector('[aria-selected="true"]');
                  return !(!n || ('true' !== n.getAttribute('aria-disabled') && (n.click(), 0)));
                })(0, n) && e.preventDefault();
                break;
              case 'Escape':
                On(t, n);
                break;
              case 'ArrowDown':
                Fn(t, n, 1), e.preventDefault();
                break;
              case 'ArrowUp':
                Fn(t, n, -1), e.preventDefault();
                break;
              case 'n':
                Nn && e.ctrlKey && (Fn(t, n, 1), e.preventDefault());
                break;
              case 'p':
                Nn && e.ctrlKey && (Fn(t, n, -1), e.preventDefault());
            }
        }
        function Pn(e) {
          if (!(e.target instanceof Element)) return;
          const t = e.target.closest('[role="option"]');
          t &&
            'true' !== t.getAttribute('aria-disabled') &&
            (function(e) {
              e.dispatchEvent(new CustomEvent('combobox-commit', { bubbles: !0 }));
            })(t);
        }
        function Fn(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
          const s = t.querySelector('[aria-selected="true"]'),
            o = Array.from(t.querySelectorAll('[role="option"]')),
            i = o.indexOf(s);
          let r = 1 === n ? 0 : o.length - 1;
          if (s && i >= 0) {
            const e = i + n;
            e >= 0 && e < o.length && (r = e);
          }
          const a = o[r];
          if (a)
            for (const c of o)
              a === c
                ? (e.setAttribute('aria-activedescendant', a.id),
                  a.setAttribute('aria-selected', 'true'),
                  $n(t, a))
                : c.setAttribute('aria-selected', 'false');
        }
        function On(e, t) {
          e.removeAttribute('aria-activedescendant');
          for (const n of t.querySelectorAll('[aria-selected="true"]'))
            n.setAttribute('aria-selected', 'false');
        }
        function Wn(e) {
          const t = e.currentTarget;
          if (!(t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement)) return;
          Rn = 'compositionstart' === e.type;
          const n = document.getElementById(t.getAttribute('aria-owns') || '');
          n && On(t, n);
        }
        const Un = /\s|\(|\[/;
        function zn(e, t, n) {
          const s = e.lastIndexOf(t, n - 1);
          if (-1 === s) return;
          if (e.lastIndexOf(' ', n - 1) > s) return;
          const o = e[s - 1];
          return !o || Un.test(o)
            ? { word: e.substring(s + t.length, n), position: s + t.length }
            : void 0;
        }
        const Vn = [
            'position:absolute;',
            'overflow:auto;',
            'word-wrap:break-word;',
            'top:0px;',
            'left:-9999px;',
          ],
          Kn = [
            'box-sizing',
            'font-family',
            'font-size',
            'font-style',
            'font-variant',
            'font-weight',
            'height',
            'letter-spacing',
            'line-height',
            'max-height',
            'min-height',
            'padding-bottom',
            'padding-left',
            'padding-right',
            'padding-top',
            'border-bottom',
            'border-left',
            'border-right',
            'border-top',
            'text-decoration',
            'text-indent',
            'text-transform',
            'width',
            'word-spacing',
          ],
          Yn = new WeakMap();
        function Xn(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.selectionEnd;
          const { mirror: n, marker: s } = (function(e, t) {
              const n = e.nodeName.toLowerCase();
              if ('textarea' !== n && 'input' !== n)
                throw new Error('expected textField to a textarea or input');
              let s = Yn.get(e);
              if (s && s.parentElement === e.parentElement) s.innerHTML = '';
              else {
                (s = document.createElement('div')), Yn.set(e, s);
                const t = window.getComputedStyle(e),
                  o = Vn.slice(0);
                'textarea' === n ? o.push('white-space:pre-wrap;') : o.push('white-space:nowrap;');
                for (let e = 0, n = Kn.length; e < n; e++) {
                  const n = Kn[e];
                  o.push(''.concat(n, ':').concat(t.getPropertyValue(n), ';'));
                }
                s.style.cssText = o.join(' ');
              }
              const o = document.createElement('span');
              let i, r;
              if (
                ((o.style.cssText = 'position: absolute;'),
                (o.innerHTML = '&nbsp;'),
                'number' == typeof t)
              ) {
                let n = e.value.substring(0, t);
                n && (i = document.createTextNode(n)),
                  (n = e.value.substring(t)) && (r = document.createTextNode(n));
              } else {
                const t = e.value;
                t && (i = document.createTextNode(t));
              }
              if (
                (i && s.appendChild(i), s.appendChild(o), r && s.appendChild(r), !s.parentElement)
              ) {
                if (!e.parentElement)
                  throw new Error('textField must have a parentElement to mirror');
                e.parentElement.insertBefore(s, e);
              }
              return (
                (s.scrollTop = e.scrollTop), (s.scrollLeft = e.scrollLeft), { mirror: s, marker: o }
              );
            })(e, t),
            o = n.getBoundingClientRect(),
            i = s.getBoundingClientRect();
          return (
            setTimeout(() => {
              n.remove();
            }, 5e3),
            { top: i.top - o.top, left: i.left - o.left }
          );
        }
        const Jn = new WeakMap();
        class Gn {
          constructor(e, t) {
            (this.expander = e),
              (this.input = t),
              (this.menu = null),
              (this.oninput = this.onInput.bind(this)),
              (this.onpaste = this.onPaste.bind(this)),
              (this.onkeydown = this.onKeydown.bind(this)),
              (this.oncommit = this.onCommit.bind(this)),
              (this.onmousedown = this.onMousedown.bind(this)),
              (this.onblur = this.onBlur.bind(this)),
              (this.interactingWithList = !1),
              t.addEventListener('paste', this.onpaste),
              t.addEventListener('input', this.oninput),
              t.addEventListener('keydown', this.onkeydown),
              t.addEventListener('blur', this.onblur);
          }
          destroy() {
            this.input.removeEventListener('paste', this.onpaste),
              this.input.removeEventListener('input', this.oninput),
              this.input.removeEventListener('keydown', this.onkeydown),
              this.input.removeEventListener('blur', this.onblur);
          }
          activate(e, t) {
            if (this.input !== document.activeElement) return;
            this.deactivate(),
              (this.menu = t),
              t.id || (t.id = 'text-expander-'.concat(Math.floor(1e5 * Math.random()).toString())),
              this.input.setAttribute('aria-owns', t.id),
              this.expander.append(t);
            const { top: n, left: s } = Xn(this.input, e.position);
            (t.style.top = ''.concat(n, 'px')),
              (t.style.left = ''.concat(s, 'px')),
              Dn(this.input, t),
              t.addEventListener('combobox-commit', this.oncommit),
              t.addEventListener('mousedown', this.onmousedown),
              On(this.input, t),
              Fn(this.input, t);
          }
          deactivate() {
            const e = this.menu;
            var t, n;
            e &&
              ((this.menu = null),
              e.removeEventListener('combobox-commit', this.oncommit),
              e.removeEventListener('mousedown', this.onmousedown),
              (t = this.input),
              (n = e),
              t.removeAttribute('aria-activedescendant'),
              t.removeEventListener('compositionstart', Wn),
              t.removeEventListener('compositionend', Wn),
              t.removeEventListener('keydown', Bn),
              n.removeEventListener('click', Pn),
              this.input.removeAttribute('aria-owns'),
              e.remove());
          }
          onCommit(e) {
            let { target: t } = e;
            const n = t;
            if (!(n instanceof HTMLElement)) return;
            const s = this.match;
            if (!s) return;
            const o = this.input.value.substring(0, s.position - s.key.length),
              i = this.input.value.substring(s.position + s.text.length),
              r = { item: n, key: s.key, value: null };
            if (
              !this.expander.dispatchEvent(
                new CustomEvent('text-expander-value', { cancelable: !0, detail: r }),
              )
            )
              return;
            if (!r.value) return;
            const a = ''.concat(r.value, ' ');
            (this.input.value = o + a + i), this.deactivate(), this.input.focus();
            const c = o.length + a.length;
            (this.input.selectionStart = c), (this.input.selectionEnd = c);
          }
          onBlur() {
            this.interactingWithList ? (this.interactingWithList = !1) : this.deactivate();
          }
          onPaste() {
            this.justPasted = !0;
          }
          async onInput() {
            if (this.justPasted) return void (this.justPasted = !1);
            const e = this.findMatch();
            if (e) {
              this.match = e;
              const t = await this.notifyProviders(e);
              if (!this.match) return;
              t ? this.activate(e, t) : this.deactivate();
            } else (this.match = null), this.deactivate();
          }
          findMatch() {
            const e = this.input.selectionEnd,
              t = this.input.value;
            for (const n of this.expander.keys) {
              const s = zn(t, n, e);
              if (s) return { text: s.word, key: n, position: s.position };
            }
          }
          async notifyProviders(e) {
            const t = [];
            if (
              this.expander.dispatchEvent(
                new CustomEvent('text-expander-change', {
                  cancelable: !0,
                  detail: { provide: e => t.push(e), text: e.text, key: e.key },
                }),
              )
            )
              return (await Promise.all(t)).filter(e => e.matched).map(e => e.fragment)[0];
          }
          onMousedown() {
            this.interactingWithList = !0;
          }
          onKeydown(e) {
            'Escape' === e.key &&
              (this.deactivate(), e.stopImmediatePropagation(), e.preventDefault());
          }
        }
        class TextExpanderElement extends HTMLElement {
          get keys() {
            const e = this.getAttribute('keys');
            return e ? e.split(' ') : [];
          }
          connectedCallback() {
            const e = this.querySelector('input[type="text"], textarea');
            if (!(e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement)) return;
            const t = new Gn(this, e);
            Jn.set(this, t);
          }
          disconnectedCallback() {
            const e = Jn.get(this);
            e && (e.destroy(), Jn.delete(this));
          }
        }
        window.customElements.get('text-expander') ||
          ((window.TextExpanderElement = TextExpanderElement),
          window.customElements.define('text-expander', TextExpanderElement));
        const Qn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          Zn = [
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
            'December',
          ];
        function es(e) {
          return '0'.concat(e).slice(-2);
        }
        function ts(e, t) {
          const n = e.getDay(),
            s = e.getDate(),
            o = e.getMonth(),
            i = e.getFullYear(),
            r = e.getHours(),
            a = e.getMinutes(),
            c = e.getSeconds();
          return t.replace(/%([%aAbBcdeHIlmMpPSwyYZz])/g, function(t) {
            let l;
            switch (t[1]) {
              case '%':
                return '%';
              case 'a':
                return Qn[n].slice(0, 3);
              case 'A':
                return Qn[n];
              case 'b':
                return Zn[o].slice(0, 3);
              case 'B':
                return Zn[o];
              case 'c':
                return e.toString();
              case 'd':
                return es(s);
              case 'e':
                return String(s);
              case 'H':
                return es(r);
              case 'I':
                return es(ts(e, '%l'));
              case 'l':
                return 0 === r || 12 === r ? String(12) : String((r + 12) % 12);
              case 'm':
                return es(o + 1);
              case 'M':
                return es(a);
              case 'p':
                return r > 11 ? 'PM' : 'AM';
              case 'P':
                return r > 11 ? 'pm' : 'am';
              case 'S':
                return es(c);
              case 'w':
                return String(n);
              case 'y':
                return es(i % 100);
              case 'Y':
                return String(i);
              case 'Z':
                return (l = e.toString().match(/\((\w+)\)$/)) ? l[1] : '';
              case 'z':
                return (l = e.toString().match(/\w([+-]\d\d\d\d) /)) ? l[1] : '';
            }
            return '';
          });
        }
        function ns(e) {
          let t;
          return function() {
            if (t) return t;
            if ('Intl' in window)
              try {
                return (t = new Intl.DateTimeFormat(void 0, e));
              } catch (n) {
                if (!(n instanceof RangeError)) throw n;
              }
          };
        }
        let ss = null;
        const os = ns({ day: 'numeric', month: 'short' });
        function is() {
          if (null !== ss) return ss;
          const e = os();
          if (e) {
            const t = e.format(new Date(0));
            return (ss = !!t.match(/^\d/));
          }
          return !1;
        }
        let rs = null;
        const as = ns({ day: 'numeric', month: 'short', year: 'numeric' });
        function cs(e) {
          const t = e.closest('[lang]');
          return t instanceof HTMLElement && t.lang ? t.lang : 'default';
        }
        const ls = new WeakMap();
        class ExtendedTimeElement extends HTMLElement {
          static get observedAttributes() {
            return [
              'datetime',
              'day',
              'format',
              'lang',
              'hour',
              'minute',
              'month',
              'second',
              'title',
              'weekday',
              'year',
            ];
          }
          connectedCallback() {
            const e = this.getFormattedTitle();
            e && !this.hasAttribute('title') && this.setAttribute('title', e);
            const t = this.getFormattedDate();
            t && (this.textContent = t);
          }
          attributeChangedCallback(e, t, n) {
            if ('datetime' === e) {
              const e = Date.parse(n);
              isNaN(e) ? ls.delete(this) : ls.set(this, new Date(e));
            }
            const s = this.getFormattedTitle();
            s && !this.hasAttribute('title') && this.setAttribute('title', s);
            const o = this.getFormattedDate();
            o && (this.textContent = o);
          }
          get date() {
            return ls.get(this);
          }
          getFormattedTitle() {
            const e = this.date;
            if (!e) return;
            const t = us();
            if (t) return t.format(e);
            try {
              return e.toLocaleString();
            } catch (n) {
              if (n instanceof RangeError) return e.toString();
              throw n;
            }
          }
          getFormattedDate() {}
        }
        const us = ns({
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            timeZoneName: 'short',
          }),
          ds = new WeakMap();
        class LocalTimeElement extends ExtendedTimeElement {
          attributeChangedCallback(e, t, n) {
            ('hour' !== e && 'minute' !== e && 'second' !== e && 'time-zone-name' !== e) ||
              ds.delete(this),
              super.attributeChangedCallback(e, t, n);
          }
          getFormattedDate() {
            const e = this.date;
            if (!e) return;
            const t =
                (function(e, t) {
                  const n = {
                    weekday: { short: '%a', long: '%A' },
                    day: { numeric: '%e', '2-digit': '%d' },
                    month: { short: '%b', long: '%B' },
                    year: { numeric: '%Y', '2-digit': '%y' },
                  };
                  let s = is() ? 'weekday day month year' : 'weekday month day, year';
                  for (const o in n) {
                    const t = n[o][e.getAttribute(o)];
                    s = s.replace(o, t || '');
                  }
                  return (
                    (s = s.replace(/(\s,)|(,\s$)/, '')),
                    ts(t, s)
                      .replace(/\s+/, ' ')
                      .trim()
                  );
                })(this, e) || '',
              n =
                (function(e, t) {
                  const n = {},
                    s = e.getAttribute('hour');
                  ('numeric' !== s && '2-digit' !== s) || (n.hour = s);
                  const o = e.getAttribute('minute');
                  ('numeric' !== o && '2-digit' !== o) || (n.minute = o);
                  const i = e.getAttribute('second');
                  ('numeric' !== i && '2-digit' !== i) || (n.second = i);
                  const r = e.getAttribute('time-zone-name');
                  ('short' !== r && 'long' !== r) || (n.timeZoneName = r);
                  if (0 === Object.keys(n).length) return;
                  let a = ds.get(e);
                  a || ((a = ns(n)), ds.set(e, a));
                  const c = a();
                  if (c) return c.format(t);
                  {
                    const e = n.second ? '%H:%M:%S' : '%H:%M';
                    return ts(t, e);
                  }
                })(this, e) || '';
            return ''
              .concat(t, ' ')
              .concat(n)
              .trim();
          }
        }
        window.customElements.get('local-time') ||
          ((window.LocalTimeElement = LocalTimeElement),
          window.customElements.define('local-time', LocalTimeElement));
        class ms {
          constructor(e, t) {
            (this.date = e), (this.locale = t);
          }
          toString() {
            const e = this.timeElapsed();
            if (e) return e;
            {
              const e = this.timeAhead();
              return e || 'on '.concat(this.formatDate());
            }
          }
          timeElapsed() {
            const e = new Date().getTime() - this.date.getTime(),
              t = Math.round(e / 1e3),
              n = Math.round(t / 60),
              s = Math.round(n / 60),
              o = Math.round(s / 24);
            return e >= 0 && o < 30 ? this.timeAgoFromMs(e) : null;
          }
          timeAhead() {
            const e = this.date.getTime() - new Date().getTime(),
              t = Math.round(e / 1e3),
              n = Math.round(t / 60),
              s = Math.round(n / 60),
              o = Math.round(s / 24);
            return e >= 0 && o < 30 ? this.timeUntil() : null;
          }
          timeAgo() {
            const e = new Date().getTime() - this.date.getTime();
            return this.timeAgoFromMs(e);
          }
          timeAgoFromMs(e) {
            const t = Math.round(e / 1e3),
              n = Math.round(t / 60),
              s = Math.round(n / 60),
              o = Math.round(s / 24),
              i = Math.round(o / 30),
              r = Math.round(i / 12);
            return e < 0
              ? fs(this.locale, 0, 'second')
              : t < 10
              ? fs(this.locale, 0, 'second')
              : t < 45
              ? fs(this.locale, -t, 'second')
              : t < 90
              ? fs(this.locale, -n, 'minute')
              : n < 45
              ? fs(this.locale, -n, 'minute')
              : n < 90
              ? fs(this.locale, -s, 'hour')
              : s < 24
              ? fs(this.locale, -s, 'hour')
              : s < 36
              ? fs(this.locale, -o, 'day')
              : o < 30
              ? fs(this.locale, -o, 'day')
              : i < 12
              ? fs(this.locale, -i, 'month')
              : fs(this.locale, -r, 'year');
          }
          microTimeAgo() {
            const e = new Date().getTime() - this.date.getTime(),
              t = Math.round(e / 1e3),
              n = Math.round(t / 60),
              s = Math.round(n / 60),
              o = Math.round(s / 24),
              i = Math.round(o / 30),
              r = Math.round(i / 12);
            return n < 1
              ? '1m'
              : n < 60
              ? ''.concat(n, 'm')
              : s < 24
              ? ''.concat(s, 'h')
              : o < 365
              ? ''.concat(o, 'd')
              : ''.concat(r, 'y');
          }
          timeUntil() {
            const e = this.date.getTime() - new Date().getTime();
            return this.timeUntilFromMs(e);
          }
          timeUntilFromMs(e) {
            const t = Math.round(e / 1e3),
              n = Math.round(t / 60),
              s = Math.round(n / 60),
              o = Math.round(s / 24),
              i = Math.round(o / 30),
              r = Math.round(i / 12);
            return i >= 18
              ? fs(this.locale, r, 'year')
              : i >= 12
              ? fs(this.locale, r, 'year')
              : o >= 45
              ? fs(this.locale, i, 'month')
              : o >= 30
              ? fs(this.locale, i, 'month')
              : s >= 36
              ? fs(this.locale, o, 'day')
              : s >= 24
              ? fs(this.locale, o, 'day')
              : n >= 90
              ? fs(this.locale, s, 'hour')
              : n >= 45
              ? fs(this.locale, s, 'hour')
              : t >= 90
              ? fs(this.locale, n, 'minute')
              : t >= 45
              ? fs(this.locale, n, 'minute')
              : fs(this.locale, t >= 10 ? t : 0, 'second');
          }
          microTimeUntil() {
            const e = this.date.getTime() - new Date().getTime(),
              t = Math.round(e / 1e3),
              n = Math.round(t / 60),
              s = Math.round(n / 60),
              o = Math.round(s / 24),
              i = Math.round(o / 30),
              r = Math.round(i / 12);
            return o >= 365
              ? ''.concat(r, 'y')
              : s >= 24
              ? ''.concat(o, 'd')
              : n >= 60
              ? ''.concat(s, 'h')
              : n > 1
              ? ''.concat(n, 'm')
              : '1m';
          }
          formatDate() {
            let e = is() ? '%e %b' : '%b %e';
            var t;
            return (
              (t = this.date),
              new Date().getUTCFullYear() !== t.getUTCFullYear() &&
                (e += (function() {
                  if (null !== rs) return rs;
                  const e = as();
                  if (e) {
                    const t = e.format(new Date(0));
                    return (rs = !!t.match(/\d,/));
                  }
                  return !0;
                })()
                  ? ', %Y'
                  : ' %Y'),
              ts(this.date, e)
            );
          }
          formatTime() {
            const e = ps();
            return e ? e.format(this.date) : ts(this.date, '%l:%M%P');
          }
        }
        function fs(e, t, n) {
          const s = (function(e, t) {
            if ('Intl' in window && 'RelativeTimeFormat' in window.Intl)
              try {
                return new Intl.RelativeTimeFormat(e, t);
              } catch (n) {
                if (!(n instanceof RangeError)) throw n;
              }
          })(e, { numeric: 'auto' });
          return s
            ? s.format(t, n)
            : (function(e, t) {
                if (0 === e)
                  switch (t) {
                    case 'year':
                    case 'quarter':
                    case 'month':
                    case 'week':
                      return 'this '.concat(t);
                    case 'day':
                      return 'today';
                    case 'hour':
                    case 'minute':
                      return 'in 0 '.concat(t, 's');
                    case 'second':
                      return 'now';
                  }
                else if (1 === e)
                  switch (t) {
                    case 'year':
                    case 'quarter':
                    case 'month':
                    case 'week':
                      return 'next '.concat(t);
                    case 'day':
                      return 'tomorrow';
                    case 'hour':
                    case 'minute':
                    case 'second':
                      return 'in 1 '.concat(t);
                  }
                else if (-1 === e)
                  switch (t) {
                    case 'year':
                    case 'quarter':
                    case 'month':
                    case 'week':
                      return 'last '.concat(t);
                    case 'day':
                      return 'yesterday';
                    case 'hour':
                    case 'minute':
                    case 'second':
                      return '1 '.concat(t, ' ago');
                  }
                else if (e > 1)
                  switch (t) {
                    case 'year':
                    case 'quarter':
                    case 'month':
                    case 'week':
                    case 'day':
                    case 'hour':
                    case 'minute':
                    case 'second':
                      return 'in '.concat(e, ' ').concat(t, 's');
                  }
                else if (e < -1)
                  switch (t) {
                    case 'year':
                    case 'quarter':
                    case 'month':
                    case 'week':
                    case 'day':
                    case 'hour':
                    case 'minute':
                    case 'second':
                      return ''.concat(-e, ' ').concat(t, 's ago');
                  }
                throw new RangeError("Invalid unit argument for format() '".concat(t, "'"));
              })(t, n);
        }
        const ps = ns({ hour: 'numeric', minute: '2-digit' });
        class RelativeTimeElement extends ExtendedTimeElement {
          getFormattedDate() {
            const e = this.date;
            if (e) return new ms(e, cs(this)).toString();
          }
          connectedCallback() {
            gs.push(this), hs || (bs(), (hs = setInterval(bs, 6e4))), super.connectedCallback();
          }
          disconnectedCallback() {
            const e = gs.indexOf(this);
            -1 !== e && gs.splice(e, 1), gs.length || (hs && (clearInterval(hs), (hs = null)));
          }
        }
        const gs = [];
        let hs;
        function bs() {
          let e, t, n;
          for (t = 0, n = gs.length; t < n; t++)
            (e = gs[t]).textContent = e.getFormattedDate() || '';
        }
        window.customElements.get('relative-time') ||
          ((window.RelativeTimeElement = RelativeTimeElement),
          window.customElements.define('relative-time', RelativeTimeElement));
        class TimeAgoElement extends RelativeTimeElement {
          getFormattedDate() {
            const e = this.getAttribute('format'),
              t = this.date;
            if (t)
              return 'micro' === e
                ? new ms(t, cs(this)).microTimeAgo()
                : new ms(t, cs(this)).timeAgo();
          }
        }
        window.customElements.get('time-ago') ||
          ((window.TimeAgoElement = TimeAgoElement),
          window.customElements.define('time-ago', TimeAgoElement));
        class TimeUntilElement extends RelativeTimeElement {
          getFormattedDate() {
            const e = this.getAttribute('format'),
              t = this.date;
            if (t)
              return 'micro' === e
                ? new ms(t, cs(this)).microTimeUntil()
                : new ms(t, cs(this)).timeUntil();
          }
        }
        window.customElements.get('time-until') ||
          ((window.TimeUntilElement = TimeUntilElement),
          window.customElements.define('time-until', TimeUntilElement)),
          document.addEventListener(
            'click',
            function(e) {
              if (!(e.target instanceof Element)) return;
              const t = e.target.closest(
                'a[data-confirm], input[type=submit][data-confirm], input[type=checkbox][data-confirm], button[data-confirm]',
              );
              if (!t) return;
              const n = t.getAttribute('data-confirm');
              n &&
                ((t instanceof HTMLInputElement &&
                  t.hasAttribute('data-confirm-checked') &&
                  !t.checked) ||
                  confirm(n) ||
                  (e.stopImmediatePropagation(), e.preventDefault()));
            },
            !0,
          ),
          i('[data-hotkey]', {
            add(e) {
              r(e);
            },
            remove(e) {
              a(e);
            },
          }),
          (IncludeFragmentElement.prototype.fetch = c);
        class PollIncludeFragmentElement extends IncludeFragmentElement {
          async fetch(e, t = 1e3) {
            const n = await super.fetch(e);
            return 202 === n.status
              ? (await new Promise(e => setTimeout(e, t)), this.fetch(e, 1.5 * t))
              : n;
          }
        }
        window.customElements.get('poll-include-fragment') ||
          ((window.PollIncludeFragmentElement = PollIncludeFragmentElement),
          window.customElements.define('poll-include-fragment', PollIncludeFragmentElement));
        var vs = -1 / 0,
          js = 1 / 0,
          ys = -0.005,
          Ls = -0.005,
          ws = -0.01,
          Es = 1,
          Ts = 0.9,
          ks = 0.8,
          Ms = 0.7,
          As = 0.6;
        function xs(e) {
          return e.toUpperCase() === e;
        }
        function Ss(e, t, n, s) {
          for (
            var o = e.length,
              i = t.length,
              r = e.toLowerCase(),
              a = t.toLowerCase(),
              c = (function(e) {
                for (var t, n = e.length, s = new Array(n), o = '/', i = 0; i < n; i++) {
                  var r = e[i];
                  '/' === o
                    ? (s[i] = Ts)
                    : '-' === o || '_' === o || ' ' === o
                    ? (s[i] = ks)
                    : '.' === o
                    ? (s[i] = As)
                    : (t = o).toLowerCase() === t && xs(r)
                    ? (s[i] = Ms)
                    : (s[i] = 0),
                    (o = r);
                }
                return s;
              })(t),
              l = 0;
            l < o;
            l++
          ) {
            (n[l] = new Array(i)), (s[l] = new Array(i));
            for (var u = vs, d = l === o - 1 ? Ls : ws, m = 0; m < i; m++)
              if (r[l] === a[m]) {
                var f = vs;
                l
                  ? m && (f = Math.max(s[l - 1][m - 1] + c[m], n[l - 1][m - 1] + Es))
                  : (f = m * ys + c[m]),
                  (n[l][m] = f),
                  (s[l][m] = u = Math.max(f, u + d));
              } else (n[l][m] = vs), (s[l][m] = u += d);
          }
        }
        var Hs = {
          SCORE_MIN: vs,
          SCORE_MAX: js,
          SCORE_GAP_LEADING: ys,
          SCORE_GAP_TRAILING: Ls,
          SCORE_GAP_INNER: ws,
          SCORE_MATCH_CONSECUTIVE: Es,
          SCORE_MATCH_SLASH: Ts,
          SCORE_MATCH_WORD: ks,
          SCORE_MATCH_CAPITAL: Ms,
          SCORE_MATCH_DOT: As,
          score: function(e, t) {
            var n = e.length,
              s = t.length;
            if (!n || !s) return vs;
            if (n === s) return js;
            if (s > 1024) return vs;
            var o = new Array(n),
              i = new Array(n);
            return Ss(e, t, o, i), i[n - 1][s - 1];
          },
          positions: function(e, t) {
            var n = e.length,
              s = t.length,
              o = new Array(n);
            if (!n || !s) return o;
            if (n === s) {
              for (var i = 0; i < n; i++) o[i] = i;
              return o;
            }
            if (s > 1024) return o;
            var r = new Array(n),
              a = new Array(n);
            Ss(e, t, r, a);
            for (var c = !1, l = ((i = n - 1), s - 1); i >= 0; i--)
              for (; l >= 0; l--)
                if (r[i][l] !== vs && (c || r[i][l] === a[i][l])) {
                  (c = i && l && a[i][l] === r[i - 1][l - 1] + Es), (o[i] = l--);
                  break;
                }
            return o;
          },
          hasMatch: function(e, t) {
            (e = e.toLowerCase()), (t = t.toLowerCase());
            for (var n = e.length, s = 0, o = 0; s < n; s += 1)
              if (0 === (o = t.indexOf(e[s], o) + 1)) return !1;
            return !0;
          },
        };
        const Cs = Hs.hasMatch,
          qs = (e, t, n) => {
            if (!Cs(e, t)) return -1 / 0;
            const s = Hs.score(e, t);
            return s < n ? -1 / 0 : s;
          },
          Is = (e, t, n) => {
            e.innerHTML = '';
            let s = 0;
            for (const o of Hs.positions(t, n)) {
              '' !== n.slice(s, o) && e.appendChild(document.createTextNode(n.slice(s, o))),
                (s = o + 1);
              const t = document.createElement('mark');
              (t.textContent = n[o]), e.appendChild(t);
            }
            e.appendChild(document.createTextNode(n.slice(s)));
          },
          _s = new WeakMap(),
          $s = new WeakMap(),
          Ds = new WeakMap(),
          Rs = e => {
            if (!Ds.has(e) && e instanceof HTMLElement) {
              const t = (e.getAttribute('data-value') || e.textContent || '').trim();
              return Ds.set(e, t), t;
            }
            return Ds.get(e) || '';
          };
        class Ns extends HTMLElement {
          connectedCallback() {
            const e = this.querySelector('ul');
            if (!e) return;
            const t = new Set(e.querySelectorAll('li')),
              n = this.querySelector('input');
            n instanceof HTMLInputElement &&
              n.addEventListener('input', () => {
                this.value = n.value;
              });
            const s = new MutationObserver(e => {
              let n = !1;
              for (const s of e)
                if ('childList' === s.type && s.addedNodes.length)
                  for (const e of s.addedNodes)
                    if (e instanceof HTMLLIElement && !t.has(e)) {
                      const s = Rs(e);
                      (n = n || Cs(this.value, s)), t.add(e);
                    }
              n && this.sort();
            });
            s.observe(e, { childList: !0 });
            const o = { handler: s, items: t, lazyItems: new Map(), timer: null };
            $s.set(this, o);
          }
          disconnectedCallback() {
            const e = $s.get(this);
            e && (e.handler.disconnect(), $s.delete(this));
          }
          addLazyItems(e, t) {
            const n = $s.get(this);
            if (!n) return;
            const { lazyItems: s } = n,
              { value: o } = this;
            let i = !1;
            for (const r of e) s.set(r, t), (i = i || (o && Cs(o, r)));
            i && this.sort();
          }
          sort() {
            const e = _s.get(this);
            e && (e.aborted = !0);
            const t = { aborted: !1 };
            _s.set(this, t);
            const { minScore: n, markSelector: s, maxMatches: o, value: i } = this,
              r = $s.get(this);
            if (!r) return;
            if (
              !this.dispatchEvent(
                new CustomEvent('fuzzy-list-will-sort', { cancelable: !0, detail: i }),
              )
            )
              return;
            const { items: a, lazyItems: c } = r,
              l = this.hasAttribute('mark-selector'),
              u = this.querySelector('ul');
            if (!u) return;
            const d = [];
            if (i) {
              for (const e of a) {
                const t = Rs(e),
                  s = qs(i, t, n);
                s !== -1 / 0 && d.push({ item: e, score: s });
              }
              for (const [e, t] of c) {
                const s = qs(i, e, n);
                s !== -1 / 0 && d.push({ text: e, render: t, score: s });
              }
              d.sort((e, t) => t.score - e.score).splice(o);
            } else {
              let e = d.length;
              for (const t of a) {
                if (e >= o) break;
                d.push({ item: t, score: 1 }), (e += 1);
              }
              for (const [t, n] of c) {
                if (e >= o) break;
                d.push({ text: t, render: n, score: 1 }), (e += 1);
              }
            }
            requestAnimationFrame(() => {
              if (t.aborted) return;
              const e = u.querySelector('input[type="radio"]:checked');
              u.innerHTML = '';
              let n = 0;
              const o = () => {
                if (t.aborted) return;
                const r = Math.min(d.length, n + 100),
                  m = document.createDocumentFragment();
                for (let e = n; e < r; e += 1) {
                  const t = d[e];
                  let n = null;
                  if (t.render && t.text) {
                    const { render: e, text: s } = t;
                    (n = e(s)), a.add(n), Ds.set(n, s), c.delete(s);
                  } else t.item && (n = t.item);
                  n instanceof HTMLElement &&
                    (l && Is((s && n.querySelector(s)) || n, l ? i : '', Rs(n)), m.appendChild(n));
                }
                n = r;
                let f = !1;
                if (e instanceof HTMLInputElement)
                  for (const t of m.querySelectorAll('input[type="radio"]:checked'))
                    t instanceof HTMLInputElement &&
                      t.value !== e.value &&
                      ((t.checked = !1), (f = !0));
                if (
                  (u.appendChild(m),
                  e && f && e.dispatchEvent(new Event('change', { bubbles: !0 })),
                  r < d.length)
                )
                  requestAnimationFrame(o);
                else {
                  u.hidden = 0 === d.length;
                  const e = this.querySelector('[data-fuzzy-list-show-on-empty]');
                  e && (e.hidden = d.length > 0),
                    this.dispatchEvent(new CustomEvent('fuzzy-list-sorted', { detail: d.length }));
                }
              };
              o();
            });
          }
          get value() {
            return this.getAttribute('value') || '';
          }
          set value(e) {
            this.setAttribute('value', e);
          }
          get markSelector() {
            return this.getAttribute('mark-selector') || '';
          }
          set markSelector(e) {
            e
              ? this.setAttribute('mark-selector', !0 === e ? '' : e)
              : this.removeAttribute('mark-selector');
          }
          get minScore() {
            return Number(this.getAttribute('min-score') || 0);
          }
          set minScore(e) {
            Number.isNaN(e) || this.setAttribute('min-score', String(e));
          }
          get maxMatches() {
            return Number(this.getAttribute('max-matches') || 1 / 0);
          }
          set maxMatches(e) {
            Number.isNaN(e) || this.setAttribute('max-matches', String(e));
          }
          static get observedAttributes() {
            return ['value', 'mark-selector', 'min-score', 'max-matches'];
          }
          attributeChangedCallback(e, t, n) {
            if (t === n) return;
            const s = $s.get(this);
            s && (s.timer && clearTimeout(s.timer), (s.timer = setTimeout(() => this.sort(), 100)));
          }
        }
        function Bs() {
          const e = f(document, 'input[type=text].js-advanced-search-prefix', HTMLInputElement),
            t = f(document, 'select.js-advanced-search-prefix', HTMLSelectElement),
            n = f(document, '.js-advanced-search-prefix:checked', HTMLInputElement),
            s = [...Fs(e), ...Fs(t), ...Fs(n)],
            o = s.reduce((e, t) => (t.value && t.type && e[t.type]++, e), {
              Repositories: 0,
              Users: 0,
              Code: 0,
              Issues: 0,
            }),
            i = s.reduce(
              (e, t) =>
                `${e} ${(function({ prefix: e, value: t }) {
                  return '' === e ? '' : t ? `${e}${t}` : '';
                })(t)}`.trim(),
              '',
            ),
            r = g(document, '.js-advanced-search-input', HTMLInputElement).value;
          (g(document, '.js-type-value', HTMLInputElement).value = (function(e) {
            let t = new URLSearchParams(window.location.search).get('type') || 'Repositories',
              n = 0;
            for (const s in e) e[s] > n && ((n = e[s]), (t = s));
            return t;
          })(o)),
            (g(document, '.js-search-query', HTMLInputElement).value = `${r} ${i}`.trim());
          const a = g(document, '.js-advanced-query');
          (a.innerHTML = ''), (a.textContent = i);
          const c = document.createElement('span');
          (c.textContent = r.trim()), a.prepend(c, ' ');
        }
        function Ps(e) {
          return -1 !== e.search(/\s/g) ? `"${e}"` : e;
        }
        function Fs(e) {
          return e
            .map(e => {
              const t = e.value.trim(),
                n = p(e, 'data-search-prefix'),
                s = e.getAttribute('data-search-type');
              return '' === n
                ? { prefix: n, value: t, type: s }
                : -1 !== t.search(/,/g) && 'location' !== n
                ? t.split(/,/).map(e => ({ prefix: n, value: Ps(e.trim()), type: s }))
                : { prefix: n, value: Ps(t), type: s };
            })
            .reduce((e, t) => e.concat(t), []);
        }
        function Os() {
          return f(document, '.js-selected-repository-field', HTMLInputElement);
        }
        function Ws() {
          const e = g(document, '#repository-menu-list'),
            t = Array.from(Os()).map(e => e.value);
          let n = !1;
          for (const o of f(e, '[role=menuitem]', HTMLButtonElement)) {
            const e = t.includes(o.value);
            n || e || (n = !0), (o.hidden = e);
          }
          const s = e.querySelector('.js-no-repository-found');
          s && (s.hidden = n);
        }
        function Us() {
          const e =
            !g(document, '.js-select-repositories-radio', HTMLInputElement).checked ||
            Os().length > 0;
          g(document, '.js-integrations-install-form-submit', HTMLButtonElement).disabled = !e;
        }
        function zs() {
          const e = Os().length,
            t = g(document, '.js-integration-total-repos');
          (t.hidden = 0 === e), (t.textContent = `Selected ${e} ${b(e, 'repository')}.`);
        }
        function Vs(e, t) {
          const n = e.querySelector('.js-app-logo-with-bgcolor');
          n && (n.style.backgroundColor = `#${t}`);
        }
        function Ks(e, t) {
          const n = e.nextElementSibling;
          if (n)
            return (
              h(
                n instanceof HTMLElement,
                'app/assets/modules/github/find-next-element-sibling.js:8',
              ),
              n.classList.contains(t) ? n : Ks(n, t)
            );
        }
        window.customElements.get('fuzzy-list') ||
          ((window.FuzzyListElement = Ns), window.customElements.define('fuzzy-list', Ns)),
          l('.js-advanced-search-prefix', function() {
            Bs();
          }),
          u('change', '.js-advanced-search-prefix', Bs),
          d('.js-advanced-search-input', function(e) {
            const t = m(e, '.js-advanced-search-label');
            t.classList.add('focus'),
              e.addEventListener('blur', () => t.classList.remove('focus'), { once: !0 });
          }),
          i('.js-advanced-search-input', function() {
            Bs();
          }),
          i('.js-apps-install-select-repositories-container remote-input', e => {
            e.addEventListener('loadend', Ws);
          }),
          u(
            'details-menu-selected',
            '.js-apps-install-select-repositories-menu',
            function(e) {
              h(
                e instanceof CustomEvent,
                'app/assets/modules/github/apps/installation-repo-selection.js:65',
              );
              const t = e.detail.relatedTarget,
                n = g(document, '.js-integrations-install-repo-picked'),
                s = g(t, 'template', HTMLTemplateElement).content.cloneNode(!0);
              n.prepend(s),
                (g(document, '.js-min-repository-error').hidden = !0),
                (g(document, '.js-max-repository-warning').hidden = !(function() {
                  const e = +g(
                    document,
                    '.js-integrations-install-form',
                    HTMLFormElement,
                  ).getAttribute('data-max-repos');
                  return e > 0 && Os().length >= e;
                })()),
                zs(),
                Us(),
                Ws();
            },
            { capture: !0 },
          ),
          u('change', '.js-integrations-install-form', Us),
          u('click', '.js-repository-picker-remove', function(e) {
            m(e.currentTarget, '.js-repository-picker-result').remove(),
              (g(document, '.js-min-repository-error').hidden = Os().length > 0),
              zs(),
              Us(),
              Ws();
          }),
          u('change', '.js-installation-repositories-radio', function() {
            const e = g(document, '.js-select-repositories-radio', HTMLInputElement);
            g(document, '.js-integrations-install-repo-selection').classList.toggle(
              'has-removed-contents',
              !e.checked,
            );
          }),
          v('.js-app-bgcolor-form', async function(e, t) {
            const n = e.querySelector('.js-app-bgcolor-save-notice');
            if (!n) return;
            let s;
            try {
              s = await t.html();
            } catch (o) {
              n.classList.remove('visible');
            }
            s &&
              (n.classList.add('visible'), setTimeout(() => n.classList.remove('visible'), 1500));
          }),
          l('.js-app-bgcolor-input', function(e) {
            const t = e.target;
            h(t instanceof HTMLInputElement, 'app/assets/modules/github/apps.js:46');
            const n = m(t, 'form', HTMLFormElement),
              s = t.value.replace(/^#/, '');
            if (s.length < 1) return t.classList.remove('text-red'), void Vs(n, t.defaultValue);
            t.checkValidity()
              ? (t.classList.remove('text-red'),
                Vs(n, s),
                n.classList.contains('js-app-bgcolor-form') &&
                  j(
                    () =>
                      (function(e, t) {
                        t.checkValidity() && y(e);
                      })(n, t),
                    400,
                  )())
              : (t.classList.add('text-red'), Vs(n, t.defaultValue));
          }),
          u('click', '.js-banner .js-next', function(e) {
            const t = m(e.currentTarget, '.js-banner'),
              n = g(t, '.js-dismiss'),
              s = g(t, '.js-next', HTMLButtonElement),
              o = g(t, '.js-page.d-block'),
              i = Ks(o, 'js-page');
            h(i, 'app/assets/modules/github/banner.js:43'),
              o.classList.remove('d-block'),
              o.classList.add('d-none'),
              i.classList.remove('d-none'),
              i.classList.add('d-block'),
              Ks(i, 'js-page') || (s.classList.add('d-none'), n.classList.remove('d-none'));
          }),
          i('.js-banner', function(e) {
            const t = g(e, '.js-dismiss');
            if (e.querySelectorAll('.js-page').length > 0) {
              const n = g(e, '.js-next', HTMLButtonElement),
                s = g(e, '.js-page.d-block', HTMLDivElement);
              s && !Ks(s, 'js-page') ? t.classList.remove('d-none') : n.classList.remove('d-none');
            } else t.classList.remove('d-none');
          }),
          u('deprecatedAjaxSend', '[data-remote]', function(e) {
            e.currentTarget === e.target &&
              (e.defaultPrevented || e.currentTarget.classList.add('loading'));
          }),
          u('deprecatedAjaxComplete', '[data-remote]', function(e) {
            e.currentTarget === e.target && e.currentTarget.classList.remove('loading');
          }),
          v('form.js-ajax-pagination, .js-ajax-pagination form', async function(e, t) {
            const n = m(e, '.js-ajax-pagination');
            let s;
            try {
              s = await t.html();
            } catch (o) {
              if (o.response && 404 === o.response.status) return void n.remove();
              throw o;
            }
            n.replaceWith(s.html), L(e, 'page:loaded');
          });
        const Ys = [
          'input[pattern]',
          'input[required]',
          'textarea[required]',
          'input[data-required-change]',
          'textarea[data-required-change]',
        ].join(',');
        d(Ys, e => {
          h(
            e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement,
            'app/assets/modules/github/behaviors/html-validation.js:19',
          );
          let t = e.checkValidity();
          function n() {
            const n = e.checkValidity();
            n !== t && e.form && Js(e.form), (t = n);
          }
          e.addEventListener('input', n),
            e.addEventListener('blur', function t() {
              e.removeEventListener('input', n), e.removeEventListener('blur', t);
            });
        });
        const Xs = new WeakMap();
        function Js(e) {
          const t = e.checkValidity();
          for (const n of f(e, 'button[data-disable-invalid]', HTMLButtonElement)) n.disabled = !t;
        }
        i('button[data-disable-invalid]', {
          constructor: HTMLButtonElement,
          initialize(e) {
            const t = e.form;
            t &&
              (!(function(e) {
                Xs.get(e) || (e.addEventListener('change', () => Js(e)), Xs.set(e, !0));
              })(t),
              (e.disabled = !t.checkValidity()));
          },
        }),
          i('input[data-required-change], textarea[data-required-change]', function(e) {
            h(
              e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement,
              'app/assets/modules/github/behaviors/html-validation.js:66',
            );
            const t = 'radio' === e.type && e.form ? w(e.form, e.name, RadioNodeList).value : null;
            function n(n) {
              const s = e.form;
              if (n && 'radio' === e.type && s && t)
                for (const o of w(s, e.name, RadioNodeList))
                  o.setCustomValidity(e.value === t ? 'unchanged' : '');
              else e.setCustomValidity(e.value === (t || e.defaultValue) ? 'unchanged' : '');
            }
            e.addEventListener('input', n),
              e.addEventListener('change', n),
              n(),
              e.form && Js(e.form);
          }),
          document.addEventListener('reset', function(e) {
            if (e.target instanceof HTMLFormElement) {
              const t = e.target;
              setTimeout(() => Js(t));
            }
          });
        const Gs = new WeakMap();
        function Qs(e, t) {
          t.classList.remove('is-loading', 'successed', 'errored', 'warn'),
            e.classList.remove(
              'is-autocheck-loading',
              'is-autocheck-successful',
              'is-autocheck-errored',
            );
          const n = t.querySelector('p.note');
          if (n) {
            const e = Gs.get(n);
            e && (n.innerHTML = e);
          }
          const s = t.querySelector('dd.error');
          s && s.remove();
          const o = t.querySelector('dd.warning');
          o && o.remove();
        }
        function Zs(e) {
          const t = e.closest('form');
          if (!t) return;
          const n = t.querySelector('.js-auto-complete-button');
          n instanceof HTMLButtonElement && (n.disabled = !e.value);
        }
        i('auto-check', function(e) {
          const t = g(e, 'input', HTMLInputElement),
            n = m(t, 'dl.form-group'),
            s = t.form;
          h(s, 'app/assets/modules/github/behaviors/autocheck.js:16');
          const o = n.querySelector('p.note');
          o && Gs.set(o, o.innerHTML),
            e.addEventListener('loadstart', () => {
              Qs(t, n),
                n.classList.add('is-loading'),
                t.classList.add('is-autocheck-loading'),
                Js(s);
            }),
            e.addEventListener('loadend', () => {
              n.classList.remove('is-loading'), t.classList.remove('is-autocheck-loading');
            }),
            t.addEventListener('auto-check-success', e => {
              h(e instanceof CustomEvent, 'app/assets/modules/github/behaviors/autocheck.js:35'),
                t.classList.add('is-autocheck-successful'),
                n.classList.add('successed'),
                Js(s);
              const { message: i } = e.detail;
              if (i)
                if (o) o.innerHTML = i;
                else {
                  const e = document.createElement('dd');
                  e.classList.add('warning'),
                    (e.innerHTML = i),
                    n.append(e),
                    n.classList.add('warn');
                }
            }),
            t.addEventListener('auto-check-error', e => {
              if (
                (h(e instanceof CustomEvent, 'app/assets/modules/github/behaviors/autocheck.js:56'),
                t.classList.add('is-autocheck-errored'),
                n.classList.add('errored'),
                Js(s),
                o)
              )
                o.innerHTML = e.detail.message || 'Something went wrong';
              else {
                const t = e.detail.message || 'Something went wrong',
                  s = document.createElement('dd');
                s.classList.add('error'), (s.innerHTML = t), n.append(s);
              }
            }),
            t.addEventListener('input', () => {
              t.value || Qs(t, n);
            }),
            s.addEventListener('reset', () => {
              Qs(t, n);
            });
        }),
          i('auto-complete', function(e) {
            e.addEventListener('loadstart', () => e.classList.add('is-auto-complete-loading')),
              e.addEventListener('loadend', () => e.classList.remove('is-auto-complete-loading'));
          }),
          i('auto-complete', { constructor: E, initialize: Zs }),
          u('auto-complete-change', 'auto-complete', function(e) {
            h(
              e.currentTarget instanceof E,
              'app/assets/modules/github/behaviors/autocomplete.js:19',
            ),
              Zs(e.currentTarget);
          });
        const eo = new S();
        async function to(e) {
          const t = e.form;
          h(t, 'app/assets/modules/github/behaviors/autosearch-form.js:34'),
            t.classList.add('is-sending');
          try {
            const e = M(t),
              n = `${t.action}&${e}`.replace(/[?&]/, '?'),
              s = await eo.push(A(n)),
              o = t.getAttribute('data-results-container'),
              i = o ? document.getElementById(o) : null;
            i && (i.innerHTML = s), x(null, '', `?${e}`);
          } finally {
            t.classList.remove('is-sending');
          }
        }
        function no() {
          if ('Intl' in window)
            try {
              return new window.Intl.DateTimeFormat().resolvedOptions().timeZone;
            } catch (e) {
              if (!(e instanceof RangeError)) throw e;
            }
        }
        function so(e, t) {
          return !!(
            e &&
            t in e &&
            ((n = e[t]), 'function' == typeof n && n.toString().match(/native code/))
          );
          var n;
        }
        d('.js-autosearch-field', e => {
          const t = e;
          h(
            t instanceof HTMLInputElement,
            'app/assets/modules/github/behaviors/autosearch-form.js:54',
          ),
            T(t, to),
            t.addEventListener('blur', () => k(t, to), { once: !0 });
        }),
          d('input[data-autoselect]', async function(e) {
            h(
              e instanceof HTMLInputElement,
              'app/assets/modules/github/behaviors/autoselect.js:10',
            ),
              await H(),
              e.select();
          }),
          u('change', 'form[data-autosubmit]', function(e) {
            const t = e.currentTarget;
            h(t instanceof HTMLFormElement, 'app/assets/modules/github/behaviors/autosubmit.js:20'),
              y(t);
          }),
          u('change', 'input[data-autosubmit]', function({ currentTarget: e }) {
            h(
              e instanceof HTMLInputElement,
              'app/assets/modules/github/behaviors/autosubmit.js:25',
            );
            const t = e.form;
            h(t, 'app/assets/modules/github/behaviors/autosubmit.js:27'), y(t);
          });
        const oo = {
          beacon: so(window.navigator, 'sendBeacon'),
          customElements: so(window.customElements, 'define'),
          highResolutionTime: so(window.performance, 'now'),
          stringEndsWith: so(String.prototype, 'endsWith'),
          stringStartsWith: so(String.prototype, 'startsWith'),
          timezone: !!no(),
          userTimingEntries: so(window.performance, 'getEntries'),
          userTimingMark: so(window.performance, 'mark'),
        };
        function io(e) {
          e.preventDefault(), e.stopPropagation();
        }
        function ro(e, t) {
          return (
            (function(e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function(e, t) {
              var n = [],
                s = !0,
                o = !1,
                i = void 0;
              try {
                for (
                  var r, a = e[Symbol.iterator]();
                  !(s = (r = a.next()).done) && (n.push(r.value), !t || n.length !== t);
                  s = !0
                );
              } catch (c) {
                (o = !0), (i = c);
              } finally {
                try {
                  s || null == a.return || a.return();
                } finally {
                  if (o) throw i;
                }
              }
              return n;
            })(e, t) ||
            (function() {
              throw new TypeError('Invalid attempt to destructure non-iterable instance');
            })()
          );
        }
        function ao(e) {
          const t = e.querySelector('.js-clipboard-clippy-icon'),
            n = e.querySelector('.js-clipboard-check-icon');
          e.classList.toggle('ClipboardButton--success'),
            e.classList.toggle('tooltipped'),
            e.classList.toggle('tooltipped-s'),
            t && t.classList.toggle('d-none'),
            n && n.classList.toggle('d-none');
        }
        function co(e, t) {
          const n = e.closest('.js-write-bucket');
          n && n.classList.toggle('focused', t);
        }
        function lo(e) {
          const t = e.currentTarget;
          t instanceof Element && co(t, !1);
        }
        function uo(e) {
          const t = m(e, '.js-previewable-comment-form'),
            n = e.classList.contains('js-preview-tab');
          if (n) {
            const e = g(t, '.js-write-bucket');
            g(t, '.js-preview-body').style.minHeight = `${e.clientHeight}px`;
          }
          t.classList.toggle('preview-selected', n), t.classList.toggle('write-selected', !n);
          const s = g(t, '.tabnav-tab.selected');
          s.setAttribute('aria-selected', 'false'),
            s.classList.remove('selected'),
            e.classList.add('selected'),
            e.setAttribute('aria-selected', 'true');
          const o = g(t, '.js-write-tab');
          return (
            n
              ? o.setAttribute('data-hotkey', 'Control+P,Meta+P')
              : o.removeAttribute('data-hotkey'),
            t
          );
        }
        C({ features: oo }),
          i('a.btn.disabled', { subscribe: e => q(e, 'click', io) }),
          (async () => {
            await I;
            const e =
                (function(e) {
                  try {
                    return JSON.parse(window.localStorage.getItem(e));
                  } catch (t) {
                    return {};
                  }
                })('bundle-urls') || {},
              t = (function() {
                const e = {};
                for (const t of document.getElementsByTagName('script')) {
                  const n = t.src.match(/\/([\w-]+)-[0-9a-f]{32,}\.js$/);
                  n && (e[`${n[1]}.js`] = t.src);
                }
                for (const t of document.getElementsByTagName('link')) {
                  const n = t.href.match(/\/([\w-]+)-[0-9a-f]{32,}\.css$/);
                  n && (e[`${n[1]}.css`] = t.href);
                }
                return e;
              })();
            !(function(e, t) {
              try {
                window.localStorage.setItem(e, JSON.stringify(t));
              } catch (n) {}
            })('bundle-urls', t);
            const n = Object.keys(t).filter(n => {
              const s = t[n];
              return e[n] !== s;
            });
            n.length && C({ downloadedBundles: n });
          })(),
          i('.js-check-all-container', {
            subscribe: function(e) {
              var t = !1,
                n = null;
              function s(e, t, n) {
                var s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                t instanceof HTMLInputElement &&
                  ((t.indeterminate = s),
                  t.checked !== n &&
                    ((t.checked = n),
                    setTimeout(function() {
                      var n = new CustomEvent('change', {
                        bubbles: !0,
                        cancelable: !1,
                        detail: { relatedTarget: e },
                      });
                      t.dispatchEvent(n);
                    })));
              }
              function o(o) {
                var i = o.target;
                i instanceof Element &&
                  (i.hasAttribute('data-check-all')
                    ? (function(t) {
                        if (t instanceof CustomEvent && t.detail) {
                          var o = t.detail.relatedTarget;
                          if (o && o.hasAttribute('data-check-all-item')) return;
                        }
                        var i = t.target;
                        if (i instanceof HTMLInputElement) {
                          n = null;
                          var a = !0,
                            c = !1,
                            l = void 0;
                          try {
                            for (
                              var u,
                                d = e.querySelectorAll('[data-check-all-item]')[Symbol.iterator]();
                              !(a = (u = d.next()).done);
                              a = !0
                            ) {
                              var m = u.value;
                              s(i, m, i.checked);
                            }
                          } catch (f) {
                            (c = !0), (l = f);
                          } finally {
                            try {
                              a || null == d.return || d.return();
                            } finally {
                              if (c) throw l;
                            }
                          }
                          r();
                        }
                      })(o)
                    : i.hasAttribute('data-check-all-item') &&
                      (function(o) {
                        if (o instanceof CustomEvent && o.detail) {
                          var i = o.detail.relatedTarget;
                          if (
                            i &&
                            (i.hasAttribute('data-check-all') ||
                              i.hasAttribute('data-check-all-item'))
                          )
                            return;
                        }
                        var a = o.target;
                        if (a instanceof HTMLInputElement) {
                          var c = Array.from(e.querySelectorAll('[data-check-all-item]'));
                          if (t && n) {
                            var l = [c.indexOf(n), c.indexOf(a)].sort(),
                              u = ro(l, 2),
                              d = u[0],
                              m = u[1],
                              f = !0,
                              p = !1,
                              g = void 0;
                            try {
                              for (
                                var h, b = c.slice(d, +m + 1 || 9e9)[Symbol.iterator]();
                                !(f = (h = b.next()).done);
                                f = !0
                              ) {
                                var v = h.value;
                                s(a, v, a.checked);
                              }
                            } catch (T) {
                              (p = !0), (g = T);
                            } finally {
                              try {
                                f || null == b.return || b.return();
                              } finally {
                                if (p) throw g;
                              }
                            }
                          }
                          (t = !1), (n = a);
                          var j = e.querySelector('[data-check-all]');
                          if (j) {
                            var y = c.length,
                              L = c.filter(function(e) {
                                return e instanceof HTMLInputElement && e.checked;
                              }).length,
                              w = L === y,
                              E = y > L && L > 0;
                            s(a, j, w, E);
                          }
                          r();
                        }
                      })(o));
              }
              function i(e) {
                e.target instanceof Element &&
                  e.target.hasAttribute('data-check-all-item') &&
                  (t = e.shiftKey);
              }
              function r() {
                var t = e.querySelector('[data-check-all-count]');
                if (t) {
                  var n = e.querySelectorAll('[data-check-all-item]:checked').length;
                  t.textContent = n.toString();
                }
              }
              return (
                e.addEventListener('mousedown', i),
                e.addEventListener('change', o),
                {
                  unsubscribe: function() {
                    e.removeEventListener('mousedown', i), e.removeEventListener('change', o);
                  },
                }
              );
            },
          }),
          u('click', '.js-clipboard-copy', function({ currentTarget: e }) {
            ao(e), setTimeout(ao, 2e3, e);
          }),
          v('.js-new-comment-form', async function(e, t) {
            let n;
            !(function(e) {
              const t = e.querySelector('.js-comment-form-error');
              t && (t.hidden = !0);
            })(e);
            try {
              n = await t.json();
            } catch (i) {
              !(function(e, t) {
                let n = "You can't comment at this time";
                if (t.response && 422 === t.response.status) {
                  const e = t.response.json;
                  e.errors && (n += ` — your comment ${e.errors.join(', ')}`);
                }
                n += '. ';
                const s = e.querySelector('.js-comment-form-error');
                s && ((s.textContent = n), (s.hidden = !1));
              })(e, i);
            }
            if (!n) return;
            e.reset();
            for (const r of f(e, '.js-resettable-field', HTMLInputElement))
              _(r, r.getAttribute('data-reset-value') || '');
            const s = e.querySelector('.js-write-tab');
            s && s.click();
            const o = n.json.updateContent;
            for (const r in o) {
              const e = o[r],
                t = document.querySelector(r);
              t ? $(t, e) : console.warn(`couldn't find ${r} for immediate update`);
            }
          }),
          i('.js-comment-and-button', {
            constructor: HTMLButtonElement,
            initialize(e) {
              h(e.form, 'app/assets/modules/github/behaviors/commenting/close.js:29');
              const t = g(e.form, '.js-comment-field'),
                n = e.querySelector('.js-form-action-text'),
                s = n || e,
                o = s.textContent;
              let i = !1;
              function r(t) {
                const n = t.currentTarget;
                h(
                  n instanceof HTMLTextAreaElement,
                  'app/assets/modules/github/behaviors/commenting/close.js:38',
                );
                const r = n.value.trim();
                r !== i && ((i = r), (s.textContent = r ? p(e, 'data-comment-text') : o));
              }
              return {
                add() {
                  t.addEventListener('input', r), t.addEventListener('change', r);
                },
                remove() {
                  t.removeEventListener('input', r), t.removeEventListener('change', r);
                },
              };
            },
          }),
          u('click', '.js-comment-edit-button', function(e) {
            const t = m(e.currentTarget, '.js-comment');
            t.classList.add('is-comment-editing'), g(t, '.js-write-tab').click();
            const n = g(t, '.js-comment-field');
            h(
              n instanceof HTMLTextAreaElement,
              'app/assets/modules/github/behaviors/commenting/edit.js:18',
            ),
              n.focus(),
              L(n, 'change');
            const s = e.currentTarget.closest('.js-dropdown-details');
            s && s.removeAttribute('open');
          }),
          u('click', '.js-comment-hide-button', function(e) {
            const t = m(e.currentTarget, '.js-comment').querySelector('.js-minimize-comment');
            t && t.classList.remove('d-none');
            const n = e.currentTarget.closest('.js-dropdown-details');
            n && n.removeAttribute('open');
          }),
          u('click', '.js-comment-hide-minimize-form', function(e) {
            m(e.currentTarget, '.js-minimize-comment').classList.add('d-none');
          }),
          u('click', '.js-comment-cancel-button', function(e) {
            const t = m(e.currentTarget, 'form', HTMLFormElement),
              n = p(e.currentTarget, 'data-confirm-text');
            if (D(t) && !confirm(n)) return !1;
            for (const o of t.querySelectorAll('input, textarea'))
              h(
                o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement,
                'app/assets/modules/github/behaviors/commenting/edit.js:57',
              ),
                (o.value = o.defaultValue);
            const s = e.currentTarget.closest('.js-comment');
            s && s.classList.remove('is-comment-editing');
          }),
          v(
            '.js-comment-delete, .js-comment .js-comment-update, .js-issue-update, .js-comment-minimize, .js-comment-unminimize',
            function(e, t, n) {
              const s = m(e, '.js-comment');
              s.classList.add('is-comment-loading');
              const o = s.getAttribute('data-body-version');
              o && n.headers.set('X-Body-Version', o);
            },
          ),
          v('.js-comment .js-comment-update', async function(e, t) {
            let n;
            const s = m(e, '.js-comment'),
              o = s.querySelector('.js-comment-update-error');
            o && (o.hidden = !0);
            try {
              n = await t.json();
            } catch (l) {
              if (422 !== l.response.status) throw l;
              {
                const e = JSON.parse(l.response.text);
                if (e.errors)
                  return void (
                    o &&
                    ((o.textContent = `There was an error posting your comment: ${e.errors.join(
                      ', ',
                    )}`),
                    (o.hidden = !1))
                  );
              }
            }
            if (!n) return;
            const i = n.json,
              r = s.querySelector('.js-comment-body');
            r && i.body && (r.innerHTML = i.body),
              s.setAttribute('data-body-version', i.newBodyVersion);
            const a = s.querySelector('.js-body-version');
            a instanceof HTMLInputElement && (a.value = i.newBodyVersion);
            for (const u of s.querySelectorAll('input, textarea'))
              h(
                u instanceof HTMLInputElement || u instanceof HTMLTextAreaElement,
                'app/assets/modules/github/behaviors/commenting/edit.js:120',
              ),
                (u.defaultValue = u.value);
            s.classList.remove('is-comment-stale', 'is-comment-editing');
            const c = s.querySelector('.js-comment-edit-history');
            if (c) {
              const e = await R(document, i.editUrl);
              (c.innerHTML = ''), c.append(e);
            }
          }),
          v(
            '.js-comment .js-comment-delete, .js-comment .js-comment-update, .js-comment-minimize, .js-comment-unminimize',
            async function(e, t) {
              const n = m(e, '.js-comment');
              try {
                await t.text();
              } catch (s) {
                if (422 !== s.response.status) throw s;
                {
                  let e;
                  try {
                    e = JSON.parse(s.response.text);
                  } catch (o) {}
                  e && e.stale && n.classList.add('is-comment-stale');
                }
              }
              n.classList.remove('is-comment-loading');
            },
          ),
          v('.js-comment-delete', async function(e, t) {
            await t.json();
            let n = e.closest('.js-comment-delete-container');
            n ||
              ((n = e.closest('.js-comment-container') || e.closest('.js-line-comments')) &&
                1 !== n.querySelectorAll('.js-comment').length &&
                (n = m(e, '.js-comment'))),
              h(n, 'app/assets/modules/github/behaviors/commenting/edit.js:174'),
              n.remove();
          }),
          v('.js-issue-update', async function(e, t) {
            const n = m(e, '.js-details-container');
            n.classList.remove('open');
            const s = (await t.json()).json;
            if (null != s.issue_title) {
              g(n, '.js-issue-title').textContent = s.issue_title;
              const e = n.closest('.js-issues-results');
              if (e) {
                if (e.querySelector('.js-merge-pr.is-merging')) {
                  const t = e.querySelector('.js-merge-pull-request textarea');
                  t instanceof HTMLTextAreaElement &&
                    t.value === t.defaultValue &&
                    (t.value = t.defaultValue = s.issue_title);
                } else if (e.querySelector('.js-merge-pr.is-squashing')) {
                  const t = e.querySelector('.js-merge-pull-request .js-merge-title');
                  t instanceof HTMLInputElement &&
                    t.value === t.defaultValue &&
                    (t.value = t.defaultValue = s.default_squash_commit_title);
                }
                const t = e.querySelector('button[value=merge]');
                t && t.setAttribute('data-input-message-value', s.issue_title);
                const n = e.querySelector('button[value=squash]');
                n && n.setAttribute('data-input-title-value', s.default_squash_commit_title);
              }
            }
            document.title = s.page_title;
            for (const o of e.elements)
              (o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement) &&
                (o.defaultValue = o.value);
          }),
          v('.js-comment-minimize', async function(e, t) {
            await t.json();
            const n = m(e, '.js-comment').querySelector('.js-minimize-comment');
            n && n.classList.add('d-none');
            const s = m(e, '.unminimized-comment');
            s.classList.add('d-none'), s.classList.remove('js-comment');
            const o = m(e, '.js-minimizable-comment-group').querySelector('.minimized-comment');
            o && o.classList.remove('d-none'), o && o.classList.add('js-comment');
          }),
          v('.js-comment-unminimize', async function(e, t) {
            await t.json();
            const n = m(e, '.js-minimizable-comment-group'),
              s = n.querySelector('.unminimized-comment');
            s && s.classList.remove('d-none'), s && s.classList.add('js-comment');
            const o = n.querySelector('.minimized-comment');
            o && o.classList.add('d-none'), o && o.classList.remove('js-comment');
          }),
          d('.js-comment-field', function(e) {
            co(e, !0), e.addEventListener('blur', lo, { once: !0 });
          }),
          u('click', '.js-write-tab', function(e) {
            const t = e.currentTarget,
              n = uo(t);
            setTimeout(() => {
              g(n, '.js-comment-field').focus();
            });
            const s = m(t, '.js-previewable-comment-form').querySelector('markdown-toolbar');
            null != s && (s.hidden = !1);
          }),
          u('click', '.js-preview-tab', function(e) {
            const t = e.currentTarget,
              n = uo(t);
            setTimeout(() => {
              ho(n);
            });
            const s = m(t, '.js-previewable-comment-form').querySelector('markdown-toolbar');
            null != s && (s.hidden = !0), e.stopPropagation(), e.preventDefault();
          }),
          u('preview:render', '.js-previewable-comment-form', function(e) {
            const t = uo(g(e.target, '.js-preview-tab'));
            setTimeout(() => {
              ho(t);
            });
          });
        const mo = new S(),
          fo = new WeakMap();
        let po = !1;
        async function go(e, t, n, s, o) {
          const i = {};
          (i.text = t),
            (i.authenticity_token = (function(e) {
              const t = e.getAttribute('data-preview-authenticity-token'),
                n = m(e, 'form', HTMLFormElement).elements.namedItem('authenticity_token');
              return null != t ? t : n instanceof HTMLInputElement ? n.value : void 0;
            })(e)),
            s && (i.path = s),
            n && (i.original_line = n),
            o && (i.line_number = o);
          const r = { url: p(e, 'data-preview-url'), data: i };
          L(e, 'preview:setup', r);
          const a = JSON.stringify(r),
            [c, l] = fo.get(e) || [];
          if (c === a) return l;
          po = !1;
          const u = mo.push(
            (function(e) {
              const t = new FormData();
              for (const n in e.data) null !== e.data[n] && t.append(n, e.data[n]);
              return A(e.url, { method: 'post', body: t });
            })(r),
          );
          fo.set(e, [a, u]);
          const d = await u;
          return (po = !0), d;
        }
        async function ho(e) {
          const t = g(e, '.js-comment-field', HTMLTextAreaElement),
            n = g(e, '.comment-body'),
            s = e.querySelector('.js-original-line'),
            o = e.querySelector('.js-path'),
            i = e.querySelector('.js-line-number'),
            r = s instanceof HTMLInputElement ? s.value : null,
            a = o instanceof HTMLInputElement ? o.value : null,
            c = i instanceof HTMLInputElement ? i.value : null;
          po || (n.innerHTML = '<p>Loading preview&hellip;</p>');
          try {
            const s = await go(e, t.value, r, a, c);
            n.innerHTML = s || '<p>Nothing to preview</p>';
          } catch (l) {
            n.innerHTML = '<p>Error rendering preview</p>';
          }
        }
        i('.js-preview-tab', function(e) {
          let t, n, s, o, i;
          e.addEventListener('mouseenter', () => {
            !(async function() {
              if (!t) {
                (t = m(e, '.js-previewable-comment-form')),
                  (n = g(t, '.js-comment-field', HTMLTextAreaElement));
                const r = t.querySelector('.js-original-line'),
                  a = t.querySelector('.js-path'),
                  c = t.querySelector('.js-line-number');
                (s = r instanceof HTMLInputElement ? r.value : null),
                  (o = a instanceof HTMLInputElement ? a.value : null),
                  (i = c instanceof HTMLInputElement ? c.value : null);
              }
              try {
                await go(t, n.value, s, o, i);
              } catch (r) {}
            })();
          });
        }),
          N('keydown', '.js-comment-field', function(e) {
            const t = e.target;
            if (
              (h(
                t instanceof HTMLTextAreaElement,
                'app/assets/modules/github/behaviors/commenting/preview.js:236',
              ),
              (e.ctrlKey || e.metaKey) && 'P' === e.key)
            ) {
              const n = m(t, '.js-previewable-comment-form');
              n.classList.contains('write-selected') &&
                (t.blur(),
                n.dispatchEvent(new CustomEvent('preview:render', { bubbles: !0, cancelable: !1 })),
                e.preventDefault(),
                e.stopImmediatePropagation());
            }
          });
        const bo = /^(\+1|-1|:\+1?|:-1?)$/,
          vo = e => {
            let t = !1;
            for (const n of e.split('\n')) {
              const e = n.trim();
              if (e && !e.startsWith('>')) {
                if (t && !1 === bo.test(e)) return !1;
                !t && bo.test(e) && (t = !0);
              }
            }
            return t;
          };
        function jo(e) {
          const t = e.target;
          h(
            t instanceof HTMLTextAreaElement,
            'app/assets/modules/github/behaviors/commenting/reaction-suggestion.js:43',
          );
          const n = t.value,
            s = m(t, '.js-reaction-suggestion');
          if (s)
            if (vo(n)) {
              s.classList.remove('hide-reaction-suggestion'),
                s.classList.add('reaction-suggestion');
              const e = p(s, 'data-reaction-markup');
              s.setAttribute('data-reaction-suggestion-message', e);
            } else yo(s);
        }
        function yo(e) {
          e.classList.remove('reaction-suggestion'),
            e.classList.add('hide-reaction-suggestion'),
            e.removeAttribute('data-reaction-suggestion-message');
        }
        u('focusout', '#new_comment_field', function(e) {
          const t = e.currentTarget;
          yo(m(t, '.js-reaction-suggestion'));
        }),
          u('focusin', '#new_comment_field', function(e) {
            jo(e);
          }),
          N('keyup', '#new_comment_field', function(e) {
            jo(e);
          }),
          i('details.select-menu details-menu include-fragment', function(e) {
            const t = e.closest('details');
            t &&
              (e.addEventListener('loadstart', function() {
                t.classList.add('is-loading'), t.classList.remove('has-error');
              }),
              e.addEventListener('error', function() {
                t.classList.add('has-error');
              }),
              e.addEventListener('loadend', function() {
                t.classList.remove('is-loading');
                const e = t.querySelector('.js-filterable-field');
                e && L(e, 'filterable:change');
              }));
          }),
          i('details details-menu .js-filterable-field', {
            constructor: HTMLInputElement,
            add(e) {
              const t = m(e, 'details');
              t.addEventListener('toggle', function() {
                t.hasAttribute('open') || ((e.value = ''), L(e, 'filterable:change'));
              });
            },
          }),
          i('details details-menu remote-input input', {
            constructor: HTMLInputElement,
            add(e) {
              const t = m(e, 'details');
              t.addEventListener('toggle', function() {
                t.hasAttribute('open') || (e.value = '');
              });
            },
          }),
          i('form details-menu', e => {
            const t = m(e, 'form');
            t.addEventListener('reset', () => {
              setTimeout(
                () =>
                  (function(e) {
                    const t = e.querySelectorAll(
                      'details-menu [role=menuitemradio] input[type=radio]:checked',
                    );
                    for (const n of t) L(n, 'change');
                  })(t),
                0,
              );
            });
          }),
          u(
            'details-menu-selected',
            '[data-menu-input]',
            e => {
              const t = p(e.target, 'data-menu-input'),
                n = document.getElementById(t);
              (n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement) &&
                (h(
                  e instanceof CustomEvent,
                  'app/assets/modules/github/behaviors/details-menu.js:77',
                ),
                h(
                  e.detail.relatedTarget instanceof HTMLButtonElement,
                  'app/assets/modules/github/behaviors/details-menu.js:78',
                ),
                (n.value = e.detail.relatedTarget.value));
            },
            { capture: !0 },
          ),
          i('details-menu remote-input', {
            constructor: B,
            initialize(e) {
              const t = document.getElementById(e.getAttribute('aria-owns') || '');
              if (!t) return;
              let n;
              e.addEventListener('load', () => {
                n =
                  document.activeElement &&
                  t.contains(document.activeElement) &&
                  document.activeElement.id
                    ? document.activeElement.id
                    : null;
              }),
                e.addEventListener('loadend', () => {
                  if (n) {
                    const s = t.querySelector(`#${n}`) || t.querySelector('[role^="menu"]');
                    s ? s.focus() : e.input && e.input.focus();
                  }
                });
            },
          }),
          u(
            'details-menu-selected',
            'details-menu[data-menu-max-options]',
            e => {
              const t =
                +p(e.currentTarget, 'data-menu-max-options') ===
                e.currentTarget.querySelectorAll('[role="menuitemcheckbox"][aria-checked="true"]')
                  .length;
              g(e.currentTarget, '[data-menu-max-options-warning]').hidden = !t;
              for (const n of f(
                e.currentTarget,
                '[role="menuitemcheckbox"] input',
                HTMLInputElement,
              ))
                n.disabled = t && !n.checked;
            },
            { capture: !0 },
          );
        const Lo = new WeakMap(),
          wo = ['input[type=submit][data-disable-with]', 'button[data-disable-with]'].join(', ');
        function Eo(e, t) {
          e instanceof HTMLInputElement ? (e.value = t) : (e.innerHTML = t);
        }
        function To(e) {
          for (const t of e.querySelectorAll(wo)) {
            const n = Lo.get(t);
            null != n &&
              (h(
                t instanceof HTMLInputElement || t instanceof HTMLButtonElement,
                'app/assets/modules/github/behaviors/disable-with.js:57',
              ),
              Eo(t, n),
              (t.hasAttribute('data-disable-invalid') && !e.checkValidity()) || (t.disabled = !1),
              Lo.delete(t));
          }
        }
        u(
          'submit',
          'form',
          function(e) {
            for (const n of e.currentTarget.querySelectorAll(wo)) {
              h(
                n instanceof HTMLInputElement || n instanceof HTMLButtonElement,
                'app/assets/modules/github/behaviors/disable-with.js:41',
              ),
                Lo.set(
                  n,
                  (t = n) instanceof HTMLInputElement ? t.value || 'Submit' : t.innerHTML || '',
                );
              const e = n.getAttribute('data-disable-with');
              e && Eo(n, e), (n.disabled = !0);
            }
            var t;
          },
          { capture: !0 },
        ),
          u('deprecatedAjaxComplete', 'form', function({ currentTarget: e, target: t }) {
            h(
              e instanceof HTMLFormElement,
              'app/assets/modules/github/behaviors/disable-with.js:71',
            ),
              e === t && To(e);
          }),
          P(To),
          u('menu:activate', '.js-select-menu', function(e) {
            e.currentTarget.classList.add('is-dirty');
          }),
          u('menu:deactivate', '.js-select-menu', function(e) {
            e.currentTarget.classList.remove('is-dirty');
          });
        const ko = {
          OS: 'Meta',
          Win: 'Meta',
          Windows: 'Meta',
          Scroll: 'ScrollLock',
          SpaceBar: ' ',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Down: 'ArrowDown',
          Up: 'ArrowUp',
          Del: 'Delete',
          Esc: 'Escape',
        };
        const Mo = Object.getOwnPropertyDescriptor(KeyboardEvent.prototype, 'key');
        if (Mo) {
          let e = e => Mo.get.apply(e);
          /Macintosh.*Safari/.test(navigator.userAgent) &&
            (e = e => {
              return (function(e, t) {
                return t && /^[a-z]$/.test(e) ? e.toUpperCase() : e;
              })(Mo.get.apply(e), e.shiftKey);
            }),
            Object.defineProperty(KeyboardEvent.prototype, 'key', {
              enumerable: !0,
              configurable: !0,
              get() {
                return (t = e(this)), ko[t] || t;
                var t;
              },
            });
        }
        const Ao = new WeakMap();
        function xo(e) {
          return Ao.has(e);
        }
        function So(e, t, n) {
          const s = n.limit,
            o = g(e, 'template', HTMLTemplateElement),
            i = {};
          for (const g of f(e, 'input[type=hidden]', HTMLInputElement))
            i[`${g.name}${g.value}`] = g;
          let r = o.nextElementSibling;
          for (; r; ) {
            const e = r;
            (r = e.nextElementSibling),
              e.classList.contains('selected') || e.classList.contains('select-menu-divider')
                ? e.classList.add('d-none')
                : e.remove();
          }
          const a = Ao.get(e);
          h(null != a, 'app/assets/modules/github/substring-memory-filter-list.js:69');
          let c = 0,
            l = document.createDocumentFragment();
          const u = e.querySelector('.js-divider-suggestions'),
            d = e.querySelector('.js-divider-rest');
          function m(e) {
            const n =
              !(null != s && c >= s) &&
              (function(e) {
                return `${e.login} ${e.name}`.toLowerCase().trim();
              })(e).indexOf(t) >= 0;
            if (n || e.selected) {
              const t = (function(e, t, n) {
                if (null != e.element) return e.element;
                const s = t.content.cloneNode(!0),
                  o = g(s, 'input[type=checkbox]', HTMLInputElement);
                e.type && (o.name = `reviewer_${e.type}_ids[]`);
                o.value = e.id;
                const i = `${o.name}${e.id}`;
                let r = e.selected;
                n[i] && ((r = !0), n[i].remove(), delete n[i]);
                const a = g(s, '.js-navigation-item');
                r && (a.classList.add('selected'), (o.checked = !0));
                e.disabled && a.classList.add('disabled');
                const c = s.querySelector('.js-username');
                c && (c.textContent = e.login);
                const l = s.querySelector('.js-description');
                l && (l.textContent = e.name);
                const u = s.querySelector('.js-extended-description');
                u && (e.description ? (u.textContent = e.description) : u.remove());
                return (
                  (g(s, '.js-avatar', HTMLImageElement).src = e.avatar), (e.element = a), e.element
                );
              })(e, o, i);
              t.classList.toggle('d-none', !n), n && c++, l.appendChild(t);
            }
          }
          if (u && a.suggestions) {
            for (const e of a.suggestions) m(e);
            l.childNodes.length &&
              (u.after(l),
              u.classList.toggle('d-none', 0 === c),
              (l = document.createDocumentFragment()));
          }
          const p = c;
          for (const f of a.users) m(f);
          return e.append(l), d && d.classList.toggle('d-none', c === p || 0 === p), c;
        }
        function Ho(e, t) {
          let n = Io(e, t);
          if (n && -1 === t.indexOf('/')) {
            n += Io(e.substring(e.lastIndexOf('/') + 1), t);
          }
          return n;
        }
        function Co(e) {
          const t = e.toLowerCase().split('');
          let n = '';
          for (let s = 0; s < t.length; s++) {
            const e = t[s].replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
            n += 0 === s ? `(.*)(${e})` : `([^${e}]*?)(${e})`;
          }
          return new RegExp(`${n}(.*?)$`, 'i');
        }
        function qo(e, t, n) {
          if (t) {
            const s = e.innerHTML.trim().match(n || Co(t));
            if (!s) return;
            let o = !1;
            const i = [];
            for (let e = 1; e < s.length; ++e) {
              const t = s[e];
              t &&
                (e % 2 == 0
                  ? o || (i.push('<mark>'), (o = !0))
                  : o && (i.push('</mark>'), (o = !1)),
                i.push(t));
            }
            e.innerHTML = i.join('');
          } else {
            const t = e.innerHTML.trim(),
              n = t.replace(/<\/?mark>/g, '');
            t !== n && (e.innerHTML = n);
          }
        }
        function Io(e, t) {
          let n = e;
          if (n === t) return 1;
          const s = n.length;
          let o = 0,
            i = 0;
          for (let l = 0; l < t.length; l++) {
            const e = t[l],
              r = n.indexOf(e.toLowerCase()),
              a = n.indexOf(e.toUpperCase()),
              c = Math.min(r, a),
              u = c > -1 ? c : Math.max(r, a);
            if (-1 === u) return 0;
            (o += 0.1),
              n[u] === e && (o += 0.1),
              0 === u && ((o += 0.8), 0 === l && (i = 1)),
              ' ' === n.charAt(u - 1) && (o += 0.8),
              (n = n.substring(u + 1, s));
          }
          const r = t.length,
            a = o / r;
          let c = (a * (r / s) + a) / 2;
          return i && c + 0.1 < 1 && (c += 0.1), c;
        }
        const _o = new WeakMap(),
          $o = new WeakMap(),
          Do = new WeakMap();
        function Ro(e, t, n = {}) {
          if (!e) return 0;
          const s = t.toLowerCase(),
            o = null != n.text ? n.text : Bo,
            i = n.limit,
            r = n.score;
          let a = _o.get(e);
          const c = e.querySelector('input[type="radio"]:checked'),
            l = Array.from(e.children);
          a || ((a = Array.from(e.children)), _o.set(e, a));
          for (const g of l) e.removeChild(g), (g.style.display = '');
          const u = document.createDocumentFragment();
          let d = 0,
            m = 0;
          if (s) {
            const e = Array.from(a);
            for (const n of e) {
              null == $o.get(n) && $o.set(n, o(n));
              const e = r ? r($o.get(n) || '', s, n) : Ho($o.get(n) || '', s);
              Do.set(n, String(e));
            }
            e.sort(No);
            const t = Co(s);
            for (const o of e)
              (null == i || d < i) &&
                parseFloat(Do.get(o)) > 0 &&
                (m++, !0 === n.mark && (qo(o), qo(o, s, t)), u.appendChild(o)),
                d++;
          } else
            for (const g of a)
              (null == i || d < i) && (m++, !0 === n.mark && qo(g), u.appendChild(g)), d++;
          let f = !1;
          if (c instanceof HTMLInputElement)
            for (const g of u.querySelectorAll('input[type="radio"]:checked'))
              g instanceof HTMLInputElement && g.value !== c.value && ((g.checked = !1), (f = !0));
          e.appendChild(u), c && f && c.dispatchEvent(new Event('change', { bubbles: !0 }));
          const p = e.querySelectorAll('.js-divider');
          for (const g of p) g.classList.toggle('d-none', Boolean(s && s.trim().length > 0));
          return m;
        }
        function No(e, t) {
          const n = parseFloat(Do.get(e)),
            s = parseFloat(Do.get(t)),
            o = $o.get(e) || '',
            i = $o.get(t) || '';
          return n > s ? -1 : n < s ? 1 : o < i ? -1 : o > i ? 1 : 0;
        }
        function Bo(e) {
          if (e.hasAttribute('data-filter-value')) {
            return (e.getAttribute('data-filter-value') || '').toLowerCase().trim();
          }
          return e.textContent.toLowerCase().trim();
        }
        function Po(e) {
          return e.textContent.toLowerCase().trim();
        }
        function Fo(e, t) {
          const n = e.innerHTML;
          if (t) {
            const s = new RegExp(t, 'i');
            e.innerHTML = n.replace(s, '<mark>$&</mark>');
          } else {
            const t = n.replace(/<\/?mark>/g, '');
            n !== t && (e.innerHTML = t);
          }
        }
        function Oo(e) {
          return e.textContent.toLowerCase().trim();
        }
        function Wo(e, t) {
          const n = e.innerHTML;
          if (t) {
            const s = new RegExp(t, 'i');
            e.innerHTML = n.replace(s, '<mark>$&</mark>');
          } else {
            const t = n.replace(/<\/?mark>/g, '');
            n !== t && (e.innerHTML = t);
          }
        }
        function Uo(e, t) {
          const n = e.hasAttribute('data-filterable-highlight'),
            s = parseInt(e.getAttribute('data-filterable-limit'), 10) || null;
          let o = 0;
          switch (e.getAttribute('data-filterable-type')) {
            case 'fuzzy':
              o = Ro(e, t, { mark: n, limit: s });
              break;
            case 'substring':
              o = (function(e, t, n = {}) {
                let s;
                if (!e) return;
                const o = t.toLowerCase(),
                  i = null != n.text ? n.text : Oo,
                  r = n.limit,
                  a = Array.from(e.children).filter(
                    e => !e.classList.contains('select-menu-no-results'),
                  );
                !0 === n.mark ? (s = Wo) : 'function' == typeof n.mark && (s = n.mark);
                let c = 0;
                for (const l of a)
                  -1 !== i(l).indexOf(o)
                    ? null != r && c >= r
                      ? ((l.style.display = 'none'), (l.hidden = !0))
                      : (c++, (l.style.display = ''), (l.hidden = !1), s && (s(l), s(l, o)))
                    : ((l.style.display = 'none'), (l.hidden = !0));
                return c;
              })(e, t, { mark: n, limit: s });
              break;
            case 'substring-memory':
              o = So(e, t, { limit: s });
              break;
            default:
              o = (function(e, t, n = {}) {
                let s;
                if (!e) return;
                const o = t.toLowerCase(),
                  i = null != n.text ? n.text : Po,
                  r = n.limit;
                !0 === n.mark ? (s = Fo) : 'function' == typeof n.mark && (s = n.mark);
                let a = 0;
                for (const c of e.children)
                  0 === i(c).indexOf(o)
                    ? null != r && a >= r
                      ? ((c.style.display = 'none'), (c.hidden = !0))
                      : (a++, (c.style.display = ''), (c.hidden = !1), s && (s(c), s(c, o)))
                    : ((c.style.display = 'none'), (c.hidden = !0));
                return a;
              })(e, t, { mark: n, limit: s });
          }
          !(function(e, t = 0) {
            const n = e.closest('.js-select-menu, details-menu');
            if (!n) return;
            const s = (function(e) {
              let t = e.querySelector('[data-filterable-notice]');
              return (
                t ||
                ((t = document.createElement('div')).classList.add('sr-only'),
                t.setAttribute('data-filterable-notice', ''),
                t.setAttribute('aria-live', 'polite'),
                e.append(t),
                t)
              );
            })(n);
            (s.textContent = ''), (s.textContent = `${t} results found.`);
          })(e, o),
            e.classList.toggle('filterable-active', t.length > 0),
            e.classList.toggle('filterable-empty', 0 === o);
        }
        i('.js-filterable-field', {
          constructor: HTMLInputElement,
          initialize(e) {
            let t = e.value;
            async function n(e) {
              t !== e.value && ((t = e.value), await H(), L(e, 'filterable:change'));
            }
            async function s() {
              (t = e.value), await H(), L(e, 'filterable:change');
            }
            return {
              add(e) {
                e.addEventListener('focus', s), T(e, n), document.activeElement === e && s();
              },
              remove(e) {
                e.removeEventListener('focus', s), k(e, n);
              },
            };
          },
        }),
          u('filterable:change', '.js-filterable-field', function(e) {
            const t = e.currentTarget;
            h(
              t instanceof HTMLInputElement,
              'app/assets/modules/github/behaviors/filterable.js:85',
            );
            const n = t.value.trim().toLowerCase(),
              s = document.querySelectorAll(`[data-filterable-for=${t.id}]`);
            for (const o of s) {
              if ('substring-memory' === o.getAttribute('data-filterable-type') && !xo(o)) continue;
              Uo(o, n);
              const e = new CustomEvent('filterable:change', {
                bubbles: !0,
                cancelable: !1,
                detail: { inputField: t },
              });
              o.dispatchEvent(e);
            }
          }),
          document.addEventListener('selectmenu:data', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/behaviors/filterable.js:160');
            const { target: t, detail: n } = e;
            h(t instanceof HTMLElement, 'app/assets/modules/github/behaviors/filterable.js:162');
            const s = t.querySelector('[data-filterable-type="substring-memory"]');
            if (s) {
              !(function(e, t) {
                Ao.set(e, t);
              })(s, n.data);
              const e = t.querySelector('.js-filterable-field');
              e && e === document.activeElement && L(e, 'filterable:change');
            }
          }),
          u('click', '.js-flash-close', function(e) {
            const t = e.currentTarget.closest('.flash-messages'),
              n = e.currentTarget.closest('.flash');
            h(n, 'app/assets/modules/github/behaviors/flash.js:24'),
              n.remove(),
              t && !t.querySelector('.flash') && t.remove();
          });
        const zo = new WeakMap();
        function Vo(e) {
          if (!(e instanceof CustomEvent)) return;
          const t = e.currentTarget;
          if (!(t instanceof HTMLElement)) return;
          let n = t.querySelector('[data-filterable-notice]');
          n ||
            ((n = document.createElement('div')).classList.add('sr-only'),
            n.setAttribute('data-filterable-notice', ''),
            n.setAttribute('aria-live', 'polite'),
            t.append(n)),
            (n.textContent = ''),
            (n.textContent = `${e.detail} results found.`);
        }
        function Ko(e, t) {
          const n = e.currentTarget;
          h(n instanceof Element, 'app/assets/modules/github/behaviors/include-fragment.js:30');
          for (const s of n.querySelectorAll('[data-show-on-error]')) s.hidden = !t;
          for (const s of n.querySelectorAll('[data-hide-on-error]')) s.hidden = t;
        }
        function Yo(e) {
          Ko(e, !1);
        }
        function Xo(e) {
          Ko(e, !0);
        }
        document.addEventListener(
          'focus',
          function(e) {
            const t = e.target;
            zo.get(t) || (L(t, 'focusin:delay'), zo.set(t, !0));
          },
          { capture: !0 },
        ),
          document.addEventListener(
            'blur',
            function(e) {
              setTimeout(function() {
                const t = e.target;
                t !== document.activeElement && (L(t, 'focusout:delay'), zo.delete(e.target));
              }, 200);
            },
            { capture: !0 },
          ),
          i('fuzzy-list', {
            constructor: FuzzyListElement,
            add(e) {
              e.addEventListener('fuzzy-list-sorted', Vo);
            },
            remove(e) {
              e.removeEventListener('fuzzy-list-sorted', Vo);
            },
          }),
          v('.js-immediate-updates', async function(e, t) {
            let n;
            try {
              n = (await t.json()).json.updateContent;
            } catch (s) {
              s.response.json && (n = s.response.json.updateContent);
            }
            if (n)
              for (const o in n) {
                const e = n[o],
                  t = document.querySelector(o);
                t && $(t, e);
              }
          }),
          i('include-fragment, poll-include-fragment', {
            subscribe: e => F(q(e, 'error', Xo), q(e, 'loadstart', Yo)),
          }),
          u('click', 'include-fragment button[data-retry-button]', ({ currentTarget: e }) => {
            const t = m(e, 'include-fragment', IncludeFragmentElement),
              n = t.src;
            (t.src = ''), (t.src = n);
          }),
          i('[data-indeterminate]', {
            constructor: HTMLInputElement,
            initialize(e) {
              e.indeterminate = !0;
            },
          }),
          v('.js-notice-dismiss', async function(e, t) {
            await t.text(), m(e, '.js-notice').remove();
          });
        class PasswordStrengthElement extends HTMLElement {
          connectedCallback() {
            this.addEventListener('input', Jo);
          }
          disconnectedCallback() {
            this.removeEventListener('input', Jo);
          }
        }
        function Jo(e) {
          const t = e.currentTarget;
          if (!(t instanceof PasswordStrengthElement)) return;
          const n = e.target;
          if (!(n instanceof HTMLInputElement)) return;
          const s = (function(e, t) {
            const n = {
              valid: !1,
              hasMinimumCharacterCount: e.length >= t.minimumCharacterCount,
              hasMinimumPassphraseLength: e.length >= t.passphraseLength,
              hasLowerCase: /[a-z]/.test(e),
              hasNumber: /\d/.test(e),
            };
            return (
              (n.valid =
                n.hasMinimumPassphraseLength ||
                (n.hasMinimumCharacterCount && n.hasLowerCase && n.hasNumber)),
              n
            );
          })(n.value, {
            minimumCharacterCount: Number(p(t, 'minimum-character-count')),
            passphraseLength: Number(p(t, 'passphrase-length')),
          });
          if (s.valid) {
            n.setCustomValidity('');
            const e = t.querySelector('dl.form-group');
            e && (e.classList.remove('errored'), e.classList.add('successed'));
          } else n.setCustomValidity(p(t, 'invalid-message'));
          !(function(e, t) {
            const n = g(e, '[data-more-than-n-chars]'),
              s = g(e, '[data-min-chars]'),
              o = g(e, '[data-number-requirement]'),
              i = g(e, '[data-letter-requirement]'),
              r = p(e, 'error-class')
                .split(' ')
                .filter(e => e.length > 0),
              a = p(e, 'pass-class')
                .split(' ')
                .filter(e => e.length > 0);
            for (const c of [n, s, o, i]) c.classList.remove(...r, ...a);
            if (t.hasMinimumPassphraseLength) n.classList.add(...a);
            else if (t.valid) s.classList.add(...a), o.classList.add(...a), i.classList.add(...a);
            else {
              const e = t.hasMinimumCharacterCount ? a : r,
                c = t.hasNumber ? a : r,
                l = t.hasLowerCase ? a : r;
              n.classList.add(...r),
                s.classList.add(...e),
                o.classList.add(...c),
                i.classList.add(...l);
            }
          })(t, s);
        }
        function Go(e) {
          return null == e.getAttribute('data-pjax-preserve-scroll') && 0;
        }
        function Qo(e) {
          let t = e;
          for (; t; ) {
            const e = t.getAttribute('data-pjax');
            if (e && 'true' !== e) return document.querySelector(e);
            t = t.parentElement && t.parentElement.closest('[data-pjax]');
          }
          return e.closest('[data-pjax-container]');
        }
        window.customElements.get('password-strength') ||
          ((window.PasswordStrengthElement = PasswordStrengthElement),
          window.customElements.define('password-strength', PasswordStrengthElement)),
          u('click', '.js-permalink-shortcut', function(e) {
            const t = e.currentTarget;
            h(
              t instanceof HTMLAnchorElement,
              'app/assets/modules/github/behaviors/permalink.js:16',
            );
            try {
              x(null, '', t.href + window.location.hash);
            } catch (n) {
              window.location = t.href + window.location.hash;
            }
            e.preventDefault();
          }),
          u('click', '[data-pjax] a, a[data-pjax]', function(e) {
            h(e instanceof MouseEvent, 'app/assets/modules/github/behaviors/pjax.js:54');
            const t = e.currentTarget;
            if (t instanceof HTMLAnchorElement) {
              if (null != t.getAttribute('data-skip-pjax')) return;
              if (null != t.getAttribute('data-remote')) return;
              const n = Qo(t);
              n && O(e, { container: n, scrollTo: Go(t) });
            }
          }),
          u('submit', 'form[data-pjax]', function(e) {
            h(e instanceof Event, 'app/assets/modules/github/behaviors/pjax.js:75');
            const t = e.target,
              n = Qo(t);
            n && W(e, { container: n, scrollTo: Go(t) });
          }),
          u('change', 'select[data-pjax]', function(e) {
            const t = e.currentTarget;
            h(t instanceof HTMLSelectElement, 'app/assets/modules/github/behaviors/pjax.js:88');
            const n = Qo(t);
            n && U({ url: t.value, container: n });
          }),
          (async function() {
            await z;
            const e = document.getElementById('js-pjax-loader-bar');
            if (!e) return;
            const t = e.firstElementChild;
            if (!(t instanceof HTMLElement)) return;
            let n = 0,
              s = null,
              o = null;
            function i(e) {
              0 === e &&
                (null == o && (o = getComputedStyle(t).transition), (t.style.transition = 'none')),
                (n = e),
                (t.style.width = `${n}%`),
                0 === e && (t.clientWidth, (t.style.transition = o || ''));
            }
            function r() {
              0 === n && (n = 12), i(Math.min(n + 3, 95)), (s = setTimeout(r, 500));
            }
            document.addEventListener('pjax:start', function() {
              i(0), e.classList.add('is-loading'), (s = setTimeout(r, 0));
            }),
              document.addEventListener('pjax:end', function() {
                s && clearTimeout(s), i(100), e.classList.remove('is-loading');
              }),
              document.addEventListener('pjax:timeout', function(e) {
                e.preventDefault();
              });
          })();
        let Zo = null;
        const ei = 'last_pjax_request',
          ti = 'pjax_start',
          ni = 'pjax_end';
        function si(e, t) {
          return e.split('/', 3).join('/') === t.split('/', 3).join('/');
        }
        window.performance.getEntriesByName &&
          (document.addEventListener('pjax:start', function(e) {
            e instanceof CustomEvent &&
              e.detail &&
              e.detail.url &&
              (window.performance.mark(ti), (Zo = e.detail.url));
          }),
          document.addEventListener('pjax:end', async function() {
            if ((await H(), !window.performance.getEntriesByName(ti).length)) return;
            window.performance.mark(ni), window.performance.measure(ei, ti, ni);
            const e = window.performance.getEntriesByName(ei).pop(),
              t = e ? e.duration : null;
            t &&
              (Zo && C({ requestUrl: Zo, pjaxDuration: Math.round(t) }),
              window.performance.clearMarks(ti),
              window.performance.clearMarks(ni),
              window.performance.clearMeasures(ei));
          })),
          document.addEventListener('pjax:click', function(e) {
            if (window.onbeforeunload) return e.preventDefault();
          }),
          u('pjax:click', '#js-repo-pjax-container a[href]', function(e) {
            h(
              e.currentTarget instanceof HTMLAnchorElement,
              'app/assets/modules/github/behaviors/pjax/exceptions.js:25',
            );
            const t = e.currentTarget.pathname;
            si(t, location.pathname)
              ? (function(e) {
                  const t = e.split('/')[3];
                  return (
                    [
                      'projects',
                      'releases',
                      'tags',
                      'wiki',
                      'community',
                      'security',
                      'packages',
                    ].includes(t) && si(e, location.pathname)
                  );
                })(t) && e.preventDefault()
              : e.preventDefault();
          }),
          u('pjax:click', '.js-comment-body', function(e) {
            const t = e.target;
            t instanceof HTMLAnchorElement &&
              'files' === t.pathname.split('/')[3] &&
              e.preventDefault();
          });
        const oi = {};
        function ii(e) {
          const t = e.target;
          if (
            (h(
              t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement,
              'app/assets/modules/github/behaviors/quick-submit.js:18',
            ),
            (e.ctrlKey || e.metaKey) && 'Enter' === e.key)
          ) {
            const n = t.form;
            h(
              n instanceof HTMLFormElement,
              'app/assets/modules/github/behaviors/quick-submit.js:22',
            );
            const s = n.querySelector('input[type=submit], button[type=submit]');
            if (e.shiftKey) {
              const e = n.querySelector('.js-quick-submit-alternative');
              (e instanceof HTMLInputElement || e instanceof HTMLButtonElement) &&
                !e.disabled &&
                y(n, e);
            } else
              ((s instanceof HTMLInputElement || s instanceof HTMLButtonElement) && s.disabled) ||
                y(n);
            e.preventDefault();
          }
        }
        function ri(e) {
          if (null === e.parentNode || !(e.parentNode instanceof HTMLElement)) throw new Error();
          for (var t = e.parentNode.children, n = 0; n < t.length; ++n) if (t[n] === e) return n;
          return 0;
        }
        (async () => {
          await z,
            (oi[document.location.pathname] = Array.from(
              document.querySelectorAll('head [data-pjax-transient]'),
            ));
        })(),
          document.addEventListener('pjax:beforeReplace', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/behaviors/pjax/head.js:14');
            const t = e.detail.contents;
            for (let n = 0; n < t.length; n++) {
              const e = t[n];
              if (e)
                if ('pjax-head' === e.id)
                  (oi[document.location.pathname] = Array.from(e.children)), (t[n] = null);
                else if ('js-flash-container' === e.id) {
                  const s = document.querySelector('#js-flash-container');
                  s && s.replaceWith(e), (t[n] = null);
                }
            }
          }),
          document.addEventListener('pjax:end', function() {
            const e = oi[document.location.pathname];
            if (!e) return;
            const t = document.head;
            h(t, 'app/assets/modules/github/behaviors/pjax/head.js:35');
            for (const n of document.querySelectorAll('head [data-pjax-transient]')) n.remove();
            for (const n of e)
              n.matches('title, script, link[rel=stylesheet]')
                ? n.matches('link[rel=stylesheet]') && t.append(n)
                : (n.setAttribute('data-pjax-transient', ''), t.append(n));
          }),
          N('keydown', '.js-quick-submit', function(e) {
            ii(e);
          });
        var ai = 0;
        function ci(e) {
          return e
            .replace(/&/g, '&amp;')
            .replace(/'/g, '&apos;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        }
        var li = {
          INPUT: function(e) {
            return e instanceof HTMLInputElement && e.checked ? '[x] ' : '[ ] ';
          },
          CODE: function(e) {
            var t = e.textContent;
            return e.parentNode && 'PRE' === e.parentNode.nodeName
              ? ((e.textContent = '```\n'.concat(t.replace(/\n+$/, ''), '\n```\n\n')), e)
              : t.indexOf('`') >= 0
              ? '`` '.concat(t, ' ``')
              : '`'.concat(t, '`');
          },
          STRONG: function(e) {
            return '**'.concat(e.textContent, '**');
          },
          EM: function(e) {
            return '_'.concat(e.textContent, '_');
          },
          DEL: function(e) {
            return '~'.concat(e.textContent, '~');
          },
          BLOCKQUOTE: function(e) {
            var t = e.textContent.trim().replace(/^/gm, '> '),
              n = document.createElement('pre');
            return (n.textContent = ''.concat(t, '\n\n')), n;
          },
          A: function(e) {
            var t = e.textContent,
              n = e.getAttribute('href');
            return /^https?:/.test(t) && t === n ? t : n ? '['.concat(t, '](').concat(n, ')') : t;
          },
          IMG: function(e) {
            var t = e.getAttribute('alt') || '',
              n = e.getAttribute('src');
            if (!n) throw new Error();
            var s = e.hasAttribute('width')
                ? ' width="'.concat(ci(e.getAttribute('width') || ''), '"')
                : '',
              o = e.hasAttribute('height')
                ? ' height="'.concat(ci(e.getAttribute('height') || ''), '"')
                : '';
            return s || o
              ? '<img alt="'
                  .concat(ci(t), '"')
                  .concat(s)
                  .concat(o, ' src="')
                  .concat(ci(n), '">')
              : '!['.concat(t, '](').concat(n, ')');
          },
          LI: function(e) {
            var t = e.parentNode;
            if (!t) throw new Error();
            var n,
              s,
              o,
              i = '';
            if (
              ((s = (n = e).childNodes[0]),
              (o = n.childNodes[1]),
              !(s && n.childNodes.length < 3) ||
                (('OL' !== s.nodeName && 'UL' !== s.nodeName) ||
                  (o && (o.nodeType !== Node.TEXT_NODE || o.textContent.trim()))))
            )
              if ('OL' === t.nodeName)
                if (ai > 0 && !t.previousSibling) {
                  var r = ri(e) + ai + 1;
                  i = ''.concat(r, '\\. ');
                } else i = ''.concat(ri(e) + 1, '. ');
              else i = '* ';
            var a = i.replace(/\S/g, ' '),
              c = e.textContent.trim().replace(/^/gm, a),
              l = document.createElement('pre');
            return (l.textContent = c.replace(a, i)), l;
          },
          OL: function(e) {
            var t = document.createElement('li');
            return t.appendChild(document.createElement('br')), e.append(t), e;
          },
          H1: function(e) {
            var t = parseInt(e.nodeName.slice(1));
            return e.prepend(''.concat(Array(t + 1).join('#'), ' ')), e;
          },
          UL: function(e) {
            return e;
          },
        };
        li.UL = li.OL;
        for (var ui = 2; ui <= 6; ++ui) li['H'.concat(ui)] = li.H1;
        function di(e) {
          for (
            var t = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT, function(e) {
                return (e.nodeName in li) &&
                  !(function(e) {
                    return (
                      e instanceof HTMLAnchorElement &&
                      1 === e.childNodes.length &&
                      e.childNodes[0] instanceof HTMLImageElement &&
                      e.childNodes[0].src === e.href
                    );
                  })(e) &&
                  ((function(e) {
                    return 'IMG' === e.nodeName || null != e.firstChild;
                  })(e) ||
                    (function(e) {
                      return (
                        'INPUT' === e.nodeName &&
                        e instanceof HTMLInputElement &&
                        'checkbox' === e.type
                      );
                    })(e))
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP;
              }),
              n = [],
              s = t.nextNode();
            s;

          )
            s instanceof HTMLElement && n.push(s), (s = t.nextNode());
          n.reverse();
          for (var o = 0; o < n.length; o++) (s = n[o]).replaceWith(li[s.nodeName](s));
        }
        var mi = new WeakMap(),
          fi = 0,
          pi = /\bEdge\//.test(navigator.userAgent);
        function gi(e, t) {
          return (
            (function(e, t) {
              var n = 0 === fi;
              fi += mi.has(e) ? 0 : 1;
              var s = Object.assign({ quoteMarkdown: !1, copyMarkdown: !1, scopeSelector: '' }, t);
              mi.set(e, s), n && document.addEventListener('keydown', ji);
              s.copyMarkdown && e.addEventListener('copy', hi);
            })(e, t),
            {
              unsubscribe: function() {
                !(function(e) {
                  var t = mi.get(e);
                  if (null == t) return;
                  mi.delete(e), 0 == (fi -= 1) && document.removeEventListener('keydown', ji);
                  t.copyMarkdown && e.removeEventListener('copy', hi);
                })(e);
              },
            }
          );
        }
        function hi(e) {
          var t = e.target;
          if (t instanceof HTMLElement && !wi(t)) {
            var n = e.clipboardData;
            if (n) {
              var s,
                o = window.getSelection();
              try {
                s = o.getRangeAt(0);
              } catch (a) {
                return;
              }
              var i = o.toString(),
                r = Li(i, s, !0);
              r &&
                (n.setData('text/plain', i),
                n.setData('text/x-gfm', r.selectionText),
                e.preventDefault(),
                o.removeAllRanges(),
                o.addRange(s));
            }
          }
        }
        function bi(e) {
          for (var t = e; (t = t.parentElement); ) if (mi.has(t)) return t;
        }
        function vi(e) {
          var t,
            n = !0,
            s = !1,
            o = void 0;
          try {
            for (
              var i, r = e.querySelectorAll('textarea')[Symbol.iterator]();
              !(n = (i = r.next()).done);
              n = !0
            ) {
              var a = i.value;
              if (
                a instanceof HTMLTextAreaElement &&
                !((t = a).offsetWidth <= 0 && t.offsetHeight <= 0)
              )
                return a;
            }
          } catch (c) {
            (s = !0), (o = c);
          } finally {
            try {
              n || null == r.return || r.return();
            } finally {
              if (s) throw o;
            }
          }
        }
        function ji(e) {
          if (
            !(function(e) {
              return (
                e.defaultPrevented ||
                'r' !== e.key ||
                e.metaKey ||
                e.altKey ||
                e.shiftKey ||
                e.ctrlKey ||
                (e.target instanceof HTMLElement && wi(e.target))
              );
            })(e)
          ) {
            var t,
              n = window.getSelection();
            try {
              t = n.getRangeAt(0);
            } catch (s) {
              return;
            }
            yi(n.toString(), t) && e.preventDefault();
          }
        }
        function yi(e, t) {
          var n = Li(e, t, !1);
          if (!n) return !1;
          var s = n.container,
            o = n.selectionText;
          if (
            !s.dispatchEvent(
              new CustomEvent('quote-selection', {
                bubbles: !0,
                cancelable: !0,
                detail: { range: t, selectionText: o },
              }),
            )
          )
            return !0;
          var i = vi(s);
          return (
            !!i &&
            ((function(e, t) {
              var n = '> '.concat(e.replace(/\n/g, '\n> '), '\n\n');
              t.value && (n = ''.concat(t.value, '\n\n').concat(n));
              (t.value = n),
                t.dispatchEvent(new CustomEvent('change', { bubbles: !0, cancelable: !1 })),
                t.focus(),
                (t.selectionStart = t.value.length),
                (t.scrollTop = t.scrollHeight);
            })(o, i),
            !0)
          );
        }
        function Li(e, t, n) {
          var s = e.trim();
          if (s) {
            var o = t.startContainer;
            if (
              o &&
              (o.nodeType !== Node.ELEMENT_NODE && (o = o.parentNode), o instanceof Element)
            ) {
              var i = bi(o);
              if (i) {
                var r = mi.get(i);
                if (r) {
                  if (r.quoteMarkdown && !pi)
                    try {
                      var a = (function(e, t) {
                        var n = e.startContainer;
                        if (!(n && n.parentNode && n.parentNode instanceof HTMLElement))
                          throw new Error('the range must start within an HTMLElement');
                        var s = n.parentNode,
                          o = e.cloneContents();
                        if (t) {
                          var i = o.querySelector(t);
                          i && (o = document.createDocumentFragment()).appendChild(i);
                        }
                        ai = 0;
                        var r = s.closest('li');
                        if (s.closest('pre')) {
                          var a = document.createElement('pre');
                          a.appendChild(o), (o = document.createDocumentFragment()).appendChild(a);
                        } else if (
                          r &&
                          r.parentNode &&
                          ('OL' === r.parentNode.nodeName && (ai = ri(r)), !o.querySelector('li'))
                        ) {
                          var c = document.createElement('li');
                          if (!r.parentNode) throw new Error();
                          var l = document.createElement(r.parentNode.nodeName);
                          c.appendChild(o),
                            l.appendChild(c),
                            (o = document.createDocumentFragment()).appendChild(l);
                        }
                        return o;
                      })(t, r.scopeSelector);
                      i.dispatchEvent(
                        new CustomEvent('quote-selection-markdown', {
                          bubbles: !0,
                          cancelable: !1,
                          detail: { fragment: a, range: t, unwrap: n },
                        }),
                      ),
                        di(a),
                        (s = (function(e) {
                          var t = document.body;
                          if (!t) return '';
                          var n = document.createElement('div');
                          n.appendChild(e),
                            (n.style.cssText = 'position:absolute;left:-9999px;'),
                            t.appendChild(n);
                          var s = '';
                          try {
                            var o = window.getSelection(),
                              i = document.createRange();
                            i.selectNodeContents(n),
                              o.removeAllRanges(),
                              o.addRange(i),
                              (s = o.toString()),
                              o.removeAllRanges(),
                              i.detach();
                          } finally {
                            t.removeChild(n);
                          }
                          return s;
                        })(a)
                          .replace(/^\n+/, '')
                          .replace(/\s+$/, ''));
                    } catch (c) {
                      setTimeout(function() {
                        throw c;
                      });
                    }
                  return { selectionText: s, container: i };
                }
              }
            }
          }
        }
        function wi(e) {
          var t = e.nodeName.toLowerCase(),
            n = (e.getAttribute('type') || '').toLowerCase();
          return (
            'select' === t ||
            'textarea' === t ||
            ('input' === t && 'submit' !== n && 'reset' !== n) ||
            e.isContentEditable
          );
        }
        function Ei(e) {
          return 'DIV' === e.nodeName && e.classList.contains('highlight');
        }
        i('.js-quote-selection-container', {
          subscribe: e =>
            gi(e, {
              quoteMarkdown: e.hasAttribute('data-quote-markdown'),
              scopeSelector: e.getAttribute('data-quote-markdown') || '',
              copyMarkdown: !1,
            }),
        }),
          document.addEventListener('quote-selection-markdown', function(e) {
            if (!(e instanceof CustomEvent)) return;
            const t = e.detail,
              { fragment: n, range: s, unwrap: o } = t,
              i = s.startContainer.parentElement,
              r = i && i.closest('pre');
            if (r instanceof HTMLElement && !o) {
              const e = r.parentElement;
              if (e && Ei(e)) {
                const t = document.createElement('div');
                (t.className = e.className), t.appendChild(n), n.appendChild(t);
              }
            }
            !(function(e) {
              const t = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT, function(e) {
                  return e.nodeName in Ti &&
                    (function(e) {
                      return 'IMG' === e.nodeName || null != e.firstChild;
                    })(e)
                    ? NodeFilter.FILTER_ACCEPT
                    : NodeFilter.FILTER_SKIP;
                }),
                n = [];
              let s = t.nextNode();
              for (; s; ) s instanceof HTMLElement && n.push(s), (s = t.nextNode());
              for (s of (n.reverse(), n)) s.replaceWith(Ti[s.nodeName](s));
            })(n);
          });
        const Ti = {
          PRE(e) {
            const t = e.parentElement;
            if (t && Ei(t)) {
              const n = t.className.match(/highlight-source-(\S+)/),
                s = n ? n[1] : '',
                o = e.textContent.replace(/\n+$/, '');
              (e.textContent = `\`\`\`${s}\n${o}\n\`\`\``), e.append('\n\n');
            }
            return e;
          },
          A(e) {
            const t = e.textContent;
            return e.classList.contains('user-mention') || e.classList.contains('team-mention')
              ? t
              : e.classList.contains('issue-link') && /^#\d+$/.test(t)
              ? t
              : e;
          },
          IMG(e) {
            const t = e.getAttribute('alt');
            return t && e.classList.contains('emoji') ? t : e;
          },
          DIV(e) {
            if (e.classList.contains('js-suggested-changes-blob')) e.remove();
            else if (e.classList.contains('blob-wrapper-embedded')) {
              const t = e.parentElement;
              if (!t) throw new Error();
              const n = g(t, 'a[href]', HTMLAnchorElement),
                s = document.createElement('p');
              (s.textContent = n.href), t.replaceWith(s);
            }
            return e;
          },
        };
        let ki, Mi;
        function Ai(e, t) {
          return (
            (function(e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function(e, t) {
              var n = [],
                s = !0,
                o = !1,
                i = void 0;
              try {
                for (
                  var r, a = e[Symbol.iterator]();
                  !(s = (r = a.next()).done) && (n.push(r.value), !t || n.length !== t);
                  s = !0
                );
              } catch (c) {
                (o = !0), (i = c);
              } finally {
                try {
                  s || null == a.return || a.return();
                } finally {
                  if (o) throw i;
                }
              }
              return n;
            })(e, t) ||
            (function() {
              throw new TypeError('Invalid attempt to destructure non-iterable instance');
            })()
          );
        }
        u('click', '.js-comment-quote-reply', function({ currentTarget: e }) {
          const t = m(e, '.js-comment'),
            n = g(t, '.js-comment-body');
          if (Mi && 'Range' === Mi.type && n.contains(Mi.anchorNode)) yi(Mi.text, Mi.range);
          else {
            const e = window.getSelection();
            e.removeAllRanges(), e.selectAllChildren(n), yi(e.toString(), e.getRangeAt(0));
          }
        }),
          document.addEventListener(
            'selectionchange',
            j(function() {
              const e = window.getSelection();
              let t;
              try {
                t = e.getRangeAt(0);
              } catch (n) {
                return void (ki = null);
              }
              ki = { type: e.type, anchorNode: e.anchorNode, text: e.toString(), range: t };
            }, 100),
          ),
          document.addEventListener(
            'toggle',
            function(e) {
              const t = e.target;
              if (!(t instanceof Element && t.hasAttribute('open'))) return;
              Mi = ki;
              const n = t.querySelector('.js-comment-quote-reply.d-none');
              if (!n) return;
              const s = bi(t);
              s &&
                (s.querySelector('.js-inline-comment-form-container') || vi(s)) &&
                n.classList.remove('d-none');
            },
            { capture: !0 },
          ),
          i('.has-removed-contents', function() {
            let e;
            return {
              add(t) {
                e = Array.from(t.childNodes);
                for (const s of e) t.removeChild(s);
                const n = t.closest('form');
                n && L(n, 'change');
              },
              remove(t) {
                for (const s of e) t.appendChild(s);
                const n = t.closest('form');
                n && L(n, 'change');
              },
            };
          }),
          v('form[data-replace-remote-form]', async function(e, t) {
            e.classList.remove('is-error'), e.classList.add('is-loading');
            try {
              const s = await t.html();
              (e.closest('[data-replace-remote-form-target]') || e).replaceWith(s.html);
            } catch (n) {
              e.classList.remove('is-loading'), e.classList.add('is-error');
            }
          });
        var xi = null;
        function Si(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.selector,
            s = void 0 === n ? '.js-session-resumable' : n,
            o = t.keyPrefix,
            i = ''.concat(void 0 === o ? 'session-resume:' : o).concat(e),
            r = [],
            a = !0,
            c = !1,
            l = void 0;
          try {
            for (
              var u, d = document.querySelectorAll(s)[Symbol.iterator]();
              !(a = (u = d.next()).done);
              a = !0
            ) {
              var m = u.value;
              (m instanceof HTMLInputElement || m instanceof HTMLTextAreaElement) && r.push(m);
            }
          } catch (p) {
            (c = !0), (l = p);
          } finally {
            try {
              a || null == d.return || d.return();
            } finally {
              if (c) throw l;
            }
          }
          var f = r
            .filter(function(e) {
              return (function(e) {
                return e.id && e.value !== e.defaultValue && e.form !== xi;
              })(e);
            })
            .map(function(e) {
              return [e.id, e.value];
            });
          if (f.length)
            try {
              sessionStorage.setItem(i, JSON.stringify(f));
            } catch (g) {}
        }
        function Hi(e) {
          var t,
            n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).keyPrefix,
            s = ''.concat(void 0 === n ? 'session-resume:' : n).concat(e);
          try {
            t = sessionStorage.getItem(s);
          } catch (g) {}
          if (t) {
            try {
              sessionStorage.removeItem(s);
            } catch (g) {}
            var o = [],
              i = !0,
              r = !1,
              a = void 0;
            try {
              for (
                var c, l = JSON.parse(t)[Symbol.iterator]();
                !(i = (c = l.next()).done);
                i = !0
              ) {
                var u = Ai(c.value, 2),
                  d = u[0],
                  m = u[1],
                  f = new CustomEvent('session:resume', {
                    bubbles: !0,
                    cancelable: !0,
                    detail: { targetId: d, targetValue: m },
                  });
                if (document.dispatchEvent(f)) {
                  var p = document.getElementById(d);
                  p &&
                    (p instanceof HTMLInputElement || p instanceof HTMLTextAreaElement) &&
                    p.value === p.defaultValue &&
                    ((p.value = m), o.push(p));
                }
              }
            } catch (h) {
              (r = !0), (a = h);
            } finally {
              try {
                i || null == l.return || l.return();
              } finally {
                if (r) throw a;
              }
            }
            setTimeout(function() {
              for (var e = 0; e < o.length; e++) {
                o[e].dispatchEvent(new CustomEvent('change', { bubbles: !0, cancelable: !0 }));
              }
            }, 0);
          }
        }
        function Ci(e) {
          const t = e || window.location,
            n = document.head && document.head.querySelector('meta[name=session-resume-id]');
          return (n instanceof HTMLMetaElement && n.content) || t.pathname;
        }
        window.addEventListener(
          'submit',
          function(e) {
            (xi = e.target),
              setTimeout(function() {
                e.defaultPrevented && (xi = null);
              }, 0);
          },
          { capture: !0 },
        ),
          window.addEventListener('pageshow', function() {
            Hi(Ci());
          }),
          window.addEventListener('pjax:end', function() {
            Hi(Ci());
          }),
          window.addEventListener('pagehide', function() {
            Si(Ci(), { selector: '.js-session-resumable' });
          }),
          window.addEventListener('pjax:beforeReplace', function(e) {
            const t = e.detail.previousState,
              n = t ? t.url : null;
            if (n)
              Si(Ci(new URL(n, window.location.origin)), { selector: '.js-session-resumable' });
            else {
              const e = new Error('pjax:beforeReplace event.detail.previousState.url is undefined');
              setTimeout(function() {
                throw e;
              });
            }
          }),
          i('textarea.js-size-to-fit', {
            constructor: HTMLTextAreaElement,
            subscribe: function(e) {
              var t = null,
                n = !1,
                s = void 0,
                o = void 0,
                i = void 0;
              function r(t) {
                if (s !== t.clientX || o !== t.clientY) {
                  var a = e.style.height;
                  i &&
                    i !== a &&
                    ((n = !0), (e.style.maxHeight = ''), e.removeEventListener('mousemove', r)),
                    (i = a);
                }
                (s = t.clientX), (o = t.clientY);
              }
              var a = e.ownerDocument,
                c = a.documentElement;
              function l() {
                if (!(n || e.value === t || (e.offsetWidth <= 0 && e.offsetHeight <= 0))) {
                  var s = (function() {
                      for (var t = 0, n = e; n !== a.body && null !== n; )
                        (t += n.offsetTop || 0), (n = n.offsetParent);
                      var s = t - a.defaultView.pageYOffset;
                      return { top: s, bottom: c.clientHeight - (s + e.offsetHeight) };
                    })(),
                    o = s.top,
                    r = s.bottom;
                  if (!(o < 0 || r < 0)) {
                    var l = Number(getComputedStyle(e).height.replace(/px/, '')) + r;
                    e.style.maxHeight = l - 100 + 'px';
                    var u = e.parentElement;
                    if (u instanceof HTMLElement) {
                      var d = u.style.height;
                      (u.style.height = getComputedStyle(u).height),
                        (e.style.height = 'auto'),
                        (e.style.height = e.scrollHeight + 'px'),
                        (u.style.height = d),
                        (i = e.style.height);
                    }
                    t = e.value;
                  }
                }
              }
              function u() {
                (n = !1), (e.style.height = ''), (e.style.maxHeight = '');
              }
              e.addEventListener('mousemove', r),
                e.addEventListener('input', l),
                e.addEventListener('change', l);
              var d = e.form;
              return (
                d && d.addEventListener('reset', u),
                e.value && l(),
                {
                  unsubscribe: function() {
                    e.removeEventListener('mousemove', r),
                      e.removeEventListener('input', l),
                      e.removeEventListener('change', l),
                      d && d.removeEventListener('reset', u);
                  },
                }
              );
            },
          }),
          v('.js-social-form', async function(e, t) {
            const n = await t.json(),
              s = m(e, '.js-social-container');
            for (const o of s.querySelectorAll('.js-social-count')) o.textContent = n.json.count;
          }),
          u('click', 'tab-container [role="tab"]', function(e) {
            const { currentTarget: t } = e,
              n = m(t, 'tab-container').querySelector('.js-filterable-field');
            if (n) {
              const e = t.getAttribute('data-filter-placeholder');
              e && n.setAttribute('placeholder', e), n.focus();
            }
          });
        class qi {
          constructor(e) {
            (this.container = e.container),
              (this.selections = e.selections),
              (this.inputWrap = e.inputWrap),
              (this.input = e.input),
              (this.tagTemplate = e.tagTemplate),
              h(this.input.form, 'app/assets/modules/github/behaviors/tag-input.js:63'),
              (this.form = this.input.form),
              (this.autoComplete = e.autoComplete);
          }
          setup() {
            this.container.addEventListener('click', e => {
              const t = e.target;
              h(t instanceof HTMLElement, 'app/assets/modules/github/behaviors/tag-input.js:72'),
                t.matches('.js-remove') ? this.removeTag(e) : this.onFocus();
            }),
              this.input.addEventListener('focus', this.onFocus.bind(this)),
              this.input.addEventListener('blur', this.onBlur.bind(this)),
              this.input.addEventListener('keydown', this.onKeyDown.bind(this)),
              this.form.addEventListener('submit', this.onSubmit.bind(this)),
              this.autoComplete.addEventListener('auto-complete-change', () => {
                this.selectTag(this.autoComplete.value);
              });
          }
          onFocus() {
            this.inputWrap.classList.add('focus'),
              this.input !== document.activeElement && this.input.focus();
          }
          onBlur() {
            this.inputWrap.classList.remove('focus'), this.autoComplete.open || this.onSubmit();
          }
          onSubmit() {
            this.input.value && (this.selectTag(this.input.value), (this.autoComplete.open = !1));
          }
          onKeyDown(e) {
            switch (V(e)) {
              case 'Backspace':
                this.onBackspace();
                break;
              case 'Enter':
              case 'Tab':
                this.taggifyValueWhenSuggesterHidden(e);
                break;
              case ',':
              case ' ':
                this.taggifyValue(e);
            }
          }
          taggifyValueWhenSuggesterHidden(e) {
            !this.autoComplete.open &&
              this.input.value &&
              (e.preventDefault(), this.selectTag(this.input.value));
          }
          taggifyValue(e) {
            this.input.value &&
              (e.preventDefault(), this.selectTag(this.input.value), (this.autoComplete.open = !1));
          }
          selectTag(e) {
            const t = this.normalizeTag(e),
              n = this.selectedTags();
            t &&
              n.indexOf(t) < 0 &&
              (this.selections.appendChild(this.templateTag(t)),
              (this.input.value = ''),
              L(this.form, 'tags:changed'));
          }
          removeTag(e) {
            const t = e.target;
            h(t instanceof HTMLElement, 'app/assets/modules/github/behaviors/tag-input.js:162'),
              e.preventDefault(),
              m(t, '.js-tag-input-tag').remove(),
              L(this.form, 'tags:changed');
          }
          templateTag(e) {
            const t = this.tagTemplate.cloneNode(!0);
            return (
              (g(t, 'input', HTMLInputElement).value = e),
              g(t, '.js-placeholder-tag-name').replaceWith(e),
              t.classList.remove('d-none', 'js-template'),
              t
            );
          }
          normalizeTag(e) {
            return e
              .toLowerCase()
              .trim()
              .replace(/[\s,']+/g, '-');
          }
          onBackspace() {
            if (!this.input.value) {
              const e = this.selections.querySelector('li:last-child .js-remove');
              e && e.click();
            }
          }
          selectedTags() {
            const e = f(this.selections, 'input', HTMLInputElement);
            return Array.from(e)
              .map(e => e.value)
              .filter(e => e.length > 0);
          }
        }
        async function Ii(e) {
          const t = e.currentTarget;
          if (
            (h(t instanceof HTMLElement, 'app/assets/modules/github/behaviors/team-members.js:11'),
            (n = t).getAttribute('data-hovercard-url') &&
              n.closest('[data-team-hovercards-enabled]'))
          )
            return void t.classList.remove('tooltipped');
          var n;
          const s = t.getAttribute('data-url');
          if (!s) return;
          const o = K(s),
            i = p(t, 'data-id'),
            r = document.querySelectorAll(`.js-team-mention[data-id='${i}']`);
          for (const c of r) c.removeAttribute('data-url');
          try {
            const e = await o;
            0 === e.total
              ? e.members.push('This team has no members')
              : e.total > e.members.length && e.members.push(`${e.total - e.members.length} more`),
              _i(
                r,
                (function(e) {
                  if ('ListFormat' in Intl) {
                    const t = new Intl.ListFormat();
                    return t.format(e);
                  }
                  if (0 === e.length) return '';
                  if (1 === e.length) return e[0];
                  if (2 === e.length) return e.join(' and ');
                  {
                    const t = e[e.length - 1];
                    return e
                      .slice(0, -1)
                      .concat(`and ${t}`)
                      .join(', ');
                  }
                })(e.members),
              );
          } catch (a) {
            const e = a.response ? a.response.status : 500;
            _i(r, p(t, 404 === e ? 'data-permission-text' : 'data-error-text'));
          }
        }
        function _i(e, t) {
          for (const n of e)
            n.setAttribute('aria-label', t),
              n.classList.add('tooltipped', 'tooltipped-s', 'tooltipped-multiline');
        }
        i('.js-tag-input-container', {
          constructor: HTMLElement,
          initialize(e) {
            new qi({
              container: e,
              inputWrap: g(e, '.js-tag-input-wrapper'),
              input: g(e, 'input[type="text"], input:not([type])', HTMLInputElement),
              selections: g(e, '.js-tag-input-selected-tags'),
              tagTemplate: g(e, '.js-template'),
              autoComplete: g(e, 'auto-complete', E),
            }).setup();
          },
        }),
          i('.js-team-mention', function(e) {
            e.addEventListener('mouseenter', Ii);
          });
        let $i = 0;
        function Di(e) {
          return e.classList.remove('js-unread-item', 'unread-item');
        }
        Y('.js-unread-item', function(e) {
          Di(e);
        }),
          i('.js-unread-item', {
            add() {
              $i++;
            },
            remove() {
              0 === --$i &&
                (function() {
                  if (!document.hasFocus()) return;
                  const e = document.querySelector('.js-timeline-marker-form');
                  e && e instanceof HTMLFormElement && y(e);
                })();
            },
          }),
          u('socket:message', '.js-discussion', function(e) {
            if (e.currentTarget === e.target)
              for (const t of document.querySelectorAll('.js-unread-item')) Di(t);
          });
        let Ri = 0;
        const Ni = /^\(\d+\)\s+/;
        function Bi() {
          const e = Ri ? `(${Ri}) ` : '';
          document.title.match(Ni)
            ? (document.title = document.title.replace(Ni, e))
            : (document.title = `${e}${document.title}`);
        }
        function Pi() {
          if (document.querySelector(':target')) return;
          const e = X(location.hash).toLowerCase(),
            t = J(document, `user-content-${e}`);
          t && t.scrollIntoView();
        }
        function Fi(e) {
          h(
            e.target instanceof Element,
            'app/assets/modules/github/behaviors/will-transition-once.js:26',
          ),
            e.target.classList.remove('will-transition-once');
        }
        i('.js-unread-item', {
          add() {
            Ri++, Bi();
          },
          remove() {
            Ri--, Bi();
          },
        }),
          window.addEventListener('hashchange', Pi),
          document.addEventListener('pjax:success', Pi),
          (async function() {
            await z, Pi();
          })(),
          u('click', 'a[href]', function(e) {
            const { currentTarget: t } = e;
            t instanceof HTMLAnchorElement &&
              t.href === location.href &&
              location.hash.length > 1 &&
              setTimeout(function() {
                e.defaultPrevented || Pi();
              });
          }),
          i('.will-transition-once', {
            constructor: HTMLElement,
            subscribe: e => q(e, 'transitionend', Fi),
          });
        const Oi = new S();
        async function Wi(e) {
          const t = e.getAttribute('data-item-name') || 'items',
            n = e.value,
            s = parseInt(e.getAttribute('data-item-minimum')) || 0,
            o = parseInt(e.getAttribute('data-item-maximum')) || 300,
            i = parseInt(e.getAttribute('data-item-count')) || 0,
            r = Math.max(s, parseInt(n) || 0),
            a = r > o,
            c = document.querySelector('.js-downgrade-button');
          c instanceof HTMLButtonElement && (c.disabled = r === i);
          const l = new URL(p(e, 'data-url'), window.location.origin),
            u = new URLSearchParams(l.search.slice(1));
          u.append(t, r.toString()),
            document.querySelector('.js-transform-user') && u.append('transform_user', '1'),
            (l.search = u.toString());
          const d = await Oi.push(K(l)),
            m = document.querySelector('.js-contact-us');
          m && m.classList.toggle('d-none', !a);
          const g = document.querySelector('.js-payment-summary');
          g && g.classList.toggle('d-none', a);
          const h = document.querySelector('.js-billing-section');
          h && h.classList.toggle('has-removed-contents', d.free || d.is_enterprise_cloud_trial);
          const b = document.querySelector('.js-upgrade-info');
          b && b.classList.toggle('d-none', r <= 0);
          const v = document.querySelector('.js-downgrade-info');
          v && v.classList.toggle('d-none', r >= 0);
          const j = document.querySelector('.js-extra-seats-line-item');
          j && j.classList.toggle('d-none', d.no_additional_seats),
            document.querySelector('.seat-field') &&
              (function(e) {
                for (const t of f(document, '.seat-field', HTMLInputElement)) t.value = e;
              })(n);
          const y = document.querySelector('.js-minimum-seats-disclaimer');
          y &&
            (y.classList.toggle('tooltipped', 5 === d.seats),
            y.classList.toggle('tooltipped-nw', 5 === d.seats));
          const L = d.selectors;
          for (const f in L) for (const e of document.querySelectorAll(f)) e.innerHTML = L[f];
          x(Q(), '', d.url);
        }
        i('.js-addon-purchase-field', {
          constructor: HTMLInputElement,
          add(e) {
            G(e) && Wi(e),
              T(e, function() {
                Wi(e);
              });
          },
        }),
          i('.js-addon-downgrade-field', {
            constructor: HTMLInputElement,
            add(e) {
              G(e) && Wi(e),
                e.addEventListener('change', function() {
                  Wi(e);
                });
            },
          }),
          u(
            'details-menu-selected',
            '.js-organization-container',
            function(e) {
              const t = document.querySelector('.js-addon-purchase-field'),
                n = e.target.querySelector('input:checked');
              if (t instanceof HTMLInputElement && n instanceof HTMLInputElement) {
                const e = n.getAttribute('data-upgrade-url');
                e && (t.setAttribute('data-url', e), (t.value = '0'), Wi(t));
              }
            },
            { capture: !0 },
          ),
          i('.js-repo-health', function(e) {
            const t = m(e, 'form', HTMLFormElement),
              n = g(t, '.js-comment-field', HTMLTextAreaElement),
              s = g(t, '.js-repo-name', HTMLInputElement);
            function o() {
              !(async function(e, t, n) {
                const s = g(document, '.js-repo-health-check', HTMLFormElement);
                (g(s, '.js-repo-health-name', HTMLInputElement).value = n),
                  e.classList.remove('d-none'),
                  e.classList.add('is-loading'),
                  t.setCustomValidity('checking'),
                  L(t, 'change');
                const o = await R(document, s.action, { method: 'POST', body: new FormData(s) }),
                  i = g(e, '.js-repo-health-results');
                (i.innerHTML = ''),
                  i.appendChild(o),
                  e.classList.remove('is-loading'),
                  t.setCustomValidity(''),
                  L(t, 'change');
              })(e, n, s.value);
            }
            'hidden' === s.type ? n.addEventListener('focus', o) : s.addEventListener('change', o);
          }),
          v('.js-audit-log-export-form', async function(e, t) {
            const n = g(document, '.js-audit-log-exporting'),
              s = g(document, '.js-audit-log-export-menu');
            function o(e) {
              (s.hidden = e), (n.hidden = !e);
            }
            let i;
            o(!0);
            try {
              i = await t.json();
            } catch (a) {
              return o(!1), void Z();
            }
            const r = i.json;
            try {
              await ee(r.job_url);
            } catch (a) {
              return o(!1), void Z();
            }
            o(!1), (window.location = r.export_url);
          });
        const Ui = new S();
        function zi(e) {
          const t = document.querySelector('.js-membership-tabs');
          if (t) {
            const n = e.querySelectorAll('.js-bulk-actions-toggle:checked');
            t.classList.toggle('d-none', n.length > 0);
          }
        }
        function Vi() {
          return g(document, '.js-business-saml-provider-settings-form', HTMLFormElement);
        }
        function Ki() {
          return Vi().querySelector('.js-business-saml-form-inputs');
        }
        function Yi(e) {
          e && e.classList.remove('d-none');
        }
        function Xi() {
          return (
            '1' === g(document, '.js-business-saml-currently-enabled', HTMLInputElement).value &&
            !g(document, '.js-business-enable-saml', HTMLInputElement).checked
          );
        }
        function Ji() {
          return g(document, '.is-submit-button-value', HTMLInputElement);
        }
        function Gi() {
          Vi().submit();
        }
        function Qi() {
          const e = document.querySelector('.js-business-enable-saml');
          e && e instanceof HTMLInputElement && ((e.checked = !0), Yi(Ki()));
        }
        function Zi() {
          const e =
            '0' ===
            g(document, '.js-business-two-factor-currently-enabled', HTMLInputElement).value;
          return g(document, '.js-business-enable-two-factor', HTMLInputElement).checked && e;
        }
        if (
          (u('change', '.js-bulk-actions-toggle', function(e) {
            const t = e.currentTarget,
              n = m(t, '.js-bulk-actions-container');
            L(n, 'bulk-actions:update');
          }),
          u(
            'bulk-actions:update',
            '.js-bulk-actions-container',
            j(async function(e) {
              const t = e.target,
                n = g(t, '.js-bulk-actions'),
                s = !!t.querySelector('.js-bulk-actions-toggle:checked'),
                o = await Ui.push(
                  A(
                    (function(e) {
                      const t = Array.from(e.querySelectorAll('.js-bulk-actions-toggle:checked'))
                          .map(e => p(m(e, '.js-bulk-actions-item'), 'data-bulk-actions-id'))
                          .sort(),
                        n = `${p(e, 'data-bulk-actions-parameter')}[]`,
                        s = new URL(p(e, 'data-bulk-actions-url'), window.location.origin),
                        o = new URLSearchParams(s.search.slice(1));
                      for (const i of t) o.append(n, i);
                      return (s.search = o.toString()), s.toString();
                    })(t),
                  ),
                );
              s ? (zi(t), (n.innerHTML = o)) : ((n.innerHTML = o), zi(t));
            }, 100),
          ),
          u('click', '.js-preview-sign-in-message', function(e) {
            const t = g(document, '#custom_messages_sign_in_message', HTMLTextAreaElement).value;
            g(document, '#sign_in_message', HTMLInputElement).value = t;
            const n = e.currentTarget;
            h(n instanceof HTMLButtonElement, 'app/assets/modules/github/businesses.js:16'),
              h(n.form, 'app/assets/modules/github/businesses.js:17'),
              n.form.submit();
          }),
          u('click', '.js-preview-sign-out-message', function(e) {
            const t = g(document, '#custom_messages_sign_out_message', HTMLTextAreaElement).value;
            g(document, '#sign_out_message', HTMLInputElement).value = t;
            const n = e.currentTarget;
            h(n instanceof HTMLButtonElement, 'app/assets/modules/github/businesses.js:26'),
              h(n.form, 'app/assets/modules/github/businesses.js:27'),
              n.form.submit();
          }),
          u('click', '.js-preview-auth-provider-name', function(e) {
            const t = g(document, '#custom_messages_auth_provider_name', HTMLInputElement).value;
            g(document, '#auth_provider_name', HTMLInputElement).value = t;
            const n = e.currentTarget;
            h(n instanceof HTMLButtonElement, 'app/assets/modules/github/businesses.js:36'),
              h(n.form, 'app/assets/modules/github/businesses.js:37'),
              y(n.form);
          }),
          u('click', '.js-preview-suspended-message', function(e) {
            const t = g(document, '#custom_messages_suspended_message', HTMLTextAreaElement).value;
            g(document, '#suspended_message', HTMLInputElement).value = t;
            const n = e.currentTarget;
            h(
              n instanceof HTMLButtonElement && n.form,
              'app/assets/modules/github/businesses.js:46',
            ),
              n.form.submit();
          }),
          u('click', '.js-admin-settings-policy-input', function({ currentTarget: e }) {
            h(e instanceof HTMLInputElement, 'app/assets/modules/github/businesses.js:51');
            const t = e.form;
            h(t instanceof HTMLFormElement, 'app/assets/modules/github/businesses.js:53');
            const n = g(t, '[aria-checked="true"]', HTMLButtonElement);
            y(t, n);
          }),
          u('click', '.js-business-enable-saml', function(e) {
            var t;
            h(
              e.currentTarget instanceof HTMLInputElement,
              'app/assets/modules/github/businesses.js:127',
            ),
              e.currentTarget.checked ? Yi(Ki()) : (t = Ki()) && t.classList.add('d-none');
          }),
          u('click', '.js-business-saml-submit', function(e) {
            e.preventDefault(),
              h(
                e.currentTarget instanceof HTMLButtonElement,
                'app/assets/modules/github/businesses.js:144',
              ),
              te(e.currentTarget),
              y(Vi());
          }),
          u('submit', '.js-business-saml-provider-settings-form', function(e) {
            e.preventDefault(),
              'test_settings' === Ji().name
                ? Gi()
                : 'save_settings' === Ji().name &&
                  (Xi()
                    ? (async function() {
                        (await ne({
                          content: g(
                            document,
                            '#disable-saml-confirmation',
                            HTMLTemplateElement,
                          ).content.cloneNode(!0),
                        })).addEventListener('dialog:remove', Qi);
                      })()
                    : Gi());
          }),
          u('click', '.js-enable-enable-saml-provider-button', function() {
            const e = g(document, '.js-enable-saml-provider-button', HTMLButtonElement),
              t = g(document, '.js-enable-saml-provider-instruction', HTMLElement);
            (e.disabled = !1), (t.hidden = !0);
          }),
          u('click', '.js-suggested-org', function(e) {
            if (
              (h(
                e.currentTarget instanceof HTMLElement,
                'app/assets/modules/github/businesses.js:191',
              ),
              'true' === e.currentTarget.getAttribute('aria-disabled'))
            )
              return;
            const t = m(e.currentTarget, 'form'),
              n = g(e.currentTarget, '.js-suggested-org-details-source');
            g(t, '.js-suggested-org-details-target').innerHTML = n.innerHTML;
          }),
          u('change', '.js-invite-business-org-auto-complete', function(e) {
            const t = e.currentTarget;
            h(t instanceof E, 'app/assets/modules/github/businesses.js:204');
            const n = m(t, 'form'),
              s = g(n, '.js-suggested-org-details-target');
            t.value || (s.innerHTML = '');
          }),
          u('click', '.js-business-two-factor-submit-button', function(e) {
            Zi() || e.preventDefault();
          }),
          top !== window)
        ) {
          alert('For security reasons, framing is not allowed.');
          try {
            top.location.replace(document.location.href);
          } catch (Rh) {}
        }
        const er = /\bChrome\//.test(navigator.userAgent) && !/\bEdge\//.test(navigator.userAgent),
          tr = /Macintosh.*Safari/.test(navigator.userAgent);
        let nr,
          sr = !1;
        function or() {
          (nr = document.activeElement),
            document.body && (er || tr) && document.body.classList.toggle('intent-mouse', sr);
        }
        function ir(e) {
          return e.hasAttribute('data-maxlength')
            ? parseInt(e.getAttribute('data-maxlength'))
            : e.maxLength;
        }
        function rr(e) {
          const t = ir(e);
          !(function(e, t, n) {
            const s = n.closest('.js-characters-remaining-container');
            if (!s) return;
            const o = g(s, '.js-characters-remaining'),
              i = String(o.getAttribute('data-suffix')),
              r = t - se(e);
            r <= 20
              ? ((o.textContent = `${r} ${i}`),
                o.classList.toggle('text-red', r <= 5),
                (o.hidden = !1))
              : (o.hidden = !0);
          })(e.value, t, e);
        }
        function ar(e) {
          const t = e.querySelectorAll('.js-characters-remaining-container');
          for (const n of t) {
            rr(g(n, '.js-characters-remaining-field', HTMLInputElement));
          }
        }
        document.addEventListener(
          'mousedown',
          function() {
            (sr = !0), nr === document.activeElement && or();
          },
          { capture: !0 },
        ),
          document.addEventListener(
            'keydown',
            function() {
              sr = !1;
            },
            { capture: !0 },
          ),
          document.addEventListener('focusin', or, { capture: !0 }),
          d('.js-characters-remaining-field', function(e) {
            function t() {
              rr(e);
            }
            h(
              e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement,
              'app/assets/modules/github/characters-remaining.js:60',
            ),
              t(),
              e.addEventListener('input', t),
              e.addEventListener(
                'blur',
                () => {
                  e.removeEventListener('input', t);
                },
                { once: !0 },
              );
          });
        const cr = {}.hasOwnProperty,
          lr = [].slice;
        function ur(e) {
          if (console && console.warn) return console.warn(e);
        }
        const dr = {
          host: 'collector.githubapp.com',
          type: 'page_view',
          dimensions: {},
          measures: {},
          context: {},
          actor: {},
          image: new Image(),
          performance: {},
          expectedPerformanceTimingKeys: [
            'connectEnd',
            'connectStart',
            'domComplete',
            'domContentLoadedEventEnd',
            'domContentLoadedEventStart',
            'domInteractive',
            'domLoading',
            'domainLookupEnd',
            'domainLookupStart',
            'fetchStart',
            'loadEventEnd',
            'loadEventStart',
            'navigationStart',
            'redirectEnd',
            'redirectStart',
            'requestStart',
            'responseEnd',
            'responseStart',
            'secureConnectionStart',
            'unloadEventEnd',
            'unloadEventStart',
          ],
          recordPageView() {
            return (
              this.applyMetaTags(),
              null != this.app &&
                (null == this.host
                  ? (ur('Host not set, you are doing something wrong'), !1)
                  : ((this.image.src = this._src()), this._clearPerformance(), !0))
            );
          },
          setHost(e) {
            this.host = e;
          },
          setApp(e) {
            this.app = e;
          },
          setDimensions(e) {
            this.dimensions = e;
          },
          addDimensions(e) {
            let t;
            null == this.dimensions && (this.dimensions = {});
            const n = [];
            for (t in e) {
              if (!cr.call(e, t)) continue;
              const s = e[t];
              n.push((this.dimensions[t] = s));
            }
            return n;
          },
          setMeasures(e) {
            this.measures = e;
          },
          addMeasures(e) {
            let t;
            null == this.measures && (this.measures = {});
            const n = [];
            for (t in e) {
              if (!cr.call(e, t)) continue;
              const s = e[t];
              n.push((this.measures[t] = s));
            }
            return n;
          },
          setContext(e) {
            this.context = e;
          },
          addContext(e) {
            let t;
            null == this.context && (this.context = {});
            const n = [];
            for (t in e) {
              if (!cr.call(e, t)) continue;
              const s = e[t];
              n.push((this.context[t] = s));
            }
            return n;
          },
          setActor(e) {
            this.actor = e;
          },
          push(e) {
            return this.applyCall(e);
          },
          enablePerformance() {
            this.performance = this._performanceTiming();
          },
          _recordSrc(e, t, n, s) {
            return `//${this.host}/${this.app}/${e}?${this._queryString(t, n, s)}`;
          },
          _src() {
            return `//${this.host}/${this.app}/${this.type}?${this._queryString()}`;
          },
          _queryString(e, t, n) {
            let s, o;
            const i = function() {
              const e = this._params(),
                t = [];
              for (s in e) (o = e[s]), t.push(`dimensions[${s}]=${o}`);
              return t;
            }.call(this);
            return (
              i.push(this._encodeObject('dimensions', this._merge(this.dimensions, e))),
              i.push(this._encodeObject('measures', this._merge(this.measures, t))),
              null != this.performance &&
                i.push(this._encodeObject('measures', { performance_timing: this.performance })),
              i.push(this._encodeObject('context', this._merge(this.context, n))),
              i.push(this._actor()),
              i.push(this._encodeObject('dimensions', { cid: this._clientId() })),
              i.join('&')
            );
          },
          _clearPerformance() {
            this.performance = null;
          },
          _performanceTiming() {
            let e, t, n;
            if (
              null == window.performance ||
              null == window.performance.timing ||
              null == window.performance.timing.navigationStart
            )
              return null;
            const s = {},
              o = this.expectedPerformanceTimingKeys;
            for (e = 0, t = o.length; e < t; e++) {
              const t = o[e];
              s[t] = null != (n = window.performance.timing[t]) ? n : 0;
            }
            const i = [],
              r = s.navigationStart;
            for (const a in s) {
              const e = s[a],
                t = 0 === e ? null : e - r;
              i.push(t);
            }
            return `1-${i.join('-')}`;
          },
          _params() {
            return {
              page: this._encode(this._page()),
              title: this._encode(this._title()),
              referrer: this._encode(this._referrer()),
              user_agent: this._encode(this._agent()),
              screen_resolution: this._encode(this._screenResolution()),
              pixel_ratio: this._encode(this._pixelRatio()),
              browser_resolution: this._encode(this._browserResolution()),
              tz_seconds: this._encode(this._tzSeconds()),
              timestamp: new Date().getTime(),
            };
          },
          _page() {
            try {
              const t = document.querySelector('meta[name=octolytics-location]');
              return t instanceof HTMLMetaElement
                ? document.location.origin + t.content
                : document.location.href;
            } catch (e) {}
          },
          _title() {
            try {
              return document.title;
            } catch (e) {}
          },
          _referrer() {
            let e;
            e = '';
            try {
              e = window.top.document.referrer;
            } catch (t) {
              if (window.parent)
                try {
                  e = window.parent.document.referrer;
                } catch (t) {}
            }
            return '' === e && (e = document.referrer), e;
          },
          _agent() {
            try {
              return navigator.userAgent;
            } catch (e) {}
          },
          _screenResolution() {
            try {
              return `${screen.width}x${screen.height}`;
            } catch (e) {
              return 'unknown';
            }
          },
          _pixelRatio: () => window.devicePixelRatio,
          _browserResolution() {
            let e, t;
            try {
              return (
                (t = 0),
                (e = 0),
                'number' == typeof window.innerWidth
                  ? ((t = window.innerWidth), (e = window.innerHeight))
                  : null != document.documentElement && null != document.documentElement.clientWidth
                  ? ((t = document.documentElement.clientWidth),
                    (e = document.documentElement.clientHeight))
                  : null != document.body &&
                    null != document.body.clientWidth &&
                    ((t = document.body.clientWidth), (e = document.body.clientHeight)),
                `${t}x${e}`
              );
            } catch (n) {
              return 'unknown';
            }
          },
          _tzSeconds() {
            try {
              return -60 * new Date().getTimezoneOffset();
            } catch (e) {
              return '';
            }
          },
          _merge(...e) {
            let t, n, s;
            const o = 1 <= e.length ? lr.call(e, 0) : [],
              i = {};
            for (t = 0, s = o.length; t < s; t++) {
              const e = o[t];
              for (n in e) {
                const t = e[n];
                i[n] = t;
              }
            }
            return i;
          },
          _encodeObject(e, t) {
            let n, s, o;
            const i = [];
            if (
              (null != Array.isArray && Array.isArray(t)) ||
              '[object Array]' === Object.prototype.toString.call(t)
            )
              for (n = 0, s = t.length; n < s; n++) {
                const s = t[n];
                i.push(this._encodeObject(`${e}[]`, s));
              }
            else if (t === Object(t)) for (o in t) i.push(this._encodeObject(`${e}[${o}]`, t[o]));
            else i.push(`${e}=${this._encode(t)}`);
            return i.join('&');
          },
          _actor() {
            let e, t, n;
            const s = [],
              o = this.actor;
            for (t in o) {
              const i = o[t],
                r = `dimensions[actor_${t}]`;
              if (i.join)
                for (e = 0, n = i.length; e < n; e++) {
                  const t = i[e];
                  s.push(`${r}[]=${this._encode(t)}`);
                }
              else s.push(`${r}=${this._encode(i)}`);
            }
            return s.join('&');
          },
          _getCookie(e) {
            let t, n;
            const s = [],
              o = document.cookie.split(';');
            for (t = 0, n = o.length; t < n; t++) {
              const n = o[t].trim().split('=');
              if (n.length < 2) continue;
              const i = n[0],
                r = n[1];
              i === e && s.push({ key: i, value: r });
            }
            return s;
          },
          _clientId() {
            let e;
            return '' === (e = this._getClientId()) && (e = this._setClientId()), e;
          },
          _getClientId() {
            let e, t, n;
            const s = this._getCookie('_octo'),
              o = [];
            for (t = 0, n = s.length; t < n; t++) {
              const n = s[t].value.split('.');
              if ('GH1' === n.shift() && n.length > 1) {
                const t = n.shift().split('-');
                1 === t.length && (t[1] = '1'),
                  (t[0] *= 1),
                  (t[1] *= 1),
                  (e = n.join('.')),
                  o.push([t, e]);
              }
            }
            return (e = ''), o.length > 0 && (e = o.sort().reverse()[0][1]), e;
          },
          _setClientId() {
            const e = new Date().getTime(),
              t = `${Math.round(Math.random() * (Math.pow(2, 31) - 1))}.${Math.round(e / 1e3)}`,
              n = `GH1.1.${t}`,
              s = new Date(e + 63072e6).toUTCString(),
              o = document.domain;
            if (null == o) throw new Error('Unable to get document domain');
            const i = `.${o
              .split('.')
              .reverse()
              .slice(0, 2)
              .reverse()
              .join('.')}`;
            return (document.cookie = `_octo=${n}; expires=${s}; path=/; domain=${i}`), t;
          },
          _encode: e => (null != e ? window.encodeURIComponent(e) : ''),
          applyQueuedCalls(e) {
            let t, n;
            const s = [];
            for (t = 0, n = e.length; t < n; t++) {
              const n = e[t];
              s.push(this.applyCall(n));
            }
            return s;
          },
          applyCall(e) {
            const t = e[0],
              n = e.slice(1);
            return this[t] ? this[t](...n) : ur(`${t} is not a valid method`);
          },
          applyMetaTags() {
            const e = this.loadMetaTags();
            return (
              e.host && this.setHost(e.host),
              e.app && this.setApp(e.app),
              this._objectIsEmpty(e.actor) || this.setActor(e.actor),
              this.addDimensions(e.dimensions),
              this.addMeasures(e.measures),
              this.addContext(e.context)
            );
          },
          loadMetaTags() {
            let e, t;
            const n = { dimensions: {}, measures: {}, context: {}, actor: {} },
              s = document.getElementsByTagName('meta');
            for (e = 0, t = s.length; e < t; e++) {
              const t = s[e];
              if (t.name && t.content) {
                const e = t.name.match(this.octolyticsMetaTagName);
                if (e)
                  switch (e[1]) {
                    case 'host':
                      n.host = t.content;
                      break;
                    case 'app-id':
                    case 'app':
                      n.app = t.content;
                      break;
                    case 'dimension':
                      this._addField(n.dimensions, e[2], t);
                      break;
                    case 'measure':
                      this._addField(n.measures, e[2], t);
                      break;
                    case 'context':
                      this._addField(n.context, e[2], t);
                      break;
                    case 'actor':
                      this._addField(n.actor, e[2], t);
                  }
              }
            }
            return n;
          },
          _addField(e, t, n) {
            n.attributes['data-array']
              ? (null == e[t] && (e[t] = []), e[t].push(n.content))
              : (e[t] = n.content);
          },
          _objectIsEmpty(e) {
            let t;
            for (t in e) if (cr.call(e, t)) return !1;
            return !0;
          },
          octolyticsMetaTagName: /^octolytics-(host|app-id|app|dimension|measure|context|actor)-?(.*)/,
        };
        if (window._octo) {
          if (window._octo.slice) {
            const e = window._octo.slice(0);
            (window._octo = dr), window._octo.applyQueuedCalls(e);
          }
        } else window._octo = dr;
        function mr(e) {
          const t = p(e, 'data-fieldname');
          return document.querySelectorAll(`span[data-fieldname="${t}"]`);
        }
        function fr(e, t) {
          if (e.value) for (const n of t) n.textContent = e.value;
        }
        function pr(e, t) {
          return e.length < t.length ? -1 : e.length > t.length ? 1 : e.localeCompare(t);
        }
        function gr(e, t) {
          const n = e.getBoundingClientRect();
          return (t.getBoundingClientRect().width - n.width) / 2;
        }
        function hr(e, t) {
          const n = e.querySelector('svg');
          if (!n) return;
          const s = n.querySelector('.js-highlight-blob'),
            o = Math.floor(e.clientWidth),
            i = Math.max(o, 250),
            r = i,
            a = n.querySelector('.js-highlight-label-top'),
            c = n.querySelector('.js-highlight-label-bottom'),
            l = n.querySelector('.js-highlight-label-right'),
            u = n.querySelector('.js-highlight-label-left'),
            d = n.querySelector('.js-highlight-percent-top'),
            m = n.querySelector('.js-highlight-percent-bottom'),
            f = n.querySelector('.js-highlight-percent-right'),
            p = n.querySelector('.js-highlight-percent-left'),
            g = n.querySelector('.js-highlight-x-axis'),
            b = n.querySelector('.js-highlight-y-axis'),
            v = n.querySelector('.js-highlight-top-ellipse'),
            j = n.querySelector('.js-highlight-right-ellipse'),
            y = n.querySelector('.js-highlight-bottom-ellipse'),
            L = n.querySelector('.js-highlight-left-ellipse'),
            w = e.querySelector('.js-activity-overview-graph-spinner'),
            E = n.querySelector('g');
          h(E, 'app/assets/modules/github/contributions-spider-graph.js:72'),
            h(s, 'app/assets/modules/github/contributions-spider-graph.js:73'),
            h(a, 'app/assets/modules/github/contributions-spider-graph.js:74'),
            h(c, 'app/assets/modules/github/contributions-spider-graph.js:75'),
            h(l, 'app/assets/modules/github/contributions-spider-graph.js:76'),
            h(u, 'app/assets/modules/github/contributions-spider-graph.js:77'),
            h(d, 'app/assets/modules/github/contributions-spider-graph.js:78'),
            h(m, 'app/assets/modules/github/contributions-spider-graph.js:79'),
            h(f, 'app/assets/modules/github/contributions-spider-graph.js:80'),
            h(p, 'app/assets/modules/github/contributions-spider-graph.js:81'),
            h(g, 'app/assets/modules/github/contributions-spider-graph.js:82'),
            h(b, 'app/assets/modules/github/contributions-spider-graph.js:83'),
            h(v, 'app/assets/modules/github/contributions-spider-graph.js:84'),
            h(j, 'app/assets/modules/github/contributions-spider-graph.js:85'),
            h(y, 'app/assets/modules/github/contributions-spider-graph.js:86'),
            h(L, 'app/assets/modules/github/contributions-spider-graph.js:87'),
            h(w, 'app/assets/modules/github/contributions-spider-graph.js:88'),
            E.removeAttribute('transform'),
            n.classList.remove('d-none'),
            n.classList.add('d-block'),
            w.classList.remove('d-block'),
            w.classList.add('d-none'),
            (a.innerHTML = ''),
            (l.innerHTML = ''),
            (c.innerHTML = ''),
            (u.innerHTML = ''),
            (d.innerHTML = '&nbsp;'),
            (f.innerHTML = '&nbsp;'),
            (m.innerHTML = '&nbsp;'),
            (p.innerHTML = '&nbsp;');
          const T = Object.keys(t.percentages).sort(pr),
            [k, M] = T.slice(0, 2).sort(),
            [A, x] = T.slice(2, 4).sort(),
            S = t.percentages[A],
            H = t.percentages[M],
            C = t.percentages[x],
            q = t.percentages[k];
          let I = null;
          const _ = (e, n) => {
              const s = t.percentages[e];
              if (s > 0) return (I = n), `${s}%`;
            },
            $ = _(A, d);
          $ && (d.textContent = $);
          const D = _(M, f);
          D && (f.textContent = D);
          const R = _(x, m);
          R && (m.textContent = R);
          const N = _(k, p);
          N && (p.textContent = N);
          const B = i / 2,
            P = i / 2;
          a.appendChild(document.createTextNode(A)),
            a.setAttribute('dx', B.toString()),
            c.appendChild(document.createTextNode(x)),
            c.setAttribute('dx', P.toString()),
            d.setAttribute('dx', B.toString()),
            m.setAttribute('dx', P.toString());
          const F = a.getBoundingClientRect().height;
          let O = 0;
          I && (O = I.getBoundingClientRect().height);
          let W = r / 2 + F / 4,
            U = r / 2 + F / 4;
          q > 0 && (W = W + O / 2 + 2.5),
            H > 0 && (U = U + O / 2 + 2.5),
            u.appendChild(document.createTextNode(k)),
            u.setAttribute('dy', W.toString()),
            l.appendChild(document.createTextNode(M)),
            l.setAttribute('dy', U.toString());
          const z = W - F,
            V = U - F;
          p.setAttribute('dy', z.toString()), f.setAttribute('dy', V.toString());
          let K = S / 100,
            Y = C / 100,
            X = q / 100,
            J = H / 100;
          const G = Math.max(K, Y, X, J),
            Q = e => {
              return (1 * e) / G + 0;
            };
          (K = Q(K)), (Y = Q(Y)), (X = Q(X)), (J = Q(J));
          const Z =
              (function(e) {
                let t = 0;
                for (const n of e) {
                  const e = n.getBoundingClientRect();
                  e.width > t && (t = e.width);
                }
                return t;
              })([u, l, a, c]) + 10,
            ee = Math.max(Z, F),
            te = i / 2,
            ne = r / 2,
            se = te,
            oe = ee,
            ie = te,
            re = r - ee,
            ae = ee,
            ce = ne,
            le = i - ee,
            ue = ne,
            de = te - ae,
            me = ne - oe;
          let fe = oe + (1 - K) * me,
            pe = Math.max(re - (1 - Y) * me, ne),
            ge = ae + (1 - X) * de,
            he = le - (1 - J) * de;
          g.setAttribute('x1', ae.toString()),
            g.setAttribute('y1', ne.toString()),
            g.setAttribute('x2', le.toString()),
            g.setAttribute('y2', ne.toString()),
            b.setAttribute('x1', te.toString()),
            b.setAttribute('y1', oe.toString()),
            b.setAttribute('x2', te.toString()),
            b.setAttribute('y2', re.toString()),
            fe + 4 < ne && (fe += 4),
            pe - 4 > ne && (pe -= 4),
            ge + 4 < te && (ge += 4),
            he - 4 > te && (he -= 4);
          const be = oe - 10,
            ve = le + 10;
          let je = re + 10 + 8;
          C > 0 && (je += O);
          const ye = ae - 12;
          a.setAttribute('dy', be.toString()),
            l.setAttribute('dx', ve.toString()),
            c.setAttribute('dy', je.toString()),
            u.setAttribute('dx', ye.toString());
          const Le = ye - gr(p, u),
            we = ve + gr(f, l);
          p.setAttribute('dx', Le.toString()), f.setAttribute('dx', we.toString());
          const Ee = be - F,
            Te = je - F;
          d.setAttribute('dy', Ee.toString()), m.setAttribute('dy', Te.toString());
          0 === S
            ? v.classList.add('d-none')
            : (v.setAttribute('cx', se.toString()), v.setAttribute('cy', (fe - 2).toString())),
            0 === H
              ? j.classList.add('d-none')
              : (j.setAttribute('cx', (he + 2).toString()), j.setAttribute('cy', ue.toString())),
            0 === C
              ? y.classList.add('d-none')
              : (y.setAttribute('cx', ie.toString()), y.setAttribute('cy', (pe + 2).toString())),
            0 === q
              ? L.classList.add('d-none')
              : (L.setAttribute('cx', (ge - 2).toString()), L.setAttribute('cy', ce.toString()));
          const ke = E.getBoundingClientRect(),
            Me = n.getBoundingClientRect(),
            Ae = 0 - (ke.top - Me.top),
            xe = 0 - (ke.left - Me.left);
          E.setAttribute('transform', `translate(${xe}, ${Ae})`);
          const Se = Math.ceil(ke.width),
            He = Math.ceil(ke.height);
          n.setAttribute('width', Se.toString()), n.setAttribute('height', He.toString());
          const Ce = `M${se},${fe} ${[[he, ue], [ie, pe], [ge, ce]]
            .map(e => `L${e[0]},${e[1]}`)
            .join(' ')} z`;
          S + H + C + q !== 0 && s.setAttribute('d', Ce);
        }
        document.addEventListener('keydown', e => {
          if ('Escape' !== e.key) return;
          if (e.target !== document.body) return;
          const t = document.querySelector('.js-targetable-comment:target');
          t &&
            oe(t, () => {
              (window.location.hash = ''),
                window.history.replaceState(
                  null,
                  null,
                  window.location.pathname + window.location.search,
                );
            });
        }),
          document.addEventListener('click', e => {
            const t = document.querySelector('.js-targetable-comment:target');
            t &&
              e.target instanceof HTMLElement &&
              (t.contains(e.target) ||
                oe(t, () => {
                  (window.location.hash = ''),
                    window.history.replaceState(
                      null,
                      null,
                      window.location.pathname + window.location.search,
                    );
                }));
          }),
          d('.js-template-form-input', function(e) {
            h(e instanceof HTMLInputElement, 'app/assets/modules/github/community.js:28');
            const t = mr(e);
            function n() {
              fr(e, t);
            }
            function s(e) {
              for (const n of t) n.classList.toggle('CommunityTemplate-highlight--focus', e);
            }
            s(!0),
              e.addEventListener('input', n),
              e.addEventListener('blur', function t() {
                s(!1), e.removeEventListener('input', n), e.removeEventListener('blur', t);
              });
          }),
          u('click', '.js-template-highlight', function(e) {
            (function(e) {
              const t = p(e, 'data-fieldname');
              return g(document, `input[data-fieldname="${t}"]`, HTMLInputElement);
            })(e.currentTarget).focus();
          }),
          i('.js-templates', function() {
            for (const e of f(document, '.js-template-form-input', HTMLInputElement)) {
              fr(e, mr(e));
            }
          }),
          i('.js-activity-overview-graph-container', function(e) {
            const t = p(e, 'data-percentages'),
              n = { percentages: JSON.parse(t) };
            if ((hr(e, n), 'true' === e.getAttribute('data-responsive-graph'))) {
              const t = ie(hr.bind(null, e, n), 100);
              return {
                add() {
                  window.addEventListener('resize', t);
                },
                remove() {
                  window.removeEventListener('resize', t);
                },
              };
            }
          }),
          u('submit', 'form.js-post-recovery-token', function(e) {
            const t = e.currentTarget;
            h(
              t instanceof HTMLFormElement,
              'app/assets/modules/github/delegated-account-recovery.js:41',
            ),
              e.preventDefault(),
              (async function(e) {
                const t = g(document, '.js-delegated-account-recovery-submit', HTMLButtonElement),
                  n = g(document, '.js-create-recovery-token-form', HTMLFormElement);
                e.classList.remove('failed'), e.classList.add('loading'), (t.disabled = !0);
                try {
                  const o = await re(n),
                    i = await o.json();
                  ae(e, { token: i.token, state: i.state_url }), e.submit();
                } catch (s) {
                  e.classList.remove('loading'), e.classList.add('failed'), (t.disabled = !1);
                }
              })(t);
          }),
          i('form.js-recovery-provider-auto-redirect', {
            constructor: HTMLFormElement,
            initialize: function(e) {
              e.submit();
            },
          }),
          u('click', '.js-sub-dependencies', async function({ currentTarget: e }) {
            h(e instanceof HTMLElement, 'app/assets/modules/github/dependencies.js:9');
            const t = e,
              n = t.getAttribute('data-loaded'),
              s = t.querySelector('.js-expanded'),
              o = t.querySelector('.js-collapsed'),
              i = t.closest('.js-details-container');
            if (
              (s && s.classList.toggle('d-none'),
              o && o.classList.toggle('d-none'),
              i && i.classList.toggle('bg-gray-light'),
              !n)
            ) {
              t.setAttribute('data-loaded', 'true');
              const e = p(t, 'data-sub-dependency-url'),
                n = t.closest('.js-dependency'),
                s = await R(document, e);
              n && n.after(s);
            }
          });
        let br = null;
        function vr({ currentTarget: e }) {
          h(e instanceof HTMLElement, 'app/assets/modules/github/details-element.js:27'),
            e.hasAttribute('open')
              ? (br && br !== e && br.removeAttribute('open'), (br = e))
              : e === br && (br = null);
        }
        async function jr({ currentTarget: e }) {
          h(e instanceof HTMLElement, 'app/assets/modules/github/details-element.js:45');
          const t = e,
            n = e.hasAttribute('open');
          L(t, n ? 'menu:activate' : 'menu:deactivate'),
            await H(),
            L(t, n ? 'menu:activated' : 'menu:deactivated');
        }
        function yr({ currentTarget: e }) {
          if (!(e instanceof Element)) return;
          const t = m(e, 'details'),
            n = p(t, 'data-deferred-details-content-url');
          t.removeAttribute('data-deferred-details-content-url'),
            (g(t, 'include-fragment', IncludeFragmentElement).src = n);
        }
        async function Lr(e) {
          const t = e.getAttribute('data-url');
          if (
            await (async function(e) {
              const t = e;
              if (!t) return !1;
              try {
                const e = await K(t);
                return e.has_gravatar;
              } catch (n) {
                return !1;
              }
            })(t)
          ) {
            const t = e.getAttribute('data-gravatar-text');
            null != t && (e.textContent = t);
          }
        }
        document.addEventListener('keydown', function(e) {
          !e.defaultPrevented && 'Escape' === e.key && br && br.removeAttribute('open');
        }),
          i('.js-dropdown-details', { subscribe: e => q(e, 'toggle', vr) }),
          i('details.js-select-menu', { subscribe: e => q(e, 'toggle', jr) }),
          u('menu:deactivate', 'details.js-select-menu', function(e) {
            e.currentTarget.hasAttribute('open') && e.currentTarget.removeAttribute('open');
          }),
          i('[data-deferred-details-content-url]:not([data-details-no-preload-on-hover])', {
            subscribe: e => {
              const t = g(e, 'summary');
              return q(t, 'mouseenter', yr);
            },
          }),
          i('[data-deferred-details-content-url]', { subscribe: e => q(e, 'toggle', yr) }),
          u('click', '[data-toggle-for]', function(e) {
            const t = e.currentTarget.getAttribute('data-toggle-for') || '',
              n = document.getElementById(t);
            n &&
              (n.hasAttribute('open') ? n.removeAttribute('open') : n.setAttribute('open', 'open'));
          }),
          i('.js-license-menu', e => {
            const t = g(e, 'fuzzy-list input', HTMLInputElement);
            e.addEventListener('toggle', function() {
              e.hasAttribute('open') || ((t.value = ''), L(t, 'input'));
            });
          }),
          ce(function({ target: e }) {
            if (!e || e.closest('summary')) return;
            let t = e.parentElement;
            for (; t; )
              (t = t.closest('details')) &&
                (t.hasAttribute('open') || t.setAttribute('open', ''), (t = t.parentElement));
          }),
          u('click', '.js-anon-download-zip-link', function(e) {
            const t = e.currentTarget,
              n = m(t, '.js-get-repo-modal'),
              s = g(n, '.js-modal-downloading');
            n.classList.add('is-downloading'), (s.hidden = !1);
          }),
          u(
            'toggle',
            '.js-anon-get-repo-select-menu',
            function(e) {
              const t = e.target;
              g(t, '.js-modal-downloading').hidden = t.hasAttribute('open');
            },
            { capture: !0 },
          ),
          i('.js-detect-gravatar', function(e) {
            Lr(e);
          });
        let wr = !1;
        const Er = [];
        function Tr() {
          Er.length
            ? wr ||
              (window.addEventListener('resize', kr, { passive: !0 }),
              document.addEventListener('scroll', kr, { passive: !0 }),
              (wr = !0))
            : (window.removeEventListener('resize', kr, { passive: !0 }),
              document.removeEventListener('scroll', kr, { passive: !0 }),
              (wr = !1));
        }
        function kr() {
          for (const e of Er)
            if (e.element.offsetHeight > 0) {
              const { element: t, placeholder: n, top: s } = e,
                o = t.getBoundingClientRect();
              if (n) {
                const i = n.getBoundingClientRect();
                t.classList.contains('is-stuck')
                  ? i.top > parseInt(s)
                    ? Ar(e)
                    : xr(e)
                  : o.top <= parseInt(s) && Mr(e);
              } else o.top <= parseInt(s) ? Mr(e) : Ar(e);
            }
        }
        function Mr({ element: e, placeholder: t, top: n }) {
          if (t) {
            const s = e.getBoundingClientRect();
            (e.style.top = n.toString()),
              (e.style.left = `${s.left}px`),
              (e.style.width = `${s.width}px`),
              (e.style.marginTop = '0'),
              (e.style.position = 'fixed'),
              (t.style.display = 'block');
          }
          e.classList.add('is-stuck');
        }
        function Ar({ element: e, placeholder: t }) {
          t &&
            ((e.style.position = 'static'),
            (e.style.marginTop = t.style.marginTop),
            (t.style.display = 'none')),
            e.classList.remove('is-stuck');
        }
        function xr({ element: e, placeholder: t, offsetParent: n, top: s }) {
          if (t) {
            const o = e.getBoundingClientRect(),
              i = t.getBoundingClientRect();
            if (((e.style.left = `${i.left}px`), (e.style.width = `${i.width}px`), n)) {
              const t = n.getBoundingClientRect();
              t.bottom < o.height + parseInt(s) && (e.style.top = `${t.bottom - o.height}px`);
            }
          }
        }
        function Sr(e) {
          if (
            (function(e) {
              const { position: t } = window.getComputedStyle(e);
              return /sticky/.test(t);
            })(e)
          )
            return null;
          const t = e.previousElementSibling;
          if (t && t.classList.contains('is-placeholder'))
            return (
              h(
                t instanceof HTMLElement,
                'previousElement must be an HTMLElement -- app/assets/modules/github/sticky.js:127',
              ),
              t
            );
          const n = document.createElement('div');
          return (
            (n.style.visibility = 'hidden'),
            (n.style.display = 'none'),
            (n.style.height = window.getComputedStyle(e).height),
            (n.className = e.className),
            n.classList.remove('js-sticky'),
            n.classList.add('is-placeholder'),
            h(
              e.parentNode,
              'Element must be inserted into the dom -- app/assets/modules/github/sticky.js:140',
            ),
            e.parentNode.insertBefore(n, e)
          );
        }
        function Hr(e) {
          const t = e.ownerDocument;
          e.scrollIntoView(), t.defaultView.scrollBy(0, -Cr(t));
        }
        function Cr(e) {
          kr();
          const t = e.querySelectorAll('.js-sticky-offset-scroll'),
            n = e.querySelectorAll('.js-position-sticky');
          return (
            Math.max(
              0,
              ...Array.from(t).map(e => {
                const { top: t, height: n } = e.getBoundingClientRect();
                return 0 === t ? n : 0;
              }),
            ) +
            Math.max(
              0,
              ...Array.from(n).map(e => {
                const { top: t, height: n } = e.getBoundingClientRect(),
                  s = parseInt(getComputedStyle(e).top);
                if (!e.parentElement) return 0;
                const o = e.parentElement.getBoundingClientRect().top;
                return t === s && o < 0 ? n : 0;
              }),
            )
          );
        }
        function qr(e) {
          const t = Ir();
          if (!t) return;
          _r(e, t);
          const n = (function(e, t) {
            const n = (function(e, t) {
              const n = /^(diff-[0-9a-f]{32})(?:[L|R]\d+)?$/.exec(t);
              if (!n) return;
              const s = n[1],
                o = e.querySelector(`a[name='${s}']`);
              if (!o) return;
              const i = o.nextElementSibling;
              if (i && !i.querySelector('.js-diff-load-container')) return;
              return i;
            })(e, t);
            if (n) return n;
            return (function(e, t) {
              const n = /^(?:r|commitcomment-)(\d+)$/.exec(t);
              if (!n) return;
              const s = n[1],
                o = e.querySelector(`#diff-with-comment-${s}`);
              if (!o) return;
              return o.closest('.js-file');
            })(e, t);
          })(e, t);
          n && (Hr(n), $r(n));
        }
        function Ir() {
          return window.location.hash.slice(1);
        }
        function _r(e, t) {
          const n = J(e.ownerDocument, t);
          n && e.contains(n) && Hr(n);
        }
        function $r(e) {
          const t = g(e, '.js-diff-entry-loader', IncludeFragmentElement),
            n = g(e, '.js-diff-placeholder', Element),
            s = g(e, 'button.js-diff-load', HTMLButtonElement),
            o = g(e, '.js-button-text');
          n.setAttribute('fill', "url('#animated-diff-gradient')"),
            (o.textContent = s.getAttribute('data-disable-with') || ''),
            (s.disabled = !0);
          const i = new URL(t.getAttribute('data-fragment-url') || '', window.location.origin);
          return (t.src = i.toString()), t.data;
        }
        function Dr(e, t) {
          return f(document, '.js-details-container.open.Details--on').filter(
            n => n.getAttribute(e) === t,
          );
        }
        function Rr(e, t, n, s) {
          const o = g(document, '.js-file-filter'),
            i = new URL(window.location.href, window.location.origin);
          if (!e && !n) return (i.search = ''), x(ue(), '', i.toString());
          const r = g(o, '.js-file-filter-form', HTMLFormElement),
            a = new FormData(r),
            c = t.filter(e => !a.getAll('file-filters[]').includes(e)),
            l = s.filter(e => !a.getAll('owned-by[]').includes(e));
          for (const d of c) a.append('file-filters[]', d);
          for (const d of l) a.append('owned-by[]', d);
          const u = new URLSearchParams(a);
          (u.has('file-filters[]') && '' !== u.toString()) || u.set('file-filters[]', ''),
            (i.search = u.toString()),
            x(ue(), '', i.toString());
        }
        function Nr(e) {
          var t;
          (t = e),
            g(document, '.js-file-filter-text', HTMLElement).classList.toggle('text-blue', t),
            (function(e) {
              const t = document.querySelector('.js-reset-filters'),
                n = document.querySelector('.js-commits-filtered');
              null == t || n || (t.hidden = !e);
            })(e),
            (function() {
              const e = Fr(),
                t = Yr();
              for (const o of e)
                if (t) {
                  const e = '0' === p(o, 'data-non-deleted-files-count');
                  o.disabled = e;
                } else o.disabled = !1;
              const n = document.querySelector('.js-deleted-files-container'),
                s = Or();
              if (s && n) {
                const t = (function(e) {
                  const t = e.find(e => e.checked && '0' !== p(e, 'data-deleted-files-count'));
                  return Boolean(t);
                })(e);
                n.classList.toggle('text-gray', !t), (s.disabled = !t);
              }
            })(),
            (function() {
              const e = Kr(),
                t = g(document, '.js-file-filter-select-all-container', HTMLElement),
                n = p(t, e ? 'data-select-all-markup' : 'data-all-selected-markup');
              (t.textContent = n),
                t.classList.toggle('text-gray', !e),
                t.classList.toggle('text-blue', e);
            })(),
            (function() {
              const e = document.querySelector('.js-deleted-files-container');
              if (e) {
                const t = Yr() ? 'data-show-deleted-markup' : 'data-hide-deleted-markup',
                  n = p(e, t);
                e.textContent = n;
              }
            })(),
            (function() {
              const e = f(document, '.js-file-type-count');
              for (const t of e) {
                const e = Yr()
                    ? 'data-non-deleted-file-count-markup'
                    : 'data-all-file-count-markup',
                  n = t.getAttribute(e);
                n && (t.textContent = n);
              }
            })(),
            Rr(e, Pr(), zr(), Vr());
        }
        function Br(e) {
          !(function() {
            const e = Or(),
              t = Pr(),
              n = f(document, '.js-file'),
              s = Vr(),
              o = Wr();
            for (const i of n) {
              let n = !0;
              const r = i.getAttribute('data-file-type');
              if ((r && (n = t.includes(r)), o && n)) {
                const e = i.hasAttribute('data-file-user-viewed');
                e && (n = !o.checked);
              }
              if (s.length > 0 && n) {
                const e = (i.getAttribute('data-codeowners') || '').split(',');
                n = e.filter(e => s.includes(e)).length > 0;
              }
              if (e && e.checked && n) {
                const e = 'true' === i.getAttribute('data-file-deleted');
                e && (n = !1);
              }
              Xr(i, n);
            }
          })(),
            Nr(e);
        }
        function Pr() {
          return Fr()
            .filter(e => e.checked)
            .map(e => e.value);
        }
        function Fr() {
          return f(document, '.js-diff-file-type-option', HTMLInputElement);
        }
        function Or() {
          const e = document.querySelector('.js-deleted-files-toggle');
          if (e instanceof HTMLInputElement) return e;
        }
        function Wr() {
          const e = document.querySelector('.js-viewed-files-toggle');
          if (e instanceof HTMLInputElement) return e;
        }
        function Ur() {
          return Kr() || Yr() || zr();
        }
        function zr() {
          return Vr().length > 0;
        }
        function Vr() {
          return f(document, '.js-diff-owner-option', HTMLInputElement)
            .filter(e => e.checked)
            .map(e => e.value);
        }
        function Kr() {
          return Pr().length !== Fr().length;
        }
        function Yr() {
          const e = Or();
          return !!e && e.checked;
        }
        function Xr(e, t) {
          const n = m(e, '.js-file.js-details-container');
          n.classList.toggle('open', t), n.classList.toggle('Details--on', t);
        }
        function Jr(e) {
          const t = Fr();
          for (const n of t) n.checked = e;
        }
        i('.js-sticky', {
          constructor: HTMLElement,
          add(e) {
            !(function(e) {
              const t = Sr(e),
                n = window.getComputedStyle(e).position;
              e.style.position = 'static';
              const s = e.offsetParent;
              e.style.position = 'fixed';
              const o = window.getComputedStyle(e).top,
                i = { element: e, placeholder: t, offsetParent: s, top: 'auto' === o ? 0 : o };
              (e.style.position = n), Er.push(i);
            })(e),
              kr(),
              Tr();
          },
          remove(e) {
            !(function(e) {
              const t = Er.map(e => e.element).indexOf(e);
              Er.splice(t, 1);
            })(e),
              Tr();
          },
        }),
          i('.js-diff-progressive-container', function(e) {
            qr(e);
            const t = e.querySelector('.js-diff-progressive-loader');
            t &&
              t.addEventListener('load', function() {
                qr(e);
              });
          }),
          i('.js-diff-load-container', function(e) {
            const t = e.querySelector('.js-diff-entry-loader');
            t &&
              t.addEventListener('load', function() {
                m(e, '.js-file').classList.remove('hide-file-notes-toggle');
                const t = Ir();
                t && _r(e, t);
              });
          }),
          u('click', '.js-diff-load', function(e) {
            if (e.target.classList.contains('js-ignore-this')) return;
            $r(m(e.currentTarget, '.js-diff-load-container'));
          }),
          u('click', '.js-rendered, .js-source', function(e) {
            const t = e.currentTarget;
            t.classList.contains('selected')
              ? e.preventDefault()
              : ((function(e) {
                  const t = m(e, '.js-file-header'),
                    n = e.classList.contains('js-rendered'),
                    s = e.classList.contains('js-source'),
                    o = p(t, 'data-short-path'),
                    i = p(t, 'data-anchor'),
                    r = new URL(window.location.href, window.location.origin),
                    a = new URLSearchParams(r.search.slice(1));
                  (r.hash = i), n ? a.set('short_path', o) : s && a.delete('short_path');
                  (r.search = a.toString()), x(null, '', r.toString());
                })(t),
                (function(e) {
                  for (const t of document.querySelectorAll('.js-rendered, .js-source'))
                    t.classList.remove('selected'), t.removeAttribute('aria-current');
                  e.classList.add('selected'), e.setAttribute('aria-current', 'true');
                })(t));
          }),
          v('.js-prose-diff-toggle-form', async function(e, t) {
            const n = m(e, '.js-details-container'),
              s = g(n, '.js-file-content'),
              o = await t.html();
            for (; s.lastChild; ) s.removeChild(s.lastChild);
            s.append(o.html),
              n.classList.toggle('display-rich-diff'),
              n.classList.toggle('show-inline-notes');
          }),
          u('change', '.js-diff-style-toggle input', function(e) {
            const t = m(e.target, '.js-diff-settings');
            for (const n of f(t, '.js-diff-style-toggle label')) n.classList.toggle('selected');
          }),
          u('click', '.js-toc-retry', function(e) {
            const t = m(e.target, '.select-menu'),
              n = g(t, 'include-fragment'),
              s = p(n, 'src');
            n.setAttribute('src', ''), n.setAttribute('src', s);
          }),
          u('change', '.js-diff-file-type-option', function() {
            Br(Ur());
          }),
          u('change', '.js-diff-owner-option', function() {
            Br(zr());
          }),
          u('click', '.js-file-filter-select-all', function() {
            Kr() && (Jr(!0), Br(Ur()));
          }),
          u('change', '.js-deleted-files-toggle', function() {
            Br(Ur());
          }),
          u('change', '.js-viewed-files-toggle', function() {
            Br(Ur());
          }),
          i('.js-file-filter', function() {
            Ur() ? Nr(!0) : Rr(!1, Pr(), zr(), Vr());
          }),
          u('click', '.js-file-header .js-details-target', function({ currentTarget: e }) {
            if (!document.querySelector('.js-file-filter')) return;
            const t = m(e, '.js-details-container'),
              n = (function(e) {
                const t = p(e, 'data-file-type'),
                  n = Dr('data-file-type', t),
                  s = f(document, '.js-diff-file-type-option', HTMLInputElement).find(
                    e => e.value === t,
                  );
                if (!s) return !1;
                const o = s.checked !== n.length > 0;
                return o && (s.checked = n.length > 0), o;
              })(t),
              s = Or();
            let o = !1;
            s &&
              (o = (function(e, t) {
                let n = !1;
                if ('true' === p(e, 'data-file-deleted')) {
                  const e = Dr('data-file-deleted', 'true');
                  (n = t.checked !== (0 === e.length)) && (t.checked = 0 === e.length);
                }
                return n;
              })(t, s));
            const i = Wr();
            let r = !1;
            i &&
              (r = (function(e, t) {
                let n = !1;
                if ('true' === e.getAttribute('data-file-user-viewed')) {
                  const e = Dr('data-file-user-viewed', 'true');
                  (n = t.checked !== (0 === e.length)) && (t.checked = 0 === e.length);
                }
                return n;
              })(t, i)),
              (n || o || r) && Nr(Ur());
          });
        class Gr {
          constructor(e) {
            (this.files = Array.from(e)),
              (this.percentages = this.files.map(() => 0)),
              (this.size = this.files.length),
              (this.total = this.files.reduce((e, t) => e + t.size, 0)),
              (this.uploaded = 0);
          }
          percent() {
            const e = this.files
              .map((e, t) => (e.size * this.percentages[t]) / 100)
              .reduce((e, t) => e + t);
            return Math.round((e / this.total) * 100);
          }
          progress(e, t) {
            const n = this.files.indexOf(e);
            this.percentages[n] = t;
          }
          completed() {
            this.uploaded += 1;
          }
          isFinished() {
            return this.uploaded === this.files.length;
          }
        }
        const Qr = [
          'is-default',
          'is-uploading',
          'is-bad-file',
          'is-duplicate-filename',
          'is-too-big',
          'is-too-many',
          'is-hidden-file',
          'is-failed',
          'is-bad-dimensions',
          'is-empty',
          'is-bad-permissions',
          'is-repository-required',
          'is-bad-format',
        ];
        function Zr(e, t) {
          e.classList.remove(...Qr), e.classList.add(t);
        }
        const ea = new (class {
          constructor() {
            (this.uploads = []), (this.busy = !1);
          }
          upload(e) {
            this.uploads.push(e), this.process();
          }
          process() {
            if (this.busy || 0 === this.uploads.length) return;
            const e = this.uploads.shift();
            this.busy = !0;
            const t = new XMLHttpRequest();
            t.open('POST', e.to, !0);
            for (const s in e.header) t.setRequestHeader(s, e.header[s]);
            (t.onloadstart = function() {
              e.start();
            }),
              (t.onload = () => {
                204 === t.status
                  ? e.complete({})
                  : 201 === t.status
                  ? e.complete(JSON.parse(t.responseText))
                  : e.error({ status: t.status, body: t.responseText }),
                  (this.busy = !1),
                  this.process();
              }),
              (t.onerror = () => {
                e.error({ status: 0, body: '' }), (this.busy = !1), (this.uploads = []);
              }),
              (t.upload.onprogress = function(t) {
                if (t.lengthComputable) {
                  const n = Math.round((t.loaded / t.total) * 100);
                  e.progress(n);
                }
              });
            const n = new FormData();
            e.sameOrigin && n.append('authenticity_token', e.csrf);
            for (const s in e.form) n.append(s, e.form[s]);
            n.append('file', e.file), t.send(n);
          }
        })();
        async function ta(e, t) {
          for (const s of e.files) {
            const o = na(s, t),
              i = [];
            if (
              !L(t, 'upload:setup', { batch: e, file: s, policyRequest: o.options, preprocess: i })
            )
              return;
            try {
              await Promise.all(i);
              const r = await K(o.url, o.options);
              ea.upload(sa(e, s, r, t));
            } catch (n) {
              if ((L(t, 'upload:invalid', { batch: e, file: s, error: n }), n.response)) {
                const e = await n.response.text();
                Zr(t, ia({ status: n.response.status, body: e }, s));
              } else {
                Zr(t, ia({ status: 0, body: '' }));
              }
            }
          }
        }
        function na(e, t) {
          const n = p(t, 'data-upload-policy-url'),
            s = t.getAttribute('data-upload-repository-id');
          let o = t.getAttribute('data-upload-policy-authenticity-token');
          null == o && (o = oa(t));
          const i = new FormData();
          return (
            i.append('name', e.name),
            i.append('size', String(e.size)),
            i.append('content_type', e.type),
            i.append('authenticity_token', o),
            s && i.append('repository_id', s),
            e._path && i.append('directory', String(e._path)),
            { url: n, options: { method: 'post', body: i, headers: {} } }
          );
        }
        function sa(e, t, n, s) {
          let o = n.upload_authenticity_token;
          null == o && (o = oa(s));
          let i = n.asset_upload_authenticity_token;
          return (
            null == i && (i = oa(s)),
            {
              file: t,
              to: n.upload_url,
              form: n.form,
              header: n.header,
              sameOrigin: n.same_origin,
              csrf: o,
              start() {
                Zr(s, 'is-uploading'), L(s, 'upload:start', { batch: e, file: t, policy: n });
              },
              progress(n) {
                e.progress(t, n), L(s, 'upload:progress', { batch: e, file: t, percent: n });
              },
              complete(o) {
                if (
                  (e.completed(),
                  o && o.href && (n.asset || (n.asset = {}), (n.asset.href = o.href)),
                  n.asset_upload_url && n.asset_upload_url.length > 0)
                ) {
                  const e = new FormData();
                  e.append('authenticity_token', i),
                    K(n.asset_upload_url, { method: 'put', body: e });
                }
                L(s, 'upload:complete', { batch: e, file: t, policy: n, result: o }),
                  Zr(s, 'is-default');
              },
              error(o) {
                L(s, 'upload:error', { batch: e, file: t, policy: n });
                const i = ia(o);
                Zr(s, i);
              },
            }
          );
        }
        function oa(e) {
          const t = m(e, 'form', HTMLFormElement);
          return w(t, 'authenticity_token').value;
        }
        function ia(e, t) {
          if (400 === e.status) return 'is-bad-file';
          if (422 !== e.status) return 'is-failed';
          const n = JSON.parse(e.body);
          if (!n || !n.errors) return 'is-failed';
          for (const s of n.errors)
            switch (s.field) {
              case 'size': {
                const e = t ? t.size : null;
                return null != e && 0 === parseInt(e) ? 'is-empty' : 'is-too-big';
              }
              case 'file_count':
                return 'is-too-many';
              case 'width':
              case 'height':
                return 'is-bad-dimensions';
              case 'name':
                return 'already_exists' === s.code ? 'is-duplicate-filename' : 'is-bad-file';
              case 'content_type':
                return 'is-bad-file';
              case 'uploader_id':
                return 'is-bad-permissions';
              case 'repository_id':
                return 'is-repository-required';
              case 'format':
                return 'is-bad-format';
            }
          return 'is-failed';
        }
        function ra(e, t) {
          return t && e.getFilesAndDirectories
            ? (async function(e) {
                return aa(
                  await (async function e(t, n) {
                    if (n.getFilesAndDirectories) {
                      const t = await n.getFilesAndDirectories(),
                        s = ca(t).map(t => e(n.path, t));
                      return Promise.all(s);
                    }
                    return (n._path = t), Promise.resolve(n);
                  })('', e),
                );
              })(e)
            : t &&
              (function(e) {
                return (
                  e.items &&
                  Array.from(e.items).some(e => {
                    const t = e.webkitGetAsEntry && e.webkitGetAsEntry();
                    return t && t.isDirectory;
                  })
                );
              })(e)
            ? (async function(e) {
                const t = ca(Array.from(e.items).map(e => e.webkitGetAsEntry())).map(e =>
                  (async function e(t, n) {
                    if (n.isDirectory) {
                      const t = await ((s = n),
                        new Promise(function(e, t) {
                          s.createReader().readEntries(e, t);
                        })),
                        o = ca(t).map(t => e(n.fullPath, t));
                      return Promise.all(o);
                    }
                    {
                      const e = await (function(e) {
                        return new Promise(function(t, n) {
                          e.file(t, n);
                        });
                      })(n);
                      return (e._path = t), e;
                    }
                    var s;
                  })('', e),
                );
                return aa(await Promise.all(t));
              })(e)
            : Promise.resolve(ca(Array.from(e.files)));
        }
        function aa(e) {
          return e.reduce((e, t) => e.concat(Array.isArray(t) ? aa(t) : t), []);
        }
        function ca(e) {
          return Array.from(e).filter(
            e =>
              !(function(e) {
                return e.name.startsWith('.');
              })(e),
          );
        }
        class FileAttachmentElement extends HTMLElement {
          constructor() {
            super(),
              this.addEventListener('dragenter', fa),
              this.addEventListener('dragover', fa),
              this.addEventListener('dragleave', pa),
              this.addEventListener('drop', ga),
              this.addEventListener('paste', ha);
          }
          connectedCallback() {}
          get directory() {
            return this.hasAttribute('directory');
          }
          set directory(e) {
            e ? this.setAttribute('directory', '') : this.removeAttribute('directory');
          }
          upload(e) {
            la(e, this);
          }
        }
        function la(e, t) {
          ta(new Gr(e), t);
        }
        function ua(e) {
          return Array.from(e.types).indexOf('Files') >= 0;
        }
        function da(e) {
          switch (e) {
            case 'image/gif':
              return 'image.gif';
            case 'image/png':
              return 'image.png';
            case 'image/jpeg':
              return 'image.jpg';
          }
        }
        window.customElements.get('file-attachment') ||
          ((window.FileAttachmentElement = FileAttachmentElement),
          window.customElements.define('file-attachment', FileAttachmentElement));
        let ma = null;
        function fa(e) {
          const t = e.currentTarget;
          h(t instanceof Element, 'app/assets/modules/github/file-attachment-element.js:77'),
            ma && clearTimeout(ma),
            (ma = setTimeout(() => t.classList.remove('dragover'), 200));
          const n = e.dataTransfer;
          n &&
            ua(n) &&
            ((n.dropEffect = 'copy'),
            t.classList.add('dragover'),
            e.stopPropagation(),
            e.preventDefault());
        }
        function pa(e) {
          e.dataTransfer && (e.dataTransfer.dropEffect = 'none'),
            h(
              e.currentTarget instanceof Element,
              'app/assets/modules/github/file-attachment-element.js:100',
            ),
            e.currentTarget.classList.remove('dragover'),
            e.stopPropagation(),
            e.preventDefault();
        }
        function ga(e) {
          const t = e.currentTarget;
          if (!(t instanceof Element)) return;
          t.classList.remove('dragover');
          const n = e.dataTransfer;
          n &&
            ua(n) &&
            (!(async function(e, t) {
              const n = await ra(t, e.hasAttribute('directory'));
              if (!n.length) return void Zr(e, 'is-hidden-file');
              const s = la.bind(null, n);
              !L(e, 'upload:drop:setup', { upload: s, files: n }) || la(n, e);
            })(t, n),
            e.stopPropagation(),
            e.preventDefault());
        }
        function ha(e) {
          if (!e.clipboardData) return;
          if (!e.clipboardData.items) return;
          const t = e.currentTarget;
          if (!(t instanceof Element)) return;
          const n = Array.from(e.clipboardData.items)
            .map(e => [e, da(e.type)])
            .filter(e => e[1])
            .shift();
          if (!n) return;
          const [s] = n,
            o = s.getAsFile();
          o && (la([o], t), e.preventDefault());
        }
        function ba() {
          Cr(document) &&
            (function(e) {
              const t = le(e);
              t && Hr(t);
            })(document);
        }
        ce(ba),
          u('click', 'a[href^="#"]', function(e) {
            const { currentTarget: t } = e;
            t instanceof HTMLAnchorElement && setTimeout(ba, 0);
          });
        class va {
          constructor(e) {
            (this.name = e.getAttribute('data-theme-name') || ''),
              (this.slug = e.getAttribute('data-theme-slug') || ''),
              (this.gem = e.getAttribute('data-theme-gem') || ''),
              (this.selected = e.classList.contains('selected')),
              (this.baseHref = e.getAttribute('href') || '');
          }
        }
        class ja {
          constructor() {
            (this.pagePreview = g(document, '#page-preview')),
              (this.contextLoader = g(document, '.theme-picker-spinner')),
              (this.fullPicker = g(document, '.theme-picker-thumbs')),
              (this.miniPicker = g(document, '.theme-picker-controls')),
              (this.scrollBackwardsLink = g(
                document,
                '.theme-toggle-full-left',
                HTMLButtonElement,
              )),
              (this.scrollForwardsLink = g(
                document,
                '.theme-toggle-full-right',
                HTMLButtonElement,
              )),
              (this.themeLinksContainer = g(this.fullPicker, '.js-theme-selector')),
              (this.themeLinks = f(this.themeLinksContainer, '.theme-selector-thumbnail')),
              (this.themes = this.themeLinks.map(e => {
                const t = new va(e);
                return t.selected && (this.selectedTheme = t), t;
              })),
              (this.scrolledPage = 0),
              (this.selectedTheme = this.selectedTheme || this.themes[0]),
              this.pagePreview.addEventListener('load', () => this.onPagePreviewLoad()),
              this.scrollBackwardsLink.addEventListener('click', () =>
                this.scrollThemeLinksContainer(-1),
              ),
              this.scrollForwardsLink.addEventListener('click', () =>
                this.scrollThemeLinksContainer(1),
              ),
              g(document, '.theme-picker-prev').addEventListener('click', e =>
                this.onThemeNavPrevClick(e),
              ),
              g(document, '.theme-picker-next').addEventListener('click', e =>
                this.onThemeNavNextClick(e),
              );
            for (const t of this.themeLinks)
              t.addEventListener('click', e => this.onThemeLinkClick(e));
            g(document, '.theme-picker-view-toggle').addEventListener('click', e =>
              this.onHideClick(e),
            );
            const e = document.querySelector('#page-edit');
            e && e.addEventListener('click', e => this.onEditClick(e)),
              g(document, '#page-publish').addEventListener('click', e => this.onPublishClick(e)),
              this.theme(this.selectedTheme),
              this.updateScrollLinks();
          }
          onPagePreviewLoad() {
            this.contextLoader.classList.remove('visible');
          }
          onThemeNavPrevClick(e) {
            this.theme(this.prevTheme()), e.preventDefault();
          }
          onThemeNavNextClick(e) {
            this.theme(this.nextTheme()), e.preventDefault();
          }
          onThemeLinkClick(e) {
            this.theme(this.themeForLink(e.currentTarget)), e.preventDefault();
          }
          onHideClick({ currentTarget: e }) {
            h(
              e instanceof HTMLElement,
              'app/assets/modules/github/generated-pages-theme-picker.js:98',
            ),
              this.fullPicker.classList.toggle('d-none'),
              this.miniPicker.classList.toggle('d-none'),
              this.scrollToTheme(this.theme(), !1),
              e.classList.toggle('open');
          }
          onEditClick(e) {
            y(g(document, '#page-edit-form', HTMLFormElement)), e.preventDefault();
          }
          onPublishClick(e) {
            const t = g(document, '#page-publish-form', HTMLFormElement),
              n = this.theme();
            n && (g(document, 'input[name="page[theme_slug]"]', HTMLInputElement).value = n.slug),
              y(t),
              e.preventDefault();
          }
          scrollThemeLinksContainer(e) {
            this.scrollToTheme(this.themes[e < 0 ? 0 : 6]), this.updateScrollLinks();
          }
          updateScrollLinks() {
            const e = 0 === this.scrolledPage;
            (this.scrollBackwardsLink.disabled = e),
              this.scrollBackwardsLink.classList.toggle('disabled', e),
              (this.scrollForwardsLink.disabled = !e),
              this.scrollForwardsLink.classList.toggle('disabled', !e);
          }
          selectedThemeIndex() {
            return this.themes.indexOf(this.selectedTheme);
          }
          prevTheme() {
            let e = (this.selectedThemeIndex() - 1) % this.themes.length;
            return e < 0 && (e += this.themes.length), this.themes[e];
          }
          nextTheme() {
            return this.themes[(this.selectedThemeIndex() + 1) % this.themes.length];
          }
          themeForLink(e) {
            return this.themes[this.themeLinks.indexOf(e)];
          }
          linkForTheme(e) {
            return this.themeLinks[this.themes.indexOf(e)];
          }
          scrollToTheme(e, t = !0) {
            this.scrolledPage = Math.floor(this.themes.indexOf(e) / 6);
            let n = 0;
            if (this.scrolledPage > 0) {
              const e = this.linkForTheme(this.themes[6 * this.scrolledPage]);
              n = e.offsetLeft;
            }
            const s = this.themeLinksContainer,
              o = n - s.scrollLeft;
            if (t && 0 !== o) {
              const e = 150;
              (i = t => {
                if (t < 0) return;
                const i = s.scrollLeft;
                return (
                  (s.scrollLeft = Math[n - i > 0 ? 'min' : 'max'](i + o * (t / e), n)),
                  i !== s.scrollLeft && void 0
                );
              }),
                new Promise(e => {
                  let t = performance.now();
                  !(function n() {
                    window.requestAnimationFrame(s => {
                      !1 !== i(s - t) ? ((t = s), n()) : e();
                    });
                  })();
                });
            } else s.scrollLeft = n;
            var i;
          }
          theme(e) {
            if (!e) return this.selectedTheme;
            (this.selectedTheme = e), this.showPreviewFor(e);
            for (const t of this.themeLinks) t.classList.remove('selected');
            this.linkForTheme(e).classList.add('selected'),
              this.scrollToTheme(e),
              (g(this.miniPicker, '.js-theme-name').textContent = e.name);
          }
          showPreviewFor(e) {
            if ((this.contextLoader.classList.add('visible'), e.gem))
              this.pagePreview.setAttribute('src', e.baseHref);
            else {
              const t = g(this.fullPicker, 'form', HTMLFormElement);
              (g(document, 'input[name="theme_slug"]', HTMLInputElement).value = e.slug), y(t);
            }
          }
        }
        function ya() {
          const e = document.querySelector('.js-get-repo-modal');
          if (e) {
            e.classList.remove('is-downloading');
            for (const t of e.querySelectorAll(
              '.js-modal-download-mac, .js-modal-download-windows, .js-modal-download-xcode, .js-modal-download-visual-studio',
            ))
              t.classList.remove('d-block'), t.classList.add('d-none');
          }
        }
        function La(e) {
          try {
            return sessionStorage.getItem(e);
          } catch (t) {
            return;
          }
        }
        function wa(e, t) {
          try {
            sessionStorage.setItem(e, t);
          } catch (n) {}
        }
        function Ea(e) {
          try {
            sessionStorage.removeItem(e);
          } catch (t) {}
        }
        function Ta(e) {
          const t = document.querySelectorAll(e);
          if (t.length > 0) return t[t.length - 1];
        }
        function ka() {
          return (
            (function() {
              const e = Ta('meta[name=analytics-location]');
              return e instanceof HTMLMetaElement ? e.content : window.location.pathname;
            })() +
            (function() {
              let e = '';
              Ta('meta[name=analytics-location-query-strip]') || (e = window.location.search);
              const t = Ta('meta[name=analytics-location-params]');
              t instanceof HTMLMetaElement && (e += (e ? '&' : '?') + t.content);
              for (const n of f(document, 'meta[name=analytics-param-rename]', HTMLMetaElement)) {
                const t = n.content.split(':', 2);
                e = e.replace(new RegExp(`(^|[?&])${t[0]}($|=)`, 'g'), `$1${t[1]}$2`);
              }
              return e;
            })()
          );
        }
        function Ma() {
          const e = `${window.location.protocol}//${window.location.host}${ka()}`;
          me(e), fe(Ta('meta[name=analytics-location]') ? '(masked)' : document.title);
          const t = Ta('meta[name=analytics-ec-payload]');
          t instanceof HTMLMetaElement && Aa(t.content);
          const n = La('ga-deferred');
          n && (Aa(n), Ea('ga-deferred'));
          for (const s of f(document, 'meta.js-ga-set', HTMLMetaElement)) pe(s.name, s.content);
        }
        function Aa(e) {
          if (e) for (const t of JSON.parse(e)) window.ga.apply(null, t);
        }
        function xa() {
          for (const e of document.querySelectorAll('meta[name=analytics-virtual-pageview]'))
            e instanceof HTMLMetaElement && ge(e.content, { title: '' });
          ge();
        }
        function Sa(e) {
          const [t, n, s, o] = e.trim().split(/\s*,\s*/),
            i = { category: t, action: n, label: s };
          return o && (i.value = Number(o)), i;
        }
        i('#theme-picker-wrap', function() {
          new ja();
        }),
          u('click', '.email-hidden-toggle', function(e) {
            const t = e.currentTarget.nextElementSibling;
            h(t instanceof HTMLElement, 'app/assets/modules/github/gfm.js:11'),
              (t.style.display = ''),
              t.classList.toggle('expanded'),
              e.preventDefault();
          }),
          u('click', '.js-git-clone-help-container .js-git-clone-help-switcher', function(e) {
            const t = e.currentTarget,
              n = m(t, '.js-git-clone-help-container'),
              s = t.getAttribute('data-url') || '';
            if (
              ((g(n, '.js-git-clone-help-field', HTMLInputElement).value = s),
              t.matches('.js-git-protocol-clone-url'))
            )
              for (const i of n.querySelectorAll('.js-git-clone-help-text')) i.textContent = s;
            const o = n.querySelector('.js-clone-url-button.selected');
            o && o.classList.remove('selected'),
              m(t, '.js-clone-url-button').classList.add('selected');
          }),
          u('click', '.js-get-repo', function(e) {
            const t = p(e.currentTarget, 'data-open-app');
            !(function(e, t) {
              let n;
              switch ((e.classList.add('is-downloading'), t)) {
                case 'mac':
                  n = e.querySelector('.js-modal-download-mac');
                  break;
                case 'windows':
                  n = e.querySelector('.js-modal-download-windows');
                  break;
                case 'xcode':
                  n = e.querySelector('.js-modal-download-xcode');
                  break;
                case 'visual-studio':
                  n = e.querySelector('.js-modal-download-visual-studio');
              }
              n && (n.classList.remove('d-none'), n.classList.add('d-block'));
            })(m(e.currentTarget, '.js-get-repo-modal'), t);
          }),
          u('toggle', '.js-get-repo-select-menu', ya, { capture: !0 }),
          u('click', '.js-get-repo-modal-download-back', ya),
          v('.js-feature-preview-form', async function(e, t) {
            let n;
            const s = g(e, '.js-feature-preview-error-message'),
              o = e.querySelector('.js-indicator'),
              i = m(e, '.js-feature-wrapper');
            s && ((s.hidden = !0), null != o && o.classList.remove('text-red'));
            try {
              n = await t.html();
            } catch (Rh) {
              (s.hidden = !1),
                null != o &&
                  (o.classList.remove('text-green', 'neutral-check'), o.classList.add('text-red'));
            }
            if (n) {
              !(function(e) {
                const t = g(e, '.js-preview-feature-success-message');
                (g(e, '.js-feedback').hidden = !0), (t.hidden = !1);
              })(g(i, '.js-feature-preview-form', HTMLFormElement));
            }
          }),
          de('octolyticsPlugin', function(e) {
            const t = e.get('sendHitTask');
            e.set('sendHitTask', function(e) {
              if ((t(e), 'event' === e.get('hitType') && null != window._octo)) {
                const t = `//${window._octo.host}/collect`,
                  n = new Blob([e.get('hitPayload')], {
                    type: 'application/x-www-form-urlencoded',
                  });
                navigator.sendBeacon && navigator.sendBeacon(t, n);
              }
            });
          });
        const Ha = document.querySelector('meta[name=google-analytics]');
        Ha instanceof HTMLMetaElement &&
          (he(Ha.content, 'auto'), be('octolyticsPlugin'), be('ec'), Ma()),
          (async function() {
            await z, xa();
          })(),
          document.addEventListener(
            'pjax:complete',
            () => {
              setTimeout(() => {
                Ma(), xa();
              }, 20);
            },
            !1,
          ),
          i('[data-ga-load]', function(e) {
            const t = Sa(e.getAttribute('data-ga-load') || '');
            (t.interactive = !1), ve(t);
          }),
          i('meta[name=analytics-event]', {
            constructor: HTMLMetaElement,
            initialize(e) {
              const t = Sa(e.content);
              (t.interactive = !1), ve(t);
            },
          }),
          u(
            'click',
            '[data-ga-click]',
            function(e) {
              Aa(e.currentTarget.getAttribute('data-ga-ec'));
              const t = Sa(e.currentTarget.getAttribute('data-ga-click') || '');
              ve(t);
            },
            { capture: !0 },
          ),
          u(
            'click',
            '[data-ga-deferred]',
            function(e) {
              wa('ga-deferred', e.currentTarget.getAttribute('data-ga-deferred') || '');
            },
            { capture: !0 },
          ),
          u(
            'change',
            '[data-ga-change]',
            function(e) {
              Aa(e.currentTarget.getAttribute('data-ga-ec'));
              const t = Sa(e.currentTarget.getAttribute('data-ga-change') || '');
              ve(t);
            },
            { capture: !0 },
          ),
          u('click', '.js-skip-to-content', function(e) {
            const t = document.getElementById('start-of-content');
            if (t) {
              const e = t.nextElementSibling;
              e instanceof HTMLElement && (e.setAttribute('tabindex', '-1'), e.focus());
            }
            e.preventDefault();
          });
        const Ca = 'ontouchstart' in document;
        for (const n of document.querySelectorAll('.HeaderMenu-details'))
          n.addEventListener('toggle', Ia),
            Ca || (n.addEventListener('mouseover', _a), n.addEventListener('mouseleave', _a));
        let qa = !1;
        function Ia(e) {
          if (!qa) {
            qa = !0;
            for (const t of document.querySelectorAll('.HeaderMenu-details'))
              t !== e.currentTarget && t.removeAttribute('open');
            setTimeout(() => (qa = !1));
          }
        }
        function _a(e) {
          const { currentTarget: t } = e;
          t instanceof HTMLElement &&
            window.innerWidth > 1012 &&
            ('mouseover' === e.type
              ? e.target instanceof Node &&
                e.relatedTarget instanceof Node &&
                t.contains(e.target) &&
                !t.contains(e.relatedTarget) &&
                t.setAttribute('open', '')
              : t.removeAttribute('open'));
        }
        function $a(e) {
          if (!window._octo) return;
          const t = Math.floor(new Date().getTime() / 1e3);
          e.timestamp = t;
          if (document.head && document.head.querySelector('meta[name="octolytics-event-url"]')) {
            const t = g(document.head, 'meta[name="octolytics-event-url"]', HTMLMetaElement)
                .content,
              n = JSON.stringify(e);
            navigator.sendBeacon && navigator.sendBeacon(t, n);
          }
        }
        u('click', '.js-video-play, .js-video-close', function(e) {
          e.preventDefault();
          const t = e.currentTarget,
            n = t.classList.contains('js-video-play'),
            s = m(t, '.js-video-container'),
            o = g(s, '.js-video-iframe', HTMLIFrameElement),
            i = document.querySelector('.js-video-bg');
          n ? (o.src = o.getAttribute('data-src') || '') : o.removeAttribute('src'),
            s.classList.toggle('is-expanded', n),
            null != i && i.classList.toggle('is-expanded', n),
            (function(e, t = 0) {
              const n = e.getBoundingClientRect(),
                s = n.top - t,
                o = n.bottom - window.innerHeight + t;
              s < 0 ? window.scrollBy(0, s) : o > 0 && window.scrollBy(0, o);
            })(o, 20);
        }),
          u('click', '[data-octo-click]', function(e) {
            if (!window._octo) return;
            const t = e.currentTarget,
              n = t.getAttribute('data-octo-click') || '',
              s = {};
            s.event_type = n;
            const o = {},
              i = {},
              r = {};
            let a = [];
            t.hasAttribute('data-octo-dimensions') &&
              (a = (t.getAttribute('data-octo-dimensions') || '').split(','));
            const c = document.head
              ? document.head.querySelectorAll('meta[name^="octolytics-"]')
              : [];
            for (const l of c)
              if (l instanceof HTMLMetaElement)
                if (l.name.startsWith('octolytics-dimension-')) {
                  o[l.name.replace(/^octolytics-dimension-/, '')] = l.content;
                } else if (l.name.startsWith('octolytics-measure-')) {
                  i[l.name.replace(/^octolytics-measure-/, '')] = l.content;
                } else if (l.name.startsWith('octolytics-context-')) {
                  r[l.name.replace(/^octolytics-context-/, '')] = l.content;
                } else if (l.name.startsWith('octolytics-actor-')) {
                  o[l.name.replace(/^octolytics-/, '').replace(/-/g, '_')] = l.content;
                } else if (l.name.startsWith('octolytics-')) {
                  s[l.name.replace(/^octolytics-/, '').replace(/-/g, '_')] = l.content;
                }
            if (t.hasAttribute('data-ga-click')) {
              const e = (t.getAttribute('data-ga-click') || '').split(',').map(e => e.trim());
              (o.category = e[0]), (o.action = e[1]);
            }
            for (const l of a) {
              const e = l.split(':');
              o[e.shift()] = e.join(':');
            }
            (s.dimensions = o), (s.measures = i), (s.context = r), $a(s);
          });
        const Da = document.querySelector('.js-hovercard-content'),
          Ra = {};
        let Na,
          Ba,
          Pa,
          Fa = 0;
        const Oa = 12,
          Wa = 24,
          Ua = Wa - 7,
          za = 16,
          Va = 100,
          Ka = 250;
        function Ya(e) {
          return 'Popover-message--' + e;
        }
        function Xa() {
          Da &&
            ((Da.style.display = 'none'),
            (Da.children[0].innerHTML = ''),
            (Ba = null),
            (Na = null));
        }
        function Ja(e) {
          h(Da, 'app/assets/modules/github/hovercards.js:110');
          const { width: t, height: n } = Da.getBoundingClientRect(),
            { left: s, top: o, height: i, width: r } = (function(e) {
              const t = e.getClientRects();
              let n = t[0];
              for (const s of t)
                if (s.left < Fa && s.right > Fa) {
                  n = s;
                  break;
                }
              return n;
            })(e),
            a = o > n;
          if (e.classList.contains('js-hovercard-left')) {
            const e = o + i / 2;
            return {
              containerTop: a ? e - n + Ua + za / 2 : e - Ua - za / 2,
              containerLeft: s - t - Oa,
              contentClassSuffix: a ? 'right-bottom' : 'right-top',
            };
          }
          {
            const e = window.innerWidth - s > t,
              c = s + r / 2;
            return {
              containerTop: a ? o - n - Oa : o + i + Oa,
              containerLeft: e ? c - Wa : c - t + Wa,
              contentClassSuffix: a
                ? e
                  ? 'bottom-left'
                  : 'bottom-right'
                : e
                ? 'top-left'
                : 'top-right',
            };
          }
        }
        function Ga(e, t) {
          if (!Da) return;
          const n = Da.children[0];
          n.innerHTML = '';
          const s = document.createElement('div');
          for (const o of e.children) s.appendChild(o.cloneNode(!0));
          n.appendChild(s),
            (function(e, t) {
              if (!Da) return;
              (Da.style.visibility = 'hidden'),
                (Da.style.display = 'block'),
                t.classList.remove(
                  Ya('bottom-left'),
                  Ya('bottom-right'),
                  Ya('right-top'),
                  Ya('right-bottom'),
                  Ya('top-left'),
                  Ya('top-right'),
                );
              const { containerTop: n, containerLeft: s, contentClassSuffix: o } = Ja(e);
              t.classList.add(Ya(o)),
                (Da.style.top = `${n + window.pageYOffset}px`),
                (Da.style.left = `${s + window.pageXOffset}px`),
                (function(e, t) {
                  const n = e.getAttribute('data-hovercard-z-index-override');
                  t.style.zIndex = n || '100';
                })(e, Da),
                (Da.style.visibility = '');
            })(t, n),
            (function(e) {
              setTimeout(() => {
                if (document.body && document.body.contains(e)) {
                  const t = e.querySelector('[data-hovercard-tracking]');
                  if (t) {
                    const e = t.getAttribute('data-hovercard-tracking');
                    if (e) {
                      const t = { event_type: 'user-hovercard-load' };
                      (t.dimensions = JSON.parse(e)), $a(t);
                    }
                  }
                  const n = e.querySelector('[data-hydro-view]');
                  n && je(n);
                }
              }, 500);
            })(s),
            (Da.style.display = 'block');
        }
        function Qa(e) {
          const t = e.getAttribute('data-hovercard-url');
          if (t) {
            const n = (function(e) {
              const t = e.closest('[data-hovercard-subject-tag]');
              if (t) return t.getAttribute('data-hovercard-subject-tag');
              const n =
                document.head && document.head.querySelector('meta[name="hovercard-subject-tag"]');
              return n ? n.getAttribute('content') : void 0;
            })(e);
            if (n) {
              const e = new URL(t, window.location.origin),
                s = new URLSearchParams(e.search.slice(1));
              return (
                s.append('subject', n),
                s.append('current_path', window.location.pathname + window.location.search),
                (e.search = s.toString()),
                e.toString()
              );
            }
            return t;
          }
          return '';
        }
        async function Za(e, t) {
          const n = e.currentTarget;
          if (
            (e instanceof MouseEvent && (Fa = e.clientX),
            h(n instanceof Element, 'app/assets/modules/github/hovercards.js:285'),
            Na === n)
          )
            return;
          if (n.closest('.js-hovercard-content')) return;
          if (
            !(function(e) {
              const t = e.getAttribute('data-hovercard-type');
              return 'pull_request' === t || 'issue' === t
                ? !!e.closest('[data-issue-and-pr-hovercards-enabled]')
                : 'team' === t
                ? !!e.closest('[data-team-hovercards-enabled]')
                : 'repository' === t
                ? !!e.closest('[data-repository-hovercards-enabled]')
                : 'commit' === t
                ? !!e.closest('[data-commit-hovercards-enabled]')
                : 'project' === t
                ? !!e.closest('[data-project-hovercards-enabled]')
                : 'contributors' !== t || !!e.closest('[data-contributors-hovercards-enabled]');
            })(n)
          )
            return;
          Xa(), (Na = n), (Ba = document.activeElement);
          const s = Qa(n);
          let o;
          try {
            const e = new Promise(e => setTimeout(e, t, 0));
            (o = await (async function(e) {
              return Ra[e] || (Ra[e] = R(document, e)), Ra[e];
            })(s)),
              await e;
          } catch (i) {
            if (i.response && 404 === i.response.status) {
              const e = 'Hovercard is unavailable';
              return (
                n.setAttribute('aria-label', e), void n.classList.add('tooltipped', 'tooltipped-ne')
              );
            }
            if (i.response && 410 === i.response.status) {
              const e = await i.response.clone().json();
              return (
                n.setAttribute('aria-label', e.message),
                void n.classList.add('tooltipped', 'tooltipped-ne')
              );
            }
            if (/X-HTML-Safe/.test(i.message)) return;
            throw i;
          }
          n === Na && (Ga(o, n), e instanceof KeyboardEvent && Da && Da.focus());
        }
        function ec(e) {
          Za(e, Ka);
        }
        function tc(e) {
          if (Na) {
            if (e instanceof MouseEvent && e.relatedTarget instanceof HTMLElement) {
              const t = e.relatedTarget;
              if (t.closest('.js-hovercard-content') || t.closest('[data-hovercard-url]')) return;
            } else e instanceof KeyboardEvent && Ba && Ba.focus();
            Xa();
          }
        }
        function nc(e) {
          const t = Na;
          Pa = setTimeout(() => {
            Na === t && tc(e);
          }, Va);
        }
        function sc(e) {
          switch (
            (h(e instanceof KeyboardEvent, 'app/assets/modules/github/hovercards.js:374'), e.key)
          ) {
            case 'Escape':
              tc(e);
          }
        }
        function oc() {
          Pa && clearTimeout(Pa);
        }
        function ic() {
          return g(document, 'input.js-edit-integration-setup-url', HTMLInputElement);
        }
        function rc(e) {
          e &&
            ((function() {
              const e = m(ic(), '.form-group');
              return g(e, '.js-setup-url-hint');
            })().textContent = e);
        }
        function ac() {
          const e = document.getElementById('js-update-integration-permissions');
          e && e.removeAttribute('disabled');
        }
        function cc() {
          return (function() {
            const e = f(
              document,
              '[id^=integration_permission_]:checked:not([data-permission="none"])',
              HTMLInputElement,
            );
            return Array.from(e, e => e.getAttribute('data-resource'));
          })()
            .map(e =>
              (function(e) {
                if (e)
                  return f(
                    document,
                    `.js-integration-hook-event[data-resource~="${e}"]:checked`,
                    HTMLInputElement,
                  );
              })(e),
            )
            .reduce((e, t) => e.concat(t, []), []);
        }
        function lc(e = !1) {
          const t = g(
              document,
              '.js-integration-permissions-selector [id=integration_permission_metadata_read]',
              HTMLInputElement,
            ),
            n = m(t, '.js-list-group-item');
          e && _(t, !0), (g(n, '.js-mandatory-label').hidden = !e);
          for (const s of f(n, 'input', HTMLInputElement)) s !== t && (s.disabled = e);
        }
        function uc() {
          const e = g(document, '.js-content-references input', HTMLInputElement),
            t = g(document, '.js-content-references template', HTMLTemplateElement),
            n = g(document, '.js-content-references-domain-list'),
            s = e.value;
          if (!s) return;
          const o = t.content.cloneNode(!0);
          (g(o, 'input', HTMLInputElement).value = s),
            (g(o, '.js-content-references-domain-url').textContent = s),
            (e.value = ''),
            n.appendChild(o),
            (m(n, '.Box').hidden = !1),
            ac();
        }
        Da &&
          (i('[data-hovercard-url]', {
            subscribe: e => F(q(e, 'mouseover', ec), q(e, 'mouseleave', nc), q(e, 'keyup', sc)),
          }),
          i('[data-hovercard-url]', {
            remove(e) {
              Na === e && Xa();
            },
          }),
          i('.js-hovercard-content', {
            subscribe: e => F(q(e, 'mouseover', oc), q(e, 'mouseleave', tc), q(e, 'keyup', sc)),
          }),
          i('.js-hovercard-include-fragment', {
            constructor: HTMLTemplateElement,
            add(e) {
              Na && Ga(e.content, Na);
            },
          }),
          u('menu:activated', '.js-select-menu', Xa),
          window.addEventListener('statechange', Xa)),
          i('.js-scrollnav-listener', function(e) {
            window.addEventListener(
              'scroll',
              function() {
                !(function(e) {
                  const t = g(e, '.js-scrollnav').getBoundingClientRect().height;
                  for (const n of e.querySelectorAll('.js-section')) {
                    const s = n.getBoundingClientRect(),
                      o = t >= s.top,
                      i = t <= s.top + s.height;
                    if (o && i) {
                      const t = e.querySelector(`.js-scrollnav-item[href="#${n.id}"]`);
                      if (t && !t.classList.contains('selected')) {
                        for (const t of e.querySelectorAll('.js-scrollnav-item'))
                          t.classList.remove('selected');
                        t.classList.add('selected');
                      }
                    }
                  }
                })(e);
              },
              { passive: !0 },
            );
          }),
          u('change', '.js-edit-integration-request-oauth-on-install', function(e) {
            const t = e.target;
            h(t instanceof HTMLInputElement, 'app/assets/modules/github/integrations/edit.js:28');
            const n = ic();
            if (t.checked) {
              (n.hidden = !0), rc(n.getAttribute('data-hint-same-as-callback-url') || '');
            } else {
              (n.hidden = !1),
                (n.value = n.getAttribute('data-setup-url') || ''),
                rc(n.getAttribute('data-hint-setup-url') || '');
            }
          }),
          u(
            'change',
            '.js-integration-permissions-selector [id^=integration_permission_]',
            function({ currentTarget: e }) {
              const t = e.getAttribute('data-permission'),
                n = e.getAttribute('data-resource') || '',
                s = f(
                  document,
                  `.js-integration-hook-event[data-resource~="${n}"]`,
                  HTMLInputElement,
                ),
                o = f(document, '.js-integration-single-file-resource', HTMLInputElement),
                i = f(document, `.js-dropdown-container[data-resource~="${n}"]`);
              if ((ac(), 'none' !== t)) {
                const t = f(
                  document,
                  `.js-integration-hook-event-permission-error[data-resource~='${n}']`,
                );
                for (const e of t) e.classList.add('d-none');
                const r = f(document, '.js-integration-single-file-permission-error');
                for (const e of r) e.classList.add('d-none');
                for (const e of s) e.readOnly = !1;
                for (const e of o) e.readOnly = !1;
                m(e, '.js-list-group-item').classList.remove('disabled');
                for (const e of i) e.classList.remove('d-none');
              } else {
                for (const e of s)
                  (r = e),
                    cc().includes(r) ||
                      ((e.readOnly = !0),
                      (e.checked = !1),
                      m(e, '.js-dropdown-container').classList.add('anim-fade-in', 'd-none'));
                if ((m(e, '.js-list-group-item').classList.add('disabled'), 'single_file' === n))
                  for (const e of o) (e.readOnly = !0), (e.value = '');
                else
                  'content_references' === n &&
                    (g(document, `.js-dropdown-container[data-resource~='${n}']`).classList.add(
                      'anim-fade-in',
                      'd-none',
                    ),
                    'none' === t &&
                      (g(document, '.js-content-references-domain-list').innerHTML = ''));
              }
              var r;
            },
          ),
          u(
            'change',
            '.js-integration-permissions-selector [id^=integration_permission_][data-resource-parent^=repository]',
            function({ currentTarget: e }) {
              const t = e.getAttribute('data-permission');
              'metadata' !== (e.getAttribute('data-resource') || '') &&
                ('none' !== t
                  ? lc(!0)
                  : (function() {
                      let e = !0;
                      const t = document.querySelectorAll(
                        '.js-integration-permissions-selector [id^=integration_permission_][data-resource-parent=repository]:checked',
                      );
                      for (const n of t) {
                        const t = n.getAttribute('data-permission') || 'none';
                        if (
                          'metadata' !== (n.getAttribute('data-resource') || '') &&
                          'none' !== t
                        ) {
                          e = !1;
                          break;
                        }
                      }
                      return e;
                    })() && lc());
            },
          ),
          u('change', '.js-integration-permissions-selector [name^=integration]', ac),
          u('click', '.js-integration-permissions-selector .js-integration-hook-event', function(
            e,
          ) {
            const t = e.currentTarget;
            if (
              (h(t instanceof HTMLInputElement, 'app/assets/modules/github/integrations.js:248'),
              t.readOnly)
            ) {
              const n = m(t, '.js-send-events');
              g(n, '.js-integration-hook-event-permission-error').classList.remove('d-none'),
                e.preventDefault();
            }
          }),
          u(
            'click',
            '.js-integration-permissions-selector .js-integration-single-file-resource',
            function(e) {
              const t = e.currentTarget;
              if (
                (h(t instanceof HTMLInputElement, 'app/assets/modules/github/integrations.js:261'),
                t.readOnly)
              ) {
                const n = m(t, '.js-single-file');
                g(n, '.js-integration-single-file-permission-error').classList.remove('d-none'),
                  e.preventDefault();
              }
            },
          ),
          N('keydown', '.js-content-references input', function(e) {
            'Enter' === e.key && (e.preventDefault(), uc());
          }),
          u('click', '.js-content-references .js-domain-add', uc),
          u('click', '.js-content-references .js-close', function(e) {
            const t = m(e.target, 'li'),
              n = t.parentElement;
            n && (n.removeChild(t), 0 === f(n, 'li').length && (m(n, '.Box').hidden = !0), ac());
          }),
          v('.js-issue-boost-form', async function(e, t) {
            const n = g(e, '.js-issue-boost-error');
            let s;
            n.hidden = !0;
            try {
              s = await t.html();
            } catch (o) {
              n.hidden = !1;
              const t = g(e, '.js-issue-boost-value'),
                s = p(t, 'data-original-boost-value');
              return void (t.textContent = s);
            }
            m(e, '.js-issue-boost-container').replaceWith(s.html);
          });
        let dc = null;
        function mc(e, t, n) {
          return e > n ? n : e < t ? t : e;
        }
        async function fc({ currentTarget: e }) {
          h(e instanceof HTMLElement, 'app/assets/modules/github/issues/issue-link.js:12');
          const t = e.getAttribute('data-url');
          if (!t) return;
          const n = e.getAttribute('data-id') || '',
            s = e.textContent,
            o = document.querySelectorAll(`.js-issue-link[data-id='${n}']`);
          for (const r of o) r.removeAttribute('data-url');
          try {
            pc(o, `${s}, ${(await K(t)).title}`);
          } catch (i) {
            const t = (null != i.response ? i.response.status : void 0) || 500;
            pc(
              o,
              (() => {
                switch (t) {
                  case 404:
                    return e.getAttribute('data-permission-text');
                  default:
                    return e.getAttribute('data-error-text');
                }
              })() || '',
            );
          }
        }
        function pc(e, t) {
          for (const s of e)
            ((n = s).getAttribute('data-hovercard-url') &&
              n.closest('[data-issue-and-pr-hovercards-enabled]')) ||
              s.classList.add('tooltipped', 'tooltipped-ne'),
              s.setAttribute('aria-label', t);
          var n;
        }
        u('click', '.js-issue-boost-button', function(e) {
          const t = e.currentTarget;
          h(t instanceof HTMLButtonElement, 'app/assets/modules/github/issues/issue-boosts.js:43'),
            e.preventDefault();
          const n = t.form;
          h(n, 'app/assets/modules/github/issues/issue-boosts.js:48');
          const s = g(n, '.js-issue-boost-value'),
            o = parseInt(p(s, 'data-original-boost-value'), 10),
            i = parseInt(t.value, 10),
            r = parseInt(p(n, 'data-min-modifier'), 10),
            a = parseInt(p(n, 'data-max-modifier'), 10),
            c = parseInt(p(n, 'data-min-value'), 10),
            l = parseInt(p(n, 'data-max-value'), 10),
            u = g(n, '.js-issue-boost-modifier', HTMLInputElement),
            d = mc(parseInt(u.value, 10) + i, r, a),
            m = mc(o + d, c, l);
          (s.textContent = m.toString()),
            dc && clearTimeout(dc),
            (u.value = d.toString()),
            (t.disabled = (m === l && i > 0) || (m === c && i < 0)),
            (dc = setTimeout(() => {
              (dc = null), y(n, t);
            }, 400));
        }),
          u('click', '.js-new-issue-boost-button', function(e) {
            const t = e.currentTarget;
            h(
              t instanceof HTMLButtonElement,
              'app/assets/modules/github/issues/issue-boosts.js:81',
            );
            const n = m(t, '.js-new-issue-boost-container'),
              s = parseInt(p(n, 'data-min'), 10),
              o = parseInt(p(n, 'data-max'), 10),
              i = parseInt(t.value, 10),
              r = g(n, '.js-issue-boost-value', HTMLInputElement),
              a = mc(parseInt(r.value, 10) + i, s, o),
              c = a === o,
              l = a === s;
            if (
              ((g(n, '.js-issue-boost-value-display').textContent = a.toString()),
              (r.value = a.toString()),
              (t.disabled = (c && i > 0) || (l && i < 0)),
              i < 0)
            ) {
              g(n, '.js-new-issue-increase-boost-button', HTMLButtonElement).disabled = c;
            } else {
              g(n, '.js-new-issue-decrease-boost-button', HTMLButtonElement).disabled = l;
            }
          }),
          i('.js-issue-link', { subscribe: e => q(e, 'mouseenter', fc) });
        var gc = n(function(e, t) {
          var n;
          (n = (function() {
            var e = null,
              t = {};
            i('monochrome', null, [[0, 0], [100, 0]]),
              i(
                'red',
                [-26, 18],
                [
                  [20, 100],
                  [30, 92],
                  [40, 89],
                  [50, 85],
                  [60, 78],
                  [70, 70],
                  [80, 60],
                  [90, 55],
                  [100, 50],
                ],
              ),
              i(
                'orange',
                [19, 46],
                [[20, 100], [30, 93], [40, 88], [50, 86], [60, 85], [70, 70], [100, 70]],
              ),
              i(
                'yellow',
                [47, 62],
                [[25, 100], [40, 94], [50, 89], [60, 86], [70, 84], [80, 82], [90, 80], [100, 75]],
              ),
              i(
                'green',
                [63, 178],
                [[30, 100], [40, 90], [50, 85], [60, 81], [70, 74], [80, 64], [90, 50], [100, 40]],
              ),
              i(
                'blue',
                [179, 257],
                [
                  [20, 100],
                  [30, 86],
                  [40, 80],
                  [50, 74],
                  [60, 60],
                  [70, 52],
                  [80, 44],
                  [90, 39],
                  [100, 35],
                ],
              ),
              i(
                'purple',
                [258, 282],
                [
                  [20, 100],
                  [30, 87],
                  [40, 79],
                  [50, 70],
                  [60, 65],
                  [70, 59],
                  [80, 52],
                  [90, 45],
                  [100, 42],
                ],
              ),
              i(
                'pink',
                [283, 334],
                [[20, 100], [30, 90], [40, 86], [60, 84], [80, 80], [90, 75], [100, 73]],
              );
            var n = function(i) {
              if (
                void 0 !== (i = i || {}).seed &&
                null !== i.seed &&
                i.seed === parseInt(i.seed, 10)
              )
                e = i.seed;
              else if ('string' == typeof i.seed)
                e = (function(e) {
                  for (var t = 0, n = 0; n !== e.length && !(t >= Number.MAX_SAFE_INTEGER); n++)
                    t += e.charCodeAt(n);
                  return t;
                })(i.seed);
              else {
                if (void 0 !== i.seed && null !== i.seed)
                  throw new TypeError('The seed value must be an integer or string');
                e = null;
              }
              var c, l, u;
              if (null !== i.count && void 0 !== i.count) {
                var d = i.count,
                  m = [];
                for (i.count = null; d > m.length; ) e && i.seed && (i.seed += 1), m.push(n(i));
                return (i.count = d), m;
              }
              return (
                (c = (function(e) {
                  var n = o(
                    (function(e) {
                      if ('number' == typeof parseInt(e)) {
                        var n = parseInt(e);
                        if (n < 360 && n > 0) return [n, n];
                      }
                      if ('string' == typeof e)
                        if (t[e]) {
                          var s = t[e];
                          if (s.hueRange) return s.hueRange;
                        } else if (e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
                          var o = (function(e) {
                            e =
                              3 === (e = e.replace(/^#/, '')).length
                                ? e.replace(/(.)/g, '$1$1')
                                : e;
                            var t = parseInt(e.substr(0, 2), 16) / 255,
                              n = parseInt(e.substr(2, 2), 16) / 255,
                              s = parseInt(e.substr(4, 2), 16) / 255,
                              o = Math.max(t, n, s),
                              i = o - Math.min(t, n, s),
                              r = o ? i / o : 0;
                            switch (o) {
                              case t:
                                return [(((n - s) / i) % 6) * 60 || 0, r, o];
                              case n:
                                return [60 * ((s - t) / i + 2) || 0, r, o];
                              case s:
                                return [60 * ((t - n) / i + 4) || 0, r, o];
                            }
                          })(e)[0];
                          return [o, o];
                        }
                      return [0, 360];
                    })(e.hue),
                  );
                  n < 0 && (n = 360 + n);
                  return n;
                })(i)),
                (l = (function(e, t) {
                  if ('monochrome' === t.hue) return 0;
                  if ('random' === t.luminosity) return o([0, 100]);
                  var n = (function(e) {
                      return s(e).saturationRange;
                    })(e),
                    i = n[0],
                    r = n[1];
                  switch (t.luminosity) {
                    case 'bright':
                      i = 55;
                      break;
                    case 'dark':
                      i = r - 10;
                      break;
                    case 'light':
                      r = 55;
                  }
                  return o([i, r]);
                })(c, i)),
                (u = (function(e, t, n) {
                  var i = (function(e, t) {
                      for (var n = s(e).lowerBounds, o = 0; o < n.length - 1; o++) {
                        var i = n[o][0],
                          r = n[o][1],
                          a = n[o + 1][0],
                          c = n[o + 1][1];
                        if (t >= i && t <= a) {
                          var l = (c - r) / (a - i),
                            u = r - l * i;
                          return l * t + u;
                        }
                      }
                      return 0;
                    })(e, t),
                    r = 100;
                  switch (n.luminosity) {
                    case 'dark':
                      r = i + 20;
                      break;
                    case 'light':
                      i = (r + i) / 2;
                      break;
                    case 'random':
                      (i = 0), (r = 100);
                  }
                  return o([i, r]);
                })(c, l, i)),
                (function(e, t) {
                  switch (t.format) {
                    case 'hsvArray':
                      return e;
                    case 'hslArray':
                      return a(e);
                    case 'hsl':
                      var n = a(e);
                      return 'hsl(' + n[0] + ', ' + n[1] + '%, ' + n[2] + '%)';
                    case 'hsla':
                      var s = a(e),
                        o = t.alpha || Math.random();
                      return 'hsla(' + s[0] + ', ' + s[1] + '%, ' + s[2] + '%, ' + o + ')';
                    case 'rgbArray':
                      return r(e);
                    case 'rgb':
                      var i = r(e);
                      return 'rgb(' + i.join(', ') + ')';
                    case 'rgba':
                      var c = r(e),
                        o = t.alpha || Math.random();
                      return 'rgba(' + c.join(', ') + ', ' + o + ')';
                    default:
                      return (function(e) {
                        var t = r(e);
                        function n(e) {
                          var t = e.toString(16);
                          return 1 == t.length ? '0' + t : t;
                        }
                        return '#' + n(t[0]) + n(t[1]) + n(t[2]);
                      })(e);
                  }
                })([c, l, u], i)
              );
            };
            function s(e) {
              for (var n in (e >= 334 && e <= 360 && (e -= 360), t)) {
                var s = t[n];
                if (s.hueRange && e >= s.hueRange[0] && e <= s.hueRange[1]) return t[n];
              }
              return 'Color not found';
            }
            function o(t) {
              if (null === e) return Math.floor(t[0] + Math.random() * (t[1] + 1 - t[0]));
              var n = t[1] || 1,
                s = t[0] || 0,
                o = (e = (9301 * e + 49297) % 233280) / 233280;
              return Math.floor(s + o * (n - s));
            }
            function i(e, n, s) {
              var o = s[0][0],
                i = s[s.length - 1][0],
                r = s[s.length - 1][1],
                a = s[0][1];
              t[e] = {
                hueRange: n,
                lowerBounds: s,
                saturationRange: [o, i],
                brightnessRange: [r, a],
              };
            }
            function r(e) {
              var t = e[0];
              0 === t && (t = 1), 360 === t && (t = 359), (t /= 360);
              var n = e[1] / 100,
                s = e[2] / 100,
                o = Math.floor(6 * t),
                i = 6 * t - o,
                r = s * (1 - n),
                a = s * (1 - i * n),
                c = s * (1 - (1 - i) * n),
                l = 256,
                u = 256,
                d = 256;
              switch (o) {
                case 0:
                  (l = s), (u = c), (d = r);
                  break;
                case 1:
                  (l = a), (u = s), (d = r);
                  break;
                case 2:
                  (l = r), (u = s), (d = c);
                  break;
                case 3:
                  (l = r), (u = a), (d = s);
                  break;
                case 4:
                  (l = c), (u = r), (d = s);
                  break;
                case 5:
                  (l = s), (u = r), (d = a);
              }
              var m = [Math.floor(255 * l), Math.floor(255 * u), Math.floor(255 * d)];
              return m;
            }
            function a(e) {
              var t = e[0],
                n = e[1] / 100,
                s = e[2] / 100,
                o = (2 - n) * s;
              return [t, Math.round(((n * s) / (o < 1 ? o : 2 - o)) * 1e4) / 100, (o / 2) * 100];
            }
            return n;
          })()),
            e && e.exports && (t = e.exports = n),
            (t.randomColor = n);
        });
        gc.randomColor;
        function hc(e, t) {
          const n = (function(e) {
            const t = 'string' == typeof e ? parseInt(e.replace('#', ''), 16) : e;
            return +(
              (299 * ((t >> 16) & 255) + 587 * ((t >> 8) & 255) + 114 * (255 & t)) /
              1e3 /
              255
            ).toFixed(2);
          })(t);
          null != n &&
            (n < 0.6
              ? (e.classList.remove('text-gray-dark'), e.classList.add('text-white'))
              : (e.classList.remove('text-white'), e.classList.add('text-gray-dark')));
        }
        function bc(e, t) {
          let n = t;
          '#' !== n.charAt(0) && (n = `#${n}`), (e.style.backgroundColor = n);
          const s = e.querySelector('.js-new-label-color-icon');
          s && hc(s, t);
        }
        function vc(e, t) {
          e.blur();
          const n = m(e, 'form');
          (g(n, '.js-new-label-color-input', HTMLInputElement).value = t),
            bc(g(n, '.js-new-label-color', HTMLButtonElement), t);
        }
        function jc(e) {
          const t = Array.from(e.querySelectorAll('.js-navigation-item')).filter(
            e => '' === e.style.display,
          );
          if (t.length > 2) return;
          if (!t.every(e => e.classList.contains('js-label-options'))) return;
          const n = t.filter(e => e.classList.contains('js-add-label-button'))[0];
          if (n) {
            for (const t of e.querySelectorAll('[aria-selected="true"]'))
              t.setAttribute('aria-selected', 'false');
            n.setAttribute('aria-selected', 'true');
          }
        }
        function yc(e, t, n) {
          const s = t.querySelector(e);
          s &&
            (n
              ? (function(e, t) {
                  m(e, '.js-label-error-container').classList.add('errored'),
                    (e.textContent = t),
                    e.classList.remove('d-none');
                })(s, n[0])
              : (function(e) {
                  m(e, '.js-label-error-container').classList.remove('errored'),
                    e.classList.add('d-none');
                })(s));
        }
        function Lc(e, t) {
          yc('.js-label-name-error', e, t.name),
            yc('.js-label-description-error', e, t.description),
            yc('.js-label-color-error', e, t.color);
        }
        function wc(e) {
          yc('.js-label-name-error', e, null),
            yc('.js-label-description-error', e, null),
            yc('.js-label-color-error', e, null);
        }
        async function Ec(e) {
          const t = e.closest('.js-label-preview-container');
          if (!t) return;
          const n = m(e, '.js-label-form', HTMLFormElement),
            s = n.querySelector('.js-new-label-error'),
            o = n.getAttribute('data-label-id'),
            i = g(t, '.js-label-preview', HTMLElement),
            r = (function(e, t) {
              let n = g(e, '.js-new-label-name-input', HTMLInputElement).value.trim();
              return n.length < 1 && (n = p(t, 'data-default-name')), n;
            })(n, i),
            a = (function(e) {
              const t = g(e, '.js-new-label-color-input', HTMLInputElement);
              return t.checkValidity() ? t.value.trim().replace(/^#/, '') : 'ededed';
            })(n),
            c = (function(e) {
              let t = null;
              const n = e.querySelector('.js-new-label-description-input');
              return (
                n instanceof HTMLInputElement && n.value.trim().length > 0 && (t = n.value.trim()),
                t
              );
            })(n),
            l = (function(e, t, n, s, o) {
              const i = new URL(`${e}${encodeURIComponent(t)}`, window.location.origin),
                r = new URLSearchParams(i.search.slice(1));
              return (
                r.append('color', n),
                s && r.append('description', s),
                o && r.append('id', o),
                (i.search = r.toString()),
                i.toString()
              );
            })(p(i, 'data-url-template'), r, a, c, o);
          if (t.hasAttribute('data-last-preview-url')) {
            if (l === p(t, 'data-last-preview-url')) return;
          }
          let u;
          try {
            u = await R(document, l);
          } catch (d) {
            const e = await d.response.json();
            return Lc(n, e), void (s && ((s.textContent = e.message), (s.hidden = !1)));
          }
          s && ((s.textContent = ''), (s.hidden = !0)),
            wc(n),
            (i.innerHTML = ''),
            i.appendChild(u),
            t.setAttribute('data-last-preview-url', l);
        }
        function Tc(e, t) {
          m(e, '.js-details-container').classList.toggle('is-empty', t);
        }
        function kc(e) {
          const t = g(document, '.js-labels-count'),
            n = we(t.textContent) + e;
          t.textContent = Ee(n);
          const s = g(document, '.js-labels-label');
          return Te(n, s), n;
        }
        function Mc(e) {
          const t = e.querySelector('.js-new-label-name-input');
          if (!t) return;
          h(t instanceof HTMLInputElement, 'app/assets/modules/github/issues/labels.js:438');
          const n = g(e, '.js-new-label-color-input', HTMLInputElement);
          let s = gc();
          if (n.value.length > 0) for (; n.value === s; ) s = gc();
          n.value = s;
          const o = g(e, '.js-new-label-color', HTMLButtonElement);
          bc(o, s);
          const i = g(document, '.js-new-label-name').textContent;
          _(t, i), rr(t), Ec(o);
        }
        l('.js-label-filter-field', function(e) {
          const t = e.target;
          h(t instanceof HTMLInputElement, 'app/assets/modules/github/issues/labels.js:255');
          const n = m(t, '.js-select-menu').querySelector('.js-new-label-name');
          if (!n) return;
          const s = t.value.trim();
          n.textContent = s;
        }),
          u('filterable:change', '.js-filterable-issue-labels', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/issues/labels.js:268');
            const t = m(e.target, '.js-issue-labels-menu-content'),
              n = t.querySelector('.js-new-label-modal, .js-add-label-button');
            if (!n) return;
            const s = e.detail.inputField.value.trim().toLowerCase(),
              o = Array.from(t.querySelectorAll('.js-navigation-item')).filter(
                e => '' === e.style.display,
              );
            let i = s.length > 0;
            if (i)
              for (const r of o) {
                const e = r.querySelector('input[type="checkbox"][name="issue[labels][]"]');
                if (e) {
                  if (e.getAttribute('data-label-name').toLowerCase() === s) {
                    i = !1;
                    break;
                  }
                }
              }
            n.classList.toggle('d-none', !i), jc(t);
          }),
          u('navigation:focus', '.js-label-options', function(e) {
            const t = e.target.closest('.js-filterable-issue-labels');
            t instanceof HTMLElement && jc(t);
          }),
          d('.js-new-label-color-input', function(e) {
            const t = m(e, 'form'),
              n = g(t, '.js-new-label-swatches');
            (n.hidden = !1),
              e.addEventListener(
                'blur',
                function() {
                  n.hidden = !0;
                },
                { once: !0 },
              );
          }),
          l('.js-new-label-color-input', function(e) {
            const t = e.target;
            h(t instanceof HTMLInputElement, 'app/assets/modules/github/issues/labels.js:328');
            let n = t.value.trim();
            if (!(n.length < 1))
              if ((0 !== n.indexOf('#') && ((n = `#${n}`), (t.value = n)), t.checkValidity())) {
                t.classList.remove('text-red');
                const e = m(t, 'form');
                bc(g(e, '.js-new-label-color', HTMLButtonElement), n);
              } else t.classList.add('text-red');
          }),
          N('keyup', '.js-new-label-color-input', function(e) {
            const t = e.target;
            h(t instanceof HTMLInputElement, 'app/assets/modules/github/issues/labels.js:352');
            let n = t.value.trim();
            if ((0 !== n.indexOf('#') && ((n = `#${n}`), (t.value = n)), t.checkValidity())) {
              const e = m(t, 'form');
              bc(g(e, '.js-new-label-color', HTMLButtonElement), n);
            }
            L(t, 'change', !1), wc(m(t, 'form', HTMLFormElement));
          }),
          N('keyup', '.js-new-label-description-input', function(e) {
            const t = e.target;
            h(t instanceof HTMLInputElement, 'app/assets/modules/github/issues/labels.js:373');
            const n = t.form;
            h(n, 'app/assets/modules/github/issues/labels.js:375'), wc(n);
          }),
          N('keyup', '.js-new-label-color-input', function(e) {
            const t = e.target;
            h(t instanceof HTMLInputElement, 'app/assets/modules/github/issues/labels.js:381');
            const n = t.form;
            h(n, 'app/assets/modules/github/issues/labels.js:383'), wc(n);
          }),
          N('keydown', '.js-label-filter-field', function(e) {
            if ('Enter' !== e.key) return;
            const t = g(document, '.js-issue-labels-menu-content').querySelector(
              '.js-label-options[aria-selected="true"]',
            );
            t && t.click();
          }),
          u('click', '.js-new-label-color', function(e) {
            const t = e.currentTarget;
            h(t instanceof HTMLButtonElement, 'app/assets/modules/github/issues/labels.js:404'),
              vc(t, gc()),
              Ec(t);
          }),
          u('mousedown', '.js-new-label-color-swatch', function(e) {
            const t = e.currentTarget;
            h(t instanceof HTMLButtonElement, 'app/assets/modules/github/issues/labels.js:412'),
              vc(t, p(t, 'data-color')),
              Ec(t),
              (m(t, '.js-new-label-swatches').hidden = !0);
          }),
          u(
            'toggle',
            '.js-new-label-modal',
            function(e) {
              e.target.hasAttribute('open') && Mc(e.target);
            },
            { capture: !0 },
          ),
          v('.js-new-label-modal-form', async function(e, t) {
            const n = g(e, '.js-new-label-error');
            let s;
            try {
              s = await t.html();
            } catch (i) {
              const e = i.response.json;
              (n.textContent = e.message), (n.hidden = !1);
            }
            if (!s) return;
            (n.hidden = !0),
              ye(g(document, '.js-issue-labels-menu-content')),
              g(document, '.js-new-label-modal').removeAttribute('open'),
              g(document, '.js-filterable-issue-labels').prepend(s.html);
            const o = g(document, '.js-label-filter-field', HTMLInputElement);
            (o.value = o.defaultValue), o.focus();
          }),
          u('click', '.js-edit-label-cancel', function(e) {
            const t = m(e.target, 'form', HTMLFormElement);
            wc(t), t.reset();
            const n = g(t, '.js-new-label-color-input', HTMLInputElement),
              s = n.value;
            (g(t, '.js-new-label-color', HTMLButtonElement).style.backgroundColor = s),
              ar(t),
              Ec(n);
            const o = e.currentTarget.closest('.js-labels-list-item');
            if (o) {
              g(o, '.js-update-label', HTMLElement).classList.add('d-none');
              const e = o.querySelector('.js-label-preview');
              if (e) {
                e.classList.add('d-none'),
                  g(o, '.js-label-link', HTMLElement).classList.remove('d-none');
              }
              const t = o.querySelectorAll('.js-hide-on-label-edit.d-none');
              for (const n of t) n.classList.remove('d-none');
            }
          }),
          v('.js-update-label', async function(e, t) {
            let n;
            try {
              n = await t.html();
            } catch (s) {
              return void Lc(e, s.response.json);
            }
            wc(e), m(e, '.js-labels-list-item').replaceWith(n.html);
          }),
          v('.js-create-label', async function(e, t) {
            let n;
            try {
              n = await t.html();
            } catch (o) {
              return void Lc(e, o.response.json);
            }
            e.reset(),
              wc(e),
              g(document, '.js-label-list').prepend(n.html),
              kc(1),
              Tc(e, !1),
              vc(g(e, '.js-new-label-color', HTMLButtonElement), gc()),
              Ec(g(e, '.js-new-label-name-input', HTMLInputElement)),
              ar(e);
            const s = e.closest('.js-details-container');
            s instanceof HTMLElement && Le(s);
          }),
          u('click', '.js-details-target-new-label', function() {
            const e = g(document, '.js-create-label');
            g(e, '.js-new-label-name-input', HTMLInputElement).focus();
          }),
          u('click', '.js-edit-label', function(e) {
            const t = m(e.currentTarget, '.js-labels-list-item'),
              n = g(t, '.js-update-label', HTMLElement);
            n.classList.remove('d-none'),
              g(n, '.js-new-label-name-input', HTMLInputElement).focus();
            const s = t.querySelector('.js-label-preview');
            if (s) {
              s.classList.remove('d-none'),
                g(t, '.js-label-link', HTMLElement).classList.add('d-none');
            }
            const o = f(t, '.js-hide-on-label-edit', HTMLElement);
            for (const i of o) i.classList.add('d-none');
          }),
          v('.js-delete-label', async function(e, t) {
            const n = m(e, '.js-labels-list-item');
            (g(n, '.js-label-delete-spinner').hidden = !1),
              await t.text(),
              Tc(e, 0 === kc(-1)),
              n.remove();
          });
        const Ac = j(function(e) {
          const t = e.target;
          h(t instanceof HTMLInputElement, 'app/assets/modules/github/issues/labels.js:231'), Ec(t);
        }, 500);
        function xc() {
          const e = g(document, '.js-reveal-custom-thread-settings', HTMLInputElement).checked,
            t = !document.querySelector('.js-custom-thread-notification-option:checked'),
            n = g(document, '.js-custom-thread-settings'),
            s = g(document, '[data-custom-option-required-text]', HTMLInputElement),
            o = e && t ? p(s, 'data-custom-option-required-text') : '';
          s.setCustomValidity(o), (n.hidden = !e);
        }
        function Sc(e) {
          e instanceof HTMLFormElement ? y(e) : Cc(e);
        }
        function Hc({ currentTarget: e }) {
          h(e instanceof Element, 'app/assets/modules/github/issues/sidebar.js:22');
          const t =
            e.closest('.js-issue-sidebar-form') || e.querySelector('.js-issue-sidebar-form');
          h(t, 'app/assets/modules/github/issues/sidebar.js:24'), Sc(t);
        }
        async function Cc(e, t = 'post', n) {
          const s = (function(e) {
            const t = m(e, 'form', HTMLFormElement),
              n = Ae(t),
              s = new FormData();
            for (const [o, i] of n) e.contains(qc(t, o, i)) && s.append(o, i);
            return s;
          })(e);
          n && s.append(n.name, n.value);
          let o = e.getAttribute('data-authenticity-token');
          if (null == o) {
            const t = m(e, 'form', HTMLFormElement).elements.namedItem('authenticity_token');
            t instanceof HTMLInputElement && (o = t.value);
          }
          h(o, 'app/assets/modules/github/issues/sidebar.js:117'),
            s.append('authenticity_token', o);
          const i = p(e, 'data-url'),
            r = await A(i, { method: t, body: s });
          !(function(e, t) {
            e.replaceWith(xe(document, t));
          })(m(e, '.js-discussion-sidebar-item'), r);
        }
        function qc(e, t, n) {
          for (const s of e.elements)
            if (
              (s instanceof HTMLInputElement ||
                s instanceof HTMLTextAreaElement ||
                s instanceof HTMLButtonElement) &&
              s.name === t &&
              s.value === n
            )
              return s;
        }
        u('suggester:complete', '.js-new-label-name-input', Ac),
          l('.js-new-label-name-input', Ac),
          l('.js-new-label-description-input', Ac),
          l('.js-new-label-color-input', Ac),
          N('keypress', '.js-new-label-name-input', function(e) {
            const t = e.target;
            h(t instanceof HTMLInputElement, 'app/assets/modules/github/issues/labels.js:640');
            const n = parseInt(t.getAttribute('data-maxlength'));
            se(t.value) >= n && e.preventDefault();
          }),
          u('click', '.js-issues-label-select-menu-item', function(e) {
            h(e instanceof MouseEvent, 'app/assets/modules/github/issues/labels.js:650'),
              e.altKey &&
                (e.preventDefault(),
                e.stopPropagation(),
                (window.location = p(e.currentTarget, 'data-excluded-url')));
          }),
          N('keydown', '.js-issues-label-select-menu-item', function(e) {
            if (
              (h(e instanceof KeyboardEvent, 'app/assets/modules/github/issues/labels.js:660'),
              'Enter' !== e.key)
            )
              return;
            if (!e.altKey) return;
            const t = e.currentTarget;
            e.preventDefault(),
              e.stopPropagation(),
              t instanceof HTMLAnchorElement && (window.location = p(t, 'data-excluded-url'));
          }),
          u('click', '.js-open-label-creation-modal', async function() {
            Mc(
              await ne({
                content: g(
                  document,
                  '.js-label-creation-template',
                  HTMLTemplateElement,
                ).content.cloneNode(!0),
                detailsClass: 'js-new-label-modal',
              }),
            );
          }),
          ce(function({ newURL: e }) {
            const t = e.match(/\/issues#issue\/(\d+)$/);
            if (t) {
              const n = t[1];
              window.location = e.replace(/\/?#issue\/.+/, `/${n}`);
            }
          }),
          ce(function({ newURL: e }) {
            const t = e.match(/\/issues#issue\/(\d+)\/comment\/(\d+)$/);
            if (t) {
              const n = t[1],
                s = t[2];
              window.location = e.replace(/\/?#issue\/.+/, `/${n}#issuecomment-${s}`);
            }
          }),
          i('.js-issue-row .js-issues-list-check:checked', {
            add(e) {
              m(e, '.js-issue-row').classList.add('selected');
            },
            remove(e) {
              m(e, '.js-issue-row').classList.remove('selected');
            },
          }),
          u('navigation:keydown', '.js-issue-row', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/issues/list.js:28'),
              'x' === e.detail.hotkey &&
                (!(function(e) {
                  const t = e.querySelector('.js-issues-list-check');
                  t instanceof HTMLInputElement && _(t, !t.checked);
                })(e.currentTarget),
                e.preventDefault(),
                e.stopPropagation());
          }),
          d('#js-issues-search', function(e) {
            h(e instanceof HTMLInputElement, 'app/assets/modules/github/issues/list.js:40'),
              (e.value = e.value);
          }),
          u(
            'details-menu-select',
            '.js-saved-reply-menu',
            function(e) {
              h(e instanceof CustomEvent, 'app/assets/modules/github/issues/replies.js:15');
              const t = g(e.detail.relatedTarget, '.js-saved-reply-body').textContent.trim(),
                n = m(e.target, '.js-previewable-comment-form'),
                s = g(n, 'textarea.js-comment-field', HTMLTextAreaElement);
              ke(s, t), setTimeout(() => s.focus(), 0);
            },
            { capture: !0 },
          ),
          N('keydown', '.js-saved-reply-shortcut-comment-field', function(e) {
            if ('Control+.' === V(e)) {
              h(e.target instanceof HTMLElement, 'app/assets/modules/github/issues/replies.js:29');
              const t = m(e.target, '.js-previewable-comment-form');
              g(t, '.js-saved-reply-container').setAttribute('open', ''),
                e.preventDefault(),
                ve({ category: 'Markdown Toolbar', action: 'shortcut', label: 'saved reply' });
            }
          }),
          N('keydown', '.js-saved-reply-filter-input', function(e) {
            if (/^Control\+[1-9]$/.test(V(e))) {
              h(e.target instanceof HTMLElement, 'app/assets/modules/github/issues/replies.js:44');
              const t = m(e.target, '.js-saved-reply-container').querySelectorAll(
                  '[role="menuitem"]',
                ),
                n = Number(e.key),
                s = t[n - 1];
              s &&
                (s.click(),
                e.preventDefault(),
                ve({
                  category: 'Saved Replies',
                  action: 'shortcut',
                  label: `saved reply number ${n}`,
                }));
            }
          }),
          u('change', '.js-thread-notification-setting', xc),
          u('change', '.js-custom-thread-notification-option', xc),
          u('reset', '.js-custom-thread-settings-form', xc),
          u('selectmenu:selected', '.js-discussion-sidebar-item', function(e) {
            const t = g(e.currentTarget, '.js-issue-sidebar-form'),
              n = e.target,
              s = m(n, '.js-select-menu'),
              o = s.hasAttribute('data-multiple');
            if (n.hasAttribute('data-clear-assignees')) {
              const e = f(s, 'input[name="issue[user_assignee_ids][]"]:checked', HTMLInputElement);
              for (const t of e) (t.disabled = !1), (t.checked = !1);
              Sc(t);
            } else if (o) {
              const e = Number(s.getAttribute('data-max-options'));
              if (e) {
                const t = s.querySelectorAll('input[type="checkbox"]:checked').length;
                g(s, '.js-max-warning').classList.toggle('d-none', t <= e);
              }
              s.addEventListener('menu:deactivate', Hc, { once: !0 });
            } else Sc(t);
          }),
          v('.js-issue-sidebar-form', async function(e, t) {
            const n = await t.html();
            h(
              e.parentNode instanceof HTMLElement,
              'app/assets/modules/github/issues/sidebar.js:63',
            ),
              m(e, '.js-discussion-sidebar-item').replaceWith(n.html);
          }),
          u('click', 'div.js-issue-sidebar-form .js-suggested-reviewer', function(e) {
            const t = e.currentTarget;
            h(t instanceof HTMLButtonElement, 'app/assets/modules/github/issues/sidebar.js:70'),
              Cc(m(t, '.js-issue-sidebar-form'), 'post', { name: t.name, value: t.value }),
              e.preventDefault();
          }),
          u('click', 'div.js-issue-sidebar-form .js-issue-assign-self', function(e) {
            const t = e.currentTarget;
            h(t instanceof HTMLButtonElement, 'app/assets/modules/github/issues/sidebar.js:80'),
              Cc(m(t, '.js-issue-sidebar-form'), 'post', { name: t.name, value: t.value }),
              e.preventDefault();
          }),
          u('click', '.js-issue-unassign-self', function(e) {
            Cc(m(e.currentTarget, '.js-issue-sidebar-form'), 'delete'), e.preventDefault();
          }),
          v('.js-pages-preview-toggle-form', async function(e, t) {
            const n = await t.json();
            g(e, 'button.btn').textContent = n.json.new_button_value;
          }),
          u('change', '.js-project-menu-checkbox', function(e) {
            const t = e.currentTarget;
            h(t instanceof HTMLInputElement, 'app/assets/modules/github/issues/sidebar.js:131');
            const n = m(t, '.js-project-menu-container');
            for (const s of f(n, '.js-project-menu-checkbox', HTMLInputElement))
              s !== t &&
                s.name === t.name &&
                ((s.checked = t.checked),
                m(s, '.select-menu-item').classList.toggle('selected', s.checked));
          }),
          u('click', '.js-prompt-dismiss', function(e) {
            m(e.currentTarget, '.js-prompt').remove();
          }),
          u('click', '.js-dismiss-issue-xrefs-new-feature-notice', async function(e) {
            const t = p(e.currentTarget, 'data-url'),
              n = new FormData();
            n.append('notice', 'issue_xrefs_new_feature'),
              await A(Me(t, { method: 'post', body: n }));
            const s = document.querySelectorAll('.js-issue-xrefs-new-feature-notice');
            for (const i of s) i.remove();
            const o = document.querySelector('.js-enable-hovercard');
            o && o.setAttribute('data-issue-and-pr-hovercards-enabled', '');
          });
        const Ic = new WeakMap(),
          _c = new WeakMap();
        u('change', '.js-issues-list-check', function() {
          const e = !!document.querySelector('.js-issues-list-check:checked');
          g(document, '#js-issues-toolbar').classList.toggle('triage-mode', e);
          for (const t of document.querySelectorAll('.js-issue-triage-menu')) Ic.set(t, !0);
        }),
          u(
            'toggle',
            '.js-issue-triage-menu',
            function(e) {
              const t = e.currentTarget;
              h(t instanceof Element, 'app/assets/modules/github/issues/triage.js:34'),
                t.hasAttribute('open')
                  ? (function(e) {
                      if (!Ic.has(e)) return;
                      const t = g(document, '.js-triage-loader-template', HTMLTemplateElement),
                        n = g(e, '.js-triage-deferred-content');
                      (n.innerHTML = ''), n.append(t.content.cloneNode(!0));
                      const s = (function(e, t) {
                        const n = new URL(e, window.location.origin),
                          s = new URLSearchParams(n.search);
                        for (const [o, i] of t) s.append(o, i);
                        return (n.search = s.toString()), n.toString();
                      })(
                        p(e, 'data-url'),
                        f(document, '.js-issues-list-check:checked', HTMLInputElement).map(e => [
                          e.name,
                          e.value,
                        ]),
                      );
                      g(n, 'include-fragment').setAttribute('src', s), Ic.delete(e);
                    })(t)
                  : (async function(e) {
                      const t = g(e, 'form', HTMLFormElement);
                      if (!_c.has(t)) return;
                      !(function(e, t) {
                        const n = m(e, '.js-issues-toolbar-triage');
                        (g(n, '.js-issue-triage-spinner').hidden = !t),
                          (g(n, '.js-issue-triage-error').hidden = !0);
                      })(e, !0);
                      try {
                        const s = await K(t.action, { method: t.method, body: new FormData(t) });
                        _c.delete(t),
                          await ee(s.job.url, { headers: { accept: 'application/json' } }),
                          U({
                            url: window.location.href,
                            container: g(document, '#js-repo-pjax-container'),
                            replace: !0,
                          });
                      } catch (n) {
                        !(function(e, t) {
                          const n = m(e, '.js-issues-toolbar-triage');
                          (g(n, '.js-issue-triage-spinner').hidden = !0),
                            (g(n, '.js-issue-triage-error').hidden = !t);
                        })(e, !0);
                      }
                    })(t);
            },
            { capture: !0 },
          ),
          u(
            'details-menu-selected',
            '.js-issue-triage-menu details-menu',
            function(e) {
              h(e instanceof CustomEvent, 'app/assets/modules/github/issues/triage.js:88');
              const t = e.detail.relatedTarget,
                n = m(t, 'form', HTMLFormElement),
                s = (function(e) {
                  const t = 'true' === e.getAttribute('aria-checked'),
                    n = e.getAttribute('name') || e.getAttribute('data-name'),
                    s = e.getAttribute('value') || e.getAttribute('data-value');
                  h(n && s, 'app/assets/modules/github/issues/triage.js:107');
                  const o = document.createElement('input');
                  switch (((o.type = 'hidden'), (o.name = n), e.getAttribute('role'))) {
                    case 'menuitem':
                    case 'menuitemradio':
                      o.value = s;
                      break;
                    case 'menuitemcheckbox':
                      o.value = t ? s : '0';
                  }
                  return o;
                })(t),
                o = g(n, '.js-issues-triage-fields'),
                i = o.querySelector(`[name='${s.name}']`);
              i ? i.replaceWith(s) : o.append(s);
              _c.set(n, !0);
            },
            { capture: !0 },
          ),
          v('.js-undo-issue-event-form', async (e, t) => {
            await t.text();
            const n = p(e, 'action');
            e.remove();
            const s = document.querySelectorAll(`.js-undo-issue-event-form[action="${n}"]`);
            for (let o = 0; o < s.length; o++) s[o].remove();
          });
        class $c extends Error {
          constructor(e) {
            super(e), (this.name = 'JumpToParseError');
          }
        }
        class Dc extends Error {
          constructor(e) {
            super(e.message),
              (this.name = 'JumpToPageViewError'),
              (this.stack = e.stack),
              this.message;
          }
        }
        const Rc = /^(team|repository|project):[^\/]+\/[^\/]+(\/([^\/]+))?$/,
          Nc = 'jump_to:page_views';
        function Bc(e, t) {
          t.setItem(Nc, JSON.stringify(e));
        }
        function Pc(e) {
          if (!e) return {};
          const t = e.getItem(Nc);
          if (!t) return {};
          let n;
          try {
            n = JSON.parse(t);
          } catch (Rh) {
            return dt(new $c('Failed to parse jump-to localStorage contents')), Bc({}, e), {};
          }
          const s = {};
          for (const o in n)
            if (o.match(Rc)) s[o] = n[o];
            else {
              dt(new $c('Invalid jump-to pageview map key from localStorage'));
            }
          return s;
        }
        function Fc(e) {
          let t;
          switch (e.type) {
            case 'Project':
              h(e.owner, 'app/assets/modules/github/jump-to/page-key-helpers.js:10'),
                h(
                  null !== e.number && void 0 !== e.number,
                  'app/assets/modules/github/jump-to/page-key-helpers.js:11',
                ),
                (t = Uc(e.owner.name, `${e.number}`));
              break;
            case 'Repository':
              t = Wc(...e.name.split('/'));
              break;
            case 'Team':
              t = Oc(...e.name.split('/'));
              break;
            default:
              throw new Error(`Invalid Suggestion type: ${e.type}`);
          }
          return t;
        }
        function Oc(e, t) {
          return `team:${e}/${t}`;
        }
        function Wc(e, t) {
          return `repository:${e}/${t}`;
        }
        function Uc(e, t) {
          return `project:${e}/${t}`;
        }
        function zc(e, t, n) {
          const s = new URL(e, window.location.origin),
            o = new URLSearchParams(s.search.slice(1));
          o.set('q', t), n && o.set('unscoped_q', t);
          const i = new URLSearchParams(window.location.search).get('type');
          return i && o.set('type', i), (s.search = o.toString()), s.toString();
        }
        let Vc;
        function Kc(e) {
          return Vc || (Vc = o(document, 'enabled-features').split(',')), -1 !== Vc.indexOf(e);
        }
        let Yc = {};
        function Xc(e) {
          const t = p(e, 'data-target-type');
          if ('Search' === t) {
            const e = g(document, '.js-site-search-form', HTMLFormElement),
              t = e.getAttribute('data-scope-type');
            t &&
              Gc({
                dimensions: { scope_id: parseInt(e.getAttribute('data-scope-id')), scope_type: t },
              }),
              Jc('search');
          } else
            Gc({
              dimensions: { target_id: parseInt(e.getAttribute('data-target-id')), target_type: t },
              measures: {
                client_rank: parseInt(e.getAttribute('data-client-rank')),
                server_rank: parseInt(e.getAttribute('data-server-rank')),
              },
            }),
              Jc('click');
        }
        function Jc(e) {
          const t = parseInt(o(document, 'octolytics-actor-id'));
          if (!t) return !1;
          (Yc.dimensions = Yc.dimensions || {}), (Yc.dimensions.actor_id = t);
          let n = Yc.dimensions && Yc.dimensions.session_id;
          return (
            ('menu-activation' !== e || !n) &&
            (!('menu-activation' !== e && !n) &&
              ('menu-activation' === e &&
                Gc({
                  dimensions: {
                    session_id: (n = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
                      /[xy]/g,
                      function(e) {
                        const t = (16 * Math.random()) | 0,
                          n = 'x' === e ? t : (3 & t) | 8;
                        return n.toString(16);
                      },
                    )),
                  },
                }),
              (Yc.event_type = `jump-to-${e}`),
              h(n, 'app/assets/modules/github/jump-to/tracking.js:76'),
              (function(e) {
                Kc('JUMP_TO_LOGGING') && console.log(JSON.stringify(e));
                $a(e);
              })(Yc),
              ('menu-deactivation' !== e && 'click' !== e && 'search' !== e) || (Yc = {}),
              !0))
          );
        }
        function Gc(e) {
          e.context &&
            ((Yc.context = Object.assign(Yc.context || {}, e.context)),
            (Yc.dimensions = Object.assign(Yc.dimensions || {}, e.context))),
            e.dimensions && (Yc.dimensions = Object.assign(Yc.dimensions || {}, e.dimensions)),
            e.measures && (Yc.measures = Object.assign(Yc.measures || {}, e.measures));
        }
        function Qc(e) {
          g(document, '.js-jump-to-suggestions-container').classList.remove('d-none'),
            e.classList.add('jump-to-dropdown-visible'),
            g(document, '.js-jump-to').setAttribute('aria-expanded', 'true');
        }
        function Zc() {
          g(document, '.js-jump-to-suggestions-container').classList.add('d-none'),
            g(document, '.js-jump-to-field').classList.remove('jump-to-dropdown-visible'),
            g(document, '.js-jump-to').setAttribute('aria-expanded', 'false'),
            Jc('menu-deactivation');
        }
        function el(e) {
          const t = e.form;
          h(t, 'app/assets/modules/github/jump-to/render.js:40');
          const n = g(document, '.js-jump-to-suggestions-results-container'),
            s = e.value.trim(),
            o = !(!e.form || !e.form.getAttribute('data-scope-type')),
            i = g(n, '.js-jump-to-scoped-search'),
            r = g(n, '.js-jump-to-global-search');
          if ((i.classList.toggle('d-none', !s || !o), r.classList.toggle('d-none', !s), s && o)) {
            const e = ol(i, s, zc(p(t, 'action'), s, o), !0);
            n.replaceChild(e, i);
          }
          if (s) {
            const e = ol(r, s, zc(p(t, 'data-unscoped-search-url'), s, !1), !1);
            n.replaceChild(e, r);
          }
        }
        function tl(e, t, n) {
          const s = e.form;
          h(s, 'app/assets/modules/github/jump-to/render.js:82');
          const i = il('.js-jump-to-suggestions-template-container'),
            r = document.createDocumentFragment();
          n.length < 1 && !t
            ? (function() {
                if (!o(document, 'user-login')) return;
                const e = il('.js-jump-to-no-results-template-container').cloneNode(!0);
                e.classList.remove('d-none'), nl(e);
              })()
            : (n.forEach((e, n) => {
                r.appendChild(
                  (function(e, t, n, s) {
                    const o = e.cloneNode(!0);
                    o.id = `jump-to-suggestion-${t.type.toLowerCase()}-${t.databaseId}`;
                    const i = g(o, '.js-jump-to-suggestion-path', HTMLAnchorElement);
                    (i.href = t.path),
                      i.setAttribute('data-target-type', t.type),
                      i.setAttribute('data-target-id', `${t.databaseId}`),
                      i.setAttribute('data-client-rank', `${s}`),
                      i.setAttribute('data-server-rank', `${t.rank}`);
                    const r = g(o, '.js-jump-to-suggestion-name');
                    switch (
                      ((r.textContent = t.name),
                      r.setAttribute('aria-label', t.name),
                      qo(r, n.replace(/\s/g, '')),
                      t.type)
                    ) {
                      case 'Team': {
                        const e = g(o, '.js-jump-to-suggestion-avatar', HTMLImageElement);
                        (e.alt = t.name),
                          (e.src = t.avatarUrl ? t.avatarUrl : ''),
                          e.classList.remove('d-none');
                        break;
                      }
                      case 'Project':
                        sl(o, '.js-jump-to-octicon-project');
                        break;
                      case 'Repository':
                        sl(o, '.js-jump-to-octicon-repo');
                    }
                    return g(o, '.js-jump-to-badge-jump').classList.remove('d-none'), o;
                  })(i, e, t, n),
                );
              }),
              nl(r));
        }
        function nl(e) {
          const t = g(document, '.js-jump-to-suggestions-results-container');
          for (const n of f(t, '.js-jump-to-suggestion'))
            h(n.parentNode, 'app/assets/modules/github/jump-to/render.js:125'),
              n.parentNode.removeChild(n);
          t.appendChild(e);
        }
        function sl(e, t) {
          const n = g(e, '.js-jump-to-octicon'),
            s = g(n, t, SVGElement);
          n.classList.remove('d-none'), s.classList.remove('d-none');
        }
        function ol(e, t, n, s) {
          const o = e.cloneNode(!0);
          o.id = `jump-to-suggestion-search-${s ? 'scoped' : 'global'}`;
          const i = g(o, '.js-jump-to-suggestion-path', HTMLAnchorElement);
          (i.href = n), i.setAttribute('data-target-type', 'Search');
          const r = g(o, '.js-jump-to-suggestion-name');
          (r.textContent = t), r.setAttribute('aria-label', t), sl(o, '.js-jump-to-octicon-search');
          const a = g(o, '.js-jump-to-badge-search');
          return (
            a.classList.remove('d-none'),
            s
              ? g(a, '.js-jump-to-badge-search-text-default').classList.remove('d-none')
              : g(a, '.js-jump-to-badge-search-text-global').classList.remove('d-none'),
            o
          );
        }
        function il(e) {
          const t = g(document, '.js-jump-to-suggestions-container'),
            n = g(t, e).firstElementChild;
          return h(n instanceof HTMLElement, 'app/assets/modules/github/jump-to/render.js:218'), n;
        }
        const rl = new WeakMap(),
          al = new WeakMap();
        function cl(e, t, n) {
          const s = t.toLowerCase(),
            o = n.text,
            i = n.score;
          let r = e;
          if (s) {
            r = [];
            for (const t of e) {
              null == rl.get(t) && rl.set(t, o(t));
              const e = i ? i(rl.get(t) || '', s, t) : Ho(rl.get(t) || '', s);
              al.set(t, e), e > 0 && r.push(t);
            }
            r.sort(ll);
          }
          return null != n.limit ? r.slice(0, n.limit) : r;
        }
        function ll(e, t) {
          const n = parseFloat(al.get(e)),
            s = parseFloat(al.get(t)),
            o = rl.get(e) || '',
            i = rl.get(t) || '';
          return n > s ? -1 : n < s ? 1 : o < i ? -1 : o > i ? 1 : 0;
        }
        const ul = { frequency: 0.6, recency: 0.4 };
        function dl(e, t, n) {
          const s = t.get(e) || 0,
            o = n.get(e) || 0;
          return s * ul.frequency + o * ul.recency;
        }
        function ml(e) {
          const t = [...Object.keys(e)].reduce((t, n) => t + e[n].visitCount, 0);
          return new Map(Object.keys(e).map(n => [n, e[n].visitCount / t]));
        }
        function fl(e) {
          const t = [...Object.keys(e)].sort((t, n) => e[t].lastVisitedAt - e[n].lastVisitedAt),
            n = t.length;
          return new Map(t.map((e, t) => [e, (t + 1) / n]));
        }
        function pl(e) {
          return !!(e
            ? e.closest('.js-jump-to-field')
            : document.querySelector('.js-jump-to-field'));
        }
        function gl(e, t) {
          const n = e.value.trim(),
            s = (function(e, t = null) {
              const n = t || Pc(),
                s = ml(n),
                o = fl(n);
              return e
                .map(e => ({ suggestion: e, score: dl(e.pageKey, s, o) }))
                .sort((e, t) => t.score - e.score)
                .map(e => e.suggestion);
            })(
              (function(e, t, n) {
                const s = e.replace(/\s/g, ''),
                  o = t.filter(e => e.path !== n);
                return s ? cl(o, s, { text: e => e.name }) : o;
              })(n, t, window.location.pathname),
            ),
            o = s.slice(0, 7);
          Gc({
            measures: {
              result_count: s.length,
              display_count: o.length,
              filter_count: t.length - s.length,
            },
            context: { query: n, display_set: o.map(e => [e.type, e.databaseId]) },
          }),
            tl(e, n, o),
            Jc('menu-activation') || Jc('query');
        }
        const hl = /^\/orgs\/([a-z0-9-]+)\/teams\/([\w-]+)/,
          bl = [
            /^\/([^\/]+)\/([^\/]+)\/?$/,
            /^\/([^\/]+)\/([^\/]+)\/blob/,
            /^\/([^\/]+)\/([^\/]+)\/tree/,
            /^\/([^\/]+)\/([^\/]+)\/issues/,
            /^\/([^\/]+)\/([^\/]+)\/pulls?/,
            /^\/([^\/]+)\/([^\/]+)\/pulse/,
          ],
          vl = [
            ['organization', /^\/orgs\/([a-z0-9-]+)\/projects\/([0-9-]+)/],
            ['repository', /^\/([^\/]+)\/([^\/]+)\/projects\/([0-9-]+)/],
          ],
          jl = 100;
        function yl(e) {
          return Object.keys(e).length <= jl
            ? e
            : (function(e) {
                const t = ml(e),
                  n = fl(e);
                return Object.keys(e)
                  .map(e => ({ pageKey: e, score: dl(e, t, n) }))
                  .sort((e, t) => t.score - e.score)
                  .map(e => e.pageKey);
              })(e)
                .slice(0, jl / 2)
                .reduce((t, n) => ((t[n] = e[n]), t), {});
        }
        function Ll(e, t) {
          const n = Pc(t),
            s = Math.floor(Date.now() / 1e3),
            o = n[e] || { lastVisitedAt: s, visitCount: 0 };
          (o.visitCount += 1), (o.lastVisitedAt = s), (n[e] = o), Bc(yl(n), t);
        }
        const wl = () => {
          const e = 'test-storage-availability';
          try {
            return (
              window.localStorage.setItem(e, e),
              window.localStorage.removeItem(e),
              window.localStorage
            );
          } catch (t) {
            return null;
          }
        };
        let El, Tl;
        async function kl(e) {
          const t = (function(e) {
              const t = p(e, 'data-jump-to-suggestions-path');
              return window.location.origin + t;
            })(e),
            n = (function() {
              const e = new FormData();
              for (const t of Object.keys(Pc())) e.append('variables[pageViews][]', t);
              return e;
            })();
          try {
            return (function(e) {
              if (e.data.errors) return [];
              let t = 1;
              const n = [];
              for (const s of e.data.suggestions.nodes)
                null != s &&
                  ((s.rank = t++),
                  (s.pageKey = Fc(s)),
                  'Team' === s.type && (s.name = `@${s.name}`),
                  n.push(s));
              return n;
            })(await K(Me(t, { method: 'POST', body: n })));
          } catch (s) {
            if (s.response && 422 === s.response.status) return [];
            throw s;
          }
        }
        async function Ml(e) {
          const t = e;
          h(t instanceof HTMLInputElement, 'app/assets/modules/github/jump-to.js:78'),
            (function(e) {
              e.classList.add('js-navigation-enable'), e.classList.add('jump-to-field-active');
            })(t),
            Qc(t),
            El || (El = kl(t)),
            el(t),
            Al(t),
            gl(t, await El);
        }
        function Al(e) {
          const t = e.value.trim(),
            n = g(document, '.js-jump-to-suggestions-results-container');
          t ? Se(n) : He(n);
        }
        i('.js-jump-to-field', {
          constructor: HTMLInputElement,
          add(e) {
            try {
              !(function(e, t = wl()) {
                if (!t) return;
                const n = e.match(hl);
                if (n) return void Ll(Oc(n[1], n[2]), t);
                let s, o;
                for (let i = 0, r = vl.length; i < r; i++) {
                  const [n, o] = vl[i];
                  if ((s = e.match(o))) {
                    let e, o;
                    switch (n) {
                      case 'organization':
                        (e = s[1]), (o = s[2]);
                        break;
                      case 'repository':
                        (e = `${s[1]}/${s[2]}`), (o = s[3]);
                    }
                    return (
                      h(e, 'app/assets/modules/github/jump-to/page-views.js:62'),
                      h(o, 'app/assets/modules/github/jump-to/page-views.js:63'),
                      void Ll(Uc(e, o), t)
                    );
                  }
                }
                for (let i = 0, r = bl.length; i < r; i++)
                  if ((o = e.match(bl[i]))) return void Ll(Wc(o[1], o[2]), t);
              })(window.location.pathname);
            } catch (Rh) {
              dt(new Dc(Rh));
            }
            T(e, async function() {
              el(e), Al(e), gl(e, await El);
            }),
              document.activeElement && document.activeElement === e && Ml(e);
          },
        }),
          d('.js-jump-to-field', Ml),
          u('navigation:keydown', '.js-site-search-form', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/jump-to.js:94');
            const t = e.currentTarget.querySelector('.js-navigation-item[aria-selected="true"]');
            switch (e.detail.hotkey) {
              case 'Enter':
                if (t) Xc(g(t, '.js-jump-to-suggestion-path', HTMLElement));
                else {
                  const t = e.currentTarget;
                  h(t instanceof HTMLFormElement, 'app/assets/modules/github/jump-to.js:102'), y(t);
                }
                break;
              case 'Escape':
                g(e.currentTarget, '.js-jump-to-field', HTMLInputElement).blur(), Zc();
            }
          }),
          u('navigation:focus', '.js-site-search-form', function(e) {
            const t = g(document, '.js-jump-to-field', HTMLInputElement),
              n = e.target.id;
            t.setAttribute('aria-activedescendant', n);
          }),
          u('focusout', '.js-jump-to', function() {
            const e = g(document, '.js-jump-to-field', HTMLInputElement);
            Tl = setTimeout(() => {
              !(function(e) {
                e.classList.remove('js-navigation-enable'),
                  e.classList.remove('jump-to-field-active');
              })(e),
                Zc();
            }, 200);
          }),
          u('focusin', '.js-jump-to', function() {
            clearTimeout(Tl), Qc(g(document, '.js-jump-to-field', HTMLInputElement));
          }),
          u('click', '.js-jump-to-suggestion-path', function(e) {
            const t = e.currentTarget;
            if (
              (h(t instanceof HTMLAnchorElement, 'app/assets/modules/github/jump-to.js:142'),
              'Search' === t.getAttribute('data-target-type'))
            ) {
              const e = g(document, '.js-jump-to-field', HTMLInputElement);
              t.href = (function(e, t) {
                const n = new URL(t, window.location.origin),
                  s = new URLSearchParams(n.search.slice(1));
                return (
                  s.get('q') && s.set('q', e),
                  s.get('unscoped_q') && s.set('unscoped_q', e),
                  (n.search = s.toString()),
                  n.toString()
                );
              })(e.value.trim(), t.href);
            }
            Xc(t);
          }),
          u('submit', '.js-site-search-form', function(e) {
            if (!pl()) return;
            const t = e.target;
            t.getAttribute('data-scoped-search-url') &&
              Gc({
                scope_type: t.getAttribute('data-scope-type'),
                scope_id: t.getAttribute('data-scope-id'),
              }),
              Jc('search');
          });
        let xl = 0,
          Sl = null;
        const Hl = [
          'ArrowUp',
          'ArrowUp',
          'ArrowDown',
          'ArrowDown',
          'ArrowLeft',
          'ArrowRight',
          'ArrowLeft',
          'ArrowRight',
          'b',
          'a',
          'Enter',
        ];
        function Cl(e) {
          !(function(e) {
            let t = document.getElementById('konami-overlay');
            t ||
              (((t = document.createElement('div')).id = 'konami-overlay'),
              t.classList.add('konami-overlay'),
              document && document.body && document.body.appendChild(t));
            if (!t) return;
            t.style.background = `rgba(0,0,0,${e + 0.24})`;
            const n = 50 * (1 + e),
              s = (e, t) => e + Math.round(Math.random() * (t - e));
            for (let o = 0; o < n; o++) {
              const e = s(0, window.innerHeight),
                n = s(0, window.innerWidth),
                o = document.createElement('div');
              o.classList.add('dot'),
                (o.textContent = `${s(0, 1)}`),
                (o.style.fontSize = `${s(1, 8)}px`),
                (o.style.color = `rgba(255,255,255,${Math.random()})`),
                (o.style.top = `${e}px`),
                (o.style.left = `${n}px`);
              const i = s(0, 300);
              setTimeout(() => t && t.prepend(o), i),
                setTimeout(() => o.parentNode && o.parentNode.removeChild(o), i + s(100, 500));
            }
          })((xl = e) / Hl.length);
          const t = f(document, '.js-konami-key');
          for (const i of t)
            i.classList.remove('active'),
              i.classList.remove('inactive'),
              i.classList.remove('complete'),
              i.classList.remove('down');
          const n = t.slice(0, xl),
            s = t.slice(xl, xl + 1),
            o = t.slice(xl + 2);
          for (const i of n) i.classList.add('complete');
          for (const i of s) i.classList.add('active');
          for (const i of o) i.classList.add('inactive');
        }
        function ql(e) {
          if (
            !(
              (e.target instanceof Node && Ce(e.target)) ||
              xl >= Hl.length ||
              (Hl.includes(V(e)) && (e.preventDefault(), e.stopPropagation()), V(e) !== Hl[xl])
            )
          ) {
            const e = document.querySelectorAll('.js-konami-key')[xl];
            e && e.classList.add('down');
          }
        }
        function Il(e) {
          if (!((e.target instanceof Node && Ce(e.target)) || xl >= Hl.length)) {
            if (V(e) === Hl[xl])
              Cl(xl + 1),
                xl === Hl.length - 1 &&
                  (function() {
                    const e = document.querySelector('.js-konami-success');
                    e && e.removeAttribute('hidden');
                  })(),
                xl === Hl.length &&
                  (function() {
                    const e = document.querySelector('.js-konami-form');
                    h(
                      e instanceof HTMLFormElement,
                      'app/assets/modules/github/konami/konami.js:145',
                    ),
                      y(e);
                  })();
            else {
              if (!Hl.includes(V(e))) return;
              Cl(0);
            }
            e.preventDefault(), e.stopPropagation();
          }
        }
        function _l() {
          (Sl = null),
            document.removeEventListener('keydown', ql),
            document.removeEventListener('keyup', Il);
          const e = document.getElementById('konami-overlay');
          e && e.parentNode && e.parentNode.removeChild(e);
        }
        function $l(e) {
          const t = e.currentTarget;
          h(
            t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement,
            'app/assets/modules/github/length-limited-input-with-warning.js:36',
          );
          const n = parseInt(t.getAttribute('data-input-max-length'), 10),
            s = parseInt(t.getAttribute('data-warning-length'), 10) || 5,
            o = t.value.replace(/(\r\n|\n|\r)/g, '\r\n');
          let i = n - o.length;
          if (i <= 0) {
            let e = o.substr(0, n);
            e.endsWith('\r') ? ((e = e.substr(0, n - 1)), (i = 1)) : (i = 0), (t.value = e);
          }
          const r = p(t, 'data-warning-text'),
            a = m(t, '.js-length-limited-input-container'),
            c = g(a, '.js-length-limited-input-warning');
          i <= s
            ? ((c.textContent = r.replace(new RegExp('{{remaining}}', 'g'), `${i}`)),
              c.classList.remove('d-none'))
            : ((c.textContent = ''), c.classList.add('d-none'));
        }
        function Dl(e) {
          const t = e.currentTarget,
            n = g(t, '.js-milestone-edit-cancel'),
            s = n.getAttribute('data-confirm-changes');
          s && (D(t) ? n.setAttribute('data-confirm', s) : n.removeAttribute('data-confirm'));
        }
        function Rl(e, t) {
          u('click', `${e} .js-sortable-button`, function({ currentTarget: n }) {
            h(n instanceof HTMLElement, 'app/assets/modules/github/sortable-button.js:11');
            const s = m(n, e),
              o = n.getAttribute('data-direction'),
              i = s.parentElement;
            h(i, 'app/assets/modules/github/sortable-button.js:15');
            const r = Array.from(i.children).indexOf(s);
            'up' === o && s.previousElementSibling
              ? s.previousElementSibling.insertAdjacentElement('beforebegin', s)
              : 'down' === o &&
                s.nextElementSibling &&
                s.nextElementSibling.insertAdjacentElement('afterend', s);
            const a = Array.from(i.children).indexOf(s);
            n.focus(), t({ oldIndex: r, newIndex: a, item: s });
          });
        }
        u('click', '.js-konami', async function(e) {
          if ((e.preventDefault(), Sl)) return;
          Cl(5), document.addEventListener('keydown', ql), document.addEventListener('keyup', Il);
          const t = `/site/konami?return_to=${e.target.getAttribute('data-return-to') || ''}`;
          (Sl = await ne({
            content: R(document, t),
            dialogClass: 'kb-konami-dialog container-xl',
          })),
            Cl(xl),
            Sl.addEventListener('dialog:remove', _l, { once: !0 });
        }),
          u('click', '.js-details-target-new-label', function({ target: e }) {
            h(
              e instanceof HTMLElement,
              'app/assets/modules/github/labels/maintainer-label-prompt.js:10',
            );
            const t = Ks(e, 'Popover');
            if (t) {
              const e = g(t, 'form', HTMLFormElement);
              y(e);
            }
          }),
          i('.js-length-limited-input', {
            add(e) {
              e.addEventListener('input', $l), e.addEventListener('change', $l);
            },
            remove(e) {
              e.removeEventListener('input', $l), e.removeEventListener('change', $l);
            },
          }),
          i('link[rel=prefetch-viewed]', {
            initialize() {
              requestIdleCallback(() => {
                fetch(location.href, {
                  method: 'HEAD',
                  credentials: 'same-origin',
                  headers: { Purpose: 'prefetch-viewed' },
                });
              });
            },
          }),
          u('click', '.js-manage-requests-tabs-item', function({ currentTarget: e }) {
            const t = m(e, '.js-manage-memberships-container');
            g(t, '.js-manage-invitations-tabs-item').classList.remove('selected'),
              e.classList.add('selected');
            const n = g(t, '.js-manage-invitations-list'),
              s = g(t, '.js-manage-requests-list');
            n.classList.add('d-none'), s.classList.remove('d-none');
          }),
          u('click', '.js-manage-invitations-tabs-item', function({ currentTarget: e }) {
            const t = m(e, '.js-manage-memberships-container');
            g(t, '.js-manage-requests-tabs-item').classList.remove('selected'),
              e.classList.add('selected');
            const n = g(t, '.js-manage-requests-list'),
              s = g(t, '.js-manage-invitations-list');
            n.classList.add('d-none'), s.classList.remove('d-none');
          }),
          u('change', '.js-milestone-edit-form', Dl),
          u('click', '.js-milestone-edit-form', Dl);
        const Nl = new WeakMap();
        u('socket:message', '.js-milestone-issues', async function(e) {
          h(e instanceof CustomEvent, 'app/assets/modules/github/milestone-dragging.js:34');
          const t = e.currentTarget,
            n = e.detail.data,
            s = g(t, '.js-milestone-issues-container');
          if ('1' === s.getAttribute('data-is-sorting'))
            return void s.removeAttribute('data-is-sorting');
          await qe();
          const o = document.querySelector('.js-client-uid');
          (o instanceof HTMLInputElement && o.value === n.client_uid) ||
            (async function(e) {
              if (Ie(e)) return;
              const t = p(e, 'data-url'),
                n = await R(document, t);
              _e(document, () => {
                e.replaceWith(n);
              });
            })(t);
        }),
          v('.js-milestone-sort-form', async function(e, t) {
            const n = (await t.json()).json,
              s = g(e, '.js-milestone-reorder-feedback');
            (s.textContent = ''),
              n.error
                ? g(e, '.js-milestone-changed').classList.remove('d-none')
                : ((g(e, '.js-timestamp', HTMLInputElement).value = n.updated_at),
                  (s.textContent = s.getAttribute('data-success-text') || ''));
          });
        const Bl = j(function(e) {
          const { newIndex: t, item: n } = e,
            s = m(n, '.js-milestone-issues-container'),
            o = n.getAttribute('data-id') || '',
            i = (function(e, t) {
              return e.querySelectorAll('.js-draggable-issue')[t];
            })(s, t - 1),
            r = i && i.getAttribute('data-id'),
            a = m(s, '.js-milestone-sort-form', HTMLFormElement);
          (g(a, '.js-item-id', HTMLInputElement).value = o),
            (g(a, '.js-prev-id', HTMLInputElement).value = r || ''),
            ve({
              category: 'Milestone',
              action: 'reorder',
              label: 'string' == typeof e.trackingLabel ? e.trackingLabel : 'drag-and-drop',
            }),
            s.setAttribute('data-is-sorting', '1'),
            y(a);
        }, 200);
        function Pl(e, t) {
          Bl({
            item: t,
            newIndex: Array.from(e.querySelectorAll('.js-draggable-issue')).indexOf(t),
            trackingLabel: 'keyboard-shortcut',
          }),
            $e(m(t, '.js-navigation-container'), t);
        }
        function Fl(e) {
          const t = m(e, '.js-org-insights-hero-container');
          for (const n of t.querySelectorAll('[role=tab]'))
            n.setAttribute('aria-selected', (n === e).toString());
          for (const n of t.querySelectorAll('[role=tabpanel]'))
            n.hidden = e.id !== n.getAttribute('aria-labelledby');
          for (const n of f(document, '.js-org-insights-period-selector-link', HTMLAnchorElement))
            n.hash = e.hash;
        }
        function Ol() {
          const e = document.querySelector('.js-org-reinstate-forms'),
            t = document.querySelectorAll('.js-org-reinstate-option:checked');
          if (!e || 1 !== t.length) return;
          const n = p(t[0], 'data-form'),
            s = e.getElementsByClassName('js-togglable-form');
          for (const i of s) i.classList.add('d-none');
          const o = document.getElementById(n);
          h(o, 'app/assets/modules/github/orgs/invitations.js:42'), o.classList.remove('d-none');
        }
        async function Wl(e, t, n, s) {
          const o = p(e, 'data-url'),
            i = new URL(o, window.location.origin),
            r = new URLSearchParams(i.search.slice(1));
          r.append('member', t),
            r.append('action_type', n),
            s && r.append('return_to', s),
            (i.search = r.toString()),
            Ul(!0),
            (g(document, '.js-add-team-member-form').hidden = !0);
          const a = await R(document, i);
          Ul(!1), (e.innerHTML = ''), e.appendChild(a);
        }
        function Ul(e) {
          (g(document, '.js-add-members-loading-state').hidden = !e),
            (g(document, '.js-add-members-modal-content').hidden = e);
        }
        function zl(e, t) {
          const n = new URL(e.href, window.location.origin),
            s = new URLSearchParams(n.search);
          s.delete('organization_name'),
            s.delete('login'),
            s.append('organization_name', t),
            s.append('login', g(document, '#organization_login', HTMLInputElement).value);
          const o = new URL(e.href, window.location.origin);
          (o.search = s.toString()), (e.href = o.toString());
        }
        function Vl(e) {
          for (const t of f(document, '.js-plan-info')) {
            const n = Kl(e);
            h('string' == typeof n, 'app/assets/modules/github/orgs/new.js:265'),
              t.classList.contains(n)
                ? (t.classList.remove('has-removed-contents'), (t.hidden = !1))
                : (t.classList.add('has-removed-contents'), (t.hidden = !0));
          }
        }
        function Kl(e) {
          return 'business_plus' === e
            ? (function() {
                const e = g(document, '.js-enterprise-choice:checked', HTMLInputElement);
                return 'server' === e.value
                  ? 'js-enterprise-server-plan-info'
                  : 'cloud-trial' === e.value
                  ? 'js-enterprise-cloud-trial-plan-info'
                  : 'js-enterprise-cloud-plan-info';
              })()
            : 'free' === e
            ? 'js-free-plan-info'
            : 'business' === e
            ? 'js-business-plan-info'
            : void 0;
        }
        function Yl() {
          return g(document, '.js-saml-provider-settings-form', HTMLFormElement);
        }
        function Xl() {
          return Yl().querySelector('.js-saml-form-inputs');
        }
        function Jl() {
          return g(document, '.js-org-saml-confirm-enforcement-hidden', HTMLInputElement);
        }
        function Gl(e) {
          e && e.classList.remove('d-none');
        }
        function Ql() {
          return (
            '1' === g(document, '.js-org-saml-currently-enabled', HTMLInputElement).value &&
            !g(document, '.js-org-enable-saml', HTMLInputElement).checked
          );
        }
        function Zl() {
          return g(document, '.is-submit-button-value', HTMLInputElement);
        }
        function eu() {
          return (
            g(document, '.js-org-saml-enforce', HTMLInputElement).checked &&
            '0' === Jl().value &&
            !('1' === g(document, '.js-org-saml-previously-enforced', HTMLInputElement).value) &&
            '1' === g(document, '.js-org-has-unlinked-saml-members', HTMLInputElement).value
          );
        }
        function tu() {
          Yl().submit();
        }
        function nu() {
          const e = document.querySelector('.js-org-enable-saml');
          e && e instanceof HTMLInputElement && ((e.checked = !0), Gl(Xl()));
        }
        function su(e, t) {
          (g(e, '.js-add-child-team-loading-state').hidden = !t),
            (g(e, '.js-add-child-team-modal-content').hidden = t);
        }
        function ou(e) {
          const t = g(e, '.js-inline-comment-form-container');
          t.classList.add('open'), g(t, '.js-write-tab').click(), g(t, '.js-comment-field').focus();
        }
        function iu(e) {
          e.reset();
          const t = m(e, '.js-inline-comment-form-container');
          t.classList.remove('open'), L(t, 'inlinecomment:collapse');
        }
        function ru(e) {
          const t = e.closest('.js-teams-write-a-post');
          return t
            ? (function(e) {
                const t = g(e, '.js-team-discussions-post-compose');
                t.classList.contains('d-none') ||
                  (t.classList.add('d-none'),
                  g(e, '.js-post-placeholder').classList.remove('d-none'),
                  e.classList.remove('active')),
                  g(e, '.js-comment-form-error').classList.add('d-none');
              })(t)
            : e.closest('.js-teams-reply-to-post')
            ? (function(e) {
                h(
                  e instanceof HTMLFormElement,
                  'app/assets/modules/github/orgs/team-discussions.js:35',
                ),
                  iu(e);
              })(e)
            : void 0;
        }
        function au(e) {
          const t = e.closest('.js-teams-reply-to-post'),
            n = t && t.querySelector('.js-comment-form-error');
          n && n.classList.add('d-none');
        }
        function cu(e, t) {
          e.textContent = (parseInt(e.textContent) + t).toString();
        }
        function lu(e, t) {
          e.classList.add('d-none'),
            h(e.parentElement, 'app/assets/modules/github/orgs/team-discussions.js:215'),
            g(e.parentElement, t).classList.remove('d-none');
        }
        Rl('.js-draggable-issue', Bl),
          u('navigation:keydown', '.js-draggable-issues-container .js-draggable-issue', function(
            e,
          ) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/milestone-dragging.js:111');
            const t = e.currentTarget,
              n = m(t, '.js-draggable-issues-container');
            if ('J' === e.detail.hotkey) {
              const s = t.nextElementSibling;
              s && (s.after(t), Pl(n, t), e.preventDefault(), e.stopPropagation());
            } else if ('K' === e.detail.hotkey) {
              const s = t.previousElementSibling;
              s && (s.before(t), Pl(n, t), e.preventDefault(), e.stopPropagation());
            }
          }),
          i('.js-draggable-issues-container', {
            add: function(e) {
              if (Nl.has(e)) return;
              const t = De.create(e, {
                animation: 150,
                item: '.js-draggable-issue',
                handle: '.js-drag-handle',
                onUpdate: Bl,
                chosenClass: 'is-dragging',
              });
              Nl.set(e, t);
            },
            remove: function(e) {
              const t = Nl.get(e);
              t && t.destroy();
            },
          }),
          u('submit', '.js-mobile-preference-form', e => {
            g(
              e.currentTarget,
              '.js-mobile-preference-anchor-field',
              HTMLInputElement,
            ).value = window.location.hash.substr(1);
          }),
          i('#js-oauth-authorize-btn', e => {
            !(async function(e) {
              await Re(document),
                await new Promise(e => setTimeout(e, 1e3)),
                h(e instanceof HTMLButtonElement, 'app/assets/modules/github/oauth.js:9'),
                (e.disabled = !1);
            })(e);
          }),
          (async function() {
            await I,
              window._octo.push(['enablePerformance']),
              window._octo.push(['recordPageView']);
          })(),
          document.addEventListener('pjax:complete', function() {
            window._octo.push(['recordPageView']);
          }),
          u('change', '.js-two-factor-needs-enforced', function({ currentTarget: e }) {
            h(e instanceof HTMLInputElement, 'app/assets/modules/github/orgs/2fa.js:36'),
              g(document, '.js-confirm-2fa-modal').classList.toggle('d-none', !e.checked),
              g(document, '.js-2fa-save-button').classList.toggle('d-none', e.checked);
          }),
          i('.js-two-factor-enforcement-poller', function(e) {
            e.addEventListener('load', function() {
              window.location.reload();
            });
          }),
          u('click', '.js-org-insights-hero-container [role=tab]', ({ currentTarget: e }) => {
            e instanceof HTMLAnchorElement && Fl(e);
          }),
          ce(() => {
            const e = document.querySelector('.js-org-insights-hero-container');
            if (!e) return;
            const t = e.querySelector(`[href='${document.location.hash || '#insights-prs'}']`);
            t instanceof HTMLAnchorElement && Fl(t);
          }),
          u('click', '.js-invitations-team-suggestions-view-all', async function(e) {
            const t = e.currentTarget,
              n = p(t, 'data-url'),
              s = f(document, '.js-invitation-toggle-team:checked', HTMLInputElement).map(
                e => e.value,
              ),
              o = await R(document, n),
              i = m(t, 'ul');
            (i.innerHTML = ''), i.appendChild(o);
            for (const r of s)
              g(i, `.js-invitation-toggle-team[value="${r}"]`, HTMLInputElement).checked = !0;
          }),
          u('change', '.js-org-reinstate-option', Ol),
          i('.js-org-reinstate-forms', Ol),
          u('click', '.js-membership-tab', function(e) {
            const t = p(e.currentTarget, 'data-membership'),
              n = g(document, '.js-member-filter-field', HTMLInputElement),
              s = n.value,
              o = new RegExp('membership:[a-z-]+'),
              i = s
                .toString()
                .trim()
                .replace(o, '');
            (n.value = `${i} ${t}`.replace(/\s\s/, ' ')),
              n.focus(),
              Ne(n),
              g(document, '.js-membership-tabs').classList.remove('selected'),
              e.currentTarget.classList.add('selected');
          }),
          u('click', '.js-member-search-filter', function(e) {
            e.preventDefault();
            const t = p(e.currentTarget, 'data-filter'),
              n = m(e.currentTarget, '[data-filter-on]'),
              s = p(n, 'data-filter-on'),
              o = g(document, '.js-member-filter-field', HTMLInputElement),
              i = o.value,
              r = new RegExp(`${s}:[a-z]+`),
              a = i
                .toString()
                .trim()
                .replace(r, '');
            (o.value = `${a} ${t}`.replace(/\s\s/, ' ')), o.focus(), Ne(o);
          }),
          u('submit', '.js-needs-interstitial .js-approve-membership-request', function(e) {
            const t = e.currentTarget;
            h(t instanceof HTMLFormElement, 'app/assets/modules/github/orgs/members.js:58');
            const n = p(g(t, '[data-member-name]'), 'data-member-name'),
              s = p(t, 'data-action-type'),
              o = m(t, '.js-add-members-container');
            e.preventDefault(), Wl(o, n, s, null);
          }),
          u('submit', '.js-needs-interstitial.js-add-team-member-form', function(e) {
            const t = e.currentTarget;
            h(t instanceof HTMLFormElement, 'app/assets/modules/github/orgs/members.js:70');
            const n = w(t, 'member');
            if (!n.value) return;
            const s = p(t, 'data-action-type'),
              o = g(document, '.js-add-members-container');
            e.preventDefault();
            const i = t.getAttribute('data-return-to');
            Wl(o, n.value, s, i);
          }),
          i('#add-team-member', function(e) {
            const t = g(e, 'details-dialog'),
              n = t.innerHTML;
            e.addEventListener('toggle', function({ currentTarget: e }) {
              h(e instanceof HTMLElement, 'app/assets/modules/github/orgs/members.js:113'),
                e.hasAttribute('open') || (t.innerHTML = n);
            });
          }),
          v('.js-add-org-member-form', async function(e, t) {
            const n = g(document, '.js-member-list');
            e.classList.add('is-sending');
            const s = document.querySelector('.flash-messages');
            let o;
            s && s.remove();
            try {
              o = await t.json();
            } catch (a) {
              if (!a.response && !a.response.json) return;
              return void n.insertAdjacentHTML('beforebegin', a.response.json.message_html);
            }
            e.classList.remove('is-sending'), (g(e, 'auto-complete', E).value = '');
            const i = g(xe(document, o.json.list_item_html), '*'),
              r = i.getAttribute('data-login');
            if (r)
              for (const c of n.children)
                if (c.getAttribute('data-login') === r) {
                  c.remove();
                  break;
                }
            n.prepend(i);
          }),
          u('click', '.js-org-signup-duration-change', e => {
            h(e instanceof MouseEvent, 'app/assets/modules/github/orgs/new.js:13');
            const t = e.currentTarget,
              n = g(document, '.js-plan-choice:checked', HTMLInputElement),
              s = g(document, '.seat-field', HTMLInputElement),
              o = g(document, '#js-pjax-container'),
              i = new URLSearchParams();
            i.append('plan_duration', p(t, 'data-plan-duration')),
              i.append('plan', n.value),
              i.append('seats', s.value);
            const r = g(document, '.js-new-organization-name', HTMLInputElement);
            r.value && i.append('login', r.value);
            const a = g(document, '.js-new-organization-billing-email', HTMLInputElement);
            a.value && i.append('billing_email', a.value),
              document.querySelector('.js-transform-user') && i.append('transform_user', '1');
            const c = e.currentTarget;
            h(c instanceof HTMLAnchorElement, 'app/assets/modules/github/orgs/new.js:31'),
              (c.search = `?${i.toString()}`),
              O(e, { scrollTo: !1, container: o });
          }),
          u('auto-check-success', '.js-new-organization-name', function(e) {
            const t = e.target;
            h(t instanceof HTMLInputElement, 'app/assets/modules/github/orgs/new.js:42');
            for (const s of f(document, '.js-enterprise-trial-link', HTMLAnchorElement))
              zl(s, t.value);
            const n = m(t, 'dd').querySelector('.js-field-hint-name');
            n && (n.textContent = t.value);
          }),
          l('.js-company-name-input', function(e) {
            const t = e.target;
            h(t instanceof HTMLInputElement, 'app/assets/modules/github/orgs/new.js:79');
            const n = t.form;
            h(n, 'app/assets/modules/github/orgs/new.js:82');
            const s = n.querySelectorAll('.js-company-name-text');
            if (0 === s.length) return;
            const o = n.querySelector('.js-corp-tos-link'),
              i = n.querySelector('.js-tos-link');
            i &&
              (i.classList.add('d-none'),
              i.setAttribute('aria-hidden', 'true'),
              o && (o.classList.remove('d-none'), o.setAttribute('aria-hidden', 'false')));
            for (const r of s)
              if (t.value) {
                if (r.hasAttribute('data-wording')) {
                  const e = p(r, 'data-wording');
                  r.textContent = ` ${e} ${t.value}`;
                } else r.textContent = t.value;
              } else r.textContent = '';
          }),
          i('.js-company-owned:not(:checked)', {
            constructor: HTMLInputElement,
            add(e) {
              const t = e.form;
              h(t, 'app/assets/modules/github/orgs/new.js:128');
              const n = g(t, '.js-company-name-input', HTMLInputElement),
                s = g(document, '.js-company-name-text'),
                o = g(document, '.js-corp-tos-link'),
                i = g(document, '.js-tos-link');
              e.getAttribute('data-optional') && n.removeAttribute('required'),
                _(n, ''),
                i.classList.remove('d-none'),
                i.setAttribute('aria-hidden', 'false'),
                o.classList.add('d-none'),
                o.setAttribute('aria-hidden', 'true'),
                (s.textContent = '');
            },
          }),
          i('.js-company-owned:checked', {
            constructor: HTMLInputElement,
            add(e) {
              const t = e.form;
              h(t, 'app/assets/modules/github/orgs/new.js:155');
              const n = t.querySelector('.js-company-name-input');
              n && (n.setAttribute('required', ''), L(n, 'focus'), L(n, 'input'));
            },
          }),
          i('.js-company-owned-autoselect', {
            constructor: HTMLInputElement,
            add(e) {
              const t = e;
              function n() {
                if (t.checked && t.form) {
                  const e = g(t.form, '.js-company-owned', HTMLInputElement);
                  _(e, !0);
                }
              }
              t.addEventListener('change', n), n();
            },
          }),
          v('.js-org-list-item .js-org-remove-item', async function(e, t) {
            m(e, '.js-org-list-item').classList.add('d-none');
            try {
              await t.text();
            } catch (Rh) {
              m(e, '.js-org-list-item').classList.remove('d-none');
              const n = e.getAttribute('data-error-message');
              if (n) return void alert(n);
            }
            m(e, '.js-org-list-item').remove();
          }),
          u('click', '.js-plan-choice', e => {
            const t = document.querySelector('.SignUpContinueActions'),
              n = e.target.value;
            if (
              (Vl(n),
              null != t && t.classList.remove('has-removed-contents'),
              'business_plus' === n)
            )
              for (const o of f(document, '.js-after-plan-choice'))
                o.classList.add('has-removed-contents');
            else
              for (const o of f(document, '.js-after-plan-choice'))
                o.classList.remove('has-removed-contents');
            const s = !(n && 'business_plus' === n);
            for (const o of f(document, '.js-enterprise-choice', HTMLInputElement)) o.disabled = s;
          }),
          u('click', '.js-enterprise-choice', e => {
            const t = document.querySelector('.js-enterprise-plan-seat-selection'),
              n = document.querySelector('.js-billing-section'),
              s = document.querySelector('.SignUpContinueActions'),
              o = document.querySelector('.js-enterprise-contact'),
              i = document.querySelector('.js-enterprise-trial-link'),
              r = e.target.value,
              a = [n, s, t];
            if (
              (o && o.classList.toggle('has-removed-contents', 'server' !== r),
              i && i.classList.toggle('has-removed-contents', 'server' === r),
              'cloud-trial' === r)
            )
              n && n.classList.add('has-removed-contents');
            else
              for (const c of a)
                null != c && c.classList.toggle('has-removed-contents', 'cloud' !== r);
            Vl('business_plus');
          }),
          u('change', '.js-enterprise-trial-industry', function(e) {
            h(e instanceof Event, 'app/assets/modules/github/orgs/new.js:301');
            const t = e.target;
            h(t instanceof HTMLSelectElement, 'app/assets/modules/github/orgs/new.js:304');
            const n = t.value,
              s = document.querySelector('.js-enterprise-trial-other-industry-field');
            s && (s.hidden = n !== p(s, 'data-trigger-option-value'));
          }),
          l('.js-enterprise-trial-full-name', function(e) {
            const t = e.target;
            h(t instanceof HTMLInputElement, 'app/assets/modules/github/orgs/new.js:317');
            const n = t.value,
              s = document.querySelector('.js-enterprise-trial-full-name-text');
            if (s) {
              const e = s.getAttribute('data-word-seperator'),
                t = e ? `${e} ${n}${e}` : n;
              s.textContent = t;
            }
          }),
          i('.js-enterprise-trial-ga-id', {
            constructor: HTMLInputElement,
            initialize(e) {
              const t = p(e, 'data-field');
              window.ga(function(n) {
                n && _(e, n.get(t));
              });
            },
          }),
          v('.js-select-repo-permission', async function(e, t) {
            e.classList.remove('was-successful'), e.classList.add('is-loading');
            const n = await t.json();
            e.classList.remove('is-loading'), e.classList.add('was-successful');
            const s = e.closest('.js-org-repo');
            if (s) {
              const e = n.json;
              s.classList.toggle('with-higher-access', e.members_with_higher_access);
            }
          }),
          v('.js-per-seat-invite-field, .js-per-seat-invite .js-org-remove-item', async function(
            e,
            t,
          ) {
            !(function(e) {
              for (const n in e.selectors) {
                const t = e.selectors[n],
                  s = document.querySelector(n);
                t && s && (s.textContent = t);
              }
              const t = 100 === e.filled_seats_percent;
              (g(
                document,
                '.js-live-update-seats-percent',
              ).style.width = `${e.filled_seats_percent}%`),
                g(document, '.js-need-more-seats').classList.toggle('d-none', !t),
                g(document, '.js-add-org-member-form').classList.toggle('d-none', t);
            })((await t.json()).json);
          }),
          u('click', '.js-org-enable-saml', function(e) {
            var t;
            h(
              e.currentTarget instanceof HTMLInputElement,
              'app/assets/modules/github/orgs/security.js:113',
            ),
              e.currentTarget.checked ? Gl(Xl()) : (t = Xl()) && t.classList.add('d-none');
          }),
          u('click', '.js-saml-submit', function(e) {
            e.preventDefault(),
              h(
                e.currentTarget instanceof HTMLButtonElement,
                'app/assets/modules/github/orgs/security.js:130',
              ),
              te(e.currentTarget),
              y(Yl());
          }),
          u('click', '.js-org-saml-confirm-enforce-button', function() {
            (Jl().value = 'true'), y(Yl());
          }),
          u('submit', '.js-saml-provider-settings-form', function(e) {
            e.preventDefault(),
              'test_settings' === Zl().name
                ? tu()
                : 'save_settings' === Zl().name &&
                  (Ql()
                    ? (async function() {
                        (await ne({
                          content: g(
                            document,
                            '#disable-saml-confirmation',
                            HTMLTemplateElement,
                          ).content.cloneNode(!0),
                        })).addEventListener('dialog:remove', nu);
                      })()
                    : eu()
                    ? ne({
                        content: g(
                          document,
                          '#enforce-saml-confirmation',
                          HTMLTemplateElement,
                        ).content.cloneNode(!0),
                      })
                    : tu());
          }),
          u('click', '.js-team-remove-user', function(e) {
            e.preventDefault();
            for (const t of document.querySelectorAll('.js-team-add-user-form'))
              t.classList.remove('d-none');
            g(document, '.js-team-add-user-name').focus(), m(e.currentTarget, 'li').remove();
          }),
          u('click', '.js-team-add-user-button', function(e) {
            e.preventDefault(),
              (async function(e) {
                const t = m(e, '.js-team-add-user-form'),
                  n = g(t, '.js-team-add-user-name', HTMLInputElement),
                  s = n.value;
                n.value = '';
                const o = g(document, '.js-team-user-logins');
                for (const c of o.querySelectorAll('li'))
                  if (c.getAttribute('data-login') === s) return;
                if (!(await Be('low'))) return;
                const i = new URL(
                    t.getAttribute('data-template-url') || '',
                    window.location.origin,
                  ),
                  r = new URLSearchParams(i.search.slice(1));
                r.append('member', s), (i.search = r.toString()), n.focus();
                const a = await R(document, i);
                o.appendChild(a);
                for (const c of f(document, '.js-login-field', HTMLInputElement)) c.disabled = !1;
                t.classList.add('d-none');
              })(e.currentTarget);
          }),
          u('click', '.js-rename-owners-team-next-btn', function() {
            const e = g(document, '.js-rename-owners-team-about-content');
            e.hidden = !e.hidden;
            const t = g(document, '.js-rename-owners-team-rename-form');
            t.hidden = !t.hidden;
          }),
          u('auto-complete-change', '.js-add-child-team-completer', async function({ target: e }) {
            if (
              (h(e instanceof E, 'app/assets/modules/github/orgs/team-add-child.js:15'), !e.value)
            )
              return;
            const t = m(e, '.js-add-team-container');
            su(t, !0);
            const n = m(e, '.js-add-child-team-form'),
              s = p(n, 'data-change-parent-summary-path'),
              o = await R(document, s);
            (g(n, '.js-add-team-search').hidden = !0),
              g(n, '.js-add-team-warning').append(o),
              su(t, !1);
          }),
          u('click', '.js-expandable-team-breadcrumbs .js-team-breadcrumb-trigger', async function(
            e,
          ) {
            const t = m(e.target, '.js-expandable-team-breadcrumbs');
            t.classList.add('is-loading');
            try {
              await Pe(t);
            } catch (Rh) {}
            t.classList.remove('is-loading');
          }),
          u('click', '.js-toggle-inline-comment-form', function(e) {
            ou(m(e.currentTarget, '.js-line-comments'));
          }),
          u('quote-selection', '.js-line-comments', function(e) {
            ou(e.currentTarget);
          }),
          N('keydown', '.js-inline-comment-form-container form .js-comment-field', function(e) {
            const t = e.target;
            if (
              (h(
                t instanceof HTMLTextAreaElement,
                'app/assets/modules/github/behaviors/inline-comment.js:37',
              ),
              !t.classList.contains('js-navigation-enable') &&
                'Escape' === e.key &&
                0 === t.value.length)
            ) {
              iu(m(t, 'form', HTMLFormElement)), e.preventDefault();
            }
          }),
          u('click', '.js-hide-inline-comment-form', function(e) {
            const t = m(e.currentTarget, 'form', HTMLFormElement);
            !D(t) || confirm(p(e.target, 'data-confirm-cancel-text')) ? iu(t) : e.preventDefault();
          }),
          u('click', '.js-team-discussions-team-description-toggle', function() {
            g(document, '.js-team-discussions-team-description').classList.toggle('d-none'),
              g(document, '.js-team-discussions-team-description-form').classList.toggle('d-none');
          }),
          u('click', '.js-team-discussions-post-toggle', function(e) {
            const t = m(e.target, '.js-teams-write-a-post');
            t.classList.contains('active') ||
              (t.classList.add('active'),
              g(t, '.js-team-discussions-post-compose').classList.remove('d-none'),
              g(t, '.js-post-placeholder').classList.add('d-none'),
              g(t, '.js-title-field').focus());
          }),
          u('click', '.js-hide-post-form', function(e) {
            const t = m(e.target, '.js-new-comment-form', HTMLFormElement);
            !D(t) || confirm(p(e.target, 'data-confirm-cancel-text'))
              ? ru(e.target)
              : e.preventDefault();
          }),
          u('click', '.js-hide-inline-comment-form', function(e) {
            au(e.target);
          }),
          v('.js-new-comment-form', async function(e, t) {
            await t.text(), ru(e), au(e);
          }),
          v('.js-team-discussions-team-description-form', async function(e, t) {
            try {
              await t.text();
            } catch (Rh) {}
            const n = g(document, '.js-team-discussions-team-description'),
              s = g(n, '.description'),
              o = g(document, '.js-team-discussions-team-description-field', HTMLTextAreaElement);
            n.classList.toggle('d-none'),
              e.classList.toggle('d-none'),
              o.value.trim()
                ? ((s.textContent = o.value), (o.defaultValue = o.value))
                : ((s.textContent = 'This team has no description'), (o.defaultValue = ''));
          }),
          v('.js-comment-pin', async function(e, t) {
            const n = g(e, 'button[type=submit]');
            n.blur(), await t.text();
            const s = g(e, '.js-pinned-discussion-input', HTMLInputElement),
              o = document.querySelector('#pinned_posts_counter'),
              i = p(n, 'aria-label'),
              r = p(n, 'data-alternate-aria-label');
            n.setAttribute('data-alternate-aria-label', i),
              n.setAttribute('aria-label', r),
              n.classList.toggle('pinned');
            const a = n.classList.contains('pinned');
            if (o) {
              cu(o, a ? 1 : -1);
              const t = m(o, '.js-pinned-post-tab');
              if (!a && t.classList.contains('selected')) {
                const t = m(e, '.js-comment-delete-container');
                (c = t).addEventListener(
                  'transitionend',
                  function(e) {
                    'opacity' === e.propertyName && c.remove();
                  },
                  { once: !0 },
                ),
                  c.classList.add('fade-out');
              }
            }
            var c;
            s.value = a ? '0' : '1';
          }),
          v('.js-comment-delete', async function(e, t) {
            await t.text();
            const n = e.closest('.discussion-post'),
              s = n && n.querySelector('.js-comment-pin button[type=submit]');
            if (s && s.classList.contains('pinned')) {
              const e = document.querySelector('#pinned_posts_counter');
              e && cu(e, -1);
            }
          }),
          u('quote-selection', '.js-discussion-post', function(e) {
            const t = g(e.target, '.js-inline-comment-form-container');
            t.classList.add('open'),
              g(t, '.js-write-tab').click(),
              g(t, '.js-comment-field').focus();
          }),
          v('.js-comment-subscribe', async function(e, t) {
            await t.text(), lu(e, '.js-comment-unsubscribe');
          }),
          v('.js-comment-unsubscribe', async function(e, t) {
            await t.text(), lu(e, '.js-comment-subscribe');
          }),
          v('.js-discussion-post-update', async function(e, t) {
            const n = e.closest('.js-comment');
            if (!n) return;
            const s = n.querySelector('.js-comment-title');
            if (!s) return;
            const o = await t.json();
            s.textContent = o.json.title;
          }),
          (async function() {
            await I;
            const e = document.querySelector('.js-show-discussion .js-mark-notification-form');
            e instanceof HTMLFormElement && y(e);
          })();
        let uu = !1;
        function du(e) {
          g(document, '.js-selected-group-mappings-container').hidden = e;
        }
        function mu(e) {
          const t = m(e, 'form', HTMLFormElement),
            n = t.querySelector('.js-selected-team-id'),
            s = n instanceof HTMLInputElement && n.value,
            o = g(t, '.js-team-privacy-closed'),
            i = g(t, '.js-team-privacy-secret'),
            r = g(o, 'input', HTMLInputElement),
            a = g(i, 'input', HTMLInputElement);
          i.classList.toggle('text-gray', !!s), (a.disabled = !!s), s && (r.checked = !0);
        }
        function fu(e, t) {
          const n = e.value;
          (e.value = t.textContent), (t.textContent = n);
        }
        function pu(e) {
          const t = e.match(/#?(?:L)(\d+)((?:C)(\d+))?/g);
          if (t) {
            if (1 === t.length) {
              const e = bu(t[0]);
              if (!e) return;
              return Object.freeze({ start: e, end: e });
            }
            if (2 === t.length) {
              const e = bu(t[0]),
                n = bu(t[1]);
              if (!e || !n) return;
              return ju(Object.freeze({ start: e, end: n }));
            }
          } else;
        }
        function gu(e) {
          return {
            blobRange: pu(e),
            anchorPrefix: (function(e) {
              const t = e.match(/(file-.+?-)L\d+?/i);
              return t ? t[1] : '';
            })(e),
          };
        }
        function hu({ anchorPrefix: e, blobRange: t }) {
          return t
            ? `#${e}${(function(e) {
                const { start: t, end: n } = ju(e);
                return null != t.column && null != n.column
                  ? `L${t.line}C${t.column}-L${n.line}C${n.column}`
                  : t.line === n.line
                  ? `L${t.line}`
                  : `L${t.line}-L${n.line}`;
              })(t)}`
            : '#';
        }
        function bu(e) {
          const t = e.match(/L(\d+)/),
            n = e.match(/C(\d+)/);
          return t
            ? Object.freeze({ line: parseInt(t[1]), column: n ? parseInt(n[1]) : null })
            : null;
        }
        function vu(e, t, n) {
          const s = [null, 0],
            o = n(e.line);
          if (!o) return s;
          if (null == e.column) return [o, -1];
          let i = e.column - 1;
          const r = (function e(t) {
            if (t.nodeType === Node.TEXT_NODE) return [t];
            if (!t.childNodes || !t.childNodes.length) return [];
            let n = [];
            for (const s of t.childNodes) n = n.concat(e(s));
            return n;
          })(o);
          for (let a = 0; a < r.length; a++) {
            const e = r[a],
              n = i - e.textContent.length;
            if (0 === n) {
              const n = r[a + 1];
              return t && n ? [n, 0] : [e, i];
            }
            if (n < 0) return [e, i];
            i = n;
          }
          return s;
        }
        function ju(e) {
          const t = [e.start, e.end];
          return (
            t.sort(yu),
            t[0] === e.start && t[1] === e.end ? e : Object.freeze({ start: t[0], end: t[1] })
          );
        }
        function yu(e, t) {
          return e.line === t.line && e.column === t.column
            ? 0
            : e.line === t.line && 'number' == typeof e.column && 'number' == typeof t.column
            ? e.column - t.column
            : e.line - t.line;
        }
        u('click', '.js-open-child-team', function(e) {
          if (uu) return;
          uu = !0;
          const t = e.currentTarget.getAttribute('data-parent-team-slug');
          if (!t) return;
          const n = document.querySelectorAll(`.js-child-team[data-parent-team-slug="${t}"]`),
            s = m(e.currentTarget, '.js-team-row');
          if (s.classList.contains('is-open'))
            e.currentTarget.setAttribute('aria-expanded', 'false'),
              (function(e, t) {
                (function e(t) {
                  for (const n of t) {
                    const t = p(n, 'data-team-slug'),
                      s = document.querySelectorAll(`.js-child-team[data-parent-team-slug="${t}"]`);
                    e(s), n.classList.remove('is-open'), n.classList.add('d-none');
                  }
                })(t),
                  e.classList.remove('is-open'),
                  (uu = !1);
              })(s, n);
          else {
            e.currentTarget.setAttribute('aria-expanded', 'true'),
              (async function(e, t, n) {
                if (t.length) {
                  for (const e of t) e.classList.remove('d-none');
                  e.classList.add('is-open'), (uu = !1);
                } else {
                  const t = await R(document, n);
                  e.after(t), e.classList.add('is-open'), (uu = !1);
                }
              })(s, n, p(e.currentTarget, 'data-child-team-url'));
          }
        }),
          u('click', '.js-show-more-child-teams', async function(e) {
            if (uu) return;
            uu = !0;
            const t = e.currentTarget,
              n = m(t, '.js-team-row'),
              s = p(t, 'data-child-team-url'),
              o = n.parentNode,
              i = await R(document, s);
            n.before(i), o && o.removeChild(n), (uu = !1);
          }),
          l('.js-team-ldap-group-field', function(e) {
            const t = e.currentTarget;
            h(t instanceof HTMLInputElement, 'app/assets/modules/github/orgs/team-import.js:12'),
              m(t, '.form-group').classList.remove('errored');
          }),
          u('auto-complete-change', '.js-import-ldap-group-completer', function({ target: e }) {
            h(e instanceof E, 'app/assets/modules/github/orgs/team-import.js:17');
            const t = m(e, '.js-ldap-group-adder'),
              n = g(e, '.js-team-ldap-group-field', HTMLInputElement),
              s = g(t, '.js-team-ldap-dn-field', HTMLInputElement);
            if (((s.value = ''), e.value)) {
              const { dn: t, cn: o } = JSON.parse(e.value);
              (n.value = o), (s.value = t);
            }
          }),
          v('.js-ldap-group-adder', async function(e, t, n) {
            n.headers.set('X-Context', 'import');
            const s = m(e, '.js-ldap-import-groups-container');
            let o;
            try {
              o = await t.html();
            } catch (Rh) {
              return void (Rh.response && g(e, '.form-group').classList.add('errored'));
            }
            const i = document.querySelector('.js-import-form-actions');
            s.classList.remove('is-empty'),
              g(s, '.js-ldap-imported-groups').prepend(o.html),
              e.reset(),
              g(e, '.js-team-ldap-group-field').focus(),
              i && i.classList.remove('d-none');
          }),
          u('submit', '.js-team-remove-group', function(e) {
            m(e.currentTarget, '.js-team').classList.add('is-removing'),
              g(document, '.js-team-ldap-group-field').focus();
          }),
          v('.js-team-remove-group', async function(e, t) {
            try {
              await t.text();
            } catch (n) {
              return void m(e, '.js-team').classList.remove('is-removing');
            }
            m(e, '.js-team').remove(),
              document.querySelector('.js-team:not(.is-removing)') ||
                (g(document, '.js-ldap-import-groups-container').classList.add('is-empty'),
                g(document, '.js-import-form-actions').classList.add('d-none'));
          }),
          u('click', '.js-edit-team', function(e) {
            const t = m(e.currentTarget, '.js-team');
            t.classList.contains('is-removing') ||
              (t.classList.add('is-editing'), g(t, '.js-team-name-field').focus());
          }),
          u('click', '.js-cancel-team-edit', function(e) {
            const t = m(e.currentTarget, '.js-team'),
              n = g(t, '.js-team-form', HTMLFormElement);
            t.classList.remove('is-editing'), n.reset();
          }),
          v('.js-team-form', async function(e, t, n) {
            n.headers.set('X-Context', 'import');
            const s = await t.html();
            m(e, '.js-team').replaceWith(s.html);
          }),
          u(
            'details-menu-selected',
            '.js-team-group-mapping-menu',
            function(e) {
              h(e instanceof CustomEvent, 'app/assets/modules/github/orgs/team-external.js:21');
              const t = e.detail.relatedTarget,
                n = p(t, 'data-id'),
                s = p(t, 'data-name'),
                o = p(t, 'data-description'),
                i = g(document, '.js-team-group-mapping-template', HTMLTemplateElement),
                r = document.importNode(i.content, !0),
                a = g(r, '.js-group-mapping-hidden-name', HTMLInputElement),
                c = g(r, '.js-group-mapping-hidden-description', HTMLInputElement);
              (a.name = a.name.replace('{GROUP_ID}', n)),
                (c.name = c.name.replace('{GROUP_ID}', n)),
                (a.value = s),
                (c.value = o),
                (g(r, '.js-group-mapping-name').textContent = s),
                (g(r, '.js-group-mapping-desc').textContent = o);
              const l = g(document, '.js-selected-group-mappings');
              (function(e, t) {
                return null != t.querySelector(`input[name="team[group_mappings][${e}][name]"]`);
              })(n, l) || (l.append(r), du(!1));
            },
            { capture: !0 },
          ),
          u('click', '.js-remove-group-mapping', function(e) {
            m(e.target, '.js-group-mapping-container').remove(),
              0 === g(document, '.js-selected-group-mappings').childElementCount && du(!0);
          }),
          i('.js-team-group-mapping-menu', function(e) {
            const t = g(e, 'filterable-input'),
              n = document.getElementById(p(t, 'aria-owns'));
            n &&
              t.addEventListener('error', function() {
                n.classList.add('is-error');
              });
          }),
          u('click', '.js-team-search-filter', function(e) {
            e.preventDefault();
            const t = p(e.currentTarget, 'data-filter'),
              n = m(e.currentTarget, '[data-filter-on]'),
              s = p(n, 'data-filter-on'),
              o = g(document, '.js-team-search-field', HTMLInputElement),
              i = new RegExp(`${s}:[a-z]+`),
              r = o.value.trim().replace(i, '');
            (o.value = `${r} ${t}`.replace(/\s\s/, ' ')), o.focus(), Ne(o);
          }),
          i('.js-select-team-menu', function(e) {
            mu(e);
          }),
          u(
            'details-menu-selected',
            '.js-select-team-menu',
            function(e) {
              const t = e.target;
              h(e instanceof CustomEvent, 'app/assets/modules/github/orgs/team-new.js:48');
              const n = e.detail.relatedTarget;
              h(n instanceof HTMLButtonElement, 'app/assets/modules/github/orgs/team-new.js:50'),
                (g(t, '.js-selected-team-id', HTMLInputElement).value = n.value),
                (g(t, '.js-already-selected-team-name', HTMLInputElement).value = p(
                  n,
                  'data-team-name',
                )),
                mu(t);
            },
            { capture: !0 },
          ),
          u('click', '.js-create-team-button', function(e) {
            const t = m(e.currentTarget, 'form'),
              n = t.querySelector('.js-already-selected-team-name');
            if (!(n instanceof HTMLInputElement)) return;
            const s = t.querySelector('.js-original-team-visibility'),
              o = t.querySelector('.js-team-privacy-secret');
            if (!o) return;
            const i = g(o, 'input', HTMLInputElement),
              r = (function(e) {
                return e.value !== e.getAttribute('data-original-team-name');
              })(n),
              a = (function(e, t) {
                return (
                  null != e &&
                  t.checked &&
                  !['', 'SECRET'].includes(e.getAttribute('data-original-team-visibility'))
                );
              })(s, i);
            if (r || a) {
              e.preventDefault();
              const s = p(t, 'data-important-changes-summary-url'),
                o = new URL(s, window.location.origin),
                i = new URLSearchParams(o.search.slice(1));
              i.append('parent_team', n.value),
                a && i.append('visibility_changed', a.toString()),
                r && i.append('parent_changed', r.toString()),
                (o.search = i.toString()),
                ne({ content: R(document, o), dialogClass: 'p-3' });
            }
          }),
          u('click', '.js-confirm-edit-team', function() {
            g(document, '.js-org-team-form', HTMLFormElement).submit();
          }),
          u('auto-complete-change', '.js-team-project-completer', function({ target: e }) {
            h(e instanceof E, 'app/assets/modules/github/orgs/team-projects.js:9');
            const t = m(e, 'form', HTMLFormElement),
              n = w(t, 'project_id'),
              s = g(t, '.js-team-project-complete-field', HTMLInputElement);
            if (e.value) {
              const { name: t, id: o } = JSON.parse(e.value);
              (n.value = o), (s.value = t);
            } else n.value = '';
          }),
          i('.js-org-transform-poller', function(e) {
            const t = e.getAttribute('data-redirect-url');
            e.addEventListener('load', function() {
              window.location.href = t;
            });
          }),
          u('click', '#load-readme', function(e) {
            const t = g(document, '#gollum-editor-body', HTMLTextAreaElement),
              n = g(document, '#editor-body-buffer'),
              s = g(document, '#undo-load-readme'),
              o = n.textContent,
              i = p(e.currentTarget, 'data-readme-name');
            fu(t, n),
              h(
                e.currentTarget instanceof HTMLButtonElement,
                'app/assets/modules/github/pages-composer.js:16',
              ),
              (e.currentTarget.disabled = !0),
              (e.currentTarget.textContent = `${i} loaded`),
              s.classList.remove('d-none'),
              t.addEventListener('input', function e() {
                t.value !== o && (s.classList.add('d-none'), t.removeEventListener('input', e));
              });
          }),
          u('click', '#undo-load-readme', function(e) {
            fu(
              g(document, '#gollum-editor-body', HTMLTextAreaElement),
              g(document, '#editor-body-buffer'),
            );
            const t = g(document, '#load-readme', HTMLButtonElement),
              n = p(t, 'data-readme-name');
            (t.disabled = !1),
              (t.textContent = `Load ${n}`),
              e.currentTarget.classList.add('d-none');
          });
        let Lu = !1;
        function wu(e, t) {
          return document.querySelector(`#${e}LC${t}`);
        }
        function Eu({ blobRange: e, anchorPrefix: t }) {
          if (
            0 !== document.querySelectorAll('.js-file-line').length &&
            ((function() {
              for (const e of document.querySelectorAll('.js-file-line.highlighted'))
                e.classList.remove('highlighted');
              for (const e of document.querySelectorAll('.js-file-line .highlighted')) {
                const t = m(e, '.js-file-line');
                e.replaceWith(...e.childNodes), t.normalize();
              }
            })(),
            e)
          )
            if (null === e.start.column || null === e.end.column)
              for (let n = e.start.line; n <= e.end.line; n += 1) {
                const e = wu(t, n);
                e && e.classList.add('highlighted');
              }
            else if (
              e.start.line === e.end.line &&
              null != e.start.column &&
              null != e.end.column
            ) {
              const n = (function(e, t) {
                const [n, s] = vu(e.start, !0, t),
                  [o, i] = vu(e.end, !1, t);
                if (!n || !o) return;
                let r = s,
                  a = i;
                if ((-1 === r && (r = 0), -1 === a && (a = o.childNodes.length), !n.ownerDocument))
                  throw new Error('DOMRange needs to be inside document');
                const c = n.ownerDocument.createRange();
                return c.setStart(n, r), c.setEnd(o, a), c;
              })(e, e => wu(t, e));
              if (n) {
                const e = document.createElement('span');
                e.classList.add('highlighted'),
                  (function(e, t) {
                    t.appendChild(e.extractContents()), e.insertNode(t);
                  })(n, e);
              }
            }
        }
        function Tu() {
          const e = gu(window.location.hash);
          Eu(e),
            (function() {
              const e = document.querySelector('.js-file-line-actions');
              if (!e) return;
              const t = document.querySelectorAll('.js-file-line.highlighted'),
                n = t[0];
              if (n) {
                !(function(e) {
                  const t = [];
                  for (const s of e) t.push(s.textContent);
                  const n = document.getElementById('js-copy-lines');
                  if (n instanceof ClipboardCopyElement) {
                    (n.textContent = `Copy ${b(e.length, 'line')}`), (n.value = t.join('\n'));
                    const s = `Blob, copyLines, numLines:${e.length.toString()}`;
                    n.setAttribute('data-ga-click', s);
                  }
                })(t),
                  (function(e) {
                    const t = document.getElementById('js-view-git-blame');
                    if (!t) return;
                    t.setAttribute('data-ga-click', `Blob, viewGitBlame, numLines:${e.toString()}`);
                  })(t.length);
                const s = (function(e) {
                  const t = document.querySelector('.js-permalink-shortcut');
                  if (t instanceof HTMLAnchorElement) {
                    const n = `${t.href}${window.location.hash}`,
                      s = document.getElementById('js-copy-permalink');
                    if (s instanceof ClipboardCopyElement) {
                      s.value = n;
                      const t = `Blob, copyPermalink, numLines:${e.toString()}`;
                      s.setAttribute('data-ga-click', t);
                    }
                    return n;
                  }
                })(t.length);
                s &&
                  (function(e, t) {
                    const n = document.getElementById('js-new-issue');
                    if (n instanceof HTMLAnchorElement) {
                      if (!n.href) return;
                      const s = new URL(n.href, window.location.origin),
                        o = new URLSearchParams(s.search.slice(1));
                      o.set('permalink', e),
                        (s.search = o.toString()),
                        (n.href = s.toString()),
                        n.setAttribute('data-ga-click', `Blob, newIssue, numLines:${t.toString()}`);
                    }
                  })(s, t.length),
                  (e.style.top = `${n.offsetTop - 2}px`),
                  e.classList.remove('d-none');
              } else e.classList.add('d-none');
            })();
          const { blobRange: t, anchorPrefix: n } = e,
            s = t && wu(n, t.start.line);
          if (!Lu && s) {
            s.scrollIntoView(), (m(s, '.blob-wrapper, .js-blob-wrapper').scrollLeft = 0);
          }
          Lu = !1;
        }
        function ku(e) {
          const t = e.currentTarget,
            n = t.getAttribute('data-original-text');
          n &&
            ((t.textContent = 'Copied!'),
            setTimeout(() => {
              t.textContent = n;
            }, 2e3));
        }
        function Mu(e) {
          const t = e.match(/^#?(diff-[a-f0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);
          if (null != t && 6 === t.length) return t;
          const n = e.match(/^#?(discussion-diff-[0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);
          return null != n && 6 === n.length ? n : null;
        }
        function Au(e) {
          Fe(e), Hr(e);
        }
        async function xu(e, t) {
          let n;
          if (t) {
            const s = 'R' === t.slice(-1) ? 'data-right-range' : 'data-left-range',
              o = e.getAttribute(s) || '';
            n = t + parseInt(o.split('-')[0], 10);
          } else n = e.hash.slice(1);
          const s = p(e, 'data-url'),
            o = new URL(s, window.location.origin),
            i = new URLSearchParams(o.search.slice(1));
          i.append('anchor', n), (o.search = i.toString());
          const r = await R(document, o),
            a = m(e, '.js-expandable-line'),
            c = (function(e, t) {
              const n = e.nextElementSibling;
              return n instanceof HTMLElement && n.matches(t) ? n : null;
            })(a, '.file-diff-line');
          c
            ? oe(c, () => {
                a.replaceWith(r);
              })
            : a.replaceWith(r);
        }
        function Su(e, t, n, s) {
          const o = parseInt(n, 10),
            i = parseInt(s, 10);
          return f(e, '.js-expand', HTMLAnchorElement).filter(e => {
            const n = 'R' === t ? 'data-right-range' : 'data-left-range',
              s = (e.getAttribute(n) || '').split('-'),
              r = parseInt(s[0], 10),
              a = parseInt(s[1], 10);
            return (r <= o && o <= a) || ((o <= r && a <= i) || (r <= i && i <= a));
          });
        }
        function Hu(e, t) {
          const n = e.nextElementSibling;
          return n && n.matches(t) ? n : null;
        }
        function Cu(e) {
          const t = e.querySelector('.js-toggle-file-notes');
          t instanceof HTMLInputElement && _(t, !0);
        }
        function qu() {
          for (const e of document.querySelectorAll('.file .js-inline-comments-container')) {
            const t = e.querySelectorAll('.js-comments-holder > *').length > 0,
              n = e.querySelector('.js-inline-comment-form-container'),
              s = !!n && n.classList.contains('open');
            t || s || e.remove();
          }
        }
        function Iu(e) {
          const t = g(document, e).firstElementChild;
          h(t, 'app/assets/modules/github/pages/diffs/line-comments.js:202');
          const n = t.cloneNode(!0),
            s = n.querySelector('textarea');
          return s instanceof HTMLTextAreaElement && (s.value = ''), n;
        }
        function _u(e, t) {
          const n = ['type', 'path', 'position', 'line', 'side', 'original-line'];
          for (const a of n) {
            const n = e.elements.namedItem(a);
            if (n instanceof HTMLInputElement) {
              const e = t.getAttribute(`data-${a}`) || '';
              n.value = e;
            }
          }
          const s = t.getAttribute('data-position') || '',
            o = t.getAttribute('data-anchor') || '',
            i = g(e, '.js-comment-field'),
            r = i.id
              .replace(/^r\d+ /, '')
              .replace('${anchor}', o)
              .replace('${position}', s);
          for (const a of e.querySelectorAll(`[for="${i.id}"]`)) a.setAttribute('for', r);
          i.id = r;
        }
        function $u(e) {
          return Math.floor(e / 2);
        }
        function Du(e, t) {
          const n = e.parentElement;
          if (!n) return;
          const s = n.children;
          let o;
          if (4 === s.length)
            for (let i = 0, r = s.length; i < r; i++) {
              s[i] === e && (o = $u(i));
            }
          for (let i = 0, r = s.length; i < r; i++) {
            const e = s[i];
            (null != o && $u(i) !== o) || e.classList.toggle('is-hovered', t);
          }
        }
        ce(function() {
          if (document.querySelector('.js-file-line-container')) {
            setTimeout(Tu, 0);
            const e = window.location.hash;
            for (const t of document.querySelectorAll('.js-update-url-with-hash'))
              if (t instanceof HTMLAnchorElement) t.hash = e;
              else if (t instanceof HTMLFormElement) {
                const n = new URL(t.action, window.location.origin);
                (n.hash = e), (t.action = n.toString());
              }
          }
        }),
          u('click', '#js-copy-permalink', ku),
          u('click', '#js-copy-lines', ku),
          u('click', '.js-line-number', function(e) {
            h(
              e instanceof MouseEvent,
              'expected click event to be MouseEvent -- app/assets/modules/github/pages/blob/lines.js:197',
            );
            const t = gu(e.currentTarget.id),
              { blobRange: n } = t;
            h(
              n,
              'expected line number clicks to match range -- app/assets/modules/github/pages/blob/lines.js:202',
            );
            const s = pu(window.location.hash);
            s && e.shiftKey && (t.blobRange = { start: s.start, end: n.end }),
              (function(e) {
                const t = window.scrollY;
                (Lu = !0), e(), window.scrollTo(0, t);
              })(() => {
                window.location.hash = hu(t);
              });
          }),
          u('submit', '.js-jump-to-line-form', function(e) {
            const t = g(e.currentTarget, '.js-jump-to-line-field', HTMLInputElement)
              .value.replace(/[^\d-]/g, '')
              .split('-')
              .map(e => parseInt(e, 10))
              .filter(e => e > 0)
              .sort((e, t) => e - t);
            t.length && (window.location.hash = `L${t.join('-L')}`), e.preventDefault();
          }),
          l('.js-csv-filter-field', function(e) {
            h(
              e.target instanceof HTMLInputElement,
              'app/assets/modules/github/pages/blob/csv.js:7',
            );
            const t = e.target.value.toLowerCase();
            for (const n of document.querySelectorAll('.js-csv-data tbody tr'))
              n.hidden = !!t && !n.textContent.toLowerCase().includes(t);
          }),
          u('navigation:keydown', '.js-commits-list-item', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/pages/commits.js:9'),
              'c' === e.detail.hotkey && g(e.target, '.js-navigation-open').click();
          }),
          ce(function() {
            const e = (function(e) {
              if (!e) return;
              const t = Mu(e);
              if (!t) return;
              const n = t[1],
                s = t[2],
                o = t[3],
                i = t[5];
              return {
                anchor: n,
                side: s,
                line: o,
                lastLine: i,
                hashFragment: n + s + o,
                partialHashFragment: n + s,
              };
            })(window.location.hash);
            e &&
              ((J(document, e.hashFragment) && !e.lastLine) ||
                (async function e(t, n) {
                  const {
                    anchor: s,
                    side: o,
                    line: i,
                    lastLine: r,
                    hashFragment: a,
                    partialHashFragment: c,
                  } = t;
                  const l = J(document, s);
                  if (!l) return;
                  const u = l.nextElementSibling;
                  if (!u) return;
                  const d = Su(u, o, i, r);
                  if (!d.length) {
                    const e = J(document, a);
                    if (e) return void Au(e);
                    const t = u.querySelector('.js-diff-load-container');
                    if (!t) return;
                    try {
                      await $r(t);
                      const e = J(document, a);
                      e instanceof HTMLElement && Au(e);
                    } catch (Rh) {
                      Au(u);
                    }
                    return;
                  }
                  await (function(e, t) {
                    return Promise.all(e.map(e => xu(e, t)));
                  })(d, c);
                  const m = J(document, a);
                  const f = Su(u, o, i, r);
                  f.length ? e(t, n) : m ? Au(m) : n < 1 && e(t, n + 1);
                })(e, 0));
          }),
          u('click', '.js-expand', function(e) {
            e.preventDefault(),
              h(
                e.currentTarget instanceof HTMLAnchorElement,
                'app/assets/modules/github/pages/diffs/expander.js:123',
              ),
              xu(e.currentTarget, null);
          }),
          u('click', '.js-add-single-line-comment', function(e) {
            const t = e.currentTarget;
            h(t instanceof Element, 'app/assets/modules/github/pages/diffs/line-comments.js:18'),
              Cu(m(t, '.file'));
            const n =
              (function(e) {
                const t = m(e, 'tr'),
                  n = Hu(t, '.js-inline-comments-container');
                if (n instanceof Element) {
                  const e = g(t, 'button.js-add-line-comment'),
                    s = Array.from(n.querySelectorAll('.js-inline-comment-form')).pop();
                  return s instanceof HTMLFormElement && _u(s, e), n;
                }
              })(t) ||
              (function(e) {
                const t = m(e, 'tr'),
                  n = Iu('#js-inline-comments-single-container-template'),
                  s = n.querySelector('.js-inline-comment-form');
                s instanceof HTMLFormElement && _u(s, e);
                return t.after(n), n;
              })(t);
            ou(Array.from(n.querySelectorAll('.js-line-comments')).pop());
          }),
          u('click', '.js-add-split-line-comment', function(e) {
            const t = e.currentTarget;
            Cu(m(t, '.file'));
            const n = m(t, 'tr'),
              s = 'addition' === t.getAttribute('data-type') ? 'js-addition' : 'js-deletion',
              o = (function(e, t, n) {
                const s = e.querySelector(`.js-line-comments.${t}`);
                if (s) {
                  const e = Array.from(s.querySelectorAll('.js-inline-comment-form')).pop();
                  return (
                    h(
                      e instanceof HTMLFormElement,
                      'app/assets/modules/github/pages/diffs/line-comments.js:234',
                    ),
                    _u(e, n),
                    s
                  );
                }
                const o = Iu('#js-inline-comments-split-form-container-template');
                o.classList.add(t);
                const i = o.querySelector('.js-inline-comment-form');
                i instanceof HTMLFormElement && _u(i, n);
                const r = e.querySelectorAll(`.${t}`);
                r[r.length - 1].after(o);
                for (const a of r) a.remove();
                return o;
              })(
                (function(e) {
                  let t = Hu(e, '.js-inline-comments-container');
                  return (
                    t || ((t = Iu('#js-inline-comments-split-container-template')), e.after(t), t)
                  );
                })(n),
                s,
                t,
              );
            ou(Array.from(o.querySelectorAll('.js-line-comments')).pop());
          }),
          v('.js-inline-comment-form', async function(e, t) {
            let n;
            try {
              n = await t.json();
            } catch (a) {
              if (a.response) {
                let t;
                try {
                  t = a.response.json;
                } catch (c) {}
                if (t)
                  return void (function(e, t) {
                    const n = g(e, '.js-comment-form-error');
                    let s;
                    s = t.errors
                      ? Array.isArray(t.errors)
                        ? t.errors.join(', ')
                        : t.errors
                      : 'There was an error posting your comment.';
                    (n.textContent = s), (n.style.display = 'block'), n.classList.remove('d-none');
                  })(e, t);
              }
              throw a;
            }
            const s = n.json,
              o = s.inline_comment,
              i = e.closest('.js-line-comments');
            o &&
              (h(i, 'app/assets/modules/github/pages/diffs/line-comments.js:105'),
              g(i, '.js-comments-holder').append(xe(document, o)));
            const r = s.inline_comment_thread;
            r &&
              (h(i, 'app/assets/modules/github/pages/diffs/line-comments.js:112'),
              i.replaceWith(xe(document, r))),
              iu(e);
          }),
          document.addEventListener('session:resume', function(e) {
            h(
              e instanceof CustomEvent,
              'app/assets/modules/github/pages/diffs/line-comments.js:170',
            ),
              (function(e) {
                const [t, n] =
                  e.match(/^new_inline_comment_(?:discussion|diff)_(?:[\w-]+)_(\d+)_(\d+)$/) || [];
                if (!t) return;
                const s = document.querySelector(
                  `.js-inline-comment-form input[name='in_reply_to'][value='${n}']`,
                );
                if (!s) return;
                const o = s.closest('.js-line-comments');
                o && ou(o);
              })(e.detail.targetId),
              (function(e) {
                const [t, n] = e.match(/^new_inline_comment_diff_(?:[\w-]+)_(\d+)$/) || [];
                if (!t) return;
                const s = document.querySelector(
                  `.js-add-line-comment[data-anchor='${t}'][data-position='${n}']`,
                );
                s && s.click();
              })(e.detail.targetId);
          }),
          i('.js-comment', { remove: qu }),
          document.addEventListener('inlinecomment:collapse', () => {
            qu();
          }),
          i('.diff-table', function(e) {
            let t = null;
            function n(e) {
              h(
                e instanceof MouseEvent,
                'app/assets/modules/github/pages/diffs/line-highlight.js:43',
              ),
                t && Du(t, !1),
                (t = null);
            }
            function s(e) {
              h(
                e instanceof MouseEvent,
                'app/assets/modules/github/pages/diffs/line-highlight.js:51',
              ),
                t && Du(t, !1),
                e.target instanceof HTMLElement &&
                  (t = e.target.closest('td.blob-code')) &&
                  Du(t, !0);
            }
            return {
              add: function() {
                e.addEventListener('mouseenter', n),
                  e.addEventListener('mouseleave', n),
                  e.addEventListener('mouseover', s);
              },
              remove: function() {
                e.removeEventListener('mouseenter', n),
                  e.removeEventListener('mouseleave', n),
                  e.removeEventListener('mouseover', s);
              },
            };
          });
        class Ru {
          constructor(e, t, n) {
            (this.diffId = e),
              (this.side = t),
              (this.lineNumber = n),
              (this.element = J(document, this.anchor()));
          }
          anchor() {
            return `${this.diffId}${this.anchorSuffix()}`;
          }
          anchorSuffix() {
            return `${this.side}${this.lineNumber}`;
          }
          is(e) {
            return (
              this.diffId === e.diffId && this.side === e.side && this.lineNumber === e.lineNumber
            );
          }
        }
        class Nu {
          constructor(e, t, n, s, o) {
            (this.elements = new Set()),
              (this.isParsed = !1),
              (this.isSplit = !1),
              (this.diffId = e),
              (this.diffTable = document.querySelector(`.js-diff-table[data-diff-anchor=${e}]`)),
              this.diffTable &&
                (this.isSplit = this.diffTable.classList.contains('js-file-diff-split')),
              (this.start = new Ru(e, t, n)),
              (this.end = new Ru(e, s, o)),
              this.parse();
          }
          anchor() {
            const e = [];
            return (
              e.push(this.start.anchor()),
              this.start.is(this.end) || e.push(this.end.anchorSuffix()),
              e.join('-')
            );
          }
          parse() {
            if (!this.diffTable) return;
            let e = this.diffTable.querySelectorAll('.js-linkable-line-number');
            (e = this.unify(e)),
              (e = this.filterInRange(e)),
              (this.lineCount = e.length),
              (this.elements = this.expandRelatedElements(e)),
              (this.isParsed = !0);
          }
          unify(e) {
            if (!this.isSplit) return Array.from(e);
            const t = [];
            let n = [],
              s = [];
            for (const o of e)
              o.classList.contains('blob-num-addition')
                ? n.push(o)
                : o.classList.contains('blob-num-deletion')
                ? s.push(o)
                : (t.push(...s, ...n, o), (n = []), (s = []));
            return t.push(...s, ...n), t;
          }
          filterInRange(e) {
            if (!this.start.element || !this.end.element) return [];
            let t = e.indexOf(this.start.element),
              n = e.indexOf(this.end.element);
            if (t > n) {
              [t, n] = [n, t];
              const [e, s] = [this.end, this.start];
              (this.start = e), (this.end = s);
            }
            return e.slice(t, n + 1);
          }
          expandRelatedElements(e) {
            const t = this.isSplit;
            return e.reduce(function(e, n) {
              const s = n.parentElement,
                o =
                  n.classList.contains('blob-num-deletion') ||
                  n.classList.contains('blob-num-addition');
              if (!s) return e;
              if (t && o)
                return Array.from(s.children).indexOf(n) < 2
                  ? e.add(s.children[0]).add(s.children[1])
                  : e.add(s.children[2]).add(s.children[3]);
              for (const t of Array.from(s.children)) e.add(t);
              return e;
            }, new Set());
          }
        }
        let Bu = null;
        function Pu() {
          if (Bu) {
            for (const e of Bu.elements) e.classList.remove('selected-line');
            Bu = null;
          }
          const e = Mu(window.location.hash);
          if (!e) return;
          const t = e[1],
            n = e[2],
            s = e[3],
            o = e[4] || n,
            i = e[5] || s;
          Bu = new Nu(t, n, +s, o, +i);
          for (const r of Bu.elements) r.classList.add('selected-line');
        }
        function Fu() {
          const e = document.body;
          h(e, 'app/assets/modules/github/pages/diffs/split.js:9');
          const t = document.querySelector('meta[name=diff-view]'),
            n = t && t instanceof HTMLMetaElement ? t.content : '',
            s = document.querySelector('.js-file-diff-split'),
            o = document.querySelector('.CommunityTemplate-header'),
            i = !!(('split' === n && s) || document.querySelector('.wants-full-width-container'));
          e.classList.toggle('full-width', i);
          const r = !!o;
          e.classList.toggle('full-width-p0', r);
        }
        function Ou(e) {
          const t = e.parentElement;
          h(t, 'app/assets/modules/github/pages/diffs/tr-collapsing.js:19');
          const n = t.querySelectorAll('td.js-line-comments').length,
            s = t.querySelectorAll('td.js-line-comments.is-collapsed').length;
          t.classList.toggle('is-collapsed', s > 0 && n === s);
        }
        function Wu(e) {
          const t = f(document, '.js-hook-event-checkbox', HTMLInputElement);
          for (const n of t) n.checked = n.matches(e);
        }
        u('click', '.js-linkable-line-number', function(e) {
          const t = e.currentTarget;
          let n = t.id;
          if (e instanceof MouseEvent && e.shiftKey) {
            const e = Mu(n);
            if (!e) return;
            const s = e[1],
              o = e[2],
              i = e[3];
            if (Bu && Bu.diffId === s) {
              const e = new Nu(s, Bu.start.side, Bu.start.lineNumber, o, +i);
              n = e.anchor();
              const r = t.closest('.js-file-content[data-hydro-view]');
              r instanceof HTMLElement &&
                (function(e, t) {
                  const n = {
                    starting_diff_position: t.start.side + t.start.lineNumber,
                    ending_diff_position: t.end.side + t.end.lineNumber,
                    line_count: t.lineCount,
                  };
                  e.setAttribute('data-hydro-client-context', JSON.stringify(n)), je(e);
                })(r, e);
            }
          }
          window.history.replaceState(null, null, `#${n}`), Pu(), e.preventDefault();
        }),
          ce(Pu),
          i('.blob-expanded', Pu),
          i('.js-diff-progressive-loader', function(e) {
            e.addEventListener('load', Pu);
          }),
          i('.js-diff-entry-loader', function(e) {
            e.addEventListener('load', Pu);
          }),
          u('click', '.js-rich-diff.collapsed .js-expandable', function(e) {
            e.preventDefault();
            const t = e.target.closest('.js-rich-diff');
            h(t, 'app/assets/modules/github/pages/diffs/prose-diff.js:9'),
              t.classList.remove('collapsed');
          }),
          u('click', '.js-show-rich-diff', function(e) {
            const t = e.currentTarget.closest('.js-warn-no-visible-changes');
            if (!t) return;
            t.classList.add('d-none');
            const n = t.parentElement;
            h(n, 'app/assets/modules/github/pages/diffs/prose-diff.js:21');
            const s = n.querySelector('.js-no-rich-changes');
            s && s.classList.remove('d-none');
          }),
          i('meta[name=diff-view]', { add: Fu, remove: Fu }),
          i('.js-file-diff-split', { add: Fu, remove: Fu }),
          i('.js-compare-tab.selected', { add: Fu, remove: Fu }),
          i('.wants-full-width-container', { add: Fu, remove: Fu }),
          i('.CommunityTemplate-header', { add: Fu, remove: Fu }),
          u('change', '.js-toggle-file-notes', function(e) {
            const t = e.currentTarget;
            h(
              t instanceof HTMLInputElement,
              'app/assets/modules/github/pages/diffs/toggle-file-notes.js:15',
            ),
              m(t, '.file').classList.toggle('show-inline-notes', t.checked);
          }),
          u('click', '.js-toggle-all-file-notes', function(e) {
            const t = f(document, '.js-toggle-file-notes', HTMLInputElement),
              n = t.some(e => e.checked);
            for (const s of t) _(s, !n);
            e.preventDefault();
          }),
          i('.js-inline-comments-container', function(e) {
            let t;
            const n = e.closest('.file');
            if (n) {
              return {
                add: (t = function() {
                  const e = null != n.querySelector('.js-inline-comments-container');
                  n.classList.toggle('has-inline-notes', e);
                }),
                remove: t,
              };
            }
          }),
          u('change', '.js-toggle-file-check-annotations', function(e) {
            const t = e.currentTarget;
            h(
              t instanceof HTMLInputElement,
              'app/assets/modules/github/pages/diffs/toggle-check-annotations.js:13',
            );
            const n = m(t, '.file').querySelectorAll('.js-inline-annotations');
            for (const s of n) s.hidden = !t.checked;
          }),
          i('td.js-line-comments.is-collapsed', { add: Ou, remove: Ou }),
          i('.js-hook-url-field', {
            constructor: HTMLInputElement,
            add(e) {
              function t() {
                const t = e.form;
                let n;
                h(t, 'app/assets/modules/github/pages/hooks.js:18');
                try {
                  n = new URL(e.value);
                } catch (Rh) {}
                const s = t.querySelector('.js-invalid-url-notice');
                s && (s.hidden = !!('' === e.value || (n && /^https?:/.test(n.protocol))));
                const o = t.querySelector('.js-insecure-url-notice');
                o && n && e.value && (o.hidden = /^https:$/.test(n.protocol)),
                  (g(t, '.js-ssl-hook-fields').hidden = !(n && 'https:' === n.protocol));
              }
              T(e, t), t();
            },
          }),
          u('change', '.js-hook-event-choice', function(e) {
            const t = e.currentTarget;
            h(t instanceof HTMLInputElement, 'app/assets/modules/github/pages/hooks.js:53');
            const n = t.checked && 'custom' === t.value,
              s = t.closest('.js-hook-events-field');
            if ((s && s.classList.toggle('is-custom', n), t.checked))
              if (n) {
                g(document, '.js-hook-wildcard-event', HTMLInputElement).checked = !1;
              } else
                'push' === t.value
                  ? Wu('[value="push"]')
                  : 'all' === t.value && Wu('.js-hook-wildcard-event');
          }),
          u('details:toggled', '.js-hook-secret', function(e) {
            const t = e.currentTarget,
              n = g(t, 'input[type=password]', HTMLInputElement);
            t.classList.contains('open') && n.focus();
          }),
          u('click', '.js-hook-deliveries-pagination-button', async function(e) {
            const t = e.currentTarget;
            h(t instanceof HTMLButtonElement, 'app/assets/modules/github/pages/hooks.js:85'),
              (t.disabled = !0);
            const n = t.parentElement;
            h(n, 'app/assets/modules/github/pages/hooks.js:88');
            const s = p(t, 'data-url');
            n.before(await R(document, s)), n.remove();
          }),
          v('.js-redeliver-hook-form', async function(e, t) {
            let n;
            try {
              n = await t.html();
            } catch (r) {
              return (
                h(e.parentElement, 'app/assets/modules/github/pages/hooks.js:102'),
                void e.classList.add('failed')
              );
            }
            const s = e.getAttribute('data-delivery-guid') || '',
              o = g(document, `.js-hook-delivery-container[data-delivery-guid="${s}"]`),
              i = o.parentElement;
            h(i, 'app/assets/modules/github/pages/hooks.js:110'),
              o.replaceWith(n.html),
              g(i, 'poll-include-fragment').addEventListener('load', function() {
                const e = g(i, '.js-hook-delivery-container'),
                  t = g(i, '.js-item-status'),
                  n = e.getAttribute('data-status-class');
                t.classList.remove('success', 'pending', 'failure'), n && t.classList.add(n);
                const s = i.querySelector('.js-item-status-tooltip'),
                  o = e.getAttribute('data-status-message');
                s && o && s.setAttribute('aria-label', o);
              });
          }),
          v('.js-test-hook-form', async function(e, t) {
            const n = g(document, '.js-test-hook-message');
            n.classList.remove('error', 'success');
            try {
              await t.text();
            } catch (s) {
              n.classList.add('error');
              const e = g(n, '.js-test-hook-message-errors');
              if (null != s.response) {
                const t = await s.response.json();
                e.textContent = t.errors;
              } else e.textContent = e.getAttribute('data-network-error-message') || '';
              return;
            }
            n.classList.add('success');
          }),
          v('.js-toggler-container .js-set-approval-state', async function(e, t) {
            const n = m(e, '.js-toggler-container');
            n.classList.add('loading');
            const s = await t.json();
            'approved' === s.json.approval_state
              ? n.classList.add('on')
              : 'denied' === s.json.approval_state &&
                (n.classList.add('revoked'), n.classList.remove('on')),
              n.classList.remove('loading');
          }),
          v('.js-request-access-approval-form', async function(e, t) {
            await t.text();
            const n = p(e, 'data-container-id');
            g(document, `#${n}`).classList.add('on');
          }),
          i('.js-suggested-usernames-container', function(e) {
            const t = f(e, '.js-suggested-username', HTMLInputElement),
              n = document.querySelector('.js-signup-form');
            if (n && 0 !== t.length) for (const s of t) n.appendChild(s);
          }),
          d('.js-email-notice-trigger', function(e) {
            const t = f(document, '.js-email-notice');
            for (const n of t) n.classList.add('notice-highlight');
            e.addEventListener('blur', function() {
              for (const e of t) e.classList.remove('notice-highlight');
            });
          }),
          i('.js-plan-choice:checked', {
            add(e) {
              const t = e.closest('.plan-row');
              t && t.classList.add('selected');
            },
            remove(e) {
              const t = e.closest('.plan-row');
              t && t.classList.remove('selected');
            },
          }),
          i('.js-setup-organization:checked', {
            add() {
              const e = g(document, '.js-choose-plan-submit');
              e.getAttribute('data-default-text') ||
                e.setAttribute('data-default-text', e.textContent),
                (e.textContent = e.getAttribute('data-org-text') || '');
            },
            remove() {
              const e = g(document, '.js-choose-plan-submit');
              e.textContent = e.getAttribute('data-default-text') || '';
            },
          });
        const Uu = new WeakMap();
        function zu({ target: e }) {
          h(e instanceof HTMLElement, 'app/assets/modules/github/pages/signup.js:79');
          const t = m(e, 'form');
          if (e.closest('input[type=text]') && !Uu.get(t)) {
            const e = g(t, '.js-signup-source', HTMLInputElement);
            ve({ category: 'Signup', action: 'Attempt', label: e.value }), Uu.set(t, !0);
          }
        }
        let Vu;
        i('.js-signup-form', { subscribe: e => q(e, 'input', zu) }),
          i('.js-octocaptcha-parent', function(e) {
            h(e instanceof HTMLFormElement, 'app/assets/modules/github/pages/signup.js:89');
            const t = g(e, '.js-octocaptcha-spinner'),
              n = g(e, '.js-octocaptcha-success'),
              s = g(e, '.js-octocaptcha-token', HTMLInputElement),
              o = g(e, '.js-octocaptcha-form-submit', HTMLButtonElement),
              i = g(e, '.js-octocaptcha-frame-container'),
              r = g(e, '.js-octocaptcha-frame'),
              a = s.getAttribute('data-octocaptcha-url');
            let c = 'true' === e.getAttribute('data-redirect-after-solved'),
              l = !1;
            const u = () => {
                l || ((l = !0), t.classList.add('d-none'), n.classList.remove('d-none'), m());
              },
              d = () => {
                if (l) return;
                const t = document.createElement('input');
                (t.type = 'hidden'),
                  (t.id = 'error_loading_captcha'),
                  (t.name = 'error_loading_captcha'),
                  (t.value = '1'),
                  (c = !1),
                  e.appendChild(t),
                  u();
              },
              m = () => {
                e.checkValidity() && ((o.disabled = !1), c && o.click());
              };
            setTimeout(d, 2e4),
              r.addEventListener('error', d),
              window.addEventListener('message', e => {
                if (e.origin !== a) return;
                const n = e.data && e.data.event;
                'captcha-loaded' === n
                  ? l ||
                    ((l = !0),
                    t.classList.add('d-none'),
                    i.classList.remove('v-hidden', 'zero-height'))
                  : 'captcha-complete' === n
                  ? ((s.value = e.data.sessionToken), m())
                  : 'captcha-suppressed' === n && u();
              });
          }),
          i('.js-survey-answer-choice:checked', {
            add(e) {
              const t = e.closest('.js-answer-choice');
              t &&
                (t.classList.remove('border-black-fade', 'bg-gray-light'),
                t.classList.add('border-blue', 'bg-white'));
            },
            remove(e) {
              const t = e.closest('.js-answer-choice');
              t &&
                (t.classList.remove('border-blue', 'bg-white'),
                t.classList.add('border-black-fade', 'bg-gray-light'));
            },
          }),
          i('.js-other-field:checked', {
            add(e) {
              const t = m(e, '.js-answer');
              g(t, '.js-specify-field', HTMLInputElement).hidden = !1;
            },
            remove(e) {
              const t = m(e, '.js-answer');
              g(t, '.js-specify-field', HTMLInputElement).hidden = !0;
            },
          }),
          i('.js-allow-multiple:checked', {
            constructor: HTMLInputElement,
            add(e) {
              const t = parseInt(e.getAttribute('data-max-choices')),
                n = m(e, '.js-question'),
                s = f(n, '.js-allow-multiple', HTMLInputElement);
              if (s.filter(e => !0 === e.checked).length >= t)
                for (const o of s) !1 === o.checked && (o.disabled = !0);
            },
            remove(e) {
              const t = m(e, '.js-question');
              for (const n of f(t, '.js-allow-multiple', HTMLInputElement)) n.disabled = !1;
            },
          });
        let Ku = null;
        function Yu(e) {
          const { item: t, oldIndex: n } = e,
            { parentNode: s } = t;
          h(s instanceof HTMLElement, 'app/assets/modules/github/pinned-issue-reordering.js:17'),
            (Ku = s.children[n + 1]);
        }
        async function Xu(e) {
          const { oldIndex: t, newIndex: n, item: s } = e;
          if (t === n) return;
          const o = m(s, '.js-pinned-issues-reorder-form', HTMLFormElement),
            i = m(o, '.js-pinned-issues-reorder-container'),
            r = g(i, '.js-pinned-issues-spinner');
          (r.style.display = 'inline-block'), Vu.option('disabled', !0);
          try {
            await A(o.action, { method: o.method, body: new FormData(o) }),
              (r.style.display = 'none'),
              Vu.option('disabled', !1);
          } catch (Rh) {
            const t = s.parentNode;
            h(t, 'app/assets/modules/github/pinned-issue-reordering.js:44'),
              Ku ? t.insertBefore(s, Ku) : t.appendChild(s);
          }
        }
        i('.js-pinned-issues-reorder-list', function(e) {
          Vu = De.create(e, {
            animation: 150,
            item: '.js-pinned-issue-list-item',
            handle: '.js-pinned-issue-reorder',
            onUpdate: Xu,
            onStart: Yu,
            chosenClass: 'is-dragging',
          });
        }),
          u('submit', '.js-pinned-issues-reorder-form', function(e) {
            e.preventDefault();
          }),
          Rl('.js-pinned-issue-list-item', Xu);
        let Ju = null;
        u('pjax:click', '.js-pjax-capture-input', function() {
          Ju = (function(e) {
            const t = e.createElement('textarea');
            if (
              ((t.style.position = 'fixed'),
              (t.style.top = '0'),
              (t.style.left = '0'),
              (t.style.opacity = '0'),
              !e.body)
            )
              throw new Error('unconstructed document.body');
            return e.body.appendChild(t), t.focus(), () => (t.blur(), t.remove(), t.value);
          })(document);
        }),
          u('pjax:end', '#js-repo-pjax-container', function() {
            if (Ju) {
              const e = Ju(),
                t = document.querySelector('.js-pjax-restore-captured-input');
              t instanceof HTMLInputElement && e && _(t, e), (Ju = null);
            }
          }),
          u('pjax:click', '.js-pjax-history-navigate', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/pjax/history-navigate.js:14'),
              e.currentTarget.href === Oe()
                ? (history.back(), e.detail.relatedEvent.preventDefault(), e.preventDefault())
                : e.currentTarget.href === We() &&
                  (history.forward(), e.detail.relatedEvent.preventDefault(), e.preventDefault());
          }),
          i('link[rel=pjax-prefetch]', {
            constructor: HTMLLinkElement,
            initialize(e) {
              const t = Ue(e, { headers: { Purpose: 'prefetch' } });
              ze(e, t);
            },
          });
        class PreciseTimeAgoElement extends RelativeTimeElement {
          connectedCallback() {
            Gu.push(this), Qu || (Zu(), (Qu = setInterval(Zu, 1e3)));
          }
          disconnectedCallback() {
            const e = Gu.indexOf(this);
            -1 !== e && Gu.splice(e, 1), Gu.length || (clearInterval(Qu), (Qu = null));
          }
          getFormattedDate() {
            const e = this.date;
            if (!e) return;
            h(e instanceof Date, 'app/assets/modules/github/precise-time-ago-element.js:42');
            const t = new Date().getTime() - e.getTime(),
              n = Math.floor(t / 1e3),
              s = Math.floor(n / 60),
              o = Math.floor(s / 60),
              i = Math.floor(o / 24),
              r = n - 60 * s,
              a = s - 60 * o;
            return s < 1
              ? `${n}s`
              : o < 1
              ? `${s}m ${r}s`
              : i < 1
              ? `${o}h ${a}m ${r}s`
              : `${i}d ${o - 24 * i}h ${a}m ${r}s`;
          }
        }
        const Gu = [];
        let Qu;
        function Zu() {
          for (const e of Gu) e.textContent = e.getFormattedDate() || '';
        }
        window.customElements.get('precise-time-ago') ||
          ((window.PreciseTimeAgoElement = PreciseTimeAgoElement),
          window.customElements.define('precise-time-ago', PreciseTimeAgoElement)),
          i('body.js-print-popup', () => {
            window.print(), setTimeout(window.close, 1e3);
          }),
          u('click', '.js-new-user-contrib-example', async function(e) {
            const t = g(document, '.js-calendar-graph');
            if (t.classList.contains('sample-graph')) return;
            t.classList.add('sample-graph');
            const n = p(e.currentTarget, 'data-url');
            let s;
            try {
              s = await A(n);
            } catch (Rh) {
              return void t.classList.remove('sample-graph');
            }
            const o = document.createElement('div');
            o.innerHTML = s;
            const i = t.querySelector('.js-calendar-graph-svg');
            h(i, 'app/assets/modules/github/profile/calendar-sample.js:32'),
              i.replaceWith(o.children[0]);
          });
        let ed = null;
        function td() {
          const e = g(document, '.js-calendar-graph'),
            t = p(e, 'data-url');
          return new URL(t, window.location.origin);
        }
        function nd(e) {
          const { target: t } = e;
          h(t instanceof Element, 'app/assets/modules/github/profile/contributions.js:56'),
            t.matches('rect.day') &&
              (sd(),
              (function(e) {
                const t = document.body;
                h(t, 'app/assets/modules/github/profile/contributions.js:89');
                const n = p(e, 'data-date'),
                  s = (function(e, t) {
                    const n = `${od[t.getUTCMonth()].slice(
                        0,
                        3,
                      )} ${t.getUTCDate()}, ${t.getUTCFullYear()}`,
                      s = 0 === e ? 'No' : Ee(e),
                      o = document.createElement('div');
                    o.classList.add('svg-tip', 'svg-tip-one-line'),
                      (o.style.pointerEvents = 'none');
                    const i = document.createElement('strong');
                    return (
                      (i.textContent = `${s} ${b(e, 'contribution')}`), o.append(i, ` on ${n}`), o
                    );
                  })(parseInt(e.getAttribute('data-count')), fd(n));
                t.appendChild(s);
                const o = e.getBoundingClientRect(),
                  i = o.left + window.pageXOffset - s.offsetWidth / 2 + o.width / 2,
                  r = o.bottom + window.pageYOffset - s.offsetHeight - 2 * o.height;
                (s.style.top = `${r}px`), (s.style.left = `${i}px`);
              })(t));
        }
        function sd() {
          const e = document.querySelector('.svg-tip');
          e && e.remove();
        }
        i('.js-calendar-graph-svg', function(e) {
          const t = m(e, '.js-calendar-graph');
          t.addEventListener('mouseover', nd), t.addEventListener('mouseout', sd);
          let n = t.getAttribute('data-from');
          n && (n = ed = fd(n));
          let s = t.getAttribute('data-to');
          s && (s = fd(s));
        }),
          u('click', '.js-calendar-graph rect.day', function(e) {
            h(e instanceof MouseEvent, 'app/assets/modules/github/profile/contributions.js:39');
            const t = e.currentTarget;
            h(t instanceof Element, 'app/assets/modules/github/profile/contributions.js:41');
            const n = m(t, '.js-calendar-graph'),
              s = p(n, 'data-org'),
              o = p(t, 'data-date');
            t.classList.contains('active')
              ? hd(gd())
              : (function(e, t, n) {
                  let s, o;
                  if (ed && t) {
                    const t = ed.getTime(),
                      n = 26784e5,
                      i = t - n,
                      r = t + n;
                    ([s, o] = e > ed ? [ed, e] : [e, ed]),
                      (s = new Date(Math.max(s.getTime(), i))),
                      (o = new Date(Math.min(o.getTime(), r))),
                      (ed = null);
                  } else ed = o = s = e;
                  cd(s, o);
                  const i = td(),
                    r = rd(i.search.slice(1), { from: s, to: o, org: n });
                  r.append('tab', 'overview'), (i.search = r.toString()), id(i.toString());
                })(fd(o), e.shiftKey, s);
          });
        const od = [
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
          'Dec',
        ];
        async function id(e) {
          const t = document.getElementById('js-contribution-activity');
          if (!t) return;
          t.classList.add('loading');
          const n = await R(document, e);
          t.classList.remove('loading'), (t.innerHTML = ''), t.append(n);
        }
        function rd(e, t) {
          const n = new URLSearchParams(e);
          n.delete('from'), n.delete('to'), n.delete('org');
          let s = t.fromStr;
          t.from && (s = md(t.from)), s && n.append('from', s);
          let o = t.toStr;
          t.to && (o = md(t.to)), o && n.append('to', o);
          const i = t.org;
          return i && n.append('org', i), n;
        }
        async function ad(e, t, n) {
          const s = g(document, '.js-calendar-graph'),
            o = p(s, 'data-graph-url'),
            i = new URL(o, window.location.origin),
            r = rd(i.search.slice(1), { from: e, to: t, org: n });
          i.search = r.toString();
          const a = await R(document, i.toString());
          g(document, '.js-yearly-contributions').replaceWith(a);
        }
        function cd(e, t) {
          const n = g(document, '.js-calendar-graph'),
            s = n.querySelectorAll('rect.day');
          for (const i of s) i.classList.remove('active');
          if ((n.classList.remove('days-selected'), e || t)) {
            n.classList.add('days-selected');
            for (const e of s) o(e) && e.classList.add('active');
          }
          function o(n) {
            const s = fd(n.getAttribute('data-date') || '').getTime();
            return e && t ? e.getTime() <= s && s <= t.getTime() : e ? s === e.getTime() : void 0;
          }
        }
        function ld() {
          const e = g(document, '.js-calendar-graph').querySelectorAll('rect.active'),
            t = e[0],
            n = e[e.length - 1],
            s = t && p(t, 'data-date'),
            o = n && p(n, 'data-date');
          if (s && o) return { first: s, last: o };
        }
        function ud() {
          const e =
            ld() ||
            (function() {
              const e = new URLSearchParams(window.location.search.slice(1)),
                t = e.get('from'),
                n = e.get('to');
              if (t && n) return { first: t, last: n };
            })() ||
            (function() {
              const e = new URL(gd(), window.location.origin),
                t = new URLSearchParams(e.search.slice(1)),
                n = t.get('from'),
                s = t.get('to');
              if (n && s) return { first: n, last: s };
            })();
          return h(e, 'app/assets/modules/github/profile/contributions.js:257'), e;
        }
        function dd(e) {
          return `0${e}`.slice(-2);
        }
        function md(e) {
          return `${e.getUTCFullYear()}-${dd(e.getUTCMonth() + 1)}-${dd(e.getUTCDate())}`;
        }
        function fd(e) {
          const [t, n, s] = e.split('-').map(e => parseInt(e, 10));
          return new Date(Date.UTC(t, n - 1, s));
        }
        async function pd(e) {
          const t = ld(),
            n = (function() {
              const e = g(document, '.js-calendar-graph');
              return { first: p(e, 'data-from'), last: p(e, 'data-to') };
            })(),
            s = new Date(n.first),
            o = new Date(n.last);
          if ((await ad(s, o, e), t)) {
            cd(new Date(t.first), new Date(t.last));
          }
        }
        function gd() {
          return (
            g(document, '.js-profile-timeline-year-list .js-year-link.selected', HTMLAnchorElement)
              .href || ''
          );
        }
        function hd(e) {
          const t = new URL(e, window.location.origin).search,
            n = new URLSearchParams(t.slice(1)),
            s = n.get('org'),
            o = n.get('from'),
            i = n.get('to');
          h(o && i, 'app/assets/modules/github/profile/contributions.js:413');
          const r = new Date(o),
            a = new Date(i);
          ad(r, a, s);
          const c = new td(),
            l = rd(c.search.slice(1), { from: r, to: a, org: s });
          l.append('tab', 'overview'), (c.search = l.toString()), id(c.toString());
        }
        function bd(e) {
          const t = e.closest('.js-details-container');
          t && t.classList.add('open');
          const n = e.getBoundingClientRect(),
            s = window.scrollY + n.top - 62 - 10;
          window.scrollTo(0, s);
        }
        function vd(e) {
          (g(document, '.js-profile-editable-area').hidden = e),
            (g(document, '.js-profile-editable-form').hidden = !e),
            (g(document, '.js-profile-editable-error').textContent = '');
        }
        u('click', '.js-org-filter-link', function(e) {
          e.stopPropagation(), e.preventDefault();
          const t = e.currentTarget;
          h(
            t instanceof HTMLAnchorElement,
            'app/assets/modules/github/profile/contributions.js:341',
          );
          const n = m(t, '.js-org-filter-links-container').querySelector(
              '.js-org-filter-link.selected',
            ),
            s = new URL(t.href, window.location.origin),
            o = new URLSearchParams(s.search.slice(1)),
            i = o.get('org'),
            r = ud(),
            a = new Date(r.first),
            c = new Date(r.last);
          n && n.classList.remove('selected'), t !== n && t.classList.add('selected'), pd(i);
          const l = td(),
            u = { org: i, from: null, to: null };
          o.has('from') && (u.from = a), o.has('to') && (u.to = c);
          const d = rd(l.search.slice(1), u);
          (l.search = d.toString()),
            id(l.toString()),
            (async function(e, t) {
              const n = document.getElementById('year-list-container');
              if (!n) return;
              t.append('year_list', '1'), (e.search = t.toString());
              const s = await R(document, e.toString());
              (n.innerHTML = ''), n.append(s);
            })(l, d),
            Ve(null, '', l.toString());
        }),
          u('click', '.js-year-link', function(e) {
            e.stopPropagation(), e.preventDefault();
            const t = e.currentTarget;
            h(
              t instanceof HTMLAnchorElement,
              'app/assets/modules/github/profile/contributions.js:387',
            );
            const n = m(t, 'ul');
            g(n, '.js-year-link.selected').classList.remove('selected'),
              t.classList.add('selected'),
              hd(t.href),
              Ve(null, '', t.href);
          }),
          (function() {
            const e = window.location.hash;
            if (!e || e.indexOf('#event-') < 0) return;
            const t = e.slice(1, e.length),
              n = document.getElementById(t);
            n && bd(n);
          })(),
          window.addEventListener('hashchange', function(e) {
            const t = e.newURL || window.location.href,
              n = t.slice(t.indexOf('#') + 1, t.length),
              s = document.getElementById(n);
            s && (e.stopPropagation(), bd(s));
          }),
          v('.js-show-more-timeline-form', async function(e, t) {
            await t.text();
            const n = document.querySelector('.js-show-more-timeline-form');
            if (n) {
              const t = p(n, 'data-year'),
                s = g(document, '.js-year-link.selected'),
                o = g(document, `#year-link-${t}`);
              if (
                (s.classList.remove('selected'),
                o.classList.add('selected'),
                t !== e.getAttribute('data-year'))
              ) {
                const e = p(n, 'data-from'),
                  t = new Date(e),
                  s = p(n, 'data-to');
                ad(t, new Date(s), n.getAttribute('data-org'));
              }
            }
            (document.title = e.getAttribute('data-title') || ''),
              Ve(null, '', e.getAttribute('data-url') || '');
          });
        let jd = null;
        u('click', '.js-profile-editable-edit-button', function() {
          !(function() {
            const e = g(document, '.js-user-profile-bio').textContent;
            'string' == typeof e &&
              (g(document, '.js-user-profile-bio-edit', HTMLTextAreaElement).value = e);
          })(),
            vd(!0);
        }),
          u('click', '.js-profile-editable-cancel', function() {
            vd(!1);
          }),
          u('change', '.js-profile-editable-pro-badge', function(e) {
            h(
              e.target instanceof HTMLInputElement,
              'app/assets/modules/github/profile/inline-editable-profile.js:39',
            ),
              (jd = { preference: e.target.checked });
          }),
          v('.js-profile-editable-form', async (e, t) => {
            let n;
            try {
              n = await t.html();
            } catch (s) {
              if (422 === s.response.status) {
                g(document, '.js-profile-editable-error').textContent = s.response.json.message;
              }
              return;
            }
            if (
              ((function(e) {
                g(document, '.js-profile-editable-area').replaceWith(e);
              })(n.html),
              vd(!1),
              jd)
            ) {
              g(document, '.js-pro-badge').classList.toggle('d-none', !jd.preference);
            }
          });
        const yd = new WeakMap(),
          Ld = 100;
        async function wd(e, t) {
          if (t) {
            if ((yd.get(e) || 0) > Ld) return;
          }
          const n = e.querySelector('.js-more-pinnable-items-button');
          if (!n) return;
          if (
            (h(
              n instanceof HTMLButtonElement,
              'app/assets/modules/github/profile/pinned-items.js:45',
            ),
            (n.textContent = p(n, 'data-disable-with')),
            (n.disabled = !0),
            t)
          ) {
            const t = yd.get(e) || 0;
            yd.set(e, t + 1);
          }
          const s = p(n, 'data-url'),
            o = await R(document, s);
          n.replaceWith(o),
            (function(e) {
              const t = e.querySelector('.js-pinned-items-filter');
              t && L(t, 'filterable:change');
            })(e);
        }
        async function Ed({ currentTarget: e }) {
          const t = g(e, '.js-pinned-items-selection-list');
          await H();
          const n = f(t, 'input[type=checkbox]', HTMLInputElement),
            s = n.filter(e => e.checked).length,
            o = parseInt(t.getAttribute('data-max-repo-count'), 10);
          for (const i of n) i.disabled = s === o && !i.checked;
          !(function(e, t, n) {
            const s = g(e, '.js-remaining-pinned-items-count'),
              o = p(s, 'data-remaining-label'),
              i = n - t;
            (s.textContent = `${i} ${o}`), s.classList.toggle('text-red', i < 1);
          })(m(t, '.js-pinned-items-selection-form', HTMLFormElement), s, o);
        }
        function Td(e) {
          const t = g(e, '.js-pinnable-item');
          return {
            name: t.textContent.toLowerCase().trim(),
            isPinned: g(e, 'input[type="checkbox"]', HTMLInputElement).checked,
            element: e,
            isRepository: t.classList.contains('js-pinnable-repo'),
            isGist: t.classList.contains('js-pinnable-gist'),
          };
        }
        function kd(e, t, n) {
          if (e.isPinned) return !0;
          const s = !t || e.name.indexOf(t) > -1,
            o = e.isRepository && n.includeRepositories,
            i = e.isGist && n.includeGists;
          return s && (o || i);
        }
        function Md(e) {
          const t = e.target;
          h(t instanceof Element, 'app/assets/modules/github/profile/pinned-items.js:189');
          const n = m(t, '.js-pinned-items-selection-form');
          let s = null;
          t.classList.contains('js-pinned-items-search')
            ? h(
                (s = t) instanceof HTMLInputElement,
                'app/assets/modules/github/profile/pinned-items.js:195',
              )
            : (s = g(n, '.js-pinned-items-search', HTMLInputElement));
          const o = s.value.toLowerCase().trim(),
            i = (function(e) {
              if (
                !(function(e) {
                  return !!e.querySelector('.js-pinned-items-type-filter');
                })(e)
              )
                return { includeRepositories: !0, includeGists: !0 };
              const t = f(e, '.js-pinned-items-type-filter:checked', HTMLInputElement),
                n = t.map(e => e.value),
                s = n.indexOf('repository') > -1,
                o = n.indexOf('gist') > -1;
              for (const i of t) i.disabled = s !== o;
              return { includeRepositories: s, includeGists: o };
            })(n);
          let r = !1;
          const a = Array.from(n.querySelectorAll('.js-pinned-items-selection'));
          for (const c of a) {
            const e = Td(c),
              t = kd(e, o, i);
            t && (r = !0), (e.element.hidden = !t);
          }
          g(n, '.js-no-repos-message').hidden = r;
        }
        let Ad;
        i('.js-more-pinnable-items-button', function(e) {
          const t = m(e, '.js-pinned-items-selection-form');
          (function(e) {
            const t = e.querySelector('.js-pinned-items-filter');
            return (
              !!t &&
              (document.activeElement === t ||
                (h(
                  t instanceof HTMLInputElement,
                  'app/assets/modules/github/profile/pinned-items.js:79',
                ),
                t.defaultValue.trim().length > 0))
            );
          })(t) && wd(t, !0);
        }),
          u('click', '.js-more-pinnable-items-button', function(e) {
            const t = e.target;
            wd(m(t, '.js-pinned-items-selection-form'), !1);
          }),
          N('keydown', '.js-pinned-items-search', function(e) {
            h(e instanceof KeyboardEvent, 'app/assets/modules/github/profile/pinned-items.js:220'),
              'Enter' === V(e) && e.preventDefault();
          }),
          d('.js-pinned-items-search', function(e) {
            wd(m(e, '.js-pinned-items-selection-form'), !0);
          }),
          l('.js-pinned-items-search', Md),
          u('change', '.js-pinned-items-filter', Md),
          u('search', '.js-pinned-items-search', Md),
          u('change', '.js-pinned-items-selection-form', Ed),
          u('reset', '.js-pinned-items-selection-form', Ed);
        let xd = null;
        function Sd(e) {
          const { item: t, oldIndex: n } = e,
            { parentNode: s } = t;
          h(
            s instanceof HTMLElement,
            'app/assets/modules/github/profile/pinned-item-reordering.js:17',
          ),
            (xd = s.children[n + 1]);
        }
        async function Hd(e) {
          const { oldIndex: t, newIndex: n, item: s } = e;
          if (t === n) return;
          const o = m(s, '.js-pinned-items-reorder-form', HTMLFormElement),
            i = m(o, '.js-pinned-items-reorder-container'),
            r = g(i, '.js-pinned-items-spinner'),
            a = g(i, '.js-pinned-items-reorder-message');
          (a.textContent = ''), (r.style.display = 'inline-block'), Ad.option('disabled', !0);
          try {
            await A(o.action, { method: o.method, body: new FormData(o) }),
              (a.textContent = a.getAttribute('data-success-text') || ''),
              (r.style.display = 'none'),
              Ad.option('disabled', !1);
          } catch (Rh) {
            (a.textContent = a.getAttribute('data-error-text') || ''), (r.style.display = 'none');
            const t = s.parentNode;
            h(t, 'app/assets/modules/github/profile/pinned-item-reordering.js:50'),
              xd ? t.insertBefore(s, xd) : t.appendChild(s);
          }
        }
        function Cd(e, t) {
          t > 0 &&
            (e.textContent = (function(e) {
              return e > 999 ? `${(e / 1e3).toFixed(1)}k` : e.toLocaleString();
            })(t));
        }
        i('.js-pinned-items-reorder-list', function(e) {
          Ad = De.create(e, {
            animation: 150,
            item: '.js-pinned-item-list-item',
            handle: '.js-pinned-item-reorder',
            onUpdate: Hd,
            onStart: Sd,
            chosenClass: 'is-dragging',
          });
        }),
          u('submit', '.js-pinned-items-reorder-form', function(e) {
            e.preventDefault();
          }),
          Rl('.js-pinned-item-list-item', Hd),
          i('.js-user-profile-sticky-fields.is-stuck', function() {
            const e = g(document, '.js-user-profile-sticky-bar');
            return {
              add() {
                e.classList.add('is-stuck');
              },
              remove() {
                e.classList.remove('is-stuck');
              },
            };
          }),
          i('.js-user-profile-follow-button.is-stuck', function() {
            const e = g(document, '.js-user-profile-sticky-bar');
            return {
              add() {
                e.classList.add('is-follow-stuck');
              },
              remove() {
                e.classList.remove('is-follow-stuck');
              },
            };
          }),
          i('.js-user-profile-following-toggle .js-toggler-container.on', function() {
            return {
              add() {
                const e = document.querySelector(
                  '.js-user-profile-following-mini-toggle .js-toggler-container',
                );
                e && e.classList.add('on');
              },
              remove() {
                const e = document.querySelector(
                  '.js-user-profile-following-mini-toggle .js-toggler-container',
                );
                e && e.classList.remove('on');
              },
            };
          }),
          i('.js-user-profile-following-mini-toggle .js-toggler-container.on', function() {
            const e = g(document, '.js-user-profile-following-toggle .js-toggler-container');
            return {
              add() {
                e.classList.add('on');
              },
              remove() {
                e.classList.remove('on');
              },
            };
          }),
          i('.js-profile-tab-count-container', function(e) {
            !(async function(e) {
              const t = new URL(p(e, 'data-url'), window.location.origin),
                n = new URLSearchParams(t.search.slice(1)),
                s = e.querySelector('.js-profile-repository-count'),
                o = e.querySelector('.js-profile-project-count'),
                i = e.querySelector('.js-profile-package-count'),
                r = e.querySelector('.js-profile-team-count'),
                a = e.querySelector('.js-profile-member-count');
              s && n.append('repo', '1'),
                o && n.append('project', '1'),
                i && n.append('package', '1'),
                r && n.append('team', '1'),
                a && n.append('member', '1'),
                (t.search = n.toString());
              const l = await c(t.toString()),
                u = (await l.json()).data;
              s && u.repositories && Cd(s, u.repositories.totalCount),
                o && u.projects && Cd(o, u.projects.totalCount),
                i && u.registryPackages && Cd(i, u.registryPackages.totalCount),
                r && u.teams && Cd(r, u.teams.totalCount),
                a && u.members && Cd(a, u.members.totalCount);
            })(e);
          });
        const qd = document.querySelector('meta[name=js-proxy-site-detection-payload]'),
          Id = document.querySelector('meta[name=expected-hostname]');
        if (qd instanceof HTMLMetaElement && Id instanceof HTMLMetaElement && s(document)) {
          const e = {
              url: window.location.href,
              expectedHostname: Id.content,
              documentHostname: document.location.hostname,
              proxyPayload: qd.content,
            },
            t = new Error(),
            n = {};
          (n.$__ = btoa(JSON.stringify(e))), dt(t, n);
        }
        function _d(e, t, n) {
          const s = Array.from(e.querySelectorAll('[role="menuitem"]'));
          let o = s.indexOf(t),
            i = s.indexOf(n);
          if (-1 === o) throw new Error("Couldn't find startIndex in container");
          if (-1 === i) throw new Error("Couldn't find endItem in container");
          $d(e), s[i].classList.add('is-last-in-range'), o > i && ([o, i] = [i, o]);
          for (const r of s.slice(o, i + 1)) r.classList.add('is-range-selected');
        }
        function $d(e) {
          for (const t of e.querySelectorAll('[role="menuitem"]'))
            t.classList.remove('is-range-selected', 'is-last-in-range');
        }
        let Dd;
        function Rd(e) {
          const t = document.querySelector('head .js-site-favicon');
          t instanceof HTMLLinkElement && (null == Dd && (Dd = t.href), (t.href = e));
        }
        u(
          'details-menu-select',
          '.js-pull-base-branch-menu',
          function() {
            const e = g(
              document,
              '.js-change-base-template',
              HTMLTemplateElement,
            ).content.cloneNode(!0);
            ne({ content: e });
          },
          { capture: !0 },
        ),
          i('.js-diffbar-commits-menu .js-diffbar-commits-list', {
            subscribe: function(e) {
              const t = m(e, 'details-menu');
              let n = !1;
              function s(e) {
                (n = e.shiftKey), e.shiftKey && e.preventDefault();
              }
              function o(t) {
                if (!n) return;
                t.preventDefault(),
                  h(
                    t instanceof CustomEvent,
                    'app/assets/modules/github/pulls/commits-range-selection.js:83',
                  );
                const s = t.detail.relatedTarget;
                if (
                  (h(
                    s instanceof Element,
                    'app/assets/modules/github/pulls/commits-range-selection.js:85',
                  ),
                  s.classList.contains('is-range-selected'))
                ) {
                  t.stopPropagation();
                  const n = e.querySelectorAll('.is-range-selected'),
                    s = n[0],
                    o = n[n.length - 1],
                    i = p(e, 'data-range-url'),
                    r = s.getAttribute('data-parent-commit'),
                    a = p(o, 'data-commit'),
                    c = r && a ? `${r}..${a}` : a,
                    l = i.replace('$range', c);
                  U({ url: l, container: g(document, '#js-repo-pjax-container') });
                } else
                  t.stopImmediatePropagation(),
                    (async function(e, t) {
                      function n(n) {
                        h(
                          n.target instanceof Element,
                          'app/assets/modules/github/pulls/commits-range-selection.js:42',
                        ),
                          _d(e, t, m(n.target, '[role="menuitem"]'));
                      }
                      _d(e, t, t),
                        e.addEventListener('mouseover', n),
                        await new Promise(e => window.addEventListener('keyup', e, { once: !0 })),
                        e.removeEventListener('mouseover', n),
                        $d(e);
                    })(e, s);
              }
              return (
                e.addEventListener('click', s, { capture: !0 }),
                t.addEventListener('details-menu-select', o),
                {
                  unsubscribe: () => {
                    e.removeEventListener('click', s, { capture: !0 }),
                      t.removeEventListener('details-menu-select', o);
                  },
                }
              );
            },
          }),
          u(
            'toggle',
            '.js-diffbar-commits-menu',
            function(e) {
              const t = e.currentTarget;
              if (!t.hasAttribute('open')) return;
              const n = t.querySelector('.in-range');
              n && n.focus();
            },
            { capture: !0 },
          ),
          u('click', '.js-compare-tab', function(e) {
            for (const n of document.querySelectorAll('.js-compare-tab.selected'))
              n.classList.remove('selected');
            e.currentTarget.classList.add('selected');
            for (const n of document.querySelectorAll(
              '#commits_bucket, #files_bucket, #commit_comments_bucket',
            ))
              n.classList.add('d-none');
            h(
              e.currentTarget instanceof HTMLAnchorElement,
              'app/assets/modules/github/pulls/compare.js:21',
            );
            const t = e.currentTarget.hash;
            g(document, t).classList.remove('d-none'), e.preventDefault();
          }),
          ce(function({ target: e }) {
            if (!(e instanceof HTMLElement)) return;
            const t = e.closest('#commits_bucket, #files_bucket, #commit_comments_bucket');
            t &&
              t instanceof HTMLElement &&
              !G(t) &&
              g(document, `.js-compare-tab[href="#${t.id}"]`).click();
          }),
          u('click', '.js-toggle-range-editor-cross-repo', function() {
            g(document, '.js-range-editor').classList.toggle('is-cross-repo');
          }),
          u('pjax:click', '.js-range-editor', function(e) {
            const t = document.querySelector('.js-compare-pr');
            if (t && t.classList.contains('open')) {
              h(e instanceof CustomEvent, 'app/assets/modules/github/pulls/compare.js:53');
              const t = e.detail.options,
                n = new URL(t.url, window.location.origin);
              n.search.match(/expand=1/) ||
                ((n.search += `${n.search ? '&' : ''}expand=1`), (t.url = n.toString()));
            }
          }),
          i('.js-compare-pr.open', {
            add() {
              const e = document.body;
              h(e, 'app/assets/modules/github/pulls/compare.js:66'),
                e.classList.add('is-pr-composer-expanded');
            },
            remove() {
              const e = document.body;
              h(e, 'app/assets/modules/github/pulls/compare.js:71'),
                e.classList.remove('is-pr-composer-expanded');
            },
          }),
          u('change', '.js-collab-checkbox', function({ currentTarget: e }) {
            h(e instanceof HTMLInputElement, 'app/assets/modules/github/pulls/composer.js:9');
            const t = e.form;
            h(t, 'app/assets/modules/github/pulls/composer.js:11');
            for (const o of t.querySelectorAll('.errored')) o.classList.remove('errored');
            const n = m(e, '.js-collab-option'),
              s = g(n, '.js-status-indicator');
            s.classList.remove('status-indicator-success', 'status-indicator-failed'),
              s.classList.add('status-indicator-loading');
          }),
          v('.js-collab-form', async function(e, t) {
            try {
              await t.text();
            } catch (n) {
              for (const t of e.querySelectorAll('.status-indicator-loading')) {
                t.classList.remove('status-indicator-loading'),
                  t.classList.add('status-indicator-failed');
                const e = m(t, '.js-collab-option');
                e.classList.add('errored');
                const n = g(e, '.js-collab-checkbox', HTMLInputElement);
                n.checked = !n.checked;
              }
              for (const t of e.querySelectorAll('.status-indicator-success'))
                t.classList.remove('status-indicator-success');
              return;
            }
            for (const s of e.querySelectorAll('.errored')) s.classList.remove('errored');
            for (const s of e.querySelectorAll('.status-indicator-loading'))
              s.classList.remove('status-indicator-loading'),
                s.classList.add('status-indicator-success');
          }),
          u(
            'details-menu-selected',
            '.js-pull-request-menu',
            function(e) {
              const t = g(document, '.js-pull-request-button');
              h(e instanceof CustomEvent, 'app/assets/modules/github/pulls/composer.js:67');
              const n = g(e.detail.relatedTarget, 'span[data-menu-button-text]').textContent;
              (t.textContent = n), t.focus();
            },
            { capture: !0 },
          ),
          i('.js-timeline-item > .discussion-item.discussion-commits', {
            constructor: HTMLElement,
            add(e) {
              if (e.querySelector('.discussion-item-header')) return;
              const t = e.closest('.js-timeline-item');
              if (!(t instanceof HTMLElement)) return;
              const n = t.previousElementSibling;
              n instanceof HTMLElement &&
                n.querySelector('.discussion-item.discussion-commits') &&
                (function(e, t) {
                  const n = g(e, '.timeline-commits'),
                    s = t.querySelectorAll('.timeline-commits > .commit');
                  for (const o of s) n.appendChild(o);
                  t.remove();
                })(n, t);
            },
          }),
          i('[data-favicon-override]', {
            add(e) {
              const t = p(e, 'data-favicon-override');
              setTimeout(() => Rd(t));
            },
            remove() {
              null != Dd && Rd(Dd);
            },
          }),
          u('click', '.js-file-header .js-details-target', function(e) {
            if (!(e instanceof MouseEvent && e.altKey && e.currentTarget instanceof HTMLElement)) {
              const t = m(e.currentTarget, '.js-file');
              return void (t.getBoundingClientRect().top < 0 && Hr(t));
            }
            const { currentTarget: t } = e,
              n = m(t, '.js-details-container');
            n.addEventListener(
              'details:toggled',
              function(e) {
                h(
                  e instanceof CustomEvent,
                  'app/assets/modules/github/pulls/file-collapsing.js:30',
                );
                const { open: t } = e.detail;
                oe(n, () => {
                  for (const e of document.querySelectorAll('.js-file.js-details-container'))
                    e !== n &&
                      (e.classList.toggle('open', t), e.classList.toggle('Details--on', t));
                }),
                  (function(e) {
                    if (!document.querySelector('.js-file-filter')) return;
                    Jr(e);
                    const t = Or();
                    t && (t.checked = !e), Nr(Ur());
                  })(t);
              },
              { once: !0 },
            );
          }),
          ce(() => {
            const e = window.location.hash.slice(1);
            if (!e) return;
            const t = document.getElementsByName(e)[0];
            if (!t) return;
            const n = t.nextElementSibling;
            n &&
              n.matches('.js-file.js-details-container') &&
              (n.classList.add('open'), n.classList.add('Details--on'));
          }),
          i('.js-file-header-dropdown', {
            subscribe: e =>
              q(e, 'toggle', function({ currentTarget: e }) {
                h(
                  e instanceof HTMLElement,
                  'app/assets/modules/github/pulls/file-collapsing.js:66',
                );
                const t = e,
                  n = t.hasAttribute('open'),
                  s = m(t, '.js-file-header');
                h(
                  s instanceof HTMLElement,
                  'app/assets/modules/github/pulls/file-collapsing.js:70',
                ),
                  s.classList.toggle('has-open-dropdown', n);
              }),
          }),
          u('click', '.js-fork-cleanup-select-item', function({ currentTarget: e }) {
            const t = m(e, '.js-fork-cleanup-select-menu');
            for (const o of f(t, '.js-fork-cleanup-select-item')) o.classList.remove('selected');
            e.classList.add('selected');
            const n = m(t, '.js-fork-cleanup-button-group'),
              s = e.getAttribute('data-toggles-button');
            'branch' === s
              ? (g(n, '.js-fork-cleanup-branch-button').classList.remove('d-none'),
                g(n, '.js-fork-cleanup-fork-button').classList.add('d-none'))
              : 'fork' === s &&
                (g(n, '.js-fork-cleanup-branch-button').classList.add('d-none'),
                g(n, '.js-fork-cleanup-fork-button').classList.remove('d-none'));
          }),
          u('details:toggled', '.js-pull-merging', function({ currentTarget: e }) {
            const t = f(e, '.js-merge-pull-request'),
              n = t.some(G);
            for (const s of t) s.classList.toggle('is-dirty', n);
          }),
          u('click', '.js-merge-box-try-again', async function({ currentTarget: e }) {
            const t = g(m(e, '.js-pull-merging'), '.js-tryable-again', HTMLFormElement);
            L(t, 'submit');
          }),
          document.addEventListener('session:resume', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/pulls/merge.js:33');
            const t = document.getElementById(e.detail.targetId);
            if (t) {
              const e = t.closest('.js-merge-pull-request');
              if (e) {
                const t = e.closest('.js-details-container');
                t && t.classList.add('open');
              }
            }
          }),
          u('change', '.js-merge-button-toggle', function({ currentTarget: e }) {
            h(e instanceof HTMLInputElement, 'app/assets/modules/github/pulls/merge.js:45');
            const t = m(e, '.js-merge-pr'),
              n = !e.checked;
            for (const s of f(t, '.js-merge-commit-button', HTMLButtonElement)) s.disabled = n;
          }),
          u(
            'details-menu-selected',
            '.js-merge-method-menu',
            function(e) {
              h(e instanceof CustomEvent, 'app/assets/modules/github/pulls/merge.js:56');
              const t = e.detail.relatedTarget,
                n = m(t, '.js-merge-pr'),
                s = g(n, '.js-merge-method-menu-button'),
                o = s.getAttribute('data-merge-button-class');
              o && s.classList.toggle(o, !t.hasAttribute('data-unsafe-rebase'));
              const i = g(n, '.js-merge-title', HTMLInputElement),
                r = g(n, '.js-merge-message', HTMLTextAreaElement);
              i.defaultValue === i.value &&
                (i.defaultValue = i.value = p(t, 'data-input-title-value'));
              r.defaultValue === r.value &&
                (r.defaultValue = r.value = p(t, 'data-input-message-value'));
              n.classList.toggle('is-merging', 'merge' === t.value),
                n.classList.toggle('is-squashing', 'squash' === t.value),
                n.classList.toggle('is-rebasing', 'rebase' === t.value);
              const a = f(n, '.js-merge-pull-request .js-merge-commit-button', HTMLButtonElement);
              for (const d of a) d.type = t.value === d.value ? 'submit' : 'button';
              const c = m(n, '.js-pull-merging'),
                l = new URL(p(c, 'data-url'), window.location.origin),
                u = new URLSearchParams(l.search);
              u.set('merge_type', t.value),
                (l.search = u.toString()),
                c.setAttribute('data-url', l.toString());
            },
            { capture: !0 },
          ),
          u('details:toggled', '.js-merge-pr', function(e) {
            const t = e.currentTarget.querySelector('.js-merge-message');
            t && L(t, 'change');
          }),
          i('.branch-action-item.js-details-container.open', {
            add(e) {
              for (const t of e.querySelectorAll('.js-merge-review-section'))
                t.setAttribute('open', '');
            },
            remove(e) {
              for (const t of e.querySelectorAll('.js-merge-review-section'))
                t.removeAttribute('open');
            },
          }),
          u(
            'toggle',
            '.js-details-container .js-merge-review-section',
            function({ currentTarget: e }) {
              const t = m(e, '.js-details-container'),
                n = t.querySelectorAll('.js-merge-review-section').length,
                s = t.querySelectorAll('.js-merge-review-section[open]').length,
                o = s === n;
              0 === s ? Le(t, !1) : o && Le(t, !0);
            },
            { capture: !0 },
          );
        let Nd = !1;
        document.addEventListener('keydown', function(e) {
          'Alt' === e.key && (Nd = !0);
        }),
          document.addEventListener('keyup', function(e) {
            'Alt' === e.key && (Nd = !1);
          }),
          u('click', '.js-toggle-outdated-comments', function(e) {
            if (
              !(
                ((e instanceof MouseEvent && e.altKey) || Nd) &&
                e.currentTarget instanceof HTMLElement
              )
            )
              return;
            const t = e.currentTarget,
              n = m(t, 'details');
            function s() {
              const e = n.hasAttribute('open');
              for (const n of document.querySelectorAll('.js-toggle-outdated-comments'))
                if (n !== t) {
                  m(n, 'details').toggleAttribute('open', e);
                }
            }
            setTimeout(() => {
              oe(t, s);
            });
          });
        const Bd = 1e4,
          Pd = {};
        function Fd(e) {
          const t = g(e, '.js-presence-users'),
            n = document.createElement('span');
          n.classList.add('js-presence-users'), n.classList.add('float-left');
          for (const s in Pd) {
            const e = document.createElement('img');
            (e.alt = s),
              e.classList.add('avatar'),
              e.classList.add('participant-avatar'),
              (e.height = 26),
              (e.width = 26),
              (e.src = `/${s}.png`),
              n.append(e);
          }
          t.replaceWith(n);
        }
        let Od, Wd;
        function Ud() {
          const e = document.querySelectorAll('.pull-request-ref-restore');
          for (let t = 0; t < e.length; t++) e[t].classList.toggle('last', t === e.length - 1);
        }
        function zd() {
          const e = null != document.querySelector('#js-pull-restorable'),
            t = document.querySelector('.js-pull-discussion-timeline');
          t && t.classList.toggle('is-pull-restorable', e);
        }
        function Vd() {
          const e = document.querySelector('.js-reviews-container');
          e &&
            setTimeout(() =>
              (function(e) {
                const t = m(e, '.js-review-state-classes'),
                  n = t.querySelectorAll('.js-pending-review-comment').length,
                  s = g(document, '.js-review-changes');
                t.classList.toggle('is-review-pending', n > 0);
                for (const o of document.querySelectorAll('.js-pending-review-comment-count'))
                  o.textContent = String(n);
                for (const o of document.querySelectorAll('.js-pending-comment-count-type'))
                  Te(n, o);
                if (n > 0) {
                  s.textContent = s.getAttribute('data-pending-message') || '';
                  const t = g(e, '.js-reviews-toggle');
                  t.classList.add('anim-pulse-in'),
                    t.addEventListener('animationend', () => t.classList.remove('anim-pulse-in'), {
                      once: !0,
                    });
                } else s.textContent = s.getAttribute('data-message') || '';
              })(e),
            );
        }
        function Kd(e) {
          const t = e.getAttribute('ratio');
          return h(t, 'app/assets/modules/github/pulls/reviews.js:127'), t.split('/');
        }
        function Yd(e) {
          if (e) {
            const [t, n] = Kd(e),
              s = parseInt(t) / parseInt(n),
              o = e.querySelector('.js-review-progress'),
              i = e.querySelector('.js-review-count');
            o && i && ((o.style.width = `${100 * s}%`), (i.textContent = `${t} / ${n}`));
          }
        }
        u('socket:message', '.js-pr-presence', function(e) {
          h(e instanceof CustomEvent, 'app/assets/modules/github/pulls/presence.js:64');
          const t = e.detail.data.who;
          h(t, 'app/assets/modules/github/pulls/presence.js:66');
          const n = e.target,
            s = n.getAttribute('data-me');
          h(null !== s, 'app/assets/modules/github/pulls/presence.js:73');
          const o = n.hasAttribute('data-collab');
          if (t !== s && e.detail.data.broadcast && o) {
            const e = g(n, '.js-presence-reply-form');
            (g(e, '.js-reply-to').value = t), L(e, 'submit');
          }
          s !== t && ((Pd[t] = e.detail.data.timestamp), Pd[t] || Fd(n));
        }),
          i('.js-pr-presence', {
            add(e) {
              Od = setInterval(function() {
                !(function(e) {
                  const t = new Date();
                  for (const n in Pd) {
                    const e = Pd[n];
                    t - new Date(1e3 * e) > Bd && delete Pd[n];
                  }
                  Fd(e);
                })(e);
              }, 5e3);
            },
            remove() {
              clearInterval(Od);
              for (const e in Pd) delete Pd[e];
            },
          }),
          i('.js-presence-announce-form', {
            add(e) {
              L(e, 'submit'),
                (Wd = setInterval(function() {
                  L(e, 'submit');
                }, 5e3));
            },
            remove() {
              clearInterval(Wd);
            },
          }),
          i('.pull-request-ref-restore', { add: Ud, remove: Ud }),
          i('#js-pull-restorable', { add: zd, remove: zd }),
          v('.js-inline-comment-form', async function(e, t) {
            await t.text(), Vd();
          }),
          v('.js-pending-review-comment .js-comment-delete', async function(e, t) {
            await t.text(), Vd();
          }),
          v('.js-resolvable-timeline-thread-form', async function(e, t) {
            try {
              const s = await t.html();
              m(e, '.js-resolvable-timeline-thread-container').replaceWith(s.html);
            } catch (n) {
              Z();
            }
          }),
          u('click', '.js-resolvable-thread-toggler', function(e) {
            const t = m(e.target, '.js-resolvable-timeline-thread-container');
            m(e.target, '.js-resolvable-thread-toggler-container').classList.toggle(
              'border-bottom',
            ),
              g(t, '.js-resolvable-thread-contents').classList.toggle('d-none');
            for (const n of t.querySelectorAll('.js-resolvable-thread-toggler'))
              n.classList.toggle('d-none');
          }),
          v('.js-toggle-user-reviewed-file-form', async function(e, t) {
            const n = m(e, '.js-details-container'),
              s = !!n.querySelector('.js-reviewed-file'),
              o = n.classList.contains('open'),
              i = n.querySelector('.js-file-header'),
              r = !!i && 60 === i.getBoundingClientRect().top;
            ((!s && o) || (s && !o)) && (Le(n), r && Hr(n));
            const a = g(e, '.js-reviewed-toggle');
            s
              ? (a.classList.remove('bg-blue-2', 'border-blue-light'),
                a.classList.add('text-gray', 'border-gray-dark'))
              : (a.classList.remove('text-gray', 'border-gray-dark'),
                a.classList.add('bg-blue-2', 'border-blue-light')),
              (g(a, '.js-reviewed-checkbox', HTMLInputElement).disabled = !0);
            const c = document.querySelector('progress-bar');
            c instanceof ProgressBarElement && (s ? c.decrement() : c.increment());
            const l = await t.html(),
              u = e.closest('.js-replace-file-header-review');
            u &&
              (u.replaceWith(l.html),
              n.hasAttribute('data-file-user-viewed')
                ? n.removeAttribute('data-file-user-viewed')
                : n.setAttribute('data-file-user-viewed', 'true'));
          });
        class ProgressBarElement extends HTMLElement {
          static get observedAttributes() {
            return ['ratio'];
          }
          attributeChangedCallback(e) {
            'ratio' === e && Yd(this);
          }
          connectedCallback() {
            Yd(this);
          }
          increment() {
            const [e, t] = Kd(this),
              n = Math.min(parseInt(e) + 1, parseInt(t));
            this.setAttribute('ratio', `${n}/${t}`);
          }
          decrement() {
            const [e, t] = Kd(this),
              n = Math.min(parseInt(e) - 1, parseInt(t));
            this.setAttribute('ratio', `${n}/${t}`);
          }
        }
        window.customElements.get('progress-bar') ||
          ((window.ProgressBarElement = ProgressBarElement),
          window.customElements.define('progress-bar', ProgressBarElement)),
          document.addEventListener('pjax:end', function() {
            for (const e of document.querySelectorAll('.js-pull-refresh-on-pjax'))
              L(e, 'socket:message', {});
          }),
          i('.js-updating-pull-request-commits-count', {
            add(e) {
              const t = e.textContent,
                n = f(document, '.js-updateable-pull-request-commits-count');
              for (const s of n) s.textContent = t;
            },
          }),
          (async () => {
            if (
              (await z,
              window.performance &&
                window.performance.navigation &&
                window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD)
            ) {
              const e = document.getElementById('js-report-pull-request-refresh');
              e && je(e);
            }
          })();
        const Xd = '```suggestion',
          Jd = '```',
          Gd = new RegExp(`${Xd}(?:.*)\n`, 'i'),
          Qd = new RegExp(`${Jd}(\n|$)`);
        function Zd(e, t) {
          const n = e.slice(0, t).split('\n');
          return e.split('\n')[n.length - 1];
        }
        function em(e) {
          const t = /^(\s+)/.exec(e);
          return (t && t[0]) || '';
        }
        function tm(e, t, n = 0) {
          const s = t.substring(n, t.length),
            o = e.exec(s);
          return o ? o.index + n : -1;
        }
        function nm(e, t) {
          const n = [];
          let s = 0,
            o = -1;
          for (; (o = tm(Gd, e, s)) > -1; ) {
            s = o + Xd.length;
            const t = tm(Qd, e, s);
            if (-1 === t) return !1;
            (s = t + Jd.length), n.push([o, t]);
          }
          return n.some(e => t > e[0] && t < e[1]);
        }
        function sm(e, t) {
          const n = (function(e) {
              let t = `${Xd}\n`;
              return (t += `${e}\n`), (t += Jd);
            })(e),
            s = t.selectionStart,
            o = t.value,
            i = tm(/\n/, o, s),
            r = '' === o.trim(),
            a = Zd(o, s),
            c = '' === a.trim(),
            l = `\n${Jd}`.length;
          let u = o,
            d = 0;
          if (r) d = (u = n).length - l;
          else if (-1 === i) d = c ? (u = o + n).length - l : (u = [o, n].join('\n')).length - l;
          else if (c) {
            const e = s - em(a).length,
              t = o.substring(0, e),
              r = o.substring(i, o.length);
            d = (u = [t, n, r].join('')).length - r.length - l;
          } else if (nm(o, s)) {
            const e = tm(/```/, o, s) + 3,
              t = o.substring(0, e),
              i = o.substring(e, o.length);
            d = (u = [t, '\n', n, i].join('')).length - i.length - l;
          } else {
            const e = o.substring(0, i),
              t = o.substring(i, o.length);
            d = (u = [e, '\n', n, t].join('')).length - t.length - l;
          }
          _(t, u), t.focus(), t.setSelectionRange(d, d);
        }
        const om = '.js-add-to-batch-enabled',
          im = '.js-unchanged-suggestion',
          rm = '.js-closed-pull',
          am = '.js-viewing-subset-changes',
          cm = '.js-validation-on-left-blob',
          lm = '.js-validation-on-right-blob',
          um = '.js-outdated-comment',
          dm = '.js-resolved-thread',
          mm = '.js-pending-review';
        function fm(e) {
          const t = (function(e) {
            const t = e.closest('.js-inline-comments-container');
            if (!t) return;
            const n = e.closest('.js-line-comments.line-comments');
            let s = null;
            n && (s = n.classList.contains('js-addition') ? 'right' : 'left');
            const o = t.previousElementSibling;
            h(o, 'app/assets/modules/github/pulls/suggested-changes.js:44');
            let i = [];
            if ('TR' === o.tagName) i = Array.from(o.children);
            else {
              const e = o.querySelectorAll('tr'),
                t = Array.from(e).pop();
              i = Array.from(t.children);
            }
            const r = i.filter(e => {
                const t = e.classList;
                return (
                  !t.contains('blob-code-marker-cell') &&
                  (t.contains('code-review') || t.contains('blob-code'))
                );
              }),
              a = 'right' === s ? r.pop() : r.shift();
            if (a) return g(a, '.blob-code-inner').textContent;
          })(e);
          if (null != t) {
            const n = m(e, '.js-suggested-changes-container');
            sm(t, g(n, '.js-comment-field', HTMLTextAreaElement));
          }
        }
        function pm(e, t) {
          const n = document.querySelectorAll('.js-apply-suggestion-button'),
            s = g(e, '.js-disabled-apply-suggestion-button');
          for (const o of n) {
            const e = s.cloneNode(!0);
            hm(e, t), m(o, 'details').replaceWith(e);
          }
        }
        function gm(e) {
          const t = document.querySelector('.js-batched-suggested-changes-container');
          t && t.classList.add('d-none');
          for (const n of f(document, '.js-apply-single-suggestion', HTMLInputElement))
            n.classList.remove('d-none'), (n.disabled = !0), n.setAttribute('aria-label', e);
          for (const n of f(document, '.js-batched-suggested-changes-add', HTMLInputElement))
            n.classList.remove('d-none'), (n.disabled = !0), n.setAttribute('aria-label', e);
          for (const n of document.querySelectorAll('.js-batched-suggested-changes-remove'))
            n.classList.add('d-none');
          for (const n of document.querySelectorAll('.js-focus-commit-suggestions-form-button'))
            n.classList.add('d-none');
          for (const n of document.querySelectorAll('.pending-batched-suggestion-label'))
            n.classList.add('d-none');
        }
        function hm(e, t) {
          e.setAttribute('aria-label', t), e.classList.remove('d-none');
        }
        function bm(e, t) {
          const n = g(document, '.js-suggested-changes-inline-validation-template').cloneNode(!0);
          n.classList.remove('js-suggested-changes-inline-validation-template'),
            (g(n, '.js-suggested-changes-inline-error-message').textContent = e.trim());
          const s = t.parentNode;
          h(s, 'app/assets/modules/github/pulls/suggested-changes.js:135'),
            s.insertBefore(n, t.nextSibling);
        }
        function vm() {
          const e = document.querySelector('.js-batched-suggested-changes-container');
          e &&
            setTimeout(() =>
              (function(e) {
                const t = m(e, '.js-review-state-classes').querySelectorAll(
                  '[data-pending-batched-suggestion]',
                ).length;
                for (const s of document.querySelectorAll(
                  '.js-pending-batched-suggested-changes-count',
                ))
                  s.textContent = String(t);
                const n = g(document, '.js-reenable-add-to-batch').textContent;
                for (const s of document.querySelectorAll(
                  '[data-batched-suggestion-reenable-sibling]',
                ))
                  s.removeAttribute('data-batched-suggestion-reenable-sibling'),
                    s.removeAttribute('disabled'),
                    s.setAttribute('aria-label', n);
                if (t > 0) {
                  e.hidden = !1;
                  const t = g(e, '.js-batched-suggested-changes-toggle');
                  t.classList.add('anim-pulse-in'),
                    t.addEventListener('animationend', () => t.classList.remove('anim-pulse-in'), {
                      once: !0,
                    });
                  for (const e of document.querySelectorAll('.js-apply-single-suggestion'))
                    e.classList.add('d-none');
                  for (const e of document.querySelectorAll('.js-batched-suggested-changes-add')) {
                    const t = m(e, '.js-suggested-change-form-container');
                    if (
                      ('true' === t.getAttribute('data-pending-batched-suggestion') ||
                      'true' === t.getAttribute('data-comment-pending') ||
                      'true' === t.getAttribute('data-outdated-comment')
                        ? e.classList.add('d-none')
                        : e.classList.remove('d-none'),
                      'true' === e.getAttribute('data-batched-suggestion-disabled-by-sibling'))
                    ) {
                      e.removeAttribute('data-batched-suggestion-disabled-by-sibling'),
                        e.setAttribute('disabled', 'disabled');
                      const t = g(document, '.js-one-suggestion-per-line').textContent;
                      e.setAttribute('aria-label', t);
                    }
                  }
                  for (const e of document.querySelectorAll('.js-batched-suggested-changes-remove'))
                    'true' ===
                    m(e, '.js-suggested-change-form-container').getAttribute(
                      'data-pending-batched-suggestion',
                    )
                      ? e.classList.remove('d-none')
                      : e.classList.add('d-none');
                  for (const e of document.querySelectorAll(
                    '.js-focus-commit-suggestions-form-button',
                  )) {
                    const t = m(e, '.js-suggested-change-form-container'),
                      n = 'true' === t.getAttribute('data-comment-pending'),
                      s = 'true' === t.getAttribute('data-outdated-comment'),
                      o = 'true' === t.getAttribute('data-resolved-comment'),
                      i = m(e, '.js-inline-comments-container'),
                      r = 'left' === g(i, 'input[name="side"]', HTMLInputElement).value;
                    n || s || o || r ? e.classList.add('d-none') : e.classList.remove('d-none');
                  }
                  for (const e of document.querySelectorAll('.pending-batched-suggestion-label'))
                    'true' ===
                    m(e, '.js-suggested-change-form-container').getAttribute(
                      'data-pending-batched-suggestion',
                    )
                      ? e.classList.remove('d-none')
                      : e.classList.add('d-none');
                } else {
                  e.hidden = !0;
                  for (const e of document.querySelectorAll('.js-apply-single-suggestion'))
                    e.classList.remove('d-none');
                  for (const e of document.querySelectorAll('.js-batched-suggested-changes-add'))
                    e.classList.remove('d-none');
                  for (const e of document.querySelectorAll('.js-batched-suggested-changes-remove'))
                    e.classList.add('d-none');
                  for (const e of document.querySelectorAll(
                    '.js-focus-commit-suggestions-form-button',
                  ))
                    e.classList.add('d-none');
                  for (const e of document.querySelectorAll('.pending-batched-suggestion-label'))
                    e.classList.add('d-none');
                }
              })(e),
            );
        }
        function jm(e, t) {
          const n = g(e, 'input[name=commit_title]', HTMLInputElement),
            s = g(e, 'textarea[name=commit_message]', HTMLTextAreaElement);
          let o = n.value.trim();
          '' === o && (o = n.defaultValue);
          const i = s.value.trim();
          '' !== i && (o = `${o}\n\n${i}\n`), (n.disabled = !0), (s.disabled = !0);
          const r = document.createElement('input');
          r.setAttribute('type', 'hidden'),
            r.setAttribute('name', 'message'),
            (r.value = o),
            e.appendChild(r);
          const a = document.createElement('input');
          a.setAttribute('type', 'hidden'),
            a.setAttribute('name', 'changes'),
            (a.value = JSON.stringify(t)),
            e.appendChild(a);
        }
        function ym(e) {
          const t = e.target;
          h(t instanceof HTMLElement, 'app/assets/modules/github/reactions.js:32');
          const n = p(t, 'data-reaction-label'),
            s = m(t, '.js-add-reaction-popover'),
            o = g(s, '.js-reaction-description');
          o.hasAttribute('data-default-text') || o.setAttribute('data-default-text', o.textContent),
            (o.textContent = n);
        }
        function Lm(e) {
          h(e.target instanceof HTMLElement, 'app/assets/modules/github/reactions.js:46');
          const t = m(e.target, '.js-add-reaction-popover'),
            n = g(t, '.js-reaction-description'),
            s = n.getAttribute('data-default-text');
          s && (n.textContent = s);
        }
        u('click', '.js-suggested-change-toolbar-item', function(e) {
          const t = e.currentTarget;
          t instanceof HTMLButtonElement && !t.disabled && fm(t);
        }),
          u('click', '.js-refresh-after-suggestion', function() {
            window.location.reload();
          }),
          i('.js-inline-comments-container', {
            add(e) {
              const t = e.querySelector('input[name="side"]'),
                n = document.querySelector('.js-suggested-changes-subset-files'),
                s = t instanceof HTMLInputElement && 'left' === t.value;
              if (!n && !s) return;
              const o = f(e, '.js-suggested-change-toolbar-item', HTMLButtonElement),
                i = g(document, n ? am : cm).textContent.trim();
              for (const r of o) (r.disabled = !0), r.setAttribute('aria-label', i);
            },
          }),
          i('.js-preview-body .js-apply-changes', {
            add(e) {
              const t = e.closest('.js-suggested-changes-container');
              if (!t) return e.remove();
              const n = g(document, lm).textContent,
                s = g(document, cm).textContent,
                o = m(e, '.js-suggested-changes-blob');
              if ('' !== t.getAttribute('data-thread-side')) {
                if ('left' === t.getAttribute('data-thread-side')) return bm(s, o), e.remove();
              } else {
                const t = m(e, '.js-inline-comment-form'),
                  n = g(t, 'input[name="side"]', HTMLInputElement);
                if (!t || !n) return e.remove();
                if (t && 'left' === n.value) return bm(s, o), e.remove();
              }
              const i = e.previousElementSibling;
              h(i, 'app/assets/modules/github/pulls/suggested-changes.js:202');
              const r = i.querySelector('.js-blob-code-deletion'),
                a = i.querySelectorAll('.js-blob-code-addition');
              return r && 0 !== a.length
                ? r.textContent ===
                  Array.from(a)
                    .map(e => e.textContent)
                    .join('\n')
                  ? (bm(n, o), e.remove())
                  : void e.remove()
                : void 0;
            },
          }),
          i('.js-comment-body .js-apply-changes', {
            add(e) {
              const t = e.closest('.js-suggested-changes-container');
              if (!t) return e.remove();
              const n = t.querySelector('.js-suggested-changes-template');
              if (!(n instanceof HTMLTemplateElement)) return e.remove();
              const s = n.content.cloneNode(!0),
                o = g(s, '.js-disabled-apply-suggestion-button');
              let i;
              try {
                i = g(s, '.js-batched-suggested-changes-add');
              } catch (v) {
                if ('QueryError' !== v.name) throw v;
              }
              if (f(document, '.js-suggested-changes-files-tab').length) {
                const e = g(document, om).textContent;
                i && (i.removeAttribute('disabled'), i.setAttribute('aria-label', e));
              }
              const r = g(document, '.js-pull-header-details'),
                a = r && 'true' === r.getAttribute('data-pull-is-open'),
                c = e.closest('.js-resolvable-timeline-thread-container'),
                l = 'true' === n.getAttribute('data-comment-pending');
              if (c && 'true' === c.getAttribute('data-resolved')) {
                const t = g(document, dm).textContent,
                  n = s.querySelector('details');
                return (
                  n && n.remove(),
                  hm(o, t),
                  i && (i.setAttribute('disabled', 'disabled'), i.setAttribute('aria-label', t)),
                  e.replaceWith(s)
                );
              }
              if (!a) {
                const t = g(document, rm).textContent;
                return (
                  hm(o, t),
                  i && (i.setAttribute('disabled', 'disabled'), i.setAttribute('aria-label', t)),
                  e.replaceWith(s)
                );
              }
              if (l) {
                const t = g(document, mm).textContent;
                return (
                  g(s, 'details').remove(),
                  hm(o, t),
                  i && (i.setAttribute('disabled', 'disabled'), i.setAttribute('aria-label', t)),
                  e.replaceWith(s)
                );
              }
              const u =
                  'left' ===
                  m(e, '.js-suggested-changes-contents').getAttribute('data-thread-side'),
                d = document.querySelector('.js-suggested-changes-subset-files'),
                p = 'true' === n.getAttribute('data-outdated-comment');
              if (u || d || p) {
                let t;
                return (
                  d
                    ? (t = g(document, am).textContent)
                    : u
                    ? (t = g(document, cm).textContent)
                    : p && (t = g(document, um).textContent),
                  g(s, 'details').remove(),
                  hm(o, t),
                  i && (i.setAttribute('disabled', 'disabled'), i.setAttribute('aria-label', t)),
                  e.replaceWith(s)
                );
              }
              const h = g(s, '.js-single-suggested-change-form'),
                b = e.closest('.js-suggested-changes-blob');
              if (b) {
                const e = b.querySelector('.js-blob-code-deletion'),
                  t = b.querySelectorAll('.js-blob-code-addition');
                if (!e) return;
                const n = e.textContent,
                  r = Array.from(t).map(e => e.textContent);
                if (r.length > 0 && n === r.join('\n')) {
                  const e = g(document, im).textContent;
                  g(s, 'details').remove(),
                    hm(o, e),
                    i && (i.setAttribute('disabled', 'disabled'), i.setAttribute('aria-label', e));
                } else
                  for (const s of r) {
                    const e = document.createElement('input');
                    e.setAttribute('type', 'hidden'),
                      e.setAttribute('name', 'value[]'),
                      (e.value = s),
                      h.appendChild(e);
                  }
              }
              e.replaceWith(s);
            },
          }),
          i('.js-pull-header-details', {
            add(e) {
              const t = 'true' === e.getAttribute('data-pull-is-open'),
                n = document.querySelector('.js-suggested-changes-template');
              if (t || !(n instanceof HTMLTemplateElement)) return;
              const s = n.content,
                o = g(document, rm).textContent;
              pm(s, o), gm(o);
            },
          }),
          i('.js-suggested-changes-subset-files', {
            add() {
              const e = document.querySelector('.js-suggested-changes-template');
              if (!(e instanceof HTMLTemplateElement)) return;
              const t = e.content,
                n = g(document, am).textContent;
              pm(t, n), gm(n);
            },
          }),
          u('click', '.js-apply-suggestion-button', async function(e) {
            const t = e.currentTarget.parentElement;
            if (t) {
              const e = g(t, '.js-suggestion-commit-title');
              setTimeout(() => e.focus(), 1);
            }
          }),
          u('click', '.js-dismiss-suggested-change-onboarding-notice', async function(e) {
            const t = p(e.currentTarget, 'data-url'),
              n = new FormData();
            n.append('notice', 'suggested_changes_onboarding_prompt'),
              await A(Me(t, { method: 'post', body: n }));
            const s = document.querySelectorAll('.js-suggested-change-onboarding-notice');
            for (const o of s) o.remove();
          }),
          N('keypress', '.js-comment-field', function(e) {
            if ('Enter' === e.key) {
              const t = e.target;
              h(
                t instanceof HTMLTextAreaElement,
                'app/assets/modules/github/pulls/suggested-changes.js:426',
              ),
                (function(e) {
                  const t = e.selectionStart;
                  if (!nm(e.value, t)) return !1;
                  const n = e.value,
                    s = Zd(n, t);
                  if (null === s) return !1;
                  const o = `\n${em(s)}`,
                    i = n.substr(0, t) + o + n.substr(t);
                  _(e, i);
                  const r = t + o.length;
                  return e.setSelectionRange(r, r), !0;
                })(t) && e.preventDefault();
            }
          }),
          N('keypress', '.js-suggestion-commit-message', function(e) {
            const t = e.currentTarget;
            h(
              t instanceof HTMLTextAreaElement,
              'app/assets/modules/github/pulls/suggested-changes.js:435',
            ),
              'Enter' === e.key && t.setAttribute('rows', '3');
          }),
          u('click', '.js-batched-suggested-changes-add', function(e) {
            const t = m(e.target, '.js-suggested-change-form-container');
            if (
              'true' === t.getAttribute('data-comment-pending') ||
              'true' === t.getAttribute('data-outdated-comment') ||
              'true' === e.target.getAttribute('data-batched-suggestion-disabled-by-sibling')
            )
              return;
            t.setAttribute('data-pending-batched-suggestion', 'true');
            const n = m(e.target, '.js-inline-comments-container');
            for (const s of n.querySelectorAll('.js-batched-suggested-changes-add'))
              s.setAttribute('data-batched-suggestion-disabled-by-sibling', 'true');
            e.target.removeAttribute('data-batched-suggestion-disabled-by-sibling'), vm();
          }),
          u('click', '.js-batched-suggested-changes-remove', function(e) {
            m(e.currentTarget, '.js-suggested-change-form-container').removeAttribute(
              'data-pending-batched-suggestion',
            );
            const t = m(e.currentTarget, '.js-inline-comments-container');
            for (const n of t.querySelectorAll('.js-batched-suggested-changes-add'))
              n.setAttribute('data-batched-suggestion-reenable-sibling', 'true');
            vm();
          }),
          u('click', '.js-focus-commit-suggestions-form-button', function(e) {
            e.preventDefault(),
              (window.location = '#clear-commit-suggestions'),
              (window.location = '#commit-suggestions');
          }),
          u('click', '.js-dismiss-batched-suggested-changes-onboarding-notice', async function(e) {
            const t = p(e.currentTarget, 'data-url'),
              n = new FormData();
            n.append('notice', 'batched_suggested_changes_onboarding_prompt'),
              await A(Me(t, { method: 'post', body: n }));
            for (const s of document.querySelectorAll(
              '.js-batched-suggested-change-onboarding-notice',
            ))
              s.remove();
          }),
          u('click', '.js-single-suggested-change-form .js-suggested-changes-submit', function(e) {
            try {
              const t = e.currentTarget,
                n = m(t, '.js-single-suggested-change-form', HTMLFormElement),
                s = f(n, 'input[name="value[]"]', HTMLInputElement).map(e => e.value);
              jm(n, [
                {
                  commentId: g(n, 'input[name=comment_id]', HTMLInputElement).value,
                  path: g(n, 'input[name=path]', HTMLInputElement).value,
                  suggestion: s,
                },
              ]);
            } catch (Rh) {
              dt(Rh);
            }
          }),
          v('.js-single-suggested-change-form', async function(e, t) {
            const n = m(e, '.js-suggested-change-form-container'),
              s = m(e, 'details'),
              o = g(n, '.js-suggestion-applied'),
              i = m(e, '.js-suggested-changes-contents'),
              r = g(i, '.js-error-message-placeholder');
            try {
              await t.json(),
                o.classList.remove('d-none'),
                g(n, '.js-batched-suggested-changes-add').classList.add('d-none'),
                s.remove(),
                window.location.reload();
            } catch (a) {
              if ('QueryError' !== a.name) {
                const t = a.response.json && a.response.json.error,
                  o = g(r, '.js-error-message');
                (r.hidden = !1), (o.textContent = t), n.prepend(r);
                const i = m(e, '.js-suggested-change-form-container');
                g(i, '.js-batched-suggested-changes-add').classList.add('d-none'), s.remove();
              }
            }
          }),
          u('click', '.js-suggestion-batch-submit', function(e) {
            const t = m(e.currentTarget, '.js-batched-suggested-changes-form', HTMLFormElement),
              n = [];
            try {
              for (const e of document.querySelectorAll('[data-pending-batched-suggestion]')) {
                const t = g(e, '.js-single-suggested-change-form', HTMLFormElement),
                  s = f(t, 'input[name="value[]"]', HTMLInputElement).map(e => e.value);
                n.push({
                  commentId: g(t, 'input[name=comment_id]', HTMLInputElement).value,
                  path: g(t, 'input[name=path]', HTMLInputElement).value,
                  suggestion: s,
                });
              }
              jm(t, n);
            } catch (Rh) {
              dt(Rh);
            }
          }),
          v('.js-batched-suggested-changes-form', async function(e, t) {
            try {
              await t.json(),
                (m(e, '.js-batched-suggested-changes-container', HTMLElement).hidden = !0),
                window.location.reload();
            } catch (n) {
              const t = n.response.json && n.response.json.error,
                s = m(e, '.js-batched-suggested-changes-container'),
                o = g(s, '.js-error-message-container');
              (g(o, '.js-error-message').textContent = t), (o.hidden = !1);
            }
          }),
          i('.js-files-tab-stale', {
            add() {
              const e = document.querySelector('.js-batched-suggested-changes-container');
              e &&
                setTimeout(() => {
                  e.hidden = !0;
                });
            },
          }),
          v('.js-pick-reaction', async function(e, t) {
            const n = await t.json(),
              s = e.closest('.js-menu-container');
            s instanceof HTMLElement && Ke(s);
            const o = m(e, '.js-comment'),
              i = g(o, '.js-reactions-container'),
              r = g(o, '.js-comment-header-reaction-button'),
              a = xe(document, n.json.reactions_container.trim()),
              c = xe(document, n.json.comment_header_reaction_button.trim());
            i.replaceWith(a), r.replaceWith(c), o.classList.remove('is-reacting');
          }),
          u(
            'toggle',
            '.js-reaction-popover-container',
            function(e) {
              const t = e.currentTarget.hasAttribute('open');
              for (const n of e.target.querySelectorAll('.js-reaction-option-item'))
                t
                  ? (n.addEventListener('mouseenter', ym), n.addEventListener('mouseleave', Lm))
                  : (n.removeEventListener('mouseenter', ym),
                    n.removeEventListener('mouseleave', Lm));
              m(e.target, '.js-comment').classList.toggle('is-reacting', t);
            },
            { capture: !0 },
          );
        const wm = { Message: 'render:hook:message', AfterReady: 'render:hook:afterready' };
        function Em(e, t) {
          e && e.postMessage && e.postMessage(JSON.stringify(t), '*');
        }
        function Tm(e) {
          const t = e.querySelector('iframe');
          return t instanceof HTMLIFrameElement ? t.contentWindow : null;
        }
        const km = 'render-editor',
          Mm = 'show-code',
          Am = '.js-render-editor-actions',
          xm = { ACQUIRE: 'actions:lock:acquire', RELEASE: 'actions:lock:release' };
        class Sm {
          constructor(e) {
            (this._initialized = !1), (this._visual = e);
          }
          static init() {
            if (Sm.initialized) throw Error('Invariant: pjax not supported');
            Sm.initialized = !0;
            const e = new Sm({
              send: e =>
                (function(e) {
                  const t = Tm(g(document, '.js-render-target'));
                  h(t, 'app/assets/modules/github/render-editor-utils.js:28'), Em(t, e);
                })({ type: e }),
            });
            u(wm.Message, Am, t => {
              h(t instanceof CustomEvent, 'app/assets/modules/github/actions-editor.js:49'),
                e.handleMessage(t.detail.type);
            }),
              u(wm.AfterReady, Am, () => {
                e.init();
              }),
              u('tab:change', '.js-file-editor-nav', t => {
                h(t instanceof CustomEvent, 'app/assets/modules/github/actions-editor.js:60'),
                  e.tabChange(t.detail.name);
              });
          }
          init() {
            this._initialized || ((this._initialized = !0), this._handToVisual());
          }
          tabChange(e) {
            switch (e) {
              case km:
                return void this._handToVisual();
              case Mm:
                return (
                  this._visual.send(xm.ACQUIRE),
                  void (function() {
                    const e = g(document, '.js-render-editor-lock');
                    setTimeout(() => {
                      e.style.opacity = '1';
                    }, 50);
                  })()
                );
            }
          }
          _handToVisual() {
            Hm(!0), this._visual.send(xm.RELEASE);
          }
          handleMessage(e) {
            switch (e) {
              case xm.RELEASE:
                Hm(!1);
            }
          }
        }
        function Hm(e) {
          const t = g(document, '.js-render-editor-lock');
          (t.hidden = !e), e && (t.style.opacity = '0');
          const n = g(document, '.js-code-editor'),
            s = Ye(n);
          h(s, 'app/assets/modules/github/actions-editor.js:115'),
            s.editor.setOption('readOnly', !!e && 'nocursor');
        }
        (Sm.initialized = !1), i(Am, Sm.init);
        const Cm = 'history:replace',
          qm = /^\/([^\/]+)\/([^\/]+)\/actions(?:\/workflow-runs\/([^\/?]+))?/;
        u(wm.Message, '.js-actions-page', e => {
          switch (
            (h(e instanceof CustomEvent, 'app/assets/modules/github/actions-page.js:37'),
            e.detail.body)
          ) {
            case Cm:
              return void (function(e) {
                const t = new URL(window.location.href, window.location.origin);
                switch (e.page) {
                  case 'actions':
                    !(function(e, t) {
                      x(
                        {},
                        '',
                        (function(e, t) {
                          const { owner: n, name: s } = (function(e) {
                            const t = qm.exec(e);
                            h(
                              null != t,
                              'expected to be on actions page -- app/assets/modules/github/actions-page.js:72',
                            );
                            const [, n, s, o] = t;
                            return { owner: n, name: s, runID: o };
                          })(e);
                          return (function({ name: e, owner: t, runID: n }) {
                            return `/${t}/${e}/actions${n ? `/workflow-runs/${n}` : ''}`;
                          })({ owner: n, name: s, runID: t.urlParams.runID });
                        })(e.pathname, t),
                      );
                    })(t, e);
                    break;
                  default:
                    throw Error(`unknown page history update '${e.page}'`);
                }
              })(e.detail.payload);
          }
        });
        const Im = [
            'is-render-pending',
            'is-render-ready',
            'is-render-loading',
            'is-render-loaded',
          ],
          _m = new WeakMap();
        let $m = !1;
        const Dm = () => {
          $m || (($m = !0), C({ incrementKey: 'LAUNCH_EDITOR_RENDER_SUCCEED' }));
        };
        function Rm(e) {
          if (null == e) return;
          const t = _m.get(e);
          null != t &&
            ((t.load = t.hello = null),
            t.helloTimer && (clearTimeout(t.helloTimer), (t.helloTimer = null)),
            t.loadTimer && (clearTimeout(t.loadTimer), (t.loadTimer = null)));
        }
        function Nm(e, t) {
          if (null != e) {
            if (Pm(e)) {
              let e;
              switch (t) {
                case 'timeout:hello':
                  e = 'LAUNCH_EDITOR_RENDER_TIMEOUT_HELLO';
                  break;
                case 'timeout:load':
                  e = 'LAUNCH_EDITOR_RENDER_TIMEOUT_LOAD';
                  break;
                default:
                  e = 'LAUNCH_EDITOR_RENDER_FAIL';
              }
              C({ incrementKey: e });
            }
            return e.classList.remove(...Im), e.classList.add('is-render-failed'), Rm(e);
          }
        }
        function Bm(
          e,
          t,
          n = function() {
            return !0;
          },
        ) {
          return function() {
            if (
              G(e) &&
              !e.classList.contains('is-render-ready') &&
              !e.classList.contains('is-render-failed') &&
              !e.classList.contains('is-render-failed-fatally') &&
              (!n || n())
            )
              return Nm(e, t);
          };
        }
        function Pm(e) {
          return 'launch_flow_file' === e.getAttribute('data-type');
        }
        i('.js-render-target', {
          constructor: HTMLElement,
          initialize: function(e) {
            const t = _m.get(e);
            (null != t && t.load) ||
              (Rm(e),
              (function(e) {
                if (_m.get(e)) return;
                let t = 10,
                  n = 45;
                Pm(e) && ((t = 15), (n = 50));
                const s = { load: null, hello: null, helloTimer: null, loadTimer: null };
                (s.load = Date.now()),
                  (s.helloTimer = setTimeout(
                    Bm(e, 'timeout:hello', function() {
                      return !s.hello;
                    }),
                    1e3 * t,
                  )),
                  (s.loadTimer = setTimeout(Bm(e, 'timeout:load'), 1e3 * n)),
                  _m.set(e, s);
              })(e),
              e.classList.add('is-render-automatic'),
              e.classList.add('is-render-requested'));
          },
        }),
          window.addEventListener('message', function(e) {
            const t = e.data;
            if (!t) return;
            const n =
              (function(e) {
                if ('string' == typeof e)
                  try {
                    return JSON.parse(e);
                  } catch (t) {
                    return;
                  }
              })(t) || t;
            if ('string' != typeof n.type && 'render' !== n.type) return;
            const s = n.type;
            if ('string' != typeof n.identity) return;
            const o = n.identity;
            if ('string' != typeof n.body) return;
            const i = n.body,
              r = (function(e) {
                return Array.from(document.querySelectorAll('.js-render-target')).filter(
                  t => !e || t.getAttribute('data-identity') === e,
                )[0];
              })(o);
            r &&
              e.origin === r.getAttribute('data-host') &&
              (function(e, t, n, s, o) {
                switch (s) {
                  case 'hello':
                    {
                      const t = _m.get(e) || { untimed: !0 };
                      t.hello = Date.now();
                      const n = { type: 'render:cmd', body: { cmd: 'ack', ack: !0 } },
                        s = { type: 'render:cmd', body: { cmd: 'branding', branding: !1 } },
                        o = Tm(e);
                      if (
                        (Em(o, n),
                        Em(o, s),
                        e.classList.contains('is-local') && o && 'function' == typeof o.postMessage)
                      ) {
                        const t = o,
                          n = e.closest('.js-code-editor'),
                          s = n instanceof HTMLElement ? Ye(n) : null,
                          i = e.getAttribute('data-data');
                        if (s) {
                          let e = null;
                          const n = (n, o) => {
                            if (
                              (function(e) {
                                return e && 'setValue' === e.origin;
                              })(o)
                            )
                              return;
                            const i = s.code();
                            i !== e && ((e = i), Em(t, { type: 'render:data', body: i }));
                          };
                          s.editor.on('change', n), n();
                        } else i && Em(t, { type: 'render:data', body: i });
                      }
                    }
                    break;
                  case 'error':
                    return Nm(e, s);
                  case 'error:fatal':
                    return Nm(e, s), e.classList.add('is-render-failed-fatal');
                  case 'error:invalid':
                    return Nm(e, s), e.classList.add('is-render-failed-invalid');
                  case 'loading':
                    return e.classList.remove(...Im), e.classList.add('is-render-loading');
                  case 'loaded':
                    return e.classList.remove(...Im), e.classList.add('is-render-loaded');
                  case 'ready':
                    e.classList.remove(...Im),
                      e.classList.add('is-render-ready'),
                      o && 'number' == typeof o.height && (e.style.height = `${o.height}px`),
                      Pm(e) && Dm(),
                      L(e, wm.AfterReady, { container: e, payload: o });
                    break;
                  case 'resize':
                    o && 'number' == typeof o.height && (e.style.height = `${o.height}px`);
                    break;
                  case 'data':
                    L(e, 'edit:visual', o);
                    break;
                  default:
                    L(e, wm.Message, { type: t, body: s, payload: o });
                }
              })(r, s, 0, i, null != n.payload ? n.payload : void 0);
          });
        let Fm = null;
        const Om = new S();
        function Wm(e) {
          const t = e.form;
          h(t, 'app/assets/modules/github/repositories/branches.js:43');
          const n = m(t, '.js-branches'),
            s = n.querySelectorAll('.js-branches-subnav .js-subnav-item'),
            o = n.querySelector('.js-branches-subnav .js-subnav-item.selected'),
            i = g(n, '.js-branches-subnav .js-branches-all'),
            r = t.getAttribute('data-results-container');
          Fm || (Fm = o);
          const a = e.value.trim().length > 0,
            c = (function(e) {
              const t = e.form;
              if ((h(t, 'app/assets/modules/github/repositories/branches.js:24'), e.value.trim())) {
                const n = new URL(t.action, window.location.origin),
                  s = new URLSearchParams(n.search.slice(1)),
                  o = t.elements.namedItem('utf8');
                return (
                  o instanceof HTMLInputElement && s.append('utf8', o.value),
                  s.append('query', e.value),
                  (n.search = s.toString()),
                  n.toString()
                );
              }
              return p(t, 'data-reset-url');
            })(e);
          function l() {
            n.classList.remove('is-loading');
          }
          Om.push(R(document, c))
            .then(function(e) {
              x(null, '', c);
              const t = r ? document.getElementById(r) : null;
              t && ((t.innerHTML = ''), t.appendChild(e));
            })
            .then(l, l),
            n.classList.toggle('is-search-mode', a),
            n.classList.add('is-loading');
          for (const u of s) u.classList.remove('selected');
          a ? i.classList.add('selected') : Fm && (Fm.classList.add('selected'), (Fm = null));
        }
        i('.js-branch-search-field', {
          constructor: HTMLInputElement,
          initialize(e) {
            T(e, Wm);
          },
          subscribe: e =>
            q(e, 'keyup', function(t) {
              h(
                t instanceof KeyboardEvent,
                'app/assets/modules/github/repositories/branches.js:104',
              ),
                'Escape' === V(t) &&
                  (!(function(e) {
                    const t = e.value.trim();
                    (e.value = ''), t && Wm(e);
                  })(e),
                  e.blur());
            }),
        }),
          u('submit', '.js-branch-search', e => e.preventDefault()),
          u('click', '.js-clear-branch-search', function(e) {
            const t = e.currentTarget;
            h(
              t instanceof HTMLButtonElement,
              'app/assets/modules/github/repositories/branches.js:119',
            ),
              h(t.form, 'app/assets/modules/github/repositories/branches.js:120');
            const n = g(t.form, '.js-branch-search-field', HTMLInputElement);
            n.focus(), (n.value = ''), L(n, 'input');
          }),
          v('.js-branch-destroy, .js-branch-restore', async function(e, t) {
            g(e, 'button[type=submit]').blur();
            const n = (function(e) {
              const t = m(e, '.js-branch-row').getAttribute('data-branch-name'),
                n = m(e, '.js-branches').querySelectorAll('.js-branch-row');
              return Array.from(n).filter(e => e.getAttribute('data-branch-name') === t);
            })(e);
            for (const i of n) {
              const e = i.querySelector('.js-branch-delete-target'),
                t = i.querySelector('.js-loading-spinner');
              t && (t.hidden = !1), e && (e.hidden = !0);
            }
            let s = !1;
            try {
              await t.text();
            } catch (o) {
              (s = !0), location.reload();
            } finally {
              for (const e of n) {
                const t = e.querySelector('.js-branch-delete-target'),
                  n = e.querySelector('.js-loading-spinner');
                t && (t.hidden = !1), n && (n.hidden = !0);
              }
            }
            if (!s) {
              const t = e.classList.contains('js-branch-destroy');
              for (const e of n) e.classList.toggle('Details--on', t);
            }
          }),
          u('change', '.js-repository-import-owner-container input', function({
            currentTarget: e,
          }) {
            const t = e.getAttribute('data-upsell') || '',
              n = e.getAttribute('data-billing-url') || '';
            (g(document, '.js-repository-import-billing-url', HTMLAnchorElement).href = n),
              g(document, '.js-repository-import-upsell').classList.toggle('d-none', 'false' === t),
              g(document, '.js-repository-import-no-upsell').classList.toggle(
                'd-none',
                'true' === t,
              );
          }),
          u('socket:message', '.repository-import', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/repositories/import.js:21');
            const t = e.detail.data;
            t.redirect_to &&
              ((document.location.href = t.redirect_to), e.stopImmediatePropagation());
          }),
          u('change', 'input.js-repository-import-lfs-opt', function({ currentTarget: e }) {
            h(e instanceof HTMLInputElement, 'app/assets/modules/github/repositories/import.js:30');
            const t = parseInt(e.getAttribute('data-percent-used')),
              n = m(e, '.js-repository-import-lfs-container'),
              s = e.getAttribute('data-used') || '';
            g(n, '.js-repository-import-lfs-warn').classList.toggle('d-none', !(t > 100)),
              g(n, '.js-usage-bar').classList.toggle('exceeded', t >= 100),
              g(n, '.js-usage-bar').setAttribute('aria-label', `${t}%`),
              (g(n, '.js-repository-import-lfs-progress').style.width = `${t}%`),
              (g(n, 'span.js-usage-text').textContent = s);
          }),
          v('.js-repository-import-author-form', async function(e, t) {
            const n = await t.html();
            m(e, '.js-repository-import-author').replaceWith(n.html);
          }),
          u('click', '.js-repository-import-projects-cancel-button', function() {
            const e = g(document, '.js-repository-import-projects-cancel-form', HTMLFormElement);
            y(e);
          });
        let Um = !1;
        function zm() {
          return 'private' === g(document, '.js-privacy-toggle:checked', HTMLInputElement).value;
        }
        function Vm() {
          const e = g(document, '.js-repo-name');
          L(e, 'change');
          const t = g(document, '.js-owner-container [aria-checked="true"]'),
            n = g(document, '.js-privacy-toggle[value=private]', HTMLInputElement),
            s = g(document, '.js-privacy-toggle[value=public]', HTMLInputElement),
            o = t.getAttribute('data-business-id'),
            i = document.querySelector('.js-privacy-toggle[value=internal]'),
            r = i && i instanceof HTMLInputElement && i.checked;
          !(function(e) {
            const t = document.querySelectorAll('.js-new-repo-internal-visibility');
            for (const n of t) n.hidden = !0;
            if (e) {
              const t = document.querySelector(`#new-repo-internal-visibility-${e}`);
              t && (t.hidden = !1);
            }
          })(o),
            (!Um || (!o && r)) &&
              ('private' === t.getAttribute('data-default')
                ? ((n.checked = !0), L(n, 'change'))
                : ((s.checked = !0), L(s, 'change'))),
            'false' === t.getAttribute('data-org-allow-public-repos')
              ? ((s.disabled = !0), !0 === s.checked && ((n.checked = !0), L(n, 'change')))
              : (s.disabled = !1),
            (function(e) {
              for (const s of document.querySelectorAll('.js-with-permission-fields'))
                s.hidden = !e;
              for (const s of document.querySelectorAll('.js-without-permission-fields'))
                s.hidden = e;
              const t = document.querySelector('.errored'),
                n = document.querySelector('dl.warn');
              t && (t.hidden = !e);
              n && (n.hidden = !e);
            })('yes' === t.getAttribute('data-permission')),
            (function() {
              const e = document.querySelector('#js-upgrade-container');
              if (!e) return;
              const t = g(document, '#js-payment-methods-form');
              e.firstElementChild && t.appendChild(e.firstElementChild);
              const n = g(document, 'input[name=owner]:checked', HTMLInputElement).value,
                s = t.querySelector(`.js-upgrade[data-login="${n}"]`);
              s && e.appendChild(s);
            })(),
            Km();
          const a = document.querySelector('.js-quick-install-container');
          if (a) {
            const e = g(a, '.js-quick-install-divider');
            e.hidden = !0;
            const t = g(document, 'input[name=owner]:checked', HTMLInputElement).parentElement;
            if (t) {
              const n = t.querySelector('.js-quick-install-list-template');
              if (n instanceof HTMLTemplateElement) {
                const t = g(a, '.js-account-apps');
                (t.innerHTML = ''),
                  t.append(n.content.cloneNode(!0)),
                  n.children.length > 0 && (e.hidden = !1);
              }
            }
          }
        }
        function Km(e) {
          const t = document.querySelector('#js-upgrade-container');
          if (!t) return;
          const n = t.querySelector('.js-billing-section'),
            s = t.querySelector('.js-confirm-upgrade-checkbox');
          let o = e ? e.target : null;
          o || (o = document.querySelector('.js-privacy-toggle:checked')),
            h(o instanceof HTMLInputElement, 'app/assets/modules/github/repositories/new.js:114'),
            'false' === o.value
              ? ((t.hidden = !1),
                n && n.classList.remove('has-removed-contents'),
                s &&
                  (h(
                    s instanceof HTMLInputElement,
                    'app/assets/modules/github/repositories/new.js:120',
                  ),
                  (s.checked = !0)))
              : ((t.hidden = !0),
                n && n.classList.add('has-removed-contents'),
                s &&
                  (h(
                    s instanceof HTMLInputElement,
                    'app/assets/modules/github/repositories/new.js:127',
                  ),
                  (s.checked = !1))),
            Ym();
        }
        function Ym() {
          const e = g(document, '#new_repository');
          let t = g(e, '.js-repo-name').classList.contains('is-autocheck-successful');
          zm() &&
            (t =
              t &&
              (function() {
                const e = document.querySelector('#js-upgrade-container');
                if (!e) return !0;
                if (e.querySelector('.js-ofac-sanction-notice')) return !1;
                const t = e.querySelector('.js-confirm-upgrade-checkbox');
                if (t instanceof HTMLInputElement && !t.checked) return !1;
                const n = e.querySelector('.js-zuora-billing-info');
                if (n && n.classList.contains('d-none')) return !1;
                return !0;
              })()),
            (g(e, 'button[type=submit]', HTMLButtonElement).disabled = !t);
        }
        async function Xm(e) {
          const t = e.form;
          h(t instanceof HTMLFormElement, 'app/assets/modules/github/repositories/releases.js:14'),
            (g(t, '#release_draft', HTMLInputElement).value = '1'),
            Gm(e, 'saving');
          try {
            const s = await K(t.action, { method: t.method, body: new FormData(t) });
            return (
              Gm(e, 'saved'),
              setTimeout(Gm, 5e3, e, 'default'),
              L(t, 'release:saved', { release: s }),
              s
            );
          } catch (n) {
            throw (Gm(e, 'failed'), n);
          }
        }
        function Jm(e) {
          h(e instanceof HTMLInputElement, 'app/assets/modules/github/repositories/releases.js:45');
          const t = m(e, '.js-releases-marketplace-publish-container'),
            n = g(t, '.js-releases-marketplace-publish-preview');
          e.checked ? n.classList.remove('d-none') : n.classList.add('d-none');
        }
        function Gm(e, t) {
          for (const n of e.querySelectorAll('.js-save-draft-button-state'))
            n.hidden = n.getAttribute('data-state') !== t;
          e.disabled = 'saving' === t;
        }
        function Qm(e) {
          const t = document.querySelector('.js-release-target-wrapper');
          if (null != t) {
            switch (e) {
              case 'valid':
                t.classList.add('d-none');
                break;
              case 'loading':
                break;
              default:
                t.classList.remove('d-none');
            }
            for (const t of document.querySelectorAll('.js-tag-status-message'))
              t.hidden = t.getAttribute('data-state') !== e;
          }
        }
        i('#js-upgrade-container .js-zuora-billing-info:not(.d-none)', Ym),
          i('.page-new-repo', function() {
            Um = zm();
            const e = document.querySelector('#js-upgrade-container');
            e && (e.hidden = !0), Vm();
            const t = document.querySelector('.js-owner-select');
            t && t.focus();
          }),
          u('click', '.js-reponame-suggestion', function(e) {
            const t = g(document, '.js-repo-name', HTMLInputElement);
            (t.value = e.currentTarget.textContent), L(t, 'input', !1);
          }),
          u('click', '.js-privacy-toggle', function() {
            Um = !0;
          }),
          u('change', '.js-privacy-toggle', Km),
          u('details-menu-selected', '.js-owner-container', Vm, { capture: !0 }),
          u('change', '#js-upgrade-container input', Ym),
          l('#js-upgrade-container input', Ym),
          u('auto-check-send', '.js-repo-name-auto-check', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/repositories/new.js:222');
            const t = e.currentTarget.form;
            h(t, 'app/assets/modules/github/repositories/new.js:225');
            const n = g(t, 'input[name=owner]:checked', HTMLInputElement).value;
            e.detail.body.append('owner', n);
          }),
          u('auto-check-complete', '#repository_name', function() {
            Ym();
          }),
          u('click', '.js-packages-learn-more-dismiss', function() {
            const e = g(document, '.js-packages-popover-form', HTMLFormElement);
            y(e);
          }),
          i('.js-pulse-contribution-data', e => {
            !(async function(e) {
              const t = e.getAttribute('data-pulse-diffstat-summary-url');
              let n;
              try {
                t &&
                  (function(e, t) {
                    (t.innerHTML = ''), t.appendChild(e);
                  })(
                    (n = await (async function(e) {
                      return R(document, e);
                    })(t)),
                    e,
                  );
              } catch (s) {
                const t = g(e, '.js-blankslate-loading'),
                  n = g(e, '.js-blankslate-error');
                t.classList.add('d-none'), n.classList.remove('d-none');
              }
            })(e);
          }),
          u('change', '.js-releases-marketplace-publish-field', function(e) {
            Jm(e.currentTarget);
          }),
          i('.js-releases-marketplace-publish-field', function(e) {
            Jm(e);
          }),
          u('click', '.js-save-draft', function(e) {
            const t = e.currentTarget;
            h(
              t instanceof HTMLButtonElement,
              'app/assets/modules/github/repositories/releases.js:61',
            ),
              Xm(t),
              e.preventDefault();
          }),
          u('click', '.js-timeline-tags-expander', function(e) {
            const t = e.currentTarget;
            m(t, '.js-timeline-tags').classList.remove('is-collapsed');
          }),
          u('release:saved', '.js-release-form', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/repositories/releases.js:82');
            const t = e.detail.release,
              n = e.currentTarget,
              s = n.getAttribute('data-repo-url'),
              o = t.update_url || tf('tag', s, t.tag_name);
            if ((n.setAttribute('action', o), t.update_authenticity_token)) {
              n.querySelector('input[name=authenticity_token]').value = t.update_authenticity_token;
            }
            const i = t.edit_url || tf('edit', s, t.tag_name);
            x(Q(), document.title, i);
            const r = document.querySelector('#delete_release_confirm form');
            if (r) {
              const e = t.delete_url || tf('tag', s, t.tag_name);
              if ((r.setAttribute('action', e), t.delete_authenticity_token)) {
                g(r, 'input[name=authenticity_token]', HTMLInputElement).value =
                  t.delete_authenticity_token;
              }
            }
            const a = n.querySelector('#release_id');
            if (!a.value) {
              a.value = t.id;
              const e = document.createElement('input');
              (e.type = 'hidden'), (e.name = '_method'), (e.value = 'put'), n.appendChild(e);
            }
          }),
          u('click', '.js-publish-release', function() {
            g(document, '#release_draft', HTMLInputElement).value = '0';
          });
        const Zm = new WeakMap();
        async function ef(e) {
          if (!e.value) return;
          if (e.value === Zm.get(e)) return;
          Qm('loading'), Zm.set(e, e.value);
          const t = p(e, 'data-url'),
            n = new URL(t, window.location.origin),
            s = new URLSearchParams(n.search.slice(1));
          s.append('tag_name', e.value), (n.search = s.toString());
          try {
            const t = await K(n);
            'duplicate' === t.status &&
            parseInt(e.getAttribute('data-existing-id')) === parseInt(t.release_id)
              ? Qm('valid')
              : (g(document, '.js-release-tag .js-edit-release-link').setAttribute('href', t.url),
                Qm(t.status));
          } catch (Rh) {
            Qm('invalid');
          }
        }
        function tf(e, t, n) {
          return `${t}/releases/${e}/${n}`;
        }
        function nf(e) {
          const t = m(e, 'form', HTMLFormElement).querySelector('.js-previewable-comment-form');
          if (!t) return;
          let n = t.getAttribute('data-base-preview-url');
          n ||
            ((n = String(t.getAttribute('data-preview-url'))),
            t.setAttribute('data-base-preview-url', n));
          const s = f(
              e,
              'input[name="release[tag_name]"], input[name="release[target_commitish]"]:checked',
              HTMLInputElement,
            ),
            o = new URL(n, window.location.origin),
            i = new URLSearchParams(o.search.slice(1));
          for (const r of s) r.value && i.append(r.name, r.value);
          (o.search = i.toString()), t.setAttribute('data-preview-url', o.toString());
        }
        i('input.js-release-tag-field', {
          constructor: HTMLInputElement,
          initialize(e) {
            ef(e),
              e.addEventListener('blur', function() {
                ef(e);
              });
          },
        }),
          u('change', '.js-release-tag', function(e) {
            nf(e.currentTarget);
          }),
          i('.js-release-form .js-previewable-comment-form', function(e) {
            nf(g(m(e, 'form'), '.js-release-tag'));
          }),
          N('keydown', '.js-tree-finder-field', e => {
            'Escape' === e.key && (e.preventDefault(), history.back());
          });
        function sf(e, t) {
          if (pl(e)) return;
          const n = g(document, '.js-site-search-form', HTMLFormElement);
          let s, o;
          g(document, '.js-site-search').classList.toggle('scoped-search', t),
            t
              ? ((s = p(n, 'data-scoped-search-url')), (o = p(e, 'data-scoped-placeholder')))
              : ((s = p(n, 'data-unscoped-search-url')), (o = p(e, 'data-unscoped-placeholder'))),
            n.setAttribute('action', s),
            e.setAttribute('placeholder', o);
        }
        function of(e) {
          h(e.currentTarget instanceof Element, 'app/assets/modules/github/search/results.js:21');
          const t = e.currentTarget.querySelector('.js-search-result-feedback');
          t && t.classList.add('show');
        }
        function rf(e) {
          h(e.currentTarget instanceof Element, 'app/assets/modules/github/search/results.js:31');
          const t = e.currentTarget.querySelector('.js-search-result-feedback');
          t && t.classList.remove('show');
        }
        function af(e) {
          const t = e.currentTarget;
          h(t instanceof HTMLButtonElement, 'app/assets/modules/github/search/results.js:43'),
            t.classList.add('text-gray-dark'),
            t.classList.remove('link-gray');
          const n = m(t, '.js-search-result-feedback');
          for (const s of f(n, '.js-search-rating', HTMLButtonElement)) s.disabled = !0;
          g(n, '.js-search-feedback-form').classList.add('show');
        }
        function cf(e) {
          const t = e.value.slice(0, e.selectionEnd),
            n = e.value.slice(e.selectionEnd),
            s = 0 === e.value.trim().length,
            o = t.match(/(^|\s+)[^\s:]+$/) && n.match(/^(\s|$)/);
          return s || o;
        }
        async function lf(e) {
          const t = e.getAttribute('data-contents-url'),
            n = Kc('SEARCH_SUGGESTIONS');
          if (!t) return;
          const s = g(document, '.js-search-suggester'),
            o = e.value.slice(0, e.selectionEnd).match(/\S*$/),
            i = o ? o[0] : '',
            r = new URL(t, window.location.origin),
            a = new URLSearchParams();
          a.append('query', i), (r.search = a.toString());
          const c = await A(r.toString());
          if ('' === c.trim()) return void uf();
          (s.innerHTML = c),
            n && s.classList.remove('d-none'),
            He(g(s, '.js-navigation-container'));
          const l = g(s, '.js-search-suggester-helper'),
            u = e.value.match(/(^|\s)[^\s:]+$/),
            d = l.parentElement;
          h(d instanceof HTMLElement, 'app/assets/modules/github/search-suggester.js:52'),
            u && (l.textContent = e.value),
            d.classList.toggle('d-none', n && !u);
        }
        function uf() {
          g(document, '.js-search-suggester').classList.add('d-none');
        }
        function df(e) {
          const t = e.target,
            n = m(t, '.js-navigation-item'),
            s = g(document, '.js-search-suggester-field', HTMLInputElement),
            o = g(document, '.js-search-suggester'),
            i = n.getAttribute('data-value') || '',
            r = s.value.slice(0, s.selectionEnd).replace(/\S+$/, ''),
            a = s.value.slice(s.selectionEnd);
          o.classList.contains('d-none')
            ? y(g(document, '#search_form', HTMLFormElement))
            : (e.preventDefault(), (s.value = r + i + a), cf(s) ? lf(s) : uf());
        }
        function mf({ currentTarget: e }) {
          const t = e.querySelector('input.js-filterable-field');
          t && (t.focus(), L(t, 'filterable:change'));
        }
        async function ff(e) {
          const t = e.currentTarget;
          h(t instanceof Element, 'app/assets/modules/github/select-menu/loading.js:34'),
            t.classList.remove('js-load-contents'),
            t.classList.add('is-loading'),
            t.classList.remove('has-error');
          const n = p(t, 'data-contents-url'),
            s = t.querySelector('.js-select-menu-deferred-content');
          let o;
          try {
            await qe(), (o = s ? await A(n) : await K(n));
          } catch (i) {
            return void t.classList.add('has-error');
          } finally {
            t.classList.remove('is-loading');
          }
          s ? (s.innerHTML = o) : L(t, 'selectmenu:data', { data: o }),
            (t.classList.contains('active') || t.hasAttribute('open')) && L(t, 'selectmenu:load');
        }
        function pf(e) {
          const t = m(e.currentTarget, '.js-select-menu').querySelector('.js-navigation-container'),
            n = e.currentTarget;
          t && n instanceof HTMLElement && $e(t, n);
        }
        function gf() {
          const e = document.body;
          h(e, 'app/assets/modules/github/sessions/two-factor.js:13'),
            e.classList.add('is-sending'),
            e.classList.remove('is-sent', 'is-not-sent');
        }
        function hf() {
          const e = document.body;
          h(e, 'app/assets/modules/github/sessions/two-factor.js:21'),
            e.classList.add('is-sent'),
            e.classList.remove('is-sending');
        }
        function bf(e) {
          const t = document.body;
          h(t, 'app/assets/modules/github/sessions/two-factor.js:29'),
            e && (g(document, '.js-sms-error').textContent = e),
            t.classList.add('is-not-sent'),
            t.classList.remove('is-sending');
        }
        function vf(e) {
          const t = document.querySelector('.js-stale-session-flash');
          t &&
            (t.classList.toggle('is-signed-in', 'true' === e),
            t.classList.toggle('is-signed-out', 'false' === e),
            (t.hidden = !1),
            window.addEventListener('popstate', function(e) {
              e.state && null != e.state.container && location.reload();
            }),
            document.addEventListener('submit', function(e) {
              e.preventDefault();
            }));
        }
        let jf;
        if (
          (i('.js-tree-finder', e => {
            const t = g(e, '.js-tree-finder-field', HTMLInputElement),
              n = g(e, '.js-tree-browser-results');
            e &&
              t &&
              n &&
              ((async e => {
                if (!(e instanceof FuzzyListElement)) return;
                const t = p(e, 'data-url'),
                  n = g(e, '.js-tree-browser-result-template', HTMLTemplateElement),
                  { paths: s } = await K(t);
                e.addLazyItems(s, e => {
                  const t = n.content.cloneNode(!0).firstElementChild;
                  h(t, 'app/assets/modules/github/repositories/tree-finder.js:31');
                  const s = g(t, '.js-tree-browser-result-anchor', HTMLAnchorElement),
                    o = g(s, '.js-tree-browser-result-path'),
                    i = new URL(s.href, window.location.origin);
                  return (
                    (i.pathname = `${i.pathname}/${encodeURI(e)}`),
                    (s.href = String(i)),
                    (o.textContent = e),
                    t
                  );
                }),
                  e.sort();
              })(e),
              Dn(t, n),
              e.addEventListener('fuzzy-list-will-sort', () => {
                On(t, n);
              }),
              e.addEventListener('fuzzy-list-sorted', () => {
                Fn(t, n);
              }));
          }),
          i('.js-codesearch-nav', function(e) {
            const t = e.querySelector('.selected');
            if (!t) return;
            const n = t.offsetLeft,
              s = t.offsetWidth,
              o = n + s,
              i = window.innerWidth;
            (o - e.scrollLeft > i || o < e.scrollLeft) && (e.scrollLeft = n - i / 2 + s / 2);
          }),
          i('.js-codesearch-count', function(e) {
            const t = e.getAttribute('data-search-type');
            for (const n of document.querySelectorAll('.js-codesearch-deferred-count'))
              if (t && n.getAttribute('data-search-type') === t) {
                const t = e.cloneNode(!0);
                t.classList.remove('js-codesearch-count'), n.replaceWith(t);
              }
          }),
          N('keyup', '.js-site-search-field', function(e) {
            const t = e.target;
            h(t instanceof HTMLInputElement, 'app/assets/modules/github/search/site.js:34');
            const n = 0 === t.value.length;
            n && 'Backspace' === e.key && t.classList.contains('is-clearable') && sf(t, !1),
              n && 'Escape' === e.key && sf(t, !0),
              t.classList.toggle('is-clearable', n);
          }),
          d('.js-site-search-focus', function(e) {
            const t = m(e, '.js-chromeless-input-container');
            t.classList.add('focus'),
              e.addEventListener('blur', function n() {
                t.classList.remove('focus'),
                  h(e instanceof HTMLInputElement, 'app/assets/modules/github/search/site.js:53'),
                  0 === e.value.length && e.classList.contains('js-site-search-field') && sf(e, !0),
                  e.removeEventListener('blur', n);
              });
          }),
          u('submit', '.js-site-search-form', function(e) {
            g(e.target, '.js-site-search-type-field', HTMLInputElement).value =
              new URLSearchParams(window.location.search).get('type') || '';
          }),
          i('.issue-list-item', {
            subscribe: e => F(q(e, 'mouseover', of), q(e, 'mouseleave', rf)),
          }),
          i('.js-search-rating', { subscribe: e => q(e, 'click', af) }),
          i('.js-search-suggester-field', {
            constructor: HTMLInputElement,
            initialize(e) {
              lf(e),
                T(e, function() {
                  cf(e) ? lf(e) : uf();
                });
            },
          }),
          u('focusin', '.js-search-suggester-field', function(e) {
            const t = e.currentTarget;
            h(t instanceof HTMLInputElement, 'app/assets/modules/github/search-suggester.js:78'),
              cf(t) ? lf(t) : uf();
          }),
          u('focusout', '.js-search-suggester-field', function() {
            uf();
          }),
          u('mousedown', '.js-search-suggester', df),
          u('navigation:keydown', '.js-search-suggester', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/search-suggester.js:109');
            const t = e.currentTarget.querySelector(
              '.js-search-suggester .js-navigation-item[aria-selected="true"]',
            );
            switch (e.detail.hotkey) {
              case 'Enter':
                t ? df(e) : y(g(document, '#search_form', HTMLFormElement));
                break;
              case 'Tab':
                t && df(e);
                break;
              case 'ArrowLeft':
              case 'ArrowRight':
              case 'Escape':
                uf();
            }
          }),
          u('click', '.js-segmented-nav-button', function(e) {
            e.preventDefault();
            const t = e.currentTarget,
              n = p(t, 'data-selected-tab'),
              s = m(t, '.js-segmented-nav'),
              o = s.parentElement;
            h(o, 'app/assets/modules/github/segmented-nav.js:14');
            for (const i of f(s, '.js-segmented-nav-button')) i.classList.remove('selected');
            t.classList.add('selected');
            for (const i of f(o, '.js-selected-nav-tab'))
              i.parentElement === o && i.classList.remove('active');
            g(document, `.${n}`).classList.add('active');
          }),
          u('deprecatedAjaxSuccess', '.js-select-menu:not([data-multiple])', function(e) {
            h(
              e.currentTarget instanceof HTMLElement,
              'app/assets/modules/github/select-menu/ajax.js:20',
            ),
              Ke(e.currentTarget);
          }),
          u('deprecatedAjaxSend', '.js-select-menu:not([data-multiple])', function(e) {
            e.currentTarget.classList.add('is-loading');
          }),
          u('deprecatedAjaxComplete', '.js-select-menu', function(e) {
            e.currentTarget.classList.remove('is-loading');
          }),
          u('deprecatedAjaxError', '.js-select-menu', function(e) {
            e.currentTarget.classList.add('has-error');
          }),
          u('menu:deactivate', '.js-select-menu', function(e) {
            e.currentTarget.classList.remove('is-loading', 'has-error');
          }),
          u('navigation:open', '.js-select-menu:not([data-multiple]) .js-navigation-item', function(
            e,
          ) {
            const t = e.currentTarget;
            if (!L(t, 'selectmenu:select')) return;
            const n = m(t, '.js-select-menu'),
              s = n.querySelector('.js-navigation-item.selected');
            s && s.classList.remove('selected'),
              t.classList.add('selected'),
              t.classList.remove('indeterminate');
            for (const o of f(t, 'input[type=radio], input[type=checkbox]', HTMLInputElement))
              _(o, !0);
            L(t, 'selectmenu:selected'), n.classList.contains('is-loading') || Ke(n);
          }),
          u('navigation:open', '.js-select-menu[data-multiple] .js-navigation-item', function(e) {
            const t = e.currentTarget;
            if (!L(t, 'selectmenu:select')) return;
            const n = t.classList.contains('selected');
            t.classList.toggle('selected'), t.classList.remove('indeterminate');
            for (const s of f(t, 'input[type=radio], input[type=checkbox]', HTMLInputElement))
              _(s, !n);
            L(t, 'selectmenu:selected');
          }),
          u('selectmenu:select', '.js-select-menu .js-navigation-item.disabled', function(e) {
            e.preventDefault();
          }),
          u('selectmenu:selected', '.js-select-menu .js-navigation-item', function(e) {
            const t = e.currentTarget,
              n = m(t, '.js-select-menu'),
              s = t.querySelector('.js-select-button-text');
            if (s) {
              const e = n.querySelector('.js-select-button');
              e && (e.innerHTML = s.innerHTML);
            }
          }),
          u('selectmenu:change', '.js-select-menu .select-menu-list', function(e) {
            const t = e.currentTarget,
              n = Array.from(t.querySelectorAll('.js-navigation-item'));
            for (const o of n) o.classList.remove('last-visible');
            const s = n.filter(G).pop();
            if ((s && s.classList.add('last-visible'), !t.hasAttribute('data-filterable-for'))) {
              const n = e.target.classList.contains('filterable-empty');
              t.classList.toggle('filterable-empty', n);
            }
          }),
          i(
            'tab-container .select-menu-list .filterable-empty, details-menu .select-menu-list .filterable-empty',
            {
              add(e) {
                m(e, '.select-menu-list').classList.add('filterable-empty');
              },
              remove(e) {
                m(e, '.select-menu-list').classList.remove('filterable-empty');
              },
            },
          ),
          u('menu:activated', '.js-select-menu', mf),
          u('selectmenu:load', '.js-select-menu', mf),
          u('menu:deactivate', '.js-select-menu', function({ currentTarget: e }) {
            const t = e.querySelector('input.js-filterable-field');
            t instanceof HTMLInputElement && ((t.value = ''), L(t, 'filterable:change'));
            for (const s of e.querySelectorAll('.js-navigation-item.selected')) {
              const e = s.querySelector('input[type=radio], input[type=checkbox]');
              e &&
                (h(
                  e instanceof HTMLInputElement,
                  'app/assets/modules/github/select-menu/filterable.js:37',
                ),
                s.classList.toggle('selected', e.checked));
            }
            const n = document.activeElement;
            if (n && e.contains(n))
              try {
                n.blur();
              } catch (Rh) {}
          }),
          i('.js-select-menu.js-load-contents', {
            add(e) {
              e.addEventListener('mouseenter', ff), e.addEventListener('menu:activate', ff);
            },
            remove(e) {
              e.removeEventListener('mouseenter', ff), e.removeEventListener('menu:activate', ff);
            },
          }),
          u('menu:activate', '.js-select-menu', function(e) {
            const t = e.currentTarget.querySelector('.js-menu-target');
            t && t.classList.add('selected');
            const n = e.currentTarget.querySelector('.js-navigation-container');
            n && Xe(n);
          }),
          u('menu:deactivate', '.js-select-menu', function(e) {
            const t = e.currentTarget.querySelector('.js-menu-target');
            t && t.classList.remove('selected');
            const n = e.currentTarget.querySelector('.js-navigation-container');
            n && Je(n);
          }),
          u('filterable:change', '.js-select-menu .select-menu-list', pf),
          u('selectmenu:tabchange', '.js-select-menu .select-menu-list', pf),
          u(
            'filterable:change',
            '.js-select-menu .select-menu-list, details-menu .select-menu-list',
            function(e) {
              h(e instanceof CustomEvent, 'app/assets/modules/github/select-menu/new.js:22');
              const t = e.currentTarget,
                n = t.querySelector('.js-new-item-form');
              n &&
                (function(e, t, n) {
                  const s =
                    n.length > 0 &&
                    !(function(e, t) {
                      for (const n of e.querySelectorAll(
                        '.js-select-button-text, .js-select-menu-filter-text',
                      )) {
                        const e = n.textContent.toLowerCase().trim();
                        if (e === t.toLowerCase()) return !0;
                      }
                      return !1;
                    })(e, n);
                  if ((e.classList.toggle('is-showing-new-item-form', s), !s)) return;
                  g(t, '.js-new-item-name').textContent = n;
                  const o = t.querySelector('.js-new-item-value');
                  (o instanceof HTMLInputElement || o instanceof HTMLButtonElement) &&
                    (o.value = n);
                })(t, n, e.detail.inputField.value),
                L(e.target, 'selectmenu:change');
            },
          ),
          v('.js-send-auth-code', async (e, t) => {
            let n;
            gf();
            try {
              n = await t.text();
            } catch (s) {
              bf(s.response.text);
            }
            n && hf();
          }),
          u('click', '.js-send-two-factor-code', async function(e) {
            const t = e.currentTarget;
            h(
              t instanceof HTMLButtonElement,
              'app/assets/modules/github/sessions/two-factor.js:56',
            );
            const n = t.form;
            h(n, 'app/assets/modules/github/sessions/two-factor.js:58');
            const s = `${g(n, '.js-country-code-select', HTMLSelectElement).value} ${
              g(n, '.js-sms-number', HTMLInputElement).value
            }`;
            gf();
            let o = t.getAttribute('data-authenticity-token');
            null == o && (o = w(n, 'authenticity_token').value);
            const i = new FormData();
            i.append('number', s), i.append('authenticity_token', o);
            try {
              const e = p(t, 'data-url');
              await c(e, { method: 'post', body: i }), hf();
              for (const t of n.querySelectorAll('.js-2fa-enable'))
                (t instanceof HTMLInputElement || t instanceof HTMLButtonElement) &&
                  (t.disabled = !1);
              g(n, '.js-2fa-otp').focus();
            } catch (r) {
              if (r.response) {
                bf(await r.response.text());
              }
              for (const e of n.querySelectorAll('.js-2fa-enable'))
                (e instanceof HTMLInputElement || e instanceof HTMLButtonElement) &&
                  (e.disabled = !0);
            }
          }),
          u('click', '.js-enable-enable-two-factor-auth-button', function() {
            const e = g(document, '.js-enable-two-factor-auth-button', HTMLButtonElement);
            (e.disabled = !1), e.removeAttribute('aria-label'), e.classList.remove('tooltipped');
          }),
          i('.js-two-factor-sms-fallback-button', function(e) {
            e.addEventListener('toggle', function(e) {
              const t = e.currentTarget;
              h(t instanceof Element, 'app/assets/modules/github/sessions/two-factor.js:113');
              for (const n of t.querySelectorAll('.flash')) n.hidden = !0;
              (g(t, '.js-configure-sms-fallback').hidden = !1),
                (g(t, '.js-verify-sms-fallback').hidden = !0);
            });
          }),
          v('.js-two-factor-set-sms-fallback', async (e, t) => {
            let n;
            try {
              n = await t.text();
            } catch (s) {
              const t = g(e, '.js-configure-sms-fallback'),
                n = g(e, '.js-verify-sms-fallback'),
                o = t.hidden ? n : t,
                i = g(o, '.flash');
              switch (s.response.status) {
                case 422:
                case 429:
                  (i.textContent = s.response.text), (i.hidden = !1);
              }
            }
            if (n)
              switch (n.status) {
                case 200:
                case 201:
                  window.location.reload();
                  break;
                case 202:
                  (g(e, '.js-configure-sms-fallback').hidden = !0),
                    (g(e, '.js-verify-sms-fallback').hidden = !1),
                    g(e, '.js-fallback-otp').focus();
              }
          }),
          'function' == typeof BroadcastChannel)
        )
          try {
            (jf = new BroadcastChannel('stale-session')).onmessage = e => {
              'string' == typeof e.data && vf(e.data);
            };
          } catch (Nh) {}
        if (!jf) {
          let e = !1;
          (jf = {
            postMessage(t) {
              e = !0;
              try {
                window.localStorage.setItem('logged-in', t);
              } finally {
                e = !1;
              }
            },
          }),
            window.addEventListener('storage', function(t) {
              if (!e && t.storageArea === window.localStorage && 'logged-in' === t.key)
                try {
                  ('true' !== t.newValue && 'false' !== t.newValue) || vf(t.newValue);
                } finally {
                  window.localStorage.removeItem(t.key);
                }
            });
        }
        const yf = document.querySelector('.js-stale-session-flash[data-signedin]');
        if (yf) {
          const e = yf.getAttribute('data-signedin');
          jf.postMessage(e);
        }
        document.addEventListener('pjax:end', function() {
          const e = document.querySelector('meta[name="selected-link"]'),
            t = e && e.getAttribute('value');
          if (t)
            for (const n of document.querySelectorAll(
              '.js-sidenav-container-pjax .js-selected-navigation-item',
            )) {
              const e = (n.getAttribute('data-selected-links') || '').split(' ').indexOf(t) >= 0;
              n.classList.toggle('selected', e);
            }
        }),
          i('.js-contact-javascript-flag', {
            constructor: HTMLInputElement,
            add(e) {
              e.value = 'true';
            },
          }),
          u('socket:message', '.js-notification-indicator', function(e) {
            h(
              e instanceof CustomEvent,
              'app/assets/modules/github/site/header-notifications.js:10',
            );
            const t = e.currentTarget,
              n = e.detail.data;
            t.setAttribute('aria-label', n.aria_label),
              t.setAttribute('data-ga-click', n.ga_click),
              t.querySelector('span').setAttribute('class', n.span_class);
          });
        let Lf = !1;
        async function wf() {
          if (Lf) return;
          Lf = !0;
          const e = `/site/keyboard_shortcuts?url=${window.location.pathname}`;
          (await ne({
            content: R(document, e),
            dialogClass: 'kb-shortcut-dialog container-xl',
          })).addEventListener(
            'dialog:remove',
            function() {
              Lf = !1;
            },
            { once: !0 },
          );
        }
        u('click', '.js-keyboard-shortcuts', wf),
          document.addEventListener('keydown', e => {
            (e.target instanceof Node && Ce(e.target)) || ('?' === V(e) && wf());
          }),
          i('.js-site-status-container', {
            initialize(e) {
              !(async function(e) {
                const t = o(document, 'site-status-api-url'),
                  n = await window.fetch(t),
                  s = await n.json(),
                  i = s.status.indicator;
                if ('none' !== i && e instanceof HTMLElement) {
                  (g(e, '.js-site-status-message').textContent = s.status.description),
                    g(e, '.js-site-status-time').setAttribute('datetime', s.page.updated_at);
                  const t = 'minor' === i ? 'flash-warn' : 'flash-error';
                  g(e, '.flash').classList.add(t), (e.hidden = !1);
                }
              })(e);
            },
          });
        const Ef = [
          { sectionName: 'actions-events', percent: 95 },
          { sectionName: 'actions-workflow', percent: 100 },
          { sectionName: 'actions-workflow-logs', percent: 100 },
          { sectionName: 'actions-templates', percent: 100 },
        ];
        function Tf(e) {
          e.map(({ sectionName: e, percent: t }) => {
            !(function(e, t, n, s) {
              const o =
                window.innerHeight ||
                (document.documentElement && document.documentElement.clientHeight);
              e.map(e => {
                const i = f(document, `.${t}`),
                  r = e.getBoundingClientRect().top,
                  a = Math.round((r / o) * 100);
                a <= s
                  ? e.classList.contains(t)
                    ? e.classList.add(n)
                    : i.map(e => e.classList.add(n))
                  : (e.classList.remove(n),
                    e.classList.contains(t) || i.map(e => e.classList.remove(n)));
              });
            })(f(document, `.section-${e}`), `section-${e}`, `animate-section-${e}`, t);
          });
        }
        let kf;
        window.addEventListener('scroll', () => Tf(Ef), !1),
          window.addEventListener('resize', () => Tf(Ef), !1),
          window.addEventListener('load', () => Tf(Ef), !1),
          d('.js-skip-password-autofill', e => {
            h(e instanceof HTMLInputElement, 'app/assets/modules/github/skip-autofill.js:9'),
              (e.type = 'password');
          }),
          u('click', '.js-smoothscroll-anchor', function(e) {
            const t = e.currentTarget;
            if (!(t instanceof HTMLAnchorElement)) return;
            const n = le(document, t.hash);
            n && (n.scrollIntoView({ behavior: 'smooth' }), e.preventDefault());
          }),
          (async function() {
            Kc('SERVICE_WORKER') &&
              navigator.serviceWorker &&
              (kf = await navigator.serviceWorker.register('/service-worker.js'));
          })(),
          u('click', '.js-subscribe-to-web-push', async function(e) {
            if (!window.PushManager) return;
            e.preventDefault();
            const t = e.currentTarget;
            h(
              t instanceof HTMLButtonElement,
              'app/assets/modules/github/service-worker-registration.js:27',
            ),
              h(t.form, 'app/assets/modules/github/service-worker-registration.js:28');
            const n = g(t.form, '[name=authenticity_token]', HTMLInputElement).value,
              s = await fetch('/web-push/public-key', { credentials: 'same-origin' }),
              o = (await s.json()).vapid_public_key,
              i = new Uint8Array(o),
              r = (await kf.pushManager.subscribe({
                userVisibleOnly: !0,
                applicationServerKey: i,
              })).toJSON(),
              a = new FormData();
            a.append('authenticity_token', n),
              a.append('endpoint', r.endpoint),
              a.append('p256dh', r.keys.p256dh),
              a.append('auth', r.keys.auth),
              await fetch('/web-push-subscription', {
                method: 'POST',
                body: a,
                credentials: 'same-origin',
              });
          });
        const Mf = {},
          Af = {},
          xf = {};
        let Sf = null,
          Hf = 0,
          Cf = null;
        const qf = 1e3,
          If = 1008,
          _f = 1011,
          $f = 1012,
          Df = 1013,
          Rf = [];
        function Nf(e) {
          Mf[e] || (Rf.push(e), (Mf[e] = !0));
        }
        function Bf(e) {
          for (const t of Rf) e.send(`subscribe:${t}`);
          Rf.length = 0;
        }
        function Pf() {
          try {
            return (Sf = (function() {
              const e = document.head && document.head.querySelector('link[rel=web-socket]');
              if (!(e instanceof HTMLLinkElement)) return;
              let t;
              try {
                t = new WebSocket(e.href);
              } catch (o) {
                if (o.name && 'SecurityError' !== o.name)
                  throw new Error(`error opening WebSocket: ${o.message} (${o.name})`);
                return null;
              }
              function n() {
                clearTimeout(s), (Hf = 0), Bf(t);
              }
              t.addEventListener('open', n);
              const s = setTimeout(function() {
                t.removeEventListener('open', n), t.close(), t === Sf && (Sf = null);
              }, 4e3);
              return (
                t.addEventListener('close', Ff),
                t.addEventListener('message', function(e) {
                  const [t, n] = JSON.parse(String(e.data));
                  if (!t || !n) return;
                  const s = Af[t] || [];
                  for (const o of s) L(o, 'socket:message', { data: n, name: t });
                  xf[t] = [n, Date.now()];
                }),
                t
              );
            })());
          } catch (e) {
            throw ((Sf = null), e);
          }
        }
        function Ff(e) {
          if (!1 === navigator.onLine || null == document.querySelector('.js-socket-channel'))
            return;
          let t = Sf,
            n = qf;
          if (
            (e instanceof CloseEvent && (n = e.code),
            e.target instanceof WebSocket && (t = e.target),
            Hf >= 5 || n === If || n === _f)
          )
            return (
              window.removeEventListener('online', Ff),
              void (
                t &&
                (t.removeEventListener('close', Ff),
                t.close(qf, 'give-up-reconnects'),
                t === Sf && (Sf = null))
              )
            );
          let s = 0;
          n === $f || n === Df ? (s = 100) : Hf > 0 && (s = 1e3 * Math.pow(2, Hf)),
            (Hf += 1),
            Cf && clearTimeout(Cf),
            (Cf = setTimeout(Pf, s));
        }
        function Of(e) {
          const t = e.getAttribute('data-channel');
          return t ? t.split(/\s+/) : [];
        }
        function Wf(e, t) {
          let { wait: n } = e;
          return (
            null != n && (n -= t) <= 0 && (n = null),
            n === e.wait ? e : Object.assign({}, e, { wait: n })
          );
        }
        function Uf(e, t, n) {
          const s = e.getBoundingClientRect().height,
            o = t.getBoundingClientRect(),
            i = n.getBoundingClientRect();
          let r = i.top;
          r + o.height + 10 >= s && (r = Math.max(s - o.height - 10, 0));
          let a = i.right;
          null != n.closest('.js-build-status-to-the-left') &&
            (a = Math.max(i.left - o.width - 10, 0)),
            (t.style.top = `${r}px`),
            (t.style.left = `${a}px`),
            (t.style.right = 'auto');
        }
        async function zf(e) {
          const t = e.querySelector('.js-dropdown-details'),
            n =
              e.querySelector('.js-status-dropdown-menu') || e.closest('.js-status-dropdown-menu');
          if (!(n instanceof HTMLElement)) return;
          const s = g(n, '.js-status-loader'),
            o = g(n, '.js-status-loading'),
            i = g(n, '.js-status-error'),
            r = p(s, 'data-contents-url');
          let a;
          o.classList.remove('d-none'), i.classList.add('d-none');
          try {
            await qe(), (a = await R(document, r));
          } catch (c) {
            o.classList.add('d-none'), i.classList.remove('d-none');
          }
          if (a) {
            s.replaceWith(a), g(n, '.js-details-container').classList.add('open');
            const e = document.body;
            e && t && n.classList.contains('js-append-menu-to-body') && Uf(e, n, t);
          }
        }
        function Vf({ currentTarget: e }) {
          h(e instanceof Element, 'app/assets/modules/github/statuses.js:120'), zf(e);
        }
        async function Kf(e) {
          const t = e.currentTarget;
          h(t instanceof HTMLElement, 'app/assets/modules/github/sudo-required.js:18');
          const n = t.getAttribute('data-sudo-required');
          n &&
            (e.stopPropagation(),
            e.preventDefault(),
            (await Be(n)) &&
              (t.removeAttribute('data-sudo-required'),
              t instanceof HTMLFormElement ? y(t) : t.click()));
        }
        function Yf(e) {
          const t = new Map();
          return function(...n) {
            const s = JSON.stringify(n),
              o = t.get(s);
            if (void 0 !== o) return o;
            const i = e(...n);
            return t.set(s, i), i;
          };
        }
        window.WebSocket &&
          (i('.js-socket-channel[data-channel]', {
            add: function(e) {
              const t = Sf || Pf();
              if (t) {
                for (const t of Of(e)) Nf(t), null == Af[t] && (Af[t] = []), Af[t].push(e);
                t.readyState === WebSocket.OPEN && Bf(t);
              }
            },
            remove: function(e) {
              for (const t of Of(e)) {
                const n = Af[t];
                if (n) {
                  const t = n.indexOf(e);
                  -1 !== t && n.splice(t, 1);
                }
              }
            },
          }),
          window.addEventListener('online', Ff),
          window.addEventListener('offline', function() {
            Sf && Sf.close(qf, 'navigator-offline');
          })),
          document.addEventListener('pjax:popstate', function(e) {
            if (!(e instanceof CustomEvent)) return;
            const t = e.target;
            if (!(t instanceof Element)) return;
            const n = e.detail.cachedAt;
            n &&
              setTimeout(() => {
                const e = Date.now();
                for (const s of t.querySelectorAll('.js-socket-channel[data-channel]'))
                  for (const t of Of(s)) {
                    if (!(t in xf)) continue;
                    const [o, i] = xf[t];
                    i < n || L(s, 'socket:message', { data: Wf(o, e - i), name: t });
                  }
              });
          }),
          i('form.js-auto-replay-enforced-sso-request', {
            constructor: HTMLFormElement,
            initialize(e) {
              y(e);
            },
          }),
          u(
            'toggle',
            '.js-build-status .js-dropdown-details',
            function(e) {
              const t = e.currentTarget,
                n = t.querySelector('.js-status-dropdown-menu');
              if (!n) return;
              function s() {
                t.hasAttribute('open') || i();
              }
              function o(e) {
                n.contains(e.target) || i();
              }
              function i() {
                t.removeAttribute('open'),
                  n.classList.add('d-none'),
                  t.appendChild(n),
                  t.removeEventListener('toggle', s),
                  window.removeEventListener('scroll', o);
              }
              t.addEventListener('toggle', s),
                n.classList.contains('js-close-menu-on-scroll') &&
                  window.addEventListener('scroll', o, { capture: !0, passive: !0 }),
                n.classList.remove('d-none'),
                g(n, '.js-details-container').classList.add('open');
              const r = document.body;
              r &&
                n.classList.contains('js-append-menu-to-body') &&
                (r.appendChild(n), Uf(r, n, t));
            },
            { capture: !0 },
          ),
          u('click', '.js-status-retry', ({ currentTarget: e }) => {
            zf(e);
          }),
          i('.js-build-status', {
            add(e) {
              e.addEventListener('mouseenter', Vf, { once: !0 });
            },
            remove(e) {
              e.removeEventListener('mouseenter', Vf);
            },
          }),
          u('click', 'button[data-sudo-required], summary[data-sudo-required]', Kf),
          i('form[data-sudo-required]', {
            constructor: HTMLFormElement,
            subscribe: e => q(e, 'submit', Kf),
          });
        const Xf = {
          'actor:': 'ul.user-suggestions',
          'user:': 'ul.user-suggestions',
          'org:': 'ul.org-suggestions',
          'action:': 'ul.action-suggestions',
          'repo:': 'ul.repo-suggestions',
          'country:': 'ul.country-suggestions',
        };
        function Jf(e) {
          h(
            e instanceof CustomEvent,
            'app/assets/modules/github/suggesters/audit-log-suggester.js:29',
          );
          const { key: t, item: n } = e.detail;
          if (!Qf(t)) return;
          const s = p(n, 'data-value');
          e.detail.value = `${t}${s}`;
        }
        function Gf(e) {
          h(
            e instanceof CustomEvent,
            'app/assets/modules/github/suggesters/audit-log-suggester.js:39',
          );
          const { key: t, provide: n } = e.detail;
          if (!Qf(t)) return;
          const s = e.target;
          h(s instanceof Element, 'app/assets/modules/github/suggesters/audit-log-suggester.js:45'),
            n(
              (async function(e, t, n) {
                const s = (await Zf(e)).querySelector(
                  (function(e) {
                    const t = Xf[e];
                    if (!t) throw new Error(`Unknown audit log expander key: ${e}`);
                    return t;
                  })(t),
                );
                if (!s) return { matched: !1 };
                const o = Ro(s, n, { limit: 5 });
                return { fragment: s.cloneNode(!0), matched: o > 0 };
              })(p(s, 'data-audit-url'), t, e.detail.text),
            );
        }
        function Qf(e) {
          return Object.getOwnPropertyNames(Xf).includes(e);
        }
        i('text-expander[data-audit-url]', {
          subscribe: e => F(q(e, 'text-expander-change', Gf), q(e, 'text-expander-value', Jf)),
        });
        const Zf = Yf(async function(e) {
          const t = await R(document, e),
            n = document.createElement('div');
          return n.append(t), n;
        });
        const ep = {};
        function tp(e) {
          const t = e.getAttribute('data-emoji-name') || '';
          return (
            (ep[t] = ` ${(function(e) {
              return (e.getAttribute('data-text') || '').trim().toLowerCase();
            })(e).replace(/_/g, ' ')}`),
            t
          );
        }
        function np(e, t) {
          const n = ep[e].indexOf(t);
          return n > -1 ? 1e3 - n : 0;
        }
        function sp(e) {
          h(e instanceof CustomEvent, 'app/assets/modules/github/suggesters/emoji-suggester.js:66'),
            ':' === e.detail.key &&
              (e.detail.value = (function(e) {
                if (e.hasAttribute('data-use-colon-emoji')) return e.getAttribute('data-value');
                const t = e.firstElementChild;
                return t && 'G-EMOJI' === t.tagName && !t.firstElementChild
                  ? t.textContent
                  : e.getAttribute('data-value');
              })(e.detail.item));
        }
        function op(e) {
          h(e instanceof CustomEvent, 'app/assets/modules/github/suggesters/emoji-suggester.js:72');
          const { key: t, provide: n } = e.detail;
          if (':' !== t) return;
          const s = e.target;
          h(s instanceof Element, 'app/assets/modules/github/suggesters/emoji-suggester.js:78'),
            n(
              (async function(e, t) {
                const n = await ip(e),
                  s = (function(e, t) {
                    return Ro(t, ` ${e.toLowerCase().replace(/_/g, ' ')}`, {
                      limit: 5,
                      text: tp,
                      score: np,
                    });
                  })(t, n);
                return { fragment: n, matched: s > 0 };
              })(p(s, 'data-emoji-url'), e.detail.text),
            );
        }
        i('text-expander[data-emoji-url]', {
          subscribe: e => F(q(e, 'text-expander-change', op), q(e, 'text-expander-value', sp)),
        });
        const ip = Yf(async function(e) {
          const t = (await R(document, e)).firstElementChild;
          return (
            h(
              t instanceof HTMLElement,
              'app/assets/modules/github/suggesters/emoji-suggester.js:93',
            ),
            t
          );
        });
        function rp(e, t, n) {
          const s = new RegExp(`\\b${((o = e), o.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))}`);
          var o;
          const i = /^\d+$/.test(e)
              ? e =>
                  (function(e, t) {
                    const n = e.search(t);
                    return n > -1 ? 1e3 - n : 0;
                  })(e, s)
              : t => Ho(t, e),
            r = cl(n, e, {
              limit: 5,
              text: e => `${e.number} ${e.title.trim().toLowerCase()}`,
              score: i,
            });
          return (
            (function(e, t) {
              const n = e => Qe`
      <li role="option" id="suggester-issue-${e.id}" data-value="${e.number}">
        <small>#${e.number}</small> ${e.title}
      </li>`;
              Ge(
                (e => Qe`
    <ul role="listbox" class="suggester-container suggester suggestions list-style-none position-absolute">
      ${e.map(n)}
    </ul>`)(e),
                t,
              );
            })(r, t),
            r.length
          );
        }
        function ap(e) {
          if (
            (h(
              e instanceof CustomEvent,
              'app/assets/modules/github/suggesters/issue-suggester.js:75',
            ),
            '#' !== e.detail.key)
          )
            return;
          const t = p(e.detail.item, 'data-value');
          e.detail.value = `#${t}`;
        }
        function cp(e) {
          h(e instanceof CustomEvent, 'app/assets/modules/github/suggesters/issue-suggester.js:82');
          const { key: t, provide: n } = e.detail;
          if ('#' !== t) return;
          const s = e.target;
          h(s instanceof Element, 'app/assets/modules/github/suggesters/issue-suggester.js:88'),
            n(
              (async function(e, t) {
                const n = await lp(e),
                  s = document.createElement('div'),
                  o = rp(t, s, n),
                  i = s.firstElementChild;
                return (
                  h(
                    i instanceof HTMLElement,
                    'app/assets/modules/github/suggesters/issue-suggester.js:99',
                  ),
                  { fragment: i, matched: o > 0 }
                );
              })(p(s, 'data-issue-url'), e.detail.text),
            );
        }
        i('text-expander[data-issue-url]', {
          subscribe: e => F(q(e, 'text-expander-change', cp), q(e, 'text-expander-value', ap)),
        });
        const lp = Yf(K);
        function up(e, t, n) {
          const s = cl(n, e, {
            limit: 5,
            score: dp(e).score,
            text: e =>
              e.description
                ? `${e.name} ${e.description}`.trim().toLowerCase()
                : `${e.login} ${e.name}`.trim().toLowerCase(),
          });
          return (
            (function(e, t) {
              const n = e => {
                const t = 'user' === e.type ? e.login : e.name,
                  n = 'user' === e.type ? e.name : e.description;
                return Qe`
      <li
        role="option"
        id="suggester-${e.id}-${e.type}-${t}"
        data-value="${t}">
        <span>${t}</span>
        <small>${n}</small>
      </li>`;
              };
              Ge(
                (e => Qe`
    <ul role="listbox" class="suggester-container suggester suggestions list-style-none position-absolute">
      ${e.map(n)}
    </ul>`)(e),
                t,
              );
            })(s, t),
            s.length
          );
        }
        function dp(e) {
          let t;
          if (e) {
            const n = e.toLowerCase().split('');
            t = function(t) {
              if (!t) return 0;
              const s = (function(e, t) {
                let n, s, o, i;
                const r = (function(e, t) {
                  let n = 0;
                  const s = [];
                  for (; (n = e.indexOf(t, n)) > -1; ) s.push(n++);
                  return s;
                })(e, t[0]);
                if (0 === r.length) return;
                if (1 === t.length) return [r[0], 1, []];
                for (i = null, s = 0, o = r.length; s < o; s++) {
                  const o = r[s];
                  if (!(n = mp(e, t, o + 1))) continue;
                  const a = n[n.length - 1] - o;
                  (!i || a < i[1]) && (i = [o, a, n]);
                }
                return i;
              })(t, n);
              if (!s) return 0;
              let o = e.length / s[1];
              return (o /= s[0] / 2 + 1);
            };
          } else t = () => 2;
          return { score: t };
        }
        function mp(e, t, n) {
          let s = n;
          const o = [];
          for (let i = 1; i < t.length; i += 1) {
            if (-1 === (s = e.indexOf(t[i], s))) return;
            o.push(s++);
          }
          return o;
        }
        function fp(e) {
          if (
            (h(
              e instanceof CustomEvent,
              'app/assets/modules/github/suggesters/mention-suggester.js:147',
            ),
            '@' !== e.detail.key)
          )
            return;
          const t = p(e.detail.item, 'data-value');
          e.detail.value = `@${t}`;
        }
        function pp(e) {
          h(
            e instanceof CustomEvent,
            'app/assets/modules/github/suggesters/mention-suggester.js:154',
          );
          const { key: t, provide: n } = e.detail;
          if ('@' !== t) return;
          const s = e.target;
          h(s instanceof Element, 'app/assets/modules/github/suggesters/mention-suggester.js:160'),
            n(
              (async function(e, t) {
                const n = await gp(e),
                  s = document.createElement('div'),
                  o = up(t, s, n),
                  i = s.firstElementChild;
                return (
                  h(
                    i instanceof HTMLElement,
                    'app/assets/modules/github/suggesters/mention-suggester.js:171',
                  ),
                  { fragment: i, matched: o > 0 }
                );
              })(p(s, 'data-mention-url'), e.detail.text),
            );
        }
        i('text-expander[data-mention-url]', {
          subscribe: e => F(q(e, 'text-expander-change', pp), q(e, 'text-expander-value', fp)),
        });
        const gp = Yf(K);
        function hp(e, t) {
          const n = m(e, '.js-survey-question-form'),
            s = g(n, 'input.js-survey-other-text', HTMLInputElement);
          n.classList.toggle('is-other-selected', t),
            (s.hidden = !t),
            t ? ((s.required = !0), s.focus()) : (s.required = !1),
            L(s, 'change');
        }
        u('change', 'select.js-survey-select', function({ currentTarget: e }) {
          h(e instanceof HTMLSelectElement, 'app/assets/modules/github/survey.js:24'),
            hp(e, e.options[e.selectedIndex].classList.contains('js-survey-option-other'));
        }),
          u('change', 'input.js-survey-radio', function({ currentTarget: e }) {
            h(e instanceof HTMLInputElement, 'app/assets/modules/github/survey.js:30'),
              hp(e, e.classList.contains('js-survey-radio-other'));
          }),
          i('.js-file-line-container, .js-code-block-container', {
            constructor: HTMLElement,
            subscribe(e) {
              const t = document.querySelector('.js-tagsearch-popover');
              if (!t) return { unsubscribe() {} };
              const n = g(t, '.js-tagsearch-popover-content'),
                s = new WeakMap(),
                o = new WeakMap();
              let i;
              async function r(n) {
                const i = (function(e, t, n) {
                  let s, o;
                  if (document.caretPositionFromPoint) {
                    const e = document.caretPositionFromPoint(t, n);
                    e && ((s = e.offsetNode), (o = e.offset));
                  } else if (document.caretRangeFromPoint) {
                    const e = document.caretRangeFromPoint(t, n);
                    e && ((s = e.startContainer), (o = e.startOffset));
                  }
                  if (!s || 'number' != typeof o || s.nodeType !== Node.TEXT_NODE) return;
                  const i = s.textContent;
                  if (!i) return null;
                  const r = (function(e, t, n) {
                    let s;
                    for (; (s = t.exec(e)); ) {
                      const e = s.index + s[0].length;
                      if (s.index < n && n < e) return [s[0], s.index, e];
                    }
                    return null;
                  })(i, e, o);
                  if (!r) return null;
                  const a = document.createRange();
                  return a.setStart(s, r[1]), a.setEnd(s, r[2]), a;
                })(/\w+[!?]?/g, n.clientX, n.clientY);
                if (!i) return;
                const r = i.commonAncestorContainer.parentElement;
                h(r, 'app/assets/modules/github/tagsearch.js:24');
                for (const e of r.classList)
                  if (['pl-token', 'pl-c', 'pl-s', 'pl-k'].includes(e)) return;
                const c = i.toString();
                if (!c || c.match(/\n|\s|[();&.=",]/)) return;
                let l = o.get(r);
                if ((l || ((l = new Set()), o.set(r, l)), l.has(c))) return;
                l.add(c);
                let u = p(t, 'data-tagsearch-lang');
                if ('HTML+ERB' === u) {
                  if (!r.closest('.pl-sre')) return;
                  u = 'Ruby';
                }
                if (
                  e.classList.contains('js-code-block-container') &&
                  !(u = (function(e) {
                    const t = e.closest('.highlight');
                    if (t)
                      for (const n of t.classList)
                        switch (n) {
                          case 'highlight-source-go':
                            return 'Go';
                          case 'highlight-source-js':
                            return 'JavaScript';
                          case 'highlight-source-python':
                            return 'Python';
                          case 'highlight-source-ruby':
                            return 'Ruby';
                          case 'highlight-source-ts':
                            return 'TypeScript';
                        }
                    return null;
                  })(r))
                )
                  return;
                const d = await (async function(e, t, n) {
                  const s = p(e, 'data-tagsearch-url'),
                    o = p(e, 'data-tagsearch-path'),
                    i = p(e, 'data-tagsearch-ref'),
                    r = new URL(s, window.location.origin),
                    a = new URLSearchParams();
                  a.set('q', t),
                    a.set('context', o),
                    a.set('ref', i),
                    a.set('lang', n),
                    (r.search = a.toString());
                  const c = await A(r);
                  return /js-tagsearch-no-definitions/.test(c) ? '' : c;
                })(t, c, u);
                if (!d) return;
                const m = document.createElement('span');
                m.classList.add('pl-token'),
                  m.addEventListener('click', a),
                  m.setAttribute('data-hydro-click', p(t, 'data-hydro-click')),
                  m.setAttribute('data-hydro-click-hmac', p(t, 'data-hydro-click-hmac')),
                  s.set(m, d),
                  i.surroundContents(m);
              }
              function a(e) {
                if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                const o = e.currentTarget;
                h(o instanceof HTMLElement, 'app/assets/modules/github/tagsearch.js:75'),
                  o === i
                    ? l()
                    : ((function(e) {
                        i && i.classList.remove('active');
                        (i = e).classList.add('active'), (n.innerHTML = s.get(e) || ''), c(e);
                        const t = e.closest('.js-file-line');
                        t &&
                          (function(e) {
                            const t = e.id.replace(/^LC/, ''),
                              s = n.querySelector('.js-tagsearch-looking-at-def'),
                              o = n.querySelector('.js-tagsearch-defined-on');
                            if (!t || !s || !o) return;
                            p(s, 'data-row') === t && ((s.hidden = !1), (o.hidden = !0));
                          })(t);
                      })(o),
                      (function() {
                        if (!t.hidden) return;
                        (t.hidden = !1),
                          document.addEventListener('click', d),
                          document.addEventListener('keyup', m),
                          window.addEventListener('resize', u, { passive: !0 });
                      })()),
                  e.preventDefault();
              }
              function c(e) {
                const n = e.getClientRects()[0];
                (t.style.position = 'absolute'),
                  (t.style.top = `${window.scrollY + n.bottom + 7}px`),
                  (t.style.left = `${window.scrollX + n.left}px`);
              }
              function l() {
                t.hidden ||
                  ((t.hidden = !0),
                  i && i.classList.remove('active'),
                  (i = null),
                  document.removeEventListener('click', d),
                  document.removeEventListener('keyup', m),
                  window.removeEventListener('resize', u));
              }
              function u() {
                i instanceof HTMLElement && c(i);
              }
              function d(e) {
                const { target: n } = e;
                n instanceof Node &&
                  (h(i, 'app/assets/modules/github/tagsearch.js:152'),
                  t.contains(n) || i.contains(n) || l());
              }
              function m(e) {
                switch (e.key) {
                  case 'Escape':
                    l();
                }
              }
              return (
                e.addEventListener('mousemove', r),
                {
                  unsubscribe() {
                    e.removeEventListener('mousemove', r);
                  },
                }
              );
            },
          });
        const bp = new S();
        const vp = j(async function() {
          const e = g(document, '.js-quick-pull-new-branch-name', HTMLInputElement),
            t = e.value,
            n = e.getAttribute('data-generated-branch');
          if (null == n) throw new Error('Missing attribute `data-generated-branch`');
          const s = g(document, '.js-quick-pull-normalization-info'),
            o = e.getAttribute('data-check-authenticity-token') || '',
            i = new FormData();
          i.append('ref', t), i.append('authenticity_token', o);
          const r = p(e, 'data-check-url'),
            a = K(r, { method: 'post', body: i }),
            c = await bp.push(a);
          try {
            !(function(o) {
              if (t !== e.value) return;
              const i = o.normalized_ref;
              (s.innerHTML = null == o.message_html ? '' : o.message_html),
                i || (g(s, 'code').textContent = n);
            })(c);
          } catch (Rh) {
            e.value;
          }
        }, 200);
        function jp() {
          return document.querySelectorAll('.js-template-editor').length > 0;
        }
        function yp() {
          return document.querySelectorAll('.js-template-form.is-loading').length > 0
            ? 'loading'
            : document.querySelectorAll('.js-template-form.is-errored').length > 0
            ? 'error'
            : 'ok';
        }
        function Lp() {
          const e = g(document, '.js-commit-templates-form', HTMLFormElement),
            t = g(e, '.js-blob-submit', HTMLButtonElement),
            n = g(document, '.js-template-commit-form-error-message'),
            s = g(document, '.js-template-commit-form-loading-message');
          switch (yp()) {
            case 'loading':
              n.classList.add('d-none'),
                s.classList.remove('d-none'),
                e.setAttribute('disabled', 'disabled'),
                t.setAttribute('disabled', 'disabled');
              break;
            case 'error':
              n.classList.remove('d-none'),
                s.classList.add('d-none'),
                e.setAttribute('disabled', 'disabled'),
                t.setAttribute('disabled', 'disabled');
              break;
            default:
              n.classList.add('d-none'),
                s.classList.add('d-none'),
                e.removeAttribute('disabled'),
                t.removeAttribute('disabled');
          }
        }
        async function wp(e) {
          e.classList.add('is-loading'), Lp();
          const t = g(e, '[name="filename"]', HTMLInputElement).value,
            n = {};
          for (const c of f(document, '.js-template-form', HTMLFormElement)) {
            const e = g(c, '[name="filename"]', HTMLInputElement).value;
            n[e] = {};
            for (const [t, s] of Ae(c)) n[e][t] = s;
          }
          const s = new FormData(e);
          s.append('current', t), s.append('templates', JSON.stringify(n));
          const o = await K(e.action, { method: 'POST', body: s }),
            i = xe(document, o.html);
          m(e, '.js-template-preview').replaceWith(i);
          const r = g(document, '.js-hidden-template-fields');
          let a = r.querySelector(`[data-filename="${o.filename}"]`);
          a instanceof HTMLInputElement
            ? (a.value = o.markdown)
            : (((a = document.createElement('input')).type = 'hidden'),
              (a.name = `templates[][${o.filename}]`),
              a.setAttribute('data-filename', o.filename),
              (a.value = o.markdown),
              r.append(a)),
            e.classList.remove('is-loading'),
            Lp();
        }
        function Ep() {
          for (const e of f(document, '.js-template-form', HTMLFormElement)) wp(e);
        }
        function Tp(e) {
          if (
            (function(e) {
              let t;
              try {
                t = new URL(e.url);
              } catch (n) {
                return !0;
              }
              return t.host !== window.location.host;
            })(e) ||
            (function(e) {
              return /[?&]_pjax=/.test(e.url);
            })(e)
          )
            return;
          const t = (function() {
            const e = document.querySelector('.js-timeline-marker');
            return null != e ? e.getAttribute('data-last-modified') : null;
          })();
          t && e.headers.set('X-Timeline-Last-Modified', t);
        }
        function kp(e) {
          !(function(e) {
            const t = e.closest('details, .js-details-container');
            if (!t) return;
            h(t instanceof HTMLElement, 'app/assets/modules/github/timeline/progressive.js:79'),
              'DETAILS' === t.nodeName ? t.setAttribute('open', 'open') : Ze(t) || Le(t);
          })(e);
          const t = e.querySelector(`[href='#${e.id}']`);
          t && t.click();
        }
        function Mp() {
          return window.location.hash.slice(1);
        }
        i('.js-template-form .js-issue-labels', {
          add(e) {
            const t = e.closest('.js-issue-template-labels-container');
            if (!t) return;
            const n = g(t, '.js-issue-template-labels', HTMLInputElement);
            n.value = '';
            for (const s of e.children) {
              const e = s.getAttribute('data-name');
              e &&
                !n.value.includes(e) &&
                ('' === n.value ? (n.value = e) : (n.value = `${n.value}, ${e}`));
            }
          },
        }),
          i('.js-template-form .js-issue-assignees', {
            add(e) {
              const t = e.closest('.js-issue-template-assignees-container');
              h(t instanceof HTMLElement, 'app/assets/modules/github/template-editor.js:98');
              const n = g(t, '.js-issue-template-assignees', HTMLInputElement);
              n.value = '';
              for (const s of e.children) {
                const e = s.querySelector('span');
                if (e) {
                  const t = e.getAttribute('data-assignee-name');
                  t &&
                    !n.value.includes(t) &&
                    ('' === n.value ? (n.value = t) : (n.value = `${n.value}, ${t}`));
                }
              }
            },
          }),
          u('change', '.js-quick-pull-choice-option', function(e) {
            if (!jp()) return;
            const t = e.currentTarget;
            h(t instanceof HTMLInputElement, 'app/assets/modules/github/template-editor.js:126'),
              g(document, '.js-commit-branch-name').classList.toggle(
                'd-none',
                'quick-pull' !== t.value,
              ),
              g(document, '.js-quick-pull-new-branch-name').toggleAttribute(
                'required',
                'quick-pull' === t.value,
              );
          }),
          l('.js-quick-pull-new-branch-name', function(e) {
            if (!jp()) return;
            const t = e.target;
            h(t instanceof HTMLInputElement, 'app/assets/modules/github/template-editor.js:140');
            const n = t.value;
            (g(document, '.js-quick-pull-target-branch', HTMLInputElement).value = n),
              n.length && vp();
          }),
          l('.js-synced-template-input', function(e) {
            const t = e.target;
            h(t instanceof HTMLInputElement, 'app/assets/modules/github/template-editor.js:151');
            const n = t.getAttribute('data-sync');
            if (!n) return;
            const s = m(t, '.js-sync-container'),
              o = f(s, `[data-sync-with="${n}"]`),
              i = t.value;
            if ('' !== i.trim()) {
              for (const e of o) e.textContent = t.value;
              if ('name' === n) {
                g(s, '.js-sync-filename', HTMLInputElement).value = `${i.replace(
                  /[^\w]/g,
                  '-',
                )}.md`.toLowerCase();
              }
            } else
              for (const r of o) {
                const e = r.getAttribute('data-sync-blank');
                e && (r.innerHTML = `<span class="text-gray">${e}</span>`);
              }
          }),
          u('submit', '.js-template-form', function(e) {
            e.preventDefault();
            const t = e.currentTarget;
            h(t instanceof HTMLFormElement, 'app/assets/modules/github/template-editor.js:287'),
              wp(t);
          }),
          u('click', '.js-toggle-template-commit', function() {
            const e = g(document, '.js-template-commit-pane');
            e.classList.toggle('d-none'), e.classList.contains('d-none') || Ep();
          }),
          u('submit', '.js-commit-templates-form', function(e) {
            'ok' !== yp() && e.preventDefault(), Lp();
          }),
          u('click', '.js-refresh-template-content', async function(e) {
            const t = e.currentTarget,
              n = m(t, '.js-template-form'),
              s = g(n, '.js-template-content-preview');
            s.innerHTML = '<span class="text-gray">Loading preview...</span>';
            const o = g(n, '.js-template-content-textarea', HTMLTextAreaElement).value,
              i = t.getAttribute('data-markdown-preview-url'),
              r = t.getAttribute('data-markdown-preview-token');
            if (!i || !r) return;
            const a = new FormData();
            a.append('markdown', o), a.append('authenticity_token', r);
            const c = await A(i, { method: 'POST', body: a });
            s.innerHTML = c;
          }),
          u('click', '.js-custom-template-toggle', e => {
            const t = e.target,
              n = m(t, '.js-template-preview'),
              s = !n.classList.contains('expand-preview');
            if (
              ((function() {
                const e = document.querySelectorAll('.js-template-preview');
                for (const t of e) t.classList.remove('expand-preview');
              })(),
              s)
            )
              n.classList.add('expand-preview'),
                n.scrollIntoView({ behavior: 'smooth', block: 'start' });
            else {
              wp(g(n, '.js-template-form', HTMLFormElement));
            }
          }),
          u('click', '.js-remove-template-button', function(e) {
            const t = m(e.target, '.js-template-preview'),
              n = p(t, 'data-filename'),
              s = g(document, '.js-hidden-template-fields'),
              o = g(document, '.js-toggle-template-commit', HTMLButtonElement),
              i = s.querySelector(`[data-filename="${n}"]`);
            i && i.remove(), (o.disabled = !1), t.remove(), Ep();
          }),
          u('click', '.js-edit-custom-field-header', function(e) {
            m(e.target, '.js-custom-field-header').classList.toggle('section-focus'),
              (g(document, '.js-toggle-template-commit', HTMLButtonElement).disabled = !1);
          }),
          u(
            'details-menu-selected',
            '.js-add-template',
            function(e) {
              const t = g(document, '.js-templates-container'),
                n = g(document, '.js-toggle-template-commit', HTMLButtonElement);
              h(e instanceof CustomEvent, 'app/assets/modules/github/template-editor.js:383');
              const s = e.detail.relatedTarget.getAttribute('data-source');
              if (!s) return;
              n.disabled = !1;
              const o = g(document, `#${s}`);
              t.insertAdjacentHTML('beforeend', o.innerHTML);
            },
            { capture: !0 },
          ),
          u('change', '.js-template-repository-choice', function(e) {
            const t = e.target;
            h(
              t instanceof HTMLInputElement,
              'app/assets/modules/github/template-repositories.js:9',
            );
            const n = t.checked && '' !== t.value,
              s = t.form;
            h(s, 'app/assets/modules/github/template-repositories.js:12'),
              (g(s, '.js-repository-auto-init-options').hidden = n);
            const o = f(s, '.js-template-repository-setting'),
              i = f(s, '.js-template-repository-name-display');
            if (n) {
              const e = m(t, '.js-template-repository-choice-container'),
                n = g(e, '.js-template-repository-name');
              g(s, '.js-repository-readme-choice', HTMLInputElement).checked = !1;
              const o = g(s, '.js-repository-no-gitignore-choice', HTMLInputElement);
              (o.checked = !0), L(o, 'change');
              const r = g(s, '.js-repository-no-license-choice', HTMLInputElement);
              (r.checked = !0), L(r, 'change');
              const a = p(t, 'data-owner'),
                c = s.querySelector(`.js-repository-owner-choice[value=${a}]`);
              if (c)
                h(
                  c instanceof HTMLInputElement,
                  'app/assets/modules/github/template-repositories.js:36',
                ),
                  (c.checked = !0),
                  L(c, 'change');
              else {
                const e = g(
                  s,
                  '.js-repository-owner-choice.js-repository-owner-is-viewer',
                  HTMLInputElement,
                );
                (e.checked = !0), L(e, 'change');
              }
              for (const t of i) t.textContent = n.textContent;
            } else for (const r of i) r.textContent = '';
            for (const r of o) r.hidden = !n;
          }),
          i('.js-discussion', function() {
            let e;
            function t() {
              e = new WeakSet(document.querySelectorAll('.js-timeline-item'));
            }
            t(),
              document.addEventListener('pjax:end', t),
              i('.js-timeline-item', t => {
                e.has(t) ||
                  (function(e) {
                    const t = document.querySelector('.js-global-screen-reader-notice');
                    t &&
                      ((t.textContent = ''),
                      (t.textContent = (function(e) {
                        return (e.innerText || '').trim();
                      })(e)));
                  })(t);
              });
          }),
          v('.js-needs-timeline-marker-header', function(e, t, n) {
            Tp(n);
          }),
          u('deprecatedAjaxSend', '[data-remote]', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/timeline/marker.js:51');
            const { request: t } = e.detail;
            Tp(t);
          }),
          ce(function({ target: e }) {
            const t = Mp();
            t &&
              !e &&
              (async function(e) {
                const t = document.getElementById('js-timeline-progressive-loader');
                if (!t) return;
                const n = t.getAttribute('data-timeline-item-src');
                if (!n) return;
                const s = new URL(n, window.location.origin),
                  o = new URLSearchParams(s.search.slice(1));
                let i;
                o.append('anchor', e), (s.search = o.toString());
                try {
                  i = await R(document, s);
                } catch (l) {
                  return;
                }
                const r = i.querySelector('.js-timeline-item');
                if (!r) return;
                const a = r.getAttribute('data-gid');
                if (!a) return;
                const c = document.querySelector(`.js-timeline-item[data-gid='${a}']`);
                if (c) {
                  c.replaceWith(r);
                  const t = document.getElementById(e);
                  t && kp(t);
                } else {
                  const t = document.getElementById('js-progressive-timeline-item-container');
                  t && t.replaceWith(i);
                  const n = document.getElementById(e);
                  n && kp(n);
                }
              })(t);
          }),
          i('.js-timeline-progressive-focus-container', function(e) {
            const t = Mp();
            if (!t) return;
            const n = document.getElementById(t);
            n && e.contains(n) && kp(n);
          });
        const Ap = 'navigationStart';
        function xp() {
          const e = {};
          e.crossBrowserLoadEvent = Date.now();
          const t = window.performance && window.performance.timing;
          if (t)
            for (const s in t) {
              const n = t[s];
              'number' == typeof n && (e[s] = n);
            }
          else {
            const t = (function() {
              const e = La(Ap);
              if (e) return parseInt(e, 10);
            })();
            null != t && (e.simulatedNavigationStart = t);
          }
          const n = (function() {
            if (
              window.performance &&
              'timeOrigin' in window.performance &&
              window.performance.getEntriesByType
            ) {
              const e = window.performance.getEntriesByType('paint');
              if (e.length) {
                const t = e.find(e => 'first-paint' === e.name);
                if (t) return Math.round((performance.timeOrigin + t.startTime) / 1e6);
              }
            }
          })();
          return null != n && (e.chromeFirstPaintTime = n), e;
        }
        function Sp(e) {
          const t = m(e, '.js-topic-save-notice-container'),
            n = g(t, '.js-repo-topics-save-notice');
          n.classList.remove('d-none'),
            n.classList.add('d-inline-block', 'anim-fade-in'),
            setTimeout(() => {
              n.classList.remove('d-inline-block'), n.classList.add('d-none');
            }, 1900);
        }
        function Hp(e) {
          const t = g(e, '.js-topic-suggestions-box');
          t.querySelector('.js-topic-suggestion') || t.remove();
        }
        async function Cp(e) {
          const t = e.querySelector('.js-topic-suggestions-container');
          if (!t) return;
          const n = p(t, 'data-url'),
            s = await R(document, n);
          (t.innerHTML = ''), t.appendChild(s);
        }
        function qp() {}
        window.performance ||
          window.performance.timing ||
          window.addEventListener('pagehide', function() {
            wa(Ap, Date.now().toString());
          }),
          (async function() {
            await I, await new Promise(e => setTimeout(e));
            const e = (function() {
              const e = [],
                t = window.performance;
              if (t && t.getEntriesByType)
                for (const n of t.getEntriesByType('resource')) {
                  const t = {};
                  e.push(t);
                  for (const e in n) {
                    const s = n[e];
                    ('number' != typeof s && 'string' != typeof s) || (t[e] = s);
                  }
                }
              return e;
            })();
            e.length && C({ resourceTimings: e });
            const t = (function() {
              const e = [],
                t = window.performance;
              if (t && t.getEntriesByType)
                for (const s of t.getEntriesByType('navigation')) {
                  const t = {};
                  e.push(t);
                  for (const e in s) {
                    const n = s[e];
                    'name' === e || ('number' != typeof n && 'string' != typeof n) || (t[e] = n);
                  }
                }
              const n = xp();
              return (
                n &&
                  0 === e.length &&
                  e.push({
                    name: location.href,
                    entryType: 'navigation',
                    startTime: 0,
                    duration: n.loadEventEnd - n.navigationStart,
                    initiatorType: 'navigation',
                    nextHopProtocol: 'http/1.1',
                    type: 'navigate',
                    redirectStart: n.redirectStart,
                    redirectEnd: n.redirectEnd,
                    fetchStart: n.fetchStart,
                    domainLookupStart: n.domainLookupStart,
                    domainLookupEnd: n.domainLookupEnd,
                    connectStart: n.connectStart,
                    connectEnd: n.connectEnd,
                    secureConnectionStart: n.secureConnectionStart,
                    requestStart: n.requestStart,
                    responseStart: n.responseStart,
                    responseEnd: n.responseEnd,
                    unloadEventStart: n.unloadEventStart,
                    unloadEventEnd: n.unloadEventEnd,
                    domInteractive: n.domInteractive,
                    domContentLoadedEventStart: n.domContentLoadedEventStart,
                    domContentLoadedEventEnd: n.domContentLoadedEventEnd,
                    domComplete: n.domComplete,
                    loadEventStart: n.loadEventStart,
                    loadEventEnd: n.loadEventEnd,
                  }),
                e
              );
            })();
            t.length && C({ navigationTimings: t });
          })(),
          u('click', '.js-toggler-container .js-toggler-target', function(e) {
            if (
              (h(e instanceof MouseEvent, 'app/assets/modules/github/toggler.js:41'),
              h(e.currentTarget, 'app/assets/modules/github/toggler.js:42'),
              0 !== e.button)
            )
              return;
            const t = e.currentTarget.closest('.js-toggler-container'),
              n = e.currentTarget.closest('.js-toggler-container-secondary');
            t.classList.toggle('on'), n && n.classList.toggle('on');
          }),
          v('.js-toggler-container', async (e, t) => {
            e.classList.remove('success', 'error'), e.classList.add('loading');
            try {
              await t.text(), e.classList.add('success');
            } catch (n) {
              e.classList.add('error');
            } finally {
              e.classList.remove('loading');
            }
          }),
          v('.js-accept-topic-form', async function(e, t) {
            await t.html();
            const n = m(e, '.js-topic-form-area'),
              s = m(e, '.js-topic-suggestion'),
              o = g(n, '.js-template'),
              i = g(n, '.js-tag-input-selected-tags'),
              r = o.cloneNode(!0),
              a = g(s, 'input[name="input[name]"]', HTMLInputElement).value;
            (g(r, 'input', HTMLInputElement).value = a),
              g(r, '.js-placeholder-tag-name').replaceWith(a),
              r.classList.remove('d-none', 'js-template'),
              i.appendChild(r),
              s.remove(),
              Cp(n),
              Hp(n),
              Sp(e);
          }),
          u('click', '.js-repo-topics-form-done', function() {
            !(async function() {
              const e = g(document, '.js-topics-list-container'),
                t = p(e, 'data-url'),
                n = await R(document, t);
              (e.innerHTML = ''), e.appendChild(n);
            })();
          }),
          v('.js-decline-topic-form', async function(e, t) {
            await t.html(), Sp(e);
            const n = m(e, '.js-topic-form-area');
            m(e, '.js-topic-suggestion').remove(), Cp(n), Hp(n);
          }),
          v('.js-repo-topics-edit-form', async function(e, t) {
            const n = m(e, '.js-topic-form-area');
            n.classList.remove('errored'), (g(n, '.js-topic-error').textContent = '');
            for (const o of n.querySelectorAll('.js-tag-input-tag.invalid-topic'))
              o.classList.remove('invalid-topic');
            try {
              await t.json(), Sp(e), Cp(n);
            } catch (s) {
              const t = s.response.json;
              if (
                (t.message &&
                  (n.classList.add('errored'), (g(n, '.js-topic-error').textContent = t.message)),
                t.invalidTopics)
              ) {
                const n = f(e, '.js-topic-input', HTMLInputElement);
                for (const e of t.invalidTopics)
                  for (const t of n)
                    if (t.value === e) {
                      m(t, '.js-tag-input-tag').classList.add('invalid-topic');
                    }
              }
            }
          }),
          u('tags:changed', '.js-repo-topics-edit-form', function({ target: e }) {
            h(e instanceof HTMLFormElement, 'app/assets/modules/github/topics.js:139'), y(e);
          }),
          u('click', '.js-reveal-hidden-topics', function(e) {
            const t = e.target,
              n = m(t, '.js-hidden-topics-container').querySelector('.js-hidden-topics');
            n && (n.classList.remove('d-none'), t.remove());
          }),
          i('.js-touch-events', {
            add(e) {
              e.addEventListener('click', qp);
            },
            remove(e) {
              e.removeEventListener('click', qp);
            },
          }),
          u('click', '.js-hide-content-attachment', function(e) {
            e.preventDefault(),
              (function(e) {
                const t = m(e, '.js-content-attachment'),
                  n = p(m(e, '[data-unfurl-hide-url]'), 'data-unfurl-hide-url'),
                  s = p(m(e, '[data-unfurl-authenticity-token]'), 'data-unfurl-authenticity-token'),
                  o = p(e, 'data-id'),
                  i = new XMLHttpRequest();
                (i.onload = function() {
                  i.status >= 200 && i.status < 300 && t.remove();
                }),
                  i.open('POST', n);
                const r = new FormData();
                r.append('id', o), r.append('authenticity_token', s), i.send(r);
              })(e.currentTarget);
          }),
          i('.js-content-attachment .max--md', function(e) {
            const t = g(e, '.markdown-body');
            var n;
            (t.clientHeight < 188 ||
              ('' === (n = t).textContent.trim() && 1 === n.querySelectorAll('img').length)) &&
              (e.classList.remove('max--md'),
              (g(e, '.Details-content--closed').hidden = !0),
              (g(e, '.Details-content--open').hidden = !0));
          }),
          requestIdleCallback(() => {
            const e = no();
            if (e) {
              const t = 'https:' === location.protocol ? 'secure' : '';
              document.cookie = `tz=${encodeURIComponent(e)}; path=/; ${t}`;
            }
          });
        class Ip extends Error {
          constructor(e) {
            super(e), (this.name = 'LoginRequestDataError');
          }
        }
        function _p() {
          return g(document, '.js-use-security-key', HTMLButtonElement);
        }
        function $p(e, t) {
          for (const n of document.querySelectorAll('.js-u2f-message')) n.hidden = !0;
          if (((g(document, e).hidden = !1), nt() && t)) {
            const e = _p();
            e.textContent = p(e, 'data-retry-message');
          }
        }
        function Dp(e, t) {
          throw ($p(t, !0), e);
        }
        function Rp() {
          return g(document, '.js-u2f-auth-form', HTMLFormElement);
        }
        function Np(e) {
          const t = Rp();
          (g(t, '.js-u2f-auth-response', HTMLInputElement).value = JSON.stringify(e)), y(t);
        }
        class Bp {
          constructor() {
            const e = Rp(),
              t = e.getAttribute('data-app-id'),
              n = e.getAttribute('data-challenge'),
              s = e.getAttribute('data-sign-requests');
            if (null == t || null == n || null == s)
              throw new Ip('Missing data needed for security key request.');
            (this.appId = t), (this.challenge = n);
            try {
              this.signRequests = JSON.parse(s);
            } catch (Rh) {
              throw new Ip('Invalid data for security key request.');
            }
          }
        }
        const Pp = '.js-u2f-other-error',
          Fp = { 4: '.js-u2f-auth-not-registered-error', 5: '.js-u2f-auth-timeout' };
        function Op(e) {
          e && e.preventDefault(),
            h(tt(), 'app/assets/modules/github/u2f-auth-form.js:182'),
            nt()
              ? (async function() {
                  try {
                    $p('.js-webauthn-auth-waiting', !1);
                    const t = JSON.parse(p(Rp(), 'data-webauthn-sign-request')),
                      n = ot(t),
                      s = it();
                    h(
                      s,
                      'waitForWebauthnDevice() requires webauthn support -- app/assets/modules/github/u2f-auth-form.js:134',
                    );
                    const o = await s.get(n);
                    $p('.js-webauthn-auth-success', !1), (_p().disabled = !0), Np(rt(o));
                  } catch (e) {
                    Dp(e, '.js-webauthn-auth-error');
                  }
                })()
              : (async function() {
                  try {
                    const t = new Bp();
                    $p('.js-u2f-auth-waiting', !1),
                      Np(await st(t.appId, t.challenge, t.signRequests));
                  } catch (e) {
                    Dp(e, Fp[e.code] || Pp);
                  }
                })();
        }
        function Wp(e) {
          h(e instanceof Event, 'app/assets/modules/github/u2f-login.js:16'), Op(e);
        }
        i('.js-webauthn-support', function(e) {
          e instanceof HTMLInputElement && _(e, et());
        }),
          i('.js-u2f-auth-form-body', function(e) {
            if (!e) return;
            const t = tt();
            if ((e.classList.toggle('unavailable', !t), t))
              if (nt()) {
                const e = _p();
                (e.hidden = !1), e.classList.contains('js-webauthn-autofocus') && e.focus();
              } else Op();
          }),
          u('click', '.js-u2f-auth-retry', Wp),
          u('click', '.js-use-security-key', Wp),
          u('socket:message', '.js-updatable-content', function(e) {
            h(
              e instanceof CustomEvent,
              'app/assets/modules/github/updatable-content-observer.js:17',
            );
            const { gid: t, wait: n } = e.detail.data || {};
            let s;
            if (
              (t && e.target.getAttribute('data-gid') === t
                ? (s = e.target)
                : t
                ? (s = e.target.querySelector(`[data-url][data-gid="${t}"]`))
                : e.currentTarget === e.target && (s = e.target),
              !(s instanceof HTMLElement))
            )
              return;
            const o = Pe.bind(null, s);
            null == n ? o('live-update') : setTimeout(o, n, 'delayed-live-update');
          }),
          u('upload:setup', '.js-upload-avatar-image', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/upload/avatar.js:9');
            const t = e.detail.policyRequest,
              n = e.currentTarget.getAttribute('data-alambic-organization'),
              s = e.currentTarget.getAttribute('data-alambic-owner-type'),
              o = e.currentTarget.getAttribute('data-alambic-owner-id');
            n && t.body.append('organization_id', n),
              s && t.body.append('owner_type', s),
              o && t.body.append('owner_id', o);
          }),
          u('upload:complete', '.js-upload-avatar-image', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/upload/avatar.js:26');
            const t = `/settings/avatars/${e.detail.result.id}`;
            ne({ content: R(document, t) });
          });
        const Up = 2303741511,
          zp = 4;
        class Vp {
          static fromFile(e) {
            return new Promise(function(t, n) {
              const s = new FileReader();
              (s.onload = function() {
                h(s.result instanceof ArrayBuffer, 'app/assets/modules/github/png-scanner.js:38'),
                  t(new Vp(s.result));
              }),
                (s.onerror = function() {
                  n(s.error);
                }),
                s.readAsArrayBuffer(e);
            });
          }
          constructor(e) {
            (this.dataview = new DataView(e)), (this.pos = 0);
          }
          advance(e) {
            this.pos += e;
          }
          readInt(e) {
            const t = this,
              n = (function() {
                switch (e) {
                  case 1:
                    return t.dataview.getUint8(t.pos);
                  case 2:
                    return t.dataview.getUint16(t.pos);
                  case 4:
                    return t.dataview.getUint32(t.pos);
                  default:
                    throw new Error('bytes parameter must be 1, 2 or 4');
                }
              })();
            return this.advance(e), n;
          }
          readChar() {
            return this.readInt(1);
          }
          readShort() {
            return this.readInt(2);
          }
          readLong() {
            return this.readInt(4);
          }
          readString(e) {
            const t = [];
            for (let n = 0; n < e; n++) t.push(String.fromCharCode(this.readChar()));
            return t.join('');
          }
          scan(e) {
            if (this.readLong() !== Up) throw new Error('invalid PNG');
            for (this.advance(4); ; ) {
              const t = this.readLong(),
                n = this.readString(4),
                s = this.pos + t + zp;
              if (!1 === e.call(this, n, t) || 'IEND' === n) break;
              this.pos = s;
            }
          }
        }
        const Kp = 0.0254;
        function Yp(e, t) {
          const n = e.value.substring(0, e.selectionStart),
            s = e.value.substring(e.selectionEnd),
            o = 0 === n.length || n.match(/\n$/) ? '' : '\n',
            i = n + o + t;
          (e.value = i + s),
            (e.selectionStart = i.length),
            (e.selectionEnd = e.selectionStart),
            e.dispatchEvent(new CustomEvent('change', { bubbles: !0, cancelable: !1 })),
            e.focus();
        }
        function Xp(e) {
          const t = e.dataTransfer;
          if (!t) return;
          if (
            (function(e) {
              return Array.from(e.types).indexOf('Files') >= 0;
            })(t)
          )
            return;
          if (!Zp(t)) return;
          const n = eg(t);
          if (!n.some(ng)) return;
          e.stopPropagation(), e.preventDefault();
          const s = e.currentTarget;
          s instanceof HTMLTextAreaElement && Yp(s, n.map(Qp).join(''));
        }
        function Jp(e) {
          const t = e.dataTransfer;
          t && (t.dropEffect = 'link');
        }
        function Gp(e) {
          const t = e.clipboardData;
          if (!t || !Zp(t)) return;
          const n = eg(t);
          if (!n.some(ng)) return;
          e.stopPropagation(), e.preventDefault();
          const s = e.currentTarget;
          s instanceof HTMLTextAreaElement && Yp(s, n.map(Qp).join(''));
        }
        function Qp(e) {
          return ng(e) ? `\n![](${e})\n` : e;
        }
        function Zp(e) {
          return Array.from(e.types).indexOf('text/uri-list') >= 0;
        }
        function eg(e) {
          return (e.getData('text/uri-list') || '').split('\r\n');
        }
        const tg = /\.(gif|png|jpe?g)$/i;
        function ng(e) {
          return tg.test(e);
        }
        function sg(e) {
          const t = e.dataTransfer;
          if (!t) return;
          if (
            (function(e) {
              return Array.from(e.types).indexOf('Files') >= 0;
            })(t)
          )
            return;
          const n = cg(t);
          if (!n) return;
          e.stopPropagation(), e.preventDefault();
          const s = e.currentTarget;
          s instanceof HTMLTextAreaElement && Yp(s, ag(n));
        }
        function og(e) {
          const t = e.dataTransfer;
          t && (t.dropEffect = 'copy');
        }
        function ig(e) {
          if (!e.clipboardData) return;
          const t = cg(e.clipboardData);
          if (!t) return;
          e.stopPropagation(), e.preventDefault();
          const n = e.currentTarget;
          n instanceof HTMLTextAreaElement && Yp(n, ag(t));
        }
        function rg(e) {
          return (
            e.textContent
              .trim()
              .replace(/\|/g, '\\|')
              .replace(/\n/g, ' ') || ' '
          );
        }
        function ag(e) {
          const t = Array.from(e.querySelectorAll('tr')),
            n = ((s = t.shift()), Array.from(s.querySelectorAll('td, th')).map(rg));
          var s;
          const o = n.map(() => '--');
          return `\n${`${n.join(' | ')}\n${o.join(' | ')}\n`}${t
            .map(e =>
              Array.from(e.querySelectorAll('td'))
                .map(rg)
                .join(' | '),
            )
            .join('\n')}\n\n`;
        }
        function cg(e) {
          if (-1 === Array.from(e.types).indexOf('text/html')) return;
          const t = e.getData('text/html');
          if (!/<table/i.test(t)) return;
          const n = (function(e) {
            const t = document.createElement('div');
            return (t.innerHTML = e), t.querySelector('table');
          })(t);
          return n && !n.closest('.js-comment')
            ? /\b(js|blob|diff)-./.test(n.className)
              ? null
              : n
            : void 0;
        }
        function lg(e) {
          const t = e.clipboardData;
          if (
            !t ||
            !(function(e) {
              return Array.from(e.types).indexOf('text/x-gfm') >= 0;
            })(t)
          )
            return;
          const n = e.currentTarget;
          if (!(n instanceof HTMLTextAreaElement)) return;
          const s = t.getData('text/x-gfm');
          s && (e.stopPropagation(), e.preventDefault(), Yp(n, s));
        }
        function ug(e) {
          return `${dg(e) ? '!' : ''}[Uploading ${e.name}…]()`;
        }
        function dg(e) {
          return ['image/gif', 'image/png', 'image/jpg', 'image/jpeg'].indexOf(e.type) > -1;
        }
        i('.js-paste-markdown', {
          subscribe: function(e) {
            return (
              (function(e) {
                e.addEventListener('dragover', og),
                  e.addEventListener('drop', sg),
                  e.addEventListener('paste', ig);
              })(e),
              (function(e) {
                e.addEventListener('dragover', Jp),
                  e.addEventListener('drop', Xp),
                  e.addEventListener('paste', Gp);
              })(e),
              (function(e) {
                e.addEventListener('paste', lg);
              })(e),
              {
                unsubscribe: () => {
                  !(function(e) {
                    e.removeEventListener('dragover', og),
                      e.removeEventListener('drop', sg),
                      e.removeEventListener('paste', ig);
                  })(e),
                    (function(e) {
                      e.removeEventListener('dragover', Jp),
                        e.removeEventListener('drop', Xp),
                        e.removeEventListener('paste', Gp);
                    })(e),
                    (function(e) {
                      e.removeEventListener('paste', lg);
                    })(e);
                },
              }
            );
          },
        });
        const mg = 144;
        function fg(e) {
          const t = m(e, 'form', HTMLFormElement);
          return g(t, '#release_id', HTMLInputElement).value;
        }
        u('upload:setup', '.js-upload-markdown-image', function(e) {
          h(e instanceof CustomEvent, 'app/assets/modules/github/upload/markdown.js:52');
          const t = g(e.currentTarget, '.js-comment-field', HTMLTextAreaElement);
          t.setCustomValidity('uploading'), ke(t, `${ug(e.detail.file)}\n`);
        }),
          u('upload:complete', '.js-upload-markdown-image', async function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/upload/markdown.js:59');
            const t = e.detail,
              n = e.currentTarget,
              s = g(n, '.js-comment-field', HTMLTextAreaElement),
              o = ug(t.file);
            function i(e) {
              let n = `[${t.file.name}](${t.policy.asset.href})`;
              if (dg(t.file)) {
                const s = (function(e) {
                    return e
                      .replace(/[[\]\\"<>&]/g, '.')
                      .replace(/\.{2,}/g, '.')
                      .replace(/^\.|\.$/gi, '');
                  })(t.file.name)
                    .replace(/\.[^.]+$/, '')
                    .replace(/\./g, ' '),
                  o = t.policy.asset.href;
                if (e && e.ppi === mg) {
                  n = `<img width="${Math.round(e.width / 2)}" alt="${s}" src="${o}">`;
                } else n = `![${s}](${o})`;
              }
              s.setCustomValidity(''), at(s, o, n);
            }
            try {
              i(
                await (async function(e) {
                  if ('image/png' !== e.type) return null;
                  const t = e.slice(0, 10240, e.type),
                    n = await Vp.fromFile(t),
                    s = { width: 0, height: 0, ppi: 1 };
                  return (
                    n.scan(function(e) {
                      switch (e) {
                        case 'IHDR':
                          return (s.width = this.readLong()), (s.height = this.readLong()), !0;
                        case 'pHYs': {
                          const e = this.readLong(),
                            t = this.readLong();
                          let n;
                          return (
                            1 === this.readChar() && (n = Kp),
                            n && (s.ppi = Math.round(((e + t) / 2) * n)),
                            !1
                          );
                        }
                        case 'IDAT':
                          return !1;
                      }
                      return !0;
                    }),
                    s
                  );
                })(t.file),
              );
            } catch (r) {
              i(),
                setTimeout(function() {
                  throw r;
                });
            }
          }),
          u('upload:error', '.js-upload-markdown-image', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/upload/markdown.js:95');
            const t = g(e.currentTarget, '.js-comment-field', HTMLTextAreaElement),
              n = ug(e.detail.file);
            t.setCustomValidity(''), at(t, n, '');
          }),
          u('upload:invalid', '.js-upload-markdown-image', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/upload/markdown.js:103');
            const t = g(e.currentTarget, '.js-comment-field', HTMLTextAreaElement),
              n = ug(e.detail.file);
            t.setCustomValidity(''), at(t, n, '');
          }),
          u('upload:setup', '.js-upload-marketplace-listing-screenshot', function(e) {
            h(
              e instanceof CustomEvent,
              'app/assets/modules/github/upload/marketplace-listing-screenshot.js:9',
            );
            const t = e.detail.policyRequest,
              n = e.currentTarget.getAttribute('data-marketplace-listing-id');
            n && t.body.append('marketplace_listing_id', n);
          }),
          u('upload:complete', '.js-upload-marketplace-listing-screenshot', async function(e) {
            const t = p(e.currentTarget, 'data-screenshots-url'),
              n = g(document, '.js-marketplace-listing-screenshots-container'),
              s = await R(document, t);
            (n.innerHTML = ''), n.appendChild(s);
          }),
          u('upload:setup', '.js-upload-marketplace-listing-hero-card-background', function(e) {
            h(
              e instanceof CustomEvent,
              'app/assets/modules/github/upload/marketplace-listing-hero-card-background.js:8',
            );
            const t = e.detail.policyRequest,
              n = e.currentTarget.getAttribute('data-marketplace-listing-id');
            n && t.body.append('marketplace_listing_id', n);
          }),
          u('upload:complete', '.js-upload-marketplace-listing-hero-card-background', function(e) {
            h(
              e instanceof CustomEvent,
              'app/assets/modules/github/upload/marketplace-listing-hero-card-background.js:19',
            );
            const t = e.detail,
              n = t.policy;
            g(document, '.js-marketplace-listing-hero-card-background-id', HTMLInputElement).value =
              n.asset.id || t.result.id;
            const s = g(document, '.js-hero-listing-container'),
              o = n.asset.href || t.result.href;
            s.style.backgroundImage = `url(${o})`;
          }),
          u('click', '.js-release-remove-file', function(e) {
            const t = m(e.currentTarget, '.js-release-file');
            t.classList.add('delete'), (g(t, 'input.destroy', HTMLInputElement).value = 'true');
          }),
          u('click', '.js-release-undo-remove-file', function(e) {
            const t = m(e.currentTarget, '.js-release-file');
            t.classList.remove('delete'), (g(t, 'input.destroy', HTMLInputElement).value = '');
          });
        let pg = null;
        function gg(e, t) {
          const n = t.body;
          h(n instanceof FormData, 'app/assets/modules/github/upload/release-file.js:49'),
            n.append('release_id', fg(e));
          const s = f(document, '.js-releases-field .js-release-file.delete .id', HTMLInputElement);
          if (s.length) {
            const e = s.map(e => e.value);
            n.append('deletion_candidates', e.join(','));
          }
        }
        u('release:saved', '.js-release-form', function(e) {
          const t = e.currentTarget;
          pg = null;
          let n = !1;
          for (const o of t.querySelectorAll('.js-releases-field .js-release-file'))
            o.classList.contains('delete')
              ? o.remove()
              : o.classList.contains('js-template') || (n = !0);
          const s = g(t, '.js-releases-field');
          s.classList.toggle('not-populated', !n), s.classList.toggle('is-populated', n);
        }),
          u('upload:setup', '.js-upload-release-file', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/upload/release-file.js:60');
            const { policyRequest: t, preprocess: n } = e.detail,
              s = e.currentTarget;
            if (fg(s)) return void gg(s, t);
            if (!pg) {
              const e = g(document, '.js-save-draft', HTMLButtonElement);
              pg = Xm(e);
            }
            const o = gg.bind(null, s, t);
            n.push(pg.then(o));
          }),
          u('upload:start', '.js-upload-release-file', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/upload/release-file.js:83');
            const t = e.detail.policy;
            g(e.currentTarget, '.js-upload-meter').classList.remove('d-none');
            const n = t.asset.replaced_asset;
            if (n)
              for (const s of f(
                document,
                '.js-releases-field .js-release-file .id',
                HTMLInputElement,
              ))
                Number(s.value) === n && m(s, '.js-release-file').remove();
          }),
          u('upload:complete', '.js-upload-release-file', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/upload/release-file.js:101');
            const t = e.detail,
              n = t.policy,
              s = g(document, '.js-releases-field'),
              o = g(s, '.js-template').cloneNode(!0);
            o.classList.remove('d-none', 'js-template'),
              (g(o, 'input.id', HTMLInputElement).value = n.asset.id || t.result.id);
            const i = n.asset.name || n.asset.href.split('/').pop();
            for (const a of o.querySelectorAll('.js-release-asset-filename'))
              a instanceof HTMLInputElement ? (a.value = i) : (a.textContent = i);
            const r = n.asset.size ? `(${(n.asset.size / 1048576).toFixed(2)} MB)` : '';
            (g(o, '.js-release-asset-filesize').textContent = r),
              s.appendChild(o),
              s.classList.remove('not-populated'),
              s.classList.add('is-populated'),
              g(e.currentTarget, '.js-upload-meter').classList.add('d-none');
          }),
          u('upload:progress', '.js-upload-release-file', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/upload/release-file.js:136'),
              (g(e.currentTarget, '.js-upload-meter').style.width = `${e.detail.percent}%`);
          }),
          u('upload:setup', '.js-upload-repository-image', function() {
            g(document, '.js-remove-repository-image-button').hidden = !0;
          }),
          u('upload:complete', '.js-upload-repository-image', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/upload/repository-image.js:13');
            const t = e.detail,
              n = t.policy,
              s = n.asset.id || t.result.id,
              o = n.asset.href || t.result.href;
            (g(document, '.js-repository-image-id', HTMLInputElement).value = s),
              (g(document, '.js-remove-repository-image-button').hidden = !1),
              (g(document, '.js-repository-image-container').style.backgroundImage = `url(${o})`);
          });
        let hg = null;
        const bg = new WeakMap();
        function vg(e) {
          e.classList.remove('is-progress-bar');
          const t = m(e, '.js-upload-manifest-file-container');
          g(t, '.js-upload-progress').classList.remove('active'),
            (g(t, '.js-upload-meter-text .js-upload-meter-filename').textContent = '');
        }
        function jg(e) {
          return e._path ? `${e._path}/${e.name}` : e.name;
        }
        function yg(e) {
          vg(e.currentTarget);
        }
        function Lg(e) {
          return Array.from(e.types).indexOf('Files') >= 0;
        }
        function wg(e, t) {
          ta(new Gr(e), t);
        }
        function Eg(e) {
          switch (e) {
            case 'image/gif':
              return 'image.gif';
            case 'image/png':
              return 'image.png';
            case 'image/jpeg':
              return 'image.jpg';
          }
        }
        function Tg(e) {
          const t = e.dataTransfer;
          t && Lg(t) && e.preventDefault();
        }
        function kg(e) {
          const t = e.dataTransfer;
          t && Lg(t) && e.preventDefault();
        }
        u('upload:drop:setup', '.js-upload-manifest-file', function(e) {
          h(
            e instanceof CustomEvent,
            'app/assets/modules/github/upload/upload-manifest-file.js:54',
          );
          const t = e.detail.files,
            n = parseInt(e.currentTarget.getAttribute('data-directory-upload-max-files'), 10);
          t.length > n && (e.preventDefault(), e.currentTarget.classList.add('is-too-many'));
        }),
          u('upload:drop:setup', '.js-upload-manifest-tree-view', function(e) {
            h(
              e instanceof CustomEvent,
              'app/assets/modules/github/upload/upload-manifest-file.js:64',
            ),
              e.preventDefault();
            const t = e.detail.upload,
              n = g(document, '#js-repo-pjax-container');
            n.addEventListener(
              'pjax:success',
              () => {
                t(g(n, '.js-upload-manifest-file'));
              },
              { once: !0 },
            );
            const s = p(e.currentTarget, 'data-drop-url');
            U({ url: s, container: n });
          }),
          u('upload:setup', '.js-upload-manifest-file', async function(e) {
            h(
              e instanceof CustomEvent,
              'app/assets/modules/github/upload/upload-manifest-file.js:84',
            );
            const { policyRequest: t, preprocess: n } = e.detail,
              s = e.currentTarget;
            function o() {
              t.body.append('upload_manifest_id', bg.get(s));
            }
            if (
              ((function(e, t) {
                const n = m(e, '.js-upload-manifest-file-container'),
                  s = g(n, '.js-upload-progress');
                s.classList.add('active'), e.classList.add('is-progress-bar');
                const o = g(s, '.js-upload-meter-text');
                (g(o, '.js-upload-meter-range-start').textContent = String(t.batch.uploaded + 1)),
                  (g(o, '.js-upload-meter-range-end').textContent = String(t.batch.size));
              })(s, e.detail),
              bg.get(s))
            )
              return void o();
            if (hg) return void n.push(hg.then(o));
            const i = m(s, '.js-upload-manifest-file-container').querySelector(
              '.js-upload-manifest-form',
            );
            hg = K(i.action, { method: i.method, body: new FormData(i) });
            const [r, a] = (function() {
              let e, t;
              const n = new Promise((n, s) => {
                (e = n), (t = s);
              });
              return (
                h(e, 'app/assets/modules/github/upload/upload-manifest-file.js:140'),
                h(t, 'app/assets/modules/github/upload/upload-manifest-file.js:141'),
                [n, e, t]
              );
            })();
            n.push(r.then(o));
            const c = await hg,
              l = g(document, '.js-manifest-commit-form', HTMLFormElement).elements.namedItem(
                'manifest_id',
              );
            h(
              l instanceof HTMLInputElement,
              'app/assets/modules/github/upload/upload-manifest-file.js:123',
            ),
              (l.value = c.upload_manifest.id),
              bg.set(s, c.upload_manifest.id),
              (hg = null),
              a();
          }),
          u('upload:start', '.js-upload-manifest-file', function(e) {
            h(
              e instanceof CustomEvent,
              'app/assets/modules/github/upload/upload-manifest-file.js:154',
            );
            const t = e.detail,
              n = m(e.currentTarget, '.js-upload-manifest-file-container'),
              s = g(n, '.js-upload-progress'),
              o = g(s, '.js-upload-meter-text');
            (g(o, '.js-upload-meter-range-start').textContent = t.batch.uploaded + 1),
              (g(o, '.js-upload-meter-filename').textContent = jg(t.file));
          }),
          u('upload:complete', '.js-upload-manifest-file', function(e) {
            h(
              e instanceof CustomEvent,
              'app/assets/modules/github/upload/upload-manifest-file.js:169',
            );
            const t = e.detail,
              n = g(
                document,
                '.js-manifest-commit-file-template',
                HTMLTableElement,
              ).rows[0].cloneNode(!0);
            g(n, '.name').textContent = jg(t.file);
            const s = t.policy.asset.id || t.result.id,
              o = g(n, '.js-remove-manifest-file-form', HTMLFormElement).elements.namedItem(
                'file_id',
              );
            h(
              o instanceof HTMLInputElement,
              'app/assets/modules/github/upload/upload-manifest-file.js:185',
            ),
              (o.value = s);
            const i = g(document, '.js-manifest-file-list');
            i.classList.remove('d-none'),
              e.currentTarget.classList.add('is-file-list'),
              g(document, '.js-upload-progress').classList.add('is-file-list'),
              g(i, '.js-manifest-file-list-root').appendChild(n),
              t.batch.isFinished() && vg(e.currentTarget);
          }),
          u('upload:progress', '.js-upload-manifest-file', function(e) {
            h(
              e instanceof CustomEvent,
              'app/assets/modules/github/upload/upload-manifest-file.js:204',
            );
            const t = e.detail,
              n = m(e.currentTarget, '.js-upload-manifest-file-container');
            g(n, '.js-upload-meter').style.width = `${t.batch.percent()}%`;
          }),
          u('upload:error', '.js-upload-manifest-file', yg),
          u('upload:invalid', '.js-upload-manifest-file', yg),
          v('.js-remove-manifest-file-form', async function(e, t) {
            await t.html();
            const n = m(e, '.js-manifest-file-list-root');
            if ((m(e, '.js-manifest-file-entry').remove(), !n.hasChildNodes())) {
              m(n, '.js-manifest-file-list').classList.add('d-none'),
                g(document, '.js-upload-manifest-file').classList.remove('is-file-list'),
                g(document, '.js-upload-progress').classList.remove('is-file-list');
            }
          }),
          i('.js-manifest-ready-check', {
            initialize(e) {
              !(async function(e) {
                const t = p(e, 'data-redirect-url');
                try {
                  await ee(p(e, 'data-poll-url')), (window.location = t);
                } catch (Rh) {
                  g(document, '.js-manifest-ready-check').classList.add('d-none'),
                    g(document, '.js-manifest-ready-check-failed').classList.remove('d-none');
                }
              })(e);
            },
          }),
          u('upload:setup', '.js-upload-enterprise-installation-user-accounts-upload', function(e) {
            h(
              e instanceof CustomEvent,
              'app/assets/modules/github/upload/enterprise-installation-user-accounts-upload.js:8',
            );
            const t = e.detail.policyRequest,
              n = e.currentTarget.getAttribute('data-business-id');
            n && t.body.append('business_id', n);
            const s = e.currentTarget.getAttribute('data-enterprise-installation-id');
            s && t.body.append('enterprise_installation_id', s);
          }),
          u('upload:complete', '.js-upload-enterprise-installation-user-accounts-upload', function(
            e,
          ) {
            h(
              e instanceof CustomEvent,
              'app/assets/modules/github/upload/enterprise-installation-user-accounts-upload.js:24',
            );
            const t = e.detail,
              n = t.policy,
              s = g(
                e.currentTarget,
                '.js-enterprise-installation-user-accounts-upload-id',
                HTMLInputElement,
              );
            s.value = n.asset.id || t.result.id;
            const o = g(e.currentTarget, '.js-enterprise-installation-id', HTMLInputElement),
              i = e.currentTarget.getAttribute('data-enterprise-installation-id');
            i && (o.value = i);
            const r = s.form;
            r && r.submit();
          });
        let Mg = null;
        function Ag(e) {
          if ($g) return;
          const t = e.currentTarget;
          h(t instanceof Element, 'app/assets/modules/github/uploads.js:71'),
            Mg && clearTimeout(Mg),
            (Mg = setTimeout(() => t.classList.remove('dragover'), 200));
          const n = e.dataTransfer;
          n &&
            Lg(n) &&
            ((n.dropEffect = 'copy'),
            t.classList.add('dragover'),
            e.stopPropagation(),
            e.preventDefault());
        }
        function xg(e) {
          e.dataTransfer && (e.dataTransfer.dropEffect = 'none'),
            h(e.currentTarget instanceof Element, 'app/assets/modules/github/uploads.js:94'),
            e.currentTarget.classList.remove('dragover'),
            e.stopPropagation(),
            e.preventDefault();
        }
        function Sg(e) {
          e.target instanceof Element &&
            e.target.classList.contains('js-document-dropzone') &&
            (h(e.currentTarget instanceof Element, 'app/assets/modules/github/uploads.js:105'),
            e.currentTarget.classList.remove('dragover'));
        }
        function Hg(e) {
          const t = document.body;
          h(t, 'app/assets/modules/github/uploads.js:130');
          const n = e.currentTarget;
          h(n instanceof Element, 'app/assets/modules/github/uploads.js:133'),
            n.classList.remove('dragover'),
            t.classList.remove('dragover');
          const s = e.dataTransfer;
          s &&
            Lg(s) &&
            (!(async function(e, t) {
              const n = await ra(t, e.hasAttribute('data-directory-upload'));
              if (!n.length) return void Zr(e, 'is-hidden-file');
              const s = wg.bind(null, n);
              !L(e, 'upload:drop:setup', { upload: s, files: n }) || wg(n, e);
            })(n, s),
            e.stopPropagation(),
            e.preventDefault());
        }
        function Cg(e) {
          if (!e.clipboardData) return;
          if (!e.clipboardData.items) return;
          const t = Array.from(e.clipboardData.items)
            .map(e => [e, Eg(e.type)])
            .filter(e => e[1])
            .shift();
          if (!t) return;
          const [n] = t,
            s = n.getAsFile();
          h(e.currentTarget instanceof HTMLElement, 'app/assets/modules/github/uploads.js:173'),
            h(s, 'app/assets/modules/github/uploads.js:174'),
            wg([s], e.currentTarget),
            e.preventDefault();
        }
        function qg(e) {
          const t = e.target;
          t instanceof HTMLInputElement &&
            t.classList.contains('js-manual-file-chooser') &&
            (e.currentTarget instanceof FileAttachmentElement
              ? e.currentTarget.upload(t.files)
              : (h(e.currentTarget instanceof Element, 'app/assets/modules/github/uploads.js:194'),
                wg(t.files, e.currentTarget)),
            (t.value = ''));
        }
        function Ig({ currentTarget: e }) {
          let t;
          h(e instanceof HTMLElement, 'app/assets/modules/github/uploads.js:207'),
            Zr(
              (t = e.classList.contains('js-uploadable-container')
                ? e
                : g(e, '.js-uploadable-container, file-attachment')),
              'is-default',
            );
        }
        let _g = 0,
          $g = !1;
        function Dg() {
          $g = !0;
        }
        function Rg() {
          $g = !1;
        }
        function Ng(e) {
          return g(e, '[role="tablist"] [role="tab"][aria-selected="true"]');
        }
        function Bg(e) {
          const t = f(e, '[role="tablist"] [role="tab"]'),
            n = Ng(e);
          return f(e, '[role="tabpanel"]', HTMLElement)[Array.from(t).indexOf(n)];
        }
        function Pg(e) {
          const t = e.querySelector('.js-emoji-picker-filter'),
            n = g(e, '.js-emoji-picker-filter-tab-button'),
            s = g(e, '.js-emoji-picker-all-emoji');
          t &&
            (h(t instanceof HTMLInputElement, 'app/assets/modules/github/emoji-picker.js:86'),
            (t.value = '')),
            s.setAttribute('value', ''),
            (n.hidden = !0);
        }
        function Fg(e) {
          e.classList.add('selected-emoji');
        }
        function Og(e) {
          if (!(e.target instanceof HTMLElement)) return;
          const t = e.target.closest('.js-emoji-picker');
          if (
            t &&
            (h(t instanceof HTMLElement, 'app/assets/modules/github/emoji-picker.js:267'),
            !t.hidden)
          )
            switch (e.key) {
              case 'ArrowRight':
              case 'ArrowLeft':
              case 'ArrowUp':
              case 'ArrowDown':
                e.preventDefault(),
                  (function(e, t) {
                    const n = Bg(e),
                      s = Array.from(n.querySelectorAll('.js-emoji-button')),
                      o = n.querySelector('.selected-emoji.js-emoji-button'),
                      i = (function(e) {
                        let t,
                          n = 0;
                        const s = e[0].getBoundingClientRect().top;
                        for (const o of e) {
                          if (s < (t = o.getBoundingClientRect()).top) break;
                          n += 1;
                        }
                        return n;
                      })(s),
                      r = (function(e, t) {
                        const n = [[]];
                        let s = 0;
                        for (let o = 0; o < e.length; o++)
                          o > 0 && o % t == 0 && ((s += 1), n.push([])), n[s].push(e[o]);
                        return n;
                      })(s, i);
                    let a = 0,
                      c = 0;
                    if (o) {
                      const e = (function(e, t) {
                        let n,
                          s,
                          o = 0,
                          i = 0;
                        for (let r = 0; r < e.length; r++) {
                          if ((s = (n = e[r]).indexOf(t)) > -1) {
                            i = s;
                            break;
                          }
                          o += 1;
                        }
                        return { row: o, col: i };
                      })(r, o);
                      switch (((a = e.row), (c = e.col), o.classList.remove('selected-emoji'), t)) {
                        case 'ArrowRight':
                          c += 1;
                          break;
                        case 'ArrowDown':
                          a += 1;
                          break;
                        case 'ArrowLeft':
                          c -= 1;
                          break;
                        case 'ArrowUp':
                          a -= 1;
                      }
                    }
                    const l = r.length - 1,
                      u = c > r[l].length - 1,
                      d = a === l;
                    a < 0
                      ? ((a = l), u && (a -= 1))
                      : (a > l || (d && u && 'ArrowDown' === t)) && (a = 0);
                    const m = r[a].length - 1;
                    c < 0 ? (c = m) : c > m && (c = 0);
                    const f = r[a][c];
                    Fg(f), f.focus();
                  })(t, e.key);
            }
        }
        function Wg(e) {
          (e.hidden = !0), document.removeEventListener('keydown', Og);
        }
        function Ug(e) {
          document.addEventListener('click', t => {
            if (t.target instanceof HTMLElement) {
              t.target.closest('.js-emoji-picker') !== e && Wg(e);
            }
          });
          const t = g(e, '.js-emoji-picker-all-emoji'),
            n = g(e, '.js-emoji-picker-no-results'),
            s = g(e, '.js-emoji-picker-results-header');
          t.addEventListener('fuzzy-list-sorted', e => {
            if (!(e instanceof CustomEvent)) return;
            const o = Number(e.detail) > 0;
            (n.hidden = o), (t.hidden = !o), (s.hidden = !o);
          });
          const o = e.querySelector('.js-emoji-picker-filter');
          o &&
            (h(o instanceof HTMLInputElement, 'app/assets/modules/github/emoji-picker.js:333'),
            o.addEventListener('input', () =>
              (function(e) {
                const t = m(e, '.js-emoji-picker'),
                  n = Ng(t),
                  s = g(t, '.js-emoji-picker-filter-tab-button', HTMLButtonElement);
                if (
                  (g(t, '.js-emoji-picker-all-emoji').setAttribute('value', e.value),
                  n.classList.contains('js-emoji-picker-filter-tab-button') ||
                    n.classList.add('emoji-picker-prior-selected-tab-button'),
                  e.value)
                )
                  (s.hidden = !1),
                    'true' === s.getAttribute('aria-selected') || (s.click(), e.focus());
                else {
                  s.hidden = !0;
                  const e = t.querySelector('.emoji-picker-prior-selected-tab-button');
                  e instanceof HTMLButtonElement && e.click();
                }
              })(o),
            ));
        }
        function zg(e) {
          return g(e, '.js-user-status-details').hasAttribute('open');
        }
        function Vg(e) {
          const t = e.querySelector('.js-emoji-picker');
          t &&
            (!(function(e) {
              const t = g(e, '.js-original-emoji-category'),
                n = g(e, '.js-original-emoji-category-tab', HTMLElement),
                s = Ng(e),
                o = Bg(e),
                i = e.querySelector('.js-originally-selected-emoji');
              if (i) {
                const t = e.querySelector('.selected-emoji');
                t && t.classList.remove('selected-emoji'), i.classList.add('selected-emoji');
              }
              s.removeAttribute('aria-selected'),
                t.setAttribute('aria-selected', 'true'),
                (o.hidden = !0),
                (n.hidden = !1);
            })(t),
            Pg(t),
            Wg(t));
        }
        function Kg(e) {
          const t = g(e, '.js-user-status-original-emoji'),
            n = g(e, '.js-user-status-custom-emoji'),
            s = g(e, '.js-user-status-no-emoji-icon');
          (n.innerHTML = t.innerHTML), (s.hidden = n.hasChildNodes());
        }
        function Yg(e, t) {
          Kg(e),
            (function(e, t) {
              const n = e.querySelector('.js-user-status-emoji-picker');
              if (!(n instanceof IncludeFragmentElement)) return;
              let s = p(n, 'data-url');
              if (t) {
                s = new URL(s, window.location.origin);
                const e = new URLSearchParams(s.search.slice(1));
                e.append('show_picker', '1'), (s.search = e.toString());
              }
              n.setAttribute('src', s.toString());
            })(e, t),
            (function(e) {
              const t = e.querySelector('.js-user-status-org-picker');
              if (!(t instanceof IncludeFragmentElement)) return;
              const n = p(t, 'data-url');
              t.src = n.toString();
            })(e);
        }
        function Xg(e) {
          const t = g(e, '.js-user-status-suggestions'),
            n = g(e, '.js-user-status-message-field', HTMLInputElement).value.trim().length > 0;
          t.classList.toggle('collapsed', n), t.setAttribute('aria-expanded', n.toString());
        }
        function Jg(e, t) {
          zg(e)
            ? (function(e) {
                const t = g(e, '.js-user-status-message-field', HTMLInputElement);
                Kg(e), Vg(e), (t.value = t.defaultValue), ar(e);
              })(e)
            : Yg(e, t),
            eh(e);
        }
        function Gg(e, t) {
          (g(e, '.js-user-status-custom-emoji').innerHTML = t.innerHTML),
            (g(e, '.js-user-status-no-emoji-icon').hidden = !0);
        }
        function Qg(e, t) {
          g(e, '.js-user-status-emoji-field', HTMLInputElement).value = t.value;
        }
        function Zg(e, t) {
          if ('Escape' === V(t)) {
            const t = e.closest('.js-user-status-container');
            if (!t) return;
            (e.value = e.defaultValue), Jg(t, !1);
          }
        }
        function eh(e) {
          const t = g(e, '.js-user-status-submit', HTMLButtonElement),
            n = g(e, '.js-clear-user-status-button', HTMLButtonElement),
            s = g(e, '.js-user-status-message-field', HTMLInputElement),
            o = g(e, '.js-user-status-emoji-field', HTMLInputElement),
            i = s.value.trim(),
            r = o.value.trim();
          let a = !1,
            c = !1;
          var l;
          ir((l = s)) - se(l.value) < 0 && (a = !0),
            i.length < 1 &&
              r.length < 1 &&
              ((a = !0), n.classList.contains('js-user-status-exists') || (c = !0)),
            (t.disabled = a),
            (n.disabled = c);
        }
        function th(e) {
          return m(e, '.js-user-status-container');
        }
        function nh(e, t) {
          if (zg(e)) return;
          const n = e.querySelectorAll('.js-toggle-user-status-edit.Details-content--closed');
          for (const s of n)
            s.classList.toggle('text-blue', t), s.classList.toggle('link-gray-dark', !t);
        }
        function sh(e) {
          if (!(e.target instanceof Element)) return;
          nh(m(e.target, '.js-user-status-container'), !0);
        }
        function oh(e) {
          if (!(e.target instanceof Element)) return;
          nh(m(e.target, '.js-user-status-container'), !1);
        }
        function ih({ currentTarget: e }) {
          h(e instanceof Element, 'app/assets/modules/github/warn-unsaved-changes.js:39'),
            D(e)
              ? (function(e) {
                  const t =
                    e.getAttribute('data-warn-unsaved-changes') ||
                    'Changes you made may not be saved.';
                  window.onbeforeunload = function(e) {
                    return (e.returnValue = t), t;
                  };
                })(e)
              : rh();
        }
        function rh() {
          window.onbeforeunload = null;
        }
        function ah({ currentTarget: e }) {
          h(e instanceof Element, 'app/assets/modules/github/warn-unsaved-changes.js:63'),
            e.hasAttribute('open') || rh();
        }
        function ch(e) {
          const t = e.currentTarget;
          if (
            (h(t instanceof Element, 'app/assets/modules/github/warn-unsaved-changes.js:73'),
            !t.closest('details[open]'))
          )
            return;
          let n = !0;
          const s = f(t, 'form[data-warn-unsaved-changes]', HTMLFormElement);
          for (const o of s)
            if (D(o)) {
              const e = p(o, 'data-warn-unsaved-changes');
              n = confirm(e);
              break;
            }
          n || e.preventDefault();
        }
        function lh(e, t, n) {
          const s = e[n];
          let o = {
            position_in_list: n,
            number_of_related_issues: e.length,
            title_length: t.length,
          };
          return (
            s.repository.isPrivate ||
              (o = Object.assign({}, o, {
                title_string_at_time_of_click: t,
                id_of_clicked_result: s.databaseId,
                results_shown_at_time_of_click: e.map(e => e.databaseId),
              })),
            o
          );
        }
        i('.js-document-dropzone', {
          add(e) {
            const t = document.body;
            h(t, 'app/assets/modules/github/uploads.js:234'),
              t.addEventListener('dragstart', Dg),
              t.addEventListener('dragend', Rg),
              t.addEventListener('dragenter', Ag),
              t.addEventListener('dragover', Ag),
              t.addEventListener('dragleave', Sg),
              e.addEventListener('drop', Hg);
          },
          remove(e) {
            const t = document.body;
            h(t, 'app/assets/modules/github/uploads.js:245'),
              t.removeEventListener('dragstart', Dg),
              t.removeEventListener('dragend', Rg),
              t.removeEventListener('dragenter', Ag),
              t.removeEventListener('dragover', Ag),
              t.removeEventListener('dragleave', Sg),
              e.removeEventListener('drop', Hg);
          },
        }),
          i('.js-uploadable-container, file-attachment', {
            add(e) {
              0 == _g++ &&
                (document.addEventListener('drop', Tg), document.addEventListener('dragover', kg)),
                e.addEventListener('change', qg);
              const t = e.closest('form');
              t && t.addEventListener('reset', Ig);
            },
            remove(e) {
              0 == --_g &&
                (document.removeEventListener('drop', Tg),
                document.removeEventListener('dragover', kg)),
                e.removeEventListener('change', qg);
              const t = e.closest('form');
              t && t.removeEventListener('reset', Ig);
            },
          }),
          i('.js-uploadable-container', {
            add(e) {
              e.addEventListener('dragenter', Ag),
                e.addEventListener('dragover', Ag),
                e.addEventListener('dragleave', xg),
                e.addEventListener('drop', Hg),
                e.addEventListener('paste', Cg);
            },
            remove(e) {
              e.removeEventListener('dragenter', Ag),
                e.removeEventListener('dragover', Ag),
                e.removeEventListener('dragleave', xg),
                e.removeEventListener('drop', Hg),
                e.removeEventListener('paste', Cg);
            },
          }),
          u('click', '.js-user-status-expire-button', function(e) {
            const t = e.currentTarget,
              n = th(t);
            h(t instanceof HTMLButtonElement, 'app/assets/modules/github/user-status.js:305'),
              (function(e, t) {
                const n = g(e, '.js-user-status-expiration-interval-selected'),
                  s = g(e, '.js-user-status-expire-drop-down'),
                  o = g(e, '.js-user-status-expiration-date-input', HTMLInputElement);
                (n.textContent = t.title), (o.value = t.value), s.removeAttribute('open');
              })(n, t);
          }),
          u('click', '.js-toggle-user-status-edit', function(e) {
            Jg(th(e.currentTarget), !!e.target.closest('.js-toggle-user-status-emoji-picker'));
          }),
          u('click', '.js-toggle-user-status-emoji-picker', function(e) {
            const t = th(e.currentTarget).querySelector('.js-emoji-picker');
            t &&
              t.hidden &&
              setTimeout(
                () =>
                  (function(e) {
                    const t = e.querySelector('.js-emoji-picker-filter'),
                      n = !e.hidden;
                    (e.hidden = n),
                      n
                        ? (t &&
                            (h(
                              t instanceof HTMLInputElement,
                              'app/assets/modules/github/emoji-picker.js:291',
                            ),
                            (t.value = '')),
                          document.removeEventListener('keydown', Og))
                        : (t &&
                            (h(
                              t instanceof HTMLInputElement,
                              'app/assets/modules/github/emoji-picker.js:297',
                            ),
                            t.focus()),
                          document.addEventListener('keydown', Og));
                  })(t),
                50,
              );
          }),
          u('click', '.js-emoji-button', function(e) {
            const t = e.currentTarget;
            h(t instanceof HTMLButtonElement, 'app/assets/modules/github/user-status.js:328'),
              (function(e) {
                const t = m(e, '.js-user-status-container'),
                  n = g(t, '.js-emoji-picker');
                Qg(t, e),
                  (function(e) {
                    const t = e.querySelector('.selected-emoji');
                    t && t.classList.remove('selected-emoji');
                  })(t),
                  Fg(e),
                  Gg(t, e),
                  eh(t),
                  Wg(n);
              })(t);
          }),
          u('click', '.js-user-status-emoji-tab', function(e) {
            !(function(e) {
              const t = m(e, '.js-emoji-picker'),
                n = t.querySelector('.js-emoji-picker-filter');
              Pg(t),
                !t.hidden &&
                  n &&
                  (h(
                    n instanceof HTMLInputElement,
                    'app/assets/modules/github/emoji-picker.js:101',
                  ),
                  n.focus());
            })(e.currentTarget);
          }),
          d('.js-user-status-message-field', function(e) {
            Xg(th(e));
          }),
          N('keyup', '.js-user-status-message-field', e => {
            const t = e.target;
            h(t instanceof HTMLInputElement, 'app/assets/modules/github/user-status.js:345'),
              Zg(t, e);
          }),
          N('keyup', '.js-emoji-picker-filter', e => {
            const t = e.target;
            h(t instanceof HTMLInputElement, 'app/assets/modules/github/user-status.js:351'),
              Zg(t, e);
          }),
          u('click', '.js-clear-user-status-button', function(e) {
            const t = e.currentTarget;
            !(function(e) {
              (e.hidden = !0),
                (g(e, '.js-user-status-emoji-field', HTMLInputElement).value = ''),
                (g(e, '.js-user-status-no-emoji-icon').hidden = !1),
                (g(e, '.js-user-status-custom-emoji').innerHTML = '');
              const t = g(e, '.js-user-status-message-field', HTMLInputElement);
              (t.value = ''), t.classList.contains('js-characters-remaining-field') && rr(t);
              const n = e.querySelector('.selected-emoji.js-emoji-button');
              n && n.classList.remove('selected-emoji'),
                (g(
                  e,
                  '.js-user-status-limited-availability-checkbox',
                  HTMLInputElement,
                ).checked = !1);
              const s = e.querySelector('.js-user-status-expiration-date-input');
              s && s instanceof HTMLInputElement && (s.value = ''), eh(e), Xg(e);
              const o = g(e, '.js-user-status-form', HTMLFormElement);
              y(o);
            })(m(t, '.js-user-status-container'));
          }),
          u('click', '.js-predefined-user-status', function(e) {
            const t = e.currentTarget;
            h(t instanceof HTMLButtonElement, 'app/assets/modules/github/user-status.js:364'),
              (function(e) {
                const t = m(e, '.js-user-status-container'),
                  n = g(e, '.js-predefined-user-status-emoji'),
                  s = g(e, '.js-predefined-user-status-message'),
                  o = g(t, '.js-user-status-message-field', HTMLInputElement);
                (o.value = s.textContent.trim()),
                  Gg(t, n),
                  Qg(t, e),
                  eh(t),
                  Xg(t),
                  o.classList.contains('js-characters-remaining-field') && rr(o);
              })(t);
          }),
          l('.js-user-status-message-field', function(e) {
            const t = e.target;
            h(t instanceof HTMLElement, 'app/assets/modules/github/user-status.js:371');
            const n = m(t, '.js-user-status-form');
            eh(n), Xg(n);
          }),
          u('click', '.js-user-status-org-button', function(e) {
            const t = e.currentTarget;
            h(t instanceof HTMLButtonElement, 'app/assets/modules/github/user-status.js:380'),
              (function(e) {
                const t = m(e, '.js-user-status-container'),
                  n = g(t, '.js-user-status-org-id-field', HTMLInputElement),
                  s = g(t, '.js-user-status-org-details'),
                  o = g(t, '.js-user-status-selected-org'),
                  i = g(e, '.js-user-status-org-display'),
                  r = g(t, '.js-user-status-org-message'),
                  a = e.value,
                  c = '' !== a,
                  l = g(t, '.js-user-status-message-field', HTMLInputElement),
                  u = t.querySelector('.js-user-status-org-button.selected');
                let d = '';
                u && u.classList.remove('selected'),
                  e.classList.add('selected'),
                  (n.value = a),
                  (o.innerHTML = '');
                const f = i.cloneNode(!0);
                if (((f.hidden = !1), o.appendChild(f), s.removeAttribute('open'), c)) {
                  const t = p(r, 'data-prefix'),
                    n = p(r, 'data-suffix'),
                    s = p(e, 'data-org');
                  (r.textContent = `${t}${s}${n}`), (r.hidden = !1);
                  const o = new URL(p(l, 'data-org-url'), window.location.origin),
                    i = new URLSearchParams(o.search.slice(1));
                  i.append('global_id', a), (o.search = i.toString()), (d = o.toString());
                } else
                  (r.textContent = p(r, 'data-none')),
                    (r.hidden = !0),
                    (d = p(l, 'data-no-org-url'));
                m(l, 'text-expander').setAttribute('data-mention-url', d);
              })(t);
          }),
          u('change', '.js-user-status-limited-availability-checkbox', function(e) {
            const t = e.target;
            h(t instanceof HTMLInputElement, 'app/assets/modules/github/user-status.js:387');
            const n = m(t, '.js-user-status-form'),
              s = t.checked,
              o = p(t, 'data-default-message'),
              i = g(n, '.js-user-status-message-field', HTMLInputElement);
            s && i.value.length < 1 ? (i.value = o) : s || i.value !== o || (i.value = ''),
              eh(n),
              Xg(n);
          }),
          v('.js-user-status-form', async function(e, t) {
            const n = g(e, '.js-user-status-form-group');
            let s;
            n.classList.remove('errored');
            try {
              s = await t.html();
            } catch (a) {
              return void n.classList.add('errored');
            }
            const o = m(e, '.js-user-status-container'),
              i = s.html.querySelector('.js-user-status-container');
            o.replaceWith(s.html);
            const r = document.querySelectorAll('.js-user-status-container');
            for (const c of r)
              if (i !== c) {
                const e = c.closest('.js-user-status-context');
                if (e) {
                  const t = p(e, 'data-url'),
                    n = await R(document, t);
                  c.replaceWith(n);
                }
              }
          }),
          i('.js-toggle-user-status-edit', function(e) {
            e.addEventListener('mouseenter', sh), e.addEventListener('mouseleave', oh);
          }),
          i('.js-emoji-picker', e => {
            h(e instanceof HTMLElement, 'app/assets/modules/github/user-status-submit.js:75'),
              Ug(e);
          }),
          i('[data-warn-unsaved-changes]', {
            add(e) {
              e.addEventListener('input', ih),
                e.addEventListener('change', ih),
                e.addEventListener('submit', rh);
              const t = e.closest('details-dialog');
              t &&
                (m(t, 'details').addEventListener('toggle', ah),
                t.addEventListener('details-dialog-close', ch));
            },
            remove(e) {
              e.removeEventListener('input', ih),
                e.removeEventListener('change', ih),
                e.removeEventListener('submit', rh);
              const t = e.closest('details-dialog');
              t &&
                (m(t, 'details').removeEventListener('toggle', ah),
                t.removeEventListener('details-dialog-close', ch),
                rh());
            },
          });
        const uh = 'related-issues-hidden';
        let dh;
        async function mh(e) {
          const t = e.value;
          if (((dh = t), !t)) return [];
          !(function(e) {
            const t = g(document, '.js-related-issues-spinner');
            'true' === e.getAttribute('data-user-has-opted-in') && (t.hidden = !1);
          })(e);
          const n = p(e, 'data-related-issues-path'),
            s = await K(
              Me(n, { method: 'POST', body: jh(t, e.getAttribute('data-repository-id')) }),
            );
          return (
            yh(),
            h(s.data, 'app/assets/modules/github/related-issues.js:148'),
            s.data.errors ? [] : s.data.repository.similarIssues.nodes
          );
        }
        function fh(e, t) {
          if (0 === t.length)
            return (
              yh(),
              ph(),
              (g(document, '.js-related-issues-suggestions-results-wrapper').hidden = !0),
              void (function() {
                const e = document.querySelector('.js-related-issues-beta-notice');
                if (e) {
                  const t = document.querySelector('#first-time-contributor');
                  t && (t.style.top = '25%');
                  const n = document.querySelector('#prior-contributor');
                  n && (n.style.top = '25%'), e.classList.add('d-none');
                }
              })()
            );
          (g(document, '.js-number-of-related-issues', HTMLInputElement).value = `${t.length}`),
            (function(e) {
              const t = g(document, '.js-related-issues-suggestions-results-container');
              (t.innerHTML = ''),
                t.appendChild(e),
                (function() {
                  if (La(uh)) return;
                  vh(!0),
                    gh(!0),
                    g(document, '.js-related-issues-results-display').setAttribute('open', '');
                })(),
                (g(document, '.js-related-issues-suggestions-results-wrapper').hidden = !1);
            })(
              (function(e, t) {
                const n = g(
                    document,
                    '.js-related-issues-suggestions-template',
                    HTMLTemplateElement,
                  ),
                  s = document.createDocumentFragment();
                for (let o = 0; o < t.length; o++) {
                  const i = Lh(n, t[o], lh(t, e.value, o));
                  s.appendChild(i);
                }
                return s;
              })(e, t),
            ),
            (function() {
              const e = document.querySelector('.js-related-issues-beta-notice');
              if (e) {
                const t = document.querySelector('#first-time-contributor');
                t && (t.style.top = '70%');
                const n = document.querySelector('#prior-contributor');
                n && (n.style.top = '70%'), e.classList.remove('d-none');
              }
            })();
        }
        function ph() {
          vh(!1), gh(!1), g(document, '.js-related-issues-results-display').removeAttribute('open');
        }
        function gh(e) {
          const t = g(document, '.js-related-issues-found-message'),
            n = g(document, '.js-related-issues-feedback-message');
          void 0 !== e
            ? ((t.hidden = !e), (n.hidden = !e))
            : ((t.hidden = !t.hidden), (n.hidden = !n.hidden));
        }
        i('.js-related-issues-search', {
          constructor: HTMLInputElement,
          add(e) {
            La(uh) && ph(),
              T(
                e,
                async () => {
                  fh(e, await mh(e));
                },
                { wait: 500 },
              ),
              u('change', '.js-related-issues-search', async () => {
                e.value !== dh && fh(e, await mh(e));
              });
          },
        }),
          u('submit', 'form#new_issue', e => {
            e.defaultPrevented || Ea(uh);
          }),
          u('click', '.js-toggle-related-results', () => {
            vh(),
              gh(),
              g(document, '.js-related-issues-results-display').hasAttribute('open')
                ? wa(uh, 'true')
                : (Ea(uh), window.localStorage.removeItem(uh));
          }),
          u('navigation:keydown', '.js-issue-title-input-container', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/related-issues.js:96');
            const t = document.querySelector(
                '.js-issue-title-input-container .js-navigation-item[aria-selected="true"]',
              ),
              n = g(document, '.js-related-issues-results-display').hasAttribute('open');
            switch (e.detail.hotkey) {
              case 'Enter':
                if (!t) {
                  const t = m(e.currentTarget, 'form', HTMLFormElement);
                  t.querySelector('input[type=submit], button[type=submit]').disabled || y(t);
                }
                break;
              case 'Escape':
                n && g(document, '.js-hide-related-results').click();
            }
          }),
          N('keydown', '.js-related-issues-search', function(e) {
            document.querySelector(
              '.js-issue-title-input-container .js-navigation-item[aria-selected="true"]',
            ) || ii(e);
          });
        let hh,
          bh = !1;
        function vh(e) {
          let t;
          (t =
            void 0 === e
              ? !g(document, '.js-related-issues-results-display').hasAttribute('open')
              : !!e),
            !bh && t
              ? (He(g(document, '.js-related-issues-suggestions-results-container')),
                g(document, '.js-related-issues-search').classList.add('js-navigation-enable'))
              : (ct(g(document, '.js-related-issues-suggestions-results-container')),
                g(document, '.js-related-issues-search').classList.remove('js-navigation-enable'));
        }
        function jh(e, t) {
          h(t, 'app/assets/modules/github/related-issues.js:315');
          const n = new FormData();
          return n.append('variables[query]', e), n.append('variables[repository_id]', t), n;
        }
        function yh() {
          const e = document.querySelector('.js-related-issues-spinner');
          e && (e.hidden = !0);
        }
        function Lh(e, t, n) {
          const s = e.content.cloneNode(!0);
          'OPEN' === t.state
            ? wh(s, '.js-related-issues-octicon-issue-opened')
            : wh(s, '.js-related-issues-octicon-issue-closed');
          const o = g(s, '.js-related-issue-suggestion-link', HTMLAnchorElement);
          if (
            ((o.href = t.url),
            o.setAttribute('data-hydro-client-context', JSON.stringify(n)),
            (g(s, '.js-related-issue-suggestion-title', HTMLElement).textContent = t.title),
            (g(s, '.js-related-issue-number', HTMLElement).textContent = `#${t.number}`),
            g(s, '.js-related-issue-opened-at', HTMLElement).setAttribute('datetime', t.createdAt),
            t.author)
          ) {
            const e = g(s, '.js-related-issue-author', HTMLElement);
            (e.textContent = `${t.author.login}`), (e.hidden = !1);
          }
          return (
            g(s, '.js-related-issue-updated-at', HTMLElement).setAttribute('datetime', t.updatedAt),
            (g(s, '.js-related-issue-suggestion-comment-count').textContent =
              t.comments.totalCount),
            s
          );
        }
        function wh(e, t) {
          const n = g(e, '.js-related-issue-octicon'),
            s = g(n, t, SVGElement);
          n.classList.remove('d-none'), s.classList.remove('d-none');
        }
        function Eh(e, t, n) {
          const s = e[n];
          let o = {
            position_in_list: n,
            number_of_similar_issues: e.length,
            title_length: t.length,
          };
          return (
            s.repository.isPrivate ||
              (o = Object.assign({}, o, {
                title_string_at_time_of_click: t,
                id_of_clicked_result: s.databaseId,
                results_shown_at_time_of_click: e.map(e => e.databaseId),
              })),
            o
          );
        }
        async function Th(e) {
          const t = e.value;
          if (((hh = t), !t)) return [];
          Mh(),
            (function() {
              const e = g(document, '.js-similar-issues-spinner');
              e && (e.hidden = !1);
            })();
          const n = p(e, 'data-similar-issues-path'),
            s = await K(
              Me(n, { method: 'POST', body: Hh(t, e.getAttribute('data-repository-id')) }),
            );
          return (
            Ch(),
            h(s.data, 'app/assets/modules/github/similar-issues.js:149'),
            s.data.errors ? [] : s.data.repository.similarIssues.nodes
          );
        }
        function kh(e, t) {
          if (0 === t.length) return Ah(), void Mh();
          (g(document, '.js-number-of-similar-issues', HTMLInputElement).value = `${t.length}`),
            (function(e) {
              const t = g(document, '.js-similar-issues-suggestions-results-container');
              (t.innerHTML = ''), t.appendChild(e);
            })(
              (function(e, t) {
                const n = g(
                    document,
                    '.js-similar-issues-suggestions-template',
                    HTMLTemplateElement,
                  ),
                  s = document.createDocumentFragment();
                for (let o = 0; o < t.length; o++) {
                  const i = qh(n, t[o], Eh(t, e.value, o));
                  s.appendChild(i);
                }
                return s;
              })(e, t),
            ),
            (function(e) {
              const t = g(document, '.js-show-similar-issues', HTMLButtonElement);
              (g(t, '.js-show-similar-issues-count').innerHTML = `${e.length}`), (t.hidden = !1);
            })(t);
        }
        function Mh() {
          const e = g(document, '.js-show-similar-issues', HTMLButtonElement);
          (g(e, '.js-show-similar-issues-count').innerHTML = ''), (e.hidden = !0);
        }
        function Ah() {
          Ch(), (g(document, '.js-similar-issues-suggestions-results-wrapper').hidden = !0);
        }
        u('compositionstart', '.js-related-issues-search', () => {
          vh(!1), (bh = !0);
        }),
          u('compositionend', '.js-related-issues-search', () => {
            (bh = !1), vh();
          }),
          u('click', '.js-markdown-link-button', async function({ currentTarget: e }) {
            const t = g(document, '.js-markdown-link-dialog', HTMLTemplateElement);
            (await ne({ content: t.content.cloneNode(!0) })).setAttribute(
              'data-selection-end',
              (function(e) {
                const t = m(e, 'markdown-toolbar', MarkdownToolbarElement).field;
                return h(t, 'app/assets/modules/github/responsive-markdown-toolbar.js:11'), t;
              })(e).selectionEnd.toString(),
            );
          }),
          u('click', '.js-markdown-link-insert', ({ currentTarget: e }) => {
            const t = m(e, 'details-dialog'),
              n = g(document, `#${p(e, 'data-for-textarea')}`, HTMLTextAreaElement),
              s = Number(p(t, 'data-selection-end')),
              o = g(t, '#js-dialog-link-href', HTMLInputElement).value,
              i = `[${g(t, '#js-dialog-link-text', HTMLInputElement).value}](${o}) `,
              r = n.value.slice(0, s),
              a = n.value.slice(s);
            (n.value = r + i + a), n.focus(), (n.selectionStart = n.selectionEnd = s + i.length);
          }),
          v('.js-repository-advisory-title-update', async function(e, t) {
            m(e, '.js-details-container').classList.remove('open');
            const n = (await t.json()).json;
            document.title = n.page_title;
            for (const s of e.elements)
              (s instanceof HTMLInputElement || s instanceof HTMLTextAreaElement) &&
                (s.defaultValue = s.value);
          }),
          v('.js-repository-advisory-update', async function(e) {
            m(e, '.previewable-edit').classList.remove('is-comment-editing');
            for (const t of e.elements)
              (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) &&
                (t.defaultValue = t.value);
          }),
          v('.js-add-repository-advisory-collaborator', async function(e, t) {
            t.html(), e.reset();
          }),
          i('.js-similar-issues-search', {
            constructor: HTMLInputElement,
            add(e) {
              T(
                e,
                async () => {
                  kh(e, await Th(e));
                },
                { wait: 500 },
              );
            },
          }),
          u('change', '.js-similar-issues-search', async ({ currentTarget: e }) => {
            h(e instanceof HTMLInputElement, 'app/assets/modules/github/similar-issues.js:66'),
              e.value !== hh && kh(e, await Th(e));
          }),
          u('click', '.js-show-similar-issues', () => {
            g(document, '.js-similar-issues-suggestions-results-wrapper').hasAttribute('hidden')
              ? (g(document, '.js-similar-issues-suggestions-results-wrapper').hidden = !1)
              : Ah();
          }),
          u('click', '.js-hide-similar-issues', () => {
            Ah();
          }),
          u('navigation:keydown', '.js-issue-title-input-container', function(e) {
            h(e instanceof CustomEvent, 'app/assets/modules/github/similar-issues.js:90');
            const t = document.querySelector('.js-similar-issues-suggestions-results-wrapper');
            if (!t) return;
            const n = document.querySelector(
                '.js-issue-title-input-container .js-navigation-item[aria-selected="true"]',
              ),
              s = t.hasAttribute('hidden');
            switch (e.detail.hotkey) {
              case 'Enter':
                if (!n) {
                  const t = m(e.currentTarget, 'form', HTMLFormElement);
                  t.querySelector('input[type=submit], button[type=submit]').disabled || y(t);
                }
                break;
              case 'Escape':
                s && g(document, '.js-hide-similar-issues').click();
            }
          }),
          N('keydown', '.js-similar-issues-search', function(e) {
            document.querySelector(
              '.js-issue-title-input-container .js-navigation-item[aria-selected="true"]',
            ) || ii(e);
          });
        let xh = !1;
        function Sh(e) {
          const t = document.querySelector('.js-similar-issues-suggestions-results-wrapper');
          if (!t) return;
          let n;
          (n = void 0 === e ? !t.hasAttribute('hidden') : !!e),
            !xh && n
              ? (He(g(document, '.js-similar-issues-suggestions-results-container')),
                g(document, '.js-similar-issues-search').classList.add('js-navigation-enable'))
              : (ct(g(document, '.js-similar-issues-suggestions-results-container')),
                g(document, '.js-similar-issues-search').classList.remove('js-navigation-enable'));
        }
        function Hh(e, t) {
          h(t, 'app/assets/modules/github/similar-issues.js:258');
          const n = new FormData();
          return n.append('variables[query]', e), n.append('variables[repository_id]', t), n;
        }
        function Ch() {
          const e = document.querySelector('.js-similar-issues-spinner');
          e && (e.hidden = !0);
        }
        function qh(e, t, n) {
          const s = e.content.cloneNode(!0);
          'OPEN' === t.state
            ? Ih(s, '.js-similar-issues-octicon-issue-opened')
            : Ih(s, '.js-similar-issues-octicon-issue-closed');
          const o = g(s, '.js-similar-issue-suggestion-link', HTMLAnchorElement);
          if (
            ((o.href = t.url),
            o.setAttribute('data-hydro-client-context', JSON.stringify(n)),
            (g(s, '.js-similar-issue-suggestion-title', HTMLElement).textContent = t.title),
            (g(s, '.js-similar-issue-number', HTMLElement).textContent = `#${t.number}`),
            g(s, '.js-similar-issue-opened-at', HTMLElement).setAttribute('datetime', t.createdAt),
            t.author)
          ) {
            const e = g(s, '.js-similar-issue-author', HTMLElement);
            (e.textContent = `${t.author.login}`), (e.hidden = !1);
          }
          return (
            g(s, '.js-similar-issue-updated-at', HTMLElement).setAttribute('datetime', t.updatedAt),
            (g(s, '.js-similar-issue-suggestion-comment-count').textContent =
              t.comments.totalCount),
            s
          );
        }
        function Ih(e, t) {
          const n = g(e, '.js-similar-issue-octicon');
          g(n, t, SVGElement).removeAttribute('hidden');
        }
        u('compositionstart', '.js-similar-issues-search', () => {
          Sh(!1), (xh = !0);
        }),
          u('compositionend', '.js-similar-issues-search', () => {
            (xh = !1), Sh();
          });
        let _h = !1;
        function $h(e) {
          const t = document.importNode(e.content, !0),
            n = g(document, '#js-flash-container');
          for (const s of n.children) n.removeChild(s);
          n.appendChild(t);
        }
        function Dh() {
          for (const e of document.querySelectorAll('.js-selected-check-run')) e.remove();
          (g(document, '.js-zen-blankslate').hidden = !1), (_h = !0);
        }
        v('.js-check-suite-rerequest-form', async function(e, t) {
          m(e, 'details').removeAttribute('open');
          const n = document.querySelector('#js-selected-check-run');
          if (null !== n) {
            const t = 'true' === g(e, 'input[name=only_failed_check_runs]', HTMLInputElement).value,
              s = 'true' === p(n, 'data-failed');
            (t && !s) || Dh();
          }
          try {
            await t.text(),
              $h(g(document, '#js-check-suite-rerequest-form-success', HTMLTemplateElement));
          } catch (s) {
            throw ($h(g(document, '#js-check-suite-rerequest-form-error', HTMLTemplateElement)), s);
          }
        }),
          v('.js-check-run-rerequest-form', async function(e, t) {
            (_h = !0), g(document, '#js-selected-check-run').contains(e) && Dh();
            try {
              await t.text(), $h(g(e, '.js-check-run-rerequest-form-success', HTMLTemplateElement));
            } catch (n) {
              throw ($h(g(e, '.js-check-run-rerequest-form-error', HTMLTemplateElement)), n);
            }
          }),
          i('.js-latest-run-link', {
            constructor: HTMLElement,
            add(e) {
              _h && e.click();
            },
          }),
          v('.js-interactive-component-form', async function(e, t) {
            await t.text();
          }),
          u(
            'click',
            ['form button:not([type])', 'form button[type=submit]', 'form input[type=submit]'].join(
              ', ',
            ),
            function(e) {
              const t = e.currentTarget;
              h(
                t instanceof HTMLButtonElement || t instanceof HTMLInputElement,
                'app/assets/modules/github/remote.js:160',
              ),
                t.form && !e.defaultPrevented && te(t);
            },
          ),
          v('form[data-remote]', function(e, t, n) {
            'json' === e.getAttribute('data-type') && n.headers.set('Accept', 'application/json'),
              L(e, 'deprecatedAjaxSend', { request: n }),
              t
                .text()
                .catch(e => {
                  if (e.response) return e.response;
                  throw e;
                })
                .then(
                  t => {
                    t.status < 300
                      ? L(e, 'deprecatedAjaxSuccess')
                      : L(e, 'deprecatedAjaxError', {
                          error: t.statusText,
                          status: t.status,
                          text: t.text,
                        });
                  },
                  t => {
                    L(e, 'deprecatedAjaxError', { error: t.message, status: 0, text: null });
                  },
                )
                .then(() => {
                  L(e, 'deprecatedAjaxComplete');
                });
          }),
          u('deprecatedAjaxComplete', 'form', function({ currentTarget: e }) {
            h(e instanceof HTMLFormElement, 'app/assets/modules/github/remote.js:171');
            const t = lt(e);
            t && t.remove();
          }),
          P(e => {
            const t = lt(e);
            t && t.remove();
          }),
          ut(qe);
      },
    };
  });
//# sourceMappingURL=github-bootstrap-1b4c531a.js.map
