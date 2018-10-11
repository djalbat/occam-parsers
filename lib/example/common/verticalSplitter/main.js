'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easylayout = require('easy-layout');

var Splitter = easylayout.Splitter,
    VerticalSplitter = easylayout.VerticalSplitter;

var MainVerticalSplitter = function (_VerticalSplitter) {
  _inherits(MainVerticalSplitter, _VerticalSplitter);

  function MainVerticalSplitter() {
    _classCallCheck(this, MainVerticalSplitter);

    return _possibleConstructorReturn(this, (MainVerticalSplitter.__proto__ || Object.getPrototypeOf(MainVerticalSplitter)).apply(this, arguments));
  }

  _createClass(MainVerticalSplitter, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var afterSizeableElement = true;

      Object.assign(properties, { afterSizeableElement: afterSizeableElement });

      var mainVerticalSplitter = Splitter.fromProperties(MainVerticalSplitter, properties);

      return mainVerticalSplitter;
    }
  }]);

  return MainVerticalSplitter;
}(VerticalSplitter);

Object.assign(MainVerticalSplitter, {
  defaultProperties: {
    className: 'main'
  }
});

module.exports = MainVerticalSplitter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlL2NvbW1vbi92ZXJ0aWNhbFNwbGl0dGVyL21haW4uanMiXSwibmFtZXMiOlsiZWFzeWxheW91dCIsInJlcXVpcmUiLCJTcGxpdHRlciIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJNYWluVmVydGljYWxTcGxpdHRlciIsInByb3BlcnRpZXMiLCJhZnRlclNpemVhYmxlRWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsIm1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiZnJvbVByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxhQUFSLENBQW5COztJQUVRQyxRLEdBQStCRixVLENBQS9CRSxRO0lBQVVDLGdCLEdBQXFCSCxVLENBQXJCRyxnQjs7SUFFWkMsb0I7Ozs7Ozs7Ozs7O21DQUNrQkMsVSxFQUFZO0FBQ2hDLFVBQU1DLHVCQUF1QixJQUE3Qjs7QUFFQUMsYUFBT0MsTUFBUCxDQUFjSCxVQUFkLEVBQTBCLEVBQUVDLDBDQUFGLEVBQTFCOztBQUVBLFVBQU1HLHVCQUF1QlAsU0FBU1EsY0FBVCxDQUF3Qk4sb0JBQXhCLEVBQThDQyxVQUE5QyxDQUE3Qjs7QUFFQSxhQUFPSSxvQkFBUDtBQUNEOzs7O0VBVGdDTixnQjs7QUFZbkNJLE9BQU9DLE1BQVAsQ0FBY0osb0JBQWQsRUFBb0M7QUFDbENPLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRGUsQ0FBcEM7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUJWLG9CQUFqQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5bGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgeyBTcGxpdHRlciwgVmVydGljYWxTcGxpdHRlciB9ID0gZWFzeWxheW91dDtcblxuY2xhc3MgTWFpblZlcnRpY2FsU3BsaXR0ZXIgZXh0ZW5kcyBWZXJ0aWNhbFNwbGl0dGVyIHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBhZnRlclNpemVhYmxlRWxlbWVudCA9IHRydWU7XG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHsgYWZ0ZXJTaXplYWJsZUVsZW1lbnQgfSk7XG5cbiAgICBjb25zdCBtYWluVmVydGljYWxTcGxpdHRlciA9IFNwbGl0dGVyLmZyb21Qcm9wZXJ0aWVzKE1haW5WZXJ0aWNhbFNwbGl0dGVyLCBwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBtYWluVmVydGljYWxTcGxpdHRlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKE1haW5WZXJ0aWNhbFNwbGl0dGVyLCB7XG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnbWFpbidcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFpblZlcnRpY2FsU3BsaXR0ZXI7XG4iXX0=