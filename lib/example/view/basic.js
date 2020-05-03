"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _view = _interopRequireDefault(require("../view"));

var _parser = _interopRequireDefault(require("../../basic/parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BasicView = /*#__PURE__*/function (_View) {
  _inherits(BasicView, _View);

  function BasicView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BasicView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BasicView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "Lexer", _occamLexers.BasicLexer);

    _defineProperty(_assertThisInitialized(_this), "Parser", _parser["default"]);

    _defineProperty(_assertThisInitialized(_this), "heading", "Basic parser example");

    _defineProperty(_assertThisInitialized(_this), "initialContent", "1+2/3");

    return _this;
  }

  return BasicView;
}(_view["default"]);

exports["default"] = BasicView;

_defineProperty(BasicView, "defaultProperties", {
  className: "basic"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljLmpzIl0sIm5hbWVzIjpbIkJhc2ljVmlldyIsIkJhc2ljTGV4ZXIiLCJCYXNpY1BhcnNlciIsIlZpZXciLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs7OzREQUNYQyx1Qjs7NkRBRUNDLGtCOzs4REFFQyxzQjs7cUVBRU8sTzs7Ozs7O0VBUG9CQyxnQjs7OztnQkFBbEJILFMsdUJBU1E7QUFDekJJLEVBQUFBLFNBQVMsRUFBRTtBQURjLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcbmltcG9ydCBCYXNpY1BhcnNlciBmcm9tIFwiLi4vLi4vYmFzaWMvcGFyc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljVmlldyBleHRlbmRzIFZpZXcge1xuICBMZXhlciA9IEJhc2ljTGV4ZXI7XG5cbiAgUGFyc2VyID0gQmFzaWNQYXJzZXI7XG5cbiAgaGVhZGluZyA9IFwiQmFzaWMgcGFyc2VyIGV4YW1wbGVcIjtcblxuICBpbml0aWFsQ29udGVudCA9IFwiMSsyLzNcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJhc2ljXCJcbiAgfTtcbn1cbiJdfQ==