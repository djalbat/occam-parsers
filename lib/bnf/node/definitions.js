"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var arrayUtilities = require("../../utilities/array"),
    NonTerminalNode = require("../../common/node/nonTerminal");

var even = arrayUtilities.even;

var DefinitionsNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(DefinitionsNode, _NonTerminalNode);

  function DefinitionsNode() {
    _classCallCheck(this, DefinitionsNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionsNode).apply(this, arguments));
  }

  _createClass(DefinitionsNode, [{
    key: "generateDefinitions",
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
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(DefinitionsNode, ruleName, childNodes);
    }
  }]);

  return DefinitionsNode;
}(NonTerminalNode);

module.exports = DefinitionsNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb25zLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsImV2ZW4iLCJEZWZpbml0aW9uc05vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImV2ZW5DaGlsZE5vZGVzIiwiZGVmaW5pdGlvbk5vZGVzIiwiZGVmaW5pdGlvbnMiLCJtYXAiLCJkZWZpbml0aW9uTm9kZSIsImRlZmluaXRpb24iLCJnZW5lcmF0ZURlZmluaXRpb24iLCJydWxlTmFtZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLE9BQU8sQ0FBQyx1QkFBRCxDQUE5QjtBQUFBLElBQ01DLGVBQWUsR0FBR0QsT0FBTyxDQUFDLCtCQUFELENBRC9COztJQUdRRSxJLEdBQVNILGMsQ0FBVEcsSTs7SUFFRkMsZTs7Ozs7Ozs7Ozs7MENBQ2tCO0FBQ3BCLFVBQU1DLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsY0FBYyxHQUFHSixJQUFJLENBQUNFLFVBQUQsQ0FEM0I7QUFBQSxVQUMwQztBQUNwQ0csTUFBQUEsZUFBZSxHQUFHRCxjQUZ4QjtBQUFBLFVBRXdDO0FBQ2xDRSxNQUFBQSxXQUFXLEdBQUdELGVBQWUsQ0FBQ0UsR0FBaEIsQ0FBb0IsVUFBU0MsY0FBVCxFQUF5QjtBQUN6RCxZQUFNQyxVQUFVLEdBQUdELGNBQWMsQ0FBQ0Usa0JBQWYsRUFBbkI7QUFFQSxlQUFPRCxVQUFQO0FBQ0QsT0FKYSxDQUhwQjtBQVNBLGFBQU9ILFdBQVA7QUFDRDs7OzhDQUVnQ0ssUSxFQUFVVCxVLEVBQVk7QUFBRSxhQUFPSCxlQUFlLENBQUNhLHlCQUFoQixDQUEwQ1gsZUFBMUMsRUFBMkRVLFFBQTNELEVBQXFFVCxVQUFyRSxDQUFQO0FBQTBGOzs7O0VBZHZISCxlOztBQWlCOUJjLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmIsZUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCIpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZShcIi4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsXCIpO1xuXG5jb25zdCB7IGV2ZW4gfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBEZWZpbml0aW9uc05vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZURlZmluaXRpb25zKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBldmVuQ2hpbGROb2RlcyA9IGV2ZW4oY2hpbGROb2RlcyksICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9uTm9kZXMgPSBldmVuQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9uTm9kZXMubWFwKGZ1bmN0aW9uKGRlZmluaXRpb25Ob2RlKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZGVmaW5pdGlvbk5vZGUuZ2VuZXJhdGVEZWZpbml0aW9uKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhEZWZpbml0aW9uc05vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmluaXRpb25zTm9kZTtcbiJdfQ==