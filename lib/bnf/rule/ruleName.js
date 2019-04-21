'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    RuleNameNode = require('../node/ruleName'),
    NameDefinition = require('../definition/name');

var RuleNameRuleName = ruleNames.RuleNameRuleName;

var RuleNameRule = function (_Rule) {
  _inherits(RuleNameRule, _Rule);

  function RuleNameRule() {
    _classCallCheck(this, RuleNameRule);

    var nameDefinition = new NameDefinition(),
        name = RuleNameRuleName,
        definitions = [nameDefinition ///
    ],
        Node = RuleNameNode;

    return _possibleConstructorReturn(this, (RuleNameRule.__proto__ || Object.getPrototypeOf(RuleNameRule)).call(this, name, definitions, Node));
  }

  return RuleNameRule;
}(Rule);

module.exports = RuleNameRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIlJ1bGVOYW1lTm9kZSIsIk5hbWVEZWZpbml0aW9uIiwiUnVsZU5hbWVSdWxlTmFtZSIsIlJ1bGVOYW1lUnVsZSIsIm5hbWVEZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxjQUFSLENBRGxCO0FBQUEsSUFFTUUsZUFBZUYsUUFBUSxrQkFBUixDQUZyQjtBQUFBLElBR01HLGlCQUFpQkgsUUFBUSxvQkFBUixDQUh2Qjs7SUFLUUksZ0IsR0FBcUJILFMsQ0FBckJHLGdCOztJQUVGQyxZOzs7QUFDSiwwQkFBYztBQUFBOztBQUNaLFFBQU1DLGlCQUFpQixJQUFJSCxjQUFKLEVBQXZCO0FBQUEsUUFDTUksT0FBT0gsZ0JBRGI7QUFBQSxRQUVNSSxjQUFjLENBQ1pGLGNBRFksQ0FDSTtBQURKLEtBRnBCO0FBQUEsUUFLTUcsT0FBT1AsWUFMYjs7QUFEWSx1SEFRTkssSUFSTSxFQVFBQyxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVndCVixJOztBQWEzQlcsT0FBT0MsT0FBUCxHQUFpQk4sWUFBakIiLCJmaWxlIjoicnVsZU5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIFJ1bGVOYW1lTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvcnVsZU5hbWUnKSxcbiAgICAgIE5hbWVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9uYW1lJyk7XG5cbmNvbnN0IHsgUnVsZU5hbWVSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBSdWxlTmFtZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZURlZmluaXRpb24gPSBuZXcgTmFtZURlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gUnVsZU5hbWVSdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIG5hbWVEZWZpbml0aW9uICAvLy9cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBSdWxlTmFtZU5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlTmFtZVJ1bGU7XG4iXX0=