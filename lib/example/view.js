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

var _content = _interopRequireDefault(require("./textarea/content"));

var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));

var _vertical = _interopRequireDefault(require("./div/splitter/vertical"));

var _lexicalEntries = _interopRequireDefault(require("./textarea/lexicalEntries"));

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
      var entries = this.getEntries(),
          content = this.getContent(),
          lexer = this.Lexer.fromEntries(entries),
          tokens = lexer.tokenise(content);
      return tokens;
    }
  }, {
    key: "getParseTree",
    value: function getParseTree() {
      var parseTree = null;
      var lexicalEntries = this.getLexicalEntries(),
          bnf = this.getBNF(),
          entries = lexicalEntries,
          ///
      lexer = this.Lexer.fromEntries(entries),
          parser = this.Parser.fromBNF(bnf),
          content = this.getContent(),
          tokens = lexer.tokenise(content),
          node = parser.parse(tokens);

      if (node !== null) {
        parseTree = node.asParseTree(tokens);
      }

      return parseTree;
    }
  }, {
    key: "keyUpHandler",
    value: function keyUpHandler() {
      // try {
      var parseTree = this.getParseTree();
      this.setParseTree(parseTree); // } catch (error) {
      //   console.log(error);
      //
      //   this.clearParseTree();
      // }
    }
  }, {
    key: "childElements",
    value: function childElements(properties) {
      var keyUpHandler = this.keyUpHandler.bind(this);
      return [React.createElement(_heading["default"], null, this.heading), React.createElement(_easyLayout.ColumnsDiv, null, React.createElement(_sizeable["default"], null, React.createElement(_subHeading["default"], null, "Lexical entries"), React.createElement(_lexicalEntries["default"], {
        onKeyUp: keyUpHandler
      }), React.createElement(_subHeading["default"], null, "Content"), React.createElement(_content["default"], {
        onKeyUp: keyUpHandler
      })), React.createElement(_vertical["default"], null), React.createElement(_column["default"], null, React.createElement(_subHeading["default"], null, "BNF"), React.createElement(_bnf["default"], null), React.createElement(_subHeading["default"], null, "Parse tree"), React.createElement(_parseTree["default"], null))), React.createElement(_paragraph["default"], null, React.createElement(_back["default"], null))];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsImVudHJpZXMiLCJnZXRFbnRyaWVzIiwiY29udGVudCIsImdldENvbnRlbnQiLCJsZXhlciIsIkxleGVyIiwiZnJvbUVudHJpZXMiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsInBhcnNlVHJlZSIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJibmYiLCJnZXRCTkYiLCJwYXJzZXIiLCJQYXJzZXIiLCJmcm9tQk5GIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJnZXRQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJwcm9wZXJ0aWVzIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImhlYWRpbmciLCJhc3NpZ25Db250ZXh0IiwiaW5pdGlhbENvbnRlbnQiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbEVudHJpZXMiLCJDbGFzcyIsImV4YW1wbGVWaWV3IiwiRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Z0NBQ1A7QUFDVixVQUFNQyxPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQUFoQjtBQUFBLFVBQ01DLE9BQU8sR0FBRyxLQUFLQyxVQUFMLEVBRGhCO0FBQUEsVUFFTUMsS0FBSyxHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsV0FBWCxDQUF1Qk4sT0FBdkIsQ0FGZDtBQUFBLFVBR01PLE1BQU0sR0FBR0gsS0FBSyxDQUFDSSxRQUFOLENBQWVOLE9BQWYsQ0FIZjtBQUtBLGFBQU9LLE1BQVA7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUUsU0FBUyxHQUFHLElBQWhCO0FBRUEsVUFBTUMsY0FBYyxHQUFHLEtBQUtDLGlCQUFMLEVBQXZCO0FBQUEsVUFDTUMsR0FBRyxHQUFHLEtBQUtDLE1BQUwsRUFEWjtBQUFBLFVBRU1iLE9BQU8sR0FBR1UsY0FGaEI7QUFBQSxVQUVnQztBQUMxQk4sTUFBQUEsS0FBSyxHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsV0FBWCxDQUF1Qk4sT0FBdkIsQ0FIZDtBQUFBLFVBSU1jLE1BQU0sR0FBRyxLQUFLQyxNQUFMLENBQVlDLE9BQVosQ0FBb0JKLEdBQXBCLENBSmY7QUFBQSxVQUtNVixPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQUxoQjtBQUFBLFVBTU1JLE1BQU0sR0FBR0gsS0FBSyxDQUFDSSxRQUFOLENBQWVOLE9BQWYsQ0FOZjtBQUFBLFVBT01lLElBQUksR0FBR0gsTUFBTSxDQUFDSSxLQUFQLENBQWFYLE1BQWIsQ0FQYjs7QUFTQSxVQUFJVSxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQlIsUUFBQUEsU0FBUyxHQUFHUSxJQUFJLENBQUNFLFdBQUwsQ0FBaUJaLE1BQWpCLENBQVo7QUFDRDs7QUFFRCxhQUFPRSxTQUFQO0FBQ0Q7OzttQ0FFYztBQUNiO0FBQ0UsVUFBTUEsU0FBUyxHQUFHLEtBQUtXLFlBQUwsRUFBbEI7QUFFQSxXQUFLQyxZQUFMLENBQWtCWixTQUFsQixFQUpXLENBS2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7a0NBRWFhLFUsRUFBWTtBQUN4QixVQUFNQyxZQUFZLEdBQUcsS0FBS0EsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBckI7QUFFQSxhQUFRLENBRU4sb0JBQUMsbUJBQUQsUUFDRyxLQUFLQyxPQURSLENBRk0sRUFLTixvQkFBQyxzQkFBRCxRQUNFLG9CQUFDLG9CQUFELFFBQ0Usb0JBQUMsc0JBQUQsMEJBREYsRUFJRSxvQkFBQywwQkFBRDtBQUF3QixRQUFBLE9BQU8sRUFBRUY7QUFBakMsUUFKRixFQUtFLG9CQUFDLHNCQUFELGtCQUxGLEVBUUUsb0JBQUMsbUJBQUQ7QUFBaUIsUUFBQSxPQUFPLEVBQUVBO0FBQTFCLFFBUkYsQ0FERixFQVdFLG9CQUFDLG9CQUFELE9BWEYsRUFZRSxvQkFBQyxrQkFBRCxRQUNFLG9CQUFDLHNCQUFELGNBREYsRUFJRSxvQkFBQyxlQUFELE9BSkYsRUFLRSxvQkFBQyxzQkFBRCxxQkFMRixFQVFFLG9CQUFDLHFCQUFELE9BUkYsQ0FaRixDQUxNLEVBNEJOLG9CQUFDLHFCQUFELFFBQ0Usb0JBQUMsZ0JBQUQsT0FERixDQTVCTSxDQUFSO0FBaUNEOzs7K0JBRVVELFUsRUFBWTtBQUNyQixXQUFLSSxhQUFMO0FBRU0sVUFBRWQsR0FBRixHQUFVLEtBQUtHLE1BQWYsQ0FBRUgsR0FBRjtBQUFBLFVBQ0VaLE9BREYsR0FDYyxLQUFLSyxLQURuQixDQUNFTCxPQURGO0FBQUEsVUFFQUUsT0FGQSxHQUVVLEtBQUt5QixjQUZmO0FBQUEsVUFHQWpCLGNBSEEsR0FHaUJWLE9BSGpCLENBSGUsQ0FNVzs7QUFFaEMsV0FBSzRCLE1BQUwsQ0FBWWhCLEdBQVo7QUFDQSxXQUFLaUIsVUFBTCxDQUFnQjNCLE9BQWhCO0FBQ0EsV0FBSzRCLGlCQUFMLENBQXVCcEIsY0FBdkI7QUFFQSxXQUFLYSxZQUFMO0FBQ0Q7Ozs4QkFJZ0JRLEssRUFBT1QsVSxFQUFZO0FBQ2xDLFVBQU1VLFdBQVcsR0FBR0MsY0FBUUMsU0FBUixDQUFrQkgsS0FBbEIsRUFBeUJULFVBQXpCLENBQXBCOztBQUVBVSxNQUFBQSxXQUFXLENBQUNHLFVBQVosQ0FBdUJiLFVBQXZCO0FBRUEsYUFBT1UsV0FBUDtBQUNEOzs7O0VBdEcrQkMsYTs7OztnQkFBYmxDLEksYUE4RkYsSyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IENvbHVtbnNEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4vaGVhZGluZ1wiO1xuaW1wb3J0IEJhY2tMaW5rIGZyb20gXCIuL2xpbmsvYmFja1wiO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi9wYXJhZ3JhcGhcIjtcbmltcG9ydCBDb2x1bW5EaXYgZnJvbSBcIi4vZGl2L2NvbHVtblwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgVmVydGljYWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvdmVydGljYWxcIjtcbmltcG9ydCBMZXhpY2FsRW50cmllc1RleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2xleGljYWxFbnRyaWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0VG9rZW5zKCkge1xuICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmdldEVudHJpZXMoKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGV4ZXIgPSB0aGlzLkxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldFBhcnNlVHJlZSgpIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGxleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcygpLFxuICAgICAgICAgIGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgICBsZXhlciA9IHRoaXMuTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgcGFyc2VyID0gdGhpcy5QYXJzZXIuZnJvbUJORihibmYpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgLy8gdHJ5IHtcbiAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IHRoaXMuZ2V0UGFyc2VUcmVlKCk7XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAvL1xuICAgIC8vICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIC8vIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPEhlYWRpbmc+XG4gICAgICAgIHt0aGlzLmhlYWRpbmd9XG4gICAgICA8L0hlYWRpbmc+LFxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgIExleGljYWwgZW50cmllc1xuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8TGV4aWNhbEVudHJpZXNUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgQk5GXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSAvPlxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+LFxuICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgPEJhY2tMaW5rIC8+XG4gICAgICA8L1BhcmFncmFwaD5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZShwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGJuZiB9ID0gdGhpcy5QYXJzZXIsXG4gICAgICAgICAgeyBlbnRyaWVzIH0gPSB0aGlzLkxleGVyLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmluaXRpYWxDb250ZW50LCAvLy9cbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXM7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgdGhpcy5zZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBleGFtcGxlVmlldyA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIGV4YW1wbGVWaWV3LmluaXRpYWxpc2UocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZXhhbXBsZVZpZXdcbiAgfVxufVxuIl19