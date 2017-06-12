'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    DefinitionDefinition = require('../definition/definition'),
    NonTerminalNode = require('../../common/node/nonTerminal');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9kZWZpbml0aW9uLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiRGVmaW5pdGlvbkRlZmluaXRpb24iLCJOb25UZXJtaW5hbE5vZGUiLCJEZWZpbml0aW9uUHJvZHVjdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9uRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLHVCQUF1QkQsUUFBUSwwQkFBUixDQUQ3QjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSwrQkFBUixDQUZ4Qjs7SUFJTUcsb0I7OztBQUNKLGtDQUFjO0FBQUE7O0FBQ1osUUFBTUMsT0FBTyxZQUFiO0FBQUEsUUFDTUMsdUJBQXVCLElBQUlKLG9CQUFKLEVBRDdCO0FBQUEsUUFFTUssY0FBYyxDQUNaRCxvQkFEWSxDQUZwQjtBQUFBLFFBS01FLE9BQU9MLGVBTGI7O0FBRFksdUlBUU5FLElBUk0sRUFRQUUsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVZnQ1IsVTs7QUFhbkNTLE9BQU9DLE9BQVAsR0FBaUJOLG9CQUFqQiIsImZpbGUiOiJkZWZpbml0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgRGVmaW5pdGlvbkRlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL2RlZmluaXRpb24nKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIERlZmluaXRpb25Qcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSAnZGVmaW5pdGlvbicsXG4gICAgICAgICAgZGVmaW5pdGlvbkRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbkRlZmluaXRpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGRlZmluaXRpb25EZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5pdGlvblByb2R1Y3Rpb247XG4iXX0=