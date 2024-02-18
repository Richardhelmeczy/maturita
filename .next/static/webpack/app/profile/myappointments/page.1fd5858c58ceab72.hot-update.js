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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Userprofile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_GetUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/GetUser */ \"(app-pages-browser)/./src/components/GetUser.tsx\");\n/* harmony import */ var _actions_get_user_appointments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/get-user-appointments */ \"(app-pages-browser)/./src/actions/get-user-appointments.ts\");\n/* harmony import */ var _actions_delete_appointment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/delete-appointment */ \"(app-pages-browser)/./src/actions/delete-appointment.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Userprofile() {\n    _s();\n    const userId = (0,_components_GetUser__WEBPACK_IMPORTED_MODULE_2__.useUserId)();\n    const [userAppointments, setUserAppointments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchData = async ()=>{\n        if (userId !== \"\") {\n            const profileAppointments = await (0,_actions_get_user_appointments__WEBPACK_IMPORTED_MODULE_3__.userProfileAppointments)(userId);\n            setUserAppointments(profileAppointments);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, [\n        userId\n    ]);\n    const onSubmit = async (data)=>{\n        console.log(data);\n        (0,_actions_delete_appointment__WEBPACK_IMPORTED_MODULE_4__.deleteAppointment)(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col items-center p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"My Appointments:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-3 gap-4\",\n                children: userAppointments.map((appo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    appo.firstname,\n                                    \" \",\n                                    appo.lastname\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    appo.date,\n                                    \" \",\n                                    appo.time\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-red-500 text-white rounded hover:bg-red-700 p-2\",\n                                onClick: ()=>(0,_actions_delete_appointment__WEBPACK_IMPORTED_MODULE_4__.deleteAppointment)(appo.id),\n                                children: \"Cancel\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, appo.id, true, {\n                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Userprofile, \"/5Qrfz3N4ARv/xhrnTjq9RD/vs8=\", false, function() {\n    return [\n        _components_GetUser__WEBPACK_IMPORTED_MODULE_2__.useUserId\n    ];\n});\n_c = Userprofile;\nvar _c;\n$RefreshReg$(_c, \"Userprofile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9teWFwcG9pbnRtZW50cy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFNEM7QUFDWTtBQUN5QjtBQUNUO0FBRXpELFNBQVNLOztJQUN0QixNQUFNQyxTQUFTSiw4REFBU0E7SUFDeEIsTUFBTSxDQUFDSyxrQkFBa0JDLG9CQUFvQixHQUFHUCwrQ0FBUUEsQ0FBUSxFQUFFO0lBQ2xFLE1BQU1RLFlBQVk7UUFDaEIsSUFBSUgsV0FBVyxJQUFJO1lBQ2pCLE1BQU1JLHNCQUFzQixNQUFNUCx1RkFBdUJBLENBQUNHO1lBQzFERSxvQkFBb0JFO1FBQ3RCO0lBQ0Y7SUFDQVYsZ0RBQVNBLENBQUM7UUFDUlM7SUFDRixHQUFHO1FBQUNIO0tBQU87SUFDWCxNQUFNSyxXQUFXLE9BQU9DO1FBQ3RCQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1pSLDhFQUFpQkEsQ0FBQ1E7SUFDcEI7SUFHQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNGO2dCQUFJQyxXQUFVOzBCQUNaVCxpQkFBaUJXLEdBQUcsQ0FBQyxDQUFDQyxxQkFDbkIsOERBQUNKO3dCQUFrQkMsV0FBVTs7MENBQzNCLDhEQUFDRDs7b0NBQUtJLEtBQUtDLFNBQVM7b0NBQUM7b0NBQUVELEtBQUtFLFFBQVE7Ozs7Ozs7MENBQ3BDLDhEQUFDTjs7b0NBQUtJLEtBQUtHLElBQUk7b0NBQUM7b0NBQUVILEtBQUtJLElBQUk7Ozs7Ozs7MENBQzdCLDhEQUFDQztnQ0FDQ1IsV0FBVTtnQ0FDVlMsU0FBUyxJQUFNckIsOEVBQWlCQSxDQUFDZSxLQUFLTyxFQUFFOzBDQUN6Qzs7Ozs7Ozt1QkFOU1AsS0FBS08sRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQWM3QjtHQXJDd0JyQjs7UUFDUEgsMERBQVNBOzs7S0FERkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9maWxlL215YXBwb2ludG1lbnRzL3BhZ2UudHN4PzIzNjMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVXNlcklkIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvR2V0VXNlclwiO1xyXG5pbXBvcnQgeyB1c2VyUHJvZmlsZUFwcG9pbnRtZW50cyB9IGZyb20gXCIuLi8uLi8uLi9hY3Rpb25zL2dldC11c2VyLWFwcG9pbnRtZW50c1wiO1xyXG5pbXBvcnQgeyBkZWxldGVBcHBvaW50bWVudCB9IGZyb20gXCIuLi8uLi8uLi9hY3Rpb25zL2RlbGV0ZS1hcHBvaW50bWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcnByb2ZpbGUoKSB7XHJcbiAgY29uc3QgdXNlcklkID0gdXNlVXNlcklkKClcclxuICBjb25zdCBbdXNlckFwcG9pbnRtZW50cywgc2V0VXNlckFwcG9pbnRtZW50c10gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xyXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICh1c2VySWQgIT09ICcnKSB7XHJcbiAgICAgIGNvbnN0IHByb2ZpbGVBcHBvaW50bWVudHMgPSBhd2FpdCB1c2VyUHJvZmlsZUFwcG9pbnRtZW50cyh1c2VySWQpO1xyXG4gICAgICBzZXRVc2VyQXBwb2ludG1lbnRzKHByb2ZpbGVBcHBvaW50bWVudHMpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFt1c2VySWRdKTtcclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBkZWxldGVBcHBvaW50bWVudChkYXRhKVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIHAtMjRcIj5cclxuICAgICAgPHA+TXkgQXBwb2ludG1lbnRzOjwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC00XCI+XHJcbiAgICAgICAge3VzZXJBcHBvaW50bWVudHMubWFwKChhcHBvKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXthcHBvLmlkfSBjbGFzc05hbWU9XCJibG9jayBtYXgtdy1zbSBwLTYgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIHNoYWRvdyBob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwIGRhcms6aG92ZXI6YmctZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICA8ZGl2PnthcHBvLmZpcnN0bmFtZX0ge2FwcG8ubGFzdG5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj57YXBwby5kYXRlfSB7YXBwby50aW1lfTwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgaG92ZXI6YmctcmVkLTcwMCBwLTJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUFwcG9pbnRtZW50KGFwcG8uaWQpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVVzZXJJZCIsInVzZXJQcm9maWxlQXBwb2ludG1lbnRzIiwiZGVsZXRlQXBwb2ludG1lbnQiLCJVc2VycHJvZmlsZSIsInVzZXJJZCIsInVzZXJBcHBvaW50bWVudHMiLCJzZXRVc2VyQXBwb2ludG1lbnRzIiwiZmV0Y2hEYXRhIiwicHJvZmlsZUFwcG9pbnRtZW50cyIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibWFwIiwiYXBwbyIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZGF0ZSIsInRpbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/myappointments/page.tsx\n"));

/***/ })

});