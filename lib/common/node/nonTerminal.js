'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('../../utilities/array'),
    NonTerminalNodeParseTree = require('../parseTree/nonTerminalNode');

var first = arrayUtilities.first,
    forwardsSome = arrayUtilities.forwardsSome,
    backwardsSome = arrayUtilities.backwardsSome;

var NonTerminalNode = function () {
  function NonTerminalNode(ruleName, childNodes) {
    _classCallCheck(this, NonTerminalNode);

    this.ruleName = ruleName;
    this.childNodes = childNodes;
  }

  _createClass(NonTerminalNode, [{
    key: 'isTerminalNode',
    value: function isTerminalNode() {
      var terminalNode = false;

      return terminalNode;
    }
  }, {
    key: 'isNonTerminalNode',
    value: function isNonTerminalNode() {
      var nonTerminalNode = true;

      return nonTerminalNode;
    }
  }, {
    key: 'getRuleName',
    value: function getRuleName() {
      return this.ruleName;
    }
  }, {
    key: 'getChildNodes',
    value: function getChildNodes() {
      return this.childNodes;
    }
  }, {
    key: 'getFirstSignificantToken',
    value: function getFirstSignificantToken() {
      var firstSignificantToken = null;

      forwardsSome(this.childNodes, function (childNode) {
        firstSignificantToken = childNode.getFirstSignificantToken();

        if (firstSignificantToken !== null) {
          return true;
        }
      });

      return firstSignificantToken;
    }
  }, {
    key: 'getLastSignificantToken',
    value: function getLastSignificantToken() {
      var lastSignificantToken = null;

      backwardsSome(this.childNodes, function (childNode) {
        lastSignificantToken = childNode.getLastSignificantToken();

        if (lastSignificantToken !== null) {
          return true;
        }
      });

      return lastSignificantToken;
    }
  }, {
    key: 'isNullified',
    value: function isNullified() {
      var nullified = false;

      var childNodesLength = this.childNodes.length;

      if (childNodesLength === 1) {
        var firstChildNode = first(this.childNodes),
            childNode = firstChildNode,
            ///
        childNodeTerminalNode = childNode.isTerminalNode();

        if (childNodeTerminalNode) {
          var terminalNode = childNode,
              ///
          terminalNodeEpsilonNode = terminalNode.isEpsilonNode();

          nullified = terminalNodeEpsilonNode; ///
        }
      }

      return nullified;
    }
  }, {
    key: 'setChildNodes',
    value: function setChildNodes(childNodes) {
      this.childNodes = childNodes;
    }
  }, {
    key: 'asParseTree',
    value: function asParseTree(tokens) {
      var nonTerminalNode = this,
          ///
      nonTerminalNodeParseTree = NonTerminalNodeParseTree.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens),
          parseTree = nonTerminalNodeParseTree; ///

      return parseTree;
    }
  }], [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(Class, nodes, ruleName) {
      if (ruleName === undefined) {
        ruleName = nodes;
        nodes = Class;
        Class = NonTerminalNode;
      }

      var childNodes = nodes,
          ///
      nonTerminalNode = Class.fromRuleNameAndChildNodes(Class, ruleName, childNodes);

      return nonTerminalNode;
    }
  }, {
    key: 'fromRuleNameAndChildNodes',
    value: function fromRuleNameAndChildNodes(Class, ruleName, childNodes) {
      if (childNodes === undefined) {
        childNodes = ruleName;
        ruleName = Class;
        Class = NonTerminalNode;
      }

      var nonTerminalNode = new Class(ruleName, childNodes);

      return nonTerminalNode;
    }
  }]);

  return NonTerminalNode;
}();

module.exports = NonTerminalNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmaXJzdCIsImZvcndhcmRzU29tZSIsImJhY2t3YXJkc1NvbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJ0ZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJjaGlsZE5vZGUiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwibnVsbGlmaWVkIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Q2hpbGROb2RlIiwiY2hpbGROb2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVFcHNpbG9uTm9kZSIsImlzRXBzaWxvbk5vZGUiLCJ0b2tlbnMiLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIiwicGFyc2VUcmVlIiwiQ2xhc3MiLCJub2RlcyIsInVuZGVmaW5lZCIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCQyxRQUFRLHVCQUFSLENBQXZCO0FBQUEsSUFDTUMsMkJBQTJCRCxRQUFRLDhCQUFSLENBRGpDOztJQUdRRSxLLEdBQXVDSCxjLENBQXZDRyxLO0lBQU9DLFksR0FBZ0NKLGMsQ0FBaENJLFk7SUFBY0MsYSxHQUFrQkwsYyxDQUFsQkssYTs7SUFFdkJDLGU7QUFDSiwyQkFBWUMsUUFBWixFQUFzQkMsVUFBdEIsRUFBa0M7QUFBQTs7QUFDaEMsU0FBS0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOzs7O3FDQUVnQjtBQUNmLFVBQU1DLGVBQWUsS0FBckI7O0FBRUEsYUFBT0EsWUFBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1DLGtCQUFrQixJQUF4Qjs7QUFFQSxhQUFPQSxlQUFQO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0gsUUFBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7OytDQUUwQjtBQUN6QixVQUFJRyx3QkFBd0IsSUFBNUI7O0FBRUFQLG1CQUFhLEtBQUtJLFVBQWxCLEVBQThCLFVBQVNJLFNBQVQsRUFBb0I7QUFDaERELGdDQUF3QkMsVUFBVUMsd0JBQVYsRUFBeEI7O0FBRUEsWUFBSUYsMEJBQTBCLElBQTlCLEVBQW9DO0FBQ2xDLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BTkQ7O0FBUUEsYUFBT0EscUJBQVA7QUFDRDs7OzhDQUV5QjtBQUN4QixVQUFJRyx1QkFBdUIsSUFBM0I7O0FBRUFULG9CQUFjLEtBQUtHLFVBQW5CLEVBQStCLFVBQVNJLFNBQVQsRUFBb0I7QUFDakRFLCtCQUF1QkYsVUFBVUcsdUJBQVYsRUFBdkI7O0FBRUEsWUFBSUQseUJBQXlCLElBQTdCLEVBQW1DO0FBQ2pDLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BTkQ7O0FBUUEsYUFBT0Esb0JBQVA7QUFDRDs7O2tDQUVhO0FBQ1osVUFBSUUsWUFBWSxLQUFoQjs7QUFFQSxVQUFNQyxtQkFBbUIsS0FBS1QsVUFBTCxDQUFnQlUsTUFBekM7O0FBRUEsVUFBSUQscUJBQXFCLENBQXpCLEVBQTRCO0FBQzFCLFlBQU1FLGlCQUFpQmhCLE1BQU0sS0FBS0ssVUFBWCxDQUF2QjtBQUFBLFlBQ01JLFlBQVlPLGNBRGxCO0FBQUEsWUFDa0M7QUFDNUJDLGdDQUF3QlIsVUFBVVMsY0FBVixFQUY5Qjs7QUFJQSxZQUFJRCxxQkFBSixFQUEyQjtBQUN6QixjQUFNWCxlQUFlRyxTQUFyQjtBQUFBLGNBQWdDO0FBQzFCVSxvQ0FBMEJiLGFBQWFjLGFBQWIsRUFEaEM7O0FBR0FQLHNCQUFZTSx1QkFBWixDQUp5QixDQUlZO0FBQ3RDO0FBQ0Y7O0FBRUQsYUFBT04sU0FBUDtBQUNEOzs7a0NBRWFSLFUsRUFBWTtBQUN4QixXQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOzs7Z0NBRVdnQixNLEVBQVE7QUFDbEIsVUFBTWQsa0JBQWtCLElBQXhCO0FBQUEsVUFBK0I7QUFDekJlLGlDQUEyQnZCLHlCQUF5QndCLDRCQUF6QixDQUFzRGhCLGVBQXRELEVBQXVFYyxNQUF2RSxDQURqQztBQUFBLFVBRU1HLFlBQVlGLHdCQUZsQixDQURrQixDQUcyQjs7QUFFN0MsYUFBT0UsU0FBUDtBQUNEOzs7eUNBRTJCQyxLLEVBQU9DLEssRUFBT3RCLFEsRUFBVTtBQUNsRCxVQUFJQSxhQUFhdUIsU0FBakIsRUFBNEI7QUFDMUJ2QixtQkFBV3NCLEtBQVg7QUFDQUEsZ0JBQVFELEtBQVI7QUFDQUEsZ0JBQVF0QixlQUFSO0FBQ0Q7O0FBRUQsVUFBTUUsYUFBYXFCLEtBQW5CO0FBQUEsVUFBMEI7QUFDcEJuQix3QkFBa0JrQixNQUFNRyx5QkFBTixDQUFnQ0gsS0FBaEMsRUFBdUNyQixRQUF2QyxFQUFpREMsVUFBakQsQ0FEeEI7O0FBR0EsYUFBT0UsZUFBUDtBQUNEOzs7OENBRWdDa0IsSyxFQUFPckIsUSxFQUFVQyxVLEVBQVk7QUFDNUQsVUFBSUEsZUFBZXNCLFNBQW5CLEVBQThCO0FBQzVCdEIscUJBQWFELFFBQWI7QUFDQUEsbUJBQVdxQixLQUFYO0FBQ0FBLGdCQUFRdEIsZUFBUjtBQUNEOztBQUVELFVBQU1JLGtCQUFrQixJQUFJa0IsS0FBSixDQUFVckIsUUFBVixFQUFvQkMsVUFBcEIsQ0FBeEI7O0FBRUEsYUFBT0UsZUFBUDtBQUNEOzs7Ozs7QUFHSHNCLE9BQU9DLE9BQVAsR0FBaUIzQixlQUFqQiIsImZpbGUiOiJub25UZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZS9ub25UZXJtaW5hbE5vZGUnKTtcblxuY29uc3QgeyBmaXJzdCwgZm9yd2FyZHNTb21lLCBiYWNrd2FyZHNTb21lIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBmb3J3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCBmdW5jdGlvbihjaGlsZE5vZGUpIHtcbiAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IGNoaWxkTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgICAgaWYgKGZpcnN0U2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaXJzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBsZXQgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgYmFja3dhcmRzU29tZSh0aGlzLmNoaWxkTm9kZXMsIGZ1bmN0aW9uKGNoaWxkTm9kZSkge1xuICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBjaGlsZE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgICAgaWYgKGxhc3RTaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBpc051bGxpZmllZCgpIHtcbiAgICBsZXQgbnVsbGlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KHRoaXMuY2hpbGROb2RlcyksXG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVUZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGVFcHNpbG9uTm9kZSA9IHRlcm1pbmFsTm9kZS5pc0Vwc2lsb25Ob2RlKCk7XG5cbiAgICAgICAgbnVsbGlmaWVkID0gdGVybWluYWxOb2RlRXBzaWxvbk5vZGU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsaWZpZWQ7XG4gIH1cblxuICBzZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG4gIFxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShDbGFzcywgbm9kZXMsIHJ1bGVOYW1lKSB7XG4gICAgaWYgKHJ1bGVOYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGVOYW1lID0gbm9kZXM7XG4gICAgICBub2RlcyA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGU7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gQ2xhc3MuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcykge1xuICAgIGlmIChjaGlsZE5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTtcbiAgICAgIHJ1bGVOYW1lID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IE5vblRlcm1pbmFsTm9kZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25UZXJtaW5hbE5vZGU7XG4iXX0=