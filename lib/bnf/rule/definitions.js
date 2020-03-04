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
    DefinitionsNode = require('../node/definitions'),
    DefinitionsDefinition = require('../definition/definitions');

var DefinitionsRuleName = ruleNames.DefinitionsRuleName;

var DefinitionsRule = /*#__PURE__*/function (_Rule) {
  _inherits(DefinitionsRule, _Rule);

  function DefinitionsRule() {
    _classCallCheck(this, DefinitionsRule);

    var definitionsDefinition = new DefinitionsDefinition(),
        name = DefinitionsRuleName,
        definitions = [definitionsDefinition],
        Node = DefinitionsNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionsRule).call(this, name, definitions, Node));
  }

  return DefinitionsRule;
}(Rule);

module.exports = DefinitionsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb25zLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwicnVsZU5hbWVzIiwiRGVmaW5pdGlvbnNOb2RlIiwiRGVmaW5pdGlvbnNEZWZpbml0aW9uIiwiRGVmaW5pdGlvbnNSdWxlTmFtZSIsIkRlZmluaXRpb25zUnVsZSIsImRlZmluaXRpb25zRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBcEI7QUFBQSxJQUNNQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxjQUFELENBRHpCO0FBQUEsSUFFTUUsZUFBZSxHQUFHRixPQUFPLENBQUMscUJBQUQsQ0FGL0I7QUFBQSxJQUdNRyxxQkFBcUIsR0FBR0gsT0FBTyxDQUFDLDJCQUFELENBSHJDOztJQUtRSSxtQixHQUF3QkgsUyxDQUF4QkcsbUI7O0lBRUZDLGU7OztBQUNKLDZCQUFjO0FBQUE7O0FBQ1osUUFBTUMscUJBQXFCLEdBQUcsSUFBSUgscUJBQUosRUFBOUI7QUFBQSxRQUNNSSxJQUFJLEdBQUdILG1CQURiO0FBQUEsUUFFTUksV0FBVyxHQUFHLENBQ1pGLHFCQURZLENBRnBCO0FBQUEsUUFLTUcsSUFBSSxHQUFHUCxlQUxiO0FBRFksd0ZBUU5LLElBUk0sRUFRQUMsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVYyQlYsSTs7QUFhOUJXLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQk4sZUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIERlZmluaXRpb25zTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvZGVmaW5pdGlvbnMnKSxcbiAgICAgIERlZmluaXRpb25zRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vZGVmaW5pdGlvbnMnKTtcblxuY29uc3QgeyBEZWZpbml0aW9uc1J1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIERlZmluaXRpb25zUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0RlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbnNEZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9IERlZmluaXRpb25zUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBkZWZpbml0aW9uc0RlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBEZWZpbml0aW9uc05vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZWZpbml0aW9uc1J1bGU7XG4iXX0=