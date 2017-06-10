'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
  }, {
    key: 'splice',
    value: function splice(array, start, deleteCount) {
      var itemsArray = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

      var args = [start, deleteCount].concat(_toConsumableArray(itemsArray)),
          deletedItemsArray = Array.prototype.splice.apply(array, args);

      return deletedItemsArray;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL2FycmF5LmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsImFycmF5Iiwia2VlcE50aCIsImRpc2NhcmROdGgiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiaXRlbXNBcnJheSIsImFyZ3MiLCJkZWxldGVkSXRlbXNBcnJheSIsIkFycmF5IiwicHJvdG90eXBlIiwic3BsaWNlIiwiYXBwbHkiLCJtb2R1bGUiLCJleHBvcnRzIiwibiIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7SUFFTUEsUzs7Ozs7Ozs4QkFDYUMsSyxFQUFPO0FBQUUsYUFBT0MsUUFBUUQsS0FBUixFQUFlLENBQWYsQ0FBUDtBQUEyQjs7OytCQUVuQ0EsSyxFQUFPO0FBQUUsYUFBT0MsUUFBUUQsS0FBUixFQUFlLENBQWYsQ0FBUDtBQUEyQjs7OzZCQUV0Q0EsSyxFQUFPO0FBQUUsYUFBT0MsUUFBUUQsS0FBUixFQUFlLENBQUMsQ0FBaEIsQ0FBUDtBQUE0Qjs7O2lDQUVqQ0EsSyxFQUFPO0FBQUUsYUFBT0UsV0FBV0YsS0FBWCxFQUFrQixDQUFsQixDQUFQO0FBQThCOzs7a0NBRXRDQSxLLEVBQU87QUFBRSxhQUFPRSxXQUFXRixLQUFYLEVBQWtCLENBQWxCLENBQVA7QUFBOEI7OztnQ0FFekNBLEssRUFBTztBQUFFLGFBQU9FLFdBQVdGLEtBQVgsRUFBa0IsQ0FBQyxDQUFuQixDQUFQO0FBQStCOzs7MkJBRTdDQSxLLEVBQU9HLEssRUFBT0MsVyxFQUE4QjtBQUFBLFVBQWpCQyxVQUFpQix1RUFBSixFQUFJOztBQUN4RCxVQUFNQyxRQUFRSCxLQUFSLEVBQWVDLFdBQWYsNEJBQStCQyxVQUEvQixFQUFOO0FBQUEsVUFDTUUsb0JBQW9CQyxNQUFNQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsS0FBdkIsQ0FBNkJYLEtBQTdCLEVBQW9DTSxJQUFwQyxDQUQxQjs7QUFHQSxhQUFPQyxpQkFBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQmQsU0FBakI7O0FBRUEsU0FBU0UsT0FBVCxDQUFpQkQsS0FBakIsRUFBd0JjLENBQXhCLEVBQTJCO0FBQ3pCZCxVQUFRQSxNQUFNZSxLQUFOLEVBQVI7O0FBRUEsU0FBT2YsTUFBTVUsTUFBTixDQUFhSSxDQUFiLEVBQWdCLENBQWhCLENBQVA7QUFDRDs7QUFFRCxTQUFTWixVQUFULENBQW9CRixLQUFwQixFQUEyQmMsQ0FBM0IsRUFBOEI7QUFDNUJkLFVBQVFBLE1BQU1lLEtBQU4sRUFBUjs7QUFFQWYsUUFBTVUsTUFBTixDQUFhSSxDQUFiLEVBQWdCLENBQWhCOztBQUVBLFNBQU9kLEtBQVA7QUFDRCIsImZpbGUiOiJhcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgYXJyYXlVdGlsIHtcbiAgc3RhdGljIGtlZXBGaXJzdChhcnJheSkgeyByZXR1cm4ga2VlcE50aChhcnJheSwgMCk7IH1cblxuICBzdGF0aWMga2VlcFNlY29uZChhcnJheSkgeyByZXR1cm4ga2VlcE50aChhcnJheSwgMSk7IH1cblxuICBzdGF0aWMga2VlcExhc3QoYXJyYXkpIHsgcmV0dXJuIGtlZXBOdGgoYXJyYXksIC0xKTsgfVxuXG4gIHN0YXRpYyBkaXNjYXJkRmlyc3QoYXJyYXkpIHsgcmV0dXJuIGRpc2NhcmROdGgoYXJyYXksIDApOyB9XG5cbiAgc3RhdGljIGRpc2NhcmRTZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGRpc2NhcmROdGgoYXJyYXksIDEpOyB9XG5cbiAgc3RhdGljIGRpc2NhcmRMYXN0KGFycmF5KSB7IHJldHVybiBkaXNjYXJkTnRoKGFycmF5LCAtMSk7IH1cblxuICBzdGF0aWMgc3BsaWNlKGFycmF5LCBzdGFydCwgZGVsZXRlQ291bnQsIGl0ZW1zQXJyYXkgPSBbXSkge1xuICAgIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5pdGVtc0FycmF5XSxcbiAgICAgICAgICBkZWxldGVkSXRlbXNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXksIGFyZ3MpO1xuICBcbiAgICByZXR1cm4gZGVsZXRlZEl0ZW1zQXJyYXk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVV0aWw7XG5cbmZ1bmN0aW9uIGtlZXBOdGgoYXJyYXksIG4pIHtcbiAgYXJyYXkgPSBhcnJheS5zbGljZSgpO1xuXG4gIHJldHVybiBhcnJheS5zcGxpY2UobiwgMSk7XG59XG5cbmZ1bmN0aW9uIGRpc2NhcmROdGgoYXJyYXksIG4pIHtcbiAgYXJyYXkgPSBhcnJheS5zbGljZSgpO1xuXG4gIGFycmF5LnNwbGljZShuLCAxKTtcblxuICByZXR1cm4gYXJyYXk7XG59XG4iXX0=