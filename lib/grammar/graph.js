'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cycle = require('./graph/cycle'),
    Stack = require('./graph/stack'),
    Vertex = require('./graph/vertex'),
    Component = require('./graph/component');

var Graph = function () {
  function Graph() {
    _classCallCheck(this, Graph);

    this.vertexmap = {};
  }

  _createClass(Graph, [{
    key: 'getCycles',
    value: function getCycles() {
      var components = this.getComponents(),
          cycles = components.reduce(function (cycles, component) {
        var componentCyclic = component.isCyclic();

        if (componentCyclic) {
          var cycle = Cycle.fromComponent(component);

          cycles.push(cycle);
        }

        return cycles;
      }, []);

      return cycles;
    }
  }, {
    key: 'getVertices',
    value: function getVertices() {
      var names = Object.keys(this.vertexmap),
          vertices = names.map(function (name) {
        var vertex = this.vertexmap[name];

        return vertex;
      }.bind(this));

      return vertices;
    }
  }, {
    key: 'getComponents',
    value: function getComponents() {
      var stack = new Stack(),
          vertices = this.getVertices(),
          components = [];

      var index = 0;

      function stronglyConnectVertex(vertex) {
        var lowestIndex = index; ///

        vertex.setIndex(index);

        vertex.setLowestIndex(lowestIndex);

        index++;

        stack.push(vertex);

        var successorVertices = vertex.getSuccessorVertices();

        successorVertices.forEach(function (successorVertex) {
          var successorVertexUnindexed = successorVertex.isUnindexed(),
              successorVertexNotStronglyConnected = successorVertexUnindexed; ///

          if (successorVertexNotStronglyConnected) {
            stronglyConnectVertex(successorVertex);

            var successorVertexLowestIndex = successorVertex.getLowestIndex();

            vertex.updateLowestIndex(successorVertexLowestIndex);
          } else {
            var successorVertexStacked = successorVertex.isStacked();

            if (successorVertexStacked) {
              var successorVertexIndex = successorVertex.getIndex();

              vertex.updateLowestIndex(successorVertexIndex);
            }
          }
        });

        var vertexLowest = vertex.isLowest();

        if (vertexLowest) {
          var component = Component.fromStackAndVertex(stack, vertex);

          components.push(component);
        }
      }

      vertices.forEach(function (vertex) {
        var vertexUnindexed = vertex.isUnindexed();

        if (vertexUnindexed) {
          stronglyConnectVertex(vertex);
        }
      });

      return components;
    }
  }, {
    key: 'addVertex',
    value: function addVertex(name, descendantVertexNames) {
      var successorVertices = descendantVertexNames.map(function (descendantVertexName) {
        var successorVertexName = descendantVertexName; ///

        var successorVertex = this.vertexmap[successorVertexName];

        if (successorVertex === undefined) {
          successorVertex = Vertex.fromName(successorVertexName);

          this.vertexmap[successorVertexName] = successorVertex;
        }

        return successorVertex;
      }.bind(this));

      var vertex = this.vertexmap[name];

      if (vertex === undefined) {
        vertex = Vertex.fromName(name);

        this.vertexmap[name] = vertex;
      }

      successorVertices = successorVertices.concat([]).reverse(); ///

      vertex.setSuccessorVertices(successorVertices);
    }
  }]);

  return Graph;
}();

