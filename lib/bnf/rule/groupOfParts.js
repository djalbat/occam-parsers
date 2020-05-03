"use strict";

var _rule = _interopRequireDefault(require("../rule"));

var _groupOfParts = _interopRequireDefault(require("../node/groupOfParts"));

var _groupOfParts2 = _interopRequireDefault(require("../definition/groupOfParts"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var GroupOfPartsRule = /*#__PURE__*/function (_Rule) {
  _inherits(GroupOfPartsRule, _Rule);

  function GroupOfPartsRule() {
    _classCallCheck(this, GroupOfPartsRule);

    var name = _ruleNames.GroupOfPartsRuleName,
        groupOfPartsDefinition = new _groupOfParts2["default"](),
        definitions = [groupOfPartsDefinition],
        Node = _groupOfParts["default"];
    return _possibleConstructorReturn(this, _getPrototypeOf(GroupOfPartsRule).call(this, name, definitions, Node));
  }

  return GroupOfPartsRule;
}(_rule["default"]);

module.exports = GroupOfPartsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJHcm91cE9mUGFydHNSdWxlIiwibmFtZSIsIkdyb3VwT2ZQYXJ0c1J1bGVOYW1lIiwiZ3JvdXBPZlBhcnRzRGVmaW5pdGlvbiIsIkdyb3VwT2ZQYXJ0c0RlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJHcm91cE9mUGFydHNOb2RlIiwiUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsZ0I7OztBQUNKLDhCQUFjO0FBQUE7O0FBQ1osUUFBTUMsSUFBSSxHQUFHQywrQkFBYjtBQUFBLFFBQ01DLHNCQUFzQixHQUFHLElBQUlDLHlCQUFKLEVBRC9CO0FBQUEsUUFFTUMsV0FBVyxHQUFHLENBQ1pGLHNCQURZLENBRnBCO0FBQUEsUUFLTUcsSUFBSSxHQUFHQyx3QkFMYjtBQURZLHlGQVFOTixJQVJNLEVBUUFJLFdBUkEsRUFRYUMsSUFSYjtBQVNiOzs7RUFWNEJFLGdCOztBQWEvQkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVixnQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBHcm91cE9mUGFydHNOb2RlIGZyb20gXCIuLi9ub2RlL2dyb3VwT2ZQYXJ0c1wiO1xuaW1wb3J0IEdyb3VwT2ZQYXJ0c0RlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vZ3JvdXBPZlBhcnRzXCI7XG5cbmltcG9ydCB7IEdyb3VwT2ZQYXJ0c1J1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jbGFzcyBHcm91cE9mUGFydHNSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSBHcm91cE9mUGFydHNSdWxlTmFtZSxcbiAgICAgICAgICBncm91cE9mUGFydHNEZWZpbml0aW9uID0gbmV3IEdyb3VwT2ZQYXJ0c0RlZmluaXRpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGdyb3VwT2ZQYXJ0c0RlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBHcm91cE9mUGFydHNOb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cE9mUGFydHNSdWxlO1xuIl19