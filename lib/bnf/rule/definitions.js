"use strict";

var _rule = _interopRequireDefault(require("../rule"));

var _definitions = _interopRequireDefault(require("../node/definitions"));

var _definitions2 = _interopRequireDefault(require("../definition/definitions"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DefinitionsRule = /*#__PURE__*/function (_Rule) {
  _inherits(DefinitionsRule, _Rule);

  function DefinitionsRule() {
    _classCallCheck(this, DefinitionsRule);

    var definitionsDefinition = new _definitions2["default"](),
        name = _ruleNames.DefinitionsRuleName,
        definitions = [definitionsDefinition],
        Node = _definitions["default"];
    return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionsRule).call(this, name, definitions, Node));
  }

  return DefinitionsRule;
}(_rule["default"]);

module.exports = DefinitionsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb25zLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb25zUnVsZSIsImRlZmluaXRpb25zRGVmaW5pdGlvbiIsIkRlZmluaXRpb25zRGVmaW5pdGlvbiIsIm5hbWUiLCJEZWZpbml0aW9uc1J1bGVOYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwiRGVmaW5pdGlvbnNOb2RlIiwiUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsZTs7O0FBQ0osNkJBQWM7QUFBQTs7QUFDWixRQUFNQyxxQkFBcUIsR0FBRyxJQUFJQyx3QkFBSixFQUE5QjtBQUFBLFFBQ01DLElBQUksR0FBR0MsOEJBRGI7QUFBQSxRQUVNQyxXQUFXLEdBQUcsQ0FDWkoscUJBRFksQ0FGcEI7QUFBQSxRQUtNSyxJQUFJLEdBQUdDLHVCQUxiO0FBRFksd0ZBUU5KLElBUk0sRUFRQUUsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVYyQkUsZ0I7O0FBYTlCQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJWLGVBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgRGVmaW5pdGlvbnNOb2RlIGZyb20gXCIuLi9ub2RlL2RlZmluaXRpb25zXCI7XG5pbXBvcnQgRGVmaW5pdGlvbnNEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL2RlZmluaXRpb25zXCI7XG5cbmltcG9ydCB7IERlZmluaXRpb25zUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNsYXNzIERlZmluaXRpb25zUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0RlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbnNEZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9IERlZmluaXRpb25zUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBkZWZpbml0aW9uc0RlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBEZWZpbml0aW9uc05vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZWZpbml0aW9uc1J1bGU7XG4iXX0=