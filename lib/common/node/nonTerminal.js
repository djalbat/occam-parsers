'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NonTerminalNodeParseTree = require('../../bnf/parseTree/nonTerminalNode');

var NonTerminalNode = function () {
  function NonTerminalNode(childNodes, productionName, startLine, endLine) {
    _classCallCheck(this, NonTerminalNode);

    this.childNodes = childNodes;
    this.productionName = productionName;
    this.startLine = startLine;
    this.endLine = endLine;
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
    key: 'getStartLine',
    value: function getStartLine() {
      return this.startLine;
    }
  }, {
    key: 'getEndLine',
    value: function getEndLine() {
      return this.endLine;
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
      nonTerminalNode = NonTerminalNode.fromChildNodesAndProductionName(childNodes, productionName);

      nodes = [nonTerminalNode]; ///

      return nodes;
    }
  }, {
    key: 'fromChildNodesAndProductionName',
    value: function fromChildNodesAndProductionName(childNodes, productionName) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NonTerminalNode;

      var startLine = startLineFromChildNodes(childNodes),
          endLine = endLineFromChildNodes(childNodes),
          nonTerminalNode = new Class(childNodes, productionName, startLine, endLine);

      return nonTerminalNode;
    }
  }]);

  return NonTerminalNode;
}();

module.exports = NonTerminalNode;

function startLineFromChildNodes(childNodes) {
  var firstChildNode = first(childNodes),
      firstChildNodeStartLine = firstChildNode.getStartLine(),
      startLine = firstChildNodeStartLine;

  return startLine;
}

