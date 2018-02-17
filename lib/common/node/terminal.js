'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNodeParseTree = require('../parseTree/terminalNode');

var TerminalNode = function () {
  function TerminalNode(significantToken) {
    _classCallCheck(this, TerminalNode);

    this.significantToken = significantToken;

    this.parentNode = undefined; ///
  }

  _createClass(TerminalNode, [{
    key: 'getSignificantToken',
    value: function getSignificantToken() {
      return this.significantToken;
    }
  }, {
    key: 'getParentNode',
    value: function getParentNode() {
      return this.parentNode;
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
    key: 'isEpsilonNode',
    value: function isEpsilonNode() {
      var epsilonNode = false;

      return epsilonNode;
    }
  }, {
    key: 'isTerminalNode',
    value: function isTerminalNode() {
      var terminalNode = true;

      return terminalNode;
    }
  }, {
    key: 'isNullified',
    value: function isNullified() {
      var nullified = this.significantToken === null;

      return nullified;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return this.significantToken.getContent();
    }
  }, {
    key: 'setParentNode',
    value: function setParentNode(parentNode) {
      this.parentNode = parentNode;
    }
  }, {
    key: 'asParseTree',
    value: function asParseTree(lines) {
      var terminalNode = this,
          ///
      terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNodeAndLines(terminalNode, lines),
          parseTree = terminalNodeParseTree; ///

      return parseTree;
    }
  }], [{
    key: 'fromSignificantToken',
    value: function fromSignificantToken(Class, significantToken) {
      if (significantToken === undefined) {
        significantToken = Class;
        Class = TerminalNode;
      }

      var terminalNode = new Class(significantToken);

      return terminalNode;
    }
  }]);

  return TerminalNode;
}();

module.exports = TerminalNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsInBhcmVudE5vZGUiLCJ1bmRlZmluZWQiLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsImVwc2lsb25Ob2RlIiwidGVybWluYWxOb2RlIiwibnVsbGlmaWVkIiwiZ2V0Q29udGVudCIsImxpbmVzIiwidGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbVRlcm1pbmFsTm9kZUFuZExpbmVzIiwicGFyc2VUcmVlIiwiQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsd0JBQXdCQyxRQUFRLDJCQUFSLENBQTlCOztJQUVNQyxZO0FBQ0osd0JBQVlDLGdCQUFaLEVBQThCO0FBQUE7O0FBQzVCLFNBQUtBLGdCQUFMLEdBQXdCQSxnQkFBeEI7O0FBRUEsU0FBS0MsVUFBTCxHQUFrQkMsU0FBbEIsQ0FINEIsQ0FHRTtBQUMvQjs7OzswQ0FFcUI7QUFDcEIsYUFBTyxLQUFLRixnQkFBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7OytDQUUwQjtBQUN6QixVQUFNRSx3QkFBd0IsS0FBS0gsZ0JBQW5DLENBRHlCLENBQzZCOztBQUV0RCxhQUFPRyxxQkFBUDtBQUNEOzs7OENBRXlCO0FBQ3hCLFVBQU1DLHVCQUF1QixLQUFLSixnQkFBbEMsQ0FEd0IsQ0FDNkI7O0FBRXJELGFBQU9JLG9CQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1DLGNBQWMsS0FBcEI7O0FBRUEsYUFBT0EsV0FBUDtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUMsZUFBZSxJQUFyQjs7QUFFQSxhQUFPQSxZQUFQO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQU1DLFlBQWEsS0FBS1AsZ0JBQUwsS0FBMEIsSUFBN0M7O0FBRUEsYUFBT08sU0FBUDtBQUNEOzs7aUNBRVk7QUFBRSxhQUFPLEtBQUtQLGdCQUFMLENBQXNCUSxVQUF0QixFQUFQO0FBQTRDOzs7a0NBRTdDUCxVLEVBQVk7QUFDeEIsV0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7O2dDQUVXUSxLLEVBQU87QUFDakIsVUFBTUgsZUFBZSxJQUFyQjtBQUFBLFVBQTRCO0FBQ3RCSSw4QkFBd0JiLHNCQUFzQmMsd0JBQXRCLENBQStDTCxZQUEvQyxFQUE2REcsS0FBN0QsQ0FEOUI7QUFBQSxVQUVNRyxZQUFZRixxQkFGbEIsQ0FEaUIsQ0FHeUI7O0FBRTFDLGFBQU9FLFNBQVA7QUFDRDs7O3lDQUUyQkMsSyxFQUFPYixnQixFQUFrQjtBQUNuRCxVQUFJQSxxQkFBcUJFLFNBQXpCLEVBQW9DO0FBQ2xDRiwyQkFBbUJhLEtBQW5CO0FBQ0FBLGdCQUFRZCxZQUFSO0FBQ0Q7O0FBRUQsVUFBTU8sZUFBZSxJQUFJTyxLQUFKLENBQVViLGdCQUFWLENBQXJCOztBQUVBLGFBQU9NLFlBQVA7QUFDRDs7Ozs7O0FBR0hRLE9BQU9DLE9BQVAsR0FBaUJoQixZQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZScpO1xuXG5jbGFzcyBUZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihzaWduaWZpY2FudFRva2VuKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcblxuICAgIHRoaXMucGFyZW50Tm9kZSA9IHVuZGVmaW5lZDsgIC8vL1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0UGFyZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbjsgIC8vL1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGxhc3RTaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc0Vwc2lsb25Ob2RlKCkge1xuICAgIGNvbnN0IGVwc2lsb25Ob2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZXBzaWxvbk5vZGU7XG4gIH1cblxuICBpc1Rlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBpc051bGxpZmllZCgpIHtcbiAgICBjb25zdCBudWxsaWZpZWQgPSAodGhpcy5zaWduaWZpY2FudFRva2VuID09PSBudWxsKTtcblxuICAgIHJldHVybiBudWxsaWZpZWQ7XG4gIH1cblxuICBnZXRDb250ZW50KCkgeyByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKTsgfVxuXG4gIHNldFBhcmVudE5vZGUocGFyZW50Tm9kZSkge1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gIH1cblxuICBhc1BhcnNlVHJlZShsaW5lcykge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBUZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbVRlcm1pbmFsTm9kZUFuZExpbmVzKHRlcm1pbmFsTm9kZSwgbGluZXMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IHRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlbihDbGFzcywgc2lnbmlmaWNhbnRUb2tlbikge1xuICAgIGlmIChzaWduaWZpY2FudFRva2VuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBDbGFzcztcbiAgICAgIENsYXNzID0gVGVybWluYWxOb2RlXG4gICAgfVxuXG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbmV3IENsYXNzKHNpZ25pZmljYW50VG9rZW4pO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbE5vZGU7XG4iXX0=