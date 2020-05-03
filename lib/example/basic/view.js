"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexers = require("occam-lexers");

var ExampleView = require("../../example/view"),
    BasicParser = require("../../basic/parser");

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
      var title = "Basic parser example";
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
      var initialContent = "(1+2)/3";
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
    className: "basic"
  }
});
module.exports = BasicExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkV4YW1wbGVWaWV3IiwiQmFzaWNQYXJzZXIiLCJCYXNpY0xleGVyIiwiQmFzaWNFeGFtcGxlVmlldyIsInRpdGxlIiwiTGV4ZXIiLCJQYXJzZXIiLCJpbml0aWFsQ29udGVudCIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF0Qjs7QUFFQSxJQUFNQyxXQUFXLEdBQUdELE9BQU8sQ0FBQyxvQkFBRCxDQUEzQjtBQUFBLElBQ01FLFdBQVcsR0FBR0YsT0FBTyxDQUFDLG9CQUFELENBRDNCOztJQUdRRyxVLEdBQWVKLE0sQ0FBZkksVTs7SUFFRkMsZ0I7Ozs7Ozs7Ozs7OytCQUNPO0FBQ1QsVUFBTUMsS0FBSyxHQUFHLHNCQUFkO0FBRUEsYUFBT0EsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNQyxLQUFLLEdBQUdILFVBQWQsQ0FEUyxDQUNrQjs7QUFFM0IsYUFBT0csS0FBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNQyxNQUFNLEdBQUdMLFdBQWYsQ0FEVSxDQUNtQjs7QUFFN0IsYUFBT0ssTUFBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1DLGNBQWMsR0FBRyxTQUF2QjtBQUVBLGFBQU9BLGNBQVA7QUFDRDs7O21DQUVxQkMsVSxFQUFZO0FBQUUsYUFBT1IsV0FBVyxDQUFDUyxjQUFaLENBQTJCTixnQkFBM0IsRUFBNkNLLFVBQTdDLENBQVA7QUFBaUU7Ozs7RUF6QnhFUixXOztBQTRCL0JVLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUixnQkFBZCxFQUFnQztBQUM5QlMsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRTtBQURNO0FBRFcsQ0FBaEM7QUFNQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCWixnQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZShcIm9jY2FtLWxleGVyc1wiKTtcblxuY29uc3QgRXhhbXBsZVZpZXcgPSByZXF1aXJlKFwiLi4vLi4vZXhhbXBsZS92aWV3XCIpLFxuICAgICAgQmFzaWNQYXJzZXIgPSByZXF1aXJlKFwiLi4vLi4vYmFzaWMvcGFyc2VyXCIpO1xuXG5jb25zdCB7IEJhc2ljTGV4ZXIgfSA9IGxleGVycztcblxuY2xhc3MgQmFzaWNFeGFtcGxlVmlldyBleHRlbmRzIEV4YW1wbGVWaWV3IHtcbiAgZ2V0VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBcIkJhc2ljIHBhcnNlciBleGFtcGxlXCI7XG5cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBMZXhlciA9IEJhc2ljTGV4ZXI7ICAvLy9cblxuICAgIHJldHVybiBMZXhlcjtcbiAgfVxuXG4gIGdldFBhcnNlcigpIHtcbiAgICBjb25zdCBQYXJzZXIgPSBCYXNpY1BhcnNlcjsgIC8vL1xuXG4gICAgcmV0dXJuIFBhcnNlcjtcbiAgfVxuXG4gIGdldEluaXRpYWxDb250ZW50KCkge1xuICAgIGNvbnN0IGluaXRpYWxDb250ZW50ID0gXCIoMSsyKS8zXCI7XG5cbiAgICByZXR1cm4gaW5pdGlhbENvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRXhhbXBsZVZpZXcuZnJvbVByb3BlcnRpZXMoQmFzaWNFeGFtcGxlVmlldywgcHJvcGVydGllcyk7fVxufVxuXG5PYmplY3QuYXNzaWduKEJhc2ljRXhhbXBsZVZpZXcsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6IFwiYmFzaWNcIlxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0V4YW1wbGVWaWV3O1xuIl19