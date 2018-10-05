'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNodeParseTree = require('../parseTree/terminalNode');

var TerminalNode = function () {
  function TerminalNode(significantToken) {
    _classCallCheck(this, TerminalNode);

    this.significantToken = significantToken;
  }

  _createClass(TerminalNode, [{
    key: 'getSignificantToken',
    value: function getSignificantToken() {
      return this.significantToken;
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
        Class = TerminalNode;
      }

      var terminalNode = new Class(significantToken);

      return terminalNode;
    }
  }]);

  return TerminalNode;
}();

module.exports = TerminalNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiZXBzaWxvbk5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbVRlcm1pbmFsTm9kZUFuZFRva2VucyIsInBhcnNlVHJlZSIsIkNsYXNzIiwidW5kZWZpbmVkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLHdCQUF3QkMsUUFBUSwyQkFBUixDQUE5Qjs7SUFFTUMsWTtBQUNKLHdCQUFZQyxnQkFBWixFQUE4QjtBQUFBOztBQUM1QixTQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7Ozs7MENBRXFCO0FBQ3BCLGFBQU8sS0FBS0EsZ0JBQVo7QUFDRDs7OytDQUUwQjtBQUN6QixVQUFNQyx3QkFBd0IsS0FBS0QsZ0JBQW5DLENBRHlCLENBQzZCOztBQUV0RCxhQUFPQyxxQkFBUDtBQUNEOzs7OENBRXlCO0FBQ3hCLFVBQU1DLHVCQUF1QixLQUFLRixnQkFBbEMsQ0FEd0IsQ0FDNkI7O0FBRXJELGFBQU9FLG9CQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1DLGNBQWMsS0FBcEI7O0FBRUEsYUFBT0EsV0FBUDtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUMsZUFBZSxJQUFyQjs7QUFFQSxhQUFPQSxZQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBTUMsa0JBQWtCLEtBQXhCOztBQUVBLGFBQU9BLGVBQVA7QUFDRDs7O2lDQUVZO0FBQUUsYUFBTyxLQUFLTCxnQkFBTCxDQUFzQk0sVUFBdEIsRUFBUDtBQUE0Qzs7O2dDQUUvQ0MsTSxFQUFRO0FBQ2xCLFVBQU1ILGVBQWUsSUFBckI7QUFBQSxVQUE0QjtBQUN0QkksOEJBQXdCWCxzQkFBc0JZLHlCQUF0QixDQUFnREwsWUFBaEQsRUFBOERHLE1BQTlELENBRDlCO0FBQUEsVUFFTUcsWUFBWUYscUJBRmxCLENBRGtCLENBR3dCOztBQUUxQyxhQUFPRSxTQUFQO0FBQ0Q7Ozt5Q0FFMkJDLEssRUFBT1gsZ0IsRUFBa0I7QUFDbkQsVUFBSUEscUJBQXFCWSxTQUF6QixFQUFvQztBQUNsQ1osMkJBQW1CVyxLQUFuQjtBQUNBQSxnQkFBUVosWUFBUjtBQUNEOztBQUVELFVBQU1LLGVBQWUsSUFBSU8sS0FBSixDQUFVWCxnQkFBVixDQUFyQjs7QUFFQSxhQUFPSSxZQUFQO0FBQ0Q7Ozs7OztBQUdIUyxPQUFPQyxPQUFQLEdBQWlCZixZQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZScpO1xuXG5jbGFzcyBUZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihzaWduaWZpY2FudFRva2VuKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBjb25zdCBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSB0aGlzLnNpZ25pZmljYW50VG9rZW47ICAvLy9cblxuICAgIHJldHVybiBmaXJzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBjb25zdCBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbjsgIC8vL1xuXG4gICAgcmV0dXJuIGxhc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgaXNFcHNpbG9uTm9kZSgpIHtcbiAgICBjb25zdCBlcHNpbG9uTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGVwc2lsb25Ob2RlO1xuICB9XG5cbiAgaXNUZXJtaW5hbE5vZGUoKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgaXNOb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHsgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCk7IH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnModGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IHRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlbihDbGFzcywgc2lnbmlmaWNhbnRUb2tlbikge1xuICAgIGlmIChzaWduaWZpY2FudFRva2VuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBDbGFzcztcbiAgICAgIENsYXNzID0gVGVybWluYWxOb2RlXG4gICAgfVxuXG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbmV3IENsYXNzKHNpZ25pZmljYW50VG9rZW4pO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbE5vZGU7XG4iXX0=