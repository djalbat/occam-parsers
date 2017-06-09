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
    key: 'getFirstPart',
    value: function getFirstPart() {
      var firstPart = first(this.parts);

      return firstPart;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiUGFydHMiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJzcGVjaWFsU3ltYm9scyIsIlJ1bGUiLCJwYXJ0cyIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RQYXJ0IiwiZmlyc3QiLCJhbGxCdXRGaXJzdFBhcnRzIiwic2xpY2UiLCJmaXJzdFByb2R1Y3Rpb25OYW1lUGFydCIsInByb2R1Y3Rpb25OYW1lIiwibGVmdFJlY3Vyc2l2ZSIsImdldEZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0IiwiaXNMZWZ0UmVjdXJzaXZlIiwicHJldmlvdXNQcm9kdWN0aW9ucyIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJldmlvdXNQcm9kdWN0aW9uIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmUiLCJmaXJzdFByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lIiwiZ2V0UHJvZHVjdGlvbk5hbWUiLCJmaXJzdFByb2R1Y3Rpb25OYW1lIiwic29tZSIsInByZXZpb3VzUHJvZHVjdGlvbiIsInByZXZpb3VzUHJvZHVjdGlvbk5hbWUiLCJnZXROYW1lIiwicHJldmlvdXNQcm9kdWN0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUiLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnQiLCJwYXJ0U3RyaW5nIiwidG9TdHJpbmciLCJzdHJpbmciLCJjb250ZXh0Iiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJzYXZlZEluZGV4IiwiZXZlcnlQYXJ0UGFyc2VkIiwiZXZlcnkiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsInBhcnRQYXJzZWQiLCJjb25jYXQiLCJiYWNrdHJhY2siLCJzeW1ib2xTZXF1ZW5jZSIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJlZHVjZVN5bWJvbHMiLCJzeW1ib2wiLCJOT19XSElURVNQQUNFIiwicGFydEZyb21TeW1ib2wiLCJwdXNoIiwicnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1bmRlZmluZWQiLCJQYXJ0IiwiZnJvbVN5bWJvbCIsInBhcnNlZCIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsUUFBUUQsUUFBUSxTQUFSLENBQWQ7QUFBQSxJQUNNRSxxQkFBcUJGLFFBQVEsdUJBQVIsQ0FEM0I7O0lBR1FHLGMsR0FBbUJKLE0sQ0FBbkJJLGM7O0lBRUZDLEk7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUMsY0FBYyxLQUFLRCxLQUFMLENBQVdFLE1BQS9COztBQUVBLGFBQU9ELFdBQVA7QUFDRDs7O21DQUVjO0FBQ2IsVUFBTUUsWUFBWUMsTUFBTSxLQUFLSixLQUFYLENBQWxCOztBQUVBLGFBQU9HLFNBQVA7QUFDRDs7OzBDQUVxQjtBQUNwQixVQUFNRSxtQkFBbUIsS0FBS0wsS0FBTCxDQUFXTSxLQUFYLENBQWlCLENBQWpCLENBQXpCOztBQUVBLGFBQU9ELGdCQUFQO0FBQ0Q7OztpREFFNEI7QUFDM0IsVUFBSUUsMEJBQTBCLElBQTlCOztBQUVBLFVBQU1KLFlBQVlDLE1BQU0sS0FBS0osS0FBWCxDQUFsQjs7QUFFQSxVQUFJRyxxQkFBcUJOLGtCQUF6QixFQUE2QztBQUMzQ1Usa0NBQTBCSixTQUExQixDQUQyQyxDQUNOO0FBQ3RDOztBQUVELGFBQU9JLHVCQUFQO0FBQ0Q7OztvQ0FFZUMsYyxFQUFnQjtBQUM5QixVQUFJQyxnQkFBZ0IsS0FBcEI7O0FBRUEsVUFBTUYsMEJBQTBCLEtBQUtHLDBCQUFMLEVBQWhDOztBQUVBLFVBQUlILDRCQUE0QixJQUFoQyxFQUFzQztBQUNwQ0Usd0JBQWdCRix3QkFBd0JJLGVBQXhCLENBQXdDSCxjQUF4QyxDQUFoQjtBQUNEOztBQUVELGFB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QUFTOEMsY0FBVCxDQUF3QkYsTUFBeEIsRUFBZ0NGLHFCQUFoQyxFQUF1RFgsWUFBdkQsRUFBcUU7QUFDbkUsTUFBSUwsT0FBT3lCLFNBQVgsQ0FEbUUsQ0FDN0M7O0FBRXRCdEQsUUFBTXNCLElBQU4sQ0FBVyxVQUFTaUMsSUFBVCxFQUFlO0FBQ3hCMUIsV0FBTzBCLEtBQUtDLFVBQUwsQ0FBZ0JULE1BQWhCLEVBQXdCRixxQkFBeEIsRUFBK0NYLFlBQS9DLENBQVA7O0FBRUEsUUFBTXVCLFNBQVU1QixTQUFTLElBQXpCOztBQUVBLFdBQU80QixNQUFQO0FBQ0QsR0FORDs7QUFRQSxTQUFPNUIsSUFBUDtBQUNEOztBQUVELFNBQVNyQixLQUFULENBQWVrRCxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFBhcnRzID0gcmVxdWlyZSgnLi9wYXJ0cycpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycztcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cbiAgXG4gIGdldFBhcnRzTGVuZ3RoKCkge1xuICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gdGhpcy5wYXJ0cy5sZW5ndGg7XG4gICAgXG4gICAgcmV0dXJuIHBhcnRzTGVuZ3RoO1xuICB9XG5cbiAgZ2V0Rmlyc3RQYXJ0KCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHRoaXMucGFydHMpO1xuXG4gICAgcmV0dXJuIGZpcnN0UGFydDtcbiAgfVxuICBcbiAgZ2V0QWxsQnV0Rmlyc3RQYXJ0cygpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdFBhcnRzID0gdGhpcy5wYXJ0cy5zbGljZSgxKTtcblxuICAgIHJldHVybiBhbGxCdXRGaXJzdFBhcnRzO1xuICB9XG4gIFxuICBnZXRGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCgpIHtcbiAgICBsZXQgZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQgPSBudWxsO1xuXG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICBpZiAoZmlyc3RQYXJ0IGluc3RhbmNlb2YgUHJvZHVjdGlvbk5hbWVQYXJ0KSB7XG4gICAgICBmaXJzdFByb2R1Y3Rpb25OYW1lUGFydCA9IGZpcnN0UGFydDsgLy8vXG4gICAgfVxuICAgIFxuICAgIHJldHVybiBmaXJzdFByb2R1Y3Rpb25OYW1lUGFydDtcbiAgfVxuICBcbiAgaXNMZWZ0UmVjdXJzaXZlKHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgbGV0IGxlZnRSZWN1cnNpdmUgPSBmYWxzZTtcbiAgICBcbiAgICBjb25zdCBmaXJzdFByb2R1Y3Rpb25OYW1lUGFydCA9IHRoaXMuZ2V0Rmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQoKTsgICAgXG4gICAgXG4gICAgaWYgKGZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0ICE9PSBudWxsKSB7XG4gICAgICBsZWZ0UmVjdXJzaXZlID0gZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQuaXNMZWZ0UmVjdXJzaXZlKHByb2R1Y3Rpb25OYW1lKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmU7XG4gIH1cblxuICBpc0ltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlKHByZXZpb3VzUHJvZHVjdGlvbnMpIHtcbiAgICBjb25zdCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByZXZpb3VzUHJvZHVjdGlvbiA9IHRoaXMuaW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcmV2aW91c1Byb2R1Y3Rpb24ocHJldmlvdXNQcm9kdWN0aW9ucyksXG4gICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmUgPSAoaW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcmV2aW91c1Byb2R1Y3Rpb24gIT09IG51bGwpO1xuICAgIFxuICAgIHJldHVybiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZTtcbiAgfVxuXG4gIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJldmlvdXNQcm9kdWN0aW9uKHByZXZpb3VzUHJvZHVjdGlvbnMpIHtcbiAgICBsZXQgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcmV2aW91c1Byb2R1Y3Rpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQgPSB0aGlzLmdldEZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0KCk7XG5cbiAgICBpZiAoZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWUgPSBmaXJzdFByb2R1Y3Rpb25OYW1lUGFydC5nZXRQcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICAgICAgZmlyc3RQcm9kdWN0aW9uTmFtZSA9IGZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWU7ICAvLy9cblxuICAgICAgcHJldmlvdXNQcm9kdWN0aW9ucy5zb21lKGZ1bmN0aW9uKHByZXZpb3VzUHJvZHVjdGlvbikge1xuICAgICAgICBjb25zdCBwcmV2aW91c1Byb2R1Y3Rpb25OYW1lID0gcHJldmlvdXNQcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgcHJldmlvdXNQcm9kdWN0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUgPSAocHJldmlvdXNQcm9kdWN0aW9uTmFtZSA9PT0gZmlyc3RQcm9kdWN0aW9uTmFtZSk7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzUHJvZHVjdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlKSB7XG4gICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcmV2aW91c1Byb2R1Y3Rpb24gPSBwcmV2aW91c1Byb2R1Y3Rpb247XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJldmlvdXNQcm9kdWN0aW9uO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZShmdW5jdGlvbihwYXJ0c1N0cmluZywgcGFydCkge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gcGFydHNTdHJpbmc7IC8vL1xuICAgIFxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgICAgZXZlcnlQYXJ0UGFyc2VkID0gdGhpcy5wYXJ0cy5ldmVyeShmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICAgICAgICBwYXJ0UGFyc2VkID0gKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCk7XG4gIFxuICAgICAgICAgICAgaWYgKHBhcnRQYXJzZWQpIHtcbiAgICAgICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQocGFydE5vZGVPck5vZGVzKTtcbiAgXG4gICAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0UGFyc2VkO1xuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFldmVyeVBhcnRQYXJzZWQpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuXG4gICAgICBub2RlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgc2lnbmlmaWNhbnRUb2tlblR5cGVzKSB7XG4gICAgbGV0IG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuICAgIFxuICAgIGNvbnN0IHBhcnRzID0gc3ltYm9sU2VxdWVuY2UucmVkdWNlU3ltYm9scyhmdW5jdGlvbihwYXJ0cywgc3ltYm9sKSB7XG4gICAgICAgICAgICBpZiAoc3ltYm9sID09PSBzcGVjaWFsU3ltYm9scy5OT19XSElURVNQQUNFKSB7XG4gICAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBwYXJ0ID0gcGFydEZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSk7XG4gIFxuICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHBhcnQpO1xuICBcbiAgICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzO1xuICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUocGFydHMpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuXG5mdW5jdGlvbiBwYXJ0RnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gIGxldCBwYXJ0ID0gdW5kZWZpbmVkOyAvLy9cblxuICBQYXJ0cy5zb21lKGZ1bmN0aW9uKFBhcnQpIHtcbiAgICBwYXJ0ID0gUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpO1xuXG4gICAgY29uc3QgcGFyc2VkID0gKHBhcnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19