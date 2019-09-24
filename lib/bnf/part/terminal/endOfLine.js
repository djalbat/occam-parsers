'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
    value: function parse(configuration) {
      var endOfLineNode = null;

      var savedIndex = configuration.getSavedIndex(),
          noWhitespace = this.hasNoWhitespace(),
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
  }, {
    key: 'clone',
    value: function clone() {
      return _get(EndOfLinePart.prototype.__proto__ || Object.getPrototypeOf(EndOfLinePart.prototype), 'clone', this).call(this, EndOfLinePart);
    }
  }]);

  return EndOfLinePart;
}(TerminalPart);

module.exports = EndOfLinePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC90ZXJtaW5hbC9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlRlcm1pbmFsUGFydCIsIkVuZE9mTGluZU5vZGUiLCJzcGVjaWFsU3ltYm9scyIsIkVORF9PRl9MSU5FIiwiRW5kT2ZMaW5lUGFydCIsImNvbmZpZ3VyYXRpb24iLCJlbmRPZkxpbmVOb2RlIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJub1doaXRlc3BhY2UiLCJoYXNOb1doaXRlc3BhY2UiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5FbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsImJhY2t0cmFjayIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxlQUFlRCxRQUFRLHFCQUFSLENBQXJCO0FBQUEsSUFDTUUsZ0JBQWdCRixRQUFRLHlDQUFSLENBRHRCOztBQUdNLElBQUVHLGNBQUYsR0FBcUJKLE1BQXJCLENBQUVJLGNBQUY7QUFBQSxJQUNFQyxXQURGLEdBQ2tCRCxjQURsQixDQUNFQyxXQURGOztJQUdBQyxhOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlO0FBQ25CLFVBQUlDLGdCQUFnQixJQUFwQjs7QUFFQSxVQUFNQyxhQUFhRixjQUFjRyxhQUFkLEVBQW5CO0FBQUEsVUFDSUMsZUFBZSxLQUFLQyxlQUFMLEVBRG5CO0FBQUEsVUFFTUMsdUJBQXVCTixjQUFjTyx1QkFBZCxDQUFzQ0gsWUFBdEMsQ0FGN0I7QUFBQSxVQUdNSSxtQkFBbUJGLG9CQUh6QixDQUhtQixDQU00Qjs7QUFFL0MsVUFBSUUscUJBQXFCLElBQXpCLEVBQStCO0FBQzdCLFlBQU1DLGlDQUFpQ0QsaUJBQWlCRSxnQkFBakIsRUFBdkM7O0FBRUEsWUFBSUQsOEJBQUosRUFBb0M7QUFDbENSLDBCQUFnQkwsY0FBY2Usb0JBQWQsQ0FBbUNILGdCQUFuQyxDQUFoQjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSVAsa0JBQWtCLElBQXRCLEVBQTRCO0FBQzFCRCxzQkFBY1ksU0FBZCxDQUF3QlYsVUFBeEI7QUFDRDs7QUFFRCxhQUFPRCxhQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1ZLFNBQVNmLFdBQWYsQ0FEUyxDQUNtQjs7QUFFNUIsYUFBT2UsTUFBUDtBQUNEOzs7NEJBRU87QUFBRSxpSUFBbUJkLGFBQW5CO0FBQW9DOzs7O0VBOUJwQkosWTs7QUFpQzVCbUIsT0FBT0MsT0FBUCxHQUFpQmhCLGFBQWpCIiwiZmlsZSI6ImVuZE9mTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFRlcm1pbmFsUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvdGVybWluYWwnKSxcbiAgICAgIEVuZE9mTGluZU5vZGUgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21tb24vbm9kZS90ZXJtaW5hbC9lbmRPZkxpbmUnKTtcblxuY29uc3QgeyBzcGVjaWFsU3ltYm9scyB9ID0gbGV4ZXJzLFxuICAgICAgeyBFTkRfT0ZfTElORSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIEVuZE9mTGluZVBhcnQgZXh0ZW5kcyBUZXJtaW5hbFBhcnQge1xuICBwYXJzZShjb25maWd1cmF0aW9uKSB7XG4gICAgbGV0IGVuZE9mTGluZU5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb25maWd1cmF0aW9uLmdldFNhdmVkSW5kZXgoKSxcblx0XHQgICAgICBub1doaXRlc3BhY2UgPSB0aGlzLmhhc05vV2hpdGVzcGFjZSgpLFxuICAgICAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gY29uZmlndXJhdGlvbi5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbihub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbkVuZE9mTGluZVRva2VuID0gc2lnbmlmaWNhbnRUb2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICAgIGlmIChzaWduaWZpY2FudFRva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgICAgZW5kT2ZMaW5lTm9kZSA9IEVuZE9mTGluZU5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmIChlbmRPZkxpbmVOb2RlID09PSBudWxsKSB7XG4gICAgICBjb25maWd1cmF0aW9uLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lTm9kZTtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IEVORF9PRl9MSU5FOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKEVuZE9mTGluZVBhcnQpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lUGFydDtcbiJdfQ==