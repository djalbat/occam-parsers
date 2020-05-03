"use strict";

var _definition = _interopRequireDefault(require("../definition"));

var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DefinitionNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(DefinitionNode, _NonTerminalNode);

  function DefinitionNode() {
    _classCallCheck(this, DefinitionNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionNode).apply(this, arguments));
  }

  _createClass(DefinitionNode, [{
    key: "generateDefinition",
    value: function generateDefinition() {
      var childNodes = this.getChildNodes(),
          partNodes = childNodes,
          ///
      lookAhead = false,
          ///
      parts = partNodes.map(function (partNode) {
        var part = partNode.generatePart(lookAhead);
        return part;
      }),
          definition = new _definition["default"](parts);
      return definition;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return _nonTerminal["default"].fromRuleNameAndChildNodes(DefinitionNode, ruleName, childNodes);
    }
  }]);

  return DefinitionNode;
}(_nonTerminal["default"]);

module.exports = DefinitionNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbk5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInBhcnROb2RlcyIsImxvb2tBaGVhZCIsInBhcnRzIiwibWFwIiwicGFydE5vZGUiLCJwYXJ0IiwiZ2VuZXJhdGVQYXJ0IiwiZGVmaW5pdGlvbiIsIkRlZmluaXRpb24iLCJydWxlTmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxjOzs7Ozs7Ozs7Ozt5Q0FDaUI7QUFDbkIsVUFBTUMsVUFBVSxHQUFHLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxTQUFTLEdBQUdGLFVBRGxCO0FBQUEsVUFDOEI7QUFDeEJHLE1BQUFBLFNBQVMsR0FBRyxLQUZsQjtBQUFBLFVBRTBCO0FBQ3BCQyxNQUFBQSxLQUFLLEdBQUdGLFNBQVMsQ0FBQ0csR0FBVixDQUFjLFVBQVNDLFFBQVQsRUFBbUI7QUFDdkMsWUFBTUMsSUFBSSxHQUFHRCxRQUFRLENBQUNFLFlBQVQsQ0FBc0JMLFNBQXRCLENBQWI7QUFFQSxlQUFPSSxJQUFQO0FBQ0QsT0FKTyxDQUhkO0FBQUEsVUFRTUUsVUFBVSxHQUFHLElBQUlDLHNCQUFKLENBQWVOLEtBQWYsQ0FSbkI7QUFVQSxhQUFPSyxVQUFQO0FBQ0Q7Ozs4Q0FFZ0NFLFEsRUFBVVgsVSxFQUFZO0FBQUUsYUFBT1ksd0JBQWdCQyx5QkFBaEIsQ0FBMENkLGNBQTFDLEVBQTBEWSxRQUExRCxFQUFvRVgsVUFBcEUsQ0FBUDtBQUF5Rjs7OztFQWZ2SFksdUI7O0FBa0I3QkUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCaEIsY0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmNsYXNzIERlZmluaXRpb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVEZWZpbml0aW9uKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBwYXJ0Tm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBsb29rQWhlYWQgPSBmYWxzZSwgIC8vL1xuICAgICAgICAgIHBhcnRzID0gcGFydE5vZGVzLm1hcChmdW5jdGlvbihwYXJ0Tm9kZSkge1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IHBhcnROb2RlLmdlbmVyYXRlUGFydChsb29rQWhlYWQpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhEZWZpbml0aW9uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5pdGlvbk5vZGU7XG4iXX0=