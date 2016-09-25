'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ParseTree = require('../parseTree');

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
      parseTree = ParseTree.fromNonTerminalNode(nonTerminalNode);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL25vblRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIlBhcnNlVHJlZSIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJub25UZXJtaW5hbE5vZGUiLCJwYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlIiwibm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsWUFBWUMsUUFBUSxjQUFSLENBQWhCOztJQUVNQyxlO0FBQ0osMkJBQVlDLFVBQVosRUFBd0JDLGNBQXhCLEVBQXdDO0FBQUE7O0FBQ3RDLFNBQUtELFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDRDs7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0QsVUFBWjtBQUNEOzs7d0NBRW1CO0FBQ2xCLGFBQU8sS0FBS0MsY0FBWjtBQUNEOzs7bUNBRWM7QUFDYixVQUFJQyxrQkFBa0IsSUFBdEI7QUFBQSxVQUE0QjtBQUN4QkMsa0JBQVlOLFVBQVVPLG1CQUFWLENBQThCRixlQUE5QixDQURoQjs7QUFHQSxhQUFPQyxTQUFQO0FBQ0Q7Ozs4QkFFZ0JFLEssRUFBT0osYyxFQUFnQjtBQUN0QyxVQUFJRCxhQUFhSyxLQUFqQjtBQUFBLFVBQXdCO0FBQ3BCSCx3QkFBa0IsSUFBSUgsZUFBSixDQUFvQkMsVUFBcEIsRUFBZ0NDLGNBQWhDLENBRHRCOztBQUdBSSxjQUFRLENBQUNILGVBQUQsQ0FBUixDQUpzQyxDQUlYOztBQUUzQixhQUFPRyxLQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCUixlQUFqQiIsImZpbGUiOiJub25UZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZScpO1xuXG5jbGFzcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihjaGlsZE5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gICAgdGhpcy5wcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lO1xuICB9XG4gIFxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XG4gIH1cbiAgXG4gIGdldFByb2R1Y3Rpb25OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3Rpb25OYW1lO1xuICB9XG4gIFxuICBnZXRQYXJzZVRyZWUoKSB7XG4gICAgdmFyIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMsIC8vL1xuICAgICAgICBwYXJzZVRyZWUgPSBQYXJzZVRyZWUuZnJvbU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUpO1xuICAgIFxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgTm9uVGVybWluYWxOb2RlKGNoaWxkTm9kZXMsIHByb2R1Y3Rpb25OYW1lKTtcblxuICAgIG5vZGVzID0gW25vblRlcm1pbmFsTm9kZV07IC8vL1xuICAgIFxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblRlcm1pbmFsTm9kZTtcbiJdfQ==