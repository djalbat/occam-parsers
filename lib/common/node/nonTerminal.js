'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NonTerminalNodeParseTree = require('../../bnf/parseTree/nonTerminalNode');

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
    key: 'setChildNodes',
    value: function setChildNodes(childNodes) {
      this.childNodes = childNodes;
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
  }], [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var childNodes = nodes,
          ///
      nonTerminalNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes);

      nodes = [nonTerminalNode]; ///

      return nodes;
    }
  }, {
    key: 'fromProductionNameAndChildNodes',
    value: function fromProductionNameAndChildNodes(productionName, childNodes) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NonTerminalNode;

      var firstLine = firstLineFromChildNodes(childNodes),
          lastLine = lastLineFromChildNodes(childNodes),
          nonTerminalNode = new Class(productionName, childNodes, firstLine, lastLine);

      return nonTerminalNode;
    }
  }]);

  return NonTerminalNode;
}();

module.exports = NonTerminalNode;

function firstLineFromChildNodes(childNodes) {
  var firstChildNode = first(childNodes),
      firstChildNodeFirstLine = firstChildNode.getFirstLine(),
      firstLine = firstChildNodeFirstLine;

  return firstLine;
}

function lastLineFromChildNodes(childNodes) {
  var lastChildNode = last(childNodes),
      lastChildNodeFirstLine = lastChildNode.getLastLine(),
      lastLine = lastChildNodeFirstLine;

  return lastLine;
}
function first(array) {
  return array[0];
}
function last(array) {
  return array[array.length - 1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJjaGlsZE5vZGVzIiwiZmlyc3RMaW5lIiwibGFzdExpbmUiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwiZmlyc3RDaGlsZE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0Q2hpbGROb2RlIiwibGFzdCIsImxhc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlIiwicGFyc2VUcmVlIiwibm9kZXMiLCJmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzIiwiQ2xhc3MiLCJmaXJzdExpbmVGcm9tQ2hpbGROb2RlcyIsImxhc3RMaW5lRnJvbUNoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmlyc3RDaGlsZE5vZGVGaXJzdExpbmUiLCJnZXRGaXJzdExpbmUiLCJsYXN0Q2hpbGROb2RlRmlyc3RMaW5lIiwiZ2V0TGFzdExpbmUiLCJhcnJheSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLDJCQUEyQkMsUUFBUSxxQ0FBUixDQUEvQjs7SUFFTUMsZTtBQUNKLDJCQUFZQyxjQUFaLEVBQTRCQyxVQUE1QixFQUF3Q0MsU0FBeEMsRUFBbURDLFFBQW5ELEVBQTZEO0FBQUE7O0FBQzNELFNBQUtILGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7Ozs7d0NBRW1CO0FBQ2xCLGFBQU8sS0FBS0gsY0FBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLQyxTQUFaO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0MsUUFBWjtBQUNEOzs7a0NBRWFGLFUsRUFBWTtBQUN4QixXQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOzs7K0NBRTBCO0FBQ3pCLFVBQUlHLGlCQUFpQkMsTUFBTSxLQUFLSixVQUFYLENBQXJCO0FBQUEsVUFDSUssc0NBQXNDRixlQUFlRyx3QkFBZixFQUQxQztBQUFBLFVBRUlDLHdCQUF3QkYsbUNBRjVCLENBRHlCLENBR3dDOztBQUVqRSxhQUFPRSxxQkFBUDtBQUNEOzs7OENBRXlCO0FBQ3hCLFVBQUlDLGdCQUFnQkMsS0FBSyxLQUFLVCxVQUFWLENBQXBCO0FBQUEsVUFDSVUsb0NBQW9DRixjQUFjRyx1QkFBZCxFQUR4QztBQUFBLFVBRUlDLHVCQUF1QkYsaUNBRjNCLENBRHdCLENBR3NDOztBQUU5RCxhQUFPRSxvQkFBUDtBQUNEOzs7bUNBRWM7QUFDYixVQUFJQyxrQkFBa0IsSUFBdEI7QUFBQSxVQUE2QjtBQUN6QkMsaUNBQTJCbEIseUJBQXlCbUIsbUJBQXpCLENBQTZDRixlQUE3QyxDQUQvQjtBQUFBLFVBRUlHLFlBQVlGLHdCQUZoQixDQURhLENBRzhCOztBQUUzQyxhQUFPRSxTQUFQO0FBQ0Q7Ozs4QkFFZ0JDLEssRUFBT2xCLGMsRUFBZ0I7QUFDdEMsVUFBSUMsYUFBYWlCLEtBQWpCO0FBQUEsVUFBd0I7QUFDcEJKLHdCQUFrQmYsZ0JBQWdCb0IsK0JBQWhCLENBQWdEbkIsY0FBaEQsRUFBZ0VDLFVBQWhFLENBRHRCOztBQUdBaUIsY0FBUSxDQUFDSixlQUFELENBQVIsQ0FKc0MsQ0FJWDs7QUFFM0IsYUFBT0ksS0FBUDtBQUNEOzs7b0RBRXNDbEIsYyxFQUFnQkMsVSxFQUFxQztBQUFBLFVBQXpCbUIsS0FBeUIsdUVBQWpCckIsZUFBaUI7O0FBQzFGLFVBQUlHLFlBQVltQix3QkFBd0JwQixVQUF4QixDQUFoQjtBQUFBLFVBQ0lFLFdBQVdtQix1QkFBdUJyQixVQUF2QixDQURmO0FBQUEsVUFFSWEsa0JBQWtCLElBQUlNLEtBQUosQ0FBVXBCLGNBQVYsRUFBMEJDLFVBQTFCLEVBQXNDQyxTQUF0QyxFQUFpREMsUUFBakQsQ0FGdEI7O0FBSUEsYUFBT1csZUFBUDtBQUNEOzs7Ozs7QUFHSFMsT0FBT0MsT0FBUCxHQUFpQnpCLGVBQWpCOztBQUVBLFNBQVNzQix1QkFBVCxDQUFpQ3BCLFVBQWpDLEVBQTZDO0FBQzNDLE1BQUlHLGlCQUFpQkMsTUFBTUosVUFBTixDQUFyQjtBQUFBLE1BQ0l3QiwwQkFBMEJyQixlQUFlc0IsWUFBZixFQUQ5QjtBQUFBLE1BRUl4QixZQUFZdUIsdUJBRmhCOztBQUlBLFNBQU92QixTQUFQO0FBQ0Q7O0FBRUQsU0FBU29CLHNCQUFULENBQWdDckIsVUFBaEMsRUFBNEM7QUFDMUMsTUFBSVEsZ0JBQWdCQyxLQUFLVCxVQUFMLENBQXBCO0FBQUEsTUFDSTBCLHlCQUF5QmxCLGNBQWNtQixXQUFkLEVBRDdCO0FBQUEsTUFFSXpCLFdBQVd3QixzQkFGZjs7QUFJQSxTQUFPeEIsUUFBUDtBQUNEO0FBQ0QsU0FBU0UsS0FBVCxDQUFld0IsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzFDLFNBQVNuQixJQUFULENBQWNtQixLQUFkLEVBQXFCO0FBQUUsU0FBT0EsTUFBTUEsTUFBTUMsTUFBTixHQUFlLENBQXJCLENBQVA7QUFBaUMiLCJmaWxlIjoibm9uVGVybWluYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi8uLi9ibmYvcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZScpO1xuXG5jbGFzcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgZmlyc3RMaW5lLCBsYXN0TGluZSkge1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICAgIHRoaXMuZmlyc3RMaW5lID0gZmlyc3RMaW5lO1xuICAgIHRoaXMubGFzdExpbmUgPSBsYXN0TGluZTtcbiAgfVxuXG4gIGdldFByb2R1Y3Rpb25OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3Rpb25OYW1lO1xuICB9XG5cbiAgZ2V0Q2hpbGROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzO1xuICB9XG4gIFxuICBnZXRGaXJzdExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RMaW5lO1xuICB9XG5cbiAgZ2V0TGFzdExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFzdExpbmU7XG4gIH1cblxuICBzZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHZhciBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KHRoaXMuY2hpbGROb2RlcyksXG4gICAgICAgIGZpcnN0Q2hpbGROb2RlRmlyc3RTaWduaWZpY2FudFRva2VuID0gZmlyc3RDaGlsZE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IGZpcnN0Q2hpbGROb2RlRmlyc3RTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIHJldHVybiBmaXJzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICB2YXIgbGFzdENoaWxkTm9kZSA9IGxhc3QodGhpcy5jaGlsZE5vZGVzKSxcbiAgICAgICAgbGFzdENoaWxkTm9kZUxhc3RTaWduaWZpY2FudFRva2VuID0gbGFzdENoaWxkTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGxhc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRQYXJzZVRyZWUoKSB7XG4gICAgdmFyIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21Ob25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlKSxcbiAgICAgICAgcGFyc2VUcmVlID0gbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICB2YXIgY2hpbGROb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgbm9kZXMgPSBbbm9uVGVybWluYWxOb2RlXTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIENsYXNzID0gTm9uVGVybWluYWxOb2RlKSB7XG4gICAgdmFyIGZpcnN0TGluZSA9IGZpcnN0TGluZUZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMpLFxuICAgICAgICBsYXN0TGluZSA9IGxhc3RMaW5lRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcyksXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgZmlyc3RMaW5lLCBsYXN0TGluZSk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uVGVybWluYWxOb2RlO1xuXG5mdW5jdGlvbiBmaXJzdExpbmVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gIHZhciBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgZmlyc3RDaGlsZE5vZGVGaXJzdExpbmUgPSBmaXJzdENoaWxkTm9kZS5nZXRGaXJzdExpbmUoKSxcbiAgICAgIGZpcnN0TGluZSA9IGZpcnN0Q2hpbGROb2RlRmlyc3RMaW5lO1xuXG4gIHJldHVybiBmaXJzdExpbmU7XG59XG5cbmZ1bmN0aW9uIGxhc3RMaW5lRnJvbUNoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICB2YXIgbGFzdENoaWxkTm9kZSA9IGxhc3QoY2hpbGROb2RlcyksXG4gICAgICBsYXN0Q2hpbGROb2RlRmlyc3RMaW5lID0gbGFzdENoaWxkTm9kZS5nZXRMYXN0TGluZSgpLFxuICAgICAgbGFzdExpbmUgPSBsYXN0Q2hpbGROb2RlRmlyc3RMaW5lO1xuXG4gIHJldHVybiBsYXN0TGluZTtcbn1cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cbiJdfQ==