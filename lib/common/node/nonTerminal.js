'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var arrayUtilities = require('../../utilities/array'),
    NonTerminalNodeParseTree = require('../parseTree/nonTerminalNode');

var forwardsSome = arrayUtilities.forwardsSome,
    backwardsSome = arrayUtilities.backwardsSome;

var NonTerminalNode = /*#__PURE__*/function () {
  function NonTerminalNode(ruleName, parentNode, childNodes) {
    _classCallCheck(this, NonTerminalNode);

    this.ruleName = ruleName;
    this.parentNode = parentNode;
    this.childNodes = childNodes;
  }

  _createClass(NonTerminalNode, [{
    key: "isTerminalNode",
    value: function isTerminalNode() {
      var terminalNode = false;
      return terminalNode;
    }
  }, {
    key: "isNonTerminalNode",
    value: function isNonTerminalNode() {
      var nonTerminalNode = true;
      return nonTerminalNode;
    }
  }, {
    key: "getRuleName",
    value: function getRuleName() {
      return this.ruleName;
    }
  }, {
    key: "getParentNode",
    value: function getParentNode() {
      return this.parentNode;
    }
  }, {
    key: "getChildNodes",
    value: function getChildNodes() {
      return this.childNodes;
    }
  }, {
    key: "getFirstSignificantToken",
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
    key: "getLastSignificantToken",
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
    key: "setRuleName",
    value: function setRuleName(ruleName) {
      this.ruleName = ruleName;
    }
  }, {
    key: "setParentNode",
    value: function setParentNode(parentNode) {
      this.parentNode = parentNode;
    }
  }, {
    key: "setChildNodes",
    value: function setChildNodes(childNodes) {
      this.childNodes = childNodes;
    }
  }, {
    key: "asParseTree",
    value: function asParseTree(tokens) {
      var nonTerminalNode = this,
          ///
      nonTerminalNodeParseTree = NonTerminalNodeParseTree.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens),
          parseTree = nonTerminalNodeParseTree; ///

      return parseTree;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(Class, ruleName, childNodes) {
      if (childNodes === undefined) {
        childNodes = ruleName;
        ruleName = Class;
        Class = NonTerminalNode; ///
      }

      var childNodesLength = childNodes.length;

      if (childNodesLength === 0) {
        throw new Error("There are no child nodes at rule '".concat(ruleName, "'"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vblRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZvcndhcmRzU29tZSIsImJhY2t3YXJkc1NvbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwidGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwiY2hpbGROb2RlIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbiIsInRva2VucyIsIm5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJwYXJzZVRyZWUiLCJDbGFzcyIsInVuZGVmaW5lZCIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJFcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGNBQWMsR0FBR0MsT0FBTyxDQUFDLHVCQUFELENBQTlCO0FBQUEsSUFDTUMsd0JBQXdCLEdBQUdELE9BQU8sQ0FBQyw4QkFBRCxDQUR4Qzs7SUFHUUUsWSxHQUFnQ0gsYyxDQUFoQ0csWTtJQUFjQyxhLEdBQWtCSixjLENBQWxCSSxhOztJQUVoQkMsZTtBQUNKLDJCQUFZQyxRQUFaLEVBQXNCQyxVQUF0QixFQUFrQ0MsVUFBbEMsRUFBOEM7QUFBQTs7QUFDNUMsU0FBS0YsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0Q7Ozs7cUNBRWdCO0FBQ2YsVUFBTUMsWUFBWSxHQUFHLEtBQXJCO0FBRUEsYUFBT0EsWUFBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1DLGVBQWUsR0FBRyxJQUF4QjtBQUVBLGFBQU9BLGVBQVA7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLSixRQUFaO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0MsVUFBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7OytDQUUwQjtBQUN6QixVQUFJRyxxQkFBcUIsR0FBRyxJQUE1QjtBQUVBUixNQUFBQSxZQUFZLENBQUMsS0FBS0ssVUFBTixFQUFrQixVQUFTSSxTQUFULEVBQW9CO0FBQ2hERCxRQUFBQSxxQkFBcUIsR0FBR0MsU0FBUyxDQUFDQyx3QkFBVixFQUF4Qjs7QUFFQSxZQUFJRixxQkFBcUIsS0FBSyxJQUE5QixFQUFvQztBQUNsQyxpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQU5XLENBQVo7QUFRQSxhQUFPQSxxQkFBUDtBQUNEOzs7OENBRXlCO0FBQ3hCLFVBQUlHLG9CQUFvQixHQUFHLElBQTNCO0FBRUFWLE1BQUFBLGFBQWEsQ0FBQyxLQUFLSSxVQUFOLEVBQWtCLFVBQVNJLFNBQVQsRUFBb0I7QUFDakRFLFFBQUFBLG9CQUFvQixHQUFHRixTQUFTLENBQUNHLHVCQUFWLEVBQXZCOztBQUVBLFlBQUlELG9CQUFvQixLQUFLLElBQTdCLEVBQW1DO0FBQ2pDLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BTlksQ0FBYjtBQVFBLGFBQU9BLG9CQUFQO0FBQ0Q7OztnQ0FFV1IsUSxFQUFVO0FBQ3BCLFdBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7OztrQ0FFYUMsVSxFQUFZO0FBQ3hCLFdBQUtBLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0Q7OztrQ0FFYUMsVSxFQUFZO0FBQ3hCLFdBQUtBLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0Q7OztnQ0FFV1EsTSxFQUFRO0FBQ2xCLFVBQU1OLGVBQWUsR0FBRyxJQUF4QjtBQUFBLFVBQStCO0FBQ3pCTyxNQUFBQSx3QkFBd0IsR0FBR2Ysd0JBQXdCLENBQUNnQiw0QkFBekIsQ0FBc0RSLGVBQXRELEVBQXVFTSxNQUF2RSxDQURqQztBQUFBLFVBRU1HLFNBQVMsR0FBR0Ysd0JBRmxCLENBRGtCLENBRzJCOztBQUU3QyxhQUFPRSxTQUFQO0FBQ0Q7Ozs4Q0FFZ0NDLEssRUFBT2QsUSxFQUFVRSxVLEVBQVk7QUFDNUQsVUFBSUEsVUFBVSxLQUFLYSxTQUFuQixFQUE4QjtBQUM1QmIsUUFBQUEsVUFBVSxHQUFHRixRQUFiO0FBQ0FBLFFBQUFBLFFBQVEsR0FBR2MsS0FBWDtBQUNBQSxRQUFBQSxLQUFLLEdBQUdmLGVBQVIsQ0FINEIsQ0FHRjtBQUMzQjs7QUFFRCxVQUFNaUIsZ0JBQWdCLEdBQUdkLFVBQVUsQ0FBQ2UsTUFBcEM7O0FBRUEsVUFBSUQsZ0JBQWdCLEtBQUssQ0FBekIsRUFBNEI7QUFDMUIsY0FBTSxJQUFJRSxLQUFKLDZDQUErQ2xCLFFBQS9DLE9BQU47QUFDRDs7QUFFRCxVQUFNQyxVQUFVLEdBQUdjLFNBQW5CO0FBQUEsVUFBOEI7QUFDeEJYLE1BQUFBLGVBQWUsR0FBRyxJQUFJVSxLQUFKLENBQVVkLFFBQVYsRUFBb0JDLFVBQXBCLEVBQWdDQyxVQUFoQyxDQUR4QjtBQUdBLGFBQU9FLGVBQVA7QUFDRDs7Ozs7O0FBR0hlLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnJCLGVBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZScpO1xuXG5jb25zdCB7IGZvcndhcmRzU29tZSwgYmFja3dhcmRzU29tZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBnZXRQYXJlbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGU7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBmb3J3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCBmdW5jdGlvbihjaGlsZE5vZGUpIHtcbiAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IGNoaWxkTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgICAgaWYgKGZpcnN0U2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaXJzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBsZXQgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgYmFja3dhcmRzU29tZSh0aGlzLmNoaWxkTm9kZXMsIGZ1bmN0aW9uKGNoaWxkTm9kZSkge1xuICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBjaGlsZE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgICAgaWYgKGxhc3RTaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBzZXRSdWxlTmFtZShydWxlTmFtZSkge1xuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcbiAgfVxuXG4gIHNldFBhcmVudE5vZGUocGFyZW50Tm9kZSkge1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gIH1cblxuICBzZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG4gIFxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcykge1xuICAgIGlmIChjaGlsZE5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTtcbiAgICAgIHJ1bGVOYW1lID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IE5vblRlcm1pbmFsTm9kZTsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGFyZSBubyBjaGlsZCBub2RlcyBhdCBydWxlICcke3J1bGVOYW1lfSdgKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHVuZGVmaW5lZCwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25UZXJtaW5hbE5vZGU7XG4iXX0=