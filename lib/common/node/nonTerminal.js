'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var missingLine = require('../missingLine'),
    NonTerminalNodeParseTree = require('../../bnf/parseTree/nonTerminalNode');

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
      firstChildNodeStartLine = firstChildNode !== undefined ? firstChildNode.getStartLine() : missingLine,
      startLine = firstChildNodeStartLine;

  return startLine;
}

function endLineFromChildNodes(childNodes) {
  var lastChildNode = last(childNodes),
      lastChildNodeStartLine = lastChildNode !== undefined ? lastChildNode.getEndLine() : missingLine,
      endLine = lastChildNodeStartLine;

  return endLine;
}
function first(array) {
  return array[0];
}
function last(array) {
  return array[array.length - 1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJtaXNzaW5nTGluZSIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJOb25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJzdGFydExpbmUiLCJlbmRMaW5lIiwibm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbU5vblRlcm1pbmFsTm9kZSIsInBhcnNlVHJlZSIsIm5vZGVzIiwiZnJvbUNoaWxkTm9kZXNBbmRQcm9kdWN0aW9uTmFtZSIsIkNsYXNzIiwic3RhcnRMaW5lRnJvbUNoaWxkTm9kZXMiLCJlbmRMaW5lRnJvbUNoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdCIsImZpcnN0Q2hpbGROb2RlU3RhcnRMaW5lIiwidW5kZWZpbmVkIiwiZ2V0U3RhcnRMaW5lIiwibGFzdENoaWxkTm9kZSIsImxhc3QiLCJsYXN0Q2hpbGROb2RlU3RhcnRMaW5lIiwiZ2V0RW5kTGluZSIsImFycmF5IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsY0FBY0MsUUFBUSxnQkFBUixDQUFsQjtBQUFBLElBQ0lDLDJCQUEyQkQsUUFBUSxxQ0FBUixDQUQvQjs7SUFHTUUsZTtBQUNKLDJCQUFZQyxVQUFaLEVBQXdCQyxjQUF4QixFQUF3Q0MsU0FBeEMsRUFBbURDLE9BQW5ELEVBQTREO0FBQUE7O0FBQzFELFNBQUtILFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLSCxVQUFaO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsYUFBTyxLQUFLQyxjQUFaO0FBQ0Q7OzttQ0FFYztBQUNiLGFBQU8sS0FBS0MsU0FBWjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtDLE9BQVo7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUMsa0JBQWtCLElBQXRCO0FBQUEsVUFBNkI7QUFDekJDLGlDQUEyQlAseUJBQXlCUSxtQkFBekIsQ0FBNkNGLGVBQTdDLENBRC9CO0FBQUEsVUFFSUcsWUFBWUYsd0JBRmhCLENBRGEsQ0FHOEI7O0FBRTNDLGFBQU9FLFNBQVA7QUFDRDs7OzhCQUVnQkMsSyxFQUFPUCxjLEVBQWdCO0FBQ3RDLFVBQUlELGFBQWFRLEtBQWpCO0FBQUEsVUFBd0I7QUFDcEJKLHdCQUFrQkwsZ0JBQWdCVSwrQkFBaEIsQ0FBZ0RULFVBQWhELEVBQTREQyxjQUE1RCxDQUR0Qjs7QUFHQU8sY0FBUSxDQUFDSixlQUFELENBQVIsQ0FKc0MsQ0FJWDs7QUFFM0IsYUFBT0ksS0FBUDtBQUNEOzs7b0RBRXNDUixVLEVBQVlDLGMsRUFBeUM7QUFBQSxVQUF6QlMsS0FBeUIsdUVBQWpCWCxlQUFpQjs7QUFDMUYsVUFBSUcsWUFBWVMsd0JBQXdCWCxVQUF4QixDQUFoQjtBQUFBLFVBQ0lHLFVBQVVTLHNCQUFzQlosVUFBdEIsQ0FEZDtBQUFBLFVBRUlJLGtCQUFrQixJQUFJTSxLQUFKLENBQVVWLFVBQVYsRUFBc0JDLGNBQXRCLEVBQXNDQyxTQUF0QyxFQUFpREMsT0FBakQsQ0FGdEI7O0FBSUEsYUFBT0MsZUFBUDtBQUNEOzs7Ozs7QUFHSFMsT0FBT0MsT0FBUCxHQUFpQmYsZUFBakI7O0FBRUEsU0FBU1ksdUJBQVQsQ0FBaUNYLFVBQWpDLEVBQTZDO0FBQzNDLE1BQUllLGlCQUFpQkMsTUFBTWhCLFVBQU4sQ0FBckI7QUFBQSxNQUNJaUIsMEJBQTJCRixtQkFBbUJHLFNBQXBCLEdBQ0dILGVBQWVJLFlBQWYsRUFESCxHQUVLdkIsV0FIbkM7QUFBQSxNQUlJTSxZQUFZZSx1QkFKaEI7O0FBTUEsU0FBT2YsU0FBUDtBQUNEOztBQUVELFNBQVNVLHFCQUFULENBQStCWixVQUEvQixFQUEyQztBQUN6QyxNQUFJb0IsZ0JBQWdCQyxLQUFLckIsVUFBTCxDQUFwQjtBQUFBLE1BQ0lzQix5QkFBMEJGLGtCQUFrQkYsU0FBbkIsR0FDR0UsY0FBY0csVUFBZCxFQURILEdBRUszQixXQUhsQztBQUFBLE1BSUlPLFVBQVVtQixzQkFKZDs7QUFNQSxTQUFPbkIsT0FBUDtBQUNEO0FBQ0QsU0FBU2EsS0FBVCxDQUFlUSxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDMUMsU0FBU0gsSUFBVCxDQUFjRyxLQUFkLEVBQXFCO0FBQUUsU0FBT0EsTUFBTUEsTUFBTUMsTUFBTixHQUFlLENBQXJCLENBQVA7QUFBaUMiLCJmaWxlIjoibm9uVGVybWluYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBtaXNzaW5nTGluZSA9IHJlcXVpcmUoJy4uL21pc3NpbmdMaW5lJyksXG4gICAgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vLi4vYm5mL3BhcnNlVHJlZS9ub25UZXJtaW5hbE5vZGUnKTtcblxuY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IoY2hpbGROb2RlcywgcHJvZHVjdGlvbk5hbWUsIHN0YXJ0TGluZSwgZW5kTGluZSkge1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gICAgdGhpcy5wcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lO1xuICAgIHRoaXMuc3RhcnRMaW5lID0gc3RhcnRMaW5lO1xuICAgIHRoaXMuZW5kTGluZSA9IGVuZExpbmU7XG4gIH1cbiAgXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuICBcbiAgZ2V0UHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdGlvbk5hbWU7XG4gIH1cblxuICBnZXRTdGFydExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRMaW5lO1xuICB9XG5cbiAgZ2V0RW5kTGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbmRMaW5lO1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIHZhciBub25UZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSksXG4gICAgICAgIHBhcnNlVHJlZSA9IG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tQ2hpbGROb2Rlc0FuZFByb2R1Y3Rpb25OYW1lKGNoaWxkTm9kZXMsIHByb2R1Y3Rpb25OYW1lKTtcblxuICAgIG5vZGVzID0gW25vblRlcm1pbmFsTm9kZV07IC8vL1xuICAgIFxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2hpbGROb2Rlc0FuZFByb2R1Y3Rpb25OYW1lKGNoaWxkTm9kZXMsIHByb2R1Y3Rpb25OYW1lLCBDbGFzcyA9IE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHZhciBzdGFydExpbmUgPSBzdGFydExpbmVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzKSxcbiAgICAgICAgZW5kTGluZSA9IGVuZExpbmVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzKSxcbiAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKGNoaWxkTm9kZXMsIHByb2R1Y3Rpb25OYW1lLCBzdGFydExpbmUsIGVuZExpbmUpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblRlcm1pbmFsTm9kZTtcblxuZnVuY3Rpb24gc3RhcnRMaW5lRnJvbUNoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICB2YXIgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgIGZpcnN0Q2hpbGROb2RlU3RhcnRMaW5lID0gKGZpcnN0Q2hpbGROb2RlICE9PSB1bmRlZmluZWQpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RDaGlsZE5vZGUuZ2V0U3RhcnRMaW5lKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pc3NpbmdMaW5lLFxuICAgICAgc3RhcnRMaW5lID0gZmlyc3RDaGlsZE5vZGVTdGFydExpbmU7XG5cbiAgcmV0dXJuIHN0YXJ0TGluZTtcbn1cblxuZnVuY3Rpb24gZW5kTGluZUZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgdmFyIGxhc3RDaGlsZE5vZGUgPSBsYXN0KGNoaWxkTm9kZXMpLFxuICAgICAgbGFzdENoaWxkTm9kZVN0YXJ0TGluZSA9IChsYXN0Q2hpbGROb2RlICE9PSB1bmRlZmluZWQpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0Q2hpbGROb2RlLmdldEVuZExpbmUoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaXNzaW5nTGluZSxcbiAgICAgIGVuZExpbmUgPSBsYXN0Q2hpbGROb2RlU3RhcnRMaW5lO1xuXG4gIHJldHVybiBlbmRMaW5lO1xufVxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuIl19