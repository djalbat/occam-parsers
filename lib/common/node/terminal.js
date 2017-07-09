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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImxpbmUiLCJ0ZXJtaW5hbE5vZGUiLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0TGluZSIsImxhc3RMaW5lIiwiZ2V0Q29udGVudCIsImxpbmVzIiwidGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbVRlcm1pbmFsTm9kZSIsInBhcnNlVHJlZSIsIkNsYXNzIiwiZ2V0TGluZSIsImVycm9yIiwic2V0RXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsd0JBQXdCQyxRQUFRLDJCQUFSLENBQTlCOztJQUVNQyxZO0FBQ0osd0JBQVlDLGdCQUFaLEVBQThCQyxJQUE5QixFQUFvQztBQUFBOztBQUNsQyxTQUFLRCxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7cUNBRWdCO0FBQ2YsVUFBTUMsZUFBZSxJQUFyQjs7QUFFQSxhQUFPQSxZQUFQO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsYUFBTyxLQUFLRixnQkFBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OytDQUUwQjtBQUN6QixVQUFNRSx3QkFBd0IsS0FBS0gsZ0JBQW5DLENBRHlCLENBQzZCOztBQUV0RCxhQUFPRyxxQkFBUDtBQUNEOzs7OENBRXlCO0FBQ3hCLFVBQU1DLHVCQUF1QixLQUFLSixnQkFBbEMsQ0FEd0IsQ0FDNkI7O0FBRXJELGFBQU9JLG9CQUFQO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQU1DLFlBQVksS0FBS0osSUFBdkIsQ0FEYSxDQUNnQjs7QUFFN0IsYUFBT0ksU0FBUDtBQUNEOzs7a0NBRWE7QUFDWixVQUFNQyxXQUFXLEtBQUtMLElBQXRCLENBRFksQ0FDaUI7O0FBRTdCLGFBQU9LLFFBQVA7QUFDRDs7O2lDQUVZO0FBQUUsYUFBTyxLQUFLTixnQkFBTCxDQUFzQk8sVUFBdEIsRUFBUDtBQUE0Qzs7O3NDQUV6Q0MsSyxFQUFPO0FBQ3ZCLFVBQU1OLGVBQWUsSUFBckI7QUFBQSxVQUE0QjtBQUN0Qk8sOEJBQXdCWixzQkFBc0JhLGdCQUF0QixDQUF1Q1IsWUFBdkMsRUFBcURNLEtBQXJELENBRDlCO0FBQUEsVUFFTUcsWUFBWUYscUJBRmxCLENBRHVCLENBR21COztBQUUxQyxhQUFPRSxTQUFQO0FBQ0Q7Ozt5Q0FFMkJYLGdCLEVBQXdDO0FBQUEsVUFBdEJZLEtBQXNCLHVFQUFkYixZQUFjOztBQUNsRSxVQUFNRSxPQUFPRCxpQkFBaUJhLE9BQWpCLEVBQWI7QUFBQSxVQUNNWCxlQUFlLElBQUlVLEtBQUosQ0FBVVosZ0JBQVYsRUFBNEJDLElBQTVCLENBRHJCO0FBQUEsVUFFTWEsUUFBUSxLQUZkOztBQUlBZCx1QkFBaUJlLFFBQWpCLENBQTBCRCxLQUExQjs7QUFFQSxhQUFPWixZQUFQO0FBQ0Q7Ozs7OztBQUdIYyxPQUFPQyxPQUFQLEdBQWlCbEIsWUFBakIiLCJmaWxlIjoidGVybWluYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZS90ZXJtaW5hbE5vZGUnKTtcblxuY2xhc3MgVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3Ioc2lnbmlmaWNhbnRUb2tlbiwgbGluZSkge1xuICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW47XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgfVxuICBcbiAgaXNUZXJtaW5hbE5vZGUoKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbjsgIC8vL1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGxhc3RTaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRGaXJzdExpbmUoKSB7XG4gICAgY29uc3QgZmlyc3RMaW5lID0gdGhpcy5saW5lOyAvLy9cblxuICAgIHJldHVybiBmaXJzdExpbmU7XG4gIH1cblxuICBnZXRMYXN0TGluZSgpIHtcbiAgICBjb25zdCBsYXN0TGluZSA9IHRoaXMubGluZTsgIC8vL1xuXG4gICAgcmV0dXJuIGxhc3RMaW5lO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHsgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCk7IH1cbiAgXG4gIGdlbmVyYXRlUGFyc2VUcmVlKGxpbmVzKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IFRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgbGluZXMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IHRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuLCBDbGFzcyA9IFRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IGxpbmUgPSBzaWduaWZpY2FudFRva2VuLmdldExpbmUoKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3Moc2lnbmlmaWNhbnRUb2tlbiwgbGluZSksXG4gICAgICAgICAgZXJyb3IgPSBmYWxzZTtcbiAgICBcbiAgICBzaWduaWZpY2FudFRva2VuLnNldEVycm9yKGVycm9yKTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbE5vZGU7XG4iXX0=