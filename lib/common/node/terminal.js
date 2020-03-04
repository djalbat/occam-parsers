'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TerminalNodeParseTree = require('../parseTree/terminalNode');

var TerminalNode = /*#__PURE__*/function () {
  function TerminalNode(significantToken, parentNode) {
    _classCallCheck(this, TerminalNode);

    this.significantToken = significantToken;
    this.parentNode = parentNode;
  }

  _createClass(TerminalNode, [{
    key: "getSignificantToken",
    value: function getSignificantToken() {
      return this.significantToken;
    }
  }, {
    key: "getParentNode",
    value: function getParentNode() {
      return this.parentNode;
    }
  }, {
    key: "getFirstSignificantToken",
    value: function getFirstSignificantToken() {
      var firstSignificantToken = this.significantToken; ///

      return firstSignificantToken;
    }
  }, {
    key: "getLastSignificantToken",
    value: function getLastSignificantToken() {
      var lastSignificantToken = this.significantToken; ///

      return lastSignificantToken;
    }
  }, {
    key: "isEpsilonNode",
    value: function isEpsilonNode() {
      var epsilonNode = false;
      return epsilonNode;
    }
  }, {
    key: "isTerminalNode",
    value: function isTerminalNode() {
      var terminalNode = true;
      return terminalNode;
    }
  }, {
    key: "isNonTerminalNode",
    value: function isNonTerminalNode() {
      var nonTerminalNode = false;
      return nonTerminalNode;
    }
  }, {
    key: "getType",
    value: function getType() {
      return this.significantToken.getType();
    }
  }, {
    key: "getContent",
    value: function getContent() {
      return this.significantToken.getContent();
    }
  }, {
    key: "setSignificantToken",
    value: function setSignificantToken(significantToken) {
      this.significantToken = significantToken;
    }
  }, {
    key: "setParentNode",
    value: function setParentNode(parentNode) {
      this.parentNode = parentNode;
    }
  }, {
    key: "asParseTree",
    value: function asParseTree(tokens) {
      var terminalNode = this,
          ///
      terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNodeAndTokens(terminalNode, tokens),
          parseTree = terminalNodeParseTree; ///

      return parseTree;
    }
  }], [{
    key: "fromSignificantToken",
    value: function fromSignificantToken(Class, significantToken) {
      if (significantToken === undefined) {
        significantToken = Class;
        Class = TerminalNode; ///
      }

      var parentNode = undefined,
          ///
      terminalNode = new Class(significantToken, parentNode);
      return terminalNode;
    }
  }]);

  return TerminalNode;
}();

