'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cycle = require('./graph/cycle'),
    Stack = require('./graph/stack'),
    Vertex = require('./graph/vertex'),
    StronglyConnectedComponent = require('./graph/stronglyConnectedComponent');

var Graph = function () {
  function Graph() {
    _classCallCheck(this, Graph);

    this.vertexmap = {};
  }

  _createClass(Graph, [{
    key: 'getCycles',
    value: function getCycles() {
      var stronglyConnectedComponents = this.getStronglyConnectedComponents(),
          cycles = stronglyConnectedComponents.reduce(function (cycles, stronglyConnectedComponent) {
        var stronglyConnectedComponentCyclic = stronglyConnectedComponent.isCyclic();

        if (stronglyConnectedComponentCyclic) {
          var cycle = Cycle.fromStronglyConnectedComponent(stronglyConnectedComponent);

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
    key: 'getStronglyConnectedComponents',
    value: function getStronglyConnectedComponents() {
      var stack = new Stack(),
          vertices = this.getVertices(),
          stronglyConnectedComponents = [];

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
          var stronglyConnectedComponent = StronglyConnectedComponent.fromStackUpToAndIncludingVertex(stack, vertex);

          stronglyConnectedComponents.push(stronglyConnectedComponent);
        }
      }

      vertices.forEach(function (vertex) {
        var vertexUnindexed = vertex.isUnindexed();

        if (vertexUnindexed) {
          stronglyConnectVertex(vertex);
        }
      });

      return stronglyConnectedComponents;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ncmFwaC5qcyJdLCJuYW1lcyI6WyJDeWNsZSIsInJlcXVpcmUiLCJTdGFjayIsIlZlcnRleCIsIlN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50IiwiR3JhcGgiLCJ2ZXJ0ZXhtYXAiLCJzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudHMiLCJnZXRTdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudHMiLCJjeWNsZXMiLCJyZWR1Y2UiLCJzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCIsInN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50Q3ljbGljIiwiaXNDeWNsaWMiLCJjeWNsZSIsImZyb21TdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCIsInB1c2giLCJuYW1lcyIsIk9iamVjdCIsImtleXMiLCJ2ZXJ0aWNlcyIsIm1hcCIsIm5hbWUiLCJ2ZXJ0ZXgiLCJiaW5kIiwic3RhY2siLCJnZXRWZXJ0aWNlcyIsImluZGV4Iiwic3Ryb25nbHlDb25uZWN0VmVydGV4IiwibG93ZXN0SW5kZXgiLCJzZXRJbmRleCIsInNldExvd2VzdEluZGV4Iiwic3VjY2Vzc29yVmVydGljZXMiLCJnZXRTdWNjZXNzb3JWZXJ0aWNlcyIsImZvckVhY2giLCJzdWNjZXNzb3JWZXJ0ZXgiLCJzdWNjZXNzb3JWZXJ0ZXhVbmluZGV4ZWQiLCJpc1VuaW5kZXhlZCIsInN1Y2Nlc3NvclZlcnRleE5vdFN0cm9uZ2x5Q29ubmVjdGVkIiwic3VjY2Vzc29yVmVydGV4TG93ZXN0SW5kZXgiLCJnZXRMb3dlc3RJbmRleCIsInVwZGF0ZUxvd2VzdEluZGV4Iiwic3VjY2Vzc29yVmVydGV4U3RhY2tlZCIsImlzU3RhY2tlZCIsInN1Y2Nlc3NvclZlcnRleEluZGV4IiwiZ2V0SW5kZXgiLCJ2ZXJ0ZXhMb3dlc3QiLCJpc0xvd2VzdCIsImZyb21TdGFja1VwVG9BbmRJbmNsdWRpbmdWZXJ0ZXgiLCJ2ZXJ0ZXhVbmluZGV4ZWQiLCJkZXNjZW5kYW50VmVydGV4TmFtZXMiLCJkZXNjZW5kYW50VmVydGV4TmFtZSIsInN1Y2Nlc3NvclZlcnRleE5hbWUiLCJ1bmRlZmluZWQiLCJmcm9tTmFtZSIsImNvbmNhdCIsInJldmVyc2UiLCJzZXRTdWNjZXNzb3JWZXJ0aWNlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLGVBQVIsQ0FBZDtBQUFBLElBQ01DLFFBQVFELFFBQVEsZUFBUixDQURkO0FBQUEsSUFFTUUsU0FBU0YsUUFBUSxnQkFBUixDQUZmO0FBQUEsSUFHTUcsNkJBQTZCSCxRQUFRLG9DQUFSLENBSG5DOztJQUtNSSxLO0FBQ0osbUJBQWU7QUFBQTs7QUFDYixTQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixVQUFNQyw4QkFBOEIsS0FBS0MsOEJBQUwsRUFBcEM7QUFBQSxVQUNNQyxTQUFTRiw0QkFBNEJHLE1BQTVCLENBQW1DLFVBQVNELE1BQVQsRUFBaUJFLDBCQUFqQixFQUE2QztBQUN2RixZQUFNQyxtQ0FBbUNELDJCQUEyQkUsUUFBM0IsRUFBekM7O0FBRUEsWUFBSUQsZ0NBQUosRUFBc0M7QUFDcEMsY0FBTUUsUUFBUWQsTUFBTWUsOEJBQU4sQ0FBcUNKLDBCQUFyQyxDQUFkOztBQUVBRixpQkFBT08sSUFBUCxDQUFZRixLQUFaO0FBQ0Q7O0FBRUQsZUFBT0wsTUFBUDtBQUNELE9BVlEsRUFVTixFQVZNLENBRGY7O0FBYUEsYUFBT0EsTUFBUDtBQUNEOzs7a0NBRWE7QUFDWixVQUFNUSxRQUFRQyxPQUFPQyxJQUFQLENBQVksS0FBS2IsU0FBakIsQ0FBZDtBQUFBLFVBQ01jLFdBQVdILE1BQU1JLEdBQU4sQ0FBVSxVQUFTQyxJQUFULEVBQWU7QUFDbEMsWUFBTUMsU0FBUyxLQUFLakIsU0FBTCxDQUFlZ0IsSUFBZixDQUFmOztBQUVBLGVBQU9DLE1BQVA7QUFDRCxPQUpvQixDQUluQkMsSUFKbUIsQ0FJZCxJQUpjLENBQVYsQ0FEakI7O0FBT0EsYUFBT0osUUFBUDtBQUNEOzs7cURB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bGUiOiJncmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ3ljbGUgPSByZXF1aXJlKCcuL2dyYXBoL2N5Y2xlJyksXG4gICAgICBTdGFjayA9IHJlcXVpcmUoJy4vZ3JhcGgvc3RhY2snKSxcbiAgICAgIFZlcnRleCA9IHJlcXVpcmUoJy4vZ3JhcGgvdmVydGV4JyksXG4gICAgICBTdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCA9IHJlcXVpcmUoJy4vZ3JhcGgvc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQnKTtcblxuY2xhc3MgR3JhcGgge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy52ZXJ0ZXhtYXAgPSB7fTtcbiAgfVxuICBcbiAgZ2V0Q3ljbGVzKCkge1xuICAgIGNvbnN0IHN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50cyA9IHRoaXMuZ2V0U3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnRzKCksXG4gICAgICAgICAgY3ljbGVzID0gc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnRzLnJlZHVjZShmdW5jdGlvbihjeWNsZXMsIHN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb25zdCBzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudEN5Y2xpYyA9IHN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50LmlzQ3ljbGljKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudEN5Y2xpYykge1xuICAgICAgICAgICAgICBjb25zdCBjeWNsZSA9IEN5Y2xlLmZyb21TdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudChzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBjeWNsZXMucHVzaChjeWNsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBjeWNsZXM7XG4gICAgICAgICAgfSwgW10pO1xuICAgIFxuICAgIHJldHVybiBjeWNsZXM7XG4gIH1cbiAgXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXModGhpcy52ZXJ0ZXhtYXApLFxuICAgICAgICAgIHZlcnRpY2VzID0gbmFtZXMubWFwKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHRoaXMudmVydGV4bWFwW25hbWVdO1xuICBcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGljZXM7ICAgICAgICBcbiAgfVxuXG4gIGdldFN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50cygpIHtcbiAgICBjb25zdCBzdGFjayA9IG5ldyBTdGFjaygpLFxuICAgICAgICAgIHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICAgIHN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGZ1bmN0aW9uIHN0cm9uZ2x5Q29ubmVjdFZlcnRleCh2ZXJ0ZXgpIHtcbiAgICAgIGNvbnN0IGxvd2VzdEluZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgICAgdmVydGV4LnNldEluZGV4KGluZGV4KTtcblxuICAgICAgdmVydGV4LnNldExvd2VzdEluZGV4KGxvd2VzdEluZGV4KTtcblxuICAgICAgaW5kZXgrKztcblxuICAgICAgc3RhY2sucHVzaCh2ZXJ0ZXgpO1xuXG4gICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0aWNlcyA9IHZlcnRleC5nZXRTdWNjZXNzb3JWZXJ0aWNlcygpO1xuXG4gICAgICBzdWNjZXNzb3JWZXJ0aWNlcy5mb3JFYWNoKGZ1bmN0aW9uKHN1Y2Nlc3NvclZlcnRleCkge1xuICAgICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhVbmluZGV4ZWQgPSBzdWNjZXNzb3JWZXJ0ZXguaXNVbmluZGV4ZWQoKSxcbiAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGV4Tm90U3Ryb25nbHlDb25uZWN0ZWQgPSBzdWNjZXNzb3JWZXJ0ZXhVbmluZGV4ZWQ7ICAvLy9cblxuICAgICAgICBpZiAoc3VjY2Vzc29yVmVydGV4Tm90U3Ryb25nbHlDb25uZWN0ZWQpIHtcbiAgICAgICAgICBzdHJvbmdseUNvbm5lY3RWZXJ0ZXgoc3VjY2Vzc29yVmVydGV4KTtcblxuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleExvd2VzdEluZGV4ID0gc3VjY2Vzc29yVmVydGV4LmdldExvd2VzdEluZGV4KCk7XG5cbiAgICAgICAgICB2ZXJ0ZXgudXBkYXRlTG93ZXN0SW5kZXgoc3VjY2Vzc29yVmVydGV4TG93ZXN0SW5kZXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleFN0YWNrZWQgPSBzdWNjZXNzb3JWZXJ0ZXguaXNTdGFja2VkKCk7XG5cbiAgICAgICAgICBpZiAoc3VjY2Vzc29yVmVydGV4U3RhY2tlZCkge1xuICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4SW5kZXggPSBzdWNjZXNzb3JWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgICAgICAgICAgdmVydGV4LnVwZGF0ZUxvd2VzdEluZGV4KHN1Y2Nlc3NvclZlcnRleEluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB2ZXJ0ZXhMb3dlc3QgPSB2ZXJ0ZXguaXNMb3dlc3QoKTtcblxuICAgICAgaWYgKHZlcnRleExvd2VzdCkge1xuICAgICAgICBjb25zdCBzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCA9IFN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50LmZyb21TdGFja1VwVG9BbmRJbmNsdWRpbmdWZXJ0ZXgoc3RhY2ssIHZlcnRleCk7XG5cbiAgICAgICAgc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnRzLnB1c2goc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZlcnRpY2VzLmZvckVhY2goZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICBjb25zdCB2ZXJ0ZXhVbmluZGV4ZWQgPSB2ZXJ0ZXguaXNVbmluZGV4ZWQoKTtcblxuICAgICAgaWYgKHZlcnRleFVuaW5kZXhlZCkge1xuICAgICAgICBzdHJvbmdseUNvbm5lY3RWZXJ0ZXgodmVydGV4KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudHM7XG4gIH1cblxuICBhZGRWZXJ0ZXgobmFtZSwgZGVzY2VuZGFudFZlcnRleE5hbWVzKSB7XG4gICAgbGV0IHN1Y2Nlc3NvclZlcnRpY2VzID0gZGVzY2VuZGFudFZlcnRleE5hbWVzLm1hcChmdW5jdGlvbihkZXNjZW5kYW50VmVydGV4TmFtZSkge1xuICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4TmFtZSA9IGRlc2NlbmRhbnRWZXJ0ZXhOYW1lOyAgLy8vXG5cbiAgICAgIGxldCBzdWNjZXNzb3JWZXJ0ZXggPSB0aGlzLnZlcnRleG1hcFtzdWNjZXNzb3JWZXJ0ZXhOYW1lXTtcblxuICAgICAgaWYgKHN1Y2Nlc3NvclZlcnRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN1Y2Nlc3NvclZlcnRleCA9IFZlcnRleC5mcm9tTmFtZShzdWNjZXNzb3JWZXJ0ZXhOYW1lKTtcblxuICAgICAgICB0aGlzLnZlcnRleG1hcFtzdWNjZXNzb3JWZXJ0ZXhOYW1lXSA9IHN1Y2Nlc3NvclZlcnRleDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleDtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgbGV0IHZlcnRleCA9IHRoaXMudmVydGV4bWFwW25hbWVdO1xuXG4gICAgaWYgKHZlcnRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbU5hbWUobmFtZSk7XG5cbiAgICAgIHRoaXMudmVydGV4bWFwW25hbWVdID0gdmVydGV4O1xuICAgIH1cblxuICAgIHN1Y2Nlc3NvclZlcnRpY2VzID0gc3VjY2Vzc29yVmVydGljZXMuY29uY2F0KFtdKS5yZXZlcnNlKCk7IC8vL1xuXG4gICAgdmVydGV4LnNldFN1Y2Nlc3NvclZlcnRpY2VzKHN1Y2Nlc3NvclZlcnRpY2VzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyYXBoO1xuIl19