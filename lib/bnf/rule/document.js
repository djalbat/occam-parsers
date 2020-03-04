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
    DocumentNode = require('../node/document'),
    DocumentDefinition = require('../definition/document');

var DocumentRuleName = ruleNames.DocumentRuleName;

var DocumentRule = /*#__PURE__*/function (_Rule) {
  _inherits(DocumentRule, _Rule);

  function DocumentRule() {
    _classCallCheck(this, DocumentRule);

    var documentDefinition = new DocumentDefinition(),
        name = DocumentRuleName,
        definitions = [documentDefinition],
        Node = DocumentNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentRule).call(this, name, definitions, Node));
  }

  return DocumentRule;
}(Rule);

module.exports = DocumentRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwicnVsZU5hbWVzIiwiRG9jdW1lbnROb2RlIiwiRG9jdW1lbnREZWZpbml0aW9uIiwiRG9jdW1lbnRSdWxlTmFtZSIsIkRvY3VtZW50UnVsZSIsImRvY3VtZW50RGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBcEI7QUFBQSxJQUNNQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxjQUFELENBRHpCO0FBQUEsSUFFTUUsWUFBWSxHQUFHRixPQUFPLENBQUMsa0JBQUQsQ0FGNUI7QUFBQSxJQUdNRyxrQkFBa0IsR0FBR0gsT0FBTyxDQUFDLHdCQUFELENBSGxDOztJQUtRSSxnQixHQUFxQkgsUyxDQUFyQkcsZ0I7O0lBRUZDLFk7OztBQUNKLDBCQUFjO0FBQUE7O0FBQ1osUUFBTUMsa0JBQWtCLEdBQUcsSUFBSUgsa0JBQUosRUFBM0I7QUFBQSxRQUNNSSxJQUFJLEdBQUdILGdCQURiO0FBQUEsUUFFTUksV0FBVyxHQUFHLENBQ1pGLGtCQURZLENBRnBCO0FBQUEsUUFLTUcsSUFBSSxHQUFHUCxZQUxiO0FBRFkscUZBUU5LLElBUk0sRUFRQUMsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVZ3QlYsSTs7QUFhM0JXLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQk4sWUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIERvY3VtZW50Tm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvZG9jdW1lbnQnKSxcbiAgICAgIERvY3VtZW50RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vZG9jdW1lbnQnKTtcblxuY29uc3QgeyBEb2N1bWVudFJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIERvY3VtZW50UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBkb2N1bWVudERlZmluaXRpb24gPSBuZXcgRG9jdW1lbnREZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9IERvY3VtZW50UnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBkb2N1bWVudERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBEb2N1bWVudE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEb2N1bWVudFJ1bGU7XG4iXX0=