"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/doctors/appointment/[id]/page",{

/***/ "(app-pages-browser)/./src/actions/get-appointments.ts":
/*!*****************************************!*\
  !*** ./src/actions/get-appointments.ts ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAppointments: function() { return /* binding */ getAppointments; }
/* harmony export */ });
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/app-call-server */ "(app-pages-browser)/./node_modules/next/dist/client/app-call-server.js");
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-client-wrapper */ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js");



function __build_action__(action, args) {
  return (0,next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__.callServer)(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ {"df15a91f94663a1fec63819c7851d441973e6e70":"getAppointments"} */ var getAppointments = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("df15a91f94663a1fec63819c7851d441973e6e70");




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

/***/ "(app-pages-browser)/./src/components/DoctorAppointment.tsx":
/*!**********************************************!*\
  !*** ./src/components/DoctorAppointment.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DoctorAppointment: function() { return /* binding */ DoctorAppointment; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _actions_create_appointment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/create-appointment */ \"(app-pages-browser)/./src/actions/create-appointment.ts\");\n/* harmony import */ var _GetUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetUser */ \"(app-pages-browser)/./src/components/GetUser.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _actions_get_appointments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/get-appointments */ \"(app-pages-browser)/./src/actions/get-appointments.ts\");\n/* __next_internal_client_entry_do_not_use__ DoctorAppointment auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction DoctorAppointment(param) {\n    let { id } = param;\n    _s();\n    const { register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();\n    const userId = (0,_GetUser__WEBPACK_IMPORTED_MODULE_2__.useUserId)();\n    const [userAppointments, setUserAppointments] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const fetchData = async ()=>{\n        if (userId !== \"\") {\n            const profileAppointments = await (0,_actions_get_appointments__WEBPACK_IMPORTED_MODULE_4__.getAppointments)();\n            setUserAppointments(profileAppointments);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchData();\n    }, [\n        userId\n    ]);\n    const onSubmit = handleSubmit(async (data)=>{\n        if (userId) {\n            await (0,_actions_create_appointment__WEBPACK_IMPORTED_MODULE_1__.createAppointment)(data, id, userId);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col\",\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"name\",\n                children: \"Name\"\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: \"name\",\n                ...register(\"name\"),\n                required: true\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"lastname\",\n                children: \"Lastname\"\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: \"lastname\",\n                ...register(\"lastname\"),\n                required: true\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(DoctorAppointment, \"l6YETsU1bxyREB0MnK79O4tzUJo=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm,\n        _GetUser__WEBPACK_IMPORTED_MODULE_2__.useUserId\n    ];\n});\n_c = DoctorAppointment;\nvar _c;\n$RefreshReg$(_c, \"DoctorAppointment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RvY3RvckFwcG9pbnRtZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzBDO0FBQ3dCO0FBQzVCO0FBQ007QUFDa0I7QUFTdkQsU0FBU00sa0JBQWtCLEtBQXNCO1FBQXRCLEVBQUVDLEVBQUUsRUFBa0IsR0FBdEI7O0lBRWhDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUUsR0FBR1Qsd0RBQU9BO0lBQzFDLE1BQU1VLFNBQVNSLG1EQUFTQTtJQUN4QixNQUFNLENBQUNTLGtCQUFrQkMsb0JBQW9CLEdBQUdSLCtDQUFRQSxDQUFRLEVBQUU7SUFDbEUsTUFBTVMsWUFBWTtRQUNoQixJQUFJSCxXQUFXLElBQUk7WUFDakIsTUFBTUksc0JBQXNCLE1BQU1ULDBFQUFlQTtZQUNqRE8sb0JBQW9CRTtRQUN0QjtJQUNGO0lBQ0FYLGdEQUFTQSxDQUFDO1FBQ1JVO0lBQ0YsR0FBRztRQUFDSDtLQUFPO0lBRVgsTUFBTUssV0FBV04sYUFBYSxPQUFPTztRQUNuQyxJQUFJTixRQUFRO1lBQ1YsTUFBTVQsOEVBQWlCQSxDQUFDZSxNQUFNVCxJQUFJRztRQUNwQztJQUNGO0lBRUEscUJBQ0UsOERBQUNPO1FBQUtDLFdBQVU7UUFBZ0JILFVBQVVBOzswQkFDeEMsOERBQUNJO2dCQUFNQyxTQUFROzBCQUFPOzs7Ozs7MEJBQ3RCLDhEQUFDQztnQkFBTWQsSUFBRztnQkFBUSxHQUFHQyxTQUFTLE9BQU87Z0JBQUVjLFFBQVE7Ozs7OzswQkFDL0MsOERBQUNIO2dCQUFNQyxTQUFROzBCQUFXOzs7Ozs7MEJBQzFCLDhEQUFDQztnQkFBTWQsSUFBRztnQkFBWSxHQUFHQyxTQUFTLFdBQVc7Z0JBQUVjLFFBQVE7Ozs7Ozs7Ozs7OztBQUk3RDtHQTlCZ0JoQjs7UUFFcUJOLG9EQUFPQTtRQUMzQkUsK0NBQVNBOzs7S0FIVkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdG9yQXBwb2ludG1lbnQudHN4P2YzMmQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IGNyZWF0ZUFwcG9pbnRtZW50IH0gZnJvbSAnLi4vYWN0aW9ucy9jcmVhdGUtYXBwb2ludG1lbnQnO1xyXG5pbXBvcnQgeyB1c2VVc2VySWQgfSBmcm9tICcuL0dldFVzZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRBcHBvaW50bWVudHMgfSBmcm9tICcuLi9hY3Rpb25zL2dldC1hcHBvaW50bWVudHMnO1xyXG5cclxudHlwZSBGb3JtRGF0YSA9IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGFzdG5hbWU6IHN0cmluZztcclxuICBkYXRlOiBzdHJpbmc7XHJcbiAgdGltZTogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERvY3RvckFwcG9pbnRtZW50KHsgaWQgfTogeyBpZDogc3RyaW5nIH0pIHtcclxuXHJcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtPEZvcm1EYXRhPigpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHVzZVVzZXJJZCgpO1xyXG4gIGNvbnN0IFt1c2VyQXBwb2ludG1lbnRzLCBzZXRVc2VyQXBwb2ludG1lbnRzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHVzZXJJZCAhPT0gJycpIHtcclxuICAgICAgY29uc3QgcHJvZmlsZUFwcG9pbnRtZW50cyA9IGF3YWl0IGdldEFwcG9pbnRtZW50cygpO1xyXG4gICAgICBzZXRVc2VyQXBwb2ludG1lbnRzKHByb2ZpbGVBcHBvaW50bWVudHMpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFt1c2VySWRdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBoYW5kbGVTdWJtaXQoYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIGlmICh1c2VySWQpIHtcclxuICAgICAgYXdhaXQgY3JlYXRlQXBwb2ludG1lbnQoZGF0YSwgaWQsIHVzZXJJZCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCIgb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiB7Li4ucmVnaXN0ZXIoJ25hbWUnKX0gcmVxdWlyZWQvPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3RuYW1lXCI+TGFzdG5hbWU8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgaWQ9XCJsYXN0bmFtZVwiIHsuLi5yZWdpc3RlcignbGFzdG5hbWUnKX0gcmVxdWlyZWQvPlxyXG4gICAgICB7fVxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJjcmVhdGVBcHBvaW50bWVudCIsInVzZVVzZXJJZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0QXBwb2ludG1lbnRzIiwiRG9jdG9yQXBwb2ludG1lbnQiLCJpZCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwidXNlcklkIiwidXNlckFwcG9pbnRtZW50cyIsInNldFVzZXJBcHBvaW50bWVudHMiLCJmZXRjaERhdGEiLCJwcm9maWxlQXBwb2ludG1lbnRzIiwib25TdWJtaXQiLCJkYXRhIiwiZm9ybSIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwicmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/DoctorAppointment.tsx\n"));

/***/ })

});