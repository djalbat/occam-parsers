'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = require('./context'),
    RightRecursiveProduction = require('./production/rightRecursive'),
    NonLeftRecursiveProduction = require('./production/nonLeftRecursive'),
    NonImplicitlyLeftRecursiveProduction = require('./production/nonImplicitlyLeftRecursive');

var CommonParser = function () {
  function CommonParser(productions) {
    _classCallCheck(this, CommonParser);

    productions = eliminateLeftRecursiveProductions(productions); ///

    this.productions = productions;
  }

  _createClass(CommonParser, [{
    key: 'getProductions',
    value: function getProductions() {
      return this.productions;
    }
  }, {
    key: 'nodeFromLines',
    value: function nodeFromLines(lines) {
      var production = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var tokens = tokensFromLines(lines),
          node = this.parse(tokens, production);

      return node;
    }
  }, {
    key: 'parse',
    value: function parse(tokens, production) {
      var node = null;

      if (production === null) {
        var productionsLength = this.productions.length;

        if (productionsLength > 0) {
          var firstProduction = first(this.productions);

          production = firstProduction; ///
        }
      }

      if (production !== null) {
        var context = new Context(tokens, this.productions),
            noWhitespace = false,
            nodeOrNodes = production.parse(context, noWhitespace);

        if (nodeOrNodes !== null) {
          node = nodeOrNodes instanceof Array ? first(nodeOrNodes) : nodeOrNodes;
        }
      }

      return node;
    }
  }, {
    key: 'findProduction',
    value: function findProduction(productionName) {
      var name = productionName,
          ///
      index = this.indexOfProductionByName(name),
          production = index !== null ? this.productions[index] : null;

      return production;
    }
  }, {
    key: 'indexOfProductionByName',
    value: function indexOfProductionByName(name) {
      var index = void 0,
          foundIndex = null;

      this.productions.some(function (production, index) {
        var productionName = production.getName();

        if (productionName === name) {
          foundIndex = index;

          return true;
        } else {
          return false;
        }
      });

      index = foundIndex; ///

      return index;
    }
  }]);

  return CommonParser;
}();

module.exports = CommonParser;

function eliminateLeftRecursiveProductions(productions) {
  var nonLeftRecursiveProductions = [],
      rightRecursiveProductions = [];

  productions.forEach(function (production, index) {
    var begin = 0,
        end = index,
        ///
    previousNonLeftRecursiveProductions = nonLeftRecursiveProductions.slice(begin, end),
        previousProductions = previousNonLeftRecursiveProductions,
        ///
    productionImplicitlyLeftRecursive = production.isImplicitlyLeftRecursive(previousProductions);

    if (productionImplicitlyLeftRecursive) {
      var nonImplicitlyLeftRecursiveProduction = NonImplicitlyLeftRecursiveProduction.fromProductionAndPreviousProductions(production, previousProductions);

      production = nonImplicitlyLeftRecursiveProduction; ///
    }

    var productionLeftRecursive = production.isLeftRecursive();

    if (productionLeftRecursive) {
      var nonLeftRecursiveProduction = NonLeftRecursiveProduction.fromProduction(production),
          rightRecursiveProduction = RightRecursiveProduction.fromProduction(production);

      nonLeftRecursiveProductions.push(nonLeftRecursiveProduction);

      rightRecursiveProductions.push(rightRecursiveProduction);
    } else {
      var _nonLeftRecursiveProduction = production; ///

      nonLeftRecursiveProductions.push(_nonLeftRecursiveProduction);
    }
  });

  productions = [].concat(nonLeftRecursiveProductions).concat(rightRecursiveProductions);

  return productions;
}

