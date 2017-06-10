'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../common/rule'),
    ProductionNamePart = require('../../common/part/productionName');

var UnitRule = function (_Rule) {
  _inherits(UnitRule, _Rule);

  function UnitRule() {
    _classCallCheck(this, UnitRule);

    return _possibleConstructorReturn(this, (UnitRule.__proto__ || Object.getPrototypeOf(UnitRule)).apply(this, arguments));
  }

  _createClass(UnitRule, [{
    key: 'getProductionName',
    value: function getProductionName() {
      var firstPart = this.getFirstPart(),
          productionNamePart = firstPart,
          ///
      productionName = productionNamePart.getProductionName();

      return productionName;
    }
  }], [{
    key: 'fromRule',
    value: function fromRule(rule) {
      var unitRule = null;

      var partsLength = rule.getPartsLength();

      if (partsLength === 1) {
        var firstPart = rule.getFirstPart();

        if (firstPart instanceof ProductionNamePart) {
          var parts = rule.getParts();

          unitRule = new UnitRule(parts);
        }
      }

      return unitRule;
    }
  }]);

  return UnitRule;
}(Rule);

module.exports = UnitRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3J1bGUvdW5pdC5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIlVuaXRSdWxlIiwiZmlyc3RQYXJ0IiwiZ2V0Rmlyc3RQYXJ0IiwicHJvZHVjdGlvbk5hbWVQYXJ0IiwicHJvZHVjdGlvbk5hbWUiLCJnZXRQcm9kdWN0aW9uTmFtZSIsInJ1bGUiLCJ1bml0UnVsZSIsInBhcnRzTGVuZ3RoIiwiZ2V0UGFydHNMZW5ndGgiLCJwYXJ0cyIsImdldFBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLG1CQUFSLENBQWI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsa0NBQVIsQ0FEM0I7O0lBR01FLFE7Ozs7Ozs7Ozs7O3dDQUNpQjtBQUNuQixVQUFNQyxZQUFZLEtBQUtDLFlBQUwsRUFBbEI7QUFBQSxVQUNNQyxxQkFBcUJGLFNBRDNCO0FBQUEsVUFDc0M7QUFDaENHLHVCQUFpQkQsbUJBQW1CRSxpQkFBbkIsRUFGdkI7O0FBSUEsYUFBT0QsY0FBUDtBQUNEOzs7NkJBRWVFLEksRUFBTTtBQUNwQixVQUFJQyxXQUFXLElBQWY7O0FBRUEsVUFBTUMsY0FBY0YsS0FBS0csY0FBTCxFQUFwQjs7QUFFQSxVQUFJRCxnQkFBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsWUFBTVAsWUFBWUssS0FBS0osWUFBTCxFQUFsQjs7QUFFQSxZQUFJRCxxQkFBcUJGLGtCQUF6QixFQUE2QztBQUMzQyxjQUFNVyxRQUFRSixLQUFLSyxRQUFMLEVBQWQ7O0FBRUFKLHFCQUFXLElBQUlQLFFBQUosQ0FBYVUsS0FBYixDQUFYO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPSCxRQUFQO0FBQ0Q7Ozs7RUF6Qm9CVixJOztBQTRCdkJlLE9BQU9DLE9BQVAsR0FBaUJiLFFBQWpCIiwiZmlsZSI6InVuaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcnVsZScpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgVW5pdFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgZ2V0UHJvZHVjdGlvbk5hbWUgKCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IHRoaXMuZ2V0Rmlyc3RQYXJ0KCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0ID0gZmlyc3RQYXJ0LCAvLy9cbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lUGFydC5nZXRQcm9kdWN0aW9uTmFtZSgpO1xuICAgIFxuICAgIHJldHVybiBwcm9kdWN0aW9uTmFtZTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBsZXQgdW5pdFJ1bGUgPSBudWxsO1xuXG4gICAgY29uc3QgcGFydHNMZW5ndGggPSBydWxlLmdldFBhcnRzTGVuZ3RoKCk7XG5cbiAgICBpZiAocGFydHNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0UGFydCA9IHJ1bGUuZ2V0Rmlyc3RQYXJ0KCk7XG4gICAgICBcbiAgICAgIGlmIChmaXJzdFBhcnQgaW5zdGFuY2VvZiBQcm9kdWN0aW9uTmFtZVBhcnQpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBydWxlLmdldFBhcnRzKCk7XG5cbiAgICAgICAgdW5pdFJ1bGUgPSBuZXcgVW5pdFJ1bGUocGFydHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bml0UnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVuaXRSdWxlO1xuIl19