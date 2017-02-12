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
    key: 'getFirstSignificantToken',
    value: function getFirstSignificantToken() {
      var firstChildNode = first(this.childNodes),
          firstChildNodeFirstSignificantToken = firstChildNode.getFirstSignificantToken(),
          firstSignificantToken = firstChildNodeFirstSignificantToken; ///

      return firstSignificantToken;
    }
  }, {
    key: 'getLastSignificantToken',
    value: function getLastSignificantToken() {
      var lastChildNode = last(this.childNodes),
          lastChildNodeLastSignificantToken = lastChildNode.getLastSignificantToken(),
          lastSignificantToken = lastChildNodeLastSignificantToken; ///

      return lastSignificantToken;
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
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJjaGlsZE5vZGVzIiwiZmlyc3RMaW5lIiwibGFzdExpbmUiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwiZmlyc3RDaGlsZE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0Q2hpbGROb2RlIiwibGFzdCIsImxhc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlIiwicGFyc2VUcmVlIiwibm9kZXMiLCJmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzIiwiQ2xhc3MiLCJmaXJzdExpbmVGcm9tQ2hpbGROb2RlcyIsImxhc3RMaW5lRnJvbUNoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmlyc3RDaGlsZE5vZGVGaXJzdExpbmUiLCJnZXRGaXJzdExpbmUiLCJsYXN0Q2hpbGROb2RlRmlyc3RMaW5lIiwiZ2V0TGFzdExpbmUiLCJhcnJheSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLDJCQUEyQkMsUUFBUSxxQ0FBUixDQUEvQjs7SUFFTUMsZTtBQUNKLDJCQUFZQyxjQUFaLEVBQTRCQyxVQUE1QixFQUF3Q0MsU0FBeEMsRUFBbURDLFFBQW5ELEVBQTZEO0FBQUE7O0FBQzNELFNBQUtILGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7Ozs7d0NBRW1CO0FBQ2xCLGFBQU8sS0FBS0gsY0FBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLQyxTQUFaO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0MsUUFBWjtBQUNEOzs7a0NBRWFGLFUsRUFBWTtBQUN4QixXQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOzs7K0NBRTBCO0FBQ3pCLFVBQUlHLGlCQUFpQkMsTUFBTSxLQUFLSixVQUFYLENBQXJCO0FBQUEsVUFDSUssc0NBQXNDRixlQUFlRyx3QkFBZixFQUQxQztBQUFBLFVBRUlDLHdCQUF3QkYsbUNBRjVCLENBRHlCLENBR3dDOztBQUVqRSxhQUFPRSxxQkFBUDtBQUNEOzs7OENBRXlCO0FBQ3hCLFVBQUlDLGdCQUFnQkMsS0FBSyxLQUFLVCxVQUFWLENBQXBCO0FBQUEsVUFDSVUsb0NBQW9DRixjQUFjRyx1QkFBZCxFQUR4QztBQUFBLFVBRUlDLHVCQUF1QkYsaUNBRjNCLENBRHdCLENBR3NDOztBQUU5RCxhQUFPRSxvQkFBUDtBQUNEOzs7bUNBRWM7QUFDYixVQUFJQyxrQkFBa0IsSUFBdEI7QUFBQSxVQUE2QjtBQUN6QkMsaUNBQTJCbEIseUJBQXlCbUIsbUJBQXpCLENBQTZDRixlQUE3QyxDQUQvQjtBQUFBLFVBRUlHLFlBQVlGLHdCQUZoQixDQURhLENBRzhCOztBQUUzQyxhQUFPRSxTQUFQO0FBQ0Q7OzsrQ0FFaUNDLEssRUFBT2xCLGMsRUFBZ0I7QUFDdkQsVUFBSUMsYUFBYWlCLEtBQWpCO0FBQUEsVUFBd0I7QUFDcEJKLHdCQUFrQmYsZ0JBQWdCb0IsK0JBQWhCLENBQWdEbkIsY0FBaEQsRUFBZ0VDLFVBQWhFLENBRHRCOztBQUdBaUIsY0FBUSxDQUFDSixlQUFELENBQVIsQ0FKdUQsQ0FJNUI7O0FBRTNCLGFBQU9JLEtBQVA7QUFDRDs7O29EQUVzQ2xCLGMsRUFBZ0JDLFUsRUFBcUM7QUFBQSxVQUF6Qm1CLEtBQXlCLHVFQUFqQnJCLGVBQWlCOztBQUMxRixVQUFJRyxZQUFZbUIsd0JBQXdCcEIsVUFBeEIsQ0FBaEI7QUFBQSxVQUNJRSxXQUFXbUIsdUJBQXVCckIsVUFBdkIsQ0FEZjtBQUFBLFVBRUlhLGtCQUFrQixJQUFJTSxLQUFKLENBQVVwQixjQUFWLEVBQTBCQyxVQUExQixFQUFzQ0MsU0FBdEMsRUFBaURDLFFBQWpELENBRnRCOztBQUlBLGFBQU9XLGVBQVA7QUFDRDs7Ozs7O0FBR0hTLE9BQU9DLE9BQVAsR0FBaUJ6QixlQUFqQjs7QUFFQSxTQUFTc0IsdUJBQVQsQ0FBaUNwQixVQUFqQyxFQUE2QztBQUMzQyxNQUFJRyxpQkFBaUJDLE1BQU1KLFVBQU4sQ0FBckI7QUFBQSxNQUNJd0IsMEJBQTBCckIsZUFBZXNCLFlBQWYsRUFEOUI7QUFBQSxNQUVJeEIsWUFBWXVCLHVCQUZoQjs7QUFJQSxTQUFPdkIsU0FBUDtBQUNEOztBQUVELFNBQVNvQixzQkFBVCxDQUFnQ3JCLFVBQWhDLEVBQTRDO0FBQzFDLE1BQUlRLGdCQUFnQkMsS0FBS1QsVUFBTCxDQUFwQjtBQUFBLE1BQ0kwQix5QkFBeUJsQixjQUFjbUIsV0FBZCxFQUQ3QjtBQUFBLE1BRUl6QixXQUFXd0Isc0JBRmY7O0FBSUEsU0FBT3hCLFFBQVA7QUFDRDtBQUNELFNBQVNFLEtBQVQsQ0FBZXdCLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMxQyxTQUFTbkIsSUFBVCxDQUFjbUIsS0FBZCxFQUFxQjtBQUFFLFNBQU9BLE1BQU1BLE1BQU1DLE1BQU4sR0FBZSxDQUFyQixDQUFQO0FBQWlDIiwiZmlsZSI6Im5vblRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vLi4vYm5mL3BhcnNlVHJlZS9ub25UZXJtaW5hbE5vZGUnKTtcblxuY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIGZpcnN0TGluZSwgbGFzdExpbmUpIHtcbiAgICB0aGlzLnByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgICB0aGlzLmZpcnN0TGluZSA9IGZpcnN0TGluZTtcbiAgICB0aGlzLmxhc3RMaW5lID0gbGFzdExpbmU7XG4gIH1cblxuICBnZXRQcm9kdWN0aW9uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0aW9uTmFtZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuICBcbiAgZ2V0Rmlyc3RMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmZpcnN0TGluZTtcbiAgfVxuXG4gIGdldExhc3RMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxhc3RMaW5lO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICB2YXIgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdCh0aGlzLmNoaWxkTm9kZXMpLFxuICAgICAgICBmaXJzdENoaWxkTm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IGZpcnN0Q2hpbGROb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBmaXJzdENoaWxkTm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgdmFyIGxhc3RDaGlsZE5vZGUgPSBsYXN0KHRoaXMuY2hpbGROb2RlcyksXG4gICAgICAgIGxhc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGxhc3RDaGlsZE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBsYXN0Q2hpbGROb2RlTGFzdFNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgcmV0dXJuIGxhc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIHZhciBub25UZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSksXG4gICAgICAgIHBhcnNlVHJlZSA9IG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICB2YXIgY2hpbGROb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgbm9kZXMgPSBbbm9uVGVybWluYWxOb2RlXTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIENsYXNzID0gTm9uVGVybWluYWxOb2RlKSB7XG4gICAgdmFyIGZpcnN0TGluZSA9IGZpcnN0TGluZUZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMpLFxuICAgICAgICBsYXN0TGluZSA9IGxhc3RMaW5lRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcyksXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgZmlyc3RMaW5lLCBsYXN0TGluZSk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uVGVybWluYWxOb2RlO1xuXG5mdW5jdGlvbiBmaXJzdExpbmVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gIHZhciBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgZmlyc3RDaGlsZE5vZGVGaXJzdExpbmUgPSBmaXJzdENoaWxkTm9kZS5nZXRGaXJzdExpbmUoKSxcbiAgICAgIGZpcnN0TGluZSA9IGZpcnN0Q2hpbGROb2RlRmlyc3RMaW5lO1xuXG4gIHJldHVybiBmaXJzdExpbmU7XG59XG5cbmZ1bmN0aW9uIGxhc3RMaW5lRnJvbUNoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICB2YXIgbGFzdENoaWxkTm9kZSA9IGxhc3QoY2hpbGROb2RlcyksXG4gICAgICBsYXN0Q2hpbGROb2RlRmlyc3RMaW5lID0gbGFzdENoaWxkTm9kZS5nZXRMYXN0TGluZSgpLFxuICAgICAgbGFzdExpbmUgPSBsYXN0Q2hpbGROb2RlRmlyc3RMaW5lO1xuXG4gIHJldHVybiBsYXN0TGluZTtcbn1cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cbiJdfQ==