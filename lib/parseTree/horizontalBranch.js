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
      var str = strFromCharactersWidth(width, '-'),
          line = str,
          ///
      lines = [line],
          horizontalBranchParseTree = new HorizontalBranchParseTree(lines);

      return horizontalBranchParseTree;
    }
  }]);

  return HorizontalBranchParseTree;
}(ParseTree);

module.exports = HorizontalBranchParseTree;

function strFromCharactersWidth(charactersWidth, character) {
  var str = '';

  for (var index = 0; index < charactersWidth; index++) {
    str += character;
  }

  return str;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJzZVRyZWUvaG9yaXpvbnRhbEJyYW5jaC5qcyJdLCJuYW1lcyI6WyJQYXJzZVRyZWUiLCJyZXF1aXJlIiwiSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSIsIndpZHRoIiwic3RyIiwic3RyRnJvbUNoYXJhY3RlcnNXaWR0aCIsImxpbmUiLCJsaW5lcyIsImhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2hhcmFjdGVyc1dpZHRoIiwiY2hhcmFjdGVyIiwiaW5kZXgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsWUFBWUMsUUFBUSxjQUFSLENBQWhCOztJQUVNQyx5Qjs7Ozs7Ozs7Ozs7OEJBQ2FDLEssRUFBTztBQUN0QixVQUFJQyxNQUFNQyx1QkFBdUJGLEtBQXZCLEVBQThCLEdBQTlCLENBQVY7QUFBQSxVQUNJRyxPQUFPRixHQURYO0FBQUEsVUFDZ0I7QUFDWkcsY0FBUSxDQUFDRCxJQUFELENBRlo7QUFBQSxVQUdJRSw0QkFBNEIsSUFBSU4seUJBQUosQ0FBOEJLLEtBQTlCLENBSGhDOztBQUtBLGFBQU9DLHlCQUFQO0FBQ0Q7Ozs7RUFScUNSLFM7O0FBV3hDUyxPQUFPQyxPQUFQLEdBQWlCUix5QkFBakI7O0FBRUEsU0FBU0csc0JBQVQsQ0FBZ0NNLGVBQWhDLEVBQWlEQyxTQUFqRCxFQUE0RDtBQUMxRCxNQUFJUixNQUFNLEVBQVY7O0FBRUEsT0FBSyxJQUFJUyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRRixlQUE1QixFQUE2Q0UsT0FBN0MsRUFBc0Q7QUFDcERULFdBQU9RLFNBQVA7QUFDRDs7QUFFRCxTQUFPUixHQUFQO0FBQ0QiLCJmaWxlIjoiaG9yaXpvbnRhbEJyYW5jaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZScpO1xuXG5jbGFzcyBIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIGV4dGVuZHMgUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21XaWR0aCh3aWR0aCkge1xuICAgIHZhciBzdHIgPSBzdHJGcm9tQ2hhcmFjdGVyc1dpZHRoKHdpZHRoLCAnLScpLFxuICAgICAgICBsaW5lID0gc3RyLCAvLy9cbiAgICAgICAgbGluZXMgPSBbbGluZV0sXG4gICAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgPSBuZXcgSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZShsaW5lcyk7XG5cbiAgICByZXR1cm4gaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWU7XG5cbmZ1bmN0aW9uIHN0ckZyb21DaGFyYWN0ZXJzV2lkdGgoY2hhcmFjdGVyc1dpZHRoLCBjaGFyYWN0ZXIpIHtcbiAgdmFyIHN0ciA9ICcnO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBjaGFyYWN0ZXJzV2lkdGg7IGluZGV4KyspIHtcbiAgICBzdHIgKz0gY2hhcmFjdGVyO1xuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn1cbiJdfQ==