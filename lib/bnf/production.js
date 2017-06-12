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
    key: 'getDefinitions',
    value: function getDefinitions() {
      return this.definitions;
    }
  }, {
    key: 'getNode',
    value: function getNode() {
      return this.Node;
    }
  }, {
    key: 'isFoundByProductionName',
    value: function isFoundByProductionName(productionName) {
      var found = this.name === productionName;

      return found;
    }
  }, {
    key: 'setName',
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: 'setDefinitions',
    value: function setDefinitions(definitions) {
      this.definitions = definitions;
    }
  }, {
    key: 'setNode',
    value: function setNode(node) {
      this.node = node;
    }
  }, {
    key: 'addDefinitions',
    value: function addDefinitions(definitions) {
      this.definitions = this.definitions.concat(definitions);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsInByb2R1Y3Rpb25OYW1lIiwiZm91bmQiLCJub2RlIiwiY29uY2F0IiwiY29udGV4dCIsIm5vV2hpdGVzcGFjZSIsIm5vZGVPck5vZGVzIiwiaW5jcmVhc2VEZXB0aCIsInRvb0RlZXAiLCJpc1Rvb0RlZXAiLCJFcnJvciIsImRlZmluaXRpb25Ob2RlcyIsInNvbWVEZWZpbml0aW9uUGFyc2VkIiwic29tZSIsImRlZmluaXRpb24iLCJwYXJzZSIsImRlZmluaXRpb25QYXJzZWQiLCJkZWZpbml0aW9uTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub2RlcyIsImZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lIiwiZGVjcmVhc2VEZXB0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsVTtBQUNKLHNCQUFZQyxJQUFaLEVBQWtCQyxXQUFsQixFQUErQkMsSUFBL0IsRUFBcUM7QUFBQTs7QUFDbkMsU0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7cUNBRWdCO0FBQ2YsYUFBTyxLQUFLQyxXQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7NENBRXVCQyxjLEVBQWdCO0FBQ3RDLFVBQU1DLFFBQVMsS0FBS0osSUFBTCxLQUFjRyxjQUE3Qjs7QUFFQSxhQUFPQyxLQUFQO0FBQ0Q7Ozs0QkFFT0osSSxFQUFNO0FBQ1osV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7OzttQ0FFY0MsVyxFQUFhO0FBQzFCLFdBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7Ozs0QkFFT0ksSSxFQUFNO0FBQ1osV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7OzttQ0FFY0osVyxFQUFhO0FBQzFCLFdBQUtBLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkssTUFBakIsQ0FBd0JMLFdBQXhCLENBQW5CO0FBQ0Q7OzswQkFFS00sTyxFQUFTQyxZLEVBQWM7QUFDM0IsVUFBSUMsY0FBYyxJQUFsQjs7QUFFQUYsY0FBUUcsYUFBUjs7QUFFQSxVQUFNQyxVQUFVSixRQUFRSyxTQUFSLEVBQWhCOztBQUVBLFVBQUlELE9BQUosRUFBYTtBQUNYLGNBQU0sSUFBSUUsS0FBSixpREFBdUQsS0FBS2IsSUFBNUQsUUFBTjtBQUNEOztBQUVELFVBQUljLGtCQUFrQixJQUF0Qjs7QUFFQSxVQUFNQyx1QkFBdUIsS0FBS2QsV0FBTCxDQUFpQmUsSUFBakIsQ0FBc0IsVUFBU0MsVUFBVCxFQUFxQjtBQUNoRUgsMEJBQWtCRyxXQUFXQyxLQUFYLENBQWlCWCxPQUFqQixFQUEwQkMsWUFBMUIsQ0FBbEI7O0FBRUEsWUFBTVcsbUJBQW9CTCxvQkFBb0IsSUFBOUM7O0FBRUEsZUFBT0ssZ0JBQVA7QUFDRCxPQU5zQixDQUE3Qjs7QUFRQSxVQUFJSixvQkFBSixFQUEwQjtBQUN4QixZQUFNSyx3QkFBd0JOLGdCQUFnQk8sTUFBOUM7O0FBRUEsWUFBSUQsd0JBQXdCLENBQTVCLEVBQStCO0FBQzdCLGNBQU1FLFFBQVFSLGVBQWQ7QUFBQSxjQUFnQztBQUMxQlgsMkJBQWlCLEtBQUtILElBRDVCLENBRDZCLENBRUs7O0FBRWxDUyx3QkFBYyxLQUFLUCxJQUFMLENBQVVxQiwwQkFBVixDQUFxQ0QsS0FBckMsRUFBNENuQixjQUE1QyxDQUFkLENBSjZCLENBSStDO0FBQzdFO0FBQ0Y7O0FBRURJLGNBQVFpQixhQUFSOztBQUVBLGFBQU9mLFdBQVA7QUFDRDs7Ozs7O0FBR0hnQixPQUFPQyxPQUFQLEdBQWlCM0IsVUFBakIiLCJmaWxlIjoicHJvZHVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gICAgdGhpcy5Ob2RlID0gTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5Ob2RlO1xuICB9XG5cbiAgaXNGb3VuZEJ5UHJvZHVjdGlvbk5hbWUocHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBmb3VuZCA9ICh0aGlzLm5hbWUgPT09IHByb2R1Y3Rpb25OYW1lKTtcblxuICAgIHJldHVybiBmb3VuZDtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHNldE5vZGUobm9kZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBhZGREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB0aGlzLmRlZmluaXRpb25zLmNvbmNhdChkZWZpbml0aW9ucyk7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9kZU9yTm9kZXMgPSBudWxsO1xuXG4gICAgY29udGV4dC5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICBjb25zdCB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHByb2R1Y3Rpb24gJyR7dGhpcy5uYW1lfSdgKTtcbiAgICB9XG5cbiAgICBsZXQgZGVmaW5pdGlvbk5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzb21lRGVmaW5pdGlvblBhcnNlZCA9IHRoaXMuZGVmaW5pdGlvbnMuc29tZShmdW5jdGlvbihkZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBkZWZpbml0aW9uTm9kZXMgPSBkZWZpbml0aW9uLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSk7XG4gIFxuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblBhcnNlZCA9IChkZWZpbml0aW9uTm9kZXMgIT09IG51bGwpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uUGFyc2VkO1xuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHNvbWVEZWZpbml0aW9uUGFyc2VkKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uTm9kZXNMZW5ndGggPSBkZWZpbml0aW9uTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvbk5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBub2RlcyA9IGRlZmluaXRpb25Ob2RlcywgIC8vL1xuICAgICAgICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IHRoaXMubmFtZTsgLy8vXG5cbiAgICAgICAgbm9kZU9yTm9kZXMgPSB0aGlzLk5vZGUuZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKTsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQuZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIG5vZGVPck5vZGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbjtcbiJdfQ==