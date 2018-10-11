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
    key: 'contentKeyUpHandler',
    value: function contentKeyUpHandler() {
      this.keyUpHandler();
    }
  }, {
    key: 'childElements',
    value: function childElements(properties) {
      var title = this.getTitle(),
          contentKeyUpHandler = this.contentKeyUpHandler.bind(this),
          bnfTextareaKeyUpHandler = this.bnfTextareaKeyUpHandler ? this.bnfTextareaKeyUpHandler.bind(this) : null,
          lexicalEntriesKeyUpHandler = this.lexicalEntriesKeyUpHandler ? this.lexicalEntriesKeyUpHandler.bind(this) : null,
          bnfTextareaReadOnly = bnfTextareaKeyUpHandler === null,
          lexicalEntriesReadOnly = lexicalEntriesKeyUpHandler === null;

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
          React.createElement(LexicalEntriesTextarea, { onKeyUp: lexicalEntriesKeyUpHandler, readOnly: lexicalEntriesReadOnly }),
          React.createElement(
            'h2',
            null,
            'BNF'
          ),
          React.createElement(BNFTextarea, { onKeyUp: bnfTextareaKeyUpHandler, readOnly: bnfTextareaReadOnly })
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
          React.createElement(ContentTextarea, { onKeyUp: contentKeyUpHandler })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJlYXN5TGF5b3V0IiwiRWxlbWVudCIsIlNpemVhYmxlRWxlbWVudCIsIkJORlRleHRhcmVhIiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJMZXhpY2FsRW50cmllc1RleHRhcmVhIiwiTWFpblZlcnRpY2FsU3BsaXR0ZXIiLCJFeGFtcGxlVmlldyIsInBhcnNlVHJlZSIsIkxleGVyIiwiZ2V0TGV4ZXIiLCJQYXJzZXIiLCJnZXRQYXJzZXIiLCJsZXhlciIsImZyb21Ob3RoaW5nIiwicGFyc2VyIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImFzUGFyc2VUcmVlIiwiZ2V0UGFyc2VUcmVlIiwiaGlkZUVycm9yIiwic2V0UGFyc2VUcmVlIiwiZXJyb3IiLCJzaG93RXJyb3IiLCJjbGVhclBhcnNlVHJlZSIsImtleVVwSGFuZGxlciIsInByb3BlcnRpZXMiLCJ0aXRsZSIsImdldFRpdGxlIiwiY29udGVudEtleVVwSGFuZGxlciIsImJpbmQiLCJibmZUZXh0YXJlYUtleVVwSGFuZGxlciIsImxleGljYWxFbnRyaWVzS2V5VXBIYW5kbGVyIiwiYm5mVGV4dGFyZWFSZWFkT25seSIsImxleGljYWxFbnRyaWVzUmVhZE9ubHkiLCJhc3NpZ25Db250ZXh0IiwiaW5pdGlhbENvbnRlbnQiLCJnZXRJbml0aWFsQ29udGVudCIsImJuZiIsImVudHJpZXMiLCJsZXhpY2FsRW50cmllcyIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRMZXhpY2FsRW50cmllcyIsIkNsYXNzIiwiZXhhbXBsZVZpZXciLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBv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QUFLTSxhQUFMOztBQUVNLGtCQUFRLEtBQUs3QixRQUFMLEVBQVI7QUFBQSxVQUNBQyxNQURBLEdBQ1MsS0FBS0MsU0FBTCxFQURUO0FBQUEsVUFFQTRCLGNBRkEsR0FFaUIsS0FBS0MsaUJBQUwsRUFGakI7QUFBQSxVQUdFQyxHQUhGLEdBR1UvQixNQUhWLENBR0UrQixHQUhGO0FBQUEsVUFJRUMsT0FKRixHQUljbEMsS0FKZCxDQUlFa0MsT0FKRjtBQUFBLFVBS0EzQixPQUxBLEdBS1V3QixjQUxWO0FBQUEsVUFNQUksY0FOQSxHQU1pQkQsT0FOakIsQ0FISyxDQVNxQjs7QUFFaEMsV0FBS0UsTUFBTCxDQUFZSCxHQUFaO0FBQ0EsV0FBS0ksVUFBTCxDQUFnQjlCLE9BQWhCO0FBQ0EsV0FBSytCLGlCQUFMLENBQXVCSCxjQUF2Qjs7QUFFQSxXQUFLZixZQUFMO0FBQ0Q7OzttQ0FFcUJtQixLLEVBQU9sQixVLEVBQVk7QUFDdkMsVUFBTW1CLGNBQWNqRCxRQUFRa0QsY0FBUixDQUF1QkYsS0FBdkIsRUFBOEJsQixVQUE5QixDQUFwQjs7QUFFQW1CLGtCQUFZRSxVQUFaOztBQUVBLGFBQU9GLFdBQVA7QUFDRDs7OztFQXpGdUJqRCxPOztBQTRGMUJvRCxPQUFPQyxNQUFQLENBQWM5QyxXQUFkLEVBQTJCO0FBQ3pCK0MsV0FBUyxLQURnQjtBQUV6QkMscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFGTSxDQUEzQjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQm5ELFdBQWpCIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBlYXN5TGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5LFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQgfSA9IGVhc3lMYXlvdXQ7XG5cbmNvbnN0IEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi9jb21tb24vdGV4dGFyZWEvYm5mJyksXG4gICAgICBDb250ZW50VGV4dGFyZWEgPSByZXF1aXJlKCcuL2NvbW1vbi90ZXh0YXJlYS9jb250ZW50JyksXG4gICAgICBQYXJzZVRyZWVUZXh0YXJlYSA9IHJlcXVpcmUoJy4vY29tbW9uL3RleHRhcmVhL3BhcnNlVHJlZScpLFxuICAgICAgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSA9IHJlcXVpcmUoJy4vY29tbW9uL3RleHRhcmVhL2xleGljYWxFbnRyaWVzJyksXG4gICAgICBNYWluVmVydGljYWxTcGxpdHRlciA9IHJlcXVpcmUoJy4vY29tbW9uL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbicpO1xuXG5jbGFzcyBFeGFtcGxlVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRQYXJzZVRyZWUoKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBMZXhlciA9IHRoaXMuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBQYXJzZXIgPSB0aGlzLmdldFBhcnNlcigpLFxuICAgICAgICAgIGxleGVyID0gTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwYXJzZXIgPSBQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZSgpO1xuXG4gICAgICB0aGlzLmhpZGVFcnJvcigpO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnNob3dFcnJvcigpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgY29udGVudEtleVVwSGFuZGxlcigpIHsgdGhpcy5rZXlVcEhhbmRsZXIoKTsgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5nZXRUaXRsZSgpLFxuICAgICAgICAgIGNvbnRlbnRLZXlVcEhhbmRsZXIgPSB0aGlzLmNvbnRlbnRLZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBibmZUZXh0YXJlYUtleVVwSGFuZGxlciA9IHRoaXMuYm5mVGV4dGFyZWFLZXlVcEhhbmRsZXIgPyB0aGlzLmJuZlRleHRhcmVhS2V5VXBIYW5kbGVyLmJpbmQodGhpcykgOiBudWxsLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzS2V5VXBIYW5kbGVyID0gdGhpcy5sZXhpY2FsRW50cmllc0tleVVwSGFuZGxlciA/IHRoaXMubGV4aWNhbEVudHJpZXNLZXlVcEhhbmRsZXIuYmluZCh0aGlzKSA6IG51bGwsXG4gICAgICAgICAgYm5mVGV4dGFyZWFSZWFkT25seSA9IChibmZUZXh0YXJlYUtleVVwSGFuZGxlciA9PT0gbnVsbCksXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXNSZWFkT25seSA9IChsZXhpY2FsRW50cmllc0tleVVwSGFuZGxlciA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPGgxPnt0aXRsZX08L2gxPixcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5MZXhpY2FsIGVudHJpZXM8L2gyPlxuICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e2xleGljYWxFbnRyaWVzS2V5VXBIYW5kbGVyfSByZWFkT25seT17bGV4aWNhbEVudHJpZXNSZWFkT25seX0gLz5cbiAgICAgICAgICA8aDI+Qk5GPC9oMj5cbiAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17Ym5mVGV4dGFyZWFLZXlVcEhhbmRsZXJ9IHJlYWRPbmx5PXtibmZUZXh0YXJlYVJlYWRPbmx5fSAvPlxuICAgICAgICA8L1NpemVhYmxlRWxlbWVudD5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPlBhcnNlIHRyZWU8L2gyPlxuICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDxoMj5Db250ZW50PC9oMj5cbiAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2NvbnRlbnRLZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBMZXhlciA9IHRoaXMuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBQYXJzZXIgPSB0aGlzLmdldFBhcnNlcigpLFxuICAgICAgICAgIGluaXRpYWxDb250ZW50ID0gdGhpcy5nZXRJbml0aWFsQ29udGVudCgpLFxuICAgICAgICAgIHsgYm5mIH0gPSBQYXJzZXIsXG4gICAgICAgICAgeyBlbnRyaWVzIH0gPSBMZXhlcixcbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gZW50cmllczsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcbiAgICB0aGlzLnNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBleGFtcGxlVmlldyA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpO1xuXG4gICAgZXhhbXBsZVZpZXcuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIGV4YW1wbGVWaWV3XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFeGFtcGxlVmlldywge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdleGFtcGxlJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlVmlldztcbiJdfQ==