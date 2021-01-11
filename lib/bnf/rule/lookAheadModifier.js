"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rule = _interopRequireDefault(require("../rule"));

var _definition = _interopRequireDefault(require("../node/definition"));

var _lookAheadModifierRule = _interopRequireDefault(require("../definition/lookAheadModifierRule"));

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

var LookAheadModifierRule = /*#__PURE__*/function (_Rule) {
  _inherits(LookAheadModifierRule, _Rule);

  var _super = _createSuper(LookAheadModifierRule);

  function LookAheadModifierRule() {
    _classCallCheck(this, LookAheadModifierRule);

    var name = _ruleNames.LookAheadModifierRuleName,
        lookAheadModifierRuleDefinition = new _lookAheadModifierRule["default"](),
        definitions = [lookAheadModifierRuleDefinition],
        Node = _definition["default"];
    return _super.call(this, name, definitions, Node);
  }

  return LookAheadModifierRule;
}(_rule["default"]);

exports["default"] = LookAheadModifierRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvb2tBaGVhZE1vZGlmaWVyLmpzIl0sIm5hbWVzIjpbIkxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsIm5hbWUiLCJMb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lIiwibG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiIsIkxvb2tBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJEZWZpbml0aW9uTm9kZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHFCOzs7OztBQUNuQixtQ0FBYztBQUFBOztBQUNaLFFBQU1DLElBQUksR0FBR0Msb0NBQWI7QUFBQSxRQUNNQywrQkFBK0IsR0FBRyxJQUFJQyxpQ0FBSixFQUR4QztBQUFBLFFBRU1DLFdBQVcsR0FBRyxDQUNaRiwrQkFEWSxDQUZwQjtBQUFBLFFBS01HLElBQUksR0FBR0Msc0JBTGI7QUFEWSw2QkFRTk4sSUFSTSxFQVFBSSxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVmdERSxnQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IERlZmluaXRpb25Ob2RlIGZyb20gXCIuLi9ub2RlL2RlZmluaXRpb25cIjtcbmltcG9ydCBMb29rQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL2xvb2tBaGVhZE1vZGlmaWVyUnVsZVwiO1xuXG5pbXBvcnQgeyBMb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb29rQWhlYWRNb2RpZmllclJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IExvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiA9IG5ldyBMb29rQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gRGVmaW5pdGlvbk5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cbiJdfQ==