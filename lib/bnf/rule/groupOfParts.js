"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = GroupOfPartsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJHcm91cE9mUGFydHNSdWxlIiwibmFtZSIsIkdyb3VwT2ZQYXJ0c1J1bGVOYW1lIiwiZ3JvdXBPZlBhcnRzRGVmaW5pdGlvbiIsIkdyb3VwT2ZQYXJ0c0RlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJHcm91cE9mUGFydHNOb2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxnQjs7O0FBQ25CLDhCQUFjO0FBQUE7O0FBQ1osUUFBTUMsSUFBSSxHQUFHQywrQkFBYjtBQUFBLFFBQ01DLHNCQUFzQixHQUFHLElBQUlDLHlCQUFKLEVBRC9CO0FBQUEsUUFFTUMsV0FBVyxHQUFHLENBQ1pGLHNCQURZLENBRnBCO0FBQUEsUUFLTUcsSUFBSSxHQUFHQyx3QkFMYjtBQURZLHlGQVFOTixJQVJNLEVBUUFJLFdBUkEsRUFRYUMsSUFSYjtBQVNiOzs7RUFWMkNFLGdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgR3JvdXBPZlBhcnRzTm9kZSBmcm9tIFwiLi4vbm9kZS9ncm91cE9mUGFydHNcIjtcbmltcG9ydCBHcm91cE9mUGFydHNEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL2dyb3VwT2ZQYXJ0c1wiO1xuXG5pbXBvcnQgeyBHcm91cE9mUGFydHNSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdXBPZlBhcnRzUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gR3JvdXBPZlBhcnRzUnVsZU5hbWUsXG4gICAgICAgICAgZ3JvdXBPZlBhcnRzRGVmaW5pdGlvbiA9IG5ldyBHcm91cE9mUGFydHNEZWZpbml0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBncm91cE9mUGFydHNEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gR3JvdXBPZlBhcnRzTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iXX0=