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
    key: 'isNonCyclic',
    value: function isNonCyclic() {
      var cyclic = this.isCyclic(),
          nonCyclic = !cyclic;

      return nonCyclic;
    }
  }, {
    key: 'mapVertices',
    value: function mapVertices(callback) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL2dyYXBoL2NvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJ2ZXJ0aWNlcyIsImZpcnN0VmVydGV4IiwiZmlyc3QiLCJ2ZXJ0aWNlc0xlbmd0aCIsImxlbmd0aCIsImN5Y2xpYyIsImlzQ3ljbGljIiwibm9uQ3ljbGljIiwiY2FsbGJhY2siLCJtYXAiLCJzdGFjayIsInZlcnRleCIsInN0YWNrVmVydGljZXMiLCJzdGFja1ZlcnRleCIsInBvcCIsInB1c2giLCJjb21wb25lbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsUztBQUNKLHFCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtBLFFBQVo7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQU1DLGNBQWNDLE1BQU0sS0FBS0YsUUFBWCxDQUFwQjs7QUFFQSxhQUFPQyxXQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1FLGlCQUFpQixLQUFLSCxRQUFMLENBQWNJLE1BQXJDO0FBQUEsVUFDTUMsU0FBVUYsaUJBQWlCLENBRGpDLENBRFMsQ0FFNkI7O0FBRXRDLGFBQU9FLE1BQVA7QUFDRDs7O2tDQUVhO0FBQ1osVUFBTUEsU0FBUyxLQUFLQyxRQUFMLEVBQWY7QUFBQSxVQUNNQyxZQUFZLENBQUNGLE1BRG5COztBQUdBLGFBQU9FLFNBQVA7QUFDRDs7O2dDQUVXQyxRLEVBQVU7QUFBRSxhQUFPLEtBQUtSLFFBQUwsQ0FBY1MsR0FBZCxDQUFrQkQsUUFBbEIsQ0FBUDtBQUFxQzs7O3VDQUVuQ0UsSyxFQUFPQyxNLEVBQVE7QUFDdkMsVUFBTUMsZ0JBQWdCLEVBQXRCOztBQUVBLFVBQUlDLG9CQUFKOztBQUVBLFNBQUc7QUFDREEsc0JBQWNILE1BQU1JLEdBQU4sRUFBZDs7QUFFQUYsc0JBQWNHLElBQWQsQ0FBbUJGLFdBQW5CO0FBQ0QsT0FKRCxRQUlTQSxnQkFBZ0JGLE1BSnpCOztBQU1BLFVBQU1YLFdBQVdZLGFBQWpCO0FBQUEsVUFBZ0M7QUFDMUJJLGtCQUFZLElBQUlqQixTQUFKLENBQWNDLFFBQWQsQ0FEbEI7O0FBR0EsYUFBT2dCLFNBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJuQixTQUFqQjs7QUFFQSxTQUFTRyxLQUFULENBQWVpQixLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgfVxuICBcbiAgZ2V0VmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljZXM7XG4gIH1cblxuICBnZXRGaXJzdFZlcnRleCgpIHtcbiAgICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHRoaXMudmVydGljZXMpO1xuICAgIFxuICAgIHJldHVybiBmaXJzdFZlcnRleDtcbiAgfVxuICBcbiAgaXNDeWNsaWMoKSB7XG4gICAgY29uc3QgdmVydGljZXNMZW5ndGggPSB0aGlzLnZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgICBjeWNsaWMgPSAodmVydGljZXNMZW5ndGggPiAxKTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBjeWNsaWM7XG4gIH1cblxuICBpc05vbkN5Y2xpYygpIHtcbiAgICBjb25zdCBjeWNsaWMgPSB0aGlzLmlzQ3ljbGljKCksXG4gICAgICAgICAgbm9uQ3ljbGljID0gIWN5Y2xpYztcbiAgICBcbiAgICByZXR1cm4gbm9uQ3ljbGljO1xuICB9XG4gIFxuICBtYXBWZXJ0aWNlcyhjYWxsYmFjaykgeyByZXR1cm4gdGhpcy52ZXJ0aWNlcy5tYXAoY2FsbGJhY2spOyB9XG4gIFxuICBzdGF0aWMgZnJvbVN0YWNrQW5kVmVydGV4KHN0YWNrLCB2ZXJ0ZXgpIHtcbiAgICBjb25zdCBzdGFja1ZlcnRpY2VzID0gW107XG4gICAgXG4gICAgbGV0IHN0YWNrVmVydGV4O1xuXG4gICAgZG8ge1xuICAgICAgc3RhY2tWZXJ0ZXggPSBzdGFjay5wb3AoKTtcblxuICAgICAgc3RhY2tWZXJ0aWNlcy5wdXNoKHN0YWNrVmVydGV4KVxuICAgIH0gd2hpbGUgKHN0YWNrVmVydGV4ICE9PSB2ZXJ0ZXgpO1xuICAgIFxuICAgIGNvbnN0IHZlcnRpY2VzID0gc3RhY2tWZXJ0aWNlcywgLy8vIFxuICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQodmVydGljZXMpO1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudDtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=