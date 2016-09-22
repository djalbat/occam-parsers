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
            nodes = firstProduction.parse(input, context, this.productions);

        if (nodes !== null) {
          var childNodes = nodes; ///

          documentNode.addChildNodes(childNodes);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wYXJzZXIuanMiXSwibmFtZXMiOlsiQ29udGV4dCIsInJlcXVpcmUiLCJEb2N1bWVudE5vZGUiLCJQYXJzZXIiLCJwcm9kdWN0aW9ucyIsImlucHV0IiwiZG9jdW1lbnROb2RlIiwiY29udGV4dCIsInByb2R1Y3Rpb25zTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RQcm9kdWN0aW9uIiwiZmlyc3QiLCJub2RlcyIsInBhcnNlIiwiY2hpbGROb2RlcyIsImFkZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxVQUFVQyxRQUFRLFdBQVIsQ0FBZDtBQUFBLElBQ0lDLGVBQWVELFFBQVEsaUJBQVIsQ0FEbkI7O0lBR01FLE07QUFDSixrQkFBWUMsV0FBWixFQUF5QjtBQUFBOztBQUN2QixTQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7OzBCQUVLQyxLLEVBQU87QUFDWCxVQUFJQyxlQUFlLElBQUlKLFlBQUosRUFBbkI7QUFBQSxVQUNJSyxVQUFVLElBQUlQLE9BQUosRUFEZDtBQUFBLFVBRUlRLG9CQUFvQixLQUFLSixXQUFMLENBQWlCSyxNQUZ6Qzs7QUFJQSxVQUFJRCxvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekIsWUFBSUUsa0JBQWtCQyxNQUFNLEtBQUtQLFdBQVgsQ0FBdEI7QUFBQSxZQUNJUSxRQUFRRixnQkFBZ0JHLEtBQWhCLENBQXNCUixLQUF0QixFQUE2QkUsT0FBN0IsRUFBc0MsS0FBS0gsV0FBM0MsQ0FEWjs7QUFHQSxZQUFJUSxVQUFVLElBQWQsRUFBb0I7QUFDbEIsY0FBSUUsYUFBYUYsS0FBakIsQ0FEa0IsQ0FDTTs7QUFFeEJOLHVCQUFhUyxhQUFiLENBQTJCRCxVQUEzQjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT1IsWUFBUDtBQUNEOzs7Ozs7QUFHSFUsT0FBT0MsT0FBUCxHQUFpQmQsTUFBakI7O0FBRUEsU0FBU1EsS0FBVCxDQUFlTyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpLFxuICAgIERvY3VtZW50Tm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9kb2N1bWVudCcpO1xuXG5jbGFzcyBQYXJzZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9ucykge1xuICAgIHRoaXMucHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucztcbiAgfVxuICBcbiAgcGFyc2UoaW5wdXQpIHtcbiAgICB2YXIgZG9jdW1lbnROb2RlID0gbmV3IERvY3VtZW50Tm9kZSgpLFxuICAgICAgICBjb250ZXh0ID0gbmV3IENvbnRleHQoKSxcbiAgICAgICAgcHJvZHVjdGlvbnNMZW5ndGggPSB0aGlzLnByb2R1Y3Rpb25zLmxlbmd0aDtcblxuICAgIGlmIChwcm9kdWN0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIHZhciBmaXJzdFByb2R1Y3Rpb24gPSBmaXJzdCh0aGlzLnByb2R1Y3Rpb25zKSxcbiAgICAgICAgICBub2RlcyA9IGZpcnN0UHJvZHVjdGlvbi5wYXJzZShpbnB1dCwgY29udGV4dCwgdGhpcy5wcm9kdWN0aW9ucyk7XG5cbiAgICAgIGlmIChub2RlcyAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgY2hpbGROb2RlcyA9IG5vZGVzOyAvLy9cblxuICAgICAgICBkb2N1bWVudE5vZGUuYWRkQ2hpbGROb2RlcyhjaGlsZE5vZGVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZG9jdW1lbnROb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VyO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==