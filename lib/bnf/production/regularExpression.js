'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    RegularExpressionRule = require('../rule/regularExpression'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var RegularExpressionProduction = function (_Production) {
  _inherits(RegularExpressionProduction, _Production);

  function RegularExpressionProduction() {
    _classCallCheck(this, RegularExpressionProduction);

    var regularExpressionRule = new RegularExpressionRule(),
        name = 'regularExpression',
        rules = [regularExpressionRule],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (RegularExpressionProduction.__proto__ || Object.getPrototypeOf(RegularExpressionProduction)).call(this, name, rules, Node));
  }

  return RegularExpressionProduction;
}(Production);

module.exports = RegularExpressionProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIlJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsIk5vblRlcm1pbmFsTm9kZSIsIlJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbiIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsIm5hbWUiLCJydWxlcyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyx3QkFBd0JELFFBQVEsMkJBQVIsQ0FEOUI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEsK0JBQVIsQ0FGeEI7O0lBSU1HLDJCOzs7QUFDSix5Q0FBYztBQUFBOztBQUNaLFFBQU1DLHdCQUF3QixJQUFJSCxxQkFBSixFQUE5QjtBQUFBLFFBQ01JLE9BQU8sbUJBRGI7QUFBQSxRQUVNQyxRQUFRLENBQ05GLHFCQURNLENBRmQ7QUFBQSxRQUtNRyxPQUFPTCxlQUxiOztBQURZLHFKQVFORyxJQVJNLEVBUUFDLEtBUkEsRUFRT0MsSUFSUDtBQVNiOzs7RUFWdUNSLFU7O0FBYTFDUyxPQUFPQyxPQUFQLEdBQWlCTiwyQkFBakIiLCJmaWxlIjoicmVndWxhckV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3JlZ3VsYXJFeHByZXNzaW9uJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25SdWxlID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUnVsZSgpLFxuICAgICAgICAgIG5hbWUgPSAncmVndWxhckV4cHJlc3Npb24nLFxuICAgICAgICAgIHJ1bGVzID0gW1xuICAgICAgICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIHJ1bGVzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uO1xuIl19