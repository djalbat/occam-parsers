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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL2dyYW1tYXIuanMiXSwibmFtZXMiOlsiY3ljbGVzIiwicmVxdWlyZSIsImxlZnRSZWN1cnNpb24iLCJFeHRlbmRlZEJORlBhcnNlciIsImdyYW1tYXJVdGlsIiwiZ3JhbW1hciIsImV4dGVuZGVkQk5GTGV4ZXIiLCJleHRlbmRlZEJORlBhcnNlciIsInJ1bGVzIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwibm9kZSIsIm5vZGVGcm9tTGluZXMiLCJnZW5lcmF0ZVJ1bGVzIiwiZWxpbWluYXRlIiwiZ3JhbW1hcnNNYXAiLCJuYW1lcyIsIk9iamVjdCIsImtleXMiLCJncmFtbWFycyIsInJlZHVjZSIsIm5hbWUiLCJwdXNoIiwiZ3JhbW1hclJ1bGVzIiwicnVsZXNGcm9tR3JhbW1hciIsImNvbmNhdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLG1CQUFSLENBQWY7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsMEJBQVIsQ0FEdEI7QUFBQSxJQUVNRSxvQkFBb0JGLFFBQVEsdUJBQVIsQ0FGMUI7O0lBSU1HLFc7Ozs7Ozs7cUNBQ29CQyxPLEVBQVNDLGdCLEVBQWtCQyxpQixFQUFtQjtBQUNwRSxVQUFJQyxjQUFKOztBQUVBLFVBQU1DLFFBQVFILGlCQUFpQkksZ0JBQWpCLENBQWtDTCxPQUFsQyxDQUFkO0FBQUEsVUFDTU0sT0FBT0osa0JBQWtCSyxhQUFsQixDQUFnQ0gsS0FBaEMsQ0FEYjs7QUFHQUQsY0FBUUwsa0JBQWtCVSxhQUFsQixDQUFnQ0YsSUFBaEMsQ0FBUjs7QUFFQUgsY0FBUVIsT0FBT2MsU0FBUCxDQUFpQk4sS0FBakIsQ0FBUixDQVJvRSxDQVFsQzs7QUFFbENBLGNBQVFOLGNBQWNZLFNBQWQsQ0FBd0JOLEtBQXhCLENBQVIsQ0FWb0UsQ0FVM0I7O0FBRXpDLGFBQU9BLEtBQVA7QUFDRDs7OzRDQUU4Qk8sVyxFQUFhO0FBQzFDLFVBQU1DLFFBQVFDLE9BQU9DLElBQVAsQ0FBWUgsV0FBWixDQUFkO0FBQUEsVUFDTUksV0FBV0gsTUFBTUksTUFBTixDQUFhLFVBQVNELFFBQVQsRUFBbUJFLElBQW5CLEVBQXlCO0FBQy9DLFlBQU1oQixVQUFVVSxZQUFZTSxJQUFaLENBQWhCOztBQUVBRixpQkFBU0csSUFBVCxDQUFjakIsT0FBZDs7QUFFQSxlQUFPYyxRQUFQO0FBQ0QsT0FOVSxFQU1SLEVBTlEsQ0FEakI7O0FBU0EsYUFBT0EsUUFBUDtBQUNEOzs7c0NBRXdCQSxRLEVBQVViLGdCLEVBQWtCQyxpQixFQUFtQjtBQUN0RSxVQUFNQyxRQUFRVyxTQUFTQyxNQUFULENBQWdCLFVBQVNaLEtBQVQsRUFBZ0JILE9BQWhCLEVBQXlCO0FBQ3JELFlBQU1rQixlQUFlbkIsWUFBWW9CLGdCQUFaLENBQTZCbkIsT0FBN0IsRUFBc0NDLGdCQUF0QyxFQUF3REMsaUJBQXhELENBQXJCOztBQUVBQyxnQkFBUUEsTUFBTWlCLE1BQU4sQ0FBYUYsWUFBYixDQUFSOztBQUVBLGVBQU9mLEtBQVA7QUFDRCxPQU5hLEVBTVgsRUFOVyxDQUFkOztBQVFBLGFBQU9BLEtBQVA7QUFDRDs7Ozs7O0FBR0hrQixPQUFPQyxPQUFQLEdBQWlCdkIsV0FBakIiLCJmaWxlIjoiZ3JhbW1hci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3ljbGVzID0gcmVxdWlyZSgnLi4vZ3JhbW1hci9jeWNsZXMnKSxcbiAgICAgIGxlZnRSZWN1cnNpb24gPSByZXF1aXJlKCcuLi9ncmFtbWFyL2xlZnRSZWN1cnNpb24nKSxcbiAgICAgIEV4dGVuZGVkQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vZXh0ZW5kZWRCTkYvcGFyc2VyJyk7XG5cbmNsYXNzIGdyYW1tYXJVdGlsIHtcbiAgc3RhdGljIHJ1bGVzRnJvbUdyYW1tYXIoZ3JhbW1hciwgZXh0ZW5kZWRCTkZMZXhlciwgZXh0ZW5kZWRCTkZQYXJzZXIpIHtcbiAgICBsZXQgcnVsZXM7XG4gICAgXG4gICAgY29uc3QgbGluZXMgPSBleHRlbmRlZEJORkxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgICAgbm9kZSA9IGV4dGVuZGVkQk5GUGFyc2VyLm5vZGVGcm9tTGluZXMobGluZXMpO1xuICAgIFxuICAgIHJ1bGVzID0gRXh0ZW5kZWRCTkZQYXJzZXIuZ2VuZXJhdGVSdWxlcyhub2RlKTtcblxuICAgIHJ1bGVzID0gY3ljbGVzLmVsaW1pbmF0ZShydWxlcyk7ICAvLy9cblxuICAgIHJ1bGVzID0gbGVmdFJlY3Vyc2lvbi5lbGltaW5hdGUocnVsZXMpOyAgLy8vXG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBzdGF0aWMgZ3JhbW1hcnNGcm9tR3JhbW1hcnNNYXAoZ3JhbW1hcnNNYXApIHtcbiAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKGdyYW1tYXJzTWFwKSxcbiAgICAgICAgICBncmFtbWFycyA9IG5hbWVzLnJlZHVjZShmdW5jdGlvbihncmFtbWFycywgbmFtZSkge1xuICAgICAgICAgICAgY29uc3QgZ3JhbW1hciA9IGdyYW1tYXJzTWFwW25hbWVdO1xuICBcbiAgICAgICAgICAgIGdyYW1tYXJzLnB1c2goZ3JhbW1hcik7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGdyYW1tYXJzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBncmFtbWFycztcbiAgfVxuXG4gIHN0YXRpYyBydWxlc0Zyb21HcmFtbWFycyhncmFtbWFycywgZXh0ZW5kZWRCTkZMZXhlciwgZXh0ZW5kZWRCTkZQYXJzZXIpIHtcbiAgICBjb25zdCBydWxlcyA9IGdyYW1tYXJzLnJlZHVjZShmdW5jdGlvbihydWxlcywgZ3JhbW1hcikge1xuICAgICAgY29uc3QgZ3JhbW1hclJ1bGVzID0gZ3JhbW1hclV0aWwucnVsZXNGcm9tR3JhbW1hcihncmFtbWFyLCBleHRlbmRlZEJORkxleGVyLCBleHRlbmRlZEJORlBhcnNlcik7XG5cbiAgICAgIHJ1bGVzID0gcnVsZXMuY29uY2F0KGdyYW1tYXJSdWxlcyk7XG5cbiAgICAgIHJldHVybiBydWxlcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBncmFtbWFyVXRpbDtcbiJdfQ==