function endLineFromChildNodes(childNodes) {
  var lastChildNode = last(childNodes),
      lastChildNodeStartLine = lastChildNode.getEndLine(),
      endLine = lastChildNodeStartLine;

  return endLine;
}
function first(array) {
  return array[0];
}
function last(array) {
  return array[array.length - 1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsInByb2R1Y3Rpb25OYW1lIiwic3RhcnRMaW5lIiwiZW5kTGluZSIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21Ob25UZXJtaW5hbE5vZGUiLCJwYXJzZVRyZWUiLCJub2RlcyIsImZyb21DaGlsZE5vZGVzQW5kUHJvZHVjdGlvbk5hbWUiLCJDbGFzcyIsInN0YXJ0TGluZUZyb21DaGlsZE5vZGVzIiwiZW5kTGluZUZyb21DaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3QiLCJmaXJzdENoaWxkTm9kZVN0YXJ0TGluZSIsImdldFN0YXJ0TGluZSIsImxhc3RDaGlsZE5vZGUiLCJsYXN0IiwibGFzdENoaWxkTm9kZVN0YXJ0TGluZSIsImdldEVuZExpbmUiLCJhcnJheSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLDJCQUEyQkMsUUFBUSxxQ0FBUixDQUEvQjs7SUFFTUMsZTtBQUNKLDJCQUFZQyxVQUFaLEVBQXdCQyxjQUF4QixFQUF3Q0MsU0FBeEMsRUFBbURDLE9BQW5ELEVBQTREO0FBQUE7O0FBQzFELFNBQUtILFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLSCxVQUFaO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsYUFBTyxLQUFLQyxjQUFaO0FBQ0Q7OzttQ0FFYztBQUNiLGFBQU8sS0FBS0MsU0FBWjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtDLE9BQVo7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUMsa0JBQWtCLElBQXRCO0FBQUEsVUFBNkI7QUFDekJDLGlDQUEyQlIseUJBQXlCUyxtQkFBekIsQ0FBNkNGLGVBQTdDLENBRC9CO0FBQUEsVUFFSUcsWUFBWUYsd0JBRmhCLENBRGEsQ0FHOEI7O0FBRTNDLGFBQU9FLFNBQVA7QUFDRDs7OzhCQUVnQkMsSyxFQUFPUCxjLEVBQWdCO0FBQ3RDLFVBQUlELGFBQWFRLEtBQWpCO0FBQUEsVUFBd0I7QUFDcEJKLHdCQUFrQkwsZ0JBQWdCVSwrQkFBaEIsQ0FBZ0RULFVBQWhELEVBQTREQyxjQUE1RCxDQUR0Qjs7QUFHQU8sY0FBUSxDQUFDSixlQUFELENBQVIsQ0FKc0MsQ0FJWDs7QUFFM0IsYUFBT0ksS0FBUDtBQUNEOzs7b0RBRXNDUixVLEVBQVlDLGMsRUFBeUM7QUFBQSxVQUF6QlMsS0FBeUIsdUVBQWpCWCxlQUFpQjs7QUFDMUYsVUFBSUcsWUFBWVMsd0JBQXdCWCxVQUF4QixDQUFoQjtBQUFBLFVBQ0lHLFVBQVVTLHNCQUFzQlosVUFBdEIsQ0FEZDtBQUFBLFVBRUlJLGtCQUFrQixJQUFJTSxLQUFKLENBQVVWLFVBQVYsRUFBc0JDLGNBQXRCLEVBQXNDQyxTQUF0QyxFQUFpREMsT0FBakQsQ0FGdEI7O0FBSUEsYUFBT0MsZUFBUDtBQUNEOzs7Ozs7QUFHSFMsT0FBT0MsT0FBUCxHQUFpQmYsZUFBakI7O0FBRUEsU0FBU1ksdUJBQVQsQ0FBaUNYLFVBQWpDLEVBQTZDO0FBQzNDLE1BQUllLGlCQUFpQkMsTUFBTWhCLFVBQU4sQ0FBckI7QUFBQSxNQUNJaUIsMEJBQTBCRixlQUFlRyxZQUFmLEVBRDlCO0FBQUEsTUFFSWhCLFlBQVllLHVCQUZoQjs7QUFJQSxTQUFPZixTQUFQO0FBQ0Q7O0FBRUQsU0FBU1UscUJBQVQsQ0FBK0JaLFVBQS9CLEVBQTJDO0FBQ3pDLE1BQUltQixnQkFBZ0JDLEtBQUtwQixVQUFMLENBQXBCO0FBQUEsTUFDSXFCLHlCQUF5QkYsY0FBY0csVUFBZCxFQUQ3QjtBQUFBLE1BRUluQixVQUFVa0Isc0JBRmQ7O0FBSUEsU0FBT2xCLE9BQVA7QUFDRDtBQUNELFNBQVNhLEtBQVQsQ0FBZU8sS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzFDLFNBQVNILElBQVQsQ0FBY0csS0FBZCxFQUFxQjtBQUFFLFNBQU9BLE1BQU1BLE1BQU1DLE1BQU4sR0FBZSxDQUFyQixDQUFQO0FBQWlDIiwiZmlsZSI6Im5vblRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vLi4vYm5mL3BhcnNlVHJlZS9ub25UZXJtaW5hbE5vZGUnKTtcblxuY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IoY2hpbGROb2RlcywgcHJvZHVjdGlvbk5hbWUsIHN0YXJ0TGluZSwgZW5kTGluZSkge1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gICAgdGhpcy5wcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lO1xuICAgIHRoaXMuc3RhcnRMaW5lID0gc3RhcnRMaW5lO1xuICAgIHRoaXMuZW5kTGluZSA9IGVuZExpbmU7XG4gIH1cbiAgXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuICBcbiAgZ2V0UHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdGlvbk5hbWU7XG4gIH1cblxuICBnZXRTdGFydExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRMaW5lO1xuICB9XG5cbiAgZ2V0RW5kTGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbmRMaW5lO1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIHZhciBub25UZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSksXG4gICAgICAgIHBhcnNlVHJlZSA9IG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tQ2hpbGROb2Rlc0FuZFByb2R1Y3Rpb25OYW1lKGNoaWxkTm9kZXMsIHByb2R1Y3Rpb25OYW1lKTtcblxuICAgIG5vZGVzID0gW25vblRlcm1pbmFsTm9kZV07IC8vL1xuICAgIFxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2hpbGROb2Rlc0FuZFByb2R1Y3Rpb25OYW1lKGNoaWxkTm9kZXMsIHByb2R1Y3Rpb25OYW1lLCBDbGFzcyA9IE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHZhciBzdGFydExpbmUgPSBzdGFydExpbmVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzKSxcbiAgICAgICAgZW5kTGluZSA9IGVuZExpbmVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzKSxcbiAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKGNoaWxkTm9kZXMsIHByb2R1Y3Rpb25OYW1lLCBzdGFydExpbmUsIGVuZExpbmUpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblRlcm1pbmFsTm9kZTtcblxuZnVuY3Rpb24gc3RhcnRMaW5lRnJvbUNoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICB2YXIgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgIGZpcnN0Q2hpbGROb2RlU3RhcnRMaW5lID0gZmlyc3RDaGlsZE5vZGUuZ2V0U3RhcnRMaW5lKCksXG4gICAgICBzdGFydExpbmUgPSBmaXJzdENoaWxkTm9kZVN0YXJ0TGluZTtcblxuICByZXR1cm4gc3RhcnRMaW5lO1xufVxuXG5mdW5jdGlvbiBlbmRMaW5lRnJvbUNoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICB2YXIgbGFzdENoaWxkTm9kZSA9IGxhc3QoY2hpbGROb2RlcyksXG4gICAgICBsYXN0Q2hpbGROb2RlU3RhcnRMaW5lID0gbGFzdENoaWxkTm9kZS5nZXRFbmRMaW5lKCksXG4gICAgICBlbmRMaW5lID0gbGFzdENoaWxkTm9kZVN0YXJ0TGluZTtcblxuICByZXR1cm4gZW5kTGluZTtcbn1cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cbiJdfQ==