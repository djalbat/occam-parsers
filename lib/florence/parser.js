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
    defaultCustomGrammarTermBNF = require('./defaultCustomGrammar/termBNF'),
    defaultCustomGrammarStatementBNF = require('./defaultCustomGrammar/statementBNF'),
    defaultCustomGrammarMetastatementBNF = require('./defaultCustomGrammar/metastatementBNF');

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
      defaultCustomGrammarTermBNF: defaultCustomGrammarTermBNF,
      defaultCustomGrammarStatementBNF: defaultCustomGrammarStatementBNF,
      defaultCustomGrammarMetastatementBNF: defaultCustomGrammarMetastatementBNF
});

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsIm1hcHBpbmdzIiwiQk5GUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiYXJyYXlVdGlsaXRpZXMiLCJjdXN0b21HcmFtbWFyVXRpbGl0aWVzIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXJUZXJtQk5GIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXJTdGF0ZW1lbnRCTkYiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hck1ldGFzdGF0ZW1lbnRCTkYiLCJCTkZMZXhlciIsInB1c2giLCJydWxlc0Zyb21CTkZNYXAiLCJhZGRRdWFsaWZpZWRBbmRVbnF1YWxpZmllZFN0YXRlbWVudEFuZE1ldGFzdGF0ZW1lbnRSdWxlcyIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hclJ1bGVzIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXAiLCJkZWZhdWx0Q29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzIiwiZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncyIsIkZsb3JlbmNlUGFyc2VyIiwiY29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzIiwiYWRkaXRpb25hbE1hcHBpbmdzIiwiZmxvcmVuY2VQYXJzZXIiLCJmcm9tQk5GQW5kTWFwcGluZ3MiLCJPYmplY3QiLCJhc3NpZ24iLCJsaW5lcyIsImxpbmVzRnJvbUJORiIsInJ1bGVzTm9kZSIsInJ1bGVzTm9kZUZyb21MaW5lcyIsInJ1bGVzIiwiZ2VuZXJhdGVSdWxlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsTUFBTUQsUUFBUSxPQUFSLENBQVo7QUFBQSxJQUNNRSxXQUFXRixRQUFRLFlBQVIsQ0FEakI7QUFBQSxJQUVNRyxZQUFZSCxRQUFRLGVBQVIsQ0FGbEI7QUFBQSxJQUdNSSxlQUFlSixRQUFRLGtCQUFSLENBSHJCO0FBQUEsSUFJTUssaUJBQWlCTCxRQUFRLG9CQUFSLENBSnZCO0FBQUEsSUFLTU0seUJBQXlCTixRQUFRLDRCQUFSLENBTC9CO0FBQUEsSUFNTU8sOEJBQThCUCxRQUFRLGdDQUFSLENBTnBDO0FBQUEsSUFPTVEsbUNBQW1DUixRQUFRLHFDQUFSLENBUHpDO0FBQUEsSUFRTVMsdUNBQXVDVCxRQUFRLHlDQUFSLENBUjdDOztBQVVNLElBQUVVLFFBQUYsR0FBZVgsTUFBZixDQUFFVyxRQUFGO0FBQUEsSUFDRUMsSUFERixHQUNXTixjQURYLENBQ0VNLElBREY7QUFBQSxJQUVFQyxlQUZGLEdBRWdGTixzQkFGaEYsQ0FFRU0sZUFGRjtBQUFBLElBRW1CQyx3REFGbkIsR0FFZ0ZQLHNCQUZoRixDQUVtQk8sd0RBRm5COzs7QUFJTixJQUFNQyxXQUFXSixTQUFTSyxXQUFULEVBQWpCO0FBQUEsSUFDTUMsWUFBWWIsVUFBVVksV0FBVixFQURsQjtBQUFBLElBRU1FLDRCQUE0QkwsZ0JBQWdCTSwwQkFBaEIsQ0FGbEM7QUFBQSxJQUdNQyxxQ0FBcUNGLHlCQUgzQztBQUFBLElBR3NFO0FBQ2hFRyw0QkFBNEIsRUFKbEM7O0lBTU1DLGM7Ozs7Ozs7Ozs7O2lGQUN3REMsMkIsRUFBNkJDLGtCLEVBQW9CO0FBQzNHLHNCQUFNQyxpQkFBaUJILGVBQWVJLGtCQUFmLENBQWtDeEIsR0FBbEMsRUFBdUNDLFFBQXZDLEVBQWlEb0IsMkJBQWpELEVBQThFQyxrQkFBOUUsQ0FBdkI7O0FBRUEseUJBQU9DLGNBQVA7QUFDRDs7OytDQUV5QnZCLEcsRUFBS0MsUSxFQUE0SDtBQUFBLHNCQUFsSG9CLDJCQUFrSCx1RUFBcEZILGtDQUFvRjtBQUFBLHNCQUFoREksa0JBQWdELHVFQUEzQkgseUJBQTJCOztBQUN6SkUsZ0RBQThCVCx5REFBeURTLDJCQUF6RCxDQUE5QixDQUR5SixDQUNuQzs7QUFFdEhwQiw2QkFBV3dCLE9BQU9DLE1BQVAsQ0FBY3pCLFFBQWQsRUFBd0JxQixrQkFBeEIsQ0FBWCxDQUh5SixDQUdqRzs7QUFFeEQsc0JBQU1LLFFBQVFkLFNBQVNlLFlBQVQsQ0FBc0I1QixHQUF0QixDQUFkO0FBQUEsc0JBQ002QixZQUFZZCxVQUFVZSxrQkFBVixDQUE2QkgsS0FBN0IsQ0FEbEI7QUFBQSxzQkFFTUksUUFBUTdCLFVBQVU4QixhQUFWLENBQXdCSCxTQUF4QixFQUFtQzVCLFFBQW5DLENBRmQ7O0FBSUFTLHVCQUFLcUIsS0FBTCxFQUFZViwyQkFBWjs7QUFFQSxzQkFBTUUsaUJBQWlCLElBQUlILGNBQUosQ0FBbUJXLEtBQW5CLENBQXZCOztBQUVBLHlCQUFPUixjQUFQO0FBQ0Q7Ozs7RUFyQjBCcEIsWTs7QUF3QjdCc0IsT0FBT0MsTUFBUCxDQUFjTixjQUFkLEVBQThCO0FBQzVCcEIsV0FBS0EsR0FEdUI7QUFFNUJDLGdCQUFVQSxRQUZrQjtBQUc1QkssbUNBQTZCQSwyQkFIRDtBQUk1QkMsd0NBQWtDQSxnQ0FKTjtBQUs1QkMsNENBQXNDQTtBQUxWLENBQTlCOztBQVFBeUIsT0FBT0MsT0FBUCxHQUFpQmQsY0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgYm5mID0gcmVxdWlyZSgnLi9ibmYnKSxcbiAgICAgIG1hcHBpbmdzID0gcmVxdWlyZSgnLi9tYXBwaW5ncycpLFxuICAgICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIGN1c3RvbUdyYW1tYXJVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hcicpLFxuICAgICAgZGVmYXVsdEN1c3RvbUdyYW1tYXJUZXJtQk5GID0gcmVxdWlyZSgnLi9kZWZhdWx0Q3VzdG9tR3JhbW1hci90ZXJtQk5GJyksXG4gICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hclN0YXRlbWVudEJORiA9IHJlcXVpcmUoJy4vZGVmYXVsdEN1c3RvbUdyYW1tYXIvc3RhdGVtZW50Qk5GJyksXG4gICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hck1ldGFzdGF0ZW1lbnRCTkYgPSByZXF1aXJlKCcuL2RlZmF1bHRDdXN0b21HcmFtbWFyL21ldGFzdGF0ZW1lbnRCTkYnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcnVsZXNGcm9tQk5GTWFwLCBhZGRRdWFsaWZpZWRBbmRVbnF1YWxpZmllZFN0YXRlbWVudEFuZE1ldGFzdGF0ZW1lbnRSdWxlcyB9ID0gY3VzdG9tR3JhbW1hclV0aWxpdGllcztcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hclJ1bGVzID0gcnVsZXNGcm9tQk5GTWFwKGRlZmF1bHRDdXN0b21HcmFtbWFyQk5GTWFwKSxcbiAgICAgIGRlZmF1bHRDb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMgPSBkZWZhdWx0Q3VzdG9tR3JhbW1hclJ1bGVzLCAvLy9cbiAgICAgIGRlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MgPSB7fTtcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlc0FuZEFkZGl0aW9uYWxNYXBwaW5ncyhjb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMsIGFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUJORkFuZE1hcHBpbmdzKGJuZiwgbWFwcGluZ3MsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlcywgYWRkaXRpb25hbE1hcHBpbmdzKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQk5GQW5kTWFwcGluZ3MoYm5mLCBtYXBwaW5ncywgY29tYmluZWRDdXN0b21HcmFtbWFyc1J1bGVzID0gZGVmYXVsdENvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlcywgYWRkaXRpb25hbE1hcHBpbmdzID0gZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlcyA9IGFkZFF1YWxpZmllZEFuZFVucXVhbGlmaWVkU3RhdGVtZW50QW5kTWV0YXN0YXRlbWVudFJ1bGVzKGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNSdWxlcyk7ICAvLy9cblxuICAgIG1hcHBpbmdzID0gT2JqZWN0LmFzc2lnbihtYXBwaW5ncywgYWRkaXRpb25hbE1hcHBpbmdzKTsgLy8vXG5cbiAgICBjb25zdCBsaW5lcyA9IGJuZkxleGVyLmxpbmVzRnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzTm9kZSA9IGJuZlBhcnNlci5ydWxlc05vZGVGcm9tTGluZXMobGluZXMpLFxuICAgICAgICAgIHJ1bGVzID0gQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMocnVsZXNOb2RlLCBtYXBwaW5ncyk7XG5cbiAgICBwdXNoKHJ1bGVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXJzUnVsZXMpO1xuXG4gICAgY29uc3QgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocnVsZXMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRmxvcmVuY2VQYXJzZXIsIHtcbiAgYm5mOiBibmYsXG4gIG1hcHBpbmdzOiBtYXBwaW5ncyxcbiAgZGVmYXVsdEN1c3RvbUdyYW1tYXJUZXJtQk5GOiBkZWZhdWx0Q3VzdG9tR3JhbW1hclRlcm1CTkYsXG4gIGRlZmF1bHRDdXN0b21HcmFtbWFyU3RhdGVtZW50Qk5GOiBkZWZhdWx0Q3VzdG9tR3JhbW1hclN0YXRlbWVudEJORixcbiAgZGVmYXVsdEN1c3RvbUdyYW1tYXJNZXRhc3RhdGVtZW50Qk5GOiBkZWZhdWx0Q3VzdG9tR3JhbW1hck1ldGFzdGF0ZW1lbnRCTkZcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlUGFyc2VyO1xuIl19