'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var TerminalPart = require('../../part/terminal'),
    EndOfLineNode = require('../../../common/node/terminal/endOfLine');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    END_OF_LINE = specialSymbols.END_OF_LINE;

var EndOfLinePart = function (_TerminalPart) {
  _inherits(EndOfLinePart, _TerminalPart);

  function EndOfLinePart() {
    _classCallCheck(this, EndOfLinePart);

    return _possibleConstructorReturn(this, (EndOfLinePart.__proto__ || Object.getPrototypeOf(EndOfLinePart)).apply(this, arguments));
  }

  _createClass(EndOfLinePart, [{
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var endOfLineNode = null;

      var savedIndex = configuration.getSavedIndex(),
          nextNonWhitespaceSignificantToken = configuration.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

      if (significantToken !== null) {
        var significantTokenEndOfLineToken = significantToken.isEndOfLineToken();

        if (significantTokenEndOfLineToken) {
          endOfLineNode = EndOfLineNode.fromSignificantToken(significantToken);
        }
      }

      if (endOfLineNode === null) {
        configuration.backtrack(savedIndex);
      }

      return endOfLineNode;
    }
  }, {
    key: 'asString',
    value: function asString() {
      var string = END_OF_LINE; ///

      return string;
    }
  }]);

  return EndOfLinePart;
}(TerminalPart);

module.exports = EndOfLinePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC90ZXJtaW5hbC9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlRlcm1pbmFsUGFydCIsIkVuZE9mTGluZU5vZGUiLCJCTkZMZXhlciIsInNwZWNpYWxTeW1ib2xzIiwiRU5EX09GX0xJTkUiLCJFbmRPZkxpbmVQYXJ0IiwiY29uZmlndXJhdGlvbiIsIm5vV2hpdGVzcGFjZSIsImVuZE9mTGluZU5vZGUiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsIm5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuRW5kT2ZMaW5lVG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJiYWNrdHJhY2siLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLGVBQWVELFFBQVEscUJBQVIsQ0FBckI7QUFBQSxJQUNNRSxnQkFBZ0JGLFFBQVEseUNBQVIsQ0FEdEI7O0FBR00sSUFBRUcsUUFBRixHQUFlSixNQUFmLENBQUVJLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxRQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsV0FGRixHQUVrQkQsY0FGbEIsQ0FFRUMsV0FGRjs7SUFJQUMsYTs7Ozs7Ozs7Ozs7MEJBQ0VDLGEsRUFBZUMsWSxFQUFjO0FBQ2pDQSxxQkFBZUEsZ0JBQWdCLEtBQUtBLFlBQXBDLENBRGlDLENBQ2lCOztBQUVsRCxVQUFJQyxnQkFBZ0IsSUFBcEI7O0FBRUEsVUFBTUMsYUFBYUgsY0FBY0ksYUFBZCxFQUFuQjtBQUFBLFVBQ01DLG9DQUFvQ0wsY0FBY00sb0NBQWQsQ0FBbURMLFlBQW5ELENBRDFDO0FBQUEsVUFFTU0sbUJBQW1CRixpQ0FGekIsQ0FMaUMsQ0FPMkI7O0FBRTVELFVBQUlFLHFCQUFxQixJQUF6QixFQUErQjtBQUM3QixZQUFNQyxpQ0FBaUNELGlCQUFpQkUsZ0JBQWpCLEVBQXZDOztBQUVBLFlBQUlELDhCQUFKLEVBQW9DO0FBQ2xDTiwwQkFBZ0JQLGNBQWNlLG9CQUFkLENBQW1DSCxnQkFBbkMsQ0FBaEI7QUFDRDtBQUNGOztBQUVELFVBQUlMLGtCQUFrQixJQUF0QixFQUE0QjtBQUMxQkYsc0JBQWNXLFNBQWQsQ0FBd0JSLFVBQXhCO0FBQ0Q7O0FBRUQsYUFBT0QsYUFBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNVSxTQUFTZCxXQUFmLENBRFMsQ0FDbUI7O0FBRTVCLGFBQU9jLE1BQVA7QUFDRDs7OztFQTdCeUJsQixZOztBQWdDNUJtQixPQUFPQyxPQUFQLEdBQWlCZixhQUFqQiIsImZpbGUiOiJlbmRPZkxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBUZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L3Rlcm1pbmFsJyksXG4gICAgICBFbmRPZkxpbmVOb2RlID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwvZW5kT2ZMaW5lJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyBFTkRfT0ZfTElORSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIEVuZE9mTGluZVBhcnQgZXh0ZW5kcyBUZXJtaW5hbFBhcnQge1xuICBwYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgbGV0IGVuZE9mTGluZU5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb25maWd1cmF0aW9uLmdldFNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBjb25maWd1cmF0aW9uLmdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbihub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5FbmRPZkxpbmVUb2tlbiA9IHNpZ25pZmljYW50VG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbkVuZE9mTGluZVRva2VuKSB7XG4gICAgICAgIGVuZE9mTGluZU5vZGUgPSBFbmRPZkxpbmVOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoZW5kT2ZMaW5lTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uZmlndXJhdGlvbi5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuZE9mTGluZU5vZGU7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBFTkRfT0ZfTElORTsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lUGFydDtcbiJdfQ==