'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../common/node/nonTerminal');

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
      var childNodes = nodes,
          ///
      productionsNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, DefinitionNode);

      return productionsNode;
    }
  }]);

  return DefinitionNode;
}(NonTerminalNode);

module.exports = DefinitionNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL2RlZmluaXRpb24uanMiXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIkRlZmluaXRpb25Ob2RlIiwiRGVmaW5pdGlvbiIsIlBhcnRzIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJwYXJ0Tm9kZXMiLCJwYXJ0cyIsIm1hcCIsInBhcnROb2RlIiwibm9XaGl0ZXNwYWNlIiwicGFydCIsImdlbmVyYXRlUGFydCIsImRlZmluaXRpb24iLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwicHJvZHVjdGlvbnNOb2RlIiwiZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCQyxRQUFRLCtCQUFSLENBQXhCOztJQUVNQyxjOzs7Ozs7Ozs7Ozt1Q0FDZUMsVSxFQUFZQyxLLEVBQU87QUFDcEMsVUFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsWUFBWUYsVUFEbEI7QUFBQSxVQUM4QjtBQUN4QkcsY0FBUUQsVUFBVUUsR0FBVixDQUFjLFVBQVNDLFFBQVQsRUFBbUI7QUFDdkMsWUFBTUMsZUFBZSxLQUFyQjtBQUFBLFlBQTRCO0FBQ3RCQyxlQUFPRixTQUFTRyxZQUFULENBQXNCVCxLQUF0QixFQUE2Qk8sWUFBN0IsQ0FEYjs7QUFHQSxlQUFPQyxJQUFQO0FBQ0QsT0FMTyxDQUZkO0FBQUEsVUFRTUUsYUFBYSxJQUFJWCxVQUFKLENBQWVLLEtBQWYsQ0FSbkI7O0FBVUEsYUFBT00sVUFBUDtBQUNEOzs7K0NBRWlDQyxLLEVBQU9DLGMsRUFBZ0I7QUFDdkQsVUFBTVgsYUFBYVUsS0FBbkI7QUFBQSxVQUEwQjtBQUNwQkUsd0JBQWtCakIsZ0JBQWdCa0IsK0JBQWhCLENBQWdERixjQUFoRCxFQUFnRVgsVUFBaEUsRUFBNEVILGNBQTVFLENBRHhCOztBQUdBLGFBQU9lLGVBQVA7QUFDRDs7OztFQXBCMEJqQixlOztBQXVCN0JtQixPQUFPQyxPQUFQLEdBQWlCbEIsY0FBakIiLCJmaWxlIjoiZGVmaW5pdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRGVmaW5pdGlvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZURlZmluaXRpb24oRGVmaW5pdGlvbiwgUGFydHMpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcGFydE5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgcGFydHMgPSBwYXJ0Tm9kZXMubWFwKGZ1bmN0aW9uKHBhcnROb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgICAgICAgICBwYXJ0ID0gcGFydE5vZGUuZ2VuZXJhdGVQYXJ0KFBhcnRzLCBub1doaXRlc3BhY2UpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb25zTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzLCBEZWZpbml0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbnNOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5pdGlvbk5vZGU7XG4iXX0=