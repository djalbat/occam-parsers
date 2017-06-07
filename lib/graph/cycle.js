'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cycle = function () {
  function Cycle(vertices) {
    _classCallCheck(this, Cycle);

    this.vertices = vertices;
  }

  _createClass(Cycle, null, [{
    key: 'fromStronglyConnectedComponent',
    value: function fromStronglyConnectedComponent(stronglyConnectedComponent) {
      var vertices = stronglyConnectedComponent.getVertices(),
          cycle = new Cycle(vertices);

      return cycle;
    }
  }]);

  return Cycle;
}();

module.exports = Cycle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC9jeWNsZS5qcyJdLCJuYW1lcyI6WyJDeWNsZSIsInZlcnRpY2VzIiwic3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQiLCJnZXRWZXJ0aWNlcyIsImN5Y2xlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxLO0FBQ0osaUJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7OzttREFFcUNDLDBCLEVBQTRCO0FBQ2hFLFVBQU1ELFdBQVdDLDJCQUEyQkMsV0FBM0IsRUFBakI7QUFBQSxVQUNNQyxRQUFRLElBQUlKLEtBQUosQ0FBVUMsUUFBVixDQURkOztBQUdBLGFBQU9HLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJOLEtBQWpCIiwiZmlsZSI6ImN5Y2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBDeWNsZSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudChzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCkge1xuICAgIGNvbnN0IHZlcnRpY2VzID0gc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgICBjeWNsZSA9IG5ldyBDeWNsZSh2ZXJ0aWNlcyk7XG4gICAgXG4gICAgcmV0dXJuIGN5Y2xlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3ljbGU7XG4iXX0=