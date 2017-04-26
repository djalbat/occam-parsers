'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NonTerminalNodeParseTree = require('../parseTree/nonTerminalNode');

var NonTerminalNode = function () {
  function NonTerminalNode(productionName, childNodes, firstLine, lastLine, firstSignificantToken, lastSignificantToken) {
    _classCallCheck(this, NonTerminalNode);

    this.productionName = productionName;
    this.childNodes = childNodes;
    this.firstLine = firstLine;
    this.lastLine = lastLine;
    this.firstSignificantToken = firstSignificantToken;
    this.lastSignificantToken = lastSignificantToken;
  }

  _createClass(NonTerminalNode, [{
    key: 'getProductionName',
    value: function getProductionName() {
      return this.productionName;
    }
  }, {
    key: 'getChildNodes',
    value: function getChildNodes() {
      return this.childNodes;
    }
  }, {
    key: 'getFirstLine',
    value: function getFirstLine() {
      return this.firstLine;
    }
  }, {
    key: 'getLastLine',
    value: function getLastLine() {
      return this.lastLine;
    }
  }, {
    key: 'getFirstSignificantToken',
    value: function getFirstSignificantToken() {
      return this.firstSignificantToken;
    }
  }, {
    key: 'getLastSignificantToken',
    value: function getLastSignificantToken() {
      return this.lastSignificantToken;
    }
  }, {
    key: 'update',
    value: function update() {
      this.childNodes.forEach(function (childNode) {
        childNode.update(arguments);
      });
    }
  }, {
    key: 'parseTree',
    value: function parseTree(lines) {
      var nonTerminalNode = this,
          ///
      nonTerminalNodeParseTree = NonTerminalNodeParseTree.fromNonTerminalNode(nonTerminalNode, lines),
          parseTree = nonTerminalNodeParseTree; ///

      return parseTree;
    }
  }, {
    key: 'setChildNodes',
    value: function setChildNodes(childNodes) {
      this.childNodes = childNodes;
    }
  }], [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NonTerminalNode;

      var childNodes = nodes,
          ///
      nonTerminalNode = Class.fromProductionNameAndChildNodes(productionName, childNodes, Class);

      return nonTerminalNode;
    }
  }, {
    key: 'fromProductionNameAndChildNodes',
    value: function fromProductionNameAndChildNodes(productionName, childNodes) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NonTerminalNode;

      var firstChildNode = first(childNodes),
          lastChildNode = last(childNodes),
          firstChildNodeFirstLine = firstChildNode.getFirstLine(),
          lastChildNodeFirstLine = lastChildNode.getLastLine(),
          firstChildNodeFirstSignificantToken = firstChildNode.getFirstSignificantToken(),
          lastChildNodeLastSignificantToken = lastChildNode.getLastSignificantToken(),
          firstLine = firstChildNodeFirstLine,
          ///
      lastLine = lastChildNodeFirstLine,
          ///
      firstSignificantToken = firstChildNodeFirstSignificantToken,
          ///
      lastSignificantToken = lastChildNodeLastSignificantToken,
          ///
      nonTerminalNode = new Class(productionName, childNodes, firstLine, lastLine, firstSignificantToken, lastSignificantToken);

      return nonTerminalNode;
    }
  }]);

  return NonTerminalNode;
}();

module.exports = NonTerminalNode;

function first(array) {
  return array[0];
}
function last(array) {
  return array[array.length - 1];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJjaGlsZE5vZGVzIiwiZmlyc3RMaW5lIiwibGFzdExpbmUiLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJ1cGRhdGUiLCJhcmd1bWVudHMiLCJsaW5lcyIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21Ob25UZXJtaW5hbE5vZGUiLCJwYXJzZVRyZWUiLCJub2RlcyIsIkNsYXNzIiwiZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3QiLCJsYXN0Q2hpbGROb2RlIiwibGFzdCIsImZpcnN0Q2hpbGROb2RlRmlyc3RMaW5lIiwiZ2V0Rmlyc3RMaW5lIiwibGFzdENoaWxkTm9kZUZpcnN0TGluZSIsImdldExhc3RMaW5lIiwiZmlyc3RDaGlsZE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0Q2hpbGROb2RlTGFzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLDJCQUEyQkMsUUFBUSw4QkFBUixDQUFqQzs7SUFFTUMsZTtBQUNKLDJCQUFZQyxjQUFaLEVBQTRCQyxVQUE1QixFQUF3Q0MsU0FBeEMsRUFBbURDLFFBQW5ELEVBQTZEQyxxQkFBN0QsRUFBb0ZDLG9CQUFwRixFQUEwRztBQUFBOztBQUN4RyxTQUFLTCxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLHFCQUFMLEdBQTZCQSxxQkFBN0I7QUFDQSxTQUFLQyxvQkFBTCxHQUE0QkEsb0JBQTVCO0FBQ0Q7Ozs7d0NBRW1CO0FBQ2xCLGFBQU8sS0FBS0wsY0FBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLQyxTQUFaO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0MsUUFBWjtBQUNEOzs7K0NBRTBCO0FBQ3pCLGFBQU8sS0FBS0MscUJBQVo7QUFDRDs7OzhDQUV5QjtBQUN4QixhQUFPLEtBQUtDLG9CQUFaO0FBQ0Q7Ozs2QkFFUTtBQUNQLFdBQUtKLFVBQUwsQ0FBZ0JLLE9BQWhCLENBQXdCLFVBQVNDLFNBQVQsRUFBb0I7QUFDMUNBLGtCQUFVQyxNQUFWLENBQWlCQyxTQUFqQjtBQUNELE9BRkQ7QUFHRDs7OzhCQUVTQyxLLEVBQU87QUFDZixVQUFNQyxrQkFBa0IsSUFBeEI7QUFBQSxVQUErQjtBQUN6QkMsaUNBQTJCZix5QkFBeUJnQixtQkFBekIsQ0FBNkNGLGVBQTdDLEVBQThERCxLQUE5RCxDQURqQztBQUFBLFVBRU1JLFlBQVlGLHdCQUZsQixDQURlLENBRzhCOztBQUU3QyxhQUFPRSxTQUFQO0FBQ0Q7OztrQ0FFYWIsVSxFQUFZO0FBQ3hCLFdBQUtBLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0Q7OzsrQ0FFaUNjLEssRUFBT2YsYyxFQUF5QztBQUFBLFVBQXpCZ0IsS0FBeUIsdUVBQWpCakIsZUFBaUI7O0FBQ2hGLFVBQU1FLGFBQWFjLEtBQW5CO0FBQUEsVUFBMEI7QUFDcEJKLHdCQUFrQkssTUFBTUMsK0JBQU4sQ0FBc0NqQixjQUF0QyxFQUFzREMsVUFBdEQsRUFBa0VlLEtBQWxFLENBRHhCOztBQUdBLGFBQU9MLGVBQVA7QUFDRDs7O29EQUVzQ1gsYyxFQUFnQkMsVSxFQUFxQztBQUFBLFVBQXpCZSxLQUF5Qix1RUFBakJqQixlQUFpQjs7QUFDMUYsVUFBTW1CLGlCQUFpQkMsTUFBTWxCLFVBQU4sQ0FBdkI7QUFBQSxVQUNNbUIsZ0JBQWdCQyxLQUFLcEIsVUFBTCxDQUR0QjtBQUFBLFVBRU1xQiwwQkFBMEJKLGVBQWVLLFlBQWYsRUFGaEM7QUFBQSxVQUdNQyx5QkFBeUJKLGNBQWNLLFdBQWQsRUFIL0I7QUFBQSxVQUlNQyxzQ0FBc0NSLGVBQWVTLHdCQUFmLEVBSjVDO0FBQUEsVUFLTUMsb0NBQW9DUixjQUFjUyx1QkFBZCxFQUwxQztBQUFBLFVBTU0zQixZQUFZb0IsdUJBTmxCO0FBQUEsVUFNNEM7QUFDdENuQixpQkFBV3FCLHNCQVBqQjtBQUFBLFVBTzBDO0FBQ3BDcEIsOEJBQXdCc0IsbUNBUjlCO0FBQUEsVUFRbUU7QUFDN0RyQiw2QkFBdUJ1QixpQ0FUN0I7QUFBQSxVQVNnRTtBQUMxRGpCLHdCQUFrQixJQUFJSyxLQUFKLENBQVVoQixjQUFWLEVBQTBCQyxVQUExQixFQUFzQ0MsU0FBdEMsRUFBaURDLFFBQWpELEVBQTJEQyxxQkFBM0QsRUFBa0ZDLG9CQUFsRixDQVZ4Qjs7QUFZQSxhQUFPTSxlQUFQO0FBQ0Q7Ozs7OztBQUdIbUIsT0FBT0MsT0FBUCxHQUFpQmhDLGVBQWpCOztBQUVBLFNBQVNvQixLQUFULENBQWVhLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMxQyxTQUFTWCxJQUFULENBQWNXLEtBQWQsRUFBcUI7QUFBRSxTQUFPQSxNQUFNQSxNQUFNQyxNQUFOLEdBQWUsQ0FBckIsQ0FBUDtBQUFpQyIsImZpbGUiOiJub25UZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZScpO1xuXG5jbGFzcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgZmlyc3RMaW5lLCBsYXN0TGluZSwgZmlyc3RTaWduaWZpY2FudFRva2VuLCBsYXN0U2lnbmlmaWNhbnRUb2tlbikge1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICAgIHRoaXMuZmlyc3RMaW5lID0gZmlyc3RMaW5lO1xuICAgIHRoaXMubGFzdExpbmUgPSBsYXN0TGluZTtcbiAgICB0aGlzLmZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgICB0aGlzLmxhc3RTaWduaWZpY2FudFRva2VuID0gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRQcm9kdWN0aW9uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0aW9uTmFtZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuICBcbiAgZ2V0Rmlyc3RMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmZpcnN0TGluZTtcbiAgfVxuXG4gIGdldExhc3RMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxhc3RMaW5lO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLmZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLmxhc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24oY2hpbGROb2RlKSB7XG4gICAgICBjaGlsZE5vZGUudXBkYXRlKGFyZ3VtZW50cyk7XG4gICAgfSlcbiAgfVxuXG4gIHBhcnNlVHJlZShsaW5lcykge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxpbmVzKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSwgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IENsYXNzLmZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIENsYXNzKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2Rlcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGUgPSBsYXN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlRmlyc3RMaW5lID0gZmlyc3RDaGlsZE5vZGUuZ2V0Rmlyc3RMaW5lKCksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZUZpcnN0TGluZSA9IGxhc3RDaGlsZE5vZGUuZ2V0TGFzdExpbmUoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IGZpcnN0Q2hpbGROb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGxhc3RDaGlsZE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICBmaXJzdExpbmUgPSBmaXJzdENoaWxkTm9kZUZpcnN0TGluZSwgIC8vL1xuICAgICAgICAgIGxhc3RMaW5lID0gbGFzdENoaWxkTm9kZUZpcnN0TGluZSwgIC8vL1xuICAgICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IGZpcnN0Q2hpbGROb2RlRmlyc3RTaWduaWZpY2FudFRva2VuLCAvLy9cbiAgICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGxhc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzLCBmaXJzdExpbmUsIGxhc3RMaW5lLCBmaXJzdFNpZ25pZmljYW50VG9rZW4sIGxhc3RTaWduaWZpY2FudFRva2VuKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25UZXJtaW5hbE5vZGU7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cbiJdfQ==