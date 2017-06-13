'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    TerminalSymbolPart = require('../../common/part/terminalSymbol'),
    ProductionNamePart = require('../../common/part/productionName');

var ZeroOrMorePartsDefinition = function (_Definition) {
  _inherits(ZeroOrMorePartsDefinition, _Definition);

  function ZeroOrMorePartsDefinition() {
    _classCallCheck(this, ZeroOrMorePartsDefinition);

    var noWhitespace = true,
        partProductionName = 'part',
        questionMarkTerminalSymbolContent = '*',
        partProductionNamePart = new ProductionNamePart(partProductionName, noWhitespace),
        questionMarkTerminalSymbolPart = new TerminalSymbolPart(questionMarkTerminalSymbolContent, noWhitespace),
        parts = [partProductionNamePart, questionMarkTerminalSymbolPart];

    return _possibleConstructorReturn(this, (ZeroOrMorePartsDefinition.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsDefinition)).call(this, parts));
  }

  return ZeroOrMorePartsDefinition;
}(Definition);

module.exports = ZeroOrMorePartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi96ZXJvT3JNb3JlUGFydHMuanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInJlcXVpcmUiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJaZXJvT3JNb3JlUGFydHNEZWZpbml0aW9uIiwibm9XaGl0ZXNwYWNlIiwicGFydFByb2R1Y3Rpb25OYW1lIiwicXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xDb250ZW50IiwicGFydFByb2R1Y3Rpb25OYW1lUGFydCIsInF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLGtDQUFSLENBRDNCO0FBQUEsSUFFTUUscUJBQXFCRixRQUFRLGtDQUFSLENBRjNCOztJQUlNRyx5Qjs7O0FBQ0osdUNBQWM7QUFBQTs7QUFDWixRQUFNQyxlQUFlLElBQXJCO0FBQUEsUUFDTUMscUJBQXFCLE1BRDNCO0FBQUEsUUFFTUMsb0NBQW9DLEdBRjFDO0FBQUEsUUFHTUMseUJBQXlCLElBQUlMLGtCQUFKLENBQXVCRyxrQkFBdkIsRUFBMkNELFlBQTNDLENBSC9CO0FBQUEsUUFJTUksaUNBQWlDLElBQUlQLGtCQUFKLENBQXVCSyxpQ0FBdkIsRUFBMERGLFlBQTFELENBSnZDO0FBQUEsUUFLTUssUUFBUSxDQUNORixzQkFETSxFQUVOQyw4QkFGTSxDQUxkOztBQURZLGlKQVdOQyxLQVhNO0FBWWI7OztFQWJxQ1YsVTs7QUFnQnhDVyxPQUFPQyxPQUFQLEdBQWlCUix5QkFBakIiLCJmaWxlIjoiemVyb09yTW9yZVBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIFplcm9Pck1vcmVQYXJ0c0RlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gdHJ1ZSxcbiAgICAgICAgICBwYXJ0UHJvZHVjdGlvbk5hbWUgPSAncGFydCcsXG4gICAgICAgICAgcXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xDb250ZW50ID0gJyonLFxuICAgICAgICAgIHBhcnRQcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHBhcnRQcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sQ29udGVudCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHBhcnRQcm9kdWN0aW9uTmFtZVBhcnQsXG4gICAgICAgICAgICBxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWmVyb09yTW9yZVBhcnRzRGVmaW5pdGlvbjtcbiJdfQ==