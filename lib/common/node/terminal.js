'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNodeParseTree = require('../../bnf/parseTree/terminalNode');

var TerminalNode = function () {
  function TerminalNode(productionName, significantToken, line) {
    _classCallCheck(this, TerminalNode);

    this.productionName = productionName;
    this.significantToken = significantToken;
    this.line = line;
  }

  _createClass(TerminalNode, [{
    key: 'getProductionName',
    value: function getProductionName() {
      return this.productionName;
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
    key: 'getChildNodes',
    value: function getChildNodes() {
      var childNodes = []; ///

      return childNodes;
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
    key: 'setChildNodes',
    value: function setChildNodes(childNodes) {
      ///
    }
  }, {
    key: 'getFirstToken',
    value: function getFirstToken() {
      var firstToken = this.significantToken; ///

      return firstToken;
    }
  }, {
    key: 'getLastToken',
    value: function getLastToken() {
      var lastToken = this.significantToken; ///

      return lastToken;
    }
  }, {
    key: 'getParseTree',
    value: function getParseTree() {
      var terminalNode = this,
          ///
      terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNode(terminalNode),
          parseTree = terminalNodeParseTree; ///

      return parseTree;
    }
  }], [{
    key: 'fromProductionNameAndSignificantToken',
    value: function fromProductionNameAndSignificantToken(productionName, significantToken) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : TerminalNode;

      var line = significantToken.getLine(),
          terminalNode = new Class(productionName, significantToken, line);

      return terminalNode;
    }
  }]);

  return TerminalNode;
}();

module.exports = TerminalNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJzaWduaWZpY2FudFRva2VuIiwibGluZSIsImNoaWxkTm9kZXMiLCJmaXJzdExpbmUiLCJsYXN0TGluZSIsImZpcnN0VG9rZW4iLCJsYXN0VG9rZW4iLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tVGVybWluYWxOb2RlIiwicGFyc2VUcmVlIiwiQ2xhc3MiLCJnZXRMaW5lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLHdCQUF3QkMsUUFBUSxrQ0FBUixDQUE1Qjs7SUFFTUMsWTtBQUNKLHdCQUFZQyxjQUFaLEVBQTRCQyxnQkFBNUIsRUFBOENDLElBQTlDLEVBQW9EO0FBQUE7O0FBQ2xELFNBQUtGLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O3dDQUVtQjtBQUNsQixhQUFPLEtBQUtGLGNBQVo7QUFDRDs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUtDLGdCQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7b0NBRWU7QUFDZCxVQUFJQyxhQUFhLEVBQWpCLENBRGMsQ0FDUTs7QUFFdEIsYUFBT0EsVUFBUDtBQUNEOzs7bUNBRWM7QUFDYixVQUFJQyxZQUFZLEtBQUtGLElBQXJCLENBRGEsQ0FDYzs7QUFFM0IsYUFBT0UsU0FBUDtBQUNEOzs7a0NBRWE7QUFDWixVQUFJQyxXQUFXLEtBQUtILElBQXBCLENBRFksQ0FDYzs7QUFFMUIsYUFBT0csUUFBUDtBQUNEOzs7a0NBRWFGLFUsRUFBWTtBQUN4QjtBQUNEOzs7b0NBRWU7QUFDZCxVQUFJRyxhQUFhLEtBQUtMLGdCQUF0QixDQURjLENBQzJCOztBQUV6QyxhQUFPSyxVQUFQO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQUlDLFlBQVksS0FBS04sZ0JBQXJCLENBRGEsQ0FDMkI7O0FBRXhDLGFBQU9NLFNBQVA7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUMsZUFBZSxJQUFuQjtBQUFBLFVBQTBCO0FBQ3RCQyw4QkFBd0JaLHNCQUFzQmEsZ0JBQXRCLENBQXVDRixZQUF2QyxDQUQ1QjtBQUFBLFVBRUlHLFlBQVlGLHFCQUZoQixDQURhLENBRzJCOztBQUV4QyxhQUFPRSxTQUFQO0FBQ0Q7OzswREFFNENYLGMsRUFBZ0JDLGdCLEVBQXdDO0FBQUEsVUFBdEJXLEtBQXNCLHVFQUFkYixZQUFjOztBQUNuRyxVQUFJRyxPQUFPRCxpQkFBaUJZLE9BQWpCLEVBQVg7QUFBQSxVQUNJTCxlQUFlLElBQUlJLEtBQUosQ0FBVVosY0FBVixFQUEwQkMsZ0JBQTFCLEVBQTRDQyxJQUE1QyxDQURuQjs7QUFHQSxhQUFPTSxZQUFQO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCaEIsWUFBakIiLCJmaWxlIjoidGVybWluYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi8uLi9ibmYvcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZScpO1xuXG5jbGFzcyBUZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9uTmFtZSwgc2lnbmlmaWNhbnRUb2tlbiwgbGluZSkge1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gIH1cblxuICBnZXRQcm9kdWN0aW9uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0aW9uTmFtZTtcbiAgfVxuXG4gIGdldFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBbXTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBjaGlsZE5vZGVzO1xuICB9XG4gIFxuICBnZXRGaXJzdExpbmUoKSB7XG4gICAgdmFyIGZpcnN0TGluZSA9IHRoaXMubGluZTsgLy8vXG5cbiAgICByZXR1cm4gZmlyc3RMaW5lO1xuICB9XG5cbiAgZ2V0TGFzdExpbmUoKSB7XG4gICAgdmFyIGxhc3RMaW5lID0gdGhpcy5saW5lOyAvLy9cblxuICAgIHJldHVybiBsYXN0TGluZTtcbiAgfVxuXG4gIHNldENoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICAgIC8vL1xuICB9XG5cbiAgZ2V0Rmlyc3RUb2tlbigpIHtcbiAgICB2YXIgZmlyc3RUb2tlbiA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbjsgIC8vL1xuXG4gICAgcmV0dXJuIGZpcnN0VG9rZW47XG4gIH1cblxuICBnZXRMYXN0VG9rZW4oKSB7XG4gICAgdmFyIGxhc3RUb2tlbiA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbjsgIC8vL1xuXG4gICAgcmV0dXJuIGxhc3RUb2tlbjtcbiAgfVxuXG4gIGdldFBhcnNlVHJlZSgpIHtcbiAgICB2YXIgdGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBUZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUpLFxuICAgICAgICBwYXJzZVRyZWUgPSB0ZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb25OYW1lQW5kU2lnbmlmaWNhbnRUb2tlbihwcm9kdWN0aW9uTmFtZSwgc2lnbmlmaWNhbnRUb2tlbiwgQ2xhc3MgPSBUZXJtaW5hbE5vZGUpIHtcbiAgICB2YXIgbGluZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0TGluZSgpLFxuICAgICAgICB0ZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocHJvZHVjdGlvbk5hbWUsIHNpZ25pZmljYW50VG9rZW4sIGxpbmUpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsTm9kZTtcbiJdfQ==