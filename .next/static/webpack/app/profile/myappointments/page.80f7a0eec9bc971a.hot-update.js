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

/***/ "(app-pages-browser)/./src/actions/delete-appointment.ts":
/*!*******************************************!*\
  !*** ./src/actions/delete-appointment.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteAppointment: function() { return /* binding */ deleteAppointment; }
/* harmony export */ });
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/app-call-server */ "(app-pages-browser)/./node_modules/next/dist/client/app-call-server.js");
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-client-wrapper */ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js");



function __build_action__(action, args) {
  return (0,next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__.callServer)(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ {"8f076e73ec0a58ff3d672232c2c062dfbfabf9a9":"deleteAppointment"} */ var deleteAppointment = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("8f076e73ec0a58ff3d672232c2c062dfbfabf9a9");




;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./src/app/profile/myappointments/page.tsx":
/*!*************************************************!*\
  !*** ./src/app/profile/myappointments/page.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Userprofile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_GetUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/GetUser */ \"(app-pages-browser)/./src/components/GetUser.tsx\");\n/* harmony import */ var _actions_get_user_appointments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/get-user-appointments */ \"(app-pages-browser)/./src/actions/get-user-appointments.ts\");\n/* harmony import */ var _actions_delete_appointment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/delete-appointment */ \"(app-pages-browser)/./src/actions/delete-appointment.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Userprofile() {\n    _s();\n    const userId = (0,_components_GetUser__WEBPACK_IMPORTED_MODULE_2__.useUserId)();\n    console.log(userId);\n    const [userAppointments, setUserAppointments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userId !== \"\") {\n            const fetchData = async ()=>{\n                const profileAppointments = await (0,_actions_get_user_appointments__WEBPACK_IMPORTED_MODULE_3__.userProfileAppointments)(userId);\n                setUserAppointments(profileAppointments);\n            };\n            fetchData();\n        }\n    }, [\n        userId\n    ]);\n    const onSubmit = async (data)=>{\n        (0,_actions_delete_appointment__WEBPACK_IMPORTED_MODULE_4__.deleteAppointment)(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col items-center p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"My Appointments:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-3 gap-4\",\n                children: userAppointments.map((appo)=>// eslint-disable-next-line react/jsx-key\n                    // eslint-disable-next-line react/jsx-key\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    appo.name,\n                                    \" \",\n                                    appo.lastname\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: appo.appointmentDate\n                            }, void 0, false, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-red-500 text-white rounded hover:bg-red-700 p-2\",\n                                onClick: ()=>(0,_actions_delete_appointment__WEBPACK_IMPORTED_MODULE_4__.deleteAppointment)(appo.id),\n                                children: \"Cancel\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, appo.id, true, {\n                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Userprofile, \"/5Qrfz3N4ARv/xhrnTjq9RD/vs8=\", false, function() {\n    return [\n        _components_GetUser__WEBPACK_IMPORTED_MODULE_2__.useUserId\n    ];\n});\n_c = Userprofile;\nvar _c;\n$RefreshReg$(_c, \"Userprofile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9teWFwcG9pbnRtZW50cy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFNEM7QUFDWTtBQUN5QjtBQUVUO0FBSXpELFNBQVNLOztJQUN0QixNQUFNQyxTQUFTSiw4REFBU0E7SUFDeEJLLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixNQUFNLENBQUNHLGtCQUFrQkMsb0JBQW9CLEdBQUdULCtDQUFRQSxDQUFRLEVBQUU7SUFDbEVELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU0sV0FBVyxJQUFJO1lBQ2pCLE1BQU1LLFlBQVk7Z0JBQ2hCLE1BQU1DLHNCQUFzQixNQUFNVCx1RkFBdUJBLENBQUNHO2dCQUMxREksb0JBQW9CRTtZQUFvQjtZQUMxQ0Q7UUFDRjtJQUNGLEdBQUc7UUFBQ0w7S0FBTztJQUVYLE1BQU1PLFdBQVcsT0FBT0M7UUFDdEJWLDhFQUFpQkEsQ0FBQ1U7SUFDcEI7SUFHQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNGO2dCQUFJQyxXQUFVOzBCQUNaUCxpQkFBaUJTLEdBQUcsQ0FBQyxDQUFDQyxPQUNyQix5Q0FBeUM7b0JBQ3ZDLHlDQUF5QztrQ0FDekMsOERBQUNKO3dCQUFrQkMsV0FBVTs7MENBQzNCLDhEQUFDRDs7b0NBQUtJLEtBQUtDLElBQUk7b0NBQUM7b0NBQUVELEtBQUtFLFFBQVE7Ozs7Ozs7MENBQy9CLDhEQUFDTjswQ0FBS0ksS0FBS0csZUFBZTs7Ozs7OzBDQUM1Qiw4REFBQ0M7Z0NBQ0NQLFdBQVU7Z0NBQ1ZRLFNBQVMsSUFBTXBCLDhFQUFpQkEsQ0FBQ2UsS0FBS00sRUFBRTswQ0FDekM7Ozs7Ozs7dUJBTlNOLEtBQUtNLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjN0I7R0F2Q3dCcEI7O1FBQ1BILDBEQUFTQTs7O0tBREZHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJvZmlsZS9teWFwcG9pbnRtZW50cy9wYWdlLnRzeD8yMzYzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVVzZXJJZCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0dldFVzZXJcIjtcclxuaW1wb3J0IHsgdXNlclByb2ZpbGVBcHBvaW50bWVudHMgfSBmcm9tIFwiLi4vLi4vLi4vYWN0aW9ucy9nZXQtdXNlci1hcHBvaW50bWVudHNcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHsgZGVsZXRlQXBwb2ludG1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vYWN0aW9ucy9kZWxldGUtYXBwb2ludG1lbnRcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcnByb2ZpbGUoKSB7XHJcbiAgY29uc3QgdXNlcklkID0gdXNlVXNlcklkKClcclxuICBjb25zb2xlLmxvZyh1c2VySWQpXHJcbiAgY29uc3QgW3VzZXJBcHBvaW50bWVudHMsIHNldFVzZXJBcHBvaW50bWVudHNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXJJZCAhPT0gJycpIHtcclxuICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGVBcHBvaW50bWVudHMgPSBhd2FpdCB1c2VyUHJvZmlsZUFwcG9pbnRtZW50cyh1c2VySWQpXHJcbiAgICAgICAgc2V0VXNlckFwcG9pbnRtZW50cyhwcm9maWxlQXBwb2ludG1lbnRzKX1cclxuICAgICAgZmV0Y2hEYXRhKClcclxuICAgIH1cclxuICB9LCBbdXNlcklkXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgZGVsZXRlQXBwb2ludG1lbnQoZGF0YSlcclxuICB9XHJcblxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwLTI0XCI+XHJcbiAgICAgIDxwPk15IEFwcG9pbnRtZW50czo8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtNFwiPlxyXG4gICAgICAgIHt1c2VyQXBwb2ludG1lbnRzLm1hcCgoYXBwbykgPT4gKFxyXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1rZXlcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1rZXlcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2FwcG8uaWR9IGNsYXNzTmFtZT1cImJsb2NrIG1heC13LXNtIHAtNiBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbGcgc2hhZG93IGhvdmVyOmJnLWdyYXktMTAwIGRhcms6YmctZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS03MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+e2FwcG8ubmFtZX0ge2FwcG8ubGFzdG5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj57YXBwby5hcHBvaW50bWVudERhdGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHRleHQtd2hpdGUgcm91bmRlZCBob3ZlcjpiZy1yZWQtNzAwIHAtMlwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlQXBwb2ludG1lbnQoYXBwby5pZCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlVXNlcklkIiwidXNlclByb2ZpbGVBcHBvaW50bWVudHMiLCJkZWxldGVBcHBvaW50bWVudCIsIlVzZXJwcm9maWxlIiwidXNlcklkIiwiY29uc29sZSIsImxvZyIsInVzZXJBcHBvaW50bWVudHMiLCJzZXRVc2VyQXBwb2ludG1lbnRzIiwiZmV0Y2hEYXRhIiwicHJvZmlsZUFwcG9pbnRtZW50cyIsIm9uU3VibWl0IiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJtYXAiLCJhcHBvIiwibmFtZSIsImxhc3RuYW1lIiwiYXBwb2ludG1lbnREYXRlIiwiYnV0dG9uIiwib25DbGljayIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/myappointments/page.tsx\n"));

/***/ })

});