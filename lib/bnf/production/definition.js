'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    DefinitionDefinition = require('../definition/definition');

var DefinitionProduction = function (_Production) {
  _inherits(DefinitionProduction, _Production);

  function DefinitionProduction() {
    _classCallCheck(this, DefinitionProduction);

    var name = 'definition',
        definitionDefinition = new DefinitionDefinition(),
        definitions = [definitionDefinition],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (DefinitionProduction.__proto__ || Object.getPrototypeOf(DefinitionProduction)).call(this, name, definitions, Node));
  }

  return DefinitionProduction;
}(Production);

module.exports = DefinitionProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9kZWZpbml0aW9uLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiRGVmaW5pdGlvbkRlZmluaXRpb24iLCJEZWZpbml0aW9uUHJvZHVjdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9uRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSwrQkFBUixDQUR4QjtBQUFBLElBRU1FLHVCQUF1QkYsUUFBUSwwQkFBUixDQUY3Qjs7SUFJTUcsb0I7OztBQUNKLGtDQUFjO0FBQUE7O0FBQ1osUUFBTUMsT0FBTyxZQUFiO0FBQUEsUUFDTUMsdUJBQXVCLElBQUlILG9CQUFKLEVBRDdCO0FBQUEsUUFFTUksY0FBYyxDQUNaRCxvQkFEWSxDQUZwQjtBQUFBLFFBS01FLE9BQU9OLGVBTGI7O0FBRFksdUlBUU5HLElBUk0sRUFRQUUsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVZnQ1IsVTs7QUFhbkNTLE9BQU9DLE9BQVAsR0FBaUJOLG9CQUFqQiIsImZpbGUiOiJkZWZpbml0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIERlZmluaXRpb25EZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9kZWZpbml0aW9uJyk7XG5cbmNsYXNzIERlZmluaXRpb25Qcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSAnZGVmaW5pdGlvbicsXG4gICAgICAgICAgZGVmaW5pdGlvbkRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbkRlZmluaXRpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGRlZmluaXRpb25EZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5pdGlvblByb2R1Y3Rpb247XG4iXX0=