"use strict";
require("juxtapose");
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _bnf = _interopRequireDefault(require("./example/view/bnf"));
var _basic = _interopRequireDefault(require("./example/view/basic"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyles = _easyWithStyle.default.renderStyles;
var View;
var body = new _easy.Body(), example = window.location.search.substring(1); ///
switch(example){
    case "bnf":
        View = _bnf.default;
        break;
    case "basic":
        View = _basic.default;
        break;
}
renderStyles();
body.mount(/*#__PURE__*/ React.createElement(View, null));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBCTkZWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9ibmZcIjtcbmltcG9ydCBCYXNpY1ZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2Jhc2ljXCI7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbmxldCBWaWV3O1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgIGV4YW1wbGUgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTsgIC8vL1xuXG5zd2l0Y2ggKGV4YW1wbGUpIHtcbiAgY2FzZSBcImJuZlwiIDogVmlldyA9IEJORlZpZXc7IGJyZWFrO1xuICBjYXNlIFwiYmFzaWNcIiA6IFZpZXcgPSBCYXNpY1ZpZXc7IGJyZWFrO1xufVxuXG5yZW5kZXJTdHlsZXMoKTtcblxuYm9keS5tb3VudChcblxuICA8VmlldyAvPlxuXG4pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7O0FBSVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFbEIsR0FBTSxDQUFOLEtBQU07QUFFUCxHQUFvQixDQUFwQixJQUFvQjtBQUNsQixHQUFzQixDQUF0QixNQUFzQjs7Ozs7O0FBRTVDLEdBQUssQ0FBRyxZQUFZLEdBUEUsY0FBaUIsU0FPL0IsWUFBWTtBQUVwQixHQUFHLENBQUMsSUFBSTtBQUVSLEdBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQVRLLEtBQU0sU0FVckIsT0FBTyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO09BRWpELE9BQU87VUFDUixHQUFLO1FBQUcsSUFBSSxHQVhDLElBQW9COztVQVlqQyxLQUFPO1FBQUcsSUFBSSxHQVhDLE1BQXNCOzs7QUFjNUMsWUFBWTtBQUVaLElBQUksQ0FBQyxLQUFLLG1DQUVQLElBQUkifQ==