"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _entries = _interopRequireDefault(require("./entries"));
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
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var LookAheadLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(LookAheadLexer, CommonLexer);
    var _super = _createSuper(LookAheadLexer);
    function LookAheadLexer() {
        _classCallCheck(this, LookAheadLexer);
        return _super.apply(this, arguments);
    }
    _createClass(LookAheadLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamLexers.CommonLexer.fromNothing(LookAheadLexer);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamLexers.CommonLexer.fromRules(LookAheadLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _occamLexers.CommonLexer.fromEntries(LookAheadLexer, entries);
            }
        }
    ]);
    return LookAheadLexer;
}(_occamLexers.CommonLexer);
exports.default = LookAheadLexer;
_defineProperty(LookAheadLexer, "entries", _entries.default);
_defineProperty(LookAheadLexer, "EndOfLineToken", _occamLexers.EndOfLineNonSignificantToken);
_defineProperty(LookAheadLexer, "WhitespaceToken", _occamLexers.WhitespaceToken);
_defineProperty(LookAheadLexer, "EndOfLineCommentToken", null);
_defineProperty(LookAheadLexer, "RegularExpressionToken", null);
_defineProperty(LookAheadLexer, "SingleLineCommentToken", null);
_defineProperty(LookAheadLexer, "EndOfMultiLineCommentToken", null);
_defineProperty(LookAheadLexer, "StartOfMultiLineCommentToken", null);
_defineProperty(LookAheadLexer, "MiddleOfMultiLineCommentToken", null);
_defineProperty(LookAheadLexer, "SinglyQuotedStringLiteralToken", null);
_defineProperty(LookAheadLexer, "DoublyQuotedStringLiteralToken", null);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb29rQWhlYWQvbGV4ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDb21tb25MZXhlciwgV2hpdGVzcGFjZVRva2VuLCBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5cclxuaW1wb3J0IGVudHJpZXMgZnJvbSBcIi4vZW50cmllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9va0FoZWFkTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbjtcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBSZWd1bGFyRXhwcmVzc2lvblRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbU5vdGhpbmcoTG9va0FoZWFkTGV4ZXIpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21SdWxlcyhMb29rQWhlYWRMZXhlciwgcnVsZXMpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhMb29rQWhlYWRMZXhlciwgZW50cmllcyk7IH1cclxufVxyXG4iXSwibmFtZXMiOlsiTG9va0FoZWFkTGV4ZXIiLCJmcm9tTm90aGluZyIsIkNvbW1vbkxleGVyIiwiZnJvbVJ1bGVzIiwicnVsZXMiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJFbmRPZkxpbmVUb2tlbiIsIkVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJFbmRPZkxpbmVDb21tZW50VG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUUrRCxHQUFjLENBQWQsWUFBYztBQUVyRSxHQUFXLENBQVgsUUFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFVkEsY0FBYyxpQkFBcEIsUUFBUTs7O2FBQUZBLGNBQWM7Ozs7OztZQXVCMUJDLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBQUNDLFlBQVcsYUFBQ0QsV0FBVyxDQUFDRCxjQUFjO1lBQUcsQ0FBQzs7O1lBRWpFRyxHQUFTLEVBQVRBLENBQVM7bUJBQWhCLFFBQVEsQ0FBREEsU0FBUyxDQUFDQyxLQUFLLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUNGLFlBQVcsYUFBQ0MsU0FBUyxDQUFDSCxjQUFjLEVBQUVJLEtBQUs7WUFBRyxDQUFDOzs7WUFFekVDLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLENBQUNDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQ0osWUFBVyxhQUFDRyxXQUFXLENBQUNMLGNBQWMsRUFBRU0sT0FBTztZQUFHLENBQUM7Ozs7RUEzQjlDSixZQUFXO2tCQUFsQ0YsY0FBYztnQkFBZEEsY0FBYyxFQUMxQk0sQ0FBTyxVQUFHQSxRQUFPO2dCQURMTixjQUFjLEVBRzFCTyxDQUFjLGlCQUFHQyxZQUE0QjtnQkFIakNSLGNBQWMsRUFLMUJTLENBQWUsa0JBQUdBLFlBQWU7Z0JBTHJCVCxjQUFjLEVBTzFCVSxDQUFxQix3QkFBRyxJQUFJO2dCQVBoQlYsY0FBYyxFQVMxQlcsQ0FBc0IseUJBQUcsSUFBSTtnQkFUakJYLGNBQWMsRUFXMUJZLENBQXNCLHlCQUFHLElBQUk7Z0JBWGpCWixjQUFjLEVBYTFCYSxDQUEwQiw2QkFBRyxJQUFJO2dCQWJyQmIsY0FBYyxFQWUxQmMsQ0FBNEIsK0JBQUcsSUFBSTtnQkFmdkJkLGNBQWMsRUFpQjFCZSxDQUE2QixnQ0FBRyxJQUFJO2dCQWpCeEJmLGNBQWMsRUFtQjFCZ0IsQ0FBOEIsaUNBQUcsSUFBSTtnQkFuQnpCaEIsY0FBYyxFQXFCMUJpQixDQUE4QixpQ0FBRyxJQUFJIn0=