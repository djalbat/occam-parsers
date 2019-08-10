'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers'),
    easyLayout = require('easy-layout');

var ruleUtilities = require('../../utilities/rule'),
    ExampleView = require('../../example/view'),
    FlorenceParser = require('../../florence/parser'),
    RuleNameInput = require('../common/input/ruleName'),
    BNFTextarea = require('../common/textarea/bnf'),
    ContentTextarea = require('../common/textarea/content'),
    ParseTreeTextarea = require('../common/textarea/parseTree'),
    MainVerticalSplitter = require('../common/verticalSplitter/main'),
    LexicalEntriesTextarea = require('../common/textarea/lexicalEntries'),
    HideNullifiedNodesCheckbox = require('../common/checkbox/hideNullifiedNodes');

var FlorenceLexer = lexers.FlorenceLexer,
    findRuleByName = ruleUtilities.findRuleByName,
    SizeableElement = easyLayout.SizeableElement;

var FlorenceExampleView = function (_ExampleView) {
  _inherits(FlorenceExampleView, _ExampleView);

  function FlorenceExampleView() {
    _classCallCheck(this, FlorenceExampleView);

    return _possibleConstructorReturn(this, (FlorenceExampleView.__proto__ || Object.getPrototypeOf(FlorenceExampleView)).apply(this, arguments));
  }

  _createClass(FlorenceExampleView, [{
    key: 'getLexer',
    value: function getLexer() {
      var Lexer = FlorenceLexer; ///

      return Lexer;
    }
  }, {
    key: 'getParser',
    value: function getParser() {
      var Parser = FlorenceParser; ///

      return Parser;
    }
  }, {
    key: 'getParseTree',
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
        var hideNullifiedNodesCheckboxChecked = this.isHideNullifiedNodesCheckboxChecked(),
            hideNullifiedNodes = hideNullifiedNodesCheckboxChecked;

        parseTree = node.asParseTree(tokens, hideNullifiedNodes);
      }

      return parseTree;
    }
  }, {
    key: 'childElements',
    value: function childElements(properties) {
      var keyUpHandler = this.keyUpHandler.bind(this),
          changeHandler = this.changeHandler.bind(this);

      return [React.createElement(
        'h1',
        null,
        'Florence parser example'
      ), React.createElement(
        'div',
        { className: 'columns' },
        React.createElement(
          SizeableElement,
          null,
          React.createElement(
            'h2',
            null,
            'Lexical entries'
          ),
          React.createElement(LexicalEntriesTextarea, { onKeyUp: keyUpHandler }),
          React.createElement(
            'h2',
            null,
            'BNF'
          ),
          React.createElement(BNFTextarea, { onKeyUp: keyUpHandler })
        ),
        React.createElement(MainVerticalSplitter, null),
        React.createElement(
          'div',
          { className: 'column' },
          React.createElement(
            'h2',
            null,
            'Parse tree'
          ),
          React.createElement(ParseTreeTextarea, null),
          React.createElement(
            'div',
            null,
            React.createElement(HideNullifiedNodesCheckbox, { onChange: changeHandler }),
            React.createElement(
              'span',
              null,
              'Hide nullified nodes'
            )
          ),
          React.createElement(
            'h2',
            null,
            'Rule name'
          ),
          React.createElement(RuleNameInput, { onKeyUp: keyUpHandler }),
          React.createElement(
            'h2',
            null,
            'Content'
          ),
          React.createElement(ContentTextarea, { onKeyUp: keyUpHandler })
        )
      )];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ExampleView.fromProperties(FlorenceExampleView, properties);
    }
  }]);

  return FlorenceExampleView;
}(ExampleView);

Object.assign(FlorenceExampleView, {
  defaultProperties: {
    className: 'florence'
  }
});

module.exports = FlorenceExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2Zsb3JlbmNlL3ZpZXcuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImVhc3lMYXlvdXQiLCJydWxlVXRpbGl0aWVzIiwiRXhhbXBsZVZpZXciLCJGbG9yZW5jZVBhcnNlciIsIlJ1bGVOYW1lSW5wdXQiLCJCTkZUZXh0YXJlYSIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiTWFpblZlcnRpY2FsU3BsaXR0ZXIiLCJMZXhpY2FsRW50cmllc1RleHRhcmVhIiwiSGlkZU51bGxpZmllZE5vZGVzQ2hlY2tib3giLCJGbG9yZW5jZUxleGVyIiwiZmluZFJ1bGVCeU5hbWUiLCJTaXplYWJsZUVsZW1lbnQiLCJGbG9yZW5jZUV4YW1wbGVWaWV3IiwiTGV4ZXIiLCJQYXJzZXIiLCJwYXJzZVRyZWUiLCJibmYiLCJnZXRCTkYiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibGV4aWNhbEVudHJpZXMiLCJnZXRMZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJmbG9yZW5jZUxleGVyIiwiZnJvbUVudHJpZXMiLCJmbG9yZW5jZVBhcnNlciIsImZyb21CTkYiLCJydWxlcyIsImdldFJ1bGVzIiwibmFtZSIsInJ1bGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwiaGlkZU51bGxpZmllZE5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNIaWRlTnVsbGlmaWVkTm9kZXNDaGVja2JveENoZWNrZWQiLCJoaWRlTnVsbGlmaWVkTm9kZXMiLCJhc1BhcnNlVHJlZSIsInByb3BlcnRpZXMiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiY2hhbmdlSGFuZGxlciIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7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QVUsUUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFLDhCQUFDLGlCQUFELE9BRkY7QUFHRTtBQUFBO0FBQUE7QUFDRSxnQ0FBQywwQkFBRCxJQUE0QixVQUFVRSxhQUF0QyxHQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLFdBSEY7QUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBUEY7QUFRRSw4QkFBQyxhQUFELElBQWUsU0FBU0YsWUFBeEIsR0FSRjtBQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FURjtBQVVFLDhCQUFDLGVBQUQsSUFBaUIsU0FBU0EsWUFBMUI7QUFWRjtBQVJGLE9BSE0sQ0FBUjtBQTBCRDs7O21DQUVxQkQsVSxFQUFZO0FBQUUsYUFBT3pDLFlBQVk2QyxjQUFaLENBQTJCakMsbUJBQTNCLEVBQWdENkIsVUFBaEQsQ0FBUDtBQUFvRTs7OztFQXZFeEV6QyxXOztBQTBFbEM4QyxPQUFPQyxNQUFQLENBQWNuQyxtQkFBZCxFQUFtQztBQUNqQ29DLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRGMsQ0FBbkM7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUJ2QyxtQkFBakIiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgICBlYXN5TGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgcnVsZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9ydWxlJyksXG4gICAgICBFeGFtcGxlVmlldyA9IHJlcXVpcmUoJy4uLy4uL2V4YW1wbGUvdmlldycpLFxuICAgICAgRmxvcmVuY2VQYXJzZXIgPSByZXF1aXJlKCcuLi8uLi9mbG9yZW5jZS9wYXJzZXInKSxcbiAgICAgIFJ1bGVOYW1lSW5wdXQgPSByZXF1aXJlKCcuLi9jb21tb24vaW5wdXQvcnVsZU5hbWUnKSxcbiAgICAgIEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi4vY29tbW9uL3RleHRhcmVhL2JuZicpLFxuICAgICAgQ29udGVudFRleHRhcmVhID0gcmVxdWlyZSgnLi4vY29tbW9uL3RleHRhcmVhL2NvbnRlbnQnKSxcbiAgICAgIFBhcnNlVHJlZVRleHRhcmVhID0gcmVxdWlyZSgnLi4vY29tbW9uL3RleHRhcmVhL3BhcnNlVHJlZScpLFxuICAgICAgTWFpblZlcnRpY2FsU3BsaXR0ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vdmVydGljYWxTcGxpdHRlci9tYWluJyksXG4gICAgICBMZXhpY2FsRW50cmllc1RleHRhcmVhID0gcmVxdWlyZSgnLi4vY29tbW9uL3RleHRhcmVhL2xleGljYWxFbnRyaWVzJyksXG4gICAgICBIaWRlTnVsbGlmaWVkTm9kZXNDaGVja2JveCA9IHJlcXVpcmUoJy4uL2NvbW1vbi9jaGVja2JveC9oaWRlTnVsbGlmaWVkTm9kZXMnKTtcblxuY29uc3QgeyBGbG9yZW5jZUxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IGZpbmRSdWxlQnlOYW1lIH0gPSBydWxlVXRpbGl0aWVzLFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQgfSA9IGVhc3lMYXlvdXQ7XG5cbmNsYXNzIEZsb3JlbmNlRXhhbXBsZVZpZXcgZXh0ZW5kcyBFeGFtcGxlVmlldyB7XG4gIGdldExleGVyKCkge1xuICAgIGNvbnN0IExleGVyID0gRmxvcmVuY2VMZXhlcjsgIC8vL1xuXG4gICAgcmV0dXJuIExleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIGNvbnN0IFBhcnNlciA9IEZsb3JlbmNlUGFyc2VyOyAgLy8vXG5cbiAgICByZXR1cm4gUGFyc2VyO1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzID0gZmxvcmVuY2VQYXJzZXIuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBuYW1lID0gcnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlID0gZmluZFJ1bGVCeU5hbWUobmFtZSwgcnVsZXMpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBmbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBmbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMsIHJ1bGUpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGhpZGVOdWxsaWZpZWROb2Rlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNIaWRlTnVsbGlmaWVkTm9kZXNDaGVja2JveENoZWNrZWQoKSxcbiAgICAgICAgICAgIGhpZGVOdWxsaWZpZWROb2RlcyA9IGhpZGVOdWxsaWZpZWROb2Rlc0NoZWNrYm94Q2hlY2tlZDtcblxuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMsIGhpZGVOdWxsaWZpZWROb2Rlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxoMT5GbG9yZW5jZSBwYXJzZXIgZXhhbXBsZTwvaDE+LFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxTaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgICAgPGgyPkxleGljYWwgZW50cmllczwvaDI+XG4gICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5CTkY8L2gyPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+UGFyc2UgdHJlZTwvaDI+XG4gICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIaWRlTnVsbGlmaWVkTm9kZXNDaGVja2JveCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxzcGFuPkhpZGUgbnVsbGlmaWVkIG5vZGVzPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMj5SdWxlIG5hbWU8L2gyPlxuICAgICAgICAgIDxSdWxlTmFtZUlucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+Q29udGVudDwvaDI+XG4gICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFeGFtcGxlVmlldy5mcm9tUHJvcGVydGllcyhGbG9yZW5jZUV4YW1wbGVWaWV3LCBwcm9wZXJ0aWVzKTt9XG59XG5cbk9iamVjdC5hc3NpZ24oRmxvcmVuY2VFeGFtcGxlVmlldywge1xuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2Zsb3JlbmNlJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUV4YW1wbGVWaWV3O1xuIl19