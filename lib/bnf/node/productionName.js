'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../common/node/nonTerminal');

var ProductionNameNode = function (_NonTerminalNode) {
  _inherits(ProductionNameNode, _NonTerminalNode);

  function ProductionNameNode() {
    _classCallCheck(this, ProductionNameNode);

    return _possibleConstructorReturn(this, (ProductionNameNode.__proto__ || Object.getPrototypeOf(ProductionNameNode)).apply(this, arguments));
  }

  _createClass(ProductionNameNode, [{
    key: 'getName',
    value: function getName() {
      var childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,
          ///
      terminalNodeContent = terminalNode.getContent(),
          name = terminalNodeContent; ///

      return name;
    }
  }], [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, ProductionNameNode);
    }
  }]);

  return ProductionNameNode;
}(NonTerminalNode);

module.exports = ProductionNameNode;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wcm9kdWN0aW9uTmFtZS5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiUHJvZHVjdGlvbk5hbWVOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJuYW1lIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQkMsUUFBUSwrQkFBUixDQUF4Qjs7SUFFTUMsa0I7Ozs7Ozs7Ozs7OzhCQUNNO0FBQ1IsVUFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsaUJBQWlCQyxNQUFNSCxVQUFOLENBRHZCO0FBQUEsVUFFTUksZUFBZUYsY0FGckI7QUFBQSxVQUVzQztBQUNoQ0csNEJBQXNCRCxhQUFhRSxVQUFiLEVBSDVCO0FBQUEsVUFJTUMsT0FBT0YsbUJBSmIsQ0FEUSxDQUswQjs7QUFFbEMsYUFBT0UsSUFBUDtBQUNEOzs7K0NBRWlDQyxLLEVBQU9DLGMsRUFBZ0I7QUFBRSxhQUFPWixnQkFBZ0JhLDBCQUFoQixDQUEyQ0YsS0FBM0MsRUFBa0RDLGNBQWxELEVBQWtFVixrQkFBbEUsQ0FBUDtBQUErRjs7OztFQVgzSEYsZTs7QUFjakNjLE9BQU9DLE9BQVAsR0FBaUJiLGtCQUFqQjs7QUFFQSxTQUFTSSxLQUFULENBQWVVLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJwcm9kdWN0aW9uTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUHJvZHVjdGlvbk5hbWVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIG5hbWUgPSB0ZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cbiAgICBcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSwgUHJvZHVjdGlvbk5hbWVOb2RlKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25OYW1lTm9kZTtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=