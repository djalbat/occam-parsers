'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SequenceOfPartsDefinition = require('../definition/sequenceOfParts');

var OptionalPartDefinition = function (_SequenceOfPartsDefin) {
  _inherits(OptionalPartDefinition, _SequenceOfPartsDefin);

  function OptionalPartDefinition() {
    _classCallCheck(this, OptionalPartDefinition);

    var questionMarkTerminalSymbolContent = '?';

    return _possibleConstructorReturn(this, (OptionalPartDefinition.__proto__ || Object.getPrototypeOf(OptionalPartDefinition)).call(this, questionMarkTerminalSymbolContent));
  }

  return OptionalPartDefinition;
}(SequenceOfPartsDefinition);

module.exports = OptionalPartDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9vcHRpb25hbFBhcnQuanMiXSwibmFtZXMiOlsiU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiIsInJlcXVpcmUiLCJPcHRpb25hbFBhcnREZWZpbml0aW9uIiwicXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xDb250ZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsNEJBQTRCQyxRQUFRLCtCQUFSLENBQWxDOztJQUVNQyxzQjs7O0FBQ0osb0NBQWM7QUFBQTs7QUFDWixRQUFNQyxvQ0FBb0MsR0FBMUM7O0FBRFksMklBR05BLGlDQUhNO0FBSWI7OztFQUxrQ0gseUI7O0FBUXJDSSxPQUFPQyxPQUFQLEdBQWlCSCxzQkFBakIiLCJmaWxlIjoib3B0aW9uYWxQYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9zZXF1ZW5jZU9mUGFydHMnKTtcblxuY2xhc3MgT3B0aW9uYWxQYXJ0RGVmaW5pdGlvbiBleHRlbmRzIFNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSAnPyc7XG4gICAgXG4gICAgc3VwZXIocXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xDb250ZW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9wdGlvbmFsUGFydERlZmluaXRpb247XG4iXX0=