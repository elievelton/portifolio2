"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icon */ \"./src/components/Icon.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst CustomLink = (param)=>{\n    let { href , title , className =\"\"  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"hover:animate-rotateOvershoot  h-[2px] inline-block  bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-500 \".concat(router.asPath === href ? \"w-full\" : \"W-0\", \" \"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"/Users/elieveltoedimardasilva/Git/portifolio2/src/components/NavBar.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/elieveltoedimardasilva/Git/portifolio2/src/components/NavBar.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CustomLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CustomLink;\nconst NavBar = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"w-full px-32 py-8 flex items-center justify-between \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                            href: \"/\",\n                            title: \"Home\",\n                            className: \"mr-4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/elieveltoedimardasilva/Git/portifolio2/src/components/NavBar.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                            href: \"/about\",\n                            title: \"about\",\n                            className: \"mx-4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/elieveltoedimardasilva/Git/portifolio2/src/components/NavBar.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                            href: \"/projects\",\n                            title: \"projects\",\n                            className: \"mx-4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/elieveltoedimardasilva/Git/portifolio2/src/components/NavBar.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                            href: \"/articles\",\n                            title: \"articles\",\n                            className: \"ml-4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/elieveltoedimardasilva/Git/portifolio2/src/components/NavBar.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/elieveltoedimardasilva/Git/portifolio2/src/components/NavBar.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \" flex items-center justify-center flex-wrap\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                            href: \"https://twitter.com\",\n                            target: \"_blank\",\n                            whileHover: {\n                                y: -2\n                            },\n                            whileTap: {\n                                scale: 0.9\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon__WEBPACK_IMPORTED_MODULE_5__.GithubIcon, {\n                                className: \"w-6 mr-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/elieveltoedimardasilva/Git/portifolio2/src/components/NavBar.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/elieveltoedimardasilva/Git/portifolio2/src/components/NavBar.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                            href: \"https://twitter.com\",\n                            target: \"_blank\",\n                            whileHover: {\n                                y: -2\n                            },\n                            whileTap: {\n                                scale: 0.9\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon__WEBPACK_IMPORTED_MODULE_5__.TwitterIcon, {\n                                className: \"w-6 mr-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/elieveltoedimardasilva/Git/portifolio2/src/components/NavBar.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/elieveltoedimardasilva/Git/portifolio2/src/components/NavBar.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                            href: \"https://twitter.com\",\n                            target: \"_blank\",\n                            whileHover: {\n                                y: -2\n                            },\n                            whileTap: {\n                                scale: 0.9\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon__WEBPACK_IMPORTED_MODULE_5__.PinterestIcon, {\n                                className: \"w-6 mr-3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/elieveltoedimardasilva/Git/portifolio2/src/components/NavBar.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/elieveltoedimardasilva/Git/portifolio2/src/components/NavBar.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                            href: \"https://twitter.com\",\n                            target: \"_blank\",\n                            whileHover: {\n                                y: -2\n                            },\n                            whileTap: {\n                                scale: 0.9\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon__WEBPACK_IMPORTED_MODULE_5__.LinkedInIcon, {\n                                className: \"w-5 mr-3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/elieveltoedimardasilva/Git/portifolio2/src/components/NavBar.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/elieveltoedimardasilva/Git/portifolio2/src/components/NavBar.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/elieveltoedimardasilva/Git/portifolio2/src/components/NavBar.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute left-[50%] top-2 tranlate-x-[-5-%]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/elieveltoedimardasilva/Git/portifolio2/src/components/NavBar.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/elieveltoedimardasilva/Git/portifolio2/src/components/NavBar.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/elieveltoedimardasilva/Git/portifolio2/src/components/NavBar.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c1 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomLink\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRztBQUNIO0FBQ2M7QUFDc0M7QUFDdkM7QUFFdkMsTUFBTVMsYUFBYSxTQUFxQztRQUFwQyxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsV0FBWSxHQUFFLEVBQUU7O0lBQ2pELE1BQU1DLFNBQVNWLHNEQUFTQTtJQUN4QixxQkFDRSw4REFBQ0Ysa0RBQUlBO1FBQUNTLE1BQU1BO1FBQU1FLFdBQVcsR0FBYSxPQUFWQSxXQUFVOztZQUN2Q0Q7MEJBQ0QsOERBQUNHO2dCQUNDRixXQUFXLDRKQUVWLE9BRENDLE9BQU9FLE1BQU0sS0FBS0wsT0FBTyxXQUFXLEtBQUssRUFDMUM7MEJBQ0Y7Ozs7Ozs7Ozs7OztBQUtQO0dBZE1EOztRQUNXTixrREFBU0E7OztLQURwQk07QUFnQk4sTUFBTU8sU0FBUyxJQUFNO0lBQ25CLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFPTCxXQUFVOzs4QkFDaEIsOERBQUNNO29CQUFJTixXQUFVOztzQ0FDYiw4REFBQ0g7NEJBQVdDLE1BQUs7NEJBQUlDLE9BQU07NEJBQU9DLFdBQVU7Ozs7OztzQ0FDNUMsOERBQUNIOzRCQUFXQyxNQUFLOzRCQUFTQyxPQUFNOzRCQUFRQyxXQUFVOzs7Ozs7c0NBQ2xELDhEQUFDSDs0QkFBV0MsTUFBSzs0QkFBWUMsT0FBTTs0QkFBV0MsV0FBVTs7Ozs7O3NDQUN4RCw4REFBQ0g7NEJBQVdDLE1BQUs7NEJBQVlDLE9BQU07NEJBQVdDLFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFHMUQsOERBQUNNO29CQUFJTixXQUFVOztzQ0FDYiw4REFBQ0osbURBQVE7NEJBQ1BFLE1BQUs7NEJBQ0xVLFFBQVE7NEJBQ1JDLFlBQVk7Z0NBQUVDLEdBQUcsQ0FBQzs0QkFBRTs0QkFDcEJDLFVBQVU7Z0NBQUVDLE9BQU87NEJBQUk7c0NBRXZCLDRFQUFDbkIsNkNBQVVBO2dDQUFDTyxXQUFVOzs7Ozs7Ozs7OztzQ0FFeEIsOERBQUNKLG1EQUFROzRCQUNQRSxNQUFLOzRCQUNMVSxRQUFROzRCQUNSQyxZQUFZO2dDQUFFQyxHQUFHLENBQUM7NEJBQUU7NEJBQ3BCQyxVQUFVO2dDQUFFQyxPQUFPOzRCQUFJO3NDQUV2Qiw0RUFBQ3BCLDhDQUFXQTtnQ0FBQ1EsV0FBVTs7Ozs7Ozs7Ozs7c0NBRXpCLDhEQUFDSixtREFBUTs0QkFDUEUsTUFBSzs0QkFDTFUsUUFBUTs0QkFDUkMsWUFBWTtnQ0FBRUMsR0FBRyxDQUFDOzRCQUFFOzRCQUNwQkMsVUFBVTtnQ0FBRUMsT0FBTzs0QkFBSTtzQ0FFdkIsNEVBQUNqQixnREFBYUE7Z0NBQUNLLFdBQVU7Ozs7Ozs7Ozs7O3NDQUUzQiw4REFBQ0osbURBQVE7NEJBQ1BFLE1BQUs7NEJBQ0xVLFFBQVE7NEJBQ1JDLFlBQVk7Z0NBQUVDLEdBQUcsQ0FBQzs0QkFBRTs0QkFDcEJDLFVBQVU7Z0NBQUVDLE9BQU87NEJBQUk7c0NBRXZCLDRFQUFDbEIsK0NBQVlBO2dDQUFDTSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHNUIsOERBQUNhO29CQUFJYixXQUFVOzhCQUNiLDRFQUFDViw2Q0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2Y7TUFuRE1jO0FBcUROLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdkJhci5qcz82YmU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgVHdpdHRlckljb24sIEdpdGh1Ykljb24sIExpbmtlZEluSWNvbiwgUGludGVyZXN0SWNvbiB9IGZyb20gXCIuL0ljb25cIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IEN1c3RvbUxpbmsgPSAoeyBocmVmLCB0aXRsZSwgY2xhc3NOYW1lID0gXCJcIiB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSByZWxhdGl2ZSBncm91cGB9PlxuICAgICAge3RpdGxlfVxuICAgICAgPHNwYW5cbiAgICAgICAgY2xhc3NOYW1lPXtgaG92ZXI6YW5pbWF0ZS1yb3RhdGVPdmVyc2hvb3QgIGgtWzJweF0gaW5saW5lLWJsb2NrICBiZy1ibGFjayBhYnNvbHV0ZSBsZWZ0LTAgLWJvdHRvbS0wLjUgZ3JvdXAtaG92ZXI6dy1mdWxsIHRyYW5zaXRpb24tW3dpZHRoXSBlYXNlLWluLW91dCBkdXJhdGlvbi01MDAgJHtcbiAgICAgICAgICByb3V0ZXIuYXNQYXRoID09PSBocmVmID8gXCJ3LWZ1bGxcIiA6IFwiVy0wXCJcbiAgICAgICAgfSBgfVxuICAgICAgPlxuICAgICAgICAmbmJzcDtcbiAgICAgIDwvc3Bhbj5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMyIHB5LTggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIFwiPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvXCIgdGl0bGU9XCJIb21lXCIgY2xhc3NOYW1lPVwibXItNFwiIC8+XG4gICAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9hYm91dFwiIHRpdGxlPVwiYWJvdXRcIiBjbGFzc05hbWU9XCJteC00XCIgLz5cbiAgICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL3Byb2plY3RzXCIgdGl0bGU9XCJwcm9qZWN0c1wiIGNsYXNzTmFtZT1cIm14LTRcIiAvPlxuICAgICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvYXJ0aWNsZXNcIiB0aXRsZT1cImFydGljbGVzXCIgY2xhc3NOYW1lPVwibWwtNFwiIC8+XG4gICAgICAgIDwvbmF2PlxuXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcFwiPlxuICAgICAgICAgIDxtb3Rpb24uYVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb21cIlxuICAgICAgICAgICAgdGFyZ2V0PXtcIl9ibGFua1wifVxuICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyB5OiAtMiB9fVxuICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxHaXRodWJJY29uIGNsYXNzTmFtZT1cInctNiBtci00XCIgLz5cbiAgICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICAgIDxtb3Rpb24uYVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb21cIlxuICAgICAgICAgICAgdGFyZ2V0PXtcIl9ibGFua1wifVxuICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyB5OiAtMiB9fVxuICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUd2l0dGVySWNvbiBjbGFzc05hbWU9XCJ3LTYgbXItNFwiIC8+XG4gICAgICAgICAgPC9tb3Rpb24uYT5cbiAgICAgICAgICA8bW90aW9uLmFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tXCJcbiAgICAgICAgICAgIHRhcmdldD17XCJfYmxhbmtcIn1cbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTIgfX1cbiAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UGludGVyZXN0SWNvbiBjbGFzc05hbWU9XCJ3LTYgbXItM1wiIC8+XG4gICAgICAgICAgPC9tb3Rpb24uYT5cbiAgICAgICAgICA8bW90aW9uLmFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tXCJcbiAgICAgICAgICAgIHRhcmdldD17XCJfYmxhbmtcIn1cbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTIgfX1cbiAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGlua2VkSW5JY29uIGNsYXNzTmFtZT1cInctNSBtci0zXCIgLz5cbiAgICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LVs1MCVdIHRvcC0yIHRyYW5sYXRlLXgtWy01LSVdXCI+XG4gICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJMb2dvIiwidXNlUm91dGVyIiwiVHdpdHRlckljb24iLCJHaXRodWJJY29uIiwiTGlua2VkSW5JY29uIiwiUGludGVyZXN0SWNvbiIsIm1vdGlvbiIsIkN1c3RvbUxpbmsiLCJocmVmIiwidGl0bGUiLCJjbGFzc05hbWUiLCJyb3V0ZXIiLCJzcGFuIiwiYXNQYXRoIiwiTmF2QmFyIiwiaGVhZGVyIiwibmF2IiwiYSIsInRhcmdldCIsIndoaWxlSG92ZXIiLCJ5Iiwid2hpbGVUYXAiLCJzY2FsZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NavBar.js\n"));

/***/ })

});