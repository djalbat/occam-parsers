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
    defaultCustomBNFMap = require('./defaultCustomBNFMap'),
    defaultAdditionalMappings = require('./defaultAdditionalMappings');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer;


var extendedBNFLexer = ExtendedBNFLexer.fromNothing(),
    extendedBNFParser = ExtendedBNFParser.fromNothing(),
    defaultCustomBNF = bnfFromBNFMap(defaultCustomBNFMap);

var FlorenceParser = function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
  }

  _createClass(FlorenceParser, null, [{
    key: 'fromCustomBNFAndAdditionalMappings',
    value: function fromCustomBNFAndAdditionalMappings(customBNF, additionalMappings) {
      var florenceParser = FlorenceParser.fromExtendedBNFAndMappings(extendedBNF, mappings, customBNF, additionalMappings);

      return florenceParser;
    }
  }, {
    key: 'fromExtendedBNFAndMappings',
    value: function fromExtendedBNFAndMappings(extendedBNF, mappings) {
      var customBNF = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultCustomBNF;
      var additionalMappings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultAdditionalMappings;

      extendedBNF = extendedBNF + '\n\n' + customBNF; ///    
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

FlorenceParser.defaultCustomBNFMap = defaultCustomBNFMap;

function bnfFromBNFMap(bnfMap) {
  var ruleNames = Object.keys(bnfMap),
      bnf = ruleNames.reduce(function (bnf, ruleName) {
    var ruleBNF = bnfMap[ruleName];

    bnf = '' + bnf + ruleBNF;

    return bnf;
  }, '');

  return bnf;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIm1hcHBpbmdzIiwiZXh0ZW5kZWRCTkYiLCJDb21tb25QYXJzZXIiLCJFeHRlbmRlZEJORlBhcnNlciIsImRlZmF1bHRDdXN0b21CTkZNYXAiLCJkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzIiwiRXh0ZW5kZWRCTkZMZXhlciIsImV4dGVuZGVkQk5GTGV4ZXIiLCJmcm9tTm90aGluZyIsImV4dGVuZGVkQk5GUGFyc2VyIiwiZGVmYXVsdEN1c3RvbUJORiIsImJuZkZyb21CTkZNYXAiLCJGbG9yZW5jZVBhcnNlciIsImN1c3RvbUJORiIsImFkZGl0aW9uYWxNYXBwaW5ncyIsImZsb3JlbmNlUGFyc2VyIiwiZnJvbUV4dGVuZGVkQk5GQW5kTWFwcGluZ3MiLCJPYmplY3QiLCJhc3NpZ24iLCJsaW5lcyIsImxpbmVzRnJvbUV4dGVuZGVkQk5GIiwibm9kZSIsIm5vZGVGcm9tTGluZXMiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiYm5mTWFwIiwicnVsZU5hbWVzIiwia2V5cyIsImJuZiIsInJlZHVjZSIsInJ1bGVOYW1lIiwicnVsZUJORiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxXQUFXRCxRQUFRLFlBQVIsQ0FBakI7QUFBQSxJQUNNRSxjQUFjRixRQUFRLGVBQVIsQ0FEcEI7QUFBQSxJQUVNRyxlQUFlSCxRQUFRLGtCQUFSLENBRnJCO0FBQUEsSUFHTUksb0JBQW9CSixRQUFRLHVCQUFSLENBSDFCO0FBQUEsSUFJTUssc0JBQXNCTCxRQUFRLHVCQUFSLENBSjVCO0FBQUEsSUFLTU0sNEJBQTRCTixRQUFRLDZCQUFSLENBTGxDOztJQU9RTyxnQixHQUFxQlIsTSxDQUFyQlEsZ0I7OztBQUVSLElBQU1DLG1CQUFtQkQsaUJBQWlCRSxXQUFqQixFQUF6QjtBQUFBLElBQ01DLG9CQUFvQk4sa0JBQWtCSyxXQUFsQixFQUQxQjtBQUFBLElBRU1FLG1CQUFtQkMsY0FBY1AsbUJBQWQsQ0FGekI7O0lBSU1RLGM7Ozs7Ozs7Ozs7O3VEQUNzQ0MsUyxFQUFXQyxrQixFQUFvQjtBQUN2RSxVQUFNQyxpQkFBaUJILGVBQWVJLDBCQUFmLENBQTBDZixXQUExQyxFQUF1REQsUUFBdkQsRUFBaUVhLFNBQWpFLEVBQTRFQyxrQkFBNUUsQ0FBdkI7O0FBRUEsYUFBT0MsY0FBUDtBQUNEOzs7K0NBRWlDZCxXLEVBQWFELFEsRUFBd0Y7QUFBQSxVQUE5RWEsU0FBOEUsdUVBQWxFSCxnQkFBa0U7QUFBQSxVQUFoREksa0JBQWdELHVFQUEzQlQseUJBQTJCOztBQUNySUosb0JBQWlCQSxXQUFqQixZQUFtQ1ksU0FBbkMsQ0FEcUksQ0FDckY7QUFDaERiLGlCQUFXaUIsT0FBT0MsTUFBUCxDQUFjbEIsUUFBZCxFQUF3QmMsa0JBQXhCLENBQVgsQ0FGcUksQ0FFN0U7O0FBRXhELFVBQU1LLFFBQVFaLGlCQUFpQmEsb0JBQWpCLENBQXNDbkIsV0FBdEMsQ0FBZDtBQUFBLFVBQ01vQixPQUFPWixrQkFBa0JhLGFBQWxCLENBQWdDSCxLQUFoQyxDQURiO0FBQUEsVUFFTUksUUFBUXBCLGtCQUFrQnFCLGFBQWxCLENBQWdDSCxJQUFoQyxFQUFzQ3JCLFFBQXRDLENBRmQ7QUFBQSxVQUdNZSxpQkFBaUIsSUFBSUgsY0FBSixDQUFtQlcsS0FBbkIsQ0FIdkI7O0FBS0EsYUFBT1IsY0FBUDtBQUNEOzs7O0VBakIwQmIsWTs7QUFvQjdCdUIsT0FBT0MsT0FBUCxHQUFpQmQsY0FBakI7O0FBRUFBLGVBQWVaLFFBQWYsR0FBMEJBLFFBQTFCOztBQUVBWSxlQUFlWCxXQUFmLEdBQTZCQSxXQUE3Qjs7QUFFQVcsZUFBZVIsbUJBQWYsR0FBcUNBLG1CQUFyQzs7QUFFQSxTQUFTTyxhQUFULENBQXVCZ0IsTUFBdkIsRUFBK0I7QUFDN0IsTUFBTUMsWUFBWVgsT0FBT1ksSUFBUCxDQUFZRixNQUFaLENBQWxCO0FBQUEsTUFDTUcsTUFBTUYsVUFBVUcsTUFBVixDQUFpQixVQUFTRCxHQUFULEVBQWNFLFFBQWQsRUFBd0I7QUFDN0MsUUFBTUMsVUFBVU4sT0FBT0ssUUFBUCxDQUFoQjs7QUFFQUYsZUFBU0EsR0FBVCxHQUFlRyxPQUFmOztBQUVBLFdBQU9ILEdBQVA7QUFDRCxHQU5LLEVBTUgsRUFORyxDQURaOztBQVNBLFNBQU9BLEdBQVA7QUFDRCIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBtYXBwaW5ncyA9IHJlcXVpcmUoJy4vbWFwcGluZ3MnKSxcbiAgICAgIGV4dGVuZGVkQk5GID0gcmVxdWlyZSgnLi9leHRlbmRlZEJORicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgRXh0ZW5kZWRCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9leHRlbmRlZEJORi9wYXJzZXInKSxcbiAgICAgIGRlZmF1bHRDdXN0b21CTkZNYXAgPSByZXF1aXJlKCcuL2RlZmF1bHRDdXN0b21CTkZNYXAnKSxcbiAgICAgIGRlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MgPSByZXF1aXJlKCcuL2RlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MnKTtcblxuY29uc3QgeyBFeHRlbmRlZEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGV4dGVuZGVkQk5GTGV4ZXIgPSBFeHRlbmRlZEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBleHRlbmRlZEJORlBhcnNlciA9IEV4dGVuZGVkQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICBkZWZhdWx0Q3VzdG9tQk5GID0gYm5mRnJvbUJORk1hcChkZWZhdWx0Q3VzdG9tQk5GTWFwKTtcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbUN1c3RvbUJORkFuZEFkZGl0aW9uYWxNYXBwaW5ncyhjdXN0b21CTkYsIGFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUV4dGVuZGVkQk5GQW5kTWFwcGluZ3MoZXh0ZW5kZWRCTkYsIG1hcHBpbmdzLCBjdXN0b21CTkYsIGFkZGl0aW9uYWxNYXBwaW5ncyk7XG4gIFxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21FeHRlbmRlZEJORkFuZE1hcHBpbmdzKGV4dGVuZGVkQk5GLCBtYXBwaW5ncywgY3VzdG9tQk5GID0gZGVmYXVsdEN1c3RvbUJORiwgYWRkaXRpb25hbE1hcHBpbmdzID0gZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIGV4dGVuZGVkQk5GID0gYCR7ZXh0ZW5kZWRCTkZ9XFxuXFxuJHtjdXN0b21CTkZ9YDsgLy8vICAgIFxuICAgIG1hcHBpbmdzID0gT2JqZWN0LmFzc2lnbihtYXBwaW5ncywgYWRkaXRpb25hbE1hcHBpbmdzKTsgLy8vXG5cbiAgICBjb25zdCBsaW5lcyA9IGV4dGVuZGVkQk5GTGV4ZXIubGluZXNGcm9tRXh0ZW5kZWRCTkYoZXh0ZW5kZWRCTkYpLFxuICAgICAgICAgIG5vZGUgPSBleHRlbmRlZEJORlBhcnNlci5ub2RlRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgICBydWxlcyA9IEV4dGVuZGVkQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMobm9kZSwgbWFwcGluZ3MpLFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHJ1bGVzKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlUGFyc2VyO1xuXG5GbG9yZW5jZVBhcnNlci5tYXBwaW5ncyA9IG1hcHBpbmdzO1xuXG5GbG9yZW5jZVBhcnNlci5leHRlbmRlZEJORiA9IGV4dGVuZGVkQk5GO1xuXG5GbG9yZW5jZVBhcnNlci5kZWZhdWx0Q3VzdG9tQk5GTWFwID0gZGVmYXVsdEN1c3RvbUJORk1hcDtcblxuZnVuY3Rpb24gYm5mRnJvbUJORk1hcChibmZNYXApIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gT2JqZWN0LmtleXMoYm5mTWFwKSxcbiAgICAgICAgYm5mID0gcnVsZU5hbWVzLnJlZHVjZShmdW5jdGlvbihibmYsIHJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcnVsZUJORiA9IGJuZk1hcFtydWxlTmFtZV07XG4gIFxuICAgICAgICAgIGJuZiA9IGAke2JuZn0ke3J1bGVCTkZ9YDtcbiAgXG4gICAgICAgICAgcmV0dXJuIGJuZjtcbiAgICAgICAgfSwgJycpO1xuXG4gIHJldHVybiBibmY7XG59XG4iXX0=