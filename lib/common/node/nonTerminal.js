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
    key: 'getLastToken',
    value: function getLastToken() {
      var lastChildNode = last(this.childNodes),
          lastChildNodeLastToken = lastChildNode.getLastToken(),
          lastToken = lastChildNodeLastToken; ///

      return lastToken;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJjaGlsZE5vZGVzIiwiZmlyc3RMaW5lIiwibGFzdExpbmUiLCJsYXN0Q2hpbGROb2RlIiwibGFzdCIsImxhc3RDaGlsZE5vZGVMYXN0VG9rZW4iLCJnZXRMYXN0VG9rZW4iLCJsYXN0VG9rZW4iLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlIiwicGFyc2VUcmVlIiwibm9kZXMiLCJmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzIiwiQ2xhc3MiLCJmaXJzdExpbmVGcm9tQ2hpbGROb2RlcyIsImxhc3RMaW5lRnJvbUNoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdCIsImZpcnN0Q2hpbGROb2RlRmlyc3RMaW5lIiwiZ2V0Rmlyc3RMaW5lIiwibGFzdENoaWxkTm9kZUZpcnN0TGluZSIsImdldExhc3RMaW5lIiwiYXJyYXkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSwyQkFBMkJDLFFBQVEscUNBQVIsQ0FBL0I7O0lBRU1DLGU7QUFDSiwyQkFBWUMsY0FBWixFQUE0QkMsVUFBNUIsRUFBd0NDLFNBQXhDLEVBQW1EQyxRQUFuRCxFQUE2RDtBQUFBOztBQUMzRCxTQUFLSCxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7O3dDQUVtQjtBQUNsQixhQUFPLEtBQUtILGNBQVo7QUFDRDs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLQyxVQUFaO0FBQ0Q7OzttQ0FFYztBQUNiLGFBQU8sS0FBS0MsU0FBWjtBQUNEOzs7a0NBRWE7QUFDWixhQUFPLEtBQUtDLFFBQVo7QUFDRDs7O2tDQUVhRixVLEVBQVk7QUFDeEIsV0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUcsZ0JBQWdCQyxLQUFLLEtBQUtKLFVBQVYsQ0FBcEI7QUFBQSxVQUNJSyx5QkFBeUJGLGNBQWNHLFlBQWQsRUFEN0I7QUFBQSxVQUVJQyxZQUFZRixzQkFGaEIsQ0FEYSxDQUcyQjs7QUFFeEMsYUFBT0UsU0FBUDtBQUNEOzs7bUNBRWM7QUFDYixVQUFJQyxrQkFBa0IsSUFBdEI7QUFBQSxVQUE2QjtBQUN6QkMsaUNBQTJCYix5QkFBeUJjLG1CQUF6QixDQUE2Q0YsZUFBN0MsQ0FEL0I7QUFBQSxVQUVJRyxZQUFZRix3QkFGaEIsQ0FEYSxDQUc4Qjs7QUFFM0MsYUFBT0UsU0FBUDtBQUNEOzs7OEJBRWdCQyxLLEVBQU9iLGMsRUFBZ0I7QUFDdEMsVUFBSUMsYUFBYVksS0FBakI7QUFBQSxVQUF3QjtBQUNwQkosd0JBQWtCVixnQkFBZ0JlLCtCQUFoQixDQUFnRGQsY0FBaEQsRUFBZ0VDLFVBQWhFLENBRHRCOztBQUdBWSxjQUFRLENBQUNKLGVBQUQsQ0FBUixDQUpzQyxDQUlYOztBQUUzQixhQUFPSSxLQUFQO0FBQ0Q7OztvREFFc0NiLGMsRUFBZ0JDLFUsRUFBcUM7QUFBQSxVQUF6QmMsS0FBeUIsdUVBQWpCaEIsZUFBaUI7O0FBQzFGLFVBQUlHLFlBQVljLHdCQUF3QmYsVUFBeEIsQ0FBaEI7QUFBQSxVQUNJRSxXQUFXYyx1QkFBdUJoQixVQUF2QixDQURmO0FBQUEsVUFFSVEsa0JBQWtCLElBQUlNLEtBQUosQ0FBVWYsY0FBVixFQUEwQkMsVUFBMUIsRUFBc0NDLFNBQXRDLEVBQWlEQyxRQUFqRCxDQUZ0Qjs7QUFJQSxhQUFPTSxlQUFQO0FBQ0Q7Ozs7OztBQUdIUyxPQUFPQyxPQUFQLEdBQWlCcEIsZUFBakI7O0FBRUEsU0FBU2lCLHVCQUFULENBQWlDZixVQUFqQyxFQUE2QztBQUMzQyxNQUFJbUIsaUJBQWlCQyxNQUFNcEIsVUFBTixDQUFyQjtBQUFBLE1BQ0lxQiwwQkFBMEJGLGVBQWVHLFlBQWYsRUFEOUI7QUFBQSxNQUVJckIsWUFBWW9CLHVCQUZoQjs7QUFJQSxTQUFPcEIsU0FBUDtBQUNEOztBQUVELFNBQVNlLHNCQUFULENBQWdDaEIsVUFBaEMsRUFBNEM7QUFDMUMsTUFBSUcsZ0JBQWdCQyxLQUFLSixVQUFMLENBQXBCO0FBQUEsTUFDSXVCLHlCQUF5QnBCLGNBQWNxQixXQUFkLEVBRDdCO0FBQUEsTUFFSXRCLFdBQVdxQixzQkFGZjs7QUFJQSxTQUFPckIsUUFBUDtBQUNEO0FBQ0QsU0FBU2tCLEtBQVQsQ0FBZUssS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzFDLFNBQVNyQixJQUFULENBQWNxQixLQUFkLEVBQXFCO0FBQUUsU0FBT0EsTUFBTUEsTUFBTUMsTUFBTixHQUFlLENBQXJCLENBQVA7QUFBaUMiLCJmaWxlIjoibm9uVGVybWluYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi8uLi9ibmYvcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZScpO1xuXG5jbGFzcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgZmlyc3RMaW5lLCBsYXN0TGluZSkge1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICAgIHRoaXMuZmlyc3RMaW5lID0gZmlyc3RMaW5lO1xuICAgIHRoaXMubGFzdExpbmUgPSBsYXN0TGluZTtcbiAgfVxuXG4gIGdldFByb2R1Y3Rpb25OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3Rpb25OYW1lO1xuICB9XG5cbiAgZ2V0Q2hpbGROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzO1xuICB9XG4gIFxuICBnZXRGaXJzdExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RMaW5lO1xuICB9XG5cbiAgZ2V0TGFzdExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFzdExpbmU7XG4gIH1cblxuICBzZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG5cbiAgZ2V0TGFzdFRva2VuKCkge1xuICAgIHZhciBsYXN0Q2hpbGROb2RlID0gbGFzdCh0aGlzLmNoaWxkTm9kZXMpLFxuICAgICAgICBsYXN0Q2hpbGROb2RlTGFzdFRva2VuID0gbGFzdENoaWxkTm9kZS5nZXRMYXN0VG9rZW4oKSxcbiAgICAgICAgbGFzdFRva2VuID0gbGFzdENoaWxkTm9kZUxhc3RUb2tlbjsgLy8vXG5cbiAgICByZXR1cm4gbGFzdFRva2VuO1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIHZhciBub25UZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSksXG4gICAgICAgIHBhcnNlVHJlZSA9IG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIG5vZGVzID0gW25vblRlcm1pbmFsTm9kZV07IC8vL1xuICAgIFxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzLCBDbGFzcyA9IE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHZhciBmaXJzdExpbmUgPSBmaXJzdExpbmVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzKSxcbiAgICAgICAgbGFzdExpbmUgPSBsYXN0TGluZUZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMpLFxuICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIGZpcnN0TGluZSwgbGFzdExpbmUpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblRlcm1pbmFsTm9kZTtcblxuZnVuY3Rpb24gZmlyc3RMaW5lRnJvbUNoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICB2YXIgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgIGZpcnN0Q2hpbGROb2RlRmlyc3RMaW5lID0gZmlyc3RDaGlsZE5vZGUuZ2V0Rmlyc3RMaW5lKCksXG4gICAgICBmaXJzdExpbmUgPSBmaXJzdENoaWxkTm9kZUZpcnN0TGluZTtcblxuICByZXR1cm4gZmlyc3RMaW5lO1xufVxuXG5mdW5jdGlvbiBsYXN0TGluZUZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgdmFyIGxhc3RDaGlsZE5vZGUgPSBsYXN0KGNoaWxkTm9kZXMpLFxuICAgICAgbGFzdENoaWxkTm9kZUZpcnN0TGluZSA9IGxhc3RDaGlsZE5vZGUuZ2V0TGFzdExpbmUoKSxcbiAgICAgIGxhc3RMaW5lID0gbGFzdENoaWxkTm9kZUZpcnN0TGluZTtcblxuICByZXR1cm4gbGFzdExpbmU7XG59XG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG4iXX0=