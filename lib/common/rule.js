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
    key: 'getAllButFirstParts',
    value: function getAllButFirstParts() {
      var allButFirstParts = this.parts.slice(1);

      return allButFirstParts;
    }
  }, {
    key: 'isLeftRecursive',
    value: function isLeftRecursive(productionName) {
      var leftRecursive = false;

      var firstPart = first(this.parts);

      if (firstPart instanceof ProductionNamePart) {
        var productionNamePart = firstPart; ///

        leftRecursive = productionNamePart.isLeftRecursive(productionName);
      }

      return leftRecursive;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiUGFydHMiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJzcGVjaWFsU3ltYm9scyIsIlJ1bGUiLCJwYXJ0cyIsImFsbEJ1dEZpcnN0UGFydHMiLCJzbGljZSIsInByb2R1Y3Rpb25OYW1lIiwibGVmdFJlY3Vyc2l2ZSIsImZpcnN0UGFydCIsImZpcnN0IiwicHJvZHVjdGlvbk5hbWVQYXJ0IiwiaXNMZWZ0UmVjdXJzaXZlIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0IiwicGFydFN0cmluZyIsInRvU3RyaW5nIiwic3RyaW5nIiwiY29udGV4dCIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwic2F2ZWRJbmRleCIsImV2ZXJ5UGFydFBhcnNlZCIsImV2ZXJ5IiwicGFydE5vZGVPck5vZGVzIiwicGFyc2UiLCJwYXJ0UGFyc2VkIiwiY29uY2F0IiwiYmFja3RyYWNrIiwic3ltYm9sU2VxdWVuY2UiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJyZWR1Y2VTeW1ib2xzIiwic3ltYm9sIiwiTk9fV0hJVEVTUEFDRSIsInBhcnRGcm9tU3ltYm9sIiwicHVzaCIsInJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwidW5kZWZpbmVkIiwic29tZSIsIlBhcnQiLCJmcm9tU3ltYm9sIiwicGFyc2VkIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxRQUFRRCxRQUFRLFNBQVIsQ0FBZDtBQUFBLElBQ01FLHFCQUFxQkYsUUFBUSx1QkFBUixDQUQzQjs7SUFHUUcsYyxHQUFtQkosTSxDQUFuQkksYzs7SUFFRkMsSTtBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7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QUVBLFdBQU82QixNQUFQO0FBQ0QsR0FORDs7QUFRQSxTQUFPN0IsSUFBUDtBQUNEOztBQUVELFNBQVNMLEtBQVQsQ0FBZW1DLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgUGFydHMgPSByZXF1aXJlKCcuL3BhcnRzJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY29uc3QgeyBzcGVjaWFsU3ltYm9scyB9ID0gbGV4ZXJzO1xuXG5jbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuICBcbiAgZ2V0QWxsQnV0Rmlyc3RQYXJ0cygpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdFBhcnRzID0gdGhpcy5wYXJ0cy5zbGljZSgxKTtcblxuICAgIHJldHVybiBhbGxCdXRGaXJzdFBhcnRzO1xuICB9XG4gIFxuICBpc0xlZnRSZWN1cnNpdmUocHJvZHVjdGlvbk5hbWUpIHtcbiAgICBsZXQgbGVmdFJlY3Vyc2l2ZSA9IGZhbHNlO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHRoaXMucGFydHMpO1xuICAgIFxuICAgIGlmIChmaXJzdFBhcnQgaW5zdGFuY2VvZiBQcm9kdWN0aW9uTmFtZVBhcnQpIHtcbiAgICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lUGFydCA9IGZpcnN0UGFydDsgLy8vXG5cbiAgICAgIGxlZnRSZWN1cnNpdmUgPSBwcm9kdWN0aW9uTmFtZVBhcnQuaXNMZWZ0UmVjdXJzaXZlKHByb2R1Y3Rpb25OYW1lKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmU7XG4gIH1cbiAgXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoZnVuY3Rpb24ocGFydHNTdHJpbmcsIHBhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHN0cmluZyA9IHBhcnRzU3RyaW5nOyAvLy9cbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICAgIGV2ZXJ5UGFydFBhcnNlZCA9IHRoaXMucGFydHMuZXZlcnkoZnVuY3Rpb24ocGFydCkge1xuICAgICAgICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgICAgICAgICAgcGFydFBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuICBcbiAgICAgICAgICAgIGlmIChwYXJ0UGFyc2VkKSB7XG4gICAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHBhcnROb2RlT3JOb2Rlcyk7XG4gIFxuICAgICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICByZXR1cm4gcGFydFBhcnNlZDtcbiAgICAgICAgICB9KTtcblxuICAgIGlmICghZXZlcnlQYXJ0UGFyc2VkKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcblxuICAgICAgbm9kZXMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sU2VxdWVuY2Uoc3ltYm9sU2VxdWVuY2UsIHNpZ25pZmljYW50VG9rZW5UeXBlcykge1xuICAgIGxldCBub1doaXRlc3BhY2UgPSBmYWxzZTtcbiAgICBcbiAgICBjb25zdCBwYXJ0cyA9IHN5bWJvbFNlcXVlbmNlLnJlZHVjZVN5bWJvbHMoZnVuY3Rpb24ocGFydHMsIHN5bWJvbCkge1xuICAgICAgICAgICAgaWYgKHN5bWJvbCA9PT0gc3BlY2lhbFN5bWJvbHMuTk9fV0hJVEVTUEFDRSkge1xuICAgICAgICAgICAgICBub1doaXRlc3BhY2UgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgcGFydCA9IHBhcnRGcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpO1xuICBcbiAgICAgICAgICAgICAgcGFydHMucHVzaChwYXJ0KTtcbiAgXG4gICAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0cztcbiAgICAgICAgICB9LCBbXSksXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHBhcnRzKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcblxuZnVuY3Rpb24gcGFydEZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICBsZXQgcGFydCA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgUGFydHMuc29tZShmdW5jdGlvbihQYXJ0KSB7XG4gICAgcGFydCA9IFBhcnQuZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKTtcblxuICAgIGNvbnN0IHBhcnNlZCA9IChwYXJ0ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==