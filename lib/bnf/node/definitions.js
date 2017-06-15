'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var DefinitionsNode = function (_NonTerminalNode) {
  _inherits(DefinitionsNode, _NonTerminalNode);

  function DefinitionsNode() {
    _classCallCheck(this, DefinitionsNode);

    return _possibleConstructorReturn(this, (DefinitionsNode.__proto__ || Object.getPrototypeOf(DefinitionsNode)).apply(this, arguments));
  }

  _createClass(DefinitionsNode, [{
    key: 'generateDefinitions',
    value: function generateDefinitions(Definition, Parts, mappings) {
      var childNodes = this.getChildNodes(),
          definitionNodes = childNodes,
          ///
      definitions = definitionNodes.map(function (definitionNode) {
        var definition = definitionNode.generateDefinition(Definition, Parts, mappings);

        return definition;
      });

      return definitions;
    }
  }], [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      var childNodes = arrayUtil.discardOdd(nodes),
          productionsNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, DefinitionsNode);

      return productionsNode;
    }
  }]);

  return DefinitionsNode;
}(NonTerminalNode);

module.exports = DefinitionsNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9kZWZpbml0aW9ucy5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiRGVmaW5pdGlvbnNOb2RlIiwiRGVmaW5pdGlvbiIsIlBhcnRzIiwibWFwcGluZ3MiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImRlZmluaXRpb25Ob2RlcyIsImRlZmluaXRpb25zIiwibWFwIiwiZGVmaW5pdGlvbk5vZGUiLCJkZWZpbml0aW9uIiwiZ2VuZXJhdGVEZWZpbml0aW9uIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImRpc2NhcmRPZGQiLCJwcm9kdWN0aW9uc05vZGUiLCJmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGtCQUFSLENBQWxCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLCtCQUFSLENBRHhCOztJQUdNRSxlOzs7Ozs7Ozs7Ozt3Q0FDZ0JDLFUsRUFBWUMsSyxFQUFPQyxRLEVBQVU7QUFDL0MsVUFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsa0JBQWtCRixVQUR4QjtBQUFBLFVBQ29DO0FBQzlCRyxvQkFBY0QsZ0JBQWdCRSxHQUFoQixDQUFvQixVQUFTQyxjQUFULEVBQXlCO0FBQ3pELFlBQU1DLGFBQWFELGVBQWVFLGtCQUFmLENBQWtDVixVQUFsQyxFQUE4Q0MsS0FBOUMsRUFBcURDLFFBQXJELENBQW5COztBQUVBLGVBQU9PLFVBQVA7QUFDRCxPQUphLENBRnBCOztBQVFBLGFBQU9ILFdBQVA7QUFDRDs7OytDQUVpQ0ssSyxFQUFPQyxjLEVBQWdCO0FBQ3ZELFVBQU1ULGFBQWFQLFVBQVVpQixVQUFWLENBQXFCRixLQUFyQixDQUFuQjtBQUFBLFVBQ01HLGtCQUFrQmhCLGdCQUFnQmlCLCtCQUFoQixDQUFnREgsY0FBaEQsRUFBZ0VULFVBQWhFLEVBQTRFSixlQUE1RSxDQUR4Qjs7QUFHQSxhQUFPZSxlQUFQO0FBQ0Q7Ozs7RUFsQjJCaEIsZTs7QUFxQjlCa0IsT0FBT0MsT0FBUCxHQUFpQmxCLGVBQWpCIiwiZmlsZSI6ImRlZmluaXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBEZWZpbml0aW9uc05vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZURlZmluaXRpb25zKERlZmluaXRpb24sIFBhcnRzLCBtYXBwaW5ncykge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBkZWZpbml0aW9uTm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25Ob2Rlcy5tYXAoZnVuY3Rpb24oZGVmaW5pdGlvbk5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBkZWZpbml0aW9uTm9kZS5nZW5lcmF0ZURlZmluaXRpb24oRGVmaW5pdGlvbiwgUGFydHMsIG1hcHBpbmdzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBhcnJheVV0aWwuZGlzY2FyZE9kZChub2RlcyksXG4gICAgICAgICAgcHJvZHVjdGlvbnNOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIERlZmluaXRpb25zTm9kZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbnNOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5pdGlvbnNOb2RlO1xuIl19