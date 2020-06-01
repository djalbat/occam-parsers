"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rule = _interopRequireDefault(require("../rule"));

var _rule2 = _interopRequireDefault(require("../node/rule"));

var _rule3 = _interopRequireDefault(require("../definition/rule"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RuleRule = /*#__PURE__*/function (_Rule) {
  _inherits(RuleRule, _Rule);

  var _super = _createSuper(RuleRule);

  function RuleRule() {
    _classCallCheck(this, RuleRule);

    var ruleDefinition = new _rule3["default"](),
        name = _ruleNames.RuleRuleName,
        definitions = [ruleDefinition],
        Node = _rule2["default"];
    return _super.call(this, name, definitions, Node);
  }

  return RuleRule;
}(_rule["default"]);

exports["default"] = RuleRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUuanMiXSwibmFtZXMiOlsiUnVsZVJ1bGUiLCJydWxlRGVmaW5pdGlvbiIsIlJ1bGVEZWZpbml0aW9uIiwibmFtZSIsIlJ1bGVSdWxlTmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIlJ1bGVOb2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7QUFDbkIsc0JBQWM7QUFBQTs7QUFDWixRQUFNQyxjQUFjLEdBQUcsSUFBSUMsaUJBQUosRUFBdkI7QUFBQSxRQUNNQyxJQUFJLEdBQUdDLHVCQURiO0FBQUEsUUFFTUMsV0FBVyxHQUFHLENBQ1pKLGNBRFksQ0FGcEI7QUFBQSxRQUtNSyxJQUFJLEdBQUdDLGlCQUxiO0FBRFksNkJBUU5KLElBUk0sRUFRQUUsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVZtQ0UsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBSdWxlTm9kZSBmcm9tIFwiLi4vbm9kZS9ydWxlXCI7XG5pbXBvcnQgUnVsZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcnVsZVwiO1xuXG5pbXBvcnQgeyBSdWxlUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHJ1bGVEZWZpbml0aW9uID0gbmV3IFJ1bGVEZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9IFJ1bGVSdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gUnVsZU5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpO1xuICB9XG59XG4iXX0=