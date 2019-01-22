'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtilities = require('../../utilities/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var even = arrayUtilities.even;

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
          evenChildNodes = even(childNodes),
          ///
      definitionNodes = evenChildNodes,
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
      var childNodes = nodes,
          ///
      definitionsNode = NonTerminalNode.fromRuleNameAndChildNodes(DefinitionsNode, ruleName, childNodes);

      return definitionsNode;
    }
  }]);

  return DefinitionsNode;
}(NonTerminalNode);

module.exports = DefinitionsNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9kZWZpbml0aW9ucy5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJldmVuIiwiRGVmaW5pdGlvbnNOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJldmVuQ2hpbGROb2RlcyIsImRlZmluaXRpb25Ob2RlcyIsImRlZmluaXRpb25zIiwibWFwIiwiZGVmaW5pdGlvbk5vZGUiLCJkZWZpbml0aW9uIiwiZ2VuZXJhdGVEZWZpbml0aW9uIiwibm9kZXMiLCJydWxlTmFtZSIsImRlZmluaXRpb25zTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSx1QkFBUixDQUF2QjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSwrQkFBUixDQUR4Qjs7SUFHUUUsSSxHQUFTSCxjLENBQVRHLEk7O0lBRUZDLGU7Ozs7Ozs7Ozs7OzBDQUNrQjtBQUNwQixVQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxpQkFBaUJKLEtBQUtFLFVBQUwsQ0FEdkI7QUFBQSxVQUMwQztBQUNwQ0csd0JBQWtCRCxjQUZ4QjtBQUFBLFVBRXdDO0FBQ2xDRSxvQkFBY0QsZ0JBQWdCRSxHQUFoQixDQUFvQixVQUFTQyxjQUFULEVBQXlCO0FBQ3pELFlBQU1DLGFBQWFELGVBQWVFLGtCQUFmLEVBQW5COztBQUVBLGVBQU9ELFVBQVA7QUFDRCxPQUphLENBSHBCOztBQVNBLGFBQU9ILFdBQVA7QUFDRDs7O3lDQUUyQkssSyxFQUFPQyxRLEVBQVU7QUFDM0MsVUFBTVYsYUFBYVMsS0FBbkI7QUFBQSxVQUEwQjtBQUNwQkUsd0JBQWtCZCxnQkFBZ0JlLHlCQUFoQixDQUEwQ2IsZUFBMUMsRUFBMkRXLFFBQTNELEVBQXFFVixVQUFyRSxDQUR4Qjs7QUFHQSxhQUFPVyxlQUFQO0FBQ0Q7Ozs7RUFuQjJCZCxlOztBQXNCOUJnQixPQUFPQyxPQUFQLEdBQWlCZixlQUFqQiIsImZpbGUiOiJkZWZpbml0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNvbnN0IHsgZXZlbiB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIERlZmluaXRpb25zTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlRGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGV2ZW5DaGlsZE5vZGVzID0gZXZlbihjaGlsZE5vZGVzKSwgIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25Ob2RlcyA9IGV2ZW5DaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25Ob2Rlcy5tYXAoZnVuY3Rpb24oZGVmaW5pdGlvbk5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBkZWZpbml0aW9uTm9kZS5nZW5lcmF0ZURlZmluaXRpb24oKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnNOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoRGVmaW5pdGlvbnNOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbnNOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5pdGlvbnNOb2RlO1xuIl19