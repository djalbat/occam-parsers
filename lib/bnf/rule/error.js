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
    ErrorNode = require('../node/error'),
    ErrorDefinition = require('../definition/error');

var ErrorRuleName = ruleNames.ErrorRuleName;

var ErrorRule = /*#__PURE__*/function (_Rule) {
  _inherits(ErrorRule, _Rule);

  function ErrorRule() {
    _classCallCheck(this, ErrorRule);

    var errorDefinition = new ErrorDefinition(),
        name = ErrorRuleName,
        definitions = [errorDefinition],
        Node = ErrorNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(ErrorRule).call(this, name, definitions, Node));
  }

  return ErrorRule;
}(Rule);

module.exports = ErrorRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwicnVsZU5hbWVzIiwiRXJyb3JOb2RlIiwiRXJyb3JEZWZpbml0aW9uIiwiRXJyb3JSdWxlTmFtZSIsIkVycm9yUnVsZSIsImVycm9yRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBcEI7QUFBQSxJQUNNQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxjQUFELENBRHpCO0FBQUEsSUFFTUUsU0FBUyxHQUFHRixPQUFPLENBQUMsZUFBRCxDQUZ6QjtBQUFBLElBR01HLGVBQWUsR0FBR0gsT0FBTyxDQUFDLHFCQUFELENBSC9COztJQUtRSSxhLEdBQWtCSCxTLENBQWxCRyxhOztJQUVGQyxTOzs7QUFDSix1QkFBYztBQUFBOztBQUNaLFFBQU1DLGVBQWUsR0FBRyxJQUFJSCxlQUFKLEVBQXhCO0FBQUEsUUFDTUksSUFBSSxHQUFHSCxhQURiO0FBQUEsUUFFTUksV0FBVyxHQUFHLENBQ1pGLGVBRFksQ0FGcEI7QUFBQSxRQUtNRyxJQUFJLEdBQUdQLFNBTGI7QUFEWSxrRkFRTkssSUFSTSxFQVFBQyxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVnFCVixJOztBQWF4QlcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTixTQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgRXJyb3JOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9lcnJvcicpLFxuICAgICAgRXJyb3JEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9lcnJvcicpO1xuXG5jb25zdCB7IEVycm9yUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgRXJyb3JSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGVycm9yRGVmaW5pdGlvbiA9IG5ldyBFcnJvckRlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gRXJyb3JSdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGVycm9yRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IEVycm9yTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcnJvclJ1bGU7XG4iXX0=