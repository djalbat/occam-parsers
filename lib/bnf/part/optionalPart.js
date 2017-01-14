'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FatalErrorNode = require('../node/fatalError'),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9vcHRpb25hbFBhcnQuanMiXSwibmFtZXMiOlsiRmF0YWxFcnJvck5vZGUiLCJyZXF1aXJlIiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsIk9wdGlvbmFsUGFydFBhcnQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub1doaXRlc3BhY2UiLCJnZXROb1doaXRlc3BhY2UiLCJub2RlcyIsImZhdGFsRXJyb3JOb2RlIiwidGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uIiwidGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZXMiLCJwYXJzZSIsInRlcm1pbmFsUGFydE9yUHJvZHVjdGlvblBhcnNlZCIsInVuZGVmaW5lZCIsImZpcnN0VGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZSIsImZpcnN0Iiwic3ltYm9sIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwicmVnRXhwIiwiQ2xhc3MiLCJvcHRpb25hbFBhcnRQYXJ0IiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsaUJBQWlCQyxRQUFRLG9CQUFSLENBQXJCO0FBQUEsSUFDSUMsc0JBQXNCRCxRQUFRLG1CQUFSLENBRDFCOztJQUdNRSxnQjs7Ozs7Ozs7Ozs7MEJBQ0VDLE8sRUFBU0MsVyxFQUFhQyxZLEVBQWM7QUFDeENBLHFCQUFlLEtBQUtDLGVBQUwsRUFBZixDQUR3QyxDQUNBOztBQUV4QyxVQUFJQyxRQUFRLEVBQVo7QUFBQSxVQUNJQyxjQURKO0FBQUEsVUFFSUMsMkJBQTJCLEtBQUtBLHdCQUFMLENBQThCTCxXQUE5QixDQUYvQjs7QUFJQSxVQUFJSyw2QkFBNkIsSUFBakMsRUFBdUM7QUFDckMsWUFBSUMsZ0NBQWdDRCx5QkFBeUJFLEtBQXpCLENBQStCUixPQUEvQixFQUF3Q0MsV0FBeEMsRUFBcURDLFlBQXJELENBQXBDO0FBQUEsWUFDSU8saUNBQWtDRixrQ0FBa0MsSUFEeEU7O0FBR0EsWUFBSUUsOEJBQUosRUFBb0M7QUFDbEMsY0FBSUYsa0NBQWtDRyxTQUF0QyxFQUFpRDtBQUMvQyxnQkFBSUMsb0NBQW9DQyxNQUFNTCw2QkFBTixDQUF4Qzs7QUFFQSxnQkFBSUksNkNBQTZDZixjQUFqRCxFQUFpRTtBQUMvRFMsK0JBQWlCTSxpQ0FBakI7O0FBRUFQLHNCQUFRLENBQUNDLGNBQUQsQ0FBUjs7QUFFQSxxQkFBT0QsS0FBUDtBQUNEOztBQUVEQSxvQkFBUUcsNkJBQVI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBT0gsS0FBUDtBQUNEOzs7K0JBRWlCUyxNLEVBQVFDLHFCLEVBQXVCQyxxQixFQUF1QmIsWSxFQUFjO0FBQ3BGLFVBQUljLFNBQVMsWUFBYjtBQUFBLFVBQ0lDLFFBQVFsQixnQkFEWjtBQUFBLFVBRUltQiw4SEFBb0NMLE1BQXBDLEVBQTRDQyxxQkFBNUMsRUFBbUVDLHFCQUFuRSxFQUEwRmIsWUFBMUYsRUFBd0djLE1BQXhHLEVBQWdIQyxLQUFoSCxDQUZKOztBQUlBLGFBQU9DLGdCQUFQO0FBQ0Q7Ozs7RUF0QzRCcEIsbUI7O0FBeUMvQnFCLE9BQU9DLE9BQVAsR0FBaUJyQixnQkFBakI7O0FBRUEsU0FBU2EsS0FBVCxDQUFlUyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoib3B0aW9uYWxQYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRmF0YWxFcnJvck5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL2ZhdGFsRXJyb3InKSxcbiAgICBTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi9zZXF1ZW5jZU9mUGFydHMnKTtcblxuY2xhc3MgT3B0aW9uYWxQYXJ0UGFydCBleHRlbmRzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQge1xuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gdGhpcy5nZXROb1doaXRlc3BhY2UoKTsgIC8vL1xuXG4gICAgdmFyIG5vZGVzID0gW10sXG4gICAgICAgIGZhdGFsRXJyb3JOb2RlLFxuICAgICAgICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gPSB0aGlzLnRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbihwcm9kdWN0aW9ucyk7XG4gICAgXG4gICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdmFyIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVzID0gdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvblBhcnNlZCA9ICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgIGlmICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25QYXJzZWQpIHtcbiAgICAgICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgZmlyc3RUZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlID0gZmlyc3QodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZXMpO1xuXG4gICAgICAgICAgaWYgKGZpcnN0VGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZSBpbnN0YW5jZW9mIEZhdGFsRXJyb3JOb2RlKSB7XG4gICAgICAgICAgICBmYXRhbEVycm9yTm9kZSA9IGZpcnN0VGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZTtcblxuICAgICAgICAgICAgbm9kZXMgPSBbZmF0YWxFcnJvck5vZGVdO1xuXG4gICAgICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbm9kZXMgPSB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIHJlZ0V4cCA9IC8oW14qXSspXFw/JC8sXG4gICAgICAgIENsYXNzID0gT3B0aW9uYWxQYXJ0UGFydCxcbiAgICAgICAgb3B0aW9uYWxQYXJ0UGFydCA9IHN1cGVyLmZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlLCByZWdFeHAsIENsYXNzKTtcblxuICAgIHJldHVybiBvcHRpb25hbFBhcnRQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT3B0aW9uYWxQYXJ0UGFydDtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=