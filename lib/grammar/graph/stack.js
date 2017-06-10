'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.vertices = [];
  }

  _createClass(Stack, [{
    key: 'pop',
    value: function pop() {
      var vertex = this.vertices.pop(),
          stacked = false;

      vertex.setStacked(stacked);

      return vertex;
    }
  }, {
    key: 'push',
    value: function push(vertex) {
      var stacked = true;

      vertex.setStacked(stacked);

      this.vertices.push(vertex);
    }
  }]);

  return Stack;
}();

module.exports = Stack;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL2dyYXBoL3N0YWNrLmpzIl0sIm5hbWVzIjpbIlN0YWNrIiwidmVydGljZXMiLCJ2ZXJ0ZXgiLCJwb3AiLCJzdGFja2VkIiwic2V0U3RhY2tlZCIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEs7QUFDSixtQkFBYztBQUFBOztBQUNaLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDRDs7OzswQkFFSztBQUNKLFVBQU1DLFNBQVMsS0FBS0QsUUFBTCxDQUFjRSxHQUFkLEVBQWY7QUFBQSxVQUNNQyxVQUFVLEtBRGhCOztBQUdBRixhQUFPRyxVQUFQLENBQWtCRCxPQUFsQjs7QUFFQSxhQUFPRixNQUFQO0FBQ0Q7Ozt5QkFFSUEsTSxFQUFRO0FBQ1gsVUFBTUUsVUFBVSxJQUFoQjs7QUFFQUYsYUFBT0csVUFBUCxDQUFrQkQsT0FBbEI7O0FBRUEsV0FBS0gsUUFBTCxDQUFjSyxJQUFkLENBQW1CSixNQUFuQjtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQlIsS0FBakIiLCJmaWxlIjoic3RhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFN0YWNrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xuICB9XG4gIFxuICBwb3AoKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy52ZXJ0aWNlcy5wb3AoKSxcbiAgICAgICAgICBzdGFja2VkID0gZmFsc2U7XG4gICAgXG4gICAgdmVydGV4LnNldFN0YWNrZWQoc3RhY2tlZCk7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuICBcbiAgcHVzaCh2ZXJ0ZXgpIHtcbiAgICBjb25zdCBzdGFja2VkID0gdHJ1ZTtcbiAgICBcbiAgICB2ZXJ0ZXguc2V0U3RhY2tlZChzdGFja2VkKTtcbiAgICBcbiAgICB0aGlzLnZlcnRpY2VzLnB1c2godmVydGV4KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuIl19