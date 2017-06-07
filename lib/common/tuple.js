'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tuple = function () {
  function Tuple() {
    _classCallCheck(this, Tuple);

    for (var _len = arguments.length, elements = Array(_len), _key = 0; _key < _len; _key++) {
      elements[_key] = arguments[_key];
    }

    this.elements = elements;
  }

  _createClass(Tuple, [{
    key: 'getElements',
    value: function getElements() {
      return this.elements;
    }
  }, {
    key: 'getFirstElement',
    value: function getFirstElement() {
      var firstElement = first(this.elements);

      return firstElement;
    }
  }, {
    key: 'getLastElement',
    value: function getLastElement() {
      var lastElement = last(this.elements);

      return lastElement;
    }
  }]);

  return Tuple;
}();

module.exports = Tuple;

function first(array) {
  return array[0];
}
function last(array) {
  return array[array.length - 1];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdHVwbGUuanMiXSwibmFtZXMiOlsiVHVwbGUiLCJlbGVtZW50cyIsImZpcnN0RWxlbWVudCIsImZpcnN0IiwibGFzdEVsZW1lbnQiLCJsYXN0IiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEs7QUFDSixtQkFBMEI7QUFBQTs7QUFBQSxzQ0FBVkMsUUFBVTtBQUFWQSxjQUFVO0FBQUE7O0FBQ3hCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtBLFFBQVo7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFNQyxlQUFlQyxNQUFNLEtBQUtGLFFBQVgsQ0FBckI7O0FBRUEsYUFBT0MsWUFBUDtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUUsY0FBY0MsS0FBSyxLQUFLSixRQUFWLENBQXBCOztBQUVBLGFBQU9HLFdBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJQLEtBQWpCOztBQUVBLFNBQVNHLEtBQVQsQ0FBZUssS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzFDLFNBQVNILElBQVQsQ0FBY0csS0FBZCxFQUFxQjtBQUFFLFNBQU9BLE1BQU1BLE1BQU1DLE1BQU4sR0FBZSxDQUFyQixDQUFQO0FBQWlDIiwiZmlsZSI6InR1cGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBUdXBsZSB7XG4gIGNvbnN0cnVjdG9yICguLi5lbGVtZW50cykge1xuICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgfVxuICBcbiAgZ2V0RWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHM7XG4gIH1cbiAgXG4gIGdldEZpcnN0RWxlbWVudCgpIHtcbiAgICBjb25zdCBmaXJzdEVsZW1lbnQgPSBmaXJzdCh0aGlzLmVsZW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gZmlyc3RFbGVtZW50O1xuICB9XG4gIFxuICBnZXRMYXN0RWxlbWVudCgpIHtcbiAgICBjb25zdCBsYXN0RWxlbWVudCA9IGxhc3QodGhpcy5lbGVtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIGxhc3RFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHVwbGU7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cbiJdfQ==