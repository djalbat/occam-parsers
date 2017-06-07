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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC9zdGFjay5qcyJdLCJuYW1lcyI6WyJTdGFjayIsInZlcnRpY2VzIiwidmVydGV4IiwicG9wIiwic3RhY2tlZCIsInNldFN0YWNrZWQiLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxLO0FBQ0osbUJBQWM7QUFBQTs7QUFDWixTQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0Q7Ozs7MEJBRUs7QUFDSixVQUFNQyxTQUFTLEtBQUtELFFBQUwsQ0FBY0UsR0FBZCxFQUFmO0FBQUEsVUFDTUMsVUFBVSxLQURoQjs7QUFHQUYsYUFBT0csVUFBUCxDQUFrQkQsT0FBbEI7O0FBRUEsYUFBT0YsTUFBUDtBQUNEOzs7eUJBRUlBLE0sRUFBUTtBQUNYLFVBQU1FLFVBQVUsSUFBaEI7O0FBRUFGLGFBQU9HLFVBQVAsQ0FBa0JELE9BQWxCOztBQUVBLFdBQUtILFFBQUwsQ0FBY0ssSUFBZCxDQUFtQkosTUFBbkI7QUFDRDs7Ozs7O0FBR0hLLE9BQU9DLE9BQVAsR0FBaUJSLEtBQWpCIiwiZmlsZSI6InN0YWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudmVydGljZXMgPSBbXTtcbiAgfVxuICBcbiAgcG9wKCkge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMudmVydGljZXMucG9wKCksXG4gICAgICAgICAgc3RhY2tlZCA9IGZhbHNlO1xuICAgIFxuICAgIHZlcnRleC5zZXRTdGFja2VkKHN0YWNrZWQpO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbiAgXG4gIHB1c2godmVydGV4KSB7XG4gICAgY29uc3Qgc3RhY2tlZCA9IHRydWU7XG4gICAgXG4gICAgdmVydGV4LnNldFN0YWNrZWQoc3RhY2tlZCk7XG4gICAgXG4gICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcbiJdfQ==