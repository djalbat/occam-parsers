'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cycles = require('../grammar/cycles'),
    leftRecursion = require('../grammar/leftRecursion'),
    ExtendedBNFParser = require('../extendedBNF/parser');

var grammarUtil = function () {
  function grammarUtil() {
    _classCallCheck(this, grammarUtil);
  }

  _createClass(grammarUtil, null, [{
    key: 'rulesFromGrammar',
    value: function rulesFromGrammar(grammar, extendedBNFLexer, extendedBNFParser) {
      var rules = void 0;

      var lines = extendedBNFLexer.linesFromGrammar(grammar),
          node = extendedBNFParser.nodeFromLines(lines);

      rules = ExtendedBNFParser.generateRules(node);

      rules = cycles.eliminate(rules); ///

      rules = leftRecursion.eliminate(rules); ///

      return rules;
    }
  }, {
    key: 'grammarsFromGrammarMap',
    value: function grammarsFromGrammarMap(grammarMap) {
      var names = Object.keys(grammarMap),
          grammars = names.reduce(function (grammars, name) {
        var grammar = grammarMap[name];

        grammars.push(grammar);

        return grammars;
      }, []);

      return grammars;
    }
  }, {
    key: 'rulesFromGrammars',
    value: function rulesFromGrammars(grammars, extendedBNFLexer, extendedBNFParser) {
      var rules = grammars.reduce(function (rules, grammar) {
        var grammarRules = grammarUtil.rulesFromGrammar(grammar, extendedBNFLexer, extendedBNFParser);

        rules = rules.concat(grammarRules);

        return rules;
      }, []);

      return rules;
    }
  }]);

  return grammarUtil;
}();

