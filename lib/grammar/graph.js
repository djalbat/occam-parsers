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
  }], [{
    key: 'fromUnitRulesProductions',
    value: function fromUnitRulesProductions(unitRulesProductions) {
      var graph = new Graph();

      unitRulesProductions.forEach(function (unitRulesProduction) {
        var productionName = unitRulesProduction.getName(),
            productionNames = unitRulesProduction.getProductionNames(),
            vertexName = productionName,
            ///
        descendantVertexNames = productionNames; ///

        graph.addVertex(vertexName, descendantVertexNames);
      });

      return graph;
    }
  }]);

  return Graph;
}();

module.exports = Graph;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFtbWFyL2dyYXBoLmpzIl0sIm5hbWVzIjpbIkN5Y2xlIiwicmVxdWlyZSIsIlN0YWNrIiwiVmVydGV4IiwiQ29tcG9uZW50IiwiR3JhcGgiLCJ2ZXJ0ZXhtYXAiLCJjb21wb25lbnRzIiwiZ2V0Q29tcG9uZW50cyIsImN5Y2xlcyIsInJlZHVjZSIsImNvbXBvbmVudCIsImNvbXBvbmVudEN5Y2xpYyIsImlzQ3ljbGljIiwiY3ljbGUiLCJmcm9tQ29tcG9uZW50IiwicHVzaCIsIm5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsInZlcnRpY2VzIiwibWFwIiwibmFtZSIsInZlcnRleCIsImJpbmQiLCJzdGFjayIsImdldFZlcnRpY2VzIiwiaW5kZXgiLCJzdHJvbmdseUNvbm5lY3RWZXJ0ZXgiLCJsb3dlc3RJbmRleCIsInNldEluZGV4Iiwic2V0TG93ZXN0SW5kZXgiLCJzdWNjZXNzb3JWZXJ0aWNlcyIsImdldFN1Y2Nlc3NvclZlcnRpY2VzIiwiZm9yRWFjaCIsInN1Y2Nlc3NvclZlcnRleCIsInN1Y2Nlc3NvclZlcnRleFVuaW5kZXhlZCIsImlzVW5pbmRleGVkIiwic3VjY2Vzc29yVmVydGV4Tm90U3Ryb25nbHlDb25uZWN0ZWQiLCJzdWNjZXNzb3JWZXJ0ZXhMb3dlc3RJbmRleCIsImdldExvd2VzdEluZGV4IiwidXBkYXRlTG93ZXN0SW5kZXgiLCJzdWNjZXNzb3JWZXJ0ZXhTdGFja2VkIiwiaXNTdGFja2VkIiwic3VjY2Vzc29yVmVydGV4SW5kZXgiLCJnZXRJbmRleCIsInZlcnRleExvd2VzdCIsImlzTG93ZXN0IiwiZnJvbVN0YWNrQW5kVmVydGV4IiwidmVydGV4VW5pbmRleGVkIiwiZGVzY2VuZGFudFZlcnRleE5hbWVzIiwiZGVzY2VuZGFudFZlcnRleE5hbWUiLCJzdWNjZXNzb3JWZXJ0ZXhOYW1lIiwidW5kZWZpbmVkIiwiZnJvbU5hbWUiLCJjb25jYXQiLCJyZXZlcnNlIiwic2V0U3VjY2Vzc29yVmVydGljZXMiLCJ1bml0UnVsZXNQcm9kdWN0aW9ucyIsImdyYXBoIiwidW5pdFJ1bGVzUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25OYW1lIiwiZ2V0TmFtZSIsInByb2R1Y3Rpb25OYW1lcyIsImdldFByb2R1Y3Rpb25OYW1lcyIsInZlcnRleE5hbWUiLCJhZGRWZXJ0ZXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxlQUFSLENBQWQ7QUFBQSxJQUNNQyxRQUFRRCxRQUFRLGVBQVIsQ0FEZDtBQUFBLElBRU1FLFNBQVNGLFFBQVEsZ0JBQVIsQ0FGZjtBQUFBLElBR01HLFlBQVlILFFBQVEsbUJBQVIsQ0FIbEI7O0lBS01JLEs7QUFDSixtQkFBZTtBQUFBOztBQUNiLFNBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDRDs7OztnQ0FFVztBQUNWLFVBQU1DLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLFNBQVNGLFdBQVdHLE1BQVgsQ0FBa0IsVUFBU0QsTUFBVCxFQUFpQkUsU0FBakIsRUFBNEI7QUFDckQsWUFBTUMsa0JBQWtCRCxVQUFVRSxRQUFWLEVBQXhCOztBQUVBLFlBQUlELGVBQUosRUFBcUI7QUFDbkIsY0FBTUUsUUFBUWQsTUFBTWUsYUFBTixDQUFvQkosU0FBcEIsQ0FBZDs7QUFFQUYsaUJBQU9PLElBQVAsQ0FBWUYsS0FBWjtBQUNEOztBQUVELGVBQU9MLE1BQVA7QUFDRCxPQVZRLEVBVU4sRUFWTSxDQURmOztBQWFBLGFBQU9BLE1BQVA7QUFDRDs7O2tDQUVhO0FBQ1osVUFBTVEsUUFBUUMsT0FBT0MsSUFBUCxDQUFZLEtBQUtiLFNBQWpCLENBQWQ7QUFBQSxVQUNNYyxXQUFXSCxNQUFNSSxHQUFOLENBQVUsVUFBU0MsSUFBVCxFQUFlO0FBQ2xDLFlBQU1DLFNBQVMsS0FBS2pCLFNBQUwsQ0FBZWdCLElBQWYsQ0FBZjs7QUFFQSxlQUFPQyxNQUFQO0FBQ0QsT0FKb0IsQ0FJbkJDLElBSm1CLENBSWQsSUFKYyxDQUFWLENBRGpCOztB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TUMsUUFBUSxJQUFJdEQsS0FBSixFQUFkOztBQUVBcUQsMkJBQXFCeEIsT0FBckIsQ0FBNkIsVUFBUzBCLG1CQUFULEVBQThCO0FBQ3pELFlBQU1DLGlCQUFpQkQsb0JBQW9CRSxPQUFwQixFQUF2QjtBQUFBLFlBQ01DLGtCQUFrQkgsb0JBQW9CSSxrQkFBcEIsRUFEeEI7QUFBQSxZQUVNQyxhQUFhSixjQUZuQjtBQUFBLFlBRW9DO0FBQzlCWCxnQ0FBd0JhLGVBSDlCLENBRHlELENBSVY7O0FBRS9DSixjQUFNTyxTQUFOLENBQWdCRCxVQUFoQixFQUE0QmYscUJBQTVCO0FBQ0QsT0FQRDs7QUFTQSxhQUFPUyxLQUFQO0FBQ0Q7Ozs7OztBQUdIUSxPQUFPQyxPQUFQLEdBQWlCL0QsS0FBakIiLCJmaWxlIjoiZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEN5Y2xlID0gcmVxdWlyZSgnLi9ncmFwaC9jeWNsZScpLFxuICAgICAgU3RhY2sgPSByZXF1aXJlKCcuL2dyYXBoL3N0YWNrJyksXG4gICAgICBWZXJ0ZXggPSByZXF1aXJlKCcuL2dyYXBoL3ZlcnRleCcpLFxuICAgICAgQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9ncmFwaC9jb21wb25lbnQnKTtcblxuY2xhc3MgR3JhcGgge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy52ZXJ0ZXhtYXAgPSB7fTtcbiAgfVxuICBcbiAgZ2V0Q3ljbGVzKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgICBjeWNsZXMgPSBjb21wb25lbnRzLnJlZHVjZShmdW5jdGlvbihjeWNsZXMsIGNvbXBvbmVudCkge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q3ljbGljID0gY29tcG9uZW50LmlzQ3ljbGljKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRDeWNsaWMpIHtcbiAgICAgICAgICAgICAgY29uc3QgY3ljbGUgPSBDeWNsZS5mcm9tQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBjeWNsZXMucHVzaChjeWNsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBjeWNsZXM7XG4gICAgICAgICAgfSwgW10pO1xuICAgIFxuICAgIHJldHVybiBjeWNsZXM7XG4gIH1cbiAgXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXModGhpcy52ZXJ0ZXhtYXApLFxuICAgICAgICAgIHZlcnRpY2VzID0gbmFtZXMubWFwKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHRoaXMudmVydGV4bWFwW25hbWVdO1xuICBcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGljZXM7ICAgICAgICBcbiAgfVxuXG4gIGdldENvbXBvbmVudHMoKSB7XG4gICAgY29uc3Qgc3RhY2sgPSBuZXcgU3RhY2soKSxcbiAgICAgICAgICB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgICBjb21wb25lbnRzID0gW107XG5cbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgZnVuY3Rpb24gc3Ryb25nbHlDb25uZWN0VmVydGV4KHZlcnRleCkge1xuICAgICAgY29uc3QgbG93ZXN0SW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgICB2ZXJ0ZXguc2V0SW5kZXgoaW5kZXgpO1xuXG4gICAgICB2ZXJ0ZXguc2V0TG93ZXN0SW5kZXgobG93ZXN0SW5kZXgpO1xuXG4gICAgICBpbmRleCsrO1xuXG4gICAgICBzdGFjay5wdXNoKHZlcnRleCk7XG5cbiAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRpY2VzID0gdmVydGV4LmdldFN1Y2Nlc3NvclZlcnRpY2VzKCk7XG5cbiAgICAgIHN1Y2Nlc3NvclZlcnRpY2VzLmZvckVhY2goZnVuY3Rpb24oc3VjY2Vzc29yVmVydGV4KSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleFVuaW5kZXhlZCA9IHN1Y2Nlc3NvclZlcnRleC5pc1VuaW5kZXhlZCgpLFxuICAgICAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOb3RTdHJvbmdseUNvbm5lY3RlZCA9IHN1Y2Nlc3NvclZlcnRleFVuaW5kZXhlZDsgIC8vL1xuXG4gICAgICAgIGlmIChzdWNjZXNzb3JWZXJ0ZXhOb3RTdHJvbmdseUNvbm5lY3RlZCkge1xuICAgICAgICAgIHN0cm9uZ2x5Q29ubmVjdFZlcnRleChzdWNjZXNzb3JWZXJ0ZXgpO1xuXG4gICAgICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4TG93ZXN0SW5kZXggPSBzdWNjZXNzb3JWZXJ0ZXguZ2V0TG93ZXN0SW5kZXgoKTtcblxuICAgICAgICAgIHZlcnRleC51cGRhdGVMb3dlc3RJbmRleChzdWNjZXNzb3JWZXJ0ZXhMb3dlc3RJbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4U3RhY2tlZCA9IHN1Y2Nlc3NvclZlcnRleC5pc1N0YWNrZWQoKTtcblxuICAgICAgICAgIGlmIChzdWNjZXNzb3JWZXJ0ZXhTdGFja2VkKSB7XG4gICAgICAgICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhJbmRleCA9IHN1Y2Nlc3NvclZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgICAgICB2ZXJ0ZXgudXBkYXRlTG93ZXN0SW5kZXgoc3VjY2Vzc29yVmVydGV4SW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHZlcnRleExvd2VzdCA9IHZlcnRleC5pc0xvd2VzdCgpO1xuXG4gICAgICBpZiAodmVydGV4TG93ZXN0KSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IENvbXBvbmVudC5mcm9tU3RhY2tBbmRWZXJ0ZXgoc3RhY2ssIHZlcnRleCk7XG5cbiAgICAgICAgY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmVydGljZXMuZm9yRWFjaChmdW5jdGlvbih2ZXJ0ZXgpIHtcbiAgICAgIGNvbnN0IHZlcnRleFVuaW5kZXhlZCA9IHZlcnRleC5pc1VuaW5kZXhlZCgpO1xuXG4gICAgICBpZiAodmVydGV4VW5pbmRleGVkKSB7XG4gICAgICAgIHN0cm9uZ2x5Q29ubmVjdFZlcnRleCh2ZXJ0ZXgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gIH1cblxuICBhZGRWZXJ0ZXgobmFtZSwgZGVzY2VuZGFudFZlcnRleE5hbWVzKSB7XG4gICAgbGV0IHN1Y2Nlc3NvclZlcnRpY2VzID0gZGVzY2VuZGFudFZlcnRleE5hbWVzLm1hcChmdW5jdGlvbihkZXNjZW5kYW50VmVydGV4TmFtZSkge1xuICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4TmFtZSA9IGRlc2NlbmRhbnRWZXJ0ZXhOYW1lOyAgLy8vXG5cbiAgICAgIGxldCBzdWNjZXNzb3JWZXJ0ZXggPSB0aGlzLnZlcnRleG1hcFtzdWNjZXNzb3JWZXJ0ZXhOYW1lXTtcblxuICAgICAgaWYgKHN1Y2Nlc3NvclZlcnRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN1Y2Nlc3NvclZlcnRleCA9IFZlcnRleC5mcm9tTmFtZShzdWNjZXNzb3JWZXJ0ZXhOYW1lKTtcblxuICAgICAgICB0aGlzLnZlcnRleG1hcFtzdWNjZXNzb3JWZXJ0ZXhOYW1lXSA9IHN1Y2Nlc3NvclZlcnRleDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleDtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgbGV0IHZlcnRleCA9IHRoaXMudmVydGV4bWFwW25hbWVdO1xuXG4gICAgaWYgKHZlcnRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbU5hbWUobmFtZSk7XG5cbiAgICAgIHRoaXMudmVydGV4bWFwW25hbWVdID0gdmVydGV4O1xuICAgIH1cblxuICAgIHN1Y2Nlc3NvclZlcnRpY2VzID0gc3VjY2Vzc29yVmVydGljZXMuY29uY2F0KFtdKS5yZXZlcnNlKCk7IC8vL1xuXG4gICAgdmVydGV4LnNldFN1Y2Nlc3NvclZlcnRpY2VzKHN1Y2Nlc3NvclZlcnRpY2VzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVW5pdFJ1bGVzUHJvZHVjdGlvbnModW5pdFJ1bGVzUHJvZHVjdGlvbnMpIHtcbiAgICBjb25zdCBncmFwaCA9IG5ldyBHcmFwaCgpO1xuICBcbiAgICB1bml0UnVsZXNQcm9kdWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHVuaXRSdWxlc1Byb2R1Y3Rpb24pIHtcbiAgICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gdW5pdFJ1bGVzUHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgICBwcm9kdWN0aW9uTmFtZXMgPSB1bml0UnVsZXNQcm9kdWN0aW9uLmdldFByb2R1Y3Rpb25OYW1lcygpLFxuICAgICAgICAgICAgdmVydGV4TmFtZSA9IHByb2R1Y3Rpb25OYW1lLCAgLy8vXG4gICAgICAgICAgICBkZXNjZW5kYW50VmVydGV4TmFtZXMgPSBwcm9kdWN0aW9uTmFtZXM7IC8vL1xuICBcbiAgICAgIGdyYXBoLmFkZFZlcnRleCh2ZXJ0ZXhOYW1lLCBkZXNjZW5kYW50VmVydGV4TmFtZXMpO1xuICAgIH0pO1xuICBcbiAgICByZXR1cm4gZ3JhcGg7XG4gIH0gIFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyYXBoO1xuIl19