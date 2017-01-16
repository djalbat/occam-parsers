'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = require('./context');

var CommonParser = function () {
  function CommonParser(productions) {
    _classCallCheck(this, CommonParser);

    this.productions = productions;
  }

  _createClass(CommonParser, [{
    key: 'parse',
    value: function parse(tokens) {
      var documentNode = null,
          context = new Context(tokens),
          productionsLength = this.productions.length;

      if (productionsLength > 0) {
        var noWhitespace = false,
            firstProduction = first(this.productions),
            nodes = firstProduction.parse(context, this.productions, noWhitespace),
            depth = context.getDepth(),
            maximumDepth = context.getMaximumDepth();

        if (depth < maximumDepth) {
          if (nodes !== null) {
            var firstNode = first(nodes);

            documentNode = firstNode; ///

            documentNode.update();
          }
        }
      }

      return documentNode;
    }
  }]);

  return CommonParser;
}();

module.exports = CommonParser;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwiQ29tbW9uUGFyc2VyIiwicHJvZHVjdGlvbnMiLCJ0b2tlbnMiLCJkb2N1bWVudE5vZGUiLCJjb250ZXh0IiwicHJvZHVjdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJub1doaXRlc3BhY2UiLCJmaXJzdFByb2R1Y3Rpb24iLCJmaXJzdCIsIm5vZGVzIiwicGFyc2UiLCJkZXB0aCIsImdldERlcHRoIiwibWF4aW11bURlcHRoIiwiZ2V0TWF4aW11bURlcHRoIiwiZmlyc3ROb2RlIiwidXBkYXRlIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsVUFBVUMsUUFBUSxXQUFSLENBQWQ7O0lBRU1DLFk7QUFDSix3QkFBWUMsV0FBWixFQUF5QjtBQUFBOztBQUN2QixTQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7OzBCQUVLQyxNLEVBQVE7QUFDWixVQUFJQyxlQUFlLElBQW5CO0FBQUEsVUFDSUMsVUFBVSxJQUFJTixPQUFKLENBQVlJLE1BQVosQ0FEZDtBQUFBLFVBRUlHLG9CQUFvQixLQUFLSixXQUFMLENBQWlCSyxNQUZ6Qzs7QUFJQSxVQUFJRCxvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekIsWUFBSUUsZUFBZSxLQUFuQjtBQUFBLFlBQ0lDLGtCQUFrQkMsTUFBTSxLQUFLUixXQUFYLENBRHRCO0FBQUEsWUFFSVMsUUFBUUYsZ0JBQWdCRyxLQUFoQixDQUFzQlAsT0FBdEIsRUFBK0IsS0FBS0gsV0FBcEMsRUFBaURNLFlBQWpELENBRlo7QUFBQSxZQUdJSyxRQUFRUixRQUFRUyxRQUFSLEVBSFo7QUFBQSxZQUlJQyxlQUFlVixRQUFRVyxlQUFSLEVBSm5COztBQU1BLFlBQUlILFFBQVFFLFlBQVosRUFBMEI7QUFDeEIsY0FBSUosVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLGdCQUFJTSxZQUFZUCxNQUFNQyxLQUFOLENBQWhCOztBQUVBUCwyQkFBZWEsU0FBZixDQUhrQixDQUdROztBQUUxQmIseUJBQWFjLE1BQWI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBT2QsWUFBUDtBQUNEOzs7Ozs7QUFHSGUsT0FBT0MsT0FBUCxHQUFpQm5CLFlBQWpCOztBQUVBLFNBQVNTLEtBQVQsQ0FBZVcsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKTtcblxuY2xhc3MgQ29tbW9uUGFyc2VyIHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbnMpIHtcbiAgICB0aGlzLnByb2R1Y3Rpb25zID0gcHJvZHVjdGlvbnM7XG4gIH1cbiAgXG4gIHBhcnNlKHRva2Vucykge1xuICAgIHZhciBkb2N1bWVudE5vZGUgPSBudWxsLFxuICAgICAgICBjb250ZXh0ID0gbmV3IENvbnRleHQodG9rZW5zKSxcbiAgICAgICAgcHJvZHVjdGlvbnNMZW5ndGggPSB0aGlzLnByb2R1Y3Rpb25zLmxlbmd0aDtcblxuICAgIGlmIChwcm9kdWN0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIHZhciBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBmaXJzdFByb2R1Y3Rpb24gPSBmaXJzdCh0aGlzLnByb2R1Y3Rpb25zKSxcbiAgICAgICAgICBub2RlcyA9IGZpcnN0UHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCB0aGlzLnByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIGRlcHRoID0gY29udGV4dC5nZXREZXB0aCgpLFxuICAgICAgICAgIG1heGltdW1EZXB0aCA9IGNvbnRleHQuZ2V0TWF4aW11bURlcHRoKCk7XG5cbiAgICAgIGlmIChkZXB0aCA8IG1heGltdW1EZXB0aCkge1xuICAgICAgICBpZiAobm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgICB2YXIgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpO1xuXG4gICAgICAgICAgZG9jdW1lbnROb2RlID0gZmlyc3ROb2RlOyAvLy9cblxuICAgICAgICAgIGRvY3VtZW50Tm9kZS51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkb2N1bWVudE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25QYXJzZXI7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19