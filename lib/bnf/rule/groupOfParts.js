'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    GroupOfPartsNode = require('../node/groupOfParts'),
    GroupOfPartsDefinition = require('../definition/groupOfParts');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIkdyb3VwT2ZQYXJ0c05vZGUiLCJHcm91cE9mUGFydHNEZWZpbml0aW9uIiwiR3JvdXBPZlBhcnRzUnVsZU5hbWUiLCJHcm91cE9mUGFydHNSdWxlIiwibmFtZSIsImdyb3VwT2ZQYXJ0c0RlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBcEI7QUFBQSxJQUNNQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxjQUFELENBRHpCO0FBQUEsSUFFTUUsZ0JBQWdCLEdBQUdGLE9BQU8sQ0FBQyxzQkFBRCxDQUZoQztBQUFBLElBR01HLHNCQUFzQixHQUFHSCxPQUFPLENBQUMsNEJBQUQsQ0FIdEM7O0lBS1FJLG9CLEdBQXlCSCxTLENBQXpCRyxvQjs7SUFFRkMsZ0I7OztBQUNKLDhCQUFjO0FBQUE7O0FBQ1osUUFBTUMsSUFBSSxHQUFHRixvQkFBYjtBQUFBLFFBQ01HLHNCQUFzQixHQUFHLElBQUlKLHNCQUFKLEVBRC9CO0FBQUEsUUFFTUssV0FBVyxHQUFHLENBQ1pELHNCQURZLENBRnBCO0FBQUEsUUFLTUUsSUFBSSxHQUFHUCxnQkFMYjtBQURZLHlGQVFOSSxJQVJNLEVBUUFFLFdBUkEsRUFRYUMsSUFSYjtBQVNiOzs7RUFWNEJWLEk7O0FBYS9CVyxNQUFNLENBQUNDLE9BQVAsR0FBaUJOLGdCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgR3JvdXBPZlBhcnRzTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvZ3JvdXBPZlBhcnRzJyksXG4gICAgICBHcm91cE9mUGFydHNEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9ncm91cE9mUGFydHMnKTtcblxuY29uc3QgeyBHcm91cE9mUGFydHNSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBHcm91cE9mUGFydHNSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSBHcm91cE9mUGFydHNSdWxlTmFtZSxcbiAgICAgICAgICBncm91cE9mUGFydHNEZWZpbml0aW9uID0gbmV3IEdyb3VwT2ZQYXJ0c0RlZmluaXRpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGdyb3VwT2ZQYXJ0c0RlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBHcm91cE9mUGFydHNOb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cE9mUGFydHNSdWxlO1xuIl19