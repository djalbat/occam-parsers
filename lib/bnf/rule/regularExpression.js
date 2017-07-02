'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    RegularExpressionNode = require('../node/regularExpression'),
    SignificantTokenTypeDefinition = require('../definition/significantTokenType');

var RegularExpressionRule = function (_Rule) {
  _inherits(RegularExpressionRule, _Rule);

  function RegularExpressionRule() {
    _classCallCheck(this, RegularExpressionRule);

    var regularExpressionSignificantTokenType = 'regularExpression',
        regularExpressionSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(regularExpressionSignificantTokenType),
        name = 'regularExpression',
        definitions = [regularExpressionSignificantTokenTypeDefinition],
        Node = RegularExpressionNode;

    return _possibleConstructorReturn(this, (RegularExpressionRule.__proto__ || Object.getPrototypeOf(RegularExpressionRule)).call(this, name, definitions, Node));
  }

  return RegularExpressionRule;
}(Rule);

module.exports = RegularExpressionRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlJlZ3VsYXJFeHByZXNzaW9uTm9kZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiIsIlJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsInJlZ3VsYXJFeHByZXNzaW9uU2lnbmlmaWNhbnRUb2tlblR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvblNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLHdCQUF3QkQsUUFBUSwyQkFBUixDQUQ5QjtBQUFBLElBRU1FLGlDQUFpQ0YsUUFBUSxvQ0FBUixDQUZ2Qzs7SUFJTUcscUI7OztBQUNKLG1DQUFjO0FBQUE7O0FBQ1osUUFBTUMsd0NBQXdDLG1CQUE5QztBQUFBLFFBQ01DLGtEQUFrRCxJQUFJSCw4QkFBSixDQUFtQ0UscUNBQW5DLENBRHhEO0FBQUEsUUFFTUUsT0FBTyxtQkFGYjtBQUFBLFFBR01DLGNBQWMsQ0FDWkYsK0NBRFksQ0FIcEI7QUFBQSxRQU1NRyxPQUFPUCxxQkFOYjs7QUFEWSx5SUFTTkssSUFUTSxFQVNBQyxXQVRBLEVBU2FDLElBVGI7QUFVYjs7O0VBWGlDVCxJOztBQWNwQ1UsT0FBT0MsT0FBUCxHQUFpQlAscUJBQWpCIiwiZmlsZSI6InJlZ3VsYXJFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgUmVndWxhckV4cHJlc3Npb25Ob2RlID0gcmVxdWlyZSgnLi4vbm9kZS9yZWd1bGFyRXhwcmVzc2lvbicpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvblJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZSA9ICdyZWd1bGFyRXhwcmVzc2lvbicsXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24gPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uKHJlZ3VsYXJFeHByZXNzaW9uU2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIG5hbWUgPSAncmVndWxhckV4cHJlc3Npb24nLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgcmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBSZWd1bGFyRXhwcmVzc2lvbk5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvblJ1bGU7XG4iXX0=