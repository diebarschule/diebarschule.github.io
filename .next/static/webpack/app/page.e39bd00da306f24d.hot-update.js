"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/GrayscaleTransitionImage.tsx":
/*!*****************************************************!*\
  !*** ./src/components/GrayscaleTransitionImage.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GrayscaleTransitionImage: function() { return /* binding */ GrayscaleTransitionImage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-motion-template.mjs\");\n/* __next_internal_client_entry_do_not_use__ GrayscaleTransitionImage auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst MotionImage = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion)((next_image__WEBPACK_IMPORTED_MODULE_2___default()));\n_c = MotionImage;\nfunction GrayscaleTransitionImage(props) {\n    _s();\n    let ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    let { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)({\n        target: ref,\n        offset: [\n            \"start 65%\",\n            \"end 35%\"\n        ]\n    });\n    let grayscale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        0.5,\n        1\n    ], [\n        1,\n        0,\n        1\n    ]);\n    let filter = framer_motion__WEBPACK_IMPORTED_MODULE_6__.useMotionTemplate`grayscale(${grayscale})`;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        className: \"group relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionImage, {\n                alt: \"\",\n                style: {\n                    filter\n                },\n                ...props\n            }, void 0, false, {\n                fileName: \"/Users/chris/repos/diebarschule/src/components/GrayscaleTransitionImage.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pointer-events-none absolute left-0 top-0 w-full opacity-0 transition duration-300 group-hover:opacity-100\",\n                \"aria-hidden\": \"true\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    alt: \"\",\n                    ...props\n                }, void 0, false, {\n                    fileName: \"/Users/chris/repos/diebarschule/src/components/GrayscaleTransitionImage.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/chris/repos/diebarschule/src/components/GrayscaleTransitionImage.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chris/repos/diebarschule/src/components/GrayscaleTransitionImage.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(GrayscaleTransitionImage, \"S3ubYfT+ZDPB6eTIsVTlhkdcLJ0=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform\n    ];\n});\n_c1 = GrayscaleTransitionImage;\nvar _c, _c1;\n$RefreshReg$(_c, \"MotionImage\");\n$RefreshReg$(_c1, \"GrayscaleTransitionImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0dyYXlzY2FsZVRyYW5zaXRpb25JbWFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRThCO0FBQ3FCO0FBTTdCO0FBRXRCLE1BQU1NLGNBQWNKLHFEQUFNQSxDQUFDRCxtREFBS0E7S0FBMUJLO0FBRUMsU0FBU0MseUJBQ2RDLEtBR29COztJQUVwQixJQUFJQyxNQUFNVCw2Q0FBTUEsQ0FBMEI7SUFDMUMsSUFBSSxFQUFFVSxlQUFlLEVBQUUsR0FBR04sd0RBQVNBLENBQUM7UUFDbENPLFFBQVFGO1FBQ1JHLFFBQVE7WUFBQztZQUFhO1NBQVU7SUFDbEM7SUFDQSxJQUFJQyxZQUFZUiwyREFBWUEsQ0FBQ0ssaUJBQWlCO1FBQUM7UUFBRztRQUFLO0tBQUUsRUFBRTtRQUFDO1FBQUc7UUFBRztLQUFFO0lBQ3BFLElBQUlJLFNBQVNYLDREQUFpQixDQUFDLFVBQVUsRUFBRVUsVUFBVSxDQUFDLENBQUM7SUFFdkQscUJBQ0UsOERBQUNFO1FBQUlOLEtBQUtBO1FBQUtPLFdBQVU7OzBCQUN2Qiw4REFBQ1Y7Z0JBQVlXLEtBQUk7Z0JBQUdDLE9BQU87b0JBQUVKO2dCQUFPO2dCQUFXLEdBQUdOLEtBQUs7Ozs7OzswQkFDdkQsOERBQUNPO2dCQUNDQyxXQUFVO2dCQUNWRyxlQUFZOzBCQUVaLDRFQUFDbEIsbURBQUtBO29CQUFDZ0IsS0FBSTtvQkFBSSxHQUFHVCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkvQjtHQXpCZ0JEOztRQU9ZSCxvREFBU0E7UUFJbkJDLHVEQUFZQTs7O01BWGRFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0dyYXlzY2FsZVRyYW5zaXRpb25JbWFnZS50c3g/YzExOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UsIHsgdHlwZSBJbWFnZVByb3BzIH0gZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7XG4gIG1vdGlvbixcbiAgdXNlTW90aW9uVGVtcGxhdGUsXG4gIHVzZVNjcm9sbCxcbiAgdXNlVHJhbnNmb3JtLFxufSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5jb25zdCBNb3Rpb25JbWFnZSA9IG1vdGlvbihJbWFnZSlcblxuZXhwb3J0IGZ1bmN0aW9uIEdyYXlzY2FsZVRyYW5zaXRpb25JbWFnZShcbiAgcHJvcHM6IFBpY2s8XG4gICAgSW1hZ2VQcm9wcyxcbiAgICAnc3JjJyB8ICdxdWFsaXR5JyB8ICdjbGFzc05hbWUnIHwgJ3NpemVzJyB8ICdwcmlvcml0eSdcbiAgPiAmIHsgYWx0Pzogc3RyaW5nIH0sXG4pIHtcbiAgbGV0IHJlZiA9IHVzZVJlZjxSZWFjdC5FbGVtZW50UmVmPCdkaXYnPj4obnVsbClcbiAgbGV0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoe1xuICAgIHRhcmdldDogcmVmLFxuICAgIG9mZnNldDogWydzdGFydCA2NSUnLCAnZW5kIDM1JSddLFxuICB9KVxuICBsZXQgZ3JheXNjYWxlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuNSwgMV0sIFsxLCAwLCAxXSlcbiAgbGV0IGZpbHRlciA9IHVzZU1vdGlvblRlbXBsYXRlYGdyYXlzY2FsZSgke2dyYXlzY2FsZX0pYFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmVcIj5cbiAgICAgIDxNb3Rpb25JbWFnZSBhbHQ9XCJcIiBzdHlsZT17eyBmaWx0ZXIgfSBhcyBhbnl9IHsuLi5wcm9wc30gLz5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBsZWZ0LTAgdG9wLTAgdy1mdWxsIG9wYWNpdHktMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMFwiXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICA+XG4gICAgICAgIDxJbWFnZSBhbHQ9XCJcIiB7Li4ucHJvcHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVJlZiIsIkltYWdlIiwibW90aW9uIiwidXNlTW90aW9uVGVtcGxhdGUiLCJ1c2VTY3JvbGwiLCJ1c2VUcmFuc2Zvcm0iLCJNb3Rpb25JbWFnZSIsIkdyYXlzY2FsZVRyYW5zaXRpb25JbWFnZSIsInByb3BzIiwicmVmIiwic2Nyb2xsWVByb2dyZXNzIiwidGFyZ2V0Iiwib2Zmc2V0IiwiZ3JheXNjYWxlIiwiZmlsdGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiYWx0Iiwic3R5bGUiLCJhcmlhLWhpZGRlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/GrayscaleTransitionImage.tsx\n"));

/***/ })

});