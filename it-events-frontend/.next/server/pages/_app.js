(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": function() { return /* binding */ API_URL; },
/* harmony export */   "NEXT_URL": function() { return /* binding */ NEXT_URL; },
/* harmony export */   "PER_PAGE": function() { return /* binding */ PER_PAGE; }
/* harmony export */ });
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'; // export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
//36

const NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'; // 32

const PER_PAGE = 5; //32

/***/ }),

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthProvider": function() { return /* binding */ AuthProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/index */ "./config/index.js");

var _jsxFileName = "C:\\react\\next-strapi-itevents\\it-events-frontend\\context\\AuthContext.js";



const AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const AuthProvider = ({
  children
}) => {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => checkUserLoggedIn(), []); // Register User

  const register = async user => {
    const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__.NEXT_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const data = await res.json();
    console.log(data);

    if (res.ok) {
      setUser(data.user);
      router.push('/account/dashboard');
    } else {
      setError(data.message);
      setError(null);
    }
  }; // Login User


  const login = async ({
    email: identifier,
    password
  }) => {
    // console.log({ identifier, password });
    const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__.NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        identifier,
        password
      })
    });
    const data = await res.json();
    console.log(data);

    if (res.ok) {
      setUser(data.user);
      router.push('/account/dashboard');
    } else {
      setError(data.message);
      setError(null);
    }
  }; // Logout user


  const logout = async () => {
    // console.log('Logout')
    const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__.NEXT_URL}/api/logout`, {
      method: 'POST'
    });

    if (res.ok) {
      setUser(null);
      router.push('/');
    }
  }; // Check if user is logged in


  const checkUserLoggedIn = async user => {
    // console.log('Check')
    // const res = await fetch(`http://localhost:3000/api/user`)
    const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__.NEXT_URL}/api/user`);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {
    value: {
      user,
      error,
      register,
      login,
      logout
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (AuthContext);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\react\\next-strapi-itevents\\it-events-frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kai1ldmVudHMtZnJvbnRlbmQvLi9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGotZXZlbnRzLWZyb250ZW5kLy4vY29udGV4dC9BdXRoQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9kai1ldmVudHMtZnJvbnRlbmQvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2RqLWV2ZW50cy1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZGotZXZlbnRzLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9kai1ldmVudHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJORVhUX1VSTCIsIk5FWFRfUFVCTElDX0ZST05URU5EX1VSTCIsIlBFUl9QQUdFIiwiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImNoZWNrVXNlckxvZ2dlZEluIiwicmVnaXN0ZXIiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm9rIiwicHVzaCIsIm1lc3NhZ2UiLCJsb2dpbiIsImVtYWlsIiwiaWRlbnRpZmllciIsInBhc3N3b3JkIiwibG9nb3V0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBWixJQUFt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c3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNydcclxuLy8gZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnXHJcblxyXG4vLzM2XHJcbmV4cG9ydCBjb25zdCBORVhUX1VSTCA9XHJcbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRlJPTlRFTkRfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnXHJcblxyXG4vLyAzMlxyXG5leHBvcnQgY29uc3QgUEVSX1BBR0UgPSA1ICAvLzMyXHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5FWFRfVVJMIH0gZnJvbSBcIkAvY29uZmlnL2luZGV4XCI7XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcblxyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICB1c2VFZmZlY3QoKCk9PmNoZWNrVXNlckxvZ2dlZEluKCksIFtdKVxyXG5cclxuICAvLyBSZWdpc3RlciBVc2VyXHJcbiAgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAodXNlcikgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9VUkx9L2FwaS9yZWdpc3RlcmAsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKSxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcblxyXG4gICAgaWYgKHJlcy5vaykge1xyXG4gICAgICBzZXRVc2VyKGRhdGEudXNlcilcclxuICAgICAgcm91dGVyLnB1c2goJy9hY2NvdW50L2Rhc2hib2FyZCcpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UpXHJcbiAgICAgIHNldEVycm9yKG51bGwpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gTG9naW4gVXNlclxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKHtlbWFpbDppZGVudGlmaWVyLCBwYXNzd29yZH0pID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHsgaWRlbnRpZmllciwgcGFzc3dvcmQgfSk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtORVhUX1VSTH0vYXBpL2xvZ2luYCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBpZGVudGlmaWVyLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9KSxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcblxyXG4gICAgaWYgKHJlcy5vaykge1xyXG4gICAgICBzZXRVc2VyKGRhdGEudXNlcilcclxuICAgICAgcm91dGVyLnB1c2goJy9hY2NvdW50L2Rhc2hib2FyZCcpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UpXHJcbiAgICAgIHNldEVycm9yKG51bGwpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBMb2dvdXQgdXNlclxyXG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdMb2dvdXQnKVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9VUkx9L2FwaS9sb2dvdXRgLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChyZXMub2spIHtcclxuICAgICAgc2V0VXNlcihudWxsKVxyXG4gICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBpZiB1c2VyIGlzIGxvZ2dlZCBpblxyXG4gIGNvbnN0IGNoZWNrVXNlckxvZ2dlZEluID0gYXN5bmMgKHVzZXIpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdDaGVjaycpXHJcbiAgIFxyXG4gICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlcmApXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtORVhUX1VSTH0vYXBpL3VzZXJgKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIGlmIChyZXMub2spIHtcclxuICAgICAgc2V0VXNlcihkYXRhLnVzZXIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRVc2VyKG51bGwpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsgeyB1c2VyLCBlcnJvciwgcmVnaXN0ZXIsIGxvZ2luLCBsb2dvdXQgfSB9PlxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dFxyXG4iLCJpbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICdAL2NvbnRleHQvQXV0aENvbnRleHQnXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0F1dGhQcm92aWRlcj5cbiAgKVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9