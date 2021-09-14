"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _definition = _interopRequireDefault(require("../definition"));
var _wildcard = _interopRequireDefault(require("../part/terminal/wildcard"));
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
var ErrorDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(ErrorDefinition, Definition);
    function ErrorDefinition() {
        _classCallCheck(this, ErrorDefinition);
        var wildcardPart = new _wildcard.default(), parts = [
            wildcardPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(ErrorDefinition).call(this, parts));
    }
    return ErrorDefinition;
}(_definition.default);
exports.default = ErrorDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9lcnJvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBXaWxkY2FyZFBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvd2lsZGNhcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHdpbGRjYXJkUGFydCA9IG5ldyBXaWxkY2FyZFBhcnQoKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHdpbGRjYXJkUGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVcsR0FBZSxDQUFmLFdBQWU7QUFDYixHQUEyQixDQUEzQixTQUEyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUvQixlQUFlO2NBQWYsZUFBZTthQUFmLGVBQWU7OEJBQWYsZUFBZTtRQUVoQyxHQUFLLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FKSCxTQUEyQixZQUsxQyxLQUFLO1lBQ0gsWUFBWTs7Z0VBSkgsZUFBZSxhQU8xQixLQUFLOztXQVBNLGVBQWU7RUFIYixXQUFlO2tCQUdqQixlQUFlIn0=