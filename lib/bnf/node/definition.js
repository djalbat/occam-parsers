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

  _createClass(DefinitionNode, [{
    key: 'generateDefinition',
    value: function generateDefinition(Definition, Parts) {
      var childNodes = this.getChildNodes(),
          partNodes = childNodes,
          ///
      parts = partNodes.map(function (partNode) {
        var noWhitespace = false,
            ///
        part = partNode.generatePart(Parts, noWhitespace);

        return part;
      }),
          definition = new Definition(parts);

      return definition;
    }
  }], [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      var lastNode = last(nodes),
          childNodes = lastNode instanceof VerticalSpaceNode ? arrayUtil.discardLast(nodes) : nodes,
          productionsNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, DefinitionNode);

      return productionsNode;
    }
  }]);

  return DefinitionNode;
}(NonTerminalNode);

module.exports = DefinitionNode;

function last(array) {
  return array[array.length - 1];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9kZWZpbml0aW9uLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJWZXJ0aWNhbFNwYWNlTm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsIkRlZmluaXRpb25Ob2RlIiwiRGVmaW5pdGlvbiIsIlBhcnRzIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJwYXJ0Tm9kZXMiLCJwYXJ0cyIsIm1hcCIsInBhcnROb2RlIiwibm9XaGl0ZXNwYWNlIiwicGFydCIsImdlbmVyYXRlUGFydCIsImRlZmluaXRpb24iLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwibGFzdE5vZGUiLCJsYXN0IiwiZGlzY2FyZExhc3QiLCJwcm9kdWN0aW9uc05vZGUiLCJmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsa0JBQVIsQ0FBbEI7QUFBQSxJQUNNQyxvQkFBb0JELFFBQVEsdUJBQVIsQ0FEMUI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEsK0JBQVIsQ0FGeEI7O0lBSU1HLGM7Ozs7Ozs7Ozs7O3VDQUNlQyxVLEVBQVlDLEssRUFBTztBQUNwQyxVQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxZQUFZRixVQURsQjtBQUFBLFVBQzhCO0FBQ3hCRyxjQUFRRCxVQUFVRSxHQUFWLENBQWMsVUFBU0MsUUFBVCxFQUFtQjtBQUN2QyxZQUFNQyxlQUFlLEtBQXJCO0FBQUEsWUFBNEI7QUFDdEJDLGVBQU9GLFNBQVNHLFlBQVQsQ0FBc0JULEtBQXRCLEVBQTZCTyxZQUE3QixDQURiOztBQUdBLGVBQU9DLElBQVA7QUFDRCxPQUxPLENBRmQ7QUFBQSxVQVFNRSxhQUFhLElBQUlYLFVBQUosQ0FBZUssS0FBZixDQVJuQjs7QUFVQSxhQUFPTSxVQUFQO0FBQ0Q7OzsrQ0FFaUNDLEssRUFBT0MsYyxFQUFnQjtBQUN2RCxVQUFNQyxXQUFXQyxLQUFLSCxLQUFMLENBQWpCO0FBQUEsVUFDTVYsYUFBY1ksb0JBQW9CakIsaUJBQXJCLEdBQ0VGLFVBQVVxQixXQUFWLENBQXNCSixLQUF0QixDQURGLEdBRUlBLEtBSHZCO0FBQUEsVUFJTUssa0JBQWtCbkIsZ0JBQWdCb0IsK0JBQWhCLENBQWdETCxjQUFoRCxFQUFnRVgsVUFBaEUsRUFBNEVILGNBQTVFLENBSnhCOztBQU1BLGFBQU9rQixlQUFQO0FBQ0Q7Ozs7RUF2QjBCbkIsZTs7QUEwQjdCcUIsT0FBT0MsT0FBUCxHQUFpQnJCLGNBQWpCOztBQUVBLFNBQVNnQixJQUFULENBQWNNLEtBQWQsRUFBcUI7QUFBRSxTQUFPQSxNQUFNQSxNQUFNQyxNQUFOLEdBQWUsQ0FBckIsQ0FBUDtBQUFpQyIsImZpbGUiOiJkZWZpbml0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL2FycmF5JyksXG4gICAgICBWZXJ0aWNhbFNwYWNlTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvdmVydGljYWxTcGFjZScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRGVmaW5pdGlvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZURlZmluaXRpb24oRGVmaW5pdGlvbiwgUGFydHMpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcGFydE5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgcGFydHMgPSBwYXJ0Tm9kZXMubWFwKGZ1bmN0aW9uKHBhcnROb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgICAgICAgICBwYXJ0ID0gcGFydE5vZGUuZ2VuZXJhdGVQYXJ0KFBhcnRzLCBub1doaXRlc3BhY2UpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBsYXN0Tm9kZSA9IGxhc3Qobm9kZXMpLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSAobGFzdE5vZGUgaW5zdGFuY2VvZiBWZXJ0aWNhbFNwYWNlTm9kZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5VXRpbC5kaXNjYXJkTGFzdChub2RlcykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXMsXG4gICAgICAgICAgcHJvZHVjdGlvbnNOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIERlZmluaXRpb25Ob2RlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uc05vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZWZpbml0aW9uTm9kZTtcblxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cbiJdfQ==