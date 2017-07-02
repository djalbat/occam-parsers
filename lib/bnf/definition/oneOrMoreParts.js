'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var SequenceOfPartsDefinition = require('../definition/sequenceOfParts');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    plus = specialSymbols.plus;

var OneOrMorePartsDefinition = function (_SequenceOfPartsDefin) {
  _inherits(OneOrMorePartsDefinition, _SequenceOfPartsDefin);

  function OneOrMorePartsDefinition() {
    _classCallCheck(this, OneOrMorePartsDefinition);

    var plusTerminalSymbolContent = plus;

    return _possibleConstructorReturn(this, (OneOrMorePartsDefinition.__proto__ || Object.getPrototypeOf(OneOrMorePartsDefinition)).call(this, plusTerminalSymbolContent));
  }

  return OneOrMorePartsDefinition;
}(SequenceOfPartsDefinition);

module.exports = OneOrMorePartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9vbmVPck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiIsIkJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJwbHVzIiwiT25lT3JNb3JlUGFydHNEZWZpbml0aW9uIiwicGx1c1Rlcm1pbmFsU3ltYm9sQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLDRCQUE0QkQsUUFBUSwrQkFBUixDQUFsQzs7QUFFTSxJQUFFRSxRQUFGLEdBQWVILE1BQWYsQ0FBRUcsUUFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJELFFBRHJCLENBQ0VDLGNBREY7QUFBQSxJQUVFQyxJQUZGLEdBRVdELGNBRlgsQ0FFRUMsSUFGRjs7SUFJQUMsd0I7OztBQUNKLHNDQUFjO0FBQUE7O0FBQ1osUUFBTUMsNEJBQTRCRixJQUFsQzs7QUFEWSwrSUFHTkUseUJBSE07QUFJYjs7O0VBTG9DTCx5Qjs7QUFRdkNNLE9BQU9DLE9BQVAsR0FBaUJILHdCQUFqQiIsImZpbGUiOiJvbmVPck1vcmVQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3NlcXVlbmNlT2ZQYXJ0cycpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgcGx1cyB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIE9uZU9yTW9yZVBhcnRzRGVmaW5pdGlvbiBleHRlbmRzIFNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBwbHVzVGVybWluYWxTeW1ib2xDb250ZW50ID0gcGx1cztcblxuICAgIHN1cGVyKHBsdXNUZXJtaW5hbFN5bWJvbENvbnRlbnQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT25lT3JNb3JlUGFydHNEZWZpbml0aW9uO1xuIl19