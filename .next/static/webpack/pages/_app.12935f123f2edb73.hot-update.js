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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icon */ \"./src/components/Icon.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst CustomLink = (param)=>{\n    let { href , title , className =\"\"  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"hover:animate-rotateOvershoot  h-[2px] inline-block  bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-500 \".concat(router.asPath === href ? \"w-full\" : \"W-0\", \" \"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eliev\\\\OneDrive\\\\Trabalhos Programa\\xe7\\xe3o\\\\portifolio2\\\\src\\\\components\\\\NavBar.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\eliev\\\\OneDrive\\\\Trabalhos Programa\\xe7\\xe3o\\\\portifolio2\\\\src\\\\components\\\\NavBar.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CustomLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CustomLink;\nconst NavBar = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"w-full px-32 py-8 flex items-center justify-between \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                            href: \"/\",\n                            title: \"Home\",\n                            className: \"mr-4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\eliev\\\\OneDrive\\\\Trabalhos Programa\\xe7\\xe3o\\\\portifolio2\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                            href: \"/about\",\n                            title: \"about\",\n                            className: \"mx-4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\eliev\\\\OneDrive\\\\Trabalhos Programa\\xe7\\xe3o\\\\portifolio2\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                            href: \"/projects\",\n                            title: \"projects\",\n                            className: \"mx-4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\eliev\\\\OneDrive\\\\Trabalhos Programa\\xe7\\xe3o\\\\portifolio2\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                            href: \"/articles\",\n                            title: \"articles\",\n                            className: \"ml-4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\eliev\\\\OneDrive\\\\Trabalhos Programa\\xe7\\xe3o\\\\portifolio2\\\\src\\\\components\\\\NavBar.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\eliev\\\\OneDrive\\\\Trabalhos Programa\\xe7\\xe3o\\\\portifolio2\\\\src\\\\components\\\\NavBar.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \" flex items-center justify-center flex-wrap\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 mr-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                                href: \"https://twitter.com\",\n                                target: \"_blank\",\n                                whileHover: {\n                                    y: -2\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon__WEBPACK_IMPORTED_MODULE_5__.GithubIcon, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\eliev\\\\OneDrive\\\\Trabalhos Programa\\xe7\\xe3o\\\\portifolio2\\\\src\\\\components\\\\NavBar.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\eliev\\\\OneDrive\\\\Trabalhos Programa\\xe7\\xe3o\\\\portifolio2\\\\src\\\\components\\\\NavBar.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                                href: \"https://twitter.com\",\n                                target: \"_blank\",\n                                whileHover: {\n                                    y: -2\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon__WEBPACK_IMPORTED_MODULE_5__.TwitterIcon, {\n                                    className: \"w-5 mx-3\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\eliev\\\\OneDrive\\\\Trabalhos Programa\\xe7\\xe3o\\\\portifolio2\\\\src\\\\components\\\\NavBar.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\eliev\\\\OneDrive\\\\Trabalhos Programa\\xe7\\xe3o\\\\portifolio2\\\\src\\\\components\\\\NavBar.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                                href: \"https://twitter.com\",\n                                target: \"_blank\",\n                                whileHover: {\n                                    y: -2\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon__WEBPACK_IMPORTED_MODULE_5__.PinterestIcon, {\n                                    className: \"w-5 mx-3\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\eliev\\\\OneDrive\\\\Trabalhos Programa\\xe7\\xe3o\\\\portifolio2\\\\src\\\\components\\\\NavBar.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\eliev\\\\OneDrive\\\\Trabalhos Programa\\xe7\\xe3o\\\\portifolio2\\\\src\\\\components\\\\NavBar.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                                href: \"https://twitter.com\",\n                                target: \"_blank\",\n                                whileHover: {\n                                    y: -2\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon__WEBPACK_IMPORTED_MODULE_5__.LinkedInIcon, {\n                                    className: \"w-5 ml-3\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\eliev\\\\OneDrive\\\\Trabalhos Programa\\xe7\\xe3o\\\\portifolio2\\\\src\\\\components\\\\NavBar.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\eliev\\\\OneDrive\\\\Trabalhos Programa\\xe7\\xe3o\\\\portifolio2\\\\src\\\\components\\\\NavBar.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\eliev\\\\OneDrive\\\\Trabalhos Programa\\xe7\\xe3o\\\\portifolio2\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\eliev\\\\OneDrive\\\\Trabalhos Programa\\xe7\\xe3o\\\\portifolio2\\\\src\\\\components\\\\NavBar.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute left-[50%] top-2 tranlate-x-[-5-%]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eliev\\\\OneDrive\\\\Trabalhos Programa\\xe7\\xe3o\\\\portifolio2\\\\src\\\\components\\\\NavBar.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\eliev\\\\OneDrive\\\\Trabalhos Programa\\xe7\\xe3o\\\\portifolio2\\\\src\\\\components\\\\NavBar.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\eliev\\\\OneDrive\\\\Trabalhos Programa\\xe7\\xe3o\\\\portifolio2\\\\src\\\\components\\\\NavBar.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c1 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomLink\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRztBQUNIO0FBQ2M7QUFDc0M7QUFDdkM7QUFFdkMsTUFBTVMsYUFBYSxTQUFxQztRQUFwQyxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsV0FBWSxHQUFFLEVBQUU7O0lBQ2pELE1BQU1DLFNBQVNWLHNEQUFTQTtJQUN4QixxQkFDRSw4REFBQ0Ysa0RBQUlBO1FBQUNTLE1BQU1BO1FBQU1FLFdBQVcsR0FBYSxPQUFWQSxXQUFVOztZQUN2Q0Q7MEJBQ0QsOERBQUNHO2dCQUNDRixXQUFXLDRKQUVWLE9BRENDLE9BQU9FLE1BQU0sS0FBS0wsT0FBTyxXQUFXLEtBQUssRUFDMUM7MEJBQ0Y7Ozs7Ozs7Ozs7OztBQUtQO0dBZE1EOztRQUNXTixrREFBU0E7OztLQURwQk07QUFnQk4sTUFBTU8sU0FBUyxJQUFNO0lBQ25CLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFPTCxXQUFVOzs4QkFDaEIsOERBQUNNO29CQUFJTixXQUFVOztzQ0FDYiw4REFBQ0g7NEJBQVdDLE1BQUs7NEJBQUlDLE9BQU07NEJBQU9DLFdBQVU7Ozs7OztzQ0FDNUMsOERBQUNIOzRCQUFXQyxNQUFLOzRCQUFTQyxPQUFNOzRCQUFRQyxXQUFVOzs7Ozs7c0NBQ2xELDhEQUFDSDs0QkFBV0MsTUFBSzs0QkFBWUMsT0FBTTs0QkFBV0MsV0FBVTs7Ozs7O3NDQUN4RCw4REFBQ0g7NEJBQVdDLE1BQUs7NEJBQVlDLE9BQU07NEJBQVdDLFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFHMUQsOERBQUNNO29CQUFJTixXQUFVOzhCQUNmLDRFQUFDTzt3QkFBSVAsV0FBVTs7MENBQ2IsOERBQUNKLG1EQUFRO2dDQUNQRSxNQUFLO2dDQUNMVyxRQUFRO2dDQUNSQyxZQUFZO29DQUFFQyxHQUFHLENBQUM7Z0NBQUU7Z0NBQ3BCQyxVQUFVO29DQUFFQyxPQUFPO2dDQUFJOzBDQUd2Qiw0RUFBQ3BCLDZDQUFVQTs7Ozs7Ozs7OzswQ0FHYiw4REFBQ0csbURBQVE7Z0NBQ1BFLE1BQUs7Z0NBQ0xXLFFBQVE7Z0NBQ1JDLFlBQVk7b0NBQUVDLEdBQUcsQ0FBQztnQ0FBRTtnQ0FDcEJDLFVBQVU7b0NBQUVDLE9BQU87Z0NBQUk7MENBRXZCLDRFQUFDckIsOENBQVdBO29DQUFDUSxXQUFVOzs7Ozs7Ozs7OzswQ0FFekIsOERBQUNKLG1EQUFRO2dDQUNQRSxNQUFLO2dDQUNMVyxRQUFRO2dDQUNSQyxZQUFZO29DQUFFQyxHQUFHLENBQUM7Z0NBQUU7Z0NBQ3BCQyxVQUFVO29DQUFFQyxPQUFPO2dDQUFJOzBDQUV2Qiw0RUFBQ2xCLGdEQUFhQTtvQ0FBQ0ssV0FBVTs7Ozs7Ozs7Ozs7MENBRTNCLDhEQUFDSixtREFBUTtnQ0FDUEUsTUFBSztnQ0FDTFcsUUFBUTtnQ0FDUkMsWUFBWTtvQ0FBRUMsR0FBRyxDQUFDO2dDQUFFO2dDQUNwQkMsVUFBVTtvQ0FBRUMsT0FBTztnQ0FBSTswQ0FFdkIsNEVBQUNuQiwrQ0FBWUE7b0NBQUNNLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSTVCLDhEQUFDTztvQkFBSVAsV0FBVTs4QkFDYiw0RUFBQ1YsNkNBQUlBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtmO01BdkRNYztBQXlETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanM/NmJlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4vTG9nb1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVHdpdHRlckljb24sIEdpdGh1Ykljb24sIExpbmtlZEluSWNvbiwgUGludGVyZXN0SWNvbiB9IGZyb20gXCIuL0ljb25cIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmNvbnN0IEN1c3RvbUxpbmsgPSAoeyBocmVmLCB0aXRsZSwgY2xhc3NOYW1lID0gXCJcIiB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSByZWxhdGl2ZSBncm91cGB9PlxyXG4gICAgICB7dGl0bGV9XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgaG92ZXI6YW5pbWF0ZS1yb3RhdGVPdmVyc2hvb3QgIGgtWzJweF0gaW5saW5lLWJsb2NrICBiZy1ibGFjayBhYnNvbHV0ZSBsZWZ0LTAgLWJvdHRvbS0wLjUgZ3JvdXAtaG92ZXI6dy1mdWxsIHRyYW5zaXRpb24tW3dpZHRoXSBlYXNlLWluLW91dCBkdXJhdGlvbi01MDAgJHtcclxuICAgICAgICAgIHJvdXRlci5hc1BhdGggPT09IGhyZWYgPyBcInctZnVsbFwiIDogXCJXLTBcIlxyXG4gICAgICAgIH0gYH1cclxuICAgICAgPlxyXG4gICAgICAgICZuYnNwO1xyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMzIgcHktOCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gXCI+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvXCIgdGl0bGU9XCJIb21lXCIgY2xhc3NOYW1lPVwibXItNFwiIC8+XHJcbiAgICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL2Fib3V0XCIgdGl0bGU9XCJhYm91dFwiIGNsYXNzTmFtZT1cIm14LTRcIiAvPlxyXG4gICAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9wcm9qZWN0c1wiIHRpdGxlPVwicHJvamVjdHNcIiBjbGFzc05hbWU9XCJteC00XCIgLz5cclxuICAgICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvYXJ0aWNsZXNcIiB0aXRsZT1cImFydGljbGVzXCIgY2xhc3NOYW1lPVwibWwtNFwiIC8+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgey8qU29jaWFsIEljb25zICovfVxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01IG1yLTNcIj5cclxuICAgICAgICAgIDxtb3Rpb24uYVxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbVwiXHJcbiAgICAgICAgICAgIHRhcmdldD17XCJfYmxhbmtcIn1cclxuICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyB5OiAtMiB9fVxyXG4gICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8R2l0aHViSWNvbiAgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L21vdGlvbi5hPlxyXG4gICAgICAgICAgPG1vdGlvbi5hXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tXCJcclxuICAgICAgICAgICAgdGFyZ2V0PXtcIl9ibGFua1wifVxyXG4gICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0yIH19XHJcbiAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFR3aXR0ZXJJY29uIGNsYXNzTmFtZT1cInctNSBteC0zXCIgLz5cclxuICAgICAgICAgIDwvbW90aW9uLmE+XHJcbiAgICAgICAgICA8bW90aW9uLmFcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb21cIlxyXG4gICAgICAgICAgICB0YXJnZXQ9e1wiX2JsYW5rXCJ9XHJcbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTIgfX1cclxuICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGludGVyZXN0SWNvbiBjbGFzc05hbWU9XCJ3LTUgbXgtM1wiIC8+XHJcbiAgICAgICAgICA8L21vdGlvbi5hPlxyXG4gICAgICAgICAgPG1vdGlvbi5hXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tXCJcclxuICAgICAgICAgICAgdGFyZ2V0PXtcIl9ibGFua1wifVxyXG4gICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0yIH19XHJcbiAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpbmtlZEluSWNvbiBjbGFzc05hbWU9XCJ3LTUgbWwtM1wiIC8+XHJcbiAgICAgICAgICA8L21vdGlvbi5hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LVs1MCVdIHRvcC0yIHRyYW5sYXRlLXgtWy01LSVdXCI+XHJcbiAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJMb2dvIiwidXNlUm91dGVyIiwiVHdpdHRlckljb24iLCJHaXRodWJJY29uIiwiTGlua2VkSW5JY29uIiwiUGludGVyZXN0SWNvbiIsIm1vdGlvbiIsIkN1c3RvbUxpbmsiLCJocmVmIiwidGl0bGUiLCJjbGFzc05hbWUiLCJyb3V0ZXIiLCJzcGFuIiwiYXNQYXRoIiwiTmF2QmFyIiwiaGVhZGVyIiwibmF2IiwiZGl2IiwiYSIsInRhcmdldCIsIndoaWxlSG92ZXIiLCJ5Iiwid2hpbGVUYXAiLCJzY2FsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NavBar.js\n"));

/***/ })

});