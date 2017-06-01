'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../rule'),
    SignificantTokenTypePart = require('../../part/significantTokenType');

var StringSignificantTokenTypeRule = function (_Rule) {
  _inherits(StringSignificantTokenTypeRule, _Rule);

  function StringSignificantTokenTypeRule() {
    _classCallCheck(this, StringSignificantTokenTypeRule);

    var noWhitespace = false,
        stringSignificantTokenType = 'string',
        stringSignificantTokenTypePart = new SignificantTokenTypePart(stringSignificantTokenType, noWhitespace),
        parts = [stringSignificantTokenTypePart];

    return _possibleConstructorReturn(this, (StringSignificantTokenTypeRule.__proto__ || Object.getPrototypeOf(StringSignificantTokenTypeRule)).call(this, parts));
  }

  return StringSignificantTokenTypeRule;
}(Rule);

module.exports = StringSignificantTokenTypeRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcnVsZS9zaWduaWZpY2FudFRva2VuVHlwZS9zdHJpbmcuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJTdHJpbmdTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJub1doaXRlc3BhY2UiLCJzdHJpbmdTaWduaWZpY2FudFRva2VuVHlwZSIsInN0cmluZ1NpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxZQUFSLENBQWI7QUFBQSxJQUNNQywyQkFBMkJELFFBQVEsaUNBQVIsQ0FEakM7O0lBR01FLDhCOzs7QUFDSiw0Q0FBYztBQUFBOztBQUNaLFFBQU1DLGVBQWUsS0FBckI7QUFBQSxRQUNNQyw2QkFBNkIsUUFEbkM7QUFBQSxRQUVNQyxpQ0FBaUMsSUFBSUosd0JBQUosQ0FBNkJHLDBCQUE3QixFQUF5REQsWUFBekQsQ0FGdkM7QUFBQSxRQUdNRyxRQUFRLENBQ05ELDhCQURNLENBSGQ7O0FBRFksMkpBUU5DLEtBUk07QUFTYjs7O0VBVjBDUCxJOztBQWE3Q1EsT0FBT0MsT0FBUCxHQUFpQk4sOEJBQWpCIiwiZmlsZSI6InN0cmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uLy4uL3J1bGUnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY2xhc3MgU3RyaW5nU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIHN0cmluZ1NpZ25pZmljYW50VG9rZW5UeXBlID0gJ3N0cmluZycsXG4gICAgICAgICAgc3RyaW5nU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydChzdHJpbmdTaWduaWZpY2FudFRva2VuVHlwZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHN0cmluZ1NpZ25pZmljYW50VG9rZW5UeXBlUGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZ1NpZ25pZmljYW50VG9rZW5UeXBlUnVsZTtcbiJdfQ==