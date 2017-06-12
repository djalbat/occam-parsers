'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    DefinitionsDefinition = require('../definition/definitions'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var DefinitionsProduction = function (_Production) {
  _inherits(DefinitionsProduction, _Production);

  function DefinitionsProduction() {
    _classCallCheck(this, DefinitionsProduction);

    var definitionsDefinition = new DefinitionsDefinition(),
        name = 'definitions',
        definitions = [definitionsDefinition],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (DefinitionsProduction.__proto__ || Object.getPrototypeOf(DefinitionsProduction)).call(this, name, definitions, Node));
  }

  return DefinitionsProduction;
}(Production);

module.exports = DefinitionsProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9kZWZpbml0aW9ucy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIkRlZmluaXRpb25zRGVmaW5pdGlvbiIsIk5vblRlcm1pbmFsTm9kZSIsIkRlZmluaXRpb25zUHJvZHVjdGlvbiIsImRlZmluaXRpb25zRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyx3QkFBd0JELFFBQVEsMkJBQVIsQ0FEOUI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEsK0JBQVIsQ0FGeEI7O0lBSU1HLHFCOzs7QUFDSixtQ0FBYztBQUFBOztBQUNaLFFBQU1DLHdCQUF3QixJQUFJSCxxQkFBSixFQUE5QjtBQUFBLFFBQ01JLE9BQU8sYUFEYjtBQUFBLFFBRU1DLGNBQWMsQ0FDWkYscUJBRFksQ0FGcEI7QUFBQSxRQUtNRyxPQUFPTCxlQUxiOztBQURZLHlJQVFORyxJQVJNLEVBUUFDLFdBUkEsRUFRYUMsSUFSYjtBQVNiOzs7RUFWaUNSLFU7O0FBYXBDUyxPQUFPQyxPQUFQLEdBQWlCTixxQkFBakIiLCJmaWxlIjoiZGVmaW5pdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBEZWZpbml0aW9uc0RlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL2RlZmluaXRpb25zJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBEZWZpbml0aW9uc1Byb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNEZWZpbml0aW9uID0gbmV3IERlZmluaXRpb25zRGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5hbWUgPSAnZGVmaW5pdGlvbnMnLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZGVmaW5pdGlvbnNEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5pdGlvbnNQcm9kdWN0aW9uO1xuIl19