'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Rule = require('../rule'),
    NameNode = require('../node/name'),
    ruleNames = require('../ruleNames'),
    NameDefinition = require('../definition/name');

var NameRuleName = ruleNames.NameRuleName;

var NameRule = /*#__PURE__*/function (_Rule) {
  _inherits(NameRule, _Rule);

  function NameRule() {
    _classCallCheck(this, NameRule);

    var nameDefinition = new NameDefinition(),
        name = NameRuleName,
        definitions = [nameDefinition],
        Node = NameNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(NameRule).call(this, name, definitions, Node));
  }

  return NameRule;
}(Rule);

module.exports = NameRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hbWUuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJOYW1lTm9kZSIsInJ1bGVOYW1lcyIsIk5hbWVEZWZpbml0aW9uIiwiTmFtZVJ1bGVOYW1lIiwiTmFtZVJ1bGUiLCJuYW1lRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBcEI7QUFBQSxJQUNNQyxRQUFRLEdBQUdELE9BQU8sQ0FBQyxjQUFELENBRHhCO0FBQUEsSUFFTUUsU0FBUyxHQUFHRixPQUFPLENBQUMsY0FBRCxDQUZ6QjtBQUFBLElBR01HLGNBQWMsR0FBR0gsT0FBTyxDQUFDLG9CQUFELENBSDlCOztJQUtRSSxZLEdBQWlCRixTLENBQWpCRSxZOztJQUVGQyxROzs7QUFDSixzQkFBYztBQUFBOztBQUNaLFFBQU1DLGNBQWMsR0FBRyxJQUFJSCxjQUFKLEVBQXZCO0FBQUEsUUFDTUksSUFBSSxHQUFHSCxZQURiO0FBQUEsUUFFTUksV0FBVyxHQUFHLENBQ1pGLGNBRFksQ0FGcEI7QUFBQSxRQUtNRyxJQUFJLEdBQUdSLFFBTGI7QUFEWSxpRkFRTk0sSUFSTSxFQVFBQyxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVm9CVixJOztBQWF2QlcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTixRQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIE5hbWVOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9uYW1lJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIE5hbWVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9uYW1lJyk7XG5cbmNvbnN0IHsgTmFtZVJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIE5hbWVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWVEZWZpbml0aW9uID0gbmV3IE5hbWVEZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9IE5hbWVSdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIG5hbWVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTmFtZU5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOYW1lUnVsZTtcbiJdfQ==