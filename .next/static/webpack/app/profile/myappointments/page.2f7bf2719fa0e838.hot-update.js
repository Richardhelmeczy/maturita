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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Userprofile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_GetUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/GetUser */ \"(app-pages-browser)/./src/components/GetUser.tsx\");\n/* harmony import */ var _actions_get_user_appointments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/get-user-appointments */ \"(app-pages-browser)/./src/actions/get-user-appointments.ts\");\n/* harmony import */ var _actions_delete_appointment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/delete-appointment */ \"(app-pages-browser)/./src/actions/delete-appointment.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Userprofile() {\n    _s();\n    var _s1 = $RefreshSig$();\n    const userId = (0,_components_GetUser__WEBPACK_IMPORTED_MODULE_2__.useUserId)();\n    console.log(userId);\n    const [userAppointments, setUserAppointments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchData = async ()=>{\n        if (userId !== \"\") {\n            const profileAppointments = await (0,_actions_get_user_appointments__WEBPACK_IMPORTED_MODULE_3__.userProfileAppointments)(userId);\n            setUserAppointments(profileAppointments);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, [\n        userId\n    ]);\n    const onSubmit = async (data)=>{\n        _s1();\n        (0,_actions_delete_appointment__WEBPACK_IMPORTED_MODULE_4__.deleteAppointment)(data);\n        const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n        router.refresh();\n    };\n    _s1(onSubmit, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n        return [\n            next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n        ];\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col items-center p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"My Appointments:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-3 gap-4\",\n                children: userAppointments.map((appo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    appo.name,\n                                    \" \",\n                                    appo.lastname\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: appo.appointmentDate\n                            }, void 0, false, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-red-500 text-white rounded hover:bg-red-700 p-2\",\n                                onClick: ()=>(0,_actions_delete_appointment__WEBPACK_IMPORTED_MODULE_4__.deleteAppointment)(appo.id),\n                                children: \"Cancel\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, appo.id, true, {\n                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\app\\\\profile\\\\myappointments\\\\page.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Userprofile, \"/5Qrfz3N4ARv/xhrnTjq9RD/vs8=\", false, function() {\n    return [\n        _components_GetUser__WEBPACK_IMPORTED_MODULE_2__.useUserId\n    ];\n});\n_c = Userprofile;\nvar _c;\n$RefreshReg$(_c, \"Userprofile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9teWFwcG9pbnRtZW50cy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUU0QztBQUNZO0FBQ3lCO0FBQ1Q7QUFFNUI7QUFJN0IsU0FBU007OztJQUN0QixNQUFNQyxTQUFTTCw4REFBU0E7SUFDeEJNLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixNQUFNLENBQUNHLGtCQUFrQkMsb0JBQW9CLEdBQUdWLCtDQUFRQSxDQUFRLEVBQUU7SUFDbEUsTUFBTVcsWUFBWTtRQUNoQixJQUFJTCxXQUFXLElBQUk7WUFDakIsTUFBTU0sc0JBQXNCLE1BQU1WLHVGQUF1QkEsQ0FBQ0k7WUFDMURJLG9CQUFvQkU7UUFDdEI7SUFDRjtJQUNBYixnREFBU0EsQ0FBQztRQUNSWTtJQUNGLEdBQUc7UUFBQ0w7S0FBTztJQUNYLE1BQU1PLFdBQVcsT0FBT0M7O1FBQ3RCWCw4RUFBaUJBLENBQUNXO1FBQ2xCLE1BQU1DLFNBQVNYLDBEQUFTQTtRQUN4QlcsT0FBT0MsT0FBTztJQUNoQjtRQUpNSDs7WUFFV1Qsc0RBQVNBOzs7SUFLMUIscUJBQ0UsOERBQUNhO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBRTs7Ozs7OzBCQUNILDhEQUFDRjtnQkFBSUMsV0FBVTswQkFDWlQsaUJBQWlCVyxHQUFHLENBQUMsQ0FBQ0MscUJBQ25CLDhEQUFDSjt3QkFBa0JDLFdBQVU7OzBDQUMzQiw4REFBQ0Q7O29DQUFLSSxLQUFLQyxJQUFJO29DQUFDO29DQUFFRCxLQUFLRSxRQUFROzs7Ozs7OzBDQUMvQiw4REFBQ047MENBQUtJLEtBQUtHLGVBQWU7Ozs7OzswQ0FDNUIsOERBQUNDO2dDQUNDUCxXQUFVO2dDQUNWUSxTQUFTLElBQU12Qiw4RUFBaUJBLENBQUNrQixLQUFLTSxFQUFFOzBDQUN6Qzs7Ozs7Ozt1QkFOU04sS0FBS00sRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQWM3QjtHQXZDd0J0Qjs7UUFDUEosMERBQVNBOzs7S0FERkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9maWxlL215YXBwb2ludG1lbnRzL3BhZ2UudHN4PzIzNjMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVXNlcklkIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvR2V0VXNlclwiO1xyXG5pbXBvcnQgeyB1c2VyUHJvZmlsZUFwcG9pbnRtZW50cyB9IGZyb20gXCIuLi8uLi8uLi9hY3Rpb25zL2dldC11c2VyLWFwcG9pbnRtZW50c1wiO1xyXG5pbXBvcnQgeyBkZWxldGVBcHBvaW50bWVudCB9IGZyb20gXCIuLi8uLi8uLi9hY3Rpb25zL2RlbGV0ZS1hcHBvaW50bWVudFwiO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcnByb2ZpbGUoKSB7XHJcbiAgY29uc3QgdXNlcklkID0gdXNlVXNlcklkKClcclxuICBjb25zb2xlLmxvZyh1c2VySWQpXHJcbiAgY29uc3QgW3VzZXJBcHBvaW50bWVudHMsIHNldFVzZXJBcHBvaW50bWVudHNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcclxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAodXNlcklkICE9PSAnJykge1xyXG4gICAgICBjb25zdCBwcm9maWxlQXBwb2ludG1lbnRzID0gYXdhaXQgdXNlclByb2ZpbGVBcHBvaW50bWVudHModXNlcklkKTtcclxuICAgICAgc2V0VXNlckFwcG9pbnRtZW50cyhwcm9maWxlQXBwb2ludG1lbnRzKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbdXNlcklkXSk7XHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YTogbnVtYmVyKSA9PiB7XHJcbiAgICBkZWxldGVBcHBvaW50bWVudChkYXRhKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIHJvdXRlci5yZWZyZXNoKClcclxuICB9XHJcblxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwLTI0XCI+XHJcbiAgICAgIDxwPk15IEFwcG9pbnRtZW50czo8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtNFwiPlxyXG4gICAgICAgIHt1c2VyQXBwb2ludG1lbnRzLm1hcCgoYXBwbykgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17YXBwby5pZH0gY2xhc3NOYW1lPVwiYmxvY2sgbWF4LXctc20gcC02IGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyBzaGFkb3cgaG92ZXI6YmctZ3JheS0xMDAgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj57YXBwby5uYW1lfSB7YXBwby5sYXN0bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PnthcHBvLmFwcG9pbnRtZW50RGF0ZX08L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgdGV4dC13aGl0ZSByb3VuZGVkIGhvdmVyOmJnLXJlZC03MDAgcC0yXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVBcHBvaW50bWVudChhcHBvLmlkKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VVc2VySWQiLCJ1c2VyUHJvZmlsZUFwcG9pbnRtZW50cyIsImRlbGV0ZUFwcG9pbnRtZW50IiwidXNlUm91dGVyIiwiVXNlcnByb2ZpbGUiLCJ1c2VySWQiLCJjb25zb2xlIiwibG9nIiwidXNlckFwcG9pbnRtZW50cyIsInNldFVzZXJBcHBvaW50bWVudHMiLCJmZXRjaERhdGEiLCJwcm9maWxlQXBwb2ludG1lbnRzIiwib25TdWJtaXQiLCJkYXRhIiwicm91dGVyIiwicmVmcmVzaCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJtYXAiLCJhcHBvIiwibmFtZSIsImxhc3RuYW1lIiwiYXBwb2ludG1lbnREYXRlIiwiYnV0dG9uIiwib25DbGljayIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/myappointments/page.tsx\n"));

/***/ })

});