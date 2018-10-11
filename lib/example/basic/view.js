'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var ExampleView = require('../../example/view'),
    BasicParser = require('../../basic/parser');

var BasicLexer = lexers.BasicLexer;

var BasicExampleView = function (_ExampleView) {
  _inherits(BasicExampleView, _ExampleView);

  function BasicExampleView() {
    _classCallCheck(this, BasicExampleView);

    return _possibleConstructorReturn(this, (BasicExampleView.__proto__ || Object.getPrototypeOf(BasicExampleView)).apply(this, arguments));
  }

  _createClass(BasicExampleView, [{
    key: 'getLexer',
    value: function getLexer() {
      var Lexer = BasicLexer; ///

      return Lexer;
    }
  }, {
    key: 'getParser',
    value: function getParser() {
      var Parser = BasicParser; ///

      return Parser;
    }
  }, {
    key: 'getTitle',
    value: function getTitle() {
      var title = 'Basic parser example';

      return title;
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
      return ExampleView.fromProperties(BasicExampleView, properties);
    }
  }]);

  return BasicExampleView;
}(ExampleView);

Object.assign(BasicExampleView, {
  defaultProperties: {
    className: 'basic'
  }
});

module.exports = BasicExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2Jhc2ljL3ZpZXcuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkV4YW1wbGVWaWV3IiwiQmFzaWNQYXJzZXIiLCJCYXNpY0xleGVyIiwiQmFzaWNFeGFtcGxlVmlldyIsIkxleGVyIiwiUGFyc2VyIiwidGl0bGUiLCJpbml0aWFsQ29udGVudCIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxjQUFjRCxRQUFRLG9CQUFSLENBQXBCO0FBQUEsSUFDTUUsY0FBY0YsUUFBUSxvQkFBUixDQURwQjs7SUFHUUcsVSxHQUFlSixNLENBQWZJLFU7O0lBRUZDLGdCOzs7Ozs7Ozs7OzsrQkFDTztBQUNULFVBQU1DLFFBQVFGLFVBQWQsQ0FEUyxDQUNrQjs7QUFFM0IsYUFBT0UsS0FBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNQyxTQUFTSixXQUFmLENBRFUsQ0FDbUI7O0FBRTdCLGFBQU9JLE1BQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUMsUUFBUSxzQkFBZDs7QUFFQSxhQUFPQSxLQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBTUMsaUJBQWlCLE9BQXZCOztBQUVBLGFBQU9BLGNBQVA7QUFDRDs7O21DQUVxQkMsVSxFQUFZO0FBQUUsYUFBT1IsWUFBWVMsY0FBWixDQUEyQk4sZ0JBQTNCLEVBQTZDSyxVQUE3QyxDQUFQO0FBQWlFOzs7O0VBekJ4RVIsVzs7QUE0Qi9CVSxPQUFPQyxNQUFQLENBQWNSLGdCQUFkLEVBQWdDO0FBQzlCUyxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQURXLENBQWhDOztBQU1BQyxPQUFPQyxPQUFQLEdBQWlCWixnQkFBakIiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IEV4YW1wbGVWaWV3ID0gcmVxdWlyZSgnLi4vLi4vZXhhbXBsZS92aWV3JyksXG4gICAgICBCYXNpY1BhcnNlciA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljL3BhcnNlcicpO1xuXG5jb25zdCB7IEJhc2ljTGV4ZXIgfSA9IGxleGVycztcblxuY2xhc3MgQmFzaWNFeGFtcGxlVmlldyBleHRlbmRzIEV4YW1wbGVWaWV3IHtcbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgTGV4ZXIgPSBCYXNpY0xleGVyOyAgLy8vXG5cbiAgICByZXR1cm4gTGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgUGFyc2VyID0gQmFzaWNQYXJzZXI7ICAvLy9cblxuICAgIHJldHVybiBQYXJzZXI7XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZSA9ICdCYXNpYyBwYXJzZXIgZXhhbXBsZSc7XG5cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICBnZXRJbml0aWFsQ29udGVudCgpIHtcbiAgICBjb25zdCBpbml0aWFsQ29udGVudCA9ICcxKzIvMyc7XG5cbiAgICByZXR1cm4gaW5pdGlhbENvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRXhhbXBsZVZpZXcuZnJvbVByb3BlcnRpZXMoQmFzaWNFeGFtcGxlVmlldywgcHJvcGVydGllcyk7fVxufVxuXG5PYmplY3QuYXNzaWduKEJhc2ljRXhhbXBsZVZpZXcsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdiYXNpYydcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNFeGFtcGxlVmlldztcbiJdfQ==