'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../bnf/node/nonTerminal');

var DiscardFirstChildNode = function (_NonTerminalNode) {
  _inherits(DiscardFirstChildNode, _NonTerminalNode);

  function DiscardFirstChildNode() {
    _classCallCheck(this, DiscardFirstChildNode);

    return _possibleConstructorReturn(this, (DiscardFirstChildNode.__proto__ || Object.getPrototypeOf(DiscardFirstChildNode)).apply(this, arguments));
  }

  _createClass(DiscardFirstChildNode, null, [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var secondNodeOnwards = secondOnwards(nodes),
          childNodes = secondNodeOnwards,
          ///
      discardFirstChildNode = new DiscardFirstChildNode(childNodes, productionName);

      nodes = [discardFirstChildNode]; ///

      return nodes;
    }
  }]);

  return DiscardFirstChildNode;
}(NonTerminalNode);

module.exports = DiscardFirstChildNode;

function secondOnwards(array) {
  return array.slice(1);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9kaXNjYXJkRmlyc3RDaGlsZC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiRGlzY2FyZEZpcnN0Q2hpbGROb2RlIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsInNlY29uZE5vZGVPbndhcmRzIiwic2Vjb25kT253YXJkcyIsImNoaWxkTm9kZXMiLCJkaXNjYXJkRmlyc3RDaGlsZE5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiLCJzbGljZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxrQkFBa0JDLFFBQVEsNEJBQVIsQ0FBdEI7O0lBRU1DLHFCOzs7Ozs7Ozs7Ozs4QkFDYUMsSyxFQUFPQyxjLEVBQWdCO0FBQ3RDLFVBQUlDLG9CQUFvQkMsY0FBY0gsS0FBZCxDQUF4QjtBQUFBLFVBQ0lJLGFBQWFGLGlCQURqQjtBQUFBLFVBQ29DO0FBQ2hDRyw4QkFBd0IsSUFBSU4scUJBQUosQ0FBMEJLLFVBQTFCLEVBQXNDSCxjQUF0QyxDQUY1Qjs7QUFJQUQsY0FBUSxDQUFDSyxxQkFBRCxDQUFSLENBTHNDLENBS0w7O0FBRWpDLGFBQU9MLEtBQVA7QUFDRDs7OztFQVRpQ0gsZTs7QUFZcENTLE9BQU9DLE9BQVAsR0FBaUJSLHFCQUFqQjs7QUFFQSxTQUFTSSxhQUFULENBQXVCSyxLQUF2QixFQUE4QjtBQUFFLFNBQU9BLE1BQU1DLEtBQU4sQ0FBWSxDQUFaLENBQVA7QUFBd0IiLCJmaWxlIjoiZGlzY2FyZEZpcnN0Q2hpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9ibmYvbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBEaXNjYXJkRmlyc3RDaGlsZE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIHZhciBzZWNvbmROb2RlT253YXJkcyA9IHNlY29uZE9ud2FyZHMobm9kZXMpLFxuICAgICAgICBjaGlsZE5vZGVzID0gc2Vjb25kTm9kZU9ud2FyZHMsIC8vL1xuICAgICAgICBkaXNjYXJkRmlyc3RDaGlsZE5vZGUgPSBuZXcgRGlzY2FyZEZpcnN0Q2hpbGROb2RlKGNoaWxkTm9kZXMsIHByb2R1Y3Rpb25OYW1lKTtcblxuICAgIG5vZGVzID0gW2Rpc2NhcmRGaXJzdENoaWxkTm9kZV07IC8vL1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlzY2FyZEZpcnN0Q2hpbGROb2RlO1xuXG5mdW5jdGlvbiBzZWNvbmRPbndhcmRzKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuIl19