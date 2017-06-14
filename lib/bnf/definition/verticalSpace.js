'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    OneOrMorePartsPart = require('../part/oneOrMoreParts'),
    SignificantTokenTypePart = require('../part/significantTokenType');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi92ZXJ0aWNhbFNwYWNlLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwiVmVydGljYWxTcGFjZURlZmluaXRpb24iLCJlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuVHlwZSIsImVuZE9mTGluZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsIm9uZU9yTW9yZUVuZE9mTGluZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydHNQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsd0JBQVIsQ0FEM0I7QUFBQSxJQUVNRSwyQkFBMkJGLFFBQVEsOEJBQVIsQ0FGakM7O0lBSU1HLHVCOzs7QUFDSixxQ0FBYztBQUFBOztBQUNaLFFBQU1DLGdDQUFnQyxXQUF0QztBQUFBLFFBQ01DLG9DQUFvQyxJQUFJSCx3QkFBSixDQUE2QkUsNkJBQTdCLENBRDFDO0FBQUEsUUFFTUUsa0RBQWtELElBQUlMLGtCQUFKLENBQXVCSSxpQ0FBdkIsQ0FGeEQ7QUFBQSxRQUdNRSxRQUFRLENBQ05ELCtDQURNLENBSGQ7O0FBRFksNklBUU5DLEtBUk07QUFTYjs7O0VBVm1DUixVOztBQWF0Q1MsT0FBT0MsT0FBUCxHQUFpQk4sdUJBQWpCIiwiZmlsZSI6InZlcnRpY2FsU3BhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBPbmVPck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L29uZU9yTW9yZVBhcnRzJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIFZlcnRpY2FsU3BhY2VEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGVuZE9mTGluZVNpZ25pZmljYW50VG9rZW5UeXBlID0gJ2VuZE9mTGluZScsXG4gICAgICAgICAgZW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydChlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuVHlwZSksXG4gICAgICAgICAgb25lT3JNb3JlRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KGVuZE9mTGluZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvbmVPck1vcmVFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuVHlwZVBhcnRzUGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRpY2FsU3BhY2VEZWZpbml0aW9uO1xuIl19