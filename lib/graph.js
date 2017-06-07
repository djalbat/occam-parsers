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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ncmFwaC5qcyJdLCJuYW1lcyI6WyJDeWNsZSIsInJlcXVpcmUiLCJTdGFjayIsIlZlcnRleCIsIkNvbXBvbmVudCIsIkdyYXBoIiwidmVydGV4bWFwIiwiY29tcG9uZW50cyIsImdldENvbXBvbmVudHMiLCJjeWNsZXMiLCJyZWR1Y2UiLCJjb21wb25lbnQiLCJjb21wb25lbnRDeWNsaWMiLCJpc0N5Y2xpYyIsImN5Y2xlIiwiZnJvbUNvbXBvbmVudCIsInB1c2giLCJuYW1lcyIsIk9iamVjdCIsImtleXMiLCJ2ZXJ0aWNlcyIsIm1hcCIsIm5hbWUiLCJ2ZXJ0ZXgiLCJiaW5kIiwic3RhY2siLCJnZXRWZXJ0aWNlcyIsImluZGV4Iiwic3Ryb25nbHlDb25uZWN0VmVydGV4IiwibG93ZXN0SW5kZXgiLCJzZXRJbmRleCIsInNldExvd2VzdEluZGV4Iiwic3VjY2Vzc29yVmVydGljZXMiLCJnZXRTdWNjZXNzb3JWZXJ0aWNlcyIsImZvckVhY2giLCJzdWNjZXNzb3JWZXJ0ZXgiLCJzdWNjZXNzb3JWZXJ0ZXhVbmluZGV4ZWQiLCJpc1VuaW5kZXhlZCIsInN1Y2Nlc3NvclZlcnRleE5vdFN0cm9uZ2x5Q29ubmVjdGVkIiwic3VjY2Vzc29yVmVydGV4TG93ZXN0SW5kZXgiLCJnZXRMb3dlc3RJbmRleCIsInVwZGF0ZUxvd2VzdEluZGV4Iiwic3VjY2Vzc29yVmVydGV4U3RhY2tlZCIsImlzU3RhY2tlZCIsInN1Y2Nlc3NvclZlcnRleEluZGV4IiwiZ2V0SW5kZXgiLCJ2ZXJ0ZXhMb3dlc3QiLCJpc0xvd2VzdCIsImZyb21TdGFja0FuZFZlcnRleCIsInZlcnRleFVuaW5kZXhlZCIsImRlc2NlbmRhbnRWZXJ0ZXhOYW1lcyIsImRlc2NlbmRhbnRWZXJ0ZXhOYW1lIiwic3VjY2Vzc29yVmVydGV4TmFtZSIsInVuZGVmaW5lZCIsImZyb21OYW1lIiwiY29uY2F0IiwicmV2ZXJzZSIsInNldFN1Y2Nlc3NvclZlcnRpY2VzIiwibW9kdWxlIiwiZXhwb3J0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QUFzQkwsTUFBdEI7QUFDRDtBQUNGLE9BTkQ7O0FBUUEsYUFBT2hCLFVBQVA7QUFDRDs7OzhCQUVTZSxJLEVBQU00QixxQixFQUF1QjtBQUNyQyxVQUFJbEIsb0JBQW9Ca0Isc0JBQXNCN0IsR0FBdEIsQ0FBMEIsVUFBUzhCLG9CQUFULEVBQStCO0FBQy9FLFlBQU1DLHNCQUFzQkQsb0JBQTVCLENBRCtFLENBQzVCOztBQUVuRCxZQUFJaEIsa0JBQWtCLEtBQUs3QixTQUFMLENBQWU4QyxtQkFBZixDQUF0Qjs7QUFFQSxZQUFJakIsb0JBQW9Ca0IsU0FBeEIsRUFBbUM7QUFDakNsQiw0QkFBa0JoQyxPQUFPbUQsUUFBUCxDQUFnQkYsbUJBQWhCLENBQWxCOztBQUVBLGVBQUs5QyxTQUFMLENBQWU4QyxtQkFBZixJQUFzQ2pCLGVBQXRDO0FBQ0Q7O0FBRUQsZUFBT0EsZUFBUDtBQUNELE9BWmlELENBWWhEWCxJQVpnRCxDQVkzQyxJQVoyQyxDQUExQixDQUF4Qjs7QUFjQSxVQUFJRCxTQUFTLEtBQUtqQixTQUFMLENBQWVnQixJQUFmLENBQWI7O0FBRUEsVUFBSUMsV0FBVzhCLFNBQWYsRUFBMEI7QUFDeEI5QixpQkFBU3BCLE9BQU9tRCxRQUFQLENBQWdCaEMsSUFBaEIsQ0FBVDs7QUFFQSxhQUFLaEIsU0FBTCxDQUFlZ0IsSUFBZixJQUF1QkMsTUFBdkI7QUFDRDs7QUFFRFMsMEJBQW9CQSxrQkFBa0J1QixNQUFsQixDQUF5QixFQUF6QixFQUE2QkMsT0FBN0IsRUFBcEIsQ0F2QnFDLENBdUJ1Qjs7QUFFNURqQyxhQUFPa0Msb0JBQVAsQ0FBNEJ6QixpQkFBNUI7QUFDRDs7Ozs7O0FBR0gwQixPQUFPQyxPQUFQLEdBQWlCdEQsS0FBakIiLCJmaWxlIjoiZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEN5Y2xlID0gcmVxdWlyZSgnLi9ncmFwaC9jeWNsZScpLFxuICAgICAgU3RhY2sgPSByZXF1aXJlKCcuL2dyYXBoL3N0YWNrJyksXG4gICAgICBWZXJ0ZXggPSByZXF1aXJlKCcuL2dyYXBoL3ZlcnRleCcpLFxuICAgICAgQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9ncmFwaC9jb21wb25lbnQnKTtcblxuY2xhc3MgR3JhcGgge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy52ZXJ0ZXhtYXAgPSB7fTtcbiAgfVxuICBcbiAgZ2V0Q3ljbGVzKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgICBjeWNsZXMgPSBjb21wb25lbnRzLnJlZHVjZShmdW5jdGlvbihjeWNsZXMsIGNvbXBvbmVudCkge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q3ljbGljID0gY29tcG9uZW50LmlzQ3ljbGljKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRDeWNsaWMpIHtcbiAgICAgICAgICAgICAgY29uc3QgY3ljbGUgPSBDeWNsZS5mcm9tQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBjeWNsZXMucHVzaChjeWNsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBjeWNsZXM7XG4gICAgICAgICAgfSwgW10pO1xuICAgIFxuICAgIHJldHVybiBjeWNsZXM7XG4gIH1cbiAgXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXModGhpcy52ZXJ0ZXhtYXApLFxuICAgICAgICAgIHZlcnRpY2VzID0gbmFtZXMubWFwKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHRoaXMudmVydGV4bWFwW25hbWVdO1xuICBcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGljZXM7ICAgICAgICBcbiAgfVxuXG4gIGdldENvbXBvbmVudHMoKSB7XG4gICAgY29uc3Qgc3RhY2sgPSBuZXcgU3RhY2soKSxcbiAgICAgICAgICB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgICBjb21wb25lbnRzID0gW107XG5cbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgZnVuY3Rpb24gc3Ryb25nbHlDb25uZWN0VmVydGV4KHZlcnRleCkge1xuICAgICAgY29uc3QgbG93ZXN0SW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgICB2ZXJ0ZXguc2V0SW5kZXgoaW5kZXgpO1xuXG4gICAgICB2ZXJ0ZXguc2V0TG93ZXN0SW5kZXgobG93ZXN0SW5kZXgpO1xuXG4gICAgICBpbmRleCsrO1xuXG4gICAgICBzdGFjay5wdXNoKHZlcnRleCk7XG5cbiAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRpY2VzID0gdmVydGV4LmdldFN1Y2Nlc3NvclZlcnRpY2VzKCk7XG5cbiAgICAgIHN1Y2Nlc3NvclZlcnRpY2VzLmZvckVhY2goZnVuY3Rpb24oc3VjY2Vzc29yVmVydGV4KSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleFVuaW5kZXhlZCA9IHN1Y2Nlc3NvclZlcnRleC5pc1VuaW5kZXhlZCgpLFxuICAgICAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOb3RTdHJvbmdseUNvbm5lY3RlZCA9IHN1Y2Nlc3NvclZlcnRleFVuaW5kZXhlZDsgIC8vL1xuXG4gICAgICAgIGlmIChzdWNjZXNzb3JWZXJ0ZXhOb3RTdHJvbmdseUNvbm5lY3RlZCkge1xuICAgICAgICAgIHN0cm9uZ2x5Q29ubmVjdFZlcnRleChzdWNjZXNzb3JWZXJ0ZXgpO1xuXG4gICAgICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4TG93ZXN0SW5kZXggPSBzdWNjZXNzb3JWZXJ0ZXguZ2V0TG93ZXN0SW5kZXgoKTtcblxuICAgICAgICAgIHZlcnRleC51cGRhdGVMb3dlc3RJbmRleChzdWNjZXNzb3JWZXJ0ZXhMb3dlc3RJbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4U3RhY2tlZCA9IHN1Y2Nlc3NvclZlcnRleC5pc1N0YWNrZWQoKTtcblxuICAgICAgICAgIGlmIChzdWNjZXNzb3JWZXJ0ZXhTdGFja2VkKSB7XG4gICAgICAgICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhJbmRleCA9IHN1Y2Nlc3NvclZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgICAgICB2ZXJ0ZXgudXBkYXRlTG93ZXN0SW5kZXgoc3VjY2Vzc29yVmVydGV4SW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHZlcnRleExvd2VzdCA9IHZlcnRleC5pc0xvd2VzdCgpO1xuXG4gICAgICBpZiAodmVydGV4TG93ZXN0KSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IENvbXBvbmVudC5mcm9tU3RhY2tBbmRWZXJ0ZXgoc3RhY2ssIHZlcnRleCk7XG5cbiAgICAgICAgY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmVydGljZXMuZm9yRWFjaChmdW5jdGlvbih2ZXJ0ZXgpIHtcbiAgICAgIGNvbnN0IHZlcnRleFVuaW5kZXhlZCA9IHZlcnRleC5pc1VuaW5kZXhlZCgpO1xuXG4gICAgICBpZiAodmVydGV4VW5pbmRleGVkKSB7XG4gICAgICAgIHN0cm9uZ2x5Q29ubmVjdFZlcnRleCh2ZXJ0ZXgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gIH1cblxuICBhZGRWZXJ0ZXgobmFtZSwgZGVzY2VuZGFudFZlcnRleE5hbWVzKSB7XG4gICAgbGV0IHN1Y2Nlc3NvclZlcnRpY2VzID0gZGVzY2VuZGFudFZlcnRleE5hbWVzLm1hcChmdW5jdGlvbihkZXNjZW5kYW50VmVydGV4TmFtZSkge1xuICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4TmFtZSA9IGRlc2NlbmRhbnRWZXJ0ZXhOYW1lOyAgLy8vXG5cbiAgICAgIGxldCBzdWNjZXNzb3JWZXJ0ZXggPSB0aGlzLnZlcnRleG1hcFtzdWNjZXNzb3JWZXJ0ZXhOYW1lXTtcblxuICAgICAgaWYgKHN1Y2Nlc3NvclZlcnRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN1Y2Nlc3NvclZlcnRleCA9IFZlcnRleC5mcm9tTmFtZShzdWNjZXNzb3JWZXJ0ZXhOYW1lKTtcblxuICAgICAgICB0aGlzLnZlcnRleG1hcFtzdWNjZXNzb3JWZXJ0ZXhOYW1lXSA9IHN1Y2Nlc3NvclZlcnRleDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleDtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgbGV0IHZlcnRleCA9IHRoaXMudmVydGV4bWFwW25hbWVdO1xuXG4gICAgaWYgKHZlcnRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbU5hbWUobmFtZSk7XG5cbiAgICAgIHRoaXMudmVydGV4bWFwW25hbWVdID0gdmVydGV4O1xuICAgIH1cblxuICAgIHN1Y2Nlc3NvclZlcnRpY2VzID0gc3VjY2Vzc29yVmVydGljZXMuY29uY2F0KFtdKS5yZXZlcnNlKCk7IC8vL1xuXG4gICAgdmVydGV4LnNldFN1Y2Nlc3NvclZlcnRpY2VzKHN1Y2Nlc3NvclZlcnRpY2VzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyYXBoO1xuIl19