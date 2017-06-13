'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    OneOrMorePartsPart = require('../part/oneOrMoreParts'),
    SignificantTokenTypePart = require('../../common/part/significantTokenType');

var VerticalSpaceDefinition = function (_Definition) {
  _inherits(VerticalSpaceDefinition, _Definition);

  function VerticalSpaceDefinition() {
    _classCallCheck(this, VerticalSpaceDefinition);

    var noWhitespace = false,
        endOfLineSignificantTokenType = 'endOfLine',
        endOfLineSignificantTokenTypePart = new SignificantTokenTypePart(endOfLineSignificantTokenType, noWhitespace),
        oneOrMoreEndOfLineSignificantTokenTypePartsPart = new OneOrMorePartsPart(endOfLineSignificantTokenTypePart, noWhitespace),
        parts = [oneOrMoreEndOfLineSignificantTokenTypePartsPart];

    return _possibleConstructorReturn(this, (VerticalSpaceDefinition.__proto__ || Object.getPrototypeOf(VerticalSpaceDefinition)).call(this, parts));
  }

  return VerticalSpaceDefinition;
}(Definition);

module.exports = VerticalSpaceDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi92ZXJ0aWNhbFNwYWNlLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwiVmVydGljYWxTcGFjZURlZmluaXRpb24iLCJub1doaXRlc3BhY2UiLCJlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuVHlwZSIsImVuZE9mTGluZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsIm9uZU9yTW9yZUVuZE9mTGluZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydHNQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsd0JBQVIsQ0FEM0I7QUFBQSxJQUVNRSwyQkFBMkJGLFFBQVEsd0NBQVIsQ0FGakM7O0lBSU1HLHVCOzs7QUFDSixxQ0FBYztBQUFBOztBQUNaLFFBQU1DLGVBQWUsS0FBckI7QUFBQSxRQUNNQyxnQ0FBZ0MsV0FEdEM7QUFBQSxRQUVNQyxvQ0FBb0MsSUFBSUosd0JBQUosQ0FBNkJHLDZCQUE3QixFQUE0REQsWUFBNUQsQ0FGMUM7QUFBQSxRQUdNRyxrREFBa0QsSUFBSU4sa0JBQUosQ0FBdUJLLGlDQUF2QixFQUEwREYsWUFBMUQsQ0FIeEQ7QUFBQSxRQUlNSSxRQUFRLENBQ05ELCtDQURNLENBSmQ7O0FBRFksNklBU05DLEtBVE07QUFVYjs7O0VBWG1DVCxVOztBQWN0Q1UsT0FBT0MsT0FBUCxHQUFpQlAsdUJBQWpCIiwiZmlsZSI6InZlcnRpY2FsU3BhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBPbmVPck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L29uZU9yTW9yZVBhcnRzJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBWZXJ0aWNhbFNwYWNlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuVHlwZSA9ICdlbmRPZkxpbmUnLFxuICAgICAgICAgIGVuZE9mTGluZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQoZW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlblR5cGUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgb25lT3JNb3JlRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KGVuZE9mTGluZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9uZU9yTW9yZUVuZE9mTGluZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydHNQYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxTcGFjZURlZmluaXRpb247XG4iXX0=