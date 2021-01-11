"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _definition = _interopRequireDefault(require("../definition"));

var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DefinitionNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(DefinitionNode, _NonTerminalNode);

  var _super = _createSuper(DefinitionNode);

  function DefinitionNode() {
    _classCallCheck(this, DefinitionNode);

    return _super.apply(this, arguments);
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

exports["default"] = DefinitionNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbk5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInBhcnROb2RlcyIsImxvb2tBaGVhZCIsInBhcnRzIiwibWFwIiwicGFydE5vZGUiLCJwYXJ0IiwiZ2VuZXJhdGVQYXJ0IiwiZGVmaW5pdGlvbiIsIkRlZmluaXRpb24iLCJydWxlTmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs7O3lDQUNFO0FBQ25CLFVBQU1DLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsU0FBUyxHQUFHRixVQURsQjtBQUFBLFVBQzhCO0FBQ3hCRyxNQUFBQSxTQUFTLEdBQUcsS0FGbEI7QUFBQSxVQUUwQjtBQUNwQkMsTUFBQUEsS0FBSyxHQUFHRixTQUFTLENBQUNHLEdBQVYsQ0FBYyxVQUFDQyxRQUFELEVBQWM7QUFDbEMsWUFBTUMsSUFBSSxHQUFHRCxRQUFRLENBQUNFLFlBQVQsQ0FBc0JMLFNBQXRCLENBQWI7QUFFQSxlQUFPSSxJQUFQO0FBQ0QsT0FKTyxDQUhkO0FBQUEsVUFRTUUsVUFBVSxHQUFHLElBQUlDLHNCQUFKLENBQWVOLEtBQWYsQ0FSbkI7QUFVQSxhQUFPSyxVQUFQO0FBQ0Q7Ozs4Q0FFZ0NFLFEsRUFBVVgsVSxFQUFZO0FBQUUsYUFBT1ksd0JBQWdCQyx5QkFBaEIsQ0FBMENkLGNBQTFDLEVBQTBEWSxRQUExRCxFQUFvRVgsVUFBcEUsQ0FBUDtBQUF5Rjs7OztFQWZ4R1ksdUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluaXRpb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVEZWZpbml0aW9uKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBwYXJ0Tm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBsb29rQWhlYWQgPSBmYWxzZSwgIC8vL1xuICAgICAgICAgIHBhcnRzID0gcGFydE5vZGVzLm1hcCgocGFydE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0Tm9kZS5nZW5lcmF0ZVBhcnQobG9va0FoZWFkKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoRGVmaW5pdGlvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuIl19