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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vYXJyYXlVdGlsLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsImFycmF5Iiwic2xpY2UiLCJjb25jYXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLFM7Ozs7Ozs7K0JBQ2NDLEssRUFBTztBQUFFLGFBQU8sRUFBUDtBQUFZOzs7OEJBRXRCQSxLLEVBQU87QUFBRSxhQUFPLENBQUNBLE1BQU0sQ0FBTixDQUFELENBQVA7QUFBb0I7OzsrQkFFNUJBLEssRUFBTztBQUFFLGFBQU8sQ0FBQ0EsTUFBTSxDQUFOLENBQUQsQ0FBUDtBQUFvQjs7OzhCQUU5QkEsSyxFQUFPO0FBQUUsYUFBTyxDQUFDQSxNQUFNLENBQU4sQ0FBRCxDQUFQO0FBQW9COzs7aUNBRTFCQSxLLEVBQU87QUFBRSxhQUFPQSxNQUFNQyxLQUFOLENBQVksQ0FBWixDQUFQO0FBQXdCOzs7a0NBRWhDRCxLLEVBQU87QUFBRSxhQUFPLENBQUNBLE1BQU0sQ0FBTixDQUFELEVBQVdFLE1BQVgsQ0FBa0JGLE1BQU1DLEtBQU4sQ0FBWSxDQUFaLENBQWxCLENBQVA7QUFBMkM7Ozs7OztBQUczRUUsT0FBT0MsT0FBUCxHQUFpQkwsU0FBakIiLCJmaWxlIjoiYXJyYXlVdGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBhcnJheVV0aWwge1xuICBzdGF0aWMgZGlzY2FyZEFsbChhcnJheSkgeyByZXR1cm4gW107IH1cblxuICBzdGF0aWMga2VlcEZpcnN0KGFycmF5KSB7IHJldHVybiBbYXJyYXlbMF1dOyB9XG5cbiAgc3RhdGljIGtlZXBTZWNvbmQoYXJyYXkpIHsgcmV0dXJuIFthcnJheVsxXV07IH1cblxuICBzdGF0aWMga2VlcFRoaXJkKGFycmF5KSB7IHJldHVybiBbYXJyYXlbMl1dOyB9XG5cbiAgc3RhdGljIGRpc2NhcmRGaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuICBzdGF0aWMgZGlzY2FyZFNlY29uZChhcnJheSkgeyByZXR1cm4gW2FycmF5WzBdXS5jb25jYXQoYXJyYXkuc2xpY2UoMikpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlVdGlsO1xuIl19