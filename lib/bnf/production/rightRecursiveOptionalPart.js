'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    EpsilonDefinition = require('../definition/epsilon'),
    RightRecursiveOptionalPartDefinition = require('../definition/rightRecursiveOptionalPart');

var RightRecursiveOptionalPartProduction = function (_Production) {
  _inherits(RightRecursiveOptionalPartProduction, _Production);

  function RightRecursiveOptionalPartProduction() {
    _classCallCheck(this, RightRecursiveOptionalPartProduction);

    var rightRecursiveOptionalPartDefinition = new RightRecursiveOptionalPartDefinition(),
        epsilonDefinition = new EpsilonDefinition(),
        name = 'rightRecursiveOptionalPart',
        definitions = [rightRecursiveOptionalPartDefinition, epsilonDefinition],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (RightRecursiveOptionalPartProduction.__proto__ || Object.getPrototypeOf(RightRecursiveOptionalPartProduction)).call(this, name, definitions, Node));
  }

  return RightRecursiveOptionalPartProduction;
}(Production);

module.exports = RightRecursiveOptionalPartProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9yaWdodFJlY3Vyc2l2ZU9wdGlvbmFsUGFydC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIkVwc2lsb25EZWZpbml0aW9uIiwiUmlnaHRSZWN1cnNpdmVPcHRpb25hbFBhcnREZWZpbml0aW9uIiwiUmlnaHRSZWN1cnNpdmVPcHRpb25hbFBhcnRQcm9kdWN0aW9uIiwicmlnaHRSZWN1cnNpdmVPcHRpb25hbFBhcnREZWZpbml0aW9uIiwiZXBzaWxvbkRlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLCtCQUFSLENBRHhCO0FBQUEsSUFFTUUsb0JBQW9CRixRQUFRLHVCQUFSLENBRjFCO0FBQUEsSUFHTUcsdUNBQXVDSCxRQUFRLDBDQUFSLENBSDdDOztJQUtNSSxvQzs7O0FBQ0osa0RBQWM7QUFBQTs7QUFDWixRQUFNQyx1Q0FBdUMsSUFBSUYsb0NBQUosRUFBN0M7QUFBQSxRQUNNRyxvQkFBb0IsSUFBSUosaUJBQUosRUFEMUI7QUFBQSxRQUVNSyxPQUFPLDRCQUZiO0FBQUEsUUFHTUMsY0FBYyxDQUNaSCxvQ0FEWSxFQUVaQyxpQkFGWSxDQUhwQjtBQUFBLFFBT01HLE9BQU9SLGVBUGI7O0FBRFksdUtBVU5NLElBVk0sRUFVQUMsV0FWQSxFQVVhQyxJQVZiO0FBV2I7OztFQVpnRFYsVTs7QUFlbkRXLE9BQU9DLE9BQVAsR0FBaUJQLG9DQUFqQiIsImZpbGUiOiJyaWdodFJlY3Vyc2l2ZU9wdGlvbmFsUGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBFcHNpbG9uRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vZXBzaWxvbicpLFxuICAgICAgUmlnaHRSZWN1cnNpdmVPcHRpb25hbFBhcnREZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9yaWdodFJlY3Vyc2l2ZU9wdGlvbmFsUGFydCcpO1xuXG5jbGFzcyBSaWdodFJlY3Vyc2l2ZU9wdGlvbmFsUGFydFByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcmlnaHRSZWN1cnNpdmVPcHRpb25hbFBhcnREZWZpbml0aW9uID0gbmV3IFJpZ2h0UmVjdXJzaXZlT3B0aW9uYWxQYXJ0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIGVwc2lsb25EZWZpbml0aW9uID0gbmV3IEVwc2lsb25EZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9ICdyaWdodFJlY3Vyc2l2ZU9wdGlvbmFsUGFydCcsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZU9wdGlvbmFsUGFydERlZmluaXRpb24sXG4gICAgICAgICAgICBlcHNpbG9uRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmlnaHRSZWN1cnNpdmVPcHRpb25hbFBhcnRQcm9kdWN0aW9uO1xuIl19