'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../rule'),
    SignificantTokenTypePart = require('../../part/significantTokenType');

var NameSignificantTokenTypeRule = function (_Rule) {
  _inherits(NameSignificantTokenTypeRule, _Rule);

  function NameSignificantTokenTypeRule() {
    _classCallCheck(this, NameSignificantTokenTypeRule);

    var noWhitespace = false,
        nameSignificantTokenType = 'name',
        nameSignificantTokenTypePart = new SignificantTokenTypePart(nameSignificantTokenType, noWhitespace),
        parts = [nameSignificantTokenTypePart];

    return _possibleConstructorReturn(this, (NameSignificantTokenTypeRule.__proto__ || Object.getPrototypeOf(NameSignificantTokenTypeRule)).call(this, parts));
  }

  return NameSignificantTokenTypeRule;
}(Rule);

module.exports = NameSignificantTokenTypeRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcnVsZS9zaWduaWZpY2FudFRva2VuVHlwZS9uYW1lLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwiTmFtZVNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsIm5vV2hpdGVzcGFjZSIsIm5hbWVTaWduaWZpY2FudFRva2VuVHlwZSIsIm5hbWVTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsWUFBUixDQUFiO0FBQUEsSUFDTUMsMkJBQTJCRCxRQUFRLGlDQUFSLENBRGpDOztJQUdNRSw0Qjs7O0FBQ0osMENBQWM7QUFBQTs7QUFDWixRQUFNQyxlQUFlLEtBQXJCO0FBQUEsUUFDTUMsMkJBQTJCLE1BRGpDO0FBQUEsUUFFTUMsK0JBQStCLElBQUlKLHdCQUFKLENBQTZCRyx3QkFBN0IsRUFBdURELFlBQXZELENBRnJDO0FBQUEsUUFHTUcsUUFBUSxDQUNORCw0QkFETSxDQUhkOztBQURZLHVKQVFOQyxLQVJNO0FBU2I7OztFQVZ3Q1AsSTs7QUFhM0NRLE9BQU9DLE9BQVAsR0FBaUJOLDRCQUFqQiIsImZpbGUiOiJuYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vLi4vcnVsZScpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBOYW1lU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIG5hbWVTaWduaWZpY2FudFRva2VuVHlwZSA9ICduYW1lJyxcbiAgICAgICAgICBuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydChuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5hbWVTaWduaWZpY2FudFRva2VuVHlwZVJ1bGU7XG4iXX0=