self["webpackHotUpdate_N_E"]("pages/events/add",{

/***/ "./pages/events/add.js":
/*!*****************************!*\
  !*** ./pages/events/add.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AddEventPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.js");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/config/index */ "./config/index.js");
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/styles/Form.module.css */ "./styles/Form.module.css");
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\react\\next-strapi-itevents\\it-events-frontend\\pages\\events\\add.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function AddEventPage() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({
    name_ja: '',
    name_en: '',
    organizers: '',
    venue: '',
    address: '',
    date: '',
    time: '',
    description: ''
  }),
      values = _useState[0],
      setValues = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0,C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      var hasEmptyFields, res, evt;
      return C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault(); // console.log('submit')
              // console.log(values)
              // Validation

              hasEmptyFields = Object.values(values).some(function (element) {
                return element === '';
              });

              if (hasEmptyFields) {
                react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error('Please fill in all fields', {
                  theme: 'colored'
                });
              }

              _context.next = 5;
              return fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_10__.API_URL, "/events"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
              });

            case 5:
              res = _context.sent;

              if (res.ok) {
                _context.next = 13;
                break;
              }

              if (!(res.status === 403 || res.status === 401)) {
                _context.next = 10;
                break;
              }

              react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error('No toast included', {
                theme: 'colored'
              });
              return _context.abrupt("return");

            case 10:
              react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error('Something Went Wrong!', {
                theme: 'colored'
              });
              _context.next = 17;
              break;

            case 13:
              _context.next = 15;
              return res.json();

            case 15:
              evt = _context.sent;
              router.push("/events/".concat(evt.slug));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleInputChange = function handleInputChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setValues(_objectSpread(_objectSpread({}, values), {}, (0,C_react_next_strapi_itevents_it_events_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, value)));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_9__.default, {
    title: "\u30A4\u30D9\u30F3\u30C8\u306E\u8FFD\u52A0",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
      href: "/events",
      children: "Go Back"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "\u30A4\u30D9\u30F3\u30C8\u306E\u8FFD\u52A0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_11___default().form),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_11___default().grid),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "name_ja",
            children: "\u30A4\u30D9\u30F3\u30C8\u540D (Japanese)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            id: "name_ja",
            name: "name_ja",
            value: values.name,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "name_en",
            children: "Event Name (English)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            id: "name_en",
            name: "name_en",
            value: values.name,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "organizers",
            children: "\u4E3B\u50AC\u8005"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            id: "organizers",
            name: "organizers",
            value: values.name,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "venue",
            children: "\u5834\u6240"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            id: "venue",
            name: "venue",
            value: values.name,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "address",
            children: "\u30A2\u30C9\u30EC\u30B9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            id: "address",
            name: "address",
            value: values.name,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "date",
            children: "\u65E5\u4ED8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "date",
            id: "date",
            name: "date",
            value: values.name,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "time",
            children: "\u6642\u9593"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            id: "time",
            name: "time",
            value: values.name,
            onChange: handleInputChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "description",
          children: "\u30A4\u30D9\u30F3\u30C8\u8A73\u7D30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
          type: "text",
          id: "description",
          name: "description",
          value: values.name,
          onChange: handleInputChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "submit",
        value: "\u30A4\u30D9\u30F3\u30C8\u306E\u8FFD\u52A0",
        className: "btn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, this);
}

_s(AddEventPage, "XblCvAzwrjuZ3qVYXI821kK7UYQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];
});

_c = AddEventPage;

var _c;

$RefreshReg$(_c, "AddEventPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL2FkZC5qcyJdLCJuYW1lcyI6WyJBZGRFdmVudFBhZ2UiLCJ1c2VTdGF0ZSIsIm5hbWVfamEiLCJuYW1lX2VuIiwib3JnYW5pemVycyIsInZlbnVlIiwiYWRkcmVzcyIsImRhdGUiLCJ0aW1lIiwiZGVzY3JpcHRpb24iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYXNFbXB0eUZpZWxkcyIsIk9iamVjdCIsInNvbWUiLCJlbGVtZW50IiwidG9hc3QiLCJ0aGVtZSIsImZldGNoIiwiQVBJX1VSTCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsImV2dCIsInB1c2giLCJzbHVnIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBQUEsa0JBRVRDLCtDQUFRLENBQUM7QUFDbkNDLFdBQU8sRUFBRSxFQUQwQjtBQUVuQ0MsV0FBTyxFQUFFLEVBRjBCO0FBR25DQyxjQUFVLEVBQUUsRUFIdUI7QUFJbkNDLFNBQUssRUFBRSxFQUo0QjtBQUtuQ0MsV0FBTyxFQUFFLEVBTDBCO0FBTW5DQyxRQUFJLEVBQUUsRUFONkI7QUFPbkNDLFFBQUksRUFBRSxFQVA2QjtBQVFuQ0MsZUFBVyxFQUFFO0FBUnNCLEdBQUQsQ0FGQztBQUFBLE1BRTlCQyxNQUY4QjtBQUFBLE1BRXRCQyxTQUZzQjs7QUFhckMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFFQSxN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QTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZDRixlQTZDRTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGFBQUssRUFBQyw0Q0FBM0I7QUFBcUMsaUJBQVMsRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0REOztHQXpHdUJyQyxZO1VBYVBhLGtEOzs7S0FiT2IsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ldmVudHMvYWRkLjU3NzgxYWExMjVhNzU0ZGY0NTkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICdAL2NvbmZpZy9pbmRleCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Gb3JtLm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRFdmVudFBhZ2UoKSB7XHJcblxyXG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lX2phOiAnJyxcclxuICAgIG5hbWVfZW46ICcnLFxyXG4gICAgb3JnYW5pemVyczogJycsXHJcbiAgICB2ZW51ZTogJycsXHJcbiAgICBhZGRyZXNzOiAnJyxcclxuICAgIGRhdGU6ICcnLFxyXG4gICAgdGltZTogJycsXHJcbiAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgfSlcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3N1Ym1pdCcpXHJcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZXMpXHJcblxyXG4gICAgLy8gVmFsaWRhdGlvblxyXG4gICAgY29uc3QgaGFzRW1wdHlGaWVsZHMgPSBPYmplY3QudmFsdWVzKHZhbHVlcykuc29tZSgoZWxlbWVudCk9PmVsZW1lbnQgPT09JycpXHJcbiAgICBpZiAoaGFzRW1wdHlGaWVsZHMpIHtcclxuICAgICAgdG9hc3QuZXJyb3IoJ1BsZWFzZSBmaWxsIGluIGFsbCBmaWVsZHMnLCB7dGhlbWU6ICdjb2xvcmVkJ30pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vZXZlbnRzYCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodmFsdWVzKVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAzIHx8IHJlcy5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgIHRvYXN0LmVycm9yKCdObyB0b2FzdCBpbmNsdWRlZCcsIHsgdGhlbWU6ICdjb2xvcmVkJyB9KVxyXG4gICAgICAgIHJldHVybiAgLy8g4oeT44Gu44Ko44Op44O86KGo56S644GV44KM44Gq44GP44Gq44KLXHJcbiAgICAgIH1cclxuICAgICAgdG9hc3QuZXJyb3IoJ1NvbWV0aGluZyBXZW50IFdyb25nIScsIHt0aGVtZTogJ2NvbG9yZWQnfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGV2dCA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgcm91dGVyLnB1c2goYC9ldmVudHMvJHtldnQuc2x1Z31gKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXRcclxuICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCAgW25hbWVdOiB2YWx1ZSB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9J+OCpOODmeODs+ODiOOBrui/veWKoCc+XHJcbiAgICAgIDxMaW5rIGhyZWY9Jy9ldmVudHMnPkdvIEJhY2s8L0xpbms+XHJcbiAgICAgIDxoMT7jgqTjg5njg7Pjg4jjga7ov73liqA8L2gxPlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZV9qYVwiPuOCpOODmeODs+ODiOWQjSAoSmFwYW5lc2UpPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lX2phXCIgbmFtZT1cIm5hbWVfamFcIiB2YWx1ZT17dmFsdWVzLm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lX2VuXCI+RXZlbnQgTmFtZSAoRW5nbGlzaCk8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVfZW5cIiBuYW1lPVwibmFtZV9lblwiIHZhbHVlPXt2YWx1ZXMubmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm9yZ2FuaXplcnNcIj7kuLvlgqzogIU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm9yZ2FuaXplcnNcIiBuYW1lPVwib3JnYW5pemVyc1wiIHZhbHVlPXt2YWx1ZXMubmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2ZW51ZVwiPuWgtOaJgDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidmVudWVcIiBuYW1lPVwidmVudWVcIiB2YWx1ZT17dmFsdWVzLm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZGRyZXNzXCI+44Ki44OJ44Os44K5PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZGRyZXNzXCIgbmFtZT1cImFkZHJlc3NcIiB2YWx1ZT17dmFsdWVzLm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkYXRlXCI+5pel5LuYPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgbmFtZT1cImRhdGVcIiB2YWx1ZT17dmFsdWVzLm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aW1lXCI+5pmC6ZaTPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aW1lXCIgbmFtZT1cInRpbWVcIiB2YWx1ZT17dmFsdWVzLm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj7jgqTjg5njg7Pjg4joqbPntLA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBpZD1cImRlc2NyaXB0aW9uXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgdmFsdWU9e3ZhbHVlcy5uYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9ID48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCLjgqTjg5njg7Pjg4jjga7ov73liqBcIiBjbGFzc05hbWU9J2J0bicvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==