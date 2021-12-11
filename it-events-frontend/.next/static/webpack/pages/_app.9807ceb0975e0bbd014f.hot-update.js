self["webpackHotUpdate_N_E"]("pages/_app",{

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
      var res, data;
      return C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_5__.NEXT_URL, "/api/register"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify()
              });

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              data = _context.sent;
              console.log(data);

              if (res.ok) {
                setUser(data.user);
                router.push('/account/dashboard');
              } else {
                setError(data.message);
                setError(null);
              }

            case 8:
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
                router.push('/');
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
    lineNumber: 93,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9BdXRoQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiY2hlY2tVc2VyTG9nZ2VkSW4iLCJyZWdpc3RlciIsImZldGNoIiwiTkVYVF9VUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvayIsInB1c2giLCJtZXNzYWdlIiwibG9naW4iLCJpZGVudGlmaWVyIiwiZW1haWwiLCJwYXNzd29yZCIsImxvZ291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLGdCQUFHQyxvREFBYSxFQUFqQztBQUVPLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWdCO0FBQUE7O0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjOztBQUFBLGtCQUVsQkMsK0NBQVEsQ0FBQyxJQUFELENBRlU7QUFBQSxNQUVuQ0MsSUFGbUM7QUFBQSxNQUU3QkMsT0FGNkI7O0FBQUEsbUJBR2hCRiwrQ0FBUSxDQUFDLElBQUQsQ0FIUTtBQUFBLE1BR25DRyxLQUhtQztBQUFBLE1BRzVCQyxRQUg0Qjs7QUFLMUMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBQyxrREFBUyxDQUFDO0FBQUEsV0FBSUMsaUJBQWlCLEVBQXJCO0FBQUEsR0FBRCxFQUEwQixFQUExQixDQUFULENBUDBDLENBUzFDOztBQUNBLE1BQU1DLFFBQVE7QUFBQSxrVEFBRyxpQkFBT1IsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFBO0FBS2xCQyxrQkFMa0I7O0FBTXhCLGtCQUFJRixHQUFHLENBQUNLLEVBQVIsRUFBWTtBQUNWcEIsdUJBQU8sQ0FBQ2lCLElBQUksQ0FBQ2xCLElBQU4sQ0FBUDtBQUNELGVBRkQsTUFFTztBQUNMQyx1QkFBTyxDQUFDLElBQUQsQ0FBUDtBQUNEOztBQVZ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFqQk0saUJBQWlCO0FBQUE7QUFBQTtBQUFBLEtBQXZCOztBQWFBLHNCQUNFLDhEQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRztBQUFFUCxVQUFJLEVBQUpBLElBQUY7QUFBUUUsV0FBSyxFQUFMQSxLQUFSO0FBQWVNLGNBQVEsRUFBUkEsUUFBZjtBQUF5QmdCLFdBQUssRUFBTEEsS0FBekI7QUFBZ0NJLFlBQU0sRUFBTkE7QUFBaEMsS0FBOUI7QUFBQSxjQUNJOUI7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQTFGTTs7R0FBTUQsWTtVQUtJUSxrRDs7O0tBTEpSLFk7QUE0RmIsK0RBQWVGLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45ODA3Y2ViMDk3NWUwYmJkMDE0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTkVYVF9VUkwgfSBmcm9tIFwiQC9jb25maWcvaW5kZXhcIjtcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcclxuXHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+Y2hlY2tVc2VyTG9nZ2VkSW4oKSwgW10pXHJcblxyXG4gIC8vIFJlZ2lzdGVyIFVzZXJcclxuICBjb25zdCByZWdpc3RlciA9IGFzeW5jICh1c2VyKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtORVhUX1VSTH0vYXBpL3JlZ2lzdGVyYCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KCksXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG5cclxuICAgIGlmIChyZXMub2spIHtcclxuICAgICAgc2V0VXNlcihkYXRhLnVzZXIpXHJcbiAgICAgIHJvdXRlci5wdXNoKCcvYWNjb3VudC9kYXNoYm9hcmQnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3IoZGF0YS5tZXNzYWdlKVxyXG4gICAgICBzZXRFcnJvcihudWxsKVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8vIExvZ2luIFVzZXJcclxuICBjb25zdCBsb2dpbiA9IGFzeW5jICh7ZW1haWw6aWRlbnRpZmllciwgcGFzc3dvcmR9KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh7IGlkZW50aWZpZXIsIHBhc3N3b3JkIH0pO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9VUkx9L2FwaS9sb2dpbmAsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgaWRlbnRpZmllcixcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgfSksXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG5cclxuICAgIGlmIChyZXMub2spIHtcclxuICAgICAgc2V0VXNlcihkYXRhLnVzZXIpXHJcbiAgICAgIHJvdXRlci5wdXNoKCcvYWNjb3VudC9kYXNoYm9hcmQnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3IoZGF0YS5tZXNzYWdlKVxyXG4gICAgICBzZXRFcnJvcihudWxsKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gTG9nb3V0IHVzZXJcclxuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnTG9nb3V0JylcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke05FWFRfVVJMfS9hcGkvbG9nb3V0YCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gICAgfSlcclxuXHJcbiAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgIHNldFVzZXIobnVsbClcclxuICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgaWYgdXNlciBpcyBsb2dnZWQgaW5cclxuICBjb25zdCBjaGVja1VzZXJMb2dnZWRJbiA9IGFzeW5jICh1c2VyKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnQ2hlY2snKVxyXG4gICBcclxuICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXJgKVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9VUkx9L2FwaS91c2VyYClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgIHNldFVzZXIoZGF0YS51c2VyKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VXNlcihudWxsKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17IHsgdXNlciwgZXJyb3IsIHJlZ2lzdGVyLCBsb2dpbiwgbG9nb3V0IH0gfT5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==