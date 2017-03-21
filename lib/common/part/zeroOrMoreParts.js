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
    value: function parse(context, noWhitespace) {
      noWhitespace = this.getNoWhitespace(); ///

      var nodes = [];

      var productions = context.getProductions(),
          terminalPartOrProduction = this.terminalPartOrProduction(productions);

      if (terminalPartOrProduction !== null) {
        for (;;) {
          var terminalPartOrProductionNodeOrNodes = terminalPartOrProduction.parse(context, noWhitespace),
              terminalPartOrProductionParsed = terminalPartOrProductionNodeOrNodes !== null;

          if (terminalPartOrProductionParsed) {
            nodes = nodes.concat(terminalPartOrProductionNodeOrNodes);
          } else {
            break;
          }
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace) {
      var regExp = /([^*]+)\*$/,
          Class = ZeroOrMorePartsPart,
          zeroOrMorePartsPart = _get(ZeroOrMorePartsPart.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsPart), 'fromSymbol', this).call(this, symbol, significantTokenTypes, noWhitespace, regExp, Class);

      return zeroOrMorePartsPart;
    }
  }, {
    key: 'fromOneOrMorePartsPart',
    value: function fromOneOrMorePartsPart(oneOrMorePartsPart) {
      var terminalPart = oneOrMorePartsPart.getTerminalPart(),
          productionName = oneOrMorePartsPart.getProductionName(),
          noWhitespace = oneOrMorePartsPart.getNoWhitespace(),
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(terminalPart, productionName, noWhitespace);

      return zeroOrMorePartsPart;
    }
  }]);

  return ZeroOrMorePartsPart;
}(SequenceOfPartsPart);

module.exports = ZeroOrMorePartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFydC96ZXJvT3JNb3JlUGFydHMuanMiXSwibmFtZXMiOlsiU2VxdWVuY2VPZlBhcnRzUGFydCIsInJlcXVpcmUiLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwiY29udGV4dCIsIm5vV2hpdGVzcGFjZSIsImdldE5vV2hpdGVzcGFjZSIsIm5vZGVzIiwicHJvZHVjdGlvbnMiLCJnZXRQcm9kdWN0aW9ucyIsInRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiIsInRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVPck5vZGVzIiwicGFyc2UiLCJ0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25QYXJzZWQiLCJjb25jYXQiLCJzeW1ib2wiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJyZWdFeHAiLCJDbGFzcyIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJ0ZXJtaW5hbFBhcnQiLCJnZXRUZXJtaW5hbFBhcnQiLCJwcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHNCQUFzQkMsUUFBUSxtQkFBUixDQUE1Qjs7SUFFTUMsbUI7Ozs7Ozs7Ozs7OzBCQUNFQyxPLEVBQVNDLFksRUFBYztBQUMzQkEscUJBQWUsS0FBS0MsZUFBTCxFQUFmLENBRDJCLENBQ2E7O0FBRXhDLFVBQUlDLFFBQVEsRUFBWjs7QUFFQSxVQUFNQyxjQUFjSixRQUFRSyxjQUFSLEVBQXBCO0FBQUEsVUFDTUMsMkJBQTJCLEtBQUtBLHdCQUFMLENBQThCRixXQUE5QixDQURqQzs7QUFHQSxVQUFJRSw2QkFBNkIsSUFBakMsRUFBdUM7QUFDckMsaUJBQVE7QUFDTixjQUFNQyxzQ0FBc0NELHlCQUF5QkUsS0FBekIsQ0FBK0JSLE9BQS9CLEVBQXdDQyxZQUF4QyxDQUE1QztBQUFBLGNBQ0lRLGlDQUFrQ0Ysd0NBQXdDLElBRDlFOztBQUdBLGNBQUlFLDhCQUFKLEVBQW9DO0FBQ2xDTixvQkFBUUEsTUFBTU8sTUFBTixDQUFhSCxtQ0FBYixDQUFSO0FBQ0QsV0FGRCxNQUVPO0FBQ0w7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBT0osS0FBUDtBQUNEOzs7K0JBRWlCUSxNLEVBQVFDLHFCLEVBQXVCWCxZLEVBQWM7QUFDN0QsVUFBTVksU0FBUyxZQUFmO0FBQUEsVUFDTUMsUUFBUWYsbUJBRGQ7QUFBQSxVQUVNZ0IsdUlBQXVDSixNQUF2QyxFQUErQ0MscUJBQS9DLEVBQXNFWCxZQUF0RSxFQUFvRlksTUFBcEYsRUFBNEZDLEtBQTVGLENBRk47O0FBSUEsYUFBT0MsbUJBQVA7QUFDRDs7OzJDQUc2QkMsa0IsRUFBb0I7QUFDaEQsVUFBTUMsZUFBZUQsbUJBQW1CRSxlQUFuQixFQUFyQjtBQUFBLFVBQ01DLGlCQUFpQkgsbUJBQW1CSSxpQkFBbkIsRUFEdkI7QUFBQSxVQUVNbkIsZUFBZWUsbUJBQW1CZCxlQUFuQixFQUZyQjtBQUFBLFVBR01hLHNCQUFzQixJQUFJaEIsbUJBQUosQ0FBd0JrQixZQUF4QixFQUFzQ0UsY0FBdEMsRUFBc0RsQixZQUF0RCxDQUg1Qjs7QUFLQSxhQUFPYyxtQkFBUDtBQUNEOzs7O0VBekMrQmxCLG1COztBQTRDbEN3QixPQUFPQyxPQUFQLEdBQWlCdkIsbUJBQWpCIiwiZmlsZSI6Inplcm9Pck1vcmVQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2VxdWVuY2VPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4vc2VxdWVuY2VPZlBhcnRzJyk7XG5cbmNsYXNzIFplcm9Pck1vcmVQYXJ0c1BhcnQgZXh0ZW5kcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IHtcbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gdGhpcy5nZXROb1doaXRlc3BhY2UoKTsgIC8vL1xuXG4gICAgbGV0IG5vZGVzID0gW107XG4gICAgXG4gICAgY29uc3QgcHJvZHVjdGlvbnMgPSBjb250ZXh0LmdldFByb2R1Y3Rpb25zKCksXG4gICAgICAgICAgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uID0gdGhpcy50ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ocHJvZHVjdGlvbnMpO1xuXG4gICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgZm9yKDs7KSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVPck5vZGVzID0gdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25QYXJzZWQgPSAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICAgIGlmICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25QYXJzZWQpIHtcbiAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdCh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlT3JOb2Rlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICBjb25zdCByZWdFeHAgPSAvKFteKl0rKVxcKiQvLFxuICAgICAgICAgIENsYXNzID0gWmVyb09yTW9yZVBhcnRzUGFydCxcbiAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gc3VwZXIuZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlLCByZWdFeHAsIENsYXNzKTtcblxuICAgIHJldHVybiB6ZXJvT3JNb3JlUGFydHNQYXJ0O1xuICB9XG5cblxuICBzdGF0aWMgZnJvbU9uZU9yTW9yZVBhcnRzUGFydChvbmVPck1vcmVQYXJ0c1BhcnQpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0VGVybWluYWxQYXJ0KCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0Tm9XaGl0ZXNwYWNlKCksXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHRlcm1pbmFsUGFydCwgcHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gemVyb09yTW9yZVBhcnRzUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFplcm9Pck1vcmVQYXJ0c1BhcnQ7XG4iXX0=