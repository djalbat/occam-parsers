'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var SequenceOfPartsDefinition = require('../definition/sequenceOfParts');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    questionMark = specialSymbols.questionMark;

var OptionalPartDefinition = function (_SequenceOfPartsDefin) {
  _inherits(OptionalPartDefinition, _SequenceOfPartsDefin);

  function OptionalPartDefinition() {
    _classCallCheck(this, OptionalPartDefinition);

    var questionMarkTerminalSymbolContent = questionMark;

    return _possibleConstructorReturn(this, (OptionalPartDefinition.__proto__ || Object.getPrototypeOf(OptionalPartDefinition)).call(this, questionMarkTerminalSymbolContent));
  }

  return OptionalPartDefinition;
}(SequenceOfPartsDefinition);

module.exports = OptionalPartDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9vcHRpb25hbFBhcnQuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24iLCJCTkZMZXhlciIsInNwZWNpYWxTeW1ib2xzIiwicXVlc3Rpb25NYXJrIiwiT3B0aW9uYWxQYXJ0RGVmaW5pdGlvbiIsInF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLDRCQUE0QkQsUUFBUSwrQkFBUixDQUFsQzs7QUFFTSxJQUFFRSxRQUFGLEdBQWVILE1BQWYsQ0FBRUcsUUFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJELFFBRHJCLENBQ0VDLGNBREY7QUFBQSxJQUVFQyxZQUZGLEdBRW1CRCxjQUZuQixDQUVFQyxZQUZGOztJQUlBQyxzQjs7O0FBQ0osb0NBQWM7QUFBQTs7QUFDWixRQUFNQyxvQ0FBb0NGLFlBQTFDOztBQURZLDJJQUdORSxpQ0FITTtBQUliOzs7RUFMa0NMLHlCOztBQVFyQ00sT0FBT0MsT0FBUCxHQUFpQkgsc0JBQWpCIiwiZmlsZSI6Im9wdGlvbmFsUGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3NlcXVlbmNlT2ZQYXJ0cycpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgcXVlc3Rpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcbiAgXG5jbGFzcyBPcHRpb25hbFBhcnREZWZpbml0aW9uIGV4dGVuZHMgU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sQ29udGVudCA9IHF1ZXN0aW9uTWFyaztcbiAgICBcbiAgICBzdXBlcihxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbENvbnRlbnQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT3B0aW9uYWxQYXJ0RGVmaW5pdGlvbjtcbiJdfQ==