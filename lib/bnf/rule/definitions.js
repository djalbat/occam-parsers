"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _definitions = _interopRequireDefault(require("../node/definitions"));
var _definitions1 = _interopRequireDefault(require("../definition/definitions"));
var _ruleNames = require("../ruleNames");
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
var DefinitionsRule = function(Rule) {
    _inherits(DefinitionsRule, _rule.default);
    function DefinitionsRule() {
        _classCallCheck(this, DefinitionsRule);
        var definitionsDefinition = new _definitions1.default(), name = _ruleNames.DefinitionsRuleName, definitions = [
            definitionsDefinition
        ], Node1 = _definitions.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionsRule).call(this, name, definitions, Node1));
    }
    return DefinitionsRule;
}(_rule.default);
exports.default = DefinitionsRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9kZWZpbml0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBEZWZpbml0aW9uc05vZGUgZnJvbSBcIi4uL25vZGUvZGVmaW5pdGlvbnNcIjtcbmltcG9ydCBEZWZpbml0aW9uc0RlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vZGVmaW5pdGlvbnNcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbnNSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbnNSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zRGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uc0RlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gRGVmaW5pdGlvbnNSdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGRlZmluaXRpb25zRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IERlZmluaXRpb25zTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsS0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBRUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLGVBQUEsWUFBQSxJQUFBO2NBQUEsZUFBQSxFQU5BLEtBQUE7YUFNQSxlQUFBOzhCQUFBLGVBQUE7WUFFQSxxQkFBQSxPQU5BLGFBQUEsWUFPQSxJQUFBLEdBTEEsVUFBQSxzQkFNQSxXQUFBO0FBQ0EsaUNBQUE7V0FFQSxLQUFBLEdBWkEsWUFBQTtnRUFLQSxlQUFBLGFBU0EsSUFBQSxFQUFBLFdBQUEsRUFBQSxLQUFBOztXQVRBLGVBQUE7RUFOQSxLQUFBO2tCQU1BLGVBQUEifQ==