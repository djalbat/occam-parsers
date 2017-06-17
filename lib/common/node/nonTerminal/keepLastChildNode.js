'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../util/array'),
    NonTerminalNode = require('../nonTerminal');

var KeepLastChildNode = function (_NonTerminalNode) {
  _inherits(KeepLastChildNode, _NonTerminalNode);

  function KeepLastChildNode() {
    _classCallCheck(this, KeepLastChildNode);

    return _possibleConstructorReturn(this, (KeepLastChildNode.__proto__ || Object.getPrototypeOf(KeepLastChildNode)).apply(this, arguments));
  }

  _createClass(KeepLastChildNode, null, [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      var childNodes = arrayUtil.keepLast(nodes),
          keepLastChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, KeepLastChildNode);

      return keepLastChildNode;
    }
  }]);

  return KeepLastChildNode;
}(NonTerminalNode);

module.exports = KeepLastChildNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9rZWVwTGFzdENoaWxkTm9kZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiS2VlcExhc3RDaGlsZE5vZGUiLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiY2hpbGROb2RlcyIsImtlZXBMYXN0Iiwia2VlcExhc3RDaGlsZE5vZGUiLCJmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLHFCQUFSLENBQWxCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLGdCQUFSLENBRHhCOztJQUdNRSxpQjs7Ozs7Ozs7Ozs7K0NBQzhCQyxLLEVBQU9DLGMsRUFBZ0I7QUFDdkQsVUFBTUMsYUFBYU4sVUFBVU8sUUFBVixDQUFtQkgsS0FBbkIsQ0FBbkI7QUFBQSxVQUNNSSxvQkFBb0JOLGdCQUFnQk8sK0JBQWhCLENBQWdESixjQUFoRCxFQUFnRUMsVUFBaEUsRUFBNEVILGlCQUE1RSxDQUQxQjs7QUFHQSxhQUFPSyxpQkFBUDtBQUNEOzs7O0VBTjZCTixlOztBQVNoQ1EsT0FBT0MsT0FBUCxHQUFpQlIsaUJBQWpCIiwiZmlsZSI6ImtlZXBMYXN0Q2hpbGROb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBLZWVwTGFzdENoaWxkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gYXJyYXlVdGlsLmtlZXBMYXN0KG5vZGVzKSxcbiAgICAgICAgICBrZWVwTGFzdENoaWxkTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzLCBLZWVwTGFzdENoaWxkTm9kZSk7XG5cbiAgICByZXR1cm4ga2VlcExhc3RDaGlsZE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBLZWVwTGFzdENoaWxkTm9kZTtcbiJdfQ==