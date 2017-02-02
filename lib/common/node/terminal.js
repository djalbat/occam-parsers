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
    key: 'getChildNodes',
    value: function getChildNodes() {
      var childNodes = []; ///

      return childNodes;
    }
  }, {
    key: 'getStartLine',
    value: function getStartLine() {
      var startLine = this.line; ///

      return startLine;
    }
  }, {
    key: 'getEndLine',
    value: function getEndLine() {
      var endLine = this.line; ///

      return endLine;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      var significantTokenType = this.significantToken.getType(),
          significantTokenContent = this.significantToken.getContent(),
          lineNumber = this.line.getNumber(),
          content = significantTokenContent + '[' + significantTokenType + '] (' + lineNumber + ')';

      return content;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJzaWduaWZpY2FudFRva2VuIiwibGluZSIsImNoaWxkTm9kZXMiLCJzdGFydExpbmUiLCJlbmRMaW5lIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJnZXRUeXBlIiwic2lnbmlmaWNhbnRUb2tlbkNvbnRlbnQiLCJnZXRDb250ZW50IiwibGluZU51bWJlciIsImdldE51bWJlciIsImNvbnRlbnQiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tVGVybWluYWxOb2RlIiwicGFyc2VUcmVlIiwiQ2xhc3MiLCJnZXRMaW5lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLHdCQUF3QkMsUUFBUSxrQ0FBUixDQUE1Qjs7SUFFTUMsWTtBQUNKLHdCQUFZQyxjQUFaLEVBQTRCQyxnQkFBNUIsRUFBOENDLElBQTlDLEVBQW9EO0FBQUE7O0FBQ2xELFNBQUtGLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O3dDQUVtQjtBQUNsQixhQUFPLEtBQUtGLGNBQVo7QUFDRDs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUtDLGdCQUFaO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQUlFLGFBQWEsRUFBakIsQ0FEYyxDQUNROztBQUV0QixhQUFPQSxVQUFQO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQUlDLFlBQVksS0FBS0YsSUFBckIsQ0FEYSxDQUNjOztBQUUzQixhQUFPRSxTQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQUlDLFVBQVUsS0FBS0gsSUFBbkIsQ0FEVyxDQUNjOztBQUV6QixhQUFPRyxPQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQUlDLHVCQUF1QixLQUFLTCxnQkFBTCxDQUFzQk0sT0FBdEIsRUFBM0I7QUFBQSxVQUNJQywwQkFBMEIsS0FBS1AsZ0JBQUwsQ0FBc0JRLFVBQXRCLEVBRDlCO0FBQUEsVUFFSUMsYUFBYSxLQUFLUixJQUFMLENBQVVTLFNBQVYsRUFGakI7QUFBQSxVQUdJQyxVQUFhSix1QkFBYixTQUF3Q0Ysb0JBQXhDLFdBQWtFSSxVQUFsRSxNQUhKOztBQUtBLGFBQU9FLE9BQVA7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUMsZUFBZSxJQUFuQjtBQUFBLFVBQTBCO0FBQ3RCQyw4QkFBd0JqQixzQkFBc0JrQixnQkFBdEIsQ0FBdUNGLFlBQXZDLENBRDVCO0FBQUEsVUFFSUcsWUFBWUYscUJBRmhCLENBRGEsQ0FHMkI7O0FBRXhDLGFBQU9FLFNBQVA7QUFDRDs7OzBEQUU0Q2hCLGMsRUFBZ0JDLGdCLEVBQXdDO0FBQUEsVUFBdEJnQixLQUFzQix1RUFBZGxCLFlBQWM7O0FBQ25HLFVBQUlHLE9BQU9ELGlCQUFpQmlCLE9BQWpCLEVBQVg7QUFBQSxVQUNJTCxlQUFlLElBQUlJLEtBQUosQ0FBVWpCLGNBQVYsRUFBMEJDLGdCQUExQixFQUE0Q0MsSUFBNUMsQ0FEbkI7O0FBR0EsYUFBT1csWUFBUDtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQnJCLFlBQWpCIiwiZmlsZSI6InRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vLi4vYm5mL3BhcnNlVHJlZS90ZXJtaW5hbE5vZGUnKTtcblxuY2xhc3MgVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbk5hbWUsIHNpZ25pZmljYW50VG9rZW4sIGxpbmUpIHtcbiAgICB0aGlzLnByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWU7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICB9XG5cbiAgZ2V0UHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdGlvbk5hbWU7XG4gIH1cblxuICBnZXRTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gW107ICAvLy9cbiAgICBcbiAgICByZXR1cm4gY2hpbGROb2RlcztcbiAgfVxuICBcbiAgZ2V0U3RhcnRMaW5lKCkge1xuICAgIHZhciBzdGFydExpbmUgPSB0aGlzLmxpbmU7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXJ0TGluZTtcbiAgfVxuXG4gIGdldEVuZExpbmUoKSB7XG4gICAgdmFyIGVuZExpbmUgPSB0aGlzLmxpbmU7IC8vL1xuXG4gICAgcmV0dXJuIGVuZExpbmU7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHZhciBzaWduaWZpY2FudFRva2VuVHlwZSA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5Db250ZW50ID0gdGhpcy5zaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgbGluZU51bWJlciA9IHRoaXMubGluZS5nZXROdW1iZXIoKSxcbiAgICAgICAgY29udGVudCA9IGAke3NpZ25pZmljYW50VG9rZW5Db250ZW50fVske3NpZ25pZmljYW50VG9rZW5UeXBlfV0gKCR7bGluZU51bWJlcn0pYDtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIHZhciB0ZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IFRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSksXG4gICAgICAgIHBhcnNlVHJlZSA9IHRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbk5hbWVBbmRTaWduaWZpY2FudFRva2VuKHByb2R1Y3Rpb25OYW1lLCBzaWduaWZpY2FudFRva2VuLCBDbGFzcyA9IFRlcm1pbmFsTm9kZSkge1xuICAgIHZhciBsaW5lID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRMaW5lKCksXG4gICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhwcm9kdWN0aW9uTmFtZSwgc2lnbmlmaWNhbnRUb2tlbiwgbGluZSk7XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxOb2RlO1xuIl19