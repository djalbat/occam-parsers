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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9wcm9kdWN0aW9uL2RlZmluaXRpb24uanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJEZWZpbml0aW9uTm9kZSIsIkRlZmluaXRpb25EZWZpbml0aW9uIiwiRGVmaW5pdGlvblByb2R1Y3Rpb24iLCJuYW1lIiwiZGVmaW5pdGlvbkRlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSx1QkFBdUJGLFFBQVEsMEJBQVIsQ0FGN0I7O0lBSU1HLG9COzs7QUFDSixrQ0FBYztBQUFBOztBQUNaLFFBQU1DLE9BQU8sWUFBYjtBQUFBLFFBQ01DLHVCQUF1QixJQUFJSCxvQkFBSixFQUQ3QjtBQUFBLFFBRU1JLGNBQWMsQ0FDWkQsb0JBRFksQ0FGcEI7QUFBQSxRQUtNRSxPQUFPTixjQUxiOztBQURZLHVJQVFORyxJQVJNLEVBUUFFLFdBUkEsRUFRYUMsSUFSYjtBQVNiOzs7RUFWZ0NSLFU7O0FBYW5DUyxPQUFPQyxPQUFQLEdBQWlCTixvQkFBakIiLCJmaWxlIjoiZGVmaW5pdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIERlZmluaXRpb25Ob2RlID0gcmVxdWlyZSgnLi4vbm9kZS9kZWZpbml0aW9uJyksXG4gICAgICBEZWZpbml0aW9uRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vZGVmaW5pdGlvbicpO1xuXG5jbGFzcyBEZWZpbml0aW9uUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gJ2RlZmluaXRpb24nLFxuICAgICAgICAgIGRlZmluaXRpb25EZWZpbml0aW9uID0gbmV3IERlZmluaXRpb25EZWZpbml0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBkZWZpbml0aW9uRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IERlZmluaXRpb25Ob2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5pdGlvblByb2R1Y3Rpb247XG4iXX0=