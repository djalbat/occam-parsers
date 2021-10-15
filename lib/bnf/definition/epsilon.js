"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _definition = _interopRequireDefault(require("../definition"));
var _epsilon = _interopRequireDefault(require("../part/terminal/epsilon"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var EpsilonDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(EpsilonDefinition, Definition);
    function EpsilonDefinition() {
        _classCallCheck(this, EpsilonDefinition);
        var epsilonPart = new _epsilon.default(), parts = [
            epsilonPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(EpsilonDefinition).call(this, parts));
    }
    return EpsilonDefinition;
}(_definition.default);
exports.default = EpsilonDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9lcHNpbG9uLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJFcHNpbG9uUGFydCIsIkVwc2lsb25EZWZpbml0aW9uIiwiY29uc3RydWN0b3IiLCJlcHNpbG9uUGFydCIsInBhcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVXLEdBQWUsQ0FBZixXQUFlO0FBQ2QsR0FBMEIsQ0FBMUIsUUFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFN0IsaUJBQWlCLGlCQUF2QixRQUFRO2NBQUYsaUJBQWlCO2FBQWpCLGlCQUFpQjs4QkFBakIsaUJBQWlCO1FBRWxDLEdBQUssQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUpILFFBQTBCLFlBS3hDLEtBQUssR0FBRyxDQUFDO1lBQ1AsV0FBVztRQUNiLENBQUM7Z0VBTFUsaUJBQWlCLGFBTzVCLEtBQUs7O1dBUE0saUJBQWlCO0VBSGYsV0FBZTtrQkFHakIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgRXBzaWxvblBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvZXBzaWxvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcHNpbG9uRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBlcHNpbG9uUGFydCA9IG5ldyBFcHNpbG9uUGFydCgpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgZXBzaWxvblBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cbiJdfQ==