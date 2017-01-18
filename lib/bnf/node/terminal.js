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
    key: 'getChildNodes',
    value: function getChildNodes() {
      var childNodes = []; ///

      return childNodes;
    }
  }, {
    key: 'getProductionName',
    value: function getProductionName() {
      var productionName = null; ///

      return productionName;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      var significantTokenType = this.significantToken.getType(),
          significantTokenContent = this.significantToken.getContent(),
          content = significantTokenContent + '[' + significantTokenType + ']'; ///

      return content;
    }
  }, {
    key: 'getSignificantToken',
    value: function getSignificantToken() {
      return this.significantToken;
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
  }, {
    key: 'update',
    value: function update() {}
  }]);

  return TerminalNode;
}();

module.exports = TerminalNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImNoaWxkTm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwiZ2V0VHlwZSIsInNpZ25pZmljYW50VG9rZW5Db250ZW50IiwiZ2V0Q29udGVudCIsImNvbnRlbnQiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tVGVybWluYWxOb2RlIiwicGFyc2VUcmVlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLHdCQUF3QkMsUUFBUSwyQkFBUixDQUE1Qjs7SUFFTUMsWTtBQUNKLHdCQUFZQyxnQkFBWixFQUE4QjtBQUFBOztBQUM1QixTQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7Ozs7b0NBRWU7QUFDZCxVQUFJQyxhQUFhLEVBQWpCLENBRGMsQ0FDUTs7QUFFdEIsYUFBT0EsVUFBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQUlDLGlCQUFpQixJQUFyQixDQURrQixDQUNVOztBQUU1QixhQUFPQSxjQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQUlDLHVCQUF1QixLQUFLSCxnQkFBTCxDQUFzQkksT0FBdEIsRUFBM0I7QUFBQSxVQUNJQywwQkFBMEIsS0FBS0wsZ0JBQUwsQ0FBc0JNLFVBQXRCLEVBRDlCO0FBQUEsVUFFSUMsVUFBYUYsdUJBQWIsU0FBd0NGLG9CQUF4QyxNQUZKLENBRFcsQ0FHMEQ7O0FBRXJFLGFBQU9JLE9BQVA7QUFDRDs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUtQLGdCQUFaO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQUlRLGVBQWUsSUFBbkI7QUFBQSxVQUEwQjtBQUN0QkMsOEJBQXdCWixzQkFBc0JhLGdCQUF0QixDQUF1Q0YsWUFBdkMsQ0FENUI7QUFBQSxVQUVJRyxZQUFZRixxQkFGaEIsQ0FEYSxDQUcyQjs7QUFFeEMsYUFBT0UsU0FBUDtBQUNEOzs7NkJBRVEsQ0FFUjs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJkLFlBQWpCIiwiZmlsZSI6InRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZScpO1xuXG5jbGFzcyBUZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihzaWduaWZpY2FudFRva2VuKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuICBcbiAgZ2V0Q2hpbGROb2RlcygpIHtcbiAgICB2YXIgY2hpbGROb2RlcyA9IFtdOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIGNoaWxkTm9kZXM7XG4gIH1cbiAgXG4gIGdldFByb2R1Y3Rpb25OYW1lKCkge1xuICAgIHZhciBwcm9kdWN0aW9uTmFtZSA9IG51bGw7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gcHJvZHVjdGlvbk5hbWU7XG4gIH1cbiAgXG4gIGdldENvbnRlbnQoKSB7XG4gICAgdmFyIHNpZ25pZmljYW50VG9rZW5UeXBlID0gdGhpcy5zaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbkNvbnRlbnQgPSB0aGlzLnNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICBjb250ZW50ID0gYCR7c2lnbmlmaWNhbnRUb2tlbkNvbnRlbnR9WyR7c2lnbmlmaWNhbnRUb2tlblR5cGV9XWA7IC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBnZXRTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIGdldFBhcnNlVHJlZSgpIHtcbiAgICB2YXIgdGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBUZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUpLFxuICAgICAgICBwYXJzZVRyZWUgPSB0ZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsTm9kZTtcbiJdfQ==