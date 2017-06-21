'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    TerminalSymbolPart = require('../part/terminalSymbol');

var TerminalSymbolDefinition = function (_Definition) {
  _inherits(TerminalSymbolDefinition, _Definition);

  function TerminalSymbolDefinition(content) {
    _classCallCheck(this, TerminalSymbolDefinition);

    var terminalSymbolPart = new TerminalSymbolPart(content),
        parts = [terminalSymbolPart];

    return _possibleConstructorReturn(this, (TerminalSymbolDefinition.__proto__ || Object.getPrototypeOf(TerminalSymbolDefinition)).call(this, parts));
  }

  return TerminalSymbolDefinition;
}(Definition);

module.exports = TerminalSymbolDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9kZWZpbml0aW9uL3Rlcm1pbmFsU3ltYm9sLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwiY29udGVudCIsInRlcm1pbmFsU3ltYm9sUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLHdCQUFSLENBRDNCOztJQUdNRSx3Qjs7O0FBQ0osb0NBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsUUFBTUMscUJBQXFCLElBQUlILGtCQUFKLENBQXVCRSxPQUF2QixDQUEzQjtBQUFBLFFBQ01FLFFBQVEsQ0FDTkQsa0JBRE0sQ0FEZDs7QUFEbUIsK0lBTWJDLEtBTmE7QUFPcEI7OztFQVJvQ04sVTs7QUFXdkNPLE9BQU9DLE9BQVAsR0FBaUJMLHdCQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbFN5bWJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWxTeW1ib2wnKTtcblxuY2xhc3MgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGNvbnRlbnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbjtcbiJdfQ==