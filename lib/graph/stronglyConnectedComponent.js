'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StronglyConnectedComponent = function () {
  function StronglyConnectedComponent(vertices) {
    _classCallCheck(this, StronglyConnectedComponent);

    this.vertices = vertices;
  }

  _createClass(StronglyConnectedComponent, [{
    key: 'getVertices',
    value: function getVertices() {
      return this.vertices;
    }
  }, {
    key: 'isCyclic',
    value: function isCyclic() {
      var verticesLength = this.vertices.length,
          cyclic = verticesLength > 1; ///

      return cyclic;
    }
  }], [{
    key: 'fromStackUpToAndIncludingVertex',
    value: function fromStackUpToAndIncludingVertex(stack, vertex) {
      var stackVertices = [];

      var stackVertex = void 0;

      do {
        stackVertex = stack.pop();

        stackVertices.push(stackVertex);
      } while (stackVertex !== vertex);

      var vertices = stackVertices,
          /// 
      stronglyConnectedComponent = new StronglyConnectedComponent(vertices);

      return stronglyConnectedComponent;
    }
  }]);

  return StronglyConnectedComponent;
}();

module.exports = StronglyConnectedComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC9zdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJTdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCIsInZlcnRpY2VzIiwidmVydGljZXNMZW5ndGgiLCJsZW5ndGgiLCJjeWNsaWMiLCJzdGFjayIsInZlcnRleCIsInN0YWNrVmVydGljZXMiLCJzdGFja1ZlcnRleCIsInBvcCIsInB1c2giLCJzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsMEI7QUFDSixzQ0FBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQSxRQUFaO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1DLGlCQUFpQixLQUFLRCxRQUFMLENBQWNFLE1BQXJDO0FBQUEsVUFDTUMsU0FBVUYsaUJBQWlCLENBRGpDLENBRFMsQ0FFNkI7O0FBRXRDLGFBQU9FLE1BQVA7QUFDRDs7O29EQUVzQ0MsSyxFQUFPQyxNLEVBQVE7QUFDcEQsVUFBTUMsZ0JBQWdCLEVBQXRCOztBQUVBLFVBQUlDLG9CQUFKOztBQUVBLFNBQUc7QUFDREEsc0JBQWNILE1BQU1JLEdBQU4sRUFBZDs7QUFFQUYsc0JBQWNHLElBQWQsQ0FBbUJGLFdBQW5CO0FBQ0QsT0FKRCxRQUlTQSxnQkFBZ0JGLE1BSnpCOztBQU1BLFVBQU1MLFdBQVdNLGFBQWpCO0FBQUEsVUFBZ0M7QUFDMUJJLG1DQUE2QixJQUFJWCwwQkFBSixDQUErQkMsUUFBL0IsQ0FEbkM7O0FBR0EsYUFBT1UsMEJBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJiLDBCQUFqQiIsImZpbGUiOiJzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgU3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgfVxuICBcbiAgZ2V0VmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljZXM7XG4gIH1cbiAgXG4gIGlzQ3ljbGljKCkge1xuICAgIGNvbnN0IHZlcnRpY2VzTGVuZ3RoID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgY3ljbGljID0gKHZlcnRpY2VzTGVuZ3RoID4gMSk7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gY3ljbGljO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN0YWNrVXBUb0FuZEluY2x1ZGluZ1ZlcnRleChzdGFjaywgdmVydGV4KSB7XG4gICAgY29uc3Qgc3RhY2tWZXJ0aWNlcyA9IFtdO1xuICAgIFxuICAgIGxldCBzdGFja1ZlcnRleDtcblxuICAgIGRvIHtcbiAgICAgIHN0YWNrVmVydGV4ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgIHN0YWNrVmVydGljZXMucHVzaChzdGFja1ZlcnRleClcbiAgICB9IHdoaWxlIChzdGFja1ZlcnRleCAhPT0gdmVydGV4KTtcbiAgICBcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHN0YWNrVmVydGljZXMsIC8vLyBcbiAgICAgICAgICBzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCA9IG5ldyBTdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCh2ZXJ0aWNlcyk7XG5cbiAgICByZXR1cm4gc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudDtcbiJdfQ==