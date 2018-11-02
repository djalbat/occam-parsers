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
      var initialContent = 'background-color : white !important;\n';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2Nzcy92aWV3LmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJDU1NQYXJzZXIiLCJFeGFtcGxlVmlldyIsIkNTU0xleGVyIiwiQ1NTRXhhbXBsZVZpZXciLCJ0aXRsZSIsIkxleGVyIiwiUGFyc2VyIiwiaW5pdGlhbENvbnRlbnQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsWUFBWUQsUUFBUSxrQkFBUixDQUFsQjtBQUFBLElBQ01FLGNBQWNGLFFBQVEsb0JBQVIsQ0FEcEI7O0lBR1FHLFEsR0FBYUosTSxDQUFiSSxROztJQUVGQyxjOzs7Ozs7Ozs7OzsrQkFDTztBQUNULFVBQU1DLFFBQVEsb0JBQWQ7O0FBRUEsYUFBT0EsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNQyxRQUFRSCxRQUFkLENBRFMsQ0FDZ0I7O0FBRXpCLGFBQU9HLEtBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUMsU0FBU04sU0FBZixDQURVLENBQ2lCOztBQUUzQixhQUFPTSxNQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBTUMsaUJBQWlCLHdDQUF2Qjs7QUFFQSxhQUFPQSxjQUFQO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUFFLGFBQU9QLFlBQVlRLGNBQVosQ0FBMkJOLGNBQTNCLEVBQTJDSyxVQUEzQyxDQUFQO0FBQStEOzs7O0VBekJ4RVAsVzs7QUE0QjdCUyxPQUFPQyxNQUFQLENBQWNSLGNBQWQsRUFBOEI7QUFDNUJTLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRFMsQ0FBOUI7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUJaLGNBQWpCIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBDU1NQYXJzZXIgPSByZXF1aXJlKCcuLi8uLi9jc3MvcGFyc2VyJyksXG4gICAgICBFeGFtcGxlVmlldyA9IHJlcXVpcmUoJy4uLy4uL2V4YW1wbGUvdmlldycpO1xuXG5jb25zdCB7IENTU0xleGVyIH0gPSBsZXhlcnM7XG5cbmNsYXNzIENTU0V4YW1wbGVWaWV3IGV4dGVuZHMgRXhhbXBsZVZpZXcge1xuICBnZXRUaXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZSA9ICdDU1MgcGFyc2VyIGV4YW1wbGUnO1xuXG4gICAgcmV0dXJuIHRpdGxlO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgTGV4ZXIgPSBDU1NMZXhlcjsgIC8vL1xuXG4gICAgcmV0dXJuIExleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIGNvbnN0IFBhcnNlciA9IENTU1BhcnNlcjsgIC8vL1xuXG4gICAgcmV0dXJuIFBhcnNlcjtcbiAgfVxuXG4gIGdldEluaXRpYWxDb250ZW50KCkge1xuICAgIGNvbnN0IGluaXRpYWxDb250ZW50ID0gJ2JhY2tncm91bmQtY29sb3IgOiB3aGl0ZSAhaW1wb3J0YW50O1xcbic7XG5cbiAgICByZXR1cm4gaW5pdGlhbENvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRXhhbXBsZVZpZXcuZnJvbVByb3BlcnRpZXMoQ1NTRXhhbXBsZVZpZXcsIHByb3BlcnRpZXMpO31cbn1cblxuT2JqZWN0LmFzc2lnbihDU1NFeGFtcGxlVmlldywge1xuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2NzcydcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ1NTRXhhbXBsZVZpZXc7XG4iXX0=