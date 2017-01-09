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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9vcHRpb25hbFBhcnQuanMiXSwibmFtZXMiOlsiU2VxdWVuY2VPZlBhcnRzUGFydCIsInJlcXVpcmUiLCJPcHRpb25hbFBhcnRQYXJ0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9XaGl0ZXNwYWNlIiwiZ2V0Tm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJ0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uTm9kZXMiLCJwYXJzZSIsInBhcnNlZCIsInN5bWJvbCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJlZ0V4cCIsIkNsYXNzIiwib3B0aW9uYWxQYXJ0UGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxzQkFBc0JDLFFBQVEsbUJBQVIsQ0FBMUI7O0lBRU1DLGdCOzs7Ozs7Ozs7OzswQkFDRUMsTyxFQUFTQyxXLEVBQWFDLFksRUFBYztBQUN4Q0EscUJBQWUsS0FBS0MsZUFBTCxFQUFmLENBRHdDLENBQ0E7O0FBRXhDLFVBQUlDLFFBQVEsRUFBWjtBQUFBLFVBQWdCO0FBQ1pDLGlDQUEyQixLQUFLQSx3QkFBTCxDQUE4QkosV0FBOUIsQ0FEL0I7O0FBR0EsVUFBSUksNkJBQTZCLElBQWpDLEVBQXVDO0FBQ3JDLFlBQUlDLGtCQUFrQkQseUJBQXlCRSxLQUF6QixDQUErQlAsT0FBL0IsRUFBd0NDLFdBQXhDLEVBQXFEQyxZQUFyRCxDQUF0QjtBQUFBLFlBQ0lNLFNBQVVGLG9CQUFvQixJQURsQzs7QUFHQSxZQUFJRSxNQUFKLEVBQVk7QUFDVkosa0JBQVFFLGVBQVI7QUFDRDtBQUNGOztBQUVELGFBQU9GLEtBQVA7QUFDRDs7OytCQUVpQkssTSxFQUFRQyxxQixFQUF1QkMscUIsRUFBdUJULFksRUFBYztBQUNwRixVQUFJVSxTQUFTLFlBQWI7QUFBQSxVQUNJQyxRQUFRZCxnQkFEWjtBQUFBLFVBRUllLDhIQUFvQ0wsTUFBcEMsRUFBNENDLHFCQUE1QyxFQUFtRUMscUJBQW5FLEVBQTBGVCxZQUExRixFQUF3R1UsTUFBeEcsRUFBZ0hDLEtBQWhILENBRko7O0FBSUEsYUFBT0MsZ0JBQVA7QUFDRDs7OztFQXpCNEJqQixtQjs7QUE0Qi9Ca0IsT0FBT0MsT0FBUCxHQUFpQmpCLGdCQUFqQiIsImZpbGUiOiJvcHRpb25hbFBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi9zZXF1ZW5jZU9mUGFydHMnKTtcblxuY2xhc3MgT3B0aW9uYWxQYXJ0UGFydCBleHRlbmRzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQge1xuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gdGhpcy5nZXROb1doaXRlc3BhY2UoKTsgIC8vL1xuXG4gICAgdmFyIG5vZGVzID0gW10sIC8vL1xuICAgICAgICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gPSB0aGlzLnRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbihwcm9kdWN0aW9ucyk7XG4gICAgXG4gICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdmFyIHByb2R1Y3Rpb25Ob2RlcyA9IHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJzZWQgPSAocHJvZHVjdGlvbk5vZGVzICE9PSBudWxsKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBub2RlcyA9IHByb2R1Y3Rpb25Ob2RlcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciByZWdFeHAgPSAvKFteKl0rKVxcPyQvLFxuICAgICAgICBDbGFzcyA9IE9wdGlvbmFsUGFydFBhcnQsXG4gICAgICAgIG9wdGlvbmFsUGFydFBhcnQgPSBzdXBlci5mcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSwgcmVnRXhwLCBDbGFzcyk7XG5cbiAgICByZXR1cm4gb3B0aW9uYWxQYXJ0UGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9wdGlvbmFsUGFydFBhcnQ7XG4iXX0=