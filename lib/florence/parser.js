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
    defaultCustomExtendedBNF = extendedBNFFromExtendedBNFMap(defaultCustomExtendedBNFMap);

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

function extendedBNFFromExtendedBNFMap(extendedBNFMap) {
  var ruleNames = Object.keys(extendedBNFMap),
      extendedBNF = ruleNames.reduce(function (extendedBNF, ruleName) {
    var ruleExtendedBNF = extendedBNFMap[ruleName];

    extendedBNF = '' + extendedBNF + ruleExtendedBNF;

    return extendedBNF;
  }, '');

  return extendedBNF;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIm1hcHBpbmdzIiwiZXh0ZW5kZWRCTkYiLCJDb21tb25QYXJzZXIiLCJFeHRlbmRlZEJORlBhcnNlciIsImRlZmF1bHRBZGRpdGlvbmFsTWFwcGluZ3MiLCJkZWZhdWx0Q3VzdG9tRXh0ZW5kZWRCTkZNYXAiLCJFeHRlbmRlZEJORkxleGVyIiwiZXh0ZW5kZWRCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiZXh0ZW5kZWRCTkZQYXJzZXIiLCJkZWZhdWx0Q3VzdG9tRXh0ZW5kZWRCTkYiLCJleHRlbmRlZEJORkZyb21FeHRlbmRlZEJORk1hcCIsIkZsb3JlbmNlUGFyc2VyIiwiY3VzdG9tRXh0ZW5kZWRCTkYiLCJhZGRpdGlvbmFsTWFwcGluZ3MiLCJmbG9yZW5jZVBhcnNlciIsImZyb21FeHRlbmRlZEJORkFuZE1hcHBpbmdzIiwiT2JqZWN0IiwiYXNzaWduIiwibGluZXMiLCJsaW5lc0Zyb21FeHRlbmRlZEJORiIsIm5vZGUiLCJub2RlRnJvbUxpbmVzIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImV4dGVuZGVkQk5GTWFwIiwicnVsZU5hbWVzIiwia2V5cyIsInJlZHVjZSIsInJ1bGVOYW1lIiwicnVsZUV4dGVuZGVkQk5GIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFdBQVdELFFBQVEsWUFBUixDQUFqQjtBQUFBLElBQ01FLGNBQWNGLFFBQVEsZUFBUixDQURwQjtBQUFBLElBRU1HLGVBQWVILFFBQVEsa0JBQVIsQ0FGckI7QUFBQSxJQUdNSSxvQkFBb0JKLFFBQVEsdUJBQVIsQ0FIMUI7QUFBQSxJQUlNSyw0QkFBNEJMLFFBQVEsNkJBQVIsQ0FKbEM7QUFBQSxJQUtNTSw4QkFBOEJOLFFBQVEsK0JBQVIsQ0FMcEM7O0lBT1FPLGdCLEdBQXFCUixNLENBQXJCUSxnQjs7O0FBRVIsSUFBTUMsbUJBQW1CRCxpQkFBaUJFLFdBQWpCLEVBQXpCO0FBQUEsSUFDTUMsb0JBQW9CTixrQkFBa0JLLFdBQWxCLEVBRDFCO0FBQUEsSUFFTUUsMkJBQTJCQyw4QkFBOEJOLDJCQUE5QixDQUZqQzs7SUFJTU8sYzs7Ozs7Ozs7Ozs7K0RBQzhDQyxpQixFQUFtQkMsa0IsRUFBb0I7QUFDdkYsVUFBTUMsaUJBQWlCSCxlQUFlSSwwQkFBZixDQUEwQ2YsV0FBMUMsRUFBdURELFFBQXZELEVBQWlFYSxpQkFBakUsRUFBb0ZDLGtCQUFwRixDQUF2Qjs7QUFFQSxhQUFPQyxjQUFQO0FBQ0Q7OzsrQ0FFaUNkLFcsRUFBYUQsUSxFQUF3RztBQUFBLFVBQTlGYSxpQkFBOEYsdUVBQTFFSCx3QkFBMEU7QUFBQSxVQUFoREksa0JBQWdELHVFQUEzQlYseUJBQTJCOztBQUNySkgsb0JBQWlCQSxXQUFqQixZQUFtQ1ksaUJBQW5DLENBRHFKLENBQzdGO0FBQ3hEYixpQkFBV2lCLE9BQU9DLE1BQVAsQ0FBY2xCLFFBQWQsRUFBd0JjLGtCQUF4QixDQUFYLENBRnFKLENBRTdGOztBQUV4RCxVQUFNSyxRQUFRWixpQkFBaUJhLG9CQUFqQixDQUFzQ25CLFdBQXRDLENBQWQ7QUFBQSxVQUNNb0IsT0FBT1osa0JBQWtCYSxhQUFsQixDQUFnQ0gsS0FBaEMsQ0FEYjtBQUFBLFVBRU1JLFFBQVFwQixrQkFBa0JxQixhQUFsQixDQUFnQ0gsSUFBaEMsRUFBc0NyQixRQUF0QyxDQUZkO0FBQUEsVUFHTWUsaUJBQWlCLElBQUlILGNBQUosQ0FBbUJXLEtBQW5CLENBSHZCOztBQUtBLGFBQU9SLGNBQVA7QUFDRDs7OztFQWpCMEJiLFk7O0FBb0I3QnVCLE9BQU9DLE9BQVAsR0FBaUJkLGNBQWpCOztBQUVBQSxlQUFlWixRQUFmLEdBQTBCQSxRQUExQjs7QUFFQVksZUFBZVgsV0FBZixHQUE2QkEsV0FBN0I7O0FBRUFXLGVBQWVQLDJCQUFmLEdBQTZDQSwyQkFBN0M7O0FBRUEsU0FBU00sNkJBQVQsQ0FBdUNnQixjQUF2QyxFQUF1RDtBQUNyRCxNQUFNQyxZQUFZWCxPQUFPWSxJQUFQLENBQVlGLGNBQVosQ0FBbEI7QUFBQSxNQUNNMUIsY0FBYzJCLFVBQVVFLE1BQVYsQ0FBaUIsVUFBUzdCLFdBQVQsRUFBc0I4QixRQUF0QixFQUFnQztBQUM3RCxRQUFNQyxrQkFBa0JMLGVBQWVJLFFBQWYsQ0FBeEI7O0FBRUE5Qix1QkFBaUJBLFdBQWpCLEdBQStCK0IsZUFBL0I7O0FBRUEsV0FBTy9CLFdBQVA7QUFDRCxHQU5hLEVBTVgsRUFOVyxDQURwQjs7QUFTQSxTQUFPQSxXQUFQO0FBQ0QiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgbWFwcGluZ3MgPSByZXF1aXJlKCcuL21hcHBpbmdzJyksXG4gICAgICBleHRlbmRlZEJORiA9IHJlcXVpcmUoJy4vZXh0ZW5kZWRCTkYnKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIEV4dGVuZGVkQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vZXh0ZW5kZWRCTkYvcGFyc2VyJyksXG4gICAgICBkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzID0gcmVxdWlyZSgnLi9kZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzJyksXG4gICAgICBkZWZhdWx0Q3VzdG9tRXh0ZW5kZWRCTkZNYXAgPSByZXF1aXJlKCcuL2RlZmF1bHRDdXN0b21FeHRlbmRlZEJORk1hcCcpO1xuXG5jb25zdCB7IEV4dGVuZGVkQk5GTGV4ZXIgfSA9IGxleGVycztcblxuY29uc3QgZXh0ZW5kZWRCTkZMZXhlciA9IEV4dGVuZGVkQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGV4dGVuZGVkQk5GUGFyc2VyID0gRXh0ZW5kZWRCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGRlZmF1bHRDdXN0b21FeHRlbmRlZEJORiA9IGV4dGVuZGVkQk5GRnJvbUV4dGVuZGVkQk5GTWFwKGRlZmF1bHRDdXN0b21FeHRlbmRlZEJORk1hcCk7XG5cbmNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21DdXN0b21FeHRlbmRlZEJORkFuZEFkZGl0aW9uYWxNYXBwaW5ncyhjdXN0b21FeHRlbmRlZEJORiwgYWRkaXRpb25hbE1hcHBpbmdzKSB7XG4gICAgY29uc3QgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tRXh0ZW5kZWRCTkZBbmRNYXBwaW5ncyhleHRlbmRlZEJORiwgbWFwcGluZ3MsIGN1c3RvbUV4dGVuZGVkQk5GLCBhZGRpdGlvbmFsTWFwcGluZ3MpO1xuICBcbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tRXh0ZW5kZWRCTkZBbmRNYXBwaW5ncyhleHRlbmRlZEJORiwgbWFwcGluZ3MsIGN1c3RvbUV4dGVuZGVkQk5GID0gZGVmYXVsdEN1c3RvbUV4dGVuZGVkQk5GLCBhZGRpdGlvbmFsTWFwcGluZ3MgPSBkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzKSB7XG4gICAgZXh0ZW5kZWRCTkYgPSBgJHtleHRlbmRlZEJORn1cXG5cXG4ke2N1c3RvbUV4dGVuZGVkQk5GfWA7IC8vL1xuICAgIG1hcHBpbmdzID0gT2JqZWN0LmFzc2lnbihtYXBwaW5ncywgYWRkaXRpb25hbE1hcHBpbmdzKTsgLy8vXG5cbiAgICBjb25zdCBsaW5lcyA9IGV4dGVuZGVkQk5GTGV4ZXIubGluZXNGcm9tRXh0ZW5kZWRCTkYoZXh0ZW5kZWRCTkYpLFxuICAgICAgICAgIG5vZGUgPSBleHRlbmRlZEJORlBhcnNlci5ub2RlRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgICBydWxlcyA9IEV4dGVuZGVkQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMobm9kZSwgbWFwcGluZ3MpLFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHJ1bGVzKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlUGFyc2VyO1xuXG5GbG9yZW5jZVBhcnNlci5tYXBwaW5ncyA9IG1hcHBpbmdzO1xuXG5GbG9yZW5jZVBhcnNlci5leHRlbmRlZEJORiA9IGV4dGVuZGVkQk5GO1xuXG5GbG9yZW5jZVBhcnNlci5kZWZhdWx0Q3VzdG9tRXh0ZW5kZWRCTkZNYXAgPSBkZWZhdWx0Q3VzdG9tRXh0ZW5kZWRCTkZNYXA7XG5cbmZ1bmN0aW9uIGV4dGVuZGVkQk5GRnJvbUV4dGVuZGVkQk5GTWFwKGV4dGVuZGVkQk5GTWFwKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IE9iamVjdC5rZXlzKGV4dGVuZGVkQk5GTWFwKSxcbiAgICAgICAgZXh0ZW5kZWRCTkYgPSBydWxlTmFtZXMucmVkdWNlKGZ1bmN0aW9uKGV4dGVuZGVkQk5GLCBydWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IHJ1bGVFeHRlbmRlZEJORiA9IGV4dGVuZGVkQk5GTWFwW3J1bGVOYW1lXTtcbiAgXG4gICAgICAgICAgZXh0ZW5kZWRCTkYgPSBgJHtleHRlbmRlZEJORn0ke3J1bGVFeHRlbmRlZEJORn1gO1xuICBcbiAgICAgICAgICByZXR1cm4gZXh0ZW5kZWRCTkY7XG4gICAgICAgIH0sICcnKTtcblxuICByZXR1cm4gZXh0ZW5kZWRCTkY7XG59XG4iXX0=