'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var arrayUtil = require('../util/array'),
    mappings = require('./mappings'),
    extendedBNF = require('./extendedBNF'),
    CommonParser = require('../common/parser'),
    ExtendedBNFParser = require('../extendedBNF/parser'),
    defaultCustomGrammarExtendedBNFMap = require('./defaultCustomGrammar/extendedBNFMap');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer;


var extendedBNFLexer = ExtendedBNFLexer.fromNothing(),
    extendedBNFParser = ExtendedBNFParser.fromNothing(),
    defaultCustomGrammarRules = rulesFromExtendedBNFMap(defaultCustomGrammarExtendedBNFMap),
    defaultAdditionalMappings = {};

var FlorenceParser = function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
  }

  _createClass(FlorenceParser, null, [{
    key: 'fromCustomGrammarRulesAndAdditionalMappings',
    value: function fromCustomGrammarRulesAndAdditionalMappings(customGrammarRules, additionalMappings) {
      var florenceParser = FlorenceParser.fromExtendedBNFAndMappings(extendedBNF, mappings, customGrammarRules, additionalMappings);

      return florenceParser;
    }
  }, {
    key: 'fromExtendedBNFAndMappings',
    value: function fromExtendedBNFAndMappings(extendedBNF, mappings) {
      var customGrammarRules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultCustomGrammarRules;
      var additionalMappings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultAdditionalMappings;

      mappings = Object.assign(mappings, additionalMappings); ///

      var lines = extendedBNFLexer.linesFromExtendedBNF(extendedBNF),
          node = extendedBNFParser.nodeFromLines(lines),
          rules = ExtendedBNFParser.generateRules(node, mappings);

      arrayUtil.push(rules, customGrammarRules);

      var florenceParser = new FlorenceParser(rules);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;

FlorenceParser.mappings = mappings;

FlorenceParser.extendedBNF = extendedBNF;

FlorenceParser.defaultCustomGrammarExtendedBNFMap = defaultCustomGrammarExtendedBNFMap;

function rulesFromExtendedBNFMap(extendedBNFMap) {
  var ruleNames = Object.keys(extendedBNFMap),
      extendedBNF = ruleNames.reduce(function (extendedBNF, ruleName) {
    var ruleExtendedBNF = extendedBNFMap[ruleName];

    extendedBNF = '' + extendedBNF + ruleExtendedBNF;

    return extendedBNF;
  }, ''),
      lines = extendedBNFLexer.linesFromExtendedBNF(extendedBNF),
      node = extendedBNFParser.nodeFromLines(lines),
      rules = ExtendedBNFParser.generateRules(node);

  return rules;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImFycmF5VXRpbCIsIm1hcHBpbmdzIiwiZXh0ZW5kZWRCTkYiLCJDb21tb25QYXJzZXIiLCJFeHRlbmRlZEJORlBhcnNlciIsImRlZmF1bHRDdXN0b21HcmFtbWFyRXh0ZW5kZWRCTkZNYXAiLCJFeHRlbmRlZEJORkxleGVyIiwiZXh0ZW5kZWRCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiZXh0ZW5kZWRCTkZQYXJzZXIiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hclJ1bGVzIiwicnVsZXNGcm9tRXh0ZW5kZWRCTkZNYXAiLCJkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzIiwiRmxvcmVuY2VQYXJzZXIiLCJjdXN0b21HcmFtbWFyUnVsZXMiLCJhZGRpdGlvbmFsTWFwcGluZ3MiLCJmbG9yZW5jZVBhcnNlciIsImZyb21FeHRlbmRlZEJORkFuZE1hcHBpbmdzIiwiT2JqZWN0IiwiYXNzaWduIiwibGluZXMiLCJsaW5lc0Zyb21FeHRlbmRlZEJORiIsIm5vZGUiLCJub2RlRnJvbUxpbmVzIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiLCJleHRlbmRlZEJORk1hcCIsInJ1bGVOYW1lcyIsImtleXMiLCJyZWR1Y2UiLCJydWxlTmFtZSIsInJ1bGVFeHRlbmRlZEJORiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxZQUFZRCxRQUFRLGVBQVIsQ0FBbEI7QUFBQSxJQUNNRSxXQUFXRixRQUFRLFlBQVIsQ0FEakI7QUFBQSxJQUVNRyxjQUFjSCxRQUFRLGVBQVIsQ0FGcEI7QUFBQSxJQUdNSSxlQUFlSixRQUFRLGtCQUFSLENBSHJCO0FBQUEsSUFJTUssb0JBQW9CTCxRQUFRLHVCQUFSLENBSjFCO0FBQUEsSUFLTU0scUNBQXFDTixRQUFRLHVDQUFSLENBTDNDOztJQU9RTyxnQixHQUFxQlIsTSxDQUFyQlEsZ0I7OztBQUVSLElBQU1DLG1CQUFtQkQsaUJBQWlCRSxXQUFqQixFQUF6QjtBQUFBLElBQ01DLG9CQUFvQkwsa0JBQWtCSSxXQUFsQixFQUQxQjtBQUFBLElBRU1FLDRCQUE0QkMsd0JBQXdCTixrQ0FBeEIsQ0FGbEM7QUFBQSxJQUdNTyw0QkFBNEIsRUFIbEM7O0lBS01DLGM7Ozs7Ozs7Ozs7O2dFQUMrQ0Msa0IsRUFBb0JDLGtCLEVBQW9CO0FBQ3pGLFVBQU1DLGlCQUFpQkgsZUFBZUksMEJBQWYsQ0FBMENmLFdBQTFDLEVBQXVERCxRQUF2RCxFQUFpRWEsa0JBQWpFLEVBQXFGQyxrQkFBckYsQ0FBdkI7O0FBRUEsYUFBT0MsY0FBUDtBQUNEOzs7K0NBRWlDZCxXLEVBQWFELFEsRUFBMEc7QUFBQSxVQUFoR2Esa0JBQWdHLHVFQUEzRUoseUJBQTJFO0FBQUEsVUFBaERLLGtCQUFnRCx1RUFBM0JILHlCQUEyQjs7QUFDdkpYLGlCQUFXaUIsT0FBT0MsTUFBUCxDQUFjbEIsUUFBZCxFQUF3QmMsa0JBQXhCLENBQVgsQ0FEdUosQ0FDL0Y7O0FBRXhELFVBQU1LLFFBQVFiLGlCQUFpQmMsb0JBQWpCLENBQXNDbkIsV0FBdEMsQ0FBZDtBQUFBLFVBQ01vQixPQUFPYixrQkFBa0JjLGFBQWxCLENBQWdDSCxLQUFoQyxDQURiO0FBQUEsVUFFTUksUUFBUXBCLGtCQUFrQnFCLGFBQWxCLENBQWdDSCxJQUFoQyxFQUFzQ3JCLFFBQXRDLENBRmQ7O0FBSUFELGdCQUFVMEIsSUFBVixDQUFlRixLQUFmLEVBQXNCVixrQkFBdEI7O0FBRUEsVUFBTUUsaUJBQWlCLElBQUlILGNBQUosQ0FBbUJXLEtBQW5CLENBQXZCOztBQUVBLGFBQU9SLGNBQVA7QUFDRDs7OztFQW5CMEJiLFk7O0FBc0I3QndCLE9BQU9DLE9BQVAsR0FBaUJmLGNBQWpCOztBQUVBQSxlQUFlWixRQUFmLEdBQTBCQSxRQUExQjs7QUFFQVksZUFBZVgsV0FBZixHQUE2QkEsV0FBN0I7O0FBRUFXLGVBQWVSLGtDQUFmLEdBQW9EQSxrQ0FBcEQ7O0FBRUEsU0FBU00sdUJBQVQsQ0FBaUNrQixjQUFqQyxFQUFpRDtBQUMvQyxNQUFNQyxZQUFZWixPQUFPYSxJQUFQLENBQVlGLGNBQVosQ0FBbEI7QUFBQSxNQUNNM0IsY0FBYzRCLFVBQVVFLE1BQVYsQ0FBaUIsVUFBUzlCLFdBQVQsRUFBc0IrQixRQUF0QixFQUFnQztBQUM3RCxRQUFNQyxrQkFBa0JMLGVBQWVJLFFBQWYsQ0FBeEI7O0FBRUEvQix1QkFBaUJBLFdBQWpCLEdBQStCZ0MsZUFBL0I7O0FBRUEsV0FBT2hDLFdBQVA7QUFDRCxHQU5hLEVBTVgsRUFOVyxDQURwQjtBQUFBLE1BUU1rQixRQUFRYixpQkFBaUJjLG9CQUFqQixDQUFzQ25CLFdBQXRDLENBUmQ7QUFBQSxNQVNNb0IsT0FBT2Isa0JBQWtCYyxhQUFsQixDQUFnQ0gsS0FBaEMsQ0FUYjtBQUFBLE1BVU1JLFFBQVFwQixrQkFBa0JxQixhQUFsQixDQUFnQ0gsSUFBaEMsQ0FWZDs7QUFZQSxTQUFPRSxLQUFQO0FBQ0QiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9hcnJheScpLFxuICAgICAgbWFwcGluZ3MgPSByZXF1aXJlKCcuL21hcHBpbmdzJyksXG4gICAgICBleHRlbmRlZEJORiA9IHJlcXVpcmUoJy4vZXh0ZW5kZWRCTkYnKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIEV4dGVuZGVkQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vZXh0ZW5kZWRCTkYvcGFyc2VyJyksXG4gICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hckV4dGVuZGVkQk5GTWFwID0gcmVxdWlyZSgnLi9kZWZhdWx0Q3VzdG9tR3JhbW1hci9leHRlbmRlZEJORk1hcCcpO1xuXG5jb25zdCB7IEV4dGVuZGVkQk5GTGV4ZXIgfSA9IGxleGVycztcblxuY29uc3QgZXh0ZW5kZWRCTkZMZXhlciA9IEV4dGVuZGVkQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGV4dGVuZGVkQk5GUGFyc2VyID0gRXh0ZW5kZWRCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGRlZmF1bHRDdXN0b21HcmFtbWFyUnVsZXMgPSBydWxlc0Zyb21FeHRlbmRlZEJORk1hcChkZWZhdWx0Q3VzdG9tR3JhbW1hckV4dGVuZGVkQk5GTWFwKSxcbiAgICAgIGRlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MgPSB7fTtcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbUN1c3RvbUdyYW1tYXJSdWxlc0FuZEFkZGl0aW9uYWxNYXBwaW5ncyhjdXN0b21HcmFtbWFyUnVsZXMsIGFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUV4dGVuZGVkQk5GQW5kTWFwcGluZ3MoZXh0ZW5kZWRCTkYsIG1hcHBpbmdzLCBjdXN0b21HcmFtbWFyUnVsZXMsIGFkZGl0aW9uYWxNYXBwaW5ncyk7XG4gIFxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21FeHRlbmRlZEJORkFuZE1hcHBpbmdzKGV4dGVuZGVkQk5GLCBtYXBwaW5ncywgY3VzdG9tR3JhbW1hclJ1bGVzID0gZGVmYXVsdEN1c3RvbUdyYW1tYXJSdWxlcywgYWRkaXRpb25hbE1hcHBpbmdzID0gZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIG1hcHBpbmdzID0gT2JqZWN0LmFzc2lnbihtYXBwaW5ncywgYWRkaXRpb25hbE1hcHBpbmdzKTsgLy8vXG5cbiAgICBjb25zdCBsaW5lcyA9IGV4dGVuZGVkQk5GTGV4ZXIubGluZXNGcm9tRXh0ZW5kZWRCTkYoZXh0ZW5kZWRCTkYpLFxuICAgICAgICAgIG5vZGUgPSBleHRlbmRlZEJORlBhcnNlci5ub2RlRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgICBydWxlcyA9IEV4dGVuZGVkQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMobm9kZSwgbWFwcGluZ3MpO1xuXG4gICAgYXJyYXlVdGlsLnB1c2gocnVsZXMsIGN1c3RvbUdyYW1tYXJSdWxlcyk7XG4gICAgXG4gICAgY29uc3QgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocnVsZXMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG5cbkZsb3JlbmNlUGFyc2VyLm1hcHBpbmdzID0gbWFwcGluZ3M7XG5cbkZsb3JlbmNlUGFyc2VyLmV4dGVuZGVkQk5GID0gZXh0ZW5kZWRCTkY7XG5cbkZsb3JlbmNlUGFyc2VyLmRlZmF1bHRDdXN0b21HcmFtbWFyRXh0ZW5kZWRCTkZNYXAgPSBkZWZhdWx0Q3VzdG9tR3JhbW1hckV4dGVuZGVkQk5GTWFwO1xuXG5mdW5jdGlvbiBydWxlc0Zyb21FeHRlbmRlZEJORk1hcChleHRlbmRlZEJORk1hcCkge1xuICBjb25zdCBydWxlTmFtZXMgPSBPYmplY3Qua2V5cyhleHRlbmRlZEJORk1hcCksXG4gICAgICAgIGV4dGVuZGVkQk5GID0gcnVsZU5hbWVzLnJlZHVjZShmdW5jdGlvbihleHRlbmRlZEJORiwgcnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBydWxlRXh0ZW5kZWRCTkYgPSBleHRlbmRlZEJORk1hcFtydWxlTmFtZV07XG4gIFxuICAgICAgICAgIGV4dGVuZGVkQk5GID0gYCR7ZXh0ZW5kZWRCTkZ9JHtydWxlRXh0ZW5kZWRCTkZ9YDtcbiAgXG4gICAgICAgICAgcmV0dXJuIGV4dGVuZGVkQk5GO1xuICAgICAgICB9LCAnJyksXG4gICAgICAgIGxpbmVzID0gZXh0ZW5kZWRCTkZMZXhlci5saW5lc0Zyb21FeHRlbmRlZEJORihleHRlbmRlZEJORiksXG4gICAgICAgIG5vZGUgPSBleHRlbmRlZEJORlBhcnNlci5ub2RlRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgcnVsZXMgPSBFeHRlbmRlZEJORlBhcnNlci5nZW5lcmF0ZVJ1bGVzKG5vZGUpO1xuXG4gIHJldHVybiBydWxlcztcbn1cbiJdfQ==