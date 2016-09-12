'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Expression = require('./expression');

var Line = function () {
  function Line(name, expressions) {
    _classCallCheck(this, Line);

    this.name = name;
    this.expressions = expressions;
  }

  _createClass(Line, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'mapExpressions',
    value: function mapExpressions(cb) {
      return this.expressions.map(cb);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content, specialSymbols) {
      var matches = content.match(/^\s*([^\s]+)\s+::=(.+)$/),
          secondMatch = second(matches),
          thirdMatch = third(matches),
          expressionString = thirdMatch.replace(/^\s+|\s+$/g, ''),
          expressionStrings = expressionString.split(/\s+\|\s+/),
          name = secondMatch,
          ///
      expressions = expressionStrings.map(function (expressionString) {
        var expression = Expression.fromExpressionString(expressionString, specialSymbols);

        return expression;
      });

      var line = new Line(name, expressions);

      return line;
    }
  }]);

  return Line;
}();

module.exports = Line;

function second(array) {
  return array[1];
}
function third(array) {
  return array[2];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZMZXhlci9saW5lLmpzIl0sIm5hbWVzIjpbIkV4cHJlc3Npb24iLCJyZXF1aXJlIiwiTGluZSIsIm5hbWUiLCJleHByZXNzaW9ucyIsImNiIiwibWFwIiwiY29udGVudCIsInNwZWNpYWxTeW1ib2xzIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJ0aGlyZE1hdGNoIiwidGhpcmQiLCJleHByZXNzaW9uU3RyaW5nIiwicmVwbGFjZSIsImV4cHJlc3Npb25TdHJpbmdzIiwic3BsaXQiLCJleHByZXNzaW9uIiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJsaW5lIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsYUFBYUMsUUFBUSxjQUFSLENBQWpCOztJQUVNQyxJO0FBQ0osZ0JBQVlDLElBQVosRUFBa0JDLFdBQWxCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtELElBQVo7QUFDRDs7O21DQUVjRSxFLEVBQUk7QUFDakIsYUFBTyxLQUFLRCxXQUFMLENBQWlCRSxHQUFqQixDQUFxQkQsRUFBckIsQ0FBUDtBQUNEOzs7Z0NBRWtCRSxPLEVBQVNDLGMsRUFBZ0I7QUFDMUMsVUFBSUMsVUFBVUYsUUFBUUcsS0FBUixDQUFjLHlCQUFkLENBQWQ7QUFBQSxVQUNJQyxjQUFjQyxPQUFPSCxPQUFQLENBRGxCO0FBQUEsVUFFSUksYUFBYUMsTUFBTUwsT0FBTixDQUZqQjtBQUFBLFVBR0lNLG1CQUFtQkYsV0FBV0csT0FBWCxDQUFtQixZQUFuQixFQUFpQyxFQUFqQyxDQUh2QjtBQUFBLFVBSUlDLG9CQUFvQkYsaUJBQWlCRyxLQUFqQixDQUF1QixVQUF2QixDQUp4QjtBQUFBLFVBS0lmLE9BQU9RLFdBTFg7QUFBQSxVQUt5QjtBQUNyQlAsb0JBQWNhLGtCQUFrQlgsR0FBbEIsQ0FBc0IsVUFBU1MsZ0JBQVQsRUFBMkI7QUFDN0QsWUFBSUksYUFBYW5CLFdBQVdvQixvQkFBWCxDQUFnQ0wsZ0JBQWhDLEVBQWtEUCxjQUFsRCxDQUFqQjs7QUFFQSxlQUFPVyxVQUFQO0FBQ0QsT0FKYSxDQU5sQjs7QUFZQSxVQUFJRSxPQUFPLElBQUluQixJQUFKLENBQVNDLElBQVQsRUFBZUMsV0FBZixDQUFYOztBQUVBLGFBQU9pQixJQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCckIsSUFBakI7O0FBRUEsU0FBU1UsTUFBVCxDQUFnQlksS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMzQyxTQUFTVixLQUFULENBQWVVLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRXhwcmVzc2lvbiA9IHJlcXVpcmUoJy4vZXhwcmVzc2lvbicpO1xuXG5jbGFzcyBMaW5lIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZXhwcmVzc2lvbnMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZXhwcmVzc2lvbnMgPSBleHByZXNzaW9ucztcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG4gIFxuICBtYXBFeHByZXNzaW9ucyhjYikge1xuICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb25zLm1hcChjYik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgc3BlY2lhbFN5bWJvbHMpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goL15cXHMqKFteXFxzXSspXFxzKzo6PSguKykkLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSB0aGlyZE1hdGNoLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZ3MgPSBleHByZXNzaW9uU3RyaW5nLnNwbGl0KC9cXHMrXFx8XFxzKy8pLFxuICAgICAgICBuYW1lID0gc2Vjb25kTWF0Y2gsICAvLy9cbiAgICAgICAgZXhwcmVzc2lvbnMgPSBleHByZXNzaW9uU3RyaW5ncy5tYXAoZnVuY3Rpb24oZXhwcmVzc2lvblN0cmluZykge1xuICAgICAgICAgIHZhciBleHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nLCBzcGVjaWFsU3ltYm9scyk7XG5cbiAgICAgICAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgICAgICAgfSk7XG5cbiAgICB2YXIgbGluZSA9IG5ldyBMaW5lKG5hbWUsIGV4cHJlc3Npb25zKTtcblxuICAgIHJldHVybiBsaW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGluZTtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG4iXX0=