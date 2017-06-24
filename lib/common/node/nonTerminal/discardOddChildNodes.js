'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../util/array'),
    NonTerminalNode = require('../nonTerminal');

var DiscardOddChildNodes = function (_NonTerminalNode) {
  _inherits(DiscardOddChildNodes, _NonTerminalNode);

  function DiscardOddChildNodes() {
    _classCallCheck(this, DiscardOddChildNodes);

    return _possibleConstructorReturn(this, (DiscardOddChildNodes.__proto__ || Object.getPrototypeOf(DiscardOddChildNodes)).apply(this, arguments));
  }

  _createClass(DiscardOddChildNodes, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = arrayUtil.discardOdd(nodes),
          ///
      discardOddChildNodes = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, DiscardOddChildNodes);

      return discardOddChildNodes;
    }
  }]);

  return DiscardOddChildNodes;
}(NonTerminalNode);

module.exports = DiscardOddChildNodes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9kaXNjYXJkT2RkQ2hpbGROb2Rlcy5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiRGlzY2FyZE9kZENoaWxkTm9kZXMiLCJub2RlcyIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsImRpc2NhcmRPZGQiLCJkaXNjYXJkT2RkQ2hpbGROb2RlcyIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEscUJBQVIsQ0FBbEI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsZ0JBQVIsQ0FEeEI7O0lBR01FLG9COzs7Ozs7Ozs7Ozt5Q0FDd0JDLEssRUFBT0MsUSxFQUFVO0FBQzNDLFVBQU1DLGFBQWFOLFVBQVVPLFVBQVYsQ0FBcUJILEtBQXJCLENBQW5CO0FBQUEsVUFBZ0Q7QUFDMUNJLDZCQUF1Qk4sZ0JBQWdCTyx5QkFBaEIsQ0FBMENKLFFBQTFDLEVBQW9EQyxVQUFwRCxFQUFnRUgsb0JBQWhFLENBRDdCOztBQUdBLGFBQU9LLG9CQUFQO0FBQ0Q7Ozs7RUFOZ0NOLGU7O0FBU25DUSxPQUFPQyxPQUFQLEdBQWlCUixvQkFBakIiLCJmaWxlIjoiZGlzY2FyZE9kZENoaWxkTm9kZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIERpc2NhcmRPZGRDaGlsZE5vZGVzIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBhcnJheVV0aWwuZGlzY2FyZE9kZChub2RlcyksIC8vL1xuICAgICAgICAgIGRpc2NhcmRPZGRDaGlsZE5vZGVzID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMsIERpc2NhcmRPZGRDaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBkaXNjYXJkT2RkQ2hpbGROb2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc2NhcmRPZGRDaGlsZE5vZGVzO1xuIl19