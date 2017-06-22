'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Definition = require('../definition'),
    TerminalSymbolPart = require('../part/terminalSymbol'),
    ProductionNamePart = require('../part/productionName');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer,
    specialSymbols = ExtendedBNFLexer.specialSymbols,
    separator = specialSymbols.separator,
    terminator = specialSymbols.terminator;

var ProductionDefinition = function (_Definition) {
      _inherits(ProductionDefinition, _Definition);

      function ProductionDefinition() {
            _classCallCheck(this, ProductionDefinition);

            var separatorTerminalSymbolContent = separator,
                terminatorTerminalSymbolContent = terminator,
                definitionsProductionName = 'definitions',
                productionNameProductionName = 'productionName',
                separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent),
                terminatorTerminalSymbolPart = new TerminalSymbolPart(terminatorTerminalSymbolContent),
                definitionsProductionNamePart = new ProductionNamePart(definitionsProductionName),
                productionNameProductionNamePart = new ProductionNamePart(productionNameProductionName),
                parts = [productionNameProductionNamePart, separatorTerminalSymbolPart, definitionsProductionNamePart, terminatorTerminalSymbolPart];

            return _possibleConstructorReturn(this, (ProductionDefinition.__proto__ || Object.getPrototypeOf(ProductionDefinition)).call(this, parts));
      }

      return ProductionDefinition;
}(Definition);

module.exports = ProductionDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9kZWZpbml0aW9uL3Byb2R1Y3Rpb24uanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkRlZmluaXRpb24iLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJFeHRlbmRlZEJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJzZXBhcmF0b3IiLCJ0ZXJtaW5hdG9yIiwiUHJvZHVjdGlvbkRlZmluaXRpb24iLCJzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJ0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xDb250ZW50IiwiZGVmaW5pdGlvbnNQcm9kdWN0aW9uTmFtZSIsInByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWUiLCJzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQiLCJ0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xQYXJ0IiwiZGVmaW5pdGlvbnNQcm9kdWN0aW9uTmFtZVBhcnQiLCJwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsYUFBYUQsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUUscUJBQXFCRixRQUFRLHdCQUFSLENBRDNCO0FBQUEsSUFFTUcscUJBQXFCSCxRQUFRLHdCQUFSLENBRjNCOztBQUlNLElBQUVJLGdCQUFGLEdBQXVCTCxNQUF2QixDQUFFSyxnQkFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJELGdCQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsU0FGRixHQUU0QkQsY0FGNUIsQ0FFRUMsU0FGRjtBQUFBLElBRWFDLFVBRmIsR0FFNEJGLGNBRjVCLENBRWFFLFVBRmI7O0lBSUFDLG9COzs7QUFDSixzQ0FBYztBQUFBOztBQUNaLGdCQUFNQyxpQ0FBaUNILFNBQXZDO0FBQUEsZ0JBQ01JLGtDQUFrQ0gsVUFEeEM7QUFBQSxnQkFFTUksNEJBQTRCLGFBRmxDO0FBQUEsZ0JBR01DLCtCQUErQixnQkFIckM7QUFBQSxnQkFJTUMsOEJBQThCLElBQUlYLGtCQUFKLENBQXVCTyw4QkFBdkIsQ0FKcEM7QUFBQSxnQkFLTUssK0JBQStCLElBQUlaLGtCQUFKLENBQXVCUSwrQkFBdkIsQ0FMckM7QUFBQSxnQkFNTUssZ0NBQWdDLElBQUlaLGtCQUFKLENBQXVCUSx5QkFBdkIsQ0FOdEM7QUFBQSxnQkFPTUssbUNBQW1DLElBQUliLGtCQUFKLENBQXVCUyw0QkFBdkIsQ0FQekM7QUFBQSxnQkFRTUssUUFBUSxDQUNORCxnQ0FETSxFQUVOSCwyQkFGTSxFQUdORSw2QkFITSxFQUlORCw0QkFKTSxDQVJkOztBQURZLCtJQWdCTkcsS0FoQk07QUFpQmI7OztFQWxCZ0NoQixVOztBQXFCbkNpQixPQUFPQyxPQUFQLEdBQWlCWCxvQkFBakIiLCJmaWxlIjoicHJvZHVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNvbnN0IHsgRXh0ZW5kZWRCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gRXh0ZW5kZWRCTkZMZXhlcixcbiAgICAgIHsgc2VwYXJhdG9yLCB0ZXJtaW5hdG9yIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgUHJvZHVjdGlvbkRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgc2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50ID0gc2VwYXJhdG9yLFxuICAgICAgICAgIHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSB0ZXJtaW5hdG9yLFxuICAgICAgICAgIGRlZmluaXRpb25zUHJvZHVjdGlvbk5hbWUgPSAnZGVmaW5pdGlvbnMnLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWUgPSAncHJvZHVjdGlvbk5hbWUnLFxuICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoc2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICB0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydCh0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBkZWZpbml0aW9uc1Byb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQoZGVmaW5pdGlvbnNQcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZVBhcnQsXG4gICAgICAgICAgICBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBkZWZpbml0aW9uc1Byb2R1Y3Rpb25OYW1lUGFydCxcbiAgICAgICAgICAgIHRlcm1pbmF0b3JUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbkRlZmluaXRpb247XG4iXX0=