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
    defaultCustomGrammars = require('./defaultCustomGrammars'),
    defaultAdditionalMappings = require('./defaultAdditionalMappings');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer;


var extendedBNFLexer = ExtendedBNFLexer.fromNothing(),
    extendedBNFParser = ExtendedBNFParser.fromNothing();

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

      var customProductions = customProductionsFromCustomGrammars(customGrammars, extendedBNFLexer, extendedBNFParser),
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

function customProductionsFromCustomGrammars(customGrammars, extendedBNFLexer, extendedBNFParser) {
  var customProductions = customGrammars.reduce(function (customProductions, customGrammar) {
    var customGrammarProductions = grammarUtil.productionsFromGrammar(customGrammar, extendedBNFLexer, extendedBNFParser);

    customProductions = customProductions.concat(customGrammarProductions);

    return customProductions;
  }, []);

  return customProductions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJtYXBwaW5ncyIsImdyYW1tYXJVdGlsIiwiQ29tbW9uUGFyc2VyIiwiRXh0ZW5kZWRCTkZQYXJzZXIiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hcnMiLCJkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzIiwiRXh0ZW5kZWRCTkZMZXhlciIsImV4dGVuZGVkQk5GTGV4ZXIiLCJmcm9tTm90aGluZyIsImV4dGVuZGVkQk5GUGFyc2VyIiwiRmxvcmVuY2VQYXJzZXIiLCJjdXN0b21HcmFtbWFycyIsImFkZGl0aW9uYWxNYXBwaW5ncyIsImZsb3JlbmNlUGFyc2VyIiwiZnJvbUdyYW1tYXJBbmRNYXBwaW5ncyIsIk9iamVjdCIsImFzc2lnbiIsImN1c3RvbVByb2R1Y3Rpb25zIiwiY3VzdG9tUHJvZHVjdGlvbnNGcm9tQ3VzdG9tR3JhbW1hcnMiLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJub2RlIiwibm9kZUZyb21MaW5lcyIsInByb2R1Y3Rpb25zIiwiZ2VuZXJhdGVQcm9kdWN0aW9ucyIsImNvbmNhdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWR1Y2UiLCJjdXN0b21HcmFtbWFyIiwiY3VzdG9tR3JhbW1hclByb2R1Y3Rpb25zIiwicHJvZHVjdGlvbnNGcm9tR3JhbW1hciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxVQUFVRCxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNRSxXQUFXRixRQUFRLFlBQVIsQ0FEakI7QUFBQSxJQUVNRyxjQUFjSCxRQUFRLGlCQUFSLENBRnBCO0FBQUEsSUFHTUksZUFBZUosUUFBUSxrQkFBUixDQUhyQjtBQUFBLElBSU1LLG9CQUFvQkwsUUFBUSx1QkFBUixDQUoxQjtBQUFBLElBS01NLHdCQUF3Qk4sUUFBUSx5QkFBUixDQUw5QjtBQUFBLElBTU1PLDRCQUE0QlAsUUFBUSw2QkFBUixDQU5sQzs7SUFRUVEsZ0IsR0FBcUJULE0sQ0FBckJTLGdCOzs7QUFFUixJQUFNQyxtQkFBbUJELGlCQUFpQkUsV0FBakIsRUFBekI7QUFBQSxJQUNNQyxvQkFBb0JOLGtCQUFrQkssV0FBbEIsRUFEMUI7O0lBR01FLGM7Ozs7Ozs7Ozs7O3lEQUN3Q0MsYyxFQUFnQkMsa0IsRUFBb0I7QUFDOUUsVUFBTUMsaUJBQWlCSCxlQUFlSSxzQkFBZixDQUFzQ2YsT0FBdEMsRUFBK0NDLFFBQS9DLEVBQXlEVyxjQUF6RCxFQUF5RUMsa0JBQXpFLENBQXZCOztBQUVBLGFBQU9DLGNBQVA7QUFDRDs7OzJDQUU2QmQsTyxFQUFTQyxRLEVBQWtHO0FBQUEsVUFBeEZXLGNBQXdGLHVFQUF2RVAscUJBQXVFO0FBQUEsVUFBaERRLGtCQUFnRCx1RUFBM0JQLHlCQUEyQjs7QUFDdklMLGlCQUFXZSxPQUFPQyxNQUFQLENBQWNoQixRQUFkLEVBQXdCWSxrQkFBeEIsQ0FBWCxDQUR1SSxDQUMvRTs7QUFFeEQsVUFBTUssb0JBQW9CQyxvQ0FBb0NQLGNBQXBDLEVBQW9ESixnQkFBcEQsRUFBc0VFLGlCQUF0RSxDQUExQjtBQUFBLFVBQ01VLFFBQVFaLGlCQUFpQmEsZ0JBQWpCLENBQWtDckIsT0FBbEMsQ0FEZDtBQUFBLFVBRU1zQixPQUFPWixrQkFBa0JhLGFBQWxCLENBQWdDSCxLQUFoQyxDQUZiOztBQUlBLFVBQUlJLGNBQWNwQixrQkFBa0JxQixtQkFBbEIsQ0FBc0NILElBQXRDLEVBQTRDckIsUUFBNUMsQ0FBbEI7O0FBRUF1QixvQkFBY0EsWUFBWUUsTUFBWixDQUFtQlIsaUJBQW5CLENBQWQ7O0FBRUEsVUFBTUosaUJBQWlCLElBQUlILGNBQUosQ0FBbUJhLFdBQW5CLENBQXZCOztBQUVBLGFBQU9WLGNBQVA7QUFDRDs7OztFQXJCMEJYLFk7O0FBd0I3QndCLE9BQU9DLE9BQVAsR0FBaUJqQixjQUFqQjs7QUFFQUEsZUFBZVgsT0FBZixHQUF5QkEsT0FBekI7O0FBRUEsU0FBU21CLG1DQUFULENBQTZDUCxjQUE3QyxFQUE2REosZ0JBQTdELEVBQStFRSxpQkFBL0UsRUFBa0c7QUFDaEcsTUFBTVEsb0JBQW9CTixlQUFlaUIsTUFBZixDQUFzQixVQUFTWCxpQkFBVCxFQUE0QlksYUFBNUIsRUFBMkM7QUFDekYsUUFBTUMsMkJBQTJCN0IsWUFBWThCLHNCQUFaLENBQW1DRixhQUFuQyxFQUFrRHRCLGdCQUFsRCxFQUFvRUUsaUJBQXBFLENBQWpDOztBQUVBUSx3QkFBb0JBLGtCQUFrQlEsTUFBbEIsQ0FBeUJLLHdCQUF6QixDQUFwQjs7QUFFQSxXQUFPYixpQkFBUDtBQUNELEdBTnlCLEVBTXZCLEVBTnVCLENBQTFCOztBQVFBLFNBQU9BLGlCQUFQO0FBQ0QiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxuICAgICAgbWFwcGluZ3MgPSByZXF1aXJlKCcuL21hcHBpbmdzJyksXG4gICAgICBncmFtbWFyVXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvZ3JhbW1hcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgRXh0ZW5kZWRCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9leHRlbmRlZEJORi9wYXJzZXInKSxcbiAgICAgIGRlZmF1bHRDdXN0b21HcmFtbWFycyA9IHJlcXVpcmUoJy4vZGVmYXVsdEN1c3RvbUdyYW1tYXJzJyksXG4gICAgICBkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzID0gcmVxdWlyZSgnLi9kZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzJyk7XG5cbmNvbnN0IHsgRXh0ZW5kZWRCTkZMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBleHRlbmRlZEJORkxleGVyID0gRXh0ZW5kZWRCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgZXh0ZW5kZWRCTkZQYXJzZXIgPSBFeHRlbmRlZEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQ3VzdG9tR3JhbW1hcnNBZGRpdGlvbmFsTWFwcGluZ3MoY3VzdG9tR3JhbW1hcnMsIGFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUdyYW1tYXJBbmRNYXBwaW5ncyhncmFtbWFyLCBtYXBwaW5ncywgY3VzdG9tR3JhbW1hcnMsIGFkZGl0aW9uYWxNYXBwaW5ncyk7XG4gIFxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21HcmFtbWFyQW5kTWFwcGluZ3MoZ3JhbW1hciwgbWFwcGluZ3MsIGN1c3RvbUdyYW1tYXJzID0gZGVmYXVsdEN1c3RvbUdyYW1tYXJzLCBhZGRpdGlvbmFsTWFwcGluZ3MgPSBkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzKSB7XG4gICAgbWFwcGluZ3MgPSBPYmplY3QuYXNzaWduKG1hcHBpbmdzLCBhZGRpdGlvbmFsTWFwcGluZ3MpOyAvLy9cblxuICAgIGNvbnN0IGN1c3RvbVByb2R1Y3Rpb25zID0gY3VzdG9tUHJvZHVjdGlvbnNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIGV4dGVuZGVkQk5GTGV4ZXIsIGV4dGVuZGVkQk5GUGFyc2VyKSxcbiAgICAgICAgICBsaW5lcyA9IGV4dGVuZGVkQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICBub2RlID0gZXh0ZW5kZWRCTkZQYXJzZXIubm9kZUZyb21MaW5lcyhsaW5lcyk7XG4gICAgXG4gICAgbGV0IHByb2R1Y3Rpb25zID0gRXh0ZW5kZWRCTkZQYXJzZXIuZ2VuZXJhdGVQcm9kdWN0aW9ucyhub2RlLCBtYXBwaW5ncyk7XG4gICAgXG4gICAgcHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucy5jb25jYXQoY3VzdG9tUHJvZHVjdGlvbnMpO1xuICAgIFxuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHByb2R1Y3Rpb25zKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlUGFyc2VyO1xuXG5GbG9yZW5jZVBhcnNlci5ncmFtbWFyID0gZ3JhbW1hcjtcblxuZnVuY3Rpb24gY3VzdG9tUHJvZHVjdGlvbnNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIGV4dGVuZGVkQk5GTGV4ZXIsIGV4dGVuZGVkQk5GUGFyc2VyKSB7XG4gIGNvbnN0IGN1c3RvbVByb2R1Y3Rpb25zID0gY3VzdG9tR3JhbW1hcnMucmVkdWNlKGZ1bmN0aW9uKGN1c3RvbVByb2R1Y3Rpb25zLCBjdXN0b21HcmFtbWFyKSB7XG4gICAgY29uc3QgY3VzdG9tR3JhbW1hclByb2R1Y3Rpb25zID0gZ3JhbW1hclV0aWwucHJvZHVjdGlvbnNGcm9tR3JhbW1hcihjdXN0b21HcmFtbWFyLCBleHRlbmRlZEJORkxleGVyLCBleHRlbmRlZEJORlBhcnNlcik7XG5cbiAgICBjdXN0b21Qcm9kdWN0aW9ucyA9IGN1c3RvbVByb2R1Y3Rpb25zLmNvbmNhdChjdXN0b21HcmFtbWFyUHJvZHVjdGlvbnMpO1xuICAgIFxuICAgIHJldHVybiBjdXN0b21Qcm9kdWN0aW9ucztcbiAgfSwgW10pO1xuICBcbiAgcmV0dXJuIGN1c3RvbVByb2R1Y3Rpb25zO1xufVxuIl19