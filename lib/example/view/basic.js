"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _index = require("../../index");

var _view = _interopRequireDefault(require("../view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bnf = _index.BasicParser.bnf,
    entries = _occamLexers.BasicLexer.entries;

var BasicView = /*#__PURE__*/function (_View) {
  _inherits(BasicView, _View);

  var _super = _createSuper(BasicView);

  function BasicView() {
    var _class, _temp, _class2, _temp2;

    var _this;

    _classCallCheck(this, BasicView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "Lexer", (_temp = _class = /*#__PURE__*/function (_BasicLexer) {
      _inherits(_class, _BasicLexer);

      var _super2 = _createSuper(_class);

      function _class() {
        _classCallCheck(this, _class);

        return _super2.apply(this, arguments);
      }

      return _class;
    }(_occamLexers.BasicLexer), _defineProperty(_class, "entries", entries), _temp));

    _defineProperty(_assertThisInitialized(_this), "Parser", (_temp2 = _class2 = /*#__PURE__*/function (_BasicParser) {
      _inherits(_class2, _BasicParser);

      var _super3 = _createSuper(_class2);

      function _class2() {
        _classCallCheck(this, _class2);

        return _super3.apply(this, arguments);
      }

      return _class2;
    }(_index.BasicParser), _defineProperty(_class2, "bnf", bnf), _temp2));

    _defineProperty(_assertThisInitialized(_this), "heading", "Basic parser example");

    _defineProperty(_assertThisInitialized(_this), "initialContent", "(1+2)/3");

    return _this;
  }

  return BasicView;
}(_view["default"]);

exports["default"] = BasicView;

_defineProperty(BasicView, "defaultProperties", {
  className: "basic"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljLmpzIl0sIm5hbWVzIjpbImJuZiIsIkJhc2ljUGFyc2VyIiwiZW50cmllcyIsIkJhc2ljTGV4ZXIiLCJCYXNpY1ZpZXciLCJWaWV3IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFFQSxHQUFGLEdBQVVDLGtCQUFWLENBQUVELEdBQUY7QUFBQSxJQUNFRSxPQURGLEdBQ2NDLHVCQURkLENBQ0VELE9BREY7O0lBR2VFLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUNHRCx1QixzQ0FDSEQsTzs7Ozs7Ozs7Ozs7Ozs7TUFHSUQsa0IsbUNBQ1JELEc7OzhEQUdMLHNCOztxRUFFTyxTOzs7Ozs7RUFYb0JLLGdCOzs7O2dCQUFsQkQsUyx1QkFhUTtBQUN6QkUsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCYXNpY0xleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuaW1wb3J0IHsgQmFzaWNQYXJzZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5jb25zdCB7IGJuZiB9ID0gQmFzaWNQYXJzZXIsXG4gICAgICB7IGVudHJpZXMgfSA9IEJhc2ljTGV4ZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljVmlldyBleHRlbmRzIFZpZXcge1xuICBMZXhlciA9IGNsYXNzIGV4dGVuZHMgQmFzaWNMZXhlciB7XG4gICAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xuICB9O1xuXG4gIFBhcnNlciA9IGNsYXNzIGV4dGVuZHMgQmFzaWNQYXJzZXIge1xuICAgIHN0YXRpYyBibmYgPSBibmY7XG4gIH07XG5cbiAgaGVhZGluZyA9IFwiQmFzaWMgcGFyc2VyIGV4YW1wbGVcIjtcblxuICBpbml0aWFsQ29udGVudCA9IFwiKDErMikvM1wiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYmFzaWNcIlxuICB9O1xufVxuIl19