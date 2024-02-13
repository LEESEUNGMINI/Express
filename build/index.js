"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
var PORT = 3000;
app.get("/", function (req, res) {
  res.send("Hi,, broou..!");
});
app.listen(PORT, function () {
  console.log("\u2665Sever on: http://localhost:".concat(PORT));
});