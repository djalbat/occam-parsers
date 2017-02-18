'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../nonTerminal');

var ErrorNode = function (_NonTerminalNode) {
  _inherits(ErrorNode, _NonTerminalNode);

  function ErrorNode() {
    _classCallCheck(this, ErrorNode);

    return _possibleConstructorReturn(this, (ErrorNode.__proto__ || Object.getPrototypeOf(ErrorNode)).apply(this, arguments));
  }

  _createClass(ErrorNode, [{
    key: 'getSignificantToken',
    value: function getSignificantToken() {
      var childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,
          ///
      significantToken = terminalNode.getSignificantToken();

      return significantToken;
    }
  }], [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      var firstNode = first(nodes),
          childNodes = [firstNode],
          ///
      errorNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, ErrorNode);

      nodes = [errorNode]; ///

      return nodes;
    }
  }]);

  return ErrorNode;
}(NonTerminalNode);

module.exports = ErrorNode;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9lcnJvci5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiRXJyb3JOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwidGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiZmlyc3ROb2RlIiwiZXJyb3JOb2RlIiwiZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxrQkFBa0JDLFFBQVEsZ0JBQVIsQ0FBdEI7O0lBRU1DLFM7Ozs7Ozs7Ozs7OzBDQUNrQjtBQUNwQixVQUFJQyxhQUFhLEtBQUtDLGFBQUwsRUFBakI7QUFBQSxVQUNJQyxpQkFBaUJDLE1BQU1ILFVBQU4sQ0FEckI7QUFBQSxVQUVJSSxlQUFlRixjQUZuQjtBQUFBLFVBRW9DO0FBQ2hDRyx5QkFBbUJELGFBQWFFLG1CQUFiLEVBSHZCOztBQUtBLGFBQU9ELGdCQUFQO0FBQ0Q7OzsrQ0FFaUNFLEssRUFBT0MsYyxFQUFnQjtBQUN2RCxVQUFJQyxZQUFZTixNQUFNSSxLQUFOLENBQWhCO0FBQUEsVUFDSVAsYUFBYSxDQUFDUyxTQUFELENBRGpCO0FBQUEsVUFDOEI7QUFDMUJDLGtCQUFZYixnQkFBZ0JjLCtCQUFoQixDQUFnREgsY0FBaEQsRUFBZ0VSLFVBQWhFLEVBQTRFRCxTQUE1RSxDQUZoQjs7QUFJQVEsY0FBUSxDQUFDRyxTQUFELENBQVIsQ0FMdUQsQ0FLbEM7O0FBRXJCLGFBQU9ILEtBQVA7QUFDRDs7OztFQWxCcUJWLGU7O0FBcUJ4QmUsT0FBT0MsT0FBUCxHQUFpQmQsU0FBakI7O0FBRUEsU0FBU0ksS0FBVCxDQUFlVyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBFcnJvck5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdmFyIGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKSxcbiAgICAgICAgY2hpbGROb2RlcyA9IFtmaXJzdE5vZGVdLCAvLy9cbiAgICAgICAgZXJyb3JOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIEVycm9yTm9kZSk7XG5cbiAgICBub2RlcyA9IFtlcnJvck5vZGVdOyAvLy9cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVycm9yTm9kZTtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=