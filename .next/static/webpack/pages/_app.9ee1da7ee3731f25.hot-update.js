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

/***/ "./src/components/Logo.js":
/*!********************************!*\
  !*** ./src/components/Logo.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\n\nconst MontionLink = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion)((next_link__WEBPACK_IMPORTED_MODULE_1___default()));\n_c = MontionLink;\nconst Logo = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center mt-2 \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MontionLink, {\n            href: \"/\",\n            className: \" w-16 h-16 bg-dark text-light rotate-text hover:rotate-0 transition-transform duration-500 ease-in-out flex items-center justify-center rounded-full text-2xl font-bold\",\n            whileHover: {\n                backgroundColor: [\n                    \"#121212\",\n                    \"rgba(131,58,180,1)\",\n                    \"#8258FA\",\n                    \"rgba(252,176,69,1)\",\n                    \"rgba(131,58,180,1)\",\n                    \"#121212\"\n                ],\n                transition: {\n                    duration: 2,\n                    repeat: Infinity\n                }\n            },\n            children: \"EES\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\eliev\\\\OneDrive\\\\Trabalhos Programa\\xe7\\xe3o\\\\portifolio2\\\\src\\\\components\\\\Logo.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\eliev\\\\OneDrive\\\\Trabalhos Programa\\xe7\\xe3o\\\\portifolio2\\\\src\\\\components\\\\Logo.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Logo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logo);\nvar _c, _c1;\n$RefreshReg$(_c, \"MontionLink\");\n$RefreshReg$(_c1, \"Logo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2dvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QjtBQUNIO0FBQ1U7QUFFcEMsTUFBTUcsY0FBY0QscURBQU1BLENBQUNGLGtEQUFJQTtLQUF6Qkc7QUFDTixNQUFNQyxPQUFPLElBQU07SUFDakIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNIO1lBQVlJLE1BQU07WUFBS0QsV0FBVTtZQUEwS0UsWUFBWTtnQkFDdE5DLGlCQUFnQjtvQkFBQztvQkFBVztvQkFBcUI7b0JBQVU7b0JBQXFCO29CQUFzQjtpQkFBVTtnQkFDaEhDLFlBQVc7b0JBQUNDLFVBQVM7b0JBQUdDLFFBQU9DO2dCQUFRO1lBQ3pDO3NCQUFHOzs7Ozs7Ozs7OztBQUdUO01BVE1UO0FBV04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9nby5qcz9iZDIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7bW90aW9ufSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5cclxuY29uc3QgTW9udGlvbkxpbmsgPSBtb3Rpb24oTGluayk7XHJcbmNvbnN0IExvZ28gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC0yICc+XHJcbiAgICAgIDxNb250aW9uTGluayBocmVmPXtcIi9cIn0gY2xhc3NOYW1lPScgdy0xNiBoLTE2IGJnLWRhcmsgdGV4dC1saWdodCByb3RhdGUtdGV4dCBob3Zlcjpyb3RhdGUtMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIHRleHQtMnhsIGZvbnQtYm9sZCcgd2hpbGVIb3Zlcj17e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjpbXCIjMTIxMjEyXCIsIFwicmdiYSgxMzEsNTgsMTgwLDEpXCIsXCIjODI1OEZBXCIsXCJyZ2JhKDI1MiwxNzYsNjksMSlcIixcInJnYmEoMTMxLDU4LDE4MCwxKVwiLCBcIiMxMjEyMTJcIl0sXHJcbiAgICAgICAgdHJhbnNpdGlvbjp7ZHVyYXRpb246MiwgcmVwZWF0OkluZmluaXR5fVxyXG4gICAgICB9fT5FRVM8L01vbnRpb25MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ287Il0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIm1vdGlvbiIsIk1vbnRpb25MaW5rIiwiTG9nbyIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJ3aGlsZUhvdmVyIiwiYmFja2dyb3VuZENvbG9yIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwicmVwZWF0IiwiSW5maW5pdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Logo.js\n"));

/***/ })

});