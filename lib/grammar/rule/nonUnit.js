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

      var unitRule = UnitRule.fromRule(rule);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3J1bGUvbm9uVW5pdC5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlVuaXRSdWxlIiwiTm9uVW5pdFJ1bGUiLCJydWxlIiwibm9uVW5pdFJ1bGUiLCJ1bml0UnVsZSIsImZyb21SdWxlIiwicGFydHMiLCJnZXRQYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxtQkFBUixDQUFiO0FBQUEsSUFDTUMsV0FBV0QsUUFBUSxjQUFSLENBRGpCOztJQUdNRSxXOzs7Ozs7Ozs7Ozs2QkFDWUMsSSxFQUFNO0FBQ3BCLFVBQUlDLGNBQWMsSUFBbEI7O0FBRUEsVUFBTUMsV0FBV0osU0FBU0ssUUFBVCxDQUFrQkgsSUFBbEIsQ0FBakI7O0FBRUEsVUFBSUUsYUFBYSxJQUFqQixFQUF1QjtBQUNyQixZQUFNRSxRQUFRSixLQUFLSyxRQUFMLEVBQWQ7O0FBRUFKLHNCQUFjLElBQUlGLFdBQUosQ0FBZ0JLLEtBQWhCLENBQWQ7QUFDRDs7QUFFRCxhQUFPSCxXQUFQO0FBQ0Q7Ozs7RUFidUJMLEk7O0FBZ0IxQlUsT0FBT0MsT0FBUCxHQUFpQlIsV0FBakIiLCJmaWxlIjoibm9uVW5pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ydWxlJyksXG4gICAgICBVbml0UnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvdW5pdCcpO1xuXG5jbGFzcyBOb25Vbml0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGUocnVsZSkge1xuICAgIGxldCBub25Vbml0UnVsZSA9IG51bGw7XG5cbiAgICBjb25zdCB1bml0UnVsZSA9IFVuaXRSdWxlLmZyb21SdWxlKHJ1bGUpO1xuICAgIFxuICAgIGlmICh1bml0UnVsZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcGFydHMgPSBydWxlLmdldFBhcnRzKCk7XG4gICAgICBcbiAgICAgIG5vblVuaXRSdWxlID0gbmV3IE5vblVuaXRSdWxlKHBhcnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVW5pdFJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25Vbml0UnVsZTtcbiJdfQ==