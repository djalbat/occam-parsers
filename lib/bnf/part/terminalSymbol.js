'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../../common/node/terminal');

var TerminalSymbolPart = function () {
  function TerminalSymbolPart(content, noWhitespace) {
    _classCallCheck(this, TerminalSymbolPart);

    this.content = content;
    this.noWhitespace = noWhitespace;
  }

  _createClass(TerminalSymbolPart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var terminalNode = null;

      var savedIndex = context.savedIndex(),
          nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

      if (significantToken !== null) {
        var content = significantToken.getContent(),
            parsed = content === this.content;

        if (parsed) {
          terminalNode = TerminalNode.fromSignificantToken(significantToken);
        }
      }

      if (terminalNode === null) {
        context.backtrack(savedIndex);
      }

      return terminalNode;
    }
  }]);

  return TerminalSymbolPart;
}();

module.exports = TerminalSymbolPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC90ZXJtaW5hbFN5bWJvbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiY29udGVudCIsIm5vV2hpdGVzcGFjZSIsImNvbnRleHQiLCJ0ZXJtaW5hbE5vZGUiLCJzYXZlZEluZGV4IiwibmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldENvbnRlbnQiLCJwYXJzZWQiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsImJhY2t0cmFjayIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLDRCQUFSLENBQXJCOztJQUVNQyxrQjtBQUNKLDhCQUFZQyxPQUFaLEVBQXFCQyxZQUFyQixFQUFtQztBQUFBOztBQUNqQyxTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7OzBCQUVLQyxPLEVBQVNELFksRUFBYztBQUMzQkEscUJBQWVBLGdCQUFnQixLQUFLQSxZQUFwQyxDQUQyQixDQUN1Qjs7QUFFbEQsVUFBSUUsZUFBZSxJQUFuQjs7QUFFQSxVQUFNQyxhQUFhRixRQUFRRSxVQUFSLEVBQW5CO0FBQUEsVUFDRUMsb0NBQW9DSCxRQUFRSSxvQ0FBUixDQUE2Q0wsWUFBN0MsQ0FEdEM7QUFBQSxVQUVFTSxtQkFBbUJGLGlDQUZyQixDQUwyQixDQU82Qjs7QUFFeEQsVUFBSUUscUJBQXFCLElBQXpCLEVBQStCO0FBQzdCLFlBQU1QLFVBQVVPLGlCQUFpQkMsVUFBakIsRUFBaEI7QUFBQSxZQUNNQyxTQUFVVCxZQUFZLEtBQUtBLE9BRGpDOztBQUdBLFlBQUlTLE1BQUosRUFBWTtBQUNWTix5QkFBZU4sYUFBYWEsb0JBQWIsQ0FBa0NILGdCQUFsQyxDQUFmO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJSixpQkFBaUIsSUFBckIsRUFBMkI7QUFDekJELGdCQUFRUyxTQUFSLENBQWtCUCxVQUFsQjtBQUNEOztBQUVELGFBQU9ELFlBQVA7QUFDRDs7Ozs7O0FBR0hTLE9BQU9DLE9BQVAsR0FBaUJkLGtCQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbFN5bWJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwnKTtcblxuY2xhc3MgVGVybWluYWxTeW1ib2xQYXJ0IHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICBsZXQgdGVybWluYWxOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSksXG4gICAgICBzaWduaWZpY2FudFRva2VuID0gbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBwYXJzZWQgPSAoY29udGVudCA9PT0gdGhpcy5jb250ZW50KTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICB0ZXJtaW5hbE5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1pbmFsTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsU3ltYm9sUGFydDtcbiJdfQ==