'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SequenceOfPartsPart = function () {
  function SequenceOfPartsPart(part) {
    var noWhitespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var backtrackingDirection = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, SequenceOfPartsPart);

    this.part = part;
    this.noWhitespace = noWhitespace;
    this.backtrackingDirection = backtrackingDirection;
  }

  _createClass(SequenceOfPartsPart, [{
    key: 'getPart',
    value: function getPart() {
      return this.part;
    }
  }, {
    key: 'getNoWhitespace',
    value: function getNoWhitespace() {
      return this.noWhitespace;
    }
  }, {
    key: 'getBacktrackingDirection',
    value: function getBacktrackingDirection() {
      return this.backtrackingDirection;
    }
  }, {
    key: 'toString',
    value: function toString(operatorString) {
      var noWhitespaceString = this.noWhitespace ? '<NO_WHITESPACE>' : '',
          partString = this.part.toString(),
          string = '' + noWhitespaceString + partString + operatorString;

      return string;
    }
  }]);

  return SequenceOfPartsPart;
}();

module.exports = SequenceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9zZXF1ZW5jZU9mUGFydHMuanMiXSwibmFtZXMiOlsiU2VxdWVuY2VPZlBhcnRzUGFydCIsInBhcnQiLCJub1doaXRlc3BhY2UiLCJiYWNrdHJhY2tpbmdEaXJlY3Rpb24iLCJvcGVyYXRvclN0cmluZyIsIm5vV2hpdGVzcGFjZVN0cmluZyIsInBhcnRTdHJpbmciLCJ0b1N0cmluZyIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsbUI7QUFDSiwrQkFBWUMsSUFBWixFQUFzRTtBQUFBLFFBQXBEQyxZQUFvRCx1RUFBckMsS0FBcUM7QUFBQSxRQUE5QkMscUJBQThCLHVFQUFOLElBQU07O0FBQUE7O0FBQ3BFLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MscUJBQUwsR0FBNkJBLHFCQUE3QjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRixJQUFaO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsYUFBTyxLQUFLQyxZQUFaO0FBQ0Q7OzsrQ0FFMEI7QUFDekIsYUFBTyxLQUFLQyxxQkFBWjtBQUNEOzs7NkJBRVFDLGMsRUFBZ0I7QUFDdkIsVUFBTUMscUJBQXFCLEtBQUtILFlBQUwsR0FDQyxpQkFERCxHQUVHLEVBRjlCO0FBQUEsVUFHTUksYUFBYSxLQUFLTCxJQUFMLENBQVVNLFFBQVYsRUFIbkI7QUFBQSxVQUlNQyxjQUFZSCxrQkFBWixHQUFpQ0MsVUFBakMsR0FBOENGLGNBSnBEOztBQU1BLGFBQU9JLE1BQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJWLG1CQUFqQiIsImZpbGUiOiJzZXF1ZW5jZU9mUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0LCBub1doaXRlc3BhY2UgPSBmYWxzZSwgYmFja3RyYWNraW5nRGlyZWN0aW9uID0gbnVsbCkge1xuICAgIHRoaXMucGFydCA9IHBhcnQ7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gICAgdGhpcy5iYWNrdHJhY2tpbmdEaXJlY3Rpb24gPSBiYWNrdHJhY2tpbmdEaXJlY3Rpb247XG4gIH1cblxuICBnZXRQYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnBhcnQ7XG4gIH1cblxuICBnZXROb1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9XaGl0ZXNwYWNlO1xuICB9XG4gIFxuICBnZXRCYWNrdHJhY2tpbmdEaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja3RyYWNraW5nRGlyZWN0aW9uO1xuICB9XG5cbiAgdG9TdHJpbmcob3BlcmF0b3JTdHJpbmcpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VTdHJpbmcgPSB0aGlzLm5vV2hpdGVzcGFjZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8Tk9fV0hJVEVTUEFDRT4nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICBwYXJ0U3RyaW5nID0gdGhpcy5wYXJ0LnRvU3RyaW5nKCksXG4gICAgICAgICAgc3RyaW5nID0gYCR7bm9XaGl0ZXNwYWNlU3RyaW5nfSR7cGFydFN0cmluZ30ke29wZXJhdG9yU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VxdWVuY2VPZlBhcnRzUGFydDtcbiJdfQ==