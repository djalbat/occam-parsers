'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    specialSymbols = lexers.specialSymbols;

var Parts = require('./parts');

var Rule = function () {
  function Rule(parts) {
    _classCallCheck(this, Rule);

    this.parts = parts;
  }

  _createClass(Rule, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      var nodes = [],
          savedIndex = context.savedIndex();

      var parsed = this.parts.every(function (part) {
        var partNodes = part.parse(context, productions, noWhitespace),
            parsed = partNodes !== null;

        if (parsed) {
          nodes = nodes.concat(partNodes);

          noWhitespace = false;
        }

        return parsed;
      });

      if (!parsed) {
        nodes = null;

        context.backtrack(savedIndex);
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbolSequence',
    value: function fromSymbolSequence(symbolSequence, terminalSymbolsRegExp, terminalTypes) {
      var noWhitespace = false,
          parts = symbolSequence.reduceSymbols(function (parts, symbol) {
        if (symbol === specialSymbols.NO_WHITESPACE) {
          noWhitespace = true;
        } else {
          var part = partFromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace);

          parts.push(part);

          noWhitespace = false;
        }

        return parts;
      }, []),
          rule = new Rule(parts);

      return rule;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function partFromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace) {
  var part = undefined; ///

  Parts.some(function (Part) {
    part = Part.fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace);

    var parsed = part !== null;

    return parsed;
  });

  return part;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ydWxlLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJzcGVjaWFsU3ltYm9scyIsIlBhcnRzIiwiUnVsZSIsInBhcnRzIiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJzYXZlZEluZGV4IiwicGFyc2VkIiwiZXZlcnkiLCJwYXJ0IiwicGFydE5vZGVzIiwicGFyc2UiLCJjb25jYXQiLCJiYWNrdHJhY2siLCJzeW1ib2xTZXF1ZW5jZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInRlcm1pbmFsVHlwZXMiLCJyZWR1Y2VTeW1ib2xzIiwic3ltYm9sIiwiTk9fV0hJVEVTUEFDRSIsInBhcnRGcm9tU3ltYm9sIiwicHVzaCIsInJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwidW5kZWZpbmVkIiwic29tZSIsIlBhcnQiLCJmcm9tU3ltYm9sIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxpQkFBaUJGLE9BQU9FLGNBRDVCOztBQUdBLElBQUlDLFFBQVFGLFFBQVEsU0FBUixDQUFaOztJQUVNRyxJO0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0MsVyxFQUFhQyxZLEVBQWM7QUFDeEMsVUFBSUMsUUFBUSxFQUFaO0FBQUEsVUFDSUMsYUFBYUosUUFBUUksVUFBUixFQURqQjs7QUFHQSxVQUFJQyxTQUFTLEtBQUtOLEtBQUwsQ0FBV08sS0FBWCxDQUFpQixVQUFTQyxJQUFULEVBQWU7QUFDM0MsWUFBSUMsWUFBWUQsS0FBS0UsS0FBTCxDQUFXVCxPQUFYLEVBQW9CQyxXQUFwQixFQUFpQ0MsWUFBakMsQ0FBaEI7QUFBQSxZQUNJRyxTQUFVRyxjQUFjLElBRDVCOztBQUdBLFlBQUlILE1BQUosRUFBWTtBQUNWRixrQkFBUUEsTUFBTU8sTUFBTixDQUFhRixTQUFiLENBQVI7O0FBRUFOLHlCQUFlLEtBQWY7QUFDRDs7QUFFRCxlQUFPRyxNQUFQO0FBQ0QsT0FYWSxDQUFiOztBQWFBLFVBQUksQ0FBQ0EsTUFBTCxFQUFhO0FBQ1hGLGdCQUFRLElBQVI7O0FBRUFILGdCQUFRVyxTQUFSLENBQWtCUCxVQUFsQjtBQUNEOztBQUVELGFBQU9ELEtBQVA7QUFDRDs7O3VDQUV5QlMsYyxFQUFnQkMscUIsRUFBdUJDLGEsRUFBZTtBQUM5RSxVQUFJWixlQUFlLEtBQW5CO0FBQUEsVUFDSUgsUUFBUWEsZUFBZUcsYUFBZixDQUE2QixVQUFTaEIsS0FBVCxFQUFnQmlCLE1BQWhCLEVBQXdCO0FBQzNELFlBQUlBLFdBQVdwQixlQUFlcUIsYUFBOUIsRUFBNkM7QUFDM0NmLHlCQUFlLElBQWY7QUFDRCxTQUZELE1BRU87QUFDTCxjQUFJSyxPQUFPVyxlQUFlRixNQUFmLEVBQXVCSCxxQkFBdkIsRUFBOENDLGFBQTlDLEVBQTZEWixZQUE3RCxDQUFYOztBQUVBSCxnQkFBTW9CLElBQU4sQ0FBV1osSUFBWDs7QUFFQUwseUJBQWUsS0FBZjtBQUNEOztBQUVELGVBQU9ILEtBQVA7QUFDRCxPQVpPLEVBWUwsRUFaSyxDQURaO0FBQUEsVUFjSXFCLE9BQU8sSUFBSXRCLElBQUosQ0FBU0MsS0FBVCxDQWRYOztBQWdCQSxhQUFPcUIsSUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnhCLElBQWpCOztBQUVBLFNBQVNvQixjQUFULENBQXdCRixNQUF4QixFQUFnQ0gscUJBQWhDLEVBQXVEQyxhQUF2RCxFQUFzRVosWUFBdEUsRUFBb0Y7QUFDbEYsTUFBSUssT0FBT2dCLFNBQVgsQ0FEa0YsQ0FDNUQ7O0FBRXRCMUIsUUFBTTJCLElBQU4sQ0FBVyxVQUFTQyxJQUFULEVBQWU7QUFDeEJsQixXQUFPa0IsS0FBS0MsVUFBTCxDQUFnQlYsTUFBaEIsRUFBd0JILHFCQUF4QixFQUErQ0MsYUFBL0MsRUFBOERaLFlBQTlELENBQVA7O0FBRUEsUUFBSUcsU0FBVUUsU0FBUyxJQUF2Qjs7QUFFQSxXQUFPRixNQUFQO0FBQ0QsR0FORDs7QUFRQSxTQUFPRSxJQUFQO0FBQ0QiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIHNwZWNpYWxTeW1ib2xzID0gbGV4ZXJzLnNwZWNpYWxTeW1ib2xzO1xuXG52YXIgUGFydHMgPSByZXF1aXJlKCcuL3BhcnRzJyk7XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciBub2RlcyA9IFtdLFxuICAgICAgICBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCk7XG4gICAgXG4gICAgdmFyIHBhcnNlZCA9IHRoaXMucGFydHMuZXZlcnkoZnVuY3Rpb24ocGFydCkge1xuICAgICAgdmFyIHBhcnROb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFyc2VkID0gKHBhcnROb2RlcyAhPT0gbnVsbCk7XG4gICAgICBcbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQocGFydE5vZGVzKTtcblxuICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9KTtcbiAgICBcbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgbm9kZXMgPSBudWxsO1xuICAgICAgXG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbFNlcXVlbmNlKHN5bWJvbFNlcXVlbmNlLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHRlcm1pbmFsVHlwZXMpIHtcbiAgICB2YXIgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgIHBhcnRzID0gc3ltYm9sU2VxdWVuY2UucmVkdWNlU3ltYm9scyhmdW5jdGlvbihwYXJ0cywgc3ltYm9sKSB7XG4gICAgICAgICAgaWYgKHN5bWJvbCA9PT0gc3BlY2lhbFN5bWJvbHMuTk9fV0hJVEVTUEFDRSkge1xuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0RnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgdGVybWluYWxUeXBlcywgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgICAgICAgcGFydHMucHVzaChwYXJ0KTtcblxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnRzO1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIHJ1bGUgPSBuZXcgUnVsZShwYXJ0cyk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG5cbmZ1bmN0aW9uIHBhcnRGcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCB0ZXJtaW5hbFR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgdmFyIHBhcnQgPSB1bmRlZmluZWQ7IC8vL1xuXG4gIFBhcnRzLnNvbWUoZnVuY3Rpb24oUGFydCkge1xuICAgIHBhcnQgPSBQYXJ0LmZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHRlcm1pbmFsVHlwZXMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICB2YXIgcGFyc2VkID0gKHBhcnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG4iXX0=