'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    OneOrMorePartsPart = require('../../common/part/oneOrMoreParts'),
    SignificantTokenTypePart = require('../../common/part/significantTokenType');

var VerticalSpaceDefinition = function (_Definition) {
  _inherits(VerticalSpaceDefinition, _Definition);

  function VerticalSpaceDefinition() {
    _classCallCheck(this, VerticalSpaceDefinition);

    var terminalPart = null,
        noWhitespace = false,
        endOfLineProductionName = 'endOfLine',
        endOfLineSignificantTokenType = 'endOfLine',
        oneOrMoreEndOfLineProductionNamePartsPart = new OneOrMorePartsPart(terminalPart, endOfLineProductionName, noWhitespace),
        endOfLineSignificantTokenTypePart = new SignificantTokenTypePart(endOfLineSignificantTokenType, noWhitespace),
        parts = [oneOrMoreEndOfLineProductionNamePartsPart];

    return _possibleConstructorReturn(this, (VerticalSpaceDefinition.__proto__ || Object.getPrototypeOf(VerticalSpaceDefinition)).call(this, parts));
  }

  return VerticalSpaceDefinition;
}(Definition);

module.exports = VerticalSpaceDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi92ZXJ0aWNhbFNwYWNlLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwiVmVydGljYWxTcGFjZURlZmluaXRpb24iLCJ0ZXJtaW5hbFBhcnQiLCJub1doaXRlc3BhY2UiLCJlbmRPZkxpbmVQcm9kdWN0aW9uTmFtZSIsImVuZE9mTGluZVNpZ25pZmljYW50VG9rZW5UeXBlIiwib25lT3JNb3JlRW5kT2ZMaW5lUHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnQiLCJlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSxrQ0FBUixDQUQzQjtBQUFBLElBRU1FLDJCQUEyQkYsUUFBUSx3Q0FBUixDQUZqQzs7SUFJTUcsdUI7OztBQUNKLHFDQUFjO0FBQUE7O0FBQ1osUUFBTUMsZUFBZSxJQUFyQjtBQUFBLFFBQ01DLGVBQWUsS0FEckI7QUFBQSxRQUVNQywwQkFBMEIsV0FGaEM7QUFBQSxRQUdNQyxnQ0FBZ0MsV0FIdEM7QUFBQSxRQUlNQyw0Q0FBNEMsSUFBSVAsa0JBQUosQ0FBdUJHLFlBQXZCLEVBQXFDRSx1QkFBckMsRUFBOERELFlBQTlELENBSmxEO0FBQUEsUUFLTUksb0NBQW9DLElBQUlQLHdCQUFKLENBQTZCSyw2QkFBN0IsRUFBNERGLFlBQTVELENBTDFDO0FBQUEsUUFNTUssUUFBUSxDQUNORix5Q0FETSxDQU5kOztBQURZLDZJQVdORSxLQVhNO0FBWWI7OztFQWJtQ1gsVTs7QUFnQnRDWSxPQUFPQyxPQUFQLEdBQWlCVCx1QkFBakIiLCJmaWxlIjoidmVydGljYWxTcGFjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L29uZU9yTW9yZVBhcnRzJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBWZXJ0aWNhbFNwYWNlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFBhcnQgPSBudWxsLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIGVuZE9mTGluZVByb2R1Y3Rpb25OYW1lID0gJ2VuZE9mTGluZScsXG4gICAgICAgICAgZW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlblR5cGUgPSAnZW5kT2ZMaW5lJyxcbiAgICAgICAgICBvbmVPck1vcmVFbmRPZkxpbmVQcm9kdWN0aW9uTmFtZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQodGVybWluYWxQYXJ0LCBlbmRPZkxpbmVQcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0KGVuZE9mTGluZVNpZ25pZmljYW50VG9rZW5UeXBlLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb25lT3JNb3JlRW5kT2ZMaW5lUHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0aWNhbFNwYWNlRGVmaW5pdGlvbjtcbiJdfQ==