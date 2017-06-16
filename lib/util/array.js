'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = function () {
  function arrayUtil() {
    _classCallCheck(this, arrayUtil);
  }

  _createClass(arrayUtil, null, [{
    key: 'first',
    value: function first(array) {
      return array[0];
    }
  }, {
    key: 'second',
    value: function second(array) {
      return array[1];
    }
  }, {
    key: 'last',
    value: function last(array) {
      return array[array.length - 1];
    }
  }, {
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
    key: 'discardFirstAndLast',
    value: function discardFirstAndLast(array) {
      return discardNth(discardNth(array, 0), -1);
    }
  }, {
    key: 'discardOdd',
    value: function discardOdd(array) {
      return array.filter(function (entry, index) {
        return isEven(index);
      });
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

function isEven(index) {
  var even = Math.floor(index / 2) === index / 2;

  return even;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL2FycmF5LmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsImFycmF5IiwibGVuZ3RoIiwia2VlcE50aCIsImRpc2NhcmROdGgiLCJmaWx0ZXIiLCJlbnRyeSIsImluZGV4IiwiaXNFdmVuIiwibW9kdWxlIiwiZXhwb3J0cyIsIm4iLCJzbGljZSIsInNwbGljZSIsImV2ZW4iLCJNYXRoIiwiZmxvb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsUzs7Ozs7OzswQkFDU0MsSyxFQUFPO0FBQUUsYUFBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7OzsyQkFFMUJBLEssRUFBTztBQUFFLGFBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCOzs7eUJBRTdCQSxLLEVBQU87QUFBRSxhQUFPQSxNQUFNQSxNQUFNQyxNQUFOLEdBQWUsQ0FBckIsQ0FBUDtBQUFpQzs7OzhCQUVyQ0QsSyxFQUFPO0FBQUUsYUFBT0UsUUFBUUYsS0FBUixFQUFlLENBQWYsQ0FBUDtBQUEyQjs7OytCQUVuQ0EsSyxFQUFPO0FBQUUsYUFBT0UsUUFBUUYsS0FBUixFQUFlLENBQWYsQ0FBUDtBQUEyQjs7OzZCQUV0Q0EsSyxFQUFPO0FBQUUsYUFBT0UsUUFBUUYsS0FBUixFQUFlLENBQUMsQ0FBaEIsQ0FBUDtBQUE0Qjs7O2lDQUVqQ0EsSyxFQUFPO0FBQUUsYUFBT0csV0FBV0gsS0FBWCxFQUFrQixDQUFsQixDQUFQO0FBQThCOzs7a0NBRXRDQSxLLEVBQU87QUFBRSxhQUFPRyxXQUFXSCxLQUFYLEVBQWtCLENBQWxCLENBQVA7QUFBOEI7OztnQ0FFekNBLEssRUFBTztBQUFFLGFBQU9HLFdBQVdILEtBQVgsRUFBa0IsQ0FBQyxDQUFuQixDQUFQO0FBQStCOzs7d0NBRWhDQSxLLEVBQU87QUFBRSxhQUFPRyxXQUFXQSxXQUFXSCxLQUFYLEVBQWtCLENBQWxCLENBQVgsRUFBaUMsQ0FBQyxDQUFsQyxDQUFQO0FBQThDOzs7K0JBRWhFQSxLLEVBQU87QUFBRSxhQUFPQSxNQUFNSSxNQUFOLENBQWEsVUFBU0MsS0FBVCxFQUFnQkMsS0FBaEIsRUFBdUI7QUFBRSxlQUFPQyxPQUFPRCxLQUFQLENBQVA7QUFBdUIsT0FBN0QsQ0FBUDtBQUF3RTs7Ozs7O0FBR3JHRSxPQUFPQyxPQUFQLEdBQWlCVixTQUFqQjs7QUFFQSxTQUFTRyxPQUFULENBQWlCRixLQUFqQixFQUF3QlUsQ0FBeEIsRUFBMkI7QUFDekJWLFVBQVFBLE1BQU1XLEtBQU4sRUFBUjs7QUFFQSxTQUFPWCxNQUFNWSxNQUFOLENBQWFGLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBUDtBQUNEOztBQUVELFNBQVNQLFVBQVQsQ0FBb0JILEtBQXBCLEVBQTJCVSxDQUEzQixFQUE4QjtBQUM1QlYsVUFBUUEsTUFBTVcsS0FBTixFQUFSOztBQUVBWCxRQUFNWSxNQUFOLENBQWFGLENBQWIsRUFBZ0IsQ0FBaEI7O0FBRUEsU0FBT1YsS0FBUDtBQUNEOztBQUVELFNBQVNPLE1BQVQsQ0FBZ0JELEtBQWhCLEVBQXVCO0FBQ3JCLE1BQU1PLE9BQVFDLEtBQUtDLEtBQUwsQ0FBV1QsUUFBTSxDQUFqQixNQUF3QkEsUUFBTSxDQUE1Qzs7QUFFQSxTQUFPTyxJQUFQO0FBQ0QiLCJmaWxlIjoiYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIGFycmF5VXRpbCB7XG4gIHN0YXRpYyBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuICBzdGF0aWMgc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG4gIHN0YXRpYyBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG4gIHN0YXRpYyBrZWVwRmlyc3QoYXJyYXkpIHsgcmV0dXJuIGtlZXBOdGgoYXJyYXksIDApOyB9XG5cbiAgc3RhdGljIGtlZXBTZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGtlZXBOdGgoYXJyYXksIDEpOyB9XG5cbiAgc3RhdGljIGtlZXBMYXN0KGFycmF5KSB7IHJldHVybiBrZWVwTnRoKGFycmF5LCAtMSk7IH1cblxuICBzdGF0aWMgZGlzY2FyZEZpcnN0KGFycmF5KSB7IHJldHVybiBkaXNjYXJkTnRoKGFycmF5LCAwKTsgfVxuXG4gIHN0YXRpYyBkaXNjYXJkU2Vjb25kKGFycmF5KSB7IHJldHVybiBkaXNjYXJkTnRoKGFycmF5LCAxKTsgfVxuXG4gIHN0YXRpYyBkaXNjYXJkTGFzdChhcnJheSkgeyByZXR1cm4gZGlzY2FyZE50aChhcnJheSwgLTEpOyB9XG4gIFxuICBzdGF0aWMgZGlzY2FyZEZpcnN0QW5kTGFzdChhcnJheSkgeyByZXR1cm4gZGlzY2FyZE50aChkaXNjYXJkTnRoKGFycmF5LCAwKSwgLTEpOyB9XG5cbiAgc3RhdGljIGRpc2NhcmRPZGQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LmZpbHRlcihmdW5jdGlvbihlbnRyeSwgaW5kZXgpIHsgcmV0dXJuIGlzRXZlbihpbmRleCk7IH0pOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlVdGlsO1xuXG5mdW5jdGlvbiBrZWVwTnRoKGFycmF5LCBuKSB7XG4gIGFycmF5ID0gYXJyYXkuc2xpY2UoKTtcblxuICByZXR1cm4gYXJyYXkuc3BsaWNlKG4sIDEpO1xufVxuXG5mdW5jdGlvbiBkaXNjYXJkTnRoKGFycmF5LCBuKSB7XG4gIGFycmF5ID0gYXJyYXkuc2xpY2UoKTtcblxuICBhcnJheS5zcGxpY2UobiwgMSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBpc0V2ZW4oaW5kZXgpIHtcbiAgY29uc3QgZXZlbiA9IChNYXRoLmZsb29yKGluZGV4LzIpID09PSBpbmRleC8yKTtcblxuICByZXR1cm4gZXZlbjtcbn1cbiJdfQ==