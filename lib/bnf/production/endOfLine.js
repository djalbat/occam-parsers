'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    EndOfLineDefinition = require('../definition/endOfLine');

var EndOfLineProduction = function (_Production) {
  _inherits(EndOfLineProduction, _Production);

  function EndOfLineProduction() {
    _classCallCheck(this, EndOfLineProduction);

    var endOfLineDefinition = new EndOfLineDefinition(),
        name = 'endOfLine',
        definitions = [endOfLineDefinition],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (EndOfLineProduction.__proto__ || Object.getPrototypeOf(EndOfLineProduction)).call(this, name, definitions, Node));
  }

  return EndOfLineProduction;
}(Production);

module.exports = EndOfLineProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJFbmRPZkxpbmVEZWZpbml0aW9uIiwiRW5kT2ZMaW5lUHJvZHVjdGlvbiIsImVuZE9mTGluZURlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLCtCQUFSLENBRHhCO0FBQUEsSUFFTUUsc0JBQXNCRixRQUFRLHlCQUFSLENBRjVCOztJQUlNRyxtQjs7O0FBQ0osaUNBQWM7QUFBQTs7QUFDWixRQUFNQyxzQkFBc0IsSUFBSUYsbUJBQUosRUFBNUI7QUFBQSxRQUNNRyxPQUFPLFdBRGI7QUFBQSxRQUVNQyxjQUFjLENBQ1pGLG1CQURZLENBRnBCO0FBQUEsUUFLTUcsT0FBT04sZUFMYjs7QUFEWSxxSUFRTkksSUFSTSxFQVFBQyxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVitCUixVOztBQWFsQ1MsT0FBT0MsT0FBUCxHQUFpQk4sbUJBQWpCIiwiZmlsZSI6ImVuZE9mTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBFbmRPZkxpbmVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9lbmRPZkxpbmUnKTtcblxuY2xhc3MgRW5kT2ZMaW5lUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBlbmRPZkxpbmVEZWZpbml0aW9uID0gbmV3IEVuZE9mTGluZURlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gJ2VuZE9mTGluZScsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBlbmRPZkxpbmVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lUHJvZHVjdGlvbjtcbiJdfQ==