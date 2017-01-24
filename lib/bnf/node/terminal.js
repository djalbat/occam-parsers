'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNodeParseTree = require('../parseTree/terminalNode');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsInByb2R1Y3Rpb25OYW1lIiwiY2hpbGROb2RlcyIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwiZ2V0VHlwZSIsInNpZ25pZmljYW50VG9rZW5Db250ZW50IiwiZ2V0Q29udGVudCIsImNvbnRlbnQiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tVGVybWluYWxOb2RlIiwicGFyc2VUcmVlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLHdCQUF3QkMsUUFBUSwyQkFBUixDQUE1Qjs7SUFFTUMsWTtBQUNKLHdCQUFZQyxnQkFBWixFQUFxRDtBQUFBLFFBQXZCQyxjQUF1Qix1RUFBTixJQUFNOztBQUFBOztBQUNuRCxTQUFLRCxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDRDs7OztvQ0FFZTtBQUNkLFVBQUlDLGFBQWEsRUFBakIsQ0FEYyxDQUNROztBQUV0QixhQUFPQSxVQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsYUFBTyxLQUFLRCxjQUFaO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQUlFLHVCQUF1QixLQUFLSCxnQkFBTCxDQUFzQkksT0FBdEIsRUFBM0I7QUFBQSxVQUNJQywwQkFBMEIsS0FBS0wsZ0JBQUwsQ0FBc0JNLFVBQXRCLEVBRDlCO0FBQUEsVUFFSUMsVUFBYUYsdUJBQWIsU0FBd0NGLG9CQUF4QyxNQUZKLENBRFcsQ0FHMEQ7O0FBRXJFLGFBQU9JLE9BQVA7QUFDRDs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUtQLGdCQUFaO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQUlRLGVBQWUsSUFBbkI7QUFBQSxVQUEwQjtBQUN0QkMsOEJBQXdCWixzQkFBc0JhLGdCQUF0QixDQUF1Q0YsWUFBdkMsQ0FENUI7QUFBQSxVQUVJRyxZQUFZRixxQkFGaEIsQ0FEYSxDQUcyQjs7QUFFeEMsYUFBT0UsU0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmQsWUFBakIiLCJmaWxlIjoidGVybWluYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUvdGVybWluYWxOb2RlJyk7XG5cbmNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW4sIHByb2R1Y3Rpb25OYW1lID0gbnVsbCkge1xuICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW47XG4gICAgdGhpcy5wcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lO1xuICB9XG4gIFxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gW107ICAvLy9cbiAgICBcbiAgICByZXR1cm4gY2hpbGROb2RlcztcbiAgfVxuICBcbiAgZ2V0UHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdGlvbk5hbWU7XG4gIH1cbiAgXG4gIGdldENvbnRlbnQoKSB7XG4gICAgdmFyIHNpZ25pZmljYW50VG9rZW5UeXBlID0gdGhpcy5zaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbkNvbnRlbnQgPSB0aGlzLnNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICBjb250ZW50ID0gYCR7c2lnbmlmaWNhbnRUb2tlbkNvbnRlbnR9WyR7c2lnbmlmaWNhbnRUb2tlblR5cGV9XWA7IC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBnZXRTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIGdldFBhcnNlVHJlZSgpIHtcbiAgICB2YXIgdGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBUZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUpLFxuICAgICAgICBwYXJzZVRyZWUgPSB0ZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbE5vZGU7XG4iXX0=