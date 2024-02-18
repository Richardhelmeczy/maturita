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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DoctorAppointment: function() { return /* binding */ DoctorAppointment; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _actions_create_appointment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/create-appointment */ \"(app-pages-browser)/./src/actions/create-appointment.ts\");\n/* harmony import */ var _GetUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetUser */ \"(app-pages-browser)/./src/components/GetUser.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _actions_get_appointments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/get-appointments */ \"(app-pages-browser)/./src/actions/get-appointments.ts\");\n/* __next_internal_client_entry_do_not_use__ DoctorAppointment auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction DoctorAppointment(param) {\n    let { id } = param;\n    _s();\n    const { handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();\n    const userId = (0,_GetUser__WEBPACK_IMPORTED_MODULE_2__.useUserId)();\n    const [appointments, setAppointments] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [selectedYear, setSelectedYear] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(new Date().getFullYear());\n    const [selectedMonth, setSelectedMonth] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(new Date().getMonth() + 1); // JavaScript months are 0-indexed\n    const [dates, setDates] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [visibleDates, setVisibleDates] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [visibleIndex, setVisibleIndex] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const times = [\n        \"8:00\",\n        \"9:00\",\n        \"10:00\",\n        \"11:00\",\n        \"12:00\",\n        \"13:00\",\n        \"14:00\",\n        \"15:00\",\n        \"16:00\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const profileAppointments = await (0,_actions_get_appointments__WEBPACK_IMPORTED_MODULE_4__.getAppointments)(id);\n            setAppointments(profileAppointments);\n        };\n        fetchData();\n    }, [\n        id\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();\n        const newDates = Array.from({\n            length: daysInMonth\n        }, (_, i)=>\"\".concat(selectedYear, \"-\").concat(selectedMonth.toString().padStart(2, \"0\"), \"-\").concat((i + 1).toString().padStart(2, \"0\")));\n        setDates(newDates);\n        setVisibleIndex(0);\n    }, [\n        selectedMonth,\n        selectedYear\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // Update visible dates based on the current visibleIndex\n        setVisibleDates(dates.slice(visibleIndex, visibleIndex + 7));\n    }, [\n        dates,\n        visibleIndex\n    ]);\n    const onSubmit = handleSubmit(async (data)=>{\n        if (userId) {\n            await (0,_actions_create_appointment__WEBPACK_IMPORTED_MODULE_1__.createAppointment)(data, id, userId);\n        }\n    });\n    const isSlotFull = (date, time)=>{\n        return appointments.some((appointment)=>{\n            const appointmentDate = appointment.date;\n            const appointmentTime = appointment.time;\n            return appointmentDate === date && appointmentTime === time;\n        });\n    };\n    const handlePrevClick = ()=>{\n        setVisibleIndex((prevIndex)=>Math.max(0, prevIndex - 7));\n    };\n    const handleNextClick = ()=>{\n        setVisibleIndex((prevIndex)=>Math.min(dates.length - 7, prevIndex + 7));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden m-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: selectedMonth,\n                        onChange: (e)=>setSelectedMonth(parseInt(e.target.value, 10)),\n                        children: Array.from({\n                            length: 12\n                        }, (_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: i + 1,\n                                children: new Date(0, i).toLocaleString(\"default\", {\n                                    month: \"long\"\n                                })\n                            }, i + 1, false, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: selectedYear,\n                        onChange: (e)=>setSelectedYear(parseInt(e.target.value, 10)),\n                        children: Array.from({\n                            length: 5\n                        }, (_, i)=>{\n                            const year = new Date().getFullYear() - 2 + i;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: year,\n                                children: year\n                            }, year, false, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Time\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this),\n                                visibleDates.map((date)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"p-2\",\n                                        children: date\n                                    }, date, false, {\n                                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 15\n                                    }, this))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: times.map((time)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: time\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 15\n                                    }, this),\n                                    visibleDates.map((date)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: isSlotFull(date, time) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"bg-red-200 rounded-xl p-2 text-red-800\",\n                                                children: \"Full\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                                lineNumber: 107,\n                                                columnNumber: 21\n                                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-lime-200 rounded-xl p-2\",\n                                                children: \"Free\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                                lineNumber: 109,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, date, false, {\n                                            fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 17\n                                        }, this))\n                                ]\n                            }, time, true, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handlePrevClick,\n                        disabled: visibleIndex === 0,\n                        className: \"bg-blue-300 p-3 rounded-xl mx-3\",\n                        children: \"Prev\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleNextClick,\n                        disabled: visibleIndex >= dates.length - 7,\n                        className: \"bg-blue-300 p-3 rounded-xl mx-3\",\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(DoctorAppointment, \"+hQRFPx+XnTUZfrV3mlgKyDgQRo=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm,\n        _GetUser__WEBPACK_IMPORTED_MODULE_2__.useUserId\n    ];\n});\n_c = DoctorAppointment;\nvar _c;\n$RefreshReg$(_c, \"DoctorAppointment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RvY3RvckFwcG9pbnRtZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzBDO0FBQ3dCO0FBQzVCO0FBQ007QUFDa0I7QUFTdkQsU0FBU00sa0JBQWtCLEtBQXNCO1FBQXRCLEVBQUVDLEVBQUUsRUFBa0IsR0FBdEI7O0lBQ2hDLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEdBQUdSLHdEQUFPQTtJQUNoQyxNQUFNUyxTQUFTUCxtREFBU0E7SUFDeEIsTUFBTSxDQUFDUSxjQUFjQyxnQkFBZ0IsR0FBR1AsK0NBQVFBLENBQVEsRUFBRTtJQUMxRCxNQUFNLENBQUNRLGNBQWNDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBUyxJQUFJVSxPQUFPQyxXQUFXO0lBQy9FLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdiLCtDQUFRQSxDQUFTLElBQUlVLE9BQU9JLFFBQVEsS0FBSyxJQUFJLGtDQUFrQztJQUN6SCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFXLEVBQUU7SUFDL0MsTUFBTSxDQUFDaUIsY0FBY0MsZ0JBQWdCLEdBQUdsQiwrQ0FBUUEsQ0FBVyxFQUFFO0lBQzdELE1BQU0sQ0FBQ21CLGNBQWNDLGdCQUFnQixHQUFHcEIsK0NBQVFBLENBQUM7SUFFakQsTUFBTXFCLFFBQVE7UUFBQztRQUFRO1FBQVE7UUFBUztRQUFTO1FBQVM7UUFBUztRQUFTO1FBQVM7S0FBUTtJQUU3RnRCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXVCLFlBQVk7WUFDaEIsTUFBTUMsc0JBQXNCLE1BQU10QiwwRUFBZUEsQ0FBQ0U7WUFDbERJLGdCQUFnQmdCO1FBQ2xCO1FBRUFEO0lBQ0YsR0FBRztRQUFDbkI7S0FBRztJQUVQSixnREFBU0EsQ0FBQztRQUNSLE1BQU15QixjQUFjLElBQUlkLEtBQUtGLGNBQWNJLGVBQWUsR0FBR2EsT0FBTztRQUNwRSxNQUFNQyxXQUFXQyxNQUFNQyxJ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SEpDOzs7Ozs7Ozs7Ozs7Ozs7OzBCQWVmLDhEQUFDVzs7a0NBQ0MsOERBQUNvQjt3QkFBT0MsU0FBUzNCO3dCQUFpQjRCLFVBQVVyRCxpQkFBaUI7d0JBQUdnQyxXQUFVO2tDQUFrQzs7Ozs7O2tDQUM1Ryw4REFBQ21CO3dCQUFPQyxTQUFTdkI7d0JBQWlCd0IsVUFBVXJELGdCQUFnQkosTUFBTWMsTUFBTSxHQUFHO3dCQUFHc0IsV0FBVTtrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7O0FBSWxJO0dBNUdnQmpEOztRQUNXTixvREFBT0E7UUFDakJFLCtDQUFTQTs7O0tBRlZJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RvY3RvckFwcG9pbnRtZW50LnRzeD9mMzJkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgeyBjcmVhdGVBcHBvaW50bWVudCB9IGZyb20gJy4uL2FjdGlvbnMvY3JlYXRlLWFwcG9pbnRtZW50JztcclxuaW1wb3J0IHsgdXNlVXNlcklkIH0gZnJvbSAnLi9HZXRVc2VyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0QXBwb2ludG1lbnRzIH0gZnJvbSAnLi4vYWN0aW9ucy9nZXQtYXBwb2ludG1lbnRzJztcclxuXHJcbnR5cGUgRm9ybURhdGEgPSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxhc3RuYW1lOiBzdHJpbmc7XHJcbiAgZGF0ZTogc3RyaW5nO1xyXG4gIHRpbWU6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEb2N0b3JBcHBvaW50bWVudCh7IGlkIH06IHsgaWQ6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm08Rm9ybURhdGE+KCk7XHJcbiAgY29uc3QgdXNlcklkID0gdXNlVXNlcklkKCk7XHJcbiAgY29uc3QgW2FwcG9pbnRtZW50cywgc2V0QXBwb2ludG1lbnRzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkWWVhciwgc2V0U2VsZWN0ZWRZZWFyXSA9IHVzZVN0YXRlPG51bWJlcj4obmV3IERhdGUoKS5nZXRGdWxsWWVhcigpKTtcclxuICBjb25zdCBbc2VsZWN0ZWRNb250aCwgc2V0U2VsZWN0ZWRNb250aF0gPSB1c2VTdGF0ZTxudW1iZXI+KG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDEpOyAvLyBKYXZhU2NyaXB0IG1vbnRocyBhcmUgMC1pbmRleGVkXHJcbiAgY29uc3QgW2RhdGVzLCBzZXREYXRlc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xyXG4gIGNvbnN0IFt2aXNpYmxlRGF0ZXMsIHNldFZpc2libGVEYXRlc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xyXG4gIGNvbnN0IFt2aXNpYmxlSW5kZXgsIHNldFZpc2libGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgdGltZXMgPSBbJzg6MDAnLCAnOTowMCcsICcxMDowMCcsICcxMTowMCcsICcxMjowMCcsICcxMzowMCcsICcxNDowMCcsICcxNTowMCcsICcxNjowMCddO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9maWxlQXBwb2ludG1lbnRzID0gYXdhaXQgZ2V0QXBwb2ludG1lbnRzKGlkKTtcclxuICAgICAgc2V0QXBwb2ludG1lbnRzKHByb2ZpbGVBcHBvaW50bWVudHMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGRheXNJbk1vbnRoID0gbmV3IERhdGUoc2VsZWN0ZWRZZWFyLCBzZWxlY3RlZE1vbnRoLCAwKS5nZXREYXRlKCk7XHJcbiAgICBjb25zdCBuZXdEYXRlcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGRheXNJbk1vbnRoIH0sIChfLCBpKSA9PiBgJHtzZWxlY3RlZFllYXJ9LSR7c2VsZWN0ZWRNb250aC50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9LSR7KGkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9YCk7XHJcbiAgICBzZXREYXRlcyhuZXdEYXRlcyk7XHJcbiAgICBzZXRWaXNpYmxlSW5kZXgoMCk7XHJcbiAgfSwgW3NlbGVjdGVkTW9udGgsIHNlbGVjdGVkWWVhcl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gVXBkYXRlIHZpc2libGUgZGF0ZXMgYmFzZWQgb24gdGhlIGN1cnJlbnQgdmlzaWJsZUluZGV4XHJcbiAgICBzZXRWaXNpYmxlRGF0ZXMoZGF0ZXMuc2xpY2UodmlzaWJsZUluZGV4LCB2aXNpYmxlSW5kZXggKyA3KSk7XHJcbiAgfSwgW2RhdGVzLCB2aXNpYmxlSW5kZXhdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBoYW5kbGVTdWJtaXQoYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIGlmICh1c2VySWQpIHtcclxuICAgICAgYXdhaXQgY3JlYXRlQXBwb2ludG1lbnQoZGF0YSwgaWQsIHVzZXJJZCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGlzU2xvdEZ1bGwgPSAoZGF0ZTogc3RyaW5nLCB0aW1lOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBhcHBvaW50bWVudHMuc29tZShhcHBvaW50bWVudCA9PiB7XHJcbiAgICAgIGNvbnN0IGFwcG9pbnRtZW50RGF0ZSA9IGFwcG9pbnRtZW50LmRhdGU7XHJcbiAgICAgIGNvbnN0IGFwcG9pbnRtZW50VGltZSA9IGFwcG9pbnRtZW50LnRpbWU7XHJcbiAgICAgIHJldHVybiBhcHBvaW50bWVudERhdGUgPT09IGRhdGUgJiYgYXBwb2ludG1lbnRUaW1lID09PSB0aW1lO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJldkNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZUluZGV4KHByZXZJbmRleCA9PiBNYXRoLm1heCgwLCBwcmV2SW5kZXggLSA3KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV4dENsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZUluZGV4KHByZXZJbmRleCA9PiBNYXRoLm1pbihkYXRlcy5sZW5ndGggLSA3LCBwcmV2SW5kZXggKyA3KSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIG0tM1wiPlxyXG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e3NlbGVjdGVkTW9udGh9IG9uQ2hhbmdlPXtlID0+IHNldFNlbGVjdGVkTW9udGgocGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKSl9PlxyXG4gICAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IDEyIH0sIChfLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpICsgMX0gdmFsdWU9e2kgKyAxfT5cclxuICAgICAgICAgICAgICB7bmV3IERhdGUoMCwgaSkudG9Mb2NhbGVTdHJpbmcoJ2RlZmF1bHQnLCB7IG1vbnRoOiAnbG9uZycgfSl9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17c2VsZWN0ZWRZZWFyfSBvbkNoYW5nZT17ZSA9PiBzZXRTZWxlY3RlZFllYXIocGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKSl9PlxyXG4gICAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKF8sIGkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDIgKyBpO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXt5ZWFyfSB2YWx1ZT17eWVhcn0+XHJcbiAgICAgICAgICAgICAgICB7eWVhcn1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvIGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPlRpbWU8L3RoPlxyXG4gICAgICAgICAgICB7dmlzaWJsZURhdGVzLm1hcChkYXRlID0+IChcclxuICAgICAgICAgICAgICA8dGgga2V5PXtkYXRlfSBjbGFzc05hbWU9J3AtMic+e2RhdGV9PC90aD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge3RpbWVzLm1hcCh0aW1lID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17dGltZX0+XHJcbiAgICAgICAgICAgICAgPHRkPnt0aW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAge3Zpc2libGVEYXRlcy5tYXAoZGF0ZSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dGQga2V5PXtkYXRlfT5cclxuICAgICAgICAgICAgICAgICAge2lzU2xvdEZ1bGwoZGF0ZSwgdGltZSkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdiZy1yZWQtMjAwIHJvdW5kZWQteGwgcC0yIHRleHQtcmVkLTgwMCc+RnVsbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctbGltZS0yMDAgcm91bmRlZC14bCBwLTInPkZyZWU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUHJldkNsaWNrfSBkaXNhYmxlZD17dmlzaWJsZUluZGV4ID09PSAwfSBjbGFzc05hbWU9J2JnLWJsdWUtMzAwIHAtMyByb3VuZGVkLXhsIG14LTMnPlByZXY8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5leHRDbGlja30gZGlzYWJsZWQ9e3Zpc2libGVJbmRleCA+PSBkYXRlcy5sZW5ndGggLSA3fSBjbGFzc05hbWU9J2JnLWJsdWUtMzAwIHAtMyByb3VuZGVkLXhsIG14LTMnPk5leHQ8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbInVzZUZvcm0iLCJjcmVhdGVBcHBvaW50bWVudCIsInVzZVVzZXJJZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0QXBwb2ludG1lbnRzIiwiRG9jdG9yQXBwb2ludG1lbnQiLCJpZCIsImhhbmRsZVN1Ym1pdCIsInVzZXJJZCIsImFwcG9pbnRtZW50cyIsInNldEFwcG9pbnRtZW50cyIsInNlbGVjdGVkWWVhciIsInNldFNlbGVjdGVkWWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInNlbGVjdGVkTW9udGgiLCJzZXRTZWxlY3RlZE1vbnRoIiwiZ2V0TW9udGgiLCJkYXRlcyIsInNldERhdGVzIiwidmlzaWJsZURhdGVzIiwic2V0VmlzaWJsZURhdGVzIiwidmlzaWJsZUluZGV4Iiwic2V0VmlzaWJsZUluZGV4IiwidGltZXMiLCJmZXRjaERhdGEiLCJwcm9maWxlQXBwb2ludG1lbnRzIiwiZGF5c0luTW9udGgiLCJnZXREYXRlIiwibmV3RGF0ZXMiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJzbGljZSIsIm9uU3VibWl0IiwiZGF0YSIsImlzU2xvdEZ1bGwiLCJkYXRlIiwidGltZSIsInNvbWUiLCJhcHBvaW50bWVudCIsImFwcG9pbnRtZW50RGF0ZSIsImFwcG9pbnRtZW50VGltZSIsImhhbmRsZVByZXZDbGljayIsInByZXZJbmRleCIsIk1hdGgiLCJtYXgiLCJoYW5kbGVOZXh0Q2xpY2siLCJtaW4iLCJkaXYiLCJjbGFzc05hbWUiLCJzZWxlY3QiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInBhcnNlSW50IiwidGFyZ2V0Iiwib3B0aW9uIiwidG9Mb2NhbGVTdHJpbmciLCJtb250aCIsInllYXIiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsIm1hcCIsInRib2R5IiwidGQiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/DoctorAppointment.tsx\n"));

/***/ })

});