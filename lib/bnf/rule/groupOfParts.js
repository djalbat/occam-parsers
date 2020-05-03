"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Rule = require("../rule"),
    ruleNames = require("../ruleNames"),
    GroupOfPartsNode = require("../node/groupOfParts"),
    GroupOfPartsDefinition = require("../definition/groupOfParts");

var GroupOfPartsRuleName = ruleNames.GroupOfPartsRuleName;

var GroupOfPartsRule = /*#__PURE__*/function (_Rule) {
  _inherits(GroupOfPartsRule, _Rule);

  function GroupOfPartsRule() {
    _classCallCheck(this, GroupOfPartsRule);

    var name = GroupOfPartsRuleName,
        groupOfPartsDefinition = new GroupOfPartsDefinition(),
        definitions = [groupOfPartsDefinition],
        Node = GroupOfPartsNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(GroupOfPartsRule).call(this, name, definitions, Node));
  }

  return GroupOfPartsRule;
}(Rule);

module.exports = GroupOfPartsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIkdyb3VwT2ZQYXJ0c05vZGUiLCJHcm91cE9mUGFydHNEZWZpbml0aW9uIiwiR3JvdXBPZlBhcnRzUnVsZU5hbWUiLCJHcm91cE9mUGFydHNSdWxlIiwibmFtZSIsImdyb3VwT2ZQYXJ0c0RlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBcEI7QUFBQSxJQUNNQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxjQUFELENBRHpCO0FBQUEsSUFFTUUsZ0JBQWdCLEdBQUdGLE9BQU8sQ0FBQyxzQkFBRCxDQUZoQztBQUFBLElBR01HLHNCQUFzQixHQUFHSCxPQUFPLENBQUMsNEJBQUQsQ0FIdEM7O0lBS1FJLG9CLEdBQXlCSCxTLENBQXpCRyxvQjs7SUFFRkMsZ0I7OztBQUNKLDhCQUFjO0FBQUE7O0FBQ1osUUFBTUMsSUFBSSxHQUFHRixvQkFBYjtBQUFBLFFBQ01HLHNCQUFzQixHQUFHLElBQUlKLHNCQUFKLEVBRC9CO0FBQUEsUUFFTUssV0FBVyxHQUFHLENBQ1pELHNCQURZLENBRnBCO0FBQUEsUUFLTUUsSUFBSSxHQUFHUCxnQkFMYjtBQURZLHlGQVFOSSxJQVJNLEVBUUFFLFdBUkEsRUFRYUMsSUFSYjtBQVNiOzs7RUFWNEJWLEk7O0FBYS9CVyxNQUFNLENBQUNDLE9BQVAsR0FBaUJOLGdCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZShcIi4uL3J1bGVcIiksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKFwiLi4vcnVsZU5hbWVzXCIpLFxuICAgICAgR3JvdXBPZlBhcnRzTm9kZSA9IHJlcXVpcmUoXCIuLi9ub2RlL2dyb3VwT2ZQYXJ0c1wiKSxcbiAgICAgIEdyb3VwT2ZQYXJ0c0RlZmluaXRpb24gPSByZXF1aXJlKFwiLi4vZGVmaW5pdGlvbi9ncm91cE9mUGFydHNcIik7XG5cbmNvbnN0IHsgR3JvdXBPZlBhcnRzUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgR3JvdXBPZlBhcnRzUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gR3JvdXBPZlBhcnRzUnVsZU5hbWUsXG4gICAgICAgICAgZ3JvdXBPZlBhcnRzRGVmaW5pdGlvbiA9IG5ldyBHcm91cE9mUGFydHNEZWZpbml0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBncm91cE9mUGFydHNEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gR3JvdXBPZlBhcnRzTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBPZlBhcnRzUnVsZTtcbiJdfQ==