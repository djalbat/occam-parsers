'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ChoiceOfPartsNode = require('../node/choiceOfParts'),
    ChoiceOfPartsDefinition = require('../definition/choiceOfParts.old');

var ChoiceOfPartsRule = function (_Rule) {
  _inherits(ChoiceOfPartsRule, _Rule);

  function ChoiceOfPartsRule() {
    _classCallCheck(this, ChoiceOfPartsRule);

    var choiceOfPartsDefinition = new ChoiceOfPartsDefinition(),
        name = 'choiceOfParts',
        definitions = [choiceOfPartsDefinition],
        Node = ChoiceOfPartsNode;

    return _possibleConstructorReturn(this, (ChoiceOfPartsRule.__proto__ || Object.getPrototypeOf(ChoiceOfPartsRule)).call(this, name, definitions, Node));
  }

  return ChoiceOfPartsRule;
}(Rule);

module.exports = ChoiceOfPartsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9jaG9pY2VPZlBhcnRzLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiQ2hvaWNlT2ZQYXJ0c05vZGUiLCJDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiIsIkNob2ljZU9mUGFydHNSdWxlIiwiY2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxvQkFBb0JELFFBQVEsdUJBQVIsQ0FEMUI7QUFBQSxJQUVNRSwwQkFBMEJGLFFBQVEsaUNBQVIsQ0FGaEM7O0lBSU1HLGlCOzs7QUFDSiwrQkFBYztBQUFBOztBQUNaLFFBQU1DLDBCQUEwQixJQUFJRix1QkFBSixFQUFoQztBQUFBLFFBQ01HLE9BQU8sZUFEYjtBQUFBLFFBRU1DLGNBQWMsQ0FDWkYsdUJBRFksQ0FGcEI7QUFBQSxRQUtNRyxPQUFPTixpQkFMYjs7QUFEWSxpSUFRTkksSUFSTSxFQVFBQyxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVjZCUixJOztBQWFoQ1MsT0FBT0MsT0FBUCxHQUFpQk4saUJBQWpCIiwiZmlsZSI6ImNob2ljZU9mUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBDaG9pY2VPZlBhcnRzTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvY2hvaWNlT2ZQYXJ0cycpLFxuICAgICAgQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL2Nob2ljZU9mUGFydHMub2xkJyk7XG5cbmNsYXNzIENob2ljZU9mUGFydHNSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGNob2ljZU9mUGFydHNEZWZpbml0aW9uID0gbmV3IENob2ljZU9mUGFydHNEZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9ICdjaG9pY2VPZlBhcnRzJyxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGNob2ljZU9mUGFydHNEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gQ2hvaWNlT2ZQYXJ0c05vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaG9pY2VPZlBhcnRzUnVsZTtcbiJdfQ==