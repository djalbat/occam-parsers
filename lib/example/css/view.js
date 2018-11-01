'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var CSSParser = require('../../css/parser'),
    ExampleView = require('../../example/view');

var CSSLexer = lexers.CSSLexer;

var CSSExampleView = function (_ExampleView) {
  _inherits(CSSExampleView, _ExampleView);

  function CSSExampleView() {
    _classCallCheck(this, CSSExampleView);

    return _possibleConstructorReturn(this, (CSSExampleView.__proto__ || Object.getPrototypeOf(CSSExampleView)).apply(this, arguments));
  }

  _createClass(CSSExampleView, [{
    key: 'getTitle',
    value: function getTitle() {
      var title = 'CSS parser example';

      return title;
    }
  }, {
    key: 'getLexer',
    value: function getLexer() {
      var Lexer = CSSLexer; ///

      return Lexer;
    }
  }, {
    key: 'getParser',
    value: function getParser() {
      var Parser = CSSParser; ///

      return Parser;
    }
  }, {
    key: 'getInitialContent',
    value: function getInitialContent() {
      var initialContent = '1+2/3';

      return initialContent;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ExampleView.fromProperties(CSSExampleView, properties);
    }
  }]);

  return CSSExampleView;
}(ExampleView);

Object.assign(CSSExampleView, {
  defaultProperties: {
    className: 'css'
  }
});

module.exports = CSSExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2Nzcy92aWV3LmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJDU1NQYXJzZXIiLCJFeGFtcGxlVmlldyIsIkNTU0xleGVyIiwiQ1NTRXhhbXBsZVZpZXciLCJ0aXRsZSIsIkxleGVyIiwiUGFyc2VyIiwiaW5pdGlhbENvbnRlbnQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsWUFBWUQsUUFBUSxrQkFBUixDQUFsQjtBQUFBLElBQ01FLGNBQWNGLFFBQVEsb0JBQVIsQ0FEcEI7O0lBR1FHLFEsR0FBYUosTSxDQUFiSSxROztJQUVGQyxjOzs7Ozs7Ozs7OzsrQkFDTztBQUNULFVBQU1DLFFBQVEsb0JBQWQ7O0FBRUEsYUFBT0EsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNQyxRQUFRSCxRQUFkLENBRFMsQ0FDZ0I7O0FBRXpCLGFBQU9HLEtBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUMsU0FBU04sU0FBZixDQURVLENBQ2lCOztBQUUzQixhQUFPTSxNQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBTUMsaUJBQWlCLE9BQXZCOztBQUVBLGFBQU9BLGNBQVA7QUFDRDs7O21DQUVxQkMsVSxFQUFZO0FBQUUsYUFBT1AsWUFBWVEsY0FBWixDQUEyQk4sY0FBM0IsRUFBMkNLLFVBQTNDLENBQVA7QUFBK0Q7Ozs7RUF6QnhFUCxXOztBQTRCN0JTLE9BQU9DLE1BQVAsQ0FBY1IsY0FBZCxFQUE4QjtBQUM1QlMscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFEUyxDQUE5Qjs7QUFNQUMsT0FBT0MsT0FBUCxHQUFpQlosY0FBakIiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IENTU1BhcnNlciA9IHJlcXVpcmUoJy4uLy4uL2Nzcy9wYXJzZXInKSxcbiAgICAgIEV4YW1wbGVWaWV3ID0gcmVxdWlyZSgnLi4vLi4vZXhhbXBsZS92aWV3Jyk7XG5cbmNvbnN0IHsgQ1NTTGV4ZXIgfSA9IGxleGVycztcblxuY2xhc3MgQ1NTRXhhbXBsZVZpZXcgZXh0ZW5kcyBFeGFtcGxlVmlldyB7XG4gIGdldFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gJ0NTUyBwYXJzZXIgZXhhbXBsZSc7XG5cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBMZXhlciA9IENTU0xleGVyOyAgLy8vXG5cbiAgICByZXR1cm4gTGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgUGFyc2VyID0gQ1NTUGFyc2VyOyAgLy8vXG5cbiAgICByZXR1cm4gUGFyc2VyO1xuICB9XG5cbiAgZ2V0SW5pdGlhbENvbnRlbnQoKSB7XG4gICAgY29uc3QgaW5pdGlhbENvbnRlbnQgPSAnMSsyLzMnO1xuXG4gICAgcmV0dXJuIGluaXRpYWxDb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEV4YW1wbGVWaWV3LmZyb21Qcm9wZXJ0aWVzKENTU0V4YW1wbGVWaWV3LCBwcm9wZXJ0aWVzKTt9XG59XG5cbk9iamVjdC5hc3NpZ24oQ1NTRXhhbXBsZVZpZXcsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdjc3MnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENTU0V4YW1wbGVWaWV3O1xuIl19