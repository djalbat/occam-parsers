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

var lexers = require("occam-lexers"),
    easyLayout = require("easy-layout");

var ruleUtilities = require("../../utilities/rule"),
    ExampleView = require("../../example/view"),
    FlorenceParser = require("../../florence/parser"),
    RuleNameInput = require("../common/input/ruleName"),
    BNFTextarea = require("../common/textarea/bnf"),
    ContentTextarea = require("../common/textarea/content"),
    ParseTreeTextarea = require("../common/textarea/parseTree"),
    MainVerticalSplitter = require("../common/verticalSplitter/main"),
    LexicalEntriesTextarea = require("../common/textarea/lexicalEntries");

var FlorenceLexer = lexers.FlorenceLexer,
    findRuleByName = ruleUtilities.findRuleByName,
    SizeableElement = easyLayout.SizeableElement;

var FlorenceExampleView = /*#__PURE__*/function (_ExampleView) {
  _inherits(FlorenceExampleView, _ExampleView);

  function FlorenceExampleView() {
    _classCallCheck(this, FlorenceExampleView);

    return _possibleConstructorReturn(this, _getPrototypeOf(FlorenceExampleView).apply(this, arguments));
  }

  _createClass(FlorenceExampleView, [{
    key: "getLexer",
    value: function getLexer() {
      var Lexer = FlorenceLexer; ///

      return Lexer;
    }
  }, {
    key: "getParser",
    value: function getParser() {
      var Parser = FlorenceParser; ///

      return Parser;
    }
  }, {
    key: "getParseTree",
    value: function getParseTree() {
      var parseTree = null;
      var bnf = this.getBNF(),
          ruleName = this.getRuleName(),
          lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries,
          ///
      florenceLexer = FlorenceLexer.fromEntries(entries),
          florenceParser = FlorenceParser.fromBNF(bnf),
          rules = florenceParser.getRules(),
          name = ruleName,
          ///
      rule = findRuleByName(name, rules),
          content = this.getContent(),
          tokens = florenceLexer.tokenise(content),
          node = florenceParser.parse(tokens, rule);

      if (node !== null) {
        parseTree = node.asParseTree(tokens);
      }

      return parseTree;
    }
  }, {
    key: "childElements",
    value: function childElements(properties) {
      var keyUpHandler = this.keyUpHandler.bind(this);
      return [React.createElement("h1", null, "Florence parser example"), React.createElement("div", {
        className: "columns"
      }, React.createElement(SizeableElement, null, React.createElement("h2", null, "Lexical entries"), React.createElement(LexicalEntriesTextarea, {
        onKeyUp: keyUpHandler
      }), React.createElement("h2", null, "BNF"), React.createElement(BNFTextarea, {
        onKeyUp: keyUpHandler
      })), React.createElement(MainVerticalSplitter, null), React.createElement("div", {
        className: "column"
      }, React.createElement("h2", null, "Parse tree"), React.createElement(ParseTreeTextarea, null), React.createElement("h2", null, "Rule name"), React.createElement(RuleNameInput, {
        onKeyUp: keyUpHandler
      }), React.createElement("h2", null, "Content"), React.createElement(ContentTextarea, {
        onKeyUp: keyUpHandler
      })))];
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return ExampleView.fromProperties(FlorenceExampleView, properties);
    }
  }]);

  return FlorenceExampleView;
}(ExampleView);

Object.assign(FlorenceExampleView, {
  defaultProperties: {
    className: "florence"
  }
});
module.exports = FlorenceExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImVhc3lMYXlvdXQiLCJydWxlVXRpbGl0aWVzIiwiRXhhbXBsZVZpZXciLCJGbG9yZW5jZVBhcnNlciIsIlJ1bGVOYW1lSW5wdXQiLCJCTkZUZXh0YXJlYSIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiTWFpblZlcnRpY2FsU3BsaXR0ZXIiLCJMZXhpY2FsRW50cmllc1RleHRhcmVhIiwiRmxvcmVuY2VMZXhlciIsImZpbmRSdWxlQnlOYW1lIiwiU2l6ZWFibGVFbGVtZW50IiwiRmxvcmVuY2VFeGFtcGxlVmlldyIsIkxleGVyIiwiUGFyc2VyIiwicGFyc2VUcmVlIiwiYm5mIiwiZ2V0Qk5GIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJlbnRyaWVzIiwiZmxvcmVuY2VMZXhlciIsImZyb21FbnRyaWVzIiwiZmxvcmVuY2VQYXJzZXIiLCJmcm9tQk5GIiwicnVsZXMiLCJnZXRSdWxlcyIsIm5hbWUiLCJydWxlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImFzUGFyc2VUcmVlIiwicHJvcGVydGllcyIsImtleVVwSGFuZGxlciIsImJpbmQiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF0QjtBQUFBLElBQ01DLFVBQVUsR0FBR0QsT0FBTyxDQUFDLGFBQUQsQ0FEMUI7O0FBR0EsSUFBTUUsYUFBYSxHQUFHRixPQUFPLENBQUMsc0JBQUQsQ0FBN0I7QUFBQSxJQUNNRyxXQUFXLEdBQUdI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QUFPLEVBQUVBO0FBQTFCLFFBTkYsQ0FSRixDQUhNLENBQVI7QUFzQkQ7OzttQ0FFcUJELFUsRUFBWTtBQUFFLGFBQU9yQyxXQUFXLENBQUN3QyxjQUFaLENBQTJCN0IsbUJBQTNCLEVBQWdEMEIsVUFBaEQsQ0FBUDtBQUFvRTs7OztFQS9EeEVyQyxXOztBQWtFbEN5QyxNQUFNLENBQUNDLE1BQVAsQ0FBYy9CLG1CQUFkLEVBQW1DO0FBQ2pDZ0MsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRTtBQURNO0FBRGMsQ0FBbkM7QUFNQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbkMsbUJBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoXCJvY2NhbS1sZXhlcnNcIiksXG4gICAgICBlYXN5TGF5b3V0ID0gcmVxdWlyZShcImVhc3ktbGF5b3V0XCIpO1xuXG5jb25zdCBydWxlVXRpbGl0aWVzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxpdGllcy9ydWxlXCIpLFxuICAgICAgRXhhbXBsZVZpZXcgPSByZXF1aXJlKFwiLi4vLi4vZXhhbXBsZS92aWV3XCIpLFxuICAgICAgRmxvcmVuY2VQYXJzZXIgPSByZXF1aXJlKFwiLi4vLi4vZmxvcmVuY2UvcGFyc2VyXCIpLFxuICAgICAgUnVsZU5hbWVJbnB1dCA9IHJlcXVpcmUoXCIuLi9jb21tb24vaW5wdXQvcnVsZU5hbWVcIiksXG4gICAgICBCTkZUZXh0YXJlYSA9IHJlcXVpcmUoXCIuLi9jb21tb24vdGV4dGFyZWEvYm5mXCIpLFxuICAgICAgQ29udGVudFRleHRhcmVhID0gcmVxdWlyZShcIi4uL2NvbW1vbi90ZXh0YXJlYS9jb250ZW50XCIpLFxuICAgICAgUGFyc2VUcmVlVGV4dGFyZWEgPSByZXF1aXJlKFwiLi4vY29tbW9uL3RleHRhcmVhL3BhcnNlVHJlZVwiKSxcbiAgICAgIE1haW5WZXJ0aWNhbFNwbGl0dGVyID0gcmVxdWlyZShcIi4uL2NvbW1vbi92ZXJ0aWNhbFNwbGl0dGVyL21haW5cIiksXG4gICAgICBMZXhpY2FsRW50cmllc1RleHRhcmVhID0gcmVxdWlyZShcIi4uL2NvbW1vbi90ZXh0YXJlYS9sZXhpY2FsRW50cmllc1wiKTtcblxuY29uc3QgeyBGbG9yZW5jZUxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IGZpbmRSdWxlQnlOYW1lIH0gPSBydWxlVXRpbGl0aWVzLFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQgfSA9IGVhc3lMYXlvdXQ7XG5cbmNsYXNzIEZsb3JlbmNlRXhhbXBsZVZpZXcgZXh0ZW5kcyBFeGFtcGxlVmlldyB7XG4gIGdldExleGVyKCkge1xuICAgIGNvbnN0IExleGVyID0gRmxvcmVuY2VMZXhlcjsgIC8vL1xuXG4gICAgcmV0dXJuIExleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIGNvbnN0IFBhcnNlciA9IEZsb3JlbmNlUGFyc2VyOyAgLy8vXG5cbiAgICByZXR1cm4gUGFyc2VyO1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzID0gZmxvcmVuY2VQYXJzZXIuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBuYW1lID0gcnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlID0gZmluZFJ1bGVCeU5hbWUobmFtZSwgcnVsZXMpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBmbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBmbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMsIHJ1bGUpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8aDE+RmxvcmVuY2UgcGFyc2VyIGV4YW1wbGU8L2gxPixcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5MZXhpY2FsIGVudHJpZXM8L2gyPlxuICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+Qk5GPC9oMj5cbiAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L1NpemVhYmxlRWxlbWVudD5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPlBhcnNlIHRyZWU8L2gyPlxuICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDxoMj5SdWxlIG5hbWU8L2gyPlxuICAgICAgICAgIDxSdWxlTmFtZUlucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+Q29udGVudDwvaDI+XG4gICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFeGFtcGxlVmlldy5mcm9tUHJvcGVydGllcyhGbG9yZW5jZUV4YW1wbGVWaWV3LCBwcm9wZXJ0aWVzKTt9XG59XG5cbk9iamVjdC5hc3NpZ24oRmxvcmVuY2VFeGFtcGxlVmlldywge1xuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogXCJmbG9yZW5jZVwiXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZVZpZXc7XG4iXX0=