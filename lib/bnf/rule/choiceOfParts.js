'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    ChoiceOfPartsNode = require('../node/choiceOfParts'),
    ChoiceOfPartsDefinition = require('../definition/choiceOfParts');

var ChoiceOfPartsRuleName = ruleNames.ChoiceOfPartsRuleName;

var ChoiceOfPartsRule = function (_Rule) {
  _inherits(ChoiceOfPartsRule, _Rule);

  function ChoiceOfPartsRule() {
    _classCallCheck(this, ChoiceOfPartsRule);

    var name = ChoiceOfPartsRuleName,
        choiceOfPartsDefinition = new ChoiceOfPartsDefinition(),
        definitions = [choiceOfPartsDefinition],
        Node = ChoiceOfPartsNode;

    return _possibleConstructorReturn(this, (ChoiceOfPartsRule.__proto__ || Object.getPrototypeOf(ChoiceOfPartsRule)).call(this, name, definitions, Node));
  }

  return ChoiceOfPartsRule;
}(Rule);

module.exports = ChoiceOfPartsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9jaG9pY2VPZlBhcnRzLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwicnVsZU5hbWVzIiwiQ2hvaWNlT2ZQYXJ0c05vZGUiLCJDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiIsIkNob2ljZU9mUGFydHNSdWxlTmFtZSIsIkNob2ljZU9mUGFydHNSdWxlIiwibmFtZSIsImNob2ljZU9mUGFydHNEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNRSxvQkFBb0JGLFFBQVEsdUJBQVIsQ0FGMUI7QUFBQSxJQUdNRywwQkFBMEJILFFBQVEsNkJBQVIsQ0FIaEM7O0lBS1FJLHFCLEdBQTBCSCxTLENBQTFCRyxxQjs7SUFFRkMsaUI7OztBQUNKLCtCQUFjO0FBQUE7O0FBQ1osUUFBTUMsT0FBT0YscUJBQWI7QUFBQSxRQUNNRywwQkFBMEIsSUFBSUosdUJBQUosRUFEaEM7QUFBQSxRQUVNSyxjQUFjLENBQ1pELHVCQURZLENBRnBCO0FBQUEsUUFLTUUsT0FBT1AsaUJBTGI7O0FBRFksaUlBUU5JLElBUk0sRUFRQUUsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVY2QlYsSTs7QUFhaENXLE9BQU9DLE9BQVAsR0FBaUJOLGlCQUFqQiIsImZpbGUiOiJjaG9pY2VPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBDaG9pY2VPZlBhcnRzTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvY2hvaWNlT2ZQYXJ0cycpLFxuICAgICAgQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL2Nob2ljZU9mUGFydHMnKTtcblxuY29uc3QgeyBDaG9pY2VPZlBhcnRzUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgQ2hvaWNlT2ZQYXJ0c1J1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IENob2ljZU9mUGFydHNSdWxlTmFtZSxcbiAgICAgICAgICBjaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiA9IG5ldyBDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgY2hvaWNlT2ZQYXJ0c0RlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBDaG9pY2VPZlBhcnRzTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENob2ljZU9mUGFydHNSdWxlO1xuIl19