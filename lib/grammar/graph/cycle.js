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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL2dyYXBoL2N5Y2xlLmpzIl0sIm5hbWVzIjpbIkN5Y2xlIiwidmVydGljZXMiLCJjb21wb25lbnQiLCJnZXRWZXJ0aWNlcyIsImN5Y2xlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxLO0FBQ0osaUJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7OztrQ0FFb0JDLFMsRUFBVztBQUM5QixVQUFNRCxXQUFXQyxVQUFVQyxXQUFWLEVBQWpCO0FBQUEsVUFDTUMsUUFBUSxJQUFJSixLQUFKLENBQVVDLFFBQVYsQ0FEZDs7QUFHQSxhQUFPRyxLQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCTixLQUFqQiIsImZpbGUiOiJjeWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgQ3ljbGUge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIGNvbnN0IHZlcnRpY2VzID0gY29tcG9uZW50LmdldFZlcnRpY2VzKCksXG4gICAgICAgICAgY3ljbGUgPSBuZXcgQ3ljbGUodmVydGljZXMpO1xuICAgIFxuICAgIHJldHVybiBjeWNsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEN5Y2xlO1xuIl19