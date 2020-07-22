"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rule = _interopRequireDefault(require("../rule"));

var _sequenceOfParts = _interopRequireDefault(require("../node/sequenceOfParts"));

var _sequenceOfParts2 = _interopRequireDefault(require("../definition/sequenceOfParts"));

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

var SequenceOfPartsRule = /*#__PURE__*/function (_Rule) {
  _inherits(SequenceOfPartsRule, _Rule);

  var _super = _createSuper(SequenceOfPartsRule);

  function SequenceOfPartsRule() {
    _classCallCheck(this, SequenceOfPartsRule);

    var name = _ruleNames.SequenceOfPartsRuleName,
        sequenceOfPartsDefinition = new _sequenceOfParts2["default"](),
        definitions = [sequenceOfPartsDefinition],
        Node = _sequenceOfParts["default"];
    return _super.call(this, name, definitions, Node);
  }

  return SequenceOfPartsRule;
}(_rule["default"]);

exports["default"] = SequenceOfPartsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJTZXF1ZW5jZU9mUGFydHNSdWxlIiwibmFtZSIsIlNlcXVlbmNlT2ZQYXJ0c1J1bGVOYW1lIiwic2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiIsIlNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJTZXF1ZW5jZU9mUGFydHNOb2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsbUI7Ozs7O0FBQ25CLGlDQUFjO0FBQUE7O0FBQ1osUUFBTUMsSUFBSSxHQUFHQyxrQ0FBYjtBQUFBLFFBQ01DLHlCQUF5QixHQUFHLElBQUlDLDRCQUFKLEVBRGxDO0FBQUEsUUFFTUMsV0FBVyxHQUFHLENBQ1pGLHlCQURZLENBRnBCO0FBQUEsUUFLTUcsSUFBSSxHQUFHQywyQkFMYjtBQURZLDZCQVFOTixJQVJNLEVBUUFJLFdBUkEsRUFRYUMsSUFSYjtBQVNiOzs7RUFWOENFLGdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgU2VxdWVuY2VPZlBhcnRzTm9kZSBmcm9tIFwiLi4vbm9kZS9zZXF1ZW5jZU9mUGFydHNcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3NlcXVlbmNlT2ZQYXJ0c1wiO1xuXG5pbXBvcnQgeyBTZXF1ZW5jZU9mUGFydHNSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VxdWVuY2VPZlBhcnRzUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gU2VxdWVuY2VPZlBhcnRzUnVsZU5hbWUsXG4gICAgICAgICAgc2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiA9IG5ldyBTZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gU2VxdWVuY2VPZlBhcnRzTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iXX0=