'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    TerminalSymbolPart = require('../part/terminalSymbol'),
    ProductionNamePart = require('../../common/part/productionName');

var OptionalPartDefinition = function (_Definition) {
  _inherits(OptionalPartDefinition, _Definition);

  function OptionalPartDefinition() {
    _classCallCheck(this, OptionalPartDefinition);

    var partProductionName = 'part',
        questionMarkTerminalSymbolContent = '?',
        questionMarkTerminalSymbolNoWhitespace = false /*true*/
    ,
        partProductionNamePart = new ProductionNamePart(partProductionName),
        questionMarkTerminalSymbolPart = new TerminalSymbolPart(questionMarkTerminalSymbolContent, questionMarkTerminalSymbolNoWhitespace),
        parts = [partProductionNamePart, questionMarkTerminalSymbolPart];

    return _possibleConstructorReturn(this, (OptionalPartDefinition.__proto__ || Object.getPrototypeOf(OptionalPartDefinition)).call(this, parts));
  }

  return OptionalPartDefinition;
}(Definition);

module.exports = OptionalPartDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9vcHRpb25hbFBhcnQuanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInJlcXVpcmUiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJPcHRpb25hbFBhcnREZWZpbml0aW9uIiwicGFydFByb2R1Y3Rpb25OYW1lIiwicXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xDb250ZW50IiwicXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xOb1doaXRlc3BhY2UiLCJwYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0IiwicXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsd0JBQVIsQ0FEM0I7QUFBQSxJQUVNRSxxQkFBcUJGLFFBQVEsa0NBQVIsQ0FGM0I7O0lBSU1HLHNCOzs7QUFDSixvQ0FBYztBQUFBOztBQUNaLFFBQU1DLHFCQUFxQixNQUEzQjtBQUFBLFFBQ01DLG9DQUFvQyxHQUQxQztBQUFBLFFBRU1DLHlDQUF5QyxLQUYvQyxDQUVvRDtBQUZwRDtBQUFBLFFBR01DLHlCQUF5QixJQUFJTCxrQkFBSixDQUF1QkUsa0JBQXZCLENBSC9CO0FBQUEsUUFJTUksaUNBQWlDLElBQUlQLGtCQUFKLENBQXVCSSxpQ0FBdkIsRUFBMERDLHNDQUExRCxDQUp2QztBQUFBLFFBS01HLFFBQVEsQ0FDTkYsc0JBRE0sRUFFTkMsOEJBRk0sQ0FMZDs7QUFEWSwySUFXTkMsS0FYTTtBQVliOzs7RUFia0NWLFU7O0FBZ0JyQ1csT0FBT0MsT0FBUCxHQUFpQlIsc0JBQWpCIiwiZmlsZSI6Im9wdGlvbmFsUGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIE9wdGlvbmFsUGFydERlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcGFydFByb2R1Y3Rpb25OYW1lID0gJ3BhcnQnLFxuICAgICAgICAgIHF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sQ29udGVudCA9ICc/JyxcbiAgICAgICAgICBxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbE5vV2hpdGVzcGFjZSA9IGZhbHNlLyp0cnVlKi8sXG4gICAgICAgICAgcGFydFByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocGFydFByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICBxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sQ29udGVudCwgcXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xOb1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcGFydFByb2R1Y3Rpb25OYW1lUGFydCxcbiAgICAgICAgICAgIHF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPcHRpb25hbFBhcnREZWZpbml0aW9uO1xuIl19