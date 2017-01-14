'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../bnf/node/nonTerminal');

var TransparentThenDiscardFirstNode = function (_NonTerminalNode) {
  _inherits(TransparentThenDiscardFirstNode, _NonTerminalNode);

  function TransparentThenDiscardFirstNode() {
    _classCallCheck(this, TransparentThenDiscardFirstNode);

    return _possibleConstructorReturn(this, (TransparentThenDiscardFirstNode.__proto__ || Object.getPrototypeOf(TransparentThenDiscardFirstNode)).apply(this, arguments));
  }

  _createClass(TransparentThenDiscardFirstNode, null, [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      nodes = nodes.slice(1);

      return nodes;
    }
  }]);

  return TransparentThenDiscardFirstNode;
}(NonTerminalNode);

module.exports = TransparentThenDiscardFirstNode;

function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90cmFuc3BhcmVudFRoZW5EaXNjYXJkRmlyc3QuanMiXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIlRyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdE5vZGUiLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwic2xpY2UiLCJtb2R1bGUiLCJleHBvcnRzIiwic2Vjb25kIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsa0JBQWtCQyxRQUFRLDRCQUFSLENBQXRCOztJQUVNQywrQjs7Ozs7Ozs7Ozs7OEJBQ2FDLEssRUFBT0MsYyxFQUFnQjtBQUN0Q0QsY0FBUUEsTUFBTUUsS0FBTixDQUFZLENBQVosQ0FBUjs7QUFFQSxhQUFPRixLQUFQO0FBQ0Q7Ozs7RUFMMkNILGU7O0FBUTlDTSxPQUFPQyxPQUFQLEdBQWlCTCwrQkFBakI7O0FBRUEsU0FBU00sTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJ0cmFuc3BhcmVudFRoZW5EaXNjYXJkRmlyc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9ibmYvbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBUcmFuc3BhcmVudFRoZW5EaXNjYXJkRmlyc3ROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBub2RlcyA9IG5vZGVzLnNsaWNlKDEpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNwYXJlbnRUaGVuRGlzY2FyZEZpcnN0Tm9kZTtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19