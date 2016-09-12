'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Expression = function () {
  function Expression(symbols) {
    _classCallCheck(this, Expression);

    this.symbols = symbols;
  }

  _createClass(Expression, [{
    key: 'mapSymbols',
    value: function mapSymbols(cb) {
      return this.symbols.map(cb);
    }
  }], [{
    key: 'fromExpressionString',
    value: function fromExpressionString(expressionString, specialSymbols) {
      var symbols = expressionString.split(/\s+/),
          expression = new Expression(symbols);

      return expression;
    }
  }]);

  return Expression;
}();

module.exports = Expression;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZMZXhlci9leHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIkV4cHJlc3Npb24iLCJzeW1ib2xzIiwiY2IiLCJtYXAiLCJleHByZXNzaW9uU3RyaW5nIiwic3BlY2lhbFN5bWJvbHMiLCJzcGxpdCIsImV4cHJlc3Npb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLFU7QUFDSixzQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNuQixTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7OzsrQkFFVUMsRSxFQUFJO0FBQ2IsYUFBTyxLQUFLRCxPQUFMLENBQWFFLEdBQWIsQ0FBaUJELEVBQWpCLENBQVA7QUFDRDs7O3lDQUUyQkUsZ0IsRUFBa0JDLGMsRUFBZ0I7QUFDNUQsVUFBSUosVUFBVUcsaUJBQWlCRSxLQUFqQixDQUF1QixLQUF2QixDQUFkO0FBQUEsVUFDSUMsYUFBYSxJQUFJUCxVQUFKLENBQWVDLE9BQWYsQ0FEakI7O0FBR0EsYUFBT00sVUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQlQsVUFBakIiLCJmaWxlIjoiZXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHN5bWJvbHMpIHtcbiAgICB0aGlzLnN5bWJvbHMgPSBzeW1ib2xzO1xuICB9XG5cbiAgbWFwU3ltYm9scyhjYikge1xuICAgIHJldHVybiB0aGlzLnN5bWJvbHMubWFwKGNiKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21FeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcsIHNwZWNpYWxTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBleHByZXNzaW9uU3RyaW5nLnNwbGl0KC9cXHMrLyksXG4gICAgICAgIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihzeW1ib2xzKTtcbiAgICBcbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4cHJlc3Npb247XG4iXX0=