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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvYXJyYXkuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsaXRpZXMiLCJhcnJheSIsImtlZXBOdGgiLCJkaXNjYXJkTnRoIiwiZmlsdGVyIiwiZW50cnkiLCJpbmRleCIsImlzRXZlbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJuIiwic2xpY2UiLCJzcGxpY2UiLCJldmVuIiwiTWF0aCIsImZsb29yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLGM7Ozs7Ozs7OEJBQ2FDLEssRUFBTztBQUFFLGFBQU9DLFFBQVFELEtBQVIsRUFBZSxDQUFmLENBQVA7QUFBMkI7OzsrQkFFbkNBLEssRUFBTztBQUFFLGFBQU9DLFFBQVFELEtBQVIsRUFBZSxDQUFmLENBQVA7QUFBMkI7Ozs2QkFFdENBLEssRUFBTztBQUFFLGFBQU9DLFFBQVFELEtBQVIsRUFBZSxDQUFDLENBQWhCLENBQVA7QUFBNEI7OztpQ0FFakNBLEssRUFBTztBQUFFLGFBQU9FLFdBQVdGLEtBQVgsRUFBa0IsQ0FBbEIsQ0FBUDtBQUE4Qjs7O2tDQUV0Q0EsSyxFQUFPO0FBQUUsYUFBT0UsV0FBV0YsS0FBWCxFQUFrQixDQUFsQixDQUFQO0FBQThCOzs7Z0NBRXpDQSxLLEVBQU87QUFBRSxhQUFPRSxXQUFXRixLQUFYLEVBQWtCLENBQUMsQ0FBbkIsQ0FBUDtBQUErQjs7O3lDQUUvQkEsSyxFQUFPO0FBQUUsYUFBT0UsV0FBV0EsV0FBV0YsS0FBWCxFQUFrQixDQUFDLENBQW5CLENBQVgsRUFBa0MsQ0FBbEMsQ0FBUDtBQUE4Qzs7OzJDQUVyREEsSyxFQUFPO0FBQUUsYUFBT0UsV0FBV0EsV0FBV0YsS0FBWCxFQUFrQixDQUFsQixDQUFYLEVBQWlDLENBQWpDLENBQVA7QUFBNkM7OzsrQkFFbEVBLEssRUFBTztBQUFFLGFBQU9BLE1BQU1HLE1BQU4sQ0FBYSxVQUFTQyxLQUFULEVBQWdCQyxLQUFoQixFQUF1QjtBQUFFLGVBQU9DLE9BQU9ELEtBQVAsQ0FBUDtBQUF1QixPQUE3RCxDQUFQO0FBQXdFOzs7Ozs7QUFHckdFLE9BQU9DLE9BQVAsR0FBaUJULGNBQWpCOztBQUVBLFNBQVNFLE9BQVQsQ0FBaUJELEtBQWpCLEVBQXdCUyxDQUF4QixFQUEyQjtBQUN6QlQsVUFBUUEsTUFBTVUsS0FBTixFQUFSOztBQUVBLFNBQU9WLE1BQU1XLE1BQU4sQ0FBYUYsQ0FBYixFQUFnQixDQUFoQixDQUFQO0FBQ0Q7O0FBRUQsU0FBU1AsVUFBVCxDQUFvQkYsS0FBcEIsRUFBMkJTLENBQTNCLEVBQThCO0FBQzVCVCxVQUFRQSxNQUFNVSxLQUFOLEVBQVI7O0FBRUFWLFFBQU1XLE1BQU4sQ0FBYUYsQ0FBYixFQUFnQixDQUFoQjs7QUFFQSxTQUFPVCxLQUFQO0FBQ0Q7O0FBRUQsU0FBU00sTUFBVCxDQUFnQkQsS0FBaEIsRUFBdUI7QUFDckIsTUFBTU8sT0FBUUMsS0FBS0MsS0FBTCxDQUFXVCxRQUFNLENBQWpCLE1BQXdCQSxRQUFNLENBQTVDOztBQUVBLFNBQU9PLElBQVA7QUFDRCIsImZpbGUiOiJhcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgYXJyYXlVdGlsaXRpZXMge1xuICBzdGF0aWMga2VlcEZpcnN0KGFycmF5KSB7IHJldHVybiBrZWVwTnRoKGFycmF5LCAwKTsgfVxuXG4gIHN0YXRpYyBrZWVwU2Vjb25kKGFycmF5KSB7IHJldHVybiBrZWVwTnRoKGFycmF5LCAxKTsgfVxuXG4gIHN0YXRpYyBrZWVwTGFzdChhcnJheSkgeyByZXR1cm4ga2VlcE50aChhcnJheSwgLTEpOyB9XG5cbiAgc3RhdGljIGRpc2NhcmRGaXJzdChhcnJheSkgeyByZXR1cm4gZGlzY2FyZE50aChhcnJheSwgMCk7IH1cblxuICBzdGF0aWMgZGlzY2FyZFNlY29uZChhcnJheSkgeyByZXR1cm4gZGlzY2FyZE50aChhcnJheSwgMSk7IH1cblxuICBzdGF0aWMgZGlzY2FyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGRpc2NhcmROdGgoYXJyYXksIC0xKTsgfVxuICBcbiAgc3RhdGljIGRpc2NhcmRMYXN0VGhlbkZpcnN0KGFycmF5KSB7IHJldHVybiBkaXNjYXJkTnRoKGRpc2NhcmROdGgoYXJyYXksIC0xKSwgMCk7IH1cblxuICBzdGF0aWMgZGlzY2FyZEZpZnRoVGhlblNlY29uZChhcnJheSkgeyByZXR1cm4gZGlzY2FyZE50aChkaXNjYXJkTnRoKGFycmF5LCA0KSwgMSk7IH1cblxuICBzdGF0aWMgZGlzY2FyZE9kZChhcnJheSkgeyByZXR1cm4gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uKGVudHJ5LCBpbmRleCkgeyByZXR1cm4gaXNFdmVuKGluZGV4KTsgfSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVV0aWxpdGllcztcblxuZnVuY3Rpb24ga2VlcE50aChhcnJheSwgbikge1xuICBhcnJheSA9IGFycmF5LnNsaWNlKCk7XG5cbiAgcmV0dXJuIGFycmF5LnNwbGljZShuLCAxKTtcbn1cblxuZnVuY3Rpb24gZGlzY2FyZE50aChhcnJheSwgbikge1xuICBhcnJheSA9IGFycmF5LnNsaWNlKCk7XG5cbiAgYXJyYXkuc3BsaWNlKG4sIDEpO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gaXNFdmVuKGluZGV4KSB7XG4gIGNvbnN0IGV2ZW4gPSAoTWF0aC5mbG9vcihpbmRleC8yKSA9PT0gaW5kZXgvMik7XG5cbiAgcmV0dXJuIGV2ZW47XG59XG4iXX0=