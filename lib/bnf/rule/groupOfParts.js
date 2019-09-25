'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    GroupOfPartsNode = require('../node/groupOfParts'),
    GroupOfPartsDefinition = require('../definition/groupOfParts');

var GroupOfPartsRuleName = ruleNames.GroupOfPartsRuleName;

var GroupOfPartsRule = function (_Rule) {
  _inherits(GroupOfPartsRule, _Rule);

  function GroupOfPartsRule() {
    _classCallCheck(this, GroupOfPartsRule);

    var name = GroupOfPartsRuleName,
        groupOfPartsDefinition = new GroupOfPartsDefinition(),
        definitions = [groupOfPartsDefinition],
        Node = GroupOfPartsNode;

    return _possibleConstructorReturn(this, (GroupOfPartsRule.__proto__ || Object.getPrototypeOf(GroupOfPartsRule)).call(this, name, definitions, Node));
  }

  return GroupOfPartsRule;
}(Rule);

module.exports = GroupOfPartsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJydWxlTmFtZXMiLCJHcm91cE9mUGFydHNOb2RlIiwiR3JvdXBPZlBhcnRzRGVmaW5pdGlvbiIsIkdyb3VwT2ZQYXJ0c1J1bGVOYW1lIiwiR3JvdXBPZlBhcnRzUnVsZSIsIm5hbWUiLCJncm91cE9mUGFydHNEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNRSxtQkFBbUJGLFFBQVEsc0JBQVIsQ0FGekI7QUFBQSxJQUdNRyx5QkFBeUJILFFBQVEsNEJBQVIsQ0FIL0I7O0lBS1FJLG9CLEdBQXlCSCxTLENBQXpCRyxvQjs7SUFFRkMsZ0I7OztBQUNKLDhCQUFjO0FBQUE7O0FBQ1osUUFBTUMsT0FBT0Ysb0JBQWI7QUFBQSxRQUNNRyx5QkFBeUIsSUFBSUosc0JBQUosRUFEL0I7QUFBQSxRQUVNSyxjQUFjLENBQ1pELHNCQURZLENBRnBCO0FBQUEsUUFLTUUsT0FBT1AsZ0JBTGI7O0FBRFksK0hBUU5JLElBUk0sRUFRQUUsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVY0QlYsSTs7QUFhL0JXLE9BQU9DLE9BQVAsR0FBaUJOLGdCQUFqQiIsImZpbGUiOiJncm91cE9mUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIEdyb3VwT2ZQYXJ0c05vZGUgPSByZXF1aXJlKCcuLi9ub2RlL2dyb3VwT2ZQYXJ0cycpLFxuICAgICAgR3JvdXBPZlBhcnRzRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vZ3JvdXBPZlBhcnRzJyk7XG5cbmNvbnN0IHsgR3JvdXBPZlBhcnRzUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgR3JvdXBPZlBhcnRzUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gR3JvdXBPZlBhcnRzUnVsZU5hbWUsXG4gICAgICAgICAgZ3JvdXBPZlBhcnRzRGVmaW5pdGlvbiA9IG5ldyBHcm91cE9mUGFydHNEZWZpbml0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBncm91cE9mUGFydHNEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gR3JvdXBPZlBhcnRzTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBPZlBhcnRzUnVsZTtcbiJdfQ==