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
    key: 'query',
    value: function query(expression, index) {
      var node = expression === '*' ? this : null;

      return node;
    }
  }, {
    key: 'update',
    value: function update() {}
  }]);

  return TerminalNode;
}();

module.exports = TerminalNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwiZ2V0VHlwZSIsInNpZ25pZmljYW50VG9rZW5Db250ZW50IiwiZ2V0Q29udGVudCIsImNvbnRlbnQiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tVGVybWluYWxOb2RlIiwicGFyc2VUcmVlIiwiZXhwcmVzc2lvbiIsImluZGV4Iiwibm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSx3QkFBd0JDLFFBQVEsMkJBQVIsQ0FBNUI7O0lBRU1DLFk7QUFDSix3QkFBWUMsZ0JBQVosRUFBOEI7QUFBQTs7QUFDNUIsU0FBS0EsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNEOzs7O2lDQUVZO0FBQ1gsVUFBSUMsdUJBQXVCLEtBQUtELGdCQUFMLENBQXNCRSxPQUF0QixFQUEzQjtBQUFBLFVBQ0lDLDBCQUEwQixLQUFLSCxnQkFBTCxDQUFzQkksVUFBdEIsRUFEOUI7QUFBQSxVQUVJQyxVQUFhRix1QkFBYixTQUF3Q0Ysb0JBQXhDLE1BRkosQ0FEVyxDQUcwRDs7QUFFckUsYUFBT0ksT0FBUDtBQUNEOzs7MENBRXFCO0FBQ3BCLGFBQU8sS0FBS0wsZ0JBQVo7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSU0sZUFBZSxJQUFuQjtBQUFBLFVBQTBCO0FBQ3RCQyw4QkFBd0JWLHNCQUFzQlcsZ0JBQXRCLENBQXVDRixZQUF2QyxDQUQ1QjtBQUFBLFVBRUlHLFlBQVlGLHFCQUZoQixDQURhLENBRzJCOztBQUV4QyxhQUFPRSxTQUFQO0FBQ0Q7OzswQkFFS0MsVSxFQUFZQyxLLEVBQU87QUFDdkIsVUFBSUMsT0FBUUYsZUFBZSxHQUFoQixHQUNHLElBREgsR0FFSyxJQUZoQjs7QUFJQSxhQUFPRSxJQUFQO0FBQ0Q7Ozs2QkFFUSxDQUVSOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmYsWUFBakIiLCJmaWxlIjoidGVybWluYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUvdGVybWluYWxOb2RlJyk7XG5cbmNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW4pIHtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBnZXRDb250ZW50KCkge1xuICAgIHZhciBzaWduaWZpY2FudFRva2VuVHlwZSA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5Db250ZW50ID0gdGhpcy5zaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgY29udGVudCA9IGAke3NpZ25pZmljYW50VG9rZW5Db250ZW50fVske3NpZ25pZmljYW50VG9rZW5UeXBlfV1gOyAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBnZXRQYXJzZVRyZWUoKSB7XG4gICAgdmFyIHRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21UZXJtaW5hbE5vZGUodGVybWluYWxOb2RlKSxcbiAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgcXVlcnkoZXhwcmVzc2lvbiwgaW5kZXgpIHtcbiAgICB2YXIgbm9kZSA9IChleHByZXNzaW9uID09PSAnKicpID9cbiAgICAgICAgICAgICAgICAgIHRoaXMgOlxuICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsTm9kZTtcbiJdfQ==