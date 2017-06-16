'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../../util/array'),
    TerminalNode = require('../../common/node/terminal');

var RegularExpressionPart = function () {
  function RegularExpressionPart(regExp) {
    var noWhitespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, RegularExpressionPart);

    this.regExp = regExp;
    this.noWhitespace = noWhitespace;
  }

  _createClass(RegularExpressionPart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var terminalNode = null;

      var savedIndex = context.savedIndex(),
          nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

      if (significantToken !== null) {
        var content = significantToken.getContent(),
            matches = content.match(this.regExp);

        if (matches !== null) {
          var firstMatch = arrayUtil.first(matches),
              parsed = firstMatch === content;

          if (parsed) {
            terminalNode = TerminalNode.fromSignificantToken(significantToken);
          }
        }
      }

      if (terminalNode === null) {
        context.backtrack(savedIndex);
      }

      return terminalNode;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var regExpString = this.regExp.toString(),
          noWhitespaceString = this.noWhitespace ? '<NO_WHITESPACE>' : '',
          string = '' + noWhitespaceString + regExpString;

      return string;
    }
  }]);

  return RegularExpressionPart;
}();

module.exports = RegularExpressionPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwiUmVndWxhckV4cHJlc3Npb25QYXJ0IiwicmVnRXhwIiwibm9XaGl0ZXNwYWNlIiwiY29udGV4dCIsInRlcm1pbmFsTm9kZSIsInNhdmVkSW5kZXgiLCJuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4iLCJnZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsImdldENvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiZmlyc3QiLCJwYXJzZWQiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsImJhY2t0cmFjayIsInJlZ0V4cFN0cmluZyIsInRvU3RyaW5nIiwibm9XaGl0ZXNwYWNlU3RyaW5nIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsa0JBQVIsQ0FBbEI7QUFBQSxJQUNNQyxlQUFlRCxRQUFRLDRCQUFSLENBRHJCOztJQUdNRSxxQjtBQUNKLGlDQUFZQyxNQUFaLEVBQTBDO0FBQUEsUUFBdEJDLFlBQXNCLHVFQUFQLEtBQU87O0FBQUE7O0FBQ3hDLFNBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0QsWSxFQUFjO0FBQzNCQSxxQkFBZUEsZ0JBQWdCLEtBQUtBLFlBQXBDLENBRDJCLENBQ3VCOztBQUVsRCxVQUFJRSxlQUFlLElBQW5COztBQUVBLFVBQU1DLGFBQWFGLFFBQVFFLFVBQVIsRUFBbkI7QUFBQSxVQUNNQyxvQ0FBb0NILFFBQVFJLG9DQUFSLENBQTZDTCxZQUE3QyxDQUQxQztBQUFBLFVBRU1NLG1CQUFtQkYsaUNBRnpCLENBTDJCLENBT2lDOztBQUU1RCxVQUFJRSxxQkFBcUIsSUFBekIsRUFBK0I7QUFDN0IsWUFBTUMsVUFBVUQsaUJBQWlCRSxVQUFqQixFQUFoQjtBQUFBLFlBQ01DLFVBQVVGLFFBQVFHLEtBQVIsQ0FBYyxLQUFLWCxNQUFuQixDQURoQjs7QUFHQSxZQUFJVSxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLGNBQU1FLGFBQWFoQixVQUFVaUIsS0FBVixDQUFnQkgsT0FBaEIsQ0FBbkI7QUFBQSxjQUNNSSxTQUFVRixlQUFlSixPQUQvQjs7QUFHQSxjQUFJTSxNQUFKLEVBQVk7QUFDVlgsMkJBQWVMLGFBQWFpQixvQkFBYixDQUFrQ1IsZ0JBQWxDLENBQWY7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsVUFBSUosaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCRCxnQkFBUWMsU0FBUixDQUFrQlosVUFBbEI7QUFDRDs7QUFFRCxhQUFPRCxZQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1jLGVBQWUsS0FBS2pCLE1BQUwsQ0FBWWtCLFFBQVosRUFBckI7QUFBQSxVQUNNQyxxQkFBcUIsS0FBS2xCLFlBQUwsR0FDQyxpQkFERCxHQUVHLEVBSDlCO0FBQUEsVUFJTW1CLGNBQVlELGtCQUFaLEdBQWlDRixZQUp2Qzs7QUFNQSxhQUFPRyxNQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCdkIscUJBQWpCIiwiZmlsZSI6InJlZ3VsYXJFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL2FycmF5JyksXG4gICAgICBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS90ZXJtaW5hbCcpO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvblBhcnQge1xuICBjb25zdHJ1Y3RvcihyZWdFeHAsIG5vV2hpdGVzcGFjZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5yZWdFeHAgPSByZWdFeHA7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgbGV0IHRlcm1pbmFsTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWdFeHApO1xuXG4gICAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmaXJzdE1hdGNoID0gYXJyYXlVdGlsLmZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgICAgICBwYXJzZWQgPSAoZmlyc3RNYXRjaCA9PT0gY29udGVudCk7XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtaW5hbE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCByZWdFeHBTdHJpbmcgPSB0aGlzLnJlZ0V4cC50b1N0cmluZygpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVN0cmluZyA9IHRoaXMubm9XaGl0ZXNwYWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxOT19XSElURVNQQUNFPicgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgIHN0cmluZyA9IGAke25vV2hpdGVzcGFjZVN0cmluZ30ke3JlZ0V4cFN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZ3VsYXJFeHByZXNzaW9uUGFydDtcbiJdfQ==