'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    VerticalSpaceNode = require('../node/verticalSpace'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var DefinitionNode = function (_NonTerminalNode) {
  _inherits(DefinitionNode, _NonTerminalNode);

  function DefinitionNode() {
    _classCallCheck(this, DefinitionNode);

    return _possibleConstructorReturn(this, (DefinitionNode.__proto__ || Object.getPrototypeOf(DefinitionNode)).apply(this, arguments));
  }

  _createClass(DefinitionNode, null, [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      var lastNode = last(nodes),
          childNodes = lastNode instanceof VerticalSpaceNode ? arrayUtil.discardLast(nodes) : nodes;

      var productionsNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes);

      return productionsNode;
    }
  }]);

  return DefinitionNode;
}(NonTerminalNode);

module.exports = DefinitionNode;

function last(array) {
  return array[array.length - 1];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9kZWZpbml0aW9uLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJWZXJ0aWNhbFNwYWNlTm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsIkRlZmluaXRpb25Ob2RlIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImxhc3ROb2RlIiwibGFzdCIsImNoaWxkTm9kZXMiLCJkaXNjYXJkTGFzdCIsInByb2R1Y3Rpb25zTm9kZSIsImZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxrQkFBUixDQUFsQjtBQUFBLElBQ01DLG9CQUFvQkQsUUFBUSx1QkFBUixDQUQxQjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSwrQkFBUixDQUZ4Qjs7SUFJTUcsYzs7Ozs7Ozs7Ozs7K0NBQzhCQyxLLEVBQU9DLGMsRUFBZ0I7QUFDdkQsVUFBTUMsV0FBV0MsS0FBS0gsS0FBTCxDQUFqQjtBQUFBLFVBQ01JLGFBQWNGLG9CQUFvQkwsaUJBQXJCLEdBQ0VGLFVBQVVVLFdBQVYsQ0FBc0JMLEtBQXRCLENBREYsR0FFSUEsS0FIdkI7O0FBS0EsVUFBTU0sa0JBQWtCUixnQkFBZ0JTLCtCQUFoQixDQUFnRE4sY0FBaEQsRUFBZ0VHLFVBQWhFLENBQXhCOztBQUVBLGFBQU9FLGVBQVA7QUFDRDs7OztFQVYwQlIsZTs7QUFhN0JVLE9BQU9DLE9BQVAsR0FBaUJWLGNBQWpCOztBQUVBLFNBQVNJLElBQVQsQ0FBY08sS0FBZCxFQUFxQjtBQUFFLFNBQU9BLE1BQU1BLE1BQU1DLE1BQU4sR0FBZSxDQUFyQixDQUFQO0FBQWlDIiwiZmlsZSI6ImRlZmluaXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIFZlcnRpY2FsU3BhY2VOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS92ZXJ0aWNhbFNwYWNlJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBEZWZpbml0aW9uTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBsYXN0Tm9kZSA9IGxhc3Qobm9kZXMpLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSAobGFzdE5vZGUgaW5zdGFuY2VvZiBWZXJ0aWNhbFNwYWNlTm9kZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5VXRpbC5kaXNjYXJkTGFzdChub2RlcykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXM7XG5cbiAgICBjb25zdCBwcm9kdWN0aW9uc05vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2Rlcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbnNOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5pdGlvbk5vZGU7XG5cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG4iXX0=