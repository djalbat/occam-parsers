'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var TerminalPart = require('../../part/terminal'),
    TerminalNode = require('../../../common/node/terminal'),
    arrayUtilities = require('../../../utilities/array');

var first = arrayUtilities.first,
    specialSymbols = lexers.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var RegularExpressionPart = function (_TerminalPart) {
  _inherits(RegularExpressionPart, _TerminalPart);

  function RegularExpressionPart(regularExpression, nonWhitespace) {
    _classCallCheck(this, RegularExpressionPart);

    var _this = _possibleConstructorReturn(this, (RegularExpressionPart.__proto__ || Object.getPrototypeOf(RegularExpressionPart)).call(this, nonWhitespace));

    _this.regularExpression = regularExpression;
    return _this;
  }

  _createClass(RegularExpressionPart, [{
    key: 'parse',
    value: function parse(configuration) {
      var terminalNode = null;

      var savedIndex = configuration.getSavedIndex(),
          nonWhitespace = this.hasNonWhitespace(),
          nextSignificantToken = configuration.getNextSignificantToken(nonWhitespace),
          significantToken = nextSignificantToken; ///

      if (significantToken !== null) {
        var content = significantToken.getContent(),
            matches = content.match(this.regularExpression);

        if (matches !== null) {
          var firstMatch = first(matches),
              parsed = firstMatch === content; ///

          if (parsed) {
            terminalNode = TerminalNode.fromSignificantToken(significantToken);
          }
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
      var regularExpressionString = this.regularExpression.toString(),
          nonWhitespace = this.hasNonWhitespace(),
          nonWhitespaceString = nonWhitespace ? NO_WHITESPACE : '',
          string = '' + nonWhitespaceString + regularExpressionString;

      return string;
    }
  }, {
    key: 'clone',
    value: function clone() {
      return _get(RegularExpressionPart.prototype.__proto__ || Object.getPrototypeOf(RegularExpressionPart.prototype), 'clone', this).call(this, RegularExpressionPart, this.regularExpression);
    }
  }]);

  return RegularExpressionPart;
}(TerminalPart);

module.exports = RegularExpressionPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC90ZXJtaW5hbC9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiVGVybWluYWxQYXJ0IiwiVGVybWluYWxOb2RlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNwZWNpYWxTeW1ib2xzIiwiTk9fV0hJVEVTUEFDRSIsIlJlZ3VsYXJFeHByZXNzaW9uUGFydCIsInJlZ3VsYXJFeHByZXNzaW9uIiwibm9uV2hpdGVzcGFjZSIsImNvbmZpZ3VyYXRpb24iLCJ0ZXJtaW5hbE5vZGUiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsImhhc05vbldoaXRlc3BhY2UiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsInBhcnNlZCIsImZyb21TaWduaWZpY2FudFRva2VuIiwiYmFja3RyYWNrIiwicmVndWxhckV4cHJlc3Npb25TdHJpbmciLCJ0b1N0cmluZyIsIm5vbldoaXRlc3BhY2VTdHJpbmciLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsZUFBZUQsUUFBUSxxQkFBUixDQUFyQjtBQUFBLElBQ01FLGVBQWVGLFFBQVEsK0JBQVIsQ0FEckI7QUFBQSxJQUVNRyxpQkFBaUJILFFBQVEsMEJBQVIsQ0FGdkI7O0FBSU0sSUFBRUksS0FBRixHQUFZRCxjQUFaLENBQUVDLEtBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCTixNQURyQixDQUNFTSxjQURGO0FBQUEsSUFFRUMsYUFGRixHQUVvQkQsY0FGcEIsQ0FFRUMsYUFGRjs7SUFJQUMscUI7OztBQUNKLGlDQUFZQyxpQkFBWixFQUErQkMsYUFBL0IsRUFBOEM7QUFBQTs7QUFBQSw4SUFDdENBLGFBRHNDOztBQUc1QyxVQUFLRCxpQkFBTCxHQUF5QkEsaUJBQXpCO0FBSDRDO0FBSTdDOzs7OzBCQUVLRSxhLEVBQWU7QUFDbkIsVUFBSUMsZUFBZSxJQUFuQjs7QUFFQSxVQUFNQyxhQUFhRixjQUFjRyxhQUFkLEVBQW5CO0FBQUEsVUFDSUosZ0JBQWdCLEtBQUtLLGdCQUFMLEVBRHBCO0FBQUEsVUFFQ0MsdUJBQXVCTCxjQUFjTSx1QkFBZCxDQUFzQ1AsYUFBdEMsQ0FGeEI7QUFBQSxVQUdDUSxtQkFBbUJGLG9CQUhwQixDQUhtQixDQU11Qjs7QUFFMUMsVUFBSUUscUJBQXFCLElBQXpCLEVBQStCO0FBQzdCLFlBQU1DLFVBQVVELGlCQUFpQkUsVUFBakIsRUFBaEI7QUFBQSxZQUNNQyxVQUFVRixRQUFRRyxLQUFSLENBQWMsS0FBS2IsaUJBQW5CLENBRGhCOztBQUdBLFlBQUlZLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsY0FBTUUsYUFBYWxCLE1BQU1nQixPQUFOLENBQW5CO0FBQUEsY0FDTUcsU0FBVUQsZUFBZUosT0FEL0IsQ0FEb0IsQ0FFc0I7O0FBRTFDLGNBQUlLLE1BQUosRUFBWTtBQUNWWiwyQkFBZVQsYUFBYXNCLG9CQUFiLENBQWtDUCxnQkFBbEMsQ0FBZjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxVQUFJTixpQkFBaUIsSUFBckIsRUFBMkI7QUFDekJELHNCQUFjZSxTQUFkLENBQXdCYixVQUF4QjtBQUNEOztBQUVELGFBQU9ELFlBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTWUsMEJBQTBCLEtBQUtsQixpQkFBTCxDQUF1Qm1CLFFBQXZCLEVBQWhDO0FBQUEsVUFDSWxCLGdCQUFnQixLQUFLSyxnQkFBTCxFQURwQjtBQUFBLFVBRU1jLHNCQUFzQm5CLGdCQUNDSCxhQURELEdBRUcsRUFKL0I7QUFBQSxVQUtNdUIsY0FBWUQsbUJBQVosR0FBa0NGLHVCQUx4Qzs7QUFPQSxhQUFPRyxNQUFQO0FBQ0Q7Ozs0QkFFTztBQUFFLGlKQUFtQnRCLHFCQUFuQixFQUEwQyxLQUFLQyxpQkFBL0M7QUFBb0U7Ozs7RUEvQzVDUCxZOztBQWtEcEM2QixPQUFPQyxPQUFQLEdBQWlCeEIscUJBQWpCIiwiZmlsZSI6InJlZ3VsYXJFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgVGVybWluYWxQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC90ZXJtaW5hbCcpLFxuICAgICAgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gbGV4ZXJzLFxuICAgICAgeyBOT19XSElURVNQQUNFIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25QYXJ0IGV4dGVuZHMgVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocmVndWxhckV4cHJlc3Npb24sIG5vbldoaXRlc3BhY2UpIHtcbiAgICBzdXBlcihub25XaGl0ZXNwYWNlKTtcblxuICAgIHRoaXMucmVndWxhckV4cHJlc3Npb24gPSByZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBsZXQgdGVybWluYWxOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29uZmlndXJhdGlvbi5nZXRTYXZlZEluZGV4KCksXG5cdFx0ICAgICAgbm9uV2hpdGVzcGFjZSA9IHRoaXMuaGFzTm9uV2hpdGVzcGFjZSgpLFxuXHRcdFx0XHRcdG5leHRTaWduaWZpY2FudFRva2VuID0gY29uZmlndXJhdGlvbi5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbihub25XaGl0ZXNwYWNlKSxcblx0XHRcdFx0XHRzaWduaWZpY2FudFRva2VuID0gbmV4dFNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHRoaXMucmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgICAgICAgIHBhcnNlZCA9IChmaXJzdE1hdGNoID09PSBjb250ZW50KTsgIC8vL1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybWluYWxOb2RlID09PSBudWxsKSB7XG4gICAgICBjb25maWd1cmF0aW9uLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25TdHJpbmcgPSB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uLnRvU3RyaW5nKCksXG5cdFx0ICAgICAgbm9uV2hpdGVzcGFjZSA9IHRoaXMuaGFzTm9uV2hpdGVzcGFjZSgpLFxuICAgICAgICAgIG5vbldoaXRlc3BhY2VTdHJpbmcgPSBub25XaGl0ZXNwYWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5PX1dISVRFU1BBQ0UgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtub25XaGl0ZXNwYWNlU3RyaW5nfSR7cmVndWxhckV4cHJlc3Npb25TdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFJlZ3VsYXJFeHByZXNzaW9uUGFydCwgdGhpcy5yZWd1bGFyRXhwcmVzc2lvbik7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG4iXX0=