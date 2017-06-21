'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../../bnf/production');

var MetastatementProduction = function (_Production) {
  _inherits(MetastatementProduction, _Production);

  function MetastatementProduction() {
    _classCallCheck(this, MetastatementProduction);

    return _possibleConstructorReturn(this, (MetastatementProduction.__proto__ || Object.getPrototypeOf(MetastatementProduction)).apply(this, arguments));
  }

  _createClass(MetastatementProduction, null, [{
    key: 'fromGrammar',
    value: function fromGrammar(grammar) {}
  }]);

  return MetastatementProduction;
}(Production);

module.exports = MetastatementProduction;

var defaultGrammar = '\n\n\n\n     metastatement                        ::=   proofAssertion\n           \n                                            |   qualifiedMetavariable \n                                            \n                                            |   metavariable \n      \n      \n      \n     proofAssertion                       ::=   context "\u22A2" metastatement "::" metastatement\n\n\n\n     qualifiedMetavariable                ::=   qualifiedMetavariableName<NO_WHITESPACE>parenthesisedTerms\n     \n     metavariable                         ::=   metavariableName\n\n     \n\n';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS9wcm9kdWN0aW9uL21ldGFzdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJNZXRhc3RhdGVtZW50UHJvZHVjdGlvbiIsImdyYW1tYXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdEdyYW1tYXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxzQkFBUixDQUFuQjs7SUFFTUMsdUI7Ozs7Ozs7Ozs7O2dDQUNlQyxPLEVBQVMsQ0FFM0I7Ozs7RUFIbUNILFU7O0FBTXRDSSxPQUFPQyxPQUFQLEdBQWlCSCx1QkFBakI7O0FBRUEsSUFBTUksOGxCQUFOIiwiZmlsZSI6Im1ldGFzdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi8uLi9ibmYvcHJvZHVjdGlvbicpO1xuXG5jbGFzcyBNZXRhc3RhdGVtZW50UHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBzdGF0aWMgZnJvbUdyYW1tYXIoZ3JhbW1hcikge1xuICAgIFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWV0YXN0YXRlbWVudFByb2R1Y3Rpb247XG5cbmNvbnN0IGRlZmF1bHRHcmFtbWFyID0gYFxuXG5cblxuICAgICBtZXRhc3RhdGVtZW50ICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgcHJvb2ZBc3NlcnRpb25cbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBxdWFsaWZpZWRNZXRhdmFyaWFibGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgbWV0YXZhcmlhYmxlIFxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICBwcm9vZkFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgY29udGV4dCBcIuKKolwiIG1ldGFzdGF0ZW1lbnQgXCI6OlwiIG1ldGFzdGF0ZW1lbnRcblxuXG5cbiAgICAgcXVhbGlmaWVkTWV0YXZhcmlhYmxlICAgICAgICAgICAgICAgIDo6PSAgIHF1YWxpZmllZE1ldGF2YXJpYWJsZU5hbWU8Tk9fV0hJVEVTUEFDRT5wYXJlbnRoZXNpc2VkVGVybXNcbiAgICAgXG4gICAgIG1ldGF2YXJpYWJsZSAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBtZXRhdmFyaWFibGVOYW1lXG5cbiAgICAgXG5cbmA7XG4iXX0=