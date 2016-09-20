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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jb250ZXh0LmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJpbmRleCIsImFtb3VudCIsInNhdmVkSW5kZXgiLCJzZXRJbmRleCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsTztBQUNKLHFCQUFjO0FBQUE7O0FBQ1osU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7NkJBRVFBLEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7NEJBRU9DLE0sRUFBUTtBQUNkLFdBQUtELEtBQUwsSUFBY0MsTUFBZDtBQUNEOzs7OEJBRVNDLFUsRUFBWTtBQUNwQixVQUFJRixRQUFRRSxVQUFaLENBRG9CLENBQ0k7O0FBRXhCLFdBQUtDLFFBQUwsQ0FBY0gsS0FBZDtBQUNEOzs7Ozs7QUFHSEksT0FBT0MsT0FBUCxHQUFpQk4sT0FBakIiLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGFkdmFuY2UoYW1vdW50KSB7XG4gICAgdGhpcy5pbmRleCArPSBhbW91bnQ7XG4gIH1cblxuICBiYWNrdHJhY2soc2F2ZWRJbmRleCkge1xuICAgIHZhciBpbmRleCA9IHNhdmVkSW5kZXg7IC8vL1xuICAgIFxuICAgIHRoaXMuc2V0SW5kZXgoaW5kZXgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGV4dDtcbiJdfQ==