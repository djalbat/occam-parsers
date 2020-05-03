"use strict";

var _array = _interopRequireDefault(require("../../utilities/array"));

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

var first = _array["default"].first,
    third = _array["default"].third;

var RuleNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(RuleNode, _NonTerminalNode);

  function RuleNode() {
    _classCallCheck(this, RuleNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(RuleNode).apply(this, arguments));
  }

  _createClass(RuleNode, [{
    key: "generateRule",
    value: function generateRule(Rule) {
      var name = this.getName(),
          definitions = this.generateDefinitions(),
          Node = _nonTerminal["default"],
          rule = new Rule(name, definitions, Node);
      return rule;
    }
  }, {
    key: "getName",
    value: function getName() {
      var childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          nameNode = firstChildNode,
          ///
      name = nameNode.getName();
      return name;
    }
  }, {
    key: "generateDefinitions",
    value: function generateDefinitions() {
      var childNodes = this.getChildNodes(),
          thirdChildNode = third(childNodes),
          definitionsNode = thirdChildNode,
          ///
      definitions = definitionsNode.generateDefinitions();
      return definitions;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return _nonTerminal["default"].fromRuleNameAndChildNodes(RuleNode, ruleName, childNodes);
    }
  }]);

  return RuleNode;
}(_nonTerminal["default"]);

module.exports = RuleNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInRoaXJkIiwiUnVsZU5vZGUiLCJSdWxlIiwibmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9ucyIsImdlbmVyYXRlRGVmaW5pdGlvbnMiLCJOb2RlIiwiTm9uVGVybWluYWxOb2RlIiwicnVsZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJuYW1lTm9kZSIsInRoaXJkQ2hpbGROb2RlIiwiZGVmaW5pdGlvbnNOb2RlIiwicnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsSyxHQUFpQkMsaUIsQ0FBakJELEs7SUFBT0UsSyxHQUFVRCxpQixDQUFWQyxLOztJQUVUQyxROzs7Ozs7Ozs7OztpQ0FDU0MsSSxFQUFNO0FBQ2pCLFVBQU1DLElBQUksR0FBRyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNQyxXQUFXLEdBQUcsS0FBS0MsbUJBQUwsRUFEcEI7QUFBQSxVQUVNQyxJQUFJLEdBQUdDLHVCQUZiO0FBQUEsVUFHTUMsSUFBSSxHQUFHLElBQUlQLElBQUosQ0FBU0MsSUFBVCxFQUFlRSxXQUFmLEVBQTRCRSxJQUE1QixDQUhiO0FBS0EsYUFBT0UsSUFBUDtBQUNEOzs7OEJBRVM7QUFDUixVQUFNQyxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLGNBQWMsR0FBR2QsS0FBSyxDQUFDWSxVQUFELENBRDVCO0FBQUEsVUFFTUcsUUFBUSxHQUFHRCxjQUZqQjtBQUFBLFVBRWtDO0FBQzVCVCxNQUFBQSxJQUFJLEdBQUdVLFFBQVEsQ0FBQ1QsT0FBVCxFQUhiO0FBS0EsYUFBT0QsSUFBUDtBQUNEOzs7MENBRXFCO0FBQ3BCLFVBQU1PLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUcsY0FBYyxHQUFHZCxLQUFLLENBQUNVLFVBQUQsQ0FENUI7QUFBQSxVQUVNSyxlQUFlLEdBQUdELGNBRnhCO0FBQUEsVUFFeUM7QUFDbkNULE1BQUFBLFdBQVcsR0FBR1UsZUFBZSxDQUFDVCxtQkFBaEIsRUFIcEI7QUFLQSxhQUFPRCxXQUFQO0FBQ0Q7Ozs4Q0FFZ0NXLFEsRUFBVU4sVSxFQUFZO0FBQUUsYUFBT0Ysd0JBQWdCUyx5QkFBaEIsQ0FBMENoQixRQUExQyxFQUFvRGUsUUFBcEQsRUFBOEROLFVBQTlELENBQVA7QUFBbUY7Ozs7RUE1QnZIRix1Qjs7QUErQnZCVSxNQUFNLENBQUNDLE9BQVAsR0FBaUJsQixRQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYXJyYXlVdGlsaXRpZXMgZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWxcIjtcblxuY29uc3QgeyBmaXJzdCwgdGhpcmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBSdWxlTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUnVsZShSdWxlKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gdGhpcy5nZW5lcmF0ZURlZmluaXRpb25zKCksXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIG5hbWVOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gbmFtZU5vZGUuZ2V0TmFtZSgpO1xuICAgIFxuICAgIHJldHVybiBuYW1lO1xuICB9XG4gIFxuICBnZW5lcmF0ZURlZmluaXRpb25zKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICB0aGlyZENoaWxkTm9kZSA9IHRoaXJkKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGRlZmluaXRpb25zTm9kZSA9IHRoaXJkQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9uc05vZGUuZ2VuZXJhdGVEZWZpbml0aW9ucygpO1xuICAgIFxuICAgIHJldHVybiBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhSdWxlTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZU5vZGU7XG4iXX0=