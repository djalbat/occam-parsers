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

    var endOfLineSignificantTokenType = 'endOfLine',
        endOfLineSignificantTokenTypePart = new SignificantTokenTypePart(endOfLineSignificantTokenType),
        oneOrMoreEndOfLineSignificantTokenTypePartsPart = new OneOrMorePartsPart(endOfLineSignificantTokenTypePart),
        parts = [oneOrMoreEndOfLineSignificantTokenTypePartsPart];

    return _possibleConstructorReturn(this, (VerticalSpaceDefinition.__proto__ || Object.getPrototypeOf(VerticalSpaceDefinition)).call(this, parts));
  }

  return VerticalSpaceDefinition;
}(Definition);

module.exports = VerticalSpaceDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi92ZXJ0aWNhbFNwYWNlLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwiVmVydGljYWxTcGFjZURlZmluaXRpb24iLCJlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuVHlwZSIsImVuZE9mTGluZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsIm9uZU9yTW9yZUVuZE9mTGluZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydHNQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsd0JBQVIsQ0FEM0I7QUFBQSxJQUVNRSwyQkFBMkJGLFFBQVEsd0NBQVIsQ0FGakM7O0lBSU1HLHVCOzs7QUFDSixxQ0FBYztBQUFBOztBQUNaLFFBQU1DLGdDQUFnQyxXQUF0QztBQUFBLFFBQ01DLG9DQUFvQyxJQUFJSCx3QkFBSixDQUE2QkUsNkJBQTdCLENBRDFDO0FBQUEsUUFFTUUsa0RBQWtELElBQUlMLGtCQUFKLENBQXVCSSxpQ0FBdkIsQ0FGeEQ7QUFBQSxRQUdNRSxRQUFRLENBQ05ELCtDQURNLENBSGQ7O0FBRFksNklBUU5DLEtBUk07QUFTYjs7O0VBVm1DUixVOztBQWF0Q1MsT0FBT0MsT0FBUCxHQUFpQk4sdUJBQWpCIiwiZmlsZSI6InZlcnRpY2FsU3BhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBPbmVPck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L29uZU9yTW9yZVBhcnRzJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBWZXJ0aWNhbFNwYWNlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuVHlwZSA9ICdlbmRPZkxpbmUnLFxuICAgICAgICAgIGVuZE9mTGluZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQoZW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIG9uZU9yTW9yZUVuZE9mTGluZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuVHlwZVBhcnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb25lT3JNb3JlRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0c1BhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0aWNhbFNwYWNlRGVmaW5pdGlvbjtcbiJdfQ==