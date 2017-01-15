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
            nodes = firstProduction.parse(context, this.productions, noWhitespace);

        if (nodes !== null) {
          var firstNode = first(nodes);

          documentNode = firstNode; ///

          documentNode.update();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwiQ29tbW9uUGFyc2VyIiwicHJvZHVjdGlvbnMiLCJ0b2tlbnMiLCJkb2N1bWVudE5vZGUiLCJjb250ZXh0IiwicHJvZHVjdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJub1doaXRlc3BhY2UiLCJmaXJzdFByb2R1Y3Rpb24iLCJmaXJzdCIsIm5vZGVzIiwicGFyc2UiLCJmaXJzdE5vZGUiLCJ1cGRhdGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxVQUFVQyxRQUFRLFdBQVIsQ0FBZDs7SUFFTUMsWTtBQUNKLHdCQUFZQyxXQUFaLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7Ozs7MEJBRUtDLE0sRUFBUTtBQUNaLFVBQUlDLGVBQWUsSUFBbkI7QUFBQSxVQUNJQyxVQUFVLElBQUlOLE9BQUosQ0FBWUksTUFBWixDQURkO0FBQUEsVUFFSUcsb0JBQW9CLEtBQUtKLFdBQUwsQ0FBaUJLLE1BRnpDOztBQUlBLFVBQUlELG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QixZQUFJRSxlQUFlLEtBQW5CO0FBQUEsWUFDSUMsa0JBQWtCQyxNQUFNLEtBQUtSLFdBQVgsQ0FEdEI7QUFBQSxZQUVJUyxRQUFRRixnQkFBZ0JHLEtBQWhCLENBQXNCUCxPQUF0QixFQUErQixLQUFLSCxXQUFwQyxFQUFpRE0sWUFBakQsQ0FGWjs7QUFJQSxZQUFJRyxVQUFVLElBQWQsRUFBb0I7QUFDbEIsY0FBSUUsWUFBWUgsTUFBTUMsS0FBTixDQUFoQjs7QUFFQVAseUJBQWVTLFNBQWYsQ0FIa0IsQ0FHUTs7QUFFMUJULHVCQUFhVSxNQUFiO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPVixZQUFQO0FBQ0Q7Ozs7OztBQUdIVyxPQUFPQyxPQUFQLEdBQWlCZixZQUFqQjs7QUFFQSxTQUFTUyxLQUFULENBQWVPLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0Jyk7XG5cbmNsYXNzIENvbW1vblBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25zKSB7XG4gICAgdGhpcy5wcm9kdWN0aW9ucyA9IHByb2R1Y3Rpb25zO1xuICB9XG4gIFxuICBwYXJzZSh0b2tlbnMpIHtcbiAgICB2YXIgZG9jdW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgY29udGV4dCA9IG5ldyBDb250ZXh0KHRva2VucyksXG4gICAgICAgIHByb2R1Y3Rpb25zTGVuZ3RoID0gdGhpcy5wcm9kdWN0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAocHJvZHVjdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICB2YXIgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgZmlyc3RQcm9kdWN0aW9uID0gZmlyc3QodGhpcy5wcm9kdWN0aW9ucyksXG4gICAgICAgICAgbm9kZXMgPSBmaXJzdFByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgdGhpcy5wcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgaWYgKG5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBmaXJzdE5vZGUgPSBmaXJzdChub2Rlcyk7XG5cbiAgICAgICAgZG9jdW1lbnROb2RlID0gZmlyc3ROb2RlOyAvLy9cblxuICAgICAgICBkb2N1bWVudE5vZGUudXBkYXRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvY3VtZW50Tm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vblBhcnNlcjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=