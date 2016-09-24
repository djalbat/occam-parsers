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
    key: 'getParseTree',
    value: function getParseTree() {
      var parseTree = ParseTree.fromProductionNameAndChildNodes(this.productionName, this.childNodes);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL25vblRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIlBhcnNlVHJlZSIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJwYXJzZVRyZWUiLCJmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzIiwibm9kZXMiLCJub25UZXJtaW5hbE5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsWUFBWUMsUUFBUSxjQUFSLENBQWhCOztJQUVNQyxlO0FBQ0osMkJBQVlDLFVBQVosRUFBd0JDLGNBQXhCLEVBQXdDO0FBQUE7O0FBQ3RDLFNBQUtELFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDRDs7OzttQ0FFYztBQUNiLFVBQUlDLFlBQVlMLFVBQVVNLCtCQUFWLENBQTBDLEtBQUtGLGNBQS9DLEVBQStELEtBQUtELFVBQXBFLENBQWhCOztBQUVBLGFBQU9FLFNBQVA7QUFDRDs7OzhCQUVnQkUsSyxFQUFPSCxjLEVBQWdCO0FBQ3RDLFVBQUlELGFBQWFJLEtBQWpCO0FBQUEsVUFBd0I7QUFDcEJDLHdCQUFrQixJQUFJTixlQUFKLENBQW9CQyxVQUFwQixFQUFnQ0MsY0FBaEMsQ0FEdEI7O0FBR0FHLGNBQVEsQ0FBQ0MsZUFBRCxDQUFSLENBSnNDLENBSVg7O0FBRTNCLGFBQU9ELEtBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJSLGVBQWpCIiwiZmlsZSI6Im5vblRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlJyk7XG5cbmNsYXNzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGNoaWxkTm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgICB0aGlzLnByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWU7XG4gIH1cbiAgXG4gIGdldFBhcnNlVHJlZSgpIHtcbiAgICB2YXIgcGFyc2VUcmVlID0gUGFyc2VUcmVlLmZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXModGhpcy5wcm9kdWN0aW9uTmFtZSwgdGhpcy5jaGlsZE5vZGVzKTtcbiAgICBcbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICB2YXIgY2hpbGROb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbmV3IE5vblRlcm1pbmFsTm9kZShjaGlsZE5vZGVzLCBwcm9kdWN0aW9uTmFtZSk7XG5cbiAgICBub2RlcyA9IFtub25UZXJtaW5hbE5vZGVdOyAvLy9cbiAgICBcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25UZXJtaW5hbE5vZGU7XG4iXX0=