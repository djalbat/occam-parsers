'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = require('./context');

var CommonParser = function () {
  function CommonParser(productions) {
    _classCallCheck(this, CommonParser);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwiQ29tbW9uUGFyc2VyIiwicHJvZHVjdGlvbnMiLCJsaW5lcyIsInByb2R1Y3Rpb24iLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tTGluZXMiLCJub2RlIiwicGFyc2UiLCJwcm9kdWN0aW9uc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0UHJvZHVjdGlvbiIsImZpcnN0IiwiY29udGV4dCIsIm5vV2hpdGVzcGFjZSIsIm5vZGVPck5vZGVzIiwiQXJyYXkiLCJwcm9kdWN0aW9uTmFtZSIsIm5hbWUiLCJpbmRleCIsImluZGV4T2ZQcm9kdWN0aW9uQnlOYW1lIiwiZm91bmRJbmRleCIsInNvbWUiLCJnZXROYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlZHVjZSIsImxpbmUiLCJsaW5lVG9rZW5zIiwiZ2V0VG9rZW5zIiwiY29uY2F0IiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7O0lBRU1DLFk7QUFDSix3QkFBWUMsV0FBWixFQUF5QjtBQUFBOztBQUN2QixTQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0EsV0FBWjtBQUNEOzs7a0NBRWFDLEssRUFBMEI7QUFBQSxVQUFuQkMsVUFBbUIsdUVBQU4sSUFBTTs7QUFDdEMsVUFBTUMsU0FBU0MsZ0JBQWdCSCxLQUFoQixDQUFmO0FBQUEsVUFDTUksT0FBTyxLQUFLQyxLQUFMLENBQVdILE1BQVgsRUFBbUJELFVBQW5CLENBRGI7O0FBR0EsYUFBT0csSUFBUDtBQUNEOzs7MEJBRUtGLE0sRUFBUUQsVSxFQUFZO0FBQ3hCLFVBQUlHLE9BQU8sSUFBWDs7QUFFQSxVQUFJSCxlQUFlLElBQW5CLEVBQXlCO0FBQ3ZCLFlBQU1LLG9CQUFvQixLQUFLUCxXQUFMLENBQWlCUSxNQUEzQzs7QUFFQSxZQUFJRCxvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekIsY0FBTUUsa0JBQWtCQyxNQUFNLEtBQUtWLFdBQVgsQ0FBeEI7O0FBRUFFLHVCQUFhTyxlQUFiLENBSHlCLENBR0s7QUFDL0I7QUFDRjs7QUFFRCxVQUFJUCxlQUFlLElBQW5CLEVBQXlCO0FBQ3ZCLFlBQU1TLFVBQVUsSUFBSWQsT0FBSixDQUFZTSxNQUFaLEVBQW9CLEtBQUtILFdBQXpCLENBQWhCO0FBQUEsWUFDTVksZUFBZSxLQURyQjtBQUFBLFlBRU1DLGNBQWNYLFdBQVdJLEtBQVgsQ0FBaUJLLE9BQWpCLEVBQTBCQyxZQUExQixDQUZwQjs7QUFJQSxZQUFJQyxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDeEJSLGlCQUFRUSx1QkFBdUJDLEtBQXhCLEdBQ0VKLE1BQU1HLFdBQU4sQ0FERixHQUVJQSxXQUZYO0FBR0Q7QUFDRjs7QUFFRCxhQUFPUixJQUFQO0FBQ0Q7OzttQ0FFY1UsYyxFQUFnQjtBQUM3QixVQUFNQyxPQUFPRCxjQUFiO0FBQUEsVUFBOEI7QUFDeEJFLGNBQVEsS0FBS0MsdUJBQUwsQ0FBNkJGLElBQTdCLENBRGQ7QUFBQSxVQUVNZCxhQUFjZSxVQUFVLElBQVgsR0FDRSxLQUFLakIsV0FBTCxDQUFpQmlCLEtBQWpCLENBREYsR0FFSSxJQUp2Qjs7QUFNQSxhQUFPZixVQUFQO0FBQ0Q7Ozs0Q0FFdUJjLEksRUFBTTtBQUM1QixVQUFJQyxjQUFKO0FBQUEsVUFDSUUsYUFBYSxJQURqQjs7QUFHQSxXQUFLbkIsV0FBTCxDQUFpQm9CLElBQWpCLENBQXNCLFVBQVNsQixVQUFULEVBQXFCZSxLQUFyQixFQUE0QjtBQUNoRCxZQUFNRixpQkFBaUJiLFdBQVdtQixPQUFYLEVBQXZCOztBQUVBLFlBQUlOLG1CQUFtQkMsSUFBdkIsRUFBNkI7QUFDM0JHLHVCQUFhRixLQUFiOztBQUVBLGlCQUFPLElBQVA7QUFDRCxTQUpELE1BSU87QUFDTCxpQkFBTyxLQUFQO0FBQ0Q7QUFDRixPQVZEOztBQVlBQSxjQUFRRSxVQUFSLENBaEI0QixDQWdCUjs7QUFFcEIsYUFBT0YsS0FBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQnhCLFlBQWpCOztBQUVBLFNBQVNLLGVBQVQsQ0FBeUJILEtBQXpCLEVBQWdDO0FBQzlCLE1BQU1FLFNBQVNGLE1BQU11QixNQUFOLENBQWEsVUFBU3JCLE1BQVQsRUFBaUJzQixJQUFqQixFQUF1QjtBQUNsRCxRQUFNQyxhQUFhRCxLQUFLRSxTQUFMLEVBQW5COztBQUVDeEIsYUFBU0EsT0FBT3lCLE1BQVAsQ0FBY0YsVUFBZCxDQUFUOztBQUVBLFdBQU92QixNQUFQO0FBQ0QsR0FOYyxFQU1aLEVBTlksQ0FBZjs7QUFRQSxTQUFPQSxNQUFQO0FBQ0Q7O0FBRUQsU0FBU08sS0FBVCxDQUFlbUIsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpO1xuXG5jbGFzcyBDb21tb25QYXJzZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9ucykge1xuICAgIHRoaXMucHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucztcbiAgfVxuXG4gIGdldFByb2R1Y3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3Rpb25zO1xuICB9XG4gIFxuICBub2RlRnJvbUxpbmVzKGxpbmVzLCBwcm9kdWN0aW9uID0gbnVsbCkge1xuICAgIGNvbnN0IHRva2VucyA9IHRva2Vuc0Zyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgbm9kZSA9IHRoaXMucGFyc2UodG9rZW5zLCBwcm9kdWN0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHBhcnNlKHRva2VucywgcHJvZHVjdGlvbikge1xuICAgIGxldCBub2RlID0gbnVsbDtcblxuICAgIGlmIChwcm9kdWN0aW9uID09PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9kdWN0aW9uc0xlbmd0aCA9IHRoaXMucHJvZHVjdGlvbnMubGVuZ3RoO1xuXG4gICAgICBpZiAocHJvZHVjdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0UHJvZHVjdGlvbiA9IGZpcnN0KHRoaXMucHJvZHVjdGlvbnMpO1xuXG4gICAgICAgIHByb2R1Y3Rpb24gPSBmaXJzdFByb2R1Y3Rpb247IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gbmV3IENvbnRleHQodG9rZW5zLCB0aGlzLnByb2R1Y3Rpb25zKSxcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgICAgbm9kZU9yTm9kZXMgPSBwcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGlmIChub2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICBub2RlID0gKG5vZGVPck5vZGVzIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgZmlyc3Qobm9kZU9yTm9kZXMpIDpcbiAgICAgICAgICAgICAgICAgICBub2RlT3JOb2RlcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGZpbmRQcm9kdWN0aW9uKHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHByb2R1Y3Rpb25OYW1lLCAgLy8vXG4gICAgICAgICAgaW5kZXggPSB0aGlzLmluZGV4T2ZQcm9kdWN0aW9uQnlOYW1lKG5hbWUpLFxuICAgICAgICAgIHByb2R1Y3Rpb24gPSAoaW5kZXggIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3Rpb25zW2luZGV4XSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cblxuICBpbmRleE9mUHJvZHVjdGlvbkJ5TmFtZShuYW1lKSB7XG4gICAgbGV0IGluZGV4LFxuICAgICAgICBmb3VuZEluZGV4ID0gbnVsbDtcblxuICAgIHRoaXMucHJvZHVjdGlvbnMuc29tZShmdW5jdGlvbihwcm9kdWN0aW9uLCBpbmRleCkge1xuICAgICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKTtcblxuICAgICAgaWYgKHByb2R1Y3Rpb25OYW1lID09PSBuYW1lKSB7XG4gICAgICAgIGZvdW5kSW5kZXggPSBpbmRleDtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGluZGV4ID0gZm91bmRJbmRleDsgLy8vXG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25QYXJzZXI7XG5cbmZ1bmN0aW9uIHRva2Vuc0Zyb21MaW5lcyhsaW5lcykge1xuICBjb25zdCB0b2tlbnMgPSBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCBsaW5lKSB7XG4gICBjb25zdCBsaW5lVG9rZW5zID0gbGluZS5nZXRUb2tlbnMoKTtcblxuICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQobGluZVRva2Vucyk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=