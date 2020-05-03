"use strict";

var _rule = _interopRequireDefault(require("../rule"));

var _name = _interopRequireDefault(require("../node/name"));

var _name2 = _interopRequireDefault(require("../definition/name"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NameRule = /*#__PURE__*/function (_Rule) {
  _inherits(NameRule, _Rule);

  function NameRule() {
    _classCallCheck(this, NameRule);

    var nameDefinition = new _name2["default"](),
        name = _ruleNames.NameRuleName,
        definitions = [nameDefinition],
        Node = _name["default"];
    return _possibleConstructorReturn(this, _getPrototypeOf(NameRule).call(this, name, definitions, Node));
  }

  return NameRule;
}(_rule["default"]);

module.exports = NameRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hbWUuanMiXSwibmFtZXMiOlsiTmFtZVJ1bGUiLCJuYW1lRGVmaW5pdGlvbiIsIk5hbWVEZWZpbml0aW9uIiwibmFtZSIsIk5hbWVSdWxlTmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIk5hbWVOb2RlIiwiUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsUTs7O0FBQ0osc0JBQWM7QUFBQTs7QUFDWixRQUFNQyxjQUFjLEdBQUcsSUFBSUMsaUJBQUosRUFBdkI7QUFBQSxRQUNNQyxJQUFJLEdBQUdDLHVCQURiO0FBQUEsUUFFTUMsV0FBVyxHQUFHLENBQ1pKLGNBRFksQ0FGcEI7QUFBQSxRQUtNSyxJQUFJLEdBQUdDLGdCQUxiO0FBRFksaUZBUU5KLElBUk0sRUFRQUUsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVZvQkUsZ0I7O0FBYXZCQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJWLFFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgTmFtZU5vZGUgZnJvbSBcIi4uL25vZGUvbmFtZVwiO1xuaW1wb3J0IE5hbWVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL25hbWVcIjtcblxuaW1wb3J0IHsgTmFtZVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jbGFzcyBOYW1lUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lRGVmaW5pdGlvbiA9IG5ldyBOYW1lRGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5hbWUgPSBOYW1lUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBuYW1lRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5hbWVOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTmFtZVJ1bGU7XG4iXX0=