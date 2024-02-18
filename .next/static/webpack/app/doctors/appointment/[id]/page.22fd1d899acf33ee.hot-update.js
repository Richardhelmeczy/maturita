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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DoctorAppointment: function() { return /* binding */ DoctorAppointment; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _actions_create_appointment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/create-appointment */ \"(app-pages-browser)/./src/actions/create-appointment.ts\");\n/* harmony import */ var _GetUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetUser */ \"(app-pages-browser)/./src/components/GetUser.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _actions_get_appointments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/get-appointments */ \"(app-pages-browser)/./src/actions/get-appointments.ts\");\n/* __next_internal_client_entry_do_not_use__ DoctorAppointment auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction DoctorAppointment(param) {\n    let { id } = param;\n    _s();\n    const { register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();\n    const userId = (0,_GetUser__WEBPACK_IMPORTED_MODULE_2__.useUserId)();\n    const [appointments, setAppointments] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [selectedYear, setSelectedYear] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(new Date().getFullYear());\n    const [selectedMonth, setSelectedMonth] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(new Date().getMonth() + 1); // JavaScript months are 0-indexed\n    const [dates, setDates] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const times = [\n        \"8:00\",\n        \"9:00\",\n        \"10:00\",\n        \"11:00\",\n        \"12:00\",\n        \"13:00\",\n        \"14:00\",\n        \"15:00\",\n        \"16:00\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const profileAppointments = await (0,_actions_get_appointments__WEBPACK_IMPORTED_MODULE_4__.getAppointments)(id);\n            setAppointments(profileAppointments);\n        };\n        fetchData();\n    }, [\n        id\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // Generate dates based on the selected month and year\n        const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();\n        const newDates = Array.from({\n            length: daysInMonth\n        }, (_, i)=>\"\".concat(selectedYear, \"-\").concat(selectedMonth.toString().padStart(2, \"0\"), \"-\").concat((i + 1).toString().padStart(2, \"0\")));\n        setDates(newDates);\n    }, [\n        selectedMonth,\n        selectedYear\n    ]);\n    const onSubmit = handleSubmit(async (data)=>{\n        if (userId) {\n            await (0,_actions_create_appointment__WEBPACK_IMPORTED_MODULE_1__.createAppointment)(data, id, userId);\n        }\n    });\n    const isSlotFull = (date, time)=>{\n        return appointments.some((appointment)=>{\n            const appointmentDate = appointment.date;\n            const appointmentTime = appointment.time;\n            return appointmentDate === date && appointmentTime === time;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: selectedMonth,\n                        onChange: (e)=>setSelectedMonth(parseInt(e.target.value, 10)),\n                        children: Array.from({\n                            length: 12\n                        }, (_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: i + 1,\n                                children: new Date(0, i).toLocaleString(\"default\", {\n                                    month: \"long\"\n                                })\n                            }, i + 1, false, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: selectedYear,\n                        onChange: (e)=>setSelectedYear(parseInt(e.target.value, 10)),\n                        children: Array.from({\n                            length: 5\n                        }, (_, i)=>{\n                            const year = new Date().getFullYear() - 2 + i;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: year,\n                                children: year\n                            }, year, false, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Time\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 11\n                                    }, this),\n                                    dates.map((date)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"p-2\",\n                                            children: date\n                                        }, date, false, {\n                                            fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 13\n                                        }, this))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: times.map((time)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: time\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 13\n                                        }, this),\n                                        dates.map((date)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: isSlotFull(date, time) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"bg-red-200 rounded-xl p-2 text-red-800\",\n                                                    children: \"Full\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 19\n                                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"bg-lime-200 rounded-xl p-2\",\n                                                    children: \"Free\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, date, false, {\n                                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 15\n                                            }, this))\n                                    ]\n                                }, time, true, {\n                                    fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 11\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(DoctorAppointment, \"sAWoTndmQSUEUNGu3eTHWkrmNAI=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm,\n        _GetUser__WEBPACK_IMPORTED_MODULE_2__.useUserId\n    ];\n});\n_c = DoctorAppointment;\nvar _c;\n$RefreshReg$(_c, \"DoctorAppointment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RvY3RvckFwcG9pbnRtZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzBDO0FBQ3dCO0FBQzVCO0FBQ007QUFDa0I7QUFVdkQsU0FBU00sa0JBQWtCLEtBQXNCO1FBQXRCLEVBQUVDLEVBQUUsRUFBa0IsR0FBdEI7O0lBQ2hDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUUsR0FBR1Qsd0RBQU9BO0lBQzFDLE1BQU1VLFNBQVNSLG1EQUFTQTtJQUN4QixNQUFNLENBQUNTLGNBQWNDLGdCQUFnQixHQUFHUiwrQ0FBUUEsQ0FBUSxFQUFFO0lBQzFELE1BQU0sQ0FBQ1MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFTLElBQUlXLE9BQU9DLFdBQVc7SUFDL0UsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR2QsK0NBQVFBLENBQVMsSUFBSVcsT0FBT0ksUUFBUSxLQUFLLElBQUksa0NBQWtDO0lBQ3pILE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHakIsK0NBQVFBLENBQVcsRUFBRTtJQUUvQyxNQUFNa0IsUUFBUTtRQUFDO1FBQVE7UUFBUTtRQUFTO1FBQVM7UUFBUztRQUFTO1FBQVM7UUFBUztLQUFRO0lBRTdGbkIsZ0RBQVNBLENBQUM7UUFDUixNQUFNb0IsWUFBWTtZQUNoQixNQUFNQyxzQkFBc0IsTUFBTW5CLDBFQUFlQSxDQUFDRTtZQUNsREssZ0JBQWdCWTtRQUNsQjtRQUVBRDtJQUNGLEdBQUc7UUFBQ2hCO0tBQUc7SUFFUEosZ0RBQVNBLENBQUM7UUFDUixzREFBc0Q7UUFDdEQsTUFBTXNCLGNBQWMsSUFBSVYsS0FBS0YsY0FBY0ksZUFBZSxHQUFHUyxPQUFPO1FBQ3BFLE1BQU1DLFdBQVdDLE1BQU1DLElBQUksQ0FBQztZQUFFQyxRQUFRTDtRQUFZLEdBQUcsQ0FBQ00sR0FBR0MsSUFBTSxHQUFtQmYsT0FBaEJKLGNBQWEsS0FBZ0QsT0FBN0NJLGNBQWNnQixRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHLE1BQUssS0FBdUMsT0FBcEMsQ0FBQ0YsSUFBSSxHQUFHQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHO1FBQzlKYixTQUFTTTtJQUNYLEdBQUc7UUFBQ1Y7UUFBZUo7S0FBYTtJQUVoQyxNQUFNc0IsV0FBVzFCLGFBQWEsT0FBTzJCO1FBQ25DLElBQUkxQixRQUFRO1lBQ1YsTUFBTVQsOEVBQWlCQSxDQUFDbUMsTUFBTTdCLElBQUlHO1FBQ3BDO0lBQ0Y7SUFFQSxNQUFNMkIsYUFBYSxDQUFDQyxNQUFjQztRQUNoQyxPQUFPNUIsYUFBYTZCLElBQUksQ0FBQ0MsQ0FBQUE7WUFDdkIsTUFBTUMsa0JBQWtCRCxZQUFZSCxJQUFJO1lBQ3hDLE1BQU1LLGtCQUFrQkYsWUFBWUYsSUFBSTtZQUN4QyxPQUFPRyxvQkFBb0JKLFFBQVFLLG9CQUFvQko7UUFDekQ7SUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ0s7O2tDQUNDLDhEQUFDQzt3QkFBT0MsT0FBTzdCO3dCQUFlOEIsVUFBVUMsQ0FBQUEsSUFBSzlCLGlCQUFpQitCLFNBQVNELEVBQUVFLE1BQU0sQ0FBQ0osS0FBSyxFQUFFO2tDQUNwRmxCLE1BQU1DLElBQUksQ0FBQzs0QkFBRUMsUUFBUTt3QkFBRyxHQUFHLENBQUNDLEdBQUdDLGtCQUM5Qiw4REFBQ21CO2dDQUFtQkwsT0FBT2QsSUFBSTswQ0FDNUIsSUFBSWpCLEtBQUssR0FBR2lCLEdBQUdvQixjQUFjLENBQUMsV0FBVztvQ0FBRUMsT0FBTztnQ0FBTzsrQkFEL0NyQixJQUFJOzs7Ozs7Ozs7O2tDQUtyQiw4REFBQ2E7d0JBQU9DLE9BQU9qQzt3QkFBY2tDLFVBQVVDLENBQUFBLElBQUtsQyxnQkFBZ0JtQyxTQUFTRCxFQUFFRSxNQUFNLENBQUNKLEtBQUssRUFBRTtrQ0FFbEZsQixNQUFNQyxJQUFJLENBQUM7NEJBQUVDLFFBQVE7d0JBQUUsR0FBRyxDQUFDQyxHQUFHQzs0QkFDN0IsTUFBTXNCLE9BQU8sSUFBSXZDLE9BQU9DLFdBQVcsS0FBSyxJQUFJZ0I7NEJBQzVDLHFCQUNFLDhEQUFDbUI7Z0NBQWtCTCxPQUFPUTswQ0FDdkJBOytCQURVQTs7Ozs7d0JBSWpCOzs7Ozs7Ozs7Ozs7MEJBR0osOERBQUNDOzBCQUNELDRFQUFDQTs7c0NBQ0QsOERBQUNDO3NDQUNDLDRFQUFDQzs7a0RBQ0MsOERBQUNDO2tEQUFHOzs7Ozs7b0NBQ0h0QyxNQUFNdUMsR0FBRyxDQUFDckIsQ0FBQUEscUJBQ1QsOERBQUNvQjs0Q0FBY0UsV0FBVTtzREFBT3RCOzJDQUF2QkE7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSWYsOERBQUN1QjtzQ0FDRXZDLE1BQU1xQyxHQUFHLENBQUNwQixDQUFBQSxxQkFDVCw4REFBQ2tCOztzREFDQyw4REFBQ0s7c0RBQUl2Qjs7Ozs7O3dDQUNKbkIsTUFBTXVDLEdBQUcsQ0FBQ3JCLENBQUFBLHFCQUNULDhEQUFDd0I7MERBQ0V6QixXQUFXQyxNQUFNQyxzQkFDaEIsOERBQUN3QjtvREFBS0gsV0FBVTs4REFBeUM7Ozs7O3lFQUV6RCw4REFBQ0k7b0RBQU9KLFdBQVU7OERBQTZCOzs7Ozs7K0NBSjFDdEI7Ozs7OzttQ0FISkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JuQjtHQTVGZ0JqQzs7UUFDcUJOLG9EQUFPQTtRQUMzQkUsK0NBQVNBOzs7S0FGVkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdG9yQXBwb2ludG1lbnQudHN4P2YzMmQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IGNyZWF0ZUFwcG9pbnRtZW50IH0gZnJvbSAnLi4vYWN0aW9ucy9jcmVhdGUtYXBwb2ludG1lbnQnO1xyXG5pbXBvcnQgeyB1c2VVc2VySWQgfSBmcm9tICcuL0dldFVzZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRBcHBvaW50bWVudHMgfSBmcm9tICcuLi9hY3Rpb25zL2dldC1hcHBvaW50bWVudHMnO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnYXV0b3ByZWZpeGVyJztcclxuXHJcbnR5cGUgRm9ybURhdGEgPSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxhc3RuYW1lOiBzdHJpbmc7XHJcbiAgZGF0ZTogc3RyaW5nO1xyXG4gIHRpbWU6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEb2N0b3JBcHBvaW50bWVudCh7IGlkIH06IHsgaWQ6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtPEZvcm1EYXRhPigpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHVzZVVzZXJJZCgpO1xyXG4gIGNvbnN0IFthcHBvaW50bWVudHMsIHNldEFwcG9pbnRtZW50c10gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFllYXIsIHNldFNlbGVjdGVkWWVhcl0gPSB1c2VTdGF0ZTxudW1iZXI+KG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkTW9udGgsIHNldFNlbGVjdGVkTW9udGhdID0gdXNlU3RhdGU8bnVtYmVyPihuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxKTsgLy8gSmF2YVNjcmlwdCBtb250aHMgYXJlIDAtaW5kZXhlZFxyXG4gIGNvbnN0IFtkYXRlcywgc2V0RGF0ZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuXHJcbiAgY29uc3QgdGltZXMgPSBbJzg6MDAnLCAnOTowMCcsICcxMDowMCcsICcxMTowMCcsICcxMjowMCcsICcxMzowMCcsICcxNDowMCcsICcxNTowMCcsICcxNjowMCddO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9maWxlQXBwb2ludG1lbnRzID0gYXdhaXQgZ2V0QXBwb2ludG1lbnRzKGlkKTtcclxuICAgICAgc2V0QXBwb2ludG1lbnRzKHByb2ZpbGVBcHBvaW50bWVudHMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEdlbmVyYXRlIGRhdGVzIGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBtb250aCBhbmQgeWVhclxyXG4gICAgY29uc3QgZGF5c0luTW9udGggPSBuZXcgRGF0ZShzZWxlY3RlZFllYXIsIHNlbGVjdGVkTW9udGgsIDApLmdldERhdGUoKTtcclxuICAgIGNvbnN0IG5ld0RhdGVzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogZGF5c0luTW9udGggfSwgKF8sIGkpID0+IGAke3NlbGVjdGVkWWVhcn0tJHtzZWxlY3RlZE1vbnRoLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX0tJHsoaSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gKTtcclxuICAgIHNldERhdGVzKG5ld0RhdGVzKTtcclxuICB9LCBbc2VsZWN0ZWRNb250aCwgc2VsZWN0ZWRZZWFyXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gaGFuZGxlU3VibWl0KGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICBpZiAodXNlcklkKSB7XHJcbiAgICAgIGF3YWl0IGNyZWF0ZUFwcG9pbnRtZW50KGRhdGEsIGlkLCB1c2VySWQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBpc1Nsb3RGdWxsID0gKGRhdGU6IHN0cmluZywgdGltZTogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gYXBwb2ludG1lbnRzLnNvbWUoYXBwb2ludG1lbnQgPT4ge1xyXG4gICAgICBjb25zdCBhcHBvaW50bWVudERhdGUgPSBhcHBvaW50bWVudC5kYXRlO1xyXG4gICAgICBjb25zdCBhcHBvaW50bWVudFRpbWUgPSBhcHBvaW50bWVudC50aW1lO1xyXG4gICAgICByZXR1cm4gYXBwb2ludG1lbnREYXRlID09PSBkYXRlICYmIGFwcG9pbnRtZW50VGltZSA9PT0gdGltZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e3NlbGVjdGVkTW9udGh9IG9uQ2hhbmdlPXtlID0+IHNldFNlbGVjdGVkTW9udGgocGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKSl9PlxyXG4gICAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IDEyIH0sIChfLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpICsgMX0gdmFsdWU9e2kgKyAxfT5cclxuICAgICAgICAgICAgICB7bmV3IERhdGUoMCwgaSkudG9Mb2NhbGVTdHJpbmcoJ2RlZmF1bHQnLCB7IG1vbnRoOiAnbG9uZycgfSl9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17c2VsZWN0ZWRZZWFyfSBvbkNoYW5nZT17ZSA9PiBzZXRTZWxlY3RlZFllYXIocGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKSl9PlxyXG4gICAgICAgICAgey8qIEV4YW1wbGUgcmFuZ2U6IGN1cnJlbnQgeWVhciAtIDIsIHRvIGN1cnJlbnQgeWVhciArIDIgKi99XHJcbiAgICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoXywgaSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gMiArIGk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3llYXJ9IHZhbHVlPXt5ZWFyfT5cclxuICAgICAgICAgICAgICAgIHt5ZWFyfVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dGFibGU+XHJcbiAgICAgIDx0YWJsZT5cclxuICAgICAgPHRoZWFkPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0aD5UaW1lPC90aD5cclxuICAgICAgICAgIHtkYXRlcy5tYXAoZGF0ZSA9PiAoXHJcbiAgICAgICAgICAgIDx0aCBrZXk9e2RhdGV9IGNsYXNzTmFtZT0ncC0yJz57ZGF0ZX08L3RoPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90aGVhZD5cclxuICAgICAgPHRib2R5PlxyXG4gICAgICAgIHt0aW1lcy5tYXAodGltZSA9PiAoXHJcbiAgICAgICAgICA8dHIga2V5PXt0aW1lfT5cclxuICAgICAgICAgICAgPHRkPnt0aW1lfTwvdGQ+XHJcbiAgICAgICAgICAgIHtkYXRlcy5tYXAoZGF0ZSA9PiAoXHJcbiAgICAgICAgICAgICAgPHRkIGtleT17ZGF0ZX0+XHJcbiAgICAgICAgICAgICAgICB7aXNTbG90RnVsbChkYXRlLCB0aW1lKSA/IChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdiZy1yZWQtMjAwIHJvdW5kZWQteGwgcC0yIHRleHQtcmVkLTgwMCc+RnVsbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1saW1lLTIwMCByb3VuZGVkLXhsIHAtMic+RnJlZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4gICJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiY3JlYXRlQXBwb2ludG1lbnQiLCJ1c2VVc2VySWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldEFwcG9pbnRtZW50cyIsIkRvY3RvckFwcG9pbnRtZW50IiwiaWQiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInVzZXJJZCIsImFwcG9pbnRtZW50cyIsInNldEFwcG9pbnRtZW50cyIsInNlbGVjdGVkWWVhciIsInNldFNlbGVjdGVkWWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInNlbGVjdGVkTW9udGgiLCJzZXRTZWxlY3RlZE1vbnRoIiwiZ2V0TW9udGgiLCJkYXRlcyIsInNldERhdGVzIiwidGltZXMiLCJmZXRjaERhdGEiLCJwcm9maWxlQXBwb2ludG1lbnRzIiwiZGF5c0luTW9udGgiLCJnZXREYXRlIiwibmV3RGF0ZXMiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJvblN1Ym1pdCIsImRhdGEiLCJpc1Nsb3RGdWxsIiwiZGF0ZSIsInRpbWUiLCJzb21lIiwiYXBwb2ludG1lbnQiLCJhcHBvaW50bWVudERhdGUiLCJhcHBvaW50bWVudFRpbWUiLCJkaXYiLCJzZWxlY3QiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInBhcnNlSW50IiwidGFyZ2V0Iiwib3B0aW9uIiwidG9Mb2NhbGVTdHJpbmciLCJtb250aCIsInllYXIiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsIm1hcCIsImNsYXNzTmFtZSIsInRib2R5IiwidGQiLCJzcGFuIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/DoctorAppointment.tsx\n"));

/***/ })

});