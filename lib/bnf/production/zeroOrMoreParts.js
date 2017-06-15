'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    ZeroOrMorePartsNode = require('../node/zeroOrMoreParts'),
    ZeroOrMorePartsDefinition = require('../definition/zeroOrMoreParts');

var ZeroOrMorePartsProduction = function (_Production) {
  _inherits(ZeroOrMorePartsProduction, _Production);

  function ZeroOrMorePartsProduction() {
    _classCallCheck(this, ZeroOrMorePartsProduction);

    var zeroOrMorePartsDefinition = new ZeroOrMorePartsDefinition(),
        name = 'zeroOrMoreParts',
        zeroOrMoreParts = [zeroOrMorePartsDefinition],
        Node = ZeroOrMorePartsNode;

    return _possibleConstructorReturn(this, (ZeroOrMorePartsProduction.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsProduction)).call(this, name, zeroOrMoreParts, Node));
  }

  return ZeroOrMorePartsProduction;
}(Production);

module.exports = ZeroOrMorePartsProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi96ZXJvT3JNb3JlUGFydHMuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJaZXJvT3JNb3JlUGFydHNOb2RlIiwiWmVyb09yTW9yZVBhcnRzRGVmaW5pdGlvbiIsIlplcm9Pck1vcmVQYXJ0c1Byb2R1Y3Rpb24iLCJ6ZXJvT3JNb3JlUGFydHNEZWZpbml0aW9uIiwibmFtZSIsInplcm9Pck1vcmVQYXJ0cyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxzQkFBc0JELFFBQVEseUJBQVIsQ0FENUI7QUFBQSxJQUVNRSw0QkFBNEJGLFFBQVEsK0JBQVIsQ0FGbEM7O0lBSU1HLHlCOzs7QUFDSix1Q0FBYztBQUFBOztBQUNaLFFBQU1DLDRCQUE0QixJQUFJRix5QkFBSixFQUFsQztBQUFBLFFBQ01HLE9BQU8saUJBRGI7QUFBQSxRQUVNQyxrQkFBa0IsQ0FDaEJGLHlCQURnQixDQUZ4QjtBQUFBLFFBS01HLE9BQU9OLG1CQUxiOztBQURZLGlKQVFOSSxJQVJNLEVBUUFDLGVBUkEsRUFRaUJDLElBUmpCO0FBU2I7OztFQVZxQ1IsVTs7QUFheENTLE9BQU9DLE9BQVAsR0FBaUJOLHlCQUFqQiIsImZpbGUiOiJ6ZXJvT3JNb3JlUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBaZXJvT3JNb3JlUGFydHNOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS96ZXJvT3JNb3JlUGFydHMnKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c0RlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3plcm9Pck1vcmVQYXJ0cycpO1xuXG5jbGFzcyBaZXJvT3JNb3JlUGFydHNQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c0RlZmluaXRpb24gPSBuZXcgWmVyb09yTW9yZVBhcnRzRGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5hbWUgPSAnemVyb09yTW9yZVBhcnRzJyxcbiAgICAgICAgICB6ZXJvT3JNb3JlUGFydHMgPSBbXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gWmVyb09yTW9yZVBhcnRzTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIHplcm9Pck1vcmVQYXJ0cywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFplcm9Pck1vcmVQYXJ0c1Byb2R1Y3Rpb247XG4iXX0=