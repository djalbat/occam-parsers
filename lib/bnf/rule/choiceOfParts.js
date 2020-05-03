"use strict";

var _rule = _interopRequireDefault(require("../rule"));

var _choiceOfParts = _interopRequireDefault(require("../node/choiceOfParts"));

var _choiceOfParts2 = _interopRequireDefault(require("../definition/choiceOfParts"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ChoiceOfPartsRule = /*#__PURE__*/function (_Rule) {
  _inherits(ChoiceOfPartsRule, _Rule);

  function ChoiceOfPartsRule() {
    _classCallCheck(this, ChoiceOfPartsRule);

    var name = _ruleNames.ChoiceOfPartsRuleName,
        choiceOfPartsDefinition = new _choiceOfParts2["default"](),
        definitions = [choiceOfPartsDefinition],
        Node = _choiceOfParts["default"];
    return _possibleConstructorReturn(this, _getPrototypeOf(ChoiceOfPartsRule).call(this, name, definitions, Node));
  }

  return ChoiceOfPartsRule;
}(_rule["default"]);

module.exports = ChoiceOfPartsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob2ljZU9mUGFydHMuanMiXSwibmFtZXMiOlsiQ2hvaWNlT2ZQYXJ0c1J1bGUiLCJuYW1lIiwiQ2hvaWNlT2ZQYXJ0c1J1bGVOYW1lIiwiY2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24iLCJDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIkNob2ljZU9mUGFydHNOb2RlIiwiUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsaUI7OztBQUNKLCtCQUFjO0FBQUE7O0FBQ1osUUFBTUMsSUFBSSxHQUFHQyxnQ0FBYjtBQUFBLFFBQ01DLHVCQUF1QixHQUFHLElBQUlDLDBCQUFKLEVBRGhDO0FBQUEsUUFFTUMsV0FBVyxHQUFHLENBQ1pGLHVCQURZLENBRnBCO0FBQUEsUUFLTUcsSUFBSSxHQUFHQyx5QkFMYjtBQURZLDBGQVFOTixJQVJNLEVBUUFJLFdBUkEsRUFRYUMsSUFSYjtBQVNiOzs7RUFWNkJFLGdCOztBQWFoQ0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVixpQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBDaG9pY2VPZlBhcnRzTm9kZSBmcm9tIFwiLi4vbm9kZS9jaG9pY2VPZlBhcnRzXCI7XG5pbXBvcnQgQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vY2hvaWNlT2ZQYXJ0c1wiO1xuXG5pbXBvcnQgeyBDaG9pY2VPZlBhcnRzUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNsYXNzIENob2ljZU9mUGFydHNSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSBDaG9pY2VPZlBhcnRzUnVsZU5hbWUsXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24gPSBuZXcgQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGNob2ljZU9mUGFydHNEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gQ2hvaWNlT2ZQYXJ0c05vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaG9pY2VPZlBhcnRzUnVsZTtcbiJdfQ==