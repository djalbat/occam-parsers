"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SignificantTokenTypeRule;
    }
});
var _occamLexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interopRequireDefault(require("../rule"));
var _significantTokenType = /*#__PURE__*/ _interopRequireDefault(require("../node/bnf/significantTokenType"));
var _significantTokenType1 = /*#__PURE__*/ _interopRequireDefault(require("../definition/significantTokenType"));
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
var typeType = _occamLexers.types.typeType;
var SignificantTokenTypeRule = /*#__PURE__*/ function(Rule) {
    _inherits(SignificantTokenTypeRule, Rule);
    var _super = _createSuper(SignificantTokenTypeRule);
    function SignificantTokenTypeRule() {
        _classCallCheck(this, SignificantTokenTypeRule);
        var typeSignificantTokenType = typeType, typeSignificantTokenTypeDefinition = new _significantTokenType1.default(typeSignificantTokenType), name = _ruleNames.significantTokenTypeRuleName, ambiguous = false, definitions = [
            typeSignificantTokenTypeDefinition
        ], Node = _significantTokenType.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return SignificantTokenTypeRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB0eXBlcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBTaWduaWZpY2FudFRva2VuVHlwZUJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL3NpZ25pZmljYW50VG9rZW5UeXBlXCI7XG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3NpZ25pZmljYW50VG9rZW5UeXBlXCI7XG5cbmltcG9ydCB7IHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgdHlwZVR5cGUgfSA9IHR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgdHlwZVNpZ25pZmljYW50VG9rZW5UeXBlID0gdHlwZVR5cGUsICAvLy9cbiAgICAgICAgICB0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbih0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIG5hbWUgPSBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICB0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gU2lnbmlmaWNhbnRUb2tlblR5cGVCTkZOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwidHlwZVR5cGUiLCJ0eXBlcyIsInR5cGVTaWduaWZpY2FudFRva2VuVHlwZSIsInR5cGVTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24iLCJTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24iLCJuYW1lIiwic2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZSIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9kZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlQk5GTm9kZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVlRQSx3QkFBd0I7OzsyQkFWdkIsY0FBYzt5REFFbkIsU0FBUzt5RUFDYyxrQ0FBa0M7MEVBQy9CLG9DQUFvQzt5QkFFbEMsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0QsSUFBTSxBQUFFQyxRQUFRLEdBQUtDLFlBQUssTUFBQSxDQUFsQkQsUUFBUSxBQUFVLEFBQUM7QUFFWixJQUFBLEFBQU1ELHdCQUF3QixpQkFBOUI7OzthQUFNQSx3QkFBd0I7O1FBRXpDLElBQU1HLHdCQUF3QixHQUFHRixRQUFRLEVBQ25DRyxrQ0FBa0MsR0FBRyxJQUFJQyxzQkFBOEIsUUFBQSxDQUFDRix3QkFBd0IsQ0FBQyxFQUNqR0csSUFBSSxHQUFHQyxVQUE0Qiw2QkFBQSxFQUNuQ0MsU0FBUyxHQUFHLEtBQUssRUFDakJDLFdBQVcsR0FBRztZQUNaTCxrQ0FBa0M7U0FDbkMsRUFDRE0sSUFBSSxHQUFHQyxxQkFBMkIsUUFBQSxBQUFDO2lDQUVuQ0wsSUFBSSxFQUFFRSxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsSUFBSTs7O0NBRTNDLENBYnFERSxLQUFJLFFBQUEsQ0FhekQifQ==