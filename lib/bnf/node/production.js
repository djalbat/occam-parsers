'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var ProductionNode = function (_NonTerminalNode) {
  _inherits(ProductionNode, _NonTerminalNode);

  function ProductionNode() {
    _classCallCheck(this, ProductionNode);

    return _possibleConstructorReturn(this, (ProductionNode.__proto__ || Object.getPrototypeOf(ProductionNode)).apply(this, arguments));
  }

  _createClass(ProductionNode, [{
    key: 'generateProduction',
    value: function generateProduction(Production, Definition, Parts, mappings) {
      var name = this.getName(),
          definitions = this.generateDefinitions(Definition, Parts),
          mappingsNodeExists = mappings.hasOwnProperty(name),
          Node = mappingsNodeExists ? mappings[name] : NonTerminalNode,
          production = new Production(name, definitions, Node);

      return production;
    }
  }, {
    key: 'getName',
    value: function getName() {
      var childNodes = this.getChildNodes(),
          firstChildNode = arrayUtil.first(childNodes),
          productionNameNode = firstChildNode,
          ///
      productionNameNodeProductionName = productionNameNode.getProductionName(),
          name = productionNameNodeProductionName;

      return name;
    }
  }, {
    key: 'generateDefinitions',
    value: function generateDefinitions(Definition, Parts) {
      var childNodes = this.getChildNodes(),
          lastButOneChildNode = arrayUtil.lastButOne(childNodes),
          definitionsNode = lastButOneChildNode,
          ///
      definitions = definitionsNode.generateDefinitions(Definition, Parts);

      return definitions;
    }
  }], [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      var childNodes = arrayUtil.discardSecond(nodes),
          productionNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, ProductionNode);

      return productionNode;
    }
  }]);

  return ProductionNode;
}(NonTerminalNode);

