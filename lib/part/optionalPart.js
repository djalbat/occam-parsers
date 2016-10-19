'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SequenceOfPartsPart = require('./sequenceOfParts');

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
          ///
      terminalPartOrProduction = this.terminalPartOrProduction(productions);

      if (terminalPartOrProduction !== null) {
        var productionNodes = terminalPartOrProduction.parse(context, productions, noWhitespace),
            parsed = productionNodes !== null;

        if (parsed) {
          nodes = productionNodes;
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace) {
      var regExp = /([^*]+)\?$/,
          Class = OptionalPartPart,
          optionalPartPart = _get(OptionalPartPart.__proto__ || Object.getPrototypeOf(OptionalPartPart), 'fromSymbol', this).call(this, symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace, regExp, Class);

      return optionalPartPart;
    }
  }]);

  return OptionalPartPart;
}(SequenceOfPartsPart);

module.exports = OptionalPartPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L29wdGlvbmFsUGFydC5qcyJdLCJuYW1lcyI6WyJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwicmVxdWlyZSIsIk9wdGlvbmFsUGFydFBhcnQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub1doaXRlc3BhY2UiLCJnZXROb1doaXRlc3BhY2UiLCJub2RlcyIsInRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25Ob2RlcyIsInBhcnNlIiwicGFyc2VkIiwic3ltYm9sIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwidGVybWluYWxUeXBlcyIsInJlZ0V4cCIsIkNsYXNzIiwib3B0aW9uYWxQYXJ0UGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxzQkFBc0JDLFFBQVEsbUJBQVIsQ0FBMUI7O0lBRU1DLGdCOzs7Ozs7Ozs7OzswQkFDRUMsTyxFQUFTQyxXLEVBQWFDLFksRUFBYztBQUN4Q0EscUJBQWUsS0FBS0MsZUFBTCxFQUFmLENBRHdDLENBQ0E7O0FBRXhDLFVBQUlDLFFBQVEsRUFBWjtBQUFBLFVBQWdCO0FBQ1pDLGlDQUEyQixLQUFLQSx3QkFBTCxDQUE4QkosV0FBOUIsQ0FEL0I7O0FBR0EsVUFBSUksNkJBQTZCLElBQWpDLEVBQXVDO0FBQ3JDLFlBQUlDLGtCQUFrQkQseUJBQXlCRSxLQUF6QixDQUErQlAsT0FBL0IsRUFBd0NDLFdBQXhDLEVBQXFEQyxZQUFyRCxDQUF0QjtBQUFBLFlBQ0lNLFNBQVVGLG9CQUFvQixJQURsQzs7QUFHQSxZQUFJRSxNQUFKLEVBQVk7QUFDVkosa0JBQVFFLGVBQVI7QUFDRDtBQUNGOztBQUVELGFBQU9GLEtBQVA7QUFDRDs7OytCQUVpQkssTSxFQUFRQyxxQixFQUF1QkMsYSxFQUFlVCxZLEVBQWM7QUFDNUUsVUFBSVUsU0FBUyxZQUFiO0FBQUEsVUFDSUMsUUFBUWQsZ0JBRFo7QUFBQSxVQUVJZSw4SEFBb0NMLE1BQXBDLEVBQTRDQyxxQkFBNUMsRUFBbUVDLGFBQW5FLEVBQWtGVCxZQUFsRixFQUFnR1UsTUFBaEcsRUFBd0dDLEtBQXhHLENBRko7O0FBSUEsYUFBT0MsZ0JBQVA7QUFDRDs7OztFQXpCNEJqQixtQjs7QUE0Qi9Ca0IsT0FBT0MsT0FBUCxHQUFpQmpCLGdCQUFqQiIsImZpbGUiOiJvcHRpb25hbFBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi9zZXF1ZW5jZU9mUGFydHMnKTtcblxuY2xhc3MgT3B0aW9uYWxQYXJ0UGFydCBleHRlbmRzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQge1xuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gdGhpcy5nZXROb1doaXRlc3BhY2UoKTsgIC8vL1xuXG4gICAgdmFyIG5vZGVzID0gW10sIC8vL1xuICAgICAgICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gPSB0aGlzLnRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbihwcm9kdWN0aW9ucyk7XG4gICAgXG4gICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdmFyIHByb2R1Y3Rpb25Ob2RlcyA9IHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJzZWQgPSAocHJvZHVjdGlvbk5vZGVzICE9PSBudWxsKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBub2RlcyA9IHByb2R1Y3Rpb25Ob2RlcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCB0ZXJtaW5hbFR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgcmVnRXhwID0gLyhbXipdKylcXD8kLyxcbiAgICAgICAgQ2xhc3MgPSBPcHRpb25hbFBhcnRQYXJ0LFxuICAgICAgICBvcHRpb25hbFBhcnRQYXJ0ID0gc3VwZXIuZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgdGVybWluYWxUeXBlcywgbm9XaGl0ZXNwYWNlLCByZWdFeHAsIENsYXNzKTtcblxuICAgIHJldHVybiBvcHRpb25hbFBhcnRQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT3B0aW9uYWxQYXJ0UGFydDtcbiJdfQ==