'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../arrayUtil'),
    NonTerminalNode = require('../nonTerminal');

var DiscardLastChildNode = function (_NonTerminalNode) {
  _inherits(DiscardLastChildNode, _NonTerminalNode);

  function DiscardLastChildNode() {
    _classCallCheck(this, DiscardLastChildNode);

    return _possibleConstructorReturn(this, (DiscardLastChildNode.__proto__ || Object.getPrototypeOf(DiscardLastChildNode)).apply(this, arguments));
  }

  _createClass(DiscardLastChildNode, null, [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      var childNodes = arrayUtil.discardLast(nodes),
          ///
      discardLastChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, DiscardLastChildNode);

      return discardLastChildNode;
    }
  }]);

  return DiscardLastChildNode;
}(NonTerminalNode);

module.exports = DiscardLastChildNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9kaXNjYXJkTGFzdENoaWxkLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJEaXNjYXJkTGFzdENoaWxkTm9kZSIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJjaGlsZE5vZGVzIiwiZGlzY2FyZExhc3QiLCJkaXNjYXJkTGFzdENoaWxkTm9kZSIsImZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsb0JBQVIsQ0FBbEI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsZ0JBQVIsQ0FEeEI7O0lBR01FLG9COzs7Ozs7Ozs7OzsrQ0FDOEJDLEssRUFBT0MsYyxFQUFnQjtBQUN2RCxVQUFNQyxhQUFhTixVQUFVTyxXQUFWLENBQXNCSCxLQUF0QixDQUFuQjtBQUFBLFVBQWlEO0FBQzNDSSw2QkFBdUJOLGdCQUFnQk8sK0JBQWhCLENBQWdESixjQUFoRCxFQUFnRUMsVUFBaEUsRUFBNEVILG9CQUE1RSxDQUQ3Qjs7QUFHQSxhQUFPSyxvQkFBUDtBQUNEOzs7O0VBTmdDTixlOztBQVNuQ1EsT0FBT0MsT0FBUCxHQUFpQlIsb0JBQWpCIiwiZmlsZSI6ImRpc2NhcmRMYXN0Q2hpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2FycmF5VXRpbCcpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRGlzY2FyZExhc3RDaGlsZE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IGFycmF5VXRpbC5kaXNjYXJkTGFzdChub2RlcyksIC8vL1xuICAgICAgICAgIGRpc2NhcmRMYXN0Q2hpbGROb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIERpc2NhcmRMYXN0Q2hpbGROb2RlKTtcblxuICAgIHJldHVybiBkaXNjYXJkTGFzdENoaWxkTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc2NhcmRMYXN0Q2hpbGROb2RlO1xuIl19