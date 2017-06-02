'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = require('./context'),
    RightRecursiveProduction = require('./production/rightRecursive'),
    NonLeftRecursiveProduction = require('./production/nonLeftRecursive');

var CommonParser = function () {
  function CommonParser(productions) {
    _classCallCheck(this, CommonParser);

    this.productions = eliminateLeftRecursiveProductions(productions); ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwiUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uIiwiTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24iLCJDb21tb25QYXJzZXIiLCJwcm9kdWN0aW9ucyIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9ucyIsImxpbmVzIiwicHJvZHVjdGlvbiIsInRva2VucyIsInRva2Vuc0Zyb21MaW5lcyIsIm5vZGUiLCJwYXJzZSIsInByb2R1Y3Rpb25zTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RQcm9kdWN0aW9uIiwiZmlyc3QiLCJjb250ZXh0Iiwibm9XaGl0ZXNwYWNlIiwibm9kZU9yTm9kZXMiLCJBcnJheSIsInByb2R1Y3Rpb25OYW1lIiwibmFtZSIsImluZGV4IiwiaW5kZXhPZlByb2R1Y3Rpb25CeU5hbWUiLCJmb3VuZEluZGV4Iiwic29tZSIsImdldE5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVkdWNlIiwicHJvZHVjdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0xlZnRSZWN1cnNpdmUiLCJub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiIsImZyb21Qcm9kdWN0aW9uIiwicmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uIiwicHVzaCIsImxpbmUiLCJsaW5lVG9rZW5zIiwiZ2V0VG9rZW5zIiwiY29uY2F0IiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQywyQkFBMkJELFFBQVEsNkJBQVIsQ0FEakM7QUFBQSxJQUVNRSw2QkFBNkJGLFFBQVEsK0JBQVIsQ0FGbkM7O0lBSU1HLFk7QUFDSix3QkFBWUMsV0FBWixFQUF5QjtBQUFBOztBQUN2QixTQUFLQSxXQUFMLEdBQW1CQyxrQ0FBa0NELFdBQWxDLENBQW5CLENBRHVCLENBQzRDO0FBQ3BFOzs7O3FDQUVnQjtBQUNm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Q0FBYSxVQUFTckIsTUFBVCxFQUFpQjRCLElBQWpCLEVBQXVCO0FBQ2xELFFBQU1DLGFBQWFELEtBQUtFLFNBQUwsRUFBbkI7O0FBRUM5QixhQUFTQSxPQUFPK0IsTUFBUCxDQUFjRixVQUFkLENBQVQ7O0FBRUEsV0FBTzdCLE1BQVA7QUFDRCxHQU5jLEVBTVosRUFOWSxDQUFmOztBQVFBLFNBQU9BLE1BQVA7QUFDRDs7QUFFRCxTQUFTTyxLQUFULENBQWV5QixLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0JyksXG4gICAgICBSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcmlnaHRSZWN1cnNpdmUnKSxcbiAgICAgIE5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL25vbkxlZnRSZWN1cnNpdmUnKTtcblxuY2xhc3MgQ29tbW9uUGFyc2VyIHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbnMpIHtcbiAgICB0aGlzLnByb2R1Y3Rpb25zID0gZWxpbWluYXRlTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zKHByb2R1Y3Rpb25zKTsgLy8vXG4gIH1cblxuICBnZXRQcm9kdWN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0aW9ucztcbiAgfVxuICBcbiAgbm9kZUZyb21MaW5lcyhsaW5lcywgcHJvZHVjdGlvbiA9IG51bGwpIHtcbiAgICBjb25zdCB0b2tlbnMgPSB0b2tlbnNGcm9tTGluZXMobGluZXMpLFxuICAgICAgICAgIG5vZGUgPSB0aGlzLnBhcnNlKHRva2VucywgcHJvZHVjdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwYXJzZSh0b2tlbnMsIHByb2R1Y3Rpb24pIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBpZiAocHJvZHVjdGlvbiA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvZHVjdGlvbnNMZW5ndGggPSB0aGlzLnByb2R1Y3Rpb25zLmxlbmd0aDtcblxuICAgICAgaWYgKHByb2R1Y3Rpb25zTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBmaXJzdFByb2R1Y3Rpb24gPSBmaXJzdCh0aGlzLnByb2R1Y3Rpb25zKTtcblxuICAgICAgICBwcm9kdWN0aW9uID0gZmlyc3RQcm9kdWN0aW9uOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBDb250ZXh0KHRva2VucywgdGhpcy5wcm9kdWN0aW9ucyksXG4gICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICAgIG5vZGVPck5vZGVzID0gcHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpO1xuXG4gICAgICBpZiAobm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgbm9kZSA9IChub2RlT3JOb2RlcyBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgIGZpcnN0KG5vZGVPck5vZGVzKSA6XG4gICAgICAgICAgICAgICAgICAgbm9kZU9yTm9kZXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBmaW5kUHJvZHVjdGlvbihwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBwcm9kdWN0aW9uTmFtZSwgIC8vL1xuICAgICAgICAgIGluZGV4ID0gdGhpcy5pbmRleE9mUHJvZHVjdGlvbkJ5TmFtZShuYW1lKSxcbiAgICAgICAgICBwcm9kdWN0aW9uID0gKGluZGV4ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0aW9uc1tpbmRleF0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG5cbiAgaW5kZXhPZlByb2R1Y3Rpb25CeU5hbWUobmFtZSkge1xuICAgIGxldCBpbmRleCxcbiAgICAgICAgZm91bmRJbmRleCA9IG51bGw7XG5cbiAgICB0aGlzLnByb2R1Y3Rpb25zLnNvbWUoZnVuY3Rpb24ocHJvZHVjdGlvbiwgaW5kZXgpIHtcbiAgICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChwcm9kdWN0aW9uTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICBmb3VuZEluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpbmRleCA9IGZvdW5kSW5kZXg7IC8vL1xuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uUGFyc2VyO1xuXG5mdW5jdGlvbiBlbGltaW5hdGVMZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMocHJvZHVjdGlvbnMpIHtcbiAgcHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24ocHJvZHVjdGlvbnMsIHByb2R1Y3Rpb24pIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uTGVmdFJlY3Vyc2l2ZSA9IHByb2R1Y3Rpb24uaXNMZWZ0UmVjdXJzaXZlKCk7XG5cbiAgICBpZiAocHJvZHVjdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uID0gTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24uZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbiksXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSBSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24uZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbik7XG5cbiAgICAgIHByb2R1Y3Rpb25zLnB1c2gobm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24pOyAgICAgIFxuICAgICAgcHJvZHVjdGlvbnMucHVzaChyaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9kdWN0aW9ucy5wdXNoKHByb2R1Y3Rpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9kdWN0aW9ucztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBwcm9kdWN0aW9ucztcbn1cblxuZnVuY3Rpb24gdG9rZW5zRnJvbUxpbmVzKGxpbmVzKSB7XG4gIGNvbnN0IHRva2VucyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIGxpbmUpIHtcbiAgIGNvbnN0IGxpbmVUb2tlbnMgPSBsaW5lLmdldFRva2VucygpO1xuXG4gICAgdG9rZW5zID0gdG9rZW5zLmNvbmNhdChsaW5lVG9rZW5zKTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==