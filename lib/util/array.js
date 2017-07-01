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
    key: 'lastButOne',
    value: function lastButOne(array) {
      return array[array.length - 2];
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
  }, {
    key: 'push',
    value: function push(array1, array2) {
      Array.prototype.push.apply(array1, array2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL2FycmF5LmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsImFycmF5IiwibGVuZ3RoIiwia2VlcE50aCIsImRpc2NhcmROdGgiLCJmaWx0ZXIiLCJlbnRyeSIsImluZGV4IiwiaXNFdmVuIiwiYXJyYXkxIiwiYXJyYXkyIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJwdXNoIiwiYXBwbHkiLCJtb2R1bGUiLCJleHBvcnRzIiwibiIsInNsaWNlIiwic3BsaWNlIiwiZXZlbiIsIk1hdGgiLCJmbG9vciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxTOzs7Ozs7OzBCQUNTQyxLLEVBQU87QUFBRSxhQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjs7OzJCQUUxQkEsSyxFQUFPO0FBQUUsYUFBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7Ozt5QkFFN0JBLEssRUFBTztBQUFFLGFBQU9BLE1BQU1BLE1BQU1DLE1BQU4sR0FBZSxDQUFyQixDQUFQO0FBQWlDOzs7K0JBRXBDRCxLLEVBQU87QUFBRSxhQUFPQSxNQUFNQSxNQUFNQyxNQUFOLEdBQWUsQ0FBckIsQ0FBUDtBQUFpQzs7OzhCQUUzQ0QsSyxFQUFPO0FBQUUsYUFBT0UsUUFBUUYsS0FBUixFQUFlLENBQWYsQ0FBUDtBQUEyQjs7OytCQUVuQ0EsSyxFQUFPO0FBQUUsYUFBT0UsUUFBUUYsS0FBUixFQUFlLENBQWYsQ0FBUDtBQUEyQjs7OzZCQUV0Q0EsSyxFQUFPO0FBQUUsYUFBT0UsUUFBUUYsS0FBUixFQUFlLENBQUMsQ0FBaEIsQ0FBUDtBQUE0Qjs7O2lDQUVqQ0EsSyxFQUFPO0FBQUUsYUFBT0csV0FBV0gsS0FBWCxFQUFrQixDQUFsQixDQUFQO0FBQThCOzs7a0NBRXRDQSxLLEVBQU87QUFBRSxhQUFPRyxXQUFXSCxLQUFYLEVBQWtCLENBQWxCLENBQVA7QUFBOEI7OztnQ0FFekNBLEssRUFBTztBQUFFLGFBQU9HLFdBQVdILEtBQVgsRUFBa0IsQ0FBQyxDQUFuQixDQUFQO0FBQStCOzs7d0NBRWhDQSxLLEVBQU87QUFBRSxhQUFPRyxXQUFXQSxXQUFXSCxLQUFYLEVBQWtCLENBQWxCLENBQVgsRUFBaUMsQ0FBQyxDQUFsQyxDQUFQO0FBQThDOzs7K0JBRWhFQSxLLEVBQU87QUFBRSxhQUFPQSxNQUFNSSxNQUFOLENBQWEsVUFBU0MsS0FBVCxFQUFnQkMsS0FBaEIsRUFBdUI7QUFBRSxlQUFPQyxPQUFPRCxLQUFQLENBQVA7QUFBdUIsT0FBN0QsQ0FBUDtBQUF3RTs7O3lCQUV2RkUsTSxFQUFRQyxNLEVBQVE7QUFBRUMsWUFBTUMsU0FBTixDQUFnQkMsSUFBaEIsQ0FBcUJDLEtBQXJCLENBQTJCTCxNQUEzQixFQUFtQ0MsTUFBbkM7QUFBNkM7Ozs7OztBQUc3RUssT0FBT0MsT0FBUCxHQUFpQmhCLFNBQWpCOztBQUVBLFNBQVNHLE9BQVQsQ0FBaUJGLEtBQWpCLEVBQXdCZ0IsQ0FBeEIsRUFBMkI7QUFDekJoQixVQUFRQSxNQUFNaUIsS0FBTixFQUFSOztBQUVBLFNBQU9qQixNQUFNa0IsTUFBTixDQUFhRixDQUFiLEVBQWdCLENBQWhCLENBQVA7QUFDRDs7QUFFRCxTQUFTYixVQUFULENBQW9CSCxLQUFwQixFQUEyQmdCLENBQTNCLEVBQThCO0FBQzVCaEIsVUFBUUEsTUFBTWlCLEtBQU4sRUFBUjs7QUFFQWpCLFFBQU1rQixNQUFOLENBQWFGLENBQWIsRUFBZ0IsQ0FBaEI7O0FBRUEsU0FBT2hCLEtBQVA7QUFDRDs7QUFFRCxTQUFTTyxNQUFULENBQWdCRCxLQUFoQixFQUF1QjtBQUNyQixNQUFNYSxPQUFRQyxLQUFLQyxLQUFMLENBQVdmLFFBQU0sQ0FBakIsTUFBd0JBLFFBQU0sQ0FBNUM7O0FBRUEsU0FBT2EsSUFBUDtBQUNEIiwiZmlsZSI6ImFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBhcnJheVV0aWwge1xuICBzdGF0aWMgZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbiAgc3RhdGljIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuICBzdGF0aWMgbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuICBzdGF0aWMgbGFzdEJ1dE9uZShhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMl07IH1cblxuICBzdGF0aWMga2VlcEZpcnN0KGFycmF5KSB7IHJldHVybiBrZWVwTnRoKGFycmF5LCAwKTsgfVxuXG4gIHN0YXRpYyBrZWVwU2Vjb25kKGFycmF5KSB7IHJldHVybiBrZWVwTnRoKGFycmF5LCAxKTsgfVxuXG4gIHN0YXRpYyBrZWVwTGFzdChhcnJheSkgeyByZXR1cm4ga2VlcE50aChhcnJheSwgLTEpOyB9XG5cbiAgc3RhdGljIGRpc2NhcmRGaXJzdChhcnJheSkgeyByZXR1cm4gZGlzY2FyZE50aChhcnJheSwgMCk7IH1cblxuICBzdGF0aWMgZGlzY2FyZFNlY29uZChhcnJheSkgeyByZXR1cm4gZGlzY2FyZE50aChhcnJheSwgMSk7IH1cblxuICBzdGF0aWMgZGlzY2FyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGRpc2NhcmROdGgoYXJyYXksIC0xKTsgfVxuICBcbiAgc3RhdGljIGRpc2NhcmRGaXJzdEFuZExhc3QoYXJyYXkpIHsgcmV0dXJuIGRpc2NhcmROdGgoZGlzY2FyZE50aChhcnJheSwgMCksIC0xKTsgfVxuXG4gIHN0YXRpYyBkaXNjYXJkT2RkKGFycmF5KSB7IHJldHVybiBhcnJheS5maWx0ZXIoZnVuY3Rpb24oZW50cnksIGluZGV4KSB7IHJldHVybiBpc0V2ZW4oaW5kZXgpOyB9KTsgfVxuXG4gIHN0YXRpYyBwdXNoKGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5VXRpbDtcblxuZnVuY3Rpb24ga2VlcE50aChhcnJheSwgbikge1xuICBhcnJheSA9IGFycmF5LnNsaWNlKCk7XG5cbiAgcmV0dXJuIGFycmF5LnNwbGljZShuLCAxKTtcbn1cblxuZnVuY3Rpb24gZGlzY2FyZE50aChhcnJheSwgbikge1xuICBhcnJheSA9IGFycmF5LnNsaWNlKCk7XG5cbiAgYXJyYXkuc3BsaWNlKG4sIDEpO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gaXNFdmVuKGluZGV4KSB7XG4gIGNvbnN0IGV2ZW4gPSAoTWF0aC5mbG9vcihpbmRleC8yKSA9PT0gaW5kZXgvMik7XG5cbiAgcmV0dXJuIGV2ZW47XG59XG4iXX0=