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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJjaGlsZE5vZGVzIiwiZmlyc3RMaW5lIiwibGFzdExpbmUiLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsImxpbmVzIiwibm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbU5vblRlcm1pbmFsTm9kZSIsInBhcnNlVHJlZSIsIm5vZGVzIiwiQ2xhc3MiLCJmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdCIsImxhc3RDaGlsZE5vZGUiLCJsYXN0IiwiZmlyc3RDaGlsZE5vZGVGaXJzdExpbmUiLCJnZXRGaXJzdExpbmUiLCJsYXN0Q2hpbGROb2RlRmlyc3RMaW5lIiwiZ2V0TGFzdExpbmUiLCJmaXJzdENoaWxkTm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsMkJBQTJCQyxRQUFRLDhCQUFSLENBQWpDOztJQUVNQyxlO0FBQ0osMkJBQVlDLGNBQVosRUFBNEJDLFVBQTVCLEVBQXdDQyxTQUF4QyxFQUFtREMsUUFBbkQsRUFBNkRDLHFCQUE3RCxFQUFvRkMsb0JBQXBGLEVBQTBHO0FBQUE7O0FBQ3hHLFNBQUtMLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MscUJBQUwsR0FBNkJBLHFCQUE3QjtBQUNBLFNBQUtDLG9CQUFMLEdBQTRCQSxvQkFBNUI7QUFDRDs7Ozt3Q0FFbUI7QUFDbEIsYUFBTyxLQUFLTCxjQUFaO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0MsVUFBWjtBQUNEOzs7bUNBRWM7QUFDYixhQUFPLEtBQUtDLFNBQVo7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQyxRQUFaO0FBQ0Q7OzsrQ0FFMEI7QUFDekIsYUFBTyxLQUFLQyxxQkFBWjtBQUNEOzs7OENBRXlCO0FBQ3hCLGFBQU8sS0FBS0Msb0JBQVo7QUFDRDs7OzhCQUVTQyxLLEVBQU87QUFDZixVQUFNQyxrQkFBa0IsSUFBeEI7QUFBQSxVQUErQjtBQUN6QkMsaUNBQTJCWCx5QkFBeUJZLG1CQUF6QixDQUE2Q0YsZUFBN0MsRUFBOERELEtBQTlELENBRGpDO0FBQUEsVUFFTUksWUFBWUYsd0JBRmxCLENBRGUsQ0FHOEI7O0FBRTdDLGFBQU9FLFNBQVA7QUFDRDs7O2tDQUVhVCxVLEVBQVk7QUFDeEIsV0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7OytDQUVpQ1UsSyxFQUFPWCxjLEVBQXlDO0FBQUEsVUFBekJZLEtBQXlCLHVFQUFqQmIsZUFBaUI7O0FBQ2hGLFVBQU1FLGFBQWFVLEtBQW5CO0FBQUEsVUFBMEI7QUFDcEJKLHdCQUFrQkssTUFBTUMsK0JBQU4sQ0FBc0NiLGNBQXRDLEVBQXNEQyxVQUF0RCxFQUFrRVcsS0FBbEUsQ0FEeEI7O0FBR0EsYUFBT0wsZUFBUDtBQUNEOzs7b0RBRXNDUCxjLEVBQWdCQyxVLEVBQXFDO0FBQUEsVUFBekJXLEtBQXlCLHVFQUFqQmIsZUFBaUI7O0FBQzFGLFVBQU1lLGlCQUFpQkMsTUFBTWQsVUFBTixDQUF2QjtBQUFBLFVBQ01lLGdCQUFnQkMsS0FBS2hCLFVBQUwsQ0FEdEI7QUFBQSxVQUVNaUIsMEJBQTBCSixlQUFlSyxZQUFmLEVBRmhDO0FBQUEsVUFHTUMseUJBQXlCSixjQUFjSyxXQUFkLEVBSC9CO0FBQUEsVUFJTUMsc0NBQXNDUixlQUFlUyx3QkFBZixFQUo1QztBQUFBLFVBS01DLG9DQUFvQ1IsY0FBY1MsdUJBQWQsRUFMMUM7QUFBQSxVQU1NdkIsWUFBWWdCLHVCQU5sQjtBQUFBLFVBTTRDO0FBQ3RDZixpQkFBV2lCLHNCQVBqQjtBQUFBLFVBTzBDO0FBQ3BDaEIsOEJBQXdCa0IsbUNBUjlCO0FBQUEsVUFRbUU7QUFDN0RqQiw2QkFBdUJtQixpQ0FUN0I7QUFBQSxVQVNnRTtBQUMxRGpCLHdCQUFrQixJQUFJSyxLQUFKLENBQVVaLGNBQVYsRUFBMEJDLFVBQTFCLEVBQXNDQyxTQUF0QyxFQUFpREMsUUFBakQsRUFBMkRDLHFCQUEzRCxFQUFrRkMsb0JBQWxGLENBVnhCOztBQVlBLGFBQU9FLGVBQVA7QUFDRDs7Ozs7O0FBR0htQixPQUFPQyxPQUFQLEdBQWlCNUIsZUFBakI7O0FBRUEsU0FBU2dCLEtBQVQsQ0FBZWEsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzFDLFNBQVNYLElBQVQsQ0FBY1csS0FBZCxFQUFxQjtBQUFFLFNBQU9BLE1BQU1BLE1BQU1DLE1BQU4sR0FBZSxDQUFyQixDQUFQO0FBQWlDIiwiZmlsZSI6Im5vblRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlJyk7XG5cbmNsYXNzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzLCBmaXJzdExpbmUsIGxhc3RMaW5lLCBmaXJzdFNpZ25pZmljYW50VG9rZW4sIGxhc3RTaWduaWZpY2FudFRva2VuKSB7XG4gICAgdGhpcy5wcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lO1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gICAgdGhpcy5maXJzdExpbmUgPSBmaXJzdExpbmU7XG4gICAgdGhpcy5sYXN0TGluZSA9IGxhc3RMaW5lO1xuICAgIHRoaXMuZmlyc3RTaWduaWZpY2FudFRva2VuID0gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICAgIHRoaXMubGFzdFNpZ25pZmljYW50VG9rZW4gPSBsYXN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldFByb2R1Y3Rpb25OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3Rpb25OYW1lO1xuICB9XG5cbiAgZ2V0Q2hpbGROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzO1xuICB9XG4gIFxuICBnZXRGaXJzdExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RMaW5lO1xuICB9XG5cbiAgZ2V0TGFzdExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFzdExpbmU7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMubGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIHBhcnNlVHJlZShsaW5lcykge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxpbmVzKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSwgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IENsYXNzLmZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIENsYXNzKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2Rlcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGUgPSBsYXN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlRmlyc3RMaW5lID0gZmlyc3RDaGlsZE5vZGUuZ2V0Rmlyc3RMaW5lKCksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZUZpcnN0TGluZSA9IGxhc3RDaGlsZE5vZGUuZ2V0TGFzdExpbmUoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IGZpcnN0Q2hpbGROb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGxhc3RDaGlsZE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICBmaXJzdExpbmUgPSBmaXJzdENoaWxkTm9kZUZpcnN0TGluZSwgIC8vL1xuICAgICAgICAgIGxhc3RMaW5lID0gbGFzdENoaWxkTm9kZUZpcnN0TGluZSwgIC8vL1xuICAgICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IGZpcnN0Q2hpbGROb2RlRmlyc3RTaWduaWZpY2FudFRva2VuLCAvLy9cbiAgICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGxhc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzLCBmaXJzdExpbmUsIGxhc3RMaW5lLCBmaXJzdFNpZ25pZmljYW50VG9rZW4sIGxhc3RTaWduaWZpY2FudFRva2VuKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25UZXJtaW5hbE5vZGU7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cbiJdfQ==