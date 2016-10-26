'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('./occam-lexers'),
    specialSymbols = lexers.specialSymbols;

var Parts = require('./parts'),
    ErrorNode = require('./node/terminal/error');

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
        var errorNode = new ErrorNode();

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ydWxlLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJzcGVjaWFsU3ltYm9scyIsIlBhcnRzIiwiRXJyb3JOb2RlIiwiUnVsZSIsInBhcnRzIiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9XaGl0ZXNwYWNlIiwiaW5jcmVhc2VEZXB0aCIsIm5vZGVzIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsImVycm9yTm9kZSIsInNhdmVkSW5kZXgiLCJwYXJzZWQiLCJldmVyeSIsInBhcnQiLCJwYXJ0Tm9kZXMiLCJwYXJzZSIsImNvbmNhdCIsImJhY2t0cmFjayIsImRlY3JlYXNlRGVwdGgiLCJzeW1ib2xTZXF1ZW5jZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJlZHVjZVN5bWJvbHMiLCJzeW1ib2wiLCJOT19XSElURVNQQUNFIiwicGFydEZyb21TeW1ib2wiLCJwdXNoIiwicnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1bmRlZmluZWQiLCJzb21lIiwiUGFydCIsImZyb21TeW1ib2wiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGdCQUFSLENBQWI7QUFBQSxJQUNJQyxpQkFBaUJGLE9BQU9FLGNBRDVCOztBQUdBLElBQUlDLFFBQVFGLFFBQVEsU0FBUixDQUFaO0FBQUEsSUFDSUcsWUFBWUgsUUFBUSx1QkFBUixDQURoQjs7SUFHTUksSTtBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzBCQUVLQyxPLEVBQVNDLFcsRUFBYUMsWSxFQUFjO0FBQ3hDRixjQUFRRyxhQUFSOztBQUVBLFVBQUlDLFFBQVEsRUFBWjtBQUFBLFVBQ0lDLFVBQVVMLFFBQVFNLFNBQVIsRUFEZDs7QUFHQSxVQUFJRCxPQUFKLEVBQWE7QUFDWCxZQUFJRSxZQUFZLElBQUlWLFNBQUosRUFBaEI7O0FBRUFPLGdCQUFRLENBQUNHLFNBQUQsQ0FBUjtBQUNELE9BSkQsTUFJTztBQUNMLFlBQUlDLGFBQWFSLFFBQVFRLFVBQVIsRUFBakI7O0FBRUEsWUFBSUMsU0FBUyxLQUFLVixLQUFMLENBQVdXLEtBQVgsQ0FBaUIsVUFBU0MsSUFBVCxFQUFlO0FBQzNDLGNBQUlDLFlBQVlELEtBQUtFLEtBQUwsQ0FBV2IsT0FBWCxFQUFvQkMsV0FBcEIsRUFBaUNDLFlBQWpDLENBQWhCO0FBQUEsY0FDSU8sU0FBVUcsY0FBYyxJQUQ1Qjs7QUFHQSxjQUFJSCxNQUFKLEVBQVk7QUFDVkwsb0JBQVFBLE1BQU1VLE1BQU4sQ0FBYUYsU0FBYixDQUFSOztBQUVBViwyQkFBZSxLQUFmO0FBQ0Q7O0FBRUQsaUJBQU9PLE1BQVA7QUFDRCxTQVhZLENBQWI7O0FBYUEsWUFBSSxDQUFDQSxNQUFMLEVBQWE7QUFDWEwsa0JBQVEsSUFBUjs7QUFFQUosa0JBQVFlLFNBQVIsQ0FBa0JQLFVBQWxCO0FBQ0Q7QUFDRjs7QUFFRFIsY0FBUWdCLGFBQVI7O0FBRUEsYUFBT1osS0FBUDtBQUNEOzs7dUNBRXlCYSxjLEVBQWdCQyxxQixFQUF1QkMscUIsRUFBdUI7QUFDdEYsVUFBSWpCLGVBQWUsS0FBbkI7QUFBQSxVQUNJSCxRQUFRa0IsZUFBZUcsYUFBZixDQUE2QixVQUFTckIsS0FBVCxFQUFnQnNCLE1BQWhCLEVBQXdCO0FBQzNELFlBQUlBLFdBQVcxQixlQUFlMkIsYUFBOUIsRUFBNkM7QUFDM0NwQix5QkFBZSxJQUFmO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsY0FBSVMsT0FBT1ksZUFBZUYsTUFBZixFQUF1QkgscUJBQXZCLEVBQThDQyxxQkFBOUMsRUFBcUVqQixZQUFyRSxDQUFYOztBQUVBSCxnQkFBTXlCLElBQU4sQ0FBV2IsSUFBWDs7QUFFQVQseUJBQWUsS0FBZjtBQUNEOztBQUVELGVBQU9ILEtBQVA7QUFDRCxPQVpPLEVBWUwsRUFaSyxDQURaO0FBQUEsVUFjSTBCLE9BQU8sSUFBSTNCLElBQUosQ0FBU0MsS0FBVCxDQWRYOztBQWdCQSxhQUFPMEIsSUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQjdCLElBQWpCOztBQUVBLFNBQVN5QixjQUFULENBQXdCRixNQUF4QixFQUFnQ0gscUJBQWhDLEVBQXVEQyxxQkFBdkQsRUFBOEVqQixZQUE5RSxFQUE0RjtBQUMxRixNQUFJUyxPQUFPaUIsU0FBWCxDQUQwRixDQUNwRTs7QUFFdEJoQyxRQUFNaUMsSUFBTixDQUFXLFVBQVNDLElBQVQsRUFBZTtBQUN4Qm5CLFdBQU9tQixLQUFLQyxVQUFMLENBQWdCVixNQUFoQixFQUF3QkgscUJBQXhCLEVBQStDQyxxQkFBL0MsRUFBc0VqQixZQUF0RSxDQUFQOztBQUVBLFFBQUlPLFNBQVVFLFNBQVMsSUFBdkI7O0FBRUEsV0FBT0YsTUFBUDtBQUNELEdBTkQ7O0FBUUEsU0FBT0UsSUFBUDtBQUNEIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCcuL29jY2FtLWxleGVycycpLFxuICAgIHNwZWNpYWxTeW1ib2xzID0gbGV4ZXJzLnNwZWNpYWxTeW1ib2xzO1xuXG52YXIgUGFydHMgPSByZXF1aXJlKCcuL3BhcnRzJyksXG4gICAgRXJyb3JOb2RlID0gcmVxdWlyZSgnLi9ub2RlL3Rlcm1pbmFsL2Vycm9yJyk7XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnRleHQuaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgdmFyIG5vZGVzID0gW10sXG4gICAgICAgIHRvb0RlZXAgPSBjb250ZXh0LmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHZhciBlcnJvck5vZGUgPSBuZXcgRXJyb3JOb2RlKCk7XG5cbiAgICAgIG5vZGVzID0gW2Vycm9yTm9kZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCk7XG5cbiAgICAgIHZhciBwYXJzZWQgPSB0aGlzLnBhcnRzLmV2ZXJ5KGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgdmFyIHBhcnROb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICBwYXJzZWQgPSAocGFydE5vZGVzICE9PSBudWxsKTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQocGFydE5vZGVzKTtcblxuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICBub2RlcyA9IG51bGw7XG5cbiAgICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWNyZWFzZURlcHRoKCk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbFNlcXVlbmNlKHN5bWJvbFNlcXVlbmNlLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcykge1xuICAgIHZhciBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgcGFydHMgPSBzeW1ib2xTZXF1ZW5jZS5yZWR1Y2VTeW1ib2xzKGZ1bmN0aW9uKHBhcnRzLCBzeW1ib2wpIHtcbiAgICAgICAgICBpZiAoc3ltYm9sID09PSBzcGVjaWFsU3ltYm9scy5OT19XSElURVNQQUNFKSB7XG4gICAgICAgICAgICBub1doaXRlc3BhY2UgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgcGFydCA9IHBhcnRGcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgICAgICAgIHBhcnRzLnB1c2gocGFydCk7XG5cbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXJ0cztcbiAgICAgICAgfSwgW10pLFxuICAgICAgICBydWxlID0gbmV3IFJ1bGUocGFydHMpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuXG5mdW5jdGlvbiBwYXJ0RnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgdmFyIHBhcnQgPSB1bmRlZmluZWQ7IC8vL1xuXG4gIFBhcnRzLnNvbWUoZnVuY3Rpb24oUGFydCkge1xuICAgIHBhcnQgPSBQYXJ0LmZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKTtcblxuICAgIHZhciBwYXJzZWQgPSAocGFydCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9KTtcblxuICByZXR1cm4gcGFydDtcbn1cbiJdfQ==