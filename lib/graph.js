'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vertex = require('./graph/vertex');

var Graph = function () {
  function Graph() {
    _classCallCheck(this, Graph);

    this.descendantVertexMap = {};
  }

  _createClass(Graph, [{
    key: 'addVertex',
    value: function addVertex(vertexName, descendantVertexNames) {
      descendantVertexNames = guaranteeArray(descendantVertexNames); ///

      var successorVertices = descendantVertexNames.map(function (descendantVertexName) {
        var successorVertex = this.descendantVertexMap[descendantVertexName];

        if (successorVertex === undefined) {
          var successorVertexName = descendantVertexName; ///

          successorVertex = Vertex.fromName(successorVertexName);

          this.descendantVertexMap[successorVertexName] = successorVertex;
        }

        return successorVertex;
      }.bind(this));

      var vertex = this.descendantVertexMap[vertexName];

      if (vertex === undefined) {
        vertex = Vertex.fromName(vertexName);

        this.descendantVertexMap[vertexName] = vertex;
      }

      var vertexSuccessVertices = successorVertices.concat([]).reverse(); ///

      vertex.setSuccessorVertices(vertexSuccessVertices);

      return this; ///
    }
  }, {
    key: 'getStronglyConnectedComponents',
    value: function getStronglyConnectedComponents() {
      var descendantVertexNames = Object.keys(this.descendantVertexMap),
          descendantVertices = descendantVertexNames.map(function (descendantVertexName) {
        var descendantVertex = this.descendantVertexMap[descendantVertexName];

        descendantVertex.reset();

        return descendantVertex;
      }.bind(this));

      var index = 0,
          stack = [],
          stronglyConnectedComponents = [];

      function stronglyConnect(vertex) {
        var lowLink = index; ///

        vertex.setIndex(index);

        vertex.setLowLink(lowLink);

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
            var successorVertexLowLink = successorVertex.getLowLink();

            var _vertexLowLink = vertex.getLowLink();

            _vertexLowLink = Math.min(_vertexLowLink, successorVertexLowLink);

            vertex.setLowLink(_vertexLowLink);
          }
        });

        var vertexIndex = vertex.getIndex(),
            vertexLowLink = vertex.getLowLink();

        if (vertexIndex === vertexLowLink) {
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

      descendantVertices.forEach(function (descendantVertex) {
        var descendantVertexIndex = descendantVertex.getIndex(),
            descendantVertexUnindexed = descendantVertexIndex < 0;

        if (descendantVertexUnindexed) {
          stronglyConnect(descendantVertex);
        }
      });

      return stronglyConnectedComponents;
    }
  }]);

  return Graph;
}();

module.exports = Graph;

function guaranteeArray(arrayOrElement) {
  return arrayOrElement instanceof Array ? arrayOrElement : [arrayOrElement];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ncmFwaC5qcyJdLCJuYW1lcyI6WyJWZXJ0ZXgiLCJyZXF1aXJlIiwiR3JhcGgiLCJkZXNjZW5kYW50VmVydGV4TWFwIiwidmVydGV4TmFtZSIsImRlc2NlbmRhbnRWZXJ0ZXhOYW1lcyIsImd1YXJhbnRlZUFycmF5Iiwic3VjY2Vzc29yVmVydGljZXMiLCJtYXAiLCJkZXNjZW5kYW50VmVydGV4TmFtZSIsInN1Y2Nlc3NvclZlcnRleCIsInVuZGVmaW5lZCIsInN1Y2Nlc3NvclZlcnRleE5hbWUiLCJmcm9tTmFtZSIsImJpbmQiLCJ2ZXJ0ZXgiLCJ2ZXJ0ZXhTdWNjZXNzVmVydGljZXMiLCJjb25jYXQiLCJyZXZlcnNlIiwic2V0U3VjY2Vzc29yVmVydGljZXMiLCJPYmplY3QiLCJrZXlzIiwiZGVzY2VuZGFudFZlcnRpY2VzIiwiZGVzY2VuZGFudFZlcnRleCIsInJlc2V0IiwiaW5kZXgiLCJzdGFjayIsInN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50cyIsInN0cm9uZ2x5Q29ubmVjdCIsImxvd0xpbmsiLCJzZXRJbmRleCIsInNldExvd0xpbmsiLCJwdXNoIiwib25TdGFjayIsInNldE9uU3RhY2siLCJnZXRTdWNjZXNzb3JWZXJ0aWNlcyIsImZvckVhY2giLCJzdWNjZXNzb3JWZXJ0ZXhJbmRleCIsImdldEluZGV4Iiwic3VjY2Vzc29yVmVydGV4T25TdGFjayIsImlzT25TdGFjayIsInN1Y2Nlc3NWZXJ0ZXhVbmluZGV4ZWQiLCJzdWNjZXNzb3JWZXJ0ZXhMb3dMaW5rIiwiZ2V0TG93TGluayIsInZlcnRleExvd0xpbmsiLCJNYXRoIiwibWluIiwidmVydGV4SW5kZXgiLCJzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCIsInN0YWNrVmVydGV4IiwicG9wIiwic3RhY2tWZXJ0ZXhPblN0YWNrIiwiZGVzY2VuZGFudFZlcnRleEluZGV4IiwiZGVzY2VuZGFudFZlcnRleFVuaW5kZXhlZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheU9y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VUFBUCxFQUFwQjs7QUFFQUMsNkJBQWdCQyxLQUFLQyxHQUFMLENBQVNGLGNBQVQsRUFBd0JGLHNCQUF4QixDQUFoQjs7QUFFQTNCLG1CQUFPZ0IsVUFBUCxDQUFrQmEsY0FBbEI7QUFDRDtBQUNGLFNBbEJEOztBQW9CQSxZQUFNRyxjQUFjaEMsT0FBT3VCLFFBQVAsRUFBcEI7QUFBQSxZQUNNTSxnQkFBZ0I3QixPQUFPNEIsVUFBUCxFQUR0Qjs7QUFHQSxZQUFJSSxnQkFBZ0JILGFBQXBCLEVBQW1DO0FBQ2pDLGNBQU1JLDZCQUE2QixFQUFuQzs7QUFFQSxjQUFJQyxvQkFBSjs7QUFFQSxhQUFHO0FBQ0RBLDBCQUFjdkIsTUFBTXdCLEdBQU4sRUFBZDs7QUFFQSxnQkFBTUMscUJBQXFCLEtBQTNCOztBQUVBRix3QkFBWWYsVUFBWixDQUF1QmlCLGtCQUF2Qjs7QUFFQUgsdUNBQTJCaEIsSUFBM0IsQ0FBZ0NpQixXQUFoQztBQUNELFdBUkQsUUFRU0EsZ0JBQWdCbEMsTUFSekI7O0FBVUFZLHNDQUE0QkssSUFBNUIsQ0FBaUNnQiwwQkFBakM7QUFDRDtBQUNGOztBQUVEMUIseUJBQW1CYyxPQUFuQixDQUEyQixVQUFTYixnQkFBVCxFQUEyQjtBQUNwRCxZQUFNNkIsd0JBQXdCN0IsaUJBQWlCZSxRQUFqQixFQUE5QjtBQUFBLFlBQ01lLDRCQUE2QkQsd0JBQXdCLENBRDNEOztBQUdBLFlBQUlDLHlCQUFKLEVBQStCO0FBQzdCekIsMEJBQWdCTCxnQkFBaEI7QUFDRDtBQUNGLE9BUEQ7O0FBU0EsYUFBT0ksMkJBQVA7QUFDRDs7Ozs7O0FBR0gyQixPQUFPQyxPQUFQLEdBQWlCckQsS0FBakI7O0FBRUEsU0FBU0ksY0FBVCxDQUF3QmtELGNBQXhCLEVBQXdDO0FBQ3RDLFNBQVFBLDBCQUEwQkMsS0FBM0IsR0FDR0QsY0FESCxHQUVLLENBQUNBLGNBQUQsQ0FGWjtBQUdEIiwiZmlsZSI6ImdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWZXJ0ZXggPSByZXF1aXJlKCcuL2dyYXBoL3ZlcnRleCcpO1xuXG5jbGFzcyBHcmFwaCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmRlc2NlbmRhbnRWZXJ0ZXhNYXAgPSB7fTtcbiAgfVxuICBcbiAgYWRkVmVydGV4KHZlcnRleE5hbWUsIGRlc2NlbmRhbnRWZXJ0ZXhOYW1lcykge1xuICAgIGRlc2NlbmRhbnRWZXJ0ZXhOYW1lcyA9IGd1YXJhbnRlZUFycmF5KGRlc2NlbmRhbnRWZXJ0ZXhOYW1lcyk7ICAvLy9cblxuICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRpY2VzID0gZGVzY2VuZGFudFZlcnRleE5hbWVzLm1hcChmdW5jdGlvbihkZXNjZW5kYW50VmVydGV4TmFtZSkge1xuICAgICAgbGV0IHN1Y2Nlc3NvclZlcnRleCA9IHRoaXMuZGVzY2VuZGFudFZlcnRleE1hcFtkZXNjZW5kYW50VmVydGV4TmFtZV07XG5cbiAgICAgIGlmIChzdWNjZXNzb3JWZXJ0ZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhOYW1lID0gZGVzY2VuZGFudFZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgICBzdWNjZXNzb3JWZXJ0ZXggPSBWZXJ0ZXguZnJvbU5hbWUoc3VjY2Vzc29yVmVydGV4TmFtZSk7XG5cbiAgICAgICAgdGhpcy5kZXNjZW5kYW50VmVydGV4TWFwW3N1Y2Nlc3NvclZlcnRleE5hbWVdID0gc3VjY2Vzc29yVmVydGV4O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4O1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICBsZXQgdmVydGV4ID0gdGhpcy5kZXNjZW5kYW50VmVydGV4TWFwW3ZlcnRleE5hbWVdO1xuXG4gICAgaWYgKHZlcnRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbU5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIHRoaXMuZGVzY2VuZGFudFZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA9IHZlcnRleDtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJ0ZXhTdWNjZXNzVmVydGljZXMgPSBzdWNjZXNzb3JWZXJ0aWNlcy5jb25jYXQoW10pLnJldmVyc2UoKTsgLy8vXG5cbiAgICB2ZXJ0ZXguc2V0U3VjY2Vzc29yVmVydGljZXModmVydGV4U3VjY2Vzc1ZlcnRpY2VzKTtcblxuICAgIHJldHVybiB0aGlzOyAgLy8vXG4gIH1cblxuICBnZXRTdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudHMoKSB7XG4gICAgY29uc3QgZGVzY2VuZGFudFZlcnRleE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5kZXNjZW5kYW50VmVydGV4TWFwKSxcbiAgICAgICAgICBkZXNjZW5kYW50VmVydGljZXMgPSBkZXNjZW5kYW50VmVydGV4TmFtZXMubWFwKGZ1bmN0aW9uKGRlc2NlbmRhbnRWZXJ0ZXhOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBkZXNjZW5kYW50VmVydGV4ID0gdGhpcy5kZXNjZW5kYW50VmVydGV4TWFwW2Rlc2NlbmRhbnRWZXJ0ZXhOYW1lXTtcblxuICAgICAgICAgICAgZGVzY2VuZGFudFZlcnRleC5yZXNldCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gZGVzY2VuZGFudFZlcnRleDtcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgdmFyIGluZGV4ID0gMCxcbiAgICAgICAgc3RhY2sgPSBbXSxcbiAgICAgICAgc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnRzID0gW107XG5cbiAgICBmdW5jdGlvbiBzdHJvbmdseUNvbm5lY3QodmVydGV4KSB7XG4gICAgICBjb25zdCBsb3dMaW5rID0gaW5kZXg7ICAvLy9cblxuICAgICAgdmVydGV4LnNldEluZGV4KGluZGV4KTtcblxuICAgICAgdmVydGV4LnNldExvd0xpbmsobG93TGluayk7XG5cbiAgICAgIGluZGV4Kys7XG5cbiAgICAgIHN0YWNrLnB1c2godmVydGV4KTtcblxuICAgICAgY29uc3Qgb25TdGFjayA9IHRydWU7XG5cbiAgICAgIHZlcnRleC5zZXRPblN0YWNrKG9uU3RhY2spO1xuXG4gICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0aWNlcyA9IHZlcnRleC5nZXRTdWNjZXNzb3JWZXJ0aWNlcygpO1xuXG4gICAgICBzdWNjZXNzb3JWZXJ0aWNlcy5mb3JFYWNoKGZ1bmN0aW9uKHN1Y2Nlc3NvclZlcnRleCkge1xuICAgICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhJbmRleCA9IHN1Y2Nlc3NvclZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhPblN0YWNrID0gc3VjY2Vzc29yVmVydGV4LmlzT25TdGFjaygpLFxuICAgICAgICAgICAgICBzdWNjZXNzVmVydGV4VW5pbmRleGVkID0gKHN1Y2Nlc3NvclZlcnRleEluZGV4IDwgMCk7IC8vL1xuXG4gICAgICAgIGlmIChzdWNjZXNzVmVydGV4VW5pbmRleGVkKSB7XG4gICAgICAgICAgc3Ryb25nbHlDb25uZWN0KHN1Y2Nlc3NvclZlcnRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHN1Y2Nlc3NWZXJ0ZXhVbmluZGV4ZWQpIHx8IHN1Y2Nlc3NvclZlcnRleE9uU3RhY2spe1xuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleExvd0xpbmsgPSBzdWNjZXNzb3JWZXJ0ZXguZ2V0TG93TGluaygpO1xuXG4gICAgICAgICAgbGV0IHZlcnRleExvd0xpbmsgPSB2ZXJ0ZXguZ2V0TG93TGluaygpO1xuXG4gICAgICAgICAgdmVydGV4TG93TGluayA9IE1hdGgubWluKHZlcnRleExvd0xpbmssIHN1Y2Nlc3NvclZlcnRleExvd0xpbmspO1xuXG4gICAgICAgICAgdmVydGV4LnNldExvd0xpbmsodmVydGV4TG93TGluayk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB2ZXJ0ZXhJbmRleCA9IHZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgdmVydGV4TG93TGluayA9IHZlcnRleC5nZXRMb3dMaW5rKCkgO1xuXG4gICAgICBpZiAodmVydGV4SW5kZXggPT09IHZlcnRleExvd0xpbmspIHtcbiAgICAgICAgY29uc3Qgc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQgPSBbXTtcblxuICAgICAgICBsZXQgc3RhY2tWZXJ0ZXg7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgIHN0YWNrVmVydGV4ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgICAgICBjb25zdCBzdGFja1ZlcnRleE9uU3RhY2sgPSBmYWxzZTtcbiAgICAgICAgICBcbiAgICAgICAgICBzdGFja1ZlcnRleC5zZXRPblN0YWNrKHN0YWNrVmVydGV4T25TdGFjayk7XG5cbiAgICAgICAgICBzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudC5wdXNoKHN0YWNrVmVydGV4KTtcbiAgICAgICAgfSB3aGlsZSAoc3RhY2tWZXJ0ZXggIT09IHZlcnRleCk7XG5cbiAgICAgICAgc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnRzLnB1c2goc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRlc2NlbmRhbnRWZXJ0aWNlcy5mb3JFYWNoKGZ1bmN0aW9uKGRlc2NlbmRhbnRWZXJ0ZXgpIHtcbiAgICAgIGNvbnN0IGRlc2NlbmRhbnRWZXJ0ZXhJbmRleCA9IGRlc2NlbmRhbnRWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgIGRlc2NlbmRhbnRWZXJ0ZXhVbmluZGV4ZWQgPSAoZGVzY2VuZGFudFZlcnRleEluZGV4IDwgMCk7XG5cbiAgICAgIGlmIChkZXNjZW5kYW50VmVydGV4VW5pbmRleGVkKSB7XG4gICAgICAgIHN0cm9uZ2x5Q29ubmVjdChkZXNjZW5kYW50VmVydGV4KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcmFwaDtcblxuZnVuY3Rpb24gZ3VhcmFudGVlQXJyYXkoYXJyYXlPckVsZW1lbnQpIHtcbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG4iXX0=