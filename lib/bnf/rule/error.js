"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rule = _interopRequireDefault(require("../rule"));

var _error = _interopRequireDefault(require("../node/error"));

var _error2 = _interopRequireDefault(require("../definition/error"));

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

var ErrorRule = /*#__PURE__*/function (_Rule) {
  _inherits(ErrorRule, _Rule);

  var _super = _createSuper(ErrorRule);

  function ErrorRule() {
    _classCallCheck(this, ErrorRule);

    var errorDefinition = new _error2["default"](),
        name = _ruleNames.ErrorRuleName,
        definitions = [errorDefinition],
        Node = _error["default"];
    return _super.call(this, name, definitions, Node);
  }

  return ErrorRule;
}(_rule["default"]);

exports["default"] = ErrorRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbIkVycm9yUnVsZSIsImVycm9yRGVmaW5pdGlvbiIsIkVycm9yRGVmaW5pdGlvbiIsIm5hbWUiLCJFcnJvclJ1bGVOYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwiRXJyb3JOb2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7QUFDbkIsdUJBQWM7QUFBQTs7QUFDWixRQUFNQyxlQUFlLEdBQUcsSUFBSUMsa0JBQUosRUFBeEI7QUFBQSxRQUNNQyxJQUFJLEdBQUdDLHdCQURiO0FBQUEsUUFFTUMsV0FBVyxHQUFHLENBQ1pKLGVBRFksQ0FGcEI7QUFBQSxRQUtNSyxJQUFJLEdBQUdDLGlCQUxiO0FBRFksNkJBUU5KLElBUk0sRUFRQUUsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVZvQ0UsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBFcnJvck5vZGUgZnJvbSBcIi4uL25vZGUvZXJyb3JcIjtcbmltcG9ydCBFcnJvckRlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vZXJyb3JcIjtcblxuaW1wb3J0IHsgRXJyb3JSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGVycm9yRGVmaW5pdGlvbiA9IG5ldyBFcnJvckRlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gRXJyb3JSdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGVycm9yRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IEVycm9yTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7XG4gIH1cbn1cbiJdfQ==