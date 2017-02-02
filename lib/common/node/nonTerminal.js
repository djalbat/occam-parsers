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
    key: 'setChildNodes',
    value: function setChildNodes(childNodes) {
      this.childNodes = childNodes;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJjaGlsZE5vZGVzIiwic3RhcnRMaW5lIiwiZW5kTGluZSIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21Ob25UZXJtaW5hbE5vZGUiLCJwYXJzZVRyZWUiLCJub2RlcyIsImZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMiLCJDbGFzcyIsInN0YXJ0TGluZUZyb21DaGlsZE5vZGVzIiwiZW5kTGluZUZyb21DaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3QiLCJmaXJzdENoaWxkTm9kZVN0YXJ0TGluZSIsImdldFN0YXJ0TGluZSIsImxhc3RDaGlsZE5vZGUiLCJsYXN0IiwibGFzdENoaWxkTm9kZVN0YXJ0TGluZSIsImdldEVuZExpbmUiLCJhcnJheSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLDJCQUEyQkMsUUFBUSxxQ0FBUixDQUEvQjs7SUFFTUMsZTtBQUNKLDJCQUFZQyxjQUFaLEVBQTRCQyxVQUE1QixFQUF3Q0MsU0FBeEMsRUFBbURDLE9BQW5ELEVBQTREO0FBQUE7O0FBQzFELFNBQUtILGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7O3dDQUVtQjtBQUNsQixhQUFPLEtBQUtILGNBQVo7QUFDRDs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLQyxVQUFaO0FBQ0Q7OzttQ0FFYztBQUNiLGFBQU8sS0FBS0MsU0FBWjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtDLE9BQVo7QUFDRDs7O2tDQUVhRixVLEVBQVk7QUFDeEIsV0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUcsa0JBQWtCLElBQXRCO0FBQUEsVUFBNkI7QUFDekJDLGlDQUEyQlIseUJBQXlCUyxtQkFBekIsQ0FBNkNGLGVBQTdDLENBRC9CO0FBQUEsVUFFSUcsWUFBWUYsd0JBRmhCLENBRGEsQ0FHOEI7O0FBRTNDLGFBQU9FLFNBQVA7QUFDRDs7OzhCQUVnQkMsSyxFQUFPUixjLEVBQWdCO0FBQ3RDLFVBQUlDLGFBQWFPLEtBQWpCO0FBQUEsVUFBd0I7QUFDcEJKLHdCQUFrQkwsZ0JBQWdCVSwrQkFBaEIsQ0FBZ0RULGNBQWhELEVBQWdFQyxVQUFoRSxDQUR0Qjs7QUFHQU8sY0FBUSxDQUFDSixlQUFELENBQVIsQ0FKc0MsQ0FJWDs7QUFFM0IsYUFBT0ksS0FBUDtBQUNEOzs7b0RBRXNDUixjLEVBQWdCQyxVLEVBQXFDO0FBQUEsVUFBekJTLEtBQXlCLHVFQUFqQlgsZUFBaUI7O0FBQzFGLFVBQUlHLFlBQVlTLHdCQUF3QlYsVUFBeEIsQ0FBaEI7QUFBQSxVQUNJRSxVQUFVUyxzQkFBc0JYLFVBQXRCLENBRGQ7QUFBQSxVQUVJRyxrQkFBa0IsSUFBSU0sS0FBSixDQUFVVixjQUFWLEVBQTBCQyxVQUExQixFQUFzQ0MsU0FBdEMsRUFBaURDLE9BQWpELENBRnRCOztBQUlBLGFBQU9DLGVBQVA7QUFDRDs7Ozs7O0FBR0hTLE9BQU9DLE9BQVAsR0FBaUJmLGVBQWpCOztBQUVBLFNBQVNZLHVCQUFULENBQWlDVixVQUFqQyxFQUE2QztBQUMzQyxNQUFJYyxpQkFBaUJDLE1BQU1mLFVBQU4sQ0FBckI7QUFBQSxNQUNJZ0IsMEJBQTBCRixlQUFlRyxZQUFmLEVBRDlCO0FBQUEsTUFFSWhCLFlBQVllLHVCQUZoQjs7QUFJQSxTQUFPZixTQUFQO0FBQ0Q7O0FBRUQsU0FBU1UscUJBQVQsQ0FBK0JYLFVBQS9CLEVBQTJDO0FBQ3pDLE1BQUlrQixnQkFBZ0JDLEtBQUtuQixVQUFMLENBQXBCO0FBQUEsTUFDSW9CLHlCQUF5QkYsY0FBY0csVUFBZCxFQUQ3QjtBQUFBLE1BRUluQixVQUFVa0Isc0JBRmQ7O0FBSUEsU0FBT2xCLE9BQVA7QUFDRDtBQUNELFNBQVNhLEtBQVQsQ0FBZU8sS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzFDLFNBQVNILElBQVQsQ0FBY0csS0FBZCxFQUFxQjtBQUFFLFNBQU9BLE1BQU1BLE1BQU1DLE1BQU4sR0FBZSxDQUFyQixDQUFQO0FBQWlDIiwiZmlsZSI6Im5vblRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vLi4vYm5mL3BhcnNlVHJlZS9ub25UZXJtaW5hbE5vZGUnKTtcblxuY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIHN0YXJ0TGluZSwgZW5kTGluZSkge1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICAgIHRoaXMuc3RhcnRMaW5lID0gc3RhcnRMaW5lO1xuICAgIHRoaXMuZW5kTGluZSA9IGVuZExpbmU7XG4gIH1cblxuICBnZXRQcm9kdWN0aW9uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0aW9uTmFtZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuICBcbiAgZ2V0U3RhcnRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0TGluZTtcbiAgfVxuXG4gIGdldEVuZExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5kTGluZTtcbiAgfVxuXG4gIHNldENoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gIH1cblxuICBnZXRQYXJzZVRyZWUoKSB7XG4gICAgdmFyIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21Ob25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlKSxcbiAgICAgICAgcGFyc2VUcmVlID0gbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICB2YXIgY2hpbGROb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgbm9kZXMgPSBbbm9uVGVybWluYWxOb2RlXTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIENsYXNzID0gTm9uVGVybWluYWxOb2RlKSB7XG4gICAgdmFyIHN0YXJ0TGluZSA9IHN0YXJ0TGluZUZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMpLFxuICAgICAgICBlbmRMaW5lID0gZW5kTGluZUZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMpLFxuICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIHN0YXJ0TGluZSwgZW5kTGluZSk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uVGVybWluYWxOb2RlO1xuXG5mdW5jdGlvbiBzdGFydExpbmVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gIHZhciBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgZmlyc3RDaGlsZE5vZGVTdGFydExpbmUgPSBmaXJzdENoaWxkTm9kZS5nZXRTdGFydExpbmUoKSxcbiAgICAgIHN0YXJ0TGluZSA9IGZpcnN0Q2hpbGROb2RlU3RhcnRMaW5lO1xuXG4gIHJldHVybiBzdGFydExpbmU7XG59XG5cbmZ1bmN0aW9uIGVuZExpbmVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gIHZhciBsYXN0Q2hpbGROb2RlID0gbGFzdChjaGlsZE5vZGVzKSxcbiAgICAgIGxhc3RDaGlsZE5vZGVTdGFydExpbmUgPSBsYXN0Q2hpbGROb2RlLmdldEVuZExpbmUoKSxcbiAgICAgIGVuZExpbmUgPSBsYXN0Q2hpbGROb2RlU3RhcnRMaW5lO1xuXG4gIHJldHVybiBlbmRMaW5lO1xufVxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuIl19