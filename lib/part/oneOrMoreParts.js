'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SequenceOfPartsPart = require('./sequenceOfParts');

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
          terminalPartOrProduction = this.terminalPartOrProduction(productions);

      if (terminalPartOrProduction !== null) {
        var productionNodes = terminalPartOrProduction.parse(context, productions, noWhitespace),
            parsed = productionNodes !== null;

        if (parsed) {
          nodes = productionNodes;

          for (;;) {
            productionNodes = terminalPartOrProduction.parse(context, productions, noWhitespace);
            parsed = productionNodes !== null;

            if (parsed) {
              nodes = nodes.concat(productionNodes);
            } else {
              return nodes;
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L29uZU9yTW9yZVBhcnRzLmpzIl0sIm5hbWVzIjpbIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJyZXF1aXJlIiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9XaGl0ZXNwYWNlIiwiZ2V0Tm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJ0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uTm9kZXMiLCJwYXJzZSIsInBhcnNlZCIsImNvbmNhdCIsInN5bWJvbCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJlZ0V4cCIsIkNsYXNzIiwib25lT3JNb3JlUGFydHNQYXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLHNCQUFzQkMsUUFBUSxtQkFBUixDQUExQjs7SUFFTUMsa0I7Ozs7Ozs7Ozs7OzBCQUNFQyxPLEVBQVNDLFcsRUFBYUMsWSxFQUFjO0FBQ3hDQSxxQkFBZSxLQUFLQyxlQUFMLEVBQWYsQ0FEd0MsQ0FDQTs7QUFFeEMsVUFBSUMsUUFBUSxJQUFaO0FBQUEsVUFDSUMsMkJBQTJCLEtBQUtBLHdCQUFMLENBQThCSixXQUE5QixDQUQvQjs7QUFHQSxVQUFJSSw2QkFBNkIsSUFBakMsRUFBdUM7QUFDckMsWUFBSUMsa0JBQWtCRCx5QkFBeUJFLEtBQXpCLENBQStCUCxPQUEvQixFQUF3Q0MsV0FBeEMsRUFBcURDLFlBQXJELENBQXRCO0FBQUEsWUFDSU0sU0FBVUYsb0JBQW9CLElBRGxDOztBQUdBLFlBQUlFLE1BQUosRUFBWTtBQUNWSixrQkFBUUUsZUFBUjs7QUFFQSxtQkFBUTtBQUNOQSw4QkFBa0JELHlCQUF5QkUsS0FBekIsQ0FBK0JQLE9BQS9CLEVBQXdDQyxXQUF4QyxFQUFxREMsWUFBckQsQ0FBbEI7QUFDQU0scUJBQVVGLG9CQUFvQixJQUE5Qjs7QUFFQSxnQkFBSUUsTUFBSixFQUFZO0FBQ1ZKLHNCQUFRQSxNQUFNSyxNQUFOLENBQWFILGVBQWIsQ0FBUjtBQUNELGFBRkQsTUFFTztBQUNMLHFCQUFPRixLQUFQO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQsYUFBT0EsS0FBUDtBQUNEOzs7K0JBRWlCTSxNLEVBQVFDLHFCLEVBQXVCQyxxQixFQUF1QlYsWSxFQUFjO0FBQ3BGLFVBQUlXLFNBQVMsWUFBYjtBQUFBLFVBQ0lDLFFBQVFmLGtCQURaO0FBQUEsVUFFSWdCLG9JQUFzQ0wsTUFBdEMsRUFBOENDLHFCQUE5QyxFQUFxRUMscUJBQXJFLEVBQTRGVixZQUE1RixFQUEwR1csTUFBMUcsRUFBa0hDLEtBQWxILENBRko7O0FBSUEsYUFBT0Msa0JBQVA7QUFDRDs7OztFQXBDOEJsQixtQjs7QUF1Q2pDbUIsT0FBT0MsT0FBUCxHQUFpQmxCLGtCQUFqQiIsImZpbGUiOiJvbmVPck1vcmVQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKCcuL3NlcXVlbmNlT2ZQYXJ0cycpO1xuXG5jbGFzcyBPbmVPck1vcmVQYXJ0c1BhcnQgZXh0ZW5kcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IHtcbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IHRoaXMuZ2V0Tm9XaGl0ZXNwYWNlKCk7ICAvLy9cbiAgICBcbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gPSB0aGlzLnRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbihwcm9kdWN0aW9ucyk7XG5cbiAgICBpZiAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICB2YXIgcHJvZHVjdGlvbk5vZGVzID0gdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnNlZCA9IChwcm9kdWN0aW9uTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIG5vZGVzID0gcHJvZHVjdGlvbk5vZGVzO1xuXG4gICAgICAgIGZvcig7Oykge1xuICAgICAgICAgIHByb2R1Y3Rpb25Ob2RlcyA9IHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKTtcbiAgICAgICAgICBwYXJzZWQgPSAocHJvZHVjdGlvbk5vZGVzICE9PSBudWxsKTtcblxuICAgICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHByb2R1Y3Rpb25Ob2Rlcyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgcmVnRXhwID0gLyhbXipdKylcXCskLyxcbiAgICAgICAgQ2xhc3MgPSBPbmVPck1vcmVQYXJ0c1BhcnQsXG4gICAgICAgIG9uZU9yTW9yZVBhcnRzUGFydCA9IHN1cGVyLmZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlLCByZWdFeHAsIENsYXNzKTtcblxuICAgIHJldHVybiBvbmVPck1vcmVQYXJ0c1BhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPbmVPck1vcmVQYXJ0c1BhcnQ7XG4iXX0=