module.exports = grammarUtil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL2dyYW1tYXIuanMiXSwibmFtZXMiOlsiY3ljbGVzIiwicmVxdWlyZSIsImxlZnRSZWN1cnNpb24iLCJFeHRlbmRlZEJORlBhcnNlciIsImdyYW1tYXJVdGlsIiwiZ3JhbW1hciIsImV4dGVuZGVkQk5GTGV4ZXIiLCJleHRlbmRlZEJORlBhcnNlciIsInJ1bGVzIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwibm9kZSIsIm5vZGVGcm9tTGluZXMiLCJnZW5lcmF0ZVJ1bGVzIiwiZWxpbWluYXRlIiwiZ3JhbW1hck1hcCIsIm5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImdyYW1tYXJzIiwicmVkdWNlIiwibmFtZSIsInB1c2giLCJncmFtbWFyUnVsZXMiLCJydWxlc0Zyb21HcmFtbWFyIiwiY29uY2F0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsbUJBQVIsQ0FBZjtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSwwQkFBUixDQUR0QjtBQUFBLElBRU1FLG9CQUFvQkYsUUFBUSx1QkFBUixDQUYxQjs7SUFJTUcsVzs7Ozs7OztxQ0FDb0JDLE8sRUFBU0MsZ0IsRUFBa0JDLGlCLEVBQW1CO0FBQ3BFLFVBQUlDLGNBQUo7O0FBRUEsVUFBTUMsUUFBUUgsaUJBQWlCSSxnQkFBakIsQ0FBa0NMLE9BQWxDLENBQWQ7QUFBQSxVQUNNTSxPQUFPSixrQkFBa0JLLGFBQWxCLENBQWdDSCxLQUFoQyxDQURiOztBQUdBRCxjQUFRTCxrQkFBa0JVLGFBQWxCLENBQWdDRixJQUFoQyxDQUFSOztBQUVBSCxjQUFRUixPQUFPYyxTQUFQLENBQWlCTixLQUFqQixDQUFSLENBUm9FLENBUWxDOztBQUVsQ0EsY0FBUU4sY0FBY1ksU0FBZCxDQUF3Qk4sS0FBeEIsQ0FBUixDQVZvRSxDQVUzQjs7QUFFekMsYUFBT0EsS0FBUDtBQUNEOzs7MkNBRTZCTyxVLEVBQVk7QUFDeEMsVUFBTUMsUUFBUUMsT0FBT0MsSUFBUCxDQUFZSCxVQUFaLENBQWQ7QUFBQSxVQUNNSSxXQUFXSCxNQUFNSSxNQUFOLENBQWEsVUFBU0QsUUFBVCxFQUFtQkUsSUFBbkIsRUFBeUI7QUFDL0MsWUFBTWhCLFVBQVVVLFdBQVdNLElBQVgsQ0FBaEI7O0FBRUFGLGlCQUFTRyxJQUFULENBQWNqQixPQUFkOztBQUVBLGVBQU9jLFFBQVA7QUFDRCxPQU5VLEVBTVIsRUFOUSxDQURqQjs7QUFTQSxhQUFPQSxRQUFQO0FBQ0Q7OztzQ0FFd0JBLFEsRUFBVWIsZ0IsRUFBa0JDLGlCLEVBQW1CO0FBQ3RFLFVBQU1DLFFBQVFXLFNBQVNDLE1BQVQsQ0FBZ0IsVUFBU1osS0FBVCxFQUFnQkgsT0FBaEIsRUFBeUI7QUFDckQsWUFBTWtCLGVBQWVuQixZQUFZb0IsZ0JBQVosQ0FBNkJuQixPQUE3QixFQUFzQ0MsZ0JBQXRDLEVBQXdEQyxpQkFBeEQsQ0FBckI7O0FBRUFDLGdCQUFRQSxNQUFNaUIsTUFBTixDQUFhRixZQUFiLENBQVI7O0FBRUEsZUFBT2YsS0FBUDtBQUNELE9BTmEsRUFNWCxFQU5XLENBQWQ7O0FBUUEsYUFBT0EsS0FBUDtBQUNEOzs7Ozs7QUFHSGtCLE9BQU9DLE9BQVAsR0FBaUJ2QixXQUFqQiIsImZpbGUiOiJncmFtbWFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjeWNsZXMgPSByZXF1aXJlKCcuLi9ncmFtbWFyL2N5Y2xlcycpLFxuICAgICAgbGVmdFJlY3Vyc2lvbiA9IHJlcXVpcmUoJy4uL2dyYW1tYXIvbGVmdFJlY3Vyc2lvbicpLFxuICAgICAgRXh0ZW5kZWRCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9leHRlbmRlZEJORi9wYXJzZXInKTtcblxuY2xhc3MgZ3JhbW1hclV0aWwge1xuICBzdGF0aWMgcnVsZXNGcm9tR3JhbW1hcihncmFtbWFyLCBleHRlbmRlZEJORkxleGVyLCBleHRlbmRlZEJORlBhcnNlcikge1xuICAgIGxldCBydWxlcztcbiAgICBcbiAgICBjb25zdCBsaW5lcyA9IGV4dGVuZGVkQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICBub2RlID0gZXh0ZW5kZWRCTkZQYXJzZXIubm9kZUZyb21MaW5lcyhsaW5lcyk7XG4gICAgXG4gICAgcnVsZXMgPSBFeHRlbmRlZEJORlBhcnNlci5nZW5lcmF0ZVJ1bGVzKG5vZGUpO1xuXG4gICAgcnVsZXMgPSBjeWNsZXMuZWxpbWluYXRlKHJ1bGVzKTsgIC8vL1xuXG4gICAgcnVsZXMgPSBsZWZ0UmVjdXJzaW9uLmVsaW1pbmF0ZShydWxlcyk7ICAvLy9cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIHN0YXRpYyBncmFtbWFyc0Zyb21HcmFtbWFyTWFwKGdyYW1tYXJNYXApIHtcbiAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKGdyYW1tYXJNYXApLFxuICAgICAgICAgIGdyYW1tYXJzID0gbmFtZXMucmVkdWNlKGZ1bmN0aW9uKGdyYW1tYXJzLCBuYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBncmFtbWFyID0gZ3JhbW1hck1hcFtuYW1lXTtcbiAgXG4gICAgICAgICAgICBncmFtbWFycy5wdXNoKGdyYW1tYXIpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBncmFtbWFycztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZ3JhbW1hcnM7XG4gIH1cblxuICBzdGF0aWMgcnVsZXNGcm9tR3JhbW1hcnMoZ3JhbW1hcnMsIGV4dGVuZGVkQk5GTGV4ZXIsIGV4dGVuZGVkQk5GUGFyc2VyKSB7XG4gICAgY29uc3QgcnVsZXMgPSBncmFtbWFycy5yZWR1Y2UoZnVuY3Rpb24ocnVsZXMsIGdyYW1tYXIpIHtcbiAgICAgIGNvbnN0IGdyYW1tYXJSdWxlcyA9IGdyYW1tYXJVdGlsLnJ1bGVzRnJvbUdyYW1tYXIoZ3JhbW1hciwgZXh0ZW5kZWRCTkZMZXhlciwgZXh0ZW5kZWRCTkZQYXJzZXIpO1xuXG4gICAgICBydWxlcyA9IHJ1bGVzLmNvbmNhdChncmFtbWFyUnVsZXMpO1xuXG4gICAgICByZXR1cm4gcnVsZXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ3JhbW1hclV0aWw7XG4iXX0=