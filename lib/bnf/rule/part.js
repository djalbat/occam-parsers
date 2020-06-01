"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rule = _interopRequireDefault(require("../rule"));

var _part = _interopRequireDefault(require("../node/part"));

var _ruleName = _interopRequireDefault(require("../definition/ruleName"));

var _terminal = _interopRequireDefault(require("../definition/partRule/terminal"));

var _nonTerminal = _interopRequireDefault(require("../definition/partRule/nonTerminal"));

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

var PartRule = /*#__PURE__*/function (_Rule) {
  _inherits(PartRule, _Rule);

  var _super = _createSuper(PartRule);

  function PartRule() {
    _classCallCheck(this, PartRule);

    var name = _ruleNames.PartRuleName,
        terminalPartRuleDefinition = new _terminal["default"](),
        nonTerminalPartRuleDefinition = new _nonTerminal["default"](),
        noWhitespacePartRuleNameDefinition = new _ruleName["default"](_ruleNames.NoWhitespacePartRuleName),
        definitions = [nonTerminalPartRuleDefinition, terminalPartRuleDefinition, noWhitespacePartRuleNameDefinition],
        Node = _part["default"];
    return _super.call(this, name, definitions, Node);
  }

  return PartRule;
}(_rule["default"]);

exports["default"] = PartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnQuanMiXSwibmFtZXMiOlsiUGFydFJ1bGUiLCJuYW1lIiwiUGFydFJ1bGVOYW1lIiwidGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJUZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiIsIm5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIiwiTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24iLCJub1doaXRlc3BhY2VQYXJ0UnVsZU5hbWVEZWZpbml0aW9uIiwiUnVsZU5hbWVEZWZpbml0aW9uIiwiTm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwiUGFydE5vZGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7OztBQUNuQixzQkFBYztBQUFBOztBQUNaLFFBQU1DLElBQUksR0FBR0MsdUJBQWI7QUFBQSxRQUNNQywwQkFBMEIsR0FBRyxJQUFJQyxvQkFBSixFQURuQztBQUFBLFFBRU1DLDZCQUE2QixHQUFHLElBQUlDLHVCQUFKLEVBRnRDO0FBQUEsUUFHTUMsa0NBQWtDLEdBQUcsSUFBSUMsb0JBQUosQ0FBdUJDLG1DQUF2QixDQUgzQztBQUFBLFFBSU1DLFdBQVcsR0FBRyxDQUNaTCw2QkFEWSxFQUVaRiwwQkFGWSxFQUdaSSxrQ0FIWSxDQUpwQjtBQUFBLFFBU01JLElBQUksR0FBR0MsZ0JBVGI7QUFEWSw2QkFZTlgsSUFaTSxFQVlBUyxXQVpBLEVBWWFDLElBWmI7QUFhYjs7O0VBZG1DRSxnQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IFBhcnROb2RlIGZyb20gXCIuLi9ub2RlL3BhcnRcIjtcbmltcG9ydCBSdWxlTmFtZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcnVsZU5hbWVcIjtcbmltcG9ydCBUZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9wYXJ0UnVsZS90ZXJtaW5hbFwiO1xuaW1wb3J0IE5vblRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3BhcnRSdWxlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IFBhcnRSdWxlTmFtZSwgTm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uID0gbmV3IFRlcm1pbmFsUGFydFJ1bGVEZWZpbml0aW9uKCksXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24gPSBuZXcgTm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24oKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihOb1doaXRlc3BhY2VQYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZURlZmluaXRpb24sXG4gICAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlRGVmaW5pdGlvbixcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBQYXJ0Tm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIl19