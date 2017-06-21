'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var grammar = require('./grammar'),
    mappings = require('./mappings'),
    BNFParser = require('../bnf/parser'),
    parserUtil = require('../util/parser'),
    grammarUtil = require('../util/grammar'),
    CommonParser = require('../common/parser'),
    defaultCustomGrammars = require('./defaultCustomGrammars'),
    defaultAdditionalMappings = require('./defaultAdditionalMappings');

var BNFLexer = lexers.BNFLexer;


var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing();

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

      var customProductions = customProductionsFromCustomGrammars(customGrammars, bnfLexer, bnfParser),
          lines = bnfLexer.linesFromGrammar(grammar),
          node = bnfParser.nodeFromLines(lines);

      var productions = BNFParser.generateProductions(node, mappings);

      productions = productions.concat(customProductions);

      var florenceParser = new FlorenceParser(productions);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;

function customProductionsFromCustomGrammars(customGrammars, bnfLexer, bnfParser) {
  var customProductions = customGrammars.reduce(function (customProductions, customGrammar) {
    var customGrammarProductions = grammarUtil.productionsFromGrammar(customGrammar, bnfLexer, bnfParser);

    customProductions = customProductions.concat(customGrammarProductions);

    return customProductions;
  }, []);

  return customProductions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJtYXBwaW5ncyIsIkJORlBhcnNlciIsInBhcnNlclV0aWwiLCJncmFtbWFyVXRpbCIsIkNvbW1vblBhcnNlciIsImRlZmF1bHRDdXN0b21HcmFtbWFycyIsImRlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MiLCJCTkZMZXhlciIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJGbG9yZW5jZVBhcnNlciIsInByb2R1Y3Rpb25OYW1lIiwicHJvZHVjdGlvbnMiLCJnZXRQcm9kdWN0aW9ucyIsImZpbmRQcm9kdWN0aW9uIiwiY3VzdG9tR3JhbW1hcnMiLCJhZGRpdGlvbmFsTWFwcGluZ3MiLCJmbG9yZW5jZVBhcnNlciIsImZyb21HcmFtbWFyQW5kTWFwcGluZ3MiLCJPYmplY3QiLCJhc3NpZ24iLCJjdXN0b21Qcm9kdWN0aW9ucyIsImN1c3RvbVByb2R1Y3Rpb25zRnJvbUN1c3RvbUdyYW1tYXJzIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwibm9kZSIsIm5vZGVGcm9tTGluZXMiLCJnZW5lcmF0ZVByb2R1Y3Rpb25zIiwiY29uY2F0IiwibW9kdWxlIiwiZXhwb3J0cyIsInJlZHVjZSIsImN1c3RvbUdyYW1tYXIiLCJjdXN0b21HcmFtbWFyUHJvZHVjdGlvbnMiLCJwcm9kdWN0aW9uc0Zyb21HcmFtbWFyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFVBQVVELFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01FLFdBQVdGLFFBQVEsWUFBUixDQURqQjtBQUFBLElBRU1HLFlBQVlILFFBQVEsZUFBUixDQUZsQjtBQUFBLElBR01JLGFBQWFKLFFBQVEsZ0JBQVIsQ0FIbkI7QUFBQSxJQUlNSyxjQUFjTCxRQUFRLGlCQUFSLENBSnBCO0FBQUEsSUFLTU0sZUFBZU4sUUFBUSxrQkFBUixDQUxyQjtBQUFBLElBTU1PLHdCQUF3QlAsUUFBUSx5QkFBUixDQU45QjtBQUFBLElBT01RLDRCQUE0QlIsUUFBUSw2QkFBUixDQVBsQzs7SUFTUVMsUSxHQUFhVixNLENBQWJVLFE7OztBQUVSLElBQU1DLFdBQVdELFNBQVNFLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxZQUFZVCxVQUFVUSxXQUFWLEVBRGxCOztJQUdNRSxjOzs7Ozs7Ozs7OzttQ0F1QldDLGMsRUFBZ0I7QUFDN0IsVUFBTUMsY0FBYyxLQUFLQyxjQUFMLEVBQXBCOztBQUVBLGFBQU9aLFdBQVdhLGNBQVgsQ0FBMEJILGNBQTFCLEVBQTBDQyxXQUExQyxDQUFQO0FBQ0Q7Ozt5REExQjJDRyxjLEVBQWdCQyxrQixFQUFvQjtBQUM5RSxVQUFNQyxpQkFBaUJQLGVBQWVRLHNCQUFmLENBQXNDcEIsT0FBdEMsRUFBK0NDLFFBQS9DLEVBQXlEZ0IsY0FBekQsRUFBeUVDLGtCQUF6RSxDQUF2Qjs7QUFFQSxhQUFPQyxjQUFQO0FBQ0Q7OzsyQ0FFNkJuQixPLEVBQVNDLFEsRUFBa0c7QUFBQSxVQUF4RmdCLGNBQXdGLHVFQUF2RVgscUJBQXVFO0FBQUEsVUFBaERZLGtCQUFnRCx1RUFBM0JYLHlCQUEyQjs7QUFDdklOLGlCQUFXb0IsT0FBT0MsTUFBUCxDQUFjckIsUUFBZCxFQUF3QmlCLGtCQUF4QixDQUFYLENBRHVJLENBQy9FOztBQUV4RCxVQUFNSyxvQkFBb0JDLG9DQUFvQ1AsY0FBcEMsRUFBb0RSLFFBQXBELEVBQThERSxTQUE5RCxDQUExQjtBQUFBLFVBQ01jLFFBQVFoQixTQUFTaUIsZ0JBQVQsQ0FBMEIxQixPQUExQixDQURkO0FBQUEsVUFFTTJCLE9BQU9oQixVQUFVaUIsYUFBVixDQUF3QkgsS0FBeEIsQ0FGYjs7QUFJQSxVQUFJWCxjQUFjWixVQUFVMkIsbUJBQVYsQ0FBOEJGLElBQTlCLEVBQW9DMUIsUUFBcEMsQ0FBbEI7O0FBRUFhLG9CQUFjQSxZQUFZZ0IsTUFBWixDQUFtQlAsaUJBQW5CLENBQWQ7O0FBRUEsVUFBTUosaUJBQWlCLElBQUlQLGNBQUosQ0FBbUJFLFdBQW5CLENBQXZCOztBQUVBLGFBQU9LLGNBQVA7QUFDRDs7OztFQXJCMEJkLFk7O0FBOEI3QjBCLE9BQU9DLE9BQVAsR0FBaUJwQixjQUFqQjs7QUFFQSxTQUFTWSxtQ0FBVCxDQUE2Q1AsY0FBN0MsRUFBNkRSLFFBQTdELEVBQXVFRSxTQUF2RSxFQUFrRjtBQUNoRixNQUFNWSxvQkFBb0JOLGVBQWVnQixNQUFmLENBQXNCLFVBQVNWLGlCQUFULEVBQTRCVyxhQUE1QixFQUEyQztBQUN6RixRQUFNQywyQkFBMkIvQixZQUFZZ0Msc0JBQVosQ0FBbUNGLGFBQW5DLEVBQWtEekIsUUFBbEQsRUFBNERFLFNBQTVELENBQWpDOztBQUVBWSx3QkFBb0JBLGtCQUFrQk8sTUFBbEIsQ0FBeUJLLHdCQUF6QixDQUFwQjs7QUFFQSxXQUFPWixpQkFBUDtBQUNELEdBTnlCLEVBTXZCLEVBTnVCLENBQTFCOztBQVFBLFNBQU9BLGlCQUFQO0FBQ0QiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxuICAgICAgbWFwcGluZ3MgPSByZXF1aXJlKCcuL21hcHBpbmdzJyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBwYXJzZXJVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9wYXJzZXInKSxcbiAgICAgIGdyYW1tYXJVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9ncmFtbWFyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hcnMgPSByZXF1aXJlKCcuL2RlZmF1bHRDdXN0b21HcmFtbWFycycpLFxuICAgICAgZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncyA9IHJlcXVpcmUoJy4vZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncycpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQ3VzdG9tR3JhbW1hcnNBZGRpdGlvbmFsTWFwcGluZ3MoY3VzdG9tR3JhbW1hcnMsIGFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUdyYW1tYXJBbmRNYXBwaW5ncyhncmFtbWFyLCBtYXBwaW5ncywgY3VzdG9tR3JhbW1hcnMsIGFkZGl0aW9uYWxNYXBwaW5ncyk7XG4gIFxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21HcmFtbWFyQW5kTWFwcGluZ3MoZ3JhbW1hciwgbWFwcGluZ3MsIGN1c3RvbUdyYW1tYXJzID0gZGVmYXVsdEN1c3RvbUdyYW1tYXJzLCBhZGRpdGlvbmFsTWFwcGluZ3MgPSBkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzKSB7XG4gICAgbWFwcGluZ3MgPSBPYmplY3QuYXNzaWduKG1hcHBpbmdzLCBhZGRpdGlvbmFsTWFwcGluZ3MpOyAvLy9cblxuICAgIGNvbnN0IGN1c3RvbVByb2R1Y3Rpb25zID0gY3VzdG9tUHJvZHVjdGlvbnNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIGJuZkxleGVyLCBibmZQYXJzZXIpLFxuICAgICAgICAgIGxpbmVzID0gYm5mTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICBub2RlID0gYm5mUGFyc2VyLm5vZGVGcm9tTGluZXMobGluZXMpO1xuICAgIFxuICAgIGxldCBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5nZW5lcmF0ZVByb2R1Y3Rpb25zKG5vZGUsIG1hcHBpbmdzKTtcbiAgICBcbiAgICBwcm9kdWN0aW9ucyA9IHByb2R1Y3Rpb25zLmNvbmNhdChjdXN0b21Qcm9kdWN0aW9ucyk7XG4gICAgXG4gICAgY29uc3QgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG5cbiAgZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9ucyA9IHRoaXMuZ2V0UHJvZHVjdGlvbnMoKTtcblxuICAgIHJldHVybiBwYXJzZXJVdGlsLmZpbmRQcm9kdWN0aW9uKHByb2R1Y3Rpb25OYW1lLCBwcm9kdWN0aW9ucyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZVBhcnNlcjtcblxuZnVuY3Rpb24gY3VzdG9tUHJvZHVjdGlvbnNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIGJuZkxleGVyLCBibmZQYXJzZXIpIHtcbiAgY29uc3QgY3VzdG9tUHJvZHVjdGlvbnMgPSBjdXN0b21HcmFtbWFycy5yZWR1Y2UoZnVuY3Rpb24oY3VzdG9tUHJvZHVjdGlvbnMsIGN1c3RvbUdyYW1tYXIpIHtcbiAgICBjb25zdCBjdXN0b21HcmFtbWFyUHJvZHVjdGlvbnMgPSBncmFtbWFyVXRpbC5wcm9kdWN0aW9uc0Zyb21HcmFtbWFyKGN1c3RvbUdyYW1tYXIsIGJuZkxleGVyLCBibmZQYXJzZXIpO1xuXG4gICAgY3VzdG9tUHJvZHVjdGlvbnMgPSBjdXN0b21Qcm9kdWN0aW9ucy5jb25jYXQoY3VzdG9tR3JhbW1hclByb2R1Y3Rpb25zKTtcbiAgICBcbiAgICByZXR1cm4gY3VzdG9tUHJvZHVjdGlvbnM7XG4gIH0sIFtdKTtcbiAgXG4gIHJldHVybiBjdXN0b21Qcm9kdWN0aW9ucztcbn1cbiJdfQ==