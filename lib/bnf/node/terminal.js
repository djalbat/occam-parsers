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
      var childNodes = null; ///

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImNoaWxkTm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwiZ2V0VHlwZSIsInNpZ25pZmljYW50VG9rZW5Db250ZW50IiwiZ2V0Q29udGVudCIsImNvbnRlbnQiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tVGVybWluYWxOb2RlIiwicGFyc2VUcmVlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLHdCQUF3QkMsUUFBUSwyQkFBUixDQUE1Qjs7SUFFTUMsWTtBQUNKLHdCQUFZQyxnQkFBWixFQUE4QjtBQUFBOztBQUM1QixTQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7Ozs7b0NBRWU7QUFDZCxVQUFJQyxhQUFhLElBQWpCLENBRGMsQ0FDVTs7QUFFeEIsYUFBT0EsVUFBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQUlDLGlCQUFpQixJQUFyQixDQURrQixDQUNVOztBQUU1QixhQUFPQSxjQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQUlDLHVCQUF1QixLQUFLSCxnQkFBTCxDQUFzQkksT0FBdEIsRUFBM0I7QUFBQSxVQUNJQywwQkFBMEIsS0FBS0wsZ0JBQUwsQ0FBc0JNLFVBQXRCLEVBRDlCO0FBQUEsVUFFSUMsVUFBYUYsdUJBQWIsU0FBd0NGLG9CQUF4QyxNQUZKLENBRFcsQ0FHMEQ7O0FBRXJFLGFBQU9JLE9BQVA7QUFDRDs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUtQLGdCQUFaO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQUlRLGVBQWUsSUFBbkI7QUFBQSxVQUEwQjtBQUN0QkMsOEJBQXdCWixzQkFBc0JhLGdCQUF0QixDQUF1Q0YsWUFBdkMsQ0FENUI7QUFBQSxVQUVJRyxZQUFZRixxQkFGaEIsQ0FEYSxDQUcyQjs7QUFFeEMsYUFBT0UsU0FBUDtBQUNEOzs7NkJBRVEsQ0FFUjs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJkLFlBQWpCIiwiZmlsZSI6InRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZScpO1xuXG5jbGFzcyBUZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihzaWduaWZpY2FudFRva2VuKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuICBcbiAgZ2V0Q2hpbGROb2RlcygpIHtcbiAgICB2YXIgY2hpbGROb2RlcyA9IG51bGw7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gY2hpbGROb2RlcztcbiAgfVxuICBcbiAgZ2V0UHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgdmFyIHByb2R1Y3Rpb25OYW1lID0gbnVsbDsgIC8vL1xuICAgIFxuICAgIHJldHVybiBwcm9kdWN0aW9uTmFtZTtcbiAgfVxuICBcbiAgZ2V0Q29udGVudCgpIHtcbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSB0aGlzLnNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuQ29udGVudCA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgIGNvbnRlbnQgPSBgJHtzaWduaWZpY2FudFRva2VuQ29udGVudH1bJHtzaWduaWZpY2FudFRva2VuVHlwZX1dYDsgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGdldFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuICBcbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIHZhciB0ZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IFRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSksXG4gICAgICAgIHBhcnNlVHJlZSA9IHRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcblxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxOb2RlO1xuIl19