module.exports = TerminalNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsInJlcXVpcmUiLCJUZXJtaW5hbE5vZGUiLCJzaWduaWZpY2FudFRva2VuIiwicGFyZW50Tm9kZSIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiZXBzaWxvbk5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRUeXBlIiwiZ2V0Q29udGVudCIsInRva2VucyIsInRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJwYXJzZVRyZWUiLCJDbGFzcyIsInVuZGVmaW5lZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLHFCQUFxQixHQUFHQyxPQUFPLENBQUMsMkJBQUQsQ0FBckM7O0lBRU1DLFk7QUFDSix3QkFBWUMsZ0JBQVosRUFBOEJDLFVBQTlCLEVBQTBDO0FBQUE7O0FBQ3hDLFNBQUtELGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOzs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUtELGdCQUFaO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0MsVUFBWjtBQUNEOzs7K0NBRTBCO0FBQ3pCLFVBQU1DLHFCQUFxQixHQUFHLEtBQUtGLGdCQUFuQyxDQUR5QixDQUM2Qjs7QUFFdEQsYUFBT0UscUJBQVA7QUFDRDs7OzhDQUV5QjtBQUN4QixVQUFNQyxvQkFBb0IsR0FBRyxLQUFLSCxnQkFBbEMsQ0FEd0IsQ0FDNkI7O0FBRXJELGFBQU9HLG9CQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1DLFdBQVcsR0FBRyxLQUFwQjtBQUVBLGFBQU9BLFdBQVA7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQU1DLFlBQVksR0FBRyxJQUFyQjtBQUVBLGFBQU9BLFlBQVA7QUFDRDs7O3dDQUVtQjtBQUNsQixVQUFNQyxlQUFlLEdBQUcsS0FBeEI7QUFFQSxhQUFPQSxlQUFQO0FBQ0Q7Ozs4QkFFUztBQUFFLGFBQU8sS0FBS04sZ0JBQUwsQ0FBc0JPLE9BQXRCLEVBQVA7QUFBeUM7OztpQ0FFeEM7QUFBRSxhQUFPLEtBQUtQLGdCQUFMLENBQXNCUSxVQUF0QixFQUFQO0FBQTRDOzs7d0NBRXZDUixnQixFQUFrQjtBQUNwQyxXQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7OztrQ0FFYUMsVSxFQUFZO0FBQ3hCLFdBQUtBLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0Q7OztnQ0FFV1EsTSxFQUFRO0FBQ2xCLFVBQU1KLFlBQVksR0FBRyxJQUFyQjtBQUFBLFVBQTRCO0FBQ3RCSyxNQUFBQSxxQkFBcUIsR0FBR2IscUJBQXFCLENBQUNjLHlCQUF0QixDQUFnRE4sWUFBaEQsRUFBOERJLE1BQTlELENBRDlCO0FBQUEsVUFFTUcsU0FBUyxHQUFHRixxQkFGbEIsQ0FEa0IsQ0FHd0I7O0FBRTFDLGFBQU9FLFNBQVA7QUFDRDs7O3lDQUUyQkMsSyxFQUFPYixnQixFQUFrQjtBQUNuRCxVQUFJQSxnQkFBZ0IsS0FBS2MsU0FBekIsRUFBb0M7QUFDbENkLFFBQUFBLGdCQUFnQixHQUFHYSxLQUFuQjtBQUNBQSxRQUFBQSxLQUFLLEdBQUdkLFlBQVIsQ0FGa0MsQ0FFWjtBQUN2Qjs7QUFFRCxVQUFNRSxVQUFVLEdBQUdhLFNBQW5CO0FBQUEsVUFBOEI7QUFDeEJULE1BQUFBLFlBQVksR0FBRyxJQUFJUSxLQUFKLENBQVViLGdCQUFWLEVBQTRCQyxVQUE1QixDQURyQjtBQUdBLGFBQU9JLFlBQVA7QUFDRDs7Ozs7O0FBR0hVLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmpCLFlBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUvdGVybWluYWxOb2RlJyk7XG5cbmNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW4sIHBhcmVudE5vZGUpIHtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gIH1cblxuICBnZXRTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRQYXJlbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGU7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgY29uc3QgZmlyc3RTaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuOyAgLy8vXG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgY29uc3QgbGFzdFNpZ25pZmljYW50VG9rZW4gPSB0aGlzLnNpZ25pZmljYW50VG9rZW47ICAvLy9cblxuICAgIHJldHVybiBsYXN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGlzRXBzaWxvbk5vZGUoKSB7XG4gICAgY29uc3QgZXBzaWxvbk5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBlcHNpbG9uTm9kZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRydWU7XG4gICAgXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpOyB9XG5cbiAgZ2V0Q29udGVudCgpIHsgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCk7IH1cblxuICBzZXRTaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pIHtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKSB7XG4gICAgdGhpcy5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBUZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbVRlcm1pbmFsTm9kZUFuZFRva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2VuKENsYXNzLCBzaWduaWZpY2FudFRva2VuKSB7XG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBUZXJtaW5hbE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSB1bmRlZmluZWQsIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhzaWduaWZpY2FudFRva2VuLCBwYXJlbnROb2RlKTtcbiAgICBcbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxOb2RlO1xuIl19