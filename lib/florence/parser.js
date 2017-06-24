'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var grammar = require('./grammar'),
    mappings = require('./mappings'),
    grammarUtil = require('../util/grammar'),
    CommonParser = require('../common/parser'),
    ExtendedBNFParser = require('../extendedBNF/parser'),
    defaultCustomGrammarsMap = require('./defaultCustomGrammarsMap'),
    defaultAdditionalMappings = require('./defaultAdditionalMappings');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer;


var extendedBNFLexer = ExtendedBNFLexer.fromNothing(),
    extendedBNFParser = ExtendedBNFParser.fromNothing(),
    defaultCustomGrammars = grammarsUtil.grammarsFromGrammarsMap(defaultCustomGrammarsMap);

var FlorenceParser = function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
  }

  _createClass(FlorenceParser, null, [{
    key: 'fromCustomGrammarsAdditionalMappings',
    value: function fromCustomGrammarsAdditionalMappings(customGrammars, additionalMappings) {
      var florenceParser = FlorenceParser.fromGrammarAndMappings(grammar, mappings, customGrammars, additionalMappings);

      return florenceParser;
    }
  }, {
    key: 'fromGrammarAndMappings',
    value: function fromGrammarAndMappings(grammar, mappings) {
      var customGrammars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultCustomGrammars;
      var additionalMappings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultAdditionalMappings;

      mappings = Object.assign(mappings, additionalMappings); ///

      var customProductions = grammarUtil.productionsFromGrammars(customGrammars, extendedBNFLexer, extendedBNFParser),
          lines = extendedBNFLexer.linesFromGrammar(grammar),
          node = extendedBNFParser.nodeFromLines(lines);

      var productions = ExtendedBNFParser.generateProductions(node, mappings);

      productions = productions.concat(customProductions);

      var florenceParser = new FlorenceParser(productions);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;

FlorenceParser.grammar = grammar;

FlorenceParser.mappings = mappings;

FlorenceParser.defaultCustomGrammarsMap = defaultCustomGrammarsMap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJtYXBwaW5ncyIsImdyYW1tYXJVdGlsIiwiQ29tbW9uUGFyc2VyIiwiRXh0ZW5kZWRCTkZQYXJzZXIiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hcnNNYXAiLCJkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzIiwiRXh0ZW5kZWRCTkZMZXhlciIsImV4dGVuZGVkQk5GTGV4ZXIiLCJmcm9tTm90aGluZyIsImV4dGVuZGVkQk5GUGFyc2VyIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXJzIiwiZ3JhbW1hcnNVdGlsIiwiZ3JhbW1hcnNGcm9tR3JhbW1hcnNNYXAiLCJGbG9yZW5jZVBhcnNlciIsImN1c3RvbUdyYW1tYXJzIiwiYWRkaXRpb25hbE1hcHBpbmdzIiwiZmxvcmVuY2VQYXJzZXIiLCJmcm9tR3JhbW1hckFuZE1hcHBpbmdzIiwiT2JqZWN0IiwiYXNzaWduIiwiY3VzdG9tUHJvZHVjdGlvbnMiLCJwcm9kdWN0aW9uc0Zyb21HcmFtbWFycyIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsIm5vZGUiLCJub2RlRnJvbUxpbmVzIiwicHJvZHVjdGlvbnMiLCJnZW5lcmF0ZVByb2R1Y3Rpb25zIiwiY29uY2F0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxVQUFVRCxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNRSxXQUFXRixRQUFRLFlBQVIsQ0FEakI7QUFBQSxJQUVNRyxjQUFjSCxRQUFRLGlCQUFSLENBRnBCO0FBQUEsSUFHTUksZUFBZUosUUFBUSxrQkFBUixDQUhyQjtBQUFBLElBSU1LLG9CQUFvQkwsUUFBUSx1QkFBUixDQUoxQjtBQUFBLElBS01NLDJCQUEyQk4sUUFBUSw0QkFBUixDQUxqQztBQUFBLElBTU1PLDRCQUE0QlAsUUFBUSw2QkFBUixDQU5sQzs7SUFRUVEsZ0IsR0FBcUJULE0sQ0FBckJTLGdCOzs7QUFFUixJQUFNQyxtQkFBbUJELGlCQUFpQkUsV0FBakIsRUFBekI7QUFBQSxJQUNNQyxvQkFBb0JOLGtCQUFrQkssV0FBbEIsRUFEMUI7QUFBQSxJQUVNRSx3QkFBd0JDLGFBQWFDLHVCQUFiLENBQXFDUix3QkFBckMsQ0FGOUI7O0lBSU1TLGM7Ozs7Ozs7Ozs7O3lEQUN3Q0MsYyxFQUFnQkMsa0IsRUFBb0I7QUFDOUUsVUFBTUMsaUJBQWlCSCxlQUFlSSxzQkFBZixDQUFzQ2xCLE9BQXRDLEVBQStDQyxRQUEvQyxFQUF5RGMsY0FBekQsRUFBeUVDLGtCQUF6RSxDQUF2Qjs7QUFFQSxhQUFPQyxjQUFQO0FBQ0Q7OzsyQ0FFNkJqQixPLEVBQVNDLFEsRUFBa0c7QUFBQSxVQUF4RmMsY0FBd0YsdUVBQXZFSixxQkFBdUU7QUFBQSxVQUFoREssa0JBQWdELHVFQUEzQlYseUJBQTJCOztBQUN2SUwsaUJBQVdrQixPQUFPQyxNQUFQLENBQWNuQixRQUFkLEVBQXdCZSxrQkFBeEIsQ0FBWCxDQUR1SSxDQUMvRTs7QUFFeEQsVUFBTUssb0JBQW9CbkIsWUFBWW9CLHVCQUFaLENBQW9DUCxjQUFwQyxFQUFvRFAsZ0JBQXBELEVBQXNFRSxpQkFBdEUsQ0FBMUI7QUFBQSxVQUNNYSxRQUFRZixpQkFBaUJnQixnQkFBakIsQ0FBa0N4QixPQUFsQyxDQURkO0FBQUEsVUFFTXlCLE9BQU9mLGtCQUFrQmdCLGFBQWxCLENBQWdDSCxLQUFoQyxDQUZiOztBQUlBLFVBQUlJLGNBQWN2QixrQkFBa0J3QixtQkFBbEIsQ0FBc0NILElBQXRDLEVBQTRDeEIsUUFBNUMsQ0FBbEI7O0FBRUEwQixvQkFBY0EsWUFBWUUsTUFBWixDQUFtQlIsaUJBQW5CLENBQWQ7O0FBRUEsVUFBTUosaUJBQWlCLElBQUlILGNBQUosQ0FBbUJhLFdBQW5CLENBQXZCOztBQUVBLGFBQU9WLGNBQVA7QUFDRDs7OztFQXJCMEJkLFk7O0FBd0I3QjJCLE9BQU9DLE9BQVAsR0FBaUJqQixjQUFqQjs7QUFFQUEsZUFBZWQsT0FBZixHQUF5QkEsT0FBekI7O0FBRUFjLGVBQWViLFFBQWYsR0FBMEJBLFFBQTFCOztBQUVBYSxlQUFlVCx3QkFBZixHQUEwQ0Esd0JBQTFDIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcbiAgICAgIG1hcHBpbmdzID0gcmVxdWlyZSgnLi9tYXBwaW5ncycpLFxuICAgICAgZ3JhbW1hclV0aWwgPSByZXF1aXJlKCcuLi91dGlsL2dyYW1tYXInKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIEV4dGVuZGVkQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vZXh0ZW5kZWRCTkYvcGFyc2VyJyksXG4gICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hcnNNYXAgPSByZXF1aXJlKCcuL2RlZmF1bHRDdXN0b21HcmFtbWFyc01hcCcpLFxuICAgICAgZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncyA9IHJlcXVpcmUoJy4vZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncycpO1xuXG5jb25zdCB7IEV4dGVuZGVkQk5GTGV4ZXIgfSA9IGxleGVycztcblxuY29uc3QgZXh0ZW5kZWRCTkZMZXhlciA9IEV4dGVuZGVkQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGV4dGVuZGVkQk5GUGFyc2VyID0gRXh0ZW5kZWRCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGRlZmF1bHRDdXN0b21HcmFtbWFycyA9IGdyYW1tYXJzVXRpbC5ncmFtbWFyc0Zyb21HcmFtbWFyc01hcChkZWZhdWx0Q3VzdG9tR3JhbW1hcnNNYXApO1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQ3VzdG9tR3JhbW1hcnNBZGRpdGlvbmFsTWFwcGluZ3MoY3VzdG9tR3JhbW1hcnMsIGFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUdyYW1tYXJBbmRNYXBwaW5ncyhncmFtbWFyLCBtYXBwaW5ncywgY3VzdG9tR3JhbW1hcnMsIGFkZGl0aW9uYWxNYXBwaW5ncyk7XG4gIFxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21HcmFtbWFyQW5kTWFwcGluZ3MoZ3JhbW1hciwgbWFwcGluZ3MsIGN1c3RvbUdyYW1tYXJzID0gZGVmYXVsdEN1c3RvbUdyYW1tYXJzLCBhZGRpdGlvbmFsTWFwcGluZ3MgPSBkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzKSB7XG4gICAgbWFwcGluZ3MgPSBPYmplY3QuYXNzaWduKG1hcHBpbmdzLCBhZGRpdGlvbmFsTWFwcGluZ3MpOyAvLy9cblxuICAgIGNvbnN0IGN1c3RvbVByb2R1Y3Rpb25zID0gZ3JhbW1hclV0aWwucHJvZHVjdGlvbnNGcm9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIGV4dGVuZGVkQk5GTGV4ZXIsIGV4dGVuZGVkQk5GUGFyc2VyKSxcbiAgICAgICAgICBsaW5lcyA9IGV4dGVuZGVkQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICBub2RlID0gZXh0ZW5kZWRCTkZQYXJzZXIubm9kZUZyb21MaW5lcyhsaW5lcyk7XG4gICAgXG4gICAgbGV0IHByb2R1Y3Rpb25zID0gRXh0ZW5kZWRCTkZQYXJzZXIuZ2VuZXJhdGVQcm9kdWN0aW9ucyhub2RlLCBtYXBwaW5ncyk7XG4gICAgXG4gICAgcHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucy5jb25jYXQoY3VzdG9tUHJvZHVjdGlvbnMpO1xuICAgIFxuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHByb2R1Y3Rpb25zKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlUGFyc2VyO1xuXG5GbG9yZW5jZVBhcnNlci5ncmFtbWFyID0gZ3JhbW1hcjtcblxuRmxvcmVuY2VQYXJzZXIubWFwcGluZ3MgPSBtYXBwaW5ncztcblxuRmxvcmVuY2VQYXJzZXIuZGVmYXVsdEN1c3RvbUdyYW1tYXJzTWFwID0gZGVmYXVsdEN1c3RvbUdyYW1tYXJzTWFwO1xuIl19