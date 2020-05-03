"use strict";

var _rule = _interopRequireDefault(require("../rule"));

var _document = _interopRequireDefault(require("../node/document"));

var _document2 = _interopRequireDefault(require("../definition/document"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DocumentRule = /*#__PURE__*/function (_Rule) {
  _inherits(DocumentRule, _Rule);

  function DocumentRule() {
    _classCallCheck(this, DocumentRule);

    var documentDefinition = new _document2["default"](),
        name = _ruleNames.DocumentRuleName,
        definitions = [documentDefinition],
        Node = _document["default"];
    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentRule).call(this, name, definitions, Node));
  }

  return DocumentRule;
}(_rule["default"]);

module.exports = DocumentRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LmpzIl0sIm5hbWVzIjpbIkRvY3VtZW50UnVsZSIsImRvY3VtZW50RGVmaW5pdGlvbiIsIkRvY3VtZW50RGVmaW5pdGlvbiIsIm5hbWUiLCJEb2N1bWVudFJ1bGVOYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwiRG9jdW1lbnROb2RlIiwiUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsWTs7O0FBQ0osMEJBQWM7QUFBQTs7QUFDWixRQUFNQyxrQkFBa0IsR0FBRyxJQUFJQyxxQkFBSixFQUEzQjtBQUFBLFFBQ01DLElBQUksR0FBR0MsMkJBRGI7QUFBQSxRQUVNQyxXQUFXLEdBQUcsQ0FDWkosa0JBRFksQ0FGcEI7QUFBQSxRQUtNSyxJQUFJLEdBQUdDLG9CQUxiO0FBRFkscUZBUU5KLElBUk0sRUFRQUUsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVZ3QkUsZ0I7O0FBYTNCQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJWLFlBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgRG9jdW1lbnROb2RlIGZyb20gXCIuLi9ub2RlL2RvY3VtZW50XCI7XG5pbXBvcnQgRG9jdW1lbnREZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL2RvY3VtZW50XCI7XG5cbmltcG9ydCB7IERvY3VtZW50UnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNsYXNzIERvY3VtZW50UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBkb2N1bWVudERlZmluaXRpb24gPSBuZXcgRG9jdW1lbnREZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9IERvY3VtZW50UnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBkb2N1bWVudERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBEb2N1bWVudE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEb2N1bWVudFJ1bGU7XG4iXX0=