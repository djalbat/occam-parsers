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
          nonWhitespace = this.hasNonWhitespace(),
          nextSignificantToken = configuration.getNextSignificantToken(nonWhitespace),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC90ZXJtaW5hbC9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlRlcm1pbmFsUGFydCIsIkVuZE9mTGluZU5vZGUiLCJzcGVjaWFsU3ltYm9scyIsIkVORF9PRl9MSU5FIiwiRW5kT2ZMaW5lUGFydCIsImNvbmZpZ3VyYXRpb24iLCJlbmRPZkxpbmVOb2RlIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJub25XaGl0ZXNwYWNlIiwiaGFzTm9uV2hpdGVzcGFjZSIsIm5leHRTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiIsImZyb21TaWduaWZpY2FudFRva2VuIiwiYmFja3RyYWNrIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLGVBQWVELFFBQVEscUJBQVIsQ0FBckI7QUFBQSxJQUNNRSxnQkFBZ0JGLFFBQVEseUNBQVIsQ0FEdEI7O0FBR00sSUFBRUcsY0FBRixHQUFxQkosTUFBckIsQ0FBRUksY0FBRjtBQUFBLElBQ0VDLFdBREYsR0FDa0JELGNBRGxCLENBQ0VDLFdBREY7O0lBR0FDLGE7Ozs7Ozs7Ozs7OzBCQUNFQyxhLEVBQWU7QUFDbkIsVUFBSUMsZ0JBQWdCLElBQXBCOztBQUVBLFVBQU1DLGFBQWFGLGNBQWNHLGFBQWQsRUFBbkI7QUFBQSxVQUNJQyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFEcEI7QUFBQSxVQUVNQyx1QkFBdUJOLGNBQWNPLHVCQUFkLENBQXNDSCxhQUF0QyxDQUY3QjtBQUFBLFVBR01JLG1CQUFtQkYsb0JBSHpCLENBSG1CLENBTTRCOztBQUUvQyxVQUFJRSxxQkFBcUIsSUFBekIsRUFBK0I7QUFDN0IsWUFBTUMsaUNBQWlDRCxpQkFBaUJFLGdCQUFqQixFQUF2Qzs7QUFFQSxZQUFJRCw4QkFBSixFQUFvQztBQUNsQ1IsMEJBQWdCTCxjQUFjZSxvQkFBZCxDQUFtQ0gsZ0JBQW5DLENBQWhCO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJUCxrQkFBa0IsSUFBdEIsRUFBNEI7QUFDMUJELHNCQUFjWSxTQUFkLENBQXdCVixVQUF4QjtBQUNEOztBQUVELGFBQU9ELGFBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTVksU0FBU2YsV0FBZixDQURTLENBQ21COztBQUU1QixhQUFPZSxNQUFQO0FBQ0Q7Ozs0QkFFTztBQUFFLGlJQUFtQmQsYUFBbkI7QUFBb0M7Ozs7RUE5QnBCSixZOztBQWlDNUJtQixPQUFPQyxPQUFQLEdBQWlCaEIsYUFBakIiLCJmaWxlIjoiZW5kT2ZMaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgVGVybWluYWxQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC90ZXJtaW5hbCcpLFxuICAgICAgRW5kT2ZMaW5lTm9kZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsL2VuZE9mTGluZScpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IEVORF9PRl9MSU5FIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgRW5kT2ZMaW5lUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBsZXQgZW5kT2ZMaW5lTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbmZpZ3VyYXRpb24uZ2V0U2F2ZWRJbmRleCgpLFxuXHRcdCAgICAgIG5vbldoaXRlc3BhY2UgPSB0aGlzLmhhc05vbldoaXRlc3BhY2UoKSxcbiAgICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IGNvbmZpZ3VyYXRpb24uZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4obm9uV2hpdGVzcGFjZSksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5leHRTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuRW5kT2ZMaW5lVG9rZW4gPSBzaWduaWZpY2FudFRva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW5FbmRPZkxpbmVUb2tlbikge1xuICAgICAgICBlbmRPZkxpbmVOb2RlID0gRW5kT2ZMaW5lTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKGVuZE9mTGluZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbmZpZ3VyYXRpb24uYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmRPZkxpbmVOb2RlO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gRU5EX09GX0xJTkU7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoRW5kT2ZMaW5lUGFydCk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVQYXJ0O1xuIl19