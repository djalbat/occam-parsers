"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _terminalNode = _interopRequireDefault(require("../parseTree/terminalNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
    key: "isNoWhitespaceNode",
    value: function isNoWhitespaceNode() {
      var noWhitespaceNode = false;
      return noWhitespaceNode;
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
      terminalNodeParseTree = _terminalNode["default"].fromTerminalNodeAndTokens(terminalNode, tokens),
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

exports["default"] = TerminalNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInNpZ25pZmljYW50VG9rZW4iLCJwYXJlbnROb2RlIiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJub1doaXRlc3BhY2VOb2RlIiwiZXBzaWxvbk5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRUeXBlIiwiZ2V0Q29udGVudCIsInRva2VucyIsInRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsIlRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJwYXJzZVRyZWUiLCJDbGFzcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7OztJQUVxQkEsWTtBQUNuQix3QkFBWUMsZ0JBQVosRUFBOEJDLFVBQTlCLEVBQTBDO0FBQUE7O0FBQ3hDLFNBQUtELGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOzs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUtELGdCQUFaO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0MsVUFBWjtBQUNEOzs7K0NBRTBCO0FBQ3pCLFVBQU1DLHFCQUFxQixHQUFHLEtBQUtGLGdCQUFuQyxDQUR5QixDQUM2Qjs7QUFFdEQsYUFBT0UscUJBQVA7QUFDRDs7OzhDQUV5QjtBQUN4QixVQUFNQyxvQkFBb0IsR0FBRyxLQUFLSCxnQkFBbEMsQ0FEd0IsQ0FDNkI7O0FBRXJELGFBQU9HLG9CQUFQO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsVUFBTUMsZ0JBQWdCLEdBQUcsS0FBekI7QUFFQSxhQUFPQSxnQkFBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNQyxXQUFXLEdBQUcsS0FBcEI7QUFFQSxhQUFPQSxXQUFQO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNQyxZQUFZLEdBQUcsSUFBckI7QUFFQSxhQUFPQSxZQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBTUMsZUFBZSxHQUFHLEtBQXhCO0FBRUEsYUFBT0EsZUFBUDtBQUNEOzs7OEJBRVM7QUFBRSxhQUFPLEtBQUtQLGdCQUFMLENBQXNCUSxPQUF0QixFQUFQO0FBQXlDOzs7aUNBRXhDO0FBQUUsYUFBTyxLQUFLUixnQkFBTCxDQUFzQlMsVUFBdEIsRUFBUDtBQUE0Qzs7O3dDQUV2Q1QsZ0IsRUFBa0I7QUFDcEMsV0FBS0EsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNEOzs7a0NBRWFDLFUsRUFBWTtBQUN4QixXQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOzs7Z0NBRVdTLE0sRUFBUTtBQUNsQixVQUFNSixZQUFZLEdBQUcsSUFBckI7QUFBQSxVQUE0QjtBQUN0QkssTUFBQUEscUJBQXFCLEdBQUdDLHlCQUFzQkMseUJBQXRCLENBQWdEUCxZQUFoRCxFQUE4REksTUFBOUQsQ0FEOUI7QUFBQSxVQUVNSSxTQUFTLEdBQUdILHFCQUZsQixDQURrQixDQUd3Qjs7O0FBRTFDLGFBQU9HLFNBQVA7QUFDRDs7O3lDQUUyQkMsSyxFQUFPZixnQixFQUFrQjtBQUNuRCxVQUFJQSxnQkFBZ0IsS0FBS2dCLFNBQXpCLEVBQW9DO0FBQ2xDaEIsUUFBQUEsZ0JBQWdCLEdBQUdlLEtBQW5CO0FBQ0FBLFFBQUFBLEtBQUssR0FBR2hCLFlBQVIsQ0FGa0MsQ0FFWjtBQUN2Qjs7QUFFRCxVQUFNRSxVQUFVLEdBQUdlLFNBQW5CO0FBQUEsVUFBOEI7QUFDeEJWLE1BQUFBLFlBQVksR0FBRyxJQUFJUyxLQUFKLENBQVVmLGdCQUFWLEVBQTRCQyxVQUE1QixDQURyQjtBQUdBLGFBQU9LLFlBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvdGVybWluYWxOb2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW4sIHBhcmVudE5vZGUpIHtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gIH1cblxuICBnZXRTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRQYXJlbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGU7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgY29uc3QgZmlyc3RTaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuOyAgLy8vXG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgY29uc3QgbGFzdFNpZ25pZmljYW50VG9rZW4gPSB0aGlzLnNpZ25pZmljYW50VG9rZW47ICAvLy9cblxuICAgIHJldHVybiBsYXN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGlzTm9XaGl0ZXNwYWNlTm9kZSgpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VOb2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlTm9kZTtcbiAgfVxuXG4gIGlzRXBzaWxvbk5vZGUoKSB7XG4gICAgY29uc3QgZXBzaWxvbk5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBlcHNpbG9uTm9kZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRydWU7XG4gICAgXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpOyB9XG5cbiAgZ2V0Q29udGVudCgpIHsgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCk7IH1cblxuICBzZXRTaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pIHtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKSB7XG4gICAgdGhpcy5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBUZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbVRlcm1pbmFsTm9kZUFuZFRva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2VuKENsYXNzLCBzaWduaWZpY2FudFRva2VuKSB7XG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBUZXJtaW5hbE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSB1bmRlZmluZWQsIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhzaWduaWZpY2FudFRva2VuLCBwYXJlbnROb2RlKTtcbiAgICBcbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG59XG4iXX0=