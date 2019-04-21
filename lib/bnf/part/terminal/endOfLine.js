'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var TerminalPart = require('../../part/terminal'),
    EndOfLineNode = require('../../../common/node/terminal/endOfLine');

var specialSymbols = lexers.specialSymbols,
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
          nextSignificantToken = configuration.getNextSignificantToken(noWhitespace),
          significantToken = nextSignificantToken; ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC90ZXJtaW5hbC9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlRlcm1pbmFsUGFydCIsIkVuZE9mTGluZU5vZGUiLCJzcGVjaWFsU3ltYm9scyIsIkVORF9PRl9MSU5FIiwiRW5kT2ZMaW5lUGFydCIsImNvbmZpZ3VyYXRpb24iLCJub1doaXRlc3BhY2UiLCJlbmRPZkxpbmVOb2RlIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5FbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsImJhY2t0cmFjayIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsZUFBZUQsUUFBUSxxQkFBUixDQUFyQjtBQUFBLElBQ01FLGdCQUFnQkYsUUFBUSx5Q0FBUixDQUR0Qjs7QUFHTSxJQUFFRyxjQUFGLEdBQXFCSixNQUFyQixDQUFFSSxjQUFGO0FBQUEsSUFDRUMsV0FERixHQUNrQkQsY0FEbEIsQ0FDRUMsV0FERjs7SUFHQUMsYTs7Ozs7Ozs7Ozs7MEJBQ0VDLGEsRUFBZUMsWSxFQUFjO0FBQ2pDQSxxQkFBZUEsZ0JBQWdCLEtBQUtBLFlBQXBDLENBRGlDLENBQ2lCOztBQUVsRCxVQUFJQyxnQkFBZ0IsSUFBcEI7O0FBRUEsVUFBTUMsYUFBYUgsY0FBY0ksYUFBZCxFQUFuQjtBQUFBLFVBQ01DLHVCQUF1QkwsY0FBY00sdUJBQWQsQ0FBc0NMLFlBQXRDLENBRDdCO0FBQUEsVUFFTU0sbUJBQW1CRixvQkFGekIsQ0FMaUMsQ0FPYzs7QUFFL0MsVUFBSUUscUJBQXFCLElBQXpCLEVBQStCO0FBQzdCLFlBQU1DLGlDQUFpQ0QsaUJBQWlCRSxnQkFBakIsRUFBdkM7O0FBRUEsWUFBSUQsOEJBQUosRUFBb0M7QUFDbENOLDBCQUFnQk4sY0FBY2Msb0JBQWQsQ0FBbUNILGdCQUFuQyxDQUFoQjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSUwsa0JBQWtCLElBQXRCLEVBQTRCO0FBQzFCRixzQkFBY1csU0FBZCxDQUF3QlIsVUFBeEI7QUFDRDs7QUFFRCxhQUFPRCxhQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1VLFNBQVNkLFdBQWYsQ0FEUyxDQUNtQjs7QUFFNUIsYUFBT2MsTUFBUDtBQUNEOzs7O0VBN0J5QmpCLFk7O0FBZ0M1QmtCLE9BQU9DLE9BQVAsR0FBaUJmLGFBQWpCIiwiZmlsZSI6ImVuZE9mTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFRlcm1pbmFsUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvdGVybWluYWwnKSxcbiAgICAgIEVuZE9mTGluZU5vZGUgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21tb24vbm9kZS90ZXJtaW5hbC9lbmRPZkxpbmUnKTtcblxuY29uc3QgeyBzcGVjaWFsU3ltYm9scyB9ID0gbGV4ZXJzLFxuICAgICAgeyBFTkRfT0ZfTElORSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIEVuZE9mTGluZVBhcnQgZXh0ZW5kcyBUZXJtaW5hbFBhcnQge1xuICBwYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgbGV0IGVuZE9mTGluZU5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb25maWd1cmF0aW9uLmdldFNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IGNvbmZpZ3VyYXRpb24uZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV4dFNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5FbmRPZkxpbmVUb2tlbiA9IHNpZ25pZmljYW50VG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbkVuZE9mTGluZVRva2VuKSB7XG4gICAgICAgIGVuZE9mTGluZU5vZGUgPSBFbmRPZkxpbmVOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoZW5kT2ZMaW5lTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uZmlndXJhdGlvbi5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuZE9mTGluZU5vZGU7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBFTkRfT0ZfTElORTsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lUGFydDtcbiJdfQ==