'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var SequenceOfPartsDefinition = require('../definition/sequenceOfParts');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer,
    specialSymbols = ExtendedBNFLexer.specialSymbols,
    asterisk = specialSymbols.asterisk;

var ZeroOrMorePartsDefinition = function (_SequenceOfPartsDefin) {
  _inherits(ZeroOrMorePartsDefinition, _SequenceOfPartsDefin);

  function ZeroOrMorePartsDefinition() {
    _classCallCheck(this, ZeroOrMorePartsDefinition);

    var asteriskTerminalSymbolContent = asterisk;

    return _possibleConstructorReturn(this, (ZeroOrMorePartsDefinition.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsDefinition)).call(this, asteriskTerminalSymbolContent));
  }

  return ZeroOrMorePartsDefinition;
}(SequenceOfPartsDefinition);

module.exports = ZeroOrMorePartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9kZWZpbml0aW9uL3plcm9Pck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiIsIkV4dGVuZGVkQk5GTGV4ZXIiLCJzcGVjaWFsU3ltYm9scyIsImFzdGVyaXNrIiwiWmVyb09yTW9yZVBhcnRzRGVmaW5pdGlvbiIsImFzdGVyaXNrVGVybWluYWxTeW1ib2xDb250ZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsNEJBQTRCRCxRQUFRLCtCQUFSLENBQWxDOztBQUVNLElBQUVFLGdCQUFGLEdBQXVCSCxNQUF2QixDQUFFRyxnQkFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJELGdCQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsUUFGRixHQUVlRCxjQUZmLENBRUVDLFFBRkY7O0lBSUFDLHlCOzs7QUFDSix1Q0FBYztBQUFBOztBQUNaLFFBQU1DLGdDQUFnQ0YsUUFBdEM7O0FBRFksaUpBR05FLDZCQUhNO0FBSWI7OztFQUxxQ0wseUI7O0FBUXhDTSxPQUFPQyxPQUFQLEdBQWlCSCx5QkFBakIiLCJmaWxlIjoiemVyb09yTW9yZVBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vc2VxdWVuY2VPZlBhcnRzJyk7XG5cbmNvbnN0IHsgRXh0ZW5kZWRCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gRXh0ZW5kZWRCTkZMZXhlcixcbiAgICAgIHsgYXN0ZXJpc2sgfSA9IHNwZWNpYWxTeW1ib2xzO1xuICBcbmNsYXNzIFplcm9Pck1vcmVQYXJ0c0RlZmluaXRpb24gZXh0ZW5kcyBTZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgYXN0ZXJpc2tUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBhc3RlcmlzaztcblxuICAgIHN1cGVyKGFzdGVyaXNrVGVybWluYWxTeW1ib2xDb250ZW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFplcm9Pck1vcmVQYXJ0c0RlZmluaXRpb247XG4iXX0=