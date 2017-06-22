'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var SequenceOfPartsDefinition = require('../definition/sequenceOfParts');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer,
    specialSymbols = ExtendedBNFLexer.specialSymbols,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9kZWZpbml0aW9uL29wdGlvbmFsUGFydC5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiIsIkV4dGVuZGVkQk5GTGV4ZXIiLCJzcGVjaWFsU3ltYm9scyIsInF1ZXN0aW9uTWFyayIsIk9wdGlvbmFsUGFydERlZmluaXRpb24iLCJxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyw0QkFBNEJELFFBQVEsK0JBQVIsQ0FBbEM7O0FBRU0sSUFBRUUsZ0JBQUYsR0FBdUJILE1BQXZCLENBQUVHLGdCQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkQsZ0JBRHJCLENBQ0VDLGNBREY7QUFBQSxJQUVFQyxZQUZGLEdBRW1CRCxjQUZuQixDQUVFQyxZQUZGOztJQUlBQyxzQjs7O0FBQ0osb0NBQWM7QUFBQTs7QUFDWixRQUFNQyxvQ0FBb0NGLFlBQTFDOztBQURZLDJJQUdORSxpQ0FITTtBQUliOzs7RUFMa0NMLHlCOztBQVFyQ00sT0FBT0MsT0FBUCxHQUFpQkgsc0JBQWpCIiwiZmlsZSI6Im9wdGlvbmFsUGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3NlcXVlbmNlT2ZQYXJ0cycpO1xuXG5jb25zdCB7IEV4dGVuZGVkQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEV4dGVuZGVkQk5GTGV4ZXIsXG4gICAgICB7IHF1ZXN0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG4gIFxuY2xhc3MgT3B0aW9uYWxQYXJ0RGVmaW5pdGlvbiBleHRlbmRzIFNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBxdWVzdGlvbk1hcms7XG4gICAgXG4gICAgc3VwZXIocXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xDb250ZW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9wdGlvbmFsUGFydERlZmluaXRpb247XG4iXX0=