'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    GroupOfPartsNode = require('../node/groupOfParts'),
    GroupOfPartsDefinition = require('../definition/groupOfParts');

var GroupOfPartsRule = function (_Rule) {
  _inherits(GroupOfPartsRule, _Rule);

  function GroupOfPartsRule() {
    _classCallCheck(this, GroupOfPartsRule);

    var groupOfPartsDefinition = new GroupOfPartsDefinition(),
        name = 'groupOfParts',
        definitions = [groupOfPartsDefinition],
        Node = GroupOfPartsNode;

    return _possibleConstructorReturn(this, (GroupOfPartsRule.__proto__ || Object.getPrototypeOf(GroupOfPartsRule)).call(this, name, definitions, Node));
  }

  return GroupOfPartsRule;
}(Rule);

module.exports = GroupOfPartsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJHcm91cE9mUGFydHNOb2RlIiwiR3JvdXBPZlBhcnRzRGVmaW5pdGlvbiIsIkdyb3VwT2ZQYXJ0c1J1bGUiLCJncm91cE9mUGFydHNEZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsbUJBQW1CRCxRQUFRLHNCQUFSLENBRHpCO0FBQUEsSUFFTUUseUJBQXlCRixRQUFRLDRCQUFSLENBRi9COztJQUlNRyxnQjs7O0FBQ0osOEJBQWM7QUFBQTs7QUFDWixRQUFNQyx5QkFBeUIsSUFBSUYsc0JBQUosRUFBL0I7QUFBQSxRQUNNRyxPQUFPLGNBRGI7QUFBQSxRQUVNQyxjQUFjLENBQ1pGLHNCQURZLENBRnBCO0FBQUEsUUFLTUcsT0FBT04sZ0JBTGI7O0FBRFksK0hBUU5JLElBUk0sRUFRQUMsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVY0QlIsSTs7QUFhL0JTLE9BQU9DLE9BQVAsR0FBaUJOLGdCQUFqQiIsImZpbGUiOiJncm91cE9mUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBHcm91cE9mUGFydHNOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9ncm91cE9mUGFydHMnKSxcbiAgICAgIEdyb3VwT2ZQYXJ0c0RlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL2dyb3VwT2ZQYXJ0cycpO1xuXG5jbGFzcyBHcm91cE9mUGFydHNSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGdyb3VwT2ZQYXJ0c0RlZmluaXRpb24gPSBuZXcgR3JvdXBPZlBhcnRzRGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5hbWUgPSAnZ3JvdXBPZlBhcnRzJyxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGdyb3VwT2ZQYXJ0c0RlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBHcm91cE9mUGFydHNOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBPZlBhcnRzUnVsZTtcbiJdfQ==