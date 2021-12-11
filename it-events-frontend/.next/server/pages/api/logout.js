(function() {
var exports = {};
exports.id = "pages/api/logout";
exports.ids = ["pages/api/logout"];
exports.modules = {

/***/ "./pages/api/logout.js":
/*!*****************************!*\
  !*** ./pages/api/logout.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
 //37 Store JWT in Server HttpOnly Cookie
// import { API_URL } from "@/config/index"; // 36 Login & JWT
//39 Logout

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  if (req.method === 'POST') {
    // Destroy cookie
    res.setHeader('Set-Cookie', cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize('token', '', {
      httpOnly: true,
      secure: false,
      expires: new Date(0),
      sameSite: 'strict',
      path: '/'
    }));
    res.status(200).json({
      message: 'Logout Success'
    });
  } else {
    res.setHeader('Allow', ['POST']);
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/logout.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kai1ldmVudHMtZnJvbnRlbmQvLi9wYWdlcy9hcGkvbG9nb3V0LmpzIiwid2VicGFjazovL2RqLWV2ZW50cy1mcm9udGVuZC9leHRlcm5hbCBcImNvb2tpZVwiIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm1ldGhvZCIsInNldEhlYWRlciIsImNvb2tpZSIsImh0dHBPbmx5Iiwic2VjdXJlIiwiZXhwaXJlcyIsIkRhdGUiLCJzYW1lU2l0ZSIsInBhdGgiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztDQUE0QjtBQUM1QjtBQUVBOztBQUNBLCtEQUFlLE9BQU9BLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNqQyxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QjtBQUNBRCxPQUFHLENBQUNFLFNBQUosQ0FBYyxZQUFkLEVBQTRCQyx1REFBQSxDQUN6QixPQUR5QixFQUNoQixFQURnQixFQUNaO0FBQ1pDLGNBQVEsRUFBRSxJQURFO0FBRVpDLFlBQU0sT0FGTTtBQUdaQyxhQUFPLEVBQUUsSUFBSUMsSUFBSixDQUFTLENBQVQsQ0FIRztBQUlaQyxjQUFRLEVBQUUsUUFKRTtBQUtaQyxVQUFJLEVBQUU7QUFMTSxLQURZLENBQTVCO0FBVUFULE9BQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNDLGFBQU8sRUFBRTtBQUFWLEtBQXJCO0FBQ0QsR0FiRCxNQWFPO0FBQ0xaLE9BQUcsQ0FBQ0UsU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxNQUFELENBQXZCO0FBQ0VGLE9BQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRyxVQUFTYixHQUFHLENBQUNFLE1BQU87QUFBaEMsS0FBckI7QUFDSDtBQUNGLENBbEJELEU7Ozs7Ozs7Ozs7O0FDSkEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL2xvZ291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSAnY29va2llJyAvLzM3IFN0b3JlIEpXVCBpbiBTZXJ2ZXIgSHR0cE9ubHkgQ29va2llXHJcbi8vIGltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiQC9jb25maWcvaW5kZXhcIjsgLy8gMzYgTG9naW4gJiBKV1RcclxuXHJcbi8vMzkgTG9nb3V0XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIC8vIERlc3Ryb3kgY29va2llXHJcbiAgICByZXMuc2V0SGVhZGVyKCdTZXQtQ29va2llJywgY29va2llLnNlcmlhbGl6ZVxyXG4gICAgICAoJ3Rva2VuJywgJycsIHtcclxuICAgICAgICBodHRwT25seTogdHJ1ZSxcclxuICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnLFxyXG4gICAgICAgIGV4cGlyZXM6IG5ldyBEYXRlKDApLFxyXG4gICAgICAgIHNhbWVTaXRlOiAnc3RyaWN0JyxcclxuICAgICAgICBwYXRoOiAnLydcclxuICAgICAgfSlcclxuICAgIClcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVzc2FnZTogJ0xvZ291dCBTdWNjZXNzJ30pXHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydQT1NUJ10pXHJcbiAgICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogYE1ldGhvZCAke3JlcS5tZXRob2R9IG5vdCBhbGxvd2VkYH0pXHJcbiAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9