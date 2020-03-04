'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ParseTree = require('../parseTree');

var HorizontalBranchParseTree = /*#__PURE__*/function (_ParseTree) {
  _inherits(HorizontalBranchParseTree, _ParseTree);

  function HorizontalBranchParseTree() {
    _classCallCheck(this, HorizontalBranchParseTree);

    return _possibleConstructorReturn(this, _getPrototypeOf(HorizontalBranchParseTree).apply(this, arguments));
  }

  _createClass(HorizontalBranchParseTree, null, [{
    key: "fromWidth",
    value: function fromWidth(width) {
      var string = stringFromCharactersWidth(width, '-'),
          line = string,
          ///
      lines = [line],
          horizontalBranchParseTree = new HorizontalBranchParseTree(lines);
      return horizontalBranchParseTree;
    }
  }]);

  return HorizontalBranchParseTree;
}(ParseTree);

module.exports = HorizontalBranchParseTree;

function stringFromCharactersWidth(charactersWidth, character) {
  var string = '';

  for (var index = 0; index < charactersWidth; index++) {
    string += character;
  }

  return string;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWxCcmFuY2guanMiXSwibmFtZXMiOlsiUGFyc2VUcmVlIiwicmVxdWlyZSIsIkhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUiLCJ3aWR0aCIsInN0cmluZyIsInN0cmluZ0Zyb21DaGFyYWN0ZXJzV2lkdGgiLCJsaW5lIiwibGluZXMiLCJob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIiwibW9kdWxlIiwiZXhwb3J0cyIsImNoYXJhY3RlcnNXaWR0aCIsImNoYXJhY3RlciIsImluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXpCOztJQUVNQyx5Qjs7Ozs7Ozs7Ozs7OEJBQ2FDLEssRUFBTztBQUN0QixVQUFNQyxNQUFNLEdBQUdDLHlCQUF5QixDQUFDRixLQUFELEVBQVEsR0FBUixDQUF4QztBQUFBLFVBQ01HLElBQUksR0FBR0YsTUFEYjtBQUFBLFVBQ3FCO0FBQ2ZHLE1BQUFBLEtBQUssR0FBRyxDQUFDRCxJQUFELENBRmQ7QUFBQSxVQUdNRSx5QkFBeUIsR0FBRyxJQUFJTix5QkFBSixDQUE4QkssS0FBOUIsQ0FIbEM7QUFLQSxhQUFPQyx5QkFBUDtBQUNEOzs7O0VBUnFDUixTOztBQVd4Q1MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUix5QkFBakI7O0FBRUEsU0FBU0cseUJBQVQsQ0FBbUNNLGVBQW5DLEVBQW9EQyxTQUFwRCxFQUErRDtBQUM3RCxNQUFJUixNQUFNLEdBQUcsRUFBYjs7QUFFQSxPQUFLLElBQUlTLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHRixlQUE1QixFQUE2Q0UsS0FBSyxFQUFsRCxFQUFzRDtBQUNwRFQsSUFBQUEsTUFBTSxJQUFJUSxTQUFWO0FBQ0Q7O0FBRUQsU0FBT1IsTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUnKTtcblxuY2xhc3MgSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSBleHRlbmRzIFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tV2lkdGgod2lkdGgpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tQ2hhcmFjdGVyc1dpZHRoKHdpZHRoLCAnLScpLFxuICAgICAgICAgIGxpbmUgPSBzdHJpbmcsIC8vL1xuICAgICAgICAgIGxpbmVzID0gW2xpbmVdLFxuICAgICAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgPSBuZXcgSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZShsaW5lcyk7XG5cbiAgICByZXR1cm4gaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWU7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21DaGFyYWN0ZXJzV2lkdGgoY2hhcmFjdGVyc1dpZHRoLCBjaGFyYWN0ZXIpIHtcbiAgbGV0IHN0cmluZyA9ICcnO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaGFyYWN0ZXJzV2lkdGg7IGluZGV4KyspIHtcbiAgICBzdHJpbmcgKz0gY2hhcmFjdGVyO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdfQ==