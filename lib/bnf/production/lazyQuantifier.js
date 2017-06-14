'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    LazyQuantifierDefinition = require('../definition/lazyQuantifier');

var LazyQuantifierProduction = function (_Production) {
  _inherits(LazyQuantifierProduction, _Production);

  function LazyQuantifierProduction() {
    _classCallCheck(this, LazyQuantifierProduction);

    var lazyQuantifierDefinition = new LazyQuantifierDefinition(),
        name = 'lazyQuantifier',
        lazyQuantifier = [lazyQuantifierDefinition],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (LazyQuantifierProduction.__proto__ || Object.getPrototypeOf(LazyQuantifierProduction)).call(this, name, lazyQuantifier, Node));
  }

  return LazyQuantifierProduction;
}(Production);

module.exports = LazyQuantifierProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9sYXp5UXVhbnRpZmllci5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIkxhenlRdWFudGlmaWVyRGVmaW5pdGlvbiIsIkxhenlRdWFudGlmaWVyUHJvZHVjdGlvbiIsImxhenlRdWFudGlmaWVyRGVmaW5pdGlvbiIsIm5hbWUiLCJsYXp5UXVhbnRpZmllciIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsK0JBQVIsQ0FEeEI7QUFBQSxJQUVNRSwyQkFBMkJGLFFBQVEsOEJBQVIsQ0FGakM7O0lBSU1HLHdCOzs7QUFDSixzQ0FBYztBQUFBOztBQUNaLFFBQU1DLDJCQUEyQixJQUFJRix3QkFBSixFQUFqQztBQUFBLFFBQ01HLE9BQU8sZ0JBRGI7QUFBQSxRQUVNQyxpQkFBaUIsQ0FDZkYsd0JBRGUsQ0FGdkI7QUFBQSxRQUtNRyxPQUFPTixlQUxiOztBQURZLCtJQVFOSSxJQVJNLEVBUUFDLGNBUkEsRUFRZ0JDLElBUmhCO0FBU2I7OztFQVZvQ1IsVTs7QUFhdkNTLE9BQU9DLE9BQVAsR0FBaUJOLHdCQUFqQiIsImZpbGUiOiJsYXp5UXVhbnRpZmllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBMYXp5UXVhbnRpZmllckRlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL2xhenlRdWFudGlmaWVyJyk7XG5cbmNsYXNzIExhenlRdWFudGlmaWVyUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBsYXp5UXVhbnRpZmllckRlZmluaXRpb24gPSBuZXcgTGF6eVF1YW50aWZpZXJEZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9ICdsYXp5UXVhbnRpZmllcicsXG4gICAgICAgICAgbGF6eVF1YW50aWZpZXIgPSBbXG4gICAgICAgICAgICBsYXp5UXVhbnRpZmllckRlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBsYXp5UXVhbnRpZmllciwgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExhenlRdWFudGlmaWVyUHJvZHVjdGlvbjtcbiJdfQ==