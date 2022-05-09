"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _error = _interopRequireDefault(require("../node/bnf/error"));
var _error1 = _interopRequireDefault(require("../definition/error"));
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
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
var ErrorRule = /*#__PURE__*/ function(Rule) {
    _inherits(ErrorRule, Rule);
    var _super = _createSuper(ErrorRule);
    function ErrorRule() {
        _classCallCheck(this, ErrorRule);
        var errorDefinition = new _error1.default(), name = _ruleNames.ErrorRuleName, ambiguous = false, definitions = [
            errorDefinition
        ], Node = _error.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return ErrorRule;
}(_rule.default);
exports.default = ErrorRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2Vycm9yLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IEVycm9yQk5GTm9kZSBmcm9tIFwiLi4vbm9kZS9ibmYvZXJyb3JcIjtcbmltcG9ydCBFcnJvckRlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vZXJyb3JcIjtcblxuaW1wb3J0IHsgRXJyb3JSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGVycm9yRGVmaW5pdGlvbiA9IG5ldyBFcnJvckRlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gRXJyb3JSdWxlTmFtZSxcbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGVycm9yRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IEVycm9yQk5GTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb2RlKTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJFcnJvclJ1bGUiLCJlcnJvckRlZmluaXRpb24iLCJFcnJvckRlZmluaXRpb24iLCJuYW1lIiwiRXJyb3JSdWxlTmFtZSIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9kZSIsIkVycm9yQk5GTm9kZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFSSxJQUFBLEtBQVMsa0NBQVQsU0FBUyxFQUFBO0FBQ0QsSUFBQSxNQUFtQixrQ0FBbkIsbUJBQW1CLEVBQUE7QUFDaEIsSUFBQSxPQUFxQixrQ0FBckIscUJBQXFCLEVBQUE7QUFFbkIsSUFBQSxVQUFjLFdBQWQsY0FBYyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLFNBQVMsaUJDUjNCLEFEUVk7OzthQUFNQSxTQUFTOztRQUUxQixJQUFNQyxlQUFlLEdBQUcsSUFBSUMsT0FBZSxRQUFBLEVBQUUsRUFDdkNDLElBQUksR0FBR0MsVUFBYSxjQUFBLEVBQ3BCQyxTQUFTLEdBQUcsS0FBSyxFQUNqQkMsV0FBVyxHQUFHO1lBQ1pMLGVBQWU7U0FDaEIsRUFDRE0sSUFBSSxHQUFHQyxNQUFZLFFBQUEsQUFBQztpQ0FFcEJMLElBQUksRUFBRUUsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLElBQUk7OztDQUUzQyxDQVpzQ0UsS0FBSSxRQUFBLENBWTFDO2tCQVpvQlQsU0FBUyJ9