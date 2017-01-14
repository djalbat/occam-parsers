'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FatalErrorNode = require('../node/fatalError'),
    SequenceOfPartsPart = require('./sequenceOfParts'),
    ZeroOrMorePartsPart = require('./zeroOrMoreParts');

var OneOrMorePartsPart = function (_SequenceOfPartsPart) {
  _inherits(OneOrMorePartsPart, _SequenceOfPartsPart);

  function OneOrMorePartsPart() {
    _classCallCheck(this, OneOrMorePartsPart);

    return _possibleConstructorReturn(this, (OneOrMorePartsPart.__proto__ || Object.getPrototypeOf(OneOrMorePartsPart)).apply(this, arguments));
  }

  _createClass(OneOrMorePartsPart, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      noWhitespace = this.getNoWhitespace(); ///

      var nodes = null,
          fatalErrorNode,
          terminalPartOrProduction = this.terminalPartOrProduction(productions);

      if (terminalPartOrProduction !== null) {
        var terminalPartOrProductionNodes = terminalPartOrProduction.parse(context, productions, noWhitespace),
            terminalPartOrProductionParsed = terminalPartOrProductionNodes !== null;

        if (terminalPartOrProductionParsed) {
          if (terminalPartOrProductionNodes !== undefined) {
            var firstTerminalPartOrProductionNode = first(terminalPartOrProductionNodes);

            if (firstTerminalPartOrProductionNode instanceof FatalErrorNode) {
              fatalErrorNode = firstTerminalPartOrProductionNode;

              nodes = [fatalErrorNode];

              return nodes;
            }
          }

          nodes = terminalPartOrProductionNodes;

          var zeroOrMorePartsPart = ZeroOrMorePartsPart.fromOneOrMorePartsPart(this),
              ///
          zeroOrMorePartsPartNodes = zeroOrMorePartsPart.parse(context, productions, noWhitespace),
              zeroOrMorePartsPartNodesParsed = zeroOrMorePartsPartNodes !== null;

          if (zeroOrMorePartsPartNodesParsed) {
            if (zeroOrMorePartsPartNodes !== undefined) {
              var firstZeroOrMorePartsPartNode = first(zeroOrMorePartsPartNodes);

              if (firstZeroOrMorePartsPartNode instanceof FatalErrorNode) {
                fatalErrorNode = firstZeroOrMorePartsPartNode;

                nodes = [fatalErrorNode];

                return nodes;
              }
            }

            nodes = nodes.concat(zeroOrMorePartsPartNodes);
          }
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) {
      var regExp = /([^*]+)\+$/,
          Class = OneOrMorePartsPart,
          oneOrMorePartsPart = _get(OneOrMorePartsPart.__proto__ || Object.getPrototypeOf(OneOrMorePartsPart), 'fromSymbol', this).call(this, symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace, regExp, Class);

      return oneOrMorePartsPart;
    }
  }]);

  return OneOrMorePartsPart;
}(SequenceOfPartsPart);

