'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NoWhitespacePartNode = require('../node/noWhitespacePart'),
    NoWhitespacePartDefinition = require('../definition/noWhitespacePart');

var NoWhitespacePartProduction = function (_Production) {
  _inherits(NoWhitespacePartProduction, _Production);

  function NoWhitespacePartProduction() {
    _classCallCheck(this, NoWhitespacePartProduction);

    var noWhitespacePartDefinition = new NoWhitespacePartDefinition(),
        name = 'noWhitespacePart',
        noWhitespacePart = [noWhitespacePartDefinition],
        Node = NoWhitespacePartNode;

    return _possibleConstructorReturn(this, (NoWhitespacePartProduction.__proto__ || Object.getPrototypeOf(NoWhitespacePartProduction)).call(this, name, noWhitespacePart, Node));
  }

  return NoWhitespacePartProduction;
}(Production);

module.exports = NoWhitespacePartProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9wcm9kdWN0aW9uL25vV2hpdGVzcGFjZVBhcnQuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJOb1doaXRlc3BhY2VQYXJ0Tm9kZSIsIk5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uIiwiTm9XaGl0ZXNwYWNlUGFydFByb2R1Y3Rpb24iLCJub1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiIsIm5hbWUiLCJub1doaXRlc3BhY2VQYXJ0IiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLHVCQUF1QkQsUUFBUSwwQkFBUixDQUQ3QjtBQUFBLElBRU1FLDZCQUE2QkYsUUFBUSxnQ0FBUixDQUZuQzs7SUFJTUcsMEI7OztBQUNKLHdDQUFjO0FBQUE7O0FBQ1osUUFBTUMsNkJBQTZCLElBQUlGLDBCQUFKLEVBQW5DO0FBQUEsUUFDTUcsT0FBTyxrQkFEYjtBQUFBLFFBRU1DLG1CQUFtQixDQUNqQkYsMEJBRGlCLENBRnpCO0FBQUEsUUFLTUcsT0FBT04sb0JBTGI7O0FBRFksbUpBUU5JLElBUk0sRUFRQUMsZ0JBUkEsRUFRa0JDLElBUmxCO0FBU2I7OztFQVZzQ1IsVTs7QUFhekNTLE9BQU9DLE9BQVAsR0FBaUJOLDBCQUFqQiIsImZpbGUiOiJub1doaXRlc3BhY2VQYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgTm9XaGl0ZXNwYWNlUGFydE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL25vV2hpdGVzcGFjZVBhcnQnKSxcbiAgICAgIE5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9ub1doaXRlc3BhY2VQYXJ0Jyk7XG5cbmNsYXNzIE5vV2hpdGVzcGFjZVBhcnRQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uID0gbmV3IE5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9ICdub1doaXRlc3BhY2VQYXJ0JyxcbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0ID0gW1xuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOb1doaXRlc3BhY2VQYXJ0Tm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIG5vV2hpdGVzcGFjZVBhcnQsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb1doaXRlc3BhY2VQYXJ0UHJvZHVjdGlvbjtcbiJdfQ==