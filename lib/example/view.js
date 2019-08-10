'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy'),
    easyLayout = require('easy-layout');

var BNFTextarea = require('./common/textarea/bnf'),
    ContentTextarea = require('./common/textarea/content'),
    ParseTreeTextarea = require('./common/textarea/parseTree'),
    MainVerticalSplitter = require('./common/verticalSplitter/main'),
    LexicalEntriesTextarea = require('./common/textarea/lexicalEntries'),
    HideNullifiedNodesCheckbox = require('./common/checkbox/hideNullifiedNodes');

var Element = easy.Element,
    SizeableElement = easyLayout.SizeableElement;

var ExampleView = function (_Element) {
  _inherits(ExampleView, _Element);

  function ExampleView() {
    _classCallCheck(this, ExampleView);

    return _possibleConstructorReturn(this, (ExampleView.__proto__ || Object.getPrototypeOf(ExampleView)).apply(this, arguments));
  }

  _createClass(ExampleView, [{
    key: 'getParseTree',
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
        var hideNullifiedNodesCheckboxChecked = this.isHideNullifiedNodesCheckboxChecked(),
            hideNullifiedNodes = hideNullifiedNodesCheckboxChecked;

        parseTree = node.asParseTree(tokens, hideNullifiedNodes);
      }

      return parseTree;
    }
  }, {
    key: 'keyUpHandler',
    value: function keyUpHandler() {
      this.changeHandler();
    }
  }, {
    key: 'changeHandler',
    value: function changeHandler() {
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
    key: 'getInitialContent',
    value: function getInitialContent() {
      var initialContent = '';

      return initialContent;
    }
  }, {
    key: 'childElements',
    value: function childElements(properties) {
      var title = this.getTitle(),
          keyUpHandler = this.keyUpHandler.bind(this),
          changeHandler = this.changeHandler.bind(this);

      return [React.createElement(
        'h1',
        null,
        title
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
            'Content'
          ),
          React.createElement(ContentTextarea, { onKeyUp: keyUpHandler })
        )
      )];
    }
  }, {
    key: 'initialise',
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
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var exampleView = Element.fromProperties(Class, properties);

      exampleView.initialise();

      return exampleView;
    }
  }]);

  return ExampleView;
}(Element);

Object.assign(ExampleView, {
  tagName: 'div',
  defaultProperties: {
    className: 'example'
  }
});

