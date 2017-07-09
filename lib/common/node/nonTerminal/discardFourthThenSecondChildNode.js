'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../util/array'),
    NonTerminalNode = require('../nonTerminal');

var DiscardFourthThenSecondChildNode = function (_NonTerminalNode) {
  _inherits(DiscardFourthThenSecondChildNode, _NonTerminalNode);

  function DiscardFourthThenSecondChildNode() {
    _classCallCheck(this, DiscardFourthThenSecondChildNode);

    return _possibleConstructorReturn(this, (DiscardFourthThenSecondChildNode.__proto__ || Object.getPrototypeOf(DiscardFourthThenSecondChildNode)).apply(this, arguments));
  }

  _createClass(DiscardFourthThenSecondChildNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = arrayUtil.discardFourthThenSecond(nodes),
          discardFourthThenSecondChildNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, DiscardFourthThenSecondChildNode);

      return discardFourthThenSecondChildNode;
    }
  }]);

  return DiscardFourthThenSecondChildNode;
}(NonTerminalNode);

module.exports = DiscardFourthThenSecondChildNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9kaXNjYXJkRm91cnRoVGhlblNlY29uZENoaWxkTm9kZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiRGlzY2FyZEZvdXJ0aFRoZW5TZWNvbmRDaGlsZE5vZGUiLCJub2RlcyIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsImRpc2NhcmRGb3VydGhUaGVuU2Vjb25kIiwiZGlzY2FyZEZvdXJ0aFRoZW5TZWNvbmRDaGlsZE5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLHFCQUFSLENBQWxCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLGdCQUFSLENBRHhCOztJQUdNRSxnQzs7Ozs7Ozs7Ozs7eUNBQ3dCQyxLLEVBQU9DLFEsRUFBVTtBQUMzQyxVQUFNQyxhQUFhTixVQUFVTyx1QkFBVixDQUFrQ0gsS0FBbEMsQ0FBbkI7QUFBQSxVQUNNSSxtQ0FBbUNOLGdCQUFnQk8seUJBQWhCLENBQTBDSixRQUExQyxFQUFvREMsVUFBcEQsRUFBZ0VILGdDQUFoRSxDQUR6Qzs7QUFHQSxhQUFPSyxnQ0FBUDtBQUNEOzs7O0VBTjRDTixlOztBQVMvQ1EsT0FBT0MsT0FBUCxHQUFpQlIsZ0NBQWpCIiwiZmlsZSI6ImRpc2NhcmRGb3VydGhUaGVuU2Vjb25kQ2hpbGROb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBEaXNjYXJkRm91cnRoVGhlblNlY29uZENoaWxkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRGb3VydGhUaGVuU2Vjb25kKG5vZGVzKSxcbiAgICAgICAgICBkaXNjYXJkRm91cnRoVGhlblNlY29uZENoaWxkTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBEaXNjYXJkRm91cnRoVGhlblNlY29uZENoaWxkTm9kZSk7XG5cbiAgICByZXR1cm4gZGlzY2FyZEZvdXJ0aFRoZW5TZWNvbmRDaGlsZE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXNjYXJkRm91cnRoVGhlblNlY29uZENoaWxkTm9kZTtcbiJdfQ==