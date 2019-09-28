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
    key: 'getType',
    value: function getType() {
      return this.significantToken.getType();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsInBhcmVudE5vZGUiLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsImVwc2lsb25Ob2RlIiwidGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZ2V0VHlwZSIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zIiwicGFyc2VUcmVlIiwiQ2xhc3MiLCJ1bmRlZmluZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsd0JBQXdCQyxRQUFRLDJCQUFSLENBQTlCOztJQUVNQyxZO0FBQ0osd0JBQVlDLGdCQUFaLEVBQThCQyxVQUE5QixFQUEwQztBQUFBOztBQUN4QyxTQUFLRCxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7OzswQ0FFcUI7QUFDcEIsYUFBTyxLQUFLRCxnQkFBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7OytDQUUwQjtBQUN6QixVQUFNQyx3QkFBd0IsS0FBS0YsZ0JBQW5DLENBRHlCLENBQzZCOztBQUV0RCxhQUFPRSxxQkFBUDtBQUNEOzs7OENBRXlCO0FBQ3hCLFVBQU1DLHVCQUF1QixLQUFLSCxnQkFBbEMsQ0FEd0IsQ0FDNkI7O0FBRXJELGFBQU9HLG9CQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1DLGNBQWMsS0FBcEI7O0FBRUEsYUFBT0EsV0FBUDtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUMsZUFBZSxJQUFyQjs7QUFFQSxhQUFPQSxZQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBTUMsa0JBQWtCLEtBQXhCOztBQUVBLGFBQU9BLGVBQVA7QUFDRDs7OzhCQUVTO0FBQUUsYUFBTyxLQUFLTixnQkFBTCxDQUFzQk8sT0FBdEIsRUFBUDtBQUF5Qzs7O2lDQUV4QztBQUFFLGFBQU8sS0FBS1AsZ0JBQUwsQ0FBc0JRLFVBQXRCLEVBQVA7QUFBNEM7Ozt3Q0FFdkNSLGdCLEVBQWtCO0FBQ3BDLFdBQUtBLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDRDs7O2tDQUVhQyxVLEVBQVk7QUFDeEIsV0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7O2dDQUVXUSxNLEVBQVE7QUFDbEIsVUFBTUosZUFBZSxJQUFyQjtBQUFBLFVBQTRCO0FBQ3RCSyw4QkFBd0JiLHNCQUFzQmMseUJBQXRCLENBQWdETixZQUFoRCxFQUE4REksTUFBOUQsQ0FEOUI7QUFBQSxVQUVNRyxZQUFZRixxQkFGbEIsQ0FEa0IsQ0FHd0I7O0FBRTFDLGFBQU9FLFNBQVA7QUFDRDs7O3lDQUUyQkMsSyxFQUFPYixnQixFQUFrQjtBQUNuRCxVQUFJQSxxQkFBcUJjLFNBQXpCLEVBQW9DO0FBQ2xDZCwyQkFBbUJhLEtBQW5CO0FBQ0FBLGdCQUFRZCxZQUFSLENBRmtDLENBRVo7QUFDdkI7O0FBRUQsVUFBTUUsYUFBYWEsU0FBbkI7QUFBQSxVQUE4QjtBQUN4QlQscUJBQWUsSUFBSVEsS0FBSixDQUFVYixnQkFBVixFQUE0QkMsVUFBNUIsQ0FEckI7O0FBR0EsYUFBT0ksWUFBUDtBQUNEOzs7Ozs7QUFHSFUsT0FBT0MsT0FBUCxHQUFpQmpCLFlBQWpCIiwiZmlsZSI6InRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUvdGVybWluYWxOb2RlJyk7XG5cbmNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW4sIHBhcmVudE5vZGUpIHtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gIH1cblxuICBnZXRTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRQYXJlbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGU7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgY29uc3QgZmlyc3RTaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuOyAgLy8vXG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgY29uc3QgbGFzdFNpZ25pZmljYW50VG9rZW4gPSB0aGlzLnNpZ25pZmljYW50VG9rZW47ICAvLy9cblxuICAgIHJldHVybiBsYXN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGlzRXBzaWxvbk5vZGUoKSB7XG4gICAgY29uc3QgZXBzaWxvbk5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBlcHNpbG9uTm9kZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRydWU7XG4gICAgXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpOyB9XG5cbiAgZ2V0Q29udGVudCgpIHsgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCk7IH1cblxuICBzZXRTaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pIHtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKSB7XG4gICAgdGhpcy5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBUZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbVRlcm1pbmFsTm9kZUFuZFRva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2VuKENsYXNzLCBzaWduaWZpY2FudFRva2VuKSB7XG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBUZXJtaW5hbE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSB1bmRlZmluZWQsIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhzaWduaWZpY2FudFRva2VuLCBwYXJlbnROb2RlKTtcbiAgICBcbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxOb2RlO1xuIl19