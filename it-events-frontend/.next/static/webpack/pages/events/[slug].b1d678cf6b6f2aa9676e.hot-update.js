self["webpackHotUpdate_N_E"]("pages/events/[slug]",{

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthProvider": function() { return /* binding */ AuthProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/index */ "./config/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\react\\next-strapi-itevents\\it-events-frontend\\context\\AuthContext.js",
    _this = undefined,
    _s = $RefreshSig$();




var AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)();
var AuthProvider = function AuthProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      error = _useState2[0],
      setError = _useState2[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    return checkUserLoggedIn();
  }, []); // Register User

  var register = /*#__PURE__*/function () {
    var _ref2 = (0,C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(user) {
      return C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function register(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // Login User


  var login = /*#__PURE__*/function () {
    var _ref4 = (0,C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(_ref3) {
      var identifier, password, res, data;
      return C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              identifier = _ref3.email, password = _ref3.password;
              _context2.next = 3;
              return fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_5__.NEXT_URL, "/api/login"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  identifier: identifier,
                  password: password
                })
              });

            case 3:
              res = _context2.sent;
              _context2.next = 6;
              return res.json();

            case 6:
              data = _context2.sent;
              console.log(data);

              if (res.ok) {
                setUser(data.user);
                router.push('/account/dashboard');
              } else {
                setError(data.message);
                setError(null);
              }

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function login(_x2) {
      return _ref4.apply(this, arguments);
    };
  }(); // Logout user


  var logout = /*#__PURE__*/function () {
    var _ref5 = (0,C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
      var res;
      return C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_5__.NEXT_URL, "/api/logout"), {
                method: 'POST'
              });

            case 2:
              res = _context3.sent;

              if (res.ok) {
                setUser(null);
                router;
              }

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function logout() {
      return _ref5.apply(this, arguments);
    };
  }(); // Check if user is logged in


  var checkUserLoggedIn = /*#__PURE__*/function () {
    var _ref6 = (0,C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(user) {
      var res, data;
      return C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_5__.NEXT_URL, "/api/user"));

            case 2:
              res = _context4.sent;
              _context4.next = 5;
              return res.json();

            case 5:
              data = _context4.sent;

              if (res.ok) {
                setUser(data.user);
              } else {
                setUser(null);
              }

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function checkUserLoggedIn(_x3) {
      return _ref6.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {
    value: {
      user: user,
      error: error,
      register: register,
      login: login,
      logout: logout
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, _this);
};

_s(AuthProvider, "YsCDDfjtsa03iRyjr2jNLxLWeXI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = AuthProvider;
/* harmony default export */ __webpack_exports__["default"] = (AuthContext);

var _c;

$RefreshReg$(_c, "AuthProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9BdXRoQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiY2hlY2tVc2VyTG9nZ2VkSW4iLCJyZWdpc3RlciIsImxvZ2luIiwiaWRlbnRpZmllciIsImVtYWlsIiwicGFzc3dvcmQiLCJmZXRjaCIsIk5FWFRfVVJMIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwib2siLCJwdXNoIiwibWVzc2FnZSIsImxvZ291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLGdCQUFHQyxvREFBYSxFQUFqQztBQUVPLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWdCO0FBQUE7O0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjOztBQUFBLGtCQUVsQkMsK0NBQVEsQ0FBQyxJQUFELENBRlU7QUFBQSxNQUVuQ0MsSUFGbUM7QUFBQSxNQUU3QkMsT0FGNkI7O0FBQUEsbUJBR2hCRiwrQ0FBUSxDQUFDLElBQUQsQ0FIUTtBQUFBLE1BR25DRyxLQUhtQztBQUFBLE1BRzVCQyxRQUg0Qjs7QUFLMUMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBQyxrREFBUyxDQUFDO0FBQUEsV0FBSUMsaUJBQWlCLEVBQXJCO0FBQUEsR0FBRCxFQUEwQixFQUExQixDQUFULENBUDBDLENBUzFDOztBQUNBLE1BQU1DLFFBQVE7QUFBQSxrVEFBRyxpQkFBT1IsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V2ZW50cy9bc2x1Z10uYjFkNjc4Y2Y2YjZmMmFhOTY3NmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5FWFRfVVJMIH0gZnJvbSBcIkAvY29uZmlnL2luZGV4XCI7XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcblxyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICB1c2VFZmZlY3QoKCk9PmNoZWNrVXNlckxvZ2dlZEluKCksIFtdKVxyXG5cclxuICAvLyBSZWdpc3RlciBVc2VyXHJcbiAgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAodXNlcikgPT4ge1xyXG4gIH1cclxuXHJcbiAgLy8gTG9naW4gVXNlclxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKHtlbWFpbDppZGVudGlmaWVyLCBwYXNzd29yZH0pID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHsgaWRlbnRpZmllciwgcGFzc3dvcmQgfSk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtORVhUX1VSTH0vYXBpL2xvZ2luYCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBpZGVudGlmaWVyLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9KSxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcblxyXG4gICAgaWYgKHJlcy5vaykge1xyXG4gICAgICBzZXRVc2VyKGRhdGEudXNlcilcclxuICAgICAgcm91dGVyLnB1c2goJy9hY2NvdW50L2Rhc2hib2FyZCcpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UpXHJcbiAgICAgIHNldEVycm9yKG51bGwpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBMb2dvdXQgdXNlclxyXG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdMb2dvdXQnKVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9VUkx9L2FwaS9sb2dvdXRgLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChyZXMub2spIHtcclxuICAgICAgc2V0VXNlcihudWxsKVxyXG4gICAgICByb3V0ZXJcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBpZiB1c2VyIGlzIGxvZ2dlZCBpblxyXG4gIGNvbnN0IGNoZWNrVXNlckxvZ2dlZEluID0gYXN5bmMgKHVzZXIpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdDaGVjaycpXHJcbiAgIFxyXG4gICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlcmApXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtORVhUX1VSTH0vYXBpL3VzZXJgKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIGlmIChyZXMub2spIHtcclxuICAgICAgc2V0VXNlcihkYXRhLnVzZXIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRVc2VyKG51bGwpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsgeyB1c2VyLCBlcnJvciwgcmVnaXN0ZXIsIGxvZ2luLCBsb2dvdXQgfSB9PlxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dFxyXG4iXSwic291cmNlUm9vdCI6IiJ9