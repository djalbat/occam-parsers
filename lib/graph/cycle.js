'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cycle = function () {
  function Cycle(vertices) {
    _classCallCheck(this, Cycle);

    this.vertices = vertices;
  }

  _createClass(Cycle, null, [{
    key: 'fromComponent',
    value: function fromComponent(component) {
      var vertices = component.getVertices(),
          cycle = new Cycle(vertices);

      return cycle;
    }
  }]);

  return Cycle;
}();

module.exports = Cycle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC9jeWNsZS5qcyJdLCJuYW1lcyI6WyJDeWNsZSIsInZlcnRpY2VzIiwiY29tcG9uZW50IiwiZ2V0VmVydGljZXMiLCJjeWNsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSztBQUNKLGlCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7Ozs7a0NBRW9CQyxTLEVBQVc7QUFDOUIsVUFBTUQsV0FBV0MsVUFBVUMsV0FBVixFQUFqQjtBQUFBLFVBQ01DLFFBQVEsSUFBSUosS0FBSixDQUFVQyxRQUFWLENBRGQ7O0FBR0EsYUFBT0csS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQk4sS0FBakIiLCJmaWxlIjoiY3ljbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEN5Y2xlIHtcbiAgY29uc3RydWN0b3IodmVydGljZXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IGNvbXBvbmVudC5nZXRWZXJ0aWNlcygpLFxuICAgICAgICAgIGN5Y2xlID0gbmV3IEN5Y2xlKHZlcnRpY2VzKTtcbiAgICBcbiAgICByZXR1cm4gY3ljbGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDeWNsZTtcbiJdfQ==