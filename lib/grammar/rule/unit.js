'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../common/rule');

var NonUnitRule = function (_Rule) {
  _inherits(NonUnitRule, _Rule);

  function NonUnitRule() {
    _classCallCheck(this, NonUnitRule);

    return _possibleConstructorReturn(this, (NonUnitRule.__proto__ || Object.getPrototypeOf(NonUnitRule)).apply(this, arguments));
  }

  _createClass(NonUnitRule, [{
    key: 'getPart',
    value: function getPart() {
      var firstPart = this.getFirstPart(),
          part = firstPart; ///

      return part;
    }
  }], [{
    key: 'fromRule',
    value: function fromRule(rule) {
      var nonUnitRule = null;

      var rulePartsLength = rule.getPartsLength(),
          ruleFirstProductionNamePart = rule.getFirstProductionNamePart();

      if (rulePartsLength > 1 || ruleFirstProductionNamePart === null) {
        if (ruleFirstProductionNamePart !== null) {
          var ruleParts = rule.getParts(),
              parts = ruleParts; ///

          nonUnitRule = new NonUnitRule(parts);
        }
      }

      return nonUnitRule;
    }
  }]);

  return NonUnitRule;
}(Rule);

module.exports = NonUnitRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3J1bGUvdW5pdC5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIk5vblVuaXRSdWxlIiwiZmlyc3RQYXJ0IiwiZ2V0Rmlyc3RQYXJ0IiwicGFydCIsInJ1bGUiLCJub25Vbml0UnVsZSIsInJ1bGVQYXJ0c0xlbmd0aCIsImdldFBhcnRzTGVuZ3RoIiwicnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0IiwiZ2V0Rmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQiLCJydWxlUGFydHMiLCJnZXRQYXJ0cyIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLG1CQUFSLENBQWI7O0lBRU1DLFc7Ozs7Ozs7Ozs7OzhCQUNNO0FBQ1IsVUFBTUMsWUFBWSxLQUFLQyxZQUFMLEVBQWxCO0FBQUEsVUFDTUMsT0FBT0YsU0FEYixDQURRLENBRWdCOztBQUV4QixhQUFPRSxJQUFQO0FBQ0Q7Ozs2QkFFZUMsSSxFQUFNO0FBQ3BCLFVBQUlDLGNBQWMsSUFBbEI7O0FBRUEsVUFBTUMsa0JBQWtCRixLQUFLRyxjQUFMLEVBQXhCO0FBQUEsVUFDTUMsOEJBQThCSixLQUFLSywwQkFBTCxFQURwQzs7QUFHQSxVQUFLSCxrQkFBa0IsQ0FBbkIsSUFBMEJFLGdDQUFnQyxJQUE5RCxFQUFxRTtBQUNuRSxZQUFJQSxnQ0FBZ0MsSUFBcEMsRUFBMEM7QUFDeEMsY0FBTUUsWUFBWU4sS0FBS08sUUFBTCxFQUFsQjtBQUFBLGNBQ01DLFFBQVFGLFNBRGQsQ0FEd0MsQ0FFZDs7QUFFMUJMLHdCQUFjLElBQUlMLFdBQUosQ0FBZ0JZLEtBQWhCLENBQWQ7QUFDRDtBQUNGOztBQUVELGFBQU9QLFdBQVA7QUFDRDs7OztFQXhCdUJQLEk7O0FBMkIxQmUsT0FBT0MsT0FBUCxHQUFpQmQsV0FBakIiLCJmaWxlIjoidW5pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ydWxlJyk7XG5cbmNsYXNzIE5vblVuaXRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGdldFBhcnQoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gdGhpcy5nZXRGaXJzdFBhcnQoKSxcbiAgICAgICAgICBwYXJ0ID0gZmlyc3RQYXJ0OyAvLy9cbiAgICBcbiAgICByZXR1cm4gcGFydDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBsZXQgbm9uVW5pdFJ1bGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHJ1bGVQYXJ0c0xlbmd0aCA9IHJ1bGUuZ2V0UGFydHNMZW5ndGgoKSxcbiAgICAgICAgICBydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQgPSBydWxlLmdldEZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0KCk7XG4gICAgXG4gICAgaWYgKChydWxlUGFydHNMZW5ndGggPiAxKSB8fCAocnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0ID09PSBudWxsKSkge1xuICAgICAgaWYgKHJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBydWxlUGFydHMgPSBydWxlLmdldFBhcnRzKCksXG4gICAgICAgICAgICAgIHBhcnRzID0gcnVsZVBhcnRzOyAgLy8vXG4gICAgICAgIFxuICAgICAgICBub25Vbml0UnVsZSA9IG5ldyBOb25Vbml0UnVsZShwYXJ0cyk7ICAgICAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBub25Vbml0UnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblVuaXRSdWxlO1xuXG4iXX0=