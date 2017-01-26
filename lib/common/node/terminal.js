'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNodeParseTree = require('../../bnf/parseTree/terminalNode');

var TerminalNode = function () {
  function TerminalNode(significantToken) {
    var productionName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, TerminalNode);

    this.significantToken = significantToken;
    this.productionName = productionName;
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
      return this.productionName;
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
  }]);

  return TerminalNode;
}();

module.exports = TerminalNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsInByb2R1Y3Rpb25OYW1lIiwiY2hpbGROb2RlcyIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwiZ2V0VHlwZSIsInNpZ25pZmljYW50VG9rZW5Db250ZW50IiwiZ2V0Q29udGVudCIsImNvbnRlbnQiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tVGVybWluYWxOb2RlIiwicGFyc2VUcmVlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLHdCQUF3QkMsUUFBUSxrQ0FBUixDQUE1Qjs7SUFFTUMsWTtBQUNKLHdCQUFZQyxnQkFBWixFQUFxRDtBQUFBLFFBQXZCQyxjQUF1Qix1RUFBTixJQUFNOztBQUFBOztBQUNuRCxTQUFLRCxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDRDs7OztvQ0FFZTtBQUNkLFVBQUlDLGFBQWEsRUFBakIsQ0FEYyxDQUNROztBQUV0QixhQUFPQSxVQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsYUFBTyxLQUFLRCxjQUFaO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQUlFLHVCQUF1QixLQUFLSCxnQkFBTCxDQUFzQkksT0FBdEIsRUFBM0I7QUFBQSxVQUNJQywwQkFBMEIsS0FBS0wsZ0JBQUwsQ0FBc0JNLFVBQXRCLEVBRDlCO0FBQUEsVUFFSUMsVUFBYUYsdUJBQWIsU0FBd0NGLG9CQUF4QyxNQUZKLENBRFcsQ0FHMEQ7O0FBRXJFLGFBQU9JLE9BQVA7QUFDRDs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUtQLGdCQUFaO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQUlRLGVBQWUsSUFBbkI7QUFBQSxVQUEwQjtBQUN0QkMsOEJBQXdCWixzQkFBc0JhLGdCQUF0QixDQUF1Q0YsWUFBdkMsQ0FENUI7QUFBQSxVQUVJRyxZQUFZRixxQkFGaEIsQ0FEYSxDQUcyQjs7QUFFeEMsYUFBT0UsU0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmQsWUFBakIiLCJmaWxlIjoidGVybWluYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi8uLi9ibmYvcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZScpO1xuXG5jbGFzcyBUZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihzaWduaWZpY2FudFRva2VuLCBwcm9kdWN0aW9uTmFtZSA9IG51bGwpIHtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgfVxuICBcbiAgZ2V0Q2hpbGROb2RlcygpIHtcbiAgICB2YXIgY2hpbGROb2RlcyA9IFtdOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIGNoaWxkTm9kZXM7XG4gIH1cbiAgXG4gIGdldFByb2R1Y3Rpb25OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3Rpb25OYW1lO1xuICB9XG4gIFxuICBnZXRDb250ZW50KCkge1xuICAgIHZhciBzaWduaWZpY2FudFRva2VuVHlwZSA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5Db250ZW50ID0gdGhpcy5zaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgY29udGVudCA9IGAke3NpZ25pZmljYW50VG9rZW5Db250ZW50fVske3NpZ25pZmljYW50VG9rZW5UeXBlfV1gOyAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBnZXRQYXJzZVRyZWUoKSB7XG4gICAgdmFyIHRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21UZXJtaW5hbE5vZGUodGVybWluYWxOb2RlKSxcbiAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxOb2RlO1xuIl19