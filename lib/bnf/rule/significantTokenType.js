'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    SignificantTokenTypeNode = require('../node/significantTokenType'),
    SignificantTokenTypeDefinition = require('../definition/significantTokenType');

var types = lexers.types,
    typeType = types.typeType,
    SignificantTokenTypeRuleName = ruleNames.SignificantTokenTypeRuleName;

var SignificantTokenTypeRule = function (_Rule) {
      _inherits(SignificantTokenTypeRule, _Rule);

      function SignificantTokenTypeRule() {
            _classCallCheck(this, SignificantTokenTypeRule);

            var typeSignificantTokenType = typeType,
                ///
            typeSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(typeSignificantTokenType),
                name = SignificantTokenTypeRuleName,
                definitions = [typeSignificantTokenTypeDefinition],
                Node = SignificantTokenTypeNode;

            return _possibleConstructorReturn(this, (SignificantTokenTypeRule.__proto__ || Object.getPrototypeOf(SignificantTokenTypeRule)).call(this, name, definitions, Node));
      }

      return SignificantTokenTypeRule;
}(Rule);

module.exports = SignificantTokenTypeRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9zaWduaWZpY2FudFRva2VuVHlwZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiUnVsZSIsInJ1bGVOYW1lcyIsIlNpZ25pZmljYW50VG9rZW5UeXBlTm9kZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiIsInR5cGVzIiwidHlwZVR5cGUiLCJTaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwidHlwZVNpZ25pZmljYW50VG9rZW5UeXBlIiwidHlwZVNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01FLFlBQVlGLFFBQVEsY0FBUixDQURsQjtBQUFBLElBRU1HLDJCQUEyQkgsUUFBUSw4QkFBUixDQUZqQztBQUFBLElBR01JLGlDQUFpQ0osUUFBUSxvQ0FBUixDQUh2Qzs7QUFLTSxJQUFFSyxLQUFGLEdBQVlOLE1BQVosQ0FBRU0sS0FBRjtBQUFBLElBQ0VDLFFBREYsR0FDZUQsS0FEZixDQUNFQyxRQURGO0FBQUEsSUFFRUMsNEJBRkYsR0FFbUNMLFNBRm5DLENBRUVLLDRCQUZGOztJQUlBQyx3Qjs7O0FBQ0osMENBQWM7QUFBQTs7QUFDWixnQkFBTUMsMkJBQTJCSCxRQUFqQztBQUFBLGdCQUE0QztBQUN0Q0ksaURBQXFDLElBQUlOLDhCQUFKLENBQW1DSyx3QkFBbkMsQ0FEM0M7QUFBQSxnQkFFTUUsT0FBT0osNEJBRmI7QUFBQSxnQkFHTUssY0FBYyxDQUNaRixrQ0FEWSxDQUhwQjtBQUFBLGdCQU1NRyxPQUFPVix3QkFOYjs7QUFEWSx1SkFTTlEsSUFUTSxFQVNBQyxXQVRBLEVBU2FDLElBVGI7QUFVYjs7O0VBWG9DWixJOztBQWN2Q2EsT0FBT0MsT0FBUCxHQUFpQlAsd0JBQWpCIiwiZmlsZSI6InNpZ25pZmljYW50VG9rZW5UeXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9zaWduaWZpY2FudFRva2VuVHlwZScpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jb25zdCB7IHR5cGVzIH0gPSBsZXhlcnMsXG4gICAgICB7IHR5cGVUeXBlIH0gPSB0eXBlcyxcbiAgICAgIHsgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgdHlwZVNpZ25pZmljYW50VG9rZW5UeXBlID0gdHlwZVR5cGUsICAvLy9cbiAgICAgICAgICB0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbih0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIG5hbWUgPSBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgdHlwZVNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFNpZ25pZmljYW50VG9rZW5UeXBlTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZTtcbiJdfQ==