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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MetaJSONView = /*#__PURE__*/function (_View) {
  _inherits(MetaJSONView, _View);

  var _super = _createSuper(MetaJSONView);

  function MetaJSONView() {
    var _this;

    _classCallCheck(this, MetaJSONView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGFKU09OLmpzIl0sIm5hbWVzIjpbIk1ldGFKU09OVmlldyIsIk1ldGFKU09OTGV4ZXIiLCJNZXRhSlNPTlBhcnNlciIsIlZpZXciLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsWTs7Ozs7Ozs7Ozs7Ozs7Ozs0REFDWEMsMEI7OzZEQUVDQyxrQjs7OERBRUMseUI7Ozs7Ozs7O0VBTDhCQyxnQjs7OztnQkFBckJILFksdUJBZ0JRO0FBQ3pCSSxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE1ldGFKU09OTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuLi92aWV3XCI7XG5pbXBvcnQgTWV0YUpTT05QYXJzZXIgZnJvbSBcIi4uLy4uL21ldGFKU09OL3BhcnNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhSlNPTlZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgTGV4ZXIgPSBNZXRhSlNPTkxleGVyO1xuXG4gIFBhcnNlciA9IE1ldGFKU09OUGFyc2VyO1xuXG4gIGhlYWRpbmcgPSBcIk1ldGFKU09OIHBhcnNlciBleGFtcGxlXCI7XG5cbiAgaW5pdGlhbENvbnRlbnQgPSBge1xuICBcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vamVjcy1pbXBlcmlhbC9tYXRlcmlhbC1jb25kaXRpb25hbFwiLFxuICBcImRlcGVuZGVuY2llc1wiOiBbXG4gICAgXCJjbGFzc2ljYWwtcHJvcG9zaXRpb25hbC1sb2dpY1wiLFxuICAgIFwiZGUtbW9yZ2Fucy1sYXdzXCJcbiAgXVxufVxuYDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1ldGFKU09OXCJcbiAgfTtcbn1cbiJdfQ==