'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../extendedBNF/rule'),
    UnitDefinition = require('../definition/unit'),
    NonUnitDefinition = require('../definition/nonUnit');

var NonCyclicRule = function (_Rule) {
  _inherits(NonCyclicRule, _Rule);

  function NonCyclicRule() {
    _classCallCheck(this, NonCyclicRule);

    return _possibleConstructorReturn(this, (NonCyclicRule.__proto__ || Object.getPrototypeOf(NonCyclicRule)).apply(this, arguments));
  }

  _createClass(NonCyclicRule, null, [{
    key: 'fromRule',
    value: function fromRule(rule) {
      var nonCyclicDefinitions = nonCyclicDefinitionsFromRule(rule),
          ruleName = rule.getName(),
          ruleNode = rule.getNode(),
          name = ruleName,
          ///
      definitions = nonCyclicDefinitions,
          ///
      Node = ruleNode,
          ///
      nonCyclicRule = new NonCyclicRule(name, definitions, Node);

      return nonCyclicRule;
    }
  }]);

  return NonCyclicRule;
}(Rule);

module.exports = NonCyclicRule;

function nonCyclicDefinitionsFromRule(rule) {
  var ruleName = rule.getName(),
      ruleDefinitions = rule.getDefinitions(),
      nonCyclicDefinitions = ruleDefinitions.reduce(function (nonCyclicDefinitions, ruleDefinition) {
    var nonCyclicDefinition = null;

    var nonUnitDefinition = NonUnitDefinition.fromDefinition(ruleDefinition);

    if (nonUnitDefinition !== null) {
      nonCyclicDefinition = nonUnitDefinition;
    } else {
      var unitDefinition = UnitDefinition.fromDefinition(ruleDefinition),
          unitDefinitionRuleName = unitDefinition.getRuleName();

      if (unitDefinitionRuleName !== ruleName) {
        nonCyclicDefinition = unitDefinition;
      }
    }

    if (nonCyclicDefinition !== null) {
      nonCyclicDefinitions.push(nonCyclicDefinition);
    }

    return nonCyclicDefinitions;
  }, []);

  return nonCyclicDefinitions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3J1bGUvbm9uQ3ljbGljLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiVW5pdERlZmluaXRpb24iLCJOb25Vbml0RGVmaW5pdGlvbiIsIk5vbkN5Y2xpY1J1bGUiLCJydWxlIiwibm9uQ3ljbGljRGVmaW5pdGlvbnMiLCJub25DeWNsaWNEZWZpbml0aW9uc0Zyb21SdWxlIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicnVsZU5vZGUiLCJnZXROb2RlIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm5vbkN5Y2xpY1J1bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwicnVsZURlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJyZWR1Y2UiLCJydWxlRGVmaW5pdGlvbiIsIm5vbkN5Y2xpY0RlZmluaXRpb24iLCJub25Vbml0RGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uIiwidW5pdERlZmluaXRpb24iLCJ1bml0RGVmaW5pdGlvblJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsd0JBQVIsQ0FBYjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2QjtBQUFBLElBRU1FLG9CQUFvQkYsUUFBUSx1QkFBUixDQUYxQjs7SUFJTUcsYTs7Ozs7Ozs7Ozs7NkJBQ1lDLEksRUFBTTtBQUNwQixVQUFNQyx1QkFBdUJDLDZCQUE2QkYsSUFBN0IsQ0FBN0I7QUFBQSxVQUNNRyxXQUFXSCxLQUFLSSxPQUFMLEVBRGpCO0FBQUEsVUFFTUMsV0FBV0wsS0FBS00sT0FBTCxFQUZqQjtBQUFBLFVBR01DLE9BQU9KLFFBSGI7QUFBQSxVQUd1QjtBQUNqQkssb0JBQWNQLG9CQUpwQjtBQUFBLFVBSTBDO0FBQ3BDUSxhQUFPSixRQUxiO0FBQUEsVUFLdUI7QUFDakJLLHNCQUFnQixJQUFJWCxhQUFKLENBQWtCUSxJQUFsQixFQUF3QkMsV0FBeEIsRUFBcUNDLElBQXJDLENBTnRCOztBQVFBLGFBQU9DLGFBQVA7QUFDRDs7OztFQVh5QmYsSTs7QUFjNUJnQixPQUFPQyxPQUFQLEdBQWlCYixhQUFqQjs7QUFFQSxTQUFTRyw0QkFBVCxDQUFzQ0YsSUFBdEMsRUFBNEM7QUFDMUMsTUFBTUcsV0FBV0gsS0FBS0ksT0FBTCxFQUFqQjtBQUFBLE1BQ01TLGtCQUFrQmIsS0FBS2MsY0FBTCxFQUR4QjtBQUFBLE1BRU1iLHVCQUF1QlksZ0JBQWdCRSxNQUFoQixDQUF1QixVQUFTZCxvQkFBVCxFQUErQmUsY0FBL0IsRUFBK0M7QUFDM0YsUUFBSUMsc0JBQXNCLElBQTFCOztBQUVBLFFBQU1DLG9CQUFvQnBCLGtCQUFrQnFCLGNBQWxCLENBQWlDSCxjQUFqQyxDQUExQjs7QUFFQSxRQUFJRSxzQkFBc0IsSUFBMUIsRUFBZ0M7QUFDOUJELDRCQUFzQkMsaUJBQXRCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBTUUsaUJBQWlCdkIsZUFBZXNCLGNBQWYsQ0FBOEJILGNBQTlCLENBQXZCO0FBQUEsVUFDTUsseUJBQXlCRCxlQUFlRSxXQUFmLEVBRC9COztBQUdBLFVBQUlELDJCQUEyQmxCLFFBQS9CLEVBQXlDO0FBQ3ZDYyw4QkFBc0JHLGNBQXRCO0FBQ0Q7QUFDRjs7QUFFRCxRQUFJSCx3QkFBd0IsSUFBNUIsRUFBa0M7QUFDaENoQiwyQkFBcUJzQixJQUFyQixDQUEwQk4sbUJBQTFCO0FBQ0Q7O0FBRUQsV0FBT2hCLG9CQUFQO0FBQ0QsR0FyQnNCLEVBcUJwQixFQXJCb0IsQ0FGN0I7O0FBeUJBLFNBQU9BLG9CQUFQO0FBQ0QiLCJmaWxlIjoibm9uQ3ljbGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vLi4vZXh0ZW5kZWRCTkYvcnVsZScpLFxuICAgICAgVW5pdERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3VuaXQnKSxcbiAgICAgIE5vblVuaXREZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9ub25Vbml0Jyk7XG5cbmNsYXNzIE5vbkN5Y2xpY1J1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBjb25zdCBub25DeWNsaWNEZWZpbml0aW9ucyA9IG5vbkN5Y2xpY0RlZmluaXRpb25zRnJvbVJ1bGUocnVsZSksXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBydWxlTm9kZSA9IHJ1bGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5hbWUgPSBydWxlTmFtZSwgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBub25DeWNsaWNEZWZpbml0aW9ucywgLy8vXG4gICAgICAgICAgTm9kZSA9IHJ1bGVOb2RlLCAvLy9cbiAgICAgICAgICBub25DeWNsaWNSdWxlID0gbmV3IE5vbkN5Y2xpY1J1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIG5vbkN5Y2xpY1J1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25DeWNsaWNSdWxlO1xuXG5mdW5jdGlvbiBub25DeWNsaWNEZWZpbml0aW9uc0Zyb21SdWxlKHJ1bGUpIHtcbiAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgcnVsZURlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICBub25DeWNsaWNEZWZpbml0aW9ucyA9IHJ1bGVEZWZpbml0aW9ucy5yZWR1Y2UoZnVuY3Rpb24obm9uQ3ljbGljRGVmaW5pdGlvbnMsIHJ1bGVEZWZpbml0aW9uKSB7XG4gICAgICAgICAgbGV0IG5vbkN5Y2xpY0RlZmluaXRpb24gPSBudWxsO1xuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IG5vblVuaXREZWZpbml0aW9uID0gTm9uVW5pdERlZmluaXRpb24uZnJvbURlZmluaXRpb24ocnVsZURlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKG5vblVuaXREZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICBub25DeWNsaWNEZWZpbml0aW9uID0gbm9uVW5pdERlZmluaXRpb247XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHVuaXREZWZpbml0aW9uID0gVW5pdERlZmluaXRpb24uZnJvbURlZmluaXRpb24ocnVsZURlZmluaXRpb24pLFxuICAgICAgICAgICAgICAgICAgdW5pdERlZmluaXRpb25SdWxlTmFtZSA9IHVuaXREZWZpbml0aW9uLmdldFJ1bGVOYW1lKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh1bml0RGVmaW5pdGlvblJ1bGVOYW1lICE9PSBydWxlTmFtZSkge1xuICAgICAgICAgICAgICBub25DeWNsaWNEZWZpbml0aW9uID0gdW5pdERlZmluaXRpb247XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5vbkN5Y2xpY0RlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIG5vbkN5Y2xpY0RlZmluaXRpb25zLnB1c2gobm9uQ3ljbGljRGVmaW5pdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBub25DeWNsaWNEZWZpbml0aW9ucztcbiAgICAgICAgfSwgW10pO1xuXG4gIHJldHVybiBub25DeWNsaWNEZWZpbml0aW9ucztcbn1cbiJdfQ==