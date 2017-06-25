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
    defaultCustomGrammars = grammarUtil.grammarsFromGrammarsMap(defaultCustomGrammarMap);

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

FlorenceParser.defaultCustomGrammarMap = defaultCustomGrammarMap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJtYXBwaW5ncyIsImdyYW1tYXJVdGlsIiwiQ29tbW9uUGFyc2VyIiwiRXh0ZW5kZWRCTkZQYXJzZXIiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hck1hcCIsImRlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MiLCJFeHRlbmRlZEJORkxleGVyIiwiZXh0ZW5kZWRCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiZXh0ZW5kZWRCTkZQYXJzZXIiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hcnMiLCJncmFtbWFyc0Zyb21HcmFtbWFyc01hcCIsIkZsb3JlbmNlUGFyc2VyIiwiY3VzdG9tR3JhbW1hcnMiLCJhZGRpdGlvbmFsTWFwcGluZ3MiLCJmbG9yZW5jZVBhcnNlciIsImZyb21HcmFtbWFyQW5kTWFwcGluZ3MiLCJPYmplY3QiLCJhc3NpZ24iLCJjdXN0b21SdWxlcyIsInJ1bGVzRnJvbUdyYW1tYXJzIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwibm9kZSIsIm5vZGVGcm9tTGluZXMiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJjb25jYXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFVBQVVELFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01FLFdBQVdGLFFBQVEsWUFBUixDQURqQjtBQUFBLElBRU1HLGNBQWNILFFBQVEsaUJBQVIsQ0FGcEI7QUFBQSxJQUdNSSxlQUFlSixRQUFRLGtCQUFSLENBSHJCO0FBQUEsSUFJTUssb0JBQW9CTCxRQUFRLHVCQUFSLENBSjFCO0FBQUEsSUFLTU0sMEJBQTBCTixRQUFRLDJCQUFSLENBTGhDO0FBQUEsSUFNTU8sNEJBQTRCUCxRQUFRLDZCQUFSLENBTmxDOztJQVFRUSxnQixHQUFxQlQsTSxDQUFyQlMsZ0I7OztBQUVSLElBQU1DLG1CQUFtQkQsaUJBQWlCRSxXQUFqQixFQUF6QjtBQUFBLElBQ01DLG9CQUFvQk4sa0JBQWtCSyxXQUFsQixFQUQxQjtBQUFBLElBRU1FLHdCQUF3QlQsWUFBWVUsdUJBQVosQ0FBb0NQLHVCQUFwQyxDQUY5Qjs7SUFJTVEsYzs7Ozs7Ozs7Ozs7eURBQ3dDQyxjLEVBQWdCQyxrQixFQUFvQjtBQUM5RSxVQUFNQyxpQkFBaUJILGVBQWVJLHNCQUFmLENBQXNDakIsT0FBdEMsRUFBK0NDLFFBQS9DLEVBQXlEYSxjQUF6RCxFQUF5RUMsa0JBQXpFLENBQXZCOztBQUVBLGFBQU9DLGNBQVA7QUFDRDs7OzJDQUU2QmhCLE8sRUFBU0MsUSxFQUFrRztBQUFBLFVBQXhGYSxjQUF3Rix1RUFBdkVILHFCQUF1RTtBQUFBLFVBQWhESSxrQkFBZ0QsdUVBQTNCVCx5QkFBMkI7O0FBQ3ZJTCxpQkFBV2lCLE9BQU9DLE1BQVAsQ0FBY2xCLFFBQWQsRUFBd0JjLGtCQUF4QixDQUFYLENBRHVJLENBQy9FOztBQUV4RCxVQUFNSyxjQUFjbEIsWUFBWW1CLGlCQUFaLENBQThCUCxjQUE5QixFQUE4Q04sZ0JBQTlDLEVBQWdFRSxpQkFBaEUsQ0FBcEI7QUFBQSxVQUNNWSxRQUFRZCxpQkFBaUJlLGdCQUFqQixDQUFrQ3ZCLE9BQWxDLENBRGQ7QUFBQSxVQUVNd0IsT0FBT2Qsa0JBQWtCZSxhQUFsQixDQUFnQ0gsS0FBaEMsQ0FGYjs7QUFJQSxVQUFJSSxRQUFRdEIsa0JBQWtCdUIsYUFBbEIsQ0FBZ0NILElBQWhDLEVBQXNDdkIsUUFBdEMsQ0FBWjs7QUFFQXlCLGNBQVFBLE1BQU1FLE1BQU4sQ0FBYVIsV0FBYixDQUFSOztBQUVBLFVBQU1KLGlCQUFpQixJQUFJSCxjQUFKLENBQW1CYSxLQUFuQixDQUF2Qjs7QUFFQSxhQUFPVixjQUFQO0FBQ0Q7Ozs7RUFyQjBCYixZOztBQXdCN0IwQixPQUFPQyxPQUFQLEdBQWlCakIsY0FBakI7O0FBRUFBLGVBQWViLE9BQWYsR0FBeUJBLE9BQXpCOztBQUVBYSxlQUFlWixRQUFmLEdBQTBCQSxRQUExQjs7QUFFQVksZUFBZVIsdUJBQWYsR0FBeUNBLHVCQUF6QyIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXG4gICAgICBtYXBwaW5ncyA9IHJlcXVpcmUoJy4vbWFwcGluZ3MnKSxcbiAgICAgIGdyYW1tYXJVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9ncmFtbWFyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBFeHRlbmRlZEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2V4dGVuZGVkQk5GL3BhcnNlcicpLFxuICAgICAgZGVmYXVsdEN1c3RvbUdyYW1tYXJNYXAgPSByZXF1aXJlKCcuL2RlZmF1bHRDdXN0b21HcmFtbWFyTWFwJyksXG4gICAgICBkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzID0gcmVxdWlyZSgnLi9kZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzJyk7XG5cbmNvbnN0IHsgRXh0ZW5kZWRCTkZMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBleHRlbmRlZEJORkxleGVyID0gRXh0ZW5kZWRCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgZXh0ZW5kZWRCTkZQYXJzZXIgPSBFeHRlbmRlZEJORlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgZGVmYXVsdEN1c3RvbUdyYW1tYXJzID0gZ3JhbW1hclV0aWwuZ3JhbW1hcnNGcm9tR3JhbW1hcnNNYXAoZGVmYXVsdEN1c3RvbUdyYW1tYXJNYXApO1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQ3VzdG9tR3JhbW1hcnNBZGRpdGlvbmFsTWFwcGluZ3MoY3VzdG9tR3JhbW1hcnMsIGFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUdyYW1tYXJBbmRNYXBwaW5ncyhncmFtbWFyLCBtYXBwaW5ncywgY3VzdG9tR3JhbW1hcnMsIGFkZGl0aW9uYWxNYXBwaW5ncyk7XG4gIFxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21HcmFtbWFyQW5kTWFwcGluZ3MoZ3JhbW1hciwgbWFwcGluZ3MsIGN1c3RvbUdyYW1tYXJzID0gZGVmYXVsdEN1c3RvbUdyYW1tYXJzLCBhZGRpdGlvbmFsTWFwcGluZ3MgPSBkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzKSB7XG4gICAgbWFwcGluZ3MgPSBPYmplY3QuYXNzaWduKG1hcHBpbmdzLCBhZGRpdGlvbmFsTWFwcGluZ3MpOyAvLy9cblxuICAgIGNvbnN0IGN1c3RvbVJ1bGVzID0gZ3JhbW1hclV0aWwucnVsZXNGcm9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIGV4dGVuZGVkQk5GTGV4ZXIsIGV4dGVuZGVkQk5GUGFyc2VyKSxcbiAgICAgICAgICBsaW5lcyA9IGV4dGVuZGVkQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICBub2RlID0gZXh0ZW5kZWRCTkZQYXJzZXIubm9kZUZyb21MaW5lcyhsaW5lcyk7XG4gICAgXG4gICAgbGV0IHJ1bGVzID0gRXh0ZW5kZWRCTkZQYXJzZXIuZ2VuZXJhdGVSdWxlcyhub2RlLCBtYXBwaW5ncyk7XG4gICAgXG4gICAgcnVsZXMgPSBydWxlcy5jb25jYXQoY3VzdG9tUnVsZXMpO1xuICAgIFxuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHJ1bGVzKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlUGFyc2VyO1xuXG5GbG9yZW5jZVBhcnNlci5ncmFtbWFyID0gZ3JhbW1hcjtcblxuRmxvcmVuY2VQYXJzZXIubWFwcGluZ3MgPSBtYXBwaW5ncztcblxuRmxvcmVuY2VQYXJzZXIuZGVmYXVsdEN1c3RvbUdyYW1tYXJNYXAgPSBkZWZhdWx0Q3VzdG9tR3JhbW1hck1hcDtcbiJdfQ==