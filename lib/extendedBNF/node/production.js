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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL3Byb2R1Y3Rpb24uanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlByb2R1Y3Rpb25Ob2RlIiwiUHJvZHVjdGlvbiIsIkRlZmluaXRpb24iLCJQYXJ0cyIsIm1hcHBpbmdzIiwibmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9ucyIsImdlbmVyYXRlRGVmaW5pdGlvbnMiLCJtYXBwaW5nc05vZGVFeGlzdHMiLCJoYXNPd25Qcm9wZXJ0eSIsIk5vZGUiLCJwcm9kdWN0aW9uIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwicHJvZHVjdGlvbk5hbWVOb2RlIiwicHJvZHVjdGlvbk5hbWVOb2RlUHJvZHVjdGlvbk5hbWUiLCJnZXRQcm9kdWN0aW9uTmFtZSIsImxhc3RCdXRPbmVDaGlsZE5vZGUiLCJsYXN0QnV0T25lIiwiZGVmaW5pdGlvbnNOb2RlIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImRpc2NhcmRTZWNvbmQiLCJwcm9kdWN0aW9uTm9kZSIsImZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsa0JBQVIsQ0FBbEI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsK0JBQVIsQ0FEeEI7O0lBR01FLGM7Ozs7Ozs7Ozs7O3VDQUNlQyxVLEVBQVlDLFUsRUFBWUMsSyxFQUFPQyxRLEVBQVU7QUFDMUQsVUFBTUMsT0FBTyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNQyxjQUFjLEtBQUtDLG1CQUFMLENBQXlCTixVQUF6QixFQUFxQ0MsS0FBckMsQ0FEcEI7QUFBQSxVQUVNTSxxQkFBcUJMLFNBQVNNLGNBQVQsQ0FBd0JMLElBQXhCLENBRjNCO0FBQUEsVUFHTU0sT0FBT0YscUJBQ0VMLFNBQVNDLElBQVQsQ0FERixHQUVJTixlQUxqQjtBQUFBLFVBTU1hLGFBQWEsSUFBSVgsVUFBSixDQUFlSSxJQUFmLEVBQXFCRSxXQUFyQixFQUFrQ0ksSUFBbEMsQ0FObkI7O0FBUUEsYUFBT0MsVUFBUDtBQUNEOzs7OEJBRVM7QUFDUixVQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxpQkFBaUJsQixVQUFVbUIsS0FBVixDQUFnQkgsVUFBaEIsQ0FEdkI7QUFBQSxVQUVNSSxxQkFBcUJGLGNBRjNCO0FBQUEsVUFFNEM7QUFDdENHLHlDQUFtQ0QsbUJBQW1CRSxpQkFBbkIsRUFIekM7QUFBQSxVQUlNZCxPQUFPYSxnQ0FKYjs7QUFNQSxhQUFPYixJQUFQO0FBQ0Q7Ozt3Q0FFbUJILFUsRUFBWUMsSyxFQUFPO0FBQ3JDLFVBQU1VLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01NLHNCQUFzQnZCLFVBQVV3QixVQUFWLENBQXFCUixVQUFyQixDQUQ1QjtBQUFBLFVBRU1TLGtCQUFrQkYsbUJBRnhCO0FBQUEsVUFFOEM7QUFDeENiLG9CQUFjZSxnQkFBZ0JkLG1CQUFoQixDQUFvQ04sVUFBcEMsRUFBZ0RDLEtBQWhELENBSHBCOztBQUtBLGFBQU9JLFdBQVA7QUFDRDs7OytDQUVpQ2dCLEssRUFBT0MsYyxFQUFnQjtBQUN2RCxVQUFNWCxhQUFhaEIsVUFBVTRCLGFBQVYsQ0FBd0JGLEtBQXhCLENBQW5CO0FBQUEsVUFDTUcsaUJBQWlCM0IsZ0JBQWdCNEIsK0JBQWhCLENBQWdESCxjQUFoRCxFQUFnRVgsVUFBaEUsRUFBNEViLGNBQTVFLENBRHZCOztBQUdBLGFBQU8wQixjQUFQO0FBQ0Q7Ozs7RUFyQzBCM0IsZTs7QUF3QzdCNkIsT0FBT0MsT0FBUCxHQUFpQjdCLGNBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQcm9kdWN0aW9uKFByb2R1Y3Rpb24sIERlZmluaXRpb24sIFBhcnRzLCBtYXBwaW5ncykge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHRoaXMuZ2VuZXJhdGVEZWZpbml0aW9ucyhEZWZpbml0aW9uLCBQYXJ0cyksXG4gICAgICAgICAgbWFwcGluZ3NOb2RlRXhpc3RzID0gbWFwcGluZ3MuaGFzT3duUHJvcGVydHkobmFtZSksXG4gICAgICAgICAgTm9kZSA9IG1hcHBpbmdzTm9kZUV4aXN0cyA/XG4gICAgICAgICAgICAgICAgICAgbWFwcGluZ3NbbmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgTm9uVGVybWluYWxOb2RlLFxuICAgICAgICAgIHByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gYXJyYXlVdGlsLmZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVOb2RlUHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZU5vZGUuZ2V0UHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgICBuYW1lID0gcHJvZHVjdGlvbk5hbWVOb2RlUHJvZHVjdGlvbk5hbWU7XG4gICAgXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cbiAgXG4gIGdlbmVyYXRlRGVmaW5pdGlvbnMoRGVmaW5pdGlvbiwgUGFydHMpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbGFzdEJ1dE9uZUNoaWxkTm9kZSA9IGFycmF5VXRpbC5sYXN0QnV0T25lKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGRlZmluaXRpb25zTm9kZSA9IGxhc3RCdXRPbmVDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zTm9kZS5nZW5lcmF0ZURlZmluaXRpb25zKERlZmluaXRpb24sIFBhcnRzKTtcbiAgICBcbiAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IGFycmF5VXRpbC5kaXNjYXJkU2Vjb25kKG5vZGVzKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzLCBQcm9kdWN0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbk5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uTm9kZTtcbiJdfQ==