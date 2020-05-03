"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var easy = require("easy"),
    easyLayout = require("easy-layout");

var BNFTextarea = require("./common/textarea/bnf"),
    ContentTextarea = require("./common/textarea/content"),
    ParseTreeTextarea = require("./common/textarea/parseTree"),
    MainVerticalSplitter = require("./common/verticalSplitter/main"),
    LexicalEntriesTextarea = require("./common/textarea/lexicalEntries");

var Element = easy.Element,
    SizeableElement = easyLayout.SizeableElement;

var ExampleView = /*#__PURE__*/function (_Element) {
  _inherits(ExampleView, _Element);

  function ExampleView() {
    _classCallCheck(this, ExampleView);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExampleView).apply(this, arguments));
  }

  _createClass(ExampleView, [{
    key: "getParseTree",
    value: function getParseTree() {
      var parseTree = null;
      var Lexer = this.getLexer(),
          Parser = this.getParser(),
          lexicalEntries = this.getLexicalEntries(),
          bnf = this.getBNF(),
          entries = lexicalEntries,
          ///
      lexer = Lexer.fromEntries(entries),
          parser = Parser.fromBNF(bnf),
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
      try {
        var parseTree = this.getParseTree();
        this.hideError();
        this.setParseTree(parseTree);
      } catch (error) {
        this.showError();
        this.clearParseTree();
      }
    }
  }, {
    key: "getInitialContent",
    value: function getInitialContent() {
      var initialContent = "";
      return initialContent;
    }
  }, {
    key: "childElements",
    value: function childElements(properties) {
      var title = this.getTitle(),
          keyUpHandler = this.keyUpHandler.bind(this);
      return [React.createElement("h1", null, title), React.createElement("div", {
        className: "columns"
      }, React.createElement(SizeableElement, null, React.createElement("h2", null, "Lexical entries"), React.createElement(LexicalEntriesTextarea, {
        onKeyUp: keyUpHandler
      }), React.createElement("h2", null, "BNF"), React.createElement(BNFTextarea, {
        onKeyUp: keyUpHandler
      })), React.createElement(MainVerticalSplitter, null), React.createElement("div", {
        className: "column"
      }, React.createElement("h2", null, "Parse tree"), React.createElement(ParseTreeTextarea, null), React.createElement("h2", null, "Content"), React.createElement(ContentTextarea, {
        onKeyUp: keyUpHandler
      })))];
    }
  }, {
    key: "initialise",
    value: function initialise() {
      this.assignContext();
      var Lexer = this.getLexer(),
          Parser = this.getParser(),
          initialContent = this.getInitialContent(),
          bnf = Parser.bnf,
          entries = Lexer.entries,
          content = initialContent,
          lexicalEntries = entries; ///

      this.setBNF(bnf);
      this.setContent(content);
      this.setLexicalEntries(lexicalEntries);
      this.keyUpHandler();
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      var exampleView = Element.fromProperties(Class, properties);
      exampleView.initialise();
      return exampleView;
    }
  }]);

  return ExampleView;
}(Element);

Object.assign(ExampleView, {
  tagName: "div",
  defaultProperties: {
    className: "example"
  }
});
module.exports = ExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJlYXN5TGF5b3V0IiwiQk5GVGV4dGFyZWEiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIkVsZW1lbnQiLCJTaXplYWJsZUVsZW1lbnQiLCJFeGFtcGxlVmlldyIsInBhcnNlVHJlZSIsIkxleGVyIiwiZ2V0TGV4ZXIiLCJQYXJzZXIiLCJnZXRQYXJzZXIiLCJsZXhpY2FsRW50cmllcyIsImdldExleGljYWxFbnRyaWVzIiwiYm5mIiwiZ2V0Qk5GIiwiZW50cmllcyIsImxleGVyIiwiZnJvbUVudHJpZXMiLCJwYXJzZXIiLCJmcm9tQk5GIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImFzUGFyc2VUcmVlIiwiZ2V0UGFyc2VUcmVlIiwiaGlkZUVycm9yIiwic2V0UGFyc2VUcmVlIiwiZXJyb3IiLCJzaG93RXJyb3IiLCJjbGVhclBhcnNlVHJlZSIsImluaXRpYWxDb250ZW50IiwicHJvcGVydGllcyIsInRpdGxlIiwiZ2V0VGl0bGUiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiYXNzaWduQ29udGV4dCIsImdldEluaXRpYWxDb250ZW50Iiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxFbnRyaWVzIiwiQ2xhc3MiLCJleGFtcGxlVmlldyIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7QUFBQSxJQUNNQyxVQUFVLEdB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QkFBTCxFQUZqQjtBQUFBLFVBR0UzQixHQUhGLEdBR1VKLE1BSFYsQ0FHRUksR0FIRjtBQUFBLFVBSUVFLE9BSkYsR0FJY1IsS0FKZCxDQUlFUSxPQUpGO0FBQUEsVUFLQUssT0FMQSxHQUtVYSxjQUxWO0FBQUEsVUFNQXRCLGNBTkEsR0FNaUJJLE9BTmpCLENBSEssQ0FTcUI7O0FBRWhDLFdBQUswQixNQUFMLENBQVk1QixHQUFaO0FBQ0EsV0FBSzZCLFVBQUwsQ0FBZ0J0QixPQUFoQjtBQUNBLFdBQUt1QixpQkFBTCxDQUF1QmhDLGNBQXZCO0FBRUEsV0FBSzBCLFlBQUw7QUFDRDs7O21DQUVxQk8sSyxFQUFPVixVLEVBQVk7QUFDdkMsVUFBTVcsV0FBVyxHQUFHMUMsT0FBTyxDQUFDMkMsY0FBUixDQUF1QkYsS0FBdkIsRUFBOEJWLFVBQTlCLENBQXBCO0FBRUFXLE1BQUFBLFdBQVcsQ0FBQ0UsVUFBWjtBQUVBLGFBQU9GLFdBQVA7QUFDRDs7OztFQTVGdUIxQyxPOztBQStGMUI2QyxNQUFNLENBQUNDLE1BQVAsQ0FBYzVDLFdBQWQsRUFBMkI7QUFDekI2QyxFQUFBQSxPQUFPLEVBQUUsS0FEZ0I7QUFFekJDLEVBQUFBLGlCQUFpQixFQUFFO0FBQ2pCQyxJQUFBQSxTQUFTLEVBQUU7QUFETTtBQUZNLENBQTNCO0FBT0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmpELFdBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKFwiZWFzeVwiKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKFwiZWFzeS1sYXlvdXRcIik7XG5cbmNvbnN0IEJORlRleHRhcmVhID0gcmVxdWlyZShcIi4vY29tbW9uL3RleHRhcmVhL2JuZlwiKSxcbiAgICAgIENvbnRlbnRUZXh0YXJlYSA9IHJlcXVpcmUoXCIuL2NvbW1vbi90ZXh0YXJlYS9jb250ZW50XCIpLFxuICAgICAgUGFyc2VUcmVlVGV4dGFyZWEgPSByZXF1aXJlKFwiLi9jb21tb24vdGV4dGFyZWEvcGFyc2VUcmVlXCIpLFxuICAgICAgTWFpblZlcnRpY2FsU3BsaXR0ZXIgPSByZXF1aXJlKFwiLi9jb21tb24vdmVydGljYWxTcGxpdHRlci9tYWluXCIpLFxuICAgICAgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSA9IHJlcXVpcmUoXCIuL2NvbW1vbi90ZXh0YXJlYS9sZXhpY2FsRW50cmllc1wiKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5LFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQgfSA9IGVhc3lMYXlvdXQ7XG5cbmNsYXNzIEV4YW1wbGVWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFBhcnNlVHJlZSgpIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IExleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIFBhcnNlciA9IHRoaXMuZ2V0UGFyc2VyKCksXG5cdFx0XHQgICAgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCksXG5cdFx0XHQgICAgYm5mID0gdGhpcy5nZXRCTkYoKSxcblx0XHRcdCAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuXHRcdFx0ICAgIGxleGVyID0gTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgcGFyc2VyID0gUGFyc2VyLmZyb21CTkYoYm5mKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZSgpO1xuXG4gICAgICB0aGlzLmhpZGVFcnJvcigpO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnNob3dFcnJvcigpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0SW5pdGlhbENvbnRlbnQoKSB7XG4gICAgY29uc3QgaW5pdGlhbENvbnRlbnQgPSBcIlwiO1xuXG4gICAgcmV0dXJuIGluaXRpYWxDb250ZW50O1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLmdldFRpdGxlKCksXG4gICAgICAgICAga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8aDE+e3RpdGxlfTwvaDE+LFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxTaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgICAgPGgyPkxleGljYWwgZW50cmllczwvaDI+XG4gICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5CTkY8L2gyPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+UGFyc2UgdHJlZTwvaDI+XG4gICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPGgyPkNvbnRlbnQ8L2gyPlxuICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgTGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgUGFyc2VyID0gdGhpcy5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBpbml0aWFsQ29udGVudCA9IHRoaXMuZ2V0SW5pdGlhbENvbnRlbnQoKSxcbiAgICAgICAgICB7IGJuZiB9ID0gUGFyc2VyLFxuICAgICAgICAgIHsgZW50cmllcyB9ID0gTGV4ZXIsXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50LCAvLy9cbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXM7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgdGhpcy5zZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZXhhbXBsZVZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIGV4YW1wbGVWaWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBleGFtcGxlVmlld1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRXhhbXBsZVZpZXcsIHtcbiAgdGFnTmFtZTogXCJkaXZcIixcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6IFwiZXhhbXBsZVwiXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGVWaWV3O1xuIl19