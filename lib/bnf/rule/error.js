"use strict";

var _rule = _interopRequireDefault(require("../rule"));

var _error = _interopRequireDefault(require("../node/error"));

var _error2 = _interopRequireDefault(require("../definition/error"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ErrorRule = /*#__PURE__*/function (_Rule) {
  _inherits(ErrorRule, _Rule);

  function ErrorRule() {
    _classCallCheck(this, ErrorRule);

    var errorDefinition = new _error2["default"](),
        name = _ruleNames.ErrorRuleName,
        definitions = [errorDefinition],
        Node = _error["default"];
    return _possibleConstructorReturn(this, _getPrototypeOf(ErrorRule).call(this, name, definitions, Node));
  }

  return ErrorRule;
}(_rule["default"]);

module.exports = ErrorRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbIkVycm9yUnVsZSIsImVycm9yRGVmaW5pdGlvbiIsIkVycm9yRGVmaW5pdGlvbiIsIm5hbWUiLCJFcnJvclJ1bGVOYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwiRXJyb3JOb2RlIiwiUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsUzs7O0FBQ0osdUJBQWM7QUFBQTs7QUFDWixRQUFNQyxlQUFlLEdBQUcsSUFBSUMsa0JBQUosRUFBeEI7QUFBQSxRQUNNQyxJQUFJLEdBQUdDLHdCQURiO0FBQUEsUUFFTUMsV0FBVyxHQUFHLENBQ1pKLGVBRFksQ0FGcEI7QUFBQSxRQUtNSyxJQUFJLEdBQUdDLGlCQUxiO0FBRFksa0ZBUU5KLElBUk0sRUFRQUUsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVZxQkUsZ0I7O0FBYXhCQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJWLFNBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgRXJyb3JOb2RlIGZyb20gXCIuLi9ub2RlL2Vycm9yXCI7XG5pbXBvcnQgRXJyb3JEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL2Vycm9yXCI7XG5cbmltcG9ydCB7IEVycm9yUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNsYXNzIEVycm9yUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBlcnJvckRlZmluaXRpb24gPSBuZXcgRXJyb3JEZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9IEVycm9yUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBlcnJvckRlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBFcnJvck5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JSdWxlO1xuIl19