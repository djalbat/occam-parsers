'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var TerminalPart = require('../../part/terminal'),
    TerminalNode = require('../../../common/node/terminal');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var TerminalSymbolPart = function (_TerminalPart) {
  _inherits(TerminalSymbolPart, _TerminalPart);

  function TerminalSymbolPart(content, noWhitespace) {
    _classCallCheck(this, TerminalSymbolPart);

    var _this = _possibleConstructorReturn(this, (TerminalSymbolPart.__proto__ || Object.getPrototypeOf(TerminalSymbolPart)).call(this, noWhitespace));

    _this.content = content;
    return _this;
  }

  _createClass(TerminalSymbolPart, [{
    key: 'getNoWhitespace',
    value: function getNoWhitespace() {
      return this.noWhitespace;
    }
  }, {
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var terminalNode = null;

      var savedIndex = configuration.getSavedIndex(),
          nextSignificantToken = configuration.getNextSignificantToken(noWhitespace),
          significantToken = nextSignificantToken; ///

      if (significantToken !== null) {
        var content = significantToken.getContent(),
            parsed = content === this.content;

        if (parsed) {
          var token = significantToken; ///

          terminalNode = TerminalNode.fromToken(token);
        }
      }

      if (terminalNode === null) {
        configuration.backtrack(savedIndex);
      }

      return terminalNode;
    }
  }, {
    key: 'asString',
    value: function asString() {
      var noWhitespaceString = this.noWhitespace ? NO_WHITESPACE : '',
          string = noWhitespaceString + '"' + this.content + '"';

      return string;
    }
  }]);

  return TerminalSymbolPart;
}(TerminalPart);

module.exports = TerminalSymbolPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbC5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiVGVybWluYWxQYXJ0IiwiVGVybWluYWxOb2RlIiwiQk5GTGV4ZXIiLCJzcGVjaWFsU3ltYm9scyIsIk5PX1dISVRFU1BBQ0UiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJjb250ZW50Iiwibm9XaGl0ZXNwYWNlIiwiY29uZmlndXJhdGlvbiIsInRlcm1pbmFsTm9kZSIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJnZXROZXh0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRDb250ZW50IiwicGFyc2VkIiwidG9rZW4iLCJmcm9tVG9rZW4iLCJiYWNrdHJhY2siLCJub1doaXRlc3BhY2VTdHJpbmciLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLGVBQWVELFFBQVEscUJBQVIsQ0FBckI7QUFBQSxJQUNNRSxlQUFlRixRQUFRLCtCQUFSLENBRHJCOztBQUdNLElBQUVHLFFBQUYsR0FBZUosTUFBZixDQUFFSSxRQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkQsUUFEckIsQ0FDRUMsY0FERjtBQUFBLElBRUVDLGFBRkYsR0FFb0JELGNBRnBCLENBRUVDLGFBRkY7O0lBSUFDLGtCOzs7QUFDSiw4QkFBWUMsT0FBWixFQUFxQkMsWUFBckIsRUFBbUM7QUFBQTs7QUFBQSx3SUFDM0JBLFlBRDJCOztBQUdqQyxVQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFIaUM7QUFJbEM7Ozs7c0NBRWlCO0FBQ2hCLGFBQU8sS0FBS0MsWUFBWjtBQUNEOzs7MEJBRUtDLGEsRUFBZUQsWSxFQUFjO0FBQ2pDQSxxQkFBZUEsZ0JBQWdCLEtBQUtBLFlBQXBDLENBRGlDLENBQ2lCOztBQUVsRCxVQUFJRSxlQUFlLElBQW5COztBQUVBLFVBQU1DLGFBQWFGLGNBQWNHLGFBQWQsRUFBbkI7QUFBQSxVQUNDQyx1QkFBdUJKLGNBQWNLLHVCQUFkLENBQXNDTixZQUF0QyxDQUR4QjtBQUFBLFVBRUNPLG1CQUFtQkYsb0JBRnBCLENBTGlDLENBT1M7O0FBRTFDLFVBQUlFLHFCQUFxQixJQUF6QixFQUErQjtBQUM3QixZQUFNUixVQUFVUSxpQkFBaUJDLFVBQWpCLEVBQWhCO0FBQUEsWUFDTUMsU0FBVVYsWUFBWSxLQUFLQSxPQURqQzs7QUFHQSxZQUFJVSxNQUFKLEVBQVk7QUFDWCxjQUFNQyxRQUFRSCxnQkFBZCxDQURXLENBQ3FCOztBQUUvQkwseUJBQWVSLGFBQWFpQixTQUFiLENBQXVCRCxLQUF2QixDQUFmO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJUixpQkFBaUIsSUFBckIsRUFBMkI7QUFDekJELHNCQUFjVyxTQUFkLENBQXdCVCxVQUF4QjtBQUNEOztBQUVELGFBQU9ELFlBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTVcscUJBQXFCLEtBQUtiLFlBQUwsR0FDRUgsYUFERixHQUVJLEVBRi9CO0FBQUEsVUFHTWlCLFNBQVlELGtCQUFaLFNBQWtDLEtBQUtkLE9BQXZDLE1BSE47O0FBS0EsYUFBT2UsTUFBUDtBQUNEOzs7O0VBN0M4QnJCLFk7O0FBZ0RqQ3NCLE9BQU9DLE9BQVAsR0FBaUJsQixrQkFBakIiLCJmaWxlIjoidGVybWluYWxTeW1ib2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBUZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L3Rlcm1pbmFsJyksXG4gICAgICBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21tb24vbm9kZS90ZXJtaW5hbCcpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgTk9fV0hJVEVTUEFDRSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIFRlcm1pbmFsU3ltYm9sUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIG5vV2hpdGVzcGFjZSkge1xuICAgIHN1cGVyKG5vV2hpdGVzcGFjZSk7XG4gICAgXG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIGdldE5vV2hpdGVzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub1doaXRlc3BhY2U7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICBsZXQgdGVybWluYWxOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29uZmlndXJhdGlvbi5nZXRTYXZlZEluZGV4KCksXG5cdFx0XHRcdFx0bmV4dFNpZ25pZmljYW50VG9rZW4gPSBjb25maWd1cmF0aW9uLmdldE5leHRTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSksXG5cdFx0XHRcdFx0c2lnbmlmaWNhbnRUb2tlbiA9IG5leHRTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBwYXJzZWQgPSAoY29udGVudCA9PT0gdGhpcy5jb250ZW50KTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgXHRjb25zdCB0b2tlbiA9IHNpZ25pZmljYW50VG9rZW47XHQvLy9cblxuICAgICAgICB0ZXJtaW5hbE5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVRva2VuKHRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybWluYWxOb2RlID09PSBudWxsKSB7XG4gICAgICBjb25maWd1cmF0aW9uLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG4gIFxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VTdHJpbmcgPSB0aGlzLm5vV2hpdGVzcGFjZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOT19XSElURVNQQUNFIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgc3RyaW5nID0gYCR7bm9XaGl0ZXNwYWNlU3RyaW5nfVwiJHt0aGlzLmNvbnRlbnR9XCJgO1xuICAgIFxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbFN5bWJvbFBhcnQ7XG4iXX0=