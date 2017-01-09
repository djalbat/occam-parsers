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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC96ZXJvT3JNb3JlUGFydHMuanMiXSwibmFtZXMiOlsiU2VxdWVuY2VPZlBhcnRzUGFydCIsInJlcXVpcmUiLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9XaGl0ZXNwYWNlIiwiZ2V0Tm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJ0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uTm9kZXMiLCJwYXJzZSIsInBhcnNlZCIsImNvbmNhdCIsInN5bWJvbCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJlZ0V4cCIsIkNsYXNzIiwiemVyb09yTW9yZVBhcnRzUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxzQkFBc0JDLFFBQVEsbUJBQVIsQ0FBMUI7O0lBRU1DLG1COzs7Ozs7Ozs7OzswQkFDRUMsTyxFQUFTQyxXLEVBQWFDLFksRUFBYztBQUN4Q0EscUJBQWUsS0FBS0MsZUFBTCxFQUFmLENBRHdDLENBQ0E7O0FBRXhDLFVBQUlDLFFBQVEsSUFBWjtBQUFBLFVBQ0lDLDJCQUEyQixLQUFLQSx3QkFBTCxDQUE4QkosV0FBOUIsQ0FEL0I7O0FBR0EsVUFBSUksNkJBQTZCLElBQWpDLEVBQXVDO0FBQ3JDRCxnQkFBUSxFQUFSOztBQUVBLGlCQUFRO0FBQ04sY0FBSUUsa0JBQWtCRCx5QkFBeUJFLEtBQXpCLENBQStCUCxPQUEvQixFQUF3Q0MsV0FBeEMsRUFBcURDLFlBQXJELENBQXRCO0FBQUEsY0FDSU0sU0FBVUYsb0JBQW9CLElBRGxDOztBQUdBLGNBQUlFLE1BQUosRUFBWTtBQUNWSixvQkFBUUEsTUFBTUssTUFBTixDQUFhSCxlQUFiLENBQVI7QUFDRCxXQUZELE1BRU87QUFDTCxtQkFBT0YsS0FBUDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxhQUFPQSxLQUFQO0FBQ0Q7OzsrQkFFaUJNLE0sRUFBUUMscUIsRUFBdUJDLHFCLEVBQXVCVixZLEVBQWM7QUFDcEYsVUFBSVcsU0FBUyxZQUFiO0FBQUEsVUFDSUMsUUFBUWYsbUJBRFo7QUFBQSxVQUVJZ0IsdUlBQXVDTCxNQUF2QyxFQUErQ0MscUJBQS9DLEVBQXNFQyxxQkFBdEUsRUFBNkZWLFlBQTdGLEVBQTJHVyxNQUEzRyxFQUFtSEMsS0FBbkgsQ0FGSjs7QUFJQSxhQUFPQyxtQkFBUDtBQUNEOzs7O0VBL0IrQmxCLG1COztBQWtDbENtQixPQUFPQyxPQUFQLEdBQWlCbEIsbUJBQWpCIiwiZmlsZSI6Inplcm9Pck1vcmVQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKCcuL3NlcXVlbmNlT2ZQYXJ0cycpO1xuXG5jbGFzcyBaZXJvT3JNb3JlUGFydHNQYXJ0IGV4dGVuZHMgU2VxdWVuY2VPZlBhcnRzUGFydCB7XG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSB0aGlzLmdldE5vV2hpdGVzcGFjZSgpOyAgLy8vXG5cbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gPSB0aGlzLnRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbihwcm9kdWN0aW9ucyk7XG5cbiAgICBpZiAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBub2RlcyA9IFtdO1xuXG4gICAgICBmb3IoOzspIHtcbiAgICAgICAgdmFyIHByb2R1Y3Rpb25Ob2RlcyA9IHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICAgIHBhcnNlZCA9IChwcm9kdWN0aW9uTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwcm9kdWN0aW9uTm9kZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIHJlZ0V4cCA9IC8oW14qXSspXFwqJC8sXG4gICAgICAgIENsYXNzID0gWmVyb09yTW9yZVBhcnRzUGFydCxcbiAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IHN1cGVyLmZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlLCByZWdFeHAsIENsYXNzKTtcblxuICAgIHJldHVybiB6ZXJvT3JNb3JlUGFydHNQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWmVyb09yTW9yZVBhcnRzUGFydDtcbiJdfQ==