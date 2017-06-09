'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var Parts = require('./parts'),
    ProductionNamePart = require('./part/productionName');

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
    key: 'getFirstProductionNamePart',
    value: function getFirstProductionNamePart() {
      var firstProductionNamePart = null;

      var firstPart = first(this.parts);

      if (firstPart instanceof ProductionNamePart) {
        firstProductionNamePart = firstPart; ///
      }

      return firstProductionNamePart;
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
    key: 'isImplicitlyLeftRecursive',
    value: function isImplicitlyLeftRecursive(previousProductions) {
      var implicitlyLeftRecursivePreviousProduction = this.implicitlyLeftRecursivePreviousProduction(previousProductions),
          implicitlyLeftRecursive = implicitlyLeftRecursivePreviousProduction !== null;

      return implicitlyLeftRecursive;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiUGFydHMiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJzcGVjaWFsU3ltYm9scyIsIlJ1bGUiLCJwYXJ0cyIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwiYWxsQnV0Rmlyc3RQYXJ0cyIsInNsaWNlIiwiZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQiLCJmaXJzdFBhcnQiLCJmaXJzdCIsInByb2R1Y3Rpb25OYW1lIiwibGVmdFJlY3Vyc2l2ZSIsImdldEZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0IiwiaXNMZWZ0UmVjdXJzaXZlIiwicHJldmlvdXNQcm9kdWN0aW9ucyIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJldmlvdXNQcm9kdWN0aW9uIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmUiLCJmaXJzdFByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lIiwiZ2V0UHJvZHVjdGlvbk5hbWUiLCJmaXJzdFByb2R1Y3Rpb25OYW1lIiwic29tZSIsInByZXZpb3VzUHJvZHVjdGlvbiIsInByZXZpb3VzUHJvZHVjdGlvbk5hbWUiLCJnZXROYW1lIiwicHJldmlvdXNQcm9kdWN0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUiLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnQiLCJwYXJ0U3RyaW5nIiwidG9TdHJpbmciLCJzdHJpbmciLCJjb250ZXh0Iiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJzYXZlZEluZGV4IiwiZXZlcnlQYXJ0UGFyc2VkIiwiZXZlcnkiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsInBhcnRQYXJzZWQiLCJjb25jYXQiLCJiYWNrdHJhY2siLCJzeW1ib2xTZXF1ZW5jZSIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJlZHVjZVN5bWJvbHMiLCJzeW1ib2wiLCJOT19XSElURVNQQUNFIiwicGFydEZyb21TeW1ib2wiLCJwdXNoIiwicnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1bmRlZmluZWQiLCJQYXJ0IiwiZnJvbVN5bWJvbCIsInBhcnNlZCIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsUUFBUUQsUUFBUSxTQUFSLENBQWQ7QUFBQSxJQUNNRSxxQkFBcUJGLFFBQVEsdUJBQVIsQ0FEM0I7O0lBR1FHLGMsR0FBbUJKLE0sQ0FBbkJJLGM7O0lBRUZDLEk7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUMsY0FBYyxLQUFLRCxLQUFMLENBQVdFLE1BQS9COztBQUVBLGFBQU9ELFdBQVA7QUFDRDs7OzBDQUVxQjtBQUNwQixVQUFNRSxtQkFBbUIsS0FBS0gsS0FBTCxDQUFXSSxLQUFYLENBQWlCLENBQWpCLENBQXpCOztBQUVBLGFBQU9ELGdCQUFQO0FBQ0Q7OztpREFFNEI7QUFDM0IsVUFBSUUsMEJBQTBCLElBQTlCOztBQUVBLFVBQU1DLFlBQVlDLE1BQU0sS0FBS1AsS0FBWCxDQUFsQjs7QUFFQSxVQUFJTSxxQkFBcUJULGtCQUF6QixFQUE2QztBQUMzQ1Esa0NBQTBCQyxTQUExQixDQUQyQyxDQUNOO0FBQ3RDOztBQUVELGFBQU9ELHVCQUFQO0FBQ0Q7OztvQ0FFZUcsYyxFQUFnQjtBQUM5QixVQUFJQyxnQkFBZ0IsS0FBcEI7O0FBRUEsVUFBTUosMEJBQTBCLEtBQUtLLDBCQUFMLEVBQWhDOztBQUVBLFVBQUlMLDRCQUE0QixJQUFoQyxFQUFzQztBQUNwQ0ksd0JBQWdCSix3QkFBd0JNLGVBQXhCLENBQXdDSCxjQUF4QyxDQUFoQjtBQUNEOztBQUVELGFBQU9DLGFBQVA7QUFDRDs7OzhDQUV5QkcsbUIsRUFBcUI7QUFDN0MsVUFBTUMsNENBQTRDLEtBQUtBLHlDQUFMLENBQStD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T0FBT3lCLFNBQVgsQ0FEbUUsQ0FDN0M7O0FBRXRCdEQsUUFBTXNCLElBQU4sQ0FBVyxVQUFTaUMsSUFBVCxFQUFlO0FBQ3hCMUIsV0FBTzBCLEtBQUtDLFVBQUwsQ0FBZ0JULE1BQWhCLEVBQXdCRixxQkFBeEIsRUFBK0NYLFlBQS9DLENBQVA7O0FBRUEsUUFBTXVCLFNBQVU1QixTQUFTLElBQXpCOztBQUVBLFdBQU80QixNQUFQO0FBQ0QsR0FORDs7QUFRQSxTQUFPNUIsSUFBUDtBQUNEOztBQUVELFNBQVNsQixLQUFULENBQWUrQyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFBhcnRzID0gcmVxdWlyZSgnLi9wYXJ0cycpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycztcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cbiAgXG4gIGdldFBhcnRzTGVuZ3RoKCkge1xuICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gdGhpcy5wYXJ0cy5sZW5ndGg7XG4gICAgXG4gICAgcmV0dXJuIHBhcnRzTGVuZ3RoO1xuICB9XG4gIFxuICBnZXRBbGxCdXRGaXJzdFBhcnRzKCkge1xuICAgIGNvbnN0IGFsbEJ1dEZpcnN0UGFydHMgPSB0aGlzLnBhcnRzLnNsaWNlKDEpO1xuXG4gICAgcmV0dXJuIGFsbEJ1dEZpcnN0UGFydHM7XG4gIH1cbiAgXG4gIGdldEZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0KCkge1xuICAgIGxldCBmaXJzdFByb2R1Y3Rpb25OYW1lUGFydCA9IG51bGw7XG5cbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIGlmIChmaXJzdFBhcnQgaW5zdGFuY2VvZiBQcm9kdWN0aW9uTmFtZVBhcnQpIHtcbiAgICAgIGZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gZmlyc3RQYXJ0OyAvLy9cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0O1xuICB9XG4gIFxuICBpc0xlZnRSZWN1cnNpdmUocHJvZHVjdGlvbk5hbWUpIHtcbiAgICBsZXQgbGVmdFJlY3Vyc2l2ZSA9IGZhbHNlO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gdGhpcy5nZXRGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCgpOyAgICBcbiAgICBcbiAgICBpZiAoZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQgIT09IG51bGwpIHtcbiAgICAgIGxlZnRSZWN1cnNpdmUgPSBmaXJzdFByb2R1Y3Rpb25OYW1lUGFydC5pc0xlZnRSZWN1cnNpdmUocHJvZHVjdGlvbk5hbWUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZTtcbiAgfVxuXG4gIGlzSW1wbGljaXRseUxlZnRSZWN1cnNpdmUocHJldmlvdXNQcm9kdWN0aW9ucykge1xuICAgIGNvbnN0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJldmlvdXNQcm9kdWN0aW9uID0gdGhpcy5pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByZXZpb3VzUHJvZHVjdGlvbihwcmV2aW91c1Byb2R1Y3Rpb25zKSxcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IChpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByZXZpb3VzUHJvZHVjdGlvbiAhPT0gbnVsbCk7XG4gICAgXG4gICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlO1xuICB9XG5cbiAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcmV2aW91c1Byb2R1Y3Rpb24ocHJldmlvdXNQcm9kdWN0aW9ucykge1xuICAgIGxldCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByZXZpb3VzUHJvZHVjdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBmaXJzdFByb2R1Y3Rpb25OYW1lUGFydCA9IHRoaXMuZ2V0Rmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQoKTtcblxuICAgIGlmIChmaXJzdFByb2R1Y3Rpb25OYW1lUGFydCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSA9IGZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0LmdldFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgICBmaXJzdFByb2R1Y3Rpb25OYW1lID0gZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZTsgIC8vL1xuXG4gICAgICBwcmV2aW91c1Byb2R1Y3Rpb25zLnNvbWUoZnVuY3Rpb24ocHJldmlvdXNQcm9kdWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzUHJvZHVjdGlvbk5hbWUgPSBwcmV2aW91c1Byb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBwcmV2aW91c1Byb2R1Y3Rpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IChwcmV2aW91c1Byb2R1Y3Rpb25OYW1lID09PSBmaXJzdFByb2R1Y3Rpb25OYW1lKTtcblxuICAgICAgICBpZiAocHJldmlvdXNQcm9kdWN0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUpIHtcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByZXZpb3VzUHJvZHVjdGlvbiA9IHByZXZpb3VzUHJvZHVjdGlvbjtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcmV2aW91c1Byb2R1Y3Rpb247XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKGZ1bmN0aW9uKHBhcnRzU3RyaW5nLCBwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC50b1N0cmluZygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzdHJpbmcgPSBwYXJ0c1N0cmluZzsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBldmVyeVBhcnRQYXJzZWQgPSB0aGlzLnBhcnRzLmV2ZXJ5KGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICAgICAgICAgIHBhcnRQYXJzZWQgPSAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKTtcbiAgXG4gICAgICAgICAgICBpZiAocGFydFBhcnNlZCkge1xuICAgICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwYXJ0Tm9kZU9yTm9kZXMpO1xuICBcbiAgICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHBhcnRQYXJzZWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIWV2ZXJ5UGFydFBhcnNlZCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG5cbiAgICAgIG5vZGVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbFNlcXVlbmNlKHN5bWJvbFNlcXVlbmNlLCBzaWduaWZpY2FudFRva2VuVHlwZXMpIHtcbiAgICBsZXQgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgXG4gICAgY29uc3QgcGFydHMgPSBzeW1ib2xTZXF1ZW5jZS5yZWR1Y2VTeW1ib2xzKGZ1bmN0aW9uKHBhcnRzLCBzeW1ib2wpIHtcbiAgICAgICAgICAgIGlmIChzeW1ib2wgPT09IHNwZWNpYWxTeW1ib2xzLk5PX1dISVRFU1BBQ0UpIHtcbiAgICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0RnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKTtcbiAgXG4gICAgICAgICAgICAgIHBhcnRzLnB1c2gocGFydCk7XG4gIFxuICAgICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICByZXR1cm4gcGFydHM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZShwYXJ0cyk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG5cbmZ1bmN0aW9uIHBhcnRGcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgbGV0IHBhcnQgPSB1bmRlZmluZWQ7IC8vL1xuXG4gIFBhcnRzLnNvbWUoZnVuY3Rpb24oUGFydCkge1xuICAgIHBhcnQgPSBQYXJ0LmZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICBjb25zdCBwYXJzZWQgPSAocGFydCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9KTtcblxuICByZXR1cm4gcGFydDtcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=