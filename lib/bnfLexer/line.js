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
      var matches = content.match(/^(.+)::=(.+)$/),
          secondMatch = second(matches),
          thirdMatch = third(matches),
          name = trim(secondMatch),
          expression = trim(thirdMatch),
          choices = expression.split(/\s+\|\s+/),
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

function trim(string) {
  return string.replace(/^\s+|\s+$/g, '');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZMZXhlci9saW5lLmpzIl0sIm5hbWVzIjpbIlNlcXVlbmNlT2ZTeW1ib2xzIiwicmVxdWlyZSIsIkxpbmUiLCJuYW1lIiwic2VxdWVuY2VzT2ZTeW1ib2xzIiwiY2IiLCJtYXAiLCJjb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJ0aGlyZE1hdGNoIiwidGhpcmQiLCJ0cmltIiwiZXhwcmVzc2lvbiIsImNob2ljZXMiLCJzcGxpdCIsImNob2ljZSIsInNlcXVlbmNlT2ZTeW1ib2xzIiwiZnJvbUNob2ljZSIsImxpbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiLCJzdHJpbmciLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsb0JBQW9CQyxRQUFRLHFCQUFSLENBQXhCOztJQUVNQyxJO0FBQ0osZ0JBQVlDLElBQVosRUFBa0JDLGtCQUFsQixFQUFzQztBQUFBOztBQUNwQyxTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQkEsa0JBQTFCO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtELElBQVo7QUFDRDs7OzBDQUVxQkUsRSxFQUFJO0FBQ3hCLGFBQU8sS0FBS0Qsa0JBQUwsQ0FBd0JFLEdBQXhCLENBQTRCRCxFQUE1QixDQUFQO0FBQ0Q7OztnQ0FFa0JFLE8sRUFBUztBQUMxQixVQUFJQyxVQUFVRCxRQUFRRSxLQUFSLENBQWMsZUFBZCxDQUFkO0FBQUEsVUFDSUMsY0FBY0MsT0FBT0gsT0FBUCxDQURsQjtBQUFBLFVBRUlJLGFBQWFDLE1BQU1MLE9BQU4sQ0FGakI7QUFBQSxVQUdJTCxPQUFPVyxLQUFLSixXQUFMLENBSFg7QUFBQSxVQUlJSyxhQUFhRCxLQUFLRixVQUFMLENBSmpCO0FBQUEsVUFLSUksVUFBVUQsV0FBV0UsS0FBWCxDQUFpQixVQUFqQixDQUxkO0FBQUEsVUFNSWIscUJBQXFCWSxRQUFRVixHQUFSLENBQVksVUFBU1ksTUFBVCxFQUFpQjtBQUNoRCxZQUFJQyxvQkFBb0JuQixrQkFBa0JvQixVQUFsQixDQUE2QkYsTUFBN0IsQ0FBeEI7O0FBRUEsZUFBT0MsaUJBQVA7QUFDRCxPQUpvQixDQU56Qjs7QUFZQSxVQUFJRSxPQUFPLElBQUluQixJQUFKLENBQVNDLElBQVQsRUFBZUMsa0JBQWYsQ0FBWDs7QUFFQSxhQUFPaUIsSUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnJCLElBQWpCOztBQUVBLFNBQVNTLE1BQVQsQ0FBZ0JhLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDM0MsU0FBU1gsS0FBVCxDQUFlVyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7O0FBRTFDLFNBQVNWLElBQVQsQ0FBY1csTUFBZCxFQUFzQjtBQUNwQixTQUFPQSxPQUFPQyxPQUFQLENBQWUsWUFBZixFQUE2QixFQUE3QixDQUFQO0FBQ0QiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFNlcXVlbmNlT2ZTeW1ib2xzID0gcmVxdWlyZSgnLi9zZXF1ZW5jZU9mU3ltYm9scycpO1xuXG5jbGFzcyBMaW5lIHtcbiAgY29uc3RydWN0b3IobmFtZSwgc2VxdWVuY2VzT2ZTeW1ib2xzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnNlcXVlbmNlc09mU3ltYm9scyA9IHNlcXVlbmNlc09mU3ltYm9scztcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG4gIFxuICBtYXBTZXF1ZW5jZXNPZlN5bWJvbHMoY2IpIHtcbiAgICByZXR1cm4gdGhpcy5zZXF1ZW5jZXNPZlN5bWJvbHMubWFwKGNiKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goL14oLispOjo9KC4rKSQvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgbmFtZSA9IHRyaW0oc2Vjb25kTWF0Y2gpLFxuICAgICAgICBleHByZXNzaW9uID0gdHJpbSh0aGlyZE1hdGNoKSxcbiAgICAgICAgY2hvaWNlcyA9IGV4cHJlc3Npb24uc3BsaXQoL1xccytcXHxcXHMrLyksIFxuICAgICAgICBzZXF1ZW5jZXNPZlN5bWJvbHMgPSBjaG9pY2VzLm1hcChmdW5jdGlvbihjaG9pY2UpIHtcbiAgICAgICAgICB2YXIgc2VxdWVuY2VPZlN5bWJvbHMgPSBTZXF1ZW5jZU9mU3ltYm9scy5mcm9tQ2hvaWNlKGNob2ljZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHNlcXVlbmNlT2ZTeW1ib2xzO1xuICAgICAgICB9KTtcbiAgICBcbiAgICB2YXIgbGluZSA9IG5ldyBMaW5lKG5hbWUsIHNlcXVlbmNlc09mU3ltYm9scyk7XG4gICAgXG4gICAgcmV0dXJuIGxpbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMaW5lO1xuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5mdW5jdGlvbiB0aGlyZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMl07IH1cblxuZnVuY3Rpb24gdHJpbShzdHJpbmcpIHsgXG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpOyBcbn1cbiJdfQ==