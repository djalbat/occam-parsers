'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    DefinitionNode = require('../node/definition'),
    DefinitionDefinition = require('../definition/definition');

var DefinitionProduction = function (_Production) {
  _inherits(DefinitionProduction, _Production);

  function DefinitionProduction() {
    _classCallCheck(this, DefinitionProduction);

    var name = 'definition',
        definitionDefinition = new DefinitionDefinition(),
        definitions = [definitionDefinition],
        Node = DefinitionNode;

    return _possibleConstructorReturn(this, (DefinitionProduction.__proto__ || Object.getPrototypeOf(DefinitionProduction)).call(this, name, definitions, Node));
  }

  return DefinitionProduction;
}(Production);

module.exports = DefinitionProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9kZWZpbml0aW9uLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiRGVmaW5pdGlvbk5vZGUiLCJEZWZpbml0aW9uRGVmaW5pdGlvbiIsIkRlZmluaXRpb25Qcm9kdWN0aW9uIiwibmFtZSIsImRlZmluaXRpb25EZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBRHZCO0FBQUEsSUFFTUUsdUJBQXVCRixRQUFRLDBCQUFSLENBRjdCOztJQUlNRyxvQjs7O0FBQ0osa0NBQWM7QUFBQTs7QUFDWixRQUFNQyxPQUFPLFlBQWI7QUFBQSxRQUNNQyx1QkFBdUIsSUFBSUgsb0JBQUosRUFEN0I7QUFBQSxRQUVNSSxjQUFjLENBQ1pELG9CQURZLENBRnBCO0FBQUEsUUFLTUUsT0FBT04sY0FMYjs7QUFEWSx1SUFRTkcsSUFSTSxFQVFBRSxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVmdDUixVOztBQWFuQ1MsT0FBT0MsT0FBUCxHQUFpQk4sb0JBQWpCIiwiZmlsZSI6ImRlZmluaXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBEZWZpbml0aW9uTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvZGVmaW5pdGlvbicpLFxuICAgICAgRGVmaW5pdGlvbkRlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL2RlZmluaXRpb24nKTtcblxuY2xhc3MgRGVmaW5pdGlvblByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9ICdkZWZpbml0aW9uJyxcbiAgICAgICAgICBkZWZpbml0aW9uRGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uRGVmaW5pdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZGVmaW5pdGlvbkRlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBEZWZpbml0aW9uTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmluaXRpb25Qcm9kdWN0aW9uO1xuIl19