'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NoWhitespacePartNode = require('../node/noWhitespacePart'),
    NoWhitespacePartDefinition = require('../definition/noWhitespacePart');

var NoWhitespacePartProduction = function (_Production) {
  _inherits(NoWhitespacePartProduction, _Production);

  function NoWhitespacePartProduction() {
    _classCallCheck(this, NoWhitespacePartProduction);

    var noWhitespacePartDefinition = new NoWhitespacePartDefinition(),
        name = 'noWhitespacePart',
        noWhitespacePart = [noWhitespacePartDefinition],
        Node = NoWhitespacePartNode;

    return _possibleConstructorReturn(this, (NoWhitespacePartProduction.__proto__ || Object.getPrototypeOf(NoWhitespacePartProduction)).call(this, name, noWhitespacePart, Node));
  }

  return NoWhitespacePartProduction;
}(Production);

module.exports = NoWhitespacePartProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9ub1doaXRlc3BhY2VQYXJ0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiTm9XaGl0ZXNwYWNlUGFydE5vZGUiLCJOb1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiIsIk5vV2hpdGVzcGFjZVBhcnRQcm9kdWN0aW9uIiwibm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24iLCJuYW1lIiwibm9XaGl0ZXNwYWNlUGFydCIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyx1QkFBdUJELFFBQVEsMEJBQVIsQ0FEN0I7QUFBQSxJQUVNRSw2QkFBNkJGLFFBQVEsZ0NBQVIsQ0FGbkM7O0lBSU1HLDBCOzs7QUFDSix3Q0FBYztBQUFBOztBQUNaLFFBQU1DLDZCQUE2QixJQUFJRiwwQkFBSixFQUFuQztBQUFBLFFBQ01HLE9BQU8sa0JBRGI7QUFBQSxRQUVNQyxtQkFBbUIsQ0FDakJGLDBCQURpQixDQUZ6QjtBQUFBLFFBS01HLE9BQU9OLG9CQUxiOztBQURZLG1KQVFOSSxJQVJNLEVBUUFDLGdCQVJBLEVBUWtCQyxJQVJsQjtBQVNiOzs7RUFWc0NSLFU7O0FBYXpDUyxPQUFPQyxPQUFQLEdBQWlCTiwwQkFBakIiLCJmaWxlIjoibm9XaGl0ZXNwYWNlUGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIE5vV2hpdGVzcGFjZVBhcnROb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9ub1doaXRlc3BhY2VQYXJ0JyksXG4gICAgICBOb1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vbm9XaGl0ZXNwYWNlUGFydCcpO1xuXG5jbGFzcyBOb1doaXRlc3BhY2VQYXJ0UHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiA9IG5ldyBOb1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5hbWUgPSAnbm9XaGl0ZXNwYWNlUGFydCcsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydCA9IFtcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9XaGl0ZXNwYWNlUGFydE5vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBub1doaXRlc3BhY2VQYXJ0LCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9XaGl0ZXNwYWNlUGFydFByb2R1Y3Rpb247XG4iXX0=