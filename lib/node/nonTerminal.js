'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NonTerminalNodeParseTree = require('../parseTree/nonTerminalNode');

var NonTerminalNode = function () {
  function NonTerminalNode(childNodes, productionName) {
    _classCallCheck(this, NonTerminalNode);

    this.childNodes = childNodes;
    this.productionName = productionName;
  }

  _createClass(NonTerminalNode, [{
    key: 'getChildNodes',
    value: function getChildNodes() {
      return this.childNodes;
    }
  }, {
    key: 'getProductionName',
    value: function getProductionName() {
      return this.productionName;
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
      nonTerminalNode = new NonTerminalNode(childNodes, productionName);

      nodes = [nonTerminalNode]; ///

      return nodes;
    }
  }]);

  return NonTerminalNode;
}();

module.exports = NonTerminalNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL25vblRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlIiwicGFyc2VUcmVlIiwibm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsMkJBQTJCQyxRQUFRLDhCQUFSLENBQS9COztJQUVNQyxlO0FBQ0osMkJBQVlDLFVBQVosRUFBd0JDLGNBQXhCLEVBQXdDO0FBQUE7O0FBQ3RDLFNBQUtELFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDRDs7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0QsVUFBWjtBQUNEOzs7d0NBRW1CO0FBQ2xCLGFBQU8sS0FBS0MsY0FBWjtBQUNEOzs7bUNBRWM7QUFDYixVQUFJQyxrQkFBa0IsSUFBdEI7QUFBQSxVQUE2QjtBQUN6QkMsaUNBQTJCTix5QkFBeUJPLG1CQUF6QixDQUE2Q0YsZUFBN0MsQ0FEL0I7QUFBQSxVQUVJRyxZQUFZRix3QkFGaEIsQ0FEYSxDQUc4Qjs7QUFFM0MsYUFBT0UsU0FBUDtBQUNEOzs7OEJBRWdCQyxLLEVBQU9MLGMsRUFBZ0I7QUFDdEMsVUFBSUQsYUFBYU0sS0FBakI7QUFBQSxVQUF3QjtBQUNwQkosd0JBQWtCLElBQUlILGVBQUosQ0FBb0JDLFVBQXBCLEVBQWdDQyxjQUFoQyxDQUR0Qjs7QUFHQUssY0FBUSxDQUFDSixlQUFELENBQVIsQ0FKc0MsQ0FJWDs7QUFFM0IsYUFBT0ksS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQlQsZUFBakIiLCJmaWxlIjoibm9uVGVybWluYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlJyk7XG5cbmNsYXNzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGNoaWxkTm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgICB0aGlzLnByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWU7XG4gIH1cbiAgXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuICBcbiAgZ2V0UHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdGlvbk5hbWU7XG4gIH1cbiAgXG4gIGdldFBhcnNlVHJlZSgpIHtcbiAgICB2YXIgbm9uVGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUpLFxuICAgICAgICBwYXJzZVRyZWUgPSBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgTm9uVGVybWluYWxOb2RlKGNoaWxkTm9kZXMsIHByb2R1Y3Rpb25OYW1lKTtcblxuICAgIG5vZGVzID0gW25vblRlcm1pbmFsTm9kZV07IC8vL1xuICAgIFxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblRlcm1pbmFsTm9kZTtcbiJdfQ==