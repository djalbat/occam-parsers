'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    NoWhitespacePartNode = require('../node/noWhitespacePart'),
    NoWhitespacePartDefinition = require('../definition/noWhitespacePart');

var NoWhitespacePartRule = function (_Rule) {
  _inherits(NoWhitespacePartRule, _Rule);

  function NoWhitespacePartRule() {
    _classCallCheck(this, NoWhitespacePartRule);

    var noWhitespacePartDefinition = new NoWhitespacePartDefinition(),
        name = 'noWhitespacePart',
        noWhitespacePart = [noWhitespacePartDefinition],
        Node = NoWhitespacePartNode;

    return _possibleConstructorReturn(this, (NoWhitespacePartRule.__proto__ || Object.getPrototypeOf(NoWhitespacePartRule)).call(this, name, noWhitespacePart, Node));
  }

  return NoWhitespacePartRule;
}(Rule);

module.exports = NoWhitespacePartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ydWxlL25vV2hpdGVzcGFjZVBhcnQuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJOb1doaXRlc3BhY2VQYXJ0Tm9kZSIsIk5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uIiwiTm9XaGl0ZXNwYWNlUGFydFJ1bGUiLCJub1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiIsIm5hbWUiLCJub1doaXRlc3BhY2VQYXJ0IiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsdUJBQXVCRCxRQUFRLDBCQUFSLENBRDdCO0FBQUEsSUFFTUUsNkJBQTZCRixRQUFRLGdDQUFSLENBRm5DOztJQUlNRyxvQjs7O0FBQ0osa0NBQWM7QUFBQTs7QUFDWixRQUFNQyw2QkFBNkIsSUFBSUYsMEJBQUosRUFBbkM7QUFBQSxRQUNNRyxPQUFPLGtCQURiO0FBQUEsUUFFTUMsbUJBQW1CLENBQ2pCRiwwQkFEaUIsQ0FGekI7QUFBQSxRQUtNRyxPQUFPTixvQkFMYjs7QUFEWSx1SUFRTkksSUFSTSxFQVFBQyxnQkFSQSxFQVFrQkMsSUFSbEI7QUFTYjs7O0VBVmdDUixJOztBQWFuQ1MsT0FBT0MsT0FBUCxHQUFpQk4sb0JBQWpCIiwiZmlsZSI6Im5vV2hpdGVzcGFjZVBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBOb1doaXRlc3BhY2VQYXJ0Tm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvbm9XaGl0ZXNwYWNlUGFydCcpLFxuICAgICAgTm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL25vV2hpdGVzcGFjZVBhcnQnKTtcblxuY2xhc3MgTm9XaGl0ZXNwYWNlUGFydFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24gPSBuZXcgTm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gJ25vV2hpdGVzcGFjZVBhcnQnLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnQgPSBbXG4gICAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5vV2hpdGVzcGFjZVBhcnROb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgbm9XaGl0ZXNwYWNlUGFydCwgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vV2hpdGVzcGFjZVBhcnRSdWxlO1xuIl19