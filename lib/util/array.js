'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = function () {
  function arrayUtil() {
    _classCallCheck(this, arrayUtil);
  }

  _createClass(arrayUtil, null, [{
    key: 'keepFirst',
    value: function keepFirst(array) {
      return keepNth(array, 0);
    }
  }, {
    key: 'keepSecond',
    value: function keepSecond(array) {
      return keepNth(array, 1);
    }
  }, {
    key: 'keepLast',
    value: function keepLast(array) {
      return keepNth(array, -1);
    }
  }, {
    key: 'discardFirst',
    value: function discardFirst(array) {
      return discardNth(array, 0);
    }
  }, {
    key: 'discardSecond',
    value: function discardSecond(array) {
      return discardNth(array, 1);
    }
  }, {
    key: 'discardLast',
    value: function discardLast(array) {
      return discardNth(array, -1);
    }
  }]);

  return arrayUtil;
}();

module.exports = arrayUtil;

function keepNth(array, n) {
  array = array.slice();

  return array.splice(n, 1);
}

function discardNth(array, n) {
  array = array.slice();

  array.splice(n, 1);

  return array;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL2FycmF5LmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsImFycmF5Iiwia2VlcE50aCIsImRpc2NhcmROdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwibiIsInNsaWNlIiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLFM7Ozs7Ozs7OEJBQ2FDLEssRUFBTztBQUFFLGFBQU9DLFFBQVFELEtBQVIsRUFBZSxDQUFmLENBQVA7QUFBMkI7OzsrQkFFbkNBLEssRUFBTztBQUFFLGFBQU9DLFFBQVFELEtBQVIsRUFBZSxDQUFmLENBQVA7QUFBMkI7Ozs2QkFFdENBLEssRUFBTztBQUFFLGFBQU9DLFFBQVFELEtBQVIsRUFBZSxDQUFDLENBQWhCLENBQVA7QUFBNEI7OztpQ0FFakNBLEssRUFBTztBQUFFLGFBQU9FLFdBQVdGLEtBQVgsRUFBa0IsQ0FBbEIsQ0FBUDtBQUE4Qjs7O2tDQUV0Q0EsSyxFQUFPO0FBQUUsYUFBT0UsV0FBV0YsS0FBWCxFQUFrQixDQUFsQixDQUFQO0FBQThCOzs7Z0NBRXpDQSxLLEVBQU87QUFBRSxhQUFPRSxXQUFXRixLQUFYLEVBQWtCLENBQUMsQ0FBbkIsQ0FBUDtBQUErQjs7Ozs7O0FBRzdERyxPQUFPQyxPQUFQLEdBQWlCTCxTQUFqQjs7QUFFQSxTQUFTRSxPQUFULENBQWlCRCxLQUFqQixFQUF3QkssQ0FBeEIsRUFBMkI7QUFDekJMLFVBQVFBLE1BQU1NLEtBQU4sRUFBUjs7QUFFQSxTQUFPTixNQUFNTyxNQUFOLENBQWFGLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBUDtBQUNEOztBQUVELFNBQVNILFVBQVQsQ0FBb0JGLEtBQXBCLEVBQTJCSyxDQUEzQixFQUE4QjtBQUM1QkwsVUFBUUEsTUFBTU0sS0FBTixFQUFSOztBQUVBTixRQUFNTyxNQUFOLENBQWFGLENBQWIsRUFBZ0IsQ0FBaEI7O0FBRUEsU0FBT0wsS0FBUDtBQUNEIiwiZmlsZSI6ImFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBhcnJheVV0aWwge1xuICBzdGF0aWMga2VlcEZpcnN0KGFycmF5KSB7IHJldHVybiBrZWVwTnRoKGFycmF5LCAwKTsgfVxuXG4gIHN0YXRpYyBrZWVwU2Vjb25kKGFycmF5KSB7IHJldHVybiBrZWVwTnRoKGFycmF5LCAxKTsgfVxuXG4gIHN0YXRpYyBrZWVwTGFzdChhcnJheSkgeyByZXR1cm4ga2VlcE50aChhcnJheSwgLTEpOyB9XG5cbiAgc3RhdGljIGRpc2NhcmRGaXJzdChhcnJheSkgeyByZXR1cm4gZGlzY2FyZE50aChhcnJheSwgMCk7IH1cblxuICBzdGF0aWMgZGlzY2FyZFNlY29uZChhcnJheSkgeyByZXR1cm4gZGlzY2FyZE50aChhcnJheSwgMSk7IH1cblxuICBzdGF0aWMgZGlzY2FyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGRpc2NhcmROdGgoYXJyYXksIC0xKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5VXRpbDtcblxuZnVuY3Rpb24ga2VlcE50aChhcnJheSwgbikge1xuICBhcnJheSA9IGFycmF5LnNsaWNlKCk7XG5cbiAgcmV0dXJuIGFycmF5LnNwbGljZShuLCAxKTtcbn1cblxuZnVuY3Rpb24gZGlzY2FyZE50aChhcnJheSwgbikge1xuICBhcnJheSA9IGFycmF5LnNsaWNlKCk7XG5cbiAgYXJyYXkuc3BsaWNlKG4sIDEpO1xuXG4gIHJldHVybiBhcnJheTtcbn1cbiJdfQ==