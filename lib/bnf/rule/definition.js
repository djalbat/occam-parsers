"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rule = _interopRequireDefault(require("../rule"));

var _definition = _interopRequireDefault(require("../node/definition"));

var _definition2 = _interopRequireDefault(require("../definition/definition"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DefinitionRule = /*#__PURE__*/function (_Rule) {
  _inherits(DefinitionRule, _Rule);

  var _super = _createSuper(DefinitionRule);

  function DefinitionRule() {
    _classCallCheck(this, DefinitionRule);

    var name = _ruleNames.DefinitionRuleName,
        definitionDefinition = new _definition2["default"](),
        definitions = [definitionDefinition],
        Node = _definition["default"];
    return _super.call(this, name, definitions, Node);
  }

  return DefinitionRule;
}(_rule["default"]);

exports["default"] = DefinitionRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvblJ1bGUiLCJuYW1lIiwiRGVmaW5pdGlvblJ1bGVOYW1lIiwiZGVmaW5pdGlvbkRlZmluaXRpb24iLCJEZWZpbml0aW9uRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIkRlZmluaXRpb25Ob2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsYzs7Ozs7QUFDbkIsNEJBQWM7QUFBQTs7QUFDWixRQUFNQyxJQUFJLEdBQUdDLDZCQUFiO0FBQUEsUUFDTUMsb0JBQW9CLEdBQUcsSUFBSUMsdUJBQUosRUFEN0I7QUFBQSxRQUVNQyxXQUFXLEdBQUcsQ0FDWkYsb0JBRFksQ0FGcEI7QUFBQSxRQUtNRyxJQUFJLEdBQUdDLHNCQUxiO0FBRFksNkJBUU5OLElBUk0sRUFRQUksV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVZ5Q0UsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBEZWZpbml0aW9uTm9kZSBmcm9tIFwiLi4vbm9kZS9kZWZpbml0aW9uXCI7XG5pbXBvcnQgRGVmaW5pdGlvbkRlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vZGVmaW5pdGlvblwiO1xuXG5pbXBvcnQgeyBEZWZpbml0aW9uUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluaXRpb25SdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSBEZWZpbml0aW9uUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbkRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbkRlZmluaXRpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGRlZmluaXRpb25EZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gRGVmaW5pdGlvbk5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cbiJdfQ==