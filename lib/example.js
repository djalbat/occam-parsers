"use strict";

require("juxtapose");

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _bnf = _interopRequireDefault(require("./example/view/bnf"));

var _basic = _interopRequireDefault(require("./example/view/basic"));

var _florence = _interopRequireDefault(require("./example/view/florence"));

var _metaJSON = _interopRequireDefault(require("./example/view/metaJSON"));

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

  case "metaJSON":
    View = _metaJSON["default"];
    break;
}

renderStyles();
var exampleView = React.createElement(View, null);
exampleView.appendTo(body);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsicmVuZGVyU3R5bGVzIiwid2l0aFN0eWxlIiwiVmlldyIsImJvZHkiLCJCb2R5IiwiZXhhbXBsZSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwiQk5GVmlldyIsIkJhc2ljVmlldyIsIkZsb3JlbmNlVmlldyIsIk1ldGFKU09OVmlldyIsImV4YW1wbGVWaWV3IiwiYXBwZW5kVG8iXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBUDBDO0lBU2xDQSxZLEdBQWlCQyx5QixDQUFqQkQsWTtBQUVSLElBQUlFLElBQUo7QUFFQSxJQUFNQyxJQUFJLEdBQUcsSUFBSUMsVUFBSixFQUFiO0FBQUEsSUFDTUMsT0FBTyxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLENBQXVCQyxTQUF2QixDQUFpQyxDQUFqQyxDQURoQixDLENBQ3NEOztBQUV0RCxRQUFRSixPQUFSO0FBQ0UsT0FBSyxLQUFMO0FBQWFILElBQUFBLElBQUksR0FBR1EsZUFBUDtBQUFnQjs7QUFDN0IsT0FBSyxPQUFMO0FBQWVSLElBQUFBLElBQUksR0FBR1MsaUJBQVA7QUFBa0I7O0FBQ2pDLE9BQUssVUFBTDtBQUFrQlQsSUFBQUEsSUFBSSxHQUFHVSxvQkFBUDtBQUFxQjs7QUFDdkMsT0FBSyxVQUFMO0FBQWtCVixJQUFBQSxJQUFJLEdBQUdXLG9CQUFQO0FBQXFCO0FBSnpDOztBQU9BYixZQUFZO0FBRVosSUFBTWMsV0FBVyxHQUVmLG9CQUFDLElBQUQsT0FGRjtBQU1BQSxXQUFXLENBQUNDLFFBQVosQ0FBcUJaLElBQXJCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcImp1eHRhcG9zZVwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCb2R5IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEJORlZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2JuZlwiO1xuaW1wb3J0IEJhc2ljVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvYmFzaWNcIjtcbmltcG9ydCBGbG9yZW5jZVZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2Zsb3JlbmNlXCI7XG5pbXBvcnQgTWV0YUpTT05WaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9tZXRhSlNPTlwiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG5sZXQgVmlldztcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICBleGFtcGxlID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7ICAvLy9cblxuc3dpdGNoIChleGFtcGxlKSB7XG4gIGNhc2UgXCJibmZcIiA6IFZpZXcgPSBCTkZWaWV3OyBicmVhaztcbiAgY2FzZSBcImJhc2ljXCIgOiBWaWV3ID0gQmFzaWNWaWV3OyBicmVhaztcbiAgY2FzZSBcImZsb3JlbmNlXCIgOiBWaWV3ID0gRmxvcmVuY2VWaWV3OyBicmVhaztcbiAgY2FzZSBcIm1ldGFKU09OXCIgOiBWaWV3ID0gTWV0YUpTT05WaWV3OyBicmVhaztcbn1cblxucmVuZGVyU3R5bGVzKCk7XG5cbmNvbnN0IGV4YW1wbGVWaWV3ID1cblxuICA8VmlldyAvPlxuXG47XG5cbmV4YW1wbGVWaWV3LmFwcGVuZFRvKGJvZHkpO1xuIl19