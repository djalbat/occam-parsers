'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../rule'),
    ProductionNamePart = require('../../../common/part/productionName');

var ProductionNameProductionNameRule = function (_Rule) {
  _inherits(ProductionNameProductionNameRule, _Rule);

  function ProductionNameProductionNameRule() {
    _classCallCheck(this, ProductionNameProductionNameRule);

    var noWhitespace = false,
        productionNameProductionName = 'productionName',
        productionNameProductionNamePart = new ProductionNamePart(productionNameProductionName, noWhitespace),
        parts = [productionNameProductionNamePart];

    return _possibleConstructorReturn(this, (ProductionNameProductionNameRule.__proto__ || Object.getPrototypeOf(ProductionNameProductionNameRule)).call(this, parts));
  }

  return ProductionNameProductionNameRule;
}(Rule);

module.exports = ProductionNameProductionNameRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcnVsZS9wcm9kdWN0aW9uTmFtZS9wcm9kdWN0aW9uTmFtZS5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIlByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVSdWxlIiwibm9XaGl0ZXNwYWNlIiwicHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZSIsInByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFlBQVIsQ0FBYjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSxxQ0FBUixDQUQzQjs7SUFHTUUsZ0M7OztBQUNKLDhDQUFjO0FBQUE7O0FBQ1osUUFBTUMsZUFBZSxLQUFyQjtBQUFBLFFBQ01DLCtCQUErQixnQkFEckM7QUFBQSxRQUVNQyxtQ0FBbUMsSUFBSUosa0JBQUosQ0FBdUJHLDRCQUF2QixFQUFxREQsWUFBckQsQ0FGekM7QUFBQSxRQUdNRyxRQUFRLENBQ05ELGdDQURNLENBSGQ7O0FBRFksK0pBUU5DLEtBUk07QUFTYjs7O0VBVjRDUCxJOztBQWEvQ1EsT0FBT0MsT0FBUCxHQUFpQk4sZ0NBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb25OYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vLi4vcnVsZScpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZSA9ICdwcm9kdWN0aW9uTmFtZScsXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lUnVsZTtcbiJdfQ==