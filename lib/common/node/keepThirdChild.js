'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('./nonTerminal');

var KeepThirdChildNode = function (_NonTerminalNode) {
  _inherits(KeepThirdChildNode, _NonTerminalNode);

  function KeepThirdChildNode() {
    _classCallCheck(this, KeepThirdChildNode);

    return _possibleConstructorReturn(this, (KeepThirdChildNode.__proto__ || Object.getPrototypeOf(KeepThirdChildNode)).apply(this, arguments));
  }

  _createClass(KeepThirdChildNode, null, [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      var childNodes = arrayUtil.keepThird(nodes),
          keepThirdChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, KeepThirdChildNode);

      nodes = [keepThirdChildNode]; ///

      return nodes;
    }
  }]);

  return KeepThirdChildNode;
}(NonTerminalNode);

module.exports = KeepThirdChildNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9rZWVwVGhpcmRDaGlsZC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiS2VlcFRoaXJkQ2hpbGROb2RlIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImNoaWxkTm9kZXMiLCJrZWVwVGhpcmQiLCJrZWVwVGhpcmRDaGlsZE5vZGUiLCJmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxZQUFZQyxRQUFRLGlCQUFSLENBQWhCO0FBQUEsSUFDSUMsa0JBQWtCRCxRQUFRLGVBQVIsQ0FEdEI7O0lBR01FLGtCOzs7Ozs7Ozs7OzsrQ0FDOEJDLEssRUFBT0MsYyxFQUFnQjtBQUN2RCxVQUFJQyxhQUFhTixVQUFVTyxTQUFWLENBQW9CSCxLQUFwQixDQUFqQjtBQUFBLFVBQ0lJLHFCQUFxQk4sZ0JBQWdCTywrQkFBaEIsQ0FBZ0RKLGNBQWhELEVBQWdFQyxVQUFoRSxFQUE0RUgsa0JBQTVFLENBRHpCOztBQUdBQyxjQUFRLENBQUNJLGtCQUFELENBQVIsQ0FKdUQsQ0FJekI7O0FBRTlCLGFBQU9KLEtBQVA7QUFDRDs7OztFQVI4QkYsZTs7QUFXakNRLE9BQU9DLE9BQVAsR0FBaUJSLGtCQUFqQiIsImZpbGUiOiJrZWVwVGhpcmRDaGlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL2FycmF5VXRpbCcpLFxuICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4vbm9uVGVybWluYWwnKTtcblxuY2xhc3MgS2VlcFRoaXJkQ2hpbGROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gYXJyYXlVdGlsLmtlZXBUaGlyZChub2RlcyksXG4gICAgICAgIGtlZXBUaGlyZENoaWxkTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzLCBLZWVwVGhpcmRDaGlsZE5vZGUpO1xuXG4gICAgbm9kZXMgPSBba2VlcFRoaXJkQ2hpbGROb2RlXTsgLy8vXG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBLZWVwVGhpcmRDaGlsZE5vZGU7XG4iXX0=