'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    RegularExpressionNode = require('../node/regularExpression'),
    SignificantTokenTypeDefinition = require('../definition/significantTokenType');

var types = lexers.types,
    regularExpressionType = types.regularExpressionType,
    RegularExpressionRuleName = ruleNames.RegularExpressionRuleName;

var RegularExpressionRule = function (_Rule) {
      _inherits(RegularExpressionRule, _Rule);

      function RegularExpressionRule() {
            _classCallCheck(this, RegularExpressionRule);

            var regularExpressionSignificantTokenType = regularExpressionType,
                ///
            regularExpressionSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(regularExpressionSignificantTokenType),
                name = RegularExpressionRuleName,
                definitions = [regularExpressionSignificantTokenTypeDefinition],
                Node = RegularExpressionNode;

            return _possibleConstructorReturn(this, (RegularExpressionRule.__proto__ || Object.getPrototypeOf(RegularExpressionRule)).call(this, name, definitions, Node));
      }

      return RegularExpressionRule;
}(Rule);

module.exports = RegularExpressionRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiUnVsZSIsInJ1bGVOYW1lcyIsIlJlZ3VsYXJFeHByZXNzaW9uTm9kZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiIsInR5cGVzIiwicmVndWxhckV4cHJlc3Npb25UeXBlIiwiUmVndWxhckV4cHJlc3Npb25SdWxlTmFtZSIsIlJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsInJlZ3VsYXJFeHByZXNzaW9uU2lnbmlmaWNhbnRUb2tlblR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvblNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01FLFlBQVlGLFFBQVEsY0FBUixDQURsQjtBQUFBLElBRU1HLHdCQUF3QkgsUUFBUSwyQkFBUixDQUY5QjtBQUFBLElBR01JLGlDQUFpQ0osUUFBUSxvQ0FBUixDQUh2Qzs7QUFLTSxJQUFFSyxLQUFGLEdBQVlOLE1BQVosQ0FBRU0sS0FBRjtBQUFBLElBQ0VDLHFCQURGLEdBQzRCRCxLQUQ1QixDQUNFQyxxQkFERjtBQUFBLElBRUVDLHlCQUZGLEdBRWdDTCxTQUZoQyxDQUVFSyx5QkFGRjs7SUFJQUMscUI7OztBQUNKLHVDQUFjO0FBQUE7O0FBQ1osZ0JBQU1DLHdDQUF3Q0gscUJBQTlDO0FBQUEsZ0JBQXNFO0FBQ2hFSSw4REFBa0QsSUFBSU4sOEJBQUosQ0FBbUNLLHFDQUFuQyxDQUR4RDtBQUFBLGdCQUVNRSxPQUFPSix5QkFGYjtBQUFBLGdCQUdNSyxjQUFjLENBQ1pGLCtDQURZLENBSHBCO0FBQUEsZ0JBTU1HLE9BQU9WLHFCQU5iOztBQURZLGlKQVNOUSxJQVRNLEVBU0FDLFdBVEEsRUFTYUMsSUFUYjtBQVViOzs7RUFYaUNaLEk7O0FBY3BDYSxPQUFPQyxPQUFQLEdBQWlCUCxxQkFBakIiLCJmaWxlIjoicmVndWxhckV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvbk5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3JlZ3VsYXJFeHByZXNzaW9uJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNvbnN0IHsgdHlwZXMgfSA9IGxleGVycyxcbiAgICAgIHsgcmVndWxhckV4cHJlc3Npb25UeXBlIH0gPSB0eXBlcyxcbiAgICAgIHsgUmVndWxhckV4cHJlc3Npb25SdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvblJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZSA9IHJlZ3VsYXJFeHByZXNzaW9uVHlwZSwgIC8vL1xuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbihyZWd1bGFyRXhwcmVzc2lvblNpZ25pZmljYW50VG9rZW5UeXBlKSxcbiAgICAgICAgICBuYW1lID0gUmVndWxhckV4cHJlc3Npb25SdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gUmVndWxhckV4cHJlc3Npb25Ob2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVndWxhckV4cHJlc3Npb25SdWxlO1xuIl19