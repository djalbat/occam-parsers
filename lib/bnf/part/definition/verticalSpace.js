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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9kZWZpbml0aW9uL3ZlcnRpY2FsU3BhY2UuanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInJlcXVpcmUiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJWZXJ0aWNhbFNwYWNlRGVmaW5pdGlvbiIsInRlcm1pbmFsUGFydCIsIm5vV2hpdGVzcGFjZSIsImVuZE9mTGluZVByb2R1Y3Rpb25OYW1lIiwiZW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlblR5cGUiLCJvbmVPck1vcmVFbmRPZkxpbmVQcm9kdWN0aW9uTmFtZVBhcnRzUGFydCIsImVuZE9mTGluZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLGtDQUFSLENBRDNCO0FBQUEsSUFFTUUsMkJBQTJCRixRQUFRLHdDQUFSLENBRmpDOztJQUlNRyx1Qjs7O0FBQ0oscUNBQWM7QUFBQTs7QUFDWixRQUFNQyxlQUFlLElBQXJCO0FBQUEsUUFDTUMsZUFBZSxLQURyQjtBQUFBLFFBRU1DLDBCQUEwQixXQUZoQztBQUFBLFFBR01DLGdDQUFnQyxXQUh0QztBQUFBLFFBSU1DLDRDQUE0QyxJQUFJUCxrQkFBSixDQUF1QkcsWUFBdkIsRUFBcUNFLHVCQUFyQyxFQUE4REQsWUFBOUQsQ0FKbEQ7QUFBQSxRQUtNSSxvQ0FBb0MsSUFBSVAsd0JBQUosQ0FBNkJLLDZCQUE3QixFQUE0REYsWUFBNUQsQ0FMMUM7QUFBQSxRQU1NSyxRQUFRLENBQ05GLHlDQURNLENBTmQ7O0FBRFksNklBV05FLEtBWE07QUFZYjs7O0VBYm1DWCxVOztBQWdCdENZLE9BQU9DLE9BQVAsR0FBaUJULHVCQUFqQiIsImZpbGUiOiJ2ZXJ0aWNhbFNwYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvb25lT3JNb3JlUGFydHMnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIFZlcnRpY2FsU3BhY2VEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IG51bGwsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgZW5kT2ZMaW5lUHJvZHVjdGlvbk5hbWUgPSAnZW5kT2ZMaW5lJyxcbiAgICAgICAgICBlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuVHlwZSA9ICdlbmRPZkxpbmUnLFxuICAgICAgICAgIG9uZU9yTW9yZUVuZE9mTGluZVByb2R1Y3Rpb25OYW1lUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydCh0ZXJtaW5hbFBhcnQsIGVuZE9mTGluZVByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIGVuZE9mTGluZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQoZW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlblR5cGUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvbmVPck1vcmVFbmRPZkxpbmVQcm9kdWN0aW9uTmFtZVBhcnRzUGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRpY2FsU3BhY2VEZWZpbml0aW9uO1xuIl19