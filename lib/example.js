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
body.mount( /*#__PURE__*/React.createElement(View, null));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsicmVuZGVyU3R5bGVzIiwid2l0aFN0eWxlIiwiVmlldyIsImJvZHkiLCJCb2R5IiwiZXhhbXBsZSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwiQk5GVmlldyIsIkJhc2ljVmlldyIsIkZsb3JlbmNlVmlldyIsIk1ldGFKU09OVmlldyIsIm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQVAwQztJQVNsQ0EsWSxHQUFpQkMseUIsQ0FBakJELFk7QUFFUixJQUFJRSxJQUFKO0FBRUEsSUFBTUMsSUFBSSxHQUFHLElBQUlDLFVBQUosRUFBYjtBQUFBLElBQ01DLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixDQUF1QkMsU0FBdkIsQ0FBaUMsQ0FBakMsQ0FEaEIsQyxDQUNzRDs7QUFFdEQsUUFBUUosT0FBUjtBQUNFLE9BQUssS0FBTDtBQUFhSCxJQUFBQSxJQUFJLEdBQUdRLGVBQVA7QUFBZ0I7O0FBQzdCLE9BQUssT0FBTDtBQUFlUixJQUFBQSxJQUFJLEdBQUdTLGlCQUFQO0FBQWtCOztBQUNqQyxPQUFLLFVBQUw7QUFBa0JULElBQUFBLElBQUksR0FBR1Usb0JBQVA7QUFBcUI7O0FBQ3ZDLE9BQUssVUFBTDtBQUFrQlYsSUFBQUEsSUFBSSxHQUFHVyxvQkFBUDtBQUFxQjtBQUp6Qzs7QUFPQWIsWUFBWTtBQUVaRyxJQUFJLENBQUNXLEtBQUwsZUFFRSxvQkFBQyxJQUFELE9BRkYiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwianV4dGFwb3NlXCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQk5GVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvYm5mXCI7XG5pbXBvcnQgQmFzaWNWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9iYXNpY1wiO1xuaW1wb3J0IEZsb3JlbmNlVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvZmxvcmVuY2VcIjtcbmltcG9ydCBNZXRhSlNPTlZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L21ldGFKU09OXCI7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbmxldCBWaWV3O1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgIGV4YW1wbGUgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTsgIC8vL1xuXG5zd2l0Y2ggKGV4YW1wbGUpIHtcbiAgY2FzZSBcImJuZlwiIDogVmlldyA9IEJORlZpZXc7IGJyZWFrO1xuICBjYXNlIFwiYmFzaWNcIiA6IFZpZXcgPSBCYXNpY1ZpZXc7IGJyZWFrO1xuICBjYXNlIFwiZmxvcmVuY2VcIiA6IFZpZXcgPSBGbG9yZW5jZVZpZXc7IGJyZWFrO1xuICBjYXNlIFwibWV0YUpTT05cIiA6IFZpZXcgPSBNZXRhSlNPTlZpZXc7IGJyZWFrO1xufVxuXG5yZW5kZXJTdHlsZXMoKTtcblxuYm9keS5tb3VudChcblxuICA8VmlldyAvPlxuXG4pO1xuIl19