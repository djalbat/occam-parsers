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
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NonTerminalNode;

      var childNodes = nodes,
          ///
      nonTerminalNode = Class.fromProductionNameAndChildNodes(productionName, childNodes);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJjaGlsZE5vZGVzIiwiZmlyc3RMaW5lIiwibGFzdExpbmUiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwiZmlyc3RDaGlsZE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0Q2hpbGROb2RlIiwibGFzdCIsImxhc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlIiwicGFyc2VUcmVlIiwibm9kZXMiLCJDbGFzcyIsImZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMiLCJmaXJzdExpbmVGcm9tQ2hpbGROb2RlcyIsImxhc3RMaW5lRnJvbUNoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmlyc3RDaGlsZE5vZGVGaXJzdExpbmUiLCJnZXRGaXJzdExpbmUiLCJsYXN0Q2hpbGROb2RlRmlyc3RMaW5lIiwiZ2V0TGFzdExpbmUiLCJhcnJheSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLDJCQUEyQkMsUUFBUSxxQ0FBUixDQUEvQjs7SUFFTUMsZTtBQUNKLDJCQUFZQyxjQUFaLEVBQTRCQyxVQUE1QixFQUF3Q0MsU0FBeEMsRUFBbURDLFFBQW5ELEVBQTZEO0FBQUE7O0FBQzNELFNBQUtILGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7Ozs7d0NBRW1CO0FBQ2xCLGFBQU8sS0FBS0gsY0FBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLQyxTQUFaO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0MsUUFBWjtBQUNEOzs7a0NBRWFGLFUsRUFBWTtBQUN4QixXQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOzs7K0NBRTBCO0FBQ3pCLFVBQUlHLGlCQUFpQkMsTUFBTSxLQUFLSixVQUFYLENBQXJCO0FBQUEsVUFDSUssc0NBQXNDRixlQUFlRyx3QkFBZixFQUQxQztBQUFBLFVBRUlDLHdCQUF3QkYsbUNBRjVCLENBRHlCLENBR3dDOztBQUVqRSxhQUFPRSxxQkFBUDtBQUNEOzs7OENBRXlCO0FBQ3hCLFVBQUlDLGdCQUFnQkMsS0FBSyxLQUFLVCxVQUFWLENBQXBCO0FBQUEsVUFDSVUsb0NBQW9DRixjQUFjRyx1QkFBZCxFQUR4QztBQUFBLFVBRUlDLHVCQUF1QkYsaUNBRjNCLENBRHdCLENBR3NDOztBQUU5RCxhQUFPRSxvQkFBUDtBQUNEOzs7bUNBRWM7QUFDYixVQUFJQyxrQkFBa0IsSUFBdEI7QUFBQSxVQUE2QjtBQUN6QkMsaUNBQTJCbEIseUJBQXlCbUIsbUJBQXpCLENBQTZDRixlQUE3QyxDQUQvQjtBQUFBLFVBRUlHLFlBQVlGLHdCQUZoQixDQURhLENBRzhCOztBQUUzQyxhQUFPRSxTQUFQO0FBQ0Q7OzsrQ0FFaUNDLEssRUFBT2xCLGMsRUFBeUM7QUFBQSxVQUF6Qm1CLEtBQXlCLHVFQUFqQnBCLGVBQWlCOztBQUNoRixVQUFJRSxhQUFhaUIsS0FBakI7QUFBQSxVQUF3QjtBQUNwQkosd0JBQWtCSyxNQUFNQywrQkFBTixDQUFzQ3BCLGNBQXRDLEVBQXNEQyxVQUF0RCxDQUR0Qjs7QUFHQWlCLGNBQVEsQ0FBQ0osZUFBRCxDQUFSLENBSmdGLENBSXJEOztBQUUzQixhQUFPSSxLQUFQO0FBQ0Q7OztvREFFc0NsQixjLEVBQWdCQyxVLEVBQXFDO0FBQUEsVUFBekJrQixLQUF5Qix1RUFBakJwQixlQUFpQjs7QUFDMUYsVUFBSUcsWUFBWW1CLHdCQUF3QnBCLFVBQXhCLENBQWhCO0FBQUEsVUFDSUUsV0FBV21CLHVCQUF1QnJCLFVBQXZCLENBRGY7QUFBQSxVQUVJYSxrQkFBa0IsSUFBSUssS0FBSixDQUFVbkIsY0FBVixFQUEwQkMsVUFBMUIsRUFBc0NDLFNBQXRDLEVBQWlEQyxRQUFqRCxDQUZ0Qjs7QUFJQSxhQUFPVyxlQUFQO0FBQ0Q7Ozs7OztBQUdIUyxPQUFPQyxPQUFQLEdBQWlCekIsZUFBakI7O0FBRUEsU0FBU3NCLHVCQUFULENBQWlDcEIsVUFBakMsRUFBNkM7QUFDM0MsTUFBSUcsaUJBQWlCQyxNQUFNSixVQUFOLENBQXJCO0FBQUEsTUFDSXdCLDBCQUEwQnJCLGVBQWVzQixZQUFmLEVBRDlCO0FBQUEsTUFFSXhCLFlBQVl1Qix1QkFGaEI7O0FBSUEsU0FBT3ZCLFNBQVA7QUFDRDs7QUFFRCxTQUFTb0Isc0JBQVQsQ0FBZ0NyQixVQUFoQyxFQUE0QztBQUMxQyxNQUFJUSxnQkFBZ0JDLEtBQUtULFVBQUwsQ0FBcEI7QUFBQSxNQUNJMEIseUJBQXlCbEIsY0FBY21CLFdBQWQsRUFEN0I7QUFBQSxNQUVJekIsV0FBV3dCLHNCQUZmOztBQUlBLFNBQU94QixRQUFQO0FBQ0Q7QUFDRCxTQUFTRSxLQUFULENBQWV3QixLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDMUMsU0FBU25CLElBQVQsQ0FBY21CLEtBQWQsRUFBcUI7QUFBRSxTQUFPQSxNQUFNQSxNQUFNQyxNQUFOLEdBQWUsQ0FBckIsQ0FBUDtBQUFpQyIsImZpbGUiOiJub25UZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uLy4uL2JuZi9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlJyk7XG5cbmNsYXNzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzLCBmaXJzdExpbmUsIGxhc3RMaW5lKSB7XG4gICAgdGhpcy5wcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lO1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gICAgdGhpcy5maXJzdExpbmUgPSBmaXJzdExpbmU7XG4gICAgdGhpcy5sYXN0TGluZSA9IGxhc3RMaW5lO1xuICB9XG5cbiAgZ2V0UHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdGlvbk5hbWU7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XG4gIH1cbiAgXG4gIGdldEZpcnN0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdExpbmU7XG4gIH1cblxuICBnZXRMYXN0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sYXN0TGluZTtcbiAgfVxuXG4gIHNldENoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgdmFyIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QodGhpcy5jaGlsZE5vZGVzKSxcbiAgICAgICAgZmlyc3RDaGlsZE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4gPSBmaXJzdENoaWxkTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuID0gZmlyc3RDaGlsZE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHZhciBsYXN0Q2hpbGROb2RlID0gbGFzdCh0aGlzLmNoaWxkTm9kZXMpLFxuICAgICAgICBsYXN0Q2hpbGROb2RlTGFzdFNpZ25pZmljYW50VG9rZW4gPSBsYXN0Q2hpbGROb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuID0gbGFzdENoaWxkTm9kZUxhc3RTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIHJldHVybiBsYXN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldFBhcnNlVHJlZSgpIHtcbiAgICB2YXIgbm9uVGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUpLFxuICAgICAgICBwYXJzZVRyZWUgPSBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lLCBDbGFzcyA9IE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBDbGFzcy5mcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIG5vZGVzID0gW25vblRlcm1pbmFsTm9kZV07IC8vL1xuICAgIFxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzLCBDbGFzcyA9IE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHZhciBmaXJzdExpbmUgPSBmaXJzdExpbmVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzKSxcbiAgICAgICAgbGFzdExpbmUgPSBsYXN0TGluZUZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMpLFxuICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIGZpcnN0TGluZSwgbGFzdExpbmUpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblRlcm1pbmFsTm9kZTtcblxuZnVuY3Rpb24gZmlyc3RMaW5lRnJvbUNoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICB2YXIgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgIGZpcnN0Q2hpbGROb2RlRmlyc3RMaW5lID0gZmlyc3RDaGlsZE5vZGUuZ2V0Rmlyc3RMaW5lKCksXG4gICAgICBmaXJzdExpbmUgPSBmaXJzdENoaWxkTm9kZUZpcnN0TGluZTtcblxuICByZXR1cm4gZmlyc3RMaW5lO1xufVxuXG5mdW5jdGlvbiBsYXN0TGluZUZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgdmFyIGxhc3RDaGlsZE5vZGUgPSBsYXN0KGNoaWxkTm9kZXMpLFxuICAgICAgbGFzdENoaWxkTm9kZUZpcnN0TGluZSA9IGxhc3RDaGlsZE5vZGUuZ2V0TGFzdExpbmUoKSxcbiAgICAgIGxhc3RMaW5lID0gbGFzdENoaWxkTm9kZUZpcnN0TGluZTtcblxuICByZXR1cm4gbGFzdExpbmU7XG59XG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG4iXX0=