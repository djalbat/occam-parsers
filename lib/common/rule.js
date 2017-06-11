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
    key: 'implicitlyLeftRecursivePreviousProduction',
    value: function implicitlyLeftRecursivePreviousProduction(previousProductions) {
      var implicitlyLeftRecursivePreviousProduction = null;

      var firstProductionNamePart = this.getFirstProductionNamePart();

      if (firstProductionNamePart !== null) {
        var firstProductionNamePartProductionName = firstProductionNamePart.getProductionName(),
            firstProductionName = firstProductionNamePartProductionName; ///

        previousProductions.some(function (previousProduction) {
          var previousProductionName = previousProduction.getName(),
              previousProductionImplicitlyLeftRecursive = previousProductionName === firstProductionName;

          if (previousProductionImplicitlyLeftRecursive) {
            implicitlyLeftRecursivePreviousProduction = previousProduction;

            return true;
          }
        });
      }

      return implicitlyLeftRecursivePreviousProduction;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiUGFydHMiLCJzcGVjaWFsU3ltYm9scyIsIlJ1bGUiLCJwYXJ0cyIsImZpcnN0UGFydCIsImZpcnN0IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJhbGxCdXRGaXJzdFBhcnRzIiwic2xpY2UiLCJwcmV2aW91c1Byb2R1Y3Rpb25zIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcmV2aW91c1Byb2R1Y3Rpb24iLCJmaXJzdFByb2R1Y3Rpb25OYW1lUGFydCIsImdldEZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0IiwiZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwiZmlyc3RQcm9kdWN0aW9uTmFtZSIsInNvbWUiLCJwcmV2aW91c1Byb2R1Y3Rpb24iLCJwcmV2aW91c1Byb2R1Y3Rpb25OYW1lIiwiZ2V0TmFtZSIsInByZXZpb3VzUHJvZHVjdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0IiwicGFydFN0cmluZyIsInRvU3RyaW5nIiwic3RyaW5nIiwiY29udGV4dCIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwic2F2ZWRJbmRleCIsImV2ZXJ5UGFydFBhcnNlZCIsImV2ZXJ5IiwicGFydE5vZGVPck5vZGVzIiwicGFyc2UiLCJwYXJ0UGFyc2VkIiwiY29uY2F0IiwiYmFja3RyYWNrIiwic3ltYm9sU2VxdWVuY2UiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJyZWR1Y2VTeW1ib2xzIiwic3ltYm9sIiwiTk9fV0hJVEVTUEFDRSIsInBhcnRGcm9tU3ltYm9sIiwicHVzaCIsInJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwidW5kZWZpbmVkIiwiUGFydCIsImZyb21TeW1ib2wiLCJwYXJzZWQiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztB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ZjtBQUNELFNBRkQsTUFFTztBQUNMLGNBQU1MLE9BQU9vQixlQUFlRixNQUFmLEVBQXVCRixxQkFBdkIsRUFBOENYLFlBQTlDLENBQWI7O0FBRUExQixnQkFBTTBDLElBQU4sQ0FBV3JCLElBQVg7O0FBRUFLLHlCQUFlLEtBQWY7QUFDRDs7QUFFRCxlQUFPMUIsS0FBUDtBQUNELE9BWk8sRUFZTCxFQVpLLENBQWQ7QUFBQSxVQWFNMkMsT0FBTyxJQUFJNUMsSUFBSixDQUFTQyxLQUFULENBYmI7O0FBZUEsYUFBTzJDLElBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUI5QyxJQUFqQjs7QUFFQSxTQUFTMEMsY0FBVCxDQUF3QkYsTUFBeEIsRUFBZ0NGLHFCQUFoQyxFQUF1RFgsWUFBdkQsRUFBcUU7QUFDbkUsTUFBSUwsT0FBT3lCLFNBQVgsQ0FEbUUsQ0FDN0M7O0FBRXRCakQsUUFBTWlCLElBQU4sQ0FBVyxVQUFTaUMsSUFBVCxFQUFlO0FBQ3hCMUIsV0FBTzBCLEtBQUtDLFVBQUwsQ0FBZ0JULE1BQWhCLEVBQXdCRixxQkFBeEIsRUFBK0NYLFlBQS9DLENBQVA7O0FBRUEsUUFBTXVCLFNBQVU1QixTQUFTLElBQXpCOztBQUVBLFdBQU80QixNQUFQO0FBQ0QsR0FORDs7QUFRQSxTQUFPNUIsSUFBUDtBQUNEOztBQUVELFNBQVNuQixLQUFULENBQWVnRCxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFBhcnRzID0gcmVxdWlyZSgnLi9wYXJ0cycpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnM7XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG4gIFxuICBnZXRGaXJzdFBhcnQoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICByZXR1cm4gZmlyc3RQYXJ0O1xuICB9XG5cbiAgZ2V0UGFydHNMZW5ndGgoKSB7XG4gICAgY29uc3QgcGFydHNMZW5ndGggPSB0aGlzLnBhcnRzLmxlbmd0aDtcblxuICAgIHJldHVybiBwYXJ0c0xlbmd0aDtcbiAgfVxuXG4gIGdldEFsbEJ1dEZpcnN0UGFydHMoKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RQYXJ0cyA9IHRoaXMucGFydHMuc2xpY2UoMSk7XG5cbiAgICByZXR1cm4gYWxsQnV0Rmlyc3RQYXJ0cztcbiAgfVxuICBcbiAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcmV2aW91c1Byb2R1Y3Rpb24ocHJldmlvdXNQcm9kdWN0aW9ucykge1xuICAgIGxldCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByZXZpb3VzUHJvZHVjdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBmaXJzdFByb2R1Y3Rpb25OYW1lUGFydCA9IHRoaXMuZ2V0Rmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQoKTtcblxuICAgIGlmIChmaXJzdFByb2R1Y3Rpb25OYW1lUGFydCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSA9IGZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0LmdldFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgICBmaXJzdFByb2R1Y3Rpb25OYW1lID0gZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZTsgIC8vL1xuXG4gICAgICBwcmV2aW91c1Byb2R1Y3Rpb25zLnNvbWUoZnVuY3Rpb24ocHJldmlvdXNQcm9kdWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzUHJvZHVjdGlvbk5hbWUgPSBwcmV2aW91c1Byb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBwcmV2aW91c1Byb2R1Y3Rpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IChwcmV2aW91c1Byb2R1Y3Rpb25OYW1lID09PSBmaXJzdFByb2R1Y3Rpb25OYW1lKTtcblxuICAgICAgICBpZiAocHJldmlvdXNQcm9kdWN0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUpIHtcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByZXZpb3VzUHJvZHVjdGlvbiA9IHByZXZpb3VzUHJvZHVjdGlvbjtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcmV2aW91c1Byb2R1Y3Rpb247XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKGZ1bmN0aW9uKHBhcnRzU3RyaW5nLCBwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC50b1N0cmluZygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzdHJpbmcgPSBwYXJ0c1N0cmluZzsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBldmVyeVBhcnRQYXJzZWQgPSB0aGlzLnBhcnRzLmV2ZXJ5KGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICAgICAgICAgIHBhcnRQYXJzZWQgPSAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKTtcbiAgXG4gICAgICAgICAgICBpZiAocGFydFBhcnNlZCkge1xuICAgICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwYXJ0Tm9kZU9yTm9kZXMpO1xuICBcbiAgICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHBhcnRQYXJzZWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIWV2ZXJ5UGFydFBhcnNlZCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG5cbiAgICAgIG5vZGVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbFNlcXVlbmNlKHN5bWJvbFNlcXVlbmNlLCBzaWduaWZpY2FudFRva2VuVHlwZXMpIHtcbiAgICBsZXQgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgXG4gICAgY29uc3QgcGFydHMgPSBzeW1ib2xTZXF1ZW5jZS5yZWR1Y2VTeW1ib2xzKGZ1bmN0aW9uKHBhcnRzLCBzeW1ib2wpIHtcbiAgICAgICAgICAgIGlmIChzeW1ib2wgPT09IHNwZWNpYWxTeW1ib2xzLk5PX1dISVRFU1BBQ0UpIHtcbiAgICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0RnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKTtcbiAgXG4gICAgICAgICAgICAgIHBhcnRzLnB1c2gocGFydCk7XG4gIFxuICAgICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICByZXR1cm4gcGFydHM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZShwYXJ0cyk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG5cbmZ1bmN0aW9uIHBhcnRGcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgbGV0IHBhcnQgPSB1bmRlZmluZWQ7IC8vL1xuXG4gIFBhcnRzLnNvbWUoZnVuY3Rpb24oUGFydCkge1xuICAgIHBhcnQgPSBQYXJ0LmZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICBjb25zdCBwYXJzZWQgPSAocGFydCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9KTtcblxuICByZXR1cm4gcGFydDtcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=