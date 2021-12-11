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
                body: JSON.stringify({
                  identifier: identifier,
                  password: password
                })
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
    lineNumber: 96,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9BdXRoQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiY2hlY2tVc2VyTG9nZ2VkSW4iLCJyZWdpc3RlciIsImZldGNoIiwiTkVYVF9VUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZGVudGlmaWVyIiwicGFzc3dvcmQiLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvayIsInB1c2giLCJtZXNzYWdlIiwibG9naW4iLCJlbWFpbCIsImxvZ291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLGdCQUFHQyxvREFBYSxFQUFqQztBQUVPLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWdCO0FBQUE7O0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjOztBQUFBLGtCQUVsQkMsK0NBQVEsQ0FBQyxJQUFELENBRlU7QUFBQSxNQUVuQ0MsSUFGbUM7QUFBQSxNQUU3QkMsT0FGNkI7O0FBQUEsbUJBR2hCRiwrQ0FBUSxDQUFDLElBQUQsQ0FIUTtBQUFBLE1BR25DRyxLQUhtQztBQUFBLE1BRzVCQyxRQUg0Qjs7QUFLMUMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBQyxrREFBUyxDQUFDO0FBQUEsV0FBSUMsaUJBQWlCLEVBQXJCO0FBQUEsR0FBRCxFQUEwQixFQUExQixDQUFULENBUDBDLENBUzFDOztBQUNBLE1BQU1DLFFBQVE7QUFBQSxrVEFBRyxpQkFBT1IsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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Qzs7QUFBQTtBQUlsQlEsaUJBSmtCO0FBQUE7QUFBQSxxQkFLTEEsR0FBRyxDQUFDQyxJQUFKLEVBTEs7O0FBQUE7QUFLbEJDLGtCQUxrQjs7QUFNeEIsa0JBQUlGLEdBQUcsQ0FBQ0ssRUFBUixFQUFZO0FBQ1Z0Qix1QkFBTyxDQUFDbUIsSUFBSSxDQUFDcEIsSUFBTixDQUFQO0FBQ0QsZUFGRCxNQUVPO0FBQ0xDLHVCQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0Q7O0FBVnVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWpCTSxpQkFBaUI7QUFBQTtBQUFBO0FBQUEsS0FBdkI7O0FBYUEsc0JBQ0UsOERBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFHO0FBQUVQLFVBQUksRUFBSkEsSUFBRjtBQUFRRSxXQUFLLEVBQUxBLEtBQVI7QUFBZU0sY0FBUSxFQUFSQSxRQUFmO0FBQXlCa0IsV0FBSyxFQUFMQSxLQUF6QjtBQUFnQ0UsWUFBTSxFQUFOQTtBQUFoQyxLQUE5QjtBQUFBLGNBQ0k5QjtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBN0ZNOztHQUFNRCxZO1VBS0lRLGtEOzs7S0FMSlIsWTtBQStGYiwrREFBZUYsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjg1NmE3YTIzNTVhMTlkNDUzYjI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBORVhUX1VSTCB9IGZyb20gXCJAL2NvbmZpZy9pbmRleFwiO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG5cclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT5jaGVja1VzZXJMb2dnZWRJbigpLCBbXSlcclxuXHJcbiAgLy8gUmVnaXN0ZXIgVXNlclxyXG4gIGNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKHVzZXIpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke05FWFRfVVJMfS9hcGkvcmVnaXN0ZXJgLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGlkZW50aWZpZXIsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIH0pLFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuXHJcbiAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgIHNldFVzZXIoZGF0YS51c2VyKVxyXG4gICAgICByb3V0ZXIucHVzaCgnL2FjY291bnQvZGFzaGJvYXJkJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEVycm9yKGRhdGEubWVzc2FnZSlcclxuICAgICAgc2V0RXJyb3IobnVsbClcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvLyBMb2dpbiBVc2VyXHJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAoe2VtYWlsOmlkZW50aWZpZXIsIHBhc3N3b3JkfSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coeyBpZGVudGlmaWVyLCBwYXNzd29yZCB9KTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke05FWFRfVVJMfS9hcGkvbG9naW5gLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGlkZW50aWZpZXIsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIH0pLFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuXHJcbiAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgIHNldFVzZXIoZGF0YS51c2VyKVxyXG4gICAgICByb3V0ZXIucHVzaCgnL2FjY291bnQvZGFzaGJvYXJkJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEVycm9yKGRhdGEubWVzc2FnZSlcclxuICAgICAgc2V0RXJyb3IobnVsbClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIExvZ291dCB1c2VyXHJcbiAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0xvZ291dCcpXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtORVhUX1VSTH0vYXBpL2xvZ291dGAsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCdcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKHJlcy5vaykge1xyXG4gICAgICBzZXRVc2VyKG51bGwpXHJcbiAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENoZWNrIGlmIHVzZXIgaXMgbG9nZ2VkIGluXHJcbiAgY29uc3QgY2hlY2tVc2VyTG9nZ2VkSW4gPSBhc3luYyAodXNlcikgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0NoZWNrJylcclxuICAgXHJcbiAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2VyYClcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke05FWFRfVVJMfS9hcGkvdXNlcmApXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgaWYgKHJlcy5vaykge1xyXG4gICAgICBzZXRVc2VyKGRhdGEudXNlcilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFVzZXIobnVsbClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyB7IHVzZXIsIGVycm9yLCByZWdpc3RlciwgbG9naW4sIGxvZ291dCB9IH0+XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=