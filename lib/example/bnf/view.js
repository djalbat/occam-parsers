'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers'),
    easyLayout = require('easy-layout');

var BNFParser = require('../../bnf/parser'),
    ExampleView = require('../../example/view'),
    BNFTextarea = require('../common/textarea/bnf'),
    ContentTextarea = require('../common/textarea/content'),
    ParseTreeTextarea = require('../common/textarea/parseTree'),
    MainVerticalSplitter = require('../common/verticalSplitter/main'),
    LexicalEntriesTextarea = require('../common/textarea/lexicalEntries'),
    HideNullifiedNodesCheckbox = require('../common/checkbox/hideNullifiedNodes');

var BNFLexer = lexers.BNFLexer,
    SizeableElement = easyLayout.SizeableElement;

var BNFExampleView = function (_ExampleView) {
  _inherits(BNFExampleView, _ExampleView);

  function BNFExampleView() {
    _classCallCheck(this, BNFExampleView);

    return _possibleConstructorReturn(this, (BNFExampleView.__proto__ || Object.getPrototypeOf(BNFExampleView)).apply(this, arguments));
  }

  _createClass(BNFExampleView, [{
    key: 'getLexer',
    value: function getLexer() {
      var Lexer = BNFLexer; ///

      return Lexer;
    }
  }, {
    key: 'getParser',
    value: function getParser() {
      var Parser = BNFParser; ///

      return Parser;
    }
  }, {
    key: 'getParseTree',
    value: function getParseTree() {
      var parseTree = null;

      var bnfLexer = BNFLexer.fromNothing(),
          bnfParser = BNFParser.fromNothing(),
          content = this.getContent(),
          tokens = bnfLexer.tokenise(content),
          node = bnfParser.parse(tokens);

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
        'BNF parser example'
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
          React.createElement(LexicalEntriesTextarea, { readOnly: true }),
          React.createElement(
            'h2',
            null,
            'BNF'
          ),
          React.createElement(BNFTextarea, { readOnly: true })
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
            'Content'
          ),
          React.createElement(ContentTextarea, { onKeyUp: keyUpHandler })
        )
      )];
    }
  }, {
    key: 'getInitialContent',
    value: function getInitialContent() {
      var bnf = BNFParser.bnf,
          initialContent = bnf; ///

      return initialContent;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ExampleView.fromProperties(BNFExampleView, properties);
    }
  }]);

  return BNFExampleView;
}(ExampleView);

Object.assign(BNFExampleView, {
  defaultProperties: {
    className: 'bnf'
  }
});

module.exports = BNFExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2JuZi92aWV3LmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJlYXN5TGF5b3V0IiwiQk5GUGFyc2VyIiwiRXhhbXBsZVZpZXciLCJCTkZUZXh0YXJlYSIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiTWFpblZlcnRpY2FsU3BsaXR0ZXIiLCJMZXhpY2FsRW50cmllc1RleHRhcmVhIiwiSGlkZU51bGxpZmllZE5vZGVzQ2hlY2tib3giLCJCTkZMZXhlciIsIlNpemVhYmxlRWxlbWVudCIsIkJORkV4YW1wbGVWaWV3IiwiTGV4ZXIiLCJQYXJzZXIiLCJwYXJzZVRyZWUiLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImhpZGVOdWxsaWZpZWROb2Rlc0NoZWNrYm94Q2hlY2tlZCIsImlzSGlkZU51bGxpZmllZE5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaGlkZU51bGxpZmllZE5vZGVzIiwiYXNQYXJzZVRyZWUiLCJwcm9wZXJ0aWVzIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImNoYW5nZUhhbmRsZXIiLCJibmYiLCJpbml0aWFsQ29udGVudCIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxhQUFSLENBRG5COztBQUdBLElBQU1FLFlBQVlGLFFBQVEsa0JBQVIsQ0FBbEI7QUFBQSxJQUNNRyxjQUFjSCxRQUFRLG9CQUFSLENBRHBCO0FBQUEsSUFFTUksY0FBY0osUUFBUSx3QkFBUixDQUZwQjtBQUFBLElBR01L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XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IEJORlBhcnNlciA9IHJlcXVpcmUoJy4uLy4uL2JuZi9wYXJzZXInKSxcbiAgICAgIEV4YW1wbGVWaWV3ID0gcmVxdWlyZSgnLi4vLi4vZXhhbXBsZS92aWV3JyksXG4gICAgICBCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4uL2NvbW1vbi90ZXh0YXJlYS9ibmYnKSxcbiAgICAgIENvbnRlbnRUZXh0YXJlYSA9IHJlcXVpcmUoJy4uL2NvbW1vbi90ZXh0YXJlYS9jb250ZW50JyksXG4gICAgICBQYXJzZVRyZWVUZXh0YXJlYSA9IHJlcXVpcmUoJy4uL2NvbW1vbi90ZXh0YXJlYS9wYXJzZVRyZWUnKSxcbiAgICAgIE1haW5WZXJ0aWNhbFNwbGl0dGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbicpLFxuICAgICAgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSA9IHJlcXVpcmUoJy4uL2NvbW1vbi90ZXh0YXJlYS9sZXhpY2FsRW50cmllcycpLFxuICAgICAgSGlkZU51bGxpZmllZE5vZGVzQ2hlY2tib3ggPSByZXF1aXJlKCcuLi9jb21tb24vY2hlY2tib3gvaGlkZU51bGxpZmllZE5vZGVzJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50IH0gPSBlYXN5TGF5b3V0O1xuXG5jbGFzcyBCTkZFeGFtcGxlVmlldyBleHRlbmRzIEV4YW1wbGVWaWV3IHtcbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgTGV4ZXIgPSBCTkZMZXhlcjsgLy8vXG5cbiAgICByZXR1cm4gTGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgUGFyc2VyID0gQk5GUGFyc2VyOyAvLy9cblxuICAgIHJldHVybiBQYXJzZXI7XG4gIH1cblxuXHRnZXRQYXJzZVRyZWUoKSB7XG5cdFx0bGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cblx0XHRjb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG5cdFx0XHRcdFx0Ym5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG5cdFx0XHRcdFx0Y29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuXHRcdFx0XHRcdHRva2VucyA9IGJuZkxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuXHRcdFx0XHRcdG5vZGUgPSBibmZQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuXHRcdGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBoaWRlTnVsbGlmaWVkTm9kZXNDaGVja2JveENoZWNrZWQgPSB0aGlzLmlzSGlkZU51bGxpZmllZE5vZGVzQ2hlY2tib3hDaGVja2VkKCksXG4gICAgICAgICAgICBoaWRlTnVsbGlmaWVkTm9kZXMgPSBoaWRlTnVsbGlmaWVkTm9kZXNDaGVja2JveENoZWNrZWQ7XG5cblx0XHRcdHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zLCBoaWRlTnVsbGlmaWVkTm9kZXMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBwYXJzZVRyZWU7XG5cdH1cblxuXHRjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcblx0XHRjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuXHRcdHJldHVybiAoW1xuXG5cdFx0XHQ8aDE+Qk5GIHBhcnNlciBleGFtcGxlPC9oMT4sXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cblx0XHRcdFx0PFNpemVhYmxlRWxlbWVudD5cblx0XHRcdFx0XHQ8aDI+TGV4aWNhbCBlbnRyaWVzPC9oMj5cblx0XHRcdFx0XHQ8TGV4aWNhbEVudHJpZXNUZXh0YXJlYSByZWFkT25seSAvPlxuXHRcdFx0XHRcdDxoMj5CTkY8L2gyPlxuXHRcdFx0XHRcdDxCTkZUZXh0YXJlYSByZWFkT25seSAvPlxuXHRcdFx0XHQ8L1NpemVhYmxlRWxlbWVudD5cblx0XHRcdFx0PE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG5cdFx0XHRcdFx0PGgyPlBhcnNlIHRyZWU8L2gyPlxuXHRcdFx0XHRcdDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGlkZU51bGxpZmllZE5vZGVzQ2hlY2tib3ggb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8c3Bhbj5IaWRlIG51bGxpZmllZCBub2Rlczwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHQ8aDI+Q29udGVudDwvaDI+XG5cdFx0XHRcdFx0PENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRdKTtcblx0fVxuXG4gIGdldEluaXRpYWxDb250ZW50KCkge1xuICAgIGNvbnN0IHsgYm5mIH0gPSBCTkZQYXJzZXIsXG4gICAgICAgICAgaW5pdGlhbENvbnRlbnQgPSBibmY7IC8vL1xuXG4gICAgcmV0dXJuIGluaXRpYWxDb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEV4YW1wbGVWaWV3LmZyb21Qcm9wZXJ0aWVzKEJORkV4YW1wbGVWaWV3LCBwcm9wZXJ0aWVzKTt9XG59XG5cbk9iamVjdC5hc3NpZ24oQk5GRXhhbXBsZVZpZXcsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdibmYnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJORkV4YW1wbGVWaWV3O1xuIl19