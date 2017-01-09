'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwic3BlY2lhbFN5bWJvbHMiLCJQYXJ0cyIsIkVycm9yTm9kZSIsIlJ1bGUiLCJwYXJ0cyIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vV2hpdGVzcGFjZSIsImluY3JlYXNlRGVwdGgiLCJub2RlcyIsInRvb0RlZXAiLCJpc1Rvb0RlZXAiLCJzdHJpbmciLCJtZXNzYWdlIiwiVE9PX0RFRVBfRVJST1JfTUVTU0FHRSIsImVycm9yTm9kZSIsInNhdmVkSW5kZXgiLCJwYXJzZWQiLCJldmVyeSIsInBhcnQiLCJwYXJ0Tm9kZXMiLCJwYXJzZSIsImNvbmNhdCIsImJhY2t0cmFjayIsImRlY3JlYXNlRGVwdGgiLCJzeW1ib2xTZXF1ZW5jZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJlZHVjZVN5bWJvbHMiLCJzeW1ib2wiLCJOT19XSElURVNQQUNFIiwicGFydEZyb21TeW1ib2wiLCJwdXNoIiwicnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1bmRlZmluZWQiLCJzb21lIiwiUGFydCIsImZyb21TeW1ib2wiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ0lDLGlCQUFpQkYsT0FBT0UsY0FENUI7O0FBR0EsSUFBSUMsUUFBUUYsUUFBUSxTQUFSLENBQVo7QUFBQSxJQUNJRyxZQUFZSCxRQUFRLGNBQVIsQ0FEaEI7O0lBR01JLEk7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzswQkFFS0MsTyxFQUFTQyxXLEVBQWFDLFksRUFBYztBQUN4Q0YsY0FBUUcsYUFBUjs7QUFFQSxVQUFJQyxRQUFRLEVBQVo7QUFBQSxVQUNJQyxVQUFVTCxRQUFRTSxTQUFSLEVBRGQ7O0FBR0EsVUFBSUQsT0FBSixFQUFhO0FBQ1gsWUFBSUUsU0FBUyxFQUFiO0FBQUEsWUFBa0I7QUFDZEMsa0JBQVVDLHNCQURkO0FBQUEsWUFFSUMsWUFBWSxJQUFJYixTQUFKLENBQWNVLE1BQWQsRUFBc0JDLE9BQXRCLENBRmhCOztBQUlBSixnQkFBUSxDQUFDTSxTQUFELENBQVI7QUFDRCxPQU5ELE1BTU87QUFDTCxZQUFJQyxhQUFhWCxRQUFRVyxVQUFSLEVBQWpCOztBQUVBLFlBQUlDLFNBQVMsS0FBS2IsS0FBTCxDQUFXYyxLQUFYLENBQWlCLFVBQVNDLElBQVQsRUFBZTtBQUMzQyxjQUFJQyxZQUFZRCxLQUFLRSxLQUFMLENBQVdoQixPQUFYLEVBQW9CQyxXQUFwQixFQUFpQ0MsWUFBakMsQ0FBaEI7QUFBQSxjQUNJVSxTQUFVRyxjQUFjLElBRDVCOztBQUdBLGNBQUlILE1BQUosRUFBWTtBQUNWUixvQkFBUUEsTUFBTWEsTUFBTixDQUFhRixTQUFiLENBQVI7O0FBRUFiLDJCQUFlLEtBQWY7QUFDRDs7QUFFRCxpQkFBT1UsTUFBUDtBQUNELFNBWFksQ0FBYjs7QUFhQSxZQUFJLENBQUNBLE1BQUwsRUFBYTtBQUNYUixrQkFBUSxJQUFSOztBQUVBSixrQkFBUWtCLFNBQVIsQ0FBa0JQLFVBQWxCO0FBQ0Q7QUFDRjs7QUFFRFgsY0FBUW1CLGFBQVI7O0FBRUEsYUFBT2YsS0FBUDtBQUNEOzs7dUNBRXlCZ0IsYyxFQUFnQkMscUIsRUFBdUJDLHFCLEVBQXVCO0FBQ3RGLFVBQUlwQixlQUFlLEtBQW5CO0FBQUEsVUFDSUgsUUFBUXFCLGVBQWVHLGFBQWYsQ0FBNkIsVUFBU3hCLEtBQVQsRUFBZ0J5QixNQUFoQixFQUF3QjtBQUMzRCxZQUFJQSxXQUFXN0IsZUFBZThCLGFBQTlCLEVBQTZDO0FBQzNDdkIseUJBQWUsSUFBZjtBQUNELFNBRkQsTUFFTztBQUNMLGNBQUlZLE9BQU9ZLGVBQWVGLE1BQWYsRUFBdUJILHFCQUF2QixFQUE4Q0MscUJBQTlDLEVBQXFFcEIsWUFBckUsQ0FBWDs7QUFFQUgsZ0JBQU00QixJQUFOLENBQVdiLElBQVg7O0FBRUFaLHlCQUFlLEtBQWY7QUFDRDs7QUFFRCxlQUFPSCxLQUFQO0FBQ0QsT0FaTyxFQVlMLEVBWkssQ0FEWjtBQUFBLFVBY0k2QixPQUFPLElBQUk5QixJQUFKLENBQVNDLEtBQVQsQ0FkWDs7QUFnQkEsYUFBTzZCLElBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJoQyxJQUFqQjs7QUFFQSxTQUFTNEIsY0FBVCxDQUF3QkYsTUFBeEIsRUFBZ0NILHFCQUFoQyxFQUF1REMscUJBQXZELEVBQThFcEIsWUFBOUUsRUFBNEY7QUFDMUYsTUFBSVksT0FBT2lCLFNBQVgsQ0FEMEYsQ0FDcEU7O0FBRXRCbkMsUUFBTW9DLElBQU4sQ0FBVyxVQUFTQyxJQUFULEVBQWU7QUFDeEJuQixXQUFPbUIsS0FBS0MsVUFBTCxDQUFnQlYsTUFBaEIsRUFBd0JILHFCQUF4QixFQUErQ0MscUJBQS9DLEVBQXNFcEIsWUFBdEUsQ0FBUDs7QUFFQSxRQUFJVSxTQUFVRSxTQUFTLElBQXZCOztBQUVBLFdBQU9GLE1BQVA7QUFDRCxHQU5EOztBQVFBLFNBQU9FLElBQVA7QUFDRDs7QUFFRCxJQUFNTCx5QkFBeUIsc0VBQS9CIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBzcGVjaWFsU3ltYm9scyA9IGxleGVycy5zcGVjaWFsU3ltYm9scztcblxudmFyIFBhcnRzID0gcmVxdWlyZSgnLi9wYXJ0cycpLFxuICAgIEVycm9yTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9lcnJvcicpO1xuXG5jbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICBjb250ZXh0LmluY3JlYXNlRGVwdGgoKTtcblxuICAgIHZhciBub2RlcyA9IFtdLFxuICAgICAgICB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB2YXIgc3RyaW5nID0gJycsICAvLy9cbiAgICAgICAgICBtZXNzYWdlID0gVE9PX0RFRVBfRVJST1JfTUVTU0FHRSxcbiAgICAgICAgICBlcnJvck5vZGUgPSBuZXcgRXJyb3JOb2RlKHN0cmluZywgbWVzc2FnZSk7XG5cbiAgICAgIG5vZGVzID0gW2Vycm9yTm9kZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCk7XG5cbiAgICAgIHZhciBwYXJzZWQgPSB0aGlzLnBhcnRzLmV2ZXJ5KGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgdmFyIHBhcnROb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICBwYXJzZWQgPSAocGFydE5vZGVzICE9PSBudWxsKTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQocGFydE5vZGVzKTtcblxuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICBub2RlcyA9IG51bGw7XG5cbiAgICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWNyZWFzZURlcHRoKCk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbFNlcXVlbmNlKHN5bWJvbFNlcXVlbmNlLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcykge1xuICAgIHZhciBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgcGFydHMgPSBzeW1ib2xTZXF1ZW5jZS5yZWR1Y2VTeW1ib2xzKGZ1bmN0aW9uKHBhcnRzLCBzeW1ib2wpIHtcbiAgICAgICAgICBpZiAoc3ltYm9sID09PSBzcGVjaWFsU3ltYm9scy5OT19XSElURVNQQUNFKSB7XG4gICAgICAgICAgICBub1doaXRlc3BhY2UgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgcGFydCA9IHBhcnRGcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgICAgICAgIHBhcnRzLnB1c2gocGFydCk7XG5cbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXJ0cztcbiAgICAgICAgfSwgW10pLFxuICAgICAgICBydWxlID0gbmV3IFJ1bGUocGFydHMpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuXG5mdW5jdGlvbiBwYXJ0RnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgdmFyIHBhcnQgPSB1bmRlZmluZWQ7IC8vL1xuXG4gIFBhcnRzLnNvbWUoZnVuY3Rpb24oUGFydCkge1xuICAgIHBhcnQgPSBQYXJ0LmZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKTtcblxuICAgIHZhciBwYXJzZWQgPSAocGFydCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9KTtcblxuICByZXR1cm4gcGFydDtcbn1cblxuY29uc3QgVE9PX0RFRVBfRVJST1JfTUVTU0FHRSA9ICdUaGUgcGFyc2UgdHJlZSBpcyB0b28gZGVlcC4gVGhpcyBpcyBsaWtlbHkgY2F1c2VkIGJ5IGxlZnQgcmVjdXJzaW9uLic7XG4iXX0=