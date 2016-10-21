'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SequenceOfPartsPart = require('./sequenceOfParts');

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
          terminalPartOrProduction = this.terminalPartOrProduction(productions);

      if (terminalPartOrProduction !== null) {
        nodes = [];

        for (;;) {
          var productionNodes = terminalPartOrProduction.parse(context, productions, noWhitespace),
              parsed = productionNodes !== null;

          if (parsed) {
            nodes = nodes.concat(productionNodes);
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
  }]);

  return ZeroOrMorePartsPart;
}(SequenceOfPartsPart);

module.exports = ZeroOrMorePartsPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3plcm9Pck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwicmVxdWlyZSIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub1doaXRlc3BhY2UiLCJnZXROb1doaXRlc3BhY2UiLCJub2RlcyIsInRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25Ob2RlcyIsInBhcnNlIiwicGFyc2VkIiwiY29uY2F0Iiwic3ltYm9sIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwicmVnRXhwIiwiQ2xhc3MiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLHNCQUFzQkMsUUFBUSxtQkFBUixDQUExQjs7SUFFTUMsbUI7Ozs7Ozs7Ozs7OzBCQUNFQyxPLEVBQVNDLFcsRUFBYUMsWSxFQUFjO0FBQ3hDQSxxQkFBZSxLQUFLQyxlQUFMLEVBQWYsQ0FEd0MsQ0FDQTs7QUFFeEMsVUFBSUMsUUFBUSxJQUFaO0FBQUEsVUFDSUMsMkJBQTJCLEtBQUtBLHdCQUFMLENBQThCSixXQUE5QixDQUQvQjs7QUFHQSxVQUFJSSw2QkFBNkIsSUFBakMsRUFBdUM7QUFDckNELGdCQUFRLEVBQVI7O0FBRUEsaUJBQVE7QUFDTixjQUFJRSxrQkFBa0JELHlCQUF5QkUsS0FBekIsQ0FBK0JQLE9BQS9CLEVBQXdDQyxXQUF4QyxFQUFxREMsWUFBckQsQ0FBdEI7QUFBQSxjQUNJTSxTQUFVRixvQkFBb0IsSUFEbEM7O0FBR0EsY0FBSUUsTUFBSixFQUFZO0FBQ1ZKLG9CQUFRQSxNQUFNSyxNQUFOLENBQWFILGVBQWIsQ0FBUjtBQUNELFdBRkQsTUFFTztBQUNMLG1CQUFPRixLQUFQO0FBQ0Q7QUFDRjtBQUNGOztBQUVELGFBQU9BLEtBQVA7QUFDRDs7OytCQUVpQk0sTSxFQUFRQyxxQixFQUF1QkMscUIsRUFBdUJWLFksRUFBYztBQUNwRixVQUFJVyxTQUFTLFlBQWI7QUFBQSxVQUNJQyxRQUFRZixtQkFEWjtBQUFBLFVBRUlnQix1SUFBdUNMLE1BQXZDLEVBQStDQyxxQkFBL0MsRUFBc0VDLHFCQUF0RSxFQUE2RlYsWUFBN0YsRUFBMkdXLE1BQTNHLEVBQW1IQyxLQUFuSCxDQUZKOztBQUlBLGFBQU9DLG1CQUFQO0FBQ0Q7Ozs7RUEvQitCbEIsbUI7O0FBa0NsQ21CLE9BQU9DLE9BQVAsR0FBaUJsQixtQkFBakIiLCJmaWxlIjoiemVyb09yTW9yZVBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2VxdWVuY2VPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4vc2VxdWVuY2VPZlBhcnRzJyk7XG5cbmNsYXNzIFplcm9Pck1vcmVQYXJ0c1BhcnQgZXh0ZW5kcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IHtcbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IHRoaXMuZ2V0Tm9XaGl0ZXNwYWNlKCk7ICAvLy9cblxuICAgIHZhciBub2RlcyA9IG51bGwsXG4gICAgICAgIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiA9IHRoaXMudGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uKHByb2R1Y3Rpb25zKTtcblxuICAgIGlmICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIG5vZGVzID0gW107XG5cbiAgICAgIGZvcig7Oykge1xuICAgICAgICB2YXIgcHJvZHVjdGlvbk5vZGVzID0gdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgICAgcGFyc2VkID0gKHByb2R1Y3Rpb25Ob2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHByb2R1Y3Rpb25Ob2Rlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGVzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgcmVnRXhwID0gLyhbXipdKylcXCokLyxcbiAgICAgICAgQ2xhc3MgPSBaZXJvT3JNb3JlUGFydHNQYXJ0LFxuICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gc3VwZXIuZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UsIHJlZ0V4cCwgQ2xhc3MpO1xuXG4gICAgcmV0dXJuIHplcm9Pck1vcmVQYXJ0c1BhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBaZXJvT3JNb3JlUGFydHNQYXJ0O1xuIl19