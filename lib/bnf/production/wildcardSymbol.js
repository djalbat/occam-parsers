'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    WildcardSymbolNode = require('../node/wildcardSymbol'),
    TerminalSymbolDefinition = require('../definition/terminalSymbol');

var WildcardSymbolProduction = function (_Production) {
  _inherits(WildcardSymbolProduction, _Production);

  function WildcardSymbolProduction() {
    _classCallCheck(this, WildcardSymbolProduction);

    var wildcardTerminalSymbolContent = '*',
        wildcardTerminalSymbolDefinition = new TerminalSymbolDefinition(wildcardTerminalSymbolContent),
        name = 'wildcardSymbol',
        definitions = [wildcardTerminalSymbolDefinition],
        Node = WildcardSymbolNode;

    return _possibleConstructorReturn(this, (WildcardSymbolProduction.__proto__ || Object.getPrototypeOf(WildcardSymbolProduction)).call(this, name, definitions, Node));
  }

  return WildcardSymbolProduction;
}(Production);

module.exports = WildcardSymbolProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi93aWxkY2FyZFN5bWJvbC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIldpbGRjYXJkU3ltYm9sTm9kZSIsIlRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsIldpbGRjYXJkU3ltYm9sUHJvZHVjdGlvbiIsIndpbGRjYXJkVGVybWluYWxTeW1ib2xDb250ZW50Iiwid2lsZGNhcmRUZXJtaW5hbFN5bWJvbERlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLHdCQUFSLENBRDNCO0FBQUEsSUFFTUUsMkJBQTJCRixRQUFRLDhCQUFSLENBRmpDOztJQUlNRyx3Qjs7O0FBQ0osc0NBQWM7QUFBQTs7QUFDWixRQUFNQyxnQ0FBZ0MsR0FBdEM7QUFBQSxRQUNNQyxtQ0FBbUMsSUFBSUgsd0JBQUosQ0FBNkJFLDZCQUE3QixDQUR6QztBQUFBLFFBRU1FLE9BQU8sZ0JBRmI7QUFBQSxRQUdNQyxjQUFjLENBQ1pGLGdDQURZLENBSHBCO0FBQUEsUUFNTUcsT0FBT1Asa0JBTmI7O0FBRFksK0lBU05LLElBVE0sRUFTQUMsV0FUQSxFQVNhQyxJQVRiO0FBVWI7OztFQVhvQ1QsVTs7QUFjdkNVLE9BQU9DLE9BQVAsR0FBaUJQLHdCQUFqQiIsImZpbGUiOiJ3aWxkY2FyZFN5bWJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFdpbGRjYXJkU3ltYm9sTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvd2lsZGNhcmRTeW1ib2wnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vdGVybWluYWxTeW1ib2wnKTtcblxuY2xhc3MgV2lsZGNhcmRTeW1ib2xQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHdpbGRjYXJkVGVybWluYWxTeW1ib2xDb250ZW50ID0gJyonLFxuICAgICAgICAgIHdpbGRjYXJkVGVybWluYWxTeW1ib2xEZWZpbml0aW9uID0gbmV3IFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbih3aWxkY2FyZFRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgbmFtZSA9ICd3aWxkY2FyZFN5bWJvbCcsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICB3aWxkY2FyZFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFdpbGRjYXJkU3ltYm9sTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2lsZGNhcmRTeW1ib2xQcm9kdWN0aW9uO1xuIl19