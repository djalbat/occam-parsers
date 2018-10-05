'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlainParser = function () {
  function PlainParser() {
    _classCallCheck(this, PlainParser);
  }

  _createClass(PlainParser, [{
    key: 'nodeFromTokens',
    value: function nodeFromTokens(tokens) {
      var node = null; ///

      return node;
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var plainParser = new PlainParser();

      return plainParser;
    }
  }]);

  return PlainParser;
}();

module.exports = PlainParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wbGFpbi9wYXJzZXIuanMiXSwibmFtZXMiOlsiUGxhaW5QYXJzZXIiLCJ0b2tlbnMiLCJub2RlIiwicGxhaW5QYXJzZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLFc7Ozs7Ozs7bUNBQ1dDLE0sRUFBUTtBQUNyQixVQUFNQyxPQUFPLElBQWIsQ0FEcUIsQ0FDRDs7QUFFcEIsYUFBT0EsSUFBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1DLGNBQWMsSUFBSUgsV0FBSixFQUFwQjs7QUFFQSxhQUFPRyxXQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCTCxXQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFBsYWluUGFyc2VyIHtcbiAgbm9kZUZyb21Ub2tlbnModG9rZW5zKSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGw7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHBsYWluUGFyc2VyID0gbmV3IFBsYWluUGFyc2VyKCk7XG5cbiAgICByZXR1cm4gcGxhaW5QYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGFpblBhcnNlcjtcbiJdfQ==