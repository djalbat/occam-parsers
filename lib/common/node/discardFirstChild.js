'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('./nonTerminal');

var DiscardFirstChildNode = function (_NonTerminalNode) {
  _inherits(DiscardFirstChildNode, _NonTerminalNode);

  function DiscardFirstChildNode() {
    _classCallCheck(this, DiscardFirstChildNode);

    return _possibleConstructorReturn(this, (DiscardFirstChildNode.__proto__ || Object.getPrototypeOf(DiscardFirstChildNode)).apply(this, arguments));
  }

  _createClass(DiscardFirstChildNode, null, [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      var childNodes = arrayUtil.discardFirst(nodes),
          ///
      discardFirstChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, DiscardFirstChildNode);

      nodes = [discardFirstChildNode]; ///

      return nodes;
    }
  }]);

  return DiscardFirstChildNode;
}(NonTerminalNode);

module.exports = DiscardFirstChildNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9kaXNjYXJkRmlyc3RDaGlsZC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiRGlzY2FyZEZpcnN0Q2hpbGROb2RlIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImNoaWxkTm9kZXMiLCJkaXNjYXJkRmlyc3QiLCJkaXNjYXJkRmlyc3RDaGlsZE5vZGUiLCJmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxZQUFZQyxRQUFRLGlCQUFSLENBQWhCO0FBQUEsSUFDSUMsa0JBQWtCRCxRQUFRLGVBQVIsQ0FEdEI7O0lBR01FLHFCOzs7Ozs7Ozs7OzsrQ0FDOEJDLEssRUFBT0MsYyxFQUFnQjtBQUN2RCxVQUFJQyxhQUFhTixVQUFVTyxZQUFWLENBQXVCSCxLQUF2QixDQUFqQjtBQUFBLFVBQWdEO0FBQzVDSSw4QkFBd0JOLGdCQUFnQk8sK0JBQWhCLENBQWdESixjQUFoRCxFQUFnRUMsVUFBaEUsRUFBNEVILHFCQUE1RSxDQUQ1Qjs7QUFHQUMsY0FBUSxDQUFDSSxxQkFBRCxDQUFSLENBSnVELENBSXRCOztBQUVqQyxhQUFPSixLQUFQO0FBQ0Q7Ozs7RUFSaUNGLGU7O0FBV3BDUSxPQUFPQyxPQUFQLEdBQWlCUixxQkFBakIiLCJmaWxlIjoiZGlzY2FyZEZpcnN0Q2hpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi9hcnJheVV0aWwnKSxcbiAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIERpc2NhcmRGaXJzdENoaWxkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICB2YXIgY2hpbGROb2RlcyA9IGFycmF5VXRpbC5kaXNjYXJkRmlyc3Qobm9kZXMpLCAvLy9cbiAgICAgICAgZGlzY2FyZEZpcnN0Q2hpbGROb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIERpc2NhcmRGaXJzdENoaWxkTm9kZSk7XG5cbiAgICBub2RlcyA9IFtkaXNjYXJkRmlyc3RDaGlsZE5vZGVdOyAvLy9cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc2NhcmRGaXJzdENoaWxkTm9kZTtcbiJdfQ==