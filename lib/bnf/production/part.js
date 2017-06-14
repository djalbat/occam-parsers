'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    ProductionNameDefinition = require('../definition/productionName');

var PartProduction = function (_Production) {
  _inherits(PartProduction, _Production);

  function PartProduction() {
    _classCallCheck(this, PartProduction);

    var groupOfPartsProductionName = 'groupOfParts',
        optionalPartProductionName = 'optionalPart',
        oneOrMorePartsProductionName = 'oneOrMoreParts',
        zeroOrMorePartsProductionName = 'zeroOrMoreParts',
        terminalSymbolProductionName = 'terminalSymbol',
        endOfLineSymbolProductionName = 'endOfLineSymbol',
        productionNameProductionName = 'productionName',
        noWhitespacePartProductionName = 'noWhitespacePart',
        regularExpressionProductionName = 'regularExpression',
        significantTokenTypeProductionName = 'significantTokenType',
        groupOfPartsProductionNameDefinition = new ProductionNameDefinition(groupOfPartsProductionName),
        optionalPartProductionNameDefinition = new ProductionNameDefinition(optionalPartProductionName),
        oneOrMorePartsProductionNameDefinition = new ProductionNameDefinition(oneOrMorePartsProductionName),
        zeroOrMorePartsProductionNameDefinition = new ProductionNameDefinition(zeroOrMorePartsProductionName),
        terminalSymbolProductionNameDefinition = new ProductionNameDefinition(terminalSymbolProductionName),
        endOfLineSymbolProductionNameDefinition = new ProductionNameDefinition(endOfLineSymbolProductionName),
        productionNameProductionNameDefinition = new ProductionNameDefinition(productionNameProductionName),
        noWhitespacePartProductionNameDefinition = new ProductionNameDefinition(noWhitespacePartProductionName),
        regularExpressionProductionNameDefinition = new ProductionNameDefinition(regularExpressionProductionName),
        significantTokenTypeProductionNameDefinition = new ProductionNameDefinition(significantTokenTypeProductionName),
        name = 'part',
        definitions = [
    /*noWhitespacePartProductionNameDefinition,*/
    optionalPartProductionNameDefinition /*,
                                         oneOrMorePartsProductionNameDefinition,
                                         zeroOrMorePartsProductionNameDefinition,
                                         groupOfPartsProductionNameDefinition,
                                         productionNameProductionNameDefinition,
                                         regularExpressionProductionNameDefinition,
                                         significantTokenTypeProductionNameDefinition,
                                         terminalSymbolProductionNameDefinition,
                                         endOfLineSymbolProductionNameDefinition*/
    ],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (PartProduction.__proto__ || Object.getPrototypeOf(PartProduction)).call(this, name, definitions, Node));
  }

  return PartProduction;
}(Production);

