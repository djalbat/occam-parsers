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
    value: function parse(context, productions) {
      var nodes = null,
          terminalPartOrProduction = this.terminalPartOrProduction(productions);

      if (terminalPartOrProduction !== null) {
        context.saveIndex();

        var productionNodes = terminalPartOrProduction.parse(context, productions),
            parsed = productionNodes !== null;

        if (parsed) {
          nodes = productionNodes;

          for (;;) {
            context.saveIndex();

            productionNodes = terminalPartOrProduction.parse(context, productions);
            parsed = productionNodes !== null;

            if (parsed) {
              nodes = nodes.concat(productionNodes);
            } else {
              context.backtrack();

              return nodes;
            }
          }
        } else {
          context.backtrack();
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes) {
      var regExp = /([^*]+)\+$/,
          Class = OneOrMorePartsPart,
          oneOrMorePartsPart = _get(OneOrMorePartsPart.__proto__ || Object.getPrototypeOf(OneOrMorePartsPart), 'fromSymbol', this).call(this, symbol, terminalSymbolsRegExp, terminalTypes, regExp, Class);

      return oneOrMorePartsPart;
    }
  }]);

  return OneOrMorePartsPart;
}(SequenceOfPartsPart);

module.exports = OneOrMorePartsPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L29uZU9yTW9yZVBhcnRzLmpzIl0sIm5hbWVzIjpbIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJyZXF1aXJlIiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9kZXMiLCJ0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24iLCJzYXZlSW5kZXgiLCJwcm9kdWN0aW9uTm9kZXMiLCJwYXJzZSIsInBhcnNlZCIsImNvbmNhdCIsImJhY2t0cmFjayIsInN5bWJvbCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInRlcm1pbmFsVHlwZXMiLCJyZWdFeHAiLCJDbGFzcyIsIm9uZU9yTW9yZVBhcnRzUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxzQkFBc0JDLFFBQVEsbUJBQVIsQ0FBMUI7O0lBRU1DLGtCOzs7Ozs7Ozs7OzswQkFDRUMsTyxFQUFTQyxXLEVBQWE7QUFDMUIsVUFBSUMsUUFBUSxJQUFaO0FBQUEsVUFDSUMsMkJBQTJCLEtBQUtBLHdCQUFMLENBQThCRixXQUE5QixDQUQvQjs7QUFHQSxVQUFJRSw2QkFBNkIsSUFBakMsRUFBdUM7QUFDckNILGdCQUFRSSxTQUFSOztBQUVBLFlBQUlDLGtCQUFrQkYseUJBQXlCRyxLQUF6QixDQUErQk4sT0FBL0IsRUFBd0NDLFdBQXhDLENBQXRCO0FBQUEsWUFDSU0sU0FBVUYsb0JBQW9CLElBRGxDOztBQUdBLFlBQUlFLE1BQUosRUFBWTtBQUNWTCxrQkFBUUcsZUFBUjs7QUFFQSxtQkFBUTtBQUNOTCxvQkFBUUksU0FBUjs7QUFFQUMsOEJBQWtCRix5QkFBeUJHLEtBQXpCLENBQStCTixPQUEvQixFQUF3Q0MsV0FBeEMsQ0FBbEI7QUFDQU0scUJBQVVGLG9CQUFvQixJQUE5Qjs7QUFFQSxnQkFBSUUsTUFBSixFQUFZO0FBQ1ZMLHNCQUFRQSxNQUFNTSxNQUFOLENBQWFILGVBQWIsQ0FBUjtBQUNELGFBRkQsTUFFTztBQUNMTCxzQkFBUVMsU0FBUjs7QUFFQSxxQkFBT1AsS0FBUDtBQUNEO0FBQ0Y7QUFDRixTQWpCRCxNQWlCTztBQUNMRixrQkFBUVMsU0FBUjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT1AsS0FBUDtBQUNEOzs7K0JBRWlCUSxNLEVBQVFDLHFCLEVBQXVCQyxhLEVBQWU7QUFDOUQsVUFBSUMsU0FBUyxZQUFiO0FBQUEsVUFDSUMsUUFBUWYsa0JBRFo7QUFBQSxVQUVJZ0Isb0lBQXNDTCxNQUF0QyxFQUE4Q0MscUJBQTlDLEVBQXFFQyxhQUFyRSxFQUFvRkMsTUFBcEYsRUFBNEZDLEtBQTVGLENBRko7O0FBSUEsYUFBT0Msa0JBQVA7QUFDRDs7OztFQTFDOEJsQixtQjs7QUE2Q2pDbUIsT0FBT0MsT0FBUCxHQUFpQmxCLGtCQUFqQiIsImZpbGUiOiJvbmVPck1vcmVQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKCcuL3NlcXVlbmNlT2ZQYXJ0cycpO1xuXG5jbGFzcyBPbmVPck1vcmVQYXJ0c1BhcnQgZXh0ZW5kcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IHtcbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gPSB0aGlzLnRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbihwcm9kdWN0aW9ucyk7XG5cbiAgICBpZiAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnNhdmVJbmRleCgpO1xuXG4gICAgICB2YXIgcHJvZHVjdGlvbk5vZGVzID0gdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zKSxcbiAgICAgICAgICBwYXJzZWQgPSAocHJvZHVjdGlvbk5vZGVzICE9PSBudWxsKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBub2RlcyA9IHByb2R1Y3Rpb25Ob2RlcztcblxuICAgICAgICBmb3IoOzspIHtcbiAgICAgICAgICBjb250ZXh0LnNhdmVJbmRleCgpO1xuXG4gICAgICAgICAgcHJvZHVjdGlvbk5vZGVzID0gdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zKTtcbiAgICAgICAgICBwYXJzZWQgPSAocHJvZHVjdGlvbk5vZGVzICE9PSBudWxsKTtcblxuICAgICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHByb2R1Y3Rpb25Ob2Rlcyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHQuYmFja3RyYWNrKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuYmFja3RyYWNrKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHRlcm1pbmFsVHlwZXMpIHtcbiAgICB2YXIgcmVnRXhwID0gLyhbXipdKylcXCskLyxcbiAgICAgICAgQ2xhc3MgPSBPbmVPck1vcmVQYXJ0c1BhcnQsXG4gICAgICAgIG9uZU9yTW9yZVBhcnRzUGFydCA9IHN1cGVyLmZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHRlcm1pbmFsVHlwZXMsIHJlZ0V4cCwgQ2xhc3MpO1xuXG4gICAgcmV0dXJuIG9uZU9yTW9yZVBhcnRzUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9uZU9yTW9yZVBhcnRzUGFydDtcbiJdfQ==