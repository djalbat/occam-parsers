"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _definition = _interopRequireDefault(require("../definition"));

var _significantTokenType = _interopRequireDefault(require("../part/terminal/significantTokenType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var nameType = _occamLexers.types.nameType;

var NameDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(NameDefinition, _Definition);

  function NameDefinition() {
    _classCallCheck(this, NameDefinition);

    var nameSignificantTokenType = nameType,
        ///
    nameSignificantTokenTypePart = new _significantTokenType["default"](nameSignificantTokenType),
        parts = [nameSignificantTokenTypePart];
    return _possibleConstructorReturn(this, _getPrototypeOf(NameDefinition).call(this, parts));
  }

  return NameDefinition;
}(_definition["default"]);

exports["default"] = NameDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hbWUuanMiXSwibmFtZXMiOlsibmFtZVR5cGUiLCJ0eXBlcyIsIk5hbWVEZWZpbml0aW9uIiwibmFtZVNpZ25pZmljYW50VG9rZW5UeXBlIiwibmFtZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsIlNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsInBhcnRzIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLFEsR0FBYUMsa0IsQ0FBYkQsUTs7SUFFYUUsYzs7O0FBQ25CLDRCQUFjO0FBQUE7O0FBQ1osUUFBTUMsd0JBQXdCLEdBQUdILFFBQWpDO0FBQUEsUUFBNEM7QUFDdENJLElBQUFBLDRCQUE0QixHQUFHLElBQUlDLGdDQUFKLENBQTZCRix3QkFBN0IsQ0FEckM7QUFBQSxRQUVNRyxLQUFLLEdBQUcsQ0FDTkYsNEJBRE0sQ0FGZDtBQURZLHVGQU9ORSxLQVBNO0FBUWI7OztFQVR5Q0Msc0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL3NpZ25pZmljYW50VG9rZW5UeXBlXCI7XG5cbmNvbnN0IHsgbmFtZVR5cGUgfSA9IHR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYW1lRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGUgPSBuYW1lVHlwZSwgIC8vL1xuICAgICAgICAgIG5hbWVTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0KG5hbWVTaWduaWZpY2FudFRva2VuVHlwZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG4iXX0=