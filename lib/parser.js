'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = require('./context'),
    DocumentNode = require('./node/document');

var Parser = function () {
  function Parser(productions) {
    _classCallCheck(this, Parser);

    this.productions = productions;
  }

  _createClass(Parser, [{
    key: 'parse',
    value: function parse(input) {
      var documentNode = new DocumentNode(),
          context = new Context(),
          productionsLength = this.productions.length;

      if (productionsLength > 0) {
        var firstProduction = first(this.productions),
            nodes = firstProduction.parse(input, context, this.productions),
            childNodes = nodes; ///

        documentNode.addChildNodes(childNodes);
      }

      return documentNode;
    }
  }]);

  return Parser;
}();

module.exports = Parser;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wYXJzZXIuanMiXSwibmFtZXMiOlsiQ29udGV4dCIsInJlcXVpcmUiLCJEb2N1bWVudE5vZGUiLCJQYXJzZXIiLCJwcm9kdWN0aW9ucyIsImlucHV0IiwiZG9jdW1lbnROb2RlIiwiY29udGV4dCIsInByb2R1Y3Rpb25zTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RQcm9kdWN0aW9uIiwiZmlyc3QiLCJub2RlcyIsInBhcnNlIiwiY2hpbGROb2RlcyIsImFkZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxVQUFVQyxRQUFRLFdBQVIsQ0FBZDtBQUFBLElBQ0lDLGVBQWVELFFBQVEsaUJBQVIsQ0FEbkI7O0lBR01FLE07QUFDSixrQkFBWUMsV0FBWixFQUF5QjtBQUFBOztBQUN2QixTQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7OzBCQUVLQyxLLEVBQU87QUFDWCxVQUFJQyxlQUFlLElBQUlKLFlBQUosRUFBbkI7QUFBQSxVQUNJSyxVQUFVLElBQUlQLE9BQUosRUFEZDtBQUFBLFVBRUlRLG9CQUFvQixLQUFLSixXQUFMLENBQWlCSyxNQUZ6Qzs7QUFJQSxVQUFJRCxvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekIsWUFBSUUsa0JBQWtCQyxNQUFNLEtBQUtQLFdBQVgsQ0FBdEI7QUFBQSxZQUNJUSxRQUFRRixnQkFBZ0JHLEtBQWhCLENBQXNCUixLQUF0QixFQUE2QkUsT0FBN0IsRUFBc0MsS0FBS0gsV0FBM0MsQ0FEWjtBQUFBLFlBRUlVLGFBQWFGLEtBRmpCLENBRHlCLENBR0Q7O0FBRXhCTixxQkFBYVMsYUFBYixDQUEyQkQsVUFBM0I7QUFDRDs7QUFFRCxhQUFPUixZQUFQO0FBQ0Q7Ozs7OztBQUdIVSxPQUFPQyxPQUFQLEdBQWlCZCxNQUFqQjs7QUFFQSxTQUFTUSxLQUFULENBQWVPLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0JyksXG4gICAgRG9jdW1lbnROb2RlID0gcmVxdWlyZSgnLi9ub2RlL2RvY3VtZW50Jyk7XG5cbmNsYXNzIFBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25zKSB7XG4gICAgdGhpcy5wcm9kdWN0aW9ucyA9IHByb2R1Y3Rpb25zO1xuICB9XG4gIFxuICBwYXJzZShpbnB1dCkge1xuICAgIHZhciBkb2N1bWVudE5vZGUgPSBuZXcgRG9jdW1lbnROb2RlKCksXG4gICAgICAgIGNvbnRleHQgPSBuZXcgQ29udGV4dCgpLFxuICAgICAgICBwcm9kdWN0aW9uc0xlbmd0aCA9IHRoaXMucHJvZHVjdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKHByb2R1Y3Rpb25zTGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGZpcnN0UHJvZHVjdGlvbiA9IGZpcnN0KHRoaXMucHJvZHVjdGlvbnMpLFxuICAgICAgICAgIG5vZGVzID0gZmlyc3RQcm9kdWN0aW9uLnBhcnNlKGlucHV0LCBjb250ZXh0LCB0aGlzLnByb2R1Y3Rpb25zKSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9kZXM7IC8vL1xuICAgICAgXG4gICAgICBkb2N1bWVudE5vZGUuYWRkQ2hpbGROb2RlcyhjaGlsZE5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9jdW1lbnROb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VyO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==