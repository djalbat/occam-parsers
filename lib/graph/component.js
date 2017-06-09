'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function () {
  function Component(vertices) {
    _classCallCheck(this, Component);

    this.vertices = vertices;
  }

  _createClass(Component, [{
    key: 'getVertices',
    value: function getVertices() {
      return this.vertices;
    }
  }, {
    key: 'getFirstVertex',
    value: function getFirstVertex() {
      var firstVertex = first(this.vertices);

      return firstVertex;
    }
  }, {
    key: 'isCyclic',
    value: function isCyclic() {
      var verticesLength = this.vertices.length,
          cyclic = verticesLength > 1; ///

      return cyclic;
    }
  }, {
    key: 'mapVertex',
    value: function mapVertex(callback) {
      return this.vertices.map(callback);
    }
  }], [{
    key: 'fromStackAndVertex',
    value: function fromStackAndVertex(stack, vertex) {
      var stackVertices = [];

      var stackVertex = void 0;

      do {
        stackVertex = stack.pop();

        stackVertices.push(stackVertex);
      } while (stackVertex !== vertex);

      var vertices = stackVertices,
          /// 
      component = new Component(vertices);

      return component;
    }
  }]);

  return Component;
}();

module.exports = Component;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC9jb21wb25lbnQuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwidmVydGljZXMiLCJmaXJzdFZlcnRleCIsImZpcnN0IiwidmVydGljZXNMZW5ndGgiLCJsZW5ndGgiLCJjeWNsaWMiLCJjYWxsYmFjayIsIm1hcCIsInN0YWNrIiwidmVydGV4Iiwic3RhY2tWZXJ0aWNlcyIsInN0YWNrVmVydGV4IiwicG9wIiwicHVzaCIsImNvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxTO0FBQ0oscUJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0EsUUFBWjtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUMsY0FBY0MsTUFBTSxLQUFLRixRQUFYLENBQXBCOztBQUVBLGFBQU9DLFdBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUUsaUJBQWlCLEtBQUtILFFBQUwsQ0FBY0ksTUFBckM7QUFBQSxVQUNNQyxTQUFVRixpQkFBaUIsQ0FEakMsQ0FEUyxDQUU2Qjs7QUFFdEMsYUFBT0UsTUFBUDtBQUNEOzs7OEJBRVNDLFEsRUFBVTtBQUFFLGFBQU8sS0FBS04sUUFBTCxDQUFjTyxHQUFkLENBQWtCRCxRQUFsQixDQUFQO0FBQXFDOzs7dUNBRWpDRSxLLEVBQU9DLE0sRUFBUTtBQUN2QyxVQUFNQyxnQkFBZ0IsRUFBdEI7O0FBRUEsVUFBSUMsb0JBQUo7O0FBRUEsU0FBRztBQUNEQSxzQkFBY0gsTUFBTUksR0FBTixFQUFkOztBQUVBRixzQkFBY0csSUFBZCxDQUFtQkYsV0FBbkI7QUFDRCxPQUpELFFBSVNBLGdCQUFnQkYsTUFKekI7O0FBTUEsVUFBTVQsV0FBV1UsYUFBakI7QUFBQSxVQUFnQztBQUMxQkksa0JBQVksSUFBSWYsU0FBSixDQUFjQyxRQUFkLENBRGxCOztBQUdBLGFBQU9jLFNBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJqQixTQUFqQjs7QUFFQSxTQUFTRyxLQUFULENBQWVlLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJjb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICB9XG4gIFxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcztcbiAgfVxuXG4gIGdldEZpcnN0VmVydGV4KCkge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodGhpcy52ZXJ0aWNlcyk7XG4gICAgXG4gICAgcmV0dXJuIGZpcnN0VmVydGV4O1xuICB9XG4gIFxuICBpc0N5Y2xpYygpIHtcbiAgICBjb25zdCB2ZXJ0aWNlc0xlbmd0aCA9IHRoaXMudmVydGljZXMubGVuZ3RoLFxuICAgICAgICAgIGN5Y2xpYyA9ICh2ZXJ0aWNlc0xlbmd0aCA+IDEpOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIGN5Y2xpYztcbiAgfVxuICBcbiAgbWFwVmVydGV4KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLnZlcnRpY2VzLm1hcChjYWxsYmFjayk7IH1cbiAgXG4gIHN0YXRpYyBmcm9tU3RhY2tBbmRWZXJ0ZXgoc3RhY2ssIHZlcnRleCkge1xuICAgIGNvbnN0IHN0YWNrVmVydGljZXMgPSBbXTtcbiAgICBcbiAgICBsZXQgc3RhY2tWZXJ0ZXg7XG5cbiAgICBkbyB7XG4gICAgICBzdGFja1ZlcnRleCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICBzdGFja1ZlcnRpY2VzLnB1c2goc3RhY2tWZXJ0ZXgpXG4gICAgfSB3aGlsZSAoc3RhY2tWZXJ0ZXggIT09IHZlcnRleCk7XG4gICAgXG4gICAgY29uc3QgdmVydGljZXMgPSBzdGFja1ZlcnRpY2VzLCAvLy8gXG4gICAgICAgICAgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudCh2ZXJ0aWNlcyk7XG5cbiAgICByZXR1cm4gY29tcG9uZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50O1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==