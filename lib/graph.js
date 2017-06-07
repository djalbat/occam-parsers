'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vertex = require('./graph/vertex');

var Graph = function () {
  function Graph() {
    _classCallCheck(this, Graph);

    this.vertexmap = {};
  }

  _createClass(Graph, [{
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
  }, {
    key: 'getCycles',
    value: function getCycles() {
      var stronglyConnectedComponents = this.getStronglyConnectedComponents(),
          cycles = stronglyConnectedComponents.reduce(function (cycles, stronglyConnectedComponent) {
        var stronglyConnectedComponentLength = stronglyConnectedComponent.length;

        if (stronglyConnectedComponentLength > 1) {
          var cycle = stronglyConnectedComponent;

          cycles.push(cycle);
        }

        return cycles;
      }, []);

      return cycles;
    }
  }, {
    key: 'getStronglyConnectedComponents',
    value: function getStronglyConnectedComponents() {
      var names = Object.keys(this.vertexmap),
          vertices = names.map(function (name) {
        var vertex = this.vertexmap[name];

        vertex.reset();

        return vertex;
      }.bind(this)),
          stack = [],
          stronglyConnectedComponents = [];

      var index = 0;

      function stronglyConnect(vertex) {
        var lowestIndex = index; ///

        vertex.setIndex(index);

        vertex.setLowestIndex(lowestIndex);

        index++;

        stack.push(vertex);

        var onStack = true;

        vertex.setOnStack(onStack);

        var successorVertices = vertex.getSuccessorVertices();

        successorVertices.forEach(function (successorVertex) {
          var successorVertexIndex = successorVertex.getIndex(),
              successorVertexOnStack = successorVertex.isOnStack(),
              successVertexUnindexed = successorVertexIndex < 0; ///

          if (successVertexUnindexed) {
            stronglyConnect(successorVertex);
          }

          if (successVertexUnindexed || successorVertexOnStack) {
            var successorVertexLowestIndex = successorVertex.getLowestIndex();

            var _vertexLowestIndex = vertex.getLowestIndex();

            _vertexLowestIndex = Math.min(_vertexLowestIndex, successorVertexLowestIndex);

            vertex.setLowestIndex(_vertexLowestIndex);
          }
        });

        var vertexIndex = vertex.getIndex(),
            vertexLowestIndex = vertex.getLowestIndex();

        if (vertexIndex === vertexLowestIndex) {
          var stronglyConnectedComponent = [];

          var stackVertex = void 0;

          do {
            stackVertex = stack.pop();

            var stackVertexOnStack = false;

            stackVertex.setOnStack(stackVertexOnStack);

            stronglyConnectedComponent.push(stackVertex);
          } while (stackVertex !== vertex);

          stronglyConnectedComponents.push(stronglyConnectedComponent);
        }
      }

      vertices.forEach(function (vertex) {
        var vertexIndex = vertex.getIndex(),
            vertexUnindexed = vertexIndex < 0;

        if (vertexUnindexed) {
          stronglyConnect(vertex);
        }
      });

      return stronglyConnectedComponents;
    }
  }]);

  return Graph;
}();

