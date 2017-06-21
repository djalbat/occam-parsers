'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../../bnf/production');

var TermProduction = function (_Production) {
  _inherits(TermProduction, _Production);

  function TermProduction() {
    _classCallCheck(this, TermProduction);

    return _possibleConstructorReturn(this, (TermProduction.__proto__ || Object.getPrototypeOf(TermProduction)).apply(this, arguments));
  }

  _createClass(TermProduction, null, [{
    key: 'fromGrammar',
    value: function fromGrammar(grammar) {}
  }]);

  return TermProduction;
}(Production);

module.exports = TermProduction;

var defaultGrammar = '\n\n\n     term                                 ::=   compoundTerm \n     \n                                            |   variable\n\n\n\n     compoundTerm                         ::=   constructorName<NO_WHITESPACE>parenthesisedTerms?\n\n\n\n     variable                             ::=   variableName\n     \n     \n\n';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS9wcm9kdWN0aW9uL3Rlcm0uanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJUZXJtUHJvZHVjdGlvbiIsImdyYW1tYXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdEdyYW1tYXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxzQkFBUixDQUFuQjs7SUFFTUMsYzs7Ozs7Ozs7Ozs7Z0NBQ2VDLE8sRUFBUyxDQUUzQjs7OztFQUgwQkgsVTs7QUFNN0JJLE9BQU9DLE9BQVAsR0FBaUJILGNBQWpCOztBQUVBLElBQU1JLHNWQUFOIiwiZmlsZSI6InRlcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi8uLi9ibmYvcHJvZHVjdGlvbicpO1xuXG5jbGFzcyBUZXJtUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBzdGF0aWMgZnJvbUdyYW1tYXIoZ3JhbW1hcikge1xuICAgIFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybVByb2R1Y3Rpb247XG5cbmNvbnN0IGRlZmF1bHRHcmFtbWFyID0gYFxuXG5cbiAgICAgdGVybSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGNvbXBvdW5kVGVybSBcbiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICB2YXJpYWJsZVxuXG5cblxuICAgICBjb21wb3VuZFRlcm0gICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgY29uc3RydWN0b3JOYW1lPE5PX1dISVRFU1BBQ0U+cGFyZW50aGVzaXNlZFRlcm1zP1xuXG5cblxuICAgICB2YXJpYWJsZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdmFyaWFibGVOYW1lXG4gICAgIFxuICAgICBcblxuYDsiXX0=