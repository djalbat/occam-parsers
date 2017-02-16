'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = function () {
  function arrayUtil() {
    _classCallCheck(this, arrayUtil);
  }

  _createClass(arrayUtil, null, [{
    key: 'discardAll',
    value: function discardAll(array) {
      return [];
    }
  }, {
    key: 'keepFirst',
    value: function keepFirst(array) {
      return [array[0]];
    }
  }, {
    key: 'keepSecond',
    value: function keepSecond(array) {
      return [array[1]];
    }
  }, {
    key: 'keepThird',
    value: function keepThird(array) {
      return [array[2]];
    }
  }, {
    key: 'discardFirst',
    value: function discardFirst(array) {
      return array.slice(1);
    }
  }, {
    key: 'discardSecond',
    value: function discardSecond(array) {
      return [array[0]].concat(array.slice(2));
    }
  }, {
    key: 'discardLast',
    value: function discardLast(array) {
      return array.slice(0, array.length - 1);
    }
  }]);

  return arrayUtil;
}();

module.exports = arrayUtil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9hcnJheVV0aWwuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwiYXJyYXkiLCJzbGljZSIsImNvbmNhdCIsImxlbmd0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsUzs7Ozs7OzsrQkFDY0MsSyxFQUFPO0FBQUUsYUFBTyxFQUFQO0FBQVk7Ozs4QkFFdEJBLEssRUFBTztBQUFFLGFBQU8sQ0FBQ0EsTUFBTSxDQUFOLENBQUQsQ0FBUDtBQUFvQjs7OytCQUU1QkEsSyxFQUFPO0FBQUUsYUFBTyxDQUFDQSxNQUFNLENBQU4sQ0FBRCxDQUFQO0FBQW9COzs7OEJBRTlCQSxLLEVBQU87QUFBRSxhQUFPLENBQUNBLE1BQU0sQ0FBTixDQUFELENBQVA7QUFBb0I7OztpQ0FFMUJBLEssRUFBTztBQUFFLGFBQU9BLE1BQU1DLEtBQU4sQ0FBWSxDQUFaLENBQVA7QUFBd0I7OztrQ0FFaENELEssRUFBTztBQUFFLGFBQU8sQ0FBQ0EsTUFBTSxDQUFOLENBQUQsRUFBV0UsTUFBWCxDQUFrQkYsTUFBTUMsS0FBTixDQUFZLENBQVosQ0FBbEIsQ0FBUDtBQUEyQzs7O2dDQUV0REQsSyxFQUFPO0FBQUUsYUFBT0EsTUFBTUMsS0FBTixDQUFZLENBQVosRUFBZUQsTUFBTUcsTUFBTixHQUFlLENBQTlCLENBQVA7QUFBMEM7Ozs7OztBQUd4RUMsT0FBT0MsT0FBUCxHQUFpQk4sU0FBakIiLCJmaWxlIjoiYXJyYXlVdGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBhcnJheVV0aWwge1xuICBzdGF0aWMgZGlzY2FyZEFsbChhcnJheSkgeyByZXR1cm4gW107IH1cblxuICBzdGF0aWMga2VlcEZpcnN0KGFycmF5KSB7IHJldHVybiBbYXJyYXlbMF1dOyB9XG5cbiAgc3RhdGljIGtlZXBTZWNvbmQoYXJyYXkpIHsgcmV0dXJuIFthcnJheVsxXV07IH1cblxuICBzdGF0aWMga2VlcFRoaXJkKGFycmF5KSB7IHJldHVybiBbYXJyYXlbMl1dOyB9XG5cbiAgc3RhdGljIGRpc2NhcmRGaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuICBzdGF0aWMgZGlzY2FyZFNlY29uZChhcnJheSkgeyByZXR1cm4gW2FycmF5WzBdXS5jb25jYXQoYXJyYXkuc2xpY2UoMikpOyB9XG5cbiAgc3RhdGljIGRpc2NhcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCBhcnJheS5sZW5ndGggLSAxKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5VXRpbDtcbiJdfQ==