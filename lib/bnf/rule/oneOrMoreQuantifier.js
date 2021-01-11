"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _rule = _interopRequireDefault(require("../rule"));

var _definition = _interopRequireDefault(require("../node/definition"));

var _quantifierRule = _interopRequireDefault(require("../definition/quantifierRule"));

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

var plus = _occamLexers.specialSymbols.plus;

var OneOrMoreQuantifierRule = /*#__PURE__*/function (_Rule) {
  _inherits(OneOrMoreQuantifierRule, _Rule);

  var _super = _createSuper(OneOrMoreQuantifierRule);

  function OneOrMoreQuantifierRule() {
    _classCallCheck(this, OneOrMoreQuantifierRule);

    var name = _ruleNames.OneOrMoreQuantifierRuleName,
        oneOrMoreQuantifierTerminalSymbolContent = plus,
        ///
    oneOrMoreQuantifierRuleDefinition = new _quantifierRule["default"](oneOrMoreQuantifierTerminalSymbolContent),
        definitions = [oneOrMoreQuantifierRuleDefinition],
        Node = _definition["default"];
    return _super.call(this, name, definitions, Node);
  }

  return OneOrMoreQuantifierRule;
}(_rule["default"]);

exports["default"] = OneOrMoreQuantifierRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uZU9yTW9yZVF1YW50aWZpZXIuanMiXSwibmFtZXMiOlsicGx1cyIsInNwZWNpYWxTeW1ib2xzIiwiT25lT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJuYW1lIiwiT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIiwib25lT3JNb3JlUXVhbnRpZmllclRlcm1pbmFsU3ltYm9sQ29udGVudCIsIm9uZU9yTW9yZVF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsIlF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIkRlZmluaXRpb25Ob2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxJLEdBQVNDLDJCLENBQVRELEk7O0lBRWFFLHVCOzs7OztBQUNuQixxQ0FBYztBQUFBOztBQUNaLFFBQU1DLElBQUksR0FBR0Msc0NBQWI7QUFBQSxRQUNNQyx3Q0FBd0MsR0FBR0wsSUFEakQ7QUFBQSxRQUN1RDtBQUNqRE0sSUFBQUEsaUNBQWlDLEdBQUcsSUFBSUMsMEJBQUosQ0FBNkJGLHdDQUE3QixDQUYxQztBQUFBLFFBR01HLFdBQVcsR0FBRyxDQUNaRixpQ0FEWSxDQUhwQjtBQUFBLFFBTU1HLElBQUksR0FBR0Msc0JBTmI7QUFEWSw2QkFTTlAsSUFUTSxFQVNBSyxXQVRBLEVBU2FDLElBVGI7QUFVYjs7O0VBWGtERSxnQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBEZWZpbml0aW9uTm9kZSBmcm9tIFwiLi4vbm9kZS9kZWZpbml0aW9uXCI7XG5pbXBvcnQgUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3F1YW50aWZpZXJSdWxlXCI7XG5cbmltcG9ydCB7IE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBwbHVzIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT25lT3JNb3JlUXVhbnRpZmllclJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSxcbiAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50ID0gcGx1cywgLy8vXG4gICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uID0gbmV3IFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbihvbmVPck1vcmVRdWFudGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IERlZmluaXRpb25Ob2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iXX0=