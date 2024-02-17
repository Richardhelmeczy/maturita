"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/myappointments/page",{

/***/ "(app-pages-browser)/./src/app/profile/myappointments/page.tsx":
/*!*************************************************!*\
  !*** ./src/app/profile/myappointments/page.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Userprofile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_GetUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/GetUser */ \"(app-pages-browser)/./src/components/GetUser.tsx\");\n/* harmony import */ var _actions_get_user_appointments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/get-user-appointments */ \"(app-pages-browser)/./src/actions/get-user-appointments.ts\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Userprofile() {\n    _s();\n    const userId = (0,_components_GetUser__WEBPACK_IMPORTED_MODULE_2__.useUserId)();\n    console.log(userId);\n    const [userAppointments, setUserAppointments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userId !== \"\") {\n            const fetchData = async ()=>{\n                const profileAppointments = await (0,_actions_get_user_appointments__WEBPACK_IMPORTED_MODULE_3__.userProfileAppointments)(userId);\n                setUserAppointments(profileAppointments);\n            };\n            fetchData();\n        }\n    }, [\n        userId\n    ]);\n    const onSubmit = async (data)=>{\n        deleteAppointment(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col items-center p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"My Appointments:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-3 gap-4\",\n                children: userAppointments.map((appo)=>// eslint-disable-next-line react/jsx-key\n                    // eslint-disable-next-line react/jsx-key\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    appo.name,\n                                    \" \",\n                                    appo.lastname\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: appo.appointmentDate\n                            }, void 0, false, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-red-500 text-white rounded hover:bg-red-700 p-2\",\n                                onClick: ()=>deleteAppointment(appo.id),\n                                children: \"Cancel\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, appo.id, true, {\n                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Userprofile, \"QdoYAu3wtOj0R4JsW+e44DmO2Xs=\", false, function() {\n    return [\n        _components_GetUser__WEBPACK_IMPORTED_MODULE_2__.useUserId,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm\n    ];\n});\n_c = Userprofile;\nvar _c;\n$RefreshReg$(_c, \"Userprofile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9teWFwcG9pbnRtZW50cy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFNEM7QUFDWTtBQUN5QjtBQUN2QztBQUkzQixTQUFTSzs7SUFDdEIsTUFBTUMsU0FBU0osOERBQVNBO0lBQ3hCSyxRQUFRQyxHQUFHLENBQUNGO0lBQ1osTUFBTSxDQUFDRyxrQkFBa0JDLG9CQUFvQixHQUFHVCwrQ0FBUUEsQ0FBUSxFQUFFO0lBQ2xFLE1BQU0sRUFBRVUsUUFBUSxFQUFFQyxZQUFZLEVBQUUsR0FBR1Isd0RBQU9BO0lBQzFDSixnREFBU0EsQ0FBQztRQUNSLElBQUlNLFdBQVcsSUFBSTtZQUNqQixNQUFNTyxZQUFZO2dCQUNoQixNQUFNQyxzQkFBc0IsTUFBTVgsdUZBQXVCQSxDQUFDRztnQkFDMURJLG9CQUFvQkk7WUFBb0I7WUFDMUNEO1FBQ0Y7SUFDRixHQUFHO1FBQUNQO0tBQU87SUFFWCxNQUFNUyxXQUFXLE9BQU9DO1FBQ3RCQyxrQkFBa0JEO0lBQ3BCO0lBR0EscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBRTs7Ozs7OzBCQUNILDhEQUFDRjtnQkFBSUMsV0FBVTswQkFDWlYsaUJBQWlCWSxHQUFHLENBQUMsQ0FBQ0MsT0FDckIseUNBQXlDO29CQUN2Qyx5Q0FBeUM7a0NBQ3pDLDhEQUFDSjt3QkFBa0JDLFdBQVU7OzBDQUMzQiw4REFBQ0Q7O29DQUFLSSxLQUFLQyxJQUFJO29DQUFDO29DQUFFRCxLQUFLRSxRQUFROzs7Ozs7OzBDQUMvQiw4REFBQ047MENBQUtJLEtBQUtHLGVBQWU7Ozs7OzswQ0FDNUIsOERBQUNDO2dDQUNDUCxXQUFVO2dDQUNWUSxTQUFTLElBQU1WLGtCQUFrQkssS0FBS00sRUFBRTswQ0FDekM7Ozs7Ozs7dUJBTlNOLEtBQUtNLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjN0I7R0F4Q3dCdkI7O1FBQ1BILDBEQUFTQTtRQUdXRSxvREFBT0E7OztLQUpwQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9maWxlL215YXBwb2ludG1lbnRzL3BhZ2UudHN4PzIzNjMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVXNlcklkIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvR2V0VXNlclwiO1xyXG5pbXBvcnQgeyB1c2VyUHJvZmlsZUFwcG9pbnRtZW50cyB9IGZyb20gXCIuLi8uLi8uLi9hY3Rpb25zL2dldC11c2VyLWFwcG9pbnRtZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VycHJvZmlsZSgpIHtcclxuICBjb25zdCB1c2VySWQgPSB1c2VVc2VySWQoKVxyXG4gIGNvbnNvbGUubG9nKHVzZXJJZClcclxuICBjb25zdCBbdXNlckFwcG9pbnRtZW50cywgc2V0VXNlckFwcG9pbnRtZW50c10gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybTxGb3JtRGF0YT4oKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXJJZCAhPT0gJycpIHtcclxuICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGVBcHBvaW50bWVudHMgPSBhd2FpdCB1c2VyUHJvZmlsZUFwcG9pbnRtZW50cyh1c2VySWQpXHJcbiAgICAgICAgc2V0VXNlckFwcG9pbnRtZW50cyhwcm9maWxlQXBwb2ludG1lbnRzKX1cclxuICAgICAgZmV0Y2hEYXRhKClcclxuICAgIH1cclxuICB9LCBbdXNlcklkXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIGRlbGV0ZUFwcG9pbnRtZW50KGRhdGEpXHJcbiAgfVxyXG5cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcC0yNFwiPlxyXG4gICAgICA8cD5NeSBBcHBvaW50bWVudHM6PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTRcIj5cclxuICAgICAgICB7dXNlckFwcG9pbnRtZW50cy5tYXAoKGFwcG8pID0+IChcclxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gta2V5XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gta2V5XHJcbiAgICAgICAgICAgIDxkaXYga2V5PXthcHBvLmlkfSBjbGFzc05hbWU9XCJibG9jayBtYXgtdy1zbSBwLTYgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIHNoYWRvdyBob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwIGRhcms6aG92ZXI6YmctZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICA8ZGl2PnthcHBvLm5hbWV9IHthcHBvLmxhc3RuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+e2FwcG8uYXBwb2ludG1lbnREYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgaG92ZXI6YmctcmVkLTcwMCBwLTJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUFwcG9pbnRtZW50KGFwcG8uaWQpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVVzZXJJZCIsInVzZXJQcm9maWxlQXBwb2ludG1lbnRzIiwidXNlRm9ybSIsIlVzZXJwcm9maWxlIiwidXNlcklkIiwiY29uc29sZSIsImxvZyIsInVzZXJBcHBvaW50bWVudHMiLCJzZXRVc2VyQXBwb2ludG1lbnRzIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmZXRjaERhdGEiLCJwcm9maWxlQXBwb2ludG1lbnRzIiwib25TdWJtaXQiLCJkYXRhIiwiZGVsZXRlQXBwb2ludG1lbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibWFwIiwiYXBwbyIsIm5hbWUiLCJsYXN0bmFtZSIsImFwcG9pbnRtZW50RGF0ZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/myappointments/page.tsx\n"));

/***/ })

});