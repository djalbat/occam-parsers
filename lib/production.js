'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    ErrorNode = require('./node/terminal/error'),
    NonTerminalNode = require('./node/nonTerminal');

var Production = function () {
  function Production(name, rules, Node) {
    _classCallCheck(this, Production);

    this.name = name;
    this.rules = rules;
    this.Node = Node;
  }

  _createClass(Production, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      var nodes = null;

      this.rules.some(function (rule) {
        nodes = rule.parse(context, productions, noWhitespace);

        var parsed = nodes !== null;

        return parsed;
      });

      var parsed = nodes !== null;

      if (parsed) {
        var firstNode = first(nodes);

        if (firstNode instanceof ErrorNode) {} else {
          var productionName = this.name; ///

          nodes = this.Node.fromNodes(nodes, productionName);
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromLine',
    value: function fromLine(line, terminalSymbolsRegExp, significantTokenTypes, mappings) {
      var name = line.getName(),
          rules = line.mapSymbolSequences(function (symbolSequence) {
        var rule = Rule.fromSymbolSequence(symbolSequence, terminalSymbolsRegExp, significantTokenTypes);

        return rule;
      }),
          Node = mappings[name] || NonTerminalNode,
          ///
      production = new Production(name, rules, Node);

      return production;
    }
  }]);

  return Production;
}();

module.exports = Production;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiRXJyb3JOb2RlIiwiTm9uVGVybWluYWxOb2RlIiwiUHJvZHVjdGlvbiIsIm5hbWUiLCJydWxlcyIsIk5vZGUiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub1doaXRlc3BhY2UiLCJub2RlcyIsInNvbWUiLCJydWxlIiwicGFyc2UiLCJwYXJzZWQiLCJmaXJzdE5vZGUiLCJmaXJzdCIsInByb2R1Y3Rpb25OYW1lIiwiZnJvbU5vZGVzIiwibGluZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIm1hcHBpbmdzIiwiZ2V0TmFtZSIsIm1hcFN5bWJvbFNlcXVlbmNlcyIsInN5bWJvbFNlcXVlbmNlIiwiZnJvbVN5bWJvbFNlcXVlbmNlIiwicHJvZHVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsWUFBWUQsUUFBUSx1QkFBUixDQURoQjtBQUFBLElBRUlFLGtCQUFrQkYsUUFBUSxvQkFBUixDQUZ0Qjs7SUFJTUcsVTtBQUNKLHNCQUFZQyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QkMsSUFBekIsRUFBK0I7QUFBQTs7QUFDN0IsU0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtGLElBQVo7QUFDRDs7OzBCQUVLRyxPLEVBQVNDLFcsRUFBYUMsWSxFQUFjO0FBQ3hDLFVBQUlDLFFBQVEsSUFBWjs7QUFFQSxXQUFLTCxLQUFMLENBQVdNLElBQVgsQ0FBZ0IsVUFBU0MsSUFBVCxFQUFlO0FBQzdCRixnQkFBUUUsS0FBS0MsS0FBTCxDQUFXTixPQUFYLEVBQW9CQyxXQUFwQixFQUFpQ0MsWUFBakMsQ0FBUjs7QUFFQSxZQUFJSyxTQUFVSixVQUFVLElBQXhCOztBQUVBLGVBQU9JLE1BQVA7QUFDRCxPQU5EOztBQVFBLFVBQUlBLFNBQVVKLFVBQVUsSUFBeEI7O0FBRUEsVUFBSUksTUFBSixFQUFZO0FBQ1YsWUFBSUMsWUFBWUMsTUFBTU4sS0FBTixDQUFoQjs7QUFFQSxZQUFJSyxxQkFBcUJkLFNBQXpCLEVBQW9DLENBRW5DLENBRkQsTUFFTztBQUNMLGNBQUlnQixpQkFBaUIsS0FBS2IsSUFBMUIsQ0FESyxDQUMyQjs7QUFFaENNLGtCQUFRLEtBQUtKLElBQUwsQ0FBVVksU0FBVixDQUFvQlIsS0FBcEIsRUFBMkJPLGNBQTNCLENBQVI7QUFDRDtBQUNGOztBQUVELGFBQU9QLEtBQVA7QUFDRDs7OzZCQUVlUyxJLEVBQU1DLHFCLEVBQXVCQyxxQixFQUF1QkMsUSxFQUFVO0FBQzVFLFVBQUlsQixPQUFPZSxLQUFLSSxPQUFMLEVBQVg7QUFBQSxVQUNJbEIsUUFBUWMsS0FBS0ssa0JBQUwsQ0FBd0IsVUFBU0MsY0FBVCxFQUF5QjtBQUN2RCxZQUFJYixPQUFPYixLQUFLMkIsa0JBQUwsQ0FBd0JELGNBQXhCLEVBQXdDTCxxQkFBeEMsRUFBK0RDLHFCQUEvRCxDQUFYOztBQUVBLGVBQU9ULElBQVA7QUFDRCxPQUpPLENBRFo7QUFBQSxVQU1JTixPQUFPZ0IsU0FBU2xCLElBQVQsS0FBa0JGLGVBTjdCO0FBQUEsVUFNOEM7QUFDMUN5QixtQkFBYSxJQUFJeEIsVUFBSixDQUFlQyxJQUFmLEVBQXFCQyxLQUFyQixFQUE0QkMsSUFBNUIsQ0FQakI7O0FBU0EsYUFBT3FCLFVBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUIxQixVQUFqQjs7QUFFQSxTQUFTYSxLQUFULENBQWVjLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJwcm9kdWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxuICAgIEVycm9yTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS90ZXJtaW5hbC9lcnJvcicpLFxuICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcnVsZXMsIE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLk5vZGUgPSBOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG4gIFxuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIG5vZGVzID0gbnVsbDtcblxuICAgIHRoaXMucnVsZXMuc29tZShmdW5jdGlvbihydWxlKSB7XG4gICAgICBub2RlcyA9IHJ1bGUucGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIHZhciBwYXJzZWQgPSAobm9kZXMgIT09IG51bGwpO1xuXG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH0pO1xuXG4gICAgdmFyIHBhcnNlZCA9IChub2RlcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICB2YXIgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpO1xuXG4gICAgICBpZiAoZmlyc3ROb2RlIGluc3RhbmNlb2YgRXJyb3JOb2RlKSB7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBwcm9kdWN0aW9uTmFtZSA9IHRoaXMubmFtZTsgLy8vXG5cbiAgICAgICAgbm9kZXMgPSB0aGlzLk5vZGUuZnJvbU5vZGVzKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncykge1xuICAgIHZhciBuYW1lID0gbGluZS5nZXROYW1lKCksXG4gICAgICAgIHJ1bGVzID0gbGluZS5tYXBTeW1ib2xTZXF1ZW5jZXMoZnVuY3Rpb24oc3ltYm9sU2VxdWVuY2UpIHtcbiAgICAgICAgICB2YXIgcnVsZSA9IFJ1bGUuZnJvbVN5bWJvbFNlcXVlbmNlKHN5bWJvbFNlcXVlbmNlLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcyk7XG5cbiAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfSksXG4gICAgICAgIE5vZGUgPSBtYXBwaW5nc1tuYW1lXSB8fCBOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICBwcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==