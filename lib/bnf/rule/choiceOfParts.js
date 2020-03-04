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
    ChoiceOfPartsNode = require('../node/choiceOfParts'),
    ChoiceOfPartsDefinition = require('../definition/choiceOfParts');

var ChoiceOfPartsRuleName = ruleNames.ChoiceOfPartsRuleName;

var ChoiceOfPartsRule = /*#__PURE__*/function (_Rule) {
  _inherits(ChoiceOfPartsRule, _Rule);

  function ChoiceOfPartsRule() {
    _classCallCheck(this, ChoiceOfPartsRule);

    var name = ChoiceOfPartsRuleName,
        choiceOfPartsDefinition = new ChoiceOfPartsDefinition(),
        definitions = [choiceOfPartsDefinition],
        Node = ChoiceOfPartsNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(ChoiceOfPartsRule).call(this, name, definitions, Node));
  }

  return ChoiceOfPartsRule;
}(Rule);

module.exports = ChoiceOfPartsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob2ljZU9mUGFydHMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJydWxlTmFtZXMiLCJDaG9pY2VPZlBhcnRzTm9kZSIsIkNob2ljZU9mUGFydHNEZWZpbml0aW9uIiwiQ2hvaWNlT2ZQYXJ0c1J1bGVOYW1lIiwiQ2hvaWNlT2ZQYXJ0c1J1bGUiLCJuYW1lIiwiY2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBcEI7QUFBQSxJQUNNQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxjQUFELENBRHpCO0FBQUEsSUFFTUUsaUJBQWlCLEdBQUdGLE9BQU8sQ0FBQyx1QkFBRCxDQUZqQztBQUFBLElBR01HLHVCQUF1QixHQUFHSCxPQUFPLENBQUMsNkJBQUQsQ0FIdkM7O0lBS1FJLHFCLEdBQTBCSCxTLENBQTFCRyxxQjs7SUFFRkMsaUI7OztBQUNKLCtCQUFjO0FBQUE7O0FBQ1osUUFBTUMsSUFBSSxHQUFHRixxQkFBYjtBQUFBLFFBQ01HLHVCQUF1QixHQUFHLElBQUlKLHVCQUFKLEVBRGhDO0FBQUEsUUFFTUssV0FBVyxHQUFHLENBQ1pELHVCQURZLENBRnBCO0FBQUEsUUFLTUUsSUFBSSxHQUFHUCxpQkFMYjtBQURZLDBGQVFOSSxJQVJNLEVBUUFFLFdBUkEsRUFRYUMsSUFSYjtBQVNiOzs7RUFWNkJWLEk7O0FBYWhDVyxNQUFNLENBQUNDLE9BQVAsR0FBaUJOLGlCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgQ2hvaWNlT2ZQYXJ0c05vZGUgPSByZXF1aXJlKCcuLi9ub2RlL2Nob2ljZU9mUGFydHMnKSxcbiAgICAgIENob2ljZU9mUGFydHNEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9jaG9pY2VPZlBhcnRzJyk7XG5cbmNvbnN0IHsgQ2hvaWNlT2ZQYXJ0c1J1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIENob2ljZU9mUGFydHNSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSBDaG9pY2VPZlBhcnRzUnVsZU5hbWUsXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24gPSBuZXcgQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGNob2ljZU9mUGFydHNEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gQ2hvaWNlT2ZQYXJ0c05vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaG9pY2VPZlBhcnRzUnVsZTtcbiJdfQ==