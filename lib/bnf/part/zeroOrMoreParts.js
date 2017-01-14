'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FatalErrorNode = require('../node/fatalError'),
    SequenceOfPartsPart = require('./sequenceOfParts');

var ZeroOrMorePartsPart = function (_SequenceOfPartsPart) {
  _inherits(ZeroOrMorePartsPart, _SequenceOfPartsPart);

  function ZeroOrMorePartsPart() {
    _classCallCheck(this, ZeroOrMorePartsPart);

    return _possibleConstructorReturn(this, (ZeroOrMorePartsPart.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsPart)).apply(this, arguments));
  }

  _createClass(ZeroOrMorePartsPart, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      noWhitespace = this.getNoWhitespace(); ///

      var nodes = null,
          fatalErrorNode,
          terminalPartOrProduction = this.terminalPartOrProduction(productions);

      if (terminalPartOrProduction !== null) {
        nodes = [];

        for (;;) {
          var terminalPartOrProductionNodes = terminalPartOrProduction.parse(context, productions, noWhitespace),
              terminalPartOrProductionParsed = terminalPartOrProductionNodes !== null;

          if (terminalPartOrProductionParsed) {
            if (terminalPartOrProductionNodes !== undefined) {
              var firstTerminalPartOrProductionNode = first(terminalPartOrProductionNodes);

              if (firstTerminalPartOrProductionNode instanceof FatalErrorNode) {
                fatalErrorNode = firstTerminalPartOrProductionNode;

                nodes = [fatalErrorNode];

                return nodes;
              } else {
                nodes = nodes.concat(terminalPartOrProductionNodes);
              }
            }
          } else {
            return nodes;
          }
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) {
      var regExp = /([^*]+)\*$/,
          Class = ZeroOrMorePartsPart,
          zeroOrMorePartsPart = _get(ZeroOrMorePartsPart.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsPart), 'fromSymbol', this).call(this, symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace, regExp, Class);

      return zeroOrMorePartsPart;
    }
  }, {
    key: 'fromOneOrMorePartsPart',
    value: function fromOneOrMorePartsPart(oneOrMorePartsPart) {
      var terminalPart = oneOrMorePartsPart.getTerminalPart(),
          productionName = oneOrMorePartsPart.getProductionName(),
          noWhitespace = oneOrMorePartsPart.getNoWhitespace(),
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(terminalPart, productionName, noWhitespace);

      return zeroOrMorePartsPart;
    }
  }]);

  return ZeroOrMorePartsPart;
}(SequenceOfPartsPart);

