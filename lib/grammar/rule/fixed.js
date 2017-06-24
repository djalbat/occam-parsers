'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../extendedBNF/rule'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3J1bGUvZml4ZWQuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJVbml0RGVmaW5pdGlvbiIsIk5vblVuaXREZWZpbml0aW9uIiwiRml4ZWRSdWxlIiwicnVsZSIsInJ1bGVOYW1lcyIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJ1bGVOb2RlIiwiZ2V0Tm9kZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsImRlZmluaXRpb25zRnJvbVJ1bGVBbmRSdWxlTmFtZXMiLCJOb2RlIiwiZml4ZWRSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyIsInJ1bGVEZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwicmVkdWNlIiwicnVsZURlZmluaXRpb24iLCJkZWZpbml0aW9uIiwibm9uVW5pdERlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbiIsInVuaXREZWZpbml0aW9uIiwidW5pdERlZmluaXRpb25JbmNsdWRlZEluUnVsZU5hbWVzIiwiaXNJbmNsdWRlZEluUnVsZU5hbWVzIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLHdCQUFSLENBQWI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSxvQkFBb0JGLFFBQVEsdUJBQVIsQ0FGMUI7O0lBSU1HLFM7Ozs7Ozs7Ozs7O3lDQUN3QkMsSSxFQUFNQyxTLEVBQVc7QUFDM0MsVUFBTUMsV0FBV0YsS0FBS0csT0FBTCxFQUFqQjtBQUFBLFVBQ01DLFdBQVdKLEtBQUtLLE9BQUwsRUFEakI7QUFBQSxVQUVNQyxPQUFPSixRQUZiO0FBQUEsVUFFdUI7QUFDakJLLG9CQUFjQyxnQ0FBZ0NSLElBQWhDLEVBQXNDQyxTQUF0QyxDQUhwQjtBQUFBLFVBSU1RLE9BQU9MLFFBSmI7QUFBQSxVQUl1QjtBQUNqQk0sa0JBQVksSUFBSVgsU0FBSixDQUFjTyxJQUFkLEVBQW9CQyxXQUFwQixFQUFpQ0UsSUFBakMsQ0FMbEI7O0FBT0EsYUFBT0MsU0FBUDtBQUNEOzs7O0VBVnFCZixJOztBQWF4QmdCLE9BQU9DLE9BQVAsR0FBaUJiLFNBQWpCOztBQUVBLFNBQVNTLCtCQUFULENBQXlDUixJQUF6QyxFQUErQ0MsU0FBL0MsRUFBMEQ7QUFDeEQsTUFBTVksa0JBQWtCYixLQUFLYyxjQUFMLEVBQXhCO0FBQUEsTUFDTVAsY0FBY00sZ0JBQWdCRSxNQUFoQixDQUF1QixVQUFTUixXQUFULEVBQXNCUyxjQUF0QixFQUFzQztBQUN6RSxRQUFJQyxhQUFhLElBQWpCOztBQUVBLFFBQU1DLG9CQUFvQnBCLGtCQUFrQnFCLGNBQWxCLENBQWlDSCxjQUFqQyxDQUExQjs7QUFFQSxRQUFJRSxzQkFBc0IsSUFBMUIsRUFBZ0M7QUFDOUJELG1CQUFhQyxpQkFBYixDQUQ4QixDQUNFO0FBQ2pDLEtBRkQsTUFFTztBQUNMLFVBQU1FLGlCQUFpQnZCLGVBQWVzQixjQUFmLENBQThCSCxjQUE5QixDQUF2QjtBQUFBLFVBQ01LLG9DQUFvQ0QsZUFBZUUscUJBQWYsQ0FBcUNyQixTQUFyQyxDQUQxQzs7QUFHQSxVQUFJLENBQUNvQixpQ0FBTCxFQUF3QztBQUN0Q0oscUJBQWFHLGNBQWIsQ0FEc0MsQ0FDUjtBQUMvQjtBQUNGOztBQUVELFFBQUlILGVBQWUsSUFBbkIsRUFBeUI7QUFDdkJWLGtCQUFZZ0IsSUFBWixDQUFpQk4sVUFBakI7QUFDRDs7QUFFRCxXQUFPVixXQUFQO0FBQ0QsR0FyQmEsRUFxQlgsRUFyQlcsQ0FEcEI7O0FBd0JBLFNBQU9BLFdBQVA7QUFDRCIsImZpbGUiOiJmaXhlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uLy4uL2V4dGVuZGVkQk5GL3J1bGUnKSxcbiAgICAgIFVuaXREZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi91bml0JyksXG4gICAgICBOb25Vbml0RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vbm9uVW5pdCcpO1xuXG5jbGFzcyBGaXhlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlQW5kUnVsZU5hbWVzKHJ1bGUsIHJ1bGVOYW1lcykge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgcnVsZU5vZGUgPSBydWxlLmdldE5vZGUoKSxcbiAgICAgICAgICBuYW1lID0gcnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnNGcm9tUnVsZUFuZFJ1bGVOYW1lcyhydWxlLCBydWxlTmFtZXMpLFxuICAgICAgICAgIE5vZGUgPSBydWxlTm9kZSwgLy8vXG4gICAgICAgICAgZml4ZWRSdWxlID0gbmV3IEZpeGVkUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7XG5cbiAgICByZXR1cm4gZml4ZWRSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRml4ZWRSdWxlO1xuXG5mdW5jdGlvbiBkZWZpbml0aW9uc0Zyb21SdWxlQW5kUnVsZU5hbWVzKHJ1bGUsIHJ1bGVOYW1lcykge1xuICBjb25zdCBydWxlRGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgIGRlZmluaXRpb25zID0gcnVsZURlZmluaXRpb25zLnJlZHVjZShmdW5jdGlvbihkZWZpbml0aW9ucywgcnVsZURlZmluaXRpb24pIHtcbiAgICAgICAgICBsZXQgZGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICAgICAgICBjb25zdCBub25Vbml0RGVmaW5pdGlvbiA9IE5vblVuaXREZWZpbml0aW9uLmZyb21EZWZpbml0aW9uKHJ1bGVEZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChub25Vbml0RGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZGVmaW5pdGlvbiA9IG5vblVuaXREZWZpbml0aW9uOyAvLy9cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdW5pdERlZmluaXRpb24gPSBVbml0RGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihydWxlRGVmaW5pdGlvbiksXG4gICAgICAgICAgICAgICAgICB1bml0RGVmaW5pdGlvbkluY2x1ZGVkSW5SdWxlTmFtZXMgPSB1bml0RGVmaW5pdGlvbi5pc0luY2x1ZGVkSW5SdWxlTmFtZXMocnVsZU5hbWVzKTtcblxuICAgICAgICAgICAgaWYgKCF1bml0RGVmaW5pdGlvbkluY2x1ZGVkSW5SdWxlTmFtZXMpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbiA9IHVuaXREZWZpbml0aW9uOyAgLy8vXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGRlZmluaXRpb25zLnB1c2goZGVmaW5pdGlvbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICAgICAgICB9LCBbXSk7XG5cbiAgcmV0dXJuIGRlZmluaXRpb25zO1xufVxuIl19