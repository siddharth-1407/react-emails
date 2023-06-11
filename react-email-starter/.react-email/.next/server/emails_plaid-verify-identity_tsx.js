"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "emails_plaid-verify-identity_tsx";
exports.ids = ["emails_plaid-verify-identity_tsx"];
exports.modules = {

/***/ "./emails/plaid-verify-identity.tsx":
/*!******************************************!*\
  !*** ./emails/plaid-verify-identity.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PlaidVerifyIdentityEmail\": () => (/* binding */ PlaidVerifyIdentityEmail),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-email/components */ \"@react-email/components\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_email_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : \"\";\nconst PlaidVerifyIdentityEmail = ({ validationCode =\"144833\"  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {\n                fileName: \"D:\\\\VS Code\\\\React emails\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Body, {\n                style: main,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Container, {\n                        style: container,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Img, {\n                                src: `${baseUrl}/static/plaid-logo.png`,\n                                width: \"212\",\n                                height: \"88\",\n                                alt: \"Plaid\",\n                                style: logo\n                            }, void 0, false, {\n                                fileName: \"D:\\\\VS Code\\\\React emails\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: tertiary,\n                                children: \"Verify Your Identity\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\VS Code\\\\React emails\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                                style: secondary,\n                                children: \"Enter the following code to finish linking Venmo.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\VS Code\\\\React emails\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Section, {\n                                style: codeContainer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                    style: code,\n                                    children: validationCode\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\VS Code\\\\React emails\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\VS Code\\\\React emails\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: paragraph,\n                                children: \"Not expecting this email?\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\VS Code\\\\React emails\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: paragraph,\n                                children: [\n                                    \"Contact\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                        href: \"mailto:login@plaid.com\",\n                                        style: link,\n                                        children: \"login@plaid.com\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\VS Code\\\\React emails\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    \" \",\n                                    \"if you did not request this code.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\VS Code\\\\React emails\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\VS Code\\\\React emails\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        style: footer,\n                        children: \"Securely powered by Plaid.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\VS Code\\\\React emails\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\VS Code\\\\React emails\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                lineNumber: 27,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\VS Code\\\\React emails\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaidVerifyIdentityEmail);\nconst main = {\n    backgroundColor: \"#ffffff\",\n    fontFamily: \"HelveticaNeue,Helvetica,Arial,sans-serif\"\n};\nconst container = {\n    backgroundColor: \"#ffffff\",\n    border: \"1px solid #eee\",\n    borderRadius: \"5px\",\n    boxShadow: \"0 5px 10px rgba(20,50,70,.2)\",\n    marginTop: \"20px\",\n    width: \"360px\",\n    margin: \"0 auto\",\n    padding: \"68px 0 130px\"\n};\nconst logo = {\n    margin: \"0 auto\"\n};\nconst tertiary = {\n    color: \"#0a85ea\",\n    fontSize: \"11px\",\n    fontWeight: 700,\n    fontFamily: \"HelveticaNeue,Helvetica,Arial,sans-serif\",\n    height: \"16px\",\n    letterSpacing: \"0\",\n    lineHeight: \"16px\",\n    margin: \"16px 8px 8px 8px\",\n    textTransform: \"uppercase\",\n    textAlign: \"center\"\n};\nconst secondary = {\n    color: \"#000\",\n    display: \"inline-block\",\n    fontFamily: \"HelveticaNeue-Medium,Helvetica,Arial,sans-serif\",\n    fontSize: \"20px\",\n    fontWeight: 500,\n    lineHeight: \"24px\",\n    marginBottom: \"0\",\n    marginTop: \"0\",\n    textAlign: \"center\"\n};\nconst codeContainer = {\n    background: \"rgba(0,0,0,.05)\",\n    borderRadius: \"4px\",\n    margin: \"16px auto 14px\",\n    verticalAlign: \"middle\",\n    width: \"280px\"\n};\nconst code = {\n    color: \"#000\",\n    display: \"inline-block\",\n    fontFamily: \"HelveticaNeue-Bold\",\n    fontSize: \"32px\",\n    fontWeight: 700,\n    letterSpacing: \"6px\",\n    lineHeight: \"40px\",\n    paddingBottom: \"8px\",\n    paddingTop: \"8px\",\n    margin: \"0 auto\",\n    width: \"100%\",\n    textAlign: \"center\"\n};\nconst paragraph = {\n    color: \"#444\",\n    fontSize: \"15px\",\n    fontFamily: \"HelveticaNeue,Helvetica,Arial,sans-serif\",\n    letterSpacing: \"0\",\n    lineHeight: \"23px\",\n    padding: \"0 40px\",\n    margin: \"0\",\n    textAlign: \"center\"\n};\nconst link = {\n    color: \"#444\",\n    textDecoration: \"underline\"\n};\nconst footer = {\n    color: \"#000\",\n    fontSize: \"12px\",\n    fontWeight: 800,\n    letterSpacing: \"0\",\n    lineHeight: \"23px\",\n    margin: \"0\",\n    marginTop: \"20px\",\n    fontFamily: \"HelveticaNeue,Helvetica,Arial,sans-serif\",\n    textAlign: \"center\",\n    textTransform: \"uppercase\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lbWFpbHMvcGxhaWQtdmVyaWZ5LWlkZW50aXR5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFVaUM7QUFDRjtBQU0vQixNQUFNVSxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLFVBQVUsR0FDbEMsQ0FBQyxRQUFRLEVBQUVGLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDLENBQUMsR0FDbkMsRUFBRTtBQUVDLE1BQU1DLDJCQUEyQixDQUFDLEVBQ3ZDQyxnQkFBaUIsU0FBUSxFQUNLLGlCQUM5Qiw4REFBQ1gseURBQUlBOzswQkFDSCw4REFBQ0YseURBQUlBOzs7OzswQkFDTCw4REFBQ0YseURBQUlBO2dCQUFDZ0IsT0FBT0M7O2tDQUNYLDhEQUFDaEIsOERBQVNBO3dCQUFDZSxPQUFPRTs7MENBQ2hCLDhEQUFDYix3REFBR0E7Z0NBQ0ZjLEtBQUssQ0FBQyxFQUFFVCxRQUFRLHNCQUFzQixDQUFDO2dDQUN2Q1UsT0FBTTtnQ0FDTkMsUUFBTztnQ0FDUEMsS0FBSTtnQ0FDSk4sT0FBT087Ozs7OzswQ0FFVCw4REFBQ2YseURBQUlBO2dDQUFDUSxPQUFPUTswQ0FBVTs7Ozs7OzBDQUN2Qiw4REFBQ3JCLDREQUFPQTtnQ0FBQ2EsT0FBT1M7MENBQVc7Ozs7OzswQ0FHM0IsOERBQUNsQiw0REFBT0E7Z0NBQUNTLE9BQU9VOzBDQUNkLDRFQUFDbEIseURBQUlBO29DQUFDUSxPQUFPVzs4Q0FBT1o7Ozs7Ozs7Ozs7OzBDQUV0Qiw4REFBQ1AseURBQUlBO2dDQUFDUSxPQUFPWTswQ0FBVzs7Ozs7OzBDQUN4Qiw4REFBQ3BCLHlEQUFJQTtnQ0FBQ1EsT0FBT1k7O29DQUFXO29DQUNkO2tEQUNSLDhEQUFDdEIseURBQUlBO3dDQUFDdUIsTUFBSzt3Q0FBeUJiLE9BQU9jO2tEQUFNOzs7Ozs7b0NBRXpDO29DQUFJOzs7Ozs7Ozs7Ozs7O2tDQUloQiw4REFBQ3RCLHlEQUFJQTt3QkFBQ1EsT0FBT2U7a0NBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQUd6QjtBQUVGLGlFQUFlakIsd0JBQXdCQSxFQUFDO0FBRXhDLE1BQU1HLE9BQU87SUFDWGUsaUJBQWlCO0lBQ2pCQyxZQUFZO0FBQ2Q7QUFFQSxNQUFNZixZQUFZO0lBQ2hCYyxpQkFBaUI7SUFDakJFLFFBQVE7SUFDUkMsY0FBYztJQUNkQyxXQUFXO0lBQ1hDLFdBQVc7SUFDWGpCLE9BQU87SUFDUGtCLFFBQVE7SUFDUkMsU0FBUztBQUNYO0FBRUEsTUFBTWhCLE9BQU87SUFDWGUsUUFBUTtBQUNWO0FBRUEsTUFBTWQsV0FBVztJQUNmZ0IsT0FBTztJQUNQQyxVQUFVO0lBQ1ZDLFlBQVk7SUFDWlQsWUFBWTtJQUNaWixRQUFRO0lBQ1JzQixlQUFlO0lBQ2ZDLFlBQVk7SUFDWk4sUUFBUTtJQUNSTyxlQUFlO0lBQ2ZDLFdBQVc7QUFDYjtBQUVBLE1BQU1yQixZQUFZO0lBQ2hCZSxPQUFPO0lBQ1BPLFNBQVM7SUFDVGQsWUFBWTtJQUNaUSxVQUFVO0lBQ1ZDLFlBQVk7SUFDWkUsWUFBWTtJQUNaSSxjQUFjO0lBQ2RYLFdBQVc7SUFDWFMsV0FBVztBQUNiO0FBRUEsTUFBTXBCLGdCQUFnQjtJQUNwQnVCLFlBQVk7SUFDWmQsY0FBYztJQUNkRyxRQUFRO0lBQ1JZLGVBQWU7SUFDZjlCLE9BQU87QUFDVDtBQUVBLE1BQU1PLE9BQU87SUFDWGEsT0FBTztJQUNQTyxTQUFTO0lBQ1RkLFlBQVk7SUFDWlEsVUFBVTtJQUNWQyxZQUFZO0lBQ1pDLGVBQWU7SUFDZkMsWUFBWTtJQUNaTyxlQUFlO0lBQ2ZDLFlBQVk7SUFDWmQsUUFBUTtJQUNSbEIsT0FBTztJQUNQMEIsV0FBVztBQUNiO0FBRUEsTUFBTWxCLFlBQVk7SUFDaEJZLE9BQU87SUFDUEMsVUFBVTtJQUNWUixZQUFZO0lBQ1pVLGVBQWU7SUFDZkMsWUFBWTtJQUNaTCxTQUFTO0lBQ1RELFFBQVE7SUFDUlEsV0FBVztBQUNiO0FBRUEsTUFBTWhCLE9BQU87SUFDWFUsT0FBTztJQUNQYSxnQkFBZ0I7QUFDbEI7QUFFQSxNQUFNdEIsU0FBUztJQUNiUyxPQUFPO0lBQ1BDLFVBQVU7SUFDVkMsWUFBWTtJQUNaQyxlQUFlO0lBQ2ZDLFlBQVk7SUFDWk4sUUFBUTtJQUNSRCxXQUFXO0lBQ1hKLFlBQVk7SUFDWmEsV0FBVztJQUNYRCxlQUFlO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtZW1haWwtY2xpZW50Ly4vZW1haWxzL3BsYWlkLXZlcmlmeS1pZGVudGl0eS50c3g/M2I0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb2R5LFxuICBDb250YWluZXIsXG4gIEhlYWQsXG4gIEhlYWRpbmcsXG4gIEh0bWwsXG4gIEltZyxcbiAgTGluayxcbiAgU2VjdGlvbixcbiAgVGV4dCxcbn0gZnJvbSAnQHJlYWN0LWVtYWlsL2NvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgUGxhaWRWZXJpZnlJZGVudGl0eUVtYWlsUHJvcHMge1xuICB2YWxpZGF0aW9uQ29kZT86IHN0cmluZztcbn1cblxuY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52LlZFUkNFTF9VUkxcbiAgPyBgaHR0cHM6Ly8ke3Byb2Nlc3MuZW52LlZFUkNFTF9VUkx9YFxuICA6ICcnO1xuXG5leHBvcnQgY29uc3QgUGxhaWRWZXJpZnlJZGVudGl0eUVtYWlsID0gKHtcbiAgdmFsaWRhdGlvbkNvZGUgPSAnMTQ0ODMzJyxcbn06IFBsYWlkVmVyaWZ5SWRlbnRpdHlFbWFpbFByb3BzKSA9PiAoXG4gIDxIdG1sPlxuICAgIDxIZWFkIC8+XG4gICAgPEJvZHkgc3R5bGU9e21haW59PlxuICAgICAgPENvbnRhaW5lciBzdHlsZT17Y29udGFpbmVyfT5cbiAgICAgICAgPEltZ1xuICAgICAgICAgIHNyYz17YCR7YmFzZVVybH0vc3RhdGljL3BsYWlkLWxvZ28ucG5nYH1cbiAgICAgICAgICB3aWR0aD1cIjIxMlwiXG4gICAgICAgICAgaGVpZ2h0PVwiODhcIlxuICAgICAgICAgIGFsdD1cIlBsYWlkXCJcbiAgICAgICAgICBzdHlsZT17bG9nb31cbiAgICAgICAgLz5cbiAgICAgICAgPFRleHQgc3R5bGU9e3RlcnRpYXJ5fT5WZXJpZnkgWW91ciBJZGVudGl0eTwvVGV4dD5cbiAgICAgICAgPEhlYWRpbmcgc3R5bGU9e3NlY29uZGFyeX0+XG4gICAgICAgICAgRW50ZXIgdGhlIGZvbGxvd2luZyBjb2RlIHRvIGZpbmlzaCBsaW5raW5nIFZlbm1vLlxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgIDxTZWN0aW9uIHN0eWxlPXtjb2RlQ29udGFpbmVyfT5cbiAgICAgICAgICA8VGV4dCBzdHlsZT17Y29kZX0+e3ZhbGlkYXRpb25Db2RlfTwvVGV4dD5cbiAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICA8VGV4dCBzdHlsZT17cGFyYWdyYXBofT5Ob3QgZXhwZWN0aW5nIHRoaXMgZW1haWw/PC9UZXh0PlxuICAgICAgICA8VGV4dCBzdHlsZT17cGFyYWdyYXBofT5cbiAgICAgICAgICBDb250YWN0eycgJ31cbiAgICAgICAgICA8TGluayBocmVmPVwibWFpbHRvOmxvZ2luQHBsYWlkLmNvbVwiIHN0eWxlPXtsaW5rfT5cbiAgICAgICAgICAgIGxvZ2luQHBsYWlkLmNvbVxuICAgICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICAgIGlmIHlvdSBkaWQgbm90IHJlcXVlc3QgdGhpcyBjb2RlLlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxUZXh0IHN0eWxlPXtmb290ZXJ9PlNlY3VyZWx5IHBvd2VyZWQgYnkgUGxhaWQuPC9UZXh0PlxuICAgIDwvQm9keT5cbiAgPC9IdG1sPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUGxhaWRWZXJpZnlJZGVudGl0eUVtYWlsO1xuXG5jb25zdCBtYWluID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgZm9udEZhbWlseTogJ0hlbHZldGljYU5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYnLFxufTtcblxuY29uc3QgY29udGFpbmVyID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICNlZWUnLFxuICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICBib3hTaGFkb3c6ICcwIDVweCAxMHB4IHJnYmEoMjAsNTAsNzAsLjIpJyxcbiAgbWFyZ2luVG9wOiAnMjBweCcsXG4gIHdpZHRoOiAnMzYwcHgnLFxuICBtYXJnaW46ICcwIGF1dG8nLFxuICBwYWRkaW5nOiAnNjhweCAwIDEzMHB4Jyxcbn07XG5cbmNvbnN0IGxvZ28gPSB7XG4gIG1hcmdpbjogJzAgYXV0bycsXG59O1xuXG5jb25zdCB0ZXJ0aWFyeSA9IHtcbiAgY29sb3I6ICcjMGE4NWVhJyxcbiAgZm9udFNpemU6ICcxMXB4JyxcbiAgZm9udFdlaWdodDogNzAwLFxuICBmb250RmFtaWx5OiAnSGVsdmV0aWNhTmV1ZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZicsXG4gIGhlaWdodDogJzE2cHgnLFxuICBsZXR0ZXJTcGFjaW5nOiAnMCcsXG4gIGxpbmVIZWlnaHQ6ICcxNnB4JyxcbiAgbWFyZ2luOiAnMTZweCA4cHggOHB4IDhweCcsXG4gIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnIGFzIGNvbnN0LFxuICB0ZXh0QWxpZ246ICdjZW50ZXInIGFzIGNvbnN0LFxufTtcblxuY29uc3Qgc2Vjb25kYXJ5ID0ge1xuICBjb2xvcjogJyMwMDAnLFxuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgZm9udEZhbWlseTogJ0hlbHZldGljYU5ldWUtTWVkaXVtLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmJyxcbiAgZm9udFNpemU6ICcyMHB4JyxcbiAgZm9udFdlaWdodDogNTAwLFxuICBsaW5lSGVpZ2h0OiAnMjRweCcsXG4gIG1hcmdpbkJvdHRvbTogJzAnLFxuICBtYXJnaW5Ub3A6ICcwJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyBhcyBjb25zdCxcbn07XG5cbmNvbnN0IGNvZGVDb250YWluZXIgPSB7XG4gIGJhY2tncm91bmQ6ICdyZ2JhKDAsMCwwLC4wNSknLFxuICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICBtYXJnaW46ICcxNnB4IGF1dG8gMTRweCcsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICB3aWR0aDogJzI4MHB4Jyxcbn07XG5cbmNvbnN0IGNvZGUgPSB7XG4gIGNvbG9yOiAnIzAwMCcsXG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICBmb250RmFtaWx5OiAnSGVsdmV0aWNhTmV1ZS1Cb2xkJyxcbiAgZm9udFNpemU6ICczMnB4JyxcbiAgZm9udFdlaWdodDogNzAwLFxuICBsZXR0ZXJTcGFjaW5nOiAnNnB4JyxcbiAgbGluZUhlaWdodDogJzQwcHgnLFxuICBwYWRkaW5nQm90dG9tOiAnOHB4JyxcbiAgcGFkZGluZ1RvcDogJzhweCcsXG4gIG1hcmdpbjogJzAgYXV0bycsXG4gIHdpZHRoOiAnMTAwJScsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicgYXMgY29uc3QsXG59O1xuXG5jb25zdCBwYXJhZ3JhcGggPSB7XG4gIGNvbG9yOiAnIzQ0NCcsXG4gIGZvbnRTaXplOiAnMTVweCcsXG4gIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2FOZXVlLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmJyxcbiAgbGV0dGVyU3BhY2luZzogJzAnLFxuICBsaW5lSGVpZ2h0OiAnMjNweCcsXG4gIHBhZGRpbmc6ICcwIDQwcHgnLFxuICBtYXJnaW46ICcwJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyBhcyBjb25zdCxcbn07XG5cbmNvbnN0IGxpbmsgPSB7XG4gIGNvbG9yOiAnIzQ0NCcsXG4gIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcbn07XG5cbmNvbnN0IGZvb3RlciA9IHtcbiAgY29sb3I6ICcjMDAwJyxcbiAgZm9udFNpemU6ICcxMnB4JyxcbiAgZm9udFdlaWdodDogODAwLFxuICBsZXR0ZXJTcGFjaW5nOiAnMCcsXG4gIGxpbmVIZWlnaHQ6ICcyM3B4JyxcbiAgbWFyZ2luOiAnMCcsXG4gIG1hcmdpblRvcDogJzIwcHgnLFxuICBmb250RmFtaWx5OiAnSGVsdmV0aWNhTmV1ZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZicsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicgYXMgY29uc3QsXG4gIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnIGFzIGNvbnN0LFxufTtcbiJdLCJuYW1lcyI6WyJCb2R5IiwiQ29udGFpbmVyIiwiSGVhZCIsIkhlYWRpbmciLCJIdG1sIiwiSW1nIiwiTGluayIsIlNlY3Rpb24iLCJUZXh0IiwiUmVhY3QiLCJiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIlZFUkNFTF9VUkwiLCJQbGFpZFZlcmlmeUlkZW50aXR5RW1haWwiLCJ2YWxpZGF0aW9uQ29kZSIsInN0eWxlIiwibWFpbiIsImNvbnRhaW5lciIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwibG9nbyIsInRlcnRpYXJ5Iiwic2Vjb25kYXJ5IiwiY29kZUNvbnRhaW5lciIsImNvZGUiLCJwYXJhZ3JhcGgiLCJocmVmIiwibGluayIsImZvb3RlciIsImJhY2tncm91bmRDb2xvciIsImZvbnRGYW1pbHkiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJtYXJnaW5Ub3AiLCJtYXJnaW4iLCJwYWRkaW5nIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwibGluZUhlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZCIsInZlcnRpY2FsQWxpZ24iLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1RvcCIsInRleHREZWNvcmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./emails/plaid-verify-identity.tsx\n");

/***/ })

};
;