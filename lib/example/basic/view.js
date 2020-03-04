'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexers = require('occam-lexers');

var ExampleView = require('../../example/view'),
    BasicParser = require('../../basic/parser');

var BasicLexer = lexers.BasicLexer;

var BasicExampleView = /*#__PURE__*/function (_ExampleView) {
  _inherits(BasicExampleView, _ExampleView);

  function BasicExampleView() {
    _classCallCheck(this, BasicExampleView);

    return _possibleConstructorReturn(this, _getPrototypeOf(BasicExampleView).apply(this, arguments));
  }

  _createClass(BasicExampleView, [{
    key: "getTitle",
    value: function getTitle() {
      var title = 'Basic parser example';
      return title;
    }
  }, {
    key: "getLexer",
    value: function getLexer() {
      var Lexer = BasicLexer; ///

      return Lexer;
    }
  }, {
    key: "getParser",
    value: function getParser() {
      var Parser = BasicParser; ///

      return Parser;
    }
  }, {
    key: "getInitialContent",
    value: function getInitialContent() {
      var initialContent = '(1+2)/3';
      return initialContent;
    }
  }], [{
    key: "fromProperties",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkV4YW1wbGVWaWV3IiwiQmFzaWNQYXJzZXIiLCJCYXNpY0xleGVyIiwiQmFzaWNFeGFtcGxlVmlldyIsInRpdGxlIiwiTGV4ZXIiLCJQYXJzZXIiLCJpbml0aWFsQ29udGVudCIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF0Qjs7QUFFQSxJQUFNQyxXQUFXLEdBQUdELE9BQU8sQ0FBQyxvQkFBRCxDQUEzQjtBQUFBLElBQ01FLFdBQVcsR0FBR0YsT0FBTyxDQUFDLG9CQUFELENBRDNCOztJQUdRRyxVLEdBQWVKLE0sQ0FBZkksVTs7SUFFRkMsZ0I7Ozs7Ozs7Ozs7OytCQUNPO0FBQ1QsVUFBTUMsS0FBSyxHQUFHLHNCQUFkO0FBRUEsYUFBT0EsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNQyxLQUFLLEdBQUdILFVBQWQsQ0FEUyxDQUNrQjs7QUFFM0IsYUFBT0csS0FBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNQyxNQUFNLEdBQUdMLFdBQWYsQ0FEVSxDQUNtQjs7QUFFN0IsYUFBT0ssTUFBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1DLGNBQWMsR0FBRyxTQUF2QjtBQUVBLGFBQU9BLGNBQVA7QUFDRDs7O21DQUVxQkMsVSxFQUFZO0FBQUUsYUFBT1IsV0FBVyxDQUFDUyxjQUFaLENBQTJCTixnQkFBM0IsRUFBNkNLLFVBQTdDLENBQVA7QUFBaUU7Ozs7RUF6QnhFUixXOztBQTRCL0JVLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUixnQkFBZCxFQUFnQztBQUM5QlMsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRTtBQURNO0FBRFcsQ0FBaEM7QUFNQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCWixnQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBFeGFtcGxlVmlldyA9IHJlcXVpcmUoJy4uLy4uL2V4YW1wbGUvdmlldycpLFxuICAgICAgQmFzaWNQYXJzZXIgPSByZXF1aXJlKCcuLi8uLi9iYXNpYy9wYXJzZXInKTtcblxuY29uc3QgeyBCYXNpY0xleGVyIH0gPSBsZXhlcnM7XG5cbmNsYXNzIEJhc2ljRXhhbXBsZVZpZXcgZXh0ZW5kcyBFeGFtcGxlVmlldyB7XG4gIGdldFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gJ0Jhc2ljIHBhcnNlciBleGFtcGxlJztcblxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIGdldExleGVyKCkge1xuICAgIGNvbnN0IExleGVyID0gQmFzaWNMZXhlcjsgIC8vL1xuXG4gICAgcmV0dXJuIExleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIGNvbnN0IFBhcnNlciA9IEJhc2ljUGFyc2VyOyAgLy8vXG5cbiAgICByZXR1cm4gUGFyc2VyO1xuICB9XG5cbiAgZ2V0SW5pdGlhbENvbnRlbnQoKSB7XG4gICAgY29uc3QgaW5pdGlhbENvbnRlbnQgPSAnKDErMikvMyc7XG5cbiAgICByZXR1cm4gaW5pdGlhbENvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRXhhbXBsZVZpZXcuZnJvbVByb3BlcnRpZXMoQmFzaWNFeGFtcGxlVmlldywgcHJvcGVydGllcyk7fVxufVxuXG5PYmplY3QuYXNzaWduKEJhc2ljRXhhbXBsZVZpZXcsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdiYXNpYydcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNFeGFtcGxlVmlldztcbiJdfQ==