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
            maximumDepth = context.getMaximumDepth(),
            depth = context.getDepth();

        if (depth < maximumDepth) {
          if (nodes !== null) {
            var firstNode = first(nodes);

            documentNode = firstNode; ///
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwiQ29tbW9uUGFyc2VyIiwicHJvZHVjdGlvbnMiLCJ0b2tlbnMiLCJkb2N1bWVudE5vZGUiLCJjb250ZXh0IiwicHJvZHVjdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJub1doaXRlc3BhY2UiLCJmaXJzdFByb2R1Y3Rpb24iLCJmaXJzdCIsIm5vZGVzIiwicGFyc2UiLCJtYXhpbXVtRGVwdGgiLCJnZXRNYXhpbXVtRGVwdGgiLCJkZXB0aCIsImdldERlcHRoIiwiZmlyc3ROb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsVUFBVUMsUUFBUSxXQUFSLENBQWQ7O0lBRU1DLFk7QUFDSix3QkFBWUMsV0FBWixFQUF5QjtBQUFBOztBQUN2QixTQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7OzBCQUVLQyxNLEVBQVE7QUFDWixVQUFJQyxlQUFlLElBQW5CO0FBQUEsVUFDSUMsVUFBVSxJQUFJTixPQUFKLENBQVlJLE1BQVosQ0FEZDtBQUFBLFVBRUlHLG9CQUFvQixLQUFLSixXQUFMLENBQWlCSyxNQUZ6Qzs7QUFJQSxVQUFJRCxvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekIsWUFBSUUsZUFBZSxLQUFuQjtBQUFBLFlBQ0lDLGtCQUFrQkMsTUFBTSxLQUFLUixXQUFYLENBRHRCO0FBQUEsWUFFSVMsUUFBUUYsZ0JBQWdCRyxLQUFoQixDQUFzQlAsT0FBdEIsRUFBK0IsS0FBS0gsV0FBcEMsRUFBaURNLFlBQWpELENBRlo7QUFBQSxZQUdJSyxlQUFlUixRQUFRUyxlQUFSLEVBSG5CO0FBQUEsWUFJSUMsUUFBUVYsUUFBUVcsUUFBUixFQUpaOztBQU1BLFlBQUlELFFBQVFGLFlBQVosRUFBMEI7QUFDeEIsY0FBSUYsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLGdCQUFJTSxZQUFZUCxNQUFNQyxLQUFOLENBQWhCOztBQUVBUCwyQkFBZWEsU0FBZixDQUhrQixDQUdRO0FBQzNCO0FBQ0Y7QUFDRjs7QUFFRCxhQUFPYixZQUFQO0FBQ0Q7Ozs7OztBQUdIYyxPQUFPQyxPQUFQLEdBQWlCbEIsWUFBakI7O0FBRUEsU0FBU1MsS0FBVCxDQUFlVSxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpO1xuXG5jbGFzcyBDb21tb25QYXJzZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9ucykge1xuICAgIHRoaXMucHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucztcbiAgfVxuICBcbiAgcGFyc2UodG9rZW5zKSB7XG4gICAgdmFyIGRvY3VtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0b2tlbnMpLFxuICAgICAgICBwcm9kdWN0aW9uc0xlbmd0aCA9IHRoaXMucHJvZHVjdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKHByb2R1Y3Rpb25zTGVuZ3RoID4gMCkge1xuICAgICAgdmFyIG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIGZpcnN0UHJvZHVjdGlvbiA9IGZpcnN0KHRoaXMucHJvZHVjdGlvbnMpLFxuICAgICAgICAgIG5vZGVzID0gZmlyc3RQcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIHRoaXMucHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgbWF4aW11bURlcHRoID0gY29udGV4dC5nZXRNYXhpbXVtRGVwdGgoKSxcbiAgICAgICAgICBkZXB0aCA9IGNvbnRleHQuZ2V0RGVwdGgoKTtcblxuICAgICAgaWYgKGRlcHRoIDwgbWF4aW11bURlcHRoKSB7XG4gICAgICAgIGlmIChub2RlcyAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhciBmaXJzdE5vZGUgPSBmaXJzdChub2Rlcyk7XG5cbiAgICAgICAgICBkb2N1bWVudE5vZGUgPSBmaXJzdE5vZGU7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvY3VtZW50Tm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vblBhcnNlcjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=