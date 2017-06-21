'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    DefinitionsNode = require('../node/definitions'),
    DefinitionsDefinition = require('../definition/definitions');

var DefinitionsProduction = function (_Production) {
  _inherits(DefinitionsProduction, _Production);

  function DefinitionsProduction() {
    _classCallCheck(this, DefinitionsProduction);

    var definitionsDefinition = new DefinitionsDefinition(),
        name = 'definitions',
        definitions = [definitionsDefinition],
        Node = DefinitionsNode;

    return _possibleConstructorReturn(this, (DefinitionsProduction.__proto__ || Object.getPrototypeOf(DefinitionsProduction)).call(this, name, definitions, Node));
  }

  return DefinitionsProduction;
}(Production);

module.exports = DefinitionsProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9wcm9kdWN0aW9uL2RlZmluaXRpb25zLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiRGVmaW5pdGlvbnNOb2RlIiwiRGVmaW5pdGlvbnNEZWZpbml0aW9uIiwiRGVmaW5pdGlvbnNQcm9kdWN0aW9uIiwiZGVmaW5pdGlvbnNEZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSxxQkFBUixDQUR4QjtBQUFBLElBRU1FLHdCQUF3QkYsUUFBUSwyQkFBUixDQUY5Qjs7SUFJTUcscUI7OztBQUNKLG1DQUFjO0FBQUE7O0FBQ1osUUFBTUMsd0JBQXdCLElBQUlGLHFCQUFKLEVBQTlCO0FBQUEsUUFDTUcsT0FBTyxhQURiO0FBQUEsUUFFTUMsY0FBYyxDQUNaRixxQkFEWSxDQUZwQjtBQUFBLFFBS01HLE9BQU9OLGVBTGI7O0FBRFkseUlBUU5JLElBUk0sRUFRQUMsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVZpQ1IsVTs7QUFhcENTLE9BQU9DLE9BQVAsR0FBaUJOLHFCQUFqQiIsImZpbGUiOiJkZWZpbml0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIERlZmluaXRpb25zTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvZGVmaW5pdGlvbnMnKSxcbiAgICAgIERlZmluaXRpb25zRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vZGVmaW5pdGlvbnMnKTtcblxuY2xhc3MgRGVmaW5pdGlvbnNQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zRGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uc0RlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gJ2RlZmluaXRpb25zJyxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGRlZmluaXRpb25zRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IERlZmluaXRpb25zTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmluaXRpb25zUHJvZHVjdGlvbjtcbiJdfQ==