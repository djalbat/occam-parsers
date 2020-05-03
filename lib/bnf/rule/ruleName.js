"use strict";

var _rule = _interopRequireDefault(require("../rule"));

var _ruleName = _interopRequireDefault(require("../node/ruleName"));

var _name = _interopRequireDefault(require("../definition/name"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RuleNameRule = /*#__PURE__*/function (_Rule) {
  _inherits(RuleNameRule, _Rule);

  function RuleNameRule() {
    _classCallCheck(this, RuleNameRule);

    var nameDefinition = new _name["default"](),
        name = _ruleNames.RuleNameRuleName,
        definitions = [nameDefinition ///
    ],
        Node = _ruleName["default"];
    return _possibleConstructorReturn(this, _getPrototypeOf(RuleNameRule).call(this, name, definitions, Node));
  }

  return RuleNameRule;
}(_rule["default"]);

module.exports = RuleNameRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbIlJ1bGVOYW1lUnVsZSIsIm5hbWVEZWZpbml0aW9uIiwiTmFtZURlZmluaXRpb24iLCJuYW1lIiwiUnVsZU5hbWVSdWxlTmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIlJ1bGVOYW1lTm9kZSIsIlJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFk7OztBQUNKLDBCQUFjO0FBQUE7O0FBQ1osUUFBTUMsY0FBYyxHQUFHLElBQUlDLGdCQUFKLEVBQXZCO0FBQUEsUUFDTUMsSUFBSSxHQUFHQywyQkFEYjtBQUFBLFFBRU1DLFdBQVcsR0FBRyxDQUNaSixjQURZLENBQ0k7QUFESixLQUZwQjtBQUFBLFFBS01LLElBQUksR0FBR0Msb0JBTGI7QUFEWSxxRkFRTkosSUFSTSxFQVFBRSxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVndCRSxnQjs7QUFhM0JDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlYsWUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBSdWxlTmFtZU5vZGUgZnJvbSBcIi4uL25vZGUvcnVsZU5hbWVcIjtcbmltcG9ydCBOYW1lRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9uYW1lXCI7XG5cbmltcG9ydCB7IFJ1bGVOYW1lUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNsYXNzIFJ1bGVOYW1lUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lRGVmaW5pdGlvbiA9IG5ldyBOYW1lRGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5hbWUgPSBSdWxlTmFtZVJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbmFtZURlZmluaXRpb24gIC8vL1xuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFJ1bGVOYW1lTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVOYW1lUnVsZTtcbiJdfQ==