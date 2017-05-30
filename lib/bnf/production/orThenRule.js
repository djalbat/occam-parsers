'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    OrThenRuleRule = require('../rule/orThenRule');

var OrThenRuleProduction = function (_Production) {
  _inherits(OrThenRuleProduction, _Production);

  function OrThenRuleProduction() {
    _classCallCheck(this, OrThenRuleProduction);

    var orThenRuleRule = new OrThenRuleRule(),
        name = 'rules',
        rules = [orThenRuleRule],
        Node = null;

    return _possibleConstructorReturn(this, (OrThenRuleProduction.__proto__ || Object.getPrototypeOf(OrThenRuleProduction)).call(this, name, rules, Node));
  }

  return OrThenRuleProduction;
}(Production);

module.exports = OrThenRuleProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9vclRoZW5SdWxlLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiT3JUaGVuUnVsZVJ1bGUiLCJPclRoZW5SdWxlUHJvZHVjdGlvbiIsIm9yVGhlblJ1bGVSdWxlIiwibmFtZSIsInJ1bGVzIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2Qjs7SUFHTUUsb0I7OztBQUNKLGtDQUFjO0FBQUE7O0FBQ1osUUFBTUMsaUJBQWlCLElBQUlGLGNBQUosRUFBdkI7QUFBQSxRQUNNRyxPQUFPLE9BRGI7QUFBQSxRQUVNQyxRQUFRLENBQ05GLGNBRE0sQ0FGZDtBQUFBLFFBS01HLE9BQU8sSUFMYjs7QUFEWSx1SUFRTkYsSUFSTSxFQVFBQyxLQVJBLEVBUU9DLElBUlA7QUFTYjs7O0VBVmdDUCxVOztBQWFuQ1EsT0FBT0MsT0FBUCxHQUFpQk4sb0JBQWpCIiwiZmlsZSI6Im9yVGhlblJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBPclRoZW5SdWxlUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvb3JUaGVuUnVsZScpO1xuXG5jbGFzcyBPclRoZW5SdWxlUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBvclRoZW5SdWxlUnVsZSA9IG5ldyBPclRoZW5SdWxlUnVsZSgpLFxuICAgICAgICAgIG5hbWUgPSAncnVsZXMnLFxuICAgICAgICAgIHJ1bGVzID0gW1xuICAgICAgICAgICAgb3JUaGVuUnVsZVJ1bGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBudWxsO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIHJ1bGVzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT3JUaGVuUnVsZVByb2R1Y3Rpb247XG4iXX0=