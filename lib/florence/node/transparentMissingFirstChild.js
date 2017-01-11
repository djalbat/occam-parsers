'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../bnf/node/nonTerminal');

var TransparentMissingFirstChildNode = function (_NonTerminalNode) {
  _inherits(TransparentMissingFirstChildNode, _NonTerminalNode);

  function TransparentMissingFirstChildNode() {
    _classCallCheck(this, TransparentMissingFirstChildNode);

    return _possibleConstructorReturn(this, (TransparentMissingFirstChildNode.__proto__ || Object.getPrototypeOf(TransparentMissingFirstChildNode)).apply(this, arguments));
  }

  _createClass(TransparentMissingFirstChildNode, null, [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var childNodes = nodes.slice(1);

      nodes = childNodes;

      return nodes;
    }
  }]);

  return TransparentMissingFirstChildNode;
}(NonTerminalNode);

module.exports = TransparentMissingFirstChildNode;

function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS9ub2RlL3RyYW5zcGFyZW50TWlzc2luZ0ZpcnN0Q2hpbGQuanMiXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIlRyYW5zcGFyZW50TWlzc2luZ0ZpcnN0Q2hpbGROb2RlIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImNoaWxkTm9kZXMiLCJzbGljZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZWNvbmQiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxrQkFBa0JDLFFBQVEsNEJBQVIsQ0FBdEI7O0lBRU1DLGdDOzs7Ozs7Ozs7Ozs4QkFDYUMsSyxFQUFPQyxjLEVBQWdCO0FBQ3RDLFVBQUlDLGFBQWFGLE1BQU1HLEtBQU4sQ0FBWSxDQUFaLENBQWpCOztBQUVBSCxjQUFRRSxVQUFSOztBQUVBLGFBQU9GLEtBQVA7QUFDRDs7OztFQVA0Q0gsZTs7QUFVL0NPLE9BQU9DLE9BQVAsR0FBaUJOLGdDQUFqQjs7QUFFQSxTQUFTTyxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InRyYW5zcGFyZW50TWlzc2luZ0ZpcnN0Q2hpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9ibmYvbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBUcmFuc3BhcmVudE1pc3NpbmdGaXJzdENoaWxkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBub2Rlcy5zbGljZSgxKTtcblxuICAgIG5vZGVzID0gY2hpbGROb2RlcztcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zcGFyZW50TWlzc2luZ0ZpcnN0Q2hpbGROb2RlO1xuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iXX0=