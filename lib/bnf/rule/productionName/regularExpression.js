'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../rule'),
    ProductionNamePart = require('../../../common/part/productionName');

var RegularExpressionProductionNameRule = function (_Rule) {
  _inherits(RegularExpressionProductionNameRule, _Rule);

  function RegularExpressionProductionNameRule() {
    _classCallCheck(this, RegularExpressionProductionNameRule);

    var noWhitespace = false,
        regularExpressionProductionName = 'regularExpression',
        regularExpressionProductionNamePart = new ProductionNamePart(regularExpressionProductionName, noWhitespace),
        parts = [regularExpressionProductionNamePart];

    return _possibleConstructorReturn(this, (RegularExpressionProductionNameRule.__proto__ || Object.getPrototypeOf(RegularExpressionProductionNameRule)).call(this, parts));
  }

  return RegularExpressionProductionNameRule;
}(Rule);

module.exports = RegularExpressionProductionNameRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcnVsZS9wcm9kdWN0aW9uTmFtZS9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIlJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbk5hbWVSdWxlIiwibm9XaGl0ZXNwYWNlIiwicmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZSIsInJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbk5hbWVQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFlBQVIsQ0FBYjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSxxQ0FBUixDQUQzQjs7SUFHTUUsbUM7OztBQUNKLGlEQUFjO0FBQUE7O0FBQ1osUUFBTUMsZUFBZSxLQUFyQjtBQUFBLFFBQ01DLGtDQUFrQyxtQkFEeEM7QUFBQSxRQUVNQyxzQ0FBc0MsSUFBSUosa0JBQUosQ0FBdUJHLCtCQUF2QixFQUF3REQsWUFBeEQsQ0FGNUM7QUFBQSxRQUdNRyxRQUFRLENBQ05ELG1DQURNLENBSGQ7O0FBRFkscUtBUU5DLEtBUk07QUFTYjs7O0VBVitDUCxJOztBQWFsRFEsT0FBT0MsT0FBUCxHQUFpQk4sbUNBQWpCIiwiZmlsZSI6InJlZ3VsYXJFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vLi4vcnVsZScpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZSA9ICdyZWd1bGFyRXhwcmVzc2lvbicsXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb25OYW1lUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb25OYW1lUnVsZTtcbiJdfQ==