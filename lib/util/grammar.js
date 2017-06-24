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
    key: 'productionsFromGrammar',
    value: function productionsFromGrammar(grammar, extendedBNFLexer, extendedBNFParser) {
      var productions = void 0;

      var lines = extendedBNFLexer.linesFromGrammar(grammar),
          node = extendedBNFParser.nodeFromLines(lines);

      productions = ExtendedBNFParser.generateProductions(node);

      productions = cycles.eliminate(productions); ///

      productions = leftRecursion.eliminate(productions); ///

      return productions;
    }
  }, {
    key: 'grammarsFromGrammarsMap',
    value: function grammarsFromGrammarsMap(grammarsMap) {
      var names = Object.keys(grammarsMap),
          grammars = names.reduce(function (grammars, name) {
        var grammar = grammarsMap[name];

        grammars.push(grammar);

        return grammars;
      }, []);

      return grammars;
    }
  }, {
    key: 'productionsFromGrammars',
    value: function productionsFromGrammars(grammars, extendedBNFLexer, extendedBNFParser) {
      var productions = grammars.reduce(function (productions, grammar) {
        var grammarProductions = grammarUtil.productionsFromGrammar(grammar, extendedBNFLexer, extendedBNFParser);

        productions = productions.concat(grammarProductions);

        return productions;
      }, []);

      return productions;
    }
  }]);

  return grammarUtil;
}();

