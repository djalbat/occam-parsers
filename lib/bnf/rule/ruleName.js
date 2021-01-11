"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rule = _interopRequireDefault(require("../rule"));

var _ruleName = _interopRequireDefault(require("../node/ruleName"));

var _name = _interopRequireDefault(require("../definition/name"));

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

var RuleNameRule = /*#__PURE__*/function (_Rule) {
  _inherits(RuleNameRule, _Rule);

  var _super = _createSuper(RuleNameRule);

  function RuleNameRule() {
    _classCallCheck(this, RuleNameRule);

    var nameDefinition = new _name["default"](),
        name = _ruleNames.RuleNameRuleName,
        definitions = [nameDefinition ///
    ],
        Node = _ruleName["default"];
    return _super.call(this, name, definitions, Node);
  }

  return RuleNameRule;
}(_rule["default"]);

exports["default"] = RuleNameRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbIlJ1bGVOYW1lUnVsZSIsIm5hbWVEZWZpbml0aW9uIiwiTmFtZURlZmluaXRpb24iLCJuYW1lIiwiUnVsZU5hbWVSdWxlTmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIlJ1bGVOYW1lTm9kZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7O0FBQ25CLDBCQUFjO0FBQUE7O0FBQ1osUUFBTUMsY0FBYyxHQUFHLElBQUlDLGdCQUFKLEVBQXZCO0FBQUEsUUFDTUMsSUFBSSxHQUFHQywyQkFEYjtBQUFBLFFBRU1DLFdBQVcsR0FBRyxDQUNaSixjQURZLENBQ0k7QUFESixLQUZwQjtBQUFBLFFBS01LLElBQUksR0FBR0Msb0JBTGI7QUFEWSw2QkFRTkosSUFSTSxFQVFBRSxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVnVDRSxnQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IFJ1bGVOYW1lTm9kZSBmcm9tIFwiLi4vbm9kZS9ydWxlTmFtZVwiO1xuaW1wb3J0IE5hbWVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL25hbWVcIjtcblxuaW1wb3J0IHsgUnVsZU5hbWVSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZU5hbWVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWVEZWZpbml0aW9uID0gbmV3IE5hbWVEZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9IFJ1bGVOYW1lUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBuYW1lRGVmaW5pdGlvbiAgLy8vXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gUnVsZU5hbWVOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iXX0=