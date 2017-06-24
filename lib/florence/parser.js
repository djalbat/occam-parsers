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
    defaultCustomGrammars = grammarUtil.grammarsFromGrammarsMap(defaultCustomGrammarsMap);

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

      var customRules = grammarUtil.rulesFromGrammars(customGrammars, extendedBNFLexer, extendedBNFParser),
          lines = extendedBNFLexer.linesFromGrammar(grammar),
          node = extendedBNFParser.nodeFromLines(lines);

      var rules = ExtendedBNFParser.generateRules(node, mappings);

      rules = rules.concat(customRules);

      var florenceParser = new FlorenceParser(rules);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;

FlorenceParser.grammar = grammar;

FlorenceParser.mappings = mappings;

FlorenceParser.defaultCustomGrammarsMap = defaultCustomGrammarsMap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJtYXBwaW5ncyIsImdyYW1tYXJVdGlsIiwiQ29tbW9uUGFyc2VyIiwiRXh0ZW5kZWRCTkZQYXJzZXIiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hcnNNYXAiLCJkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzIiwiRXh0ZW5kZWRCTkZMZXhlciIsImV4dGVuZGVkQk5GTGV4ZXIiLCJmcm9tTm90aGluZyIsImV4dGVuZGVkQk5GUGFyc2VyIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXJzIiwiZ3JhbW1hcnNGcm9tR3JhbW1hcnNNYXAiLCJGbG9yZW5jZVBhcnNlciIsImN1c3RvbUdyYW1tYXJzIiwiYWRkaXRpb25hbE1hcHBpbmdzIiwiZmxvcmVuY2VQYXJzZXIiLCJmcm9tR3JhbW1hckFuZE1hcHBpbmdzIiwiT2JqZWN0IiwiYXNzaWduIiwiY3VzdG9tUnVsZXMiLCJydWxlc0Zyb21HcmFtbWFycyIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsIm5vZGUiLCJub2RlRnJvbUxpbmVzIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwiY29uY2F0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxVQUFVRCxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNRSxXQUFXRixRQUFRLFlBQVIsQ0FEakI7QUFBQSxJQUVNRyxjQUFjSCxRQUFRLGlCQUFSLENBRnBCO0FBQUEsSUFHTUksZUFBZUosUUFBUSxrQkFBUixDQUhyQjtBQUFBLElBSU1LLG9CQUFvQkwsUUFBUSx1QkFBUixDQUoxQjtBQUFBLElBS01NLDJCQUEyQk4sUUFBUSw0QkFBUixDQUxqQztBQUFBLElBTU1PLDRCQUE0QlAsUUFBUSw2QkFBUixDQU5sQzs7SUFRUVEsZ0IsR0FBcUJULE0sQ0FBckJTLGdCOzs7QUFFUixJQUFNQyxtQkFBbUJELGlCQUFpQkUsV0FBakIsRUFBekI7QUFBQSxJQUNNQyxvQkFBb0JOLGtCQUFrQkssV0FBbEIsRUFEMUI7QUFBQSxJQUVNRSx3QkFBd0JULFlBQVlVLHVCQUFaLENBQW9DUCx3QkFBcEMsQ0FGOUI7O0lBSU1RLGM7Ozs7Ozs7Ozs7O3lEQUN3Q0MsYyxFQUFnQkMsa0IsRUFBb0I7QUFDOUUsVUFBTUMsaUJBQWlCSCxlQUFlSSxzQkFBZixDQUFzQ2pCLE9BQXRDLEVBQStDQyxRQUEvQyxFQUF5RGEsY0FBekQsRUFBeUVDLGtCQUF6RSxDQUF2Qjs7QUFFQSxhQUFPQyxjQUFQO0FBQ0Q7OzsyQ0FFNkJoQixPLEVBQVNDLFEsRUFBa0c7QUFBQSxVQUF4RmEsY0FBd0YsdUVBQXZFSCxxQkFBdUU7QUFBQSxVQUFoREksa0JBQWdELHVFQUEzQlQseUJBQTJCOztBQUN2SUwsaUJBQVdpQixPQUFPQyxNQUFQLENBQWNsQixRQUFkLEVBQXdCYyxrQkFBeEIsQ0FBWCxDQUR1SSxDQUMvRTs7QUFFeEQsVUFBTUssY0FBY2xCLFlBQVltQixpQkFBWixDQUE4QlAsY0FBOUIsRUFBOENOLGdCQUE5QyxFQUFnRUUsaUJBQWhFLENBQXBCO0FBQUEsVUFDTVksUUFBUWQsaUJBQWlCZSxnQkFBakIsQ0FBa0N2QixPQUFsQyxDQURkO0FBQUEsVUFFTXdCLE9BQU9kLGtCQUFrQmUsYUFBbEIsQ0FBZ0NILEtBQWhDLENBRmI7O0FBSUEsVUFBSUksUUFBUXRCLGtCQUFrQnVCLGFBQWxCLENBQWdDSCxJQUFoQyxFQUFzQ3ZCLFFBQXRDLENBQVo7O0FBRUF5QixjQUFRQSxNQUFNRSxNQUFOLENBQWFSLFdBQWIsQ0FBUjs7QUFFQSxVQUFNSixpQkFBaUIsSUFBSUgsY0FBSixDQUFtQmEsS0FBbkIsQ0FBdkI7O0FBRUEsYUFBT1YsY0FBUDtBQUNEOzs7O0VBckIwQmIsWTs7QUF3QjdCMEIsT0FBT0MsT0FBUCxHQUFpQmpCLGNBQWpCOztBQUVBQSxlQUFlYixPQUFmLEdBQXlCQSxPQUF6Qjs7QUFFQWEsZUFBZVosUUFBZixHQUEwQkEsUUFBMUI7O0FBRUFZLGVBQWVSLHdCQUFmLEdBQTBDQSx3QkFBMUMiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxuICAgICAgbWFwcGluZ3MgPSByZXF1aXJlKCcuL21hcHBpbmdzJyksXG4gICAgICBncmFtbWFyVXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvZ3JhbW1hcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgRXh0ZW5kZWRCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9leHRlbmRlZEJORi9wYXJzZXInKSxcbiAgICAgIGRlZmF1bHRDdXN0b21HcmFtbWFyc01hcCA9IHJlcXVpcmUoJy4vZGVmYXVsdEN1c3RvbUdyYW1tYXJzTWFwJyksXG4gICAgICBkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzID0gcmVxdWlyZSgnLi9kZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzJyk7XG5cbmNvbnN0IHsgRXh0ZW5kZWRCTkZMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBleHRlbmRlZEJORkxleGVyID0gRXh0ZW5kZWRCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgZXh0ZW5kZWRCTkZQYXJzZXIgPSBFeHRlbmRlZEJORlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgZGVmYXVsdEN1c3RvbUdyYW1tYXJzID0gZ3JhbW1hclV0aWwuZ3JhbW1hcnNGcm9tR3JhbW1hcnNNYXAoZGVmYXVsdEN1c3RvbUdyYW1tYXJzTWFwKTtcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbUN1c3RvbUdyYW1tYXJzQWRkaXRpb25hbE1hcHBpbmdzKGN1c3RvbUdyYW1tYXJzLCBhZGRpdGlvbmFsTWFwcGluZ3MpIHtcbiAgICBjb25zdCBmbG9yZW5jZVBhcnNlciA9IEZsb3JlbmNlUGFyc2VyLmZyb21HcmFtbWFyQW5kTWFwcGluZ3MoZ3JhbW1hciwgbWFwcGluZ3MsIGN1c3RvbUdyYW1tYXJzLCBhZGRpdGlvbmFsTWFwcGluZ3MpO1xuICBcbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tR3JhbW1hckFuZE1hcHBpbmdzKGdyYW1tYXIsIG1hcHBpbmdzLCBjdXN0b21HcmFtbWFycyA9IGRlZmF1bHRDdXN0b21HcmFtbWFycywgYWRkaXRpb25hbE1hcHBpbmdzID0gZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIG1hcHBpbmdzID0gT2JqZWN0LmFzc2lnbihtYXBwaW5ncywgYWRkaXRpb25hbE1hcHBpbmdzKTsgLy8vXG5cbiAgICBjb25zdCBjdXN0b21SdWxlcyA9IGdyYW1tYXJVdGlsLnJ1bGVzRnJvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzLCBleHRlbmRlZEJORkxleGVyLCBleHRlbmRlZEJORlBhcnNlciksXG4gICAgICAgICAgbGluZXMgPSBleHRlbmRlZEJORkxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgICAgbm9kZSA9IGV4dGVuZGVkQk5GUGFyc2VyLm5vZGVGcm9tTGluZXMobGluZXMpO1xuICAgIFxuICAgIGxldCBydWxlcyA9IEV4dGVuZGVkQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMobm9kZSwgbWFwcGluZ3MpO1xuICAgIFxuICAgIHJ1bGVzID0gcnVsZXMuY29uY2F0KGN1c3RvbVJ1bGVzKTtcbiAgICBcbiAgICBjb25zdCBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihydWxlcyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZVBhcnNlcjtcblxuRmxvcmVuY2VQYXJzZXIuZ3JhbW1hciA9IGdyYW1tYXI7XG5cbkZsb3JlbmNlUGFyc2VyLm1hcHBpbmdzID0gbWFwcGluZ3M7XG5cbkZsb3JlbmNlUGFyc2VyLmRlZmF1bHRDdXN0b21HcmFtbWFyc01hcCA9IGRlZmF1bHRDdXN0b21HcmFtbWFyc01hcDtcbiJdfQ==