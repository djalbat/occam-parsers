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
      return this.keyUpHandler();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJlYXN5TGF5b3V0IiwiRWxlbWVudCIsIlNpemVhYmxlRWxlbWVudCIsIkJORlRleHRhcmVhIiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJMZXhpY2FsRW50cmllc1RleHRhcmVhIiwiTWFpblZlcnRpY2FsU3BsaXR0ZXIiLCJFeGFtcGxlVmlldyIsInBhcnNlVHJlZSIsImdldFBhcnNlVHJlZSIsImhpZGVFcnJvciIsInNldFBhcnNlVHJlZSIsImVycm9yIiwic2hvd0Vycm9yIiwiY2xlYXJQYXJzZVRyZWUiLCJrZXlVcEhhbmRsZXIiLCJwcm9wZXJ0aWVzIiwidGl0bGUiLCJnZXRUaXRsZSIsImNvbnRlbnRLZXlVcEhhbmRsZXIiLCJiaW5kIiwiYm5mVGV4dGFyZWFLZXlVcEhhbmRsZXIiLCJsZXhpY2FsRW50cmllc0tleVVwSGFuZGxlciIsImJuZlRleHRhcmVhUmVhZE9ubHkiLCJsZXhpY2FsRW50cmllc1JlYWRPbmx5IiwiYXNzaWduQ29udGV4dCIsIkNsYXNzIiwiZmxvcmVuY2VFeGFtcGxlVmlldyIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGFBQVIsQ0FEbkI7O0FBR00sSUFBRUUsT0FBRixHQUFjSCxJQUFkLENBQUVHLE9BQUY7QUFBQSxJQUNFQyxlQURGLEdBQ3NCRixVQUR0QixDQUNFRSxlQURGOzs7QUFHTixJQUFNQyxjQUFjSixRQUFRLHVCQUFSLENBQXBCO0FBQUEsSUFDTUssa0JBQWtCTCxRQUFRLDJCQUFSLENBRHhCO0FBQUEsSUFFTU0sb0JBQW9CTixRQUFRLDZCQUFSLENBRjFCO0FBQUEsSUFHTU8seUJBQXlCUCxRQUFRLGtDQUFSLENBSC9CO0FBQUEsSUFJTVEsdUJBQXVCUixRQUFRLGdDQUFSLENBSjdCOztJQU1NUyxXOzs7Ozs7Ozs7OzttQ0FDVztBQUNiLFVBQUk7QUFDRixZQUFNQyxZQUFZLEtBQUtDLFlBQUwsRUFBbEI7O0FBRUEsYUFBS0MsU0FBTDs7QUFFQSxhQUFLQyxZQUFMLENBQWtCSCxTQUFsQjtBQUNELE9BTkQsQ0FNRSxPQUFPSSxLQUFQLEVBQWM7QUFDZCxhQUFLQyxTQUFMOztBQUVBLGFBQUtDLGNBQUw7QUFDRDtBQUNGOzs7MENBRXFCO0FBQUUsYUFBTyxLQUFLQyxZQUFMLEVBQVA7QUFBNkI7OztrQ0FFdkNDLFUsRUFBWTtBQUN4QixVQUFNQyxRQUFRLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLHNCQUFzQixLQUFLQSxtQkFBTCxDQUF5QkMsSUFBekIsQ0FBOEIsSUFBOUIsQ0FENUI7QUFBQSxVQUVNQywwQkFBMEIsS0FBS0EsdUJBQUwsR0FBK0IsS0FBS0EsdUJBQUwsQ0FBNkJELElBQTdCLENBQWtDLElBQWxDLENBQS9CLEdBQXlFLElBRnpHO0FBQUEsVUFHTUUsNkJBQTZCLEtBQUtBLDBCQUFMLEdBQWtDLEtBQUtBLDBCQUFMLENBQWdDRixJQUFoQyxDQUFxQyxJQUFyQyxDQUFsQyxHQUErRSxJQUhsSDtBQUFBLFVBSU1HLHNCQUF1QkYsNEJBQTRCLElBSnpEO0FBQUEsVUFLTUcseUJBQTBCRiwrQkFBK0IsSUFML0Q7O0FBT0EsYUFBUSxDQUVOO0FBQUE7QUFBQTtBQUFLTDtBQUFMLE9BRk0sRUFHTjtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFDLHlCQUFEO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRSw4QkFBQyxzQkFBRCxJQUF3QixTQUFTSywwQkFBakMsRUFBNkQsVUFBVUUsc0JBQXZFLEdBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSEY7QUFJRSw4QkFBQyxXQUFELElBQWEsU0FBU0gsdUJBQXRCLEVBQStDLFVBQVVFLG1CQUF6RDtBQUpGLFNBREY7QUFPRSw0QkFBQyxvQkFBRCxPQVBGO0FBUUU7QUFBQTtBQUFBLFlBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUUsOEJBQUMsaUJBQUQsT0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FIRjtBQUlFLDhCQUFDLGVBQUQsSUFBaUIsU0FBU0osbUJBQTFCO0FBSkY7QUFSRixPQUhNLENBQVI7QUFvQkQ7OztpQ0FFWTtBQUNYLFdBQUtNLGFBQUw7QUFDRDs7O21DQUVxQkMsSyxFQUFPVixVLEVBQVk7QUFDdkMsVUFBTVcsc0JBQXNCM0IsUUFBUTRCLGNBQVIsQ0FBdUJGLEtBQXZCLEVBQThCVixVQUE5QixDQUE1Qjs7QUFFQVcsMEJBQW9CRSxVQUFwQjs7QUFFQSxhQUFPRixtQkFBUDtBQUNEOzs7O0VBekR1QjNCLE87O0FBNEQxQjhCLE9BQU9DLE1BQVAsQ0FBY3hCLFdBQWQsRUFBMkI7QUFDekJ5QixXQUFTLEtBRGdCO0FBRXpCQyxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQUZNLENBQTNCOztBQU9BQyxPQUFPQyxPQUFQLEdBQWlCN0IsV0FBakIiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3ksXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCB9ID0gZWFzeUxheW91dDtcblxuY29uc3QgQk5GVGV4dGFyZWEgPSByZXF1aXJlKCcuL2NvbW1vbi90ZXh0YXJlYS9ibmYnKSxcbiAgICAgIENvbnRlbnRUZXh0YXJlYSA9IHJlcXVpcmUoJy4vY29tbW9uL3RleHRhcmVhL2NvbnRlbnQnKSxcbiAgICAgIFBhcnNlVHJlZVRleHRhcmVhID0gcmVxdWlyZSgnLi9jb21tb24vdGV4dGFyZWEvcGFyc2VUcmVlJyksXG4gICAgICBMZXhpY2FsRW50cmllc1RleHRhcmVhID0gcmVxdWlyZSgnLi9jb21tb24vdGV4dGFyZWEvbGV4aWNhbEVudHJpZXMnKSxcbiAgICAgIE1haW5WZXJ0aWNhbFNwbGl0dGVyID0gcmVxdWlyZSgnLi9jb21tb24vdmVydGljYWxTcGxpdHRlci9tYWluJyk7XG5cbmNsYXNzIEV4YW1wbGVWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUoKTtcblxuICAgICAgdGhpcy5oaWRlRXJyb3IoKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5zaG93RXJyb3IoKTtcblxuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnRlbnRLZXlVcEhhbmRsZXIoKSB7IHJldHVybiB0aGlzLmtleVVwSGFuZGxlcigpOyB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLmdldFRpdGxlKCksXG4gICAgICAgICAgY29udGVudEtleVVwSGFuZGxlciA9IHRoaXMuY29udGVudEtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGJuZlRleHRhcmVhS2V5VXBIYW5kbGVyID0gdGhpcy5ibmZUZXh0YXJlYUtleVVwSGFuZGxlciA/IHRoaXMuYm5mVGV4dGFyZWFLZXlVcEhhbmRsZXIuYmluZCh0aGlzKSA6IG51bGwsXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXNLZXlVcEhhbmRsZXIgPSB0aGlzLmxleGljYWxFbnRyaWVzS2V5VXBIYW5kbGVyID8gdGhpcy5sZXhpY2FsRW50cmllc0tleVVwSGFuZGxlci5iaW5kKHRoaXMpIDogbnVsbCxcbiAgICAgICAgICBibmZUZXh0YXJlYVJlYWRPbmx5ID0gKGJuZlRleHRhcmVhS2V5VXBIYW5kbGVyID09PSBudWxsKSxcbiAgICAgICAgICBsZXhpY2FsRW50cmllc1JlYWRPbmx5ID0gKGxleGljYWxFbnRyaWVzS2V5VXBIYW5kbGVyID09PSBudWxsKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8aDE+e3RpdGxlfTwvaDE+LFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxTaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgICAgPGgyPkxleGljYWwgZW50cmllczwvaDI+XG4gICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17bGV4aWNhbEVudHJpZXNLZXlVcEhhbmRsZXJ9IHJlYWRPbmx5PXtsZXhpY2FsRW50cmllc1JlYWRPbmx5fSAvPlxuICAgICAgICAgIDxoMj5CTkY8L2gyPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtibmZUZXh0YXJlYUtleVVwSGFuZGxlcn0gcmVhZE9ubHk9e2JuZlRleHRhcmVhUmVhZE9ubHl9IC8+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+UGFyc2UgdHJlZTwvaDI+XG4gICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPGgyPkNvbnRlbnQ8L2gyPlxuICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17Y29udGVudEtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IGZsb3JlbmNlRXhhbXBsZVZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIGZsb3JlbmNlRXhhbXBsZVZpZXcuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlRXhhbXBsZVZpZXdcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEV4YW1wbGVWaWV3LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2V4YW1wbGUnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGVWaWV3O1xuIl19