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
    defaultCustomGrammarMap = require('./defaultCustomGrammarMap'),
    defaultAdditionalMappings = require('./defaultAdditionalMappings');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer;


var extendedBNFLexer = ExtendedBNFLexer.fromNothing(),
    extendedBNFParser = ExtendedBNFParser.fromNothing(),
    defaultCustomGrammars = grammarUtil.grammarsFromGrammarMap(defaultCustomGrammarMap);

var FlorenceParser = function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
  }

  _createClass(FlorenceParser, null, [{
    key: 'fromCustomGrammarsAndAdditionalMappings',
    value: function fromCustomGrammarsAndAdditionalMappings(customGrammars, additionalMappings) {
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

FlorenceParser.defaultCustomGrammarMap = defaultCustomGrammarMap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJtYXBwaW5ncyIsImdyYW1tYXJVdGlsIiwiQ29tbW9uUGFyc2VyIiwiRXh0ZW5kZWRCTkZQYXJzZXIiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hck1hcCIsImRlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MiLCJFeHRlbmRlZEJORkxleGVyIiwiZXh0ZW5kZWRCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiZXh0ZW5kZWRCTkZQYXJzZXIiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hcnMiLCJncmFtbWFyc0Zyb21HcmFtbWFyTWFwIiwiRmxvcmVuY2VQYXJzZXIiLCJjdXN0b21HcmFtbWFycyIsImFkZGl0aW9uYWxNYXBwaW5ncyIsImZsb3JlbmNlUGFyc2VyIiwiZnJvbUdyYW1tYXJBbmRNYXBwaW5ncyIsIk9iamVjdCIsImFzc2lnbiIsImN1c3RvbVJ1bGVzIiwicnVsZXNGcm9tR3JhbW1hcnMiLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJub2RlIiwibm9kZUZyb21MaW5lcyIsInJ1bGVzIiwiZ2VuZXJhdGVSdWxlcyIsImNvbmNhdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsVUFBVUQsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUUsV0FBV0YsUUFBUSxZQUFSLENBRGpCO0FBQUEsSUFFTUcsY0FBY0gsUUFBUSxpQkFBUixDQUZwQjtBQUFBLElBR01JLGVBQWVKLFFBQVEsa0JBQVIsQ0FIckI7QUFBQSxJQUlNSyxvQkFBb0JMLFFBQVEsdUJBQVIsQ0FKMUI7QUFBQSxJQUtNTSwwQkFBMEJOLFFBQVEsMkJBQVIsQ0FMaEM7QUFBQSxJQU1NTyw0QkFBNEJQLFFBQVEsNkJBQVIsQ0FObEM7O0lBUVFRLGdCLEdBQXFCVCxNLENBQXJCUyxnQjs7O0FBRVIsSUFBTUMsbUJBQW1CRCxpQkFBaUJFLFdBQWpCLEVBQXpCO0FBQUEsSUFDTUMsb0JBQW9CTixrQkFBa0JLLFdBQWxCLEVBRDFCO0FBQUEsSUFFTUUsd0JBQXdCVCxZQUFZVSxzQkFBWixDQUFtQ1AsdUJBQW5DLENBRjlCOztJQUlNUSxjOzs7Ozs7Ozs7Ozs0REFDMkNDLGMsRUFBZ0JDLGtCLEVBQW9CO0FBQ2pGLFVBQU1DLGlCQUFpQkgsZUFBZUksc0JBQWYsQ0FBc0NqQixPQUF0QyxFQUErQ0MsUUFBL0MsRUFBeURhLGNBQXpELEVBQXlFQyxrQkFBekUsQ0FBdkI7O0FBRUEsYUFBT0MsY0FBUDtBQUNEOzs7MkNBRTZCaEIsTyxFQUFTQyxRLEVBQWtHO0FBQUEsVUFBeEZhLGNBQXdGLHVFQUF2RUgscUJBQXVFO0FBQUEsVUFBaERJLGtCQUFnRCx1RUFBM0JULHlCQUEyQjs7QUFDdklMLGlCQUFXaUIsT0FBT0MsTUFBUCxDQUFjbEIsUUFBZCxFQUF3QmMsa0JBQXhCLENBQVgsQ0FEdUksQ0FDL0U7O0FBRXhELFVBQU1LLGNBQWNsQixZQUFZbUIsaUJBQVosQ0FBOEJQLGNBQTlCLEVBQThDTixnQkFBOUMsRUFBZ0VFLGlCQUFoRSxDQUFwQjtBQUFBLFVBQ01ZLFFBQVFkLGlCQUFpQmUsZ0JBQWpCLENBQWtDdkIsT0FBbEMsQ0FEZDtBQUFBLFVBRU13QixPQUFPZCxrQkFBa0JlLGFBQWxCLENBQWdDSCxLQUFoQyxDQUZiOztBQUlBLFVBQUlJLFFBQVF0QixrQkFBa0J1QixhQUFsQixDQUFnQ0gsSUFBaEMsRUFBc0N2QixRQUF0QyxDQUFaOztBQUVBeUIsY0FBUUEsTUFBTUUsTUFBTixDQUFhUixXQUFiLENBQVI7O0FBRUEsVUFBTUosaUJBQWlCLElBQUlILGNBQUosQ0FBbUJhLEtBQW5CLENBQXZCOztBQUVBLGFBQU9WLGNBQVA7QUFDRDs7OztFQXJCMEJiLFk7O0FBd0I3QjBCLE9BQU9DLE9BQVAsR0FBaUJqQixjQUFqQjs7QUFFQUEsZUFBZWIsT0FBZixHQUF5QkEsT0FBekI7O0FBRUFhLGVBQWVaLFFBQWYsR0FBMEJBLFFBQTFCOztBQUVBWSxlQUFlUix1QkFBZixHQUF5Q0EsdUJBQXpDIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcbiAgICAgIG1hcHBpbmdzID0gcmVxdWlyZSgnLi9tYXBwaW5ncycpLFxuICAgICAgZ3JhbW1hclV0aWwgPSByZXF1aXJlKCcuLi91dGlsL2dyYW1tYXInKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIEV4dGVuZGVkQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vZXh0ZW5kZWRCTkYvcGFyc2VyJyksXG4gICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hck1hcCA9IHJlcXVpcmUoJy4vZGVmYXVsdEN1c3RvbUdyYW1tYXJNYXAnKSxcbiAgICAgIGRlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MgPSByZXF1aXJlKCcuL2RlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MnKTtcblxuY29uc3QgeyBFeHRlbmRlZEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGV4dGVuZGVkQk5GTGV4ZXIgPSBFeHRlbmRlZEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBleHRlbmRlZEJORlBhcnNlciA9IEV4dGVuZGVkQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hcnMgPSBncmFtbWFyVXRpbC5ncmFtbWFyc0Zyb21HcmFtbWFyTWFwKGRlZmF1bHRDdXN0b21HcmFtbWFyTWFwKTtcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbUN1c3RvbUdyYW1tYXJzQW5kQWRkaXRpb25hbE1hcHBpbmdzKGN1c3RvbUdyYW1tYXJzLCBhZGRpdGlvbmFsTWFwcGluZ3MpIHtcbiAgICBjb25zdCBmbG9yZW5jZVBhcnNlciA9IEZsb3JlbmNlUGFyc2VyLmZyb21HcmFtbWFyQW5kTWFwcGluZ3MoZ3JhbW1hciwgbWFwcGluZ3MsIGN1c3RvbUdyYW1tYXJzLCBhZGRpdGlvbmFsTWFwcGluZ3MpO1xuICBcbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tR3JhbW1hckFuZE1hcHBpbmdzKGdyYW1tYXIsIG1hcHBpbmdzLCBjdXN0b21HcmFtbWFycyA9IGRlZmF1bHRDdXN0b21HcmFtbWFycywgYWRkaXRpb25hbE1hcHBpbmdzID0gZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIG1hcHBpbmdzID0gT2JqZWN0LmFzc2lnbihtYXBwaW5ncywgYWRkaXRpb25hbE1hcHBpbmdzKTsgLy8vXG5cbiAgICBjb25zdCBjdXN0b21SdWxlcyA9IGdyYW1tYXJVdGlsLnJ1bGVzRnJvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzLCBleHRlbmRlZEJORkxleGVyLCBleHRlbmRlZEJORlBhcnNlciksXG4gICAgICAgICAgbGluZXMgPSBleHRlbmRlZEJORkxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgICAgbm9kZSA9IGV4dGVuZGVkQk5GUGFyc2VyLm5vZGVGcm9tTGluZXMobGluZXMpO1xuICAgIFxuICAgIGxldCBydWxlcyA9IEV4dGVuZGVkQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMobm9kZSwgbWFwcGluZ3MpO1xuICAgIFxuICAgIHJ1bGVzID0gcnVsZXMuY29uY2F0KGN1c3RvbVJ1bGVzKTtcbiAgICBcbiAgICBjb25zdCBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihydWxlcyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZVBhcnNlcjtcblxuRmxvcmVuY2VQYXJzZXIuZ3JhbW1hciA9IGdyYW1tYXI7XG5cbkZsb3JlbmNlUGFyc2VyLm1hcHBpbmdzID0gbWFwcGluZ3M7XG5cbkZsb3JlbmNlUGFyc2VyLmRlZmF1bHRDdXN0b21HcmFtbWFyTWFwID0gZGVmYXVsdEN1c3RvbUdyYW1tYXJNYXA7XG4iXX0=