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
    key: 'isNullified',
    value: function isNullified() {
      var firstLine = this.getFirstLine(),
          nullified = firstLine === null; ///

      return nullified;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return this.significantToken.getContent();
    }
  }, {
    key: 'parseTreeFromLines',
    value: function parseTreeFromLines(lines) {
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

      var line = significantToken.getLine(),
          terminalNode = new Class(significantToken, line);

      return terminalNode;
    }
  }]);

  return TerminalNode;
}();

module.exports = TerminalNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImxpbmUiLCJlcHNpbG9uTm9kZSIsInRlcm1pbmFsTm9kZSIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiZmlyc3RMaW5lIiwibGFzdExpbmUiLCJnZXRGaXJzdExpbmUiLCJudWxsaWZpZWQiLCJnZXRDb250ZW50IiwibGluZXMiLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tVGVybWluYWxOb2RlQW5kTGluZXMiLCJwYXJzZVRyZWUiLCJDbGFzcyIsInVuZGVmaW5lZCIsImdldExpbmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsd0JBQXdCQyxRQUFRLDJCQUFSLENBQTlCOztJQUVNQyxZO0FBQ0osd0JBQVlDLGdCQUFaLEVBQThCQyxJQUE5QixFQUFvQztBQUFBOztBQUNsQyxTQUFLRCxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7b0NBRWU7QUFDZCxVQUFNQyxjQUFjLEtBQXBCOztBQUVBLGFBQU9BLFdBQVA7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQU1DLGVBQWUsSUFBckI7O0FBRUEsYUFBT0EsWUFBUDtBQUNEOzs7MENBRXFCO0FBQ3BCLGFBQU8sS0FBS0gsZ0JBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7OzsrQ0FFMEI7QUFDekIsVUFBTUcsd0JBQXdCLEtBQUtKLGdCQUFuQyxDQUR5QixDQUM2Qjs7QUFFdEQsYUFBT0kscUJBQVA7QUFDRDs7OzhDQUV5QjtBQUN4QixVQUFNQyx1QkFBdUIsS0FBS0wsZ0JBQWxDLENBRHdCLENBQzZCOztBQUVyRCxhQUFPSyxvQkFBUDtBQUNEOzs7bUNBRWM7QUFDYixVQUFNQyxZQUFZLEtBQUtMLElBQXZCLENBRGEsQ0FDZ0I7O0FBRTdCLGFBQU9LLFNBQVA7QUFDRDs7O2tDQUVhO0FBQ1osVUFBTUMsV0FBVyxLQUFLTixJQUF0QixDQURZLENBQ2lCOztBQUU3QixhQUFPTSxRQUFQO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQU1ELFlBQVksS0FBS0UsWUFBTCxFQUFsQjtBQUFBLFVBQ01DLFlBQWFILGNBQWMsSUFEakMsQ0FEWSxDQUU2Qjs7QUFFekMsYUFBT0csU0FBUDtBQUNEOzs7aUNBRVk7QUFBRSxhQUFPLEtBQUtULGdCQUFMLENBQXNCVSxVQUF0QixFQUFQO0FBQTRDOzs7dUNBRXhDQyxLLEVBQU87QUFDeEIsVUFBTVIsZUFBZSxJQUFyQjtBQUFBLFVBQTRCO0FBQ3RCUyw4QkFBd0JmLHNCQUFzQmdCLHdCQUF0QixDQUErQ1YsWUFBL0MsRUFBNkRRLEtBQTdELENBRDlCO0FBQUEsVUFFTUcsWUFBWUYscUJBRmxCLENBRHdCLENBR2tCOztBQUUxQyxhQUFPRSxTQUFQO0FBQ0Q7Ozt5Q0FFMkJDLEssRUFBT2YsZ0IsRUFBa0I7QUFDbkQsVUFBSUEscUJBQXFCZ0IsU0FBekIsRUFBb0M7QUFDbENoQiwyQkFBbUJlLEtBQW5CO0FBQ0FBLGdCQUFRaEIsWUFBUjtBQUNEOztBQUVELFVBQU1FLE9BQU9ELGlCQUFpQmlCLE9BQWpCLEVBQWI7QUFBQSxVQUNNZCxlQUFlLElBQUlZLEtBQUosQ0FBVWYsZ0JBQVYsRUFBNEJDLElBQTVCLENBRHJCOztBQUdBLGFBQU9FLFlBQVA7QUFDRDs7Ozs7O0FBR0hlLE9BQU9DLE9BQVAsR0FBaUJwQixZQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZScpO1xuXG5jbGFzcyBUZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihzaWduaWZpY2FudFRva2VuLCBsaW5lKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICB9XG5cbiAgaXNFcHNpbG9uTm9kZSgpIHtcbiAgICBjb25zdCBlcHNpbG9uTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGVwc2lsb25Ob2RlO1xuICB9XG5cbiAgaXNUZXJtaW5hbE5vZGUoKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbjsgIC8vL1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGxhc3RTaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRGaXJzdExpbmUoKSB7XG4gICAgY29uc3QgZmlyc3RMaW5lID0gdGhpcy5saW5lOyAvLy9cblxuICAgIHJldHVybiBmaXJzdExpbmU7XG4gIH1cblxuICBnZXRMYXN0TGluZSgpIHtcbiAgICBjb25zdCBsYXN0TGluZSA9IHRoaXMubGluZTsgIC8vL1xuXG4gICAgcmV0dXJuIGxhc3RMaW5lO1xuICB9XG5cbiAgaXNOdWxsaWZpZWQoKSB7XG4gICAgY29uc3QgZmlyc3RMaW5lID0gdGhpcy5nZXRGaXJzdExpbmUoKSxcbiAgICAgICAgICBudWxsaWZpZWQgPSAoZmlyc3RMaW5lID09PSBudWxsKTsgIC8vL1xuXG4gICAgcmV0dXJuIG51bGxpZmllZDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7IHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpOyB9XG5cbiAgcGFyc2VUcmVlRnJvbUxpbmVzKGxpbmVzKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IFRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tVGVybWluYWxOb2RlQW5kTGluZXModGVybWluYWxOb2RlLCBsaW5lcyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2VuKENsYXNzLCBzaWduaWZpY2FudFRva2VuKSB7XG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBUZXJtaW5hbE5vZGVcbiAgICB9XG5cbiAgICBjb25zdCBsaW5lID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRMaW5lKCksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gbmV3IENsYXNzKHNpZ25pZmljYW50VG9rZW4sIGxpbmUpO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbE5vZGU7XG4iXX0=