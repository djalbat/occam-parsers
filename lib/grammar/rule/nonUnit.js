'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../common/rule'),
    UnitRule = require('../rule/unit');

var NonUnitRule = function (_Rule) {
  _inherits(NonUnitRule, _Rule);

  function NonUnitRule() {
    _classCallCheck(this, NonUnitRule);

    return _possibleConstructorReturn(this, (NonUnitRule.__proto__ || Object.getPrototypeOf(NonUnitRule)).apply(this, arguments));
  }

  _createClass(NonUnitRule, null, [{
    key: 'fromRule',
    value: function fromRule(rule) {
      var nonUnitRule = null;

      var unitRule = UnitRule.fromRule();

      if (unitRule === null) {
        var parts = rule.getParts();

        nonUnitRule = new NonUnitRule(parts);
      }

      return nonUnitRule;
    }
  }]);

  return NonUnitRule;
}(Rule);

module.exports = NonUnitRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3J1bGUvbm9uVW5pdC5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlVuaXRSdWxlIiwiTm9uVW5pdFJ1bGUiLCJydWxlIiwibm9uVW5pdFJ1bGUiLCJ1bml0UnVsZSIsImZyb21SdWxlIiwicGFydHMiLCJnZXRQYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxtQkFBUixDQUFiO0FBQUEsSUFDTUMsV0FBV0QsUUFBUSxjQUFSLENBRGpCOztJQUdNRSxXOzs7Ozs7Ozs7Ozs2QkFDWUMsSSxFQUFNO0FBQ3BCLFVBQUlDLGNBQWMsSUFBbEI7O0FBRUEsVUFBTUMsV0FBV0osU0FBU0ssUUFBVCxFQUFqQjs7QUFFQSxVQUFJRCxhQUFhLElBQWpCLEVBQXVCO0FBQ3JCLFlBQU1FLFFBQVFKLEtBQUtLLFFBQUwsRUFBZDs7QUFFQUosc0JBQWMsSUFBSUYsV0FBSixDQUFnQkssS0FBaEIsQ0FBZDtBQUNEOztBQUVELGFBQU9ILFdBQVA7QUFDRDs7OztFQWJ1QkwsSTs7QUFnQjFCVSxPQUFPQyxPQUFQLEdBQWlCUixXQUFqQiIsImZpbGUiOiJub25Vbml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3J1bGUnKSxcbiAgICAgIFVuaXRSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS91bml0Jyk7XG5cbmNsYXNzIE5vblVuaXRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZShydWxlKSB7XG4gICAgbGV0IG5vblVuaXRSdWxlID0gbnVsbDtcblxuICAgIGNvbnN0IHVuaXRSdWxlID0gVW5pdFJ1bGUuZnJvbVJ1bGUoKTtcbiAgICBcbiAgICBpZiAodW5pdFJ1bGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gcnVsZS5nZXRQYXJ0cygpO1xuICAgICAgXG4gICAgICBub25Vbml0UnVsZSA9IG5ldyBOb25Vbml0UnVsZShwYXJ0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblVuaXRSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uVW5pdFJ1bGU7XG4iXX0=