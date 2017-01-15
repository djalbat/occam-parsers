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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwiZ2V0VHlwZSIsInNpZ25pZmljYW50VG9rZW5Db250ZW50IiwiZ2V0Q29udGVudCIsImNvbnRlbnQiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tVGVybWluYWxOb2RlIiwicGFyc2VUcmVlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLHdCQUF3QkMsUUFBUSwyQkFBUixDQUE1Qjs7SUFFTUMsWTtBQUNKLHdCQUFZQyxnQkFBWixFQUE4QjtBQUFBOztBQUM1QixTQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxVQUFJQyx1QkFBdUIsS0FBS0QsZ0JBQUwsQ0FBc0JFLE9BQXRCLEVBQTNCO0FBQUEsVUFDSUMsMEJBQTBCLEtBQUtILGdCQUFMLENBQXNCSSxVQUF0QixFQUQ5QjtBQUFBLFVBRUlDLFVBQWFGLHVCQUFiLFNBQXdDRixvQkFBeEMsTUFGSixDQURXLENBRzBEOztBQUVyRSxhQUFPSSxPQUFQO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsYUFBTyxLQUFLTCxnQkFBWjtBQUNEOzs7bUNBRWM7QUFDYixVQUFJTSxlQUFlLElBQW5CO0FBQUEsVUFBMEI7QUFDdEJDLDhCQUF3QlYsc0JBQXNCVyxnQkFBdEIsQ0FBdUNGLFlBQXZDLENBRDVCO0FBQUEsVUFFSUcsWUFBWUYscUJBRmhCLENBRGEsQ0FHMkI7O0FBRXhDLGFBQU9FLFNBQVA7QUFDRDs7OzZCQUVRLENBRVI7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCWixZQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZS90ZXJtaW5hbE5vZGUnKTtcblxuY2xhc3MgVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3Ioc2lnbmlmaWNhbnRUb2tlbikge1xuICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIGdldENvbnRlbnQoKSB7XG4gICAgdmFyIHNpZ25pZmljYW50VG9rZW5UeXBlID0gdGhpcy5zaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbkNvbnRlbnQgPSB0aGlzLnNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICBjb250ZW50ID0gYCR7c2lnbmlmaWNhbnRUb2tlbkNvbnRlbnR9WyR7c2lnbmlmaWNhbnRUb2tlblR5cGV9XWA7IC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBnZXRTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIGdldFBhcnNlVHJlZSgpIHtcbiAgICB2YXIgdGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBUZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUpLFxuICAgICAgICBwYXJzZVRyZWUgPSB0ZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cbiAgXG4gIHVwZGF0ZSgpIHtcbiAgICBcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsTm9kZTtcbiJdfQ==