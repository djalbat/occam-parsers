'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    VerticalSpaceDefinition = require('../definition/verticalSpace');

var VerticalSpaceProduction = function (_Production) {
  _inherits(VerticalSpaceProduction, _Production);

  function VerticalSpaceProduction() {
    _classCallCheck(this, VerticalSpaceProduction);

    var name = 'verticalSpace',
        verticalSpaceDefinition = new VerticalSpaceDefinition(),
        definitions = [verticalSpaceDefinition],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (VerticalSpaceProduction.__proto__ || Object.getPrototypeOf(VerticalSpaceProduction)).call(this, name, definitions, Node));
  }

  return VerticalSpaceProduction;
}(Production);

module.exports = VerticalSpaceProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi92ZXJ0aWNhbFNwYWNlLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiVmVydGljYWxTcGFjZURlZmluaXRpb24iLCJWZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbiIsIm5hbWUiLCJ2ZXJ0aWNhbFNwYWNlRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSwrQkFBUixDQUR4QjtBQUFBLElBRU1FLDBCQUEwQkYsUUFBUSw2QkFBUixDQUZoQzs7SUFJTUcsdUI7OztBQUNKLHFDQUFjO0FBQUE7O0FBQ1osUUFBTUMsT0FBTyxlQUFiO0FBQUEsUUFDTUMsMEJBQTBCLElBQUlILHVCQUFKLEVBRGhDO0FBQUEsUUFFTUksY0FBYyxDQUNaRCx1QkFEWSxDQUZwQjtBQUFBLFFBS01FLE9BQU9OLGVBTGI7O0FBRFksNklBUU5HLElBUk0sRUFRQUUsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVZtQ1IsVTs7QUFhdENTLE9BQU9DLE9BQVAsR0FBaUJOLHVCQUFqQiIsImZpbGUiOiJ2ZXJ0aWNhbFNwYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIFZlcnRpY2FsU3BhY2VEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi92ZXJ0aWNhbFNwYWNlJyk7XG5cbmNsYXNzIFZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSAndmVydGljYWxTcGFjZScsXG4gICAgICAgICAgdmVydGljYWxTcGFjZURlZmluaXRpb24gPSBuZXcgVmVydGljYWxTcGFjZURlZmluaXRpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHZlcnRpY2FsU3BhY2VEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxTcGFjZVByb2R1Y3Rpb247XG4iXX0=