module.exports = ProductionNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJQcm9kdWN0aW9uTm9kZSIsIlByb2R1Y3Rpb24iLCJEZWZpbml0aW9uIiwiUGFydHMiLCJtYXBwaW5ncyIsIm5hbWUiLCJnZXROYW1lIiwiZGVmaW5pdGlvbnMiLCJnZW5lcmF0ZURlZmluaXRpb25zIiwibWFwcGluZ3NOb2RlRXhpc3RzIiwiaGFzT3duUHJvcGVydHkiLCJOb2RlIiwicHJvZHVjdGlvbiIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdCIsInByb2R1Y3Rpb25OYW1lTm9kZSIsInByb2R1Y3Rpb25OYW1lTm9kZVByb2R1Y3Rpb25OYW1lIiwiZ2V0UHJvZHVjdGlvbk5hbWUiLCJsYXN0QnV0T25lQ2hpbGROb2RlIiwibGFzdEJ1dE9uZSIsImRlZmluaXRpb25zTm9kZSIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJkaXNjYXJkU2Vjb25kIiwicHJvZHVjdGlvbk5vZGUiLCJmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGtCQUFSLENBQWxCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLCtCQUFSLENBRHhCOztJQUdNRSxjOzs7Ozs7Ozs7Ozt1Q0FDZUMsVSxFQUFZQyxVLEVBQVlDLEssRUFBT0MsUSxFQUFVO0FBQzFELFVBQU1DLE9BQU8sS0FBS0MsT0FBTCxFQUFiO0FBQUEsVUFDTUMsY0FBYyxLQUFLQyxtQkFBTCxDQUF5Qk4sVUFBekIsRUFBcUNDLEtBQXJDLENBRHBCO0FBQUEsVUFFTU0scUJBQXFCTCxTQUFTTSxjQUFULENBQXdCTCxJQUF4QixDQUYzQjtBQUFBLFVBR01NLE9BQU9GLHFCQUNFTCxTQUFTQyxJQUFULENBREYsR0FFSU4sZUFMakI7QUFBQSxVQU1NYSxhQUFhLElBQUlYLFVBQUosQ0FBZUksSUFBZixFQUFxQkUsV0FBckIsRUFBa0NJLElBQWxDLENBTm5COztBQVFBLGFBQU9DLFVBQVA7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsaUJBQWlCbEIsVUFBVW1CLEtBQVYsQ0FBZ0JILFVBQWhCLENBRHZCO0FBQUEsVUFFTUkscUJBQXFCRixjQUYzQjtBQUFBLFVBRTRDO0FBQ3RDRyx5Q0FBbUNELG1CQUFtQkUsaUJBQW5CLEVBSHpDO0FBQUEsVUFJTWQsT0FBT2EsZ0NBSmI7O0FBTUEsYUFBT2IsSUFBUDtBQUNEOzs7d0NBRW1CSCxVLEVBQVlDLEssRUFBTztBQUNyQyxVQUFNVSxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNTSxzQkFBc0J2QixVQUFVd0IsVUFBVixDQUFxQlIsVUFBckIsQ0FENUI7QUFBQSxVQUVNUyxrQkFBa0JGLG1CQUZ4QjtBQUFBLFVBRThDO0FBQ3hDYixvQkFBY2UsZ0JBQWdCZCxtQkFBaEIsQ0FBb0NOLFVBQXBDLEVBQWdEQyxLQUFoRCxDQUhwQjs7QUFLQSxhQUFPSSxXQUFQO0FBQ0Q7OzsrQ0FFaUNnQixLLEVBQU9DLGMsRUFBZ0I7QUFDdkQsVUFBTVgsYUFBYWhCLFVBQVU0QixhQUFWLENBQXdCRixLQUF4QixDQUFuQjtBQUFBLFVBQ01HLGlCQUFpQjNCLGdCQUFnQjRCLCtCQUFoQixDQUFnREgsY0FBaEQsRUFBZ0VYLFVBQWhFLEVBQTRFYixjQUE1RSxDQUR2Qjs7QUFHQSxhQUFPMEIsY0FBUDtBQUNEOzs7O0VBckMwQjNCLGU7O0FBd0M3QjZCLE9BQU9DLE9BQVAsR0FBaUI3QixjQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBQcm9kdWN0aW9uTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUHJvZHVjdGlvbihQcm9kdWN0aW9uLCBEZWZpbml0aW9uLCBQYXJ0cywgbWFwcGluZ3MpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSB0aGlzLmdlbmVyYXRlRGVmaW5pdGlvbnMoRGVmaW5pdGlvbiwgUGFydHMpLFxuICAgICAgICAgIG1hcHBpbmdzTm9kZUV4aXN0cyA9IG1hcHBpbmdzLmhhc093blByb3BlcnR5KG5hbWUpLFxuICAgICAgICAgIE5vZGUgPSBtYXBwaW5nc05vZGVFeGlzdHMgP1xuICAgICAgICAgICAgICAgICAgIG1hcHBpbmdzW25hbWVdIDpcbiAgICAgICAgICAgICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSxcbiAgICAgICAgICBwcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb24obmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGFycmF5VXRpbC5maXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZU5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lTm9kZVByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWVOb2RlLmdldFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgbmFtZSA9IHByb2R1Y3Rpb25OYW1lTm9kZVByb2R1Y3Rpb25OYW1lO1xuICAgIFxuICAgIHJldHVybiBuYW1lO1xuICB9XG4gIFxuICBnZW5lcmF0ZURlZmluaXRpb25zKERlZmluaXRpb24sIFBhcnRzKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGxhc3RCdXRPbmVDaGlsZE5vZGUgPSBhcnJheVV0aWwubGFzdEJ1dE9uZShjaGlsZE5vZGVzKSxcbiAgICAgICAgICBkZWZpbml0aW9uc05vZGUgPSBsYXN0QnV0T25lQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9uc05vZGUuZ2VuZXJhdGVEZWZpbml0aW9ucyhEZWZpbml0aW9uLCBQYXJ0cyk7XG4gICAgXG4gICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBhcnJheVV0aWwuZGlzY2FyZFNlY29uZChub2RlcyksXG4gICAgICAgICAgcHJvZHVjdGlvbk5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2Rlcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgUHJvZHVjdGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25Ob2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbk5vZGU7XG4iXX0=