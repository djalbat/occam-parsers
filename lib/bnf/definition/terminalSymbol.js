"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _definition = _interopRequireDefault(require("../definition"));
var _terminalSymbol = _interopRequireDefault(require("../part/terminal/terminalSymbol"));
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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var TerminalSymbolDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(TerminalSymbolDefinition, Definition);
    var _super = _createSuper(TerminalSymbolDefinition);
    function TerminalSymbolDefinition(content) {
        _classCallCheck(this, TerminalSymbolDefinition);
        var terminalSymbolPart = new _terminalSymbol.default(content), parts = [
            terminalSymbolPart
        ];
        return _super.call(this, parts);
    }
    return TerminalSymbolDefinition;
}(_definition.default);
exports.default = TerminalSymbolDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi90ZXJtaW5hbFN5bWJvbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBUZXJtaW5hbFN5bWJvbFBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2xcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGNvbnRlbnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsImNvbnRlbnQiLCJ0ZXJtaW5hbFN5bWJvbFBhcnQiLCJwYXJ0cyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVyxHQUFlLENBQWYsV0FBZTtBQUNQLEdBQWlDLENBQWpDLGVBQWlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUzQ0Esd0JBQXdCLGlCQUE5QixRQUFRO2NBQUZBLHdCQUF3Qjs4QkFBeEJBLHdCQUF3QjthQUF4QkEsd0JBQXdCLENBQy9CQyxPQUFPOzhCQURBRCx3QkFBd0I7UUFFekMsR0FBSyxDQUFDRSxrQkFBa0IsR0FBRyxHQUFHLENBSkgsZUFBaUMsU0FJVkQsT0FBTyxHQUNuREUsS0FBSyxHQUFHLENBQUM7WUFDUEQsa0JBQWtCO1FBQ3BCLENBQUM7aUNBRURDLEtBQUs7O1dBUE1ILHdCQUF3QjtFQUh0QixXQUFlO2tCQUdqQkEsd0JBQXdCIn0=