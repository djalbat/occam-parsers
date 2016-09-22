'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = function () {
  function Context() {
    _classCallCheck(this, Context);

    this.index = 0;

    this.savedIndex = undefined; ///
  }

  _createClass(Context, [{
    key: 'getIndex',
    value: function getIndex() {
      return this.index;
    }
  }, {
    key: 'advance',
    value: function advance(amount) {
      this.index += amount;
    }
  }, {
    key: 'saveIndex',
    value: function saveIndex() {
      this.savedIndex = this.index;
    }
  }, {
    key: 'backtrack',
    value: function backtrack() {
      this.index = this.savedIndex;
    }
  }]);

  return Context;
}();

module.exports = Context;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jb250ZXh0LmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJpbmRleCIsInNhdmVkSW5kZXgiLCJ1bmRlZmluZWQiLCJhbW91bnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLE87QUFDSixxQkFBYztBQUFBOztBQUNaLFNBQUtDLEtBQUwsR0FBYSxDQUFiOztBQUVBLFNBQUtDLFVBQUwsR0FBa0JDLFNBQWxCLENBSFksQ0FHa0I7QUFDL0I7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtGLEtBQVo7QUFDRDs7OzRCQUVPRyxNLEVBQVE7QUFDZCxXQUFLSCxLQUFMLElBQWNHLE1BQWQ7QUFDRDs7O2dDQUVXO0FBQ1YsV0FBS0YsVUFBTCxHQUFrQixLQUFLRCxLQUF2QjtBQUNEOzs7Z0NBRVc7QUFDVixXQUFLQSxLQUFMLEdBQWEsS0FBS0MsVUFBbEI7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJOLE9BQWpCIiwiZmlsZSI6ImNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIENvbnRleHQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgICBcbiAgICB0aGlzLnNhdmVkSW5kZXggPSB1bmRlZmluZWQ7ICAvLy9cbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgYWR2YW5jZShhbW91bnQpIHtcbiAgICB0aGlzLmluZGV4ICs9IGFtb3VudDtcbiAgfVxuICBcbiAgc2F2ZUluZGV4KCkge1xuICAgIHRoaXMuc2F2ZWRJbmRleCA9IHRoaXMuaW5kZXg7XG4gIH1cblxuICBiYWNrdHJhY2soKSB7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMuc2F2ZWRJbmRleDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRleHQ7XG4iXX0=