'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EndOfLinePart = require('../part/endOfLine'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var EndOfLineSymbolNode = function (_NonTerminalNode) {
  _inherits(EndOfLineSymbolNode, _NonTerminalNode);

  function EndOfLineSymbolNode() {
    _classCallCheck(this, EndOfLineSymbolNode);

    return _possibleConstructorReturn(this, (EndOfLineSymbolNode.__proto__ || Object.getPrototypeOf(EndOfLineSymbolNode)).apply(this, arguments));
  }

  _createClass(EndOfLineSymbolNode, [{
    key: 'generatePart',
    value: function generatePart(Parts, noWhitespace) {
      var EndOfLinePart = Parts['EndOfLinePart'],
          endOfLinePart = new EndOfLinePart(noWhitespace);

      return endOfLinePart;
    }
  }], [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, EndOfLineSymbolNode);
    }
  }]);

  return EndOfLineSymbolNode;
}(NonTerminalNode);

module.exports = EndOfLineSymbolNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL2VuZE9mTGluZVN5bWJvbC5qcyJdLCJuYW1lcyI6WyJFbmRPZkxpbmVQYXJ0IiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIkVuZE9mTGluZVN5bWJvbE5vZGUiLCJQYXJ0cyIsIm5vV2hpdGVzcGFjZSIsImVuZE9mTGluZVBhcnQiLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxtQkFBUixDQUF0QjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSwrQkFBUixDQUR4Qjs7SUFHTUUsbUI7Ozs7Ozs7Ozs7O2lDQUNTQyxLLEVBQU9DLFksRUFBYztBQUNoQyxVQUFNTCxnQkFBZ0JJLE1BQU0sZUFBTixDQUF0QjtBQUFBLFVBQ01FLGdCQUFnQixJQUFJTixhQUFKLENBQWtCSyxZQUFsQixDQUR0Qjs7QUFHQSxhQUFPQyxhQUFQO0FBQ0Q7OzsrQ0FFaUNDLEssRUFBT0MsYyxFQUFnQjtBQUFFLGFBQU9OLGdCQUFnQk8sMEJBQWhCLENBQTJDRixLQUEzQyxFQUFrREMsY0FBbEQsRUFBa0VMLG1CQUFsRSxDQUFQO0FBQWdHOzs7O0VBUjNIRCxlOztBQVdsQ1EsT0FBT0MsT0FBUCxHQUFpQlIsbUJBQWpCIiwiZmlsZSI6ImVuZE9mTGluZVN5bWJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRW5kT2ZMaW5lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvZW5kT2ZMaW5lJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBFbmRPZkxpbmVTeW1ib2xOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KFBhcnRzLCBub1doaXRlc3BhY2UpIHtcbiAgICBjb25zdCBFbmRPZkxpbmVQYXJ0ID0gUGFydHNbJ0VuZE9mTGluZVBhcnQnXSxcbiAgICAgICAgICBlbmRPZkxpbmVQYXJ0ID0gbmV3IEVuZE9mTGluZVBhcnQobm9XaGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiBlbmRPZkxpbmVQYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSwgRW5kT2ZMaW5lU3ltYm9sTm9kZSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVTeW1ib2xOb2RlO1xuIl19