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
body.mount( /*#__PURE__*/React.createElement(View, null));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsicmVuZGVyU3R5bGVzIiwid2l0aFN0eWxlIiwiVmlldyIsImJvZHkiLCJCb2R5IiwiZXhhbXBsZSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwiQk5GVmlldyIsIkJhc2ljVmlldyIsIkZsb3JlbmNlVmlldyIsIm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQU4wQztJQVFsQ0EsWSxHQUFpQkMseUIsQ0FBakJELFk7QUFFUixJQUFJRSxJQUFKO0FBRUEsSUFBTUMsSUFBSSxHQUFHLElBQUlDLFVBQUosRUFBYjtBQUFBLElBQ01DLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixDQUF1QkMsU0FBdkIsQ0FBaUMsQ0FBakMsQ0FEaEIsQyxDQUNzRDs7QUFFdEQsUUFBUUosT0FBUjtBQUNFLE9BQUssS0FBTDtBQUFhSCxJQUFBQSxJQUFJLEdBQUdRLGVBQVA7QUFBZ0I7O0FBQzdCLE9BQUssT0FBTDtBQUFlUixJQUFBQSxJQUFJLEdBQUdTLGlCQUFQO0FBQWtCOztBQUNqQyxPQUFLLFVBQUw7QUFBa0JULElBQUFBLElBQUksR0FBR1Usb0JBQVA7QUFBcUI7QUFIekM7O0FBTUFaLFlBQVk7QUFFWkcsSUFBSSxDQUFDVSxLQUFMLGVBRUUsb0JBQUMsSUFBRCxPQUZGIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcImp1eHRhcG9zZVwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCb2R5IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEJORlZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2JuZlwiO1xuaW1wb3J0IEJhc2ljVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvYmFzaWNcIjtcbmltcG9ydCBGbG9yZW5jZVZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2Zsb3JlbmNlXCI7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbmxldCBWaWV3O1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgIGV4YW1wbGUgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTsgIC8vL1xuXG5zd2l0Y2ggKGV4YW1wbGUpIHtcbiAgY2FzZSBcImJuZlwiIDogVmlldyA9IEJORlZpZXc7IGJyZWFrO1xuICBjYXNlIFwiYmFzaWNcIiA6IFZpZXcgPSBCYXNpY1ZpZXc7IGJyZWFrO1xuICBjYXNlIFwiZmxvcmVuY2VcIiA6IFZpZXcgPSBGbG9yZW5jZVZpZXc7IGJyZWFrO1xufVxuXG5yZW5kZXJTdHlsZXMoKTtcblxuYm9keS5tb3VudChcblxuICA8VmlldyAvPlxuXG4pO1xuIl19