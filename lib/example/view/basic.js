"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _index = require("../../index");

var _view = _interopRequireDefault(require("../view"));

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

var entries = [{
  "bracket": "^(?:\\(|\\))"
}, {
  "special": "^(?:=>|EOL|EOF)"
}, {
  "unassigned": "^."
}];
var bnf = "\n\n    unqualifiedStatement ::= \"X\" _statement! \"EOL\";\n    \n    _statement           ::= \"a\" ;\n                           \n    dummy                ::= \"(\" . \")\" ;\n\n    expression           ::= \"(\" . \")\" \"=>\" . ;\n    \n    statement            ::= _statement ;\n  \n  ";

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

    _defineProperty(_assertThisInitialized(_this), "initialContent", "X a\n          \n    EOL\n    \n   ");

    return _this;
  }

  return BasicView;
}(_view["default"]);

exports["default"] = BasicView;

_defineProperty(BasicView, "defaultProperties", {
  className: "basic"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljLmpzIl0sIm5hbWVzIjpbImVudHJpZXMiLCJibmYiLCJCYXNpY1ZpZXciLCJCYXNpY0xleGVyIiwiQmFzaWNQYXJzZXIiLCJWaWV3IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsQ0FFZDtBQUFFLGFBQVc7QUFBYixDQUZjLEVBSWQ7QUFBRSxhQUFXO0FBQWIsQ0FKYyxFQU1kO0FBQUUsZ0JBQWM7QUFBaEIsQ0FOYyxDQUFoQjtBQVVBLElBQU1DLEdBQUcseVNBQVQ7O0lBY3FCQyxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFDR0MsdUIsc0NBQ0hILE87Ozs7Ozs7Ozs7Ozs7O01BR0lJLGtCLG1DQUNSSCxHOzs4REFHTCxzQjs7Ozs7Ozs7RUFUMkJJLGdCOzs7O2dCQUFsQkgsUyx1QkFpQlE7QUFDekJJLEVBQUFBLFNBQVMsRUFBRTtBQURjLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJhc2ljUGFyc2VyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuY29uc3QgZW50cmllcyA9IFtcblxuICB7IFwiYnJhY2tldFwiOiBcIl4oPzpcXFxcKHxcXFxcKSlcIiB9LFxuXG4gIHsgXCJzcGVjaWFsXCI6IFwiXig/Oj0+fEVPTHxFT0YpXCIgfSxcblxuICB7IFwidW5hc3NpZ25lZFwiOiBcIl4uXCIgfVxuXG5dO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA6Oj0gXCJYXCIgX3N0YXRlbWVudCEgXCJFT0xcIjtcbiAgICBcbiAgICBfc3RhdGVtZW50ICAgICAgICAgICA6Oj0gXCJhXCIgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgZHVtbXkgICAgICAgICAgICAgICAgOjo9IFwiKFwiIC4gXCIpXCIgO1xuXG4gICAgZXhwcmVzc2lvbiAgICAgICAgICAgOjo9IFwiKFwiIC4gXCIpXCIgXCI9PlwiIC4gO1xuICAgIFxuICAgIHN0YXRlbWVudCAgICAgICAgICAgIDo6PSBfc3RhdGVtZW50IDtcbiAgXG4gIGA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljVmlldyBleHRlbmRzIFZpZXcge1xuICBMZXhlciA9IGNsYXNzIGV4dGVuZHMgQmFzaWNMZXhlciB7XG4gICAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xuICB9O1xuXG4gIFBhcnNlciA9IGNsYXNzIGV4dGVuZHMgQmFzaWNQYXJzZXIge1xuICAgIHN0YXRpYyBibmYgPSBibmY7XG4gIH07XG5cbiAgaGVhZGluZyA9IFwiQmFzaWMgcGFyc2VyIGV4YW1wbGVcIjtcblxuICBpbml0aWFsQ29udGVudCA9IGBYIGFcbiAgICAgICAgICBcbiAgICBFT0xcbiAgICBcbiAgIGA7IC8vL2BcIigxKzIpLzNcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJhc2ljXCJcbiAgfTtcbn1cbiJdfQ==