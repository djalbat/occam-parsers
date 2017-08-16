'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = function () {
  function arrayUtilities() {
    _classCallCheck(this, arrayUtilities);
  }

  _createClass(arrayUtilities, null, [{
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
    key: 'discardLastThenFirst',
    value: function discardLastThenFirst(array) {
      return discardNth(discardNth(array, -1), 0);
    }
  }, {
    key: 'discardFourthThenSecond',
    value: function discardFourthThenSecond(array) {
      return discardNth(discardNth(array, 3), 1);
    }
  }, {
    key: 'discardFifthThenSecond',
    value: function discardFifthThenSecond(array) {
      return discardNth(discardNth(array, 4), 1);
    }
  }, {
    key: 'discardOdd',
    value: function discardOdd(array) {
      return array.filter(function (entry, index) {
        return isEven(index);
      });
    }
  }]);

  return arrayUtilities;
}();

module.exports = arrayUtilities;

function keepNth(array, n) {
  array = array.slice();

  return array.splice(n, 1);
}

function discardNth(array, n) {
  array = array.slice();

  array.splice(n, 1);

  return array;
}

function isEven(index) {
  var even = Math.floor(index / 2) === index / 2;

  return even;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvYXJyYXkuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsaXRpZXMiLCJhcnJheSIsImtlZXBOdGgiLCJkaXNjYXJkTnRoIiwiZmlsdGVyIiwiZW50cnkiLCJpbmRleCIsImlzRXZlbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJuIiwic2xpY2UiLCJzcGxpY2UiLCJldmVuIiwiTWF0aCIsImZsb29yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLGM7Ozs7Ozs7OEJBQ2FDLEssRUFBTztBQUFFLGFBQU9DLFFBQVFELEtBQVIsRUFBZSxDQUFmLENBQVA7QUFBMkI7OzsrQkFFbkNBLEssRUFBTztBQUFFLGFBQU9DLFFBQVFELEtBQVIsRUFBZSxDQUFmLENBQVA7QUFBMkI7Ozs2QkFFdENBLEssRUFBTztBQUFFLGFBQU9DLFFBQVFELEtBQVIsRUFBZSxDQUFDLENBQWhCLENBQVA7QUFBNEI7OztpQ0FFakNBLEssRUFBTztBQUFFLGFBQU9FLFdBQVdGLEtBQVgsRUFBa0IsQ0FBbEIsQ0FBUDtBQUE4Qjs7O2tDQUV0Q0EsSyxFQUFPO0FBQUUsYUFBT0UsV0FBV0YsS0FBWCxFQUFrQixDQUFsQixDQUFQO0FBQThCOzs7Z0NBRXpDQSxLLEVBQU87QUFBRSxhQUFPRSxXQUFXRixLQUFYLEVBQWtCLENBQUMsQ0FBbkIsQ0FBUDtBQUErQjs7O3lDQUUvQkEsSyxFQUFPO0FBQUUsYUFBT0UsV0FBV0EsV0FBV0YsS0FBWCxFQUFrQixDQUFDLENBQW5CLENBQVgsRUFBa0MsQ0FBbEMsQ0FBUDtBQUE4Qzs7OzRDQUVwREEsSyxFQUFPO0FBQUUsYUFBT0UsV0FBV0EsV0FBV0YsS0FBWCxFQUFrQixDQUFsQixDQUFYLEVBQWlDLENBQWpDLENBQVA7QUFBNkM7OzsyQ0FFdkRBLEssRUFBTztBQUFFLGFBQU9FLFdBQVdBLFdBQVdGLEtBQVgsRUFBa0IsQ0FBbEIsQ0FBWCxFQUFpQyxDQUFqQyxDQUFQO0FBQTZDOzs7K0JBRWxFQSxLLEVBQU87QUFBRSxhQUFPQSxNQUFNRyxNQUFOLENBQWEsVUFBU0MsS0FBVCxFQUFnQkMsS0FBaEIsRUFBdUI7QUFBRSxlQUFPQyxPQUFPRCxLQUFQLENBQVA7QUFBdUIsT0FBN0QsQ0FBUDtBQUF3RTs7Ozs7O0FBR3JHRSxPQUFPQyxPQUFQLEdBQWlCVCxjQUFqQjs7QUFFQSxTQUFTRSxPQUFULENBQWlCRCxLQUFqQixFQUF3QlMsQ0FBeEIsRUFBMkI7QUFDekJULFVBQVFBLE1BQU1VLEtBQU4sRUFBUjs7QUFFQSxTQUFPVixNQUFNVyxNQUFOLENBQWFGLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBUDtBQUNEOztBQUVELFNBQVNQLFVBQVQsQ0FBb0JGLEtBQXBCLEVBQTJCUyxDQUEzQixFQUE4QjtBQUM1QlQsVUFBUUEsTUFBTVUsS0FBTixFQUFSOztBQUVBVixRQUFNVyxNQUFOLENBQWFGLENBQWIsRUFBZ0IsQ0FBaEI7O0FBRUEsU0FBT1QsS0FBUDtBQUNEOztBQUVELFNBQVNNLE1BQVQsQ0FBZ0JELEtBQWhCLEVBQXVCO0FBQ3JCLE1BQU1PLE9BQVFDLEtBQUtDLEtBQUwsQ0FBV1QsUUFBTSxDQUFqQixNQUF3QkEsUUFBTSxDQUE1Qzs7QUFFQSxTQUFPTyxJQUFQO0FBQ0QiLCJmaWxlIjoiYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIGFycmF5VXRpbGl0aWVzIHtcbiAgc3RhdGljIGtlZXBGaXJzdChhcnJheSkgeyByZXR1cm4ga2VlcE50aChhcnJheSwgMCk7IH1cblxuICBzdGF0aWMga2VlcFNlY29uZChhcnJheSkgeyByZXR1cm4ga2VlcE50aChhcnJheSwgMSk7IH1cblxuICBzdGF0aWMga2VlcExhc3QoYXJyYXkpIHsgcmV0dXJuIGtlZXBOdGgoYXJyYXksIC0xKTsgfVxuXG4gIHN0YXRpYyBkaXNjYXJkRmlyc3QoYXJyYXkpIHsgcmV0dXJuIGRpc2NhcmROdGgoYXJyYXksIDApOyB9XG5cbiAgc3RhdGljIGRpc2NhcmRTZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGRpc2NhcmROdGgoYXJyYXksIDEpOyB9XG5cbiAgc3RhdGljIGRpc2NhcmRMYXN0KGFycmF5KSB7IHJldHVybiBkaXNjYXJkTnRoKGFycmF5LCAtMSk7IH1cbiAgXG4gIHN0YXRpYyBkaXNjYXJkTGFzdFRoZW5GaXJzdChhcnJheSkgeyByZXR1cm4gZGlzY2FyZE50aChkaXNjYXJkTnRoKGFycmF5LCAtMSksIDApOyB9XG5cbiAgc3RhdGljIGRpc2NhcmRGb3VydGhUaGVuU2Vjb25kKGFycmF5KSB7IHJldHVybiBkaXNjYXJkTnRoKGRpc2NhcmROdGgoYXJyYXksIDMpLCAxKTsgfVxuXG4gIHN0YXRpYyBkaXNjYXJkRmlmdGhUaGVuU2Vjb25kKGFycmF5KSB7IHJldHVybiBkaXNjYXJkTnRoKGRpc2NhcmROdGgoYXJyYXksIDQpLCAxKTsgfVxuXG4gIHN0YXRpYyBkaXNjYXJkT2RkKGFycmF5KSB7IHJldHVybiBhcnJheS5maWx0ZXIoZnVuY3Rpb24oZW50cnksIGluZGV4KSB7IHJldHVybiBpc0V2ZW4oaW5kZXgpOyB9KTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiBrZWVwTnRoKGFycmF5LCBuKSB7XG4gIGFycmF5ID0gYXJyYXkuc2xpY2UoKTtcblxuICByZXR1cm4gYXJyYXkuc3BsaWNlKG4sIDEpO1xufVxuXG5mdW5jdGlvbiBkaXNjYXJkTnRoKGFycmF5LCBuKSB7XG4gIGFycmF5ID0gYXJyYXkuc2xpY2UoKTtcblxuICBhcnJheS5zcGxpY2UobiwgMSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBpc0V2ZW4oaW5kZXgpIHtcbiAgY29uc3QgZXZlbiA9IChNYXRoLmZsb29yKGluZGV4LzIpID09PSBpbmRleC8yKTtcblxuICByZXR1cm4gZXZlbjtcbn1cbiJdfQ==