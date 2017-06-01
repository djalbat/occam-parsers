'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    SignificantTokenTypeRule = require('../rule/significantTokenType');

var ProductionNameProduction = function (_Production) {
  _inherits(ProductionNameProduction, _Production);

  function ProductionNameProduction() {
    _classCallCheck(this, ProductionNameProduction);

    var nameSignificantTokenType = 'name',
        nameSignificantTokenTypeRule = new SignificantTokenTypeRule(nameSignificantTokenType),
        name = 'productionName',
        rules = [nameSignificantTokenTypeRule],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (ProductionNameProduction.__proto__ || Object.getPrototypeOf(ProductionNameProduction)).call(this, name, rules, Node));
  }

  return ProductionNameProduction;
}(Production);

module.exports = ProductionNameProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9wcm9kdWN0aW9uTmFtZS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsIlByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiIsIm5hbWVTaWduaWZpY2FudFRva2VuVHlwZSIsIm5hbWVTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLCtCQUFSLENBRHhCO0FBQUEsSUFFTUUsMkJBQTJCRixRQUFRLDhCQUFSLENBRmpDOztJQUlNRyx3Qjs7O0FBQ0osc0NBQWM7QUFBQTs7QUFDWixRQUFNQywyQkFBMkIsTUFBakM7QUFBQSxRQUNNQywrQkFBK0IsSUFBSUgsd0JBQUosQ0FBNkJFLHdCQUE3QixDQURyQztBQUFBLFFBRU1FLE9BQU8sZ0JBRmI7QUFBQSxRQUdNQyxRQUFRLENBQ05GLDRCQURNLENBSGQ7QUFBQSxRQU1NRyxPQUFPUCxlQU5iOztBQURZLCtJQVNOSyxJQVRNLEVBU0FDLEtBVEEsRUFTT0MsSUFUUDtBQVViOzs7RUFYb0NULFU7O0FBY3ZDVSxPQUFPQyxPQUFQLEdBQWlCUCx3QkFBakIiLCJmaWxlIjoicHJvZHVjdGlvbk5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZVNpZ25pZmljYW50VG9rZW5UeXBlID0gJ25hbWUnLFxuICAgICAgICAgIG5hbWVTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlKG5hbWVTaWduaWZpY2FudFRva2VuVHlwZSksXG4gICAgICAgICAgbmFtZSA9ICdwcm9kdWN0aW9uTmFtZScsXG4gICAgICAgICAgcnVsZXMgPSBbXG4gICAgICAgICAgICBuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIHJ1bGVzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uO1xuIl19