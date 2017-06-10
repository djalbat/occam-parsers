'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonUnitRule = require('../rule/nonUnit'),
    Production = require('../../common/production');

var NonUnitRulesProduction = function (_Production) {
  _inherits(NonUnitRulesProduction, _Production);

  function NonUnitRulesProduction() {
    _classCallCheck(this, NonUnitRulesProduction);

    return _possibleConstructorReturn(this, (NonUnitRulesProduction.__proto__ || Object.getPrototypeOf(NonUnitRulesProduction)).apply(this, arguments));
  }

  _createClass(NonUnitRulesProduction, null, [{
    key: 'fromProduction',
    value: function fromProduction(production) {
      var nonUnitRules = nonUnitRulesFromProduction(production),
          name = production.getName(),
          rules = nonUnitRules,
          ///
      Node = production.getNode(),
          nonUnitRulesProduction = new NonUnitRulesProduction(name, rules, Node);

      return nonUnitRulesProduction;
    }
  }]);

  return NonUnitRulesProduction;
}(Production);

module.exports = NonUnitRulesProduction;

function nonUnitRulesFromProduction(production) {
  var rules = production.getRules(),
      nonUnitRules = rules.reduce(function (nonUnitRules, rule) {
    var nonUnitRule = NonUnitRule.fromRule(rule);

    if (nonUnitRule !== null) {
      var _rule = nonUnitRule;

      nonUnitRules.push(nonUnitRule);
    }

    return nonUnitRules;
  }, []);

  return nonUnitRules;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vbm9uVW5pdFJ1bGVzLmpzIl0sIm5hbWVzIjpbIk5vblVuaXRSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJOb25Vbml0UnVsZXNQcm9kdWN0aW9uIiwicHJvZHVjdGlvbiIsIm5vblVuaXRSdWxlcyIsIm5vblVuaXRSdWxlc0Zyb21Qcm9kdWN0aW9uIiwibmFtZSIsImdldE5hbWUiLCJydWxlcyIsIk5vZGUiLCJnZXROb2RlIiwibm9uVW5pdFJ1bGVzUHJvZHVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRSdWxlcyIsInJlZHVjZSIsInJ1bGUiLCJub25Vbml0UnVsZSIsImZyb21SdWxlIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxjQUFjQyxRQUFRLGlCQUFSLENBQXBCO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSx5QkFBUixDQURuQjs7SUFHTUUsc0I7Ozs7Ozs7Ozs7O21DQUNrQkMsVSxFQUFZO0FBQ2hDLFVBQU1DLGVBQWVDLDJCQUEyQkYsVUFBM0IsQ0FBckI7QUFBQSxVQUNNRyxPQUFPSCxXQUFXSSxPQUFYLEVBRGI7QUFBQSxVQUVNQyxRQUFRSixZQUZkO0FBQUEsVUFFNEI7QUFDdEJLLGFBQU9OLFdBQVdPLE9BQVgsRUFIYjtBQUFBLFVBSU1DLHlCQUF5QixJQUFJVCxzQkFBSixDQUEyQkksSUFBM0IsRUFBaUNFLEtBQWpDLEVBQXdDQyxJQUF4QyxDQUovQjs7QUFNQSxhQUFPRSxzQkFBUDtBQUNEOzs7O0VBVGtDVixVOztBQVlyQ1csT0FBT0MsT0FBUCxHQUFpQlgsc0JBQWpCOztBQUVBLFNBQVNHLDBCQUFULENBQW9DRixVQUFwQyxFQUFnRDtBQUM5QyxNQUFNSyxRQUFRTCxXQUFXVyxRQUFYLEVBQWQ7QUFBQSxNQUNNVixlQUFlSSxNQUFNTyxNQUFOLENBQWEsVUFBU1gsWUFBVCxFQUF1QlksSUFBdkIsRUFBNkI7QUFDdkQsUUFBTUMsY0FBY2xCLFlBQVltQixRQUFaLENBQXFCRixJQUFyQixDQUFwQjs7QUFFQSxRQUFJQyxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDeEIsVUFBTUQsUUFBT0MsV0FBYjs7QUFFQWIsbUJBQWFlLElBQWIsQ0FBa0JGLFdBQWxCO0FBQ0Q7O0FBRUQsV0FBT2IsWUFBUDtBQUNELEdBVmMsRUFVWixFQVZZLENBRHJCOztBQWFBLFNBQU9BLFlBQVA7QUFDRCIsImZpbGUiOiJub25Vbml0UnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE5vblVuaXRSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9ub25Vbml0JyksXG4gICAgICBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Byb2R1Y3Rpb24nKTtcblxuY2xhc3MgTm9uVW5pdFJ1bGVzUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICAgIGNvbnN0IG5vblVuaXRSdWxlcyA9IG5vblVuaXRSdWxlc0Zyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pLFxuICAgICAgICAgIG5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICBydWxlcyA9IG5vblVuaXRSdWxlcywgLy8vXG4gICAgICAgICAgTm9kZSA9IHByb2R1Y3Rpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vblVuaXRSdWxlc1Byb2R1Y3Rpb24gPSBuZXcgTm9uVW5pdFJ1bGVzUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG5cbiAgICByZXR1cm4gbm9uVW5pdFJ1bGVzUHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblVuaXRSdWxlc1Byb2R1Y3Rpb247XG5cbmZ1bmN0aW9uIG5vblVuaXRSdWxlc0Zyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgY29uc3QgcnVsZXMgPSBwcm9kdWN0aW9uLmdldFJ1bGVzKCksXG4gICAgICAgIG5vblVuaXRSdWxlcyA9IHJ1bGVzLnJlZHVjZShmdW5jdGlvbihub25Vbml0UnVsZXMsIHJ1bGUpIHtcbiAgICAgICAgICBjb25zdCBub25Vbml0UnVsZSA9IE5vblVuaXRSdWxlLmZyb21SdWxlKHJ1bGUpO1xuXG4gICAgICAgICAgaWYgKG5vblVuaXRSdWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gbm9uVW5pdFJ1bGU7XG5cbiAgICAgICAgICAgIG5vblVuaXRSdWxlcy5wdXNoKG5vblVuaXRSdWxlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbm9uVW5pdFJ1bGVzO1xuICAgICAgICB9LCBbXSk7XG5cbiAgcmV0dXJuIG5vblVuaXRSdWxlcztcbn1cbiJdfQ==