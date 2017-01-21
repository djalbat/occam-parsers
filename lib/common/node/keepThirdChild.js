'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('../../bnf/node/nonTerminal');

var KeepThirdChildNode = function (_NonTerminalNode) {
  _inherits(KeepThirdChildNode, _NonTerminalNode);

  function KeepThirdChildNode() {
    _classCallCheck(this, KeepThirdChildNode);

    return _possibleConstructorReturn(this, (KeepThirdChildNode.__proto__ || Object.getPrototypeOf(KeepThirdChildNode)).apply(this, arguments));
  }

  _createClass(KeepThirdChildNode, null, [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var childNodes = arrayUtil.keepThird(nodes),
          keepThirdChildNode = new KeepThirdChildNode(childNodes, productionName);

      nodes = [keepThirdChildNode]; ///

      return nodes;
    }
  }]);

  return KeepThirdChildNode;
}(NonTerminalNode);

module.exports = KeepThirdChildNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9rZWVwVGhpcmRDaGlsZC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiS2VlcFRoaXJkQ2hpbGROb2RlIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImNoaWxkTm9kZXMiLCJrZWVwVGhpcmQiLCJrZWVwVGhpcmRDaGlsZE5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFlBQVlDLFFBQVEsaUJBQVIsQ0FBaEI7QUFBQSxJQUNJQyxrQkFBa0JELFFBQVEsNEJBQVIsQ0FEdEI7O0lBR01FLGtCOzs7Ozs7Ozs7Ozs4QkFDYUMsSyxFQUFPQyxjLEVBQWdCO0FBQ3RDLFVBQUlDLGFBQWFOLFVBQVVPLFNBQVYsQ0FBb0JILEtBQXBCLENBQWpCO0FBQUEsVUFDSUkscUJBQXFCLElBQUlMLGtCQUFKLENBQXVCRyxVQUF2QixFQUFtQ0QsY0FBbkMsQ0FEekI7O0FBR0FELGNBQVEsQ0FBQ0ksa0JBQUQsQ0FBUixDQUpzQyxDQUlSOztBQUU5QixhQUFPSixLQUFQO0FBQ0Q7Ozs7RUFSOEJGLGU7O0FBV2pDTyxPQUFPQyxPQUFQLEdBQWlCUCxrQkFBakIiLCJmaWxlIjoia2VlcFRoaXJkQ2hpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi9hcnJheVV0aWwnKSxcbiAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9ibmYvbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBLZWVwVGhpcmRDaGlsZE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gYXJyYXlVdGlsLmtlZXBUaGlyZChub2RlcyksXG4gICAgICAgIGtlZXBUaGlyZENoaWxkTm9kZSA9IG5ldyBLZWVwVGhpcmRDaGlsZE5vZGUoY2hpbGROb2RlcywgcHJvZHVjdGlvbk5hbWUpO1xuXG4gICAgbm9kZXMgPSBba2VlcFRoaXJkQ2hpbGROb2RlXTsgLy8vXG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBLZWVwVGhpcmRDaGlsZE5vZGU7XG4iXX0=