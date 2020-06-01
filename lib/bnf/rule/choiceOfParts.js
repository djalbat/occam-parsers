"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rule = _interopRequireDefault(require("../rule"));

var _choiceOfParts = _interopRequireDefault(require("../node/choiceOfParts"));

var _choiceOfParts2 = _interopRequireDefault(require("../definition/choiceOfParts"));

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

var ChoiceOfPartsRule = /*#__PURE__*/function (_Rule) {
  _inherits(ChoiceOfPartsRule, _Rule);

  var _super = _createSuper(ChoiceOfPartsRule);

  function ChoiceOfPartsRule() {
    _classCallCheck(this, ChoiceOfPartsRule);

    var name = _ruleNames.ChoiceOfPartsRuleName,
        choiceOfPartsDefinition = new _choiceOfParts2["default"](),
        definitions = [choiceOfPartsDefinition],
        Node = _choiceOfParts["default"];
    return _super.call(this, name, definitions, Node);
  }

  return ChoiceOfPartsRule;
}(_rule["default"]);

exports["default"] = ChoiceOfPartsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob2ljZU9mUGFydHMuanMiXSwibmFtZXMiOlsiQ2hvaWNlT2ZQYXJ0c1J1bGUiLCJuYW1lIiwiQ2hvaWNlT2ZQYXJ0c1J1bGVOYW1lIiwiY2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24iLCJDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIkNob2ljZU9mUGFydHNOb2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsaUI7Ozs7O0FBQ25CLCtCQUFjO0FBQUE7O0FBQ1osUUFBTUMsSUFBSSxHQUFHQyxnQ0FBYjtBQUFBLFFBQ01DLHVCQUF1QixHQUFHLElBQUlDLDBCQUFKLEVBRGhDO0FBQUEsUUFFTUMsV0FBVyxHQUFHLENBQ1pGLHVCQURZLENBRnBCO0FBQUEsUUFLTUcsSUFBSSxHQUFHQyx5QkFMYjtBQURZLDZCQVFOTixJQVJNLEVBUUFJLFdBUkEsRUFRYUMsSUFSYjtBQVNiOzs7RUFWNENFLGdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgQ2hvaWNlT2ZQYXJ0c05vZGUgZnJvbSBcIi4uL25vZGUvY2hvaWNlT2ZQYXJ0c1wiO1xuaW1wb3J0IENob2ljZU9mUGFydHNEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL2Nob2ljZU9mUGFydHNcIjtcblxuaW1wb3J0IHsgQ2hvaWNlT2ZQYXJ0c1J1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9pY2VPZlBhcnRzUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gQ2hvaWNlT2ZQYXJ0c1J1bGVOYW1lLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNEZWZpbml0aW9uID0gbmV3IENob2ljZU9mUGFydHNEZWZpbml0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBjaG9pY2VPZlBhcnRzRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IENob2ljZU9mUGFydHNOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iXX0=