module.exports = grammarUtil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL2dyYW1tYXIuanMiXSwibmFtZXMiOlsiY3ljbGVzIiwicmVxdWlyZSIsImxlZnRSZWN1cnNpb24iLCJFeHRlbmRlZEJORlBhcnNlciIsImdyYW1tYXJVdGlsIiwiZ3JhbW1hciIsImV4dGVuZGVkQk5GTGV4ZXIiLCJleHRlbmRlZEJORlBhcnNlciIsInByb2R1Y3Rpb25zIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwibm9kZSIsIm5vZGVGcm9tTGluZXMiLCJnZW5lcmF0ZVByb2R1Y3Rpb25zIiwiZWxpbWluYXRlIiwiZ3JhbW1hcnNNYXAiLCJuYW1lcyIsIk9iamVjdCIsImtleXMiLCJncmFtbWFycyIsInJlZHVjZSIsIm5hbWUiLCJwdXNoIiwiZ3JhbW1hclByb2R1Y3Rpb25zIiwicHJvZHVjdGlvbnNGcm9tR3JhbW1hciIsImNvbmNhdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLG1CQUFSLENBQWY7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsMEJBQVIsQ0FEdEI7QUFBQSxJQUVNRSxvQkFBb0JGLFFBQVEsdUJBQVIsQ0FGMUI7O0lBSU1HLFc7Ozs7Ozs7MkNBQzBCQyxPLEVBQVNDLGdCLEVBQWtCQyxpQixFQUFtQjtBQUMxRSxVQUFJQyxvQkFBSjs7QUFFQSxVQUFNQyxRQUFRSCxpQkFBaUJJLGdCQUFqQixDQUFrQ0wsT0FBbEMsQ0FBZDtBQUFBLFVBQ01NLE9BQU9KLGtCQUFrQkssYUFBbEIsQ0FBZ0NILEtBQWhDLENBRGI7O0FBR0FELG9CQUFjTCxrQkFBa0JVLG1CQUFsQixDQUFzQ0YsSUFBdEMsQ0FBZDs7QUFFQUgsb0JBQWNSLE9BQU9jLFNBQVAsQ0FBaUJOLFdBQWpCLENBQWQsQ0FSMEUsQ0FRNUI7O0FBRTlDQSxvQkFBY04sY0FBY1ksU0FBZCxDQUF3Qk4sV0FBeEIsQ0FBZCxDQVYwRSxDQVVyQjs7QUFFckQsYUFBT0EsV0FBUDtBQUNEOzs7NENBRThCTyxXLEVBQWE7QUFDMUMsVUFBTUMsUUFBUUMsT0FBT0MsSUFBUCxDQUFZSCxXQUFaLENBQWQ7QUFBQSxVQUNNSSxXQUFXSCxNQUFNSSxNQUFOLENBQWEsVUFBU0QsUUFBVCxFQUFtQkUsSUFBbkIsRUFBeUI7QUFDL0MsWUFBTWhCLFVBQVVVLFlBQVlNLElBQVosQ0FBaEI7O0FBRUFGLGlCQUFTRyxJQUFULENBQWNqQixPQUFkOztBQUVBLGVBQU9jLFFBQVA7QUFDRCxPQU5VLEVBTVIsRUFOUSxDQURqQjs7QUFTQSxhQUFPQSxRQUFQO0FBQ0Q7Ozs0Q0FFOEJBLFEsRUFBVWIsZ0IsRUFBa0JDLGlCLEVBQW1CO0FBQzVFLFVBQU1DLGNBQWNXLFNBQVNDLE1BQVQsQ0FBZ0IsVUFBU1osV0FBVCxFQUFzQkgsT0FBdEIsRUFBK0I7QUFDakUsWUFBTWtCLHFCQUFxQm5CLFlBQVlvQixzQkFBWixDQUFtQ25CLE9BQW5DLEVBQTRDQyxnQkFBNUMsRUFBOERDLGlCQUE5RCxDQUEzQjs7QUFFQUMsc0JBQWNBLFlBQVlpQixNQUFaLENBQW1CRixrQkFBbkIsQ0FBZDs7QUFFQSxlQUFPZixXQUFQO0FBQ0QsT0FObUIsRUFNakIsRUFOaUIsQ0FBcEI7O0FBUUEsYUFBT0EsV0FBUDtBQUNEOzs7Ozs7QUFHSGtCLE9BQU9DLE9BQVAsR0FBaUJ2QixXQUFqQiIsImZpbGUiOiJncmFtbWFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjeWNsZXMgPSByZXF1aXJlKCcuLi9ncmFtbWFyL2N5Y2xlcycpLFxuICAgICAgbGVmdFJlY3Vyc2lvbiA9IHJlcXVpcmUoJy4uL2dyYW1tYXIvbGVmdFJlY3Vyc2lvbicpLFxuICAgICAgRXh0ZW5kZWRCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9leHRlbmRlZEJORi9wYXJzZXInKTtcblxuY2xhc3MgZ3JhbW1hclV0aWwge1xuICBzdGF0aWMgcHJvZHVjdGlvbnNGcm9tR3JhbW1hcihncmFtbWFyLCBleHRlbmRlZEJORkxleGVyLCBleHRlbmRlZEJORlBhcnNlcikge1xuICAgIGxldCBwcm9kdWN0aW9ucztcbiAgICBcbiAgICBjb25zdCBsaW5lcyA9IGV4dGVuZGVkQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICBub2RlID0gZXh0ZW5kZWRCTkZQYXJzZXIubm9kZUZyb21MaW5lcyhsaW5lcyk7XG4gICAgXG4gICAgcHJvZHVjdGlvbnMgPSBFeHRlbmRlZEJORlBhcnNlci5nZW5lcmF0ZVByb2R1Y3Rpb25zKG5vZGUpO1xuXG4gICAgcHJvZHVjdGlvbnMgPSBjeWNsZXMuZWxpbWluYXRlKHByb2R1Y3Rpb25zKTsgIC8vL1xuXG4gICAgcHJvZHVjdGlvbnMgPSBsZWZ0UmVjdXJzaW9uLmVsaW1pbmF0ZShwcm9kdWN0aW9ucyk7ICAvLy9cblxuICAgIHJldHVybiBwcm9kdWN0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBncmFtbWFyc0Zyb21HcmFtbWFyc01hcChncmFtbWFyc01hcCkge1xuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoZ3JhbW1hcnNNYXApLFxuICAgICAgICAgIGdyYW1tYXJzID0gbmFtZXMucmVkdWNlKGZ1bmN0aW9uKGdyYW1tYXJzLCBuYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBncmFtbWFyID0gZ3JhbW1hcnNNYXBbbmFtZV07XG4gIFxuICAgICAgICAgICAgZ3JhbW1hcnMucHVzaChncmFtbWFyKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZ3JhbW1hcnM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGdyYW1tYXJzO1xuICB9XG5cbiAgc3RhdGljIHByb2R1Y3Rpb25zRnJvbUdyYW1tYXJzKGdyYW1tYXJzLCBleHRlbmRlZEJORkxleGVyLCBleHRlbmRlZEJORlBhcnNlcikge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25zID0gZ3JhbW1hcnMucmVkdWNlKGZ1bmN0aW9uKHByb2R1Y3Rpb25zLCBncmFtbWFyKSB7XG4gICAgICBjb25zdCBncmFtbWFyUHJvZHVjdGlvbnMgPSBncmFtbWFyVXRpbC5wcm9kdWN0aW9uc0Zyb21HcmFtbWFyKGdyYW1tYXIsIGV4dGVuZGVkQk5GTGV4ZXIsIGV4dGVuZGVkQk5GUGFyc2VyKTtcblxuICAgICAgcHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucy5jb25jYXQoZ3JhbW1hclByb2R1Y3Rpb25zKTtcblxuICAgICAgcmV0dXJuIHByb2R1Y3Rpb25zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdyYW1tYXJVdGlsO1xuIl19