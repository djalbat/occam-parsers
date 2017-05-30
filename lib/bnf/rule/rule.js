'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ProductionNamePart = require('../part/productionName');

var RuleRUle = function (_Rule) {
  _inherits(RuleRUle, _Rule);

  function RuleRUle() {
    _classCallCheck(this, RuleRUle);

    var noWhitespace = false,
        partsProductionName = 'parts',
        partsProductionNamePart = new ProductionNamePart(partsProductionName, noWhitespace),
        parts = [partsProductionNamePart];

    return _possibleConstructorReturn(this, (RuleRUle.__proto__ || Object.getPrototypeOf(RuleRUle)).call(this, parts));
  }

  return RuleRUle;
}(Rule);

module.exports = RuleRUle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9ydWxlLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiUHJvZHVjdGlvbk5hbWVQYXJ0IiwiUnVsZVJVbGUiLCJub1doaXRlc3BhY2UiLCJwYXJ0c1Byb2R1Y3Rpb25OYW1lIiwicGFydHNQcm9kdWN0aW9uTmFtZVBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLHdCQUFSLENBRDNCOztJQUdNRSxROzs7QUFDSixzQkFBYztBQUFBOztBQUNaLFFBQU1DLGVBQWUsS0FBckI7QUFBQSxRQUNNQyxzQkFBc0IsT0FENUI7QUFBQSxRQUVNQywwQkFBMEIsSUFBSUosa0JBQUosQ0FBdUJHLG1CQUF2QixFQUE0Q0QsWUFBNUMsQ0FGaEM7QUFBQSxRQUdNRyxRQUFRLENBQ05ELHVCQURNLENBSGQ7O0FBRFksK0dBUU5DLEtBUk07QUFTYjs7O0VBVm9CUCxJOztBQWF2QlEsT0FBT0MsT0FBUCxHQUFpQk4sUUFBakIiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgUnVsZVJVbGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgcGFydHNQcm9kdWN0aW9uTmFtZSA9ICdwYXJ0cycsXG4gICAgICAgICAgcGFydHNQcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHBhcnRzUHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBwYXJ0c1Byb2R1Y3Rpb25OYW1lUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlUlVsZTtcbiJdfQ==