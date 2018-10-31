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
    LexicalEntriesTextarea = require('../common/textarea/lexicalEntries'),
    MainVerticalSplitter = require('../common/verticalSplitter/main');

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
        parseTree = node.asParseTree(tokens);
      }

      return parseTree;
    }
  }, {
    key: 'childElements',
    value: function childElements(properties) {
      var keyUpHandler = this.keyUpHandler.bind(this);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2Zsb3JlbmNlL3ZpZXcuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImVhc3lMYXlvdXQiLCJydWxlVXRpbGl0aWVzIiwiRXhhbXBsZVZpZXciLCJGbG9yZW5jZVBhcnNlciIsIlJ1bGVOYW1lSW5wdXQiLCJCTkZUZXh0YXJlYSIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiRmxvcmVuY2VMZXhlciIsImZpbmRSdWxlQnlOYW1lIiwiU2l6ZWFibGVFbGVtZW50IiwiRmxvcmVuY2VFeGFtcGxlVmlldyIsIkxleGVyIiwiUGFyc2VyIiwicGFyc2VUcmVlIiwiYm5mIiwiZ2V0Qk5GIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJlbnRyaWVzIiwiZmxvcmVuY2VMZXhlciIsImZyb21FbnRyaWVzIiwiZmxvcmVuY2VQYXJzZXIiLCJmcm9tQk5GIiwicnVsZXMiLCJnZXRSdWxlcyIsIm5hbWUiLCJydWxlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImFzUGFyc2VUcmVlIiwicHJvcGVydGllcyIsImtleVVwSGFuZGxlciIsImJpbmQiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjtBQUFBLElBQ01DLGFBQWFELFFBQVEsYUFBUixDQURuQjs7QUFHQSxJQUFNRSxnQkFBZ0JGLFFBQVEsc0JBQVIsQ0FBdEI7QUFBQSxJQUNNRyxjQUFjSCxRQUFRLG9CQUFSLENB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O0FBa0VsQ3lDLE9BQU9DLE1BQVAsQ0FBYy9CLG1CQUFkLEVBQW1DO0FBQ2pDZ0MscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFEYyxDQUFuQzs7QUFNQUMsT0FBT0MsT0FBUCxHQUFpQm5DLG1CQUFqQiIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCBydWxlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3J1bGUnKSxcbiAgICAgIEV4YW1wbGVWaWV3ID0gcmVxdWlyZSgnLi4vLi4vZXhhbXBsZS92aWV3JyksXG4gICAgICBGbG9yZW5jZVBhcnNlciA9IHJlcXVpcmUoJy4uLy4uL2Zsb3JlbmNlL3BhcnNlcicpLFxuICAgICAgUnVsZU5hbWVJbnB1dCA9IHJlcXVpcmUoJy4uL2NvbW1vbi9pbnB1dC9ydWxlTmFtZScpLFxuICAgICAgQk5GVGV4dGFyZWEgPSByZXF1aXJlKCcuLi9jb21tb24vdGV4dGFyZWEvYm5mJyksXG4gICAgICBDb250ZW50VGV4dGFyZWEgPSByZXF1aXJlKCcuLi9jb21tb24vdGV4dGFyZWEvY29udGVudCcpLFxuICAgICAgUGFyc2VUcmVlVGV4dGFyZWEgPSByZXF1aXJlKCcuLi9jb21tb24vdGV4dGFyZWEvcGFyc2VUcmVlJyksXG4gICAgICBMZXhpY2FsRW50cmllc1RleHRhcmVhID0gcmVxdWlyZSgnLi4vY29tbW9uL3RleHRhcmVhL2xleGljYWxFbnRyaWVzJyksXG4gICAgICBNYWluVmVydGljYWxTcGxpdHRlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi92ZXJ0aWNhbFNwbGl0dGVyL21haW4nKTtcblxuY29uc3QgeyBGbG9yZW5jZUxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IGZpbmRSdWxlQnlOYW1lIH0gPSBydWxlVXRpbGl0aWVzLFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQgfSA9IGVhc3lMYXlvdXQ7XG5cbmNsYXNzIEZsb3JlbmNlRXhhbXBsZVZpZXcgZXh0ZW5kcyBFeGFtcGxlVmlldyB7XG4gIGdldExleGVyKCkge1xuICAgIGNvbnN0IExleGVyID0gRmxvcmVuY2VMZXhlcjsgIC8vL1xuXG4gICAgcmV0dXJuIExleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIGNvbnN0IFBhcnNlciA9IEZsb3JlbmNlUGFyc2VyOyAgLy8vXG5cbiAgICByZXR1cm4gUGFyc2VyO1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzID0gZmxvcmVuY2VQYXJzZXIuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBuYW1lID0gcnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlID0gZmluZFJ1bGVCeU5hbWUobmFtZSwgcnVsZXMpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBmbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBmbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMsIHJ1bGUpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8aDE+RmxvcmVuY2UgcGFyc2VyIGV4YW1wbGU8L2gxPixcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5MZXhpY2FsIGVudHJpZXM8L2gyPlxuICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+Qk5GPC9oMj5cbiAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L1NpemVhYmxlRWxlbWVudD5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPlBhcnNlIHRyZWU8L2gyPlxuICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDxoMj5SdWxlIG5hbWU8L2gyPlxuICAgICAgICAgIDxSdWxlTmFtZUlucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+Q29udGVudDwvaDI+XG4gICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFeGFtcGxlVmlldy5mcm9tUHJvcGVydGllcyhGbG9yZW5jZUV4YW1wbGVWaWV3LCBwcm9wZXJ0aWVzKTt9XG59XG5cbk9iamVjdC5hc3NpZ24oRmxvcmVuY2VFeGFtcGxlVmlldywge1xuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2Zsb3JlbmNlJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUV4YW1wbGVWaWV3O1xuIl19