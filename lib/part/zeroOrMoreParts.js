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
    value: function parse(context, productions) {
      var nodes = null,
          terminalPartOrProduction = this.terminalPartOrProduction(productions);

      if (terminalPartOrProduction !== null) {
        nodes = [];

        for (;;) {
          context.saveIndex();

          var productionNodes = terminalPartOrProduction.parse(context, productions),
              parsed = productionNodes !== null;

          if (parsed) {
            nodes = nodes.concat(productionNodes);
          } else {
            context.backtrack();

            return nodes;
          }
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes) {
      var regExp = /([^*]+)\*$/,
          Class = ZeroOrMorePartsPart,
          zeroOrMorePartsPart = _get(ZeroOrMorePartsPart.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsPart), 'fromSymbol', this).call(this, symbol, terminalSymbolsRegExp, terminalTypes, regExp, Class);

      return zeroOrMorePartsPart;
    }
  }]);

  return ZeroOrMorePartsPart;
}(SequenceOfPartsPart);

module.exports = ZeroOrMorePartsPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3plcm9Pck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwicmVxdWlyZSIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub2RlcyIsInRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiIsInNhdmVJbmRleCIsInByb2R1Y3Rpb25Ob2RlcyIsInBhcnNlIiwicGFyc2VkIiwiY29uY2F0IiwiYmFja3RyYWNrIiwic3ltYm9sIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwidGVybWluYWxUeXBlcyIsInJlZ0V4cCIsIkNsYXNzIiwiemVyb09yTW9yZVBhcnRzUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxzQkFBc0JDLFFBQVEsbUJBQVIsQ0FBMUI7O0lBRU1DLG1COzs7Ozs7Ozs7OzswQkFDRUMsTyxFQUFTQyxXLEVBQWE7QUFDMUIsVUFBSUMsUUFBUSxJQUFaO0FBQUEsVUFDSUMsMkJBQTJCLEtBQUtBLHdCQUFMLENBQThCRixXQUE5QixDQUQvQjs7QUFHQSxVQUFJRSw2QkFBNkIsSUFBakMsRUFBdUM7QUFDckNELGdCQUFRLEVBQVI7O0FBRUEsaUJBQVE7QUFDTkYsa0JBQVFJLFNBQVI7O0FBRUEsY0FBSUMsa0JBQWtCRix5QkFBeUJHLEtBQXpCLENBQStCTixPQUEvQixFQUF3Q0MsV0FBeEMsQ0FBdEI7QUFBQSxjQUNJTSxTQUFVRixvQkFBb0IsSUFEbEM7O0FBR0EsY0FBSUUsTUFBSixFQUFZO0FBQ1ZMLG9CQUFRQSxNQUFNTSxNQUFOLENBQWFILGVBQWIsQ0FBUjtBQUNELFdBRkQsTUFFTztBQUNMTCxvQkFBUVMsU0FBUjs7QUFFQSxtQkFBT1AsS0FBUDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxhQUFPQSxLQUFQO0FBQ0Q7OzsrQkFFaUJRLE0sRUFBUUMscUIsRUFBdUJDLGEsRUFBZTtBQUM5RCxVQUFJQyxTQUFTLFlBQWI7QUFBQSxVQUNJQyxRQUFRZixtQkFEWjtBQUFBLFVBRUlnQix1SUFBdUNMLE1BQXZDLEVBQStDQyxxQkFBL0MsRUFBc0VDLGFBQXRFLEVBQXFGQyxNQUFyRixFQUE2RkMsS0FBN0YsQ0FGSjs7QUFJQSxhQUFPQyxtQkFBUDtBQUNEOzs7O0VBakMrQmxCLG1COztBQW9DbENtQixPQUFPQyxPQUFQLEdBQWlCbEIsbUJBQWpCIiwiZmlsZSI6Inplcm9Pck1vcmVQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKCcuL3NlcXVlbmNlT2ZQYXJ0cycpO1xuXG5jbGFzcyBaZXJvT3JNb3JlUGFydHNQYXJ0IGV4dGVuZHMgU2VxdWVuY2VPZlBhcnRzUGFydCB7XG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIG5vZGVzID0gbnVsbCxcbiAgICAgICAgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uID0gdGhpcy50ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ocHJvZHVjdGlvbnMpO1xuXG4gICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgbm9kZXMgPSBbXTtcblxuICAgICAgZm9yKDs7KSB7XG4gICAgICAgIGNvbnRleHQuc2F2ZUluZGV4KCk7XG4gICAgICAgIFxuICAgICAgICB2YXIgcHJvZHVjdGlvbk5vZGVzID0gdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zKSxcbiAgICAgICAgICAgIHBhcnNlZCA9IChwcm9kdWN0aW9uTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwcm9kdWN0aW9uTm9kZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQuYmFja3RyYWNrKCk7XG5cbiAgICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCB0ZXJtaW5hbFR5cGVzKSB7XG4gICAgdmFyIHJlZ0V4cCA9IC8oW14qXSspXFwqJC8sXG4gICAgICAgIENsYXNzID0gWmVyb09yTW9yZVBhcnRzUGFydCxcbiAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IHN1cGVyLmZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHRlcm1pbmFsVHlwZXMsIHJlZ0V4cCwgQ2xhc3MpO1xuXG4gICAgcmV0dXJuIHplcm9Pck1vcmVQYXJ0c1BhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBaZXJvT3JNb3JlUGFydHNQYXJ0O1xuIl19