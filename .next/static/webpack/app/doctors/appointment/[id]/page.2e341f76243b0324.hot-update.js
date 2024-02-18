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

/***/ "(app-pages-browser)/./src/components/DoctorAppointment.tsx":
/*!**********************************************!*\
  !*** ./src/components/DoctorAppointment.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DoctorAppointment: function() { return /* binding */ DoctorAppointment; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _actions_create_appointment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/create-appointment */ \"(app-pages-browser)/./src/actions/create-appointment.ts\");\n/* harmony import */ var _GetUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetUser */ \"(app-pages-browser)/./src/components/GetUser.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _actions_get_appointments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/get-appointments */ \"(app-pages-browser)/./src/actions/get-appointments.ts\");\n/* __next_internal_client_entry_do_not_use__ DoctorAppointment auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction DoctorAppointment(param) {\n    let { id } = param;\n    _s();\n    const { register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();\n    const userId = (0,_GetUser__WEBPACK_IMPORTED_MODULE_2__.useUserId)();\n    const [userAppointments, setUserAppointments] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [isDateSelected, setIsDateSelected] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const fetchData = async ()=>{\n        if (userId !== \"\") {\n            const profileAppointments = await (0,_actions_get_appointments__WEBPACK_IMPORTED_MODULE_4__.getAppointments)();\n            setUserAppointments(profileAppointments);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchData();\n    }, [\n        userId\n    ]);\n    const onSubmit = handleSubmit(async (data)=>{\n        if (userId) {\n            await (0,_actions_create_appointment__WEBPACK_IMPORTED_MODULE_1__.createAppointment)(data, id, userId);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col\",\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"name\",\n                children: \"Name\"\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: \"name\",\n                ...register(\"name\"),\n                required: true\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"lastname\",\n                children: \"Lastname\"\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: \"lastname\",\n                ...register(\"lastname\"),\n                required: true\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"date\",\n                children: \"Date\"\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: \"date\",\n                ...register(\"date\"),\n                onChange: ()=>{\n                    setIsDateSelected(true);\n                },\n                type: \"date\",\n                required: true\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"time\"\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            isDateSelected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: \"time\",\n                ...register(\"time\"),\n                required: true\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                lineNumber: 46,\n                columnNumber: 26\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"submit\"\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(DoctorAppointment, \"5WkidTrqV2HHv/8VIeZB9vZEVSc=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm,\n        _GetUser__WEBPACK_IMPORTED_MODULE_2__.useUserId\n    ];\n});\n_c = DoctorAppointment;\nvar _c;\n$RefreshReg$(_c, \"DoctorAppointment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RvY3RvckFwcG9pbnRtZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzBDO0FBQ3dCO0FBQzVCO0FBQ007QUFDa0I7QUFTdkQsU0FBU00sa0JBQWtCLEtBQXNCO1FBQXRCLEVBQUVDLEVBQUUsRUFBa0IsR0FBdEI7O0lBRWhDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUUsR0FBR1Qsd0RBQU9BO0lBQzFDLE1BQU1VLFNBQVNSLG1EQUFTQTtJQUN4QixNQUFNLENBQUNTLGtCQUFrQkMsb0JBQW9CLEdBQUdSLCtDQUFRQSxDQUFRLEVBQUU7SUFDbEUsTUFBTSxDQUFDUyxnQkFBZ0JDLGtCQUFrQixHQUFHViwrQ0FBUUEsQ0FBVTtJQUM5RCxNQUFNVyxZQUFZO1FBQ2hCLElBQUlMLFdBQVcsSUFBSTtZQUNqQixNQUFNTSxzQkFBc0IsTUFBTVgsMEVBQWVBO1lBQ2pETyxvQkFBb0JJO1FBQ3RCO0lBQ0Y7SUFDQWIsZ0RBQVNBLENBQUM7UUFDUlk7SUFDRixHQUFHO1FBQUNMO0tBQU87SUFFWCxNQUFNTyxXQUFXUixhQUFhLE9BQU9TO1FBQ25DLElBQUlSLFFBQVE7WUFDVixNQUFNVCw4RUFBaUJBLENBQUNpQixNQUFNWCxJQUFJRztRQUNwQztJQUNGO0lBRUEscUJBQ0UsOERBQUNTO1FBQUtDLFdBQVU7UUFBZ0JILFVBQVVBOzswQkFDeEMsOERBQUNJO2dCQUFNQyxTQUFROzBCQUFPOzs7Ozs7MEJBQ3RCLDhEQUFDQztnQkFBTWhCLElBQUc7Z0JBQVEsR0FBR0MsU0FBUyxPQUFPO2dCQUFFZ0IsUUFBUTs7Ozs7OzBCQUMvQyw4REFBQ0g7Z0JBQU1DLFNBQVE7MEJBQVc7Ozs7OzswQkFDMUIsOERBQUNDO2dCQUFNaEIsSUFBRztnQkFBWSxHQUFHQyxTQUFTLFdBQVc7Z0JBQUVnQixRQUFROzs7Ozs7MEJBQ3ZELDhEQUFDSDtnQkFBTUMsU0FBUTswQkFBTzs7Ozs7OzBCQUN0Qiw4REFBQ0M7Z0JBQU1oQixJQUFHO2dCQUFRLEdBQUdDLFNBQVMsT0FBTztnQkFBRWlCLFVBQVU7b0JBQUtYLGtCQUFrQjtnQkFBSztnQkFBR1ksTUFBSztnQkFBT0YsUUFBUTs7Ozs7OzBCQUNwRyw4REFBQ0g7Z0JBQU1DLFNBQVE7Ozs7OztZQUNkVCxnQ0FBa0IsOERBQUNVO2dCQUFNaEIsSUFBRztnQkFBUSxHQUFHQyxTQUFTLE9BQU87Z0JBQUVnQixRQUFROzs7Ozs7MEJBQ2xFLDhEQUFDRDtnQkFBTUcsTUFBSzs7Ozs7Ozs7Ozs7O0FBR2xCO0dBbkNnQnBCOztRQUVxQk4sb0RBQU9BO1FBQzNCRSwrQ0FBU0E7OztLQUhWSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Eb2N0b3JBcHBvaW50bWVudC50c3g/ZjMyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHsgY3JlYXRlQXBwb2ludG1lbnQgfSBmcm9tICcuLi9hY3Rpb25zL2NyZWF0ZS1hcHBvaW50bWVudCc7XHJcbmltcG9ydCB7IHVzZVVzZXJJZCB9IGZyb20gJy4vR2V0VXNlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldEFwcG9pbnRtZW50cyB9IGZyb20gJy4uL2FjdGlvbnMvZ2V0LWFwcG9pbnRtZW50cyc7XHJcblxyXG50eXBlIEZvcm1EYXRhID0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYXN0bmFtZTogc3RyaW5nO1xyXG4gIGRhdGU6IHN0cmluZztcclxuICB0aW1lOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRG9jdG9yQXBwb2ludG1lbnQoeyBpZCB9OiB7IGlkOiBzdHJpbmcgfSkge1xyXG5cclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm08Rm9ybURhdGE+KCk7XHJcbiAgY29uc3QgdXNlcklkID0gdXNlVXNlcklkKCk7XHJcbiAgY29uc3QgW3VzZXJBcHBvaW50bWVudHMsIHNldFVzZXJBcHBvaW50bWVudHNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcclxuICBjb25zdCBbaXNEYXRlU2VsZWN0ZWQsIHNldElzRGF0ZVNlbGVjdGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAodXNlcklkICE9PSAnJykge1xyXG4gICAgICBjb25zdCBwcm9maWxlQXBwb2ludG1lbnRzID0gYXdhaXQgZ2V0QXBwb2ludG1lbnRzKCk7XHJcbiAgICAgIHNldFVzZXJBcHBvaW50bWVudHMocHJvZmlsZUFwcG9pbnRtZW50cyk7XHJcbiAgICB9XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW3VzZXJJZF0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGhhbmRsZVN1Ym1pdChhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgaWYgKHVzZXJJZCkge1xyXG4gICAgICBhd2FpdCBjcmVhdGVBcHBvaW50bWVudChkYXRhLCBpZCwgdXNlcklkKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIiBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgPGlucHV0IGlkPVwibmFtZVwiIHsuLi5yZWdpc3RlcignbmFtZScpfSByZXF1aXJlZC8+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdG5hbWVcIj5MYXN0bmFtZTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBpZD1cImxhc3RuYW1lXCIgey4uLnJlZ2lzdGVyKCdsYXN0bmFtZScpfSByZXF1aXJlZC8+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGF0ZVwiPkRhdGU8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgaWQ9XCJkYXRlXCIgey4uLnJlZ2lzdGVyKCdkYXRlJyl9IG9uQ2hhbmdlPXsoKT0+e3NldElzRGF0ZVNlbGVjdGVkKHRydWUpfX0gdHlwZT0nZGF0ZScgcmVxdWlyZWQvPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInRpbWVcIj48L2xhYmVsPlxyXG4gICAgICB7aXNEYXRlU2VsZWN0ZWQgJiYgPGlucHV0IGlkPVwidGltZVwiIHsuLi5yZWdpc3RlcigndGltZScpfSByZXF1aXJlZC8+fVxyXG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRm9ybSIsImNyZWF0ZUFwcG9pbnRtZW50IiwidXNlVXNlcklkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRBcHBvaW50bWVudHMiLCJEb2N0b3JBcHBvaW50bWVudCIsImlkIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ1c2VySWQiLCJ1c2VyQXBwb2ludG1lbnRzIiwic2V0VXNlckFwcG9pbnRtZW50cyIsImlzRGF0ZVNlbGVjdGVkIiwic2V0SXNEYXRlU2VsZWN0ZWQiLCJmZXRjaERhdGEiLCJwcm9maWxlQXBwb2ludG1lbnRzIiwib25TdWJtaXQiLCJkYXRhIiwiZm9ybSIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/DoctorAppointment.tsx\n"));

/***/ })

});