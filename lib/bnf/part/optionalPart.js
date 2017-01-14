'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorNode = require('../node/error'),
    SequenceOfPartsPart = require('./sequenceOfParts');

var OptionalPartPart = function (_SequenceOfPartsPart) {
  _inherits(OptionalPartPart, _SequenceOfPartsPart);

  function OptionalPartPart() {
    _classCallCheck(this, OptionalPartPart);

    return _possibleConstructorReturn(this, (OptionalPartPart.__proto__ || Object.getPrototypeOf(OptionalPartPart)).apply(this, arguments));
  }

  _createClass(OptionalPartPart, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      noWhitespace = this.getNoWhitespace(); ///

      var nodes = [],
          errorNode,
          terminalPartOrProduction = this.terminalPartOrProduction(productions);

      if (terminalPartOrProduction !== null) {
        var terminalPartOrProductionNodes = terminalPartOrProduction.parse(context, productions, noWhitespace),
            terminalPartOrProductionParsed = terminalPartOrProductionNodes !== null;

        if (terminalPartOrProductionParsed) {
          if (terminalPartOrProductionNodes !== undefined) {
            var firstTerminalPartOrProductionNode = first(terminalPartOrProductionNodes);

            if (firstTerminalPartOrProductionNode instanceof ErrorNode) {
              errorNode = firstTerminalPartOrProductionNode;

              nodes = [errorNode];

              return nodes;
            }

            nodes = terminalPartOrProductionNodes;
          }
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) {
      var regExp = /([^*]+)\?$/,
          Class = OptionalPartPart,
          optionalPartPart = _get(OptionalPartPart.__proto__ || Object.getPrototypeOf(OptionalPartPart), 'fromSymbol', this).call(this, symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace, regExp, Class);

      return optionalPartPart;
    }
  }]);

  return OptionalPartPart;
}(SequenceOfPartsPart);

module.exports = OptionalPartPart;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9vcHRpb25hbFBhcnQuanMiXSwibmFtZXMiOlsiRXJyb3JOb2RlIiwicmVxdWlyZSIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJPcHRpb25hbFBhcnRQYXJ0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9XaGl0ZXNwYWNlIiwiZ2V0Tm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJlcnJvck5vZGUiLCJ0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24iLCJ0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlcyIsInBhcnNlIiwidGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uUGFyc2VkIiwidW5kZWZpbmVkIiwiZmlyc3RUZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlIiwiZmlyc3QiLCJzeW1ib2wiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJyZWdFeHAiLCJDbGFzcyIsIm9wdGlvbmFsUGFydFBhcnQiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxZQUFZQyxRQUFRLGVBQVIsQ0FBaEI7QUFBQSxJQUNJQyxzQkFBc0JELFFBQVEsbUJBQVIsQ0FEMUI7O0lBR01FLGdCOzs7Ozs7Ozs7OzswQkFDRUMsTyxFQUFTQyxXLEVBQWFDLFksRUFBYztBQUN4Q0EscUJBQWUsS0FBS0MsZUFBTCxFQUFmLENBRHdDLENBQ0E7O0FBRXhDLFVBQUlDLFFBQVEsRUFBWjtBQUFBLFVBQ0lDLFNBREo7QUFBQSxVQUVJQywyQkFBMkIsS0FBS0Esd0JBQUwsQ0FBOEJMLFdBQTlCLENBRi9COztBQUlBLFVBQUlLLDZCQUE2QixJQUFqQyxFQUF1QztBQUNyQyxZQUFJQyxnQ0FBZ0NELHlCQUF5QkUsS0FBekIsQ0FBK0JSLE9BQS9CLEVBQXdDQyxXQUF4QyxFQUFxREMsWUFBckQsQ0FBcEM7QUFBQSxZQUNJTyxpQ0FBa0NGLGtDQUFrQyxJQUR4RTs7QUFHQSxZQUFJRSw4QkFBSixFQUFvQztBQUNsQyxjQUFJRixrQ0FBa0NHLFNBQXRDLEVBQWlEO0FBQy9DLGdCQUFJQyxvQ0FBb0NDLE1BQU1MLDZCQUFOLENBQXhDOztBQUVBLGdCQUFJSSw2Q0FBNkNmLFNBQWpELEVBQTREO0FBQzFEUywwQkFBWU0saUNBQVo7O0FBRUFQLHNCQUFRLENBQUNDLFNBQUQsQ0FBUjs7QUFFQSxxQkFBT0QsS0FBUDtBQUNEOztBQUVEQSxvQkFBUUcsNkJBQVI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBT0gsS0FBUDtBQUNEOzs7K0JBRWlCUyxNLEVBQVFDLHFCLEVBQXVCQyxxQixFQUF1QmIsWSxFQUFjO0FBQ3BGLFVBQUljLFNBQVMsWUFBYjtBQUFBLFVBQ0lDLFFBQVFsQixnQkFEWjtBQUFBLFVBRUltQiw4SEFBb0NMLE1BQXBDLEVBQTRDQyxxQkFBNUMsRUFBbUVDLHFCQUFuRSxFQUEwRmIsWUFBMUYsRUFBd0djLE1BQXhHLEVBQWdIQyxLQUFoSCxDQUZKOztBQUlBLGFBQU9DLGdCQUFQO0FBQ0Q7Ozs7RUF0QzRCcEIsbUI7O0FBeUMvQnFCLE9BQU9DLE9BQVAsR0FBaUJyQixnQkFBakI7O0FBRUEsU0FBU2EsS0FBVCxDQUFlUyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoib3B0aW9uYWxQYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRXJyb3JOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9lcnJvcicpLFxuICAgIFNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKCcuL3NlcXVlbmNlT2ZQYXJ0cycpO1xuXG5jbGFzcyBPcHRpb25hbFBhcnRQYXJ0IGV4dGVuZHMgU2VxdWVuY2VPZlBhcnRzUGFydCB7XG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSB0aGlzLmdldE5vV2hpdGVzcGFjZSgpOyAgLy8vXG5cbiAgICB2YXIgbm9kZXMgPSBbXSxcbiAgICAgICAgZXJyb3JOb2RlLFxuICAgICAgICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gPSB0aGlzLnRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbihwcm9kdWN0aW9ucyk7XG4gICAgXG4gICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdmFyIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVzID0gdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvblBhcnNlZCA9ICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgIGlmICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25QYXJzZWQpIHtcbiAgICAgICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgZmlyc3RUZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlID0gZmlyc3QodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZXMpO1xuXG4gICAgICAgICAgaWYgKGZpcnN0VGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZSBpbnN0YW5jZW9mIEVycm9yTm9kZSkge1xuICAgICAgICAgICAgZXJyb3JOb2RlID0gZmlyc3RUZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlO1xuXG4gICAgICAgICAgICBub2RlcyA9IFtlcnJvck5vZGVdO1xuXG4gICAgICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbm9kZXMgPSB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIHJlZ0V4cCA9IC8oW14qXSspXFw/JC8sXG4gICAgICAgIENsYXNzID0gT3B0aW9uYWxQYXJ0UGFydCxcbiAgICAgICAgb3B0aW9uYWxQYXJ0UGFydCA9IHN1cGVyLmZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlLCByZWdFeHAsIENsYXNzKTtcblxuICAgIHJldHVybiBvcHRpb25hbFBhcnRQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT3B0aW9uYWxQYXJ0UGFydDtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=