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
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var childNodes = arrayUtil.discardFirst(nodes),
          ///
      discardFirstChildNode = new DiscardFirstChildNode(childNodes, productionName);

      nodes = [discardFirstChildNode]; ///

      return nodes;
    }
  }]);

  return DiscardFirstChildNode;
}(NonTerminalNode);

module.exports = DiscardFirstChildNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9kaXNjYXJkRmlyc3RDaGlsZC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiRGlzY2FyZEZpcnN0Q2hpbGROb2RlIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImNoaWxkTm9kZXMiLCJkaXNjYXJkRmlyc3QiLCJkaXNjYXJkRmlyc3RDaGlsZE5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFlBQVlDLFFBQVEsaUJBQVIsQ0FBaEI7QUFBQSxJQUNJQyxrQkFBa0JELFFBQVEsZUFBUixDQUR0Qjs7SUFHTUUscUI7Ozs7Ozs7Ozs7OzhCQUNhQyxLLEVBQU9DLGMsRUFBZ0I7QUFDdEMsVUFBSUMsYUFBYU4sVUFBVU8sWUFBVixDQUF1QkgsS0FBdkIsQ0FBakI7QUFBQSxVQUFnRDtBQUM1Q0ksOEJBQXdCLElBQUlMLHFCQUFKLENBQTBCRyxVQUExQixFQUFzQ0QsY0FBdEMsQ0FENUI7O0FBR0FELGNBQVEsQ0FBQ0kscUJBQUQsQ0FBUixDQUpzQyxDQUlMOztBQUVqQyxhQUFPSixLQUFQO0FBQ0Q7Ozs7RUFSaUNGLGU7O0FBV3BDTyxPQUFPQyxPQUFQLEdBQWlCUCxxQkFBakIiLCJmaWxlIjoiZGlzY2FyZEZpcnN0Q2hpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi9hcnJheVV0aWwnKSxcbiAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIERpc2NhcmRGaXJzdENoaWxkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBhcnJheVV0aWwuZGlzY2FyZEZpcnN0KG5vZGVzKSwgLy8vXG4gICAgICAgIGRpc2NhcmRGaXJzdENoaWxkTm9kZSA9IG5ldyBEaXNjYXJkRmlyc3RDaGlsZE5vZGUoY2hpbGROb2RlcywgcHJvZHVjdGlvbk5hbWUpO1xuXG4gICAgbm9kZXMgPSBbZGlzY2FyZEZpcnN0Q2hpbGROb2RlXTsgLy8vXG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXNjYXJkRmlyc3RDaGlsZE5vZGU7XG4iXX0=