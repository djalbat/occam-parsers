'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var grammar = require('./grammar'),
    mappings = require('./mappings'),
    parserUtil = require('../util/parser'),
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

  _createClass(FlorenceParser, [{
    key: 'findProduction',
    value: function findProduction(productionName) {
      var productions = this.getProductions();

      return parserUtil.findProduction(productionName, productions);
    }
  }], [{
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

function customProductionsFromCustomGrammars(customGrammars, extendedBNFLexer, extendedBNFParser) {
  var customProductions = customGrammars.reduce(function (customProductions, customGrammar) {
    var customGrammarProductions = grammarUtil.productionsFromGrammar(customGrammar, extendedBNFLexer, extendedBNFParser);

    customProductions = customProductions.concat(customGrammarProductions);

    return customProductions;
  }, []);

  return customProductions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJtYXBwaW5ncyIsInBhcnNlclV0aWwiLCJncmFtbWFyVXRpbCIsIkNvbW1vblBhcnNlciIsIkV4dGVuZGVkQk5GUGFyc2VyIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXJzIiwiZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncyIsIkV4dGVuZGVkQk5GTGV4ZXIiLCJleHRlbmRlZEJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJleHRlbmRlZEJORlBhcnNlciIsIkZsb3JlbmNlUGFyc2VyIiwicHJvZHVjdGlvbk5hbWUiLCJwcm9kdWN0aW9ucyIsImdldFByb2R1Y3Rpb25zIiwiZmluZFByb2R1Y3Rpb24iLCJjdXN0b21HcmFtbWFycyIsImFkZGl0aW9uYWxNYXBwaW5ncyIsImZsb3JlbmNlUGFyc2VyIiwiZnJvbUdyYW1tYXJBbmRNYXBwaW5ncyIsIk9iamVjdCIsImFzc2lnbiIsImN1c3RvbVByb2R1Y3Rpb25zIiwiY3VzdG9tUHJvZHVjdGlvbnNGcm9tQ3VzdG9tR3JhbW1hcnMiLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJub2RlIiwibm9kZUZyb21MaW5lcyIsImdlbmVyYXRlUHJvZHVjdGlvbnMiLCJjb25jYXQiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVkdWNlIiwiY3VzdG9tR3JhbW1hciIsImN1c3RvbUdyYW1tYXJQcm9kdWN0aW9ucyIsInByb2R1Y3Rpb25zRnJvbUdyYW1tYXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsVUFBVUQsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUUsV0FBV0YsUUFBUSxZQUFSLENBRGpCO0FBQUEsSUFFTUcsYUFBYUgsUUFBUSxnQkFBUixDQUZuQjtBQUFBLElBR01JLGNBQWNKLFFBQVEsaUJBQVIsQ0FIcEI7QUFBQSxJQUlNSyxlQUFlTCxRQUFRLGtCQUFSLENBSnJCO0FBQUEsSUFLTU0sb0JBQW9CTixRQUFRLHVCQUFSLENBTDFCO0FBQUEsSUFNTU8sd0JBQXdCUCxRQUFRLHlCQUFSLENBTjlCO0FBQUEsSUFPTVEsNEJBQTRCUixRQUFRLDZCQUFSLENBUGxDOztJQVNRUyxnQixHQUFxQlYsTSxDQUFyQlUsZ0I7OztBQUVSLElBQU1DLG1CQUFtQkQsaUJBQWlCRSxXQUFqQixFQUF6QjtBQUFBLElBQ01DLG9CQUFvQk4sa0JBQWtCSyxXQUFsQixFQUQxQjs7SUFHTUUsYzs7Ozs7Ozs7Ozs7bUNBdUJXQyxjLEVBQWdCO0FBQzdCLFVBQU1DLGNBQWMsS0FBS0MsY0FBTCxFQUFwQjs7QUFFQSxhQUFPYixXQUFXYyxjQUFYLENBQTBCSCxjQUExQixFQUEwQ0MsV0FBMUMsQ0FBUDtBQUNEOzs7eURBMUIyQ0csYyxFQUFnQkMsa0IsRUFBb0I7QUFDOUUsVUFBTUMsaUJBQWlCUCxlQUFlUSxzQkFBZixDQUFzQ3BCLE9BQXRDLEVBQStDQyxRQUEvQyxFQUF5RGdCLGNBQXpELEVBQXlFQyxrQkFBekUsQ0FBdkI7O0FBRUEsYUFBT0MsY0FBUDtBQUNEOzs7MkNBRTZCbkIsTyxFQUFTQyxRLEVBQWtHO0FBQUEsVUFBeEZnQixjQUF3Rix1RUFBdkVYLHFCQUF1RTtBQUFBLFVBQWhEWSxrQkFBZ0QsdUVBQTNCWCx5QkFBMkI7O0FBQ3ZJTixpQkFBV29CLE9BQU9DLE1BQVAsQ0FBY3JCLFFBQWQsRUFBd0JpQixrQkFBeEIsQ0FBWCxDQUR1SSxDQUMvRTs7QUFFeEQsVUFBTUssb0JBQW9CQyxvQ0FBb0NQLGNBQXBDLEVBQW9EUixnQkFBcEQsRUFBc0VFLGlCQUF0RSxDQUExQjtBQUFBLFVBQ01jLFFBQVFoQixpQkFBaUJpQixnQkFBakIsQ0FBa0MxQixPQUFsQyxDQURkO0FBQUEsVUFFTTJCLE9BQU9oQixrQkFBa0JpQixhQUFsQixDQUFnQ0gsS0FBaEMsQ0FGYjs7QUFJQSxVQUFJWCxjQUFjVCxrQkFBa0J3QixtQkFBbEIsQ0FBc0NGLElBQXRDLEVBQTRDMUIsUUFBNUMsQ0FBbEI7O0FBRUFhLG9CQUFjQSxZQUFZZ0IsTUFBWixDQUFtQlAsaUJBQW5CLENBQWQ7O0FBRUEsVUFBTUosaUJBQWlCLElBQUlQLGNBQUosQ0FBbUJFLFdBQW5CLENBQXZCOztBQUVBLGFBQU9LLGNBQVA7QUFDRDs7OztFQXJCMEJmLFk7O0FBOEI3QjJCLE9BQU9DLE9BQVAsR0FBaUJwQixjQUFqQjs7QUFFQSxTQUFTWSxtQ0FBVCxDQUE2Q1AsY0FBN0MsRUFBNkRSLGdCQUE3RCxFQUErRUUsaUJBQS9FLEVBQWtHO0FBQ2hHLE1BQU1ZLG9CQUFvQk4sZUFBZWdCLE1BQWYsQ0FBc0IsVUFBU1YsaUJBQVQsRUFBNEJXLGFBQTVCLEVBQTJDO0FBQ3pGLFFBQU1DLDJCQUEyQmhDLFlBQVlpQyxzQkFBWixDQUFtQ0YsYUFBbkMsRUFBa0R6QixnQkFBbEQsRUFBb0VFLGlCQUFwRSxDQUFqQzs7QUFFQVksd0JBQW9CQSxrQkFBa0JPLE1BQWxCLENBQXlCSyx3QkFBekIsQ0FBcEI7O0FBRUEsV0FBT1osaUJBQVA7QUFDRCxHQU55QixFQU12QixFQU51QixDQUExQjs7QUFRQSxTQUFPQSxpQkFBUDtBQUNEIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcbiAgICAgIG1hcHBpbmdzID0gcmVxdWlyZSgnLi9tYXBwaW5ncycpLFxuICAgICAgcGFyc2VyVXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvcGFyc2VyJyksXG4gICAgICBncmFtbWFyVXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvZ3JhbW1hcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgRXh0ZW5kZWRCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9leHRlbmRlZEJORi9wYXJzZXInKSxcbiAgICAgIGRlZmF1bHRDdXN0b21HcmFtbWFycyA9IHJlcXVpcmUoJy4vZGVmYXVsdEN1c3RvbUdyYW1tYXJzJyksXG4gICAgICBkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzID0gcmVxdWlyZSgnLi9kZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzJyk7XG5cbmNvbnN0IHsgRXh0ZW5kZWRCTkZMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBleHRlbmRlZEJORkxleGVyID0gRXh0ZW5kZWRCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgZXh0ZW5kZWRCTkZQYXJzZXIgPSBFeHRlbmRlZEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQ3VzdG9tR3JhbW1hcnNBZGRpdGlvbmFsTWFwcGluZ3MoY3VzdG9tR3JhbW1hcnMsIGFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUdyYW1tYXJBbmRNYXBwaW5ncyhncmFtbWFyLCBtYXBwaW5ncywgY3VzdG9tR3JhbW1hcnMsIGFkZGl0aW9uYWxNYXBwaW5ncyk7XG4gIFxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21HcmFtbWFyQW5kTWFwcGluZ3MoZ3JhbW1hciwgbWFwcGluZ3MsIGN1c3RvbUdyYW1tYXJzID0gZGVmYXVsdEN1c3RvbUdyYW1tYXJzLCBhZGRpdGlvbmFsTWFwcGluZ3MgPSBkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzKSB7XG4gICAgbWFwcGluZ3MgPSBPYmplY3QuYXNzaWduKG1hcHBpbmdzLCBhZGRpdGlvbmFsTWFwcGluZ3MpOyAvLy9cblxuICAgIGNvbnN0IGN1c3RvbVByb2R1Y3Rpb25zID0gY3VzdG9tUHJvZHVjdGlvbnNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIGV4dGVuZGVkQk5GTGV4ZXIsIGV4dGVuZGVkQk5GUGFyc2VyKSxcbiAgICAgICAgICBsaW5lcyA9IGV4dGVuZGVkQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICBub2RlID0gZXh0ZW5kZWRCTkZQYXJzZXIubm9kZUZyb21MaW5lcyhsaW5lcyk7XG4gICAgXG4gICAgbGV0IHByb2R1Y3Rpb25zID0gRXh0ZW5kZWRCTkZQYXJzZXIuZ2VuZXJhdGVQcm9kdWN0aW9ucyhub2RlLCBtYXBwaW5ncyk7XG4gICAgXG4gICAgcHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucy5jb25jYXQoY3VzdG9tUHJvZHVjdGlvbnMpO1xuICAgIFxuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHByb2R1Y3Rpb25zKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxuXG4gIGZpbmRQcm9kdWN0aW9uKHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbnMgPSB0aGlzLmdldFByb2R1Y3Rpb25zKCk7XG5cbiAgICByZXR1cm4gcGFyc2VyVXRpbC5maW5kUHJvZHVjdGlvbihwcm9kdWN0aW9uTmFtZSwgcHJvZHVjdGlvbnMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG5cbmZ1bmN0aW9uIGN1c3RvbVByb2R1Y3Rpb25zRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzLCBleHRlbmRlZEJORkxleGVyLCBleHRlbmRlZEJORlBhcnNlcikge1xuICBjb25zdCBjdXN0b21Qcm9kdWN0aW9ucyA9IGN1c3RvbUdyYW1tYXJzLnJlZHVjZShmdW5jdGlvbihjdXN0b21Qcm9kdWN0aW9ucywgY3VzdG9tR3JhbW1hcikge1xuICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJQcm9kdWN0aW9ucyA9IGdyYW1tYXJVdGlsLnByb2R1Y3Rpb25zRnJvbUdyYW1tYXIoY3VzdG9tR3JhbW1hciwgZXh0ZW5kZWRCTkZMZXhlciwgZXh0ZW5kZWRCTkZQYXJzZXIpO1xuXG4gICAgY3VzdG9tUHJvZHVjdGlvbnMgPSBjdXN0b21Qcm9kdWN0aW9ucy5jb25jYXQoY3VzdG9tR3JhbW1hclByb2R1Y3Rpb25zKTtcbiAgICBcbiAgICByZXR1cm4gY3VzdG9tUHJvZHVjdGlvbnM7XG4gIH0sIFtdKTtcbiAgXG4gIHJldHVybiBjdXN0b21Qcm9kdWN0aW9ucztcbn1cbiJdfQ==