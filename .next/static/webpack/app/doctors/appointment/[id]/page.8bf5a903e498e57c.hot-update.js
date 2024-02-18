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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DoctorAppointment: function() { return /* binding */ DoctorAppointment; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _actions_create_appointment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/create-appointment */ \"(app-pages-browser)/./src/actions/create-appointment.ts\");\n/* harmony import */ var _GetUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetUser */ \"(app-pages-browser)/./src/components/GetUser.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _actions_get_appointments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/get-appointments */ \"(app-pages-browser)/./src/actions/get-appointments.ts\");\n/* __next_internal_client_entry_do_not_use__ DoctorAppointment auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction DoctorAppointment(param) {\n    let { id } = param;\n    _s();\n    const { register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();\n    const userId = (0,_GetUser__WEBPACK_IMPORTED_MODULE_2__.useUserId)();\n    const [appointments, setAppointments] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [selectedYear, setSelectedYear] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(new Date().getFullYear());\n    const [selectedMonth, setSelectedMonth] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(new Date().getMonth() + 1); // JavaScript months are 0-indexed\n    const [dates, setDates] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const times = [\n        \"8:00\",\n        \"9:00\",\n        \"10:00\",\n        \"11:00\",\n        \"12:00\",\n        \"13:00\",\n        \"14:00\",\n        \"15:00\",\n        \"16:00\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const profileAppointments = await (0,_actions_get_appointments__WEBPACK_IMPORTED_MODULE_4__.getAppointments)(id);\n            setAppointments(profileAppointments);\n        };\n        fetchData();\n    }, [\n        id\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();\n        const newDates = Array.from({\n            length: daysInMonth\n        }, (_, i)=>\"\".concat(selectedYear, \"-\").concat(selectedMonth.toString().padStart(2, \"0\"), \"-\").concat((i + 1).toString().padStart(2, \"0\")));\n        setDates(newDates);\n    }, [\n        selectedMonth,\n        selectedYear\n    ]);\n    const onSubmit = handleSubmit(async (data)=>{\n        if (userId) {\n            await (0,_actions_create_appointment__WEBPACK_IMPORTED_MODULE_1__.createAppointment)(data, id, userId);\n        }\n    });\n    const isSlotFull = (date, time)=>{\n        return appointments.some((appointment)=>{\n            const appointmentDate = appointment.date;\n            const appointmentTime = appointment.time;\n            return appointmentDate === date && appointmentTime === time;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: selectedMonth,\n                        onChange: (e)=>setSelectedMonth(parseInt(e.target.value, 10)),\n                        children: Array.from({\n                            length: 12\n                        }, (_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: i + 1,\n                                children: new Date(0, i).toLocaleString(\"default\", {\n                                    month: \"long\"\n                                })\n                            }, i + 1, false, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: selectedYear,\n                        onChange: (e)=>setSelectedYear(parseInt(e.target.value, 10)),\n                        children: Array.from({\n                            length: 5\n                        }, (_, i)=>{\n                            const year = new Date().getFullYear() - 2 + i;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: year,\n                                children: year\n                            }, year, false, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Time\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 11\n                                }, this),\n                                dates.map((date)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"p-2\",\n                                        children: date\n                                    }, date, false, {\n                                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, this))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: times.map((time)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: time\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 13\n                                    }, this),\n                                    dates.map((date)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: isSlotFull(date, time) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"bg-red-200 rounded-xl p-2 text-red-800\",\n                                                children: \"Full\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 19\n                                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-lime-200 rounded-xl p-2\",\n                                                children: \"Free\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, date, false, {\n                                            fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 15\n                                        }, this))\n                                ]\n                            }, time, true, {\n                                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\PROJEKTY\\\\risko-master\\\\src\\\\components\\\\DoctorAppointment.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(DoctorAppointment, \"sAWoTndmQSUEUNGu3eTHWkrmNAI=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm,\n        _GetUser__WEBPACK_IMPORTED_MODULE_2__.useUserId\n    ];\n});\n_c = DoctorAppointment;\nvar _c;\n$RefreshReg$(_c, \"DoctorAppointment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RvY3RvckFwcG9pbnRtZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzBDO0FBQ3dCO0FBQzVCO0FBQ007QUFDa0I7QUFVdkQsU0FBU00sa0JBQWtCLEtBQXNCO1FBQXRCLEVBQUVDLEVBQUUsRUFBa0IsR0FBdEI7O0lBQ2hDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUUsR0FBR1Qsd0RBQU9BO0lBQzFDLE1BQU1VLFNBQVNSLG1EQUFTQTtJQUN4QixNQUFNLENBQUNTLGNBQWNDLGdCQUFnQixHQUFHUiwrQ0FBUUEsQ0FBUSxFQUFFO0lBQzFELE1BQU0sQ0FBQ1MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFTLElBQUlXLE9BQU9DLFdBQVc7SUFDL0UsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR2QsK0NBQVFBLENBQVMsSUFBSVcsT0FBT0ksUUFBUSxLQUFLLElBQUksa0NBQWtDO0lBQ3pILE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHakIsK0NBQVFBLENBQVcsRUFBRTtJQUUvQyxNQUFNa0IsUUFBUTtRQUFDO1FBQVE7UUFBUTtRQUFTO1FBQVM7UUFBUztRQUFTO1FBQVM7UUFBUztLQUFRO0lBRTdGbkIsZ0RBQVNBLENBQUM7UUFDUixNQUFNb0IsWUFBWTtZQUNoQixNQUFNQyxzQkFBc0IsTUFBTW5CLDBFQUFlQSxDQUFDRTtZQUNsREssZ0JBQWdCWTtRQUNsQjtRQUVBRDtJQUNGLEdBQUc7UUFBQ2hCO0tBQUc7SUFFUEosZ0RBQVNBLENBQUM7UUFDUixNQUFNc0IsY0FBYyxJQUFJVixLQUFLRixjQUFjSSxlQUFlLEdBQUdTLE9BQU87UUFDcEUsTUFBTUMsV0FBV0MsTUFBTUMsSUFBSSxDQUFDO1lBQUVDLFFBQVFMO1FBQVksR0FBRyxDQUFDTSxHQUFHQyxJQUFNLEdBQW1CZixPQUFoQkosY0FBYSxLQUFnRCxPQUE3Q0ksY0FBY2dCLFFBQVEsR0FBR0MsUUFBUSxDQUFDLEdBQUcsTUFBSyxLQUF1QyxPQUFwQyxDQUFDRixJQUFJLEdBQUdDLFFBQVEsR0FBR0MsUUFBUSxDQUFDLEdBQUc7UUFDOUpiLFNBQVNNO0lBQ1gsR0FBRztRQUFDVjtRQUFlSjtLQUFhO0lBRWhDLE1BQU1zQixXQUFXMUIsYUFBYSxPQUFPMkI7UUFDbkMsSUFBSTFCLFFBQVE7WUFDVixNQUFNVCw4RUFBaUJBLENBQUNtQyxNQUFNN0IsSUFBSUc7UUFDcEM7SUFDRjtJQUVBLE1BQU0yQixhQUFhLENBQUNDLE1BQWNDO1FBQ2hDLE9BQU81QixhQUFhNkIsSUFBSSxDQUFDQyxDQUFBQTtZQUN2QixNQUFNQyxrQkFBa0JELFlBQVlILElBQUk7WUFDeEMsTUFBTUssa0JBQWtCRixZQUFZRixJQUFJO1lBQ3hDLE9BQU9HLG9CQUFvQkosUUFBUUssb0JBQW9CSjtRQUN6RDtJQUNGO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDSzs7a0NBQ0MsOERBQUNDO3dCQUFPQyxPQUFPN0I7d0JBQWU4QixVQUFVQyxDQUFBQSxJQUFLOUIsaUJBQWlCK0IsU0FBU0QsRUFBRUUsTUFBTSxDQUFDSixLQUFLLEVBQUU7a0NBQ3BGbEIsTUFBTUMsSUFBSSxDQUFDOzRCQUFFQyxRQUFRO3dCQUFHLEdBQUcsQ0FBQ0MsR0FBR0Msa0JBQzlCLDhEQUFDbUI7Z0NBQW1CTCxPQUFPZCxJQUFJOzBDQUM1QixJQUFJakIsS0FBSyxHQUFHaUIsR0FBR29CLGNBQWMsQ0FBQyxXQUFXO29DQUFFQyxPQUFPO2dDQUFPOytCQUQvQ3JCLElBQUk7Ozs7Ozs7Ozs7a0NBS3JCLDhEQUFDYTt3QkFBT0MsT0FBT2pDO3dCQUFja0MsVUFBVUMsQ0FBQUEsSUFBS2xDLGdCQUFnQm1DLFNBQVNELEVBQUVFLE1BQU0sQ0FBQ0osS0FBSyxFQUFFO2tDQUNsRmxCLE1BQU1DLElBQUksQ0FBQzs0QkFBRUMsUUFBUTt3QkFBRSxHQUFHLENBQUNDLEdBQUdDOzRCQUM3QixNQUFNc0IsT0FBTyxJQUFJdkMsT0FBT0MsV0FBVyxLQUFLLElBQUlnQjs0QkFDNUMscUJBQ0UsOERBQUNtQjtnQ0FBa0JMLE9BQU9ROzBDQUN2QkE7K0JBRFVBOzs7Ozt3QkFJakI7Ozs7Ozs7Ozs7OzswQkFHSiw4REFBQ0M7O2tDQUNELDhEQUFDQztrQ0FDQyw0RUFBQ0M7OzhDQUNDLDhEQUFDQzs4Q0FBRzs7Ozs7O2dDQUNIdEMsTUFBTXVDLEdBQUcsQ0FBQ3JCLENBQUFBLHFCQUNULDhEQUFDb0I7d0NBQWNFLFdBQVU7a0RBQU90Qjt1Q0FBdkJBOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUlmLDhEQUFDdUI7a0NBQ0V2QyxNQUFNcUMsR0FBRyxDQUFDcEIsQ0FBQUEscUJBQ1QsOERBQUNrQjs7a0RBQ0MsOERBQUNLO2tEQUFJdkI7Ozs7OztvQ0FDSm5CLE1BQU11QyxHQUFHLENBQUNyQixDQUFBQSxxQkFDVCw4REFBQ3dCO3NEQUNFekIsV0FBV0MsTUFBTUMsc0JBQ2hCLDhEQUFDd0I7Z0RBQUtILFdBQVU7MERBQXlDOzs7OztxRUFFekQsOERBQUNJO2dEQUFPSixXQUFVOzBEQUE2Qjs7Ozs7OzJDQUoxQ3RCOzs7Ozs7K0JBSEpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQm5CO0dBeEZnQmpDOztRQUNxQk4sb0RBQU9BO1FBQzNCRSwrQ0FBU0E7OztLQUZWSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Eb2N0b3JBcHBvaW50bWVudC50c3g/ZjMyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHsgY3JlYXRlQXBwb2ludG1lbnQgfSBmcm9tICcuLi9hY3Rpb25zL2NyZWF0ZS1hcHBvaW50bWVudCc7XHJcbmltcG9ydCB7IHVzZVVzZXJJZCB9IGZyb20gJy4vR2V0VXNlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldEFwcG9pbnRtZW50cyB9IGZyb20gJy4uL2FjdGlvbnMvZ2V0LWFwcG9pbnRtZW50cyc7XHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tICdhdXRvcHJlZml4ZXInO1xyXG5cclxudHlwZSBGb3JtRGF0YSA9IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGFzdG5hbWU6IHN0cmluZztcclxuICBkYXRlOiBzdHJpbmc7XHJcbiAgdGltZTogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERvY3RvckFwcG9pbnRtZW50KHsgaWQgfTogeyBpZDogc3RyaW5nIH0pIHtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm08Rm9ybURhdGE+KCk7XHJcbiAgY29uc3QgdXNlcklkID0gdXNlVXNlcklkKCk7XHJcbiAgY29uc3QgW2FwcG9pbnRtZW50cywgc2V0QXBwb2ludG1lbnRzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkWWVhciwgc2V0U2VsZWN0ZWRZZWFyXSA9IHVzZVN0YXRlPG51bWJlcj4obmV3IERhdGUoKS5nZXRGdWxsWWVhcigpKTtcclxuICBjb25zdCBbc2VsZWN0ZWRNb250aCwgc2V0U2VsZWN0ZWRNb250aF0gPSB1c2VTdGF0ZTxudW1iZXI+KG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDEpOyAvLyBKYXZhU2NyaXB0IG1vbnRocyBhcmUgMC1pbmRleGVkXHJcbiAgY29uc3QgW2RhdGVzLCBzZXREYXRlc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xyXG5cclxuICBjb25zdCB0aW1lcyA9IFsnODowMCcsICc5OjAwJywgJzEwOjAwJywgJzExOjAwJywgJzEyOjAwJywgJzEzOjAwJywgJzE0OjAwJywgJzE1OjAwJywgJzE2OjAwJ107XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2ZpbGVBcHBvaW50bWVudHMgPSBhd2FpdCBnZXRBcHBvaW50bWVudHMoaWQpO1xyXG4gICAgICBzZXRBcHBvaW50bWVudHMocHJvZmlsZUFwcG9pbnRtZW50cyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtpZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF5c0luTW9udGggPSBuZXcgRGF0ZShzZWxlY3RlZFllYXIsIHNlbGVjdGVkTW9udGgsIDApLmdldERhdGUoKTtcclxuICAgIGNvbnN0IG5ld0RhdGVzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogZGF5c0luTW9udGggfSwgKF8sIGkpID0+IGAke3NlbGVjdGVkWWVhcn0tJHtzZWxlY3RlZE1vbnRoLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX0tJHsoaSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gKTtcclxuICAgIHNldERhdGVzKG5ld0RhdGVzKTtcclxuICB9LCBbc2VsZWN0ZWRNb250aCwgc2VsZWN0ZWRZZWFyXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gaGFuZGxlU3VibWl0KGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICBpZiAodXNlcklkKSB7XHJcbiAgICAgIGF3YWl0IGNyZWF0ZUFwcG9pbnRtZW50KGRhdGEsIGlkLCB1c2VySWQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBpc1Nsb3RGdWxsID0gKGRhdGU6IHN0cmluZywgdGltZTogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gYXBwb2ludG1lbnRzLnNvbWUoYXBwb2ludG1lbnQgPT4ge1xyXG4gICAgICBjb25zdCBhcHBvaW50bWVudERhdGUgPSBhcHBvaW50bWVudC5kYXRlO1xyXG4gICAgICBjb25zdCBhcHBvaW50bWVudFRpbWUgPSBhcHBvaW50bWVudC50aW1lO1xyXG4gICAgICByZXR1cm4gYXBwb2ludG1lbnREYXRlID09PSBkYXRlICYmIGFwcG9pbnRtZW50VGltZSA9PT0gdGltZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e3NlbGVjdGVkTW9udGh9IG9uQ2hhbmdlPXtlID0+IHNldFNlbGVjdGVkTW9udGgocGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKSl9PlxyXG4gICAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IDEyIH0sIChfLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpICsgMX0gdmFsdWU9e2kgKyAxfT5cclxuICAgICAgICAgICAgICB7bmV3IERhdGUoMCwgaSkudG9Mb2NhbGVTdHJpbmcoJ2RlZmF1bHQnLCB7IG1vbnRoOiAnbG9uZycgfSl9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17c2VsZWN0ZWRZZWFyfSBvbkNoYW5nZT17ZSA9PiBzZXRTZWxlY3RlZFllYXIocGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKSl9PlxyXG4gICAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKF8sIGkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDIgKyBpO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXt5ZWFyfSB2YWx1ZT17eWVhcn0+XHJcbiAgICAgICAgICAgICAgICB7eWVhcn1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHRhYmxlPlxyXG4gICAgICA8dGhlYWQ+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRoPlRpbWU8L3RoPlxyXG4gICAgICAgICAge2RhdGVzLm1hcChkYXRlID0+IChcclxuICAgICAgICAgICAgPHRoIGtleT17ZGF0ZX0gY2xhc3NOYW1lPSdwLTInPntkYXRlfTwvdGg+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3RoZWFkPlxyXG4gICAgICA8dGJvZHk+XHJcbiAgICAgICAge3RpbWVzLm1hcCh0aW1lID0+IChcclxuICAgICAgICAgIDx0ciBrZXk9e3RpbWV9PlxyXG4gICAgICAgICAgICA8dGQ+e3RpbWV9PC90ZD5cclxuICAgICAgICAgICAge2RhdGVzLm1hcChkYXRlID0+IChcclxuICAgICAgICAgICAgICA8dGQga2V5PXtkYXRlfT5cclxuICAgICAgICAgICAgICAgIHtpc1Nsb3RGdWxsKGRhdGUsIHRpbWUpID8gKFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2JnLXJlZC0yMDAgcm91bmRlZC14bCBwLTIgdGV4dC1yZWQtODAwJz5GdWxsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLWxpbWUtMjAwIHJvdW5kZWQteGwgcC0yJz5GcmVlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICApKX1cclxuICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiAgIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJjcmVhdGVBcHBvaW50bWVudCIsInVzZVVzZXJJZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0QXBwb2ludG1lbnRzIiwiRG9jdG9yQXBwb2ludG1lbnQiLCJpZCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwidXNlcklkIiwiYXBwb2ludG1lbnRzIiwic2V0QXBwb2ludG1lbnRzIiwic2VsZWN0ZWRZZWFyIiwic2V0U2VsZWN0ZWRZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwic2VsZWN0ZWRNb250aCIsInNldFNlbGVjdGVkTW9udGgiLCJnZXRNb250aCIsImRhdGVzIiwic2V0RGF0ZXMiLCJ0aW1lcyIsImZldGNoRGF0YSIsInByb2ZpbGVBcHBvaW50bWVudHMiLCJkYXlzSW5Nb250aCIsImdldERhdGUiLCJuZXdEYXRlcyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm9uU3VibWl0IiwiZGF0YSIsImlzU2xvdEZ1bGwiLCJkYXRlIiwidGltZSIsInNvbWUiLCJhcHBvaW50bWVudCIsImFwcG9pbnRtZW50RGF0ZSIsImFwcG9pbnRtZW50VGltZSIsImRpdiIsInNlbGVjdCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJvcHRpb24iLCJ0b0xvY2FsZVN0cmluZyIsIm1vbnRoIiwieWVhciIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwibWFwIiwiY2xhc3NOYW1lIiwidGJvZHkiLCJ0ZCIsInNwYW4iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/DoctorAppointment.tsx\n"));

/***/ })

});