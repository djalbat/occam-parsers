"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _parseTree = _interopRequireDefault(require("../parseTree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var HorizontalBranchParseTree = /*#__PURE__*/function (_ParseTree) {
  _inherits(HorizontalBranchParseTree, _ParseTree);

  function HorizontalBranchParseTree() {
    _classCallCheck(this, HorizontalBranchParseTree);

    return _possibleConstructorReturn(this, _getPrototypeOf(HorizontalBranchParseTree).apply(this, arguments));
  }

  _createClass(HorizontalBranchParseTree, null, [{
    key: "fromWidth",
    value: function fromWidth(width) {
      var string = stringFromCharactersWidth(width, "-"),
          line = string,
          ///
      lines = [line],
          horizontalBranchParseTree = new HorizontalBranchParseTree(lines);
      return horizontalBranchParseTree;
    }
  }]);

  return HorizontalBranchParseTree;
}(_parseTree["default"]);

exports["default"] = HorizontalBranchParseTree;

function stringFromCharactersWidth(charactersWidth, character) {
  var string = "";

  for (var index = 0; index < charactersWidth; index++) {
    string += character;
  }

  return string;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWxCcmFuY2guanMiXSwibmFtZXMiOlsiSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSIsIndpZHRoIiwic3RyaW5nIiwic3RyaW5nRnJvbUNoYXJhY3RlcnNXaWR0aCIsImxpbmUiLCJsaW5lcyIsImhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUiLCJQYXJzZVRyZWUiLCJjaGFyYWN0ZXJzV2lkdGgiLCJjaGFyYWN0ZXIiLCJpbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEseUI7Ozs7Ozs7Ozs7OzhCQUNGQyxLLEVBQU87QUFDdEIsVUFBTUMsTUFBTSxHQUFHQyx5QkFBeUIsQ0FBQ0YsS0FBRCxFQUFRLEdBQVIsQ0FBeEM7QUFBQSxVQUNNRyxJQUFJLEdBQUdGLE1BRGI7QUFBQSxVQUNxQjtBQUNmRyxNQUFBQSxLQUFLLEdBQUcsQ0FBQ0QsSUFBRCxDQUZkO0FBQUEsVUFHTUUseUJBQXlCLEdBQUcsSUFBSU4seUJBQUosQ0FBOEJLLEtBQTlCLENBSGxDO0FBS0EsYUFBT0MseUJBQVA7QUFDRDs7OztFQVJvREMscUI7Ozs7QUFXdkQsU0FBU0oseUJBQVQsQ0FBbUNLLGVBQW5DLEVBQW9EQyxTQUFwRCxFQUErRDtBQUM3RCxNQUFJUCxNQUFNLEdBQUcsRUFBYjs7QUFFQSxPQUFLLElBQUlRLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHRixlQUE1QixFQUE2Q0UsS0FBSyxFQUFsRCxFQUFzRDtBQUNwRFIsSUFBQUEsTUFBTSxJQUFJTyxTQUFWO0FBQ0Q7O0FBRUQsU0FBT1AsTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYXJzZVRyZWUgZnJvbSBcIi4uL3BhcnNlVHJlZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIGV4dGVuZHMgUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21XaWR0aCh3aWR0aCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21DaGFyYWN0ZXJzV2lkdGgod2lkdGgsIFwiLVwiKSxcbiAgICAgICAgICBsaW5lID0gc3RyaW5nLCAvLy9cbiAgICAgICAgICBsaW5lcyA9IFtsaW5lXSxcbiAgICAgICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlID0gbmV3IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUobGluZXMpO1xuXG4gICAgcmV0dXJuIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUNoYXJhY3RlcnNXaWR0aChjaGFyYWN0ZXJzV2lkdGgsIGNoYXJhY3Rlcikge1xuICBsZXQgc3RyaW5nID0gXCJcIjtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2hhcmFjdGVyc1dpZHRoOyBpbmRleCsrKSB7XG4gICAgc3RyaW5nICs9IGNoYXJhY3RlcjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXX0=