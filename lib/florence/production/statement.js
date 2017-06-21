'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../../bnf/production');

var StatementProduction = function (_Production) {
  _inherits(StatementProduction, _Production);

  function StatementProduction() {
    _classCallCheck(this, StatementProduction);

    return _possibleConstructorReturn(this, (StatementProduction.__proto__ || Object.getPrototypeOf(StatementProduction)).apply(this, arguments));
  }

  _createClass(StatementProduction, null, [{
    key: 'fromGrammar',
    value: function fromGrammar(grammar) {}
  }]);

  return StatementProduction;
}(Production);

module.exports = StatementProduction;

var defaultGrammar = '\n\n\n\n     statement                            ::=   typeAssertion \n                                                  \n                                            |   equality \n                                                  \n                                            |   expression\n\n\n\n     typeAssertion                        ::=   expression ":" typeName\n\n     equality                             ::=   expression "=" expression\n\n     expression                           ::=   term\n\n\n\n';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS9wcm9kdWN0aW9uL3N0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIlN0YXRlbWVudFByb2R1Y3Rpb24iLCJncmFtbWFyIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlZmF1bHRHcmFtbWFyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsc0JBQVIsQ0FBbkI7O0lBRU1DLG1COzs7Ozs7Ozs7OztnQ0FDZUMsTyxFQUFTLENBRTNCOzs7O0VBSCtCSCxVOztBQU1sQ0ksT0FBT0MsT0FBUCxHQUFpQkgsbUJBQWpCOztBQUVBLElBQU1JLG9oQkFBTiIsImZpbGUiOiJzdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi8uLi9ibmYvcHJvZHVjdGlvbicpO1xuXG5jbGFzcyBTdGF0ZW1lbnRQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIHN0YXRpYyBmcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdGF0ZW1lbnRQcm9kdWN0aW9uO1xuXG5jb25zdCBkZWZhdWx0R3JhbW1hciA9IGBcblxuXG5cbiAgICAgc3RhdGVtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHR5cGVBc3NlcnRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgZXF1YWxpdHkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgZXhwcmVzc2lvblxuXG5cblxuICAgICB0eXBlQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgZXhwcmVzc2lvbiBcIjpcIiB0eXBlTmFtZVxuXG4gICAgIGVxdWFsaXR5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBleHByZXNzaW9uIFwiPVwiIGV4cHJlc3Npb25cblxuICAgICBleHByZXNzaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdGVybVxuXG5cblxuYDtcbiJdfQ==