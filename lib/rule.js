'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('./occam-lexers'),
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
    value: function fromSymbolSequence(symbolSequence, terminalSymbolsRegExp, significantTokenTypes) {
      var noWhitespace = false,
          parts = symbolSequence.reduceSymbols(function (parts, symbol) {
        if (symbol === specialSymbols.NO_WHITESPACE) {
          noWhitespace = true;
        } else {
          var part = partFromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace);

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

function partFromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) {
  var part = undefined; ///

  Parts.some(function (Part) {
    part = Part.fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace);

    var parsed = part !== null;

    return parsed;
  });

  return part;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ydWxlLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJzcGVjaWFsU3ltYm9scyIsIlBhcnRzIiwiUnVsZSIsInBhcnRzIiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJzYXZlZEluZGV4IiwicGFyc2VkIiwiZXZlcnkiLCJwYXJ0IiwicGFydE5vZGVzIiwicGFyc2UiLCJjb25jYXQiLCJiYWNrdHJhY2siLCJzeW1ib2xTZXF1ZW5jZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJlZHVjZVN5bWJvbHMiLCJzeW1ib2wiLCJOT19XSElURVNQQUNFIiwicGFydEZyb21TeW1ib2wiLCJwdXNoIiwicnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1bmRlZmluZWQiLCJzb21lIiwiUGFydCIsImZyb21TeW1ib2wiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGdCQUFSLENBQWI7QUFBQSxJQUNJQyxpQkFBaUJGLE9BQU9FLGNBRDVCOztBQUdBLElBQUlDLFFBQVFGLFFBQVEsU0FBUixDQUFaOztJQUVNRyxJO0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0MsVyxFQUFhQyxZLEVBQWM7QUFDeEMsVUFBSUMsUUFBUSxFQUFaO0FBQUEsVUFDSUMsYUFBYUosUUFBUUksVUFBUixFQURqQjs7QUFHQSxVQUFJQyxTQUFTLEtBQUtOLEtBQUwsQ0FBV08sS0FBWCxDQUFpQixVQUFTQyxJQUFULEVBQWU7QUFDM0MsWUFBSUMsWUFBWUQsS0FBS0UsS0FBTCxDQUFXVCxPQUFYLEVBQW9CQyxXQUFwQixFQUFpQ0MsWUFBakMsQ0FBaEI7QUFBQSxZQUNJRyxTQUFVRyxjQUFjLElBRDVCOztBQUdBLFlBQUlILE1BQUosRUFBWTtBQUNWRixrQkFBUUEsTUFBTU8sTUFBTixDQUFhRixTQUFiLENBQVI7O0FBRUFOLHlCQUFlLEtBQWY7QUFDRDs7QUFFRCxlQUFPRyxNQUFQO0FBQ0QsT0FYWSxDQUFiOztBQWFBLFVBQUksQ0FBQ0EsTUFBTCxFQUFhO0FBQ1hGLGdCQUFRLElBQVI7O0FBRUFILGdCQUFRVyxTQUFSLENBQWtCUCxVQUFsQjtBQUNEOztBQUVELGFBQU9ELEtBQVA7QUFDRDs7O3VDQUV5QlMsYyxFQUFnQkMscUIsRUFBdUJDLHFCLEVBQXVCO0FBQ3RGLFVBQUlaLGVBQWUsS0FBbkI7QUFBQSxVQUNJSCxRQUFRYSxlQUFlRyxhQUFmLENBQTZCLFVBQVNoQixLQUFULEVBQWdCaUIsTUFBaEIsRUFBd0I7QUFDM0QsWUFBSUEsV0FBV3BCLGVBQWVxQixhQUE5QixFQUE2QztBQUMzQ2YseUJBQWUsSUFBZjtBQUNELFNBRkQsTUFFTztBQUNMLGNBQUlLLE9BQU9XLGVBQWVGLE1BQWYsRUFBdUJILHFCQUF2QixFQUE4Q0MscUJBQTlDLEVBQXFFWixZQUFyRSxDQUFYOztBQUVBSCxnQkFBTW9CLElBQU4sQ0FBV1osSUFBWDs7QUFFQUwseUJBQWUsS0FBZjtBQUNEOztBQUVELGVBQU9ILEtBQVA7QUFDRCxPQVpPLEVBWUwsRUFaSyxDQURaO0FBQUEsVUFjSXFCLE9BQU8sSUFBSXRCLElBQUosQ0FBU0MsS0FBVCxDQWRYOztBQWdCQSxhQUFPcUIsSUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnhCLElBQWpCOztBQUVBLFNBQVNvQixjQUFULENBQXdCRixNQUF4QixFQUFnQ0gscUJBQWhDLEVBQXVEQyxxQkFBdkQsRUFBOEVaLFlBQTlFLEVBQTRGO0FBQzFGLE1BQUlLLE9BQU9nQixTQUFYLENBRDBGLENBQ3BFOztBQUV0QjFCLFFBQU0yQixJQUFOLENBQVcsVUFBU0MsSUFBVCxFQUFlO0FBQ3hCbEIsV0FBT2tCLEtBQUtDLFVBQUwsQ0FBZ0JWLE1BQWhCLEVBQXdCSCxxQkFBeEIsRUFBK0NDLHFCQUEvQyxFQUFzRVosWUFBdEUsQ0FBUDs7QUFFQSxRQUFJRyxTQUFVRSxTQUFTLElBQXZCOztBQUVBLFdBQU9GLE1BQVA7QUFDRCxHQU5EOztBQVFBLFNBQU9FLElBQVA7QUFDRCIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnLi9vY2NhbS1sZXhlcnMnKSxcbiAgICBzcGVjaWFsU3ltYm9scyA9IGxleGVycy5zcGVjaWFsU3ltYm9scztcblxudmFyIFBhcnRzID0gcmVxdWlyZSgnLi9wYXJ0cycpO1xuXG5jbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgbm9kZXMgPSBbXSxcbiAgICAgICAgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpO1xuICAgIFxuICAgIHZhciBwYXJzZWQgPSB0aGlzLnBhcnRzLmV2ZXJ5KGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgIHZhciBwYXJ0Tm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnNlZCA9IChwYXJ0Tm9kZXMgIT09IG51bGwpO1xuICAgICAgXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHBhcnROb2Rlcyk7XG5cbiAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfSk7XG4gICAgXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIG5vZGVzID0gbnVsbDtcbiAgICAgIFxuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMpIHtcbiAgICB2YXIgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgIHBhcnRzID0gc3ltYm9sU2VxdWVuY2UucmVkdWNlU3ltYm9scyhmdW5jdGlvbihwYXJ0cywgc3ltYm9sKSB7XG4gICAgICAgICAgaWYgKHN5bWJvbCA9PT0gc3BlY2lhbFN5bWJvbHMuTk9fV0hJVEVTUEFDRSkge1xuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0RnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpO1xuXG4gICAgICAgICAgICBwYXJ0cy5wdXNoKHBhcnQpO1xuXG4gICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcGFydHM7XG4gICAgICAgIH0sIFtdKSxcbiAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHBhcnRzKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcblxuZnVuY3Rpb24gcGFydEZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gIHZhciBwYXJ0ID0gdW5kZWZpbmVkOyAvLy9cblxuICBQYXJ0cy5zb21lKGZ1bmN0aW9uKFBhcnQpIHtcbiAgICBwYXJ0ID0gUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICB2YXIgcGFyc2VkID0gKHBhcnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG4iXX0=