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
    RuleNameNode = require('../node/ruleName'),
    NameDefinition = require('../definition/name');

var RuleNameRuleName = ruleNames.RuleNameRuleName;

var RuleNameRule = /*#__PURE__*/function (_Rule) {
  _inherits(RuleNameRule, _Rule);

  function RuleNameRule() {
    _classCallCheck(this, RuleNameRule);

    var nameDefinition = new NameDefinition(),
        name = RuleNameRuleName,
        definitions = [nameDefinition ///
    ],
        Node = RuleNameNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(RuleNameRule).call(this, name, definitions, Node));
  }

  return RuleNameRule;
}(Rule);

module.exports = RuleNameRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwicnVsZU5hbWVzIiwiUnVsZU5hbWVOb2RlIiwiTmFtZURlZmluaXRpb24iLCJSdWxlTmFtZVJ1bGVOYW1lIiwiUnVsZU5hbWVSdWxlIiwibmFtZURlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXBCO0FBQUEsSUFDTUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsY0FBRCxDQUR6QjtBQUFBLElBRU1FLFlBQVksR0FBR0YsT0FBTyxDQUFDLGtCQUFELENBRjVCO0FBQUEsSUFHTUcsY0FBYyxHQUFHSCxPQUFPLENBQUMsb0JBQUQsQ0FIOUI7O0lBS1FJLGdCLEdBQXFCSCxTLENBQXJCRyxnQjs7SUFFRkMsWTs7O0FBQ0osMEJBQWM7QUFBQTs7QUFDWixRQUFNQyxjQUFjLEdBQUcsSUFBSUgsY0FBSixFQUF2QjtBQUFBLFFBQ01JLElBQUksR0FBR0gsZ0JBRGI7QUFBQSxRQUVNSSxXQUFXLEdBQUcsQ0FDWkYsY0FEWSxDQUNJO0FBREosS0FGcEI7QUFBQSxRQUtNRyxJQUFJLEdBQUdQLFlBTGI7QUFEWSxxRkFRTkssSUFSTSxFQVFBQyxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVndCVixJOztBQWEzQlcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTixZQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgUnVsZU5hbWVOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9ydWxlTmFtZScpLFxuICAgICAgTmFtZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL25hbWUnKTtcblxuY29uc3QgeyBSdWxlTmFtZVJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIFJ1bGVOYW1lUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lRGVmaW5pdGlvbiA9IG5ldyBOYW1lRGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5hbWUgPSBSdWxlTmFtZVJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbmFtZURlZmluaXRpb24gIC8vL1xuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFJ1bGVOYW1lTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVOYW1lUnVsZTtcbiJdfQ==