'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var TerminalNode = require('../../common/node/terminal');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer,
    specialSymbols = ExtendedBNFLexer.specialSymbols,
    wildcard = specialSymbols.wildcard;

var WildcardPart = function () {
  function WildcardPart(noWhitespace) {
    _classCallCheck(this, WildcardPart);

    this.noWhitespace = noWhitespace;
  }

  _createClass(WildcardPart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var terminalNode = null;

      var savedIndex = context.savedIndex(),
          nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

      if (significantToken !== null) {
        terminalNode = TerminalNode.fromSignificantToken(significantToken);
      }

      if (terminalNode === null) {
        context.backtrack(savedIndex);
      }

      return terminalNode;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var string = wildcard;

      return string;
    }
  }]);

  return WildcardPart;
}();

module.exports = WildcardPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9wYXJ0L3dpbGRjYXJkLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJUZXJtaW5hbE5vZGUiLCJFeHRlbmRlZEJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJ3aWxkY2FyZCIsIldpbGRjYXJkUGFydCIsIm5vV2hpdGVzcGFjZSIsImNvbnRleHQiLCJ0ZXJtaW5hbE5vZGUiLCJzYXZlZEluZGV4IiwibmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsImZyb21TaWduaWZpY2FudFRva2VuIiwiYmFja3RyYWNrIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLGVBQWVELFFBQVEsNEJBQVIsQ0FBckI7O0FBRU0sSUFBRUUsZ0JBQUYsR0FBdUJILE1BQXZCLENBQUVHLGdCQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkQsZ0JBRHJCLENBQ0VDLGNBREY7QUFBQSxJQUVFQyxRQUZGLEdBRWVELGNBRmYsQ0FFRUMsUUFGRjs7SUFJQUMsWTtBQUNKLHdCQUFZQyxZQUFaLEVBQTBCO0FBQUE7O0FBQ3hCLFNBQUtBLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0QsWSxFQUFjO0FBQzNCQSxxQkFBZUEsZ0JBQWdCLEtBQUtBLFlBQXBDLENBRDJCLENBQ3VCOztBQUVsRCxVQUFJRSxlQUFlLElBQW5COztBQUVBLFVBQU1DLGFBQWFGLFFBQVFFLFVBQVIsRUFBbkI7QUFBQSxVQUNNQyxvQ0FBb0NILFFBQVFJLG9DQUFSLENBQTZDTCxZQUE3QyxDQUQxQztBQUFBLFVBRU1NLG1CQUFtQkYsaUNBRnpCLENBTDJCLENBT2lDOztBQUU1RCxVQUFJRSxxQkFBcUIsSUFBekIsRUFBK0I7QUFDN0JKLHVCQUFlUCxhQUFhWSxvQkFBYixDQUFrQ0QsZ0JBQWxDLENBQWY7QUFDRDs7QUFFRCxVQUFJSixpQkFBaUIsSUFBckIsRUFBMkI7QUFDekJELGdCQUFRTyxTQUFSLENBQWtCTCxVQUFsQjtBQUNEOztBQUVELGFBQU9ELFlBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTU8sU0FBU1gsUUFBZjs7QUFFQSxhQUFPVyxNQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCWixZQUFqQiIsImZpbGUiOiJ3aWxkY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNvbnN0IHsgRXh0ZW5kZWRCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gRXh0ZW5kZWRCTkZMZXhlcixcbiAgICAgIHsgd2lsZGNhcmQgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBXaWxkY2FyZFBhcnQge1xuICBjb25zdHJ1Y3Rvcihub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cblxuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBjb250ZXh0LmdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbihub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRlcm1pbmFsTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHdpbGRjYXJkO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdpbGRjYXJkUGFydDtcbiJdfQ==