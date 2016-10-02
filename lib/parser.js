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
    value: function parse(tokens) {
      var documentNode = new DocumentNode(),
          context = new Context(tokens),
          productionsLength = this.productions.length;

      if (productionsLength > 0) {
        var firstProduction = first(this.productions),
            nodes = firstProduction.parse(context, this.productions);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wYXJzZXIuanMiXSwibmFtZXMiOlsiQ29udGV4dCIsInJlcXVpcmUiLCJEb2N1bWVudE5vZGUiLCJQYXJzZXIiLCJwcm9kdWN0aW9ucyIsInRva2VucyIsImRvY3VtZW50Tm9kZSIsImNvbnRleHQiLCJwcm9kdWN0aW9uc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0UHJvZHVjdGlvbiIsImZpcnN0Iiwibm9kZXMiLCJwYXJzZSIsImNoaWxkTm9kZXMiLCJhZGRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsVUFBVUMsUUFBUSxXQUFSLENBQWQ7QUFBQSxJQUNJQyxlQUFlRCxRQUFRLGlCQUFSLENBRG5COztJQUdNRSxNO0FBQ0osa0JBQVlDLFdBQVosRUFBeUI7QUFBQTs7QUFDdkIsU0FBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7OzswQkFFS0MsTSxFQUFRO0FBQ1osVUFBSUMsZUFBZSxJQUFJSixZQUFKLEVBQW5CO0FBQUEsVUFDSUssVUFBVSxJQUFJUCxPQUFKLENBQVlLLE1BQVosQ0FEZDtBQUFBLFVBRUlHLG9CQUFvQixLQUFLSixXQUFMLENBQWlCSyxNQUZ6Qzs7QUFJQSxVQUFJRCxvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekIsWUFBSUUsa0JBQWtCQyxNQUFNLEtBQUtQLFdBQVgsQ0FBdEI7QUFBQSxZQUNJUSxRQUFRRixnQkFBZ0JHLEtBQWhCLENBQXNCTixPQUF0QixFQUErQixLQUFLSCxXQUFwQyxDQURaOztBQUdBLFlBQUlRLFVBQVUsSUFBZCxFQUFvQjtBQUNsQixjQUFJRSxhQUFhRixLQUFqQixDQURrQixDQUNNOztBQUV4Qk4sdUJBQWFTLGFBQWIsQ0FBMkJELFVBQTNCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPUixZQUFQO0FBQ0Q7Ozs7OztBQUdIVSxPQUFPQyxPQUFQLEdBQWlCZCxNQUFqQjs7QUFFQSxTQUFTUSxLQUFULENBQWVPLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0JyksXG4gICAgRG9jdW1lbnROb2RlID0gcmVxdWlyZSgnLi9ub2RlL2RvY3VtZW50Jyk7XG5cbmNsYXNzIFBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25zKSB7XG4gICAgdGhpcy5wcm9kdWN0aW9ucyA9IHByb2R1Y3Rpb25zO1xuICB9XG4gIFxuICBwYXJzZSh0b2tlbnMpIHtcbiAgICB2YXIgZG9jdW1lbnROb2RlID0gbmV3IERvY3VtZW50Tm9kZSgpLFxuICAgICAgICBjb250ZXh0ID0gbmV3IENvbnRleHQodG9rZW5zKSxcbiAgICAgICAgcHJvZHVjdGlvbnNMZW5ndGggPSB0aGlzLnByb2R1Y3Rpb25zLmxlbmd0aDtcblxuICAgIGlmIChwcm9kdWN0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIHZhciBmaXJzdFByb2R1Y3Rpb24gPSBmaXJzdCh0aGlzLnByb2R1Y3Rpb25zKSxcbiAgICAgICAgICBub2RlcyA9IGZpcnN0UHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCB0aGlzLnByb2R1Y3Rpb25zKTtcblxuICAgICAgaWYgKG5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBjaGlsZE5vZGVzID0gbm9kZXM7IC8vL1xuXG4gICAgICAgIGRvY3VtZW50Tm9kZS5hZGRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkb2N1bWVudE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZXI7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19