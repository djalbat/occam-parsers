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
  }, {
    key: 'parse',
    value: function parse(input, context, productions) {
      var index = context.index,
          parsed = this.rules.some(function (rule) {
        var parsed = rule.parse(input, context, productions);

        if (!parsed) {
          context.index = index;

          return false;
        } else {
          return true;
        }
      });

      return parsed;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZQYXJzZXIvcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwiaW5wdXQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJpbmRleCIsInBhcnNlZCIsInNvbWUiLCJydWxlIiwicGFyc2UiLCJsaW5lIiwic3BlY2lhbFN5bWJvbHMiLCJQYXJ0cyIsIm1hcHBpbmdzIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJ0aGlyZE1hdGNoIiwidGhpcmQiLCJleHByZXNzaW9uIiwicmVwbGFjZSIsImV4cHJlc3Npb25zIiwic3BsaXQiLCJtYXAiLCJmcm9tRXhwcmVzc2lvbiIsInByb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDs7SUFFTUMsVTtBQUNKLHNCQUFZQyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QkMsSUFBekIsRUFBK0I7QUFBQTs7QUFDN0IsU0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtGLElBQVo7QUFDRDs7OzBCQUVLRyxLLEVBQU9DLE8sRUFBU0MsVyxFQUFhO0FBQ2pDLFVBQUlDLFFBQVFGLFFBQVFFLEtBQXBCO0FBQUEsVUFDSUMsU0FBUyxLQUFLTixLQUFMLENBQVdPLElBQVgsQ0FBZ0IsVUFBU0MsSUFBVCxFQUFlO0FBQzFDLFlBQUlGLFNBQVNFLEtBQUtDLEtBQUwsQ0FBV1AsS0FBWCxFQUFrQkMsT0FBbEIsRUFBMkJDLFdBQTNCLENBQWI7O0FBRUEsWUFBSSxDQUFDRSxNQUFMLEVBQWE7QUFDWEgsa0JBQVFFLEtBQVIsR0FBZ0JBLEtBQWhCOztBQUVBLGlCQUFPLEtBQVA7QUFDRCxTQUpELE1BSU87QUFDTCxpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQVZZLENBRGI7O0FBYUEsYUFBT0MsTUFBUDtBQUNEOzs7NkJBRWVJLEksRUFBTUMsYyxFQUFnQkMsSyxFQUFPQyxRLEVBQVU7QUFDckQsVUFBSUMsVUFBVUosS0FBS0ssS0FBTCxDQUFXLHlCQUFYLENBQWQ7QUFBQSxVQUNJQyxjQUFjQyxPQUFPSCxPQUFQLENBRGxCO0FBQUEsVUFFSUksYUFBYUMsTUFBTUwsT0FBTixDQUZqQjtBQUFBLFVBR0lNLGFBQWFGLFdBQVdHLE9BQVgsQ0FBbUIsWUFBbkIsRUFBaUMsRUFBakMsQ0FIakI7QUFBQSxVQUlJQyxjQUFjRixXQUFXRyxLQUFYLENBQWlCLFVBQWpCLENBSmxCO0FBQUEsVUFLSXhCLE9BQU9pQixXQUxYO0FBQUEsVUFLeUI7QUFDckJoQixjQUFRc0IsWUFBWUUsR0FBWixDQUFnQixVQUFTSixVQUFULEVBQXFCO0FBQzNDLFlBQUlaLE9BQU9aLEtBQUs2QixjQUFMLENBQW9CTCxVQUFwQixFQUFnQ1QsY0FBaEMsRUFBZ0RDLEtBQWhELENBQVg7O0FBRUEsZUFBT0osSUFBUDtBQUNELE9BSk8sQ0FOWjtBQUFBLFVBV0lQLE9BQU9ZLFNBQVNkLElBQVQsQ0FYWDtBQUFBLFVBWUkyQixhQUFhLElBQUk1QixVQUFKLENBQWVDLElBQWYsRUFBcUJDLEtBQXJCLEVBQTRCQyxJQUE1QixDQVpqQjs7QUFjQSxhQUFPeUIsVUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQjlCLFVBQWpCOztBQUVBLFNBQVNtQixNQUFULENBQWdCWSxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzNDLFNBQVNWLEtBQVQsQ0FBZVUsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBydWxlcywgTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuTm9kZSA9IE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIHBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBpbmRleCA9IGNvbnRleHQuaW5kZXgsXG4gICAgICAgIHBhcnNlZCA9IHRoaXMucnVsZXMuc29tZShmdW5jdGlvbihydWxlKSB7XG4gICAgICB2YXIgcGFyc2VkID0gcnVsZS5wYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpO1xuICAgICAgXG4gICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICBjb250ZXh0LmluZGV4ID0gaW5kZXg7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUsIHNwZWNpYWxTeW1ib2xzLCBQYXJ0cywgbWFwcGluZ3MpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IGxpbmUubWF0Y2goL15cXHMqKFteXFxzXSspXFxzKzo6PSguKykkLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgIGV4cHJlc3Npb24gPSB0aGlyZE1hdGNoLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKSxcbiAgICAgICAgZXhwcmVzc2lvbnMgPSBleHByZXNzaW9uLnNwbGl0KC9cXHMrXFx8XFxzKy8pLFxuICAgICAgICBuYW1lID0gc2Vjb25kTWF0Y2gsICAvLy9cbiAgICAgICAgcnVsZXMgPSBleHByZXNzaW9ucy5tYXAoZnVuY3Rpb24oZXhwcmVzc2lvbikge1xuICAgICAgICAgIHZhciBydWxlID0gUnVsZS5mcm9tRXhwcmVzc2lvbihleHByZXNzaW9uLCBzcGVjaWFsU3ltYm9scywgUGFydHMpO1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgIH0pLFxuICAgICAgICBOb2RlID0gbWFwcGluZ3NbbmFtZV0sXG4gICAgICAgIHByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb247XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbmZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuIl19