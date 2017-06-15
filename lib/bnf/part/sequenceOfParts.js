'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SequenceOfPartsPart = function () {
  function SequenceOfPartsPart(part) {
    _classCallCheck(this, SequenceOfPartsPart);

    this.part = part;
  }

  _createClass(SequenceOfPartsPart, [{
    key: 'getPart',
    value: function getPart() {
      return this.part;
    }
  }, {
    key: 'toString',
    value: function toString(operatorString) {
      var partString = this.part.toString(),
          string = '' + partString + operatorString;

      return string;
    }
  }]);

  return SequenceOfPartsPart;
}();

module.exports = SequenceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9zZXF1ZW5jZU9mUGFydHMuanMiXSwibmFtZXMiOlsiU2VxdWVuY2VPZlBhcnRzUGFydCIsInBhcnQiLCJvcGVyYXRvclN0cmluZyIsInBhcnRTdHJpbmciLCJ0b1N0cmluZyIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsbUI7QUFDSiwrQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0EsSUFBWjtBQUNEOzs7NkJBRVFDLGMsRUFBZ0I7QUFDdkIsVUFBTUMsYUFBYSxLQUFLRixJQUFMLENBQVVHLFFBQVYsRUFBbkI7QUFBQSxVQUNNQyxjQUFZRixVQUFaLEdBQXlCRCxjQUQvQjs7QUFHQSxhQUFPRyxNQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCUCxtQkFBakIiLCJmaWxlIjoic2VxdWVuY2VPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydCkge1xuICAgIHRoaXMucGFydCA9IHBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnBhcnQ7XG4gIH1cbiAgXG4gIHRvU3RyaW5nKG9wZXJhdG9yU3RyaW5nKSB7XG4gICAgY29uc3QgcGFydFN0cmluZyA9IHRoaXMucGFydC50b1N0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3BhcnRTdHJpbmd9JHtvcGVyYXRvclN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG4iXX0=