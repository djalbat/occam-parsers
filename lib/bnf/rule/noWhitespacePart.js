'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    NoWhitespacePartNode = require('../node/noWhitespacePart'),
    NoWhitespacePartDefinition = require('../definition/noWhitespacePart');

var NoWhitespacePartRuleName = ruleNames.NoWhitespacePartRuleName;

var NoWhitespacePartRule = function (_Rule) {
  _inherits(NoWhitespacePartRule, _Rule);

  function NoWhitespacePartRule() {
    _classCallCheck(this, NoWhitespacePartRule);

    var noWhitespacePartDefinition = new NoWhitespacePartDefinition(),
        name = NoWhitespacePartRuleName,
        definitions = [noWhitespacePartDefinition],
        Node = NoWhitespacePartNode;

    return _possibleConstructorReturn(this, (NoWhitespacePartRule.__proto__ || Object.getPrototypeOf(NoWhitespacePartRule)).call(this, name, definitions, Node));
  }

  return NoWhitespacePartRule;
}(Rule);

module.exports = NoWhitespacePartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9ub1doaXRlc3BhY2VQYXJ0LmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwicnVsZU5hbWVzIiwiTm9XaGl0ZXNwYWNlUGFydE5vZGUiLCJOb1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiIsIk5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZSIsIk5vV2hpdGVzcGFjZVBhcnRSdWxlIiwibm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNRSx1QkFBdUJGLFFBQVEsMEJBQVIsQ0FGN0I7QUFBQSxJQUdNRyw2QkFBNkJILFFBQVEsZ0NBQVIsQ0FIbkM7O0lBS1FJLHdCLEdBQTZCSCxTLENBQTdCRyx3Qjs7SUFFRkMsb0I7OztBQUNKLGtDQUFjO0FBQUE7O0FBQ1osUUFBTUMsNkJBQTZCLElBQUlILDBCQUFKLEVBQW5DO0FBQUEsUUFDTUksT0FBT0gsd0JBRGI7QUFBQSxRQUVNSSxjQUFjLENBQ1pGLDBCQURZLENBRnBCO0FBQUEsUUFLTUcsT0FBT1Asb0JBTGI7O0FBRFksdUlBUU5LLElBUk0sRUFRQUMsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVZnQ1YsSTs7QUFhbkNXLE9BQU9DLE9BQVAsR0FBaUJOLG9CQUFqQiIsImZpbGUiOiJub1doaXRlc3BhY2VQYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBOb1doaXRlc3BhY2VQYXJ0Tm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvbm9XaGl0ZXNwYWNlUGFydCcpLFxuICAgICAgTm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL25vV2hpdGVzcGFjZVBhcnQnKTtcblxuY29uc3QgeyBOb1doaXRlc3BhY2VQYXJ0UnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgTm9XaGl0ZXNwYWNlUGFydFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24gPSBuZXcgTm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gTm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOb1doaXRlc3BhY2VQYXJ0Tm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9XaGl0ZXNwYWNlUGFydFJ1bGU7XG4iXX0=