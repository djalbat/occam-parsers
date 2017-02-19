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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9hcnJheVV0aWwuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwiYXJyYXkiLCJrZWVwTnRoIiwiZGlzY2FyZE50aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJuIiwic2xpY2UiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsUzs7Ozs7Ozs4QkFDYUMsSyxFQUFPO0FBQUUsYUFBT0MsUUFBUUQsS0FBUixFQUFlLENBQWYsQ0FBUDtBQUEyQjs7OytCQUVuQ0EsSyxFQUFPO0FBQUUsYUFBT0MsUUFBUUQsS0FBUixFQUFlLENBQWYsQ0FBUDtBQUEyQjs7OzZCQUV0Q0EsSyxFQUFPO0FBQUUsYUFBT0MsUUFBUUQsS0FBUixFQUFlLENBQUMsQ0FBaEIsQ0FBUDtBQUE0Qjs7O2lDQUVqQ0EsSyxFQUFPO0FBQUUsYUFBT0UsV0FBV0YsS0FBWCxFQUFrQixDQUFsQixDQUFQO0FBQThCOzs7a0NBRXRDQSxLLEVBQU87QUFBRSxhQUFPRSxXQUFXRixLQUFYLEVBQWtCLENBQWxCLENBQVA7QUFBOEI7OztnQ0FFekNBLEssRUFBTztBQUFFLGFBQU9FLFdBQVdGLEtBQVgsRUFBa0IsQ0FBQyxDQUFuQixDQUFQO0FBQStCOzs7Ozs7QUFHN0RHLE9BQU9DLE9BQVAsR0FBaUJMLFNBQWpCOztBQUVBLFNBQVNFLE9BQVQsQ0FBaUJELEtBQWpCLEVBQXdCSyxDQUF4QixFQUEyQjtBQUN6QkwsVUFBUUEsTUFBTU0sS0FBTixFQUFSOztBQUVBLFNBQU9OLE1BQU1PLE1BQU4sQ0FBYUYsQ0FBYixFQUFnQixDQUFoQixDQUFQO0FBQ0Q7O0FBRUQsU0FBU0gsVUFBVCxDQUFvQkYsS0FBcEIsRUFBMkJLLENBQTNCLEVBQThCO0FBQzVCTCxVQUFRQSxNQUFNTSxLQUFOLEVBQVI7O0FBRUFOLFFBQU1PLE1BQU4sQ0FBYUYsQ0FBYixFQUFnQixDQUFoQjs7QUFFQSxTQUFPTCxLQUFQO0FBQ0QiLCJmaWxlIjoiYXJyYXlVdGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBhcnJheVV0aWwge1xuICBzdGF0aWMga2VlcEZpcnN0KGFycmF5KSB7IHJldHVybiBrZWVwTnRoKGFycmF5LCAwKTsgfVxuXG4gIHN0YXRpYyBrZWVwU2Vjb25kKGFycmF5KSB7IHJldHVybiBrZWVwTnRoKGFycmF5LCAxKTsgfVxuXG4gIHN0YXRpYyBrZWVwTGFzdChhcnJheSkgeyByZXR1cm4ga2VlcE50aChhcnJheSwgLTEpOyB9XG5cbiAgc3RhdGljIGRpc2NhcmRGaXJzdChhcnJheSkgeyByZXR1cm4gZGlzY2FyZE50aChhcnJheSwgMCk7IH1cblxuICBzdGF0aWMgZGlzY2FyZFNlY29uZChhcnJheSkgeyByZXR1cm4gZGlzY2FyZE50aChhcnJheSwgMSk7IH1cblxuICBzdGF0aWMgZGlzY2FyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGRpc2NhcmROdGgoYXJyYXksIC0xKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5VXRpbDtcblxuZnVuY3Rpb24ga2VlcE50aChhcnJheSwgbikge1xuICBhcnJheSA9IGFycmF5LnNsaWNlKCk7XG5cbiAgcmV0dXJuIGFycmF5LnNwbGljZShuLCAxKTtcbn1cblxuZnVuY3Rpb24gZGlzY2FyZE50aChhcnJheSwgbikge1xuICBhcnJheSA9IGFycmF5LnNsaWNlKCk7XG5cbiAgYXJyYXkuc3BsaWNlKG4sIDEpO1xuXG4gIHJldHVybiBhcnJheTtcbn1cbiJdfQ==