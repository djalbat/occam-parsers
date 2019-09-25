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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJlYXN5TGF5b3V0IiwiQk5GVGV4dGFyZWEiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIkhpZGVOdWxsaWZpZWROb2Rlc0NoZWNrYm94IiwiRWxlbWVudCIsIlNpemVhYmxlRWxlbWVudCIsIkV4YW1wbGVWaWV3IiwicGFyc2VUcmVlIiwiTGV4ZXIiLCJnZXRMZXhlciIsIlBhcnNlciIsImdldFBhcnNlciIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJibmYiLCJnZXRCTkYiLCJlbnRyaWVzIiwibGV4ZXIiLCJmcm9tRW50cmllcyIsInBhcnNlciIsImZyb21CTkYiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwiaGlkZU51bGxpZmllZE5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNIaWRlTnVsbGlmaWVkTm9kZXNDaGVja2JveENoZWNrZWQiLCJoaWRlTnVsbGlmaWVkTm9kZXMiLCJhc1BhcnNlVHJlZSIsImNoYW5nZUhhbmRsZXIiLCJnZXRQYXJzZVRyZWUiLCJoaWRlRXJyb3IiLCJzZXRQYXJzZVRyZWUiLCJpbml0aWFsQ29udGVudCIsInByb3BlcnRpZXMiLCJ0aXRsZSIsImdldFRpdGxlIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImFzc2lnbkNvbnRleHQiLCJnZXRJbml0aWFsQ29udGVudCIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRMZXhpY2FsRW50cmllcyIsIkNsYXNzIiwiZXhhbXBsZVZpZXciLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05h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QTtBQUFBO0FBRkYsV0FIRjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FQRjtBQVFFLDhCQUFDLGVBQUQsSUFBaUIsU0FBU1EsWUFBMUI7QUFSRjtBQVJGLE9BSE0sQ0FBUjtBQXdCRDs7O2lDQUVZO0FBQ1gsV0FBS0UsYUFBTDs7QUFFTSxrQkFBUSxLQUFLaEMsUUFBTCxFQUFSO0FBQUEsVUFDQUMsTUFEQSxHQUNTLEtBQUtDLFNBQUwsRUFEVDtBQUFBLFVBRUF3QixjQUZBLEdBRWlCLEtBQUtPLGlCQUFMLEVBRmpCO0FBQUEsVUFHRTVCLEdBSEYsR0FHVUosTUFIVixDQUdFSSxHQUhGO0FBQUEsVUFJRUUsT0FKRixHQUljUixLQUpkLENBSUVRLE9BSkY7QUFBQSxVQUtBSyxPQUxBLEdBS1VjLGNBTFY7QUFBQSxVQU1BdkIsY0FOQSxHQU1pQkksT0FOakIsQ0FISyxDQVNxQjs7QUFFaEMsV0FBSzJCLE1BQUwsQ0FBWTdCLEdBQVo7QUFDQSxXQUFLOEIsVUFBTCxDQUFnQnZCLE9BQWhCO0FBQ0EsV0FBS3dCLGlCQUFMLENBQXVCakMsY0FBdkI7O0FBRUEsV0FBSzJCLFlBQUw7QUFDRDs7O21DQUVxQk8sSyxFQUFPVixVLEVBQVk7QUFDdkMsVUFBTVcsY0FBYzNDLFFBQVE0QyxjQUFSLENBQXVCRixLQUF2QixFQUE4QlYsVUFBOUIsQ0FBcEI7O0FBRUFXLGtCQUFZRSxVQUFaOztBQUVBLGFBQU9GLFdBQVA7QUFDRDs7OztFQXhHdUIzQyxPOztBQTJHMUI4QyxPQUFPQyxNQUFQLENBQWM3QyxXQUFkLEVBQTJCO0FBQ3pCOEMsV0FBUyxLQURnQjtBQUV6QkMscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFGTSxDQUEzQjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQmxELFdBQWpCIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBlYXN5TGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgQk5GVGV4dGFyZWEgPSByZXF1aXJlKCcuL2NvbW1vbi90ZXh0YXJlYS9ibmYnKSxcbiAgICAgIENvbnRlbnRUZXh0YXJlYSA9IHJlcXVpcmUoJy4vY29tbW9uL3RleHRhcmVhL2NvbnRlbnQnKSxcbiAgICAgIFBhcnNlVHJlZVRleHRhcmVhID0gcmVxdWlyZSgnLi9jb21tb24vdGV4dGFyZWEvcGFyc2VUcmVlJyksXG4gICAgICBNYWluVmVydGljYWxTcGxpdHRlciA9IHJlcXVpcmUoJy4vY29tbW9uL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbicpLFxuICAgICAgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSA9IHJlcXVpcmUoJy4vY29tbW9uL3RleHRhcmVhL2xleGljYWxFbnRyaWVzJyksXG4gICAgICBIaWRlTnVsbGlmaWVkTm9kZXNDaGVja2JveCA9IHJlcXVpcmUoJy4vY29tbW9uL2NoZWNrYm94L2hpZGVOdWxsaWZpZWROb2RlcycpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3ksXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCB9ID0gZWFzeUxheW91dDtcblxuY2xhc3MgRXhhbXBsZVZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgTGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgUGFyc2VyID0gdGhpcy5nZXRQYXJzZXIoKSxcblx0XHRcdCAgICBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcblx0XHRcdCAgICBibmYgPSB0aGlzLmdldEJORigpLFxuXHRcdFx0ICAgIGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG5cdFx0XHQgICAgbGV4ZXIgPSBMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICBwYXJzZXIgPSBQYXJzZXIuZnJvbUJORihibmYpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaGlkZU51bGxpZmllZE5vZGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc0hpZGVOdWxsaWZpZWROb2Rlc0NoZWNrYm94Q2hlY2tlZCgpLFxuICAgICAgICAgICAgaGlkZU51bGxpZmllZE5vZGVzID0gaGlkZU51bGxpZmllZE5vZGVzQ2hlY2tib3hDaGVja2VkO1xuXG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2VucywgaGlkZU51bGxpZmllZE5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpO1xuICB9XG5cbiAgY2hhbmdlSGFuZGxlcigpIHtcbiAgICAvLyB0cnkge1xuICAgICAgY29uc3QgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUoKTtcblxuICAgICAgdGhpcy5oaWRlRXJyb3IoKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgdGhpcy5zaG93RXJyb3IoKTtcbiAgICAvL1xuICAgIC8vICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIC8vIH1cbiAgfVxuXG4gIGdldEluaXRpYWxDb250ZW50KCkge1xuICAgIGNvbnN0IGluaXRpYWxDb250ZW50ID0gJyc7XG5cbiAgICByZXR1cm4gaW5pdGlhbENvbnRlbnQ7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuZ2V0VGl0bGUoKSxcbiAgICAgICAgICBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8aDE+e3RpdGxlfTwvaDE+LFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxTaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgICAgPGgyPkxleGljYWwgZW50cmllczwvaDI+XG4gICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5CTkY8L2gyPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+UGFyc2UgdHJlZTwvaDI+XG4gICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIaWRlTnVsbGlmaWVkTm9kZXNDaGVja2JveCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxzcGFuPkhpZGUgbnVsbGlmaWVkIG5vZGVzPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMj5Db250ZW50PC9oMj5cbiAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IExleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIFBhcnNlciA9IHRoaXMuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgaW5pdGlhbENvbnRlbnQgPSB0aGlzLmdldEluaXRpYWxDb250ZW50KCksXG4gICAgICAgICAgeyBibmYgfSA9IFBhcnNlcixcbiAgICAgICAgICB7IGVudHJpZXMgfSA9IExleGVyLFxuICAgICAgICAgIGNvbnRlbnQgPSBpbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IGV4YW1wbGVWaWV3ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBleGFtcGxlVmlldy5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gZXhhbXBsZVZpZXdcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEV4YW1wbGVWaWV3LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2V4YW1wbGUnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGVWaWV3O1xuIl19