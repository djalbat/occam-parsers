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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL2dyYXBoL2VkZ2UuanMiXSwibmFtZXMiOlsiRWRnZSIsImZpcnN0TmFtZSIsInNlY29uZE5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEk7QUFDSixnQkFBWUMsU0FBWixFQUF1QkMsVUFBdkIsRUFBbUM7QUFBQTs7QUFDakMsU0FBS0QsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOzs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLRCxTQUFaO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0MsVUFBWjtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQkosSUFBakIiLCJmaWxlIjoiZWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRWRnZSB7XG4gIGNvbnN0cnVjdG9yKGZpcnN0TmFtZSwgc2Vjb25kTmFtZSkge1xuICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xuICAgIHRoaXMuc2Vjb25kTmFtZSA9IHNlY29uZE5hbWU7XG4gIH1cblxuICBnZXRGaXJzdE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3ROYW1lO1xuICB9XG4gIFxuICBnZXRTZWNvbmROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnNlY29uZE5hbWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFZGdlO1xuIl19