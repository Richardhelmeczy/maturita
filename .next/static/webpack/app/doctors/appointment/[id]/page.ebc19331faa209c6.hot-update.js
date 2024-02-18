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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DoctorAppointment: function() { return /* binding */ DoctorAppointment; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _actions_create_appointment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/create-appointment */ \"(app-pages-browser)/./src/actions/create-appointment.ts\");\n/* harmony import */ var _GetUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetUser */ \"(app-pages-browser)/./src/components/GetUser.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _actions_get_appointments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/get-appointments */ \"(app-pages-browser)/./src/actions/get-appointments.ts\");\n/* __next_internal_client_entry_do_not_use__ DoctorAppointment auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction DoctorAppointment(param) {\n    let { id } = param;\n    _s();\n    const { handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();\n    const userId = (0,_GetUser__WEBPACK_IMPORTED_MODULE_2__.useUserId)();\n    const [appointments, setAppointments] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [selectedYear, setSelectedYear] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(new Date().getFullYear());\n    const [selectedMonth, setSelectedMonth] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(new Date().getMonth() + 1); // JavaScript months are 0-indexed\n    const [dates, setDates] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [visibleDates, setVisibleDates] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [visibleIndex, setVisibleIndex] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const times = [\n        \"8:00\",\n        \"9:00\",\n        \"10:00\",\n        \"11:00\",\n        \"12:00\",\n        \"13:00\",\n        \"14:00\",\n        \"15:00\",\n        \"16:00\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const profileAppointments = await (0,_actions_get_appointments__WEBPACK_IMPORTED_MODULE_4__.getAppointments)(id);\n            setAppointments(profileAppointments);\n        };\n        fetchData();\n    }, [\n        id\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // Generate dates based on the selected month and year\n        const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();\n        const newDates = Array.from({\n            length: daysInMonth\n        }, (_, i)=>\"\".concat(selectedYear, \"-\").concat(selectedMonth.toString().padStart(2, \"0\"), \"-\").concat((i + 1).toString().padStart(2, \"0\")));\n        setDates(newDates);\n        setVisibleIndex(0); // Reset visible index when month or year changes\n    }, [\n        selectedMonth,\n        selectedYear\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // Update visible dates based on the current visibleIndex\n        setVisibleDates(dates.slice(visibleIndex, visibleIndex + 7));\n    }, [\n        dates,\n        visibleIndex\n    ]);\n    const onSubmit = handleSubmit(async (data)=>{\n        if (userId) {\n            await (0,_actions_create_appointment__WEBPACK_IMPORTED_MODULE_1__.createAppointment)(data, id, userId);\n        }\n    });\n    const isSlotFull = (date, time)=>{\n        return appointments.some((appointment)=>{\n            const appointmentDate = appointment.date;\n            const appointmentTime = appointment.time;\n            return appointmentDate === date && appointmentTime === time;\n        });\n    };\n    const handlePrevClick = ()=>{\n        setVisibleIndex((prevIndex)=>Math.max(0, prevIndex - 7));\n    };\n    const handleNextClick = ()=>{\n        setVisibleIndex((prevIndex)=>Math.min(dates.length - 7, prevIndex + 7));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden m-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: selectedMonth,\n                        onChange: (e)=>setSelectedMonth(parseInt(e.target.value, 10)),\n                        children: Array.from({\n                            length: 12\n                        }, (_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: i + 1,\n                                children: new Date(0, i).toLocaleString(\"default\", {\n                                    month: \"long\"\n                                })\n                            }, i + 1, false, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: selectedYear,\n                        onChange: (e)=>setSelectedYear(parseInt(e.target.value, 10)),\n                        children: Array.from({\n                            length: 5\n                        }, (_, i)=>{\n                            const year = new Date().getFullYear() - 2 + i;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: year,\n                                children: year\n                            }, year, false, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Time\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, this),\n                                visibleDates.map((date)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"p-2\",\n                                        children: date\n                                    }, date, false, {\n                                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, this))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: times.map((time)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: time\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 15\n                                    }, this),\n                                    visibleDates.map((date)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: isSlotFull(date, time) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"bg-red-200 rounded-xl p-2 text-red-800\",\n                                                children: \"Full\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                                lineNumber: 108,\n                                                columnNumber: 21\n                                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-lime-200 rounded-xl p-2\",\n                                                children: \"Free\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                                lineNumber: 110,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, date, false, {\n                                            fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 17\n                                        }, this))\n                                ]\n                            }, time, true, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handlePrevClick,\n                        disabled: visibleIndex === 0,\n                        className: \"bg-blue-300 p-3 rounded-xl mx-3\",\n                        children: \"Prev\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleNextClick,\n                        disabled: visibleIndex >= dates.length - 7,\n                        className: \"bg-blue-300 p-3 rounded-xl mx-3\",\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(DoctorAppointment, \"+hQRFPx+XnTUZfrV3mlgKyDgQRo=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm,\n        _GetUser__WEBPACK_IMPORTED_MODULE_2__.useUserId\n    ];\n});\n_c = DoctorAppointment;\nvar _c;\n$RefreshReg$(_c, \"DoctorAppointment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RvY3RvckFwcG9pbnRtZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzBDO0FBQ3dCO0FBQzVCO0FBQ007QUFDa0I7QUFTdkQsU0FBU00sa0JBQWtCLEtBQXNCO1FBQXRCLEVBQUVDLEVBQUUsRUFBa0IsR0FBdEI7O0lBQ2hDLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEdBQUdSLHdEQUFPQTtJQUNoQyxNQUFNUyxTQUFTUCxtREFBU0E7SUFDeEIsTUFBTSxDQUFDUSxjQUFjQyxnQkFBZ0IsR0FBR1AsK0NBQVFBLENBQVEsRUFBRTtJQUMxRCxNQUFNLENBQUNRLGNBQWNDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBUyxJQUFJVSxPQUFPQyxXQUFXO0lBQy9FLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdiLCtDQUFRQSxDQUFTLElBQUlVLE9BQU9JLFFBQVEsS0FBSyxJQUFJLGtDQUFrQztJQUN6SCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFXLEVBQUU7SUFDL0MsTUFBTSxDQUFDaUIsY0FBY0MsZ0JBQWdCLEdBQUdsQiwrQ0FBUUEsQ0FBVyxFQUFFO0lBQzdELE1BQU0sQ0FBQ21CLGNBQWNDLGdCQUFnQixHQUFHcEIsK0NBQVFBLENBQUM7SUFFakQsTUFBTXFCLFFBQVE7UUFBQztRQUFRO1FBQVE7UUFBUztRQUFTO1FBQVM7UUFBUztRQUFTO1FBQVM7S0FBUTtJQUU3RnRCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXVCLFlBQVk7WUFDaEIsTUFBTUMsc0JBQXNCLE1BQU10QiwwRUFBZUEsQ0FBQ0U7WUFDbERJLGdCQUFnQmdCO1FBQ2xCO1FBRUFEO0lBQ0YsR0FBRztRQUFDbkI7S0FBRztJQUVQSixnREFBU0EsQ0FBQztRQUNSLHNEQUFzRDtRQUN0RCxNQUFNeUIsY0FBYyxJQUFJZCxLQUFLRixjQUFjSSxlQUFlLEdBQUdhLE9BQU87UUFDcEUsTUFBTUMs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QTZCOzs7Ozs7MkNBSjFDYjs7Ozs7OytCQUhKQzs7Ozs7Ozs7Ozs7Ozs7OzswQkFlZiw4REFBQ1c7O2tDQUNDLDhEQUFDb0I7d0JBQU9DLFNBQVMzQjt3QkFBaUI0QixVQUFVckQsaUJBQWlCO3dCQUFHZ0MsV0FBVTtrQ0FBa0M7Ozs7OztrQ0FDNUcsOERBQUNtQjt3QkFBT0MsU0FBU3ZCO3dCQUFpQndCLFVBQVVyRCxnQkFBZ0JKLE1BQU1jLE1BQU0sR0FBRzt3QkFBR3NCLFdBQVU7a0NBQWtDOzs7Ozs7Ozs7Ozs7OztBQUlsSTtHQTdHZ0JqRDs7UUFDV04sb0RBQU9BO1FBQ2pCRSwrQ0FBU0E7OztLQUZWSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Eb2N0b3JBcHBvaW50bWVudC50c3g/ZjMyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHsgY3JlYXRlQXBwb2ludG1lbnQgfSBmcm9tICcuLi9hY3Rpb25zL2NyZWF0ZS1hcHBvaW50bWVudCc7XHJcbmltcG9ydCB7IHVzZVVzZXJJZCB9IGZyb20gJy4vR2V0VXNlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldEFwcG9pbnRtZW50cyB9IGZyb20gJy4uL2FjdGlvbnMvZ2V0LWFwcG9pbnRtZW50cyc7XHJcblxyXG50eXBlIEZvcm1EYXRhID0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYXN0bmFtZTogc3RyaW5nO1xyXG4gIGRhdGU6IHN0cmluZztcclxuICB0aW1lOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRG9jdG9yQXBwb2ludG1lbnQoeyBpZCB9OiB7IGlkOiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtPEZvcm1EYXRhPigpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHVzZVVzZXJJZCgpO1xyXG4gIGNvbnN0IFthcHBvaW50bWVudHMsIHNldEFwcG9pbnRtZW50c10gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFllYXIsIHNldFNlbGVjdGVkWWVhcl0gPSB1c2VTdGF0ZTxudW1iZXI+KG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkTW9udGgsIHNldFNlbGVjdGVkTW9udGhdID0gdXNlU3RhdGU8bnVtYmVyPihuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxKTsgLy8gSmF2YVNjcmlwdCBtb250aHMgYXJlIDAtaW5kZXhlZFxyXG4gIGNvbnN0IFtkYXRlcywgc2V0RGF0ZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuICBjb25zdCBbdmlzaWJsZURhdGVzLCBzZXRWaXNpYmxlRGF0ZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuICBjb25zdCBbdmlzaWJsZUluZGV4LCBzZXRWaXNpYmxlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IHRpbWVzID0gWyc4OjAwJywgJzk6MDAnLCAnMTA6MDAnLCAnMTE6MDAnLCAnMTI6MDAnLCAnMTM6MDAnLCAnMTQ6MDAnLCAnMTU6MDAnLCAnMTY6MDAnXTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcHJvZmlsZUFwcG9pbnRtZW50cyA9IGF3YWl0IGdldEFwcG9pbnRtZW50cyhpZCk7XHJcbiAgICAgIHNldEFwcG9pbnRtZW50cyhwcm9maWxlQXBwb2ludG1lbnRzKTtcclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBHZW5lcmF0ZSBkYXRlcyBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgbW9udGggYW5kIHllYXJcclxuICAgIGNvbnN0IGRheXNJbk1vbnRoID0gbmV3IERhdGUoc2VsZWN0ZWRZZWFyLCBzZWxlY3RlZE1vbnRoLCAwKS5nZXREYXRlKCk7XHJcbiAgICBjb25zdCBuZXdEYXRlcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGRheXNJbk1vbnRoIH0sIChfLCBpKSA9PiBgJHtzZWxlY3RlZFllYXJ9LSR7c2VsZWN0ZWRNb250aC50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9LSR7KGkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9YCk7XHJcbiAgICBzZXREYXRlcyhuZXdEYXRlcyk7XHJcbiAgICBzZXRWaXNpYmxlSW5kZXgoMCk7IC8vIFJlc2V0IHZpc2libGUgaW5kZXggd2hlbiBtb250aCBvciB5ZWFyIGNoYW5nZXNcclxuICB9LCBbc2VsZWN0ZWRNb250aCwgc2VsZWN0ZWRZZWFyXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBVcGRhdGUgdmlzaWJsZSBkYXRlcyBiYXNlZCBvbiB0aGUgY3VycmVudCB2aXNpYmxlSW5kZXhcclxuICAgIHNldFZpc2libGVEYXRlcyhkYXRlcy5zbGljZSh2aXNpYmxlSW5kZXgsIHZpc2libGVJbmRleCArIDcpKTtcclxuICB9LCBbZGF0ZXMsIHZpc2libGVJbmRleF0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGhhbmRsZVN1Ym1pdChhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgaWYgKHVzZXJJZCkge1xyXG4gICAgICBhd2FpdCBjcmVhdGVBcHBvaW50bWVudChkYXRhLCBpZCwgdXNlcklkKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgaXNTbG90RnVsbCA9IChkYXRlOiBzdHJpbmcsIHRpbWU6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIGFwcG9pbnRtZW50cy5zb21lKGFwcG9pbnRtZW50ID0+IHtcclxuICAgICAgY29uc3QgYXBwb2ludG1lbnREYXRlID0gYXBwb2ludG1lbnQuZGF0ZTtcclxuICAgICAgY29uc3QgYXBwb2ludG1lbnRUaW1lID0gYXBwb2ludG1lbnQudGltZTtcclxuICAgICAgcmV0dXJuIGFwcG9pbnRtZW50RGF0ZSA9PT0gZGF0ZSAmJiBhcHBvaW50bWVudFRpbWUgPT09IHRpbWU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQcmV2Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRWaXNpYmxlSW5kZXgocHJldkluZGV4ID0+IE1hdGgubWF4KDAsIHByZXZJbmRleCAtIDcpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVOZXh0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRWaXNpYmxlSW5kZXgocHJldkluZGV4ID0+IE1hdGgubWluKGRhdGVzLmxlbmd0aCAtIDcsIHByZXZJbmRleCArIDcpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gbS0zXCI+XHJcbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17c2VsZWN0ZWRNb250aH0gb25DaGFuZ2U9e2UgPT4gc2V0U2VsZWN0ZWRNb250aChwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApKX0+XHJcbiAgICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogMTIgfSwgKF8sIGkpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2kgKyAxfSB2YWx1ZT17aSArIDF9PlxyXG4gICAgICAgICAgICAgIHtuZXcgRGF0ZSgwLCBpKS50b0xvY2FsZVN0cmluZygnZGVmYXVsdCcsIHsgbW9udGg6ICdsb25nJyB9KX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8c2VsZWN0IHZhbHVlPXtzZWxlY3RlZFllYXJ9IG9uQ2hhbmdlPXtlID0+IHNldFNlbGVjdGVkWWVhcihwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApKX0+XHJcbiAgICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoXywgaSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gMiArIGk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3llYXJ9IHZhbHVlPXt5ZWFyfT5cclxuICAgICAgICAgICAgICAgIHt5ZWFyfVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+VGltZTwvdGg+XHJcbiAgICAgICAgICAgIHt2aXNpYmxlRGF0ZXMubWFwKGRhdGUgPT4gKFxyXG4gICAgICAgICAgICAgIDx0aCBrZXk9e2RhdGV9IGNsYXNzTmFtZT0ncC0yJz57ZGF0ZX08L3RoPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7dGltZXMubWFwKHRpbWUgPT4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXt0aW1lfT5cclxuICAgICAgICAgICAgICA8dGQ+e3RpbWV9PC90ZD5cclxuICAgICAgICAgICAgICB7dmlzaWJsZURhdGVzLm1hcChkYXRlID0+IChcclxuICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2RhdGV9PlxyXG4gICAgICAgICAgICAgICAgICB7aXNTbG90RnVsbChkYXRlLCB0aW1lKSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2JnLXJlZC0yMDAgcm91bmRlZC14bCBwLTIgdGV4dC1yZWQtODAwJz5GdWxsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1saW1lLTIwMCByb3VuZGVkLXhsIHAtMic+RnJlZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQcmV2Q2xpY2t9IGRpc2FibGVkPXt2aXNpYmxlSW5kZXggPT09IDB9IGNsYXNzTmFtZT0nYmctYmx1ZS0zMDAgcC0zIHJvdW5kZWQteGwgbXgtMyc+UHJldjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTmV4dENsaWNrfSBkaXNhYmxlZD17dmlzaWJsZUluZGV4ID49IGRhdGVzLmxlbmd0aCAtIDd9IGNsYXNzTmFtZT0nYmctYmx1ZS0zMDAgcC0zIHJvdW5kZWQteGwgbXgtMyc+TmV4dDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsidXNlRm9ybSIsImNyZWF0ZUFwcG9pbnRtZW50IiwidXNlVXNlcklkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRBcHBvaW50bWVudHMiLCJEb2N0b3JBcHBvaW50bWVudCIsImlkIiwiaGFuZGxlU3VibWl0IiwidXNlcklkIiwiYXBwb2ludG1lbnRzIiwic2V0QXBwb2ludG1lbnRzIiwic2VsZWN0ZWRZZWFyIiwic2V0U2VsZWN0ZWRZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwic2VsZWN0ZWRNb250aCIsInNldFNlbGVjdGVkTW9udGgiLCJnZXRNb250aCIsImRhdGVzIiwic2V0RGF0ZXMiLCJ2aXNpYmxlRGF0ZXMiLCJzZXRWaXNpYmxlRGF0ZXMiLCJ2aXNpYmxlSW5kZXgiLCJzZXRWaXNpYmxlSW5kZXgiLCJ0aW1lcyIsImZldGNoRGF0YSIsInByb2ZpbGVBcHBvaW50bWVudHMiLCJkYXlzSW5Nb250aCIsImdldERhdGUiLCJuZXdEYXRlcyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpIiwidG9TdHJpbmciLCJwYWRTdGFydCIsInNsaWNlIiwib25TdWJtaXQiLCJkYXRhIiwiaXNTbG90RnVsbCIsImRhdGUiLCJ0aW1lIiwic29tZSIsImFwcG9pbnRtZW50IiwiYXBwb2ludG1lbnREYXRlIiwiYXBwb2ludG1lbnRUaW1lIiwiaGFuZGxlUHJldkNsaWNrIiwicHJldkluZGV4IiwiTWF0aCIsIm1heCIsImhhbmRsZU5leHRDbGljayIsIm1pbiIsImRpdiIsImNsYXNzTmFtZSIsInNlbGVjdCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJvcHRpb24iLCJ0b0xvY2FsZVN0cmluZyIsIm1vbnRoIiwieWVhciIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwibWFwIiwidGJvZHkiLCJ0ZCIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/DoctorAppointment.tsx\n"));

/***/ })

});