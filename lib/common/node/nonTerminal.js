'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('../../utilities/array'),
    NonTerminalNodeParseTree = require('../parseTree/nonTerminalNode');

var first = arrayUtilities.first,
    forwardsSome = arrayUtilities.forwardsSome,
    backwardsSome = arrayUtilities.backwardsSome;

var NonTerminalNode = function () {
  function NonTerminalNode(ruleName, parentNode, childNodes) {
    _classCallCheck(this, NonTerminalNode);

    this.ruleName = ruleName;
    this.parentNode = parentNode;
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
    key: 'getParentNode',
    value: function getParentNode() {
      return this.parentNode;
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
    key: 'setRuleName',
    value: function setRuleName(ruleName) {
      this.ruleName = ruleName;
    }
  }, {
    key: 'setParentNode',
    value: function setParentNode(parentNode) {
      this.parentNode = parentNode;
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
        Class = NonTerminalNode; ///
      }

      var childNodesLength = childNodes.length;

      if (childNodesLength === 0) {
        throw new Error('There are no child nodes at rule \'' + ruleName + '\'');
      }

      var parentNode = undefined,
          ///
      nonTerminalNode = new Class(ruleName, parentNode, childNodes);

      return nonTerminalNode;
    }
  }]);

  return NonTerminalNode;
}();

module.exports = NonTerminalNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmaXJzdCIsImZvcndhcmRzU29tZSIsImJhY2t3YXJkc1NvbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwidGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwiY2hpbGROb2RlIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbiIsInRva2VucyIsIm5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJwYXJzZVRyZWUiLCJDbGFzcyIsInVuZGVmaW5lZCIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJFcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxpQkFBaUJDLFFBQVEsdUJBQVIsQ0FBdkI7QUFBQSxJQUNNQywyQkFBMkJELFFBQVEsOEJBQVIsQ0FEakM7O0lBR1FFLEssR0FBdUNILGMsQ0FBdkNHLEs7SUFBT0MsWSxHQUFnQ0osYyxDQUFoQ0ksWTtJQUFjQyxhLEdBQWtCTCxjLENBQWxCSyxhOztJQUV2QkMsZTtBQUNKLDJCQUFZQyxRQUFaLEVBQXNCQyxVQUF0QixFQUFrQ0MsVUFBbEMsRUFBOEM7QUFBQTs7QUFDNUMsU0FBS0YsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0Q7Ozs7cUNBRWdCO0FBQ2YsVUFBTUMsZUFBZSxLQUFyQjs7QUFFQSxhQUFPQSxZQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBTUMsa0JBQWtCLElBQXhCOztBQUVBLGFBQU9BLGVBQVA7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLSixRQUFaO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0MsVUFBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7OytDQUUwQjtBQUN6QixVQUFJRyx3QkFBd0IsSUFBNUI7O0FBRUFSLG1CQUFhLEtBQUtLLFVBQWxCLEVBQThCLFVBQVNJLFNBQVQsRUFBb0I7QUFDaERELGdDQUF3QkMsVUFBVUMsd0JBQVYsRUFBeEI7O0FBRUEsWUFBSUYsMEJBQTBCLElBQTlCLEVBQW9DO0FBQ2xDLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BTkQ7O0FBUUEsYUFBT0EscUJBQVA7QUFDRDs7OzhDQUV5QjtBQUN4QixVQUFJRyx1QkFBdUIsSUFBM0I7O0FBRUFWLG9CQUFjLEtBQUtJLFVBQW5CLEVBQStCLFVBQVNJLFNBQVQsRUFBb0I7QUFDakRFLCtCQUF1QkYsVUFBVUcsdUJBQVYsRUFBdkI7O0FBRUEsWUFBSUQseUJBQXlCLElBQTdCLEVBQW1DO0FBQ2pDLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BTkQ7O0FBUUEsYUFBT0Esb0JBQVA7QUFDRDs7O2dDQUVXUixRLEVBQVU7QUFDcEIsV0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7O2tDQUVhQyxVLEVBQVk7QUFDeEIsV0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7O2tDQUVhQyxVLEVBQVk7QUFDeEIsV0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7O2dDQUVXUSxNLEVBQVE7QUFDbEIsVUFBTU4sa0JBQWtCLElBQXhCO0FBQUEsVUFBK0I7QUFDekJPLGlDQUEyQmhCLHlCQUF5QmlCLDRCQUF6QixDQUFzRFIsZUFBdEQsRUFBdUVNLE1BQXZFLENBRGpDO0FBQUEsVUFFTUcsWUFBWUYsd0JBRmxCLENBRGtCLENBRzJCOztBQUU3QyxhQUFPRSxTQUFQO0FBQ0Q7Ozs4Q0FFZ0NDLEssRUFBT2QsUSxFQUFVRSxVLEVBQVk7QUFDNUQsVUFBSUEsZUFBZWEsU0FBbkIsRUFBOEI7QUFDNUJiLHFCQUFhRixRQUFiO0FBQ0FBLG1CQUFXYyxLQUFYO0FBQ0FBLGdCQUFRZixlQUFSLENBSDRCLENBR0Y7QUFDM0I7O0FBRUQsVUFBTWlCLG1CQUFtQmQsV0FBV2UsTUFBcEM7O0FBRUEsVUFBSUQscUJBQXFCLENBQXpCLEVBQTRCO0FBQzFCLGNBQU0sSUFBSUUsS0FBSix5Q0FBK0NsQixRQUEvQyxRQUFOO0FBQ0Q7O0FBRUQsVUFBTUMsYUFBYWMsU0FBbkI7QUFBQSxVQUE4QjtBQUN4Qlgsd0JBQWtCLElBQUlVLEtBQUosQ0FBVWQsUUFBVixFQUFvQkMsVUFBcEIsRUFBZ0NDLFVBQWhDLENBRHhCOztBQUdBLGFBQU9FLGVBQVA7QUFDRDs7Ozs7O0FBR0hlLE9BQU9DLE9BQVAsR0FBaUJyQixlQUFqQiIsImZpbGUiOiJub25UZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZS9ub25UZXJtaW5hbE5vZGUnKTtcblxuY29uc3QgeyBmaXJzdCwgZm9yd2FyZHNTb21lLCBiYWNrd2FyZHNTb21lIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gICAgdGhpcy5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG5cbiAgaXNUZXJtaW5hbE5vZGUoKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgaXNOb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdHJ1ZTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldFBhcmVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBsZXQgZmlyc3RTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGZvcndhcmRzU29tZSh0aGlzLmNoaWxkTm9kZXMsIGZ1bmN0aW9uKGNoaWxkTm9kZSkge1xuICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuID0gY2hpbGROb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgICBpZiAoZmlyc3RTaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGxldCBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBiYWNrd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgZnVuY3Rpb24oY2hpbGROb2RlKSB7XG4gICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGNoaWxkTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgICBpZiAobGFzdFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIHNldFJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICB9XG5cbiAgc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKSB7XG4gICAgdGhpcy5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgfVxuXG4gIHNldENoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gIH1cbiAgXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7XG4gICAgaWYgKGNoaWxkTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGROb2RlcyA9IHJ1bGVOYW1lO1xuICAgICAgcnVsZU5hbWUgPSBDbGFzcztcbiAgICAgIENsYXNzID0gTm9uVGVybWluYWxOb2RlOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgYXJlIG5vIGNoaWxkIG5vZGVzIGF0IHJ1bGUgJyR7cnVsZU5hbWV9J2ApO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdW5kZWZpbmVkLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblRlcm1pbmFsTm9kZTtcbiJdfQ==