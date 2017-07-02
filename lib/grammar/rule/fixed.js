'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../bnf/rule'),
    UnitDefinition = require('../definition/unit'),
    NonUnitDefinition = require('../definition/nonUnit');

var FixedRule = function (_Rule) {
  _inherits(FixedRule, _Rule);

  function FixedRule() {
    _classCallCheck(this, FixedRule);

    return _possibleConstructorReturn(this, (FixedRule.__proto__ || Object.getPrototypeOf(FixedRule)).apply(this, arguments));
  }

  _createClass(FixedRule, null, [{
    key: 'fromRuleAndRuleNames',
    value: function fromRuleAndRuleNames(rule, ruleNames) {
      var ruleName = rule.getName(),
          ruleNode = rule.getNode(),
          name = ruleName,
          ///
      definitions = definitionsFromRuleAndRuleNames(rule, ruleNames),
          Node = ruleNode,
          ///
      fixedRule = new FixedRule(name, definitions, Node);

      return fixedRule;
    }
  }]);

  return FixedRule;
}(Rule);

module.exports = FixedRule;

function definitionsFromRuleAndRuleNames(rule, ruleNames) {
  var ruleDefinitions = rule.getDefinitions(),
      definitions = ruleDefinitions.reduce(function (definitions, ruleDefinition) {
    var definition = null;

    var nonUnitDefinition = NonUnitDefinition.fromDefinition(ruleDefinition);

    if (nonUnitDefinition !== null) {
      definition = nonUnitDefinition; ///
    } else {
      var unitDefinition = UnitDefinition.fromDefinition(ruleDefinition),
          unitDefinitionIncludedInRuleNames = unitDefinition.isIncludedInRuleNames(ruleNames);

      if (!unitDefinitionIncludedInRuleNames) {
        definition = unitDefinition; ///
      }
    }

    if (definition !== null) {
      definitions.push(definition);
    }

    return definitions;
  }, []);

  return definitions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3J1bGUvZml4ZWQuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJVbml0RGVmaW5pdGlvbiIsIk5vblVuaXREZWZpbml0aW9uIiwiRml4ZWRSdWxlIiwicnVsZSIsInJ1bGVOYW1lcyIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJ1bGVOb2RlIiwiZ2V0Tm9kZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsImRlZmluaXRpb25zRnJvbVJ1bGVBbmRSdWxlTmFtZXMiLCJOb2RlIiwiZml4ZWRSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyIsInJ1bGVEZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwicmVkdWNlIiwicnVsZURlZmluaXRpb24iLCJkZWZpbml0aW9uIiwibm9uVW5pdERlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbiIsInVuaXREZWZpbml0aW9uIiwidW5pdERlZmluaXRpb25JbmNsdWRlZEluUnVsZU5hbWVzIiwiaXNJbmNsdWRlZEluUnVsZU5hbWVzIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLGdCQUFSLENBQWI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSxvQkFBb0JGLFFBQVEsdUJBQVIsQ0FGMUI7O0lBSU1HLFM7Ozs7Ozs7Ozs7O3lDQUN3QkMsSSxFQUFNQyxTLEVBQVc7QUFDM0MsVUFBTUMsV0FBV0YsS0FBS0csT0FBTCxFQUFqQjtBQUFBLFVBQ01DLFdBQVdKLEtBQUtLLE9BQUwsRUFEakI7QUFBQSxVQUVNQyxPQUFPSixRQUZiO0FBQUEsVUFFdUI7QUFDakJLLG9CQUFjQyxnQ0FBZ0NSLElBQWhDLEVBQXNDQyxTQUF0QyxDQUhwQjtBQUFBLFVBSU1RLE9BQU9MLFFBSmI7QUFBQSxVQUl1QjtBQUNqQk0sa0JBQVksSUFBSVgsU0FBSixDQUFjTyxJQUFkLEVBQW9CQyxXQUFwQixFQUFpQ0UsSUFBakMsQ0FMbEI7O0FBT0EsYUFBT0MsU0FBUDtBQUNEOzs7O0VBVnFCZixJOztBQWF4QmdCLE9BQU9DLE9BQVAsR0FBaUJiLFNBQWpCOztBQUVBLFNBQVNTLCtCQUFULENBQXlDUixJQUF6QyxFQUErQ0MsU0FBL0MsRUFBMEQ7QUFDeEQsTUFBTVksa0JBQWtCYixLQUFLYyxjQUFMLEVBQXhCO0FBQUEsTUFDTVAsY0FBY00sZ0JBQWdCRSxNQUFoQixDQUF1QixVQUFTUixXQUFULEVBQXNCUyxjQUF0QixFQUFzQztBQUN6RSxRQUFJQyxhQUFhLElBQWpCOztBQUVBLFFBQU1DLG9CQUFvQnBCLGtCQUFrQnFCLGNBQWxCLENBQWlDSCxjQUFqQyxDQUExQjs7QUFFQSxRQUFJRSxzQkFBc0IsSUFBMUIsRUFBZ0M7QUFDOUJELG1CQUFhQyxpQkFBYixDQUQ4QixDQUNFO0FBQ2pDLEtBRkQsTUFFTztBQUNMLFVBQU1FLGlCQUFpQnZCLGVBQWVzQixjQUFmLENBQThCSCxjQUE5QixDQUF2QjtBQUFBLFVBQ01LLG9DQUFvQ0QsZUFBZUUscUJBQWYsQ0FBcUNyQixTQUFyQyxDQUQxQzs7QUFHQSxVQUFJLENBQUNvQixpQ0FBTCxFQUF3QztBQUN0Q0oscUJBQWFHLGNBQWIsQ0FEc0MsQ0FDUjtBQUMvQjtBQUNGOztBQUVELFFBQUlILGVBQWUsSUFBbkIsRUFBeUI7QUFDdkJWLGtCQUFZZ0IsSUFBWixDQUFpQk4sVUFBakI7QUFDRDs7QUFFRCxXQUFPVixXQUFQO0FBQ0QsR0FyQmEsRUFxQlgsRUFyQlcsQ0FEcEI7O0FBd0JBLFNBQU9BLFdBQVA7QUFDRCIsImZpbGUiOiJmaXhlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uLy4uL2JuZi9ydWxlJyksXG4gICAgICBVbml0RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vdW5pdCcpLFxuICAgICAgTm9uVW5pdERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL25vblVuaXQnKTtcblxuY2xhc3MgRml4ZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZUFuZFJ1bGVOYW1lcyhydWxlLCBydWxlTmFtZXMpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJ1bGVOb2RlID0gcnVsZS5nZXROb2RlKCksXG4gICAgICAgICAgbmFtZSA9IHJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zRnJvbVJ1bGVBbmRSdWxlTmFtZXMocnVsZSwgcnVsZU5hbWVzKSxcbiAgICAgICAgICBOb2RlID0gcnVsZU5vZGUsIC8vL1xuICAgICAgICAgIGZpeGVkUnVsZSA9IG5ldyBGaXhlZFJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIGZpeGVkUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZpeGVkUnVsZTtcblxuZnVuY3Rpb24gZGVmaW5pdGlvbnNGcm9tUnVsZUFuZFJ1bGVOYW1lcyhydWxlLCBydWxlTmFtZXMpIHtcbiAgY29uc3QgcnVsZURlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICBkZWZpbml0aW9ucyA9IHJ1bGVEZWZpbml0aW9ucy5yZWR1Y2UoZnVuY3Rpb24oZGVmaW5pdGlvbnMsIHJ1bGVEZWZpbml0aW9uKSB7XG4gICAgICAgICAgbGV0IGRlZmluaXRpb24gPSBudWxsO1xuXG4gICAgICAgICAgY29uc3Qgbm9uVW5pdERlZmluaXRpb24gPSBOb25Vbml0RGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihydWxlRGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAobm9uVW5pdERlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGRlZmluaXRpb24gPSBub25Vbml0RGVmaW5pdGlvbjsgLy8vXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHVuaXREZWZpbml0aW9uID0gVW5pdERlZmluaXRpb24uZnJvbURlZmluaXRpb24ocnVsZURlZmluaXRpb24pLFxuICAgICAgICAgICAgICAgICAgdW5pdERlZmluaXRpb25JbmNsdWRlZEluUnVsZU5hbWVzID0gdW5pdERlZmluaXRpb24uaXNJbmNsdWRlZEluUnVsZU5hbWVzKHJ1bGVOYW1lcyk7XG5cbiAgICAgICAgICAgIGlmICghdW5pdERlZmluaXRpb25JbmNsdWRlZEluUnVsZU5hbWVzKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb24gPSB1bml0RGVmaW5pdGlvbjsgIC8vL1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBkZWZpbml0aW9ucztcbiAgICAgICAgfSwgW10pO1xuXG4gIHJldHVybiBkZWZpbml0aW9ucztcbn1cbiJdfQ==