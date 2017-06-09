'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Edge = function () {
  function Edge(firstName, secondName) {
    _classCallCheck(this, Edge);

    this.firstName = firstName;
    this.secondName = secondName;
  }

  _createClass(Edge, [{
    key: 'getFirstName',
    value: function getFirstName() {
      return this.firstName;
    }
  }, {
    key: 'getSecondName',
    value: function getSecondName() {
      return this.secondName;
    }
  }]);

  return Edge;
}();

module.exports = Edge;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC9lZGdlLmpzIl0sIm5hbWVzIjpbIkVkZ2UiLCJmaXJzdE5hbWUiLCJzZWNvbmROYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxJO0FBQ0osZ0JBQVlDLFNBQVosRUFBdUJDLFVBQXZCLEVBQW1DO0FBQUE7O0FBQ2pDLFNBQUtELFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7OzttQ0FFYztBQUNiLGFBQU8sS0FBS0QsU0FBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJKLElBQWpCIiwiZmlsZSI6ImVkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3RvcihmaXJzdE5hbWUsIHNlY29uZE5hbWUpIHtcbiAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcbiAgICB0aGlzLnNlY29uZE5hbWUgPSBzZWNvbmROYW1lO1xuICB9XG5cbiAgZ2V0Rmlyc3ROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZpcnN0TmFtZTtcbiAgfVxuICBcbiAgZ2V0U2Vjb25kTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWNvbmROYW1lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWRnZTtcbiJdfQ==