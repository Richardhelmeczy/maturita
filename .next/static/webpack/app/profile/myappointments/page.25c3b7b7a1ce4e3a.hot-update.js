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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Userprofile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_GetUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/GetUser */ \"(app-pages-browser)/./src/components/GetUser.tsx\");\n/* harmony import */ var _actions_get_user_appointments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/get-user-appointments */ \"(app-pages-browser)/./src/actions/get-user-appointments.ts\");\n/* harmony import */ var _actions_delete_appointment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/delete-appointment */ \"(app-pages-browser)/./src/actions/delete-appointment.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Userprofile() {\n    _s();\n    const userId = (0,_components_GetUser__WEBPACK_IMPORTED_MODULE_2__.useUserId)();\n    console.log(userId);\n    const [userAppointments, setUserAppointments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userId !== \"\") {\n            const fetchData = async ()=>{\n                const profileAppointments = await (0,_actions_get_user_appointments__WEBPACK_IMPORTED_MODULE_3__.userProfileAppointments)(userId);\n                setUserAppointments(profileAppointments);\n            };\n            fetchData();\n        }\n    }, [\n        userId\n    ]);\n    const onSubmit = async (data)=>{\n        (0,_actions_delete_appointment__WEBPACK_IMPORTED_MODULE_4__.deleteAppointment)(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col items-center p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"My Appointments:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-3 gap-4\",\n                children: userAppointments.map((appo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    appo.name,\n                                    \" \",\n                                    appo.lastname\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: appo.appointmentDate\n                            }, void 0, false, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-red-500 text-white rounded hover:bg-red-700 p-2\",\n                                onClick: ()=>(0,_actions_delete_appointment__WEBPACK_IMPORTED_MODULE_4__.deleteAppointment)(appo.id),\n                                children: \"Cancel\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, appo.id, true, {\n                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Userprofile, \"/5Qrfz3N4ARv/xhrnTjq9RD/vs8=\", false, function() {\n    return [\n        _components_GetUser__WEBPACK_IMPORTED_MODULE_2__.useUserId\n    ];\n});\n_c = Userprofile;\nvar _c;\n$RefreshReg$(_c, \"Userprofile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9teWFwcG9pbnRtZW50cy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFNEM7QUFDWTtBQUN5QjtBQUNUO0FBSXpELFNBQVNLOztJQUN0QixNQUFNQyxTQUFTSiw4REFBU0E7SUFDeEJLLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixNQUFNLENBQUNHLGtCQUFrQkMsb0JBQW9CLEdBQUdULCtDQUFRQSxDQUFRLEVBQUU7SUFDbEVELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU0sV0FBVyxJQUFJO1lBQ2pCLE1BQU1LLFlBQVk7Z0JBQ2hCLE1BQU1DLHNCQUFzQixNQUFNVCx1RkFBdUJBLENBQUNHO2dCQUMxREksb0JBQW9CRTtZQUFvQjtZQUMxQ0Q7UUFDRjtJQUNGLEdBQUc7UUFBQ0w7S0FBTztJQUNYLE1BQU1PLFdBQVcsT0FBT0M7UUFDdEJWLDhFQUFpQkEsQ0FBQ1U7SUFDcEI7SUFHQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNGO2dCQUFJQyxXQUFVOzBCQUNaUCxpQkFBaUJTLEdBQUcsQ0FBQyxDQUFDQyxxQkFDbkIsOERBQUNKO3dCQUFrQkMsV0FBVTs7MENBQzNCLDhEQUFDRDs7b0NBQUtJLEtBQUtDLElBQUk7b0NBQUM7b0NBQUVELEtBQUtFLFFBQVE7Ozs7Ozs7MENBQy9CLDhEQUFDTjswQ0FBS0ksS0FBS0csZUFBZTs7Ozs7OzBDQUM1Qiw4REFBQ0M7Z0NBQ0NQLFdBQVU7Z0NBQ1ZRLFNBQVMsSUFBTXBCLDhFQUFpQkEsQ0FBQ2UsS0FBS00sRUFBRTswQ0FDekM7Ozs7Ozs7dUJBTlNOLEtBQUtNLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjN0I7R0FwQ3dCcEI7O1FBQ1BILDBEQUFTQTs7O0tBREZHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJvZmlsZS9teWFwcG9pbnRtZW50cy9wYWdlLnRzeD8yMzYzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVVzZXJJZCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0dldFVzZXJcIjtcclxuaW1wb3J0IHsgdXNlclByb2ZpbGVBcHBvaW50bWVudHMgfSBmcm9tIFwiLi4vLi4vLi4vYWN0aW9ucy9nZXQtdXNlci1hcHBvaW50bWVudHNcIjtcclxuaW1wb3J0IHsgZGVsZXRlQXBwb2ludG1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vYWN0aW9ucy9kZWxldGUtYXBwb2ludG1lbnRcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcnByb2ZpbGUoKSB7XHJcbiAgY29uc3QgdXNlcklkID0gdXNlVXNlcklkKClcclxuICBjb25zb2xlLmxvZyh1c2VySWQpXHJcbiAgY29uc3QgW3VzZXJBcHBvaW50bWVudHMsIHNldFVzZXJBcHBvaW50bWVudHNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXJJZCAhPT0gJycpIHtcclxuICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGVBcHBvaW50bWVudHMgPSBhd2FpdCB1c2VyUHJvZmlsZUFwcG9pbnRtZW50cyh1c2VySWQpXHJcbiAgICAgICAgc2V0VXNlckFwcG9pbnRtZW50cyhwcm9maWxlQXBwb2ludG1lbnRzKX1cclxuICAgICAgZmV0Y2hEYXRhKClcclxuICAgIH1cclxuICB9LCBbdXNlcklkXSk7XHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YTogbnVtYmVyKSA9PiB7XHJcbiAgICBkZWxldGVBcHBvaW50bWVudChkYXRhKVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIHAtMjRcIj5cclxuICAgICAgPHA+TXkgQXBwb2ludG1lbnRzOjwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC00XCI+XHJcbiAgICAgICAge3VzZXJBcHBvaW50bWVudHMubWFwKChhcHBvKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXthcHBvLmlkfSBjbGFzc05hbWU9XCJibG9jayBtYXgtdy1zbSBwLTYgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIHNoYWRvdyBob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwIGRhcms6aG92ZXI6YmctZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICA8ZGl2PnthcHBvLm5hbWV9IHthcHBvLmxhc3RuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+e2FwcG8uYXBwb2ludG1lbnREYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgaG92ZXI6YmctcmVkLTcwMCBwLTJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUFwcG9pbnRtZW50KGFwcG8uaWQpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVVzZXJJZCIsInVzZXJQcm9maWxlQXBwb2ludG1lbnRzIiwiZGVsZXRlQXBwb2ludG1lbnQiLCJVc2VycHJvZmlsZSIsInVzZXJJZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyQXBwb2ludG1lbnRzIiwic2V0VXNlckFwcG9pbnRtZW50cyIsImZldGNoRGF0YSIsInByb2ZpbGVBcHBvaW50bWVudHMiLCJvblN1Ym1pdCIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibWFwIiwiYXBwbyIsIm5hbWUiLCJsYXN0bmFtZSIsImFwcG9pbnRtZW50RGF0ZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/myappointments/page.tsx\n"));

/***/ })

});