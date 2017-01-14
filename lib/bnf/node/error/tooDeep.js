'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorNode = require('../error');

var MESSAGE = 'The parse tree is too deep. This is likely caused by left recursion.';

var TooDeepErrorNode = function (_ErrorNode) {
  _inherits(TooDeepErrorNode, _ErrorNode);

  function TooDeepErrorNode() {
    _classCallCheck(this, TooDeepErrorNode);

    var message = MESSAGE;

    return _possibleConstructorReturn(this, (TooDeepErrorNode.__proto__ || Object.getPrototypeOf(TooDeepErrorNode)).call(this, message));
  }

  return TooDeepErrorNode;
}(ErrorNode);

module.exports = TooDeepErrorNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvbm9kZS9lcnJvci90b29EZWVwLmpzIl0sIm5hbWVzIjpbIkVycm9yTm9kZSIsInJlcXVpcmUiLCJNRVNTQUdFIiwiVG9vRGVlcEVycm9yTm9kZSIsIm1lc3NhZ2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFJQSxZQUFZQyxRQUFRLFVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsVUFBVSxzRUFBaEI7O0lBRU1DLGdCOzs7QUFDSiw4QkFBYztBQUFBOztBQUNaLFFBQUlDLFVBQVVGLE9BQWQ7O0FBRFksK0hBR05FLE9BSE07QUFJYjs7O0VBTDRCSixTOztBQVEvQkssT0FBT0MsT0FBUCxHQUFpQkgsZ0JBQWpCIiwiZmlsZSI6InRvb0RlZXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBFcnJvck5vZGUgPSByZXF1aXJlKCcuLi9lcnJvcicpO1xuXG5jb25zdCBNRVNTQUdFID0gJ1RoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwLiBUaGlzIGlzIGxpa2VseSBjYXVzZWQgYnkgbGVmdCByZWN1cnNpb24uJztcblxuY2xhc3MgVG9vRGVlcEVycm9yTm9kZSBleHRlbmRzIEVycm9yTm9kZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHZhciBtZXNzYWdlID0gTUVTU0FHRTtcblxuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9vRGVlcEVycm9yTm9kZTtcbiJdfQ==