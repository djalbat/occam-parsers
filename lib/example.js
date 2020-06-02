"use strict";

require("juxtapose");

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _bnf = _interopRequireDefault(require("./example/view/bnf"));

var _basic = _interopRequireDefault(require("./example/view/basic"));

var _florence = _interopRequireDefault(require("./example/view/florence"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var renderStyles = _easyWithStyle["default"].renderStyles;
var View;
var body = new _easy.Body(),
    example = window.location.search.substring(1); ///

switch (example) {
  case "bnf":
    View = _bnf["default"];
    break;

  case "basic":
    View = _basic["default"];
    break;

  case "florence":
    View = _florence["default"];
    break;
}

renderStyles();
var exampleView = /*#__PURE__*/React.createElement(View, null);
exampleView.appendTo(body);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsicmVuZGVyU3R5bGVzIiwid2l0aFN0eWxlIiwiVmlldyIsImJvZHkiLCJCb2R5IiwiZXhhbXBsZSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwiQk5GVmlldyIsIkJhc2ljVmlldyIsIkZsb3JlbmNlVmlldyIsImV4YW1wbGVWaWV3IiwiYXBwZW5kVG8iXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOzs7O0FBTjBDO0lBUWxDQSxZLEdBQWlCQyx5QixDQUFqQkQsWTtBQUVSLElBQUlFLElBQUo7QUFFQSxJQUFNQyxJQUFJLEdBQUcsSUFBSUMsVUFBSixFQUFiO0FBQUEsSUFDTUMsT0FBTyxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLENBQXVCQyxTQUF2QixDQUFpQyxDQUFqQyxDQURoQixDLENBQ3NEOztBQUV0RCxRQUFRSixPQUFSO0FBQ0UsT0FBSyxLQUFMO0FBQWFILElBQUFBLElBQUksR0FBR1EsZUFBUDtBQUFnQjs7QUFDN0IsT0FBSyxPQUFMO0FBQWVSLElBQUFBLElBQUksR0FBR1MsaUJBQVA7QUFBa0I7O0FBQ2pDLE9BQUssVUFBTDtBQUFrQlQsSUFBQUEsSUFBSSxHQUFHVSxvQkFBUDtBQUFxQjtBQUh6Qzs7QUFNQVosWUFBWTtBQUVaLElBQU1hLFdBQVcsZ0JBRWYsb0JBQUMsSUFBRCxPQUZGO0FBTUFBLFdBQVcsQ0FBQ0MsUUFBWixDQUFxQlgsSUFBckIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwianV4dGFwb3NlXCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQk5GVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvYm5mXCI7XG5pbXBvcnQgQmFzaWNWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9iYXNpY1wiO1xuaW1wb3J0IEZsb3JlbmNlVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvZmxvcmVuY2VcIjtcblxuY29uc3QgeyByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxubGV0IFZpZXc7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgZXhhbXBsZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpOyAgLy8vXG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlIFwiYm5mXCIgOiBWaWV3ID0gQk5GVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJiYXNpY1wiIDogVmlldyA9IEJhc2ljVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJmbG9yZW5jZVwiIDogVmlldyA9IEZsb3JlbmNlVmlldzsgYnJlYWs7XG59XG5cbnJlbmRlclN0eWxlcygpO1xuXG5jb25zdCBleGFtcGxlVmlldyA9XG5cbiAgPFZpZXcgLz5cblxuO1xuXG5leGFtcGxlVmlldy5hcHBlbmRUbyhib2R5KTtcbiJdfQ==