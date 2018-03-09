'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    RulesNode = require('../node/rules'),
    RulesDefinition = require('../definition/rules');

var RulesRuleName = ruleNames.RulesRuleName;

var RulesRule = function (_Rule) {
  _inherits(RulesRule, _Rule);

  function RulesRule() {
    _classCallCheck(this, RulesRule);

    var rulesDefinition = new RulesDefinition(),
        name = RulesRuleName,
        definitions = [rulesDefinition],
        Node = RulesNode;

    return _possibleConstructorReturn(this, (RulesRule.__proto__ || Object.getPrototypeOf(RulesRule)).call(this, name, definitions, Node));
  }

  return RulesRule;
}(Rule);

module.exports = RulesRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9ydWxlcy5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIlJ1bGVzTm9kZSIsIlJ1bGVzRGVmaW5pdGlvbiIsIlJ1bGVzUnVsZU5hbWUiLCJSdWxlc1J1bGUiLCJydWxlc0RlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNRSxZQUFZRixRQUFRLGVBQVIsQ0FGbEI7QUFBQSxJQUdNRyxrQkFBa0JILFFBQVEscUJBQVIsQ0FIeEI7O0lBS1FJLGEsR0FBa0JILFMsQ0FBbEJHLGE7O0lBRUZDLFM7OztBQUNKLHVCQUFjO0FBQUE7O0FBQ1osUUFBTUMsa0JBQWtCLElBQUlILGVBQUosRUFBeEI7QUFBQSxRQUNNSSxPQUFPSCxhQURiO0FBQUEsUUFFTUksY0FBYyxDQUNaRixlQURZLENBRnBCO0FBQUEsUUFLTUcsT0FBT1AsU0FMYjs7QUFEWSxpSEFRTkssSUFSTSxFQVFBQyxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVnFCVixJOztBQWF4QlcsT0FBT0MsT0FBUCxHQUFpQk4sU0FBakIiLCJmaWxlIjoicnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIFJ1bGVzTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvcnVsZXMnKSxcbiAgICAgIFJ1bGVzRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcnVsZXMnKTtcblxuY29uc3QgeyBSdWxlc1J1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIFJ1bGVzUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBydWxlc0RlZmluaXRpb24gPSBuZXcgUnVsZXNEZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9IFJ1bGVzUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBydWxlc0RlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBSdWxlc05vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlc1J1bGU7XG4iXX0=