module.exports = OneOrMorePartsPart;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9vbmVPck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJGYXRhbEVycm9yTm9kZSIsInJlcXVpcmUiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vV2hpdGVzcGFjZSIsImdldE5vV2hpdGVzcGFjZSIsIm5vZGVzIiwiZmF0YWxFcnJvck5vZGUiLCJ0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24iLCJ0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlcyIsInBhcnNlIiwidGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uUGFyc2VkIiwidW5kZWZpbmVkIiwiZmlyc3RUZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlIiwiZmlyc3QiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0IiwiZnJvbU9uZU9yTW9yZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnROb2RlcyIsInplcm9Pck1vcmVQYXJ0c1BhcnROb2Rlc1BhcnNlZCIsImZpcnN0WmVyb09yTW9yZVBhcnRzUGFydE5vZGUiLCJjb25jYXQiLCJzeW1ib2wiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJyZWdFeHAiLCJDbGFzcyIsIm9uZU9yTW9yZVBhcnRzUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLGlCQUFpQkMsUUFBUSxvQkFBUixDQUFyQjtBQUFBLElBQ0lDLHNCQUFzQkQsUUFBUSxtQkFBUixDQUQxQjtBQUFBLElBRUlFLHNCQUFzQkYsUUFBUSxtQkFBUixDQUYxQjs7SUFJTUcsa0I7Ozs7Ozs7Ozs7OzBCQUNFQyxPLEVBQVNDLFcsRUFBYUMsWSxFQUFjO0FBQ3hDQSxxQkFBZSxLQUFLQyxlQUFMLEVBQWYsQ0FEd0MsQ0FDQTs7QUFFeEMsVUFBSUMsUUFBUSxJQUFaO0FBQUEsVUFDSUMsY0FESjtBQUFBLFVBRUlDLDJCQUEyQixLQUFLQSx3QkFBTCxDQUE4QkwsV0FBOUIsQ0FGL0I7O0FBSUEsVUFBSUssNkJBQTZCLElBQWpDLEVBQXVDO0FBQ3JDLFlBQUlDLGdDQUFnQ0QseUJBQXlCRSxLQUF6QixDQUErQlIsT0FBL0IsRUFBd0NDLFdBQXhDLEVBQXFEQyxZQUFyRCxDQUFwQztBQUFBLFlBQ0lPLGlDQUFrQ0Ysa0NBQWtDLElBRHhFOztBQUdBLFlBQUlFLDhCQUFKLEVBQW9DO0FBQ2xDLGNBQUlGLGtDQUFrQ0csU0FBdEMsRUFBaUQ7QUFDL0MsZ0JBQUlDLG9DQUFvQ0MsTUFBTUwsNkJBQU4sQ0FBeEM7O0FBRUEsZ0JBQUlJLDZDQUE2Q2hCLGNBQWpELEVBQWlFO0FBQy9EVSwrQkFBaUJNLGlDQUFqQjs7QUFFQVAsc0JBQVEsQ0FBQ0MsY0FBRCxDQUFSOztBQUVBLHFCQUFPRCxLQUFQO0FBQ0Q7QUFDRjs7QUFFREEsa0JBQVFHLDZCQUFSOztBQUVBLGNBQUlNLHNCQUFzQmYsb0JBQW9CZ0Isc0JBQXBCLENBQTJDLElBQTNDLENBQTFCO0FBQUEsY0FBNEU7QUFDeEVDLHFDQUEyQkYsb0JBQW9CTCxLQUFwQixDQUEwQlIsT0FBMUIsRUFBbUNDLFdBQW5DLEVBQWdEQyxZQUFoRCxDQUQvQjtBQUFBLGNBRUljLGlDQUFrQ0QsNkJBQTZCLElBRm5FOztBQUlBLGNBQUlDLDhCQUFKLEVBQW9DO0FBQ2xDLGdCQUFJRCw2QkFBNkJMLFNBQWpDLEVBQTRDO0FBQzFDLGtCQUFJTywrQkFBK0JMLE1BQU1HLHdCQUFOLENBQW5DOztBQUVBLGtCQUFJRSx3Q0FBd0N0QixjQUE1QyxFQUE0RDtBQUMxRFUsaUNBQWlCWSw0QkFBakI7O0FBRUFiLHdCQUFRLENBQUNDLGNBQUQsQ0FBUjs7QUFFQSx1QkFBT0QsS0FBUDtBQUNEO0FBQ0Y7O0FBRURBLG9CQUFRQSxNQUFNYyxNQUFOLENBQWFILHdCQUFiLENBQVI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBT1gsS0FBUDtBQUNEOzs7K0JBRWlCZSxNLEVBQVFDLHFCLEVBQXVCQyxxQixFQUF1Qm5CLFksRUFBYztBQUNwRixVQUFJb0IsU0FBUyxZQUFiO0FBQUEsVUFDSUMsUUFBUXhCLGtCQURaO0FBQUEsVUFFSXlCLG9JQUFzQ0wsTUFBdEMsRUFBOENDLHFCQUE5QyxFQUFxRUMscUJBQXJFLEVBQTRGbkIsWUFBNUYsRUFBMEdvQixNQUExRyxFQUFrSEMsS0FBbEgsQ0FGSjs7QUFJQSxhQUFPQyxrQkFBUDtBQUNEOzs7O0VBMUQ4QjNCLG1COztBQTZEakM0QixPQUFPQyxPQUFQLEdBQWlCM0Isa0JBQWpCOztBQUVBLFNBQVNhLEtBQVQsQ0FBZWUsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6Im9uZU9yTW9yZVBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRmF0YWxFcnJvck5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL2ZhdGFsRXJyb3InKSxcbiAgICBTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi9zZXF1ZW5jZU9mUGFydHMnKSxcbiAgICBaZXJvT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi96ZXJvT3JNb3JlUGFydHMnKTtcblxuY2xhc3MgT25lT3JNb3JlUGFydHNQYXJ0IGV4dGVuZHMgU2VxdWVuY2VPZlBhcnRzUGFydCB7XG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSB0aGlzLmdldE5vV2hpdGVzcGFjZSgpOyAgLy8vXG4gICAgXG4gICAgdmFyIG5vZGVzID0gbnVsbCxcbiAgICAgICAgZmF0YWxFcnJvck5vZGUsXG4gICAgICAgIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiA9IHRoaXMudGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uKHByb2R1Y3Rpb25zKTtcblxuICAgIGlmICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIHZhciB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlcyA9IHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25QYXJzZWQgPSAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICBpZiAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uUGFyc2VkKSB7XG4gICAgICAgIGlmICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIGZpcnN0VGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZSA9IGZpcnN0KHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVzKTtcblxuICAgICAgICAgIGlmIChmaXJzdFRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGUgaW5zdGFuY2VvZiBGYXRhbEVycm9yTm9kZSkge1xuICAgICAgICAgICAgZmF0YWxFcnJvck5vZGUgPSBmaXJzdFRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGU7XG5cbiAgICAgICAgICAgIG5vZGVzID0gW2ZhdGFsRXJyb3JOb2RlXTtcblxuICAgICAgICAgICAgcmV0dXJuIG5vZGVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGVzID0gdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZXM7XG5cbiAgICAgICAgdmFyIHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBaZXJvT3JNb3JlUGFydHNQYXJ0LmZyb21PbmVPck1vcmVQYXJ0c1BhcnQodGhpcyksIC8vL1xuICAgICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydE5vZGVzID0gemVyb09yTW9yZVBhcnRzUGFydC5wYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnROb2Rlc1BhcnNlZCA9ICh6ZXJvT3JNb3JlUGFydHNQYXJ0Tm9kZXMgIT09IG51bGwpO1xuXG4gICAgICAgIGlmICh6ZXJvT3JNb3JlUGFydHNQYXJ0Tm9kZXNQYXJzZWQpIHtcbiAgICAgICAgICBpZiAoemVyb09yTW9yZVBhcnRzUGFydE5vZGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBmaXJzdFplcm9Pck1vcmVQYXJ0c1BhcnROb2RlID0gZmlyc3QoemVyb09yTW9yZVBhcnRzUGFydE5vZGVzKTtcblxuICAgICAgICAgICAgaWYgKGZpcnN0WmVyb09yTW9yZVBhcnRzUGFydE5vZGUgaW5zdGFuY2VvZiBGYXRhbEVycm9yTm9kZSkge1xuICAgICAgICAgICAgICBmYXRhbEVycm9yTm9kZSA9IGZpcnN0WmVyb09yTW9yZVBhcnRzUGFydE5vZGU7XG5cbiAgICAgICAgICAgICAgbm9kZXMgPSBbZmF0YWxFcnJvck5vZGVdO1xuXG4gICAgICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdCh6ZXJvT3JNb3JlUGFydHNQYXJ0Tm9kZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIHJlZ0V4cCA9IC8oW14qXSspXFwrJC8sXG4gICAgICAgIENsYXNzID0gT25lT3JNb3JlUGFydHNQYXJ0LFxuICAgICAgICBvbmVPck1vcmVQYXJ0c1BhcnQgPSBzdXBlci5mcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSwgcmVnRXhwLCBDbGFzcyk7XG5cbiAgICByZXR1cm4gb25lT3JNb3JlUGFydHNQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT25lT3JNb3JlUGFydHNQYXJ0O1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==