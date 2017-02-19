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

      return errorNode;
    }
  }]);

  return ErrorNode;
}(NonTerminalNode);

module.exports = ErrorNode;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9lcnJvci5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiRXJyb3JOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwidGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiZmlyc3ROb2RlIiwiZXJyb3JOb2RlIiwiZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxrQkFBa0JDLFFBQVEsZ0JBQVIsQ0FBdEI7O0lBRU1DLFM7Ozs7Ozs7Ozs7OzBDQUNrQjtBQUNwQixVQUFJQyxhQUFhLEtBQUtDLGFBQUwsRUFBakI7QUFBQSxVQUNJQyxpQkFBaUJDLE1BQU1ILFVBQU4sQ0FEckI7QUFBQSxVQUVJSSxlQUFlRixjQUZuQjtBQUFBLFVBRW9DO0FBQ2hDRyx5QkFBbUJELGFBQWFFLG1CQUFiLEVBSHZCOztBQUtBLGFBQU9ELGdCQUFQO0FBQ0Q7OzsrQ0FFaUNFLEssRUFBT0MsYyxFQUFnQjtBQUN2RCxVQUFJQyxZQUFZTixNQUFNSSxLQUFOLENBQWhCO0FBQUEsVUFDSVAsYUFBYSxDQUFDUyxTQUFELENBRGpCO0FBQUEsVUFDOEI7QUFDMUJDLGtCQUFZYixnQkFBZ0JjLCtCQUFoQixDQUFnREgsY0FBaEQsRUFBZ0VSLFVBQWhFLEVBQTRFRCxTQUE1RSxDQUZoQjs7QUFJQSxhQUFPVyxTQUFQO0FBQ0Q7Ozs7RUFoQnFCYixlOztBQW1CeEJlLE9BQU9DLE9BQVAsR0FBaUJkLFNBQWpCOztBQUVBLFNBQVNJLEtBQVQsQ0FBZVcsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRXJyb3JOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIHZhciBmaXJzdE5vZGUgPSBmaXJzdChub2RlcyksXG4gICAgICAgIGNoaWxkTm9kZXMgPSBbZmlyc3ROb2RlXSwgLy8vXG4gICAgICAgIGVycm9yTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzLCBFcnJvck5vZGUpO1xuXG4gICAgcmV0dXJuIGVycm9yTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVycm9yTm9kZTtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=