(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [793],
  {
    21304: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 99748));
    },
    16463: function (e, t, n) {
      "use strict";
      var s = n(71169);
      n.o(s, "redirect") &&
        n.d(t, {
          redirect: function () {
            return s.redirect;
          },
        }),
        n.o(s, "usePathname") &&
          n.d(t, {
            usePathname: function () {
              return s.usePathname;
            },
          }),
        n.o(s, "useRouter") &&
          n.d(t, {
            useRouter: function () {
              return s.useRouter;
            },
          });
    },
    99748: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var s = n(57437),
        a = n(16463),
        o = n(24561),
        r = n(49354),
        i = n(16661),
        l = n(18705),
        c = n.n(l),
        x = n(2265);
      function d(e) {
        let { handleClose: t, handleOptimizeCode: n } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("div", {
              className:
                "fixed inset-0 bg-[#1919194D] bg-opacity-75 transition-opacity z-10",
              "aria-hidden": "true",
              onClick: t,
            }),
            (0, s.jsxs)("div", {
              className:
                "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 flex flex-col items-center gap-4 border border-module rounded-[20px] backdrop-blur-lg z-20 max-w-[430px] mx-1 sm:mx-0",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "relative flex flex-col items-center gap-4 min-w-[430px]",
                  children: [
                    (0, s.jsx)(i.zx, {
                      className: "absolute -top-[6px] right-3 ",
                      size: "icon",
                      onClick: t,
                      children: (0, s.jsx)(i.JO, { icon: "close" }),
                    }),
                    (0, s.jsx)(i.ZT, {
                      variant: "h6",
                      className: "font-medium text-subtext",
                      fontInter: !0,
                      children: "Welcome",
                    }),               
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "flex flex-col items-center gap-6 w-full",
                  children: [
                    (0, s.jsxs)(i.ZT, {
                      variant: "h6",
                      className: "text-center !font-normal !text-[14px]",
                      fontInter: !0,
                      children: [
                        "The Beta version of PACT is not a final product and the platform is constantly being enhanced and our AI model trained further.",
                        (0, s.jsx)("br", {}),
                        (0, s.jsx)("br", {}),
                        "The current version of PACT is limited to code conversions based on foundational algorithms which are noted in the Parilix Github Repositry. Conversions for code outside of these references are likely to fail in the current version, however we aim to continuously expand the codebase that PACT is trained upon over time.",
                      ],
                    }),
                    n
                      ? (0, s.jsx)(i.zx, {
                          onClick: () => {
                            null == n || n(), t();
                          },
                          className:
                            "items-center text-shade gap-1.5 bg-brand-pink hover:bg-pink-shade rounded-2xl disabled:scale-100",
                          children: "OK",
                        })
                      : null,
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function u() {
        let [e, t] = (0, x.useState)(!0),
          { account: n } = (0, o.e)();
        return n && !e
          ? (0, a.redirect)("/dashboard")
          : (0, s.jsxs)("div", {
              className:
                "fixed bottom-4 left-5 w-[calc(100vw-40px)] h-[calc(100vh-120px)] py-[70px] px-16 flex flex-1 flex-col justify-between bg-[#19191999] bg-[url(/images/sign-in-bg.svg)] bg-no-repeat bg-contain  bg-[top_5%_right_5%] rounded-[20px]",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex flex-col gap-8",
                  children: [      
                  ],
                }),
                (0, s.jsxs)(i.ZT, {
                  variant: "h3",
                  className: (0, r.cn)(
                    c().className,
                    "text-brand-pink",
                    "text-[32px]"
                  ),
                  children: [
                    "Unleashing The Power Of",
                    (0, s.jsx)("br", {}),
                    "Multi Processing",
                  ],
                }),
                e && (0, s.jsx)(d, { handleClose: () => t(!1) }),
              ],
            });
      }
    },
    18705: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__rotontoFont_0c5c5b', '__rotontoFont_Fallback_0c5c5b'",
        },
        className: "__className_0c5c5b",
      };
    },
  },
  function (e) {
    e.O(0, [285, 363, 974, 284, 691, 661, 971, 23, 744], function () {
      return e((e.s = 21304));
    }),
      (_N_E = e.O());
  },
]);
