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
      var nontTerminalNode = this,
          ///
      nonTerminalNodeParseTree = NonTerminalNodeParseTree.fromNonTerminalNode(nontTerminalNode),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL25vblRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJub250VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbU5vblRlcm1pbmFsTm9kZSIsInBhcnNlVHJlZSIsIm5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLDJCQUEyQkMsUUFBUSw4QkFBUixDQUEvQjs7SUFFTUMsZTtBQUNKLDJCQUFZQyxVQUFaLEVBQXdCQyxjQUF4QixFQUF3QztBQUFBOztBQUN0QyxTQUFLRCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0Q7Ozs7b0NBRWU7QUFDZCxhQUFPLEtBQUtELFVBQVo7QUFDRDs7O3dDQUVtQjtBQUNsQixhQUFPLEtBQUtDLGNBQVo7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUMsbUJBQW1CLElBQXZCO0FBQUEsVUFBOEI7QUFDMUJDLGlDQUEyQk4seUJBQXlCTyxtQkFBekIsQ0FBNkNGLGdCQUE3QyxDQUQvQjtBQUFBLFVBRUlHLFlBQVlGLHdCQUZoQixDQURhLENBRzhCOztBQUUzQyxhQUFPRSxTQUFQO0FBQ0Q7Ozs4QkFFZ0JDLEssRUFBT0wsYyxFQUFnQjtBQUN0QyxVQUFJRCxhQUFhTSxLQUFqQjtBQUFBLFVBQXdCO0FBQ3BCQyx3QkFBa0IsSUFBSVIsZUFBSixDQUFvQkMsVUFBcEIsRUFBZ0NDLGNBQWhDLENBRHRCOztBQUdBSyxjQUFRLENBQUNDLGVBQUQsQ0FBUixDQUpzQyxDQUlYOztBQUUzQixhQUFPRCxLQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCVixlQUFqQiIsImZpbGUiOiJub25UZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZS9ub25UZXJtaW5hbE5vZGUnKTtcblxuY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IoY2hpbGROb2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgfVxuICBcbiAgZ2V0Q2hpbGROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzO1xuICB9XG4gIFxuICBnZXRQcm9kdWN0aW9uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0aW9uTmFtZTtcbiAgfVxuICBcbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIHZhciBub250VGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbU5vblRlcm1pbmFsTm9kZShub250VGVybWluYWxOb2RlKSxcbiAgICAgICAgcGFyc2VUcmVlID0gbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICB2YXIgY2hpbGROb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbmV3IE5vblRlcm1pbmFsTm9kZShjaGlsZE5vZGVzLCBwcm9kdWN0aW9uTmFtZSk7XG5cbiAgICBub2RlcyA9IFtub25UZXJtaW5hbE5vZGVdOyAvLy9cbiAgICBcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25UZXJtaW5hbE5vZGU7XG4iXX0=