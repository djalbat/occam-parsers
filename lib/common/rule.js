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
    key: 'isLeftRecursive',
    value: function isLeftRecursive(productionName) {
      var leftRecursive = false;

      var firstProductionNamePart = this.getFirstProductionNamePart();

      if (firstProductionNamePart !== null) {
        leftRecursive = firstProductionNamePart.isLeftRecursive(productionName);
      }

      return leftRecursive;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiUGFydHMiLCJzcGVjaWFsU3ltYm9scyIsIlJ1bGUiLCJwYXJ0cyIsImZpcnN0UGFydCIsImZpcnN0IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJhbGxCdXRGaXJzdFBhcnRzIiwic2xpY2UiLCJwcm9kdWN0aW9uTmFtZSIsImxlZnRSZWN1cnNpdmUiLCJmaXJzdFByb2R1Y3Rpb25OYW1lUGFydCIsImdldEZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0IiwiaXNMZWZ0UmVjdXJzaXZlIiwicHJldmlvdXNQcm9kdWN0aW9ucyIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJldmlvdXNQcm9kdWN0aW9uIiwiZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwiZmlyc3RQcm9kdWN0aW9uTmFtZSIsInNvbWUiLCJwcmV2aW91c1Byb2R1Y3Rpb24iLCJwcmV2aW91c1Byb2R1Y3Rpb25OYW1lIiwiZ2V0TmFtZSIsInByZXZpb3VzUHJvZHVjdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0IiwicGFydFN0cmluZyIsInRvU3RyaW5nIiwic3RyaW5nIiwiY29udGV4dCIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwic2F2ZWRJbmRleCIsImV2ZXJ5UGFydFBhcnNlZCIsImV2ZXJ5IiwicGFydE5vZGVPck5vZGVzIiwicGFyc2UiLCJwYXJ0UGFyc2VkIiwiY29uY2F0IiwiYmFja3RyYWNrIiwic3ltYm9sU2VxdWVuY2UiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJyZWR1Y2VTeW1ib2xzIiwic3ltYm9sIiwiTk9fV0hJVEVTUEFDRSIsInBhcnRGcm9tU3ltYm9sIiwicHVzaCIsInJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwidW5kZWZpbmVkIiwiUGFydCIsImZy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c291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgUGFydHMgPSByZXF1aXJlKCcuL3BhcnRzJyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycztcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cbiAgXG4gIGdldEZpcnN0UGFydCgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIHJldHVybiBmaXJzdFBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0c0xlbmd0aCgpIHtcbiAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHRoaXMucGFydHMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHBhcnRzTGVuZ3RoO1xuICB9XG5cbiAgZ2V0QWxsQnV0Rmlyc3RQYXJ0cygpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdFBhcnRzID0gdGhpcy5wYXJ0cy5zbGljZSgxKTtcblxuICAgIHJldHVybiBhbGxCdXRGaXJzdFBhcnRzO1xuICB9XG4gIFxuICBpc0xlZnRSZWN1cnNpdmUocHJvZHVjdGlvbk5hbWUpIHtcbiAgICBsZXQgbGVmdFJlY3Vyc2l2ZSA9IGZhbHNlO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gdGhpcy5nZXRGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCgpOyAgICBcbiAgICBcbiAgICBpZiAoZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQgIT09IG51bGwpIHtcbiAgICAgIGxlZnRSZWN1cnNpdmUgPSBmaXJzdFByb2R1Y3Rpb25OYW1lUGFydC5pc0xlZnRSZWN1cnNpdmUocHJvZHVjdGlvbk5hbWUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZTtcbiAgfVxuXG4gIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJldmlvdXNQcm9kdWN0aW9uKHByZXZpb3VzUHJvZHVjdGlvbnMpIHtcbiAgICBsZXQgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcmV2aW91c1Byb2R1Y3Rpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQgPSB0aGlzLmdldEZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0KCk7XG5cbiAgICBpZiAoZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWUgPSBmaXJzdFByb2R1Y3Rpb25OYW1lUGFydC5nZXRQcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICAgICAgZmlyc3RQcm9kdWN0aW9uTmFtZSA9IGZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWU7ICAvLy9cblxuICAgICAgcHJldmlvdXNQcm9kdWN0aW9ucy5zb21lKGZ1bmN0aW9uKHByZXZpb3VzUHJvZHVjdGlvbikge1xuICAgICAgICBjb25zdCBwcmV2aW91c1Byb2R1Y3Rpb25OYW1lID0gcHJldmlvdXNQcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgcHJldmlvdXNQcm9kdWN0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUgPSAocHJldmlvdXNQcm9kdWN0aW9uTmFtZSA9PT0gZmlyc3RQcm9kdWN0aW9uTmFtZSk7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzUHJvZHVjdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlKSB7XG4gICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcmV2aW91c1Byb2R1Y3Rpb24gPSBwcmV2aW91c1Byb2R1Y3Rpb247XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJldmlvdXNQcm9kdWN0aW9uO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZShmdW5jdGlvbihwYXJ0c1N0cmluZywgcGFydCkge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gcGFydHNTdHJpbmc7IC8vL1xuICAgIFxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgICAgZXZlcnlQYXJ0UGFyc2VkID0gdGhpcy5wYXJ0cy5ldmVyeShmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICAgICAgICBwYXJ0UGFyc2VkID0gKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCk7XG4gIFxuICAgICAgICAgICAgaWYgKHBhcnRQYXJzZWQpIHtcbiAgICAgICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQocGFydE5vZGVPck5vZGVzKTtcbiAgXG4gICAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0UGFyc2VkO1xuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFldmVyeVBhcnRQYXJzZWQpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuXG4gICAgICBub2RlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgc2lnbmlmaWNhbnRUb2tlblR5cGVzKSB7XG4gICAgbGV0IG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuICAgIFxuICAgIGNvbnN0IHBhcnRzID0gc3ltYm9sU2VxdWVuY2UucmVkdWNlU3ltYm9scyhmdW5jdGlvbihwYXJ0cywgc3ltYm9sKSB7XG4gICAgICAgICAgICBpZiAoc3ltYm9sID09PSBzcGVjaWFsU3ltYm9scy5OT19XSElURVNQQUNFKSB7XG4gICAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBwYXJ0ID0gcGFydEZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSk7XG4gIFxuICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHBhcnQpO1xuICBcbiAgICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzO1xuICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUocGFydHMpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuXG5mdW5jdGlvbiBwYXJ0RnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gIGxldCBwYXJ0ID0gdW5kZWZpbmVkOyAvLy9cblxuICBQYXJ0cy5zb21lKGZ1bmN0aW9uKFBhcnQpIHtcbiAgICBwYXJ0ID0gUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpO1xuXG4gICAgY29uc3QgcGFyc2VkID0gKHBhcnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19