module.exports = ExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJlYXN5TGF5b3V0IiwiQk5GVGV4dGFyZWEiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIkhpZGVOdWxsaWZpZWROb2Rlc0NoZWNrYm94IiwiRWxlbWVudCIsIlNpemVhYmxlRWxlbWVudCIsIkV4YW1wbGVWaWV3IiwicGFyc2VUcmVlIiwiTGV4ZXIiLCJnZXRMZXhlciIsIlBhcnNlciIsImdldFBhcnNlciIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJibmYiLCJnZXRCTkYiLCJlbnRyaWVzIiwibGV4ZXIiLCJmcm9tRW50cmllcyIsInBhcnNlciIsImZyb21CTkYiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwiaGlkZU51bGxpZmllZE5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNIaWRlTnVsbGlmaWVkTm9kZXNDaGVja2JveENoZWNrZWQiLCJoaWRlTnVsbGlmaWVkTm9kZXMiLCJhc1BhcnNlVHJlZSIsImNoYW5nZUhhbmRsZXIiLCJnZXRQYXJzZVRyZWUiLCJoaWRlRXJyb3IiLCJzZXRQYXJzZVRyZWUiLCJlcnJvciIsInNob3dFcnJvciIsImNsZWFyUGFyc2VUcmVlIiwiaW5pdGlhbENvbnRlbnQiLCJwcm9wZXJ0aWVzIiwidGl0bGUiLCJnZXRUaXRsZSIsImtleVVwSGFuZGxlciIsImJpbmQiLCJhc3NpZ25Db250ZXh0IiwiZ2V0SW5pdGlhbENvbnRlbnQiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbEVudHJpZXMiLCJDbGFzcyIsImV4YW1wbGVWaWV3IiwiZnJvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiT2JqZWN0IiwiYXNzaWduIiwi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dXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBlYXN5TGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgQk5GVGV4dGFyZWEgPSByZXF1aXJlKCcuL2NvbW1vbi90ZXh0YXJlYS9ibmYnKSxcbiAgICAgIENvbnRlbnRUZXh0YXJlYSA9IHJlcXVpcmUoJy4vY29tbW9uL3RleHRhcmVhL2NvbnRlbnQnKSxcbiAgICAgIFBhcnNlVHJlZVRleHRhcmVhID0gcmVxdWlyZSgnLi9jb21tb24vdGV4dGFyZWEvcGFyc2VUcmVlJyksXG4gICAgICBNYWluVmVydGljYWxTcGxpdHRlciA9IHJlcXVpcmUoJy4vY29tbW9uL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbicpLFxuICAgICAgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSA9IHJlcXVpcmUoJy4vY29tbW9uL3RleHRhcmVhL2xleGljYWxFbnRyaWVzJyksXG4gICAgICBIaWRlTnVsbGlmaWVkTm9kZXNDaGVja2JveCA9IHJlcXVpcmUoJy4vY29tbW9uL2NoZWNrYm94L2hpZGVOdWxsaWZpZWROb2RlcycpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3ksXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCB9ID0gZWFzeUxheW91dDtcblxuY2xhc3MgRXhhbXBsZVZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgTGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgUGFyc2VyID0gdGhpcy5nZXRQYXJzZXIoKSxcblx0XHRcdCAgICBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcblx0XHRcdCAgICBibmYgPSB0aGlzLmdldEJORigpLFxuXHRcdFx0ICAgIGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG5cdFx0XHQgICAgbGV4ZXIgPSBMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICBwYXJzZXIgPSBQYXJzZXIuZnJvbUJORihibmYpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaGlkZU51bGxpZmllZE5vZGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc0hpZGVOdWxsaWZpZWROb2Rlc0NoZWNrYm94Q2hlY2tlZCgpLFxuICAgICAgICAgICAgaGlkZU51bGxpZmllZE5vZGVzID0gaGlkZU51bGxpZmllZE5vZGVzQ2hlY2tib3hDaGVja2VkO1xuXG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2VucywgaGlkZU51bGxpZmllZE5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpO1xuICB9XG5cbiAgY2hhbmdlSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUoKTtcblxuICAgICAgdGhpcy5oaWRlRXJyb3IoKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5zaG93RXJyb3IoKTtcblxuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldEluaXRpYWxDb250ZW50KCkge1xuICAgIGNvbnN0IGluaXRpYWxDb250ZW50ID0gJyc7XG5cbiAgICByZXR1cm4gaW5pdGlhbENvbnRlbnQ7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuZ2V0VGl0bGUoKSxcbiAgICAgICAgICBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8aDE+e3RpdGxlfTwvaDE+LFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxTaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgICAgPGgyPkxleGljYWwgZW50cmllczwvaDI+XG4gICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5CTkY8L2gyPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+UGFyc2UgdHJlZTwvaDI+XG4gICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIaWRlTnVsbGlmaWVkTm9kZXNDaGVja2JveCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxzcGFuPkhpZGUgbnVsbGlmaWVkIG5vZGVzPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMj5Db250ZW50PC9oMj5cbiAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IExleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIFBhcnNlciA9IHRoaXMuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgaW5pdGlhbENvbnRlbnQgPSB0aGlzLmdldEluaXRpYWxDb250ZW50KCksXG4gICAgICAgICAgeyBibmYgfSA9IFBhcnNlcixcbiAgICAgICAgICB7IGVudHJpZXMgfSA9IExleGVyLFxuICAgICAgICAgIGNvbnRlbnQgPSBpbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IGV4YW1wbGVWaWV3ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBleGFtcGxlVmlldy5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gZXhhbXBsZVZpZXdcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEV4YW1wbGVWaWV3LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2V4YW1wbGUnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGVWaWV3O1xuIl19