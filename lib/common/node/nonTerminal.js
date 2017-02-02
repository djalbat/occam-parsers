'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NonTerminalNodeParseTree = require('../../bnf/parseTree/nonTerminalNode');

var NonTerminalNode = function () {
  function NonTerminalNode(productionName, childNodes, startLine, endLine) {
    _classCallCheck(this, NonTerminalNode);

    this.productionName = productionName;
    this.childNodes = childNodes;
    this.startLine = startLine;
    this.endLine = endLine;
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
      nonTerminalNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes);

      nodes = [nonTerminalNode]; ///

      return nodes;
    }
  }, {
    key: 'fromProductionNameAndChildNodes',
    value: function fromProductionNameAndChildNodes(productionName, childNodes) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NonTerminalNode;

      var startLine = startLineFromChildNodes(childNodes),
          endLine = endLineFromChildNodes(childNodes),
          nonTerminalNode = new Class(productionName, childNodes, startLine, endLine);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJjaGlsZE5vZGVzIiwic3RhcnRMaW5lIiwiZW5kTGluZSIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21Ob25UZXJtaW5hbE5vZGUiLCJwYXJzZVRyZWUiLCJub2RlcyIsImZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMiLCJDbGFzcyIsInN0YXJ0TGluZUZyb21DaGlsZE5vZGVzIiwiZW5kTGluZUZyb21DaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3QiLCJmaXJzdENoaWxkTm9kZVN0YXJ0TGluZSIsImdldFN0YXJ0TGluZSIsImxhc3RDaGlsZE5vZGUiLCJsYXN0IiwibGFzdENoaWxkTm9kZVN0YXJ0TGluZSIsImdldEVuZExpbmUiLCJhcnJheSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLDJCQUEyQkMsUUFBUSxxQ0FBUixDQUEvQjs7SUFFTUMsZTtBQUNKLDJCQUFZQyxjQUFaLEVBQTRCQyxVQUE1QixFQUF3Q0MsU0FBeEMsRUFBbURDLE9BQW5ELEVBQTREO0FBQUE7O0FBQzFELFNBQUtILGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7O3dDQUVtQjtBQUNsQixhQUFPLEtBQUtILGNBQVo7QUFDRDs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLQyxVQUFaO0FBQ0Q7OzttQ0FFYztBQUNiLGFBQU8sS0FBS0MsU0FBWjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtDLE9BQVo7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUMsa0JBQWtCLElBQXRCO0FBQUEsVUFBNkI7QUFDekJDLGlDQUEyQlIseUJBQXlCUyxtQkFBekIsQ0FBNkNGLGVBQTdDLENBRC9CO0FBQUEsVUFFSUcsWUFBWUYsd0JBRmhCLENBRGEsQ0FHOEI7O0FBRTNDLGFBQU9FLFNBQVA7QUFDRDs7OzhCQUVnQkMsSyxFQUFPUixjLEVBQWdCO0FBQ3RDLFVBQUlDLGFBQWFPLEtBQWpCO0FBQUEsVUFBd0I7QUFDcEJKLHdCQUFrQkwsZ0JBQWdCVSwrQkFBaEIsQ0FBZ0RULGNBQWhELEVBQWdFQyxVQUFoRSxDQUR0Qjs7QUFHQU8sY0FBUSxDQUFDSixlQUFELENBQVIsQ0FKc0MsQ0FJWDs7QUFFM0IsYUFBT0ksS0FBUDtBQUNEOzs7b0RBRXNDUixjLEVBQWdCQyxVLEVBQXFDO0FBQUEsVUFBekJTLEtBQXlCLHVFQUFqQlgsZUFBaUI7O0FBQzFGLFVBQUlHLFlBQVlTLHdCQUF3QlYsVUFBeEIsQ0FBaEI7QUFBQSxVQUNJRSxVQUFVUyxzQkFBc0JYLFVBQXRCLENBRGQ7QUFBQSxVQUVJRyxrQkFBa0IsSUFBSU0sS0FBSixDQUFVVixjQUFWLEVBQTBCQyxVQUExQixFQUFzQ0MsU0FBdEMsRUFBaURDLE9BQWpELENBRnRCOztBQUlBLGFBQU9DLGVBQVA7QUFDRDs7Ozs7O0FBR0hTLE9BQU9DLE9BQVAsR0FBaUJmLGVBQWpCOztBQUVBLFNBQVNZLHVCQUFULENBQWlDVixVQUFqQyxFQUE2QztBQUMzQyxNQUFJYyxpQkFBaUJDLE1BQU1mLFVBQU4sQ0FBckI7QUFBQSxNQUNJZ0IsMEJBQTBCRixlQUFlRyxZQUFmLEVBRDlCO0FBQUEsTUFFSWhCLFlBQVllLHVCQUZoQjs7QUFJQSxTQUFPZixTQUFQO0FBQ0Q7O0FBRUQsU0FBU1UscUJBQVQsQ0FBK0JYLFVBQS9CLEVBQTJDO0FBQ3pDLE1BQUlrQixnQkFBZ0JDLEtBQUtuQixVQUFMLENBQXBCO0FBQUEsTUFDSW9CLHlCQUF5QkYsY0FBY0csVUFBZCxFQUQ3QjtBQUFBLE1BRUluQixVQUFVa0Isc0JBRmQ7O0FBSUEsU0FBT2xCLE9BQVA7QUFDRDtBQUNELFNBQVNhLEtBQVQsQ0FBZU8sS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzFDLFNBQVNILElBQVQsQ0FBY0csS0FBZCxFQUFxQjtBQUFFLFNBQU9BLE1BQU1BLE1BQU1DLE1BQU4sR0FBZSxDQUFyQixDQUFQO0FBQWlDIiwiZmlsZSI6Im5vblRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vLi4vYm5mL3BhcnNlVHJlZS9ub25UZXJtaW5hbE5vZGUnKTtcblxuY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIHN0YXJ0TGluZSwgZW5kTGluZSkge1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICAgIHRoaXMuc3RhcnRMaW5lID0gc3RhcnRMaW5lO1xuICAgIHRoaXMuZW5kTGluZSA9IGVuZExpbmU7XG4gIH1cblxuICBnZXRQcm9kdWN0aW9uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0aW9uTmFtZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuICBcbiAgZ2V0U3RhcnRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0TGluZTtcbiAgfVxuXG4gIGdldEVuZExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5kTGluZTtcbiAgfVxuXG4gIGdldFBhcnNlVHJlZSgpIHtcbiAgICB2YXIgbm9uVGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUpLFxuICAgICAgICBwYXJzZVRyZWUgPSBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2Rlcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICBub2RlcyA9IFtub25UZXJtaW5hbE5vZGVdOyAvLy9cbiAgICBcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2Rlcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB2YXIgc3RhcnRMaW5lID0gc3RhcnRMaW5lRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcyksXG4gICAgICAgIGVuZExpbmUgPSBlbmRMaW5lRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcyksXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2Rlcywgc3RhcnRMaW5lLCBlbmRMaW5lKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25UZXJtaW5hbE5vZGU7XG5cbmZ1bmN0aW9uIHN0YXJ0TGluZUZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgdmFyIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICBmaXJzdENoaWxkTm9kZVN0YXJ0TGluZSA9IGZpcnN0Q2hpbGROb2RlLmdldFN0YXJ0TGluZSgpLFxuICAgICAgc3RhcnRMaW5lID0gZmlyc3RDaGlsZE5vZGVTdGFydExpbmU7XG5cbiAgcmV0dXJuIHN0YXJ0TGluZTtcbn1cblxuZnVuY3Rpb24gZW5kTGluZUZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgdmFyIGxhc3RDaGlsZE5vZGUgPSBsYXN0KGNoaWxkTm9kZXMpLFxuICAgICAgbGFzdENoaWxkTm9kZVN0YXJ0TGluZSA9IGxhc3RDaGlsZE5vZGUuZ2V0RW5kTGluZSgpLFxuICAgICAgZW5kTGluZSA9IGxhc3RDaGlsZE5vZGVTdGFydExpbmU7XG5cbiAgcmV0dXJuIGVuZExpbmU7XG59XG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG4iXX0=