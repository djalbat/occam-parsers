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
        childNode.update();
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.childNodes.forEach(function (childNode) {
        childNode.reset();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJjaGlsZE5vZGVzIiwiZmlyc3RMaW5lIiwibGFzdExpbmUiLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJ1cGRhdGUiLCJyZXNldCIsImxpbmVzIiwibm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbU5vblRlcm1pbmFsTm9kZSIsInBhcnNlVHJlZSIsIm5vZGVzIiwiQ2xhc3MiLCJmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdCIsImxhc3RDaGlsZE5vZGUiLCJsYXN0IiwiZmlyc3RDaGlsZE5vZGVGaXJzdExpbmUiLCJnZXRGaXJzdExpbmUiLCJsYXN0Q2hpbGROb2RlRmlyc3RMaW5lIiwiZ2V0TGFzdExpbmUiLCJmaXJzdENoaWxkTm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsMkJBQTJCQyxRQUFRLDhCQUFSLENBQWpDOztJQUVNQyxlO0FBQ0osMkJBQVlDLGNBQVosRUFBNEJDLFVBQTVCLEVBQXdDQyxTQUF4QyxFQUFtREMsUUFBbkQsRUFBNkRDLHFCQUE3RCxFQUFvRkMsb0JBQXBGLEVBQTBHO0FBQUE7O0FBQ3hHLFNBQUtMLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MscUJBQUwsR0FBNkJBLHFCQUE3QjtBQUNBLFNBQUtDLG9CQUFMLEdBQTRCQSxvQkFBNUI7QUFDRDs7Ozt3Q0FFbUI7QUFDbEIsYUFBTyxLQUFLTCxjQUFaO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0MsVUFBWjtBQUNEOzs7bUNBRWM7QUFDYixhQUFPLEtBQUtDLFNBQVo7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQyxRQUFaO0FBQ0Q7OzsrQ0FFMEI7QUFDekIsYUFBTyxLQUFLQyxxQkFBWjtBQUNEOzs7OENBRXlCO0FBQ3hCLGFBQU8sS0FBS0Msb0JBQVo7QUFDRDs7OzZCQUVRO0FBQ1AsV0FBS0osVUFBTCxDQUFnQkssT0FBaEIsQ0FBd0IsVUFBU0MsU0FBVCxFQUFvQjtBQUMxQ0Esa0JBQVVDLE1BQVY7QUFDRCxPQUZEO0FBR0Q7Ozs0QkFFTztBQUNOLFdBQUtQLFVBQUwsQ0FBZ0JLLE9BQWhCLENBQXdCLFVBQVNDLFNBQVQsRUFBb0I7QUFDMUNBLGtCQUFVRSxLQUFWO0FBQ0QsT0FGRDtBQUdEOzs7OEJBRVNDLEssRUFBTztBQUNmLFVBQU1DLGtCQUFrQixJQUF4QjtBQUFBLFVBQStCO0FBQ3pCQyxpQ0FBMkJmLHlCQUF5QmdCLG1CQUF6QixDQUE2Q0YsZUFBN0MsRUFBOERELEtBQTlELENBRGpDO0FBQUEsVUFFTUksWUFBWUYsd0JBRmxCLENBRGUsQ0FHOEI7O0FBRTdDLGFBQU9FLFNBQVA7QUFDRDs7O2tDQUVhYixVLEVBQVk7QUFDeEIsV0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7OytDQUVpQ2MsSyxFQUFPZixjLEVBQXlDO0FBQUEsVUFBekJnQixLQUF5Qix1RUFBakJqQixlQUFpQjs7QUFDaEYsVUFBTUUsYUFBYWMsS0FBbkI7QUFBQSxVQUEwQjtBQUNwQkosd0JBQWtCSyxNQUFNQywrQkFBTixDQUFzQ2pCLGNBQXRDLEVBQXNEQyxVQUF0RCxFQUFrRWUsS0FBbEUsQ0FEeEI7O0FBR0EsYUFBT0wsZUFBUDtBQUNEOzs7b0RBRXNDWCxjLEVBQWdCQyxVLEVBQXFDO0FBQUEsVUFBekJlLEtBQXlCLHVFQUFqQmpCLGVBQWlCOztBQUMxRixVQUFNbUIsaUJBQWlCQyxNQUFNbEIsVUFBTixDQUF2QjtBQUFBLFVBQ01tQixnQkFBZ0JDLEtBQUtwQixVQUFMLENBRHRCO0FBQUEsVUFFTXFCLDBCQUEwQkosZUFBZUssWUFBZixFQUZoQztBQUFBLFVBR01DLHlCQUF5QkosY0FBY0ssV0FBZCxFQUgvQjtBQUFBLFVBSU1DLHNDQUFzQ1IsZUFBZVMsd0JBQWYsRUFKNUM7QUFBQSxVQUtNQyxvQ0FBb0NSLGNBQWNTLHVCQUFkLEVBTDFDO0FBQUEsVUFNTTNCLFlBQVlvQix1QkFObEI7QUFBQSxVQU00QztBQUN0Q25CLGlCQUFXcUIsc0JBUGpCO0FBQUEsVUFPMEM7QUFDcENwQiw4QkFBd0JzQixtQ0FSOUI7QUFBQSxVQVFtRTtBQUM3RHJCLDZCQUF1QnVCLGlDQVQ3QjtBQUFBLFVBU2dFO0FBQzFEakIsd0JBQWtCLElBQUlLLEtBQUosQ0FBVWhCLGNBQVYsRUFBMEJDLFVBQTFCLEVBQXNDQyxTQUF0QyxFQUFpREMsUUFBakQsRUFBMkRDLHFCQUEzRCxFQUFrRkMsb0JBQWxGLENBVnhCOztBQVlBLGFBQU9NLGVBQVA7QUFDRDs7Ozs7O0FBR0htQixPQUFPQyxPQUFQLEdBQWlCaEMsZUFBakI7O0FBRUEsU0FBU29CLEtBQVQsQ0FBZWEsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzFDLFNBQVNYLElBQVQsQ0FBY1csS0FBZCxFQUFxQjtBQUFFLFNBQU9BLE1BQU1BLE1BQU1DLE1BQU4sR0FBZSxDQUFyQixDQUFQO0FBQWlDIiwiZmlsZSI6Im5vblRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlJyk7XG5cbmNsYXNzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzLCBmaXJzdExpbmUsIGxhc3RMaW5lLCBmaXJzdFNpZ25pZmljYW50VG9rZW4sIGxhc3RTaWduaWZpY2FudFRva2VuKSB7XG4gICAgdGhpcy5wcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lO1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gICAgdGhpcy5maXJzdExpbmUgPSBmaXJzdExpbmU7XG4gICAgdGhpcy5sYXN0TGluZSA9IGxhc3RMaW5lO1xuICAgIHRoaXMuZmlyc3RTaWduaWZpY2FudFRva2VuID0gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICAgIHRoaXMubGFzdFNpZ25pZmljYW50VG9rZW4gPSBsYXN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldFByb2R1Y3Rpb25OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3Rpb25OYW1lO1xuICB9XG5cbiAgZ2V0Q2hpbGROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzO1xuICB9XG4gIFxuICBnZXRGaXJzdExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RMaW5lO1xuICB9XG5cbiAgZ2V0TGFzdExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFzdExpbmU7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMubGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbihjaGlsZE5vZGUpIHtcbiAgICAgIGNoaWxkTm9kZS51cGRhdGUoKTtcbiAgICB9KVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24oY2hpbGROb2RlKSB7XG4gICAgICBjaGlsZE5vZGUucmVzZXQoKTtcbiAgICB9KVxuICB9XG5cbiAgcGFyc2VUcmVlKGxpbmVzKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgbGluZXMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHNldENoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lLCBDbGFzcyA9IE5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gQ2xhc3MuZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2Rlcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgQ2xhc3MpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzLCBDbGFzcyA9IE5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZSA9IGxhc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGVGaXJzdExpbmUgPSBmaXJzdENoaWxkTm9kZS5nZXRGaXJzdExpbmUoKSxcbiAgICAgICAgICBsYXN0Q2hpbGROb2RlRmlyc3RMaW5lID0gbGFzdENoaWxkTm9kZS5nZXRMYXN0TGluZSgpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlRmlyc3RTaWduaWZpY2FudFRva2VuID0gZmlyc3RDaGlsZE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZUxhc3RTaWduaWZpY2FudFRva2VuID0gbGFzdENoaWxkTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGZpcnN0TGluZSA9IGZpcnN0Q2hpbGROb2RlRmlyc3RMaW5lLCAgLy8vXG4gICAgICAgICAgbGFzdExpbmUgPSBsYXN0Q2hpbGROb2RlRmlyc3RMaW5lLCAgLy8vXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuID0gZmlyc3RDaGlsZE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4sIC8vL1xuICAgICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuID0gbGFzdENoaWxkTm9kZUxhc3RTaWduaWZpY2FudFRva2VuLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIGZpcnN0TGluZSwgbGFzdExpbmUsIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiwgbGFzdFNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblRlcm1pbmFsTm9kZTtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuIl19