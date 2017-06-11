'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var Parts = require('./parts');

var specialSymbols = lexers.specialSymbols;

var Rule = function () {
  function Rule(parts) {
    _classCallCheck(this, Rule);

    this.parts = parts;
  }

  _createClass(Rule, [{
    key: 'getParts',
    value: function getParts() {
      return this.parts;
    }
  }, {
    key: 'getFirstPart',
    value: function getFirstPart() {
      var firstPart = first(this.parts);

      return firstPart;
    }
  }, {
    key: 'getPartsLength',
    value: function getPartsLength() {
      var partsLength = this.parts.length;

      return partsLength;
    }
  }, {
    key: 'getAllButFirstParts',
    value: function getAllButFirstParts() {
      var allButFirstParts = this.parts.slice(1);

      return allButFirstParts;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var partsString = this.parts.reduce(function (partsString, part) {
        var partString = part.toString();

        if (partsString === null) {
          partsString = partString;
        } else {
          partsString = partsString + ' ' + partString;
        }

        return partsString;
      }, null),
          string = partsString; ///

      return string;
    }
  }, {
    key: 'parse',
    value: function parse(context, noWhitespace) {
      var nodes = [];

      var savedIndex = context.savedIndex(),
          everyPartParsed = this.parts.every(function (part) {
        var partNodeOrNodes = part.parse(context, noWhitespace),
            partParsed = partNodeOrNodes !== null;

        if (partParsed) {
          nodes = nodes.concat(partNodeOrNodes);

          noWhitespace = false;
        }

        return partParsed;
      });

      if (!everyPartParsed) {
        context.backtrack(savedIndex);

        nodes = null;
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbolSequence',
    value: function fromSymbolSequence(symbolSequence, significantTokenTypes) {
      var noWhitespace = false;

      var parts = symbolSequence.reduceSymbols(function (parts, symbol) {
        if (symbol === specialSymbols.NO_WHITESPACE) {
          noWhitespace = true;
        } else {
          var part = partFromSymbol(symbol, significantTokenTypes, noWhitespace);

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

function partFromSymbol(symbol, significantTokenTypes, noWhitespace) {
  var part = undefined; ///

  Parts.some(function (Part) {
    part = Part.fromSymbol(symbol, significantTokenTypes, noWhitespace);

    var parsed = part !== null;

    return parsed;
  });

  return part;
}

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiUGFydHMiLCJzcGVjaWFsU3ltYm9scyIsIlJ1bGUiLCJwYXJ0cyIsImZpcnN0UGFydCIsImZpcnN0IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJhbGxCdXRGaXJzdFBhcnRzIiwic2xpY2UiLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnQiLCJwYXJ0U3RyaW5nIiwidG9TdHJpbmciLCJzdHJpbmciLCJjb250ZXh0Iiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJzYXZlZEluZGV4IiwiZXZlcnlQYXJ0UGFyc2VkIiwiZXZlcnkiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsInBhcnRQYXJzZWQiLCJjb25jYXQiLCJiYWNrdHJhY2siLCJzeW1ib2xTZXF1ZW5jZSIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJlZHVjZVN5bWJvbHMiLCJzeW1ib2wiLCJOT19XSElURVNQQUNFIiwicGFydEZyb21TeW1ib2wiLCJwdXNoIiwicnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1bmRlZmluZWQiLCJzb21lIiwiUGFydCIsImZyb21TeW1ib2wiLCJwYXJzZWQiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFFBQVFELFFBQVEsU0FBUixDQUFkOztJQUVRRSxjLEdBQW1CSCxNLENBQW5CRyxjOztJQUVGQyxJO0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7O21DQUVjO0FBQ2IsVUFBTUMsWUFBWUMsTUFBTSxLQUFLRixLQUFYLENBQWxCOztBQUVBLGFBQU9DLFNBQVA7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQU1FLGNBQWMsS0FBS0gsS0FBTCxDQUFXSSxNQUEvQjs7QUFFQSxhQUFPRCxXQUFQO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsVUFBTUUsbUJBQW1CLEtBQUtMLEtBQUwsQ0FBV00sS0FBWCxDQUFpQixDQUFqQixDQUF6Qjs7QUFFQSxhQUFPRCxnQkFBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNRSxjQUFjLEtBQUtQLEtBQUwsQ0FBV1EsTUFBWCxDQUFrQixVQUFTRCxXQUFULEVBQXNCRSxJQUF0QixFQUE0QjtBQUMxRCxZQUFNQyxhQUFhRCxLQUFLRSxRQUFMLEVBQW5COztBQUVBLFlBQUlKLGdCQUFnQixJQUFwQixFQUEwQjtBQUN4QkEsd0JBQWNHLFVBQWQ7QUFDRCxTQUZELE1BRU87QUFDTEgsd0JBQWlCQSxXQUFqQixTQUFnQ0csVUFBaEM7QUFDRDs7QUFFRCxlQUFPSCxXQUFQO0FBQ0QsT0FWYSxFQVVYLElBVlcsQ0FBcEI7QUFBQSxVQVdNSyxTQUFTTCxXQVhmLENBRFMsQ0FZbUI7O0FBRTVCLGFBQU9LLE1BQVA7QUFDRDs7OzBCQUVLQyxPLEVBQVNDLFksRUFBYztBQUMzQixVQUFJQyxRQUFRLEVBQVo7O0FBRUEsVUFBTUMsYUFBYUgsUUFBUUcsVUFBUixFQUFuQjtBQUFBLFVBQ01DLGtCQUFrQixLQUFLakIsS0FBTCxDQUFXa0IsS0FBWCxDQUFpQixVQUFTVCxJQUFULEVBQWU7QUFDaEQsWUFBTVUsa0JBQWtCVixLQUFLVyxLQUFMLENBQVdQLE9BQVgsRUFBb0JDLFlBQXBCLENBQXhCO0FBQUEsWUFDTU8sYUFBY0Ysb0JBQW9CLElBRHhDOztBQUdBLFlBQUlFLFVBQUosRUFBZ0I7QUFDZE4sa0JBQVFBLE1BQU1PLE1BQU4sQ0FBYUgsZUFBYixDQUFSOztBQUVBTCx5QkFBZSxLQUFmO0FBQ0Q7O0FBRUQsZUFBT08sVUFBUDtBQUNELE9BWGlCLENBRHhCOztBQWNBLFVBQUksQ0FBQ0osZUFBTCxFQUFzQjtBQUNwQkosZ0JBQVFVLFNBQVIsQ0FBa0JQLFVBQWxCOztBQUVBRCxnQkFBUSxJQUFSO0FBQ0Q7O0FBRUQsYUFBT0EsS0FBUDtBQUNEOzs7dUNBRXlCUyxjLEVBQWdCQyxxQixFQUF1QjtBQUMvRCxVQUFJWCxlQUFlLEtBQW5COztBQUVBLFVBQU1kLFFBQVF3QixlQUFlRSxhQUFmLENBQTZCLFVBQVMxQixLQUFULEVBQWdCMkIsTUFBaEIsRUFBd0I7QUFDM0QsWUFBSUEsV0FBVzdCLGVBQWU4QixhQUE5QixFQUE2QztBQUMzQ2QseUJBQWUsSUFBZjtBQUNELFNBRkQsTUFFTztBQUNMLGNBQU1MLE9BQU9vQixlQUFlRixNQUFmLEVBQXVCRixxQkFBdkIsRUFBOENYLFlBQTlDLENBQWI7O0FBRUFkLGdCQUFNOEIsSUFBTixDQUFXckIsSUFBWDs7QUFFQUsseUJBQWUsS0FBZjtBQUNEOztBQUVELGVBQU9kLEtBQVA7QUFDRCxPQVpPLEVBWUwsRUFaSyxDQUFkO0FBQUEsVUFhTStCLE9BQU8sSUFBSWhDLElBQUosQ0FBU0MsS0FBVCxDQWJiOztBQWVBLGFBQU8rQixJQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbEMsSUFBakI7O0FBRUEsU0FBUzhCLGNBQVQsQ0FBd0JGLE1BQXhCLEVBQWdDRixxQkFBaEMsRUFBdURYLFlBQXZELEVBQXFFO0FBQ25FLE1BQUlMLE9BQU95QixTQUFYLENBRG1FLENBQzdDOztBQUV0QnJDLFFBQU1zQyxJQUFOLENBQVcsVUFBU0MsSUFBVCxFQUFlO0FBQ3hCM0IsV0FBTzJCLEtBQUtDLFVBQUwsQ0FBZ0JWLE1BQWhCLEVBQXdCRixxQkFBeEIsRUFBK0NYLFlBQS9DLENBQVA7O0FBRUEsUUFBTXdCLFNBQVU3QixTQUFTLElBQXpCOztBQUVBLFdBQU82QixNQUFQO0FBQ0QsR0FORDs7QUFRQSxTQUFPN0IsSUFBUDtBQUNEOztBQUVELFNBQVNQLEtBQVQsQ0FBZXFDLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgUGFydHMgPSByZXF1aXJlKCcuL3BhcnRzJyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycztcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cbiAgXG4gIGdldEZpcnN0UGFydCgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIHJldHVybiBmaXJzdFBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0c0xlbmd0aCgpIHtcbiAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHRoaXMucGFydHMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHBhcnRzTGVuZ3RoO1xuICB9XG5cbiAgZ2V0QWxsQnV0Rmlyc3RQYXJ0cygpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdFBhcnRzID0gdGhpcy5wYXJ0cy5zbGljZSgxKTtcblxuICAgIHJldHVybiBhbGxCdXRGaXJzdFBhcnRzO1xuICB9XG4gIFxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKGZ1bmN0aW9uKHBhcnRzU3RyaW5nLCBwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC50b1N0cmluZygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzdHJpbmcgPSBwYXJ0c1N0cmluZzsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBldmVyeVBhcnRQYXJzZWQgPSB0aGlzLnBhcnRzLmV2ZXJ5KGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICAgICAgICAgIHBhcnRQYXJzZWQgPSAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKTtcbiAgXG4gICAgICAgICAgICBpZiAocGFydFBhcnNlZCkge1xuICAgICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwYXJ0Tm9kZU9yTm9kZXMpO1xuICBcbiAgICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHBhcnRQYXJzZWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIWV2ZXJ5UGFydFBhcnNlZCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG5cbiAgICAgIG5vZGVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbFNlcXVlbmNlKHN5bWJvbFNlcXVlbmNlLCBzaWduaWZpY2FudFRva2VuVHlwZXMpIHtcbiAgICBsZXQgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgXG4gICAgY29uc3QgcGFydHMgPSBzeW1ib2xTZXF1ZW5jZS5yZWR1Y2VTeW1ib2xzKGZ1bmN0aW9uKHBhcnRzLCBzeW1ib2wpIHtcbiAgICAgICAgICAgIGlmIChzeW1ib2wgPT09IHNwZWNpYWxTeW1ib2xzLk5PX1dISVRFU1BBQ0UpIHtcbiAgICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0RnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKTtcbiAgXG4gICAgICAgICAgICAgIHBhcnRzLnB1c2gocGFydCk7XG4gIFxuICAgICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICByZXR1cm4gcGFydHM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZShwYXJ0cyk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG5cbmZ1bmN0aW9uIHBhcnRGcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgbGV0IHBhcnQgPSB1bmRlZmluZWQ7IC8vL1xuXG4gIFBhcnRzLnNvbWUoZnVuY3Rpb24oUGFydCkge1xuICAgIHBhcnQgPSBQYXJ0LmZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICBjb25zdCBwYXJzZWQgPSAocGFydCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9KTtcblxuICByZXR1cm4gcGFydDtcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=