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
    key: 'setRuleName',
    value: function setRuleName(ruleName) {
      this.ruleName = ruleName;
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
    key: 'fromRuleNameAndChildNodes',
    value: function fromRuleNameAndChildNodes(Class, ruleName, childNodes) {
      if (childNodes === undefined) {
        childNodes = ruleName;
        ruleName = Class;
        Class = NonTerminalNode;
      }

      var childNodesLength = childNodes.length;

      if (childNodesLength === 0) {
        throw new Error('There are no child nodes at rule \'' + ruleName + '\'');
      }

      var nonTerminalNode = new Class(ruleName, childNodes);

      return nonTerminalNode;
    }
  }]);

  return NonTerminalNode;
}();

module.exports = NonTerminalNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmaXJzdCIsImZvcndhcmRzU29tZSIsImJhY2t3YXJkc1NvbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJ0ZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJjaGlsZE5vZGUiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwibnVsbGlmaWVkIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Q2hpbGROb2RlIiwiY2hpbGROb2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVFcHNpbG9uTm9kZSIsImlzRXBzaWxvbk5vZGUiLCJ0b2tlbnMiLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIiwicGFyc2VUcmVlIiwiQ2xhc3MiLCJ1bmRlZmluZWQiLCJFcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxpQkFBaUJDLFFBQVEsdUJBQVIsQ0FBdkI7QUFBQSxJQUNNQywyQkFBMkJELFFBQVEsOEJBQVIsQ0FEakM7O0lBR1FFLEssR0FBdUNILGMsQ0FBdkNHLEs7SUFBT0MsWSxHQUFnQ0osYyxDQUFoQ0ksWTtJQUFjQyxhLEdBQWtCTCxjLENBQWxCSyxhOztJQUV2QkMsZTtBQUNKLDJCQUFZQyxRQUFaLEVBQXNCQyxVQUF0QixFQUFrQztBQUFBOztBQUNoQyxTQUFLRCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0Q7Ozs7cUNBRWdCO0FBQ2YsVUFBTUMsZUFBZSxLQUFyQjs7QUFFQSxhQUFPQSxZQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBTUMsa0JBQWtCLElBQXhCOztBQUVBLGFBQU9BLGVBQVA7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLSCxRQUFaO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0MsVUFBWjtBQUNEOzs7K0NBRTBCO0FBQ3pCLFVBQUlHLHdCQUF3QixJQUE1Qjs7QUFFQVAsbUJBQWEsS0FBS0ksVUFBbEIsRUFBOEIsVUFBU0ksU0FBVCxFQUFvQjtBQUNoREQsZ0NBQXdCQyxVQUFVQyx3QkFBVixFQUF4Qjs7QUFFQSxZQUFJRiwwQkFBMEIsSUFBOUIsRUFBb0M7QUFDbEMsaUJBQU8sSUFBUDtBQUNEO0FBQ0YsT0FORDs7QUFRQSxhQUFPQSxxQkFBUDtBQUNEOzs7OENBRXlCO0FBQ3hCLFVBQUlHLHVCQUF1QixJQUEzQjs7QUFFQVQsb0JBQWMsS0FBS0csVUFBbkIsRUFBK0IsVUFBU0ksU0FBVCxFQUFvQjtBQUNqREUsK0JBQXVCRixVQUFVRyx1QkFBVixFQUF2Qjs7QUFFQSxZQUFJRCx5QkFBeUIsSUFBN0IsRUFBbUM7QUFDakMsaUJBQU8sSUFBUDtBQUNEO0FBQ0YsT0FORDs7QUFRQSxhQUFPQSxvQkFBUDtBQUNEOzs7a0NBRWE7QUFDWixVQUFJRSxZQUFZLEtBQWhCOztBQUVBLFVBQU1DLG1CQUFtQixLQUFLVCxVQUFMLENBQWdCVSxNQUF6Qzs7QUFFQSxVQUFJRCxxQkFBcUIsQ0FBekIsRUFBNEI7QUFDMUIsWUFBTUUsaUJBQWlCaEIsTUFBTSxLQUFLSyxVQUFYLENBQXZCO0FBQUEsWUFDTUksWUFBWU8sY0FEbEI7QUFBQSxZQUNrQztBQUM1QkMsZ0NBQXdCUixVQUFVUyxjQUFWLEVBRjlCOztBQUlBLFlBQUlELHFCQUFKLEVBQTJCO0FBQ3pCLGNBQU1YLGVBQWVHLFNBQXJCO0FBQUEsY0FBZ0M7QUFDMUJVLG9DQUEwQmIsYUFBYWMsYUFBYixFQURoQzs7QUFHQVAsc0JBQVlNLHVCQUFaLENBSnlCLENBSVk7QUFDdEM7QUFDRjs7QUFFRCxhQUFPTixTQUFQO0FBQ0Q7OztnQ0FFV1QsUSxFQUFVO0FBQ3BCLFdBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7OztrQ0FFYUMsVSxFQUFZO0FBQ3hCLFdBQUtBLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0Q7OztnQ0FFV2dCLE0sRUFBUTtBQUNsQixVQUFNZCxrQkFBa0IsSUFBeEI7QUFBQSxVQUErQjtBQUN6QmUsaUNBQTJCdkIseUJBQXlCd0IsNEJBQXpCLENBQXNEaEIsZUFBdEQsRUFBdUVjLE1BQXZFLENBRGpDO0FBQUEsVUFFTUcsWUFBWUYsd0JBRmxCLENBRGtCLENBRzJCOztBQUU3QyxhQUFPRSxTQUFQO0FBQ0Q7Ozs4Q0FFZ0NDLEssRUFBT3JCLFEsRUFBVUMsVSxFQUFZO0FBQzVELFVBQUlBLGVBQWVxQixTQUFuQixFQUE4QjtBQUM1QnJCLHFCQUFhRCxRQUFiO0FBQ0FBLG1CQUFXcUIsS0FBWDtBQUNBQSxnQkFBUXRCLGVBQVI7QUFDRDs7QUFFRCxVQUFNVyxtQkFBbUJULFdBQVdVLE1BQXBDOztBQUVBLFVBQUlELHFCQUFxQixDQUF6QixFQUE0QjtBQUMxQixjQUFNLElBQUlhLEtBQUoseUNBQStDdkIsUUFBL0MsUUFBTjtBQUNEOztBQUVELFVBQU1HLGtCQUFrQixJQUFJa0IsS0FBSixDQUFVckIsUUFBVixFQUFvQkMsVUFBcEIsQ0FBeEI7O0FBRUEsYUFBT0UsZUFBUDtBQUNEOzs7Ozs7QUFHSHFCLE9BQU9DLE9BQVAsR0FBaUIxQixlQUFqQiIsImZpbGUiOiJub25UZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZS9ub25UZXJtaW5hbE5vZGUnKTtcblxuY29uc3QgeyBmaXJzdCwgZm9yd2FyZHNTb21lLCBiYWNrd2FyZHNTb21lIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBmb3J3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCBmdW5jdGlvbihjaGlsZE5vZGUpIHtcbiAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IGNoaWxkTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgICAgaWYgKGZpcnN0U2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaXJzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBsZXQgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgYmFja3dhcmRzU29tZSh0aGlzLmNoaWxkTm9kZXMsIGZ1bmN0aW9uKGNoaWxkTm9kZSkge1xuICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBjaGlsZE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgICAgaWYgKGxhc3RTaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBpc051bGxpZmllZCgpIHtcbiAgICBsZXQgbnVsbGlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KHRoaXMuY2hpbGROb2RlcyksXG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVUZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGVFcHNpbG9uTm9kZSA9IHRlcm1pbmFsTm9kZS5pc0Vwc2lsb25Ob2RlKCk7XG5cbiAgICAgICAgbnVsbGlmaWVkID0gdGVybWluYWxOb2RlRXBzaWxvbk5vZGU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsaWZpZWQ7XG4gIH1cblxuICBzZXRSdWxlTmFtZShydWxlTmFtZSkge1xuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcbiAgfVxuXG4gIHNldENoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gIH1cbiAgXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7XG4gICAgaWYgKGNoaWxkTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGROb2RlcyA9IHJ1bGVOYW1lO1xuICAgICAgcnVsZU5hbWUgPSBDbGFzcztcbiAgICAgIENsYXNzID0gTm9uVGVybWluYWxOb2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGFyZSBubyBjaGlsZCBub2RlcyBhdCBydWxlICcke3J1bGVOYW1lfSdgKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25UZXJtaW5hbE5vZGU7XG4iXX0=