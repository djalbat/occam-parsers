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
  }]);

  return arrayUtil;
}();

module.exports = arrayUtil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9hcnJheVV0aWwuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwiYXJyYXkiLCJzbGljZSIsImNvbmNhdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsUzs7Ozs7OzsrQkFDY0MsSyxFQUFPO0FBQUUsYUFBTyxFQUFQO0FBQVk7Ozs4QkFFdEJBLEssRUFBTztBQUFFLGFBQU8sQ0FBQ0EsTUFBTSxDQUFOLENBQUQsQ0FBUDtBQUFvQjs7OytCQUU1QkEsSyxFQUFPO0FBQUUsYUFBTyxDQUFDQSxNQUFNLENBQU4sQ0FBRCxDQUFQO0FBQW9COzs7OEJBRTlCQSxLLEVBQU87QUFBRSxhQUFPLENBQUNBLE1BQU0sQ0FBTixDQUFELENBQVA7QUFBb0I7OztpQ0FFMUJBLEssRUFBTztBQUFFLGFBQU9BLE1BQU1DLEtBQU4sQ0FBWSxDQUFaLENBQVA7QUFBd0I7OztrQ0FFaENELEssRUFBTztBQUFFLGFBQU8sQ0FBQ0EsTUFBTSxDQUFOLENBQUQsRUFBV0UsTUFBWCxDQUFrQkYsTUFBTUMsS0FBTixDQUFZLENBQVosQ0FBbEIsQ0FBUDtBQUEyQzs7Ozs7O0FBRzNFRSxPQUFPQyxPQUFQLEdBQWlCTCxTQUFqQiIsImZpbGUiOiJhcnJheVV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIGFycmF5VXRpbCB7XG4gIHN0YXRpYyBkaXNjYXJkQWxsKGFycmF5KSB7IHJldHVybiBbXTsgfVxuXG4gIHN0YXRpYyBrZWVwRmlyc3QoYXJyYXkpIHsgcmV0dXJuIFthcnJheVswXV07IH1cblxuICBzdGF0aWMga2VlcFNlY29uZChhcnJheSkgeyByZXR1cm4gW2FycmF5WzFdXTsgfVxuXG4gIHN0YXRpYyBrZWVwVGhpcmQoYXJyYXkpIHsgcmV0dXJuIFthcnJheVsyXV07IH1cblxuICBzdGF0aWMgZGlzY2FyZEZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG4gIHN0YXRpYyBkaXNjYXJkU2Vjb25kKGFycmF5KSB7IHJldHVybiBbYXJyYXlbMF1dLmNvbmNhdChhcnJheS5zbGljZSgyKSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVV0aWw7XG4iXX0=