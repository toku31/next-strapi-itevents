(function() {
var exports = {};
exports.id = "pages/api/user";
exports.ids = ["pages/api/user"];
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

/***/ "./pages/api/user.js":
/*!***************************!*\
  !*** ./pages/api/user.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/index */ "./config/index.js");
 //37 Store JWT in Server HttpOnly Cookie

 // 36 Login & JWT

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  if (req.method === 'GET') {
    if (!req.headers.cookie) {
      res.status(403).json({
        message: 'Not Authorized'
      });
      return;
    }

    const {
      token
    } = cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req.headers.cookie);
    const strapiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__.API_URL}/users/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const user = await strapiRes.json();

    if (strapiRes.ok) {
      res.status(200).json({
        user
      });
    } else {
      res.status(403).json({
        message: 'User forbidden'
      });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({
      message: `Method ${req.method} not allowed`
    });
  }
});

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/user.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kai1ldmVudHMtZnJvbnRlbmQvLi9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGotZXZlbnRzLWZyb250ZW5kLy4vcGFnZXMvYXBpL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZGotZXZlbnRzLWZyb250ZW5kL2V4dGVybmFsIFwiY29va2llXCIiXSwibmFtZXMiOlsiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiTkVYVF9VUkwiLCJORVhUX1BVQkxJQ19GUk9OVEVORF9VUkwiLCJQRVJfUEFHRSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImhlYWRlcnMiLCJjb29raWUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInRva2VuIiwic3RyYXBpUmVzIiwiZmV0Y2giLCJBdXRob3JpemF0aW9uIiwidXNlciIsIm9rIiwic2V0SGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsbUJBQVosSUFBbUMsdUJBQW5ELEMsQ0FDUDtBQUVBOztBQUNPLE1BQU1DLFFBQVEsR0FDbkJILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyx3QkFBWixJQUF3Qyx1QkFEbkMsQyxDQUdQOztBQUNPLE1BQU1DLFFBQVEsR0FBRyxDQUFqQixDLENBQW9CLEk7Ozs7Ozs7Ozs7Ozs7OztDQ1JDOztDQUNjOztBQUUxQywrREFBZSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEIsUUFBSSxDQUFDRixHQUFHLENBQUNHLE9BQUosQ0FBWUMsTUFBakIsRUFBeUI7QUFDdkJILFNBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0E7QUFDRDs7QUFFRCxVQUFNO0FBQUVDO0FBQUYsUUFBWUosbURBQUEsQ0FBYUosR0FBRyxDQUFDRyxPQUFKLENBQVlDLE1BQXpCLENBQWxCO0FBQ0EsVUFBTUssU0FBUyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFakIsa0RBQVEsV0FBWixFQUF3QjtBQUNuRFMsWUFBTSxFQUFFLEtBRDJDO0FBRW5EQyxhQUFPLEVBQUU7QUFDUFEscUJBQWEsRUFBRyxVQUFTSCxLQUFNO0FBRHhCO0FBRjBDLEtBQXhCLENBQTdCO0FBT0EsVUFBTUksSUFBSSxHQUFHLE1BQU1ILFNBQVMsQ0FBQ0gsSUFBVixFQUFuQjs7QUFFQSxRQUFJRyxTQUFTLENBQUNJLEVBQWQsRUFBa0I7QUFDaEJaLFNBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNNO0FBQUQsT0FBckI7QUFDRCxLQUZELE1BRU87QUFDTFgsU0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBckI7QUFDRDtBQUNGLEdBckJELE1BcUJPO0FBQ0xOLE9BQUcsQ0FBQ2EsU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxLQUFELENBQXZCO0FBQ0ViLE9BQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRyxVQUFTUCxHQUFHLENBQUNFLE1BQU87QUFBaEMsS0FBckI7QUFDSDtBQUNGLENBMUJELEU7Ozs7Ozs7Ozs7O0FDSEEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL3VzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNydcclxuLy8gZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnXHJcblxyXG4vLzM2XHJcbmV4cG9ydCBjb25zdCBORVhUX1VSTCA9XHJcbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRlJPTlRFTkRfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnXHJcblxyXG4vLyAzMlxyXG5leHBvcnQgY29uc3QgUEVSX1BBR0UgPSA1ICAvLzMyXHJcbiIsImltcG9ydCBjb29raWUgZnJvbSAnY29va2llJyAvLzM3IFN0b3JlIEpXVCBpbiBTZXJ2ZXIgSHR0cE9ubHkgQ29va2llXHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiQC9jb25maWcvaW5kZXhcIjsgLy8gMzYgTG9naW4gJiBKV1RcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgaWYgKCFyZXEuaGVhZGVycy5jb29raWUpIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oeyBtZXNzYWdlOiAnTm90IEF1dGhvcml6ZWQnIH0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgdG9rZW4gfSA9IGNvb2tpZS5wYXJzZShyZXEuaGVhZGVycy5jb29raWUpXHJcbiAgICBjb25zdCBzdHJhcGlSZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS91c2Vycy9tZWAsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHN0cmFwaVJlcy5qc29uKClcclxuXHJcbiAgICBpZiAoc3RyYXBpUmVzLm9rKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHt1c2VyfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgbWVzc2FnZTogJ1VzZXIgZm9yYmlkZGVuJ30pXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydHRVQnXSlcclxuICAgICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgfSlcclxuICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=