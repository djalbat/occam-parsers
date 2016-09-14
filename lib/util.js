'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = function () {
  function util() {
    _classCallCheck(this, util);
  }

  _createClass(util, null, [{
    key: 'spliceArray',
    value: function spliceArray(array, start, deleteCount, itemsArray) {
      var args = [start, deleteCount].concat(itemsArray);

      Array.prototype.splice.apply(array, args);
    }
  }, {
    key: 'trimString',
    value: function trimString(string) {
      var trimmedString = string.replace(/^\s+|\s+$/g, '');

      return trimmedString;
    }
  }]);

  return util;
}();

module.exports = util;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi91dGlsLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJhcnJheSIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJpdGVtc0FycmF5IiwiYXJncyIsImNvbmNhdCIsIkFycmF5IiwicHJvdG90eXBlIiwic3BsaWNlIiwiYXBwbHkiLCJzdHJpbmciLCJ0cmltbWVkU3RyaW5nIiwicmVwbGFjZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSTs7Ozs7OztnQ0FDZUMsSyxFQUFPQyxLLEVBQU9DLFcsRUFBYUMsVSxFQUFZO0FBQ3hELFVBQUlDLE9BQU8sQ0FBQ0gsS0FBRCxFQUFRQyxXQUFSLEVBQXFCRyxNQUFyQixDQUE0QkYsVUFBNUIsQ0FBWDs7QUFFQUcsWUFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLEtBQXZCLENBQTZCVCxLQUE3QixFQUFvQ0ksSUFBcEM7QUFDRDs7OytCQUVpQk0sTSxFQUFRO0FBQ3hCLFVBQUlDLGdCQUFnQkQsT0FBT0UsT0FBUCxDQUFlLFlBQWYsRUFBNkIsRUFBN0IsQ0FBcEI7O0FBRUEsYUFBT0QsYUFBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQmYsSUFBakIiLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgdXRpbCB7XG4gIHN0YXRpYyBzcGxpY2VBcnJheShhcnJheSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBpdGVtc0FycmF5KSB7XG4gICAgdmFyIGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50XS5jb25jYXQoaXRlbXNBcnJheSk7XG4gIFxuICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXksIGFyZ3MpO1xuICB9XG5cbiAgc3RhdGljIHRyaW1TdHJpbmcoc3RyaW5nKSB7IFxuICAgIHZhciB0cmltbWVkU3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTsgXG4gIFxuICAgIHJldHVybiB0cmltbWVkU3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdXRpbDtcbiJdfQ==