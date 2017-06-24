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
    value: function generateProduction(Production, Definition, mappings) {
      var name = this.getName(),
          definitions = this.generateDefinitions(Definition),
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
    value: function generateDefinitions(Definition) {
      var childNodes = this.getChildNodes(),
          lastButOneChildNode = arrayUtil.lastButOne(childNodes),
          definitionsNode = lastButOneChildNode,
          ///
      definitions = definitionsNode.generateDefinitions(Definition);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL3Byb2R1Y3Rpb24uanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlByb2R1Y3Rpb25Ob2RlIiwiUHJvZHVjdGlvbiIsIkRlZmluaXRpb24iLCJtYXBwaW5ncyIsIm5hbWUiLCJnZXROYW1lIiwiZGVmaW5pdGlvbnMiLCJnZW5lcmF0ZURlZmluaXRpb25zIiwibWFwcGluZ3NOb2RlRXhpc3RzIiwiaGFzT3duUHJvcGVydHkiLCJOb2RlIiwicHJvZHVjdGlvbiIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdCIsInByb2R1Y3Rpb25OYW1lTm9kZSIsInByb2R1Y3Rpb25OYW1lTm9kZVByb2R1Y3Rpb25OYW1lIiwiZ2V0UHJvZHVjdGlvbk5hbWUiLCJsYXN0QnV0T25lQ2hpbGROb2RlIiwibGFzdEJ1dE9uZSIsImRlZmluaXRpb25zTm9kZSIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJkaXNjYXJkU2Vjb25kIiwicHJvZHVjdGlvbk5vZGUiLCJmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGtCQUFSLENBQWxCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLCtCQUFSLENBRHhCOztJQUdNRSxjOzs7Ozs7Ozs7Ozt1Q0FDZUMsVSxFQUFZQyxVLEVBQVlDLFEsRUFBVTtBQUNuRCxVQUFNQyxPQUFPLEtBQUtDLE9BQUwsRUFBYjtBQUFBLFVBQ01DLGNBQWMsS0FBS0MsbUJBQUwsQ0FBeUJMLFVBQXpCLENBRHBCO0FBQUEsVUFFTU0scUJBQXFCTCxTQUFTTSxjQUFULENBQXdCTCxJQUF4QixDQUYzQjtBQUFBLFVBR01NLE9BQU9GLHFCQUNFTCxTQUFTQyxJQUFULENBREYsR0FFSUwsZUFMakI7QUFBQSxVQU1NWSxhQUFhLElBQUlWLFVBQUosQ0FBZUcsSUFBZixFQUFxQkUsV0FBckIsRUFBa0NJLElBQWxDLENBTm5COztBQVFBLGFBQU9DLFVBQVA7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsaUJBQWlCakIsVUFBVWtCLEtBQVYsQ0FBZ0JILFVBQWhCLENBRHZCO0FBQUEsVUFFTUkscUJBQXFCRixjQUYzQjtBQUFBLFVBRTRDO0FBQ3RDRyx5Q0FBbUNELG1CQUFtQkUsaUJBQW5CLEVBSHpDO0FBQUEsVUFJTWQsT0FBT2EsZ0NBSmI7O0FBTUEsYUFBT2IsSUFBUDtBQUNEOzs7d0NBRW1CRixVLEVBQVk7QUFDOUIsVUFBTVUsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTU0sc0JBQXNCdEIsVUFBVXVCLFVBQVYsQ0FBcUJSLFVBQXJCLENBRDVCO0FBQUEsVUFFTVMsa0JBQWtCRixtQkFGeEI7QUFBQSxVQUU4QztBQUN4Q2Isb0JBQWNlLGdCQUFnQmQsbUJBQWhCLENBQW9DTCxVQUFwQyxDQUhwQjs7QUFLQSxhQUFPSSxXQUFQO0FBQ0Q7OzsrQ0FFaUNnQixLLEVBQU9DLGMsRUFBZ0I7QUFDdkQsVUFBTVgsYUFBYWYsVUFBVTJCLGFBQVYsQ0FBd0JGLEtBQXhCLENBQW5CO0FBQUEsVUFDTUcsaUJBQWlCMUIsZ0JBQWdCMkIsK0JBQWhCLENBQWdESCxjQUFoRCxFQUFnRVgsVUFBaEUsRUFBNEVaLGNBQTVFLENBRHZCOztBQUdBLGFBQU95QixjQUFQO0FBQ0Q7Ozs7RUFyQzBCMUIsZTs7QUF3QzdCNEIsT0FBT0MsT0FBUCxHQUFpQjVCLGNBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQcm9kdWN0aW9uKFByb2R1Y3Rpb24sIERlZmluaXRpb24sIG1hcHBpbmdzKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gdGhpcy5nZW5lcmF0ZURlZmluaXRpb25zKERlZmluaXRpb24pLFxuICAgICAgICAgIG1hcHBpbmdzTm9kZUV4aXN0cyA9IG1hcHBpbmdzLmhhc093blByb3BlcnR5KG5hbWUpLFxuICAgICAgICAgIE5vZGUgPSBtYXBwaW5nc05vZGVFeGlzdHMgP1xuICAgICAgICAgICAgICAgICAgIG1hcHBpbmdzW25hbWVdIDpcbiAgICAgICAgICAgICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSxcbiAgICAgICAgICBwcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb24obmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGFycmF5VXRpbC5maXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZU5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lTm9kZVByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWVOb2RlLmdldFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgbmFtZSA9IHByb2R1Y3Rpb25OYW1lTm9kZVByb2R1Y3Rpb25OYW1lO1xuICAgIFxuICAgIHJldHVybiBuYW1lO1xuICB9XG4gIFxuICBnZW5lcmF0ZURlZmluaXRpb25zKERlZmluaXRpb24pIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbGFzdEJ1dE9uZUNoaWxkTm9kZSA9IGFycmF5VXRpbC5sYXN0QnV0T25lKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGRlZmluaXRpb25zTm9kZSA9IGxhc3RCdXRPbmVDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zTm9kZS5nZW5lcmF0ZURlZmluaXRpb25zKERlZmluaXRpb24pO1xuICAgIFxuICAgIHJldHVybiBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRTZWNvbmQobm9kZXMpLFxuICAgICAgICAgIHByb2R1Y3Rpb25Ob2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIFByb2R1Y3Rpb25Ob2RlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25Ob2RlO1xuIl19