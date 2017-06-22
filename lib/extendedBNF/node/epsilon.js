'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../common/node/nonTerminal');

var EpsilonNode = function (_NonTerminalNode) {
  _inherits(EpsilonNode, _NonTerminalNode);

  function EpsilonNode() {
    _classCallCheck(this, EpsilonNode);

    return _possibleConstructorReturn(this, (EpsilonNode.__proto__ || Object.getPrototypeOf(EpsilonNode)).apply(this, arguments));
  }

  _createClass(EpsilonNode, [{
    key: 'generatePart',
    value: function generatePart(Parts, noWhitespace) {
      var EpsilonPart = Parts['EpsilonPart'],
          epsilonPart = new EpsilonPart(noWhitespace);

      return epsilonPart;
    }
  }], [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, EpsilonNode);
    }
  }]);

  return EpsilonNode;
}(NonTerminalNode);

module.exports = EpsilonNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL2Vwc2lsb24uanMiXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIkVwc2lsb25Ob2RlIiwiUGFydHMiLCJub1doaXRlc3BhY2UiLCJFcHNpbG9uUGFydCIsImVwc2lsb25QYXJ0Iiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0JDLFFBQVEsK0JBQVIsQ0FBeEI7O0lBRU1DLFc7Ozs7Ozs7Ozs7O2lDQUNTQyxLLEVBQU9DLFksRUFBYztBQUNoQyxVQUFNQyxjQUFjRixNQUFNLGFBQU4sQ0FBcEI7QUFBQSxVQUNNRyxjQUFjLElBQUlELFdBQUosQ0FBZ0JELFlBQWhCLENBRHBCOztBQUdBLGFBQU9FLFdBQVA7QUFDRDs7OytDQUVpQ0MsSyxFQUFPQyxjLEVBQWdCO0FBQUUsYUFBT1IsZ0JBQWdCUywwQkFBaEIsQ0FBMkNGLEtBQTNDLEVBQWtEQyxjQUFsRCxFQUFrRU4sV0FBbEUsQ0FBUDtBQUF3Rjs7OztFQVIzSEYsZTs7QUFXMUJVLE9BQU9DLE9BQVAsR0FBaUJULFdBQWpCIiwiZmlsZSI6ImVwc2lsb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIEVwc2lsb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KFBhcnRzLCBub1doaXRlc3BhY2UpIHtcbiAgICBjb25zdCBFcHNpbG9uUGFydCA9IFBhcnRzWydFcHNpbG9uUGFydCddLFxuICAgICAgICAgIGVwc2lsb25QYXJ0ID0gbmV3IEVwc2lsb25QYXJ0KG5vV2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gZXBzaWxvblBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lLCBFcHNpbG9uTm9kZSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcHNpbG9uTm9kZTtcbiJdfQ==