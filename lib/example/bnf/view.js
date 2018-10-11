'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var BNFParser = require('../../bnf/parser'),
    ExampleView = require('../../example/view');

var BNFLexer = lexers.BNFLexer;

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
    key: 'getTitle',
    value: function getTitle() {
      var title = 'BNF parser example';

      return title;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2JuZi92aWV3LmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJCTkZQYXJzZXIiLCJFeGFtcGxlVmlldyIsIkJORkxleGVyIiwiQk5GRXhhbXBsZVZpZXciLCJMZXhlciIsIlBhcnNlciIsInRpdGxlIiwiYm5mIiwiaW5pdGlhbENvbnRlbnQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsWUFBWUQsUUFBUSxrQkFBUixDQUFsQjtBQUFBLElBQ01FLGNBQWNGLFFBQVEsb0JBQVIsQ0FEcEI7O0lBR1FHLFEsR0FBYUosTSxDQUFiSSxROztJQUVGQyxjOzs7Ozs7Ozs7OzsrQkFDTztBQUNULFVBQU1DLFFBQVFGLFFBQWQsQ0FEUyxDQUNnQjs7QUFFekIsYUFBT0UsS0FBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNQyxTQUFTTCxTQUFmLENBRFUsQ0FDaUI7O0FBRTNCLGFBQU9LLE1BQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUMsUUFBUSxvQkFBZDs7QUFFQSxhQUFPQSxLQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFDWixVQUFFQyxHQUFGLEdBQVVQLFNBQVYsQ0FBRU8sR0FBRjtBQUFBLFVBQ0FDLGNBREEsR0FDaUJELEdBRGpCLENBRFksQ0FFVTs7QUFFNUIsYUFBT0MsY0FBUDtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFBRSxhQUFPUixZQUFZUyxjQUFaLENBQTJCUCxjQUEzQixFQUEyQ00sVUFBM0MsQ0FBUDtBQUErRDs7OztFQTFCeEVSLFc7O0FBNkI3QlUsT0FBT0MsTUFBUCxDQUFjVCxjQUFkLEVBQThCO0FBQzVCVSxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQURTLENBQTlCOztBQU1BQyxPQUFPQyxPQUFQLEdBQWlCYixjQUFqQiIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vLi4vYm5mL3BhcnNlcicpLFxuICAgICAgRXhhbXBsZVZpZXcgPSByZXF1aXJlKCcuLi8uLi9leGFtcGxlL3ZpZXcnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzO1xuXG5jbGFzcyBCTkZFeGFtcGxlVmlldyBleHRlbmRzIEV4YW1wbGVWaWV3IHtcbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgTGV4ZXIgPSBCTkZMZXhlcjsgIC8vL1xuXG4gICAgcmV0dXJuIExleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIGNvbnN0IFBhcnNlciA9IEJORlBhcnNlcjsgIC8vL1xuXG4gICAgcmV0dXJuIFBhcnNlcjtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gJ0JORiBwYXJzZXIgZXhhbXBsZSc7XG5cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICBnZXRJbml0aWFsQ29udGVudCgpIHtcbiAgICBjb25zdCB7IGJuZiB9ID0gQk5GUGFyc2VyLFxuICAgICAgICAgIGluaXRpYWxDb250ZW50ID0gYm5mOyAvLy9cblxuICAgIHJldHVybiBpbml0aWFsQ29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFeGFtcGxlVmlldy5mcm9tUHJvcGVydGllcyhCTkZFeGFtcGxlVmlldywgcHJvcGVydGllcyk7fVxufVxuXG5PYmplY3QuYXNzaWduKEJORkV4YW1wbGVWaWV3LCB7XG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnYm5mJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCTkZFeGFtcGxlVmlldztcbiJdfQ==