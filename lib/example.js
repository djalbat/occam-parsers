"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("juxtapose");
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _bnf = /*#__PURE__*/ _interop_require_default(require("./example/view/bnf"));
var _basic = /*#__PURE__*/ _interop_require_default(require("./example/view/basic"));
var _customGrammarPattern = /*#__PURE__*/ _interop_require_default(require("./example/view/customGrammarPattern"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyles = _easywithstyle.default.renderStyles;
var View;
var body = new _easy.Body(), example = window.location.search.substring(1); ///
switch(example){
    case "bnf":
        View = _bnf.default;
        break;
    case "basic":
        View = _basic.default;
        break;
    case "custom-grammar-pattern":
        View = _customGrammarPattern.default;
        break;
}
renderStyles();
body.mount(/*#__PURE__*/ React.createElement(View, null));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBCTkZWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9ibmZcIjtcbmltcG9ydCBCYXNpY1ZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2Jhc2ljXCI7XG5pbXBvcnQgQ3VzdG9tR3JhbW1hclBhdHRlcm5WaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9jdXN0b21HcmFtbWFyUGF0dGVyblwiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG5sZXQgVmlldztcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICBleGFtcGxlID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7ICAvLy9cblxuc3dpdGNoIChleGFtcGxlKSB7XG4gIGNhc2UgXCJibmZcIiA6IFZpZXcgPSBCTkZWaWV3OyBicmVhaztcbiAgY2FzZSBcImJhc2ljXCIgOiBWaWV3ID0gQmFzaWNWaWV3OyBicmVhaztcbiAgY2FzZSBcImN1c3RvbS1ncmFtbWFyLXBhdHRlcm5cIiA6IFZpZXcgPSBDdXN0b21HcmFtbWFyUGF0dGVyblZpZXc7IGJyZWFrO1xufVxuXG5yZW5kZXJTdHlsZXMoKTtcblxuYm9keS5tb3VudChcblxuICA8Vmlldy8+XG5cbik7XG4iXSwibmFtZXMiOlsicmVuZGVyU3R5bGVzIiwid2l0aFN0eWxlIiwiVmlldyIsImJvZHkiLCJCb2R5IiwiZXhhbXBsZSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwiQk5GVmlldyIsIkJhc2ljVmlldyIsIkN1c3RvbUdyYW1tYXJQYXR0ZXJuVmlldyIsIm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OztRQUVPO29FQUVlO29CQUVEOzBEQUVEOzREQUNFOzJFQUNlOzs7Ozs7QUFFckMsSUFBTSxBQUFFQSxlQUFpQkMsc0JBQVMsQ0FBMUJEO0FBRVIsSUFBSUU7QUFFSixJQUFNQyxPQUFPLElBQUlDLFVBQUksSUFDZkMsVUFBVUMsT0FBT0MsUUFBUSxDQUFDQyxNQUFNLENBQUNDLFNBQVMsQ0FBQyxJQUFLLEdBQUc7QUFFekQsT0FBUUo7SUFDTixLQUFLO1FBQVFILE9BQU9RLFlBQU87UUFBRTtJQUM3QixLQUFLO1FBQVVSLE9BQU9TLGNBQVM7UUFBRTtJQUNqQyxLQUFLO1FBQTJCVCxPQUFPVSw2QkFBd0I7UUFBRTtBQUNuRTtBQUVBWjtBQUVBRyxLQUFLVSxLQUFLLGVBRVIsb0JBQUNYIn0=