"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/MainCard.tsx":
/*!*************************************!*\
  !*** ./src/components/MainCard.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction MainCard(param) {\n    let { title, boldTitle, desc, image } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative w-[540px] h-[270px] bg-white text-left p-8 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl mb-3\",\n                    children: [\n                        title,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-bold\",\n                            children: [\n                                \" \",\n                                boldTitle\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/nisrina.ningrum/Documents/exercise-next/exercise-next/src/components/MainCard.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/nisrina.ningrum/Documents/exercise-next/exercise-next/src/components/MainCard.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mb-3 w-[345px] text[#777]\",\n                    children: desc\n                }, void 0, false, {\n                    fileName: \"/home/nisrina.ningrum/Documents/exercise-next/exercise-next/src/components/MainCard.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"border-b-[1px] border-[#333] w-28 mb-5 font-semibold\",\n                    children: \"Discover Now\"\n                }, void 0, false, {\n                    fileName: \"/home/nisrina.ningrum/Documents/exercise-next/exercise-next/src/components/MainCard.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"absolute right-0 bottom-2\",\n                    src: image\n                }, void 0, false, {\n                    fileName: \"/home/nisrina.ningrum/Documents/exercise-next/exercise-next/src/components/MainCard.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/nisrina.ningrum/Documents/exercise-next/exercise-next/src/components/MainCard.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = MainCard;\nvar _c;\n$RefreshReg$(_c, \"MainCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLFNBQVNBLFNBQVMsS0FVaEM7UUFWZ0MsRUFDL0JDLEtBQUssRUFDTEMsU0FBUyxFQUNUQyxJQUFJLEVBQ0pDLEtBQUssRUFNTixHQVZnQztJQVcvQixxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzt3QkFDWEw7c0NBQ0QsOERBQUNPOzRCQUFLRixXQUFVOztnQ0FBWTtnQ0FBRUo7Ozs7Ozs7Ozs7Ozs7OEJBRWhDLDhEQUFDTztvQkFBRUgsV0FBVTs4QkFBNkJIOzs7Ozs7OEJBQzFDLDhEQUFDTTtvQkFBRUgsV0FBVTs4QkFBdUQ7Ozs7Ozs4QkFHcEUsOERBQUNJO29CQUFJSixXQUFVO29CQUE0QkssS0FBS1A7Ozs7Ozs7Ozs7Ozs7QUFJeEQ7S0ExQndCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYWluQ2FyZC50c3g/ZWQ0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluQ2FyZCh7XG4gIHRpdGxlLFxuICBib2xkVGl0bGUsXG4gIGRlc2MsXG4gIGltYWdlLFxufToge1xuICB0aXRsZTogc3RyaW5nO1xuICBib2xkVGl0bGU6IHN0cmluZztcbiAgZGVzYzogc3RyaW5nO1xuICBpbWFnZTogc3RyaW5nO1xufSk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LVs1NDBweF0gaC1bMjcwcHhdIGJnLXdoaXRlIHRleHQtbGVmdCBwLTggXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtYi0zXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPiB7Ym9sZFRpdGxlfTwvc3Bhbj5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMyB3LVszNDVweF0gdGV4dFsjNzc3XVwiPntkZXNjfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm9yZGVyLWItWzFweF0gYm9yZGVyLVsjMzMzXSB3LTI4IG1iLTUgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgIERpc2NvdmVyIE5vd1xuICAgICAgICA8L3A+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCBib3R0b20tMlwiIHNyYz17aW1hZ2V9PjwvaW1nPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTWFpbkNhcmQiLCJ0aXRsZSIsImJvbGRUaXRsZSIsImRlc2MiLCJpbWFnZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwic3BhbiIsInAiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MainCard.tsx\n"));

/***/ })

});