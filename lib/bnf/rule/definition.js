"use strict";

var _rule = _interopRequireDefault(require("../rule"));

var _definition = _interopRequireDefault(require("../node/definition"));

var _definition2 = _interopRequireDefault(require("../definition/definition"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DefinitionRule = /*#__PURE__*/function (_Rule) {
  _inherits(DefinitionRule, _Rule);

  function DefinitionRule() {
    _classCallCheck(this, DefinitionRule);

    var name = _ruleNames.DefinitionRuleName,
        definitionDefinition = new _definition2["default"](),
        definitions = [definitionDefinition],
        Node = _definition["default"];
    return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionRule).call(this, name, definitions, Node));
  }

  return DefinitionRule;
}(_rule["default"]);

module.exports = DefinitionRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvblJ1bGUiLCJuYW1lIiwiRGVmaW5pdGlvblJ1bGVOYW1lIiwiZGVmaW5pdGlvbkRlZmluaXRpb24iLCJEZWZpbml0aW9uRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIkRlZmluaXRpb25Ob2RlIiwiUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsYzs7O0FBQ0osNEJBQWM7QUFBQTs7QUFDWixRQUFNQyxJQUFJLEdBQUdDLDZCQUFiO0FBQUEsUUFDTUMsb0JBQW9CLEdBQUcsSUFBSUMsdUJBQUosRUFEN0I7QUFBQSxRQUVNQyxXQUFXLEdBQUcsQ0FDWkYsb0JBRFksQ0FGcEI7QUFBQSxRQUtNRyxJQUFJLEdBQUdDLHNCQUxiO0FBRFksdUZBUU5OLElBUk0sRUFRQUksV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVYwQkUsZ0I7O0FBYTdCQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJWLGNBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgRGVmaW5pdGlvbk5vZGUgZnJvbSBcIi4uL25vZGUvZGVmaW5pdGlvblwiO1xuaW1wb3J0IERlZmluaXRpb25EZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL2RlZmluaXRpb25cIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvblJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jbGFzcyBEZWZpbml0aW9uUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gRGVmaW5pdGlvblJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25EZWZpbml0aW9uID0gbmV3IERlZmluaXRpb25EZWZpbml0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBkZWZpbml0aW9uRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IERlZmluaXRpb25Ob2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5pdGlvblJ1bGU7XG4iXX0=