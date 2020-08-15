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

    _defineProperty(_assertThisInitialized(_this), "initialContent", "X \n          \n          c \n          d \n          \n    EOL\n    \n    \n   ");

    return _this;
  }

  return BasicView;
}(_view["default"]);

exports["default"] = BasicView;

_defineProperty(BasicView, "defaultProperties", {
  className: "basic"
});

var entries = [{
  "bracket": "^(?:\\(|\\))"
}, {
  "special": "^(?:=>|EOL|EOF)"
}, {
  "unassigned": "^."
}];
var bnf = "\n\n  unqualifiedStatement ::= \"X\" _statement! \"EOL\" ;\n\n  _statement           ::= ( dummy1 \"d\" ) ;\n\n  dummy1                ::= . ; \n\n  dummy2                ::= . ; \n\n";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljLmpzIl0sIm5hbWVzIjpbIkJhc2ljVmlldyIsIkJhc2ljTGV4ZXIiLCJlbnRyaWVzIiwiQmFzaWNQYXJzZXIiLCJibmYiLCJWaWV3IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUNHQyx1QixzQ0FDSEMsTzs7Ozs7Ozs7Ozs7Ozs7TUFHSUMsa0IsbUNBQ1JDLEc7OzhEQUdMLHNCOzs7Ozs7OztFQVQyQkMsZ0I7Ozs7Z0JBQWxCTCxTLHVCQXFCUTtBQUN6Qk0sRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7QUFLN0IsSUFBTUosT0FBTyxHQUFHLENBRWQ7QUFBRSxhQUFXO0FBQWIsQ0FGYyxFQUlkO0FBQUUsYUFBVztBQUFiLENBSmMsRUFNZDtBQUFFLGdCQUFjO0FBQWhCLENBTmMsQ0FBaEI7QUFVQSxJQUFNRSxHQUFHLDRMQUFUIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJhc2ljTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBCYXNpY1BhcnNlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBWaWV3IGZyb20gXCIuLi92aWV3XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljVmlldyBleHRlbmRzIFZpZXcge1xuICBMZXhlciA9IGNsYXNzIGV4dGVuZHMgQmFzaWNMZXhlciB7XG4gICAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xuICB9O1xuXG4gIFBhcnNlciA9IGNsYXNzIGV4dGVuZHMgQmFzaWNQYXJzZXIge1xuICAgIHN0YXRpYyBibmYgPSBibmY7XG4gIH07XG5cbiAgaGVhZGluZyA9IFwiQmFzaWMgcGFyc2VyIGV4YW1wbGVcIjtcblxuICBpbml0aWFsQ29udGVudCA9IGBYIFxuICAgICAgICAgIFxuICAgICAgICAgIGMgXG4gICAgICAgICAgZCBcbiAgICAgICAgICBcbiAgICBFT0xcbiAgICBcbiAgICBcbiAgIGA7IC8vL1wiKDErMikvM1wiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYmFzaWNcIlxuICB9O1xufVxuXG5jb25zdCBlbnRyaWVzID0gW1xuXG4gIHsgXCJicmFja2V0XCI6IFwiXig/OlxcXFwofFxcXFwpKVwiIH0sXG5cbiAgeyBcInNwZWNpYWxcIjogXCJeKD86PT58RU9MfEVPRilcIiB9LFxuXG4gIHsgXCJ1bmFzc2lnbmVkXCI6IFwiXi5cIiB9XG5cbl07XG5cbmNvbnN0IGJuZiA9IGBcblxuICB1bnF1YWxpZmllZFN0YXRlbWVudCA6Oj0gXCJYXCIgX3N0YXRlbWVudCEgXCJFT0xcIiA7XG5cbiAgX3N0YXRlbWVudCAgICAgICAgICAgOjo9ICggZHVtbXkxIFwiZFwiICkgO1xuXG4gIGR1bW15MSAgICAgICAgICAgICAgICA6Oj0gLiA7IFxuXG4gIGR1bW15MiAgICAgICAgICAgICAgICA6Oj0gLiA7IFxuXG5gO1xuIl19