'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    DocumentNode = require('../node/document'),
    DocumentDefinition = require('../definition/document');

var DocumentRuleName = ruleNames.DocumentRuleName;

var DocumentRule = function (_Rule) {
  _inherits(DocumentRule, _Rule);

  function DocumentRule() {
    _classCallCheck(this, DocumentRule);

    var documentDefinition = new DocumentDefinition(),
        name = DocumentRuleName,
        definitions = [documentDefinition],
        Node = DocumentNode;

    return _possibleConstructorReturn(this, (DocumentRule.__proto__ || Object.getPrototypeOf(DocumentRule)).call(this, name, definitions, Node));
  }

  return DocumentRule;
}(Rule);

module.exports = DocumentRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIkRvY3VtZW50Tm9kZSIsIkRvY3VtZW50RGVmaW5pdGlvbiIsIkRvY3VtZW50UnVsZU5hbWUiLCJEb2N1bWVudFJ1bGUiLCJkb2N1bWVudERlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNRSxlQUFlRixRQUFRLGtCQUFSLENBRnJCO0FBQUEsSUFHTUcscUJBQXFCSCxRQUFRLHdCQUFSLENBSDNCOztJQUtRSSxnQixHQUFxQkgsUyxDQUFyQkcsZ0I7O0lBRUZDLFk7OztBQUNKLDBCQUFjO0FBQUE7O0FBQ1osUUFBTUMscUJBQXFCLElBQUlILGtCQUFKLEVBQTNCO0FBQUEsUUFDTUksT0FBT0gsZ0JBRGI7QUFBQSxRQUVNSSxjQUFjLENBQ1pGLGtCQURZLENBRnBCO0FBQUEsUUFLTUcsT0FBT1AsWUFMYjs7QUFEWSx1SEFRTkssSUFSTSxFQVFBQyxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVndCVixJOztBQWEzQlcsT0FBT0MsT0FBUCxHQUFpQk4sWUFBakIiLCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIERvY3VtZW50Tm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvZG9jdW1lbnQnKSxcbiAgICAgIERvY3VtZW50RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vZG9jdW1lbnQnKTtcblxuY29uc3QgeyBEb2N1bWVudFJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIERvY3VtZW50UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBkb2N1bWVudERlZmluaXRpb24gPSBuZXcgRG9jdW1lbnREZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9IERvY3VtZW50UnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBkb2N1bWVudERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBEb2N1bWVudE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEb2N1bWVudFJ1bGU7XG4iXX0=