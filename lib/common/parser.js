'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = require('./context'),
    RightRecursiveProduction = require('./production/rightRecursive'),
    NonLeftRecursiveProduction = require('./production/nonLeftRecursive');

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
  productions = productions.reduce(function (productions, production) {
    var productionLeftRecursive = production.isLeftRecursive();

    if (productionLeftRecursive) {
      var nonLeftRecursiveProduction = NonLeftRecursiveProduction.fromProduction(production),
          rightRecursiveProduction = RightRecursiveProduction.fromProduction(production);

      productions.push(nonLeftRecursiveProduction);
      productions.push(rightRecursiveProduction);
    } else {
      productions.push(production);
    }

    return productions;
  }, []);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwiUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uIiwiTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJDb21tb25QYXJzZXIiLCJwcm9kdWN0aW9ucyIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9ucyIsImxpbmVzIiwicHJvZHVjdGlvbiIsInRva2VucyIsInRva2Vuc0Zyb21MaW5lcyIsIm5vZGUiLCJwYXJzZSIsInByb2R1Y3Rpb25zTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RQcm9kdWN0aW9uIiwiZmlyc3QiLCJjb250ZXh0Iiwibm9XaGl0ZXNwYWNlIiwibm9kZU9yTm9kZXMiLCJBcnJheSIsInByb2R1Y3Rpb25OYW1lIiwibmFtZSIsImluZGV4IiwiaW5kZXhPZlByb2R1Y3Rpb25CeU5hbWUiLCJmb3VuZEluZGV4Iiwic29tZSIsImdldE5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVkdWNlIiwicHJvZHVjdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0xlZnRSZWN1cnNpdmUiLCJub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiIsImZyb21Qcm9kdWN0aW9uIiwicmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uIiwicHVzaCIsImxpbmUiLCJsaW5lVG9rZW5zIiwiZ2V0VG9rZW5zIiwiY29uY2F0IiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQywyQkFBMkJELFFBQVEsNkJBQVIsQ0FEakM7QUFBQSxJQUVNRSw2QkFBNkJGLFFBQVEsK0JBQVIsQ0FGbkM7O0lBSU1HLFk7QUFDSix3QkFBWUMsV0FBWixFQUF5QjtBQUFBOztBQUN2QkEsa0JBQWNDLGtDQUFrQ0QsV0FBbEMsQ0FBZCxDQUR1QixDQUN1Qzs7QUFFOUQsU0FBS0EsV0FBTCxHQUFtQkEsV0FBbkI7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LFNBQVNGLE1BQU11QixNQUFOLENBQWEsVUFBU3JCLE1BQVQsRUFBaUI0QixJQUFqQixFQUF1QjtBQUNsRCxRQUFNQyxhQUFhRCxLQUFLRSxTQUFMLEVBQW5COztBQUVDOUIsYUFBU0EsT0FBTytCLE1BQVAsQ0FBY0YsVUFBZCxDQUFUOztBQUVBLFdBQU83QixNQUFQO0FBQ0QsR0FOYyxFQU1aLEVBTlksQ0FBZjs7QUFRQSxTQUFPQSxNQUFQO0FBQ0Q7O0FBRUQsU0FBU08sS0FBVCxDQUFleUIsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpLFxuICAgICAgUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3JpZ2h0UmVjdXJzaXZlJyksXG4gICAgICBOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9ub25MZWZ0UmVjdXJzaXZlJyk7XG5cbmNsYXNzIENvbW1vblBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25zKSB7XG4gICAgcHJvZHVjdGlvbnMgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMocHJvZHVjdGlvbnMpOyAvLy9cblxuICAgIHRoaXMucHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucztcbiAgfVxuXG4gIGdldFByb2R1Y3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3Rpb25zO1xuICB9XG4gIFxuICBub2RlRnJvbUxpbmVzKGxpbmVzLCBwcm9kdWN0aW9uID0gbnVsbCkge1xuICAgIGNvbnN0IHRva2VucyA9IHRva2Vuc0Zyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgbm9kZSA9IHRoaXMucGFyc2UodG9rZW5zLCBwcm9kdWN0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHBhcnNlKHRva2VucywgcHJvZHVjdGlvbikge1xuICAgIGxldCBub2RlID0gbnVsbDtcblxuICAgIGlmIChwcm9kdWN0aW9uID09PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9kdWN0aW9uc0xlbmd0aCA9IHRoaXMucHJvZHVjdGlvbnMubGVuZ3RoO1xuXG4gICAgICBpZiAocHJvZHVjdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0UHJvZHVjdGlvbiA9IGZpcnN0KHRoaXMucHJvZHVjdGlvbnMpO1xuXG4gICAgICAgIHByb2R1Y3Rpb24gPSBmaXJzdFByb2R1Y3Rpb247IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gbmV3IENvbnRleHQodG9rZW5zLCB0aGlzLnByb2R1Y3Rpb25zKSxcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgICAgbm9kZU9yTm9kZXMgPSBwcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGlmIChub2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICBub2RlID0gKG5vZGVPck5vZGVzIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgZmlyc3Qobm9kZU9yTm9kZXMpIDpcbiAgICAgICAgICAgICAgICAgICBub2RlT3JOb2RlcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGZpbmRQcm9kdWN0aW9uKHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHByb2R1Y3Rpb25OYW1lLCAgLy8vXG4gICAgICAgICAgaW5kZXggPSB0aGlzLmluZGV4T2ZQcm9kdWN0aW9uQnlOYW1lKG5hbWUpLFxuICAgICAgICAgIHByb2R1Y3Rpb24gPSAoaW5kZXggIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3Rpb25zW2luZGV4XSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cblxuICBpbmRleE9mUHJvZHVjdGlvbkJ5TmFtZShuYW1lKSB7XG4gICAgbGV0IGluZGV4LFxuICAgICAgICBmb3VuZEluZGV4ID0gbnVsbDtcblxuICAgIHRoaXMucHJvZHVjdGlvbnMuc29tZShmdW5jdGlvbihwcm9kdWN0aW9uLCBpbmRleCkge1xuICAgICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKTtcblxuICAgICAgaWYgKHByb2R1Y3Rpb25OYW1lID09PSBuYW1lKSB7XG4gICAgICAgIGZvdW5kSW5kZXggPSBpbmRleDtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGluZGV4ID0gZm91bmRJbmRleDsgLy8vXG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25QYXJzZXI7XG5cbmZ1bmN0aW9uIGVsaW1pbmF0ZUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9ucyhwcm9kdWN0aW9ucykge1xuICBwcm9kdWN0aW9ucyA9IHByb2R1Y3Rpb25zLnJlZHVjZShmdW5jdGlvbihwcm9kdWN0aW9ucywgcHJvZHVjdGlvbikge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlID0gcHJvZHVjdGlvbi5pc0xlZnRSZWN1cnNpdmUoKTtcblxuICAgIGlmIChwcm9kdWN0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3Qgbm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSBOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbi5mcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSxcbiAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IFJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbi5mcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKTtcblxuICAgICAgcHJvZHVjdGlvbnMucHVzaChub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbik7ICAgICAgXG4gICAgICBwcm9kdWN0aW9ucy5wdXNoKHJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2R1Y3Rpb25zLnB1c2gocHJvZHVjdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25zO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHByb2R1Y3Rpb25zO1xufVxuXG5mdW5jdGlvbiB0b2tlbnNGcm9tTGluZXMobGluZXMpIHtcbiAgY29uc3QgdG9rZW5zID0gbGluZXMucmVkdWNlKGZ1bmN0aW9uKHRva2VucywgbGluZSkge1xuICAgY29uc3QgbGluZVRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XG5cbiAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KGxpbmVUb2tlbnMpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfSwgW10pO1xuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19