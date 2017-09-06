'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var bnf = require('./bnf'),
    mappings = require('./mappings'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser'),
    arrayUtilities = require('../utilities/array'),
    customGrammarUtilities = require('../utilities/customGrammar'),
    defaultCustomGrammarBNFMap = require('./defaultCustomGrammarBNFMap');

var BNFLexer = lexers.BNFLexer,
    push = arrayUtilities.push,
    rulesFromBNFMap = customGrammarUtilities.rulesFromBNFMap,
    addQualifiedAndUnqualifiedStatementAndMetastatementRules = customGrammarUtilities.addQualifiedAndUnqualifiedStatementAndMetastatementRules;


var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing(),
    defaultCustomGrammarRules = rulesFromBNFMap(defaultCustomGrammarBNFMap),
    defaultCombinedCustomGrammarsRules = defaultCustomGrammarRules,
    ///
defaultAdditionalMappings = {};

var FlorenceParser = function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
  }

  _createClass(FlorenceParser, null, [{
    key: 'fromCombinedCustomGrammarsRulesAndAdditionalMappings',
    value: function fromCombinedCustomGrammarsRulesAndAdditionalMappings(combinedCustomGrammarsRules, additionalMappings) {
      var florenceParser = FlorenceParser.fromBNFAndMappings(bnf, mappings, combinedCustomGrammarsRules, additionalMappings);

      return florenceParser;
    }
  }, {
    key: 'fromBNFAndMappings',
    value: function fromBNFAndMappings(bnf, mappings) {
      var combinedCustomGrammarsRules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultCombinedCustomGrammarsRules;
      var additionalMappings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultAdditionalMappings;

      combinedCustomGrammarsRules = addQualifiedAndUnqualifiedStatementAndMetastatementRules(combinedCustomGrammarsRules); ///

      mappings = Object.assign(mappings, additionalMappings); ///

      var lines = bnfLexer.linesFromBNF(bnf),
          rulesNode = bnfParser.rulesNodeFromLines(lines),
          rules = BNFParser.generateRules(rulesNode, mappings);

      push(rules, combinedCustomGrammarsRules);

      var florenceParser = new FlorenceParser(rules);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

Object.assign(FlorenceParser, {
  bnf: bnf,
  mappings: mappings,
  defaultCustomGrammarBNFMap: defaultCustomGrammarBNFMap
});

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsIm1hcHBpbmdzIiwiQk5GUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiYXJyYXlVdGlsaXRpZXMiLCJjdXN0b21HcmFtbWFyVXRpbGl0aWVzIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXAiLCJCTkZMZXhlciIsInB1c2giLCJydWxlc0Zyb21CTkZNYXAiLCJhZGRRdWFsaWZpZWRBbmRVbnF1YWxpZmllZFN0YXRlbWVudEFuZE1ldGFzdGF0ZW1lbnRSdWxlcyIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hclJ1bGVzIiwiZGVmYXVsdENvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlcyIsImRlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MiLCJGbG9yZW5jZVBhcnNlciIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlcyIsImFkZGl0aW9uYWxNYXBwaW5ncyIsImZsb3JlbmNlUGFyc2VyIiwiZnJvbUJORkFuZE1hcHBpbmdzIiwiT2JqZWN0IiwiYXNzaWduIiwibGluZXMiLCJsaW5lc0Zyb21CTkYiLCJydWxlc05vZGUiLCJydWxlc05vZGVGcm9tTGluZXMiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLE1BQU1ELFFBQVEsT0FBUixDQUFaO0FBQUEsSUFDTUUsV0FBV0YsUUFBUSxZQUFSLENBRGpCO0FBQUEsSUFFTUcsWUFBWUgsUUFBUSxlQUFSLENBRmxCO0FBQUEsSUFHTUksZUFBZUosUUFBUSxrQkFBUixDQUhyQjtBQUFBLElBSU1LLGlCQUFpQkwsUUFBUSxvQkFBUixDQUp2QjtBQUFBLElBS01NLHlCQUF5Qk4sUUFBUSw0QkFBUixDQUwvQjtBQUFBLElBTU1PLDZCQUE2QlAsUUFBUSw4QkFBUixDQU5uQzs7QUFRTSxJQUFFUSxRQUFGLEdBQWVULE1BQWYsQ0FBRVMsUUFBRjtBQUFBLElBQ0VDLElBREYsR0FDV0osY0FEWCxDQUNFSSxJQURGO0FBQUEsSUFFRUMsZUFGRixHQUVnRkosc0JBRmhGLENBRUVJLGVBRkY7QUFBQSxJQUVtQkMsd0RBRm5CLEdBRWdGTCxzQkFGaEYsQ0FFbUJLLHdEQUZuQjs7O0FBSU4sSUFBTUMsV0FBV0osU0FBU0ssV0FBVCxFQUFqQjtBQUFBLElBQ01DLFlBQVlYLFVBQVVVLFdBQVYsRUFEbEI7QUFBQSxJQUVNRSw0QkFBNEJMLGdCQUFnQkgsMEJBQWhCLENBRmxDO0FBQUEsSUFHTVMscUNBQXFDRCx5QkFIM0M7QUFBQSxJQUdzRTtBQUM5REUsNEJBQTRCLEVBSnBDOztJQU1NQyxjOzs7Ozs7Ozs7Ozt5RUFDd0RDLDJCLEVBQTZCQyxrQixFQUFvQjtBQUMzRyxVQUFNQyxpQkFBaUJILGVBQWVJLGtCQUFmLENBQWtDckIsR0FBbEMsRUFBdUNDLFFBQXZDLEVBQWlEaUIsMkJBQWpELEVBQThFQyxrQkFBOUUsQ0FBdkI7O0FBRUEsYUFBT0MsY0FBUDtBQUNEOzs7dUNBRXlCcEIsRyxFQUFLQyxRLEVBQTRIO0FBQUEsVUFBbEhpQiwyQkFBa0gsdUVBQXBGSCxrQ0FBb0Y7QUFBQSxVQUFoREksa0JBQWdELHVFQUEzQkgseUJBQTJCOztBQUN6SkUsb0NBQThCUix5REFBeURRLDJCQUF6RCxDQUE5QixDQUR5SixDQUNuQzs7QUFFdEhqQixpQkFBV3FCLE9BQU9DLE1BQVAsQ0FBY3RCLFFBQWQsRUFBd0JrQixrQkFBeEIsQ0FBWCxDQUh5SixDQUdqRzs7QUFFeEQsVUFBTUssUUFBUWIsU0FBU2MsWUFBVCxDQUFzQnpCLEdBQXRCLENBQWQ7QUFBQSxVQUNNMEIsWUFBWWIsVUFBVWMsa0JBQVYsQ0FBNkJILEtBQTdCLENBRGxCO0FBQUEsVUFFTUksUUFBUTFCLFVBQVUyQixhQUFWLENBQXdCSCxTQUF4QixFQUFtQ3pCLFFBQW5DLENBRmQ7O0FBSUFPLFdBQUtvQixLQUFMLEVBQVlWLDJCQUFaOztBQUVBLFVBQU1FLGlCQUFpQixJQUFJSCxjQUFKLENBQW1CVyxLQUFuQixDQUF2Qjs7QUFFQSxhQUFPUixjQUFQO0FBQ0Q7Ozs7RUFyQjBCakIsWTs7QUF3QjdCbUIsT0FBT0MsTUFBUCxDQUFjTixjQUFkLEVBQThCO0FBQzVCakIsT0FBS0EsR0FEdUI7QUFFNUJDLFlBQVVBLFFBRmtCO0FBRzVCSyw4QkFBNEJBO0FBSEEsQ0FBOUI7O0FBTUF3QixPQUFPQyxPQUFQLEdBQWlCZCxjQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBibmYgPSByZXF1aXJlKCcuL2JuZicpLFxuICAgICAgbWFwcGluZ3MgPSByZXF1aXJlKCcuL21hcHBpbmdzJyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgY3VzdG9tR3JhbW1hclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyJyksXG4gICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hckJORk1hcCA9IHJlcXVpcmUoJy4vZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXAnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcnVsZXNGcm9tQk5GTWFwLCBhZGRRdWFsaWZpZWRBbmRVbnF1YWxpZmllZFN0YXRlbWVudEFuZE1ldGFzdGF0ZW1lbnRSdWxlcyB9ID0gY3VzdG9tR3JhbW1hclV0aWxpdGllcztcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hclJ1bGVzID0gcnVsZXNGcm9tQk5GTWFwKGRlZmF1bHRDdXN0b21HcmFtbWFyQk5GTWFwKSxcbiAgICAgIGRlZmF1bHRDb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMgPSBkZWZhdWx0Q3VzdG9tR3JhbW1hclJ1bGVzLCAvLy9cbiAgICAgICAgZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncyA9IHt9O1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzQW5kQWRkaXRpb25hbE1hcHBpbmdzKGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlcywgYWRkaXRpb25hbE1hcHBpbmdzKSB7XG4gICAgY29uc3QgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tQk5GQW5kTWFwcGluZ3MoYm5mLCBtYXBwaW5ncywgY29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzLCBhZGRpdGlvbmFsTWFwcGluZ3MpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21CTkZBbmRNYXBwaW5ncyhibmYsIG1hcHBpbmdzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMgPSBkZWZhdWx0Q29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzLCBhZGRpdGlvbmFsTWFwcGluZ3MgPSBkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzKSB7XG4gICAgY29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzID0gYWRkUXVhbGlmaWVkQW5kVW5xdWFsaWZpZWRTdGF0ZW1lbnRBbmRNZXRhc3RhdGVtZW50UnVsZXMoY29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzKTsgIC8vL1xuXG4gICAgbWFwcGluZ3MgPSBPYmplY3QuYXNzaWduKG1hcHBpbmdzLCBhZGRpdGlvbmFsTWFwcGluZ3MpOyAvLy9cblxuICAgIGNvbnN0IGxpbmVzID0gYm5mTGV4ZXIubGluZXNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXNOb2RlID0gYm5mUGFyc2VyLnJ1bGVzTm9kZUZyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgcnVsZXMgPSBCTkZQYXJzZXIuZ2VuZXJhdGVSdWxlcyhydWxlc05vZGUsIG1hcHBpbmdzKTtcblxuICAgIHB1c2gocnVsZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlcyk7XG5cbiAgICBjb25zdCBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihydWxlcyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihGbG9yZW5jZVBhcnNlciwge1xuICBibmY6IGJuZixcbiAgbWFwcGluZ3M6IG1hcHBpbmdzLFxuICBkZWZhdWx0Q3VzdG9tR3JhbW1hckJORk1hcDogZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXAgIFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG4iXX0=