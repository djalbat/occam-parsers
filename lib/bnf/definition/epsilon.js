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
var EpsilonDefinition = function(Definition) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9lcHNpbG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IEVwc2lsb25QYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL2Vwc2lsb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXBzaWxvbkRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgZXBzaWxvblBhcnQgPSBuZXcgRXBzaWxvblBhcnQoKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIGVwc2lsb25QYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVyxXQUFlO0lBQ2QsUUFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFN0IsaUJBQWlCO2NBQWpCLGlCQUFpQjthQUFqQixpQkFBaUI7OEJBQWpCLGlCQUFpQjtZQUU1QixXQUFXLE9BSkcsUUFBMEIsWUFLeEMsS0FBSztZQUNILFdBQVc7O2dFQUpGLGlCQUFpQixhQU81QixLQUFLOztXQVBNLGlCQUFpQjtFQUhmLFdBQWU7a0JBR2pCLGlCQUFpQiJ9