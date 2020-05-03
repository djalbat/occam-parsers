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
var exampleView = React.createElement(View, null);
exampleView.appendTo(body);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsicmVuZGVyU3R5bGVzIiwid2l0aFN0eWxlIiwiVmlldyIsImJvZHkiLCJCb2R5IiwiZXhhbXBsZSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwiQk5GVmlldyIsIkJhc2ljVmlldyIsIkZsb3JlbmNlVmlldyIsImV4YW1wbGVWaWV3IiwiYXBwZW5kVG8iXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOzs7O0FBTjBDO0lBUWxDQSxZLEdBQWlCQyx5QixDQUFqQkQsWTtBQUVSLElBQUlFLElBQUo7QUFFQSxJQUFNQyxJQUFJLEdBQUcsSUFBSUMsVUFBSixFQUFiO0FBQUEsSUFDTUMsT0FBTyxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLENBQXVCQyxTQUF2QixDQUFpQyxDQUFqQyxDQURoQixDLENBQ3NEOztBQUV0RCxRQUFRSixPQUFSO0FBQ0UsT0FBSyxLQUFMO0FBQWFILElBQUFBLElBQUksR0FBR1EsZUFBUDtBQUFnQjs7QUFDN0IsT0FBSyxPQUFMO0FBQWVSLElBQUFBLElBQUksR0FBR1MsaUJBQVA7QUFBa0I7O0FBQ2pDLE9BQUssVUFBTDtBQUFrQlQsSUFBQUEsSUFBSSxHQUFHVSxvQkFBUDtBQUFxQjtBQUh6Qzs7QUFNQVosWUFBWTtBQUVaLElBQU1hLFdBQVcsR0FFZixvQkFBQyxJQUFELE9BRkY7QUFNQUEsV0FBVyxDQUFDQyxRQUFaLENBQXFCWCxJQUFyQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBCTkZWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9ibmZcIjtcbmltcG9ydCBCYXNpY1ZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2Jhc2ljXCI7XG5pbXBvcnQgRmxvcmVuY2VWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9mbG9yZW5jZVwiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG5sZXQgVmlldztcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICBleGFtcGxlID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7ICAvLy9cblxuc3dpdGNoIChleGFtcGxlKSB7XG4gIGNhc2UgXCJibmZcIiA6IFZpZXcgPSBCTkZWaWV3OyBicmVhaztcbiAgY2FzZSBcImJhc2ljXCIgOiBWaWV3ID0gQmFzaWNWaWV3OyBicmVhaztcbiAgY2FzZSBcImZsb3JlbmNlXCIgOiBWaWV3ID0gRmxvcmVuY2VWaWV3OyBicmVhaztcbn1cblxucmVuZGVyU3R5bGVzKCk7XG5cbmNvbnN0IGV4YW1wbGVWaWV3ID1cblxuICA8VmlldyAvPlxuXG47XG5cbmV4YW1wbGVWaWV3LmFwcGVuZFRvKGJvZHkpO1xuIl19