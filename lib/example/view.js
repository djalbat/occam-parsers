'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy'),
    easyLayout = require('easy-layout');

var Element = easy.Element,
    SizeableElement = easyLayout.SizeableElement;


var BNFTextarea = require('./common/textarea/bnf'),
    ContentTextarea = require('./common/textarea/content'),
    ParseTreeTextarea = require('./common/textarea/parseTree'),
    LexicalEntriesTextarea = require('./common/textarea/lexicalEntries'),
    MainVerticalSplitter = require('./common/verticalSplitter/main');

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
          lexer = Lexer.fromNothing(),
          parser = Parser.fromNothing(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJlYXN5TGF5b3V0IiwiRWxlbWVudCIsIlNpemVhYmxlRWxlbWVudCIsIkJORlRleHRhcmVhIiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJMZXhpY2FsRW50cmllc1RleHRhcmVhIiwiTWFpblZlcnRpY2FsU3BsaXR0ZXIiLCJFeGFtcGxlVmlldyIsInBhcnNlVHJlZSIsIkxleGVyIiwiZ2V0TGV4ZXIiLCJQYXJzZXIiLCJnZXRQYXJzZXIiLCJsZXhlciIsImZyb21Ob3RoaW5nIiwicGFyc2VyIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImFzUGFyc2VUcmVlIiwiZ2V0UGFyc2VUcmVlIiwiaGlkZUVycm9yIiwic2V0UGFyc2VUcmVlIiwiZXJyb3IiLCJzaG93RXJyb3IiLCJjbGVhclBhcnNlVHJlZSIsInByb3BlcnRpZXMiLCJ0aXRsZSIsImdldFRpdGxlIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsQ29udGVudCIsImdldEluaXRpYWxDb250ZW50IiwiYm5mIiwiZW50cmllcyIsImxleGljYWxFbnRyaWVzIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxFbnRyaWVzIiwiQ2xhc3MiLCJleGFtcGxlVmlldyIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGFBQVIsQ0FEbkI7O0FBR00sSUFBRUUsT0FBRixHQUFjSCxJQUFk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LENBQXBCOztBQUVBZSxrQkFBWUUsVUFBWjs7QUFFQSxhQUFPRixXQUFQO0FBQ0Q7Ozs7RUFuRnVCNUMsTzs7QUFzRjFCK0MsT0FBT0MsTUFBUCxDQUFjekMsV0FBZCxFQUEyQjtBQUN6QjBDLFdBQVMsS0FEZ0I7QUFFekJDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRk0sQ0FBM0I7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUI5QyxXQUFqQiIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50IH0gPSBlYXN5TGF5b3V0O1xuXG5jb25zdCBCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4vY29tbW9uL3RleHRhcmVhL2JuZicpLFxuICAgICAgQ29udGVudFRleHRhcmVhID0gcmVxdWlyZSgnLi9jb21tb24vdGV4dGFyZWEvY29udGVudCcpLFxuICAgICAgUGFyc2VUcmVlVGV4dGFyZWEgPSByZXF1aXJlKCcuL2NvbW1vbi90ZXh0YXJlYS9wYXJzZVRyZWUnKSxcbiAgICAgIExleGljYWxFbnRyaWVzVGV4dGFyZWEgPSByZXF1aXJlKCcuL2NvbW1vbi90ZXh0YXJlYS9sZXhpY2FsRW50cmllcycpLFxuICAgICAgTWFpblZlcnRpY2FsU3BsaXR0ZXIgPSByZXF1aXJlKCcuL2NvbW1vbi92ZXJ0aWNhbFNwbGl0dGVyL21haW4nKTtcblxuY2xhc3MgRXhhbXBsZVZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgTGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgUGFyc2VyID0gdGhpcy5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBsZXhlciA9IExleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFyc2VyID0gUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUoKTtcblxuICAgICAgdGhpcy5oaWRlRXJyb3IoKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5zaG93RXJyb3IoKTtcblxuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5nZXRUaXRsZSgpLFxuICAgICAgICAgIGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPGgxPnt0aXRsZX08L2gxPixcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5MZXhpY2FsIGVudHJpZXM8L2gyPlxuICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIHJlYWRPbmx5IC8+XG4gICAgICAgICAgPGgyPkJORjwvaDI+XG4gICAgICAgICAgPEJORlRleHRhcmVhIHJlYWRPbmx5IC8+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+UGFyc2UgdHJlZTwvaDI+XG4gICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPGgyPkNvbnRlbnQ8L2gyPlxuICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgTGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgUGFyc2VyID0gdGhpcy5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBpbml0aWFsQ29udGVudCA9IHRoaXMuZ2V0SW5pdGlhbENvbnRlbnQoKSxcbiAgICAgICAgICB7IGJuZiB9ID0gUGFyc2VyLFxuICAgICAgICAgIHsgZW50cmllcyB9ID0gTGV4ZXIsXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50LCAvLy9cbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXM7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgdGhpcy5zZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZXhhbXBsZVZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIGV4YW1wbGVWaWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBleGFtcGxlVmlld1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRXhhbXBsZVZpZXcsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnZXhhbXBsZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZVZpZXc7XG4iXX0=