module.exports = Graph;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ncmFwaC5qcyJdLCJuYW1lcyI6WyJWZXJ0ZXgiLCJyZXF1aXJlIiwiR3JhcGgiLCJ2ZXJ0ZXhtYXAiLCJuYW1lIiwiZGVzY2VuZGFudFZlcnRleE5hbWVzIiwic3VjY2Vzc29yVmVydGljZXMiLCJtYXAiLCJkZXNjZW5kYW50VmVydGV4TmFtZSIsInN1Y2Nlc3NvclZlcnRleE5hbWUiLCJzdWNjZXNzb3JWZXJ0ZXgiLCJ1bmRlZmluZWQiLCJmcm9tTmFtZSIsImJpbmQiLCJ2ZXJ0ZXgiLCJjb25jYXQiLCJyZXZlcnNlIiwic2V0U3VjY2Vzc29yVmVydGljZXMiLCJzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudHMiLCJnZXRTdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudHMiLCJjeWNsZXMiLCJyZWR1Y2UiLCJzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCIsInN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50TGVuZ3RoIiwibGVuZ3RoIiwiY3ljbGUiLCJwdXNoIiwibmFtZXMiLCJPYmplY3QiLCJrZXlzIiwidmVydGljZXMiLCJyZXNldCIsInN0YWNrIiwiaW5kZXgiLCJzdHJvbmdseUNvbm5lY3QiLCJsb3dlc3RJbmRleCIsInNldEluZGV4Iiwic2V0TG93ZXN0SW5kZXgiLCJvblN0YWNrIiwic2V0T25TdGFjayIsImdldFN1Y2Nlc3NvclZlcnRpY2VzIiwiZm9yRWFjaCIsInN1Y2Nlc3NvclZlcnRleEluZGV4IiwiZ2V0SW5kZXgiLCJzdWNjZXNzb3JWZXJ0ZXhPblN0YWNrIiwiaXNPblN0YWNrIiwic3VjY2Vzc1ZlcnRleFVuaW5kZXhlZCIsInN1Y2Nlc3NvclZlcnRleExvd2VzdEluZGV4IiwiZ2V0TG93ZXN0SW5kZXgiLCJ2ZXJ0ZXhMb3dlc3RJbmRleCIsIk1hdGgiLCJtaW4iLCJ2ZXJ0ZXhJbmRleCIsInN0YWNrVmVydGV4IiwicG9wIiwic3RhY2tWZXJ0ZXhPblN0YWNrIiwidmVydGV4VW5pbmRleGVkIiwibW9kdWxlIiwiZXhwb3J0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Z3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFZlcnRleCA9IHJlcXVpcmUoJy4vZ3JhcGgvdmVydGV4Jyk7XG5cbmNsYXNzIEdyYXBoIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMudmVydGV4bWFwID0ge307XG4gIH1cbiAgXG4gIGFkZFZlcnRleChuYW1lLCBkZXNjZW5kYW50VmVydGV4TmFtZXMpIHtcbiAgICBsZXQgc3VjY2Vzc29yVmVydGljZXMgPSBkZXNjZW5kYW50VmVydGV4TmFtZXMubWFwKGZ1bmN0aW9uKGRlc2NlbmRhbnRWZXJ0ZXhOYW1lKSB7XG4gICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhOYW1lID0gZGVzY2VuZGFudFZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgbGV0IHN1Y2Nlc3NvclZlcnRleCA9IHRoaXMudmVydGV4bWFwW3N1Y2Nlc3NvclZlcnRleE5hbWVdO1xuXG4gICAgICBpZiAoc3VjY2Vzc29yVmVydGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3VjY2Vzc29yVmVydGV4ID0gVmVydGV4LmZyb21OYW1lKHN1Y2Nlc3NvclZlcnRleE5hbWUpO1xuXG4gICAgICAgIHRoaXMudmVydGV4bWFwW3N1Y2Nlc3NvclZlcnRleE5hbWVdID0gc3VjY2Vzc29yVmVydGV4O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4O1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICBsZXQgdmVydGV4ID0gdGhpcy52ZXJ0ZXhtYXBbbmFtZV07XG5cbiAgICBpZiAodmVydGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZlcnRleCA9IFZlcnRleC5mcm9tTmFtZShuYW1lKTtcblxuICAgICAgdGhpcy52ZXJ0ZXhtYXBbbmFtZV0gPSB2ZXJ0ZXg7XG4gICAgfVxuXG4gICAgc3VjY2Vzc29yVmVydGljZXMgPSBzdWNjZXNzb3JWZXJ0aWNlcy5jb25jYXQoW10pLnJldmVyc2UoKTsgLy8vXG5cbiAgICB2ZXJ0ZXguc2V0U3VjY2Vzc29yVmVydGljZXMoc3VjY2Vzc29yVmVydGljZXMpO1xuICB9XG4gIFxuICBnZXRDeWNsZXMoKSB7XG4gICAgY29uc3Qgc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnRzID0gdGhpcy5nZXRTdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudHMoKSxcbiAgICAgICAgICBjeWNsZXMgPSBzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudHMucmVkdWNlKGZ1bmN0aW9uKGN5Y2xlcywgc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50TGVuZ3RoID0gc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQubGVuZ3RoO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnRMZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGN5Y2xlID0gc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQ7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBjeWNsZXMucHVzaChjeWNsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBjeWNsZXM7XG4gICAgICAgICAgfSwgW10pO1xuICAgIFxuICAgIHJldHVybiBjeWNsZXM7XG4gIH1cblxuICBnZXRTdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudHMoKSB7XG4gICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnZlcnRleG1hcCksXG4gICAgICAgICAgdmVydGljZXMgPSBuYW1lcy5tYXAoZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdGhpcy52ZXJ0ZXhtYXBbbmFtZV07XG5cbiAgICAgICAgICAgIHZlcnRleC5yZXNldCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICAgIH0uYmluZCh0aGlzKSksXG4gICAgICAgICAgc3RhY2sgPSBbXSxcbiAgICAgICAgICBzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudHMgPSBbXTtcblxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICBmdW5jdGlvbiBzdHJvbmdseUNvbm5lY3QodmVydGV4KSB7XG4gICAgICBjb25zdCBsb3dlc3RJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICAgIHZlcnRleC5zZXRJbmRleChpbmRleCk7XG5cbiAgICAgIHZlcnRleC5zZXRMb3dlc3RJbmRleChsb3dlc3RJbmRleCk7XG5cbiAgICAgIGluZGV4Kys7XG5cbiAgICAgIHN0YWNrLnB1c2godmVydGV4KTtcblxuICAgICAgY29uc3Qgb25TdGFjayA9IHRydWU7XG5cbiAgICAgIHZlcnRleC5zZXRPblN0YWNrKG9uU3RhY2spO1xuXG4gICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0aWNlcyA9IHZlcnRleC5nZXRTdWNjZXNzb3JWZXJ0aWNlcygpO1xuXG4gICAgICBzdWNjZXNzb3JWZXJ0aWNlcy5mb3JFYWNoKGZ1bmN0aW9uKHN1Y2Nlc3NvclZlcnRleCkge1xuICAgICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhJbmRleCA9IHN1Y2Nlc3NvclZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhPblN0YWNrID0gc3VjY2Vzc29yVmVydGV4LmlzT25TdGFjaygpLFxuICAgICAgICAgICAgICBzdWNjZXNzVmVydGV4VW5pbmRleGVkID0gKHN1Y2Nlc3NvclZlcnRleEluZGV4IDwgMCk7IC8vL1xuXG4gICAgICAgIGlmIChzdWNjZXNzVmVydGV4VW5pbmRleGVkKSB7XG4gICAgICAgICAgc3Ryb25nbHlDb25uZWN0KHN1Y2Nlc3NvclZlcnRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHN1Y2Nlc3NWZXJ0ZXhVbmluZGV4ZWQpIHx8IHN1Y2Nlc3NvclZlcnRleE9uU3RhY2spe1xuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleExvd2VzdEluZGV4ID0gc3VjY2Vzc29yVmVydGV4LmdldExvd2VzdEluZGV4KCk7XG5cbiAgICAgICAgICBsZXQgdmVydGV4TG93ZXN0SW5kZXggPSB2ZXJ0ZXguZ2V0TG93ZXN0SW5kZXgoKTtcblxuICAgICAgICAgIHZlcnRleExvd2VzdEluZGV4ID0gTWF0aC5taW4odmVydGV4TG93ZXN0SW5kZXgsIHN1Y2Nlc3NvclZlcnRleExvd2VzdEluZGV4KTtcblxuICAgICAgICAgIHZlcnRleC5zZXRMb3dlc3RJbmRleCh2ZXJ0ZXhMb3dlc3RJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB2ZXJ0ZXhJbmRleCA9IHZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgdmVydGV4TG93ZXN0SW5kZXggPSB2ZXJ0ZXguZ2V0TG93ZXN0SW5kZXgoKSA7XG5cbiAgICAgIGlmICh2ZXJ0ZXhJbmRleCA9PT0gdmVydGV4TG93ZXN0SW5kZXgpIHtcbiAgICAgICAgY29uc3Qgc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQgPSBbXTtcblxuICAgICAgICBsZXQgc3RhY2tWZXJ0ZXg7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgIHN0YWNrVmVydGV4ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgICAgICBjb25zdCBzdGFja1ZlcnRleE9uU3RhY2sgPSBmYWxzZTtcbiAgICAgICAgICBcbiAgICAgICAgICBzdGFja1ZlcnRleC5zZXRPblN0YWNrKHN0YWNrVmVydGV4T25TdGFjayk7XG5cbiAgICAgICAgICBzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudC5wdXNoKHN0YWNrVmVydGV4KTtcbiAgICAgICAgfSB3aGlsZSAoc3RhY2tWZXJ0ZXggIT09IHZlcnRleCk7XG5cbiAgICAgICAgc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnRzLnB1c2goc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZlcnRpY2VzLmZvckVhY2goZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICBjb25zdCB2ZXJ0ZXhJbmRleCA9IHZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgdmVydGV4VW5pbmRleGVkID0gKHZlcnRleEluZGV4IDwgMCk7XG5cbiAgICAgIGlmICh2ZXJ0ZXhVbmluZGV4ZWQpIHtcbiAgICAgICAgc3Ryb25nbHlDb25uZWN0KHZlcnRleCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnRzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JhcGg7XG4iXX0=