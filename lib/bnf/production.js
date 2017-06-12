'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Production = function () {
  function Production(name, definitions, Node) {
    _classCallCheck(this, Production);

    this.name = name;
    this.definitions = definitions;
    this.Node = Node;
  }

  _createClass(Production, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'parse',
    value: function parse(context, noWhitespace) {
      var nodeOrNodes = null;

      context.increaseDepth();

      var tooDeep = context.isTooDeep();

      if (tooDeep) {
        throw new Error('The parse tree is too deep at production \'' + this.name + '\'');
      }

      var definitionNodes = null;

      var someDefinitionParsed = this.definitions.some(function (definition) {
        definitionNodes = definition.parse(context, noWhitespace);

        var definitionParsed = definitionNodes !== null;

        return definitionParsed;
      });

      if (someDefinitionParsed) {
        var definitionNodesLength = definitionNodes.length;

        if (definitionNodesLength > 0) {
          var nodes = definitionNodes,
              ///
          productionName = this.name; ///

          nodeOrNodes = this.Node.fromNodesAndProductionName(nodes, productionName); ///
        }
      }

      context.decreaseDepth();

      return nodeOrNodes;
    }
  }]);

  return Production;
}();

module.exports = Production;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsImNvbnRleHQiLCJub1doaXRlc3BhY2UiLCJub2RlT3JOb2RlcyIsImluY3JlYXNlRGVwdGgiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiRXJyb3IiLCJkZWZpbml0aW9uTm9kZXMiLCJzb21lRGVmaW5pdGlvblBhcnNlZCIsInNvbWUiLCJkZWZpbml0aW9uIiwicGFyc2UiLCJkZWZpbml0aW9uUGFyc2VkIiwiZGVmaW5pdGlvbk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lIiwiZGVjcmVhc2VEZXB0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsVTtBQUNKLHNCQUFZQyxJQUFaLEVBQWtCQyxXQUFsQixFQUErQkMsSUFBL0IsRUFBcUM7QUFBQTs7QUFDbkMsU0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7MEJBRUtHLE8sRUFBU0MsWSxFQUFjO0FBQzNCLFVBQUlDLGNBQWMsSUFBbEI7O0FBRUFGLGNBQVFHLGFBQVI7O0FBRUEsVUFBTUMsVUFBVUosUUFBUUssU0FBUixFQUFoQjs7QUFFQSxVQUFJRCxPQUFKLEVBQWE7QUFDWCxjQUFNLElBQUlFLEtBQUosaURBQXVELEtBQUtULElBQTVELFFBQU47QUFDRDs7QUFFRCxVQUFJVSxrQkFBa0IsSUFBdEI7O0FBRUEsVUFBTUMsdUJBQXVCLEtBQUtWLFdBQUwsQ0FBaUJXLElBQWpCLENBQXNCLFVBQVNDLFVBQVQsRUFBcUI7QUFDaEVILDBCQUFrQkcsV0FBV0MsS0FBWCxDQUFpQlgsT0FBakIsRUFBMEJDLFlBQTFCLENBQWxCOztBQUVBLFlBQU1XLG1CQUFvQkwsb0JBQW9CLElBQTlDOztBQUVBLGVBQU9LLGdCQUFQO0FBQ0QsT0FOc0IsQ0FBN0I7O0FBUUEsVUFBSUosb0JBQUosRUFBMEI7QUFDeEIsWUFBTUssd0JBQXdCTixnQkFBZ0JPLE1BQTlDOztBQUVBLFlBQUlELHdCQUF3QixDQUE1QixFQUErQjtBQUM3QixjQUFNRSxRQUFRUixlQUFkO0FBQUEsY0FBZ0M7QUFDMUJTLDJCQUFpQixLQUFLbkIsSUFENUIsQ0FENkIsQ0FFSzs7QUFFbENLLHdCQUFjLEtBQUtILElBQUwsQ0FBVWtCLDBCQUFWLENBQXFDRixLQUFyQyxFQUE0Q0MsY0FBNUMsQ0FBZCxDQUo2QixDQUkrQztBQUM3RTtBQUNGOztBQUVEaEIsY0FBUWtCLGFBQVI7O0FBRUEsYUFBT2hCLFdBQVA7QUFDRDs7Ozs7O0FBR0hpQixPQUFPQyxPQUFQLEdBQWlCeEIsVUFBakIiLCJmaWxlIjoicHJvZHVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gICAgdGhpcy5Ob2RlID0gTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBub2RlT3JOb2RlcyA9IG51bGw7XG5cbiAgICBjb250ZXh0LmluY3JlYXNlRGVwdGgoKTtcblxuICAgIGNvbnN0IHRvb0RlZXAgPSBjb250ZXh0LmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcHJvZHVjdGlvbiAnJHt0aGlzLm5hbWV9J2ApO1xuICAgIH1cblxuICAgIGxldCBkZWZpbml0aW9uTm9kZXMgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNvbWVEZWZpbml0aW9uUGFyc2VkID0gdGhpcy5kZWZpbml0aW9ucy5zb21lKGZ1bmN0aW9uKGRlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGRlZmluaXRpb25Ob2RlcyA9IGRlZmluaXRpb24ucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKTtcbiAgXG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uUGFyc2VkID0gKGRlZmluaXRpb25Ob2RlcyAhPT0gbnVsbCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25QYXJzZWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoc29tZURlZmluaXRpb25QYXJzZWQpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25Ob2Rlc0xlbmd0aCA9IGRlZmluaXRpb25Ob2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gZGVmaW5pdGlvbk5vZGVzLCAgLy8vXG4gICAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lID0gdGhpcy5uYW1lOyAvLy9cblxuICAgICAgICBub2RlT3JOb2RlcyA9IHRoaXMuTm9kZS5mcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWNyZWFzZURlcHRoKCk7XG5cbiAgICByZXR1cm4gbm9kZU9yTm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uO1xuIl19