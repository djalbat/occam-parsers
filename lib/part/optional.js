'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SequenceOfPartsPart = require('./sequenceOfParts');

var OptionalPart = function (_SequenceOfPartsPart) {
  _inherits(OptionalPart, _SequenceOfPartsPart);

  function OptionalPart() {
    _classCallCheck(this, OptionalPart);

    return _possibleConstructorReturn(this, (OptionalPart.__proto__ || Object.getPrototypeOf(OptionalPart)).apply(this, arguments));
  }

  _createClass(OptionalPart, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      noWhitespace = this.getNoWhitespace(); ///

      var nodes = null,
          terminalPartOrProduction = this.terminalPartOrProduction(productions);

      if (terminalPartOrProduction !== null) {
        nodes = [];

        context.saveIndex();

        var productionNodes = terminalPartOrProduction.parse(context, productions, noWhitespace),
            parsed = productionNodes !== null;

        if (parsed) {
          nodes = nodes.concat(productionNodes);
        } else {
          context.backtrack();

          return nodes;
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace) {
      var regExp = /([^*]+)\?$/,
          Class = OptionalPart,
          optionalPart = _get(OptionalPart.__proto__ || Object.getPrototypeOf(OptionalPart), 'fromSymbol', this).call(this, symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace, regExp, Class);

      return optionalPart;
    }
  }]);

  return OptionalPart;
}(SequenceOfPartsPart);

module.exports = OptionalPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L29wdGlvbmFsLmpzIl0sIm5hbWVzIjpbIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJyZXF1aXJlIiwiT3B0aW9uYWxQYXJ0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9XaGl0ZXNwYWNlIiwiZ2V0Tm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJ0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24iLCJzYXZlSW5kZXgiLCJwcm9kdWN0aW9uTm9kZXMiLCJwYXJzZSIsInBhcnNlZCIsImNvbmNhdCIsImJhY2t0cmFjayIsInN5bWJvbCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInRlcm1pbmFsVHlwZXMiLCJyZWdFeHAiLCJDbGFzcyIsIm9wdGlvbmFsUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxzQkFBc0JDLFFBQVEsbUJBQVIsQ0FBMUI7O0lBRU1DLFk7Ozs7Ozs7Ozs7OzBCQUNFQyxPLEVBQVNDLFcsRUFBYUMsWSxFQUFjO0FBQ3hDQSxxQkFBZSxLQUFLQyxlQUFMLEVBQWYsQ0FEd0MsQ0FDQTs7QUFFeEMsVUFBSUMsUUFBUSxJQUFaO0FBQUEsVUFDSUMsMkJBQTJCLEtBQUtBLHdCQUFMLENBQThCSixXQUE5QixDQUQvQjs7QUFHQSxVQUFJSSw2QkFBNkIsSUFBakMsRUFBdUM7QUFDckNELGdCQUFRLEVBQVI7O0FBRUFKLGdCQUFRTSxTQUFSOztBQUVBLFlBQUlDLGtCQUFrQkYseUJBQXlCRyxLQUF6QixDQUErQlIsT0FBL0IsRUFBd0NDLFdBQXhDLEVBQXFEQyxZQUFyRCxDQUF0QjtBQUFBLFlBQ0lPLFNBQVVGLG9CQUFvQixJQURsQzs7QUFHQSxZQUFJRSxNQUFKLEVBQVk7QUFDVkwsa0JBQVFBLE1BQU1NLE1BQU4sQ0FBYUgsZUFBYixDQUFSO0FBQ0QsU0FGRCxNQUVPO0FBQ0xQLGtCQUFRVyxTQUFSOztBQUVBLGlCQUFPUCxLQUFQO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPQSxLQUFQO0FBQ0Q7OzsrQkFFaUJRLE0sRUFBUUMscUIsRUFBdUJDLGEsRUFBZVosWSxFQUFjO0FBQzVFLFVBQUlhLFNBQVMsWUFBYjtBQUFBLFVBQ0lDLFFBQVFqQixZQURaO0FBQUEsVUFFSWtCLGtIQUFnQ0wsTUFBaEMsRUFBd0NDLHFCQUF4QyxFQUErREMsYUFBL0QsRUFBOEVaLFlBQTlFLEVBQTRGYSxNQUE1RixFQUFvR0MsS0FBcEcsQ0FGSjs7QUFJQSxhQUFPQyxZQUFQO0FBQ0Q7Ozs7RUFqQ3dCcEIsbUI7O0FBb0MzQnFCLE9BQU9DLE9BQVAsR0FBaUJwQixZQUFqQiIsImZpbGUiOiJvcHRpb25hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKCcuL3NlcXVlbmNlT2ZQYXJ0cycpO1xuXG5jbGFzcyBPcHRpb25hbFBhcnQgZXh0ZW5kcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IHtcbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IHRoaXMuZ2V0Tm9XaGl0ZXNwYWNlKCk7ICAvLy9cblxuICAgIHZhciBub2RlcyA9IG51bGwsXG4gICAgICAgIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiA9IHRoaXMudGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uKHByb2R1Y3Rpb25zKTtcbiAgICBcbiAgICBpZiAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBub2RlcyA9IFtdO1xuXG4gICAgICBjb250ZXh0LnNhdmVJbmRleCgpO1xuXG4gICAgICB2YXIgcHJvZHVjdGlvbk5vZGVzID0gdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnNlZCA9IChwcm9kdWN0aW9uTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHByb2R1Y3Rpb25Ob2Rlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmJhY2t0cmFjaygpO1xuXG4gICAgICAgIHJldHVybiBub2RlcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCB0ZXJtaW5hbFR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgcmVnRXhwID0gLyhbXipdKylcXD8kLyxcbiAgICAgICAgQ2xhc3MgPSBPcHRpb25hbFBhcnQsXG4gICAgICAgIG9wdGlvbmFsUGFydCA9IHN1cGVyLmZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHRlcm1pbmFsVHlwZXMsIG5vV2hpdGVzcGFjZSwgcmVnRXhwLCBDbGFzcyk7XG5cbiAgICByZXR1cm4gb3B0aW9uYWxQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT3B0aW9uYWxQYXJ0O1xuIl19