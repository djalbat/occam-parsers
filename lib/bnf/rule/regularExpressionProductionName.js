'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ProductionNamePart = require('../part/productionName');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9yZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb25OYW1lLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiUHJvZHVjdGlvbk5hbWVQYXJ0IiwiUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZVJ1bGUiLCJub1doaXRlc3BhY2UiLCJyZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb25OYW1lIiwicmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZVBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLHdCQUFSLENBRDNCOztJQUdNRSxtQzs7O0FBQ0osaURBQWM7QUFBQTs7QUFDWixRQUFNQyxlQUFlLEtBQXJCO0FBQUEsUUFDTUMsa0NBQWtDLG1CQUR4QztBQUFBLFFBRU1DLHNDQUFzQyxJQUFJSixrQkFBSixDQUF1QkcsK0JBQXZCLEVBQXdERCxZQUF4RCxDQUY1QztBQUFBLFFBR01HLFFBQVEsQ0FDTkQsbUNBRE0sQ0FIZDs7QUFEWSxxS0FRTkMsS0FSTTtBQVNiOzs7RUFWK0NQLEk7O0FBYWxEUSxPQUFPQyxPQUFQLEdBQWlCTixtQ0FBakIiLCJmaWxlIjoicmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZSA9ICdyZWd1bGFyRXhwcmVzc2lvbicsXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb25OYW1lUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb25OYW1lUnVsZTtcbiJdfQ==