module.exports = PartProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9wYXJ0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiUHJvZHVjdGlvbk5hbWVEZWZpbml0aW9uIiwiUGFydFByb2R1Y3Rpb24iLCJncm91cE9mUGFydHNQcm9kdWN0aW9uTmFtZSIsIm9wdGlvbmFsUGFydFByb2R1Y3Rpb25OYW1lIiwib25lT3JNb3JlUGFydHNQcm9kdWN0aW9uTmFtZSIsInplcm9Pck1vcmVQYXJ0c1Byb2R1Y3Rpb25OYW1lIiwidGVybWluYWxTeW1ib2xQcm9kdWN0aW9uTmFtZSIsImVuZE9mTGluZVN5bWJvbFByb2R1Y3Rpb25OYW1lIiwicHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZSIsIm5vV2hpdGVzcGFjZVBhcnRQcm9kdWN0aW9uTmFtZSIsInJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbk5hbWUiLCJzaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb25OYW1lIiwiZ3JvdXBPZlBhcnRzUHJvZHVjdGlvbk5hbWVEZWZpbml0aW9uIiwib3B0aW9uYWxQYXJ0UHJvZHVjdGlvbk5hbWVEZWZpbml0aW9uIiwib25lT3JNb3JlUGFydHNQcm9kdWN0aW9uTmFtZURlZmluaXRpb24iLCJ6ZXJvT3JNb3JlUGFydHNQcm9kdWN0aW9uTmFtZURlZmluaXRpb24iLCJ0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb25OYW1lRGVmaW5pdGlvbiIsImVuZE9mTGluZVN5bWJvbFByb2R1Y3Rpb25OYW1lRGVmaW5pdGlvbiIsInByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVEZWZpbml0aW9uIiwibm9XaGl0ZXNwYWNlUGFydFByb2R1Y3Rpb25OYW1lRGVmaW5pdGlvbiIsInJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbk5hbWVEZWZpbml0aW9uIiwic2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uTmFtZURlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLCtCQUFSLENBRHhCO0FBQUEsSUFFTUUsMkJBQTJCRixRQUFRLDhCQUFSLENBRmpDOztJQUlNRyxjOzs7QUFDSiw0QkFBYztBQUFBOztBQUNaLFFBQU1DLDZCQUE2QixjQUFuQztBQUFBLFFBQ01DLDZCQUE2QixjQURuQztBQUFBLFFBRU1DLCtCQUErQixnQkFGckM7QUFBQSxRQUdNQyxnQ0FBZ0MsaUJBSHRDO0FBQUEsUUFJTUMsK0JBQStCLGdCQUpyQztBQUFBLFFBS01DLGdDQUFnQyxpQkFMdEM7QUFBQSxRQU1NQywrQkFBK0IsZ0JBTnJDO0FBQUEsUUFPTUMsaUNBQWlDLGtCQVB2QztBQUFBLFFBUU1DLGtDQUFrQyxtQkFSeEM7QUFBQSxRQVNNQyxxQ0FBcUMsc0JBVDNDO0FBQUEsUUFVTUMsdUNBQXVDLElBQUlaLHdCQUFKLENBQTZCRSwwQkFBN0IsQ0FWN0M7QUFBQSxRQVdNVyx1Q0FBdUMsSUFBSWIsd0JBQUosQ0FBNkJHLDBCQUE3QixDQVg3QztBQUFBLFFBWU1XLHlDQUF5QyxJQUFJZCx3QkFBSixDQUE2QkksNEJBQTdCLENBWi9DO0FBQUEsUUFhTVcsMENBQTBDLElBQUlmLHdCQUFKLENBQTZCSyw2QkFBN0IsQ0FiaEQ7QUFBQSxRQWNNVyx5Q0FBeUMsSUFBSWhCLHdCQUFKLENBQTZCTSw0QkFBN0IsQ0FkL0M7QUFBQSxRQWVNVywwQ0FBMEMsSUFBSWpCLHdCQUFKLENBQTZCTyw2QkFBN0IsQ0FmaEQ7QUFBQSxRQWdCTVcseUNBQXlDLElBQUlsQix3QkFBSixDQUE2QlEsNEJBQTdCLENBaEIvQztBQUFBLFFBaUJNVywyQ0FBMkMsSUFBSW5CLHdCQUFKLENBQTZCUyw4QkFBN0IsQ0FqQmpEO0FBQUEsUUFrQk1XLDRDQUE0QyxJQUFJcEIsd0JBQUosQ0FBNkJVLCtCQUE3QixDQWxCbEQ7QUFBQSxRQW1CTVcsK0NBQStDLElBQUlyQix3QkFBSixDQUE2Qlcsa0NBQTdCLENBbkJyRDtBQUFBLFFBb0JNVyxPQUFPLE1BcEJiO0FBQUEsUUFxQk1DLGNBQWM7QUFDWjtBQUNBVix3Q0FGWSxDQUV3Qjs7Ozs7Ozs7O0FBRnhCLEtBckJwQjtBQUFBLFFBaUNNVyxPQUFPekIsZUFqQ2I7O0FBRFksMkhBb0NOdUIsSUFwQ00sRUFvQ0FDLFdBcENBLEVBb0NhQyxJQXBDYjtBQXFDYjs7O0VBdEMwQjNCLFU7O0FBeUM3QjRCLE9BQU9DLE9BQVAsR0FBaUJ6QixjQUFqQiIsImZpbGUiOiJwYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgUGFydFByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgZ3JvdXBPZlBhcnRzUHJvZHVjdGlvbk5hbWUgPSAnZ3JvdXBPZlBhcnRzJyxcbiAgICAgICAgICBvcHRpb25hbFBhcnRQcm9kdWN0aW9uTmFtZSA9ICdvcHRpb25hbFBhcnQnLFxuICAgICAgICAgIG9uZU9yTW9yZVBhcnRzUHJvZHVjdGlvbk5hbWUgPSAnb25lT3JNb3JlUGFydHMnLFxuICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1Byb2R1Y3Rpb25OYW1lID0gJ3plcm9Pck1vcmVQYXJ0cycsXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xQcm9kdWN0aW9uTmFtZSA9ICd0ZXJtaW5hbFN5bWJvbCcsXG4gICAgICAgICAgZW5kT2ZMaW5lU3ltYm9sUHJvZHVjdGlvbk5hbWUgPSAnZW5kT2ZMaW5lU3ltYm9sJyxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lID0gJ3Byb2R1Y3Rpb25OYW1lJyxcbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0UHJvZHVjdGlvbk5hbWUgPSAnbm9XaGl0ZXNwYWNlUGFydCcsXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZSA9ICdyZWd1bGFyRXhwcmVzc2lvbicsXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uTmFtZSA9ICdzaWduaWZpY2FudFRva2VuVHlwZScsXG4gICAgICAgICAgZ3JvdXBPZlBhcnRzUHJvZHVjdGlvbk5hbWVEZWZpbml0aW9uID0gbmV3IFByb2R1Y3Rpb25OYW1lRGVmaW5pdGlvbihncm91cE9mUGFydHNQcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgb3B0aW9uYWxQYXJ0UHJvZHVjdGlvbk5hbWVEZWZpbml0aW9uID0gbmV3IFByb2R1Y3Rpb25OYW1lRGVmaW5pdGlvbihvcHRpb25hbFBhcnRQcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgb25lT3JNb3JlUGFydHNQcm9kdWN0aW9uTmFtZURlZmluaXRpb24gPSBuZXcgUHJvZHVjdGlvbk5hbWVEZWZpbml0aW9uKG9uZU9yTW9yZVBhcnRzUHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1Byb2R1Y3Rpb25OYW1lRGVmaW5pdGlvbiA9IG5ldyBQcm9kdWN0aW9uTmFtZURlZmluaXRpb24oemVyb09yTW9yZVBhcnRzUHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbk5hbWVEZWZpbml0aW9uID0gbmV3IFByb2R1Y3Rpb25OYW1lRGVmaW5pdGlvbih0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICBlbmRPZkxpbmVTeW1ib2xQcm9kdWN0aW9uTmFtZURlZmluaXRpb24gPSBuZXcgUHJvZHVjdGlvbk5hbWVEZWZpbml0aW9uKGVuZE9mTGluZVN5bWJvbFByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lRGVmaW5pdGlvbiA9IG5ldyBQcm9kdWN0aW9uTmFtZURlZmluaXRpb24ocHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydFByb2R1Y3Rpb25OYW1lRGVmaW5pdGlvbiA9IG5ldyBQcm9kdWN0aW9uTmFtZURlZmluaXRpb24obm9XaGl0ZXNwYWNlUGFydFByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb25OYW1lRGVmaW5pdGlvbiA9IG5ldyBQcm9kdWN0aW9uTmFtZURlZmluaXRpb24ocmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uTmFtZURlZmluaXRpb24gPSBuZXcgUHJvZHVjdGlvbk5hbWVEZWZpbml0aW9uKHNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIG5hbWUgPSAncGFydCcsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICAvKm5vV2hpdGVzcGFjZVBhcnRQcm9kdWN0aW9uTmFtZURlZmluaXRpb24sKi9cbiAgICAgICAgICAgIG9wdGlvbmFsUGFydFByb2R1Y3Rpb25OYW1lRGVmaW5pdGlvbi8qLFxuICAgICAgICAgICAgb25lT3JNb3JlUGFydHNQcm9kdWN0aW9uTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQcm9kdWN0aW9uTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICBncm91cE9mUGFydHNQcm9kdWN0aW9uTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbk5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb25OYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIGVuZE9mTGluZVN5bWJvbFByb2R1Y3Rpb25OYW1lRGVmaW5pdGlvbiovXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydFByb2R1Y3Rpb247XG4iXX0=