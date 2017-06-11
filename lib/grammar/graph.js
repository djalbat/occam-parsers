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
    key: 'generateCycles',
    value: function generateCycles() {
      var components = this.generateComponents(),
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
    key: 'generateComponents',
    value: function generateComponents() {
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
    key: 'isVertexPresent',
    value: function isVertexPresent(vertexName) {
      var vertexPresent = this.vertexmap[vertexName] !== undefined;

      return vertexPresent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFtbWFyL2dyYXBoLmpzIl0sIm5hbWVzIjpbIkN5Y2xlIiwicmVxdWlyZSIsIlN0YWNrIiwiVmVydGV4IiwiQ29tcG9uZW50IiwiR3JhcGgiLCJ2ZXJ0ZXhtYXAiLCJuYW1lcyIsIk9iamVjdCIsImtleXMiLCJ2ZXJ0aWNlcyIsIm1hcCIsIm5hbWUiLCJ2ZXJ0ZXgiLCJiaW5kIiwiY29tcG9uZW50cyIsImdlbmVyYXRlQ29tcG9uZW50cyIsImN5Y2xlcyIsInJlZHVjZSIsImNvbXBvbmVudCIsImNvbXBvbmVudEN5Y2xpYyIsImlzQ3ljbGljIiwiY3ljbGUiLCJmcm9tQ29tcG9uZW50IiwicHVzaCIsInN0YWNrIiwiZ2V0VmVydGljZXMiLCJpbmRleCIsInN0cm9uZ2x5Q29ubmVjdFZlcnRleCIsImxvd2VzdEluZGV4Iiwic2V0SW5kZXgiLCJzZXRMb3dlc3RJbmRleCIsInN1Y2Nlc3NvclZlcnRpY2VzIiwiZ2V0U3VjY2Vzc29yVmVydGljZXMiLCJmb3JFYWNoIiwic3VjY2Vzc29yVmVydGV4Iiwic3VjY2Vzc29yVmVydGV4VW5pbmRleGVkIiwiaXNVbmluZGV4ZWQiLCJzdWNjZXNzb3JWZXJ0ZXhOb3RTdHJvbmdseUNvbm5lY3RlZCIsInN1Y2Nlc3NvclZlcnRleExvd2VzdEluZGV4IiwiZ2V0TG93ZXN0SW5kZXgiLCJ1cGRhdGVMb3dlc3RJbmRleCIsInN1Y2Nlc3NvclZlcnRleFN0YWNrZWQiLCJpc1N0YWNrZWQiLCJzdWNjZXNzb3JWZXJ0ZXhJbmRleCIsImdldEluZGV4IiwidmVydGV4TG93ZXN0IiwiaXNMb3dlc3QiLCJmcm9tU3RhY2tBbmRWZXJ0ZXgiLCJ2ZXJ0ZXhVbmluZGV4ZWQiLCJ2ZXJ0ZXhOYW1lIiwidmVydGV4UHJlc2VudCIsInVuZGVmaW5lZCIsImRlc2NlbmRhbnRWZXJ0ZXhOYW1lcyIsImRlc2NlbmRhbnRWZXJ0ZXhOYW1lIiwic3VjY2Vzc29yVmVydGV4TmFtZSIsImZyb21OYW1lIiwiY29uY2F0IiwicmV2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LCJmaWxlIjoiZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEN5Y2xlID0gcmVxdWlyZSgnLi9ncmFwaC9jeWNsZScpLFxuICAgICAgU3RhY2sgPSByZXF1aXJlKCcuL2dyYXBoL3N0YWNrJyksXG4gICAgICBWZXJ0ZXggPSByZXF1aXJlKCcuL2dyYXBoL3ZlcnRleCcpLFxuICAgICAgQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9ncmFwaC9jb21wb25lbnQnKTtcblxuY2xhc3MgR3JhcGgge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy52ZXJ0ZXhtYXAgPSB7fTtcbiAgfVxuICBcbiAgZ2V0VmVydGljZXMoKSB7XG4gICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnZlcnRleG1hcCksXG4gICAgICAgICAgdmVydGljZXMgPSBuYW1lcy5tYXAoZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdGhpcy52ZXJ0ZXhtYXBbbmFtZV07XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0aWNlczsgICAgICAgIFxuICB9XG5cbiAgZ2VuZXJhdGVDeWNsZXMoKSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IHRoaXMuZ2VuZXJhdGVDb21wb25lbnRzKCksXG4gICAgICAgICAgY3ljbGVzID0gY29tcG9uZW50cy5yZWR1Y2UoZnVuY3Rpb24oY3ljbGVzLCBjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEN5Y2xpYyA9IGNvbXBvbmVudC5pc0N5Y2xpYygpO1xuICBcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRDeWNsaWMpIHtcbiAgICAgICAgICAgICAgY29uc3QgY3ljbGUgPSBDeWNsZS5mcm9tQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gIFxuICAgICAgICAgICAgICBjeWNsZXMucHVzaChjeWNsZSk7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGN5Y2xlcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gY3ljbGVzO1xuICB9XG5cbiAgZ2VuZXJhdGVDb21wb25lbnRzKCkge1xuICAgIGNvbnN0IHN0YWNrID0gbmV3IFN0YWNrKCksXG4gICAgICAgICAgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgICAgY29tcG9uZW50cyA9IFtdO1xuXG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGZ1bmN0aW9uIHN0cm9uZ2x5Q29ubmVjdFZlcnRleCh2ZXJ0ZXgpIHtcbiAgICAgIGNvbnN0IGxvd2VzdEluZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgICAgdmVydGV4LnNldEluZGV4KGluZGV4KTtcblxuICAgICAgdmVydGV4LnNldExvd2VzdEluZGV4KGxvd2VzdEluZGV4KTtcblxuICAgICAgaW5kZXgrKztcblxuICAgICAgc3RhY2sucHVzaCh2ZXJ0ZXgpO1xuXG4gICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0aWNlcyA9IHZlcnRleC5nZXRTdWNjZXNzb3JWZXJ0aWNlcygpO1xuXG4gICAgICBzdWNjZXNzb3JWZXJ0aWNlcy5mb3JFYWNoKGZ1bmN0aW9uKHN1Y2Nlc3NvclZlcnRleCkge1xuICAgICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhVbmluZGV4ZWQgPSBzdWNjZXNzb3JWZXJ0ZXguaXNVbmluZGV4ZWQoKSxcbiAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGV4Tm90U3Ryb25nbHlDb25uZWN0ZWQgPSBzdWNjZXNzb3JWZXJ0ZXhVbmluZGV4ZWQ7ICAvLy9cblxuICAgICAgICBpZiAoc3VjY2Vzc29yVmVydGV4Tm90U3Ryb25nbHlDb25uZWN0ZWQpIHtcbiAgICAgICAgICBzdHJvbmdseUNvbm5lY3RWZXJ0ZXgoc3VjY2Vzc29yVmVydGV4KTtcblxuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleExvd2VzdEluZGV4ID0gc3VjY2Vzc29yVmVydGV4LmdldExvd2VzdEluZGV4KCk7XG5cbiAgICAgICAgICB2ZXJ0ZXgudXBkYXRlTG93ZXN0SW5kZXgoc3VjY2Vzc29yVmVydGV4TG93ZXN0SW5kZXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleFN0YWNrZWQgPSBzdWNjZXNzb3JWZXJ0ZXguaXNTdGFja2VkKCk7XG5cbiAgICAgICAgICBpZiAoc3VjY2Vzc29yVmVydGV4U3RhY2tlZCkge1xuICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4SW5kZXggPSBzdWNjZXNzb3JWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgICAgICAgICAgdmVydGV4LnVwZGF0ZUxvd2VzdEluZGV4KHN1Y2Nlc3NvclZlcnRleEluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB2ZXJ0ZXhMb3dlc3QgPSB2ZXJ0ZXguaXNMb3dlc3QoKTtcblxuICAgICAgaWYgKHZlcnRleExvd2VzdCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBDb21wb25lbnQuZnJvbVN0YWNrQW5kVmVydGV4KHN0YWNrLCB2ZXJ0ZXgpO1xuXG4gICAgICAgIGNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZlcnRpY2VzLmZvckVhY2goZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICBjb25zdCB2ZXJ0ZXhVbmluZGV4ZWQgPSB2ZXJ0ZXguaXNVbmluZGV4ZWQoKTtcblxuICAgICAgaWYgKHZlcnRleFVuaW5kZXhlZCkge1xuICAgICAgICBzdHJvbmdseUNvbm5lY3RWZXJ0ZXgodmVydGV4KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgaXNWZXJ0ZXhQcmVzZW50KHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gKHRoaXMudmVydGV4bWFwW3ZlcnRleE5hbWVdICE9PSB1bmRlZmluZWQpO1xuXG4gICAgcmV0dXJuIHZlcnRleFByZXNlbnQ7XG4gIH1cblxuICBhZGRWZXJ0ZXgobmFtZSwgZGVzY2VuZGFudFZlcnRleE5hbWVzKSB7XG4gICAgbGV0IHN1Y2Nlc3NvclZlcnRpY2VzID0gZGVzY2VuZGFudFZlcnRleE5hbWVzLm1hcChmdW5jdGlvbihkZXNjZW5kYW50VmVydGV4TmFtZSkge1xuICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4TmFtZSA9IGRlc2NlbmRhbnRWZXJ0ZXhOYW1lOyAgLy8vXG5cbiAgICAgIGxldCBzdWNjZXNzb3JWZXJ0ZXggPSB0aGlzLnZlcnRleG1hcFtzdWNjZXNzb3JWZXJ0ZXhOYW1lXTtcblxuICAgICAgaWYgKHN1Y2Nlc3NvclZlcnRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN1Y2Nlc3NvclZlcnRleCA9IFZlcnRleC5mcm9tTmFtZShzdWNjZXNzb3JWZXJ0ZXhOYW1lKTtcblxuICAgICAgICB0aGlzLnZlcnRleG1hcFtzdWNjZXNzb3JWZXJ0ZXhOYW1lXSA9IHN1Y2Nlc3NvclZlcnRleDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleDtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgbGV0IHZlcnRleCA9IHRoaXMudmVydGV4bWFwW25hbWVdO1xuXG4gICAgaWYgKHZlcnRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbU5hbWUobmFtZSk7XG5cbiAgICAgIHRoaXMudmVydGV4bWFwW25hbWVdID0gdmVydGV4O1xuICAgIH1cblxuICAgIHN1Y2Nlc3NvclZlcnRpY2VzID0gc3VjY2Vzc29yVmVydGljZXMuY29uY2F0KFtdKS5yZXZlcnNlKCk7IC8vL1xuXG4gICAgdmVydGV4LnNldFN1Y2Nlc3NvclZlcnRpY2VzKHN1Y2Nlc3NvclZlcnRpY2VzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyYXBoO1xuIl19