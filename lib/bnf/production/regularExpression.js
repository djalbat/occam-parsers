'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    RegularExpressionSignificantTokenTypeRule = require('../rule/significantTokenType/regularExpression');

var RegularExpressionProduction = function (_Production) {
  _inherits(RegularExpressionProduction, _Production);

  function RegularExpressionProduction() {
    _classCallCheck(this, RegularExpressionProduction);

    var regularExpressionSignificantTokenTypeRule = new RegularExpressionSignificantTokenTypeRule(),
        name = 'regularExpression',
        rules = [regularExpressionSignificantTokenTypeRule],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (RegularExpressionProduction.__proto__ || Object.getPrototypeOf(RegularExpressionProduction)).call(this, name, rules, Node));
  }

  return RegularExpressionProduction;
}(Production);

module.exports = RegularExpressionProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlJlZ3VsYXJFeHByZXNzaW9uU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwiUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uIiwicmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLCtCQUFSLENBRHhCO0FBQUEsSUFFTUUsNENBQTRDRixRQUFRLGdEQUFSLENBRmxEOztJQUlNRywyQjs7O0FBQ0oseUNBQWM7QUFBQTs7QUFDWixRQUFNQyw0Q0FBNEMsSUFBSUYseUNBQUosRUFBbEQ7QUFBQSxRQUNNRyxPQUFPLG1CQURiO0FBQUEsUUFFTUMsUUFBUSxDQUNORix5Q0FETSxDQUZkO0FBQUEsUUFLTUcsT0FBT04sZUFMYjs7QUFEWSxxSkFRTkksSUFSTSxFQVFBQyxLQVJBLEVBUU9DLElBUlA7QUFTYjs7O0VBVnVDUixVOztBQWExQ1MsT0FBT0MsT0FBUCxHQUFpQk4sMkJBQWpCIiwiZmlsZSI6InJlZ3VsYXJFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9zaWduaWZpY2FudFRva2VuVHlwZS9yZWd1bGFyRXhwcmVzc2lvbicpO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSBuZXcgUmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZVJ1bGUoKSxcbiAgICAgICAgICBuYW1lID0gJ3JlZ3VsYXJFeHByZXNzaW9uJyxcbiAgICAgICAgICBydWxlcyA9IFtcbiAgICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIHJ1bGVzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uO1xuIl19