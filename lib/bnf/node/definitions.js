'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtilities = require('../../utilities/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var discardOdd = arrayUtilities.discardOdd;

var DefinitionsNode = function (_NonTerminalNode) {
  _inherits(DefinitionsNode, _NonTerminalNode);

  function DefinitionsNode() {
    _classCallCheck(this, DefinitionsNode);

    return _possibleConstructorReturn(this, (DefinitionsNode.__proto__ || Object.getPrototypeOf(DefinitionsNode)).apply(this, arguments));
  }

  _createClass(DefinitionsNode, [{
    key: 'generateDefinitions',
    value: function generateDefinitions() {
      var childNodes = this.getChildNodes(),
          definitionNodes = childNodes,
          ///
      definitions = definitionNodes.map(function (definitionNode) {
        var definition = definitionNode.generateDefinition();

        return definition;
      });

      return definitions;
    }
  }], [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = discardOdd(nodes),
          definitionsNode = NonTerminalNode.fromRuleNameAndChildNodes(DefinitionsNode, ruleName, childNodes);

      return definitionsNode;
    }
  }]);

  return DefinitionsNode;
}(NonTerminalNode);

module.exports = DefinitionsNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9kZWZpbml0aW9ucy5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJkaXNjYXJkT2RkIiwiRGVmaW5pdGlvbnNOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJkZWZpbml0aW9uTm9kZXMiLCJkZWZpbml0aW9ucyIsIm1hcCIsImRlZmluaXRpb25Ob2RlIiwiZGVmaW5pdGlvbiIsImdlbmVyYXRlRGVmaW5pdGlvbiIsIm5vZGVzIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uc05vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUJDLFFBQVEsdUJBQVIsQ0FBdkI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsK0JBQVIsQ0FEeEI7O0lBR1FFLFUsR0FBZUgsYyxDQUFmRyxVOztJQUVGQyxlOzs7Ozs7Ozs7OzswQ0FDa0I7QUFDcEIsVUFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsa0JBQWtCRixVQUR4QjtBQUFBLFVBQ29DO0FBQzlCRyxvQkFBY0QsZ0JBQWdCRSxHQUFoQixDQUFvQixVQUFTQyxjQUFULEVBQXlCO0FBQ3pELFlBQU1DLGFBQWFELGVBQWVFLGtCQUFmLEVBQW5COztBQUVBLGVBQU9ELFVBQVA7QUFDRCxPQUphLENBRnBCOztBQVFBLGFBQU9ILFdBQVA7QUFDRDs7O3lDQUUyQkssSyxFQUFPQyxRLEVBQVU7QUFDM0MsVUFBTVQsYUFBYUYsV0FBV1UsS0FBWCxDQUFuQjtBQUFBLFVBQ01FLGtCQUFrQmIsZ0JBQWdCYyx5QkFBaEIsQ0FBMENaLGVBQTFDLEVBQTJEVSxRQUEzRCxFQUFxRVQsVUFBckUsQ0FEeEI7O0FBR0EsYUFBT1UsZUFBUDtBQUNEOzs7O0VBbEIyQmIsZTs7QUFxQjlCZSxPQUFPQyxPQUFQLEdBQWlCZCxlQUFqQiIsImZpbGUiOiJkZWZpbml0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNvbnN0IHsgZGlzY2FyZE9kZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIERlZmluaXRpb25zTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlRGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGRlZmluaXRpb25Ob2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbk5vZGVzLm1hcChmdW5jdGlvbihkZWZpbml0aW9uTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGRlZmluaXRpb25Ob2RlLmdlbmVyYXRlRGVmaW5pdGlvbigpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IGRpc2NhcmRPZGQobm9kZXMpLFxuICAgICAgICAgIGRlZmluaXRpb25zTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKERlZmluaXRpb25zTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb25zTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmluaXRpb25zTm9kZTtcbiJdfQ==