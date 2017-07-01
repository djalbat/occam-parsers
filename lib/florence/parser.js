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

      extendedBNF = extendedBNF + '\n\n' + customExtendedBNF; ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImFycmF5VXRpbCIsIm1hcHBpbmdzIiwiZXh0ZW5kZWRCTkYiLCJDb21tb25QYXJzZXIiLCJFeHRlbmRlZEJORlBhcnNlciIsImRlZmF1bHRDdXN0b21HcmFtbWFyRXh0ZW5kZWRCTkZNYXAiLCJFeHRlbmRlZEJORkxleGVyIiwiZXh0ZW5kZWRCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiZXh0ZW5kZWRCTkZQYXJzZXIiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hclJ1bGVzIiwicnVsZXNGcm9tRXh0ZW5kZWRCTkZNYXAiLCJkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzIiwiRmxvcmVuY2VQYXJzZXIiLCJjdXN0b21HcmFtbWFyUnVsZXMiLCJhZGRpdGlvbmFsTWFwcGluZ3MiLCJmbG9yZW5jZVBhcnNlciIsImZyb21FeHRlbmRlZEJORkFuZE1hcHBpbmdzIiwiY3VzdG9tRXh0ZW5kZWRCTkYiLCJPYmplY3QiLCJhc3NpZ24iLCJsaW5lcyIsImxpbmVzRnJvbUV4dGVuZGVkQk5GIiwibm9kZSIsIm5vZGVGcm9tTGluZXMiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyIsImV4dGVuZGVkQk5GTWFwIiwicnVsZU5hbWVzIiwia2V5cyIsInJlZHVjZSIsInJ1bGVOYW1lIiwicnVsZUV4dGVuZGVkQk5GIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFlBQVlELFFBQVEsZUFBUixDQUFsQjtBQUFBLElBQ01FLFdBQVdGLFFBQVEsWUFBUixDQURqQjtBQUFBLElBRU1HLGNBQWNILFFBQVEsZUFBUixDQUZwQjtBQUFBLElBR01JLGVBQWVKLFFBQVEsa0JBQVIsQ0FIckI7QUFBQSxJQUlNSyxvQkFBb0JMLFFBQVEsdUJBQVIsQ0FKMUI7QUFBQSxJQUtNTSxxQ0FBcUNOLFFBQVEsdUNBQVIsQ0FMM0M7O0lBT1FPLGdCLEdBQXFCUixNLENBQXJCUSxnQjs7O0FBRVIsSUFBTUMsbUJBQW1CRCxpQkFBaUJFLFdBQWpCLEVBQXpCO0FBQUEsSUFDTUMsb0JBQW9CTCxrQkFBa0JJLFdBQWxCLEVBRDFCO0FBQUEsSUFFTUUsNEJBQTRCQyx3QkFBd0JOLGtDQUF4QixDQUZsQztBQUFBLElBR01PLDRCQUE0QixFQUhsQzs7SUFLTUMsYzs7Ozs7Ozs7Ozs7Z0VBQytDQyxrQixFQUFvQkMsa0IsRUFBb0I7QUFDekYsVUFBTUMsaUJBQWlCSCxlQUFlSSwwQkFBZixDQUEwQ2YsV0FBMUMsRUFBdURELFFBQXZELEVBQWlFYSxrQkFBakUsRUFBcUZDLGtCQUFyRixDQUF2Qjs7QUFFQSxhQUFPQyxjQUFQO0FBQ0Q7OzsrQ0FFaUNkLFcsRUFBYUQsUSxFQUEwRztBQUFBLFVBQWhHYSxrQkFBZ0csdUVBQTNFSix5QkFBMkU7QUFBQSxVQUFoREssa0JBQWdELHVFQUEzQkgseUJBQTJCOztBQUN2SlYsb0JBQWlCQSxXQUFqQixZQUFtQ2dCLGlCQUFuQyxDQUR1SixDQUMvRjtBQUN4RGpCLGlCQUFXa0IsT0FBT0MsTUFBUCxDQUFjbkIsUUFBZCxFQUF3QmMsa0JBQXhCLENBQVgsQ0FGdUosQ0FFL0Y7O0FBRXhELFVBQU1NLFFBQVFkLGlCQUFpQmUsb0JBQWpCLENBQXNDcEIsV0FBdEMsQ0FBZDtBQUFBLFVBQ01xQixPQUFPZCxrQkFBa0JlLGFBQWxCLENBQWdDSCxLQUFoQyxDQURiO0FBQUEsVUFFTUksUUFBUXJCLGtCQUFrQnNCLGFBQWxCLENBQWdDSCxJQUFoQyxFQUFzQ3RCLFFBQXRDLENBRmQ7O0FBSUFELGdCQUFVMkIsSUFBVixDQUFlRixLQUFmLEVBQXNCWCxrQkFBdEI7O0FBRUEsVUFBTUUsaUJBQWlCLElBQUlILGNBQUosQ0FBbUJZLEtBQW5CLENBQXZCOztBQUVBLGFBQU9ULGNBQVA7QUFDRDs7OztFQXBCMEJiLFk7O0FBdUI3QnlCLE9BQU9DLE9BQVAsR0FBaUJoQixjQUFqQjs7QUFFQUEsZUFBZVosUUFBZixHQUEwQkEsUUFBMUI7O0FBRUFZLGVBQWVYLFdBQWYsR0FBNkJBLFdBQTdCOztBQUVBVyxlQUFlUixrQ0FBZixHQUFvREEsa0NBQXBEOztBQUVBLFNBQVNNLHVCQUFULENBQWlDbUIsY0FBakMsRUFBaUQ7QUFDL0MsTUFBTUMsWUFBWVosT0FBT2EsSUFBUCxDQUFZRixjQUFaLENBQWxCO0FBQUEsTUFDTTVCLGNBQWM2QixVQUFVRSxNQUFWLENBQWlCLFVBQVMvQixXQUFULEVBQXNCZ0MsUUFBdEIsRUFBZ0M7QUFDN0QsUUFBTUMsa0JBQWtCTCxlQUFlSSxRQUFmLENBQXhCOztBQUVBaEMsdUJBQWlCQSxXQUFqQixHQUErQmlDLGVBQS9COztBQUVBLFdBQU9qQyxXQUFQO0FBQ0QsR0FOYSxFQU1YLEVBTlcsQ0FEcEI7QUFBQSxNQVFNbUIsUUFBUWQsaUJBQWlCZSxvQkFBakIsQ0FBc0NwQixXQUF0QyxDQVJkO0FBQUEsTUFTTXFCLE9BQU9kLGtCQUFrQmUsYUFBbEIsQ0FBZ0NILEtBQWhDLENBVGI7QUFBQSxNQVVNSSxRQUFRckIsa0JBQWtCc0IsYUFBbEIsQ0FBZ0NILElBQWhDLENBVmQ7O0FBWUEsU0FBT0UsS0FBUDtBQUNEIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIG1hcHBpbmdzID0gcmVxdWlyZSgnLi9tYXBwaW5ncycpLFxuICAgICAgZXh0ZW5kZWRCTkYgPSByZXF1aXJlKCcuL2V4dGVuZGVkQk5GJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBFeHRlbmRlZEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2V4dGVuZGVkQk5GL3BhcnNlcicpLFxuICAgICAgZGVmYXVsdEN1c3RvbUdyYW1tYXJFeHRlbmRlZEJORk1hcCA9IHJlcXVpcmUoJy4vZGVmYXVsdEN1c3RvbUdyYW1tYXIvZXh0ZW5kZWRCTkZNYXAnKTtcblxuY29uc3QgeyBFeHRlbmRlZEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGV4dGVuZGVkQk5GTGV4ZXIgPSBFeHRlbmRlZEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBleHRlbmRlZEJORlBhcnNlciA9IEV4dGVuZGVkQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hclJ1bGVzID0gcnVsZXNGcm9tRXh0ZW5kZWRCTkZNYXAoZGVmYXVsdEN1c3RvbUdyYW1tYXJFeHRlbmRlZEJORk1hcCksXG4gICAgICBkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzID0ge307XG5cbmNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21DdXN0b21HcmFtbWFyUnVsZXNBbmRBZGRpdGlvbmFsTWFwcGluZ3MoY3VzdG9tR3JhbW1hclJ1bGVzLCBhZGRpdGlvbmFsTWFwcGluZ3MpIHtcbiAgICBjb25zdCBmbG9yZW5jZVBhcnNlciA9IEZsb3JlbmNlUGFyc2VyLmZyb21FeHRlbmRlZEJORkFuZE1hcHBpbmdzKGV4dGVuZGVkQk5GLCBtYXBwaW5ncywgY3VzdG9tR3JhbW1hclJ1bGVzLCBhZGRpdGlvbmFsTWFwcGluZ3MpO1xuICBcbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tRXh0ZW5kZWRCTkZBbmRNYXBwaW5ncyhleHRlbmRlZEJORiwgbWFwcGluZ3MsIGN1c3RvbUdyYW1tYXJSdWxlcyA9IGRlZmF1bHRDdXN0b21HcmFtbWFyUnVsZXMsIGFkZGl0aW9uYWxNYXBwaW5ncyA9IGRlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MpIHtcbiAgICBleHRlbmRlZEJORiA9IGAke2V4dGVuZGVkQk5GfVxcblxcbiR7Y3VzdG9tRXh0ZW5kZWRCTkZ9YDsgLy8vXG4gICAgbWFwcGluZ3MgPSBPYmplY3QuYXNzaWduKG1hcHBpbmdzLCBhZGRpdGlvbmFsTWFwcGluZ3MpOyAvLy9cblxuICAgIGNvbnN0IGxpbmVzID0gZXh0ZW5kZWRCTkZMZXhlci5saW5lc0Zyb21FeHRlbmRlZEJORihleHRlbmRlZEJORiksXG4gICAgICAgICAgbm9kZSA9IGV4dGVuZGVkQk5GUGFyc2VyLm5vZGVGcm9tTGluZXMobGluZXMpLFxuICAgICAgICAgIHJ1bGVzID0gRXh0ZW5kZWRCTkZQYXJzZXIuZ2VuZXJhdGVSdWxlcyhub2RlLCBtYXBwaW5ncyk7XG5cbiAgICBhcnJheVV0aWwucHVzaChydWxlcywgY3VzdG9tR3JhbW1hclJ1bGVzKTtcbiAgICBcbiAgICBjb25zdCBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihydWxlcyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZVBhcnNlcjtcblxuRmxvcmVuY2VQYXJzZXIubWFwcGluZ3MgPSBtYXBwaW5ncztcblxuRmxvcmVuY2VQYXJzZXIuZXh0ZW5kZWRCTkYgPSBleHRlbmRlZEJORjtcblxuRmxvcmVuY2VQYXJzZXIuZGVmYXVsdEN1c3RvbUdyYW1tYXJFeHRlbmRlZEJORk1hcCA9IGRlZmF1bHRDdXN0b21HcmFtbWFyRXh0ZW5kZWRCTkZNYXA7XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbUV4dGVuZGVkQk5GTWFwKGV4dGVuZGVkQk5GTWFwKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IE9iamVjdC5rZXlzKGV4dGVuZGVkQk5GTWFwKSxcbiAgICAgICAgZXh0ZW5kZWRCTkYgPSBydWxlTmFtZXMucmVkdWNlKGZ1bmN0aW9uKGV4dGVuZGVkQk5GLCBydWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IHJ1bGVFeHRlbmRlZEJORiA9IGV4dGVuZGVkQk5GTWFwW3J1bGVOYW1lXTtcbiAgXG4gICAgICAgICAgZXh0ZW5kZWRCTkYgPSBgJHtleHRlbmRlZEJORn0ke3J1bGVFeHRlbmRlZEJORn1gO1xuICBcbiAgICAgICAgICByZXR1cm4gZXh0ZW5kZWRCTkY7XG4gICAgICAgIH0sICcnKSxcbiAgICAgICAgbGluZXMgPSBleHRlbmRlZEJORkxleGVyLmxpbmVzRnJvbUV4dGVuZGVkQk5GKGV4dGVuZGVkQk5GKSxcbiAgICAgICAgbm9kZSA9IGV4dGVuZGVkQk5GUGFyc2VyLm5vZGVGcm9tTGluZXMobGluZXMpLFxuICAgICAgICBydWxlcyA9IEV4dGVuZGVkQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMobm9kZSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuIl19