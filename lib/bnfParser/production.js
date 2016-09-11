'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule');

var Production = function () {
  function Production(name, rules, Node) {
    _classCallCheck(this, Production);

    this.name = name;
    this.rules = rules;
    this.Node = Node;
  }

  _createClass(Production, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }], [{
    key: 'fromLine',
    value: function fromLine(line, specialSymbols, Parts, mappings) {
      var matches = line.match(/^\s*([^\s]+)\s+::=(.+)$/),
          secondMatch = second(matches),
          thirdMatch = third(matches),
          expression = thirdMatch.replace(/^\s+|\s+$/g, ''),
          expressions = expression.split(/\s+\|\s+/),
          name = secondMatch,
          ///
      rules = expressions.map(function (expression) {
        var rule = Rule.fromExpression(expression, specialSymbols, Parts);

        return rule;
      }),
          Node = mappings[name],
          production = new Production(name, rules, Node);

      return production;
    }
  }]);

  return Production;
}();

module.exports = Production;

function second(array) {
  return array[1];
}
function third(array) {
  return array[2];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZQYXJzZXIvcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwibGluZSIsInNwZWNpYWxTeW1ib2xzIiwiUGFydHMiLCJtYXBwaW5ncyIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwidGhpcmRNYXRjaCIsInRoaXJkIiwiZXhwcmVzc2lvbiIsInJlcGxhY2UiLCJleHByZXNzaW9ucyIsInNwbGl0IiwibWFwIiwicnVsZSIsImZyb21FeHByZXNzaW9uIiwicHJvZHVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYOztJQUVNQyxVO0FBQ0osc0JBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxJQUF6QixFQUErQjtBQUFBOztBQUM3QixTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7NkJBRWVHLEksRUFBTUMsYyxFQUFnQkMsSyxFQUFPQyxRLEVBQVU7QUFDckQsVUFBSUMsVUFBVUosS0FBS0ssS0FBTCxDQUFXLHlCQUFYLENBQWQ7QUFBQSxVQUNJQyxjQUFjQyxPQUFPSCxPQUFQLENBRGxCO0FBQUEsVUFFSUksYUFBYUMsTUFBTUwsT0FBTixDQUZqQjtBQUFBLFVBR0lNLGFBQWFGLFdBQVdHLE9BQVgsQ0FBbUIsWUFBbkIsRUFBaUMsRUFBakMsQ0FIakI7QUFBQSxVQUlJQyxjQUFjRixXQUFXRyxLQUFYLENBQWlCLFVBQWpCLENBSmxCO0FBQUEsVUFLSWhCLE9BQU9TLFdBTFg7QUFBQSxVQUt5QjtBQUNyQlIsY0FBUWMsWUFBWUUsR0FBWixDQUFnQixVQUFTSixVQUFULEVBQXFCO0FBQzNDLFlBQUlLLE9BQU9yQixLQUFLc0IsY0FBTCxDQUFvQk4sVUFBcEIsRUFBZ0NULGNBQWhDLEVBQWdEQyxLQUFoRCxDQUFYOztBQUVBLGVBQU9hLElBQVA7QUFDRCxPQUpPLENBTlo7QUFBQSxVQVdJaEIsT0FBT0ksU0FBU04sSUFBVCxDQVhYO0FBQUEsVUFZSW9CLGFBQWEsSUFBSXJCLFVBQUosQ0FBZUMsSUFBZixFQUFxQkMsS0FBckIsRUFBNEJDLElBQTVCLENBWmpCOztBQWNBLGFBQU9rQixVQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCdkIsVUFBakI7O0FBRUEsU0FBU1csTUFBVCxDQUFnQmEsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMzQyxTQUFTWCxLQUFULENBQWVXLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJwcm9kdWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpO1xuXG5jbGFzcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcnVsZXMsIE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLk5vZGUgPSBOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUsIHNwZWNpYWxTeW1ib2xzLCBQYXJ0cywgbWFwcGluZ3MpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IGxpbmUubWF0Y2goL15cXHMqKFteXFxzXSspXFxzKzo6PSguKykkLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgIGV4cHJlc3Npb24gPSB0aGlyZE1hdGNoLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKSxcbiAgICAgICAgZXhwcmVzc2lvbnMgPSBleHByZXNzaW9uLnNwbGl0KC9cXHMrXFx8XFxzKy8pLFxuICAgICAgICBuYW1lID0gc2Vjb25kTWF0Y2gsICAvLy9cbiAgICAgICAgcnVsZXMgPSBleHByZXNzaW9ucy5tYXAoZnVuY3Rpb24oZXhwcmVzc2lvbikge1xuICAgICAgICAgIHZhciBydWxlID0gUnVsZS5mcm9tRXhwcmVzc2lvbihleHByZXNzaW9uLCBzcGVjaWFsU3ltYm9scywgUGFydHMpO1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgIH0pLFxuICAgICAgICBOb2RlID0gbWFwcGluZ3NbbmFtZV0sXG4gICAgICAgIHByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb247XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbmZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuIl19