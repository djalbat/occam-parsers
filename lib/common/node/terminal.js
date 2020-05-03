"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TerminalNodeParseTree = require("../parseTree/terminalNode");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsInJlcXVpcmUiLCJUZXJtaW5hbE5vZGUiLCJzaWduaWZpY2FudFRva2VuIiwicGFyZW50Tm9kZSIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiZXBzaWxvbk5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRUeXBlIiwiZ2V0Q29udGVudCIsInRva2VucyIsInRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJwYXJzZVRyZWUiLCJDbGFzcyIsInVuZGVmaW5lZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLHFCQUFxQixHQUFHQyxPQUFPLENBQUMsMkJBQUQsQ0FBckM7O0lBRU1DLFk7QUFDSix3QkFBWUMsZ0JBQVosRUFBOEJDLFVBQTlCLEVBQTBDO0FBQUE7O0FBQ3hDLFNBQUtELGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOzs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUtELGdCQUFaO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0MsVUFBWjtBQUNEOzs7K0NBRTBCO0FBQ3pCLFVBQU1DLHFCQUFxQixHQUFHLEtBQUtGLGdCQUFuQyxDQUR5QixDQUM2Qjs7QUFFdEQsYUFBT0UscUJBQVA7QUFDRDs7OzhDQUV5QjtBQUN4QixVQUFNQyxvQkFBb0IsR0FBRyxLQUFLSCxnQkFBbEMsQ0FEd0IsQ0FDNkI7O0FBRXJELGFBQU9HLG9CQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1DLFdBQVcsR0FBRyxLQUFwQjtBQUVBLGFBQU9BLFdBQVA7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQU1DLFlBQVksR0FBRyxJQUFyQjtBQUVBLGFBQU9BLFlBQVA7QUFDRDs7O3dDQUVtQjtBQUNsQixVQUFNQyxlQUFlLEdBQUcsS0FBeEI7QUFFQSxhQUFPQSxlQUFQO0FBQ0Q7Ozs4QkFFUztBQUFFLGFBQU8sS0FBS04sZ0JBQUwsQ0FBc0JPLE9BQXRCLEVBQVA7QUFBeUM7OztpQ0FFeEM7QUFBRSxhQUFPLEtBQUtQLGdCQUFMLENBQXNCUSxVQUF0QixFQUFQO0FBQTRDOzs7d0NBRXZDUixnQixFQUFrQjtBQUNwQyxXQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7OztrQ0FFYUMsVSxFQUFZO0FBQ3hCLFdBQUtBLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0Q7OztnQ0FFV1EsTSxFQUFRO0FBQ2xCLFVBQU1KLFlBQVksR0FBRyxJQUFyQjtBQUFBLFVBQTRCO0FBQ3RCSyxNQUFBQSxxQkFBcUIsR0FBR2IscUJBQXFCLENBQUNjLHlCQUF0QixDQUFnRE4sWUFBaEQsRUFBOERJLE1BQTlELENBRDlCO0FBQUEsVUFFTUcsU0FBUyxHQUFHRixxQkFGbEIsQ0FEa0IsQ0FHd0I7O0FBRTFDLGFBQU9FLFNBQVA7QUFDRDs7O3lDQUUyQkMsSyxFQUFPYixnQixFQUFrQjtBQUNuRCxVQUFJQSxnQkFBZ0IsS0FBS2MsU0FBekIsRUFBb0M7QUFDbENkLFFBQUFBLGdCQUFnQixHQUFHYSxLQUFuQjtBQUNBQSxRQUFBQSxLQUFLLEdBQUdkLFlBQVIsQ0FGa0MsQ0FFWjtBQUN2Qjs7QUFFRCxVQUFNRSxVQUFVLEdBQUdhLFNBQW5CO0FBQUEsVUFBOEI7QUFDeEJULE1BQUFBLFlBQVksR0FBRyxJQUFJUSxLQUFKLENBQVViLGdCQUFWLEVBQTRCQyxVQUE1QixDQURyQjtBQUdBLGFBQU9JLFlBQVA7QUFDRDs7Ozs7O0FBR0hVLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmpCLFlBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoXCIuLi9wYXJzZVRyZWUvdGVybWluYWxOb2RlXCIpO1xuXG5jbGFzcyBUZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihzaWduaWZpY2FudFRva2VuLCBwYXJlbnROb2RlKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0UGFyZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbjsgIC8vL1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGxhc3RTaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc0Vwc2lsb25Ob2RlKCkge1xuICAgIGNvbnN0IGVwc2lsb25Ob2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZXBzaWxvbk5vZGU7XG4gIH1cblxuICBpc1Rlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBpc05vblRlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuLmdldFR5cGUoKTsgfVxuXG4gIGdldENvbnRlbnQoKSB7IHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpOyB9XG5cbiAgc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHNldFBhcmVudE5vZGUocGFyZW50Tm9kZSkge1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnModGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IHRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlbihDbGFzcywgc2lnbmlmaWNhbnRUb2tlbikge1xuICAgIGlmIChzaWduaWZpY2FudFRva2VuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBDbGFzcztcbiAgICAgIENsYXNzID0gVGVybWluYWxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnROb2RlID0gdW5kZWZpbmVkLCAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3Moc2lnbmlmaWNhbnRUb2tlbiwgcGFyZW50Tm9kZSk7XG4gICAgXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsTm9kZTtcbiJdfQ==