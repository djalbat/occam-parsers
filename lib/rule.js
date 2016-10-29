'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('./occam-lexers'),
    specialSymbols = lexers.specialSymbols;

var Parts = require('./parts'),
    ErrorNode = require('./node/error');

var Rule = function () {
  function Rule(parts) {
    _classCallCheck(this, Rule);

    this.parts = parts;
  }

  _createClass(Rule, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      context.increaseDepth();

      var nodes = [],
          tooDeep = context.isTooDeep();

      if (tooDeep) {
        var string = '',
            ///
        message = TOO_DEEP_ERROR_MESSAGE,
            errorNode = new ErrorNode(string, message);

        nodes = [errorNode];
      } else {
        var savedIndex = context.savedIndex();

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
      }

      context.decreaseDepth();

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

var TOO_DEEP_ERROR_MESSAGE = 'The parse tree is too deep. This is likely caused by left recursion.';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ydWxlLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJzcGVjaWFsU3ltYm9scyIsIlBhcnRzIiwiRXJyb3JOb2RlIiwiUnVsZSIsInBhcnRzIiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9XaGl0ZXNwYWNlIiwiaW5jcmVhc2VEZXB0aCIsIm5vZGVzIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsInN0cmluZyIsIm1lc3NhZ2UiLCJUT09fREVFUF9FUlJPUl9NRVNTQUdFIiwiZXJyb3JOb2RlIiwic2F2ZWRJbmRleCIsInBhcnNlZCIsImV2ZXJ5IiwicGFydCIsInBhcnROb2RlcyIsInBhcnNlIiwiY29uY2F0IiwiYmFja3RyYWNrIiwiZGVjcmVhc2VEZXB0aCIsInN5bWJvbFNlcXVlbmNlIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwicmVkdWNlU3ltYm9scyIsInN5bWJvbCIsIk5PX1dISVRFU1BBQ0UiLCJwYXJ0RnJvbVN5bWJvbCIsInB1c2giLCJydWxlIiwibW9kdWxlIiwiZXhwb3J0cyIsInVuZGVmaW5lZCIsInNvbWUiLCJQYXJ0IiwiZnJvbVN5bWJvbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsZ0JBQVIsQ0FBYjtBQUFBLElBQ0lDLGlCQUFpQkYsT0FBT0UsY0FENUI7O0FBR0EsSUFBSUMsUUFBUUYsUUFBUSxTQUFSLENBQVo7QUFBQSxJQUNJRyxZQUFZSCxRQUFRLGNBQVIsQ0FEaEI7O0lBR01JLEk7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzswQkFFS0MsTyxFQUFTQyxXLEVBQWFDLFksRUFBYztBQUN4Q0YsY0FBUUcsYUFBUjs7QUFFQSxVQUFJQyxRQUFRLEVBQVo7QUFBQSxVQUNJQyxVQUFVTCxRQUFRTSxTQUFSLEVBRGQ7O0FBR0EsVUFBSUQsT0FBSixFQUFhO0FBQ1gsWUFBSUUsU0FBUyxFQUFiO0FBQUEsWUFBa0I7QUFDZEMsa0JBQVVDLHNCQURkO0FBQUEsWUFFSUMsWUFBWSxJQUFJYixTQUFKLENBQWNVLE1BQWQsRUFBc0JDLE9BQXRCLENBRmhCOztBQUlBSixnQkFBUSxDQUFDTSxTQUFELENBQVI7QUFDRCxPQU5ELE1BTU87QUFDTCxZQUFJQyxhQUFhWCxRQUFRVyxVQUFSLEVBQWpCOztBQUVBLFlBQUlDLFNBQVMsS0FBS2IsS0FBTCxDQUFXYyxLQUFYLENBQWlCLFVBQVNDLElBQVQsRUFBZTtBQUMzQyxjQUFJQyxZQUFZRCxLQUFLRSxLQUFMLENBQVdoQixPQUFYLEVBQW9CQyxXQUFwQixFQUFpQ0MsWUFBakMsQ0FBaEI7QUFBQSxjQUNJVSxTQUFVRyxjQUFjLElBRDVCOztBQUdBLGNBQUlILE1BQUosRUFBWTtBQUNWUixvQkFBUUEsTUFBTWEsTUFBTixDQUFhRixTQUFiLENBQVI7O0FBRUFiLDJCQUFlLEtBQWY7QUFDRDs7QUFFRCxpQkFBT1UsTUFBUDtBQUNELFNBWFksQ0FBYjs7QUFhQSxZQUFJLENBQUNBLE1BQUwsRUFBYTtBQUNYUixrQkFBUSxJQUFSOztBQUVBSixrQkFBUWtCLFNBQVIsQ0FBa0JQLFVBQWxCO0FBQ0Q7QUFDRjs7QUFFRFgsY0FBUW1CLGFBQVI7O0FBRUEsYUFBT2YsS0FBUDtBQUNEOzs7dUNBRXlCZ0IsYyxFQUFnQkMscUIsRUFBdUJDLHFCLEVBQXVCO0FBQ3RGLFVBQUlwQixlQUFlLEtBQW5CO0FBQUEsVUFDSUgsUUFBUXFCLGVBQWVHLGFBQWYsQ0FBNkIsVUFBU3hCLEtBQVQsRUFBZ0J5QixNQUFoQixFQUF3QjtBQUMzRCxZQUFJQSxXQUFXN0IsZUFBZThCLGFBQTlCLEVBQTZDO0FBQzNDdkIseUJBQWUsSUFBZjtBQUNELFNBRkQsTUFFTztBQUNMLGNBQUlZLE9BQU9ZLGVBQWVGLE1BQWYsRUFBdUJILHFCQUF2QixFQUE4Q0MscUJBQTlDLEVBQXFFcEIsWUFBckUsQ0FBWDs7QUFFQUgsZ0JBQU00QixJQUFOLENBQVdiLElBQVg7O0FBRUFaLHlCQUFlLEtBQWY7QUFDRDs7QUFFRCxlQUFPSCxLQUFQO0FBQ0QsT0FaTyxFQVlMLEVBWkssQ0FEWjtBQUFBLFVBY0k2QixPQUFPLElBQUk5QixJQUFKLENBQVNDLEtBQVQsQ0FkWDs7QUFnQkEsYUFBTzZCLElBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJoQyxJQUFqQjs7QUFFQSxTQUFTNEIsY0FBVCxDQUF3QkYsTUFBeEIsRUFBZ0NILHFCQUFoQyxFQUF1REMscUJBQXZELEVBQThFcEIsWUFBOUUsRUFBNEY7QUFDMUYsTUFBSVksT0FBT2lCLFNBQVgsQ0FEMEYsQ0FDcEU7O0FBRXRCbkMsUUFBTW9DLElBQU4sQ0FBVyxVQUFTQyxJQUFULEVBQWU7QUFDeEJuQixXQUFPbUIsS0FBS0MsVUFBTCxDQUFnQlYsTUFBaEIsRUFBd0JILHFCQUF4QixFQUErQ0MscUJBQS9DLEVBQXNFcEIsWUFBdEUsQ0FBUDs7QUFFQSxRQUFJVSxTQUFVRSxTQUFTLElBQXZCOztBQUVBLFdBQU9GLE1BQVA7QUFDRCxHQU5EOztBQVFBLFNBQU9FLElBQVA7QUFDRDs7QUFFRCxJQUFNTCx5QkFBeUIsc0VBQS9CIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCcuL29jY2FtLWxleGVycycpLFxuICAgIHNwZWNpYWxTeW1ib2xzID0gbGV4ZXJzLnNwZWNpYWxTeW1ib2xzO1xuXG52YXIgUGFydHMgPSByZXF1aXJlKCcuL3BhcnRzJyksXG4gICAgRXJyb3JOb2RlID0gcmVxdWlyZSgnLi9ub2RlL2Vycm9yJyk7XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnRleHQuaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgdmFyIG5vZGVzID0gW10sXG4gICAgICAgIHRvb0RlZXAgPSBjb250ZXh0LmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHZhciBzdHJpbmcgPSAnJywgIC8vL1xuICAgICAgICAgIG1lc3NhZ2UgPSBUT09fREVFUF9FUlJPUl9NRVNTQUdFLFxuICAgICAgICAgIGVycm9yTm9kZSA9IG5ldyBFcnJvck5vZGUoc3RyaW5nLCBtZXNzYWdlKTtcblxuICAgICAgbm9kZXMgPSBbZXJyb3JOb2RlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKTtcblxuICAgICAgdmFyIHBhcnNlZCA9IHRoaXMucGFydHMuZXZlcnkoZnVuY3Rpb24ocGFydCkge1xuICAgICAgICB2YXIgcGFydE5vZGVzID0gcGFydC5wYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICAgIHBhcnNlZCA9IChwYXJ0Tm9kZXMgIT09IG51bGwpO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwYXJ0Tm9kZXMpO1xuXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgIG5vZGVzID0gbnVsbDtcblxuICAgICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sU2VxdWVuY2Uoc3ltYm9sU2VxdWVuY2UsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzKSB7XG4gICAgdmFyIG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICBwYXJ0cyA9IHN5bWJvbFNlcXVlbmNlLnJlZHVjZVN5bWJvbHMoZnVuY3Rpb24ocGFydHMsIHN5bWJvbCkge1xuICAgICAgICAgIGlmIChzeW1ib2wgPT09IHNwZWNpYWxTeW1ib2xzLk5PX1dISVRFU1BBQ0UpIHtcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gcGFydEZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgICAgICAgcGFydHMucHVzaChwYXJ0KTtcblxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnRzO1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIHJ1bGUgPSBuZXcgUnVsZShwYXJ0cyk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG5cbmZ1bmN0aW9uIHBhcnRGcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICB2YXIgcGFydCA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgUGFydHMuc29tZShmdW5jdGlvbihQYXJ0KSB7XG4gICAgcGFydCA9IFBhcnQuZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpO1xuXG4gICAgdmFyIHBhcnNlZCA9IChwYXJ0ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5jb25zdCBUT09fREVFUF9FUlJPUl9NRVNTQUdFID0gJ1RoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwLiBUaGlzIGlzIGxpa2VseSBjYXVzZWQgYnkgbGVmdCByZWN1cnNpb24uJztcbiJdfQ==