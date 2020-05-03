"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _view = _interopRequireDefault(require("../view"));

var _parser = _interopRequireDefault(require("../../bnf/parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bnf = _parser["default"].bnf;

var BNFView = /*#__PURE__*/function (_View) {
  _inherits(BNFView, _View);

  function BNFView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BNFView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BNFView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "Lexer", _occamLexers.BNFLexer);

    _defineProperty(_assertThisInitialized(_this), "Parser", _parser["default"]);

    _defineProperty(_assertThisInitialized(_this), "heading", "BNF parser example");

    _defineProperty(_assertThisInitialized(_this), "initialContent", bnf);

    return _this;
  }

  _createClass(BNFView, [{
    key: "getParseTree",
    ///
    value: function getParseTree() {
      var parseTree = null;
      var lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries,
          ///
      lexer = this.Lexer.fromEntries(entries),
          parser = this.Parser.fromNothing(),
          content = this.getContent(),
          tokens = lexer.tokenise(content),
          node = parser.parse(tokens);

      if (node !== null) {
        parseTree = node.asParseTree(tokens);
      }

      return parseTree;
    }
  }]);

  return BNFView;
}(_view["default"]);

exports["default"] = BNFView;

_defineProperty(BNFView, "defaultProperties", {
  className: "bnf"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJuZi5qcyJdLCJuYW1lcyI6WyJibmYiLCJCTkZQYXJzZXIiLCJCTkZWaWV3IiwiQk5GTGV4ZXIiLCJwYXJzZVRyZWUiLCJsZXhpY2FsRW50cmllcyIsImdldExleGljYWxFbnRyaWVzIiwiZW50cmllcyIsImxleGVyIiwiTGV4ZXIiLCJmcm9tRW50cmllcyIsInBhcnNlciIsIlBhcnNlciIsImZyb21Ob3RoaW5nIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImFzUGFyc2VUcmVlIiwiVmlldyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLEcsR0FBUUMsa0IsQ0FBUkQsRzs7SUFFYUUsTzs7Ozs7Ozs7Ozs7Ozs7Ozs0REFDWEMscUI7OzZEQUVDRixrQjs7OERBRUMsb0I7O3FFQUVPRCxHOzs7Ozs7O0FBQUs7bUNBRVA7QUFDYixVQUFJSSxTQUFTLEdBQUcsSUFBaEI7QUFFQSxVQUFNQyxjQUFjLEdBQUcsS0FBS0MsaUJBQUwsRUFBdkI7QUFBQSxVQUNNQyxPQUFPLEdBQUdGLGNBRGhCO0FBQUEsVUFDZ0M7QUFDMUJHLE1BQUFBLEtBQUssR0FBRyxLQUFLQyxLQUFMLENBQVdDLFdBQVgsQ0FBdUJILE9BQXZCLENBRmQ7QUFBQSxVQUdNSSxNQUFNLEdBQUcsS0FBS0MsTUFBTCxDQUFZQyxXQUFaLEVBSGY7QUFBQSxVQUlNQyxPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQUpoQjtBQUFBLFVBS01DLE1BQU0sR0FBR1IsS0FBSyxDQUFDUyxRQUFOLENBQWVILE9BQWYsQ0FMZjtBQUFBLFVBTU1JLElBQUksR0FBR1AsTUFBTSxDQUFDUSxLQUFQLENBQWFILE1BQWIsQ0FOYjs7QUFRQSxVQUFJRSxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQmQsUUFBQUEsU0FBUyxHQUFHYyxJQUFJLENBQUNFLFdBQUwsQ0FBaUJKLE1BQWpCLENBQVo7QUFDRDs7QUFFRCxhQUFPWixTQUFQO0FBQ0Q7Ozs7RUF6QmtDaUIsZ0I7Ozs7Z0JBQWhCbkIsTyx1QkEyQlE7QUFDekJvQixFQUFBQSxTQUFTLEVBQUU7QUFEYyxDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJORkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuaW1wb3J0IEJORlBhcnNlciBmcm9tIFwiLi4vLi4vYm5mL3BhcnNlclwiO1xuXG5jb25zdCB7IGJuZiB9ID0gQk5GUGFyc2VyO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCTkZWaWV3IGV4dGVuZHMgVmlldyB7XG4gIExleGVyID0gQk5GTGV4ZXI7XG5cbiAgUGFyc2VyID0gQk5GUGFyc2VyO1xuXG4gIGhlYWRpbmcgPSBcIkJORiBwYXJzZXIgZXhhbXBsZVwiO1xuXG4gIGluaXRpYWxDb250ZW50ID0gYm5mOyAvLy9cblxuICBnZXRQYXJzZVRyZWUoKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgIGxleGVyID0gdGhpcy5MZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICBwYXJzZXIgPSB0aGlzLlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJuZlwiXG4gIH07XG59XG5cbiJdfQ==