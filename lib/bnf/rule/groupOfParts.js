'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    DefinitionNode = require('../node/definition'),
    GroupOfPartsDefinition = require('../definition/groupOfParts');

var GroupOfPartsRuleName = ruleNames.GroupOfPartsRuleName;

var GroupOfPartsRule = function (_Rule) {
  _inherits(GroupOfPartsRule, _Rule);

  function GroupOfPartsRule() {
    _classCallCheck(this, GroupOfPartsRule);

    var name = GroupOfPartsRuleName,
        groupOfPartsDefinition = new GroupOfPartsDefinition(),
        definitions = [groupOfPartsDefinition],
        Node = DefinitionNode;

    return _possibleConstructorReturn(this, (GroupOfPartsRule.__proto__ || Object.getPrototypeOf(GroupOfPartsRule)).call(this, name, definitions, Node));
  }

  return GroupOfPartsRule;
}(Rule);

module.exports = GroupOfPartsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJydWxlTmFtZXMiLCJEZWZpbml0aW9uTm9kZSIsIkdyb3VwT2ZQYXJ0c0RlZmluaXRpb24iLCJHcm91cE9mUGFydHNSdWxlTmFtZSIsIkdyb3VwT2ZQYXJ0c1J1bGUiLCJuYW1lIiwiZ3JvdXBPZlBhcnRzRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxjQUFSLENBRGxCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLG9CQUFSLENBRnZCO0FBQUEsSUFHTUcseUJBQXlCSCxRQUFRLDRCQUFSLENBSC9COztJQUtRSSxvQixHQUF5QkgsUyxDQUF6Qkcsb0I7O0lBRUZDLGdCOzs7QUFDSiw4QkFBYztBQUFBOztBQUNaLFFBQU1DLE9BQU9GLG9CQUFiO0FBQUEsUUFDTUcseUJBQXlCLElBQUlKLHNCQUFKLEVBRC9CO0FBQUEsUUFFTUssY0FBYyxDQUNaRCxzQkFEWSxDQUZwQjtBQUFBLFFBS01FLE9BQU9QLGNBTGI7O0FBRFksK0hBUU5JLElBUk0sRUFRQUUsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVY0QlYsSTs7QUFhL0JXLE9BQU9DLE9BQVAsR0FBaUJOLGdCQUFqQiIsImZpbGUiOiJncm91cE9mUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIERlZmluaXRpb25Ob2RlID0gcmVxdWlyZSgnLi4vbm9kZS9kZWZpbml0aW9uJyksXG4gICAgICBHcm91cE9mUGFydHNEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9ncm91cE9mUGFydHMnKTtcblxuY29uc3QgeyBHcm91cE9mUGFydHNSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBHcm91cE9mUGFydHNSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSBHcm91cE9mUGFydHNSdWxlTmFtZSxcbiAgICAgICAgICBncm91cE9mUGFydHNEZWZpbml0aW9uID0gbmV3IEdyb3VwT2ZQYXJ0c0RlZmluaXRpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGdyb3VwT2ZQYXJ0c0RlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBEZWZpbml0aW9uTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwT2ZQYXJ0c1J1bGU7XG4iXX0=