module.exports = ZeroOrMorePartsPart;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC96ZXJvT3JNb3JlUGFydHMuanMiXSwibmFtZXMiOlsiRmF0YWxFcnJvck5vZGUiLCJyZXF1aXJlIiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub1doaXRlc3BhY2UiLCJnZXROb1doaXRlc3BhY2UiLCJub2RlcyIsImZhdGFsRXJyb3JOb2RlIiwidGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uIiwidGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZXMiLCJwYXJzZSIsInRlcm1pbmFsUGFydE9yUHJvZHVjdGlvblBhcnNlZCIsInVuZGVmaW5lZCIsImZpcnN0VGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZSIsImZpcnN0IiwiY29uY2F0Iiwic3ltYm9sIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwicmVnRXhwIiwiQ2xhc3MiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0Iiwib25lT3JNb3JlUGFydHNQYXJ0IiwidGVybWluYWxQYXJ0IiwiZ2V0VGVybWluYWxQYXJ0IiwicHJvZHVjdGlvbk5hbWUiLCJnZXRQcm9kdWN0aW9uTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLGlCQUFpQkMsUUFBUSxvQkFBUixDQUFyQjtBQUFBLElBQ0lDLHNCQUFzQkQsUUFBUSxtQkFBUixDQUQxQjs7SUFHTUUsbUI7Ozs7Ozs7Ozs7OzBCQUNFQyxPLEVBQVNDLFcsRUFBYUMsWSxFQUFjO0FBQ3hDQSxxQkFBZSxLQUFLQyxlQUFMLEVBQWYsQ0FEd0MsQ0FDQTs7QUFFeEMsVUFBSUMsUUFBUSxJQUFaO0FBQUEsVUFDSUMsY0FESjtBQUFBLFVBRUlDLDJCQUEyQixLQUFLQSx3QkFBTCxDQUE4QkwsV0FBOUIsQ0FGL0I7O0FBSUEsVUFBSUssNkJBQTZCLElBQWpDLEVBQXVDO0FBQ3JDRixnQkFBUSxFQUFSOztBQUVBLGlCQUFRO0FBQ04sY0FBSUcsZ0NBQWdDRCx5QkFBeUJFLEtBQXpCLENBQStCUixPQUEvQixFQUF3Q0MsV0FBeEMsRUFBcURDLFlBQXJELENBQXBDO0FBQUEsY0FDSU8saUNBQWtDRixrQ0FBa0MsSUFEeEU7O0FBR0EsY0FBSUUsOEJBQUosRUFBb0M7QUFDbEMsZ0JBQUlGLGtDQUFrQ0csU0FBdEMsRUFBaUQ7QUFDL0Msa0JBQUlDLG9DQUFvQ0MsTUFBTUwsNkJBQU4sQ0FBeEM7O0FBRUEsa0JBQUlJLDZDQUE2Q2YsY0FBakQsRUFBaUU7QUFDL0RTLGlDQUFpQk0saUNBQWpCOztBQUVBUCx3QkFBUSxDQUFDQyxjQUFELENBQVI7O0FBRUEsdUJBQU9ELEtBQVA7QUFDRCxlQU5ELE1BTU87QUFDTEEsd0JBQVFBLE1BQU1TLE1BQU4sQ0FBYU4sNkJBQWIsQ0FBUjtBQUNEO0FBQ0Y7QUFDRixXQWRELE1BY087QUFDTCxtQkFBT0gsS0FBUDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxhQUFPQSxLQUFQO0FBQ0Q7OzsrQkFFaUJVLE0sRUFBUUMscUIsRUFBdUJDLHFCLEVBQXVCZCxZLEVBQWM7QUFDcEYsVUFBSWUsU0FBUyxZQUFiO0FBQUEsVUFDSUMsUUFBUW5CLG1CQURaO0FBQUEsVUFFSW9CLHVJQUF1Q0wsTUFBdkMsRUFBK0NDLHFCQUEvQyxFQUFzRUMscUJBQXRFLEVBQTZGZCxZQUE3RixFQUEyR2UsTUFBM0csRUFBbUhDLEtBQW5ILENBRko7O0FBSUEsYUFBT0MsbUJBQVA7QUFDRDs7OzJDQUc2QkMsa0IsRUFBb0I7QUFDaEQsVUFBSUMsZUFBZUQsbUJBQW1CRSxlQUFuQixFQUFuQjtBQUFBLFVBQ0lDLGlCQUFpQkgsbUJBQW1CSSxpQkFBbkIsRUFEckI7QUFBQSxVQUVJdEIsZUFBZWtCLG1CQUFtQmpCLGVBQW5CLEVBRm5CO0FBQUEsVUFHSWdCLHNCQUFzQixJQUFJcEIsbUJBQUosQ0FBd0JzQixZQUF4QixFQUFzQ0UsY0FBdEMsRUFBc0RyQixZQUF0RCxDQUgxQjs7QUFLQSxhQUFPaUIsbUJBQVA7QUFDRDs7OztFQXREK0JyQixtQjs7QUF5RGxDMkIsT0FBT0MsT0FBUCxHQUFpQjNCLG1CQUFqQjs7QUFFQSxTQUFTYSxLQUFULENBQWVlLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJ6ZXJvT3JNb3JlUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBGYXRhbEVycm9yTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvZmF0YWxFcnJvcicpLFxuICAgIFNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKCcuL3NlcXVlbmNlT2ZQYXJ0cycpO1xuXG5jbGFzcyBaZXJvT3JNb3JlUGFydHNQYXJ0IGV4dGVuZHMgU2VxdWVuY2VPZlBhcnRzUGFydCB7XG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSB0aGlzLmdldE5vV2hpdGVzcGFjZSgpOyAgLy8vXG5cbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICBmYXRhbEVycm9yTm9kZSxcbiAgICAgICAgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uID0gdGhpcy50ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ocHJvZHVjdGlvbnMpO1xuXG4gICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgbm9kZXMgPSBbXTtcblxuICAgICAgZm9yKDs7KSB7XG4gICAgICAgIHZhciB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlcyA9IHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICAgIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvblBhcnNlZCA9ICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvblBhcnNlZCkge1xuICAgICAgICAgIGlmICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgZmlyc3RUZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlID0gZmlyc3QodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZXMpO1xuXG4gICAgICAgICAgICBpZiAoZmlyc3RUZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlIGluc3RhbmNlb2YgRmF0YWxFcnJvck5vZGUpIHtcbiAgICAgICAgICAgICAgZmF0YWxFcnJvck5vZGUgPSBmaXJzdFRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGU7XG5cbiAgICAgICAgICAgICAgbm9kZXMgPSBbZmF0YWxFcnJvck5vZGVdO1xuXG4gICAgICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGVzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgcmVnRXhwID0gLyhbXipdKylcXCokLyxcbiAgICAgICAgQ2xhc3MgPSBaZXJvT3JNb3JlUGFydHNQYXJ0LFxuICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gc3VwZXIuZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UsIHJlZ0V4cCwgQ2xhc3MpO1xuXG4gICAgcmV0dXJuIHplcm9Pck1vcmVQYXJ0c1BhcnQ7XG4gIH1cblxuXG4gIHN0YXRpYyBmcm9tT25lT3JNb3JlUGFydHNQYXJ0KG9uZU9yTW9yZVBhcnRzUGFydCkge1xuICAgIHZhciB0ZXJtaW5hbFBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0VGVybWluYWxQYXJ0KCksXG4gICAgICAgIHByb2R1Y3Rpb25OYW1lID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgIG5vV2hpdGVzcGFjZSA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXROb1doaXRlc3BhY2UoKSxcbiAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHRlcm1pbmFsUGFydCwgcHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gemVyb09yTW9yZVBhcnRzUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFplcm9Pck1vcmVQYXJ0c1BhcnQ7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfSJdfQ==