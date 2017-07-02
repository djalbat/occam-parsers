'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    NoWhitespacePartNode = require('../node/noWhitespacePart'),
    NoWhitespacePartDefinition = require('../definition/noWhitespacePart');

var NoWhitespacePartRule = function (_Rule) {
  _inherits(NoWhitespacePartRule, _Rule);

  function NoWhitespacePartRule() {
    _classCallCheck(this, NoWhitespacePartRule);

    var noWhitespacePartDefinition = new NoWhitespacePartDefinition(),
        name = 'noWhitespacePart',
        noWhitespacePart = [noWhitespacePartDefinition],
        Node = NoWhitespacePartNode;

    return _possibleConstructorReturn(this, (NoWhitespacePartRule.__proto__ || Object.getPrototypeOf(NoWhitespacePartRule)).call(this, name, noWhitespacePart, Node));
  }

  return NoWhitespacePartRule;
}(Rule);

module.exports = NoWhitespacePartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9ub1doaXRlc3BhY2VQYXJ0LmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiTm9XaGl0ZXNwYWNlUGFydE5vZGUiLCJOb1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiIsIk5vV2hpdGVzcGFjZVBhcnRSdWxlIiwibm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24iLCJuYW1lIiwibm9XaGl0ZXNwYWNlUGFydCIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLHVCQUF1QkQsUUFBUSwwQkFBUixDQUQ3QjtBQUFBLElBRU1FLDZCQUE2QkYsUUFBUSxnQ0FBUixDQUZuQzs7SUFJTUcsb0I7OztBQUNKLGtDQUFjO0FBQUE7O0FBQ1osUUFBTUMsNkJBQTZCLElBQUlGLDBCQUFKLEVBQW5DO0FBQUEsUUFDTUcsT0FBTyxrQkFEYjtBQUFBLFFBRU1DLG1CQUFtQixDQUNqQkYsMEJBRGlCLENBRnpCO0FBQUEsUUFLTUcsT0FBT04sb0JBTGI7O0FBRFksdUlBUU5JLElBUk0sRUFRQUMsZ0JBUkEsRUFRa0JDLElBUmxCO0FBU2I7OztFQVZnQ1IsSTs7QUFhbkNTLE9BQU9DLE9BQVAsR0FBaUJOLG9CQUFqQiIsImZpbGUiOiJub1doaXRlc3BhY2VQYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgTm9XaGl0ZXNwYWNlUGFydE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL25vV2hpdGVzcGFjZVBhcnQnKSxcbiAgICAgIE5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9ub1doaXRlc3BhY2VQYXJ0Jyk7XG5cbmNsYXNzIE5vV2hpdGVzcGFjZVBhcnRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uID0gbmV3IE5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9ICdub1doaXRlc3BhY2VQYXJ0JyxcbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0ID0gW1xuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOb1doaXRlc3BhY2VQYXJ0Tm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIG5vV2hpdGVzcGFjZVBhcnQsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb1doaXRlc3BhY2VQYXJ0UnVsZTtcbiJdfQ==