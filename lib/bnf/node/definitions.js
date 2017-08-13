'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtilities = require('../../utilities/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var DefinitionsNode = function (_NonTerminalNode) {
  _inherits(DefinitionsNode, _NonTerminalNode);

  function DefinitionsNode() {
    _classCallCheck(this, DefinitionsNode);

    return _possibleConstructorReturn(this, (DefinitionsNode.__proto__ || Object.getPrototypeOf(DefinitionsNode)).apply(this, arguments));
  }

  _createClass(DefinitionsNode, [{
    key: 'generateDefinitions',
    value: function generateDefinitions(Definition) {
      var childNodes = this.getChildNodes(),
          definitionNodes = childNodes,
          ///
      definitions = definitionNodes.map(function (definitionNode) {
        var definition = definitionNode.generateDefinition(Definition);

        return definition;
      });

      return definitions;
    }
  }], [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = arrayUtilities.discardOdd(nodes),
          definitionsNode = NonTerminalNode.fromRuleNameAndChildNodes(DefinitionsNode, ruleName, childNodes);

      return definitionsNode;
    }
  }]);

  return DefinitionsNode;
}(NonTerminalNode);

module.exports = DefinitionsNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9kZWZpbml0aW9ucy5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJEZWZpbml0aW9uc05vZGUiLCJEZWZpbml0aW9uIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJkZWZpbml0aW9uTm9kZXMiLCJkZWZpbml0aW9ucyIsIm1hcCIsImRlZmluaXRpb25Ob2RlIiwiZGVmaW5pdGlvbiIsImdlbmVyYXRlRGVmaW5pdGlvbiIsIm5vZGVzIiwicnVsZU5hbWUiLCJkaXNjYXJkT2RkIiwiZGVmaW5pdGlvbnNOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCQyxRQUFRLHVCQUFSLENBQXZCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLCtCQUFSLENBRHhCOztJQUdNRSxlOzs7Ozs7Ozs7Ozt3Q0FDZ0JDLFUsRUFBWTtBQUM5QixVQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxrQkFBa0JGLFVBRHhCO0FBQUEsVUFDb0M7QUFDOUJHLG9CQUFjRCxnQkFBZ0JFLEdBQWhCLENBQW9CLFVBQVNDLGNBQVQsRUFBeUI7QUFDekQsWUFBTUMsYUFBYUQsZUFBZUUsa0JBQWYsQ0FBa0NSLFVBQWxDLENBQW5COztBQUVBLGVBQU9PLFVBQVA7QUFDRCxPQUphLENBRnBCOztBQVFBLGFBQU9ILFdBQVA7QUFDRDs7O3lDQUUyQkssSyxFQUFPQyxRLEVBQVU7QUFDM0MsVUFBTVQsYUFBYUwsZUFBZWUsVUFBZixDQUEwQkYsS0FBMUIsQ0FBbkI7QUFBQSxVQUNNRyxrQkFBa0JkLGdCQUFnQmUseUJBQWhCLENBQTBDZCxlQUExQyxFQUEyRFcsUUFBM0QsRUFBcUVULFVBQXJFLENBRHhCOztBQUdBLGFBQU9XLGVBQVA7QUFDRDs7OztFQWxCMkJkLGU7O0FBcUI5QmdCLE9BQU9DLE9BQVAsR0FBaUJoQixlQUFqQiIsImZpbGUiOiJkZWZpbml0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIERlZmluaXRpb25zTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlRGVmaW5pdGlvbnMoRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBkZWZpbml0aW9uTm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25Ob2Rlcy5tYXAoZnVuY3Rpb24oZGVmaW5pdGlvbk5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBkZWZpbml0aW9uTm9kZS5nZW5lcmF0ZURlZmluaXRpb24oRGVmaW5pdGlvbik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gYXJyYXlVdGlsaXRpZXMuZGlzY2FyZE9kZChub2RlcyksXG4gICAgICAgICAgZGVmaW5pdGlvbnNOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoRGVmaW5pdGlvbnNOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbnNOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5pdGlvbnNOb2RlO1xuIl19