function tokensFromLines(lines) {
  var tokens = lines.reduce(function (tokens, line) {
    var lineTokens = line.getTokens();

    tokens = tokens.concat(lineTokens);

    return tokens;
  }, []);

  return tokens;
}

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwiUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uIiwiTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJOb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJDb21tb25QYXJzZXIiLCJwcm9kdWN0aW9ucyIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9ucyIsImxpbmVzIiwicHJvZHVjdGlvbiIsInRva2VucyIsInRva2Vuc0Zyb21MaW5lcyIsIm5vZGUiLCJwYXJzZSIsInByb2R1Y3Rpb25zTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RQcm9kdWN0aW9uIiwiZmlyc3QiLCJjb250ZXh0Iiwibm9XaGl0ZXNwYWNlIiwibm9kZU9yTm9kZXMiLCJBcnJheSIsInByb2R1Y3Rpb25OYW1lIiwibmFtZSIsImluZGV4IiwiaW5kZXhPZlByb2R1Y3Rpb25CeU5hbWUiLCJmb3VuZEluZGV4Iiwic29tZSIsImdldE5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIiwibm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zIiwicmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9ucyIsImZvckVhY2giLCJiZWdpbiIsImVuZCIsInByZXZpb3VzTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zIiwic2xpY2UiLCJwcmV2aW91c1Byb2R1Y3Rpb25zIiwicHJvZHVjdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlIiwiaXNJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSIsIm5vbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiIsImZyb21Qcm9kdWN0aW9uQW5kUHJldmlvdXNQcm9kdWN0aW9ucyIsInByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlIiwiaXNMZWZ0UmVjdXJzaXZlIiwibm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJmcm9tUHJvZHVjdGlvbiIsInJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbiIsInB1c2giLCJjb25jYXQiLCJyZWR1Y2UiLCJsaW5lIiwibGluZVRva2VucyIsImdldFRva2VucyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsMkJBQTJCRCxRQUFRLDZCQUFSLENBRGpDO0FBQUEsSUFFTUUsNkJBQTZCRixRQUFRLCtCQUFSLENBRm5DO0FBQUEsSUFHTUcsdUNBQXVDSCxRQUFRLHlDQUFSLENBSDdDOztJQUtNSSxZO0FBQ0osd0JBQVlDLFdBQVosRUFBeUI7QUFBQTs7QUFDdkJBLGtCQUFjQyxrQ0FBa0NELFdBQWxDLENBQWQsQ0FEdUIsQ0FDdUM7O0FBRTlELFNBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7Ozs7cUNBRWdCO0FBQ2YsYUFBTyxLQUFLQSxXQUFaO0FBQ0Q7OztrQ0FFYUUsSyxFQUEwQjtBQUFBLFVBQW5CQyxVQUFtQix1RUFBTixJQUFNOztBQUN0QyxVQUFNQyxTQUFTQyxnQkFBZ0JILEtBQWhCLENBQWY7QUFBQSxVQUNNSSxPQUFPLEtBQUtDLEtBQUwsQ0FBV0gsTUFBWCxFQUFtQkQsVUFBbkIsQ0FEYjs7QUFHQSxhQUFPRyxJQUFQO0FBQ0Q7OzswQkFFS0YsTSxFQUFRRCxVLEVBQVk7QUFDeEIsVUFBSUcsT0FBTyxJQUFYOztBQUVBLFVBQUlILGVBQWUsSUFBbkIsRUFBeUI7QUFDdkIsWUFBTUssb0JBQW9CLEtBQUtSLFdBQUwsQ0FBaUJTLE1BQTNDOztBQUVBLFlBQUlELG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QixjQUFNRSxrQkFBa0JDLE1BQU0sS0FBS1gsV0FBWCxDQUF4Qjs7QUFFQUcsdUJBQWFPLGVBQWIsQ0FIeUIsQ0FHSztBQUMvQjtBQUNGOztBQUVELFVBQUlQLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkIsWUFBTVMsVUFBVSxJQUFJbEIsT0FBSixDQUFZVSxNQUFaLEVBQW9CLEtBQUtKLFdBQXpCLENBQWhCO0FBQUEs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TUMsYUFBYUQsS0FBS0UsU0FBTCxFQUFuQjs7QUFFQzNDLGFBQVNBLE9BQU91QyxNQUFQLENBQWNHLFVBQWQsQ0FBVDs7QUFFQSxXQUFPMUMsTUFBUDtBQUNELEdBTmMsRUFNWixFQU5ZLENBQWY7O0FBUUEsU0FBT0EsTUFBUDtBQUNEOztBQUVELFNBQVNPLEtBQVQsQ0FBZXFDLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKSxcbiAgICAgIFJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9yaWdodFJlY3Vyc2l2ZScpLFxuICAgICAgTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vbm9uTGVmdFJlY3Vyc2l2ZScpLFxuICAgICAgTm9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL25vbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlJyk7XG5cbmNsYXNzIENvbW1vblBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25zKSB7XG4gICAgcHJvZHVjdGlvbnMgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMocHJvZHVjdGlvbnMpOyAvLy9cblxuICAgIHRoaXMucHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucztcbiAgfVxuXG4gIGdldFByb2R1Y3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3Rpb25zO1xuICB9XG4gIFxuICBub2RlRnJvbUxpbmVzKGxpbmVzLCBwcm9kdWN0aW9uID0gbnVsbCkge1xuICAgIGNvbnN0IHRva2VucyA9IHRva2Vuc0Zyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgbm9kZSA9IHRoaXMucGFyc2UodG9rZW5zLCBwcm9kdWN0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHBhcnNlKHRva2VucywgcHJvZHVjdGlvbikge1xuICAgIGxldCBub2RlID0gbnVsbDtcblxuICAgIGlmIChwcm9kdWN0aW9uID09PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9kdWN0aW9uc0xlbmd0aCA9IHRoaXMucHJvZHVjdGlvbnMubGVuZ3RoO1xuXG4gICAgICBpZiAocHJvZHVjdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0UHJvZHVjdGlvbiA9IGZpcnN0KHRoaXMucHJvZHVjdGlvbnMpO1xuXG4gICAgICAgIHByb2R1Y3Rpb24gPSBmaXJzdFByb2R1Y3Rpb247IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gbmV3IENvbnRleHQodG9rZW5zLCB0aGlzLnByb2R1Y3Rpb25zKSxcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgICAgbm9kZU9yTm9kZXMgPSBwcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGlmIChub2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICBub2RlID0gKG5vZGVPck5vZGVzIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgZmlyc3Qobm9kZU9yTm9kZXMpIDpcbiAgICAgICAgICAgICAgICAgICBub2RlT3JOb2RlcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGZpbmRQcm9kdWN0aW9uKHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHByb2R1Y3Rpb25OYW1lLCAgLy8vXG4gICAgICAgICAgaW5kZXggPSB0aGlzLmluZGV4T2ZQcm9kdWN0aW9uQnlOYW1lKG5hbWUpLFxuICAgICAgICAgIHByb2R1Y3Rpb24gPSAoaW5kZXggIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3Rpb25zW2luZGV4XSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cblxuICBpbmRleE9mUHJvZHVjdGlvbkJ5TmFtZShuYW1lKSB7XG4gICAgbGV0IGluZGV4LFxuICAgICAgICBmb3VuZEluZGV4ID0gbnVsbDtcblxuICAgIHRoaXMucHJvZHVjdGlvbnMuc29tZShmdW5jdGlvbihwcm9kdWN0aW9uLCBpbmRleCkge1xuICAgICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKTtcblxuICAgICAgaWYgKHByb2R1Y3Rpb25OYW1lID09PSBuYW1lKSB7XG4gICAgICAgIGZvdW5kSW5kZXggPSBpbmRleDtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGluZGV4ID0gZm91bmRJbmRleDsgLy8vXG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25QYXJzZXI7XG5cbmZ1bmN0aW9uIGVsaW1pbmF0ZUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9ucyhwcm9kdWN0aW9ucykge1xuICBjb25zdCBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMgPSBbXSxcbiAgICAgICAgcmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9ucyA9IFtdO1xuXG4gIHByb2R1Y3Rpb25zLmZvckVhY2goZnVuY3Rpb24ocHJvZHVjdGlvbiwgaW5kZXgpIHtcbiAgICBjb25zdCBiZWdpbiA9IDAsXG4gICAgICAgICAgZW5kID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBwcmV2aW91c05vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9ucyA9IG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9ucy5zbGljZShiZWdpbiwgZW5kKSxcbiAgICAgICAgICBwcmV2aW91c1Byb2R1Y3Rpb25zID0gcHJldmlvdXNOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMsICAvLy9cbiAgICAgICAgICBwcm9kdWN0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUgPSBwcm9kdWN0aW9uLmlzSW1wbGljaXRseUxlZnRSZWN1cnNpdmUocHJldmlvdXNQcm9kdWN0aW9ucyk7XG4gICAgXG4gICAgaWYgKHByb2R1Y3Rpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3Qgbm9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uID0gTm9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uLmZyb21Qcm9kdWN0aW9uQW5kUHJldmlvdXNQcm9kdWN0aW9ucyhwcm9kdWN0aW9uLCBwcmV2aW91c1Byb2R1Y3Rpb25zKTtcbiAgICAgIFxuICAgICAgcHJvZHVjdGlvbiA9IG5vbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbjsgIC8vL1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBwcm9kdWN0aW9uTGVmdFJlY3Vyc2l2ZSA9IHByb2R1Y3Rpb24uaXNMZWZ0UmVjdXJzaXZlKCk7XG5cbiAgICBpZiAocHJvZHVjdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uID0gTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24uZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbiksXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSBSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24uZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbik7XG5cbiAgICAgIG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9ucy5wdXNoKG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uKTtcblxuICAgICAgcmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9ucy5wdXNoKHJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uID0gcHJvZHVjdGlvbjsgIC8vL1xuXG4gICAgICBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMucHVzaChub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbik7XG4gICAgfVxuICB9KTtcblxuICBwcm9kdWN0aW9ucyA9IFtdLmNvbmNhdChub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMpLmNvbmNhdChyaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb25zKTtcblxuICByZXR1cm4gcHJvZHVjdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHRva2Vuc0Zyb21MaW5lcyhsaW5lcykge1xuICBjb25zdCB0b2tlbnMgPSBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCBsaW5lKSB7XG4gICBjb25zdCBsaW5lVG9rZW5zID0gbGluZS5nZXRUb2tlbnMoKTtcblxuICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQobGluZVRva2Vucyk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=