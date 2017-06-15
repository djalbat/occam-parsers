'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    VerticalSpaceNode = require('../node/verticalSpace'),
    VerticalSpaceDefinition = require('../definition/verticalSpace');

var VerticalSpaceProduction = function (_Production) {
  _inherits(VerticalSpaceProduction, _Production);

  function VerticalSpaceProduction() {
    _classCallCheck(this, VerticalSpaceProduction);

    var name = 'verticalSpace',
        verticalSpaceDefinition = new VerticalSpaceDefinition(),
        definitions = [verticalSpaceDefinition],
        Node = VerticalSpaceNode;

    return _possibleConstructorReturn(this, (VerticalSpaceProduction.__proto__ || Object.getPrototypeOf(VerticalSpaceProduction)).call(this, name, definitions, Node));
  }

  return VerticalSpaceProduction;
}(Production);

module.exports = VerticalSpaceProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi92ZXJ0aWNhbFNwYWNlLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiVmVydGljYWxTcGFjZU5vZGUiLCJWZXJ0aWNhbFNwYWNlRGVmaW5pdGlvbiIsIlZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uIiwibmFtZSIsInZlcnRpY2FsU3BhY2VEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsb0JBQW9CRCxRQUFRLHVCQUFSLENBRDFCO0FBQUEsSUFFTUUsMEJBQTBCRixRQUFRLDZCQUFSLENBRmhDOztJQUlNRyx1Qjs7O0FBQ0oscUNBQWM7QUFBQTs7QUFDWixRQUFNQyxPQUFPLGVBQWI7QUFBQSxRQUNNQywwQkFBMEIsSUFBSUgsdUJBQUosRUFEaEM7QUFBQSxRQUVNSSxjQUFjLENBQ1pELHVCQURZLENBRnBCO0FBQUEsUUFLTUUsT0FBT04saUJBTGI7O0FBRFksNklBUU5HLElBUk0sRUFRQUUsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVZtQ1IsVTs7QUFhdENTLE9BQU9DLE9BQVAsR0FBaUJOLHVCQUFqQiIsImZpbGUiOiJ2ZXJ0aWNhbFNwYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgVmVydGljYWxTcGFjZU5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3ZlcnRpY2FsU3BhY2UnKSxcbiAgICAgIFZlcnRpY2FsU3BhY2VEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi92ZXJ0aWNhbFNwYWNlJyk7XG5cbmNsYXNzIFZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSAndmVydGljYWxTcGFjZScsXG4gICAgICAgICAgdmVydGljYWxTcGFjZURlZmluaXRpb24gPSBuZXcgVmVydGljYWxTcGFjZURlZmluaXRpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHZlcnRpY2FsU3BhY2VEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gVmVydGljYWxTcGFjZU5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbjtcbiJdfQ==