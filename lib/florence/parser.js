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

var BNFLexer = lexers.BNFLexer;


var bnfLexer = BNFLexer.fromNothing(),
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

      var customProductions = customProductionsFromCustomGrammars(customGrammars, bnfLexer, extendedBNFParser),
          lines = bnfLexer.linesFromGrammar(grammar),
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

function customProductionsFromCustomGrammars(customGrammars, bnfLexer, extendedBNFParser) {
  var customProductions = customGrammars.reduce(function (customProductions, customGrammar) {
    var customGrammarProductions = grammarUtil.productionsFromGrammar(customGrammar, bnfLexer, extendedBNFParser);

    customProductions = customProductions.concat(customGrammarProductions);

    return customProductions;
  }, []);

  return customProductions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJtYXBwaW5ncyIsInBhcnNlclV0aWwiLCJncmFtbWFyVXRpbCIsIkNvbW1vblBhcnNlciIsIkV4dGVuZGVkQk5GUGFyc2VyIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXJzIiwiZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncyIsIkJORkxleGVyIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImV4dGVuZGVkQk5GUGFyc2VyIiwiRmxvcmVuY2VQYXJzZXIiLCJwcm9kdWN0aW9uTmFtZSIsInByb2R1Y3Rpb25zIiwiZ2V0UHJvZHVjdGlvbnMiLCJmaW5kUHJvZHVjdGlvbiIsImN1c3RvbUdyYW1tYXJzIiwiYWRkaXRpb25hbE1hcHBpbmdzIiwiZmxvcmVuY2VQYXJzZXIiLCJmcm9tR3JhbW1hckFuZE1hcHBpbmdzIiwiT2JqZWN0IiwiYXNzaWduIiwiY3VzdG9tUHJvZHVjdGlvbnMiLCJjdXN0b21Qcm9kdWN0aW9uc0Zyb21DdXN0b21HcmFtbWFycyIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsIm5vZGUiLCJub2RlRnJvbUxpbmVzIiwiZ2VuZXJhdGVQcm9kdWN0aW9ucyIsImNvbmNhdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWR1Y2UiLCJjdXN0b21HcmFtbWFyIiwiY3VzdG9tR3JhbW1hclByb2R1Y3Rpb25zIiwicHJvZHVjdGlvbnNGcm9tR3JhbW1hciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxVQUFVRCxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNRSxXQUFXRixRQUFRLFlBQVIsQ0FEakI7QUFBQSxJQUVNRyxhQUFhSCxRQUFRLGdCQUFSLENBRm5CO0FBQUEsSUFHTUksY0FBY0osUUFBUSxpQkFBUixDQUhwQjtBQUFBLElBSU1LLGVBQWVMLFFBQVEsa0JBQVIsQ0FKckI7QUFBQSxJQUtNTSxvQkFBb0JOLFFBQVEsdUJBQVIsQ0FMMUI7QUFBQSxJQU1NTyx3QkFBd0JQLFFBQVEseUJBQVIsQ0FOOUI7QUFBQSxJQU9NUSw0QkFBNEJSLFFBQVEsNkJBQVIsQ0FQbEM7O0lBU1FTLFEsR0FBYVYsTSxDQUFiVSxROzs7QUFFUixJQUFNQyxXQUFXRCxTQUFTRSxXQUFULEVBQWpCO0FBQUEsSUFDTUMsb0JBQW9CTixrQkFBa0JLLFdBQWxCLEVBRDFCOztJQUdNRSxjOzs7Ozs7Ozs7OzttQ0F1QldDLGMsRUFBZ0I7QUFDN0IsVUFBTUMsY0FBYyxLQUFLQyxjQUFMLEVBQXBCOztBQUVBLGFBQU9iLFdBQVdjLGNBQVgsQ0FBMEJILGNBQTFCLEVBQTBDQyxXQUExQyxDQUFQO0FBQ0Q7Ozt5REExQjJDRyxjLEVBQWdCQyxrQixFQUFvQjtBQUM5RSxVQUFNQyxpQkFBaUJQLGVBQWVRLHNCQUFmLENBQXNDcEIsT0FBdEMsRUFBK0NDLFFBQS9DLEVBQXlEZ0IsY0FBekQsRUFBeUVDLGtCQUF6RSxDQUF2Qjs7QUFFQSxhQUFPQyxjQUFQO0FBQ0Q7OzsyQ0FFNkJuQixPLEVBQVNDLFEsRUFBa0c7QUFBQSxVQUF4RmdCLGNBQXdGLHVFQUF2RVgscUJBQXVFO0FBQUEsVUFBaERZLGtCQUFnRCx1RUFBM0JYLHlCQUEyQjs7QUFDdklOLGlCQUFXb0IsT0FBT0MsTUFBUCxDQUFjckIsUUFBZCxFQUF3QmlCLGtCQUF4QixDQUFYLENBRHVJLENBQy9FOztBQUV4RCxVQUFNSyxvQkFBb0JDLG9DQUFvQ1AsY0FBcEMsRUFBb0RSLFFBQXBELEVBQThERSxpQkFBOUQsQ0FBMUI7QUFBQSxVQUNNYyxRQUFRaEIsU0FBU2lCLGdCQUFULENBQTBCMUIsT0FBMUIsQ0FEZDtBQUFBLFVBRU0yQixPQUFPaEIsa0JBQWtCaUIsYUFBbEIsQ0FBZ0NILEtBQWhDLENBRmI7O0FBSUEsVUFBSVgsY0FBY1Qsa0JBQWtCd0IsbUJBQWxCLENBQXNDRixJQUF0QyxFQUE0QzFCLFFBQTVDLENBQWxCOztBQUVBYSxvQkFBY0EsWUFBWWdCLE1BQVosQ0FBbUJQLGlCQUFuQixDQUFkOztBQUVBLFVBQU1KLGlCQUFpQixJQUFJUCxjQUFKLENBQW1CRSxXQUFuQixDQUF2Qjs7QUFFQSxhQUFPSyxjQUFQO0FBQ0Q7Ozs7RUFyQjBCZixZOztBQThCN0IyQixPQUFPQyxPQUFQLEdBQWlCcEIsY0FBakI7O0FBRUEsU0FBU1ksbUNBQVQsQ0FBNkNQLGNBQTdDLEVBQTZEUixRQUE3RCxFQUF1RUUsaUJBQXZFLEVBQTBGO0FBQ3hGLE1BQU1ZLG9CQUFvQk4sZUFBZWdCLE1BQWYsQ0FBc0IsVUFBU1YsaUJBQVQsRUFBNEJXLGFBQTVCLEVBQTJDO0FBQ3pGLFFBQU1DLDJCQUEyQmhDLFlBQVlpQyxzQkFBWixDQUFtQ0YsYUFBbkMsRUFBa0R6QixRQUFsRCxFQUE0REUsaUJBQTVELENBQWpDOztBQUVBWSx3QkFBb0JBLGtCQUFrQk8sTUFBbEIsQ0FBeUJLLHdCQUF6QixDQUFwQjs7QUFFQSxXQUFPWixpQkFBUDtBQUNELEdBTnlCLEVBTXZCLEVBTnVCLENBQTFCOztBQVFBLFNBQU9BLGlCQUFQO0FBQ0QiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxuICAgICAgbWFwcGluZ3MgPSByZXF1aXJlKCcuL21hcHBpbmdzJyksXG4gICAgICBwYXJzZXJVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9wYXJzZXInKSxcbiAgICAgIGdyYW1tYXJVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9ncmFtbWFyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBFeHRlbmRlZEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2V4dGVuZGVkQk5GL3BhcnNlcicpLFxuICAgICAgZGVmYXVsdEN1c3RvbUdyYW1tYXJzID0gcmVxdWlyZSgnLi9kZWZhdWx0Q3VzdG9tR3JhbW1hcnMnKSxcbiAgICAgIGRlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MgPSByZXF1aXJlKCcuL2RlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBleHRlbmRlZEJORlBhcnNlciA9IEV4dGVuZGVkQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21DdXN0b21HcmFtbWFyc0FkZGl0aW9uYWxNYXBwaW5ncyhjdXN0b21HcmFtbWFycywgYWRkaXRpb25hbE1hcHBpbmdzKSB7XG4gICAgY29uc3QgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tR3JhbW1hckFuZE1hcHBpbmdzKGdyYW1tYXIsIG1hcHBpbmdzLCBjdXN0b21HcmFtbWFycywgYWRkaXRpb25hbE1hcHBpbmdzKTtcbiAgXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUdyYW1tYXJBbmRNYXBwaW5ncyhncmFtbWFyLCBtYXBwaW5ncywgY3VzdG9tR3JhbW1hcnMgPSBkZWZhdWx0Q3VzdG9tR3JhbW1hcnMsIGFkZGl0aW9uYWxNYXBwaW5ncyA9IGRlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MpIHtcbiAgICBtYXBwaW5ncyA9IE9iamVjdC5hc3NpZ24obWFwcGluZ3MsIGFkZGl0aW9uYWxNYXBwaW5ncyk7IC8vL1xuXG4gICAgY29uc3QgY3VzdG9tUHJvZHVjdGlvbnMgPSBjdXN0b21Qcm9kdWN0aW9uc0Zyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycywgYm5mTGV4ZXIsIGV4dGVuZGVkQk5GUGFyc2VyKSxcbiAgICAgICAgICBsaW5lcyA9IGJuZkxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgICAgbm9kZSA9IGV4dGVuZGVkQk5GUGFyc2VyLm5vZGVGcm9tTGluZXMobGluZXMpO1xuICAgIFxuICAgIGxldCBwcm9kdWN0aW9ucyA9IEV4dGVuZGVkQk5GUGFyc2VyLmdlbmVyYXRlUHJvZHVjdGlvbnMobm9kZSwgbWFwcGluZ3MpO1xuICAgIFxuICAgIHByb2R1Y3Rpb25zID0gcHJvZHVjdGlvbnMuY29uY2F0KGN1c3RvbVByb2R1Y3Rpb25zKTtcbiAgICBcbiAgICBjb25zdCBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cblxuICBmaW5kUHJvZHVjdGlvbihwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25zID0gdGhpcy5nZXRQcm9kdWN0aW9ucygpO1xuXG4gICAgcmV0dXJuIHBhcnNlclV0aWwuZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUsIHByb2R1Y3Rpb25zKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlUGFyc2VyO1xuXG5mdW5jdGlvbiBjdXN0b21Qcm9kdWN0aW9uc0Zyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycywgYm5mTGV4ZXIsIGV4dGVuZGVkQk5GUGFyc2VyKSB7XG4gIGNvbnN0IGN1c3RvbVByb2R1Y3Rpb25zID0gY3VzdG9tR3JhbW1hcnMucmVkdWNlKGZ1bmN0aW9uKGN1c3RvbVByb2R1Y3Rpb25zLCBjdXN0b21HcmFtbWFyKSB7XG4gICAgY29uc3QgY3VzdG9tR3JhbW1hclByb2R1Y3Rpb25zID0gZ3JhbW1hclV0aWwucHJvZHVjdGlvbnNGcm9tR3JhbW1hcihjdXN0b21HcmFtbWFyLCBibmZMZXhlciwgZXh0ZW5kZWRCTkZQYXJzZXIpO1xuXG4gICAgY3VzdG9tUHJvZHVjdGlvbnMgPSBjdXN0b21Qcm9kdWN0aW9ucy5jb25jYXQoY3VzdG9tR3JhbW1hclByb2R1Y3Rpb25zKTtcbiAgICBcbiAgICByZXR1cm4gY3VzdG9tUHJvZHVjdGlvbnM7XG4gIH0sIFtdKTtcbiAgXG4gIHJldHVybiBjdXN0b21Qcm9kdWN0aW9ucztcbn1cbiJdfQ==