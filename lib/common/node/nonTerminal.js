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
    key: 'getFirstToken',
    value: function getFirstToken() {
      var firstChildNode = first(this.childNodes),
          firstChildNodeFirstToken = firstChildNode.getFirstToken(),
          firstToken = firstChildNodeFirstToken; ///

      return firstToken;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJjaGlsZE5vZGVzIiwiZmlyc3RMaW5lIiwibGFzdExpbmUiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwiZmlyc3RDaGlsZE5vZGVGaXJzdFRva2VuIiwiZ2V0Rmlyc3RUb2tlbiIsImZpcnN0VG9rZW4iLCJsYXN0Q2hpbGROb2RlIiwibGFzdCIsImxhc3RDaGlsZE5vZGVMYXN0VG9rZW4iLCJnZXRMYXN0VG9rZW4iLCJsYXN0VG9rZW4iLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlIiwicGFyc2VUcmVlIiwibm9kZXMiLCJmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzIiwiQ2xhc3MiLCJmaXJzdExpbmVGcm9tQ2hpbGROb2RlcyIsImxhc3RMaW5lRnJvbUNoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmlyc3RDaGlsZE5vZGVGaXJzdExpbmUiLCJnZXRGaXJzdExpbmUiLCJsYXN0Q2hpbGROb2RlRmlyc3RMaW5lIiwiZ2V0TGFzdExpbmUiLCJhcnJheSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLDJCQUEyQkMsUUFBUSxxQ0FBUixDQUEvQjs7SUFFTUMsZTtBQUNKLDJCQUFZQyxjQUFaLEVBQTRCQyxVQUE1QixFQUF3Q0MsU0FBeEMsRUFBbURDLFFBQW5ELEVBQTZEO0FBQUE7O0FBQzNELFNBQUtILGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7Ozs7d0NBRW1CO0FBQ2xCLGFBQU8sS0FBS0gsY0FBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLQyxTQUFaO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0MsUUFBWjtBQUNEOzs7a0NBRWFGLFUsRUFBWTtBQUN4QixXQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOzs7b0NBRWU7QUFDZCxVQUFJRyxpQkFBaUJDLE1BQU0sS0FBS0osVUFBWCxDQUFyQjtBQUFBLFVBQ0lLLDJCQUEyQkYsZUFBZUcsYUFBZixFQUQvQjtBQUFBLFVBRUlDLGFBQWFGLHdCQUZqQixDQURjLENBRzZCOztBQUUzQyxhQUFPRSxVQUFQO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQUlDLGdCQUFnQkMsS0FBSyxLQUFLVCxVQUFWLENBQXBCO0FBQUEsVUFDSVUseUJBQXlCRixjQUFjRyxZQUFkLEVBRDdCO0FBQUEsVUFFSUMsWUFBWUYsc0JBRmhCLENBRGEsQ0FHMkI7O0FBRXhDLGFBQU9FLFNBQVA7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUMsa0JBQWtCLElBQXRCO0FBQUEsVUFBNkI7QUFDekJDLGlDQUEyQmxCLHlCQUF5Qm1CLG1CQUF6QixDQUE2Q0YsZUFBN0MsQ0FEL0I7QUFBQSxVQUVJRyxZQUFZRix3QkFGaEIsQ0FEYSxDQUc4Qjs7QUFFM0MsYUFBT0UsU0FBUDtBQUNEOzs7OEJBRWdCQyxLLEVBQU9sQixjLEVBQWdCO0FBQ3RDLFVBQUlDLGFBQWFpQixLQUFqQjtBQUFBLFVBQXdCO0FBQ3BCSix3QkFBa0JmLGdCQUFnQm9CLCtCQUFoQixDQUFnRG5CLGNBQWhELEVBQWdFQyxVQUFoRSxDQUR0Qjs7QUFHQWlCLGNBQVEsQ0FBQ0osZUFBRCxDQUFSLENBSnNDLENBSVg7O0FBRTNCLGFBQU9JLEtBQVA7QUFDRDs7O29EQUVzQ2xCLGMsRUFBZ0JDLFUsRUFBcUM7QUFBQSxVQUF6Qm1CLEtBQXlCLHVFQUFqQnJCLGVBQWlCOztBQUMxRixVQUFJRyxZQUFZbUIsd0JBQXdCcEIsVUFBeEIsQ0FBaEI7QUFBQSxVQUNJRSxXQUFXbUIsdUJBQXVCckIsVUFBdkIsQ0FEZjtBQUFBLFVBRUlhLGtCQUFrQixJQUFJTSxLQUFKLENBQVVwQixjQUFWLEVBQTBCQyxVQUExQixFQUFzQ0MsU0FBdEMsRUFBaURDLFFBQWpELENBRnRCOztBQUlBLGFBQU9XLGVBQVA7QUFDRDs7Ozs7O0FBR0hTLE9BQU9DLE9BQVAsR0FBaUJ6QixlQUFqQjs7QUFFQSxTQUFTc0IsdUJBQVQsQ0FBaUNwQixVQUFqQyxFQUE2QztBQUMzQyxNQUFJRyxpQkFBaUJDLE1BQU1KLFVBQU4sQ0FBckI7QUFBQSxNQUNJd0IsMEJBQTBCckIsZUFBZXNCLFlBQWYsRUFEOUI7QUFBQSxNQUVJeEIsWUFBWXVCLHVCQUZoQjs7QUFJQSxTQUFPdkIsU0FBUDtBQUNEOztBQUVELFNBQVNvQixzQkFBVCxDQUFnQ3JCLFVBQWhDLEVBQTRDO0FBQzFDLE1BQUlRLGdCQUFnQkMsS0FBS1QsVUFBTCxDQUFwQjtBQUFBLE1BQ0kwQix5QkFBeUJsQixjQUFjbUIsV0FBZCxFQUQ3QjtBQUFBLE1BRUl6QixXQUFXd0Isc0JBRmY7O0FBSUEsU0FBT3hCLFFBQVA7QUFDRDtBQUNELFNBQVNFLEtBQVQsQ0FBZXdCLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMxQyxTQUFTbkIsSUFBVCxDQUFjbUIsS0FBZCxFQUFxQjtBQUFFLFNBQU9BLE1BQU1BLE1BQU1DLE1BQU4sR0FBZSxDQUFyQixDQUFQO0FBQWlDIiwiZmlsZSI6Im5vblRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vLi4vYm5mL3BhcnNlVHJlZS9ub25UZXJtaW5hbE5vZGUnKTtcblxuY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIGZpcnN0TGluZSwgbGFzdExpbmUpIHtcbiAgICB0aGlzLnByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgICB0aGlzLmZpcnN0TGluZSA9IGZpcnN0TGluZTtcbiAgICB0aGlzLmxhc3RMaW5lID0gbGFzdExpbmU7XG4gIH1cblxuICBnZXRQcm9kdWN0aW9uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0aW9uTmFtZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuICBcbiAgZ2V0Rmlyc3RMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmZpcnN0TGluZTtcbiAgfVxuXG4gIGdldExhc3RMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxhc3RMaW5lO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldEZpcnN0VG9rZW4oKSB7XG4gICAgdmFyIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QodGhpcy5jaGlsZE5vZGVzKSxcbiAgICAgICAgZmlyc3RDaGlsZE5vZGVGaXJzdFRva2VuID0gZmlyc3RDaGlsZE5vZGUuZ2V0Rmlyc3RUb2tlbigpLFxuICAgICAgICBmaXJzdFRva2VuID0gZmlyc3RDaGlsZE5vZGVGaXJzdFRva2VuOyAvLy9cblxuICAgIHJldHVybiBmaXJzdFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFRva2VuKCkge1xuICAgIHZhciBsYXN0Q2hpbGROb2RlID0gbGFzdCh0aGlzLmNoaWxkTm9kZXMpLFxuICAgICAgICBsYXN0Q2hpbGROb2RlTGFzdFRva2VuID0gbGFzdENoaWxkTm9kZS5nZXRMYXN0VG9rZW4oKSxcbiAgICAgICAgbGFzdFRva2VuID0gbGFzdENoaWxkTm9kZUxhc3RUb2tlbjsgLy8vXG5cbiAgICByZXR1cm4gbGFzdFRva2VuO1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIHZhciBub25UZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSksXG4gICAgICAgIHBhcnNlVHJlZSA9IG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIG5vZGVzID0gW25vblRlcm1pbmFsTm9kZV07IC8vL1xuICAgIFxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzLCBDbGFzcyA9IE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHZhciBmaXJzdExpbmUgPSBmaXJzdExpbmVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzKSxcbiAgICAgICAgbGFzdExpbmUgPSBsYXN0TGluZUZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMpLFxuICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIGZpcnN0TGluZSwgbGFzdExpbmUpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblRlcm1pbmFsTm9kZTtcblxuZnVuY3Rpb24gZmlyc3RMaW5lRnJvbUNoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICB2YXIgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgIGZpcnN0Q2hpbGROb2RlRmlyc3RMaW5lID0gZmlyc3RDaGlsZE5vZGUuZ2V0Rmlyc3RMaW5lKCksXG4gICAgICBmaXJzdExpbmUgPSBmaXJzdENoaWxkTm9kZUZpcnN0TGluZTtcblxuICByZXR1cm4gZmlyc3RMaW5lO1xufVxuXG5mdW5jdGlvbiBsYXN0TGluZUZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgdmFyIGxhc3RDaGlsZE5vZGUgPSBsYXN0KGNoaWxkTm9kZXMpLFxuICAgICAgbGFzdENoaWxkTm9kZUZpcnN0TGluZSA9IGxhc3RDaGlsZE5vZGUuZ2V0TGFzdExpbmUoKSxcbiAgICAgIGxhc3RMaW5lID0gbGFzdENoaWxkTm9kZUZpcnN0TGluZTtcblxuICByZXR1cm4gbGFzdExpbmU7XG59XG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG4iXX0=