'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParseTree = require('../parseTree');

var HorizontalBranchParseTree = function (_ParseTree) {
  _inherits(HorizontalBranchParseTree, _ParseTree);

  function HorizontalBranchParseTree() {
    _classCallCheck(this, HorizontalBranchParseTree);

    return _possibleConstructorReturn(this, (HorizontalBranchParseTree.__proto__ || Object.getPrototypeOf(HorizontalBranchParseTree)).apply(this, arguments));
  }

  _createClass(HorizontalBranchParseTree, null, [{
    key: 'fromWidth',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFyc2VUcmVlL2hvcml6b250YWxCcmFuY2guanMiXSwibmFtZXMiOlsiUGFyc2VUcmVlIiwicmVxdWlyZSIsIkhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUiLCJ3aWR0aCIsInN0cmluZyIsInN0cmluZ0Zyb21DaGFyYWN0ZXJzV2lkdGgiLCJsaW5lIiwibGluZXMiLCJob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIiwibW9kdWxlIiwiZXhwb3J0cyIsImNoYXJhY3RlcnNXaWR0aCIsImNoYXJhY3RlciIsImluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsY0FBUixDQUFsQjs7SUFFTUMseUI7Ozs7Ozs7Ozs7OzhCQUNhQyxLLEVBQU87QUFDdEIsVUFBTUMsU0FBU0MsMEJBQTBCRixLQUExQixFQUFpQyxHQUFqQyxDQUFmO0FBQUEsVUFDTUcsT0FBT0YsTUFEYjtBQUFBLFVBQ3FCO0FBQ2ZHLGNBQVEsQ0FBQ0QsSUFBRCxDQUZkO0FBQUEsVUFHTUUsNEJBQTRCLElBQUlOLHlCQUFKLENBQThCSyxLQUE5QixDQUhsQzs7QUFLQSxhQUFPQyx5QkFBUDtBQUNEOzs7O0VBUnFDUixTOztBQVd4Q1MsT0FBT0MsT0FBUCxHQUFpQlIseUJBQWpCOztBQUVBLFNBQVNHLHlCQUFULENBQW1DTSxlQUFuQyxFQUFvREMsU0FBcEQsRUFBK0Q7QUFDN0QsTUFBSVIsU0FBUyxFQUFiOztBQUVBLE9BQUssSUFBSVMsUUFBUSxDQUFqQixFQUFvQkEsUUFBUUYsZUFBNUIsRUFBNkNFLE9BQTdDLEVBQXNEO0FBQ3BEVCxjQUFVUSxTQUFWO0FBQ0Q7O0FBRUQsU0FBT1IsTUFBUDtBQUNEIiwiZmlsZSI6Imhvcml6b250YWxCcmFuY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZScpO1xuXG5jbGFzcyBIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIGV4dGVuZHMgUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21XaWR0aCh3aWR0aCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21DaGFyYWN0ZXJzV2lkdGgod2lkdGgsICctJyksXG4gICAgICAgICAgbGluZSA9IHN0cmluZywgLy8vXG4gICAgICAgICAgbGluZXMgPSBbbGluZV0sXG4gICAgICAgICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSA9IG5ldyBIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgIHJldHVybiBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbUNoYXJhY3RlcnNXaWR0aChjaGFyYWN0ZXJzV2lkdGgsIGNoYXJhY3Rlcikge1xuICBsZXQgc3RyaW5nID0gJyc7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNoYXJhY3RlcnNXaWR0aDsgaW5kZXgrKykge1xuICAgIHN0cmluZyArPSBjaGFyYWN0ZXI7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl19