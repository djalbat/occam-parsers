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

var easylayout = require("easy-layout");

var Splitter = easylayout.Splitter,
    VerticalSplitter = easylayout.VerticalSplitter;

var MainVerticalSplitter = /*#__PURE__*/function (_VerticalSplitter) {
  _inherits(MainVerticalSplitter, _VerticalSplitter);

  function MainVerticalSplitter() {
    _classCallCheck(this, MainVerticalSplitter);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainVerticalSplitter).apply(this, arguments));
  }

  _createClass(MainVerticalSplitter, null, [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var afterSizeableElement = true;
      Object.assign(properties, {
        afterSizeableElement: afterSizeableElement
      });
      var mainVerticalSplitter = Splitter.fromProperties(MainVerticalSplitter, properties);
      return mainVerticalSplitter;
    }
  }]);

  return MainVerticalSplitter;
}(VerticalSplitter);

Object.assign(MainVerticalSplitter, {
  defaultProperties: {
    className: "main"
  }
});
module.exports = MainVerticalSplitter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZWFzeWxheW91dCIsInJlcXVpcmUiLCJTcGxpdHRlciIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJNYWluVmVydGljYWxTcGxpdHRlciIsInByb3BlcnRpZXMiLCJhZnRlclNpemVhYmxlRWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsIm1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiZnJvbVByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBR0MsT0FBTyxDQUFDLGFBQUQsQ0FBMUI7O0lBRVFDLFEsR0FBK0JGLFUsQ0FBL0JFLFE7SUFBVUMsZ0IsR0FBcUJILFUsQ0FBckJHLGdCOztJQUVaQyxvQjs7Ozs7Ozs7Ozs7bUNBQ2tCQyxVLEVBQVk7QUFDaEMsVUFBTUMsb0JBQW9CLEdBQUcsSUFBN0I7QUFFQUMsTUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNILFVBQWQsRUFBMEI7QUFBRUMsUUFBQUEsb0JBQW9CLEVBQXBCQTtBQUFGLE9BQTFCO0FBRUEsVUFBTUcsb0JBQW9CLEdBQUdQLFFBQVEsQ0FBQ1EsY0FBVCxDQUF3Qk4sb0JBQXhCLEVBQThDQyxVQUE5QyxDQUE3QjtBQUVBLGFBQU9JLG9CQUFQO0FBQ0Q7Ozs7RUFUZ0NOLGdCOztBQVluQ0ksTUFBTSxDQUFDQyxNQUFQLENBQWNKLG9CQUFkLEVBQW9DO0FBQ2xDTyxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsU0FBUyxFQUFFO0FBRE07QUFEZSxDQUFwQztBQU1BQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJWLG9CQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBlYXN5bGF5b3V0ID0gcmVxdWlyZShcImVhc3ktbGF5b3V0XCIpO1xuXG5jb25zdCB7IFNwbGl0dGVyLCBWZXJ0aWNhbFNwbGl0dGVyIH0gPSBlYXN5bGF5b3V0O1xuXG5jbGFzcyBNYWluVmVydGljYWxTcGxpdHRlciBleHRlbmRzIFZlcnRpY2FsU3BsaXR0ZXIge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGFmdGVyU2l6ZWFibGVFbGVtZW50ID0gdHJ1ZTtcblxuICAgIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywgeyBhZnRlclNpemVhYmxlRWxlbWVudCB9KTtcblxuICAgIGNvbnN0IG1haW5WZXJ0aWNhbFNwbGl0dGVyID0gU3BsaXR0ZXIuZnJvbVByb3BlcnRpZXMoTWFpblZlcnRpY2FsU3BsaXR0ZXIsIHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIG1haW5WZXJ0aWNhbFNwbGl0dGVyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTWFpblZlcnRpY2FsU3BsaXR0ZXIsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6IFwibWFpblwiXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1haW5WZXJ0aWNhbFNwbGl0dGVyO1xuIl19