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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9lcnJvci5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiRXJyb3JOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwidGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiZmlyc3ROb2RlIiwiZXJyb3JOb2RlIiwiZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0JDLFFBQVEsZ0JBQVIsQ0FBeEI7O0lBRU1DLFM7Ozs7Ozs7Ozs7OzBDQUNrQjtBQUNwQixVQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxpQkFBaUJDLE1BQU1ILFVBQU4sQ0FEdkI7QUFBQSxVQUVNSSxlQUFlRixjQUZyQjtBQUFBLFVBRXNDO0FBQ2hDRyx5QkFBbUJELGFBQWFFLG1CQUFiLEVBSHpCOztBQUtBLGFBQU9ELGdCQUFQO0FBQ0Q7OzsrQ0FFaUNFLEssRUFBT0MsYyxFQUFnQjtBQUN2RCxVQUFNQyxZQUFZTixNQUFNSSxLQUFOLENBQWxCO0FBQUEsVUFDTVAsYUFBYSxDQUFDUyxTQUFELENBRG5CO0FBQUEsVUFDZ0M7QUFDMUJDLGtCQUFZYixnQkFBZ0JjLCtCQUFoQixDQUFnREgsY0FBaEQsRUFBZ0VSLFVBQWhFLEVBQTRFRCxTQUE1RSxDQUZsQjs7QUFJQSxhQUFPVyxTQUFQO0FBQ0Q7Ozs7RUFoQnFCYixlOztBQW1CeEJlLE9BQU9DLE9BQVAsR0FBaUJkLFNBQWpCOztBQUVBLFNBQVNJLEtBQVQsQ0FBZVcsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBFcnJvck5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBmaXJzdE5vZGUgPSBmaXJzdChub2RlcyksXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtmaXJzdE5vZGVdLCAvLy9cbiAgICAgICAgICBlcnJvck5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2Rlcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgRXJyb3JOb2RlKTtcblxuICAgIHJldHVybiBlcnJvck5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcnJvck5vZGU7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19