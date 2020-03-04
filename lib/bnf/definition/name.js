'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexers = require('occam-lexers');

var Definition = require('../definition'),
    SignificantTokenTypePart = require('../part/terminal/significantTokenType');

var types = lexers.types,
    nameType = types.nameType;

var NameDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(NameDefinition, _Definition);

  function NameDefinition() {
    _classCallCheck(this, NameDefinition);

    var nameSignificantTokenType = nameType,
        ///
    nameSignificantTokenTypePart = new SignificantTokenTypePart(nameSignificantTokenType),
        parts = [nameSignificantTokenTypePart];
    return _possibleConstructorReturn(this, _getPrototypeOf(NameDefinition).call(this, parts));
  }

  return NameDefinition;
}(Definition);

module.exports = NameDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hbWUuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkRlZmluaXRpb24iLCJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJ0eXBlcyIsIm5hbWVUeXBlIiwiTmFtZURlZmluaXRpb24iLCJuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGUiLCJuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBdEI7O0FBRUEsSUFBTUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsZUFBRCxDQUExQjtBQUFBLElBQ01FLHdCQUF3QixHQUFHRixPQUFPLENBQUMsdUNBQUQsQ0FEeEM7O0FBR00sSUFBRUcsS0FBRixHQUFZSixNQUFaLENBQUVJLEtBQUY7QUFBQSxJQUNFQyxRQURGLEdBQ2VELEtBRGYsQ0FDRUMsUUFERjs7SUFHQUMsYzs7O0FBQ0osNEJBQWM7QUFBQTs7QUFDWixRQUFNQyx3QkFBd0IsR0FBR0YsUUFBakM7QUFBQSxRQUE0QztBQUN0Q0csSUFBQUEsNEJBQTRCLEdBQUcsSUFBSUwsd0JBQUosQ0FBNkJJLHdCQUE3QixDQURyQztBQUFBLFFBRU1FLEtBQUssR0FBRyxDQUNORCw0QkFETSxDQUZkO0FBRFksdUZBT05DLEtBUE07QUFRYjs7O0VBVDBCUCxVOztBQVk3QlEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTCxjQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Rlcm1pbmFsL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNvbnN0IHsgdHlwZXMgfSA9IGxleGVycyxcbiAgICAgIHsgbmFtZVR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBOYW1lRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGUgPSBuYW1lVHlwZSwgIC8vL1xuICAgICAgICAgIG5hbWVTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0KG5hbWVTaWduaWZpY2FudFRva2VuVHlwZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTmFtZURlZmluaXRpb247XG4iXX0=