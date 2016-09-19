'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = function () {
  function Context() {
    _classCallCheck(this, Context);

    this.index = 0;
  }

  _createClass(Context, [{
    key: 'getIndex',
    value: function getIndex() {
      return this.index;
    }
  }, {
    key: 'setIndex',
    value: function setIndex(index) {
      this.index = index;
    }
  }, {
    key: 'advance',
    value: function advance(amount) {
      this.index += amount;
    }
  }, {
    key: 'backtrack',
    value: function backtrack(savedIndex) {
      var index = savedIndex; ///

      this.setIndex(index);
    }
  }]);

  return Context;
}();

module.exports = Context;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJzZXIvY29udGV4dC5qcyJdLCJuYW1lcyI6WyJDb250ZXh0IiwiaW5kZXgiLCJhbW91bnQiLCJzYXZlZEluZGV4Iiwic2V0SW5kZXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLE87QUFDSixxQkFBYztBQUFBOztBQUNaLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7OzZCQUVRQSxLLEVBQU87QUFDZCxXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzRCQUVPQyxNLEVBQVE7QUFDZCxXQUFLRCxLQUFMLElBQWNDLE1BQWQ7QUFDRDs7OzhCQUVTQyxVLEVBQVk7QUFDcEIsVUFBSUYsUUFBUUUsVUFBWixDQURvQixDQUNJOztBQUV4QixXQUFLQyxRQUFMLENBQWNILEtBQWQ7QUFDRDs7Ozs7O0FBR0hJLE9BQU9DLE9BQVAsR0FBaUJOLE9BQWpCIiwiZmlsZSI6ImNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIENvbnRleHQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgc2V0SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBhZHZhbmNlKGFtb3VudCkge1xuICAgIHRoaXMuaW5kZXggKz0gYW1vdW50O1xuICB9XG5cbiAgYmFja3RyYWNrKHNhdmVkSW5kZXgpIHtcbiAgICB2YXIgaW5kZXggPSBzYXZlZEluZGV4OyAvLy9cbiAgICBcbiAgICB0aGlzLnNldEluZGV4KGluZGV4KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRleHQ7XG4iXX0=