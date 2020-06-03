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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var View = /*#__PURE__*/function (_Element) {
  _inherits(View, _Element);

  var _super = _createSuper(View);

  function View() {
    _classCallCheck(this, View);

    return _super.apply(this, arguments);
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
    value: function childElements() {
      var keyUpHandler = this.keyUpHandler.bind(this);
      return [/*#__PURE__*/React.createElement(_heading["default"], null, this.heading), /*#__PURE__*/React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/React.createElement(_sizeable["default"], null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Lexical entries"), /*#__PURE__*/React.createElement(_lexicalEntries["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "BNF"), /*#__PURE__*/React.createElement(_bnf["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Rule name"), /*#__PURE__*/React.createElement(_ruleName["default"], {
        onKeyUp: keyUpHandler
      }))), /*#__PURE__*/React.createElement(_vertical["default"], null), /*#__PURE__*/React.createElement(_column["default"], null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Content"), /*#__PURE__*/React.createElement(_content["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Tokens"), /*#__PURE__*/React.createElement(_tokens["default"], null), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Parse tree"), /*#__PURE__*/React.createElement(_parseTree["default"], null)))), /*#__PURE__*/React.createElement(_paragraph["default"], null, /*#__PURE__*/React.createElement(_back["default"], null))];
    }
  }, {
    key: "initialise",
    value: function initialise() {
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

      exampleView.initialise();
      return exampleView;
    }
  }]);

  return View;
}(_easy.Element);

exports["default"] = View;

_defineProperty(View, "tagName", "div");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJlbnRyaWVzIiwibGV4ZXIiLCJMZXhlciIsImZyb21FbnRyaWVzIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsInBhcnNlVHJlZSIsImJuZiIsImdldEJORiIsInBhcnNlciIsIlBhcnNlciIsImZyb21CTkYiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibmFtZSIsInJ1bGVzIiwiZ2V0UnVsZXMiLCJydWxlIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJnZXRUb2tlbnMiLCJnZXRQYXJzZVRyZWUiLCJzZXRUb2tlbnMiLCJzZXRQYXJzZVRyZWUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclRva2VucyIsImNsZWFyUGFyc2VUcmVlIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImhlYWRpbmciLCJhc3NpZ25Db250ZXh0IiwiaW5pdGlhbENvbnRlbnQiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbEVudHJpZXMiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJleGFtcGxlVmlldyIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7O2dDQUNQO0FBQ1YsVUFBTUMsY0FBYyxHQUFHLEtBQUtDLGlCQUFMLEVBQXZCO0FBQUEsVUFDTUMsT0FBTyxHQUFHRixjQURoQjtBQUFBLFVBQ2dDO0FBQzFCRyxNQUFBQSxLQUFLLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxXQUFYLENBQXVC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S3FDLE1BQUwsQ0FBWTVCLEdBQVo7QUFDQSxXQUFLNkIsVUFBTCxDQUFnQmxDLE9BQWhCO0FBQ0EsV0FBS21DLGlCQUFMLENBQXVCekMsY0FBdkI7QUFFQSxXQUFLa0MsWUFBTDtBQUNEOzs7OEJBSWdCUSxLLEVBQU9DLFUsRUFBWTtBQUNsQyxVQUFNQyxXQUFXLEdBQUdDLGNBQVFDLFNBQVIsQ0FBa0JKLEtBQWxCLEVBQXlCQyxVQUF6QixDQUFwQjs7QUFFQUMsTUFBQUEsV0FBVyxDQUFDRyxVQUFaO0FBRUEsYUFBT0gsV0FBUDtBQUNEOzs7O0VBdkgrQkMsYTs7OztnQkFBYjlDLEksYUErR0YsSyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbnNEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4vaGVhZGluZ1wiO1xuaW1wb3J0IEJhY2tMaW5rIGZyb20gXCIuL2xpbmsvYmFja1wiO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi9wYXJhZ3JhcGhcIjtcbmltcG9ydCBDb2x1bW5EaXYgZnJvbSBcIi4vZGl2L2NvbHVtblwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IFJ1bGVOYW1lSW5wdXQgZnJvbSBcIi4vaW5wdXQvcnVsZU5hbWVcIjtcbmltcG9ydCBUb2tlbnNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS90b2tlbnNcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IFZlcnRpY2FsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL3ZlcnRpY2FsXCI7XG5pbXBvcnQgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9sZXhpY2FsRW50cmllc1wiO1xuXG5pbXBvcnQgeyBmaW5kUnVsZUJ5TmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFRva2VucygpIHtcbiAgICBjb25zdCBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgIGxleGVyID0gdGhpcy5MZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKHRva2Vucykge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICBwYXJzZXIgPSB0aGlzLlBhcnNlci5mcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbmFtZSA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZXMgPSBwYXJzZXIuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBydWxlID0gZmluZFJ1bGVCeU5hbWUobmFtZSwgcnVsZXMpLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBydWxlKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICAgIHBhcnNlVHJlZSA9IHRoaXMuZ2V0UGFyc2VUcmVlKHRva2Vucyk7XG5cbiAgICAgIHRoaXMuc2V0VG9rZW5zKHRva2Vucyk7XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgdGhpcy5jbGVhclRva2VucygpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxIZWFkaW5nPlxuICAgICAgICB7dGhpcy5oZWFkaW5nfVxuICAgICAgPC9IZWFkaW5nPixcbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTGV4aWNhbCBlbnRyaWVzXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8TGV4aWNhbEVudHJpZXNUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFJ1bGUgbmFtZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFJ1bGVOYW1lSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBUb2tlbnNcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxUb2tlbnNUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+LFxuICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgPEJhY2tMaW5rIC8+XG4gICAgICA8L1BhcmFncmFwaD5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgYm5mIH0gPSB0aGlzLlBhcnNlcixcbiAgICAgICAgICB7IGVudHJpZXMgfSA9IHRoaXMuTGV4ZXIsXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gZW50cmllczsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcbiAgICB0aGlzLnNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IGV4YW1wbGVWaWV3ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuXG4gICAgZXhhbXBsZVZpZXcuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIGV4YW1wbGVWaWV3XG4gIH1cbn1cbiJdfQ==