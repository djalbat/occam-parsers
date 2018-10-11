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
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var florenceExampleView = Element.fromProperties(Class, properties);

      florenceExampleView.initialise();

      return florenceExampleView;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJlYXN5TGF5b3V0IiwiRWxlbWVudCIsIlNpemVhYmxlRWxlbWVudCIsIkJORlRleHRhcmVhIiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJMZXhpY2FsRW50cmllc1RleHRhcmVhIiwiTWFpblZlcnRpY2FsU3BsaXR0ZXIiLCJFeGFtcGxlVmlldyIsInBhcnNlVHJlZSIsImdldFBhcnNlVHJlZSIsImhpZGVFcnJvciIsInNldFBhcnNlVHJlZSIsImVycm9yIiwic2hvd0Vycm9yIiwiY2xlYXJQYXJzZVRyZWUiLCJrZXlVcEhhbmRsZXIiLCJwcm9wZXJ0aWVzIiwidGl0bGUiLCJnZXRUaXRsZSIsImNvbnRlbnRLZXlVcEhhbmRsZXIiLCJiaW5kIiwiYm5mVGV4dGFyZWFLZXlVcEhhbmRsZXIiLCJsZXhpY2FsRW50cmllc0tleVVwSGFuZGxlciIsImJuZlRleHRhcmVhUmVhZE9ubHkiLCJsZXhpY2FsRW50cmllc1JlYWRPbmx5IiwiYXNzaWduQ29udGV4dCIsIkNsYXNzIiwiZmxvcmVuY2VFeGFtcGxlVmlldyIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGFBQVIsQ0FEbkI7O0FBR00sSUFBRUUsT0FBRixHQUFjSCxJQUFkLENBQUVHLE9BQUY7QUFBQSxJQUNFQyxlQURGLEdBQ3NCRixVQUR0QixDQUNFRSxlQURGOzs7QUFHTixJQUFNQyxjQUFjSixRQUFRLHVCQUFSLENBQXBCO0FBQUEsSUFDTUssa0JBQWtCTCxRQUFRLDJCQUFSLENBRHhCO0FBQUEsSUFFTU0sb0JBQW9CTixRQUFRLDZCQUFSLENBRjFCO0FBQUEsSUFHTU8seUJBQXlCUCxRQUFRLGtDQUFSLENBSC9CO0FBQUEsSUFJTVEsdUJBQXVCUixRQUFRLGdDQUFSLENBSjdCOztJQU1NUyxXOzs7Ozs7Ozs7OzttQ0FDVztBQUNiLFVBQUk7QUFDRixZQUFNQyxZQUFZLEtBQUtDLFlBQUwsRUFBbEI7O0FBRUEsYUFBS0MsU0FBTDs7QUFFQSxhQUFLQyxZQUFMLENBQWtCSCxTQUFsQjtBQUNELE9BTkQsQ0FNRSxPQUFPSSxLQUFQLEVBQWM7QUFDZCxhQUFLQyxTQUFMOztBQUVBLGFBQUtDLGNBQUw7QUFDRDtBQUNGOzs7MENBRXFCO0FBQUUsV0FBS0MsWUFBTDtBQUFzQjs7O2tDQUVoQ0MsVSxFQUFZO0FBQ3hCLFVBQU1DLFFBQVEsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsc0JBQXNCLEtBQUtBLG1CQUFMLENBQXlCQyxJQUF6QixDQUE4QixJQUE5QixDQUQ1QjtBQUFBLFVBRU1DLDBCQUEwQixLQUFLQSx1QkFBTCxHQUErQixLQUFLQSx1QkFBTCxDQUE2QkQsSUFBN0IsQ0FBa0MsSUFBbEMsQ0FBL0IsR0FBeUUsSUFGekc7QUFBQSxVQUdNRSw2QkFBNkIsS0FBS0EsMEJBQUwsR0FBa0MsS0FBS0EsMEJBQUwsQ0FBZ0NGLElBQWhDLENBQXFDLElBQXJDLENBQWxDLEdBQStFLElBSGxIO0FBQUEsVUFJTUcsc0JBQXVCRiw0QkFBNEIsSUFKekQ7QUFBQSxVQUtNRyx5QkFBMEJGLCtCQUErQixJQUwvRDs7QUFPQSxhQUFRLENBRU47QUFBQTtBQUFBO0FBQUtMO0FBQUwsT0FGTSxFQUdOO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUMseUJBQUQ7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFLDhCQUFDLHNCQUFELElBQXdCLFNBQVNLLDBCQUFqQyxFQUE2RCxVQUFVRSxzQkFBdkUsR0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FIRjtBQUlFLDhCQUFDLFdBQUQsSUFBYSxTQUFTSCx1QkFBdEIsRUFBK0MsVUFBVUUsbUJBQXpEO0FBSkYsU0FERjtBQU9FLDRCQUFDLG9CQUFELE9BUEY7QUFRRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFFBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRSw4QkFBQyxpQkFBRCxPQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUhGO0FBSUUsOEJBQUMsZUFBRCxJQUFpQixTQUFTSixtQkFBMUI7QUFKRjtBQVJGLE9BSE0sQ0FBUjtBQW9CRDs7O2lDQUVZO0FBQ1gsV0FBS00sYUFBTDtBQUNEOzs7bUNBRXFCQyxLLEVBQU9WLFUsRUFBWTtBQUN2QyxVQUFNVyxzQkFBc0IzQixRQUFRNEIsY0FBUixDQUF1QkYsS0FBdkIsRUFBOEJWLFVBQTlCLENBQTVCOztBQUVBVywwQkFBb0JFLFVBQXBCOztBQUVBLGFBQU9GLG1CQUFQO0FBQ0Q7Ozs7RUF6RHVCM0IsTzs7QUE0RDFCOEIsT0FBT0MsTUFBUCxDQUFjeEIsV0FBZCxFQUEyQjtBQUN6QnlCLFdBQVMsS0FEZ0I7QUFFekJDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRk0sQ0FBM0I7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUI3QixXQUFqQiIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50IH0gPSBlYXN5TGF5b3V0O1xuXG5jb25zdCBCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4vY29tbW9uL3RleHRhcmVhL2JuZicpLFxuICAgICAgQ29udGVudFRleHRhcmVhID0gcmVxdWlyZSgnLi9jb21tb24vdGV4dGFyZWEvY29udGVudCcpLFxuICAgICAgUGFyc2VUcmVlVGV4dGFyZWEgPSByZXF1aXJlKCcuL2NvbW1vbi90ZXh0YXJlYS9wYXJzZVRyZWUnKSxcbiAgICAgIExleGljYWxFbnRyaWVzVGV4dGFyZWEgPSByZXF1aXJlKCcuL2NvbW1vbi90ZXh0YXJlYS9sZXhpY2FsRW50cmllcycpLFxuICAgICAgTWFpblZlcnRpY2FsU3BsaXR0ZXIgPSByZXF1aXJlKCcuL2NvbW1vbi92ZXJ0aWNhbFNwbGl0dGVyL21haW4nKTtcblxuY2xhc3MgRXhhbXBsZVZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZSgpO1xuXG4gICAgICB0aGlzLmhpZGVFcnJvcigpO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnNob3dFcnJvcigpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgY29udGVudEtleVVwSGFuZGxlcigpIHsgdGhpcy5rZXlVcEhhbmRsZXIoKTsgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5nZXRUaXRsZSgpLFxuICAgICAgICAgIGNvbnRlbnRLZXlVcEhhbmRsZXIgPSB0aGlzLmNvbnRlbnRLZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBibmZUZXh0YXJlYUtleVVwSGFuZGxlciA9IHRoaXMuYm5mVGV4dGFyZWFLZXlVcEhhbmRsZXIgPyB0aGlzLmJuZlRleHRhcmVhS2V5VXBIYW5kbGVyLmJpbmQodGhpcykgOiBudWxsLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzS2V5VXBIYW5kbGVyID0gdGhpcy5sZXhpY2FsRW50cmllc0tleVVwSGFuZGxlciA/IHRoaXMubGV4aWNhbEVudHJpZXNLZXlVcEhhbmRsZXIuYmluZCh0aGlzKSA6IG51bGwsXG4gICAgICAgICAgYm5mVGV4dGFyZWFSZWFkT25seSA9IChibmZUZXh0YXJlYUtleVVwSGFuZGxlciA9PT0gbnVsbCksXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXNSZWFkT25seSA9IChsZXhpY2FsRW50cmllc0tleVVwSGFuZGxlciA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPGgxPnt0aXRsZX08L2gxPixcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5MZXhpY2FsIGVudHJpZXM8L2gyPlxuICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e2xleGljYWxFbnRyaWVzS2V5VXBIYW5kbGVyfSByZWFkT25seT17bGV4aWNhbEVudHJpZXNSZWFkT25seX0gLz5cbiAgICAgICAgICA8aDI+Qk5GPC9oMj5cbiAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17Ym5mVGV4dGFyZWFLZXlVcEhhbmRsZXJ9IHJlYWRPbmx5PXtibmZUZXh0YXJlYVJlYWRPbmx5fSAvPlxuICAgICAgICA8L1NpemVhYmxlRWxlbWVudD5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPlBhcnNlIHRyZWU8L2gyPlxuICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDxoMj5Db250ZW50PC9oMj5cbiAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2NvbnRlbnRLZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBmbG9yZW5jZUV4YW1wbGVWaWV3ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBmbG9yZW5jZUV4YW1wbGVWaWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBmbG9yZW5jZUV4YW1wbGVWaWV3XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFeGFtcGxlVmlldywge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdleGFtcGxlJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlVmlldztcbiJdfQ==