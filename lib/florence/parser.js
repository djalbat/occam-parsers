'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var mappings = require('./mappings'),
    extendedBNF = require('./extendedBNF'),
    CommonParser = require('../common/parser'),
    ExtendedBNFParser = require('../extendedBNF/parser'),
    defaultAdditionalMappings = require('./defaultAdditionalMappings'),
    defaultCustomExtendedBNFMap = require('./defaultCustomExtendedBNFMap');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer;


var extendedBNFLexer = ExtendedBNFLexer.fromNothing(),
    extendedBNFParser = ExtendedBNFParser.fromNothing(),
    defaultCustomExtendedBNF = bnfFromBNFMap(defaultCustomExtendedBNFMap);

var FlorenceParser = function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
  }

  _createClass(FlorenceParser, null, [{
    key: 'fromCustomExtendedBNFAndAdditionalMappings',
    value: function fromCustomExtendedBNFAndAdditionalMappings(customExtendedBNF, additionalMappings) {
      var florenceParser = FlorenceParser.fromExtendedBNFAndMappings(extendedBNF, mappings, customExtendedBNF, additionalMappings);

      return florenceParser;
    }
  }, {
    key: 'fromExtendedBNFAndMappings',
    value: function fromExtendedBNFAndMappings(extendedBNF, mappings) {
      var customExtendedBNF = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultCustomExtendedBNF;
      var additionalMappings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultAdditionalMappings;

      extendedBNF = extendedBNF + '\n\n' + customExtendedBNF; ///
      mappings = Object.assign(mappings, additionalMappings); ///

      var lines = extendedBNFLexer.linesFromExtendedBNF(extendedBNF),
          node = extendedBNFParser.nodeFromLines(lines),
          rules = ExtendedBNFParser.generateRules(node, mappings),
          florenceParser = new FlorenceParser(rules);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;

FlorenceParser.mappings = mappings;

FlorenceParser.extendedBNF = extendedBNF;

FlorenceParser.defaultCustomExtendedBNFMap = defaultCustomExtendedBNFMap;

function bnfFromBNFMap(extendedBNFMap) {
  var ruleNames = Object.keys(extendedBNFMap),
      extendedBNF = ruleNames.reduce(function (extendedBNF, ruleName) {
    var ruleExtendedBNF = extendedBNFMap[ruleName];

    extendedBNF = '' + extendedBNF + ruleExtendedBNF;

    return extendedBNF;
  }, '');

  return extendedBNF;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIm1hcHBpbmdzIiwiZXh0ZW5kZWRCTkYiLCJDb21tb25QYXJzZXIiLCJFeHRlbmRlZEJORlBhcnNlciIsImRlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MiLCJkZWZhdWx0Q3VzdG9tRXh0ZW5kZWRCTkZNYXAiLCJFeHRlbmRlZEJORkxleGVyIiwiZXh0ZW5kZWRCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiZXh0ZW5kZWRCTkZQYXJzZXIiLCJkZWZhdWx0Q3VzdG9tRXh0ZW5kZWRCTkYiLCJibmZGcm9tQk5GTWFwIiwiRmxvcmVuY2VQYXJzZXIiLCJjdXN0b21FeHRlbmRlZEJORiIsImFkZGl0aW9uYWxNYXBwaW5ncyIsImZsb3JlbmNlUGFyc2VyIiwiZnJvbUV4dGVuZGVkQk5GQW5kTWFwcGluZ3MiLCJPYmplY3QiLCJhc3NpZ24iLCJsaW5lcyIsImxpbmVzRnJvbUV4dGVuZGVkQk5GIiwibm9kZSIsIm5vZGVGcm9tTGluZXMiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXh0ZW5kZWRCTkZNYXAiLCJydWxlTmFtZXMiLCJrZXlzIiwicmVkdWNlIiwicnVsZU5hbWUiLCJydWxlRXh0ZW5kZWRCTkYiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsV0FBV0QsUUFBUSxZQUFSLENBQWpCO0FBQUEsSUFDTUUsY0FBY0YsUUFBUSxlQUFSLENBRHBCO0FBQUEsSUFFTUcsZUFBZUgsUUFBUSxrQkFBUixDQUZyQjtBQUFBLElBR01JLG9CQUFvQkosUUFBUSx1QkFBUixDQUgxQjtBQUFBLElBSU1LLDRCQUE0QkwsUUFBUSw2QkFBUixDQUpsQztBQUFBLElBS01NLDhCQUE4Qk4sUUFBUSwrQkFBUixDQUxwQzs7SUFPUU8sZ0IsR0FBcUJSLE0sQ0FBckJRLGdCOzs7QUFFUixJQUFNQyxtQkFBbUJELGlCQUFpQkUsV0FBakIsRUFBekI7QUFBQSxJQUNNQyxvQkFBb0JOLGtCQUFrQkssV0FBbEIsRUFEMUI7QUFBQSxJQUVNRSwyQkFBMkJDLGNBQWNOLDJCQUFkLENBRmpDOztJQUlNTyxjOzs7Ozs7Ozs7OzsrREFDOENDLGlCLEVBQW1CQyxrQixFQUFvQjtBQUN2RixVQUFNQyxpQkFBaUJILGVBQWVJLDBCQUFmLENBQTBDZixXQUExQyxFQUF1REQsUUFBdkQsRUFBaUVhLGlCQUFqRSxFQUFvRkMsa0JBQXBGLENBQXZCOztBQUVBLGFBQU9DLGNBQVA7QUFDRDs7OytDQUVpQ2QsVyxFQUFhRCxRLEVBQXdHO0FBQUEsVUFBOUZhLGlCQUE4Rix1RUFBMUVILHdCQUEwRTtBQUFBLFVBQWhESSxrQkFBZ0QsdUVBQTNCVix5QkFBMkI7O0FBQ3JKSCxvQkFBaUJBLFdBQWpCLFlBQW1DWSxpQkFBbkMsQ0FEcUosQ0FDN0Y7QUFDeERiLGlCQUFXaUIsT0FBT0MsTUFBUCxDQUFjbEIsUUFBZCxFQUF3QmMsa0JBQXhCLENBQVgsQ0FGcUosQ0FFN0Y7O0FBRXhELFVBQU1LLFFBQVFaLGlCQUFpQmEsb0JBQWpCLENBQXNDbkIsV0FBdEMsQ0FBZDtBQUFBLFVBQ01vQixPQUFPWixrQkFBa0JhLGFBQWxCLENBQWdDSCxLQUFoQyxDQURiO0FBQUEsVUFFTUksUUFBUXBCLGtCQUFrQnFCLGFBQWxCLENBQWdDSCxJQUFoQyxFQUFzQ3JCLFFBQXRDLENBRmQ7QUFBQSxVQUdNZSxpQkFBaUIsSUFBSUgsY0FBSixDQUFtQlcsS0FBbkIsQ0FIdkI7O0FBS0EsYUFBT1IsY0FBUDtBQUNEOzs7O0VBakIwQmIsWTs7QUFvQjdCdUIsT0FBT0MsT0FBUCxHQUFpQmQsY0FBakI7O0FBRUFBLGVBQWVaLFFBQWYsR0FBMEJBLFFBQTFCOztBQUVBWSxlQUFlWCxXQUFmLEdBQTZCQSxXQUE3Qjs7QUFFQVcsZUFBZVAsMkJBQWYsR0FBNkNBLDJCQUE3Qzs7QUFFQSxTQUFTTSxhQUFULENBQXVCZ0IsY0FBdkIsRUFBdUM7QUFDckMsTUFBTUMsWUFBWVgsT0FBT1ksSUFBUCxDQUFZRixjQUFaLENBQWxCO0FBQUEsTUFDTTFCLGNBQWMyQixVQUFVRSxNQUFWLENBQWlCLFVBQVM3QixXQUFULEVBQXNCOEIsUUFBdEIsRUFBZ0M7QUFDN0QsUUFBTUMsa0JBQWtCTCxlQUFlSSxRQUFmLENBQXhCOztBQUVBOUIsdUJBQWlCQSxXQUFqQixHQUErQitCLGVBQS9COztBQUVBLFdBQU8vQixXQUFQO0FBQ0QsR0FOYSxFQU1YLEVBTlcsQ0FEcEI7O0FBU0EsU0FBT0EsV0FBUDtBQUNEIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IG1hcHBpbmdzID0gcmVxdWlyZSgnLi9tYXBwaW5ncycpLFxuICAgICAgZXh0ZW5kZWRCTkYgPSByZXF1aXJlKCcuL2V4dGVuZGVkQk5GJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBFeHRlbmRlZEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2V4dGVuZGVkQk5GL3BhcnNlcicpLFxuICAgICAgZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncyA9IHJlcXVpcmUoJy4vZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncycpLFxuICAgICAgZGVmYXVsdEN1c3RvbUV4dGVuZGVkQk5GTWFwID0gcmVxdWlyZSgnLi9kZWZhdWx0Q3VzdG9tRXh0ZW5kZWRCTkZNYXAnKTtcblxuY29uc3QgeyBFeHRlbmRlZEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGV4dGVuZGVkQk5GTGV4ZXIgPSBFeHRlbmRlZEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBleHRlbmRlZEJORlBhcnNlciA9IEV4dGVuZGVkQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICBkZWZhdWx0Q3VzdG9tRXh0ZW5kZWRCTkYgPSBibmZGcm9tQk5GTWFwKGRlZmF1bHRDdXN0b21FeHRlbmRlZEJORk1hcCk7XG5cbmNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21DdXN0b21FeHRlbmRlZEJORkFuZEFkZGl0aW9uYWxNYXBwaW5ncyhjdXN0b21FeHRlbmRlZEJORiwgYWRkaXRpb25hbE1hcHBpbmdzKSB7XG4gICAgY29uc3QgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tRXh0ZW5kZWRCTkZBbmRNYXBwaW5ncyhleHRlbmRlZEJORiwgbWFwcGluZ3MsIGN1c3RvbUV4dGVuZGVkQk5GLCBhZGRpdGlvbmFsTWFwcGluZ3MpO1xuICBcbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tRXh0ZW5kZWRCTkZBbmRNYXBwaW5ncyhleHRlbmRlZEJORiwgbWFwcGluZ3MsIGN1c3RvbUV4dGVuZGVkQk5GID0gZGVmYXVsdEN1c3RvbUV4dGVuZGVkQk5GLCBhZGRpdGlvbmFsTWFwcGluZ3MgPSBkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzKSB7XG4gICAgZXh0ZW5kZWRCTkYgPSBgJHtleHRlbmRlZEJORn1cXG5cXG4ke2N1c3RvbUV4dGVuZGVkQk5GfWA7IC8vL1xuICAgIG1hcHBpbmdzID0gT2JqZWN0LmFzc2lnbihtYXBwaW5ncywgYWRkaXRpb25hbE1hcHBpbmdzKTsgLy8vXG5cbiAgICBjb25zdCBsaW5lcyA9IGV4dGVuZGVkQk5GTGV4ZXIubGluZXNGcm9tRXh0ZW5kZWRCTkYoZXh0ZW5kZWRCTkYpLFxuICAgICAgICAgIG5vZGUgPSBleHRlbmRlZEJORlBhcnNlci5ub2RlRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgICBydWxlcyA9IEV4dGVuZGVkQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMobm9kZSwgbWFwcGluZ3MpLFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHJ1bGVzKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlUGFyc2VyO1xuXG5GbG9yZW5jZVBhcnNlci5tYXBwaW5ncyA9IG1hcHBpbmdzO1xuXG5GbG9yZW5jZVBhcnNlci5leHRlbmRlZEJORiA9IGV4dGVuZGVkQk5GO1xuXG5GbG9yZW5jZVBhcnNlci5kZWZhdWx0Q3VzdG9tRXh0ZW5kZWRCTkZNYXAgPSBkZWZhdWx0Q3VzdG9tRXh0ZW5kZWRCTkZNYXA7XG5cbmZ1bmN0aW9uIGJuZkZyb21CTkZNYXAoZXh0ZW5kZWRCTkZNYXApIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gT2JqZWN0LmtleXMoZXh0ZW5kZWRCTkZNYXApLFxuICAgICAgICBleHRlbmRlZEJORiA9IHJ1bGVOYW1lcy5yZWR1Y2UoZnVuY3Rpb24oZXh0ZW5kZWRCTkYsIHJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcnVsZUV4dGVuZGVkQk5GID0gZXh0ZW5kZWRCTkZNYXBbcnVsZU5hbWVdO1xuICBcbiAgICAgICAgICBleHRlbmRlZEJORiA9IGAke2V4dGVuZGVkQk5GfSR7cnVsZUV4dGVuZGVkQk5GfWA7XG4gIFxuICAgICAgICAgIHJldHVybiBleHRlbmRlZEJORjtcbiAgICAgICAgfSwgJycpO1xuXG4gIHJldHVybiBleHRlbmRlZEJORjtcbn1cbiJdfQ==