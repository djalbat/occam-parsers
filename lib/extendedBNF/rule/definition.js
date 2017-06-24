'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    DefinitionNode = require('../node/definition'),
    DefinitionDefinition = require('../definition/definition');

var DefinitionRule = function (_Rule) {
  _inherits(DefinitionRule, _Rule);

  function DefinitionRule() {
    _classCallCheck(this, DefinitionRule);

    var name = 'definition',
        definitionDefinition = new DefinitionDefinition(),
        definitions = [definitionDefinition],
        Node = DefinitionNode;

    return _possibleConstructorReturn(this, (DefinitionRule.__proto__ || Object.getPrototypeOf(DefinitionRule)).call(this, name, definitions, Node));
  }

  return DefinitionRule;
}(Rule);

module.exports = DefinitionRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ydWxlL2RlZmluaXRpb24uanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJEZWZpbml0aW9uTm9kZSIsIkRlZmluaXRpb25EZWZpbml0aW9uIiwiRGVmaW5pdGlvblJ1bGUiLCJuYW1lIiwiZGVmaW5pdGlvbkRlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2QjtBQUFBLElBRU1FLHVCQUF1QkYsUUFBUSwwQkFBUixDQUY3Qjs7SUFJTUcsYzs7O0FBQ0osNEJBQWM7QUFBQTs7QUFDWixRQUFNQyxPQUFPLFlBQWI7QUFBQSxRQUNNQyx1QkFBdUIsSUFBSUgsb0JBQUosRUFEN0I7QUFBQSxRQUVNSSxjQUFjLENBQ1pELG9CQURZLENBRnBCO0FBQUEsUUFLTUUsT0FBT04sY0FMYjs7QUFEWSwySEFRTkcsSUFSTSxFQVFBRSxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVjBCUixJOztBQWE3QlMsT0FBT0MsT0FBUCxHQUFpQk4sY0FBakIiLCJmaWxlIjoiZGVmaW5pdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIERlZmluaXRpb25Ob2RlID0gcmVxdWlyZSgnLi4vbm9kZS9kZWZpbml0aW9uJyksXG4gICAgICBEZWZpbml0aW9uRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vZGVmaW5pdGlvbicpO1xuXG5jbGFzcyBEZWZpbml0aW9uUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gJ2RlZmluaXRpb24nLFxuICAgICAgICAgIGRlZmluaXRpb25EZWZpbml0aW9uID0gbmV3IERlZmluaXRpb25EZWZpbml0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBkZWZpbml0aW9uRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IERlZmluaXRpb25Ob2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5pdGlvblJ1bGU7XG4iXX0=