module.exports = Graph;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFtbWFyL2dyYXBoLmpzIl0sIm5hbWVzIjpbIkN5Y2xlIiwicmVxdWlyZSIsIlN0YWNrIiwiVmVydGV4IiwiQ29tcG9uZW50IiwiR3JhcGgiLCJ2ZXJ0ZXhtYXAiLCJjb21wb25lbnRzIiwiZ2V0Q29tcG9uZW50cyIsImN5Y2xlcyIsInJlZHVjZSIsImNvbXBvbmVudCIsImNvbXBvbmVudEN5Y2xpYyIsImlzQ3ljbGljIiwiY3ljbGUiLCJmcm9tQ29tcG9uZW50IiwicHVzaCIsIm5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsInZlcnRpY2VzIiwibWFwIiwibmFtZSIsInZlcnRleCIsImJpbmQiLCJzdGFjayIsImdldFZlcnRpY2VzIiwiaW5kZXgiLCJzdHJvbmdseUNvbm5lY3RWZXJ0ZXgiLCJsb3dlc3RJbmRleCIsInNldEluZGV4Iiwic2V0TG93ZXN0SW5kZXgiLCJzdWNjZXNzb3JWZXJ0aWNlcyIsImdldFN1Y2Nlc3NvclZlcnRpY2VzIiwiZm9yRWFjaCIsInN1Y2Nlc3NvclZlcnRleCIsInN1Y2Nlc3NvclZlcnRleFVuaW5kZXhlZCIsImlzVW5pbmRleGVkIiwic3VjY2Vzc29yVmVydGV4Tm90U3Ryb25nbHlDb25uZWN0ZWQiLCJzdWNjZXNzb3JWZXJ0ZXhMb3dlc3RJbmRleCIsImdldExvd2VzdEluZGV4IiwidXBkYXRlTG93ZXN0SW5kZXgiLCJzdWNjZXNzb3JWZXJ0ZXhTdGFja2VkIiwiaXNTdGFja2VkIiwic3VjY2Vzc29yVmVydGV4SW5kZXgiLCJnZXRJbmRleCIsInZlcnRleExvd2VzdCIsImlzTG93ZXN0IiwiZnJvbVN0YWNrQW5kVmVydGV4IiwidmVydGV4VW5pbmRleGVkIiwiZGVzY2VuZGFudFZlcnRleE5hbWVzIiwiZGVzY2VuZGFudFZlcnRleE5hbWUiLCJzdWNjZXNzb3JWZXJ0ZXhOYW1lIiwidW5kZWZpbmVkIiwiZnJvbU5hbWUiLCJjb25jYXQiLCJyZXZlcnNlIiwic2V0U3VjY2Vzc29yVmVydGljZXMiLCJtb2R1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O0FBQ25CckIsZ0NBQXNCTCxNQUF0QjtBQUNEO0FBQ0YsT0FORDs7QUFRQSxhQUFPaEIsVUFBUDtBQUNEOzs7OEJBRVNlLEksRUFBTTRCLHFCLEVBQXVCO0FBQ3JDLFVBQUlsQixvQkFBb0JrQixzQkFBc0I3QixHQUF0QixDQUEwQixVQUFTOEIsb0JBQVQsRUFBK0I7QUFDL0UsWUFBTUMsc0JBQXNCRCxvQkFBNUIsQ0FEK0UsQ0FDNUI7O0FBRW5ELFlBQUloQixrQkFBa0IsS0FBSzdCLFNBQUwsQ0FBZThDLG1CQUFmLENBQXRCOztBQUVBLFlBQUlqQixvQkFBb0JrQixTQUF4QixFQUFtQztBQUNqQ2xCLDRCQUFrQmhDLE9BQU9tRCxRQUFQLENBQWdCRixtQkFBaEIsQ0FBbEI7O0FBRUEsZUFBSzlDLFNBQUwsQ0FBZThDLG1CQUFmLElBQXNDakIsZUFBdEM7QUFDRDs7QUFFRCxlQUFPQSxlQUFQO0FBQ0QsT0FaaUQsQ0FZaERYLElBWmdELENBWTNDLElBWjJDLENBQTFCLENBQXhCOztBQWNBLFVBQUlELFNBQVMsS0FBS2pCLFNBQUwsQ0FBZWdCLElBQWYsQ0FBYjs7QUFFQSxVQUFJQyxXQUFXOEIsU0FBZixFQUEwQjtBQUN4QjlCLGlCQUFTcEIsT0FBT21ELFFBQVAsQ0FBZ0JoQyxJQUFoQixDQUFUOztBQUVBLGFBQUtoQixTQUFMLENBQWVnQixJQUFmLElBQXVCQyxNQUF2QjtBQUNEOztBQUVEUywwQkFBb0JBLGtCQUFrQnVCLE1BQWxCLENBQXlCLEVBQXpCLEVBQTZCQyxPQUE3QixFQUFwQixDQXZCcUMsQ0F1QnVCOztBQUU1RGpDLGFBQU9rQyxvQkFBUCxDQUE0QnpCLGlCQUE1QjtBQUNEOzs7Ozs7QUFHSDBCLE9BQU9DLE9BQVAsR0FBaUJ0RCxLQUFqQiIsImZpbGUiOiJncmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ3ljbGUgPSByZXF1aXJlKCcuL2dyYXBoL2N5Y2xlJyksXG4gICAgICBTdGFjayA9IHJlcXVpcmUoJy4vZ3JhcGgvc3RhY2snKSxcbiAgICAgIFZlcnRleCA9IHJlcXVpcmUoJy4vZ3JhcGgvdmVydGV4JyksXG4gICAgICBDb21wb25lbnQgPSByZXF1aXJlKCcuL2dyYXBoL2NvbXBvbmVudCcpO1xuXG5jbGFzcyBHcmFwaCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnZlcnRleG1hcCA9IHt9O1xuICB9XG4gIFxuICBnZXRDeWNsZXMoKSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IHRoaXMuZ2V0Q29tcG9uZW50cygpLFxuICAgICAgICAgIGN5Y2xlcyA9IGNvbXBvbmVudHMucmVkdWNlKGZ1bmN0aW9uKGN5Y2xlcywgY29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnRDeWNsaWMgPSBjb21wb25lbnQuaXNDeWNsaWMoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudEN5Y2xpYykge1xuICAgICAgICAgICAgICBjb25zdCBjeWNsZSA9IEN5Y2xlLmZyb21Db21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGN5Y2xlcy5wdXNoKGN5Y2xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGN5Y2xlcztcbiAgICAgICAgICB9LCBbXSk7XG4gICAgXG4gICAgcmV0dXJuIGN5Y2xlcztcbiAgfVxuICBcbiAgZ2V0VmVydGljZXMoKSB7XG4gICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnZlcnRleG1hcCksXG4gICAgICAgICAgdmVydGljZXMgPSBuYW1lcy5tYXAoZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdGhpcy52ZXJ0ZXhtYXBbbmFtZV07XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0aWNlczsgICAgICAgIFxuICB9XG5cbiAgZ2V0Q29tcG9uZW50cygpIHtcbiAgICBjb25zdCBzdGFjayA9IG5ldyBTdGFjaygpLFxuICAgICAgICAgIHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICAgIGNvbXBvbmVudHMgPSBbXTtcblxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICBmdW5jdGlvbiBzdHJvbmdseUNvbm5lY3RWZXJ0ZXgodmVydGV4KSB7XG4gICAgICBjb25zdCBsb3dlc3RJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICAgIHZlcnRleC5zZXRJbmRleChpbmRleCk7XG5cbiAgICAgIHZlcnRleC5zZXRMb3dlc3RJbmRleChsb3dlc3RJbmRleCk7XG5cbiAgICAgIGluZGV4Kys7XG5cbiAgICAgIHN0YWNrLnB1c2godmVydGV4KTtcblxuICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGljZXMgPSB2ZXJ0ZXguZ2V0U3VjY2Vzc29yVmVydGljZXMoKTtcblxuICAgICAgc3VjY2Vzc29yVmVydGljZXMuZm9yRWFjaChmdW5jdGlvbihzdWNjZXNzb3JWZXJ0ZXgpIHtcbiAgICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4VW5pbmRleGVkID0gc3VjY2Vzc29yVmVydGV4LmlzVW5pbmRleGVkKCksXG4gICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleE5vdFN0cm9uZ2x5Q29ubmVjdGVkID0gc3VjY2Vzc29yVmVydGV4VW5pbmRleGVkOyAgLy8vXG5cbiAgICAgICAgaWYgKHN1Y2Nlc3NvclZlcnRleE5vdFN0cm9uZ2x5Q29ubmVjdGVkKSB7XG4gICAgICAgICAgc3Ryb25nbHlDb25uZWN0VmVydGV4KHN1Y2Nlc3NvclZlcnRleCk7XG5cbiAgICAgICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhMb3dlc3RJbmRleCA9IHN1Y2Nlc3NvclZlcnRleC5nZXRMb3dlc3RJbmRleCgpO1xuXG4gICAgICAgICAgdmVydGV4LnVwZGF0ZUxvd2VzdEluZGV4KHN1Y2Nlc3NvclZlcnRleExvd2VzdEluZGV4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhTdGFja2VkID0gc3VjY2Vzc29yVmVydGV4LmlzU3RhY2tlZCgpO1xuXG4gICAgICAgICAgaWYgKHN1Y2Nlc3NvclZlcnRleFN0YWNrZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleEluZGV4ID0gc3VjY2Vzc29yVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgICAgICAgIHZlcnRleC51cGRhdGVMb3dlc3RJbmRleChzdWNjZXNzb3JWZXJ0ZXhJbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdmVydGV4TG93ZXN0ID0gdmVydGV4LmlzTG93ZXN0KCk7XG5cbiAgICAgIGlmICh2ZXJ0ZXhMb3dlc3QpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gQ29tcG9uZW50LmZyb21TdGFja0FuZFZlcnRleChzdGFjaywgdmVydGV4KTtcblxuICAgICAgICBjb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2ZXJ0aWNlcy5mb3JFYWNoKGZ1bmN0aW9uKHZlcnRleCkge1xuICAgICAgY29uc3QgdmVydGV4VW5pbmRleGVkID0gdmVydGV4LmlzVW5pbmRleGVkKCk7XG5cbiAgICAgIGlmICh2ZXJ0ZXhVbmluZGV4ZWQpIHtcbiAgICAgICAgc3Ryb25nbHlDb25uZWN0VmVydGV4KHZlcnRleCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29tcG9uZW50cztcbiAgfVxuXG4gIGFkZFZlcnRleChuYW1lLCBkZXNjZW5kYW50VmVydGV4TmFtZXMpIHtcbiAgICBsZXQgc3VjY2Vzc29yVmVydGljZXMgPSBkZXNjZW5kYW50VmVydGV4TmFtZXMubWFwKGZ1bmN0aW9uKGRlc2NlbmRhbnRWZXJ0ZXhOYW1lKSB7XG4gICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhOYW1lID0gZGVzY2VuZGFudFZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgbGV0IHN1Y2Nlc3NvclZlcnRleCA9IHRoaXMudmVydGV4bWFwW3N1Y2Nlc3NvclZlcnRleE5hbWVdO1xuXG4gICAgICBpZiAoc3VjY2Vzc29yVmVydGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3VjY2Vzc29yVmVydGV4ID0gVmVydGV4LmZyb21OYW1lKHN1Y2Nlc3NvclZlcnRleE5hbWUpO1xuXG4gICAgICAgIHRoaXMudmVydGV4bWFwW3N1Y2Nlc3NvclZlcnRleE5hbWVdID0gc3VjY2Vzc29yVmVydGV4O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4O1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICBsZXQgdmVydGV4ID0gdGhpcy52ZXJ0ZXhtYXBbbmFtZV07XG5cbiAgICBpZiAodmVydGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZlcnRleCA9IFZlcnRleC5mcm9tTmFtZShuYW1lKTtcblxuICAgICAgdGhpcy52ZXJ0ZXhtYXBbbmFtZV0gPSB2ZXJ0ZXg7XG4gICAgfVxuXG4gICAgc3VjY2Vzc29yVmVydGljZXMgPSBzdWNjZXNzb3JWZXJ0aWNlcy5jb25jYXQoW10pLnJldmVyc2UoKTsgLy8vXG5cbiAgICB2ZXJ0ZXguc2V0U3VjY2Vzc29yVmVydGljZXMoc3VjY2Vzc29yVmVydGljZXMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JhcGg7XG4iXX0=