'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNodeParseTree = require('../parseTree/terminalNode');

var TerminalNode = function () {
  function TerminalNode(significantToken, parentNode) {
    _classCallCheck(this, TerminalNode);

    this.significantToken = significantToken;
    this.parentNode = parentNode;
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
    key: 'isNonTerminalNode',
    value: function isNonTerminalNode() {
      var nonTerminalNode = false;

      return nonTerminalNode;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return this.significantToken.getContent();
    }
  }, {
    key: 'setSignificantToken',
    value: function setSignificantToken(significantToken) {
      this.significantToken = significantToken;
    }
  }, {
    key: 'setParentNode',
    value: function setParentNode(parentNode) {
      this.parentNode = parentNode;
    }
  }, {
    key: 'asParseTree',
    value: function asParseTree(tokens) {
      var terminalNode = this,
          ///
      terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNodeAndTokens(terminalNode, tokens),
          parseTree = terminalNodeParseTree; ///

      return parseTree;
    }
  }], [{
    key: 'fromSignificantToken',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsInBhcmVudE5vZGUiLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsImVwc2lsb25Ob2RlIiwidGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZ2V0Q29udGVudCIsInRva2VucyIsInRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJwYXJzZVRyZWUiLCJDbGFzcyIsInVuZGVmaW5lZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSx3QkFBd0JDLFFBQVEsMkJBQVIsQ0FBOUI7O0lBRU1DLFk7QUFDSix3QkFBWUMsZ0JBQVosRUFBOEJDLFVBQTlCLEVBQTBDO0FBQUE7O0FBQ3hDLFNBQUtELGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOzs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUtELGdCQUFaO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0MsVUFBWjtBQUNEOzs7K0NBRTBCO0FBQ3pCLFVBQU1DLHdCQUF3QixLQUFLRixnQkFBbkMsQ0FEeUIsQ0FDNkI7O0FBRXRELGFBQU9FLHFCQUFQO0FBQ0Q7Ozs4Q0FFeUI7QUFDeEIsVUFBTUMsdUJBQXVCLEtBQUtILGdCQUFsQyxDQUR3QixDQUM2Qjs7QUFFckQsYUFBT0csb0JBQVA7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUMsY0FBYyxLQUFwQjs7QUFFQSxhQUFPQSxXQUFQO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNQyxlQUFlLElBQXJCOztBQUVBLGFBQU9BLFlBQVA7QUFDRDs7O3dDQUVtQjtBQUNsQixVQUFNQyxrQkFBa0IsS0FBeEI7O0FBRUEsYUFBT0EsZUFBUDtBQUNEOzs7aUNBRVk7QUFBRSxhQUFPLEtBQUtOLGdCQUFMLENBQXNCTyxVQUF0QixFQUFQO0FBQTRDOzs7d0NBRXZDUCxnQixFQUFrQjtBQUNwQyxXQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7OztrQ0FFYUMsVSxFQUFZO0FBQ3hCLFdBQUtBLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0Q7OztnQ0FFV08sTSxFQUFRO0FBQ2xCLFVBQU1ILGVBQWUsSUFBckI7QUFBQSxVQUE0QjtBQUN0QkksOEJBQXdCWixzQkFBc0JhLHlCQUF0QixDQUFnREwsWUFBaEQsRUFBOERHLE1BQTlELENBRDlCO0FBQUEsVUFFTUcsWUFBWUYscUJBRmxCLENBRGtCLENBR3dCOztBQUUxQyxhQUFPRSxTQUFQO0FBQ0Q7Ozt5Q0FFMkJDLEssRUFBT1osZ0IsRUFBa0I7QUFDbkQsVUFBSUEscUJBQXFCYSxTQUF6QixFQUFvQztBQUNsQ2IsMkJBQW1CWSxLQUFuQjtBQUNBQSxnQkFBUWIsWUFBUixDQUZrQyxDQUVaO0FBQ3ZCOztBQUVELFVBQU1FLGFBQWFZLFNBQW5CO0FBQUEsVUFBOEI7QUFDeEJSLHFCQUFlLElBQUlPLEtBQUosQ0FBVVosZ0JBQVYsRUFBNEJDLFVBQTVCLENBRHJCOztBQUdBLGFBQU9JLFlBQVA7QUFDRDs7Ozs7O0FBR0hTLE9BQU9DLE9BQVAsR0FBaUJoQixZQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZScpO1xuXG5jbGFzcyBUZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihzaWduaWZpY2FudFRva2VuLCBwYXJlbnROb2RlKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0UGFyZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbjsgIC8vL1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGxhc3RTaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc0Vwc2lsb25Ob2RlKCkge1xuICAgIGNvbnN0IGVwc2lsb25Ob2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZXBzaWxvbk5vZGU7XG4gIH1cblxuICBpc1Rlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBpc05vblRlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXRDb250ZW50KCkgeyByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKTsgfVxuXG4gIHNldFNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbikge1xuICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpIHtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICB9XG5cbiAgYXNQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IFRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSB0ZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNpZ25pZmljYW50VG9rZW4oQ2xhc3MsIHNpZ25pZmljYW50VG9rZW4pIHtcbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzaWduaWZpY2FudFRva2VuID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFRlcm1pbmFsTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHVuZGVmaW5lZCwgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gbmV3IENsYXNzKHNpZ25pZmljYW50VG9rZW4sIHBhcmVudE5vZGUpO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbE5vZGU7XG4iXX0=