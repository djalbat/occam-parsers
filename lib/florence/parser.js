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

function customProductionsFromCustomGrammars(customGrammars, extendedBNFLexer, extendedBNFParser) {
  var customProductions = customGrammars.reduce(function (customProductions, customGrammar) {
    var customGrammarProductions = grammarUtil.productionsFromGrammar(customGrammar, extendedBNFLexer, extendedBNFParser);

    customProductions = customProductions.concat(customGrammarProductions);

    return customProductions;
  }, []);

  return customProductions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJtYXBwaW5ncyIsImdyYW1tYXJVdGlsIiwiQ29tbW9uUGFyc2VyIiwiRXh0ZW5kZWRCTkZQYXJzZXIiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hcnMiLCJkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzIiwiRXh0ZW5kZWRCTkZMZXhlciIsImV4dGVuZGVkQk5GTGV4ZXIiLCJmcm9tTm90aGluZyIsImV4dGVuZGVkQk5GUGFyc2VyIiwiRmxvcmVuY2VQYXJzZXIiLCJjdXN0b21HcmFtbWFycyIsImFkZGl0aW9uYWxNYXBwaW5ncyIsImZsb3JlbmNlUGFyc2VyIiwiZnJvbUdyYW1tYXJBbmRNYXBwaW5ncyIsIk9iamVjdCIsImFzc2lnbiIsImN1c3RvbVByb2R1Y3Rpb25zIiwiY3VzdG9tUHJvZHVjdGlvbnNGcm9tQ3VzdG9tR3JhbW1hcnMiLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJub2RlIiwibm9kZUZyb21MaW5lcyIsInByb2R1Y3Rpb25zIiwiZ2VuZXJhdGVQcm9kdWN0aW9ucyIsImNvbmNhdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWR1Y2UiLCJjdXN0b21HcmFtbWFyIiwiY3VzdG9tR3JhbW1hclByb2R1Y3Rpb25zIiwicHJvZHVjdGlvbnNGcm9tR3JhbW1hciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxVQUFVRCxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNRSxXQUFXRixRQUFRLFlBQVIsQ0FEakI7QUFBQSxJQUVNRyxjQUFjSCxRQUFRLGlCQUFSLENBRnBCO0FBQUEsSUFHTUksZUFBZUosUUFBUSxrQkFBUixDQUhyQjtBQUFBLElBSU1LLG9CQUFvQkwsUUFBUSx1QkFBUixDQUoxQjtBQUFBLElBS01NLHdCQUF3Qk4sUUFBUSx5QkFBUixDQUw5QjtBQUFBLElBTU1PLDRCQUE0QlAsUUFBUSw2QkFBUixDQU5sQzs7SUFRUVEsZ0IsR0FBcUJULE0sQ0FBckJTLGdCOzs7QUFFUixJQUFNQyxtQkFBbUJELGlCQUFpQkUsV0FBakIsRUFBekI7QUFBQSxJQUNNQyxvQkFBb0JOLGtCQUFrQkssV0FBbEIsRUFEMUI7O0lBR01FLGM7Ozs7Ozs7Ozs7O3lEQUN3Q0MsYyxFQUFnQkMsa0IsRUFBb0I7QUFDOUUsVUFBTUMsaUJBQWlCSCxlQUFlSSxzQkFBZixDQUFzQ2YsT0FBdEMsRUFBK0NDLFFBQS9DLEVBQXlEVyxjQUF6RCxFQUF5RUMsa0JBQXpFLENBQXZCOztBQUVBLGFBQU9DLGNBQVA7QUFDRDs7OzJDQUU2QmQsTyxFQUFTQyxRLEVBQWtHO0FBQUEsVUFBeEZXLGNBQXdGLHVFQUF2RVAscUJBQXVFO0FBQUEsVUFBaERRLGtCQUFnRCx1RUFBM0JQLHlCQUEyQjs7QUFDdklMLGlCQUFXZSxPQUFPQyxNQUFQLENBQWNoQixRQUFkLEVBQXdCWSxrQkFBeEIsQ0FBWCxDQUR1SSxDQUMvRTs7QUFFeEQsVUFBTUssb0JBQW9CQyxvQ0FBb0NQLGNBQXBDLEVBQW9ESixnQkFBcEQsRUFBc0VFLGlCQUF0RSxDQUExQjtBQUFBLFVBQ01VLFFBQVFaLGlCQUFpQmEsZ0JBQWpCLENBQWtDckIsT0FBbEMsQ0FEZDtBQUFBLFVBRU1zQixPQUFPWixrQkFBa0JhLGFBQWxCLENBQWdDSCxLQUFoQyxDQUZiOztBQUlBLFVBQUlJLGNBQWNwQixrQkFBa0JxQixtQkFBbEIsQ0FBc0NILElBQXRDLEVBQTRDckIsUUFBNUMsQ0FBbEI7O0FBRUF1QixvQkFBY0EsWUFBWUUsTUFBWixDQUFtQlIsaUJBQW5CLENBQWQ7O0FBRUEsVUFBTUosaUJBQWlCLElBQUlILGNBQUosQ0FBbUJhLFdBQW5CLENBQXZCOztBQUVBLGFBQU9WLGNBQVA7QUFDRDs7OztFQXJCMEJYLFk7O0FBd0I3QndCLE9BQU9DLE9BQVAsR0FBaUJqQixjQUFqQjs7QUFFQSxTQUFTUSxtQ0FBVCxDQUE2Q1AsY0FBN0MsRUFBNkRKLGdCQUE3RCxFQUErRUUsaUJBQS9FLEVBQWtHO0FBQ2hHLE1BQU1RLG9CQUFvQk4sZUFBZWlCLE1BQWYsQ0FBc0IsVUFBU1gsaUJBQVQsRUFBNEJZLGFBQTVCLEVBQTJDO0FBQ3pGLFFBQU1DLDJCQUEyQjdCLFlBQVk4QixzQkFBWixDQUFtQ0YsYUFBbkMsRUFBa0R0QixnQkFBbEQsRUFBb0VFLGlCQUFwRSxDQUFqQzs7QUFFQVEsd0JBQW9CQSxrQkFBa0JRLE1BQWxCLENBQXlCSyx3QkFBekIsQ0FBcEI7O0FBRUEsV0FBT2IsaUJBQVA7QUFDRCxHQU55QixFQU12QixFQU51QixDQUExQjs7QUFRQSxTQUFPQSxpQkFBUDtBQUNEIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcbiAgICAgIG1hcHBpbmdzID0gcmVxdWlyZSgnLi9tYXBwaW5ncycpLFxuICAgICAgZ3JhbW1hclV0aWwgPSByZXF1aXJlKCcuLi91dGlsL2dyYW1tYXInKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIEV4dGVuZGVkQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vZXh0ZW5kZWRCTkYvcGFyc2VyJyksXG4gICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hcnMgPSByZXF1aXJlKCcuL2RlZmF1bHRDdXN0b21HcmFtbWFycycpLFxuICAgICAgZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncyA9IHJlcXVpcmUoJy4vZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncycpO1xuXG5jb25zdCB7IEV4dGVuZGVkQk5GTGV4ZXIgfSA9IGxleGVycztcblxuY29uc3QgZXh0ZW5kZWRCTkZMZXhlciA9IEV4dGVuZGVkQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGV4dGVuZGVkQk5GUGFyc2VyID0gRXh0ZW5kZWRCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbUN1c3RvbUdyYW1tYXJzQWRkaXRpb25hbE1hcHBpbmdzKGN1c3RvbUdyYW1tYXJzLCBhZGRpdGlvbmFsTWFwcGluZ3MpIHtcbiAgICBjb25zdCBmbG9yZW5jZVBhcnNlciA9IEZsb3JlbmNlUGFyc2VyLmZyb21HcmFtbWFyQW5kTWFwcGluZ3MoZ3JhbW1hciwgbWFwcGluZ3MsIGN1c3RvbUdyYW1tYXJzLCBhZGRpdGlvbmFsTWFwcGluZ3MpO1xuICBcbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tR3JhbW1hckFuZE1hcHBpbmdzKGdyYW1tYXIsIG1hcHBpbmdzLCBjdXN0b21HcmFtbWFycyA9IGRlZmF1bHRDdXN0b21HcmFtbWFycywgYWRkaXRpb25hbE1hcHBpbmdzID0gZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIG1hcHBpbmdzID0gT2JqZWN0LmFzc2lnbihtYXBwaW5ncywgYWRkaXRpb25hbE1hcHBpbmdzKTsgLy8vXG5cbiAgICBjb25zdCBjdXN0b21Qcm9kdWN0aW9ucyA9IGN1c3RvbVByb2R1Y3Rpb25zRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzLCBleHRlbmRlZEJORkxleGVyLCBleHRlbmRlZEJORlBhcnNlciksXG4gICAgICAgICAgbGluZXMgPSBleHRlbmRlZEJORkxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgICAgbm9kZSA9IGV4dGVuZGVkQk5GUGFyc2VyLm5vZGVGcm9tTGluZXMobGluZXMpO1xuICAgIFxuICAgIGxldCBwcm9kdWN0aW9ucyA9IEV4dGVuZGVkQk5GUGFyc2VyLmdlbmVyYXRlUHJvZHVjdGlvbnMobm9kZSwgbWFwcGluZ3MpO1xuICAgIFxuICAgIHByb2R1Y3Rpb25zID0gcHJvZHVjdGlvbnMuY29uY2F0KGN1c3RvbVByb2R1Y3Rpb25zKTtcbiAgICBcbiAgICBjb25zdCBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZVBhcnNlcjtcblxuZnVuY3Rpb24gY3VzdG9tUHJvZHVjdGlvbnNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIGV4dGVuZGVkQk5GTGV4ZXIsIGV4dGVuZGVkQk5GUGFyc2VyKSB7XG4gIGNvbnN0IGN1c3RvbVByb2R1Y3Rpb25zID0gY3VzdG9tR3JhbW1hcnMucmVkdWNlKGZ1bmN0aW9uKGN1c3RvbVByb2R1Y3Rpb25zLCBjdXN0b21HcmFtbWFyKSB7XG4gICAgY29uc3QgY3VzdG9tR3JhbW1hclByb2R1Y3Rpb25zID0gZ3JhbW1hclV0aWwucHJvZHVjdGlvbnNGcm9tR3JhbW1hcihjdXN0b21HcmFtbWFyLCBleHRlbmRlZEJORkxleGVyLCBleHRlbmRlZEJORlBhcnNlcik7XG5cbiAgICBjdXN0b21Qcm9kdWN0aW9ucyA9IGN1c3RvbVByb2R1Y3Rpb25zLmNvbmNhdChjdXN0b21HcmFtbWFyUHJvZHVjdGlvbnMpO1xuICAgIFxuICAgIHJldHVybiBjdXN0b21Qcm9kdWN0aW9ucztcbiAgfSwgW10pO1xuICBcbiAgcmV0dXJuIGN1c3RvbVByb2R1Y3Rpb25zO1xufVxuIl19