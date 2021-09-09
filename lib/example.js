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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIkJvZHkiLCJCTkZWaWV3IiwiQmFzaWNWaWV3IiwicmVuZGVyU3R5bGVzIiwiVmlldyIsImJvZHkiLCJleGFtcGxlIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJzdWJzdHJpbmciLCJtb3VudCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7QUFJVSxHQUFpQixDQUFqQixjQUFpQjtBQUVsQixHQUFNLENBQU4sS0FBTTtBQUVQLEdBQW9CLENBQXBCLElBQW9CO0FBQ2xCLEdBQXNCLENBQXRCLE1BQXNCOzs7Ozs7QUFFNUMsR0FBSyxDQUFHLFlBQVksR0FQRSxjQUFpQixTQU8vQixZQUFZO0FBRXBCLEdBQUcsQ0FBQyxJQUFJO0FBRVIsR0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBVEssS0FBTSxTQVVyQixPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7QUFFekQsTUFBTSxDQUFFLE9BQU87SUFDYixJQUFJLEVBQUMsR0FBSztRQUFHLElBQUksR0FYQyxJQUFvQjtRQVdULEtBQUs7SUFDbEMsSUFBSSxFQUFDLEtBQU87UUFBRyxJQUFJLEdBWEMsTUFBc0I7UUFXVCxLQUFLOztBQUd4QyxZQUFZO0FBRVosSUFBSSxDQUFDLEtBQUssbUNBRVAsSUFBSSJ9