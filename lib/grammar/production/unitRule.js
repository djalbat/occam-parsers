'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../../common/production');

var UnitRuleProduction = function (_Production) {
  _inherits(UnitRuleProduction, _Production);

  function UnitRuleProduction() {
    _classCallCheck(this, UnitRuleProduction);

    return _possibleConstructorReturn(this, (UnitRuleProduction.__proto__ || Object.getPrototypeOf(UnitRuleProduction)).apply(this, arguments));
  }

  _createClass(UnitRuleProduction, null, [{
    key: 'fromNameAndUnitRule',
    value: function fromNameAndUnitRule(name, unitRule) {
      var rules = [unitRule],
          Node = null,
          unitProduction = new UnitRuleProduction(name, rules, Node);

      return unitProduction;
    }
  }]);

  return UnitRuleProduction;
}(Production);

module.exports = UnitRuleProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vdW5pdFJ1bGUuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJVbml0UnVsZVByb2R1Y3Rpb24iLCJuYW1lIiwidW5pdFJ1bGUiLCJydWxlcyIsIk5vZGUiLCJ1bml0UHJvZHVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSx5QkFBUixDQUFuQjs7SUFFTUMsa0I7Ozs7Ozs7Ozs7O3dDQUN1QkMsSSxFQUFNQyxRLEVBQVU7QUFDekMsVUFBTUMsUUFBUSxDQUNORCxRQURNLENBQWQ7QUFBQSxVQUdNRSxPQUFPLElBSGI7QUFBQSxVQUlNQyxpQkFBaUIsSUFBSUwsa0JBQUosQ0FBdUJDLElBQXZCLEVBQTZCRSxLQUE3QixFQUFvQ0MsSUFBcEMsQ0FKdkI7O0FBTUEsYUFBT0MsY0FBUDtBQUNEOzs7O0VBVDhCUCxVOztBQVlqQ1EsT0FBT0MsT0FBUCxHQUFpQlAsa0JBQWpCIiwiZmlsZSI6InVuaXRSdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Byb2R1Y3Rpb24nKTtcblxuY2xhc3MgVW5pdFJ1bGVQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIHN0YXRpYyBmcm9tTmFtZUFuZFVuaXRSdWxlKG5hbWUsIHVuaXRSdWxlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXG4gICAgICAgICAgICB1bml0UnVsZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IG51bGwsXG4gICAgICAgICAgdW5pdFByb2R1Y3Rpb24gPSBuZXcgVW5pdFJ1bGVQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTtcbiAgICBcbiAgICByZXR1cm4gdW5pdFByb2R1Y3Rpb247ICAgICAgICAgIFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pdFJ1bGVQcm9kdWN0aW9uO1xuIl19