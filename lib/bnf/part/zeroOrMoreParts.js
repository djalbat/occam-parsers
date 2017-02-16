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
          var terminalPartOrProductionNodes = terminalPartOrProduction.parse(context, productions, noWhitespace),
              terminalPartOrProductionParsed = terminalPartOrProductionNodes !== null;

          if (terminalPartOrProductionParsed) {
            nodes = nodes.concat(terminalPartOrProductionNodes);
          } else {
            return nodes;
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

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC96ZXJvT3JNb3JlUGFydHMuanMiXSwibmFtZXMiOlsiU2VxdWVuY2VPZlBhcnRzUGFydCIsInJlcXVpcmUiLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9XaGl0ZXNwYWNlIiwiZ2V0Tm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJ0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24iLCJ0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlcyIsInBhcnNlIiwidGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uUGFyc2VkIiwiY29uY2F0Iiwic3ltYm9sIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwicmVnRXhwIiwiQ2xhc3MiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0Iiwib25lT3JNb3JlUGFydHNQYXJ0IiwidGVybWluYWxQYXJ0IiwiZ2V0VGVybWluYWxQYXJ0IiwicHJvZHVjdGlvbk5hbWUiLCJnZXRQcm9kdWN0aW9uTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJmaXJzdCIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsc0JBQXNCQyxRQUFRLG1CQUFSLENBQTFCOztJQUVNQyxtQjs7Ozs7Ozs7Ozs7MEJBQ0VDLE8sRUFBU0MsVyxFQUFhQyxZLEVBQWM7QUFDeENBLHFCQUFlLEtBQUtDLGVBQUwsRUFBZixDQUR3QyxDQUNBOztBQUV4QyxVQUFJQyxRQUFRLElBQVo7QUFBQSxVQUNJQywyQkFBMkIsS0FBS0Esd0JBQUwsQ0FBOEJKLFdBQTlCLENBRC9COztBQUdBLFVBQUlJLDZCQUE2QixJQUFqQyxFQUF1QztBQUNyQ0QsZ0JBQVEsRUFBUjs7QUFFQSxpQkFBUTtBQUNOLGNBQUlFLGdDQUFnQ0QseUJBQXlCRSxLQUF6QixDQUErQlAsT0FBL0IsRUFBd0NDLFdBQXhDLEVBQXFEQyxZQUFyRCxDQUFwQztBQUFBLGNBQ0lNLGlDQUFrQ0Ysa0NBQWtDLElBRHhFOztBQUdBLGNBQUlFLDhCQUFKLEVBQW9DO0FBQ2xDSixvQkFBUUEsTUFBTUssTUFBTixDQUFhSCw2QkFBYixDQUFSO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsbUJBQU9GLEtBQVA7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBT0EsS0FBUDtBQUNEOzs7K0JBRWlCTSxNLEVBQVFDLHFCLEVBQXVCVCxZLEVBQWM7QUFDN0QsVUFBSVUsU0FBUyxZQUFiO0FBQUEsVUFDSUMsUUFBUWQsbUJBRFo7QUFBQSxVQUVJZSx1SUFBdUNKLE1BQXZDLEVBQStDQyxxQkFBL0MsRUFBc0VULFlBQXRFLEVBQW9GVSxNQUFwRixFQUE0RkMsS0FBNUYsQ0FGSjs7QUFJQSxhQUFPQyxtQkFBUDtBQUNEOzs7MkNBRzZCQyxrQixFQUFvQjtBQUNoRCxVQUFJQyxlQUFlRCxtQkFBbUJFLGVBQW5CLEVBQW5CO0FBQUEsVUFDSUMsaUJBQWlCSCxtQkFBbUJJLGlCQUFuQixFQURyQjtBQUFBLFVBRUlqQixlQUFlYSxtQkFBbUJaLGVBQW5CLEVBRm5CO0FBQUEsVUFHSVcsc0JBQXNCLElBQUlmLG1CQUFKLENBQXdCaUIsWUFBeEIsRUFBc0NFLGNBQXRDLEVBQXNEaEIsWUFBdEQsQ0FIMUI7O0FBS0EsYUFBT1ksbUJBQVA7QUFDRDs7OztFQXpDK0JqQixtQjs7QUE0Q2xDdUIsT0FBT0MsT0FBUCxHQUFpQnRCLG1CQUFqQjs7QUFFQSxTQUFTdUIsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoiemVyb09yTW9yZVBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2VxdWVuY2VPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4vc2VxdWVuY2VPZlBhcnRzJyk7XG5cbmNsYXNzIFplcm9Pck1vcmVQYXJ0c1BhcnQgZXh0ZW5kcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IHtcbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IHRoaXMuZ2V0Tm9XaGl0ZXNwYWNlKCk7ICAvLy9cblxuICAgIHZhciBub2RlcyA9IG51bGwsXG4gICAgICAgIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiA9IHRoaXMudGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uKHByb2R1Y3Rpb25zKTtcblxuICAgIGlmICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIG5vZGVzID0gW107XG5cbiAgICAgIGZvcig7Oykge1xuICAgICAgICB2YXIgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZXMgPSB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25QYXJzZWQgPSAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICAgIGlmICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25QYXJzZWQpIHtcbiAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdCh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2Rlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGVzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIHJlZ0V4cCA9IC8oW14qXSspXFwqJC8sXG4gICAgICAgIENsYXNzID0gWmVyb09yTW9yZVBhcnRzUGFydCxcbiAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IHN1cGVyLmZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSwgcmVnRXhwLCBDbGFzcyk7XG5cbiAgICByZXR1cm4gemVyb09yTW9yZVBhcnRzUGFydDtcbiAgfVxuXG5cbiAgc3RhdGljIGZyb21PbmVPck1vcmVQYXJ0c1BhcnQob25lT3JNb3JlUGFydHNQYXJ0KSB7XG4gICAgdmFyIHRlcm1pbmFsUGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRUZXJtaW5hbFBhcnQoKSxcbiAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgbm9XaGl0ZXNwYWNlID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldE5vV2hpdGVzcGFjZSgpLFxuICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQodGVybWluYWxQYXJ0LCBwcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiB6ZXJvT3JNb3JlUGFydHNQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWmVyb09yTW9yZVBhcnRzUGFydDtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9Il19