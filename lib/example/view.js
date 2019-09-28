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
    LexicalEntriesTextarea = require('./common/textarea/lexicalEntries');

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
        parseTree = node.asParseTree(tokens);
      }

      return parseTree;
    }
  }, {
    key: 'keyUpHandler',
    value: function keyUpHandler() {
      // try {
      var parseTree = this.getParseTree();

      this.hideError();

      this.setParseTree(parseTree);
      // } catch (error) {
      //   this.showError();
      //
      //   this.clearParseTree();
      // }
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
          keyUpHandler = this.keyUpHandler.bind(this);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJlYXN5TGF5b3V0IiwiQk5GVGV4dGFyZWEiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIkVsZW1lbnQiLCJTaXplYWJsZUVsZW1lbnQiLCJFeGFtcGxlVmlldyIsInBhcnNlVHJlZSIsIkxleGVyIiwiZ2V0TGV4ZXIiLCJQYXJzZXIiLCJnZXRQYXJzZXIiLCJsZXhpY2FsRW50cmllcyIsImdldExleGljYWxFbnRyaWVzIiwiYm5mIiwiZ2V0Qk5GIiwiZW50cmllcyIsImxleGVyIiwiZnJvbUVudHJpZXMiLCJwYXJzZXIiLCJmcm9tQk5GIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImFzUGFyc2VUcmVlIiwiZ2V0UGFyc2VUcmVlIiwiaGlkZUVycm9yIiwic2V0UGFyc2VUcmVlIiwiaW5pdGlhbENvbnRlbnQiLCJwcm9wZXJ0aWVzIiwidGl0bGUiLCJnZXRUaXRsZSIsImtleVVwSGFuZGxlciIsImJpbmQiLCJhc3NpZ25Db250ZXh0IiwiZ2V0SW5pdGlhbENvbnRlbnQiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbEVudHJpZXMiLCJDbGFzcyIsImV4YW1wbGVWaWV3IiwiZnJvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLGFBQWFELFFBQVEsYUFBUixDQURuQjs7QUFHQSxJQUFNRSxjQUFjRixRQUFRLHVC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Z0JuQixPQUFoQjtBQUNBLFdBQUtvQixpQkFBTCxDQUF1QjdCLGNBQXZCOztBQUVBLFdBQUt1QixZQUFMO0FBQ0Q7OzttQ0FFcUJPLEssRUFBT1YsVSxFQUFZO0FBQ3ZDLFVBQU1XLGNBQWN2QyxRQUFRd0MsY0FBUixDQUF1QkYsS0FBdkIsRUFBOEJWLFVBQTlCLENBQXBCOztBQUVBVyxrQkFBWUUsVUFBWjs7QUFFQSxhQUFPRixXQUFQO0FBQ0Q7Ozs7RUE1RnVCdkMsTzs7QUErRjFCMEMsT0FBT0MsTUFBUCxDQUFjekMsV0FBZCxFQUEyQjtBQUN6QjBDLFdBQVMsS0FEZ0I7QUFFekJDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRk0sQ0FBM0I7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUI5QyxXQUFqQiIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi9jb21tb24vdGV4dGFyZWEvYm5mJyksXG4gICAgICBDb250ZW50VGV4dGFyZWEgPSByZXF1aXJlKCcuL2NvbW1vbi90ZXh0YXJlYS9jb250ZW50JyksXG4gICAgICBQYXJzZVRyZWVUZXh0YXJlYSA9IHJlcXVpcmUoJy4vY29tbW9uL3RleHRhcmVhL3BhcnNlVHJlZScpLFxuICAgICAgTWFpblZlcnRpY2FsU3BsaXR0ZXIgPSByZXF1aXJlKCcuL2NvbW1vbi92ZXJ0aWNhbFNwbGl0dGVyL21haW4nKSxcbiAgICAgIExleGljYWxFbnRyaWVzVGV4dGFyZWEgPSByZXF1aXJlKCcuL2NvbW1vbi90ZXh0YXJlYS9sZXhpY2FsRW50cmllcycpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3ksXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCB9ID0gZWFzeUxheW91dDtcblxuY2xhc3MgRXhhbXBsZVZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgTGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgUGFyc2VyID0gdGhpcy5nZXRQYXJzZXIoKSxcblx0XHRcdCAgICBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcblx0XHRcdCAgICBibmYgPSB0aGlzLmdldEJORigpLFxuXHRcdFx0ICAgIGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG5cdFx0XHQgICAgbGV4ZXIgPSBMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICBwYXJzZXIgPSBQYXJzZXIuZnJvbUJORihibmYpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgLy8gdHJ5IHtcbiAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IHRoaXMuZ2V0UGFyc2VUcmVlKCk7XG5cbiAgICAgIHRoaXMuaGlkZUVycm9yKCk7XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgIHRoaXMuc2hvd0Vycm9yKCk7XG4gICAgLy9cbiAgICAvLyAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICAvLyB9XG4gIH1cblxuICBnZXRJbml0aWFsQ29udGVudCgpIHtcbiAgICBjb25zdCBpbml0aWFsQ29udGVudCA9ICcnO1xuXG4gICAgcmV0dXJuIGluaXRpYWxDb250ZW50O1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLmdldFRpdGxlKCksXG4gICAgICAgICAga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8aDE+e3RpdGxlfTwvaDE+LFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxTaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgICAgPGgyPkxleGljYWwgZW50cmllczwvaDI+XG4gICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5CTkY8L2gyPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+UGFyc2UgdHJlZTwvaDI+XG4gICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPGgyPkNvbnRlbnQ8L2gyPlxuICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgTGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgUGFyc2VyID0gdGhpcy5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBpbml0aWFsQ29udGVudCA9IHRoaXMuZ2V0SW5pdGlhbENvbnRlbnQoKSxcbiAgICAgICAgICB7IGJuZiB9ID0gUGFyc2VyLFxuICAgICAgICAgIHsgZW50cmllcyB9ID0gTGV4ZXIsXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50LCAvLy9cbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXM7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgdGhpcy5zZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZXhhbXBsZVZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIGV4YW1wbGVWaWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBleGFtcGxlVmlld1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRXhhbXBsZVZpZXcsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnZXhhbXBsZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZVZpZXc7XG4iXX0=