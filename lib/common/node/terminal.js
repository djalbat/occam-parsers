'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNodeParseTree = require('../parseTree/terminalNode');

var TerminalNode = function () {
  function TerminalNode(significantToken, line) {
    _classCallCheck(this, TerminalNode);

    this.significantToken = significantToken;
    this.line = line;
  }

  _createClass(TerminalNode, [{
    key: 'getSignificantToken',
    value: function getSignificantToken() {
      return this.significantToken;
    }
  }, {
    key: 'getLine',
    value: function getLine() {
      return this.line;
    }
  }, {
    key: 'getFirstSignificantToken',
    value: function getFirstSignificantToken() {
      var firstSignificantToken = this.significantToken; ///

      return firstSignificantToken;
    }
  }, {
    key: 'getLastSignificantToken',
    value: function getLastSignificantToken() {
      var lastSignificantToken = this.significantToken; ///

      return lastSignificantToken;
    }
  }, {
    key: 'getFirstLine',
    value: function getFirstLine() {
      var firstLine = this.line; ///

      return firstLine;
    }
  }, {
    key: 'getLastLine',
    value: function getLastLine() {
      var lastLine = this.line; ///

      return lastLine;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return this.significantToken.getContent();
    }
  }, {
    key: 'generateParseTree',
    value: function generateParseTree(lines) {
      var terminalNode = this,
          ///
      terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNode(terminalNode, lines),
          parseTree = terminalNodeParseTree; ///

      return parseTree;
    }
  }], [{
    key: 'fromSignificantToken',
    value: function fromSignificantToken(significantToken) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TerminalNode;

      var line = significantToken.getLine(),
          terminalNode = new Class(significantToken, line),
          error = false;

      significantToken.setError(error);

      return terminalNode;
    }
  }]);

  return TerminalNode;
}();

module.exports = TerminalNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImxpbmUiLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0TGluZSIsImxhc3RMaW5lIiwiZ2V0Q29udGVudCIsImxpbmVzIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbVRlcm1pbmFsTm9kZSIsInBhcnNlVHJlZSIsIkNsYXNzIiwiZ2V0TGluZSIsImVycm9yIiwic2V0RXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsd0JBQXdCQyxRQUFRLDJCQUFSLENBQTlCOztJQUVNQyxZO0FBQ0osd0JBQVlDLGdCQUFaLEVBQThCQyxJQUE5QixFQUFvQztBQUFBOztBQUNsQyxTQUFLRCxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7MENBRXFCO0FBQ3BCLGFBQU8sS0FBS0QsZ0JBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7OzsrQ0FFMEI7QUFDekIsVUFBTUMsd0JBQXdCLEtBQUtGLGdCQUFuQyxDQUR5QixDQUM2Qjs7QUFFdEQsYUFBT0UscUJBQVA7QUFDRDs7OzhDQUV5QjtBQUN4QixVQUFNQyx1QkFBdUIsS0FBS0gsZ0JBQWxDLENBRHdCLENBQzZCOztBQUVyRCxhQUFPRyxvQkFBUDtBQUNEOzs7bUNBRWM7QUFDYixVQUFNQyxZQUFZLEtBQUtILElBQXZCLENBRGEsQ0FDZ0I7O0FBRTdCLGFBQU9HLFNBQVA7QUFDRDs7O2tDQUVhO0FBQ1osVUFBTUMsV0FBVyxLQUFLSixJQUF0QixDQURZLENBQ2lCOztBQUU3QixhQUFPSSxRQUFQO0FBQ0Q7OztpQ0FFWTtBQUFFLGFBQU8sS0FBS0wsZ0JBQUwsQ0FBc0JNLFVBQXRCLEVBQVA7QUFBNEM7OztzQ0FFekNDLEssRUFBTztBQUN2QixVQUFNQyxlQUFlLElBQXJCO0FBQUEsVUFBNEI7QUFDdEJDLDhCQUF3Qlosc0JBQXNCYSxnQkFBdEIsQ0FBdUNGLFlBQXZDLEVBQXFERCxLQUFyRCxDQUQ5QjtBQUFBLFVBRU1JLFlBQVlGLHFCQUZsQixDQUR1QixDQUdtQjs7QUFFMUMsYUFBT0UsU0FBUDtBQUNEOzs7eUNBRTJCWCxnQixFQUF3QztBQUFBLFVBQXRCWSxLQUFzQix1RUFBZGIsWUFBYzs7QUFDbEUsVUFBTUUsT0FBT0QsaUJBQWlCYSxPQUFqQixFQUFiO0FBQUEsVUFDTUwsZUFBZSxJQUFJSSxLQUFKLENBQVVaLGdCQUFWLEVBQTRCQyxJQUE1QixDQURyQjtBQUFBLFVBRU1hLFFBQVEsS0FGZDs7QUFJQWQsdUJBQWlCZSxRQUFqQixDQUEwQkQsS0FBMUI7O0FBRUEsYUFBT04sWUFBUDtBQUNEOzs7Ozs7QUFHSFEsT0FBT0MsT0FBUCxHQUFpQmxCLFlBQWpCIiwiZmlsZSI6InRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUvdGVybWluYWxOb2RlJyk7XG5cbmNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW4sIGxpbmUpIHtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gIH1cblxuICBnZXRTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmU7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgY29uc3QgZmlyc3RTaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuOyAgLy8vXG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgY29uc3QgbGFzdFNpZ25pZmljYW50VG9rZW4gPSB0aGlzLnNpZ25pZmljYW50VG9rZW47ICAvLy9cblxuICAgIHJldHVybiBsYXN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldEZpcnN0TGluZSgpIHtcbiAgICBjb25zdCBmaXJzdExpbmUgPSB0aGlzLmxpbmU7IC8vL1xuXG4gICAgcmV0dXJuIGZpcnN0TGluZTtcbiAgfVxuXG4gIGdldExhc3RMaW5lKCkge1xuICAgIGNvbnN0IGxhc3RMaW5lID0gdGhpcy5saW5lOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdExpbmU7XG4gIH1cblxuICBnZXRDb250ZW50KCkgeyByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKTsgfVxuICBcbiAgZ2VuZXJhdGVQYXJzZVRyZWUobGluZXMpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21UZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCBsaW5lcyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4sIENsYXNzID0gVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgbGluZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0TGluZSgpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhzaWduaWZpY2FudFRva2VuLCBsaW5lKSxcbiAgICAgICAgICBlcnJvciA9IGZhbHNlO1xuICAgIFxuICAgIHNpZ25pZmljYW50VG9rZW4uc2V0RXJyb3IoZXJyb3IpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsTm9kZTtcbiJdfQ==