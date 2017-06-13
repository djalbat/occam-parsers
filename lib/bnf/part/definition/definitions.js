'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    ProductionNamePart = require('../../common/part/productionName');

var DefinitionsDefinition = function (_Definition) {
  _inherits(DefinitionsDefinition, _Definition);

  function DefinitionsDefinition() {
    _classCallCheck(this, DefinitionsDefinition);

    var noWhitespace = false,
        definitionProductionName = 'definition',
        definitionProductionNamePart = new ProductionNamePart(definitionProductionName, noWhitespace),
        parts = [definitionProductionNamePart];

    return _possibleConstructorReturn(this, (DefinitionsDefinition.__proto__ || Object.getPrototypeOf(DefinitionsDefinition)).call(this, parts));
  }

  return DefinitionsDefinition;
}(Definition);

module.exports = DefinitionsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9kZWZpbml0aW9uL2RlZmluaXRpb25zLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiUHJvZHVjdGlvbk5hbWVQYXJ0IiwiRGVmaW5pdGlvbnNEZWZpbml0aW9uIiwibm9XaGl0ZXNwYWNlIiwiZGVmaW5pdGlvblByb2R1Y3Rpb25OYW1lIiwiZGVmaW5pdGlvblByb2R1Y3Rpb25OYW1lUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLGtDQUFSLENBRDNCOztJQUdNRSxxQjs7O0FBQ0osbUNBQWM7QUFBQTs7QUFDWixRQUFNQyxlQUFlLEtBQXJCO0FBQUEsUUFDTUMsMkJBQTJCLFlBRGpDO0FBQUEsUUFFTUMsK0JBQStCLElBQUlKLGtCQUFKLENBQXVCRyx3QkFBdkIsRUFBaURELFlBQWpELENBRnJDO0FBQUEsUUFHTUcsUUFBUSxDQUNORCw0QkFETSxDQUhkOztBQURZLHlJQVFOQyxLQVJNO0FBU2I7OztFQVZpQ1AsVTs7QUFhcENRLE9BQU9DLE9BQVAsR0FBaUJOLHFCQUFqQiIsImZpbGUiOiJkZWZpbml0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIERlZmluaXRpb25zRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBkZWZpbml0aW9uUHJvZHVjdGlvbk5hbWUgPSAnZGVmaW5pdGlvbicsXG4gICAgICAgICAgZGVmaW5pdGlvblByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQoZGVmaW5pdGlvblByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgZGVmaW5pdGlvblByb2R1Y3Rpb25OYW1lUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZWZpbml0aW9uc0RlZmluaXRpb247XG4iXX0=