"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _definition = _interopRequireDefault(require("../definition"));
var _significantTokenType = _interopRequireDefault(require("../part/terminal/significantTokenType"));
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
var SignificantTokenTypeDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(SignificantTokenTypeDefinition, Definition);
    var _super = _createSuper(SignificantTokenTypeDefinition);
    function SignificantTokenTypeDefinition(significantTokenType) {
        _classCallCheck(this, SignificantTokenTypeDefinition);
        var significantTokenTypePart = new _significantTokenType.default(significantTokenType), parts = [
            significantTokenTypePart
        ];
        return _super.call(this, parts);
    }
    return SignificantTokenTypeDefinition;
}(_definition.default);
exports.default = SignificantTokenTypeDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3NpZ25pZmljYW50VG9rZW5UeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC9zaWduaWZpY2FudFRva2VuVHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3Ioc2lnbmlmaWNhbnRUb2tlblR5cGUpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0KHNpZ25pZmljYW50VG9rZW5UeXBlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24iLCJzaWduaWZpY2FudFRva2VuVHlwZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsIlNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsInBhcnRzIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFQUFiO3dCQUFBO0FBRXVCLEdBQWUsQ0FBZixXQUFlO0FBQ0QsR0FBdUMsQ0FBdkMscUJBQXVDOzs7Ozs7Ozs7Ozs7Ozs7S0FINUU7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFLZSxHQUFLLENBQUNBLDhCQUE4QixpQkFBcEMsUUFBUTt5REFMdkI7O2FBS3FCQSw4QkFBOEIsQ0FDckNDLG9CQUFvQjs2REFObEM7UUFPSSxHQUFLLENBQUNDLHdCQUF3QixHQUFHLEdBQUcsQ0FBQ0MscUJBQXdCLFNBQUNGLG9CQUFvQixHQUM1RUcsS0FBSyxHQUFHLENBQUM7WUFDUEYsd0JBQXdCO1FBQzFCLENBQUM7aUNBRURFLEtBQUs7OztFQVA2Q0MsV0FBVTtrQkFBakRMLDhCQUE4QixBQUxuRCJ9