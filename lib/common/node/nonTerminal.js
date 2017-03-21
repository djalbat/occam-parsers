'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NonTerminalNodeParseTree = require('../parseTree/nonTerminalNode');

var NonTerminalNode = function () {
  function NonTerminalNode(productionName, childNodes, firstLine, lastLine) {
    _classCallCheck(this, NonTerminalNode);

    this.productionName = productionName;
    this.childNodes = childNodes;
    this.firstLine = firstLine;
    this.lastLine = lastLine;
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
      var firstChildNode = first(this.childNodes),
          firstChildNodeFirstSignificantToken = firstChildNode.getFirstSignificantToken(),
          firstSignificantToken = firstChildNodeFirstSignificantToken; ///

      return firstSignificantToken;
    }
  }, {
    key: 'getLastSignificantToken',
    value: function getLastSignificantToken() {
      var lastChildNode = last(this.childNodes),
          lastChildNodeLastSignificantToken = lastChildNode.getLastSignificantToken(),
          lastSignificantToken = lastChildNodeLastSignificantToken; ///

      return lastSignificantToken;
    }
  }, {
    key: 'getParseTree',
    value: function getParseTree() {
      var nonTerminalNode = this,
          ///
      nonTerminalNodeParseTree = NonTerminalNodeParseTree.fromNonTerminalNode(nonTerminalNode),
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
      nonTerminalNode = Class.fromProductionNameAndChildNodes(productionName, childNodes);

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
          firstLine = firstChildNodeFirstLine,
          ///
      lastLine = lastChildNodeFirstLine,
          ///
      nonTerminalNode = new Class(productionName, childNodes, firstLine, lastLine);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJjaGlsZE5vZGVzIiwiZmlyc3RMaW5lIiwibGFzdExpbmUiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwiZmlyc3RDaGlsZE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0Q2hpbGROb2RlIiwibGFzdCIsImxhc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlIiwicGFyc2VUcmVlIiwibm9kZXMiLCJDbGFzcyIsImZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZUZpcnN0TGluZSIsImdldEZpcnN0TGluZSIsImxhc3RDaGlsZE5vZGVGaXJzdExpbmUiLCJnZXRMYXN0TGluZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLDJCQUEyQkMsUUFBUSw4QkFBUixDQUFqQzs7SUFFTUMsZTtBQUNKLDJCQUFZQyxjQUFaLEVBQTRCQyxVQUE1QixFQUF3Q0MsU0FBeEMsRUFBbURDLFFBQW5ELEVBQTZEO0FBQUE7O0FBQzNELFNBQUtILGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7Ozs7d0NBRW1CO0FBQ2xCLGFBQU8sS0FBS0gsY0FBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLQyxTQUFaO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0MsUUFBWjtBQUNEOzs7K0NBRTBCO0FBQ3pCLFVBQU1DLGlCQUFpQkMsTUFBTSxLQUFLSixVQUFYLENBQXZCO0FBQUEsVUFDTUssc0NBQXNDRixlQUFlRyx3QkFBZixFQUQ1QztBQUFBLFVBRU1DLHdCQUF3QkYsbUNBRjlCLENBRHlCLENBRzBDOztBQUVuRSxhQUFPRSxxQkFBUDtBQUNEOzs7OENBRXlCO0FBQ3hCLFVBQU1DLGdCQUFnQkMsS0FBSyxLQUFLVCxVQUFWLENBQXRCO0FBQUEsVUFDTVUsb0NBQW9DRixjQUFjRyx1QkFBZCxFQUQxQztBQUFBLFVBRU1DLHVCQUF1QkYsaUNBRjdCLENBRHdCLENBR3dDOztBQUVoRSxhQUFPRSxvQkFBUDtBQUNEOzs7bUNBRWM7QUFDYixVQUFNQyxrQkFBa0IsSUFBeEI7QUFBQSxVQUErQjtBQUN6QkMsaUNBQTJCbEIseUJBQXlCbUIsbUJBQXpCLENBQTZDRixlQUE3QyxDQURqQztBQUFBLFVBRU1HLFlBQVlGLHdCQUZsQixDQURhLENBR2dDOztBQUU3QyxhQUFPRSxTQUFQO0FBQ0Q7OztrQ0FFYWhCLFUsRUFBWTtBQUN4QixXQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOzs7K0NBRWlDaUIsSyxFQUFPbEIsYyxFQUF5QztBQUFBLFVBQXpCbUIsS0FBeUIsdUVBQWpCcEIsZUFBaUI7O0FBQ2hGLFVBQU1FLGFBQWFpQixLQUFuQjtBQUFBLFVBQTBCO0FBQ3BCSix3QkFBa0JLLE1BQU1DLCtCQUFOLENBQXNDcEIsY0FBdEMsRUFBc0RDLFVBQXRELENBRHhCOztBQUdBLGFBQU9hLGVBQVA7QUFDRDs7O29EQUVzQ2QsYyxFQUFnQkMsVSxFQUFxQztBQUFBLFVBQXpCa0IsS0FBeUIsdUVBQWpCcEIsZUFBaUI7O0FBQzFGLFVBQU1LLGlCQUFpQkMsTUFBTUosVUFBTixDQUF2QjtBQUFBLFVBQ01RLGdCQUFnQkMsS0FBS1QsVUFBTCxDQUR0QjtBQUFBLFVBRU1vQiwwQkFBMEJqQixlQUFla0IsWUFBZixFQUZoQztBQUFBLFVBR01DLHlCQUF5QmQsY0FBY2UsV0FBZCxFQUgvQjtBQUFBLFVBSU10QixZQUFZbUIsdUJBSmxCO0FBQUEsVUFJNEM7QUFDdENsQixpQkFBV29CLHNCQUxqQjtBQUFBLFVBSzBDO0FBQ3BDVCx3QkFBa0IsSUFBSUssS0FBSixDQUFVbkIsY0FBVixFQUEwQkMsVUFBMUIsRUFBc0NDLFNBQXRDLEVBQWlEQyxRQUFqRCxDQU54Qjs7QUFRQSxhQUFPVyxlQUFQO0FBQ0Q7Ozs7OztBQUdIVyxPQUFPQyxPQUFQLEdBQWlCM0IsZUFBakI7O0FBRUEsU0FBU00sS0FBVCxDQUFlc0IsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzFDLFNBQVNqQixJQUFULENBQWNpQixLQUFkLEVBQXFCO0FBQUUsU0FBT0EsTUFBTUEsTUFBTUMsTUFBTixHQUFlLENBQXJCLENBQVA7QUFBaUMiLCJmaWxlIjoibm9uVGVybWluYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZS9ub25UZXJtaW5hbE5vZGUnKTtcblxuY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIGZpcnN0TGluZSwgbGFzdExpbmUpIHtcbiAgICB0aGlzLnByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgICB0aGlzLmZpcnN0TGluZSA9IGZpcnN0TGluZTtcbiAgICB0aGlzLmxhc3RMaW5lID0gbGFzdExpbmU7XG4gIH1cblxuICBnZXRQcm9kdWN0aW9uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0aW9uTmFtZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuICBcbiAgZ2V0Rmlyc3RMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmZpcnN0TGluZTtcbiAgfVxuXG4gIGdldExhc3RMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxhc3RMaW5lO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QodGhpcy5jaGlsZE5vZGVzKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IGZpcnN0Q2hpbGROb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IGZpcnN0Q2hpbGROb2RlRmlyc3RTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIHJldHVybiBmaXJzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBjb25zdCBsYXN0Q2hpbGROb2RlID0gbGFzdCh0aGlzLmNoaWxkTm9kZXMpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGxhc3RDaGlsZE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGxhc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRQYXJzZVRyZWUoKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSksXG4gICAgICAgICAgcGFyc2VUcmVlID0gbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUsIENsYXNzID0gTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBDbGFzcy5mcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2Rlcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGUgPSBsYXN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlRmlyc3RMaW5lID0gZmlyc3RDaGlsZE5vZGUuZ2V0Rmlyc3RMaW5lKCksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZUZpcnN0TGluZSA9IGxhc3RDaGlsZE5vZGUuZ2V0TGFzdExpbmUoKSxcbiAgICAgICAgICBmaXJzdExpbmUgPSBmaXJzdENoaWxkTm9kZUZpcnN0TGluZSwgIC8vL1xuICAgICAgICAgIGxhc3RMaW5lID0gbGFzdENoaWxkTm9kZUZpcnN0TGluZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgZmlyc3RMaW5lLCBsYXN0TGluZSk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uVGVybWluYWxOb2RlO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG4iXX0=