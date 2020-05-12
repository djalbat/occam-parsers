"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _view = _interopRequireDefault(require("../view"));

var _parser = _interopRequireDefault(require("../../metaJSON/parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MetaJSONView = /*#__PURE__*/function (_View) {
  _inherits(MetaJSONView, _View);

  function MetaJSONView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MetaJSONView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MetaJSONView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "Lexer", _occamLexers.MetaJSONLexer);

    _defineProperty(_assertThisInitialized(_this), "Parser", _parser["default"]);

    _defineProperty(_assertThisInitialized(_this), "heading", "MetaJSON parser example");

    _defineProperty(_assertThisInitialized(_this), "initialContent", "{\n  \"repository\": \"https://github.com/jecs-imperial/material-conditional\",\n  \"dependencies\": [\n    \"classical-propositional-logic\",\n    \"de-morgans-laws\"\n  ]\n}\n");

    return _this;
  }

  return MetaJSONView;
}(_view["default"]);

exports["default"] = MetaJSONView;

_defineProperty(MetaJSONView, "defaultProperties", {
  className: "metaJSON"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGFKU09OLmpzIl0sIm5hbWVzIjpbIk1ldGFKU09OVmlldyIsIk1ldGFKU09OTGV4ZXIiLCJNZXRhSlNPTlBhcnNlciIsIlZpZXciLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7Ozs7OzREQUNYQywwQjs7NkRBRUNDLGtCOzs4REFFQyx5Qjs7Ozs7Ozs7RUFMOEJDLGdCOzs7O2dCQUFyQkgsWSx1QkFnQlE7QUFDekJJLEVBQUFBLFNBQVMsRUFBRTtBQURjLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTWV0YUpTT05MZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcbmltcG9ydCBNZXRhSlNPTlBhcnNlciBmcm9tIFwiLi4vLi4vbWV0YUpTT04vcGFyc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFKU09OVmlldyBleHRlbmRzIFZpZXcge1xuICBMZXhlciA9IE1ldGFKU09OTGV4ZXI7XG5cbiAgUGFyc2VyID0gTWV0YUpTT05QYXJzZXI7XG5cbiAgaGVhZGluZyA9IFwiTWV0YUpTT04gcGFyc2VyIGV4YW1wbGVcIjtcblxuICBpbml0aWFsQ29udGVudCA9IGB7XG4gIFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qZWNzLWltcGVyaWFsL21hdGVyaWFsLWNvbmRpdGlvbmFsXCIsXG4gIFwiZGVwZW5kZW5jaWVzXCI6IFtcbiAgICBcImNsYXNzaWNhbC1wcm9wb3NpdGlvbmFsLWxvZ2ljXCIsXG4gICAgXCJkZS1tb3JnYW5zLWxhd3NcIlxuICBdXG59XG5gO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWV0YUpTT05cIlxuICB9O1xufVxuIl19