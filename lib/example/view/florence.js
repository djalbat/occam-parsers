"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _view = _interopRequireDefault(require("../view"));

var _parser = _interopRequireDefault(require("../../florence/parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FlorenceView = /*#__PURE__*/function (_View) {
  _inherits(FlorenceView, _View);

  function FlorenceView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FlorenceView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FlorenceView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "Lexer", _occamLexers.FlorenceLexer);

    _defineProperty(_assertThisInitialized(_this), "Parser", _parser["default"]);

    _defineProperty(_assertThisInitialized(_this), "heading", "Florence parser example");

    _defineProperty(_assertThisInitialized(_this), "initialContent", "\n  \nRule (Explosion)\n  Conclusion\n    A\n\n  ");

    return _this;
  }

  return FlorenceView;
}(_view["default"]);

exports["default"] = FlorenceView;

_defineProperty(FlorenceView, "defaultProperties", {
  className: "florence"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsb3JlbmNlLmpzIl0sIm5hbWVzIjpbIkZsb3JlbmNlVmlldyIsIkZsb3JlbmNlTGV4ZXIiLCJGbG9yZW5jZVBhcnNlciIsIlZpZXciLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7Ozs7OzREQUNYQywwQjs7NkRBRUNDLGtCOzs4REFFQyx5Qjs7Ozs7Ozs7RUFMOEJDLGdCOzs7O2dCQUFyQkgsWSx1QkFlUTtBQUN6QkksRUFBQUEsU0FBUyxFQUFFO0FBRGMsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGbG9yZW5jZUxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuaW1wb3J0IEZsb3JlbmNlUGFyc2VyIGZyb20gXCIuLi8uLi9mbG9yZW5jZS9wYXJzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvcmVuY2VWaWV3IGV4dGVuZHMgVmlldyB7XG4gIExleGVyID0gRmxvcmVuY2VMZXhlcjtcblxuICBQYXJzZXIgPSBGbG9yZW5jZVBhcnNlcjtcblxuICBoZWFkaW5nID0gXCJGbG9yZW5jZSBwYXJzZXIgZXhhbXBsZVwiO1xuXG4gIGluaXRpYWxDb250ZW50ID0gYFxuICBcblJ1bGUgKEV4cGxvc2lvbilcbiAgQ29uY2x1c2lvblxuICAgIEFcblxuICBgO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmxvcmVuY2VcIlxuICB9O1xufVxuIl19