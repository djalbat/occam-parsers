"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Definition = require("../definition"),
    EpsilonPart = require("../part/terminal/epsilon");

var EpsilonDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(EpsilonDefinition, _Definition);

  function EpsilonDefinition() {
    _classCallCheck(this, EpsilonDefinition);

    var epsilonPart = new EpsilonPart(),
        parts = [epsilonPart];
    return _possibleConstructorReturn(this, _getPrototypeOf(EpsilonDefinition).call(this, parts));
  }

  return EpsilonDefinition;
}(Definition);

module.exports = EpsilonDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVwc2lsb24uanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInJlcXVpcmUiLCJFcHNpbG9uUGFydCIsIkVwc2lsb25EZWZpbml0aW9uIiwiZXBzaWxvblBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsZUFBRCxDQUExQjtBQUFBLElBQ01DLFdBQVcsR0FBR0QsT0FBTyxDQUFDLDBCQUFELENBRDNCOztJQUdNRSxpQjs7O0FBQ0osK0JBQWM7QUFBQTs7QUFDWixRQUFNQyxXQUFXLEdBQUcsSUFBSUYsV0FBSixFQUFwQjtBQUFBLFFBQ01HLEtBQUssR0FBRyxDQUNORCxXQURNLENBRGQ7QUFEWSwwRkFNTkMsS0FOTTtBQU9iOzs7RUFSNkJMLFU7O0FBV2hDTSxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLGlCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZShcIi4uL2RlZmluaXRpb25cIiksXG4gICAgICBFcHNpbG9uUGFydCA9IHJlcXVpcmUoXCIuLi9wYXJ0L3Rlcm1pbmFsL2Vwc2lsb25cIik7XG5cbmNsYXNzIEVwc2lsb25EZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGVwc2lsb25QYXJ0ID0gbmV3IEVwc2lsb25QYXJ0KCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBlcHNpbG9uUGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVwc2lsb25EZWZpbml0aW9uO1xuIl19