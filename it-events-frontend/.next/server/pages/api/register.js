(function() {
var exports = {};
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
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

/***/ "./pages/api/register.js":
/*!*******************************!*\
  !*** ./pages/api/register.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/index */ "./config/index.js");
 //37 Store JWT in Server HttpOnly Cookie

 // 36 Login & JWT

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  if (req.method === 'POST') {
    const {
      username,
      email,
      password
    } = req.body; // console.log(req.body)

    const strapiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__.API_URL}/auth/local/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    });
    const data = await strapiRes.json();
    console.log(data.jwt); // Token

    if (strapiRes.ok) {
      // Set cookie
      res.setHeader('Set-Cookie', cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize('token', data.jwt, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 24 * 7,
        // 1 week
        sameSite: 'strict',
        path: '/'
      }));
      res.status(200).json({
        user: data.user
      });
    } else {
      res.status(data.statusCode).json({
        message: data.message[0].messages[0].message
      });
    }
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/register.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kai1ldmVudHMtZnJvbnRlbmQvLi9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGotZXZlbnRzLWZyb250ZW5kLy4vcGFnZXMvYXBpL3JlZ2lzdGVyLmpzIiwid2VicGFjazovL2RqLWV2ZW50cy1mcm9udGVuZC9leHRlcm5hbCBcImNvb2tpZVwiIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsIk5FWFRfVVJMIiwiTkVYVF9QVUJMSUNfRlJPTlRFTkRfVVJMIiwiUEVSX1BBR0UiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5Iiwic3RyYXBpUmVzIiwiZmV0Y2giLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImp3dCIsIm9rIiwic2V0SGVhZGVyIiwiY29va2llIiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJtYXhBZ2UiLCJzYW1lU2l0ZSIsInBhdGgiLCJzdGF0dXMiLCJ1c2VyIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiLCJtZXNzYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG1CQUFaLElBQW1DLHVCQUFuRCxDLENBQ1A7QUFFQTs7QUFDTyxNQUFNQyxRQUFRLEdBQ25CSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsd0JBQVosSUFBd0MsdUJBRG5DLEMsQ0FHUDs7QUFDTyxNQUFNQyxRQUFRLEdBQUcsQ0FBakIsQyxDQUFvQixJOzs7Ozs7Ozs7Ozs7Ozs7Q0NSQzs7Q0FDYzs7QUFFMUMsK0RBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFVBQU07QUFBRUMsY0FBRjtBQUFZQyxXQUFaO0FBQW1CQztBQUFuQixRQUFnQ0wsR0FBRyxDQUFDTSxJQUExQyxDQUR5QixDQUd6Qjs7QUFDQSxVQUFNQyxTQUFTLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVmLGtEQUFRLHNCQUFaLEVBQzNCO0FBQ0VTLFlBQU0sRUFBRSxNQURWO0FBRUVPLGFBQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURULE9BRlg7QUFLRUgsVUFBSSxFQUFFSSxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQlIsZ0JBRG1CO0FBRW5CQyxhQUZtQjtBQUduQkM7QUFIbUIsT0FBZjtBQUxSLEtBRDJCLENBQTdCO0FBYUEsVUFBTU8sSUFBSSxHQUFHLE1BQU1MLFNBQVMsQ0FBQ00sSUFBVixFQUFuQjtBQUVBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBSSxDQUFDSSxHQUFqQixFQW5CeUIsQ0FtQkY7O0FBRXZCLFFBQUlULFNBQVMsQ0FBQ1UsRUFBZCxFQUFrQjtBQUNoQjtBQUNBaEIsU0FBRyxDQUFDaUIsU0FBSixDQUFjLFlBQWQsRUFBNEJDLHVEQUFBLENBQ3pCLE9BRHlCLEVBQ2hCUCxJQUFJLENBQUNJLEdBRFcsRUFDTjtBQUNsQkksZ0JBQVEsRUFBRSxJQURRO0FBRWxCQyxjQUFNLE9BRlk7QUFHbEJDLGNBQU0sRUFBRSxLQUFLLEVBQUwsR0FBVSxFQUFWLEdBQWUsQ0FITDtBQUdRO0FBQzFCQyxnQkFBUSxFQUFFLFFBSlE7QUFLbEJDLFlBQUksRUFBRTtBQUxZLE9BRE0sQ0FBNUI7QUFTQXZCLFNBQUcsQ0FBQ3dCLE1BQUosQ0FBVyxHQUFYLEVBQWdCWixJQUFoQixDQUFxQjtBQUFDYSxZQUFJLEVBQUVkLElBQUksQ0FBQ2M7QUFBWixPQUFyQjtBQUNELEtBWkQsTUFZTztBQUNMekIsU0FBRyxDQUFDd0IsTUFBSixDQUFXYixJQUFJLENBQUNlLFVBQWhCLEVBQTRCZCxJQUE1QixDQUFpQztBQUFDZSxlQUFPLEVBQUVoQixJQUFJLENBQUNnQixPQUFMLENBQWEsQ0FBYixFQUFnQkMsUUFBaEIsQ0FBeUIsQ0FBekIsRUFBNEJEO0FBQXRDLE9BQWpDO0FBQ0Q7QUFFRixHQXJDRCxNQXFDTztBQUNMM0IsT0FBRyxDQUFDaUIsU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxNQUFELENBQXZCO0FBQ0VqQixPQUFHLENBQUN3QixNQUFKLENBQVcsR0FBWCxFQUFnQlosSUFBaEIsQ0FBcUI7QUFBRWUsYUFBTyxFQUFHLFVBQVM1QixHQUFHLENBQUNFLE1BQU87QUFBaEMsS0FBckI7QUFDSDtBQUNGLENBMUNELEU7Ozs7Ozs7Ozs7O0FDSEEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL3JlZ2lzdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjEzMzcnXHJcbi8vIGV4cG9ydCBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDozMDAwJ1xyXG5cclxuLy8zNlxyXG5leHBvcnQgY29uc3QgTkVYVF9VUkwgPVxyXG4gIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZST05URU5EX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDozMDAwJ1xyXG5cclxuLy8gMzJcclxuZXhwb3J0IGNvbnN0IFBFUl9QQUdFID0gNSAgLy8zMlxyXG4iLCJpbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZScgLy8zNyBTdG9yZSBKV1QgaW4gU2VydmVyIEh0dHBPbmx5IENvb2tpZVxyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIkAvY29uZmlnL2luZGV4XCI7IC8vIDM2IExvZ2luICYgSldUXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5XHJcbiAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxyXG4gICAgY29uc3Qgc3RyYXBpUmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vYXV0aC9sb2NhbC9yZWdpc3RlcmAsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgcGFzc3dvcmRcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgc3RyYXBpUmVzLmpzb24oKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEuand0KSAgLy8gVG9rZW5cclxuXHJcbiAgICBpZiAoc3RyYXBpUmVzLm9rKSB7XHJcbiAgICAgIC8vIFNldCBjb29raWVcclxuICAgICAgcmVzLnNldEhlYWRlcignU2V0LUNvb2tpZScsIGNvb2tpZS5zZXJpYWxpemVcclxuICAgICAgICAoJ3Rva2VuJywgZGF0YS5qd3QsIHtcclxuICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyxcclxuICAgICAgICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogNywgLy8gMSB3ZWVrXHJcbiAgICAgICAgICBzYW1lU2l0ZTogJ3N0cmljdCcsXHJcbiAgICAgICAgICBwYXRoOiAnLydcclxuICAgICAgfSkpXHJcblxyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7dXNlcjogZGF0YS51c2VyfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoZGF0YS5zdGF0dXNDb2RlKS5qc29uKHttZXNzYWdlOiBkYXRhLm1lc3NhZ2VbMF0ubWVzc2FnZXNbMF0ubWVzc2FnZX0pXHJcbiAgICB9XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnUE9TVCddKVxyXG4gICAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IGBNZXRob2QgJHtyZXEubWV0aG9kfSBub3QgYWxsb3dlZGB9KVxyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==