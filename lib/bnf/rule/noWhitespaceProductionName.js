'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ProductionNamePart = require('../part/productionName');

var NoWhitespaceProductionNameRule = function (_Rule) {
  _inherits(NoWhitespaceProductionNameRule, _Rule);

  function NoWhitespaceProductionNameRule() {
    _classCallCheck(this, NoWhitespaceProductionNameRule);

    var noWhitespace = false,
        noWhitespaceProductionName = 'noWhitespace',
        noWhitespaceProductionNamePart = new ProductionNamePart(noWhitespaceProductionName, noWhitespace),
        parts = [noWhitespaceProductionNamePart];

    return _possibleConstructorReturn(this, (NoWhitespaceProductionNameRule.__proto__ || Object.getPrototypeOf(NoWhitespaceProductionNameRule)).call(this, parts));
  }

  return NoWhitespaceProductionNameRule;
}(Rule);

module.exports = NoWhitespaceProductionNameRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9ub1doaXRlc3BhY2VQcm9kdWN0aW9uTmFtZS5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIk5vV2hpdGVzcGFjZVByb2R1Y3Rpb25OYW1lUnVsZSIsIm5vV2hpdGVzcGFjZSIsIm5vV2hpdGVzcGFjZVByb2R1Y3Rpb25OYW1lIiwibm9XaGl0ZXNwYWNlUHJvZHVjdGlvbk5hbWVQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSx3QkFBUixDQUQzQjs7SUFHTUUsOEI7OztBQUNKLDRDQUFjO0FBQUE7O0FBQ1osUUFBTUMsZUFBZSxLQUFyQjtBQUFBLFFBQ01DLDZCQUE2QixjQURuQztBQUFBLFFBRU1DLGlDQUFpQyxJQUFJSixrQkFBSixDQUF1QkcsMEJBQXZCLEVBQW1ERCxZQUFuRCxDQUZ2QztBQUFBLFFBR01HLFFBQVEsQ0FDTkQsOEJBRE0sQ0FIZDs7QUFEWSwySkFRTkMsS0FSTTtBQVNiOzs7RUFWMENQLEk7O0FBYTdDUSxPQUFPQyxPQUFQLEdBQWlCTiw4QkFBakIiLCJmaWxlIjoibm9XaGl0ZXNwYWNlUHJvZHVjdGlvbk5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIE5vV2hpdGVzcGFjZVByb2R1Y3Rpb25OYW1lUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQcm9kdWN0aW9uTmFtZSA9ICdub1doaXRlc3BhY2UnLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQobm9XaGl0ZXNwYWNlUHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBub1doaXRlc3BhY2VQcm9kdWN0aW9uTmFtZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9XaGl0ZXNwYWNlUHJvZHVjdGlvbk5hbWVSdWxlO1xuIl19