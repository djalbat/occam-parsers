'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    RuleNamePart = require('../part/nonTerminal/ruleName');

var RuleNameDefinition = function (_Definition) {
  _inherits(RuleNameDefinition, _Definition);

  function RuleNameDefinition(ruleName) {
    _classCallCheck(this, RuleNameDefinition);

    var ruleNameRuleNamePart = new RuleNamePart(ruleName),
        parts = [ruleNameRuleNamePart];

    return _possibleConstructorReturn(this, (RuleNameDefinition.__proto__ || Object.getPrototypeOf(RuleNameDefinition)).call(this, parts));
  }

  return RuleNameDefinition;
}(Definition);

module.exports = RuleNameDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlJ1bGVOYW1lUGFydCIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwicnVsZU5hbWVSdWxlTmFtZVBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLGVBQWVELFFBQVEsOEJBQVIsQ0FEckI7O0lBR01FLGtCOzs7QUFDSiw4QkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixRQUFNQyx1QkFBdUIsSUFBSUgsWUFBSixDQUFpQkUsUUFBakIsQ0FBN0I7QUFBQSxRQUNNRSxRQUFRLENBQ05ELG9CQURNLENBRGQ7O0FBRG9CLG1JQU1kQyxLQU5jO0FBT3JCOzs7RUFSOEJOLFU7O0FBV2pDTyxPQUFPQyxPQUFQLEdBQWlCTCxrQkFBakIiLCJmaWxlIjoicnVsZU5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lJyk7XG5cbmNsYXNzIFJ1bGVOYW1lRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChydWxlTmFtZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBydWxlTmFtZVJ1bGVOYW1lUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlTmFtZURlZmluaXRpb247XG4iXX0=