'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    NoWhitespacePartDefinition = require('../definition/noWhitespacePart');

var NoWhitespacePartProduction = function (_Production) {
  _inherits(NoWhitespacePartProduction, _Production);

  function NoWhitespacePartProduction() {
    _classCallCheck(this, NoWhitespacePartProduction);

    var noWhitespacePartDefinition = new NoWhitespacePartDefinition(),
        name = 'noWhitespacePart',
        noWhitespacePart = [noWhitespacePartDefinition],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (NoWhitespacePartProduction.__proto__ || Object.getPrototypeOf(NoWhitespacePartProduction)).call(this, name, noWhitespacePart, Node));
  }

  return NoWhitespacePartProduction;
}(Production);

module.exports = NoWhitespacePartProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9ub1doaXRlc3BhY2VQYXJ0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiTm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24iLCJOb1doaXRlc3BhY2VQYXJ0UHJvZHVjdGlvbiIsIm5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uIiwibmFtZSIsIm5vV2hpdGVzcGFjZVBhcnQiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLCtCQUFSLENBRHhCO0FBQUEsSUFFTUUsNkJBQTZCRixRQUFRLGdDQUFSLENBRm5DOztJQUlNRywwQjs7O0FBQ0osd0NBQWM7QUFBQTs7QUFDWixRQUFNQyw2QkFBNkIsSUFBSUYsMEJBQUosRUFBbkM7QUFBQSxRQUNNRyxPQUFPLGtCQURiO0FBQUEsUUFFTUMsbUJBQW1CLENBQ2pCRiwwQkFEaUIsQ0FGekI7QUFBQSxRQUtNRyxPQUFPTixlQUxiOztBQURZLG1KQVFOSSxJQVJNLEVBUUFDLGdCQVJBLEVBUWtCQyxJQVJsQjtBQVNiOzs7RUFWc0NSLFU7O0FBYXpDUyxPQUFPQyxPQUFQLEdBQWlCTiwwQkFBakIiLCJmaWxlIjoibm9XaGl0ZXNwYWNlUGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBOb1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vbm9XaGl0ZXNwYWNlUGFydCcpO1xuXG5jbGFzcyBOb1doaXRlc3BhY2VQYXJ0UHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiA9IG5ldyBOb1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5hbWUgPSAnbm9XaGl0ZXNwYWNlUGFydCcsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydCA9IFtcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgbm9XaGl0ZXNwYWNlUGFydCwgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vV2hpdGVzcGFjZVBhcnRQcm9kdWN0aW9uO1xuIl19