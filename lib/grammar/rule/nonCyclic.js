'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../bnf/rule'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3J1bGUvbm9uQ3ljbGljLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiVW5pdERlZmluaXRpb24iLCJOb25Vbml0RGVmaW5pdGlvbiIsIk5vbkN5Y2xpY1J1bGUiLCJydWxlIiwibm9uQ3ljbGljRGVmaW5pdGlvbnMiLCJub25DeWNsaWNEZWZpbml0aW9uc0Zyb21SdWxlIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicnVsZU5vZGUiLCJnZXROb2RlIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm5vbkN5Y2xpY1J1bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwicnVsZURlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJyZWR1Y2UiLCJydWxlRGVmaW5pdGlvbiIsIm5vbkN5Y2xpY0RlZmluaXRpb24iLCJub25Vbml0RGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uIiwidW5pdERlZmluaXRpb24iLCJ1bml0RGVmaW5pdGlvblJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsZ0JBQVIsQ0FBYjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2QjtBQUFBLElBRU1FLG9CQUFvQkYsUUFBUSx1QkFBUixDQUYxQjs7SUFJTUcsYTs7Ozs7Ozs7Ozs7NkJBQ1lDLEksRUFBTTtBQUNwQixVQUFNQyx1QkFBdUJDLDZCQUE2QkYsSUFBN0IsQ0FBN0I7QUFBQSxVQUNNRyxXQUFXSCxLQUFLSSxPQUFMLEVBRGpCO0FBQUEsVUFFTUMsV0FBV0wsS0FBS00sT0FBTCxFQUZqQjtBQUFBLFVBR01DLE9BQU9KLFFBSGI7QUFBQSxVQUd1QjtBQUNqQkssb0JBQWNQLG9CQUpwQjtBQUFBLFVBSTBDO0FBQ3BDUSxhQUFPSixRQUxiO0FBQUEsVUFLdUI7QUFDakJLLHNCQUFnQixJQUFJWCxhQUFKLENBQWtCUSxJQUFsQixFQUF3QkMsV0FBeEIsRUFBcUNDLElBQXJDLENBTnRCOztBQVFBLGFBQU9DLGFBQVA7QUFDRDs7OztFQVh5QmYsSTs7QUFjNUJnQixPQUFPQyxPQUFQLEdBQWlCYixhQUFqQjs7QUFFQSxTQUFTRyw0QkFBVCxDQUFzQ0YsSUFBdEMsRUFBNEM7QUFDMUMsTUFBTUcsV0FBV0gsS0FBS0ksT0FBTCxFQUFqQjtBQUFBLE1BQ01TLGtCQUFrQmIsS0FBS2MsY0FBTCxFQUR4QjtBQUFBLE1BRU1iLHVCQUF1QlksZ0JBQWdCRSxNQUFoQixDQUF1QixVQUFTZCxvQkFBVCxFQUErQmUsY0FBL0IsRUFBK0M7QUFDM0YsUUFBSUMsc0JBQXNCLElBQTFCOztBQUVBLFFBQU1DLG9CQUFvQnBCLGtCQUFrQnFCLGNBQWxCLENBQWlDSCxjQUFqQyxDQUExQjs7QUFFQSxRQUFJRSxzQkFBc0IsSUFBMUIsRUFBZ0M7QUFDOUJELDRCQUFzQkMsaUJBQXRCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBTUUsaUJBQWlCdkIsZUFBZXNCLGNBQWYsQ0FBOEJILGNBQTlCLENBQXZCO0FBQUEsVUFDTUsseUJBQXlCRCxlQUFlRSxXQUFmLEVBRC9COztBQUdBLFVBQUlELDJCQUEyQmxCLFFBQS9CLEVBQXlDO0FBQ3ZDYyw4QkFBc0JHLGNBQXRCO0FBQ0Q7QUFDRjs7QUFFRCxRQUFJSCx3QkFBd0IsSUFBNUIsRUFBa0M7QUFDaENoQiwyQkFBcUJzQixJQUFyQixDQUEwQk4sbUJBQTFCO0FBQ0Q7O0FBRUQsV0FBT2hCLG9CQUFQO0FBQ0QsR0FyQnNCLEVBcUJwQixFQXJCb0IsQ0FGN0I7O0FBeUJBLFNBQU9BLG9CQUFQO0FBQ0QiLCJmaWxlIjoibm9uQ3ljbGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vLi4vYm5mL3J1bGUnKSxcbiAgICAgIFVuaXREZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi91bml0JyksXG4gICAgICBOb25Vbml0RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vbm9uVW5pdCcpO1xuXG5jbGFzcyBOb25DeWNsaWNSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZShydWxlKSB7XG4gICAgY29uc3Qgbm9uQ3ljbGljRGVmaW5pdGlvbnMgPSBub25DeWNsaWNEZWZpbml0aW9uc0Zyb21SdWxlKHJ1bGUpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgcnVsZU5vZGUgPSBydWxlLmdldE5vZGUoKSxcbiAgICAgICAgICBuYW1lID0gcnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gbm9uQ3ljbGljRGVmaW5pdGlvbnMsIC8vL1xuICAgICAgICAgIE5vZGUgPSBydWxlTm9kZSwgLy8vXG4gICAgICAgICAgbm9uQ3ljbGljUnVsZSA9IG5ldyBOb25DeWNsaWNSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcblxuICAgIHJldHVybiBub25DeWNsaWNSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uQ3ljbGljUnVsZTtcblxuZnVuY3Rpb24gbm9uQ3ljbGljRGVmaW5pdGlvbnNGcm9tUnVsZShydWxlKSB7XG4gIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgIHJ1bGVEZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgbm9uQ3ljbGljRGVmaW5pdGlvbnMgPSBydWxlRGVmaW5pdGlvbnMucmVkdWNlKGZ1bmN0aW9uKG5vbkN5Y2xpY0RlZmluaXRpb25zLCBydWxlRGVmaW5pdGlvbikge1xuICAgICAgICAgIGxldCBub25DeWNsaWNEZWZpbml0aW9uID0gbnVsbDtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBub25Vbml0RGVmaW5pdGlvbiA9IE5vblVuaXREZWZpbml0aW9uLmZyb21EZWZpbml0aW9uKHJ1bGVEZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChub25Vbml0RGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbm9uQ3ljbGljRGVmaW5pdGlvbiA9IG5vblVuaXREZWZpbml0aW9uO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB1bml0RGVmaW5pdGlvbiA9IFVuaXREZWZpbml0aW9uLmZyb21EZWZpbml0aW9uKHJ1bGVEZWZpbml0aW9uKSxcbiAgICAgICAgICAgICAgICAgIHVuaXREZWZpbml0aW9uUnVsZU5hbWUgPSB1bml0RGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodW5pdERlZmluaXRpb25SdWxlTmFtZSAhPT0gcnVsZU5hbWUpIHtcbiAgICAgICAgICAgICAgbm9uQ3ljbGljRGVmaW5pdGlvbiA9IHVuaXREZWZpbml0aW9uO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChub25DeWNsaWNEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICBub25DeWNsaWNEZWZpbml0aW9ucy5wdXNoKG5vbkN5Y2xpY0RlZmluaXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gbm9uQ3ljbGljRGVmaW5pdGlvbnM7XG4gICAgICAgIH0sIFtdKTtcblxuICByZXR1cm4gbm9uQ3ljbGljRGVmaW5pdGlvbnM7XG59XG4iXX0=