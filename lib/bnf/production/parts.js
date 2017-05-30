'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    PartsRule = require('../rule/parts'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var PartsProduction = function (_Production) {
  _inherits(PartsProduction, _Production);

  function PartsProduction() {
    _classCallCheck(this, PartsProduction);

    var partsRule = new PartsRule(),
        name = 'parts',
        rules = [partsRule],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (PartsProduction.__proto__ || Object.getPrototypeOf(PartsProduction)).call(this, name, rules, Node));
  }

  return PartsProduction;
}(Production);

module.exports = PartsProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9wYXJ0cy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIlBhcnRzUnVsZSIsIk5vblRlcm1pbmFsTm9kZSIsIlBhcnRzUHJvZHVjdGlvbiIsInBhcnRzUnVsZSIsIm5hbWUiLCJydWxlcyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGVBQVIsQ0FEbEI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEsK0JBQVIsQ0FGeEI7O0lBSU1HLGU7OztBQUNKLDZCQUFjO0FBQUE7O0FBQ1osUUFBTUMsWUFBWSxJQUFJSCxTQUFKLEVBQWxCO0FBQUEsUUFDTUksT0FBTyxPQURiO0FBQUEsUUFFTUMsUUFBUSxDQUNORixTQURNLENBRmQ7QUFBQSxRQUtNRyxPQUFPTCxlQUxiOztBQURZLDZIQVFORyxJQVJNLEVBUUFDLEtBUkEsRUFRT0MsSUFSUDtBQVNiOzs7RUFWMkJSLFU7O0FBYTlCUyxPQUFPQyxPQUFQLEdBQWlCTixlQUFqQiIsImZpbGUiOiJwYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFBhcnRzUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvcGFydHMnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFBhcnRzUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBwYXJ0c1J1bGUgPSBuZXcgUGFydHNSdWxlKCksXG4gICAgICAgICAgbmFtZSA9ICdwYXJ0cycsXG4gICAgICAgICAgcnVsZXMgPSBbXG4gICAgICAgICAgICBwYXJ0c1J1bGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgcnVsZXMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0c1Byb2R1Y3Rpb247XG4iXX0=