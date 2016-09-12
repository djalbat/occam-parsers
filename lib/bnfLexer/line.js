'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SequenceOfSymbols = require('./sequenceOfSymbols');

var Line = function () {
  function Line(name, sequencesOfSymbols) {
    _classCallCheck(this, Line);

    this.name = name;
    this.sequencesOfSymbols = sequencesOfSymbols;
  }

  _createClass(Line, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'mapSequencesOfSymbols',
    value: function mapSequencesOfSymbols(cb) {
      return this.sequencesOfSymbols.map(cb);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      var matches = content.match(/^\s*([^\s]+)\s+::=(.+)$/),
          secondMatch = second(matches),
          thirdMatch = third(matches),
          expression = thirdMatch.replace(/^\s+|\s+$/g, ''),
          choices = expression.split(/\s+\|\s+/),
          name = secondMatch,
          ///
      sequencesOfSymbols = choices.map(function (choice) {
        var sequenceOfSymbols = SequenceOfSymbols.fromChoice(choice);

        return sequenceOfSymbols;
      });

      var line = new Line(name, sequencesOfSymbols);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZMZXhlci9saW5lLmpzIl0sIm5hbWVzIjpbIlNlcXVlbmNlT2ZTeW1ib2xzIiwicmVxdWlyZSIsIkxpbmUiLCJuYW1lIiwic2VxdWVuY2VzT2ZTeW1ib2xzIiwiY2IiLCJtYXAiLCJjb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJ0aGlyZE1hdGNoIiwidGhpcmQiLCJleHByZXNzaW9uIiwicmVwbGFjZSIsImNob2ljZXMiLCJzcGxpdCIsImNob2ljZSIsInNlcXVlbmNlT2ZTeW1ib2xzIiwiZnJvbUNob2ljZSIsImxpbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxvQkFBb0JDLFFBQVEscUJBQVIsQ0FBeEI7O0lBRU1DLEk7QUFDSixnQkFBWUMsSUFBWixFQUFrQkMsa0JBQWxCLEVBQXNDO0FBQUE7O0FBQ3BDLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCQSxrQkFBMUI7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0QsSUFBWjtBQUNEOzs7MENBRXFCRSxFLEVBQUk7QUFDeEIsYUFBTyxLQUFLRCxrQkFBTCxDQUF3QkUsR0FBeEIsQ0FBNEJELEVBQTVCLENBQVA7QUFDRDs7O2dDQUVrQkUsTyxFQUFTO0FBQzFCLFVBQUlDLFVBQVVELFFBQVFFLEtBQVIsQ0FBYyx5QkFBZCxDQUFkO0FBQUEsVUFDSUMsY0FBY0MsT0FBT0gsT0FBUCxDQURsQjtBQUFBLFVBRUlJLGFBQWFDLE1BQU1MLE9BQU4sQ0FGakI7QUFBQSxVQUdJTSxhQUFhRixXQUFXRyxPQUFYLENBQW1CLFlBQW5CLEVBQWlDLEVBQWpDLENBSGpCO0FBQUEsVUFJSUMsVUFBVUYsV0FBV0csS0FBWCxDQUFpQixVQUFqQixDQUpkO0FBQUEsVUFLSWQsT0FBT08sV0FMWDtBQUFBLFVBS3lCO0FBQ3JCTiwyQkFBcUJZLFFBQVFWLEdBQVIsQ0FBWSxVQUFTWSxNQUFULEVBQWlCO0FBQ2hELFlBQUlDLG9CQUFvQm5CLGtCQUFrQm9CLFVBQWxCLENBQTZCRixNQUE3QixDQUF4Qjs7QUFFQSxlQUFPQyxpQkFBUDtBQUNELE9BSm9CLENBTnpCOztBQVlBLFVBQUlFLE9BQU8sSUFBSW5CLElBQUosQ0FBU0MsSUFBVCxFQUFlQyxrQkFBZixDQUFYOztBQUVBLGFBQU9pQixJQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCckIsSUFBakI7O0FBRUEsU0FBU1MsTUFBVCxDQUFnQmEsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMzQyxTQUFTWCxLQUFULENBQWVXLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2VxdWVuY2VPZlN5bWJvbHMgPSByZXF1aXJlKCcuL3NlcXVlbmNlT2ZTeW1ib2xzJyk7XG5cbmNsYXNzIExpbmUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzZXF1ZW5jZXNPZlN5bWJvbHMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc2VxdWVuY2VzT2ZTeW1ib2xzID0gc2VxdWVuY2VzT2ZTeW1ib2xzO1xuICB9XG4gIFxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIG1hcFNlcXVlbmNlc09mU3ltYm9scyhjYikge1xuICAgIHJldHVybiB0aGlzLnNlcXVlbmNlc09mU3ltYm9scy5tYXAoY2IpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIHZhciBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXlxccyooW15cXHNdKylcXHMrOjo9KC4rKSQvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IHRoaXJkTWF0Y2gucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpLFxuICAgICAgICBjaG9pY2VzID0gZXhwcmVzc2lvbi5zcGxpdCgvXFxzK1xcfFxccysvKSwgXG4gICAgICAgIG5hbWUgPSBzZWNvbmRNYXRjaCwgIC8vL1xuICAgICAgICBzZXF1ZW5jZXNPZlN5bWJvbHMgPSBjaG9pY2VzLm1hcChmdW5jdGlvbihjaG9pY2UpIHtcbiAgICAgICAgICB2YXIgc2VxdWVuY2VPZlN5bWJvbHMgPSBTZXF1ZW5jZU9mU3ltYm9scy5mcm9tQ2hvaWNlKGNob2ljZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHNlcXVlbmNlT2ZTeW1ib2xzO1xuICAgICAgICB9KTtcbiAgICBcbiAgICB2YXIgbGluZSA9IG5ldyBMaW5lKG5hbWUsIHNlcXVlbmNlc09mU3ltYm9scyk7XG4gICAgXG4gICAgcmV0dXJuIGxpbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMaW5lO1xuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5mdW5jdGlvbiB0aGlyZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMl07IH1cbiJdfQ==