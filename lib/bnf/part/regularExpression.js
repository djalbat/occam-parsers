'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    necessary = require('necessary');

var TerminalNode = require('../../common/node/terminal');

var array = necessary.array,
    BNFLexer = lexers.BNFLexer,
    first = array.first,
    specialSymbols = BNFLexer.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var RegularExpressionPart = function () {
  function RegularExpressionPart(regularExpression) {
    var noWhitespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, RegularExpressionPart);

    this.regularExpression = regularExpression;
    this.noWhitespace = noWhitespace;
  }

  _createClass(RegularExpressionPart, [{
    key: 'getNoWhitespace',
    value: function getNoWhitespace() {
      return this.noWhitespace;
    }
  }, {
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var terminalNode = null;

      var savedIndex = configuration.savedIndex(),
          nextNonWhitespaceSignificantToken = configuration.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

      if (significantToken !== null) {
        var content = significantToken.getContent(),
            matches = content.match(this.regularExpression);

        if (matches !== null) {
          var firstMatch = first(matches),
              parsed = firstMatch === content;

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
    key: 'toString',
    value: function toString() {
      var regularExpressionString = this.regularExpression.toString(),
          noWhitespaceString = this.noWhitespace ? NO_WHITESPACE : '',
          string = '' + noWhitespaceString + regularExpressionString;

      return string;
    }
  }]);

  return RegularExpressionPart;
}();

module.exports = RegularExpressionPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwibmVjZXNzYXJ5IiwiVGVybWluYWxOb2RlIiwiYXJyYXkiLCJCTkZMZXhlciIsImZpcnN0Iiwic3BlY2lhbFN5bWJvbHMiLCJOT19XSElURVNQQUNFIiwiUmVndWxhckV4cHJlc3Npb25QYXJ0IiwicmVndWxhckV4cHJlc3Npb24iLCJub1doaXRlc3BhY2UiLCJjb25maWd1cmF0aW9uIiwidGVybWluYWxOb2RlIiwic2F2ZWRJbmRleCIsIm5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJwYXJzZWQiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsImJhY2t0cmFjayIsInJlZ3VsYXJFeHByZXNzaW9uU3RyaW5nIiwidG9TdHJpbmciLCJub1doaXRlc3BhY2VTdHJpbmciLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLFdBQVIsQ0FEbEI7O0FBR0EsSUFBTUUsZUFBZUYsUUFBUSw0QkFBUixDQUFyQjs7QUFFTSxJQUFFRyxLQUFGLEdBQVlGLFNBQVosQ0FBRUUsS0FBRjtBQUFBLElBQ0VDLFFBREYsR0FDZUwsTUFEZixDQUNFSyxRQURGO0FBQUEsSUFFRUMsS0FGRixHQUVZRixLQUZaLENBRUVFLEtBRkY7QUFBQSxJQUdFQyxjQUhGLEdBR3FCRixRQUhyQixDQUdFRSxjQUhGO0FBQUEsSUFJRUMsYUFKRixHQUlvQkQsY0FKcEIsQ0FJRUMsYUFKRjs7SUFNQUMscUI7QUFDSixpQ0FBWUMsaUJBQVosRUFBcUQ7QUFBQSxRQUF0QkMsWUFBc0IsdUVBQVAsS0FBTzs7QUFBQTs7QUFDbkQsU0FBS0QsaUJBQUwsR0FBeUJBLGlCQUF6QjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7c0NBRWlCO0FBQ2hCLGFBQU8sS0FBS0EsWUFBWjtBQUNEOzs7MEJBRUtDLGEsRUFBZUQsWSxFQUFjO0FBQ2pDQSxxQkFBZUEsZ0JBQWdCLEtBQUtBLFlBQXBDLENBRGlDLENBQ2lCOztBQUVsRCxVQUFJRSxlQUFlLElBQW5COztBQUVBLFVBQU1DLGFBQWFGLGNBQWNFLFVBQWQsRUFBbkI7QUFBQSxVQUNNQyxvQ0FBb0NILGNBQWNJLG9DQUFkLENBQW1ETCxZQUFuRCxDQUQxQztBQUFBLFVBRU1NLG1CQUFtQkYsaUNBRnpCLENBTGlDLENBTzJCOztBQUU1RCxVQUFJRSxxQkFBcUIsSUFBekIsRUFBK0I7QUFDN0IsWUFBTUMsVUFBVUQsaUJBQWlCRSxVQUFqQixFQUFoQjtBQUFBLFlBQ01DLFVBQVVGLFFBQVFHLEtBQVIsQ0FBYyxLQUFLWCxpQkFBbkIsQ0FEaEI7O0FBR0EsWUFBSVUsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixjQUFNRSxhQUFhaEIsTUFBTWMsT0FBTixDQUFuQjtBQUFBLGNBQ01HLFNBQVVELGVBQWVKLE9BRC9COztBQUdBLGNBQUlLLE1BQUosRUFBWTtBQUNWViwyQkFBZVYsYUFBYXFCLG9CQUFiLENBQWtDUCxnQkFBbEMsQ0FBZjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxVQUFJSixpQkFBaUIsSUFBckIsRUFBMkI7QUFDekJELHNCQUFjYSxTQUFkLENBQXdCWCxVQUF4QjtBQUNEOztBQUVELGFBQU9ELFlBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTWEsMEJBQTBCLEtBQUtoQixpQkFBTCxDQUF1QmlCLFFBQXZCLEVBQWhDO0FBQUEsVUFDTUMscUJBQXFCLEtBQUtqQixZQUFMLEdBQ0VILGFBREYsR0FFSSxFQUgvQjtBQUFBLFVBSU1xQixjQUFZRCxrQkFBWixHQUFpQ0YsdUJBSnZDOztBQU1BLGFBQU9HLE1BQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJ0QixxQkFBakIiLCJmaWxlIjoicmVndWxhckV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNvbnN0IHsgYXJyYXkgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5LFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IE5PX1dISVRFU1BBQ0UgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvblBhcnQge1xuICBjb25zdHJ1Y3RvcihyZWd1bGFyRXhwcmVzc2lvbiwgbm9XaGl0ZXNwYWNlID0gZmFsc2UpIHtcbiAgICB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uID0gcmVndWxhckV4cHJlc3Npb247XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBnZXROb1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cblxuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb25maWd1cmF0aW9uLnNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBjb25maWd1cmF0aW9uLmdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbihub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHRoaXMucmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgICAgICAgIHBhcnNlZCA9IChmaXJzdE1hdGNoID09PSBjb250ZW50KTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1pbmFsTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uZmlndXJhdGlvbi5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uU3RyaW5nID0gdGhpcy5yZWd1bGFyRXhwcmVzc2lvbi50b1N0cmluZygpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVN0cmluZyA9IHRoaXMubm9XaGl0ZXNwYWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5PX1dISVRFU1BBQ0UgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtub1doaXRlc3BhY2VTdHJpbmd9JHtyZWd1bGFyRXhwcmVzc2lvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZ3VsYXJFeHByZXNzaW9uUGFydDtcbiJdfQ==