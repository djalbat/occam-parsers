'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    ProductionDefinition = require('../definition/production'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var ProductionProduction = function (_Production) {
  _inherits(ProductionProduction, _Production);

  function ProductionProduction() {
    _classCallCheck(this, ProductionProduction);

    var productionDefinition = new ProductionDefinition(),
        name = 'production',
        definitions = [productionDefinition],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (ProductionProduction.__proto__ || Object.getPrototypeOf(ProductionProduction)).call(this, name, definitions, Node));
  }

  return ProductionProduction;
}(Production);

module.exports = ProductionProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiUHJvZHVjdGlvbkRlZmluaXRpb24iLCJOb25UZXJtaW5hbE5vZGUiLCJQcm9kdWN0aW9uUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25EZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLHVCQUF1QkQsUUFBUSwwQkFBUixDQUQ3QjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSwrQkFBUixDQUZ4Qjs7SUFJTUcsb0I7OztBQUNKLGtDQUFjO0FBQUE7O0FBQ1osUUFBTUMsdUJBQXVCLElBQUlILG9CQUFKLEVBQTdCO0FBQUEsUUFDTUksT0FBTyxZQURiO0FBQUEsUUFFTUMsY0FBYyxDQUNaRixvQkFEWSxDQUZwQjtBQUFBLFFBS01HLE9BQU9MLGVBTGI7O0FBRFksdUlBUU5HLElBUk0sRUFRQUMsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVZnQ1IsVTs7QUFhbkNTLE9BQU9DLE9BQVAsR0FBaUJOLG9CQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgUHJvZHVjdGlvbkRlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb25Qcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25EZWZpbml0aW9uID0gbmV3IFByb2R1Y3Rpb25EZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9ICdwcm9kdWN0aW9uJyxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHByb2R1Y3Rpb25EZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvblByb2R1Y3Rpb247XG4iXX0=