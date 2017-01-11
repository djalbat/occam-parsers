'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../bnf/node/nonTerminal');

var TransparentSecondChildNode = function (_NonTerminalNode) {
  _inherits(TransparentSecondChildNode, _NonTerminalNode);

  function TransparentSecondChildNode() {
    _classCallCheck(this, TransparentSecondChildNode);

    return _possibleConstructorReturn(this, (TransparentSecondChildNode.__proto__ || Object.getPrototypeOf(TransparentSecondChildNode)).apply(this, arguments));
  }

  _createClass(TransparentSecondChildNode, null, [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var childNodes = nodes,
          ///
      secondChildNode = second(childNodes);

      nodes = [secondChildNode];

      return nodes;
    }
  }]);

  return TransparentSecondChildNode;
}(NonTerminalNode);

module.exports = TransparentSecondChildNode;

function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS9ub2RlL3RyYW5zcGFyZW50U2Vjb25kQ2hpbGQuanMiXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIlRyYW5zcGFyZW50U2Vjb25kQ2hpbGROb2RlIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImNoaWxkTm9kZXMiLCJzZWNvbmRDaGlsZE5vZGUiLCJzZWNvbmQiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsa0JBQWtCQyxRQUFRLDRCQUFSLENBQXRCOztJQUVNQywwQjs7Ozs7Ozs7Ozs7OEJBQ2FDLEssRUFBT0MsYyxFQUFnQjtBQUN0QyxVQUFJQyxhQUFhRixLQUFqQjtBQUFBLFVBQXdCO0FBQ3BCRyx3QkFBa0JDLE9BQU9GLFVBQVAsQ0FEdEI7O0FBR0FGLGNBQVEsQ0FBQ0csZUFBRCxDQUFSOztBQUVBLGFBQU9ILEtBQVA7QUFDRDs7OztFQVJzQ0gsZTs7QUFXekNRLE9BQU9DLE9BQVAsR0FBaUJQLDBCQUFqQjs7QUFFQSxTQUFTSyxNQUFULENBQWdCRyxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InRyYW5zcGFyZW50U2Vjb25kQ2hpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9ibmYvbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBUcmFuc3BhcmVudFNlY29uZENoaWxkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKTtcblxuICAgIG5vZGVzID0gW3NlY29uZENoaWxkTm9kZV07XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc3BhcmVudFNlY29uZENoaWxkTm9kZTtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19