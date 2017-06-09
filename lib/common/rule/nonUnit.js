'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule');

var UnitRule = function (_Rule) {
  _inherits(UnitRule, _Rule);

  function UnitRule() {
    _classCallCheck(this, UnitRule);

    return _possibleConstructorReturn(this, (UnitRule.__proto__ || Object.getPrototypeOf(UnitRule)).apply(this, arguments));
  }

  _createClass(UnitRule, null, [{
    key: 'fromRule',
    value: function fromRule(rule) {
      var unitRule = null;

      var rulePartsLength = rule.getPartsLength(),
          ruleFirstProductionNamePart = rule.getFirstProductionNamePart();

      if (rulePartsLength === 1 && ruleFirstProductionNamePart !== null) {
        if (ruleFirstProductionNamePart !== null) {
          var ruleParts = rule.getParts(),
              parts = ruleParts; ///

          unitRule = new UnitRule(parts);
        }
      }

      return unitRule;
    }
  }]);

  return UnitRule;
}(Rule);

module.exports = UnitRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcnVsZS9ub25Vbml0LmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiVW5pdFJ1bGUiLCJydWxlIiwidW5pdFJ1bGUiLCJydWxlUGFydHNMZW5ndGgiLCJnZXRQYXJ0c0xlbmd0aCIsInJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCIsImdldEZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0IiwicnVsZVBhcnRzIiwiZ2V0UGFydHMiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7O0lBRU1DLFE7Ozs7Ozs7Ozs7OzZCQUNZQyxJLEVBQU07QUFDcEIsVUFBSUMsV0FBVyxJQUFmOztBQUVBLFVBQU1DLGtCQUFrQkYsS0FBS0csY0FBTCxFQUF4QjtBQUFBLFVBQ01DLDhCQUE4QkosS0FBS0ssMEJBQUwsRUFEcEM7O0FBR0EsVUFBS0gsb0JBQW9CLENBQXJCLElBQTRCRSxnQ0FBZ0MsSUFBaEUsRUFBdUU7QUFDckUsWUFBSUEsZ0NBQWdDLElBQXBDLEVBQTBDO0FBQ3hDLGNBQU1FLFlBQVlOLEtBQUtPLFFBQUwsRUFBbEI7QUFBQSxjQUNNQyxRQUFRRixTQURkLENBRHdDLENBRWQ7O0FBRTFCTCxxQkFBVyxJQUFJRixRQUFKLENBQWFTLEtBQWIsQ0FBWDtBQUNEO0FBQ0Y7O0FBRUQsYUFBT1AsUUFBUDtBQUNEOzs7O0VBakJvQkosSTs7QUFvQnZCWSxPQUFPQyxPQUFQLEdBQWlCWCxRQUFqQiIsImZpbGUiOiJub25Vbml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpO1xuXG5jbGFzcyBVbml0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGUocnVsZSkge1xuICAgIGxldCB1bml0UnVsZSA9IG51bGw7XG5cbiAgICBjb25zdCBydWxlUGFydHNMZW5ndGggPSBydWxlLmdldFBhcnRzTGVuZ3RoKCksXG4gICAgICAgICAgcnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gcnVsZS5nZXRGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCgpO1xuXG4gICAgaWYgKChydWxlUGFydHNMZW5ndGggPT09IDEpICYmIChydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQgIT09IG51bGwpKSB7XG4gICAgICBpZiAocnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVQYXJ0cyA9IHJ1bGUuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgcGFydHMgPSBydWxlUGFydHM7ICAvLy9cblxuICAgICAgICB1bml0UnVsZSA9IG5ldyBVbml0UnVsZShwYXJ0cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaXRSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pdFJ1bGU7XG4iXX0=