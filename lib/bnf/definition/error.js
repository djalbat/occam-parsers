"use strict";

var _definition = _interopRequireDefault(require("../definition"));

var _wildcard = _interopRequireDefault(require("../part/terminal/wildcard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ErrorDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(ErrorDefinition, _Definition);

  function ErrorDefinition() {
    _classCallCheck(this, ErrorDefinition);

    var wildcardPart = new _wildcard["default"](),
        parts = [wildcardPart];
    return _possibleConstructorReturn(this, _getPrototypeOf(ErrorDefinition).call(this, parts));
  }

  return ErrorDefinition;
}(_definition["default"]);

module.exports = ErrorDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbIkVycm9yRGVmaW5pdGlvbiIsIndpbGRjYXJkUGFydCIsIldpbGRjYXJkUGFydCIsInBhcnRzIiwiRGVmaW5pdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsZTs7O0FBQ0osNkJBQWM7QUFBQTs7QUFDWixRQUFNQyxZQUFZLEdBQUcsSUFBSUMsb0JBQUosRUFBckI7QUFBQSxRQUNNQyxLQUFLLEdBQUcsQ0FDTkYsWUFETSxDQURkO0FBRFksd0ZBTU5FLEtBTk07QUFPYjs7O0VBUjJCQyxzQjs7QUFXOUJDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQk4sZUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBXaWxkY2FyZFBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvd2lsZGNhcmRcIjtcblxuY2xhc3MgRXJyb3JEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHdpbGRjYXJkUGFydCA9IG5ldyBXaWxkY2FyZFBhcnQoKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHdpbGRjYXJkUGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVycm9yRGVmaW5pdGlvbjtcbiJdfQ==