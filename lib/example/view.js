"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var _easyLayout = require("easy-layout");

var _heading = _interopRequireDefault(require("./heading"));

var _back = _interopRequireDefault(require("./link/back"));

var _paragraph = _interopRequireDefault(require("./paragraph"));

var _column = _interopRequireDefault(require("./div/column"));

var _subHeading = _interopRequireDefault(require("./subHeading"));

var _sizeable = _interopRequireDefault(require("./div/sizeable"));

var _bnf = _interopRequireDefault(require("./textarea/bnf"));

var _ruleName = _interopRequireDefault(require("./input/ruleName"));

var _tokens = _interopRequireDefault(require("./textarea/tokens"));

var _content = _interopRequireDefault(require("./textarea/content"));

var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));

var _vertical = _interopRequireDefault(require("./div/splitter/vertical"));

var _lexicalEntries = _interopRequireDefault(require("./textarea/lexicalEntries"));

var _rule = require("../utilities/rule");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var View = /*#__PURE__*/function (_Element) {
  _inherits(View, _Element);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
  }

  _createClass(View, [{
    key: "getTokens",
    value: function getTokens() {
      var lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries,
          ///
      lexer = this.Lexer.fromEntries(entries),
          content = this.getContent(),
          tokens = lexer.tokenise(content);
      return tokens;
    }
  }, {
    key: "getParseTree",
    value: function getParseTree(tokens) {
      var parseTree = null;
      var bnf = this.getBNF(),
          parser = this.Parser.fromBNF(bnf),
          ruleName = this.getRuleName(),
          name = ruleName,
          ///
      rules = parser.getRules(),
          rule = (0, _rule.findRuleByName)(name, rules),
          node = parser.parse(tokens, rule);

      if (node !== null) {
        parseTree = node.asParseTree(tokens);
      }

      return parseTree;
    }
  }, {
    key: "keyUpHandler",
    value: function keyUpHandler() {
      try {
        var tokens = this.getTokens(),
            parseTree = this.getParseTree(tokens);
        this.setTokens(tokens);
        this.setParseTree(parseTree);
      } catch (error) {
        console.log(error);
        this.clearTokens();
        this.clearParseTree();
      }
    }
  }, {
    key: "childElements",
    value: function childElements(properties) {
      var keyUpHandler = this.keyUpHandler.bind(this);
      return [React.createElement(_heading["default"], null, this.heading), React.createElement(_easyLayout.ColumnsDiv, null, React.createElement(_sizeable["default"], null, React.createElement(_easyLayout.RowsDiv, null, React.createElement(_subHeading["default"], null, "Lexical entries"), React.createElement(_lexicalEntries["default"], {
        onKeyUp: keyUpHandler
      }), React.createElement(_subHeading["default"], null, "BNF"), React.createElement(_bnf["default"], {
        onKeyUp: keyUpHandler
      }), React.createElement(_subHeading["default"], null, "Rule name"), React.createElement(_ruleName["default"], {
        onKeyUp: keyUpHandler
      }))), React.createElement(_vertical["default"], null), React.createElement(_column["default"], null, React.createElement(_easyLayout.RowsDiv, null, React.createElement(_subHeading["default"], null, "Content"), React.createElement(_content["default"], {
        onKeyUp: keyUpHandler
      }), React.createElement(_subHeading["default"], null, "Tokens"), React.createElement(_tokens["default"], null), React.createElement(_subHeading["default"], null, "Parse tree"), React.createElement(_parseTree["default"], null)))), React.createElement(_paragraph["default"], null, React.createElement(_back["default"], null))];
    }
  }, {
    key: "initialise",
    value: function initialise(properties) {
      this.assignContext();
      var bnf = this.Parser.bnf,
          entries = this.Lexer.entries,
          content = this.initialContent,
          lexicalEntries = entries; ///

      this.setBNF(bnf);
      this.setContent(content);
      this.setLexicalEntries(lexicalEntries);
      this.keyUpHandler();
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var exampleView = _easy.Element.fromClass(Class, properties);

      exampleView.initialise(properties);
      return exampleView;
    }
  }]);

  return View;
}(_easy.Element);

exports["default"] = View;

_defineProperty(View, "tagName", "div");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJlbnRyaWVzIiwibGV4ZXIiLCJMZXhlciIsImZyb21FbnRyaWVzIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsInBhcnNlVHJlZSIsImJuZiIsImdldEJORiIsInBhcnNlciIsIlBhcnNlciIsImZyb21CTkYiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibmFtZSIsInJ1bGVzIiwiZ2V0UnVsZXMiLCJydWxlIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJnZXRUb2tlbnMiLCJnZXRQYXJzZVRyZWUiLCJzZXRUb2tlbnMiLCJzZXRQYXJzZVRyZWUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclRva2VucyIsImNsZWFyUGFyc2VUcmVlIiwicHJvcGVydGllcyIsImtleVVwSGFuZGxlciIsImJpbmQiLCJoZWFkaW5nIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxDb250ZW50Iiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxFbnRyaWVzIiwiQ2xhc3MiLCJleGFtcGxlVmlldyIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7O2dDQUNQO0FBQ1YsVUFBTUMsY0FBYyxHQUFHLEtBQUtDLGlCQUFMLEVBQXZCO0FBQUEsVUFDTUMsT0FBTyxHQUFHRixjQURoQjtBQUFBLFVBQ2dDO0FBQzFCRyxNQUFBQSxLQUFLLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxXQUFYLENBQXVCSCxPQUF2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QyxXQUFLc0MsTUFBTCxDQUFZN0IsR0FBWjtBQUNBLFdBQUs4QixVQUFMLENBQWdCbkMsT0FBaEI7QUFDQSxXQUFLb0MsaUJBQUwsQ0FBdUIxQyxjQUF2QjtBQUVBLFdBQUttQyxZQUFMO0FBQ0Q7Ozs4QkFJZ0JRLEssRUFBT1QsVSxFQUFZO0FBQ2xDLFVBQU1VLFdBQVcsR0FBR0MsY0FBUUMsU0FBUixDQUFrQkgsS0FBbEIsRUFBeUJULFVBQXpCLENBQXBCOztBQUVBVSxNQUFBQSxXQUFXLENBQUNHLFVBQVosQ0FBdUJiLFVBQXZCO0FBRUEsYUFBT1UsV0FBUDtBQUNEOzs7O0VBdkgrQkMsYTs7OztnQkFBYjlDLEksYUErR0YsSyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbnNEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4vaGVhZGluZ1wiO1xuaW1wb3J0IEJhY2tMaW5rIGZyb20gXCIuL2xpbmsvYmFja1wiO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi9wYXJhZ3JhcGhcIjtcbmltcG9ydCBDb2x1bW5EaXYgZnJvbSBcIi4vZGl2L2NvbHVtblwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IFJ1bGVOYW1lSW5wdXQgZnJvbSBcIi4vaW5wdXQvcnVsZU5hbWVcIjtcbmltcG9ydCBUb2tlbnNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS90b2tlbnNcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IFZlcnRpY2FsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL3ZlcnRpY2FsXCI7XG5pbXBvcnQgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9sZXhpY2FsRW50cmllc1wiO1xuXG5pbXBvcnQgeyBmaW5kUnVsZUJ5TmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFRva2VucygpIHtcbiAgICBjb25zdCBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgIGxleGVyID0gdGhpcy5MZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKHRva2Vucykge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICBwYXJzZXIgPSB0aGlzLlBhcnNlci5mcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbmFtZSA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZXMgPSBwYXJzZXIuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBydWxlID0gZmluZFJ1bGVCeU5hbWUobmFtZSwgcnVsZXMpLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBydWxlKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICAgIHBhcnNlVHJlZSA9IHRoaXMuZ2V0UGFyc2VUcmVlKHRva2Vucyk7XG5cbiAgICAgIHRoaXMuc2V0VG9rZW5zKHRva2Vucyk7XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgdGhpcy5jbGVhclRva2VucygpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8SGVhZGluZz5cbiAgICAgICAge3RoaXMuaGVhZGluZ31cbiAgICAgIDwvSGVhZGluZz4sXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIExleGljYWwgZW50cmllc1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBSdWxlIG5hbWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxSdWxlTmFtZUlucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgVG9rZW5zXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8VG9rZW5zVGV4dGFyZWEgLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PixcbiAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgIDxCYWNrTGluayAvPlxuICAgICAgPC9QYXJhZ3JhcGg+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UocHJvcGVydGllcykge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBibmYgfSA9IHRoaXMuUGFyc2VyLFxuICAgICAgICAgIHsgZW50cmllcyB9ID0gdGhpcy5MZXhlcixcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5pbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZXhhbXBsZVZpZXcgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBleGFtcGxlVmlldy5pbml0aWFsaXNlKHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGV4YW1wbGVWaWV3XG4gIH1cbn1cbiJdfQ==