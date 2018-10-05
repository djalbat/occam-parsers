'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var TerminalPart = require('../../part/terminal'),
    TerminalNode = require('../../../common/node/terminal'),
    arrayUtilities = require('../../../utilities/array');

var BNFLexer = lexers.BNFLexer,
    first = arrayUtilities.first,
    specialSymbols = BNFLexer.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var RegularExpressionPart = function (_TerminalPart) {
  _inherits(RegularExpressionPart, _TerminalPart);

  function RegularExpressionPart(regularExpression, noWhitespace) {
    _classCallCheck(this, RegularExpressionPart);

    var _this = _possibleConstructorReturn(this, (RegularExpressionPart.__proto__ || Object.getPrototypeOf(RegularExpressionPart)).call(this, noWhitespace));

    _this.regularExpression = regularExpression;
    return _this;
  }

  _createClass(RegularExpressionPart, [{
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var terminalNode = null;

      var savedIndex = configuration.getSavedIndex(),
          nextSignificantToken = configuration.getNextSignificantToken(noWhitespace),
          significantToken = nextSignificantToken; ///

      if (significantToken !== null) {
        var content = significantToken.getContent(),
            matches = content.match(this.regularExpression);

        if (matches !== null) {
          var firstMatch = first(matches),
              parsed = firstMatch === content;

          if (parsed) {
            var token = significantToken; ///

            terminalNode = TerminalNode.fromToken(token);
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
      var regularExpressionString = this.regularExpression.asString(),
          noWhitespaceString = this.noWhitespace ? NO_WHITESPACE : '',
          string = '' + noWhitespaceString + regularExpressionString;

      return string;
    }
  }]);

  return RegularExpressionPart;
}(TerminalPart);

module.exports = RegularExpressionPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC90ZXJtaW5hbC9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiVGVybWluYWxQYXJ0IiwiVGVybWluYWxOb2RlIiwiYXJyYXlVdGlsaXRpZXMiLCJCTkZMZXhlciIsImZpcnN0Iiwic3BlY2lhbFN5bWJvbHMiLCJOT19XSElURVNQQUNFIiwiUmVndWxhckV4cHJlc3Npb25QYXJ0IiwicmVndWxhckV4cHJlc3Npb24iLCJub1doaXRlc3BhY2UiLCJjb25maWd1cmF0aW9uIiwidGVybWluYWxOb2RlIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsInBhcnNlZCIsInRva2VuIiwiZnJvbVRva2VuIiwiYmFja3RyYWNrIiwicmVndWxhckV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyIsIm5vV2hpdGVzcGFjZVN0cmluZyIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsZUFBZUQsUUFBUSxxQkFBUixDQUFyQjtBQUFBLElBQ01FLGVBQWVGLFFBQVEsK0JBQVIsQ0FEckI7QUFBQSxJQUVNRyxpQkFBaUJILFFBQVEsMEJBQVIsQ0FGdkI7O0FBSU0sSUFBRUksUUFBRixHQUFlTCxNQUFmLENBQUVLLFFBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lGLGNBRFosQ0FDRUUsS0FERjtBQUFBLElBRUVDLGNBRkYsR0FFcUJGLFFBRnJCLENBRUVFLGNBRkY7QUFBQSxJQUdFQyxhQUhGLEdBR29CRCxjQUhwQixDQUdFQyxhQUhGOztJQUtBQyxxQjs7O0FBQ0osaUNBQVlDLGlCQUFaLEVBQStCQyxZQUEvQixFQUE2QztBQUFBOztBQUFBLDhJQUNyQ0EsWUFEcUM7O0FBRzNDLFVBQUtELGlCQUFMLEdBQXlCQSxpQkFBekI7QUFIMkM7QUFJNUM7Ozs7MEJBRUtFLGEsRUFBZUQsWSxFQUFjO0FBQ2pDQSxxQkFBZUEsZ0JBQWdCLEtBQUtBLFlBQXBDLENBRGlDLENBQ2lCOztBQUVsRCxVQUFJRSxlQUFlLElBQW5COztBQUVBLFVBQU1DLGFBQWFGLGNBQWNHLGFBQWQsRUFBbkI7QUFBQSxVQUNDQyx1QkFBdUJKLGNBQWNLLHVCQUFkLENBQXNDTixZQUF0QyxDQUR4QjtBQUFBLFVBRUNPLG1CQUFtQkYsb0JBRnBCLENBTGlDLENBT1M7O0FBRTFDLFVBQUlFLHFCQUFxQixJQUF6QixFQUErQjtBQUM3QixZQUFNQyxVQUFVRCxpQkFBaUJFLFVBQWpCLEVBQWhCO0FBQUEsWUFDTUMsVUFBVUYsUUFBUUcsS0FBUixDQUFjLEtBQUtaLGlCQUFuQixDQURoQjs7QUFHQSxZQUFJVyxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLGNBQU1FLGFBQWFqQixNQUFNZSxPQUFOLENBQW5CO0FBQUEsY0FDTUcsU0FBVUQsZUFBZUosT0FEL0I7O0FBR0EsY0FBSUssTUFBSixFQUFZO0FBQ1gsZ0JBQU1DLFFBQVFQLGdCQUFkLENBRFcsQ0FDcUI7O0FBRS9CTCwyQkFBZVYsYUFBYXVCLFNBQWIsQ0FBdUJELEtBQXZCLENBQWY7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsVUFBSVosaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCRCxzQkFBY2UsU0FBZCxDQUF3QmIsVUFBeEI7QUFDRDs7QUFFRCxhQUFPRCxZQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1lLDBCQUEwQixLQUFLbEIsaUJBQUwsQ0FBdUJtQixRQUF2QixFQUFoQztBQUFBLFVBQ01DLHFCQUFxQixLQUFLbkIsWUFBTCxHQUNFSCxhQURGLEdBRUksRUFIL0I7QUFBQSxVQUlNdUIsY0FBWUQsa0JBQVosR0FBaUNGLHVCQUp2Qzs7QUFNQSxhQUFPRyxNQUFQO0FBQ0Q7Ozs7RUEvQ2lDN0IsWTs7QUFrRHBDOEIsT0FBT0MsT0FBUCxHQUFpQnhCLHFCQUFqQiIsImZpbGUiOiJyZWd1bGFyRXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFRlcm1pbmFsUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvdGVybWluYWwnKSxcbiAgICAgIFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyBOT19XSElURVNQQUNFIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25QYXJ0IGV4dGVuZHMgVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocmVndWxhckV4cHJlc3Npb24sIG5vV2hpdGVzcGFjZSkge1xuICAgIHN1cGVyKG5vV2hpdGVzcGFjZSk7XG4gICAgXG4gICAgdGhpcy5yZWd1bGFyRXhwcmVzc2lvbiA9IHJlZ3VsYXJFeHByZXNzaW9uO1xuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cblxuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb25maWd1cmF0aW9uLmdldFNhdmVkSW5kZXgoKSxcblx0XHRcdFx0XHRuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IGNvbmZpZ3VyYXRpb24uZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSxcblx0XHRcdFx0XHRzaWduaWZpY2FudFRva2VuID0gbmV4dFNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHRoaXMucmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgICAgICAgIHBhcnNlZCA9IChmaXJzdE1hdGNoID09PSBjb250ZW50KTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIFx0Y29uc3QgdG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1x0Ly8vXG5cbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVRva2VuKHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtaW5hbE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbmZpZ3VyYXRpb24uYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvblN0cmluZyA9IHRoaXMucmVndWxhckV4cHJlc3Npb24uYXNTdHJpbmcoKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VTdHJpbmcgPSB0aGlzLm5vV2hpdGVzcGFjZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOT19XSElURVNQQUNFIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgc3RyaW5nID0gYCR7bm9XaGl0ZXNwYWNlU3RyaW5nfSR7cmVndWxhckV4cHJlc3Npb25TdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG4iXX0=