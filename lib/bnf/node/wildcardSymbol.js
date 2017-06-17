'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WildcardPart = require('../part/wildcard'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var WildcardSymbolNode = function (_NonTerminalNode) {
  _inherits(WildcardSymbolNode, _NonTerminalNode);

  function WildcardSymbolNode() {
    _classCallCheck(this, WildcardSymbolNode);

    return _possibleConstructorReturn(this, (WildcardSymbolNode.__proto__ || Object.getPrototypeOf(WildcardSymbolNode)).apply(this, arguments));
  }

  _createClass(WildcardSymbolNode, [{
    key: 'generatePart',
    value: function generatePart(Parts, noWhitespace) {
      var WildcardPart = Parts['WildcardPart'],
          wildcardPart = new WildcardPart(noWhitespace);

      return wildcardPart;
    }
  }], [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, WildcardSymbolNode);
    }
  }]);

  return WildcardSymbolNode;
}(NonTerminalNode);

module.exports = WildcardSymbolNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS93aWxkY2FyZFN5bWJvbC5qcyJdLCJuYW1lcyI6WyJXaWxkY2FyZFBhcnQiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiV2lsZGNhcmRTeW1ib2xOb2RlIiwiUGFydHMiLCJub1doaXRlc3BhY2UiLCJ3aWxkY2FyZFBhcnQiLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsa0JBQVIsQ0FBckI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsK0JBQVIsQ0FEeEI7O0lBR01FLGtCOzs7Ozs7Ozs7OztpQ0FDU0MsSyxFQUFPQyxZLEVBQWM7QUFDaEMsVUFBTUwsZUFBZUksTUFBTSxjQUFOLENBQXJCO0FBQUEsVUFDTUUsZUFBZSxJQUFJTixZQUFKLENBQWlCSyxZQUFqQixDQURyQjs7QUFHQSxhQUFPQyxZQUFQO0FBQ0Q7OzsrQ0FFaUNDLEssRUFBT0MsYyxFQUFnQjtBQUFFLGFBQU9OLGdCQUFnQk8sMEJBQWhCLENBQTJDRixLQUEzQyxFQUFrREMsY0FBbEQsRUFBa0VMLGtCQUFsRSxDQUFQO0FBQStGOzs7O0VBUjNIRCxlOztBQVdqQ1EsT0FBT0MsT0FBUCxHQUFpQlIsa0JBQWpCIiwiZmlsZSI6IndpbGRjYXJkU3ltYm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBXaWxkY2FyZFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3dpbGRjYXJkJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBXaWxkY2FyZFN5bWJvbE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQoUGFydHMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IFdpbGRjYXJkUGFydCA9IFBhcnRzWydXaWxkY2FyZFBhcnQnXSxcbiAgICAgICAgICB3aWxkY2FyZFBhcnQgPSBuZXcgV2lsZGNhcmRQYXJ0KG5vV2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gd2lsZGNhcmRQYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSwgV2lsZGNhcmRTeW1ib2xOb2RlKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdpbGRjYXJkU3ltYm9sTm9kZTtcbiJdfQ==