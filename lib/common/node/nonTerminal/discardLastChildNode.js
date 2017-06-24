'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../util/array'),
    NonTerminalNode = require('../nonTerminal');

var DiscardLastChildNode = function (_NonTerminalNode) {
  _inherits(DiscardLastChildNode, _NonTerminalNode);

  function DiscardLastChildNode() {
    _classCallCheck(this, DiscardLastChildNode);

    return _possibleConstructorReturn(this, (DiscardLastChildNode.__proto__ || Object.getPrototypeOf(DiscardLastChildNode)).apply(this, arguments));
  }

  _createClass(DiscardLastChildNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = arrayUtil.discardLast(nodes),
          ///
      discardLastChildNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, DiscardLastChildNode);

      return discardLastChildNode;
    }
  }]);

  return DiscardLastChildNode;
}(NonTerminalNode);

module.exports = DiscardLastChildNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9kaXNjYXJkTGFzdENoaWxkTm9kZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiRGlzY2FyZExhc3RDaGlsZE5vZGUiLCJub2RlcyIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsImRpc2NhcmRMYXN0IiwiZGlzY2FyZExhc3RDaGlsZE5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLHFCQUFSLENBQWxCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLGdCQUFSLENBRHhCOztJQUdNRSxvQjs7Ozs7Ozs7Ozs7eUNBQ3dCQyxLLEVBQU9DLFEsRUFBVTtBQUMzQyxVQUFNQyxhQUFhTixVQUFVTyxXQUFWLENBQXNCSCxLQUF0QixDQUFuQjtBQUFBLFVBQWlEO0FBQzNDSSw2QkFBdUJOLGdCQUFnQk8seUJBQWhCLENBQTBDSixRQUExQyxFQUFvREMsVUFBcEQsRUFBZ0VILG9CQUFoRSxDQUQ3Qjs7QUFHQSxhQUFPSyxvQkFBUDtBQUNEOzs7O0VBTmdDTixlOztBQVNuQ1EsT0FBT0MsT0FBUCxHQUFpQlIsb0JBQWpCIiwiZmlsZSI6ImRpc2NhcmRMYXN0Q2hpbGROb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBEaXNjYXJkTGFzdENoaWxkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRMYXN0KG5vZGVzKSwgLy8vXG4gICAgICAgICAgZGlzY2FyZExhc3RDaGlsZE5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcywgRGlzY2FyZExhc3RDaGlsZE5vZGUpO1xuXG4gICAgcmV0dXJuIGRpc2NhcmRMYXN0Q2hpbGROb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlzY2FyZExhc3RDaGlsZE5vZGU7XG4iXX0=