'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    GroupOfPartsDefinition = require('../definition/groupOfParts');

var GroupOfPartsProduction = function (_Production) {
  _inherits(GroupOfPartsProduction, _Production);

  function GroupOfPartsProduction() {
    _classCallCheck(this, GroupOfPartsProduction);

    var groupOfPartsDefinition = new GroupOfPartsDefinition(),
        name = 'groupOfParts',
        definitions = [groupOfPartsDefinition],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (GroupOfPartsProduction.__proto__ || Object.getPrototypeOf(GroupOfPartsProduction)).call(this, name, definitions, Node));
  }

  return GroupOfPartsProduction;
}(Production);

module.exports = GroupOfPartsProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJHcm91cE9mUGFydHNEZWZpbml0aW9uIiwiR3JvdXBPZlBhcnRzUHJvZHVjdGlvbiIsImdyb3VwT2ZQYXJ0c0RlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLCtCQUFSLENBRHhCO0FBQUEsSUFFTUUseUJBQXlCRixRQUFRLDRCQUFSLENBRi9COztJQUlNRyxzQjs7O0FBQ0osb0NBQWM7QUFBQTs7QUFDWixRQUFNQyx5QkFBeUIsSUFBSUYsc0JBQUosRUFBL0I7QUFBQSxRQUNNRyxPQUFPLGNBRGI7QUFBQSxRQUVNQyxjQUFjLENBQ1pGLHNCQURZLENBRnBCO0FBQUEsUUFLTUcsT0FBT04sZUFMYjs7QUFEWSwySUFRTkksSUFSTSxFQVFBQyxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVmtDUixVOztBQWFyQ1MsT0FBT0MsT0FBUCxHQUFpQk4sc0JBQWpCIiwiZmlsZSI6Imdyb3VwT2ZQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBHcm91cE9mUGFydHNEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9ncm91cE9mUGFydHMnKTtcblxuY2xhc3MgR3JvdXBPZlBhcnRzUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBncm91cE9mUGFydHNEZWZpbml0aW9uID0gbmV3IEdyb3VwT2ZQYXJ0c0RlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gJ2dyb3VwT2ZQYXJ0cycsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBncm91cE9mUGFydHNEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBPZlBhcnRzUHJvZHVjdGlvbjtcbiJdfQ==