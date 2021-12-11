(function() {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
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

/***/ "./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
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
      identifier,
      password
    } = req.body; // console.log(req.body)

    const strapiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__.API_URL}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        identifier,
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/login.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kai1ldmVudHMtZnJvbnRlbmQvLi9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGotZXZlbnRzLWZyb250ZW5kLy4vcGFnZXMvYXBpL2xvZ2luLmpzIiwid2VicGFjazovL2RqLWV2ZW50cy1mcm9udGVuZC9leHRlcm5hbCBcImNvb2tpZVwiIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsIk5FWFRfVVJMIiwiTkVYVF9QVUJMSUNfRlJPTlRFTkRfVVJMIiwiUEVSX1BBR0UiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJpZGVudGlmaWVyIiwicGFzc3dvcmQiLCJib2R5Iiwic3RyYXBpUmVzIiwiZmV0Y2giLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImp3dCIsIm9rIiwic2V0SGVhZGVyIiwiY29va2llIiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJtYXhBZ2UiLCJzYW1lU2l0ZSIsInBhdGgiLCJzdGF0dXMiLCJ1c2VyIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiLCJtZXNzYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG1CQUFaLElBQW1DLHVCQUFuRCxDLENBQ1A7QUFFQTs7QUFDTyxNQUFNQyxRQUFRLEdBQ25CSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsd0JBQVosSUFBd0MsdUJBRG5DLEMsQ0FHUDs7QUFDTyxNQUFNQyxRQUFRLEdBQUcsQ0FBakIsQyxDQUFvQixJOzs7Ozs7Ozs7Ozs7Ozs7Q0NSQzs7Q0FDYzs7QUFFMUMsK0RBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFVBQU07QUFBRUMsZ0JBQUY7QUFBY0M7QUFBZCxRQUEyQkosR0FBRyxDQUFDSyxJQUFyQyxDQUR5QixDQUd6Qjs7QUFDQSxVQUFNQyxTQUFTLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVkLGtEQUFRLGFBQVosRUFDM0I7QUFDRVMsWUFBTSxFQUFFLE1BRFY7QUFFRU0sYUFBTyxFQUFFO0FBQ1Asd0JBQWdCO0FBRFQsT0FGWDtBQUtFSCxVQUFJLEVBQUVJLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CUCxrQkFEbUI7QUFFbkJDO0FBRm1CLE9BQWY7QUFMUixLQUQyQixDQUE3QjtBQVlBLFVBQU1PLElBQUksR0FBRyxNQUFNTCxTQUFTLENBQUNNLElBQVYsRUFBbkI7QUFFQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlILElBQUksQ0FBQ0ksR0FBakIsRUFsQnlCLENBa0JGOztBQUV2QixRQUFJVCxTQUFTLENBQUNVLEVBQWQsRUFBa0I7QUFDaEI7QUFDQWYsU0FBRyxDQUFDZ0IsU0FBSixDQUFjLFlBQWQsRUFBNEJDLHVEQUFBLENBQ3pCLE9BRHlCLEVBQ2hCUCxJQUFJLENBQUNJLEdBRFcsRUFDTjtBQUNsQkksZ0JBQVEsRUFBRSxJQURRO0FBRWxCQyxjQUFNLE9BRlk7QUFHbEJDLGNBQU0sRUFBRSxLQUFLLEVBQUwsR0FBVSxFQUFWLEdBQWUsQ0FITDtBQUdRO0FBQzFCQyxnQkFBUSxFQUFFLFFBSlE7QUFLbEJDLFlBQUksRUFBRTtBQUxZLE9BRE0sQ0FBNUI7QUFTQXRCLFNBQUcsQ0FBQ3VCLE1BQUosQ0FBVyxHQUFYLEVBQWdCWixJQUFoQixDQUFxQjtBQUFDYSxZQUFJLEVBQUVkLElBQUksQ0FBQ2M7QUFBWixPQUFyQjtBQUNELEtBWkQsTUFZTztBQUNMeEIsU0FBRyxDQUFDdUIsTUFBSixDQUFXYixJQUFJLENBQUNlLFVBQWhCLEVBQTRCZCxJQUE1QixDQUFpQztBQUFDZSxlQUFPLEVBQUVoQixJQUFJLENBQUNnQixPQUFMLENBQWEsQ0FBYixFQUFnQkMsUUFBaEIsQ0FBeUIsQ0FBekIsRUFBNEJEO0FBQXRDLE9BQWpDO0FBQ0Q7QUFFRixHQXBDRCxNQW9DTztBQUNMMUIsT0FBRyxDQUFDZ0IsU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxNQUFELENBQXZCO0FBQ0VoQixPQUFHLENBQUN1QixNQUFKLENBQVcsR0FBWCxFQUFnQlosSUFBaEIsQ0FBcUI7QUFBRWUsYUFBTyxFQUFHLFVBQVMzQixHQUFHLENBQUNFLE1BQU87QUFBaEMsS0FBckI7QUFDSDtBQUNGLENBekNELEU7Ozs7Ozs7Ozs7O0FDSEEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjEzMzcnXHJcbi8vIGV4cG9ydCBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDozMDAwJ1xyXG5cclxuLy8zNlxyXG5leHBvcnQgY29uc3QgTkVYVF9VUkwgPVxyXG4gIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZST05URU5EX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDozMDAwJ1xyXG5cclxuLy8gMzJcclxuZXhwb3J0IGNvbnN0IFBFUl9QQUdFID0gNSAgLy8zMlxyXG4iLCJpbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZScgLy8zNyBTdG9yZSBKV1QgaW4gU2VydmVyIEh0dHBPbmx5IENvb2tpZVxyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIkAvY29uZmlnL2luZGV4XCI7IC8vIDM2IExvZ2luICYgSldUXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICBjb25zdCB7IGlkZW50aWZpZXIsIHBhc3N3b3JkIH0gPSByZXEuYm9keVxyXG4gICAgXHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXEuYm9keSlcclxuICAgIGNvbnN0IHN0cmFwaVJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2F1dGgvbG9jYWxgLFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgaWRlbnRpZmllcixcclxuICAgICAgICAgIHBhc3N3b3JkXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIFxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHN0cmFwaVJlcy5qc29uKClcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLmp3dCkgIC8vIFRva2VuXHJcblxyXG4gICAgaWYgKHN0cmFwaVJlcy5vaykge1xyXG4gICAgICAvLyBTZXQgY29va2llXHJcbiAgICAgIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBjb29raWUuc2VyaWFsaXplXHJcbiAgICAgICAgKCd0b2tlbicsIGRhdGEuand0LCB7XHJcbiAgICAgICAgICBodHRwT25seTogdHJ1ZSxcclxuICAgICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcsXHJcbiAgICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDcsIC8vIDEgd2Vla1xyXG4gICAgICAgICAgc2FtZVNpdGU6ICdzdHJpY3QnLFxyXG4gICAgICAgICAgcGF0aDogJy8nXHJcbiAgICAgIH0pKVxyXG5cclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3VzZXI6IGRhdGEudXNlcn0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMuc3RhdHVzKGRhdGEuc3RhdHVzQ29kZSkuanNvbih7bWVzc2FnZTogZGF0YS5tZXNzYWdlWzBdLm1lc3NhZ2VzWzBdLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ1BPU1QnXSlcclxuICAgICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgfSlcclxuICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=