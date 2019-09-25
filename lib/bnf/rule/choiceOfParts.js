'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    DefinitionNode = require('../node/definition'),
    ChoiceOfPartsDefinition = require('../definition/choiceOfParts');

var ChoiceOfPartsRuleName = ruleNames.ChoiceOfPartsRuleName;

var ChoiceOfPartsRule = function (_Rule) {
  _inherits(ChoiceOfPartsRule, _Rule);

  function ChoiceOfPartsRule() {
    _classCallCheck(this, ChoiceOfPartsRule);

    var name = ChoiceOfPartsRuleName,
        choiceOfPartsDefinition = new ChoiceOfPartsDefinition(),
        definitions = [choiceOfPartsDefinition],
        Node = DefinitionNode;

    return _possibleConstructorReturn(this, (ChoiceOfPartsRule.__proto__ || Object.getPrototypeOf(ChoiceOfPartsRule)).call(this, name, definitions, Node));
  }

  return ChoiceOfPartsRule;
}(Rule);

module.exports = ChoiceOfPartsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9jaG9pY2VPZlBhcnRzLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwicnVsZU5hbWVzIiwiRGVmaW5pdGlvbk5vZGUiLCJDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiIsIkNob2ljZU9mUGFydHNSdWxlTmFtZSIsIkNob2ljZU9mUGFydHNSdWxlIiwibmFtZSIsImNob2ljZU9mUGFydHNEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FGdkI7QUFBQSxJQUdNRywwQkFBMEJILFFBQVEsNkJBQVIsQ0FIaEM7O0lBS1FJLHFCLEdBQTBCSCxTLENBQTFCRyxxQjs7SUFFRkMsaUI7OztBQUNKLCtCQUFjO0FBQUE7O0FBQ1osUUFBTUMsT0FBT0YscUJBQWI7QUFBQSxRQUNNRywwQkFBMEIsSUFBSUosdUJBQUosRUFEaEM7QUFBQSxRQUVNSyxjQUFjLENBQ1pELHVCQURZLENBRnBCO0FBQUEsUUFLTUUsT0FBT1AsY0FMYjs7QUFEWSxpSUFRTkksSUFSTSxFQVFBRSxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVjZCVixJOztBQWFoQ1csT0FBT0MsT0FBUCxHQUFpQk4saUJBQWpCIiwiZmlsZSI6ImNob2ljZU9mUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIERlZmluaXRpb25Ob2RlID0gcmVxdWlyZSgnLi4vbm9kZS9kZWZpbml0aW9uJyksXG4gICAgICBDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vY2hvaWNlT2ZQYXJ0cycpO1xuXG5jb25zdCB7IENob2ljZU9mUGFydHNSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBDaG9pY2VPZlBhcnRzUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gQ2hvaWNlT2ZQYXJ0c1J1bGVOYW1lLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNEZWZpbml0aW9uID0gbmV3IENob2ljZU9mUGFydHNEZWZpbml0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBjaG9pY2VPZlBhcnRzRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IERlZmluaXRpb25Ob2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hvaWNlT2ZQYXJ0c1J1bGU7XG4iXX0=