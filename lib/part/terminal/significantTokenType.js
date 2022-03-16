"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _terminal = _interopRequireDefault(require("../../part/terminal"));
var _terminal1 = _interopRequireDefault(require("../../node/terminal"));
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
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
var SignificantTokenTypePart = /*#__PURE__*/ function(TerminalPart) {
    _inherits(SignificantTokenTypePart, TerminalPart);
    var _super = _createSuper(SignificantTokenTypePart);
    function SignificantTokenTypePart(significantTokenType) {
        _classCallCheck(this, SignificantTokenTypePart);
        var _this;
        _this = _super.call(this);
        _this.significantTokenType = significantTokenType;
        return _this;
    }
    _createClass(SignificantTokenTypePart, [
        {
            key: "parse",
            value: function parse(nodes, state, callback) {
                var parsed;
                var terminalNode = null;
                var savedIndex = state.getSavedIndex(), nextSignificantToken = state.getNextSignificantToken(), significantToken = nextSignificantToken; ///
                if (significantToken !== null) {
                    var significantTokenType = significantToken.getType();
                    if (significantTokenType === this.significantTokenType) {
                        terminalNode = _terminal1.default.fromSignificantToken(significantToken);
                    }
                }
                parsed = terminalNode !== null;
                if (parsed) {
                    nodes.push(terminalNode);
                    if (callback !== null) {
                        parsed = callback();
                        if (!parsed) {
                            nodes.pop();
                        }
                    }
                }
                if (!parsed) {
                    state.backtrack(savedIndex);
                }
                return parsed;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var string = "[".concat(this.significantTokenType, "]");
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(SignificantTokenTypePart.prototype), "clone", this).call(this, SignificantTokenTypePart, this.significantTokenType);
            }
        }
    ]);
    return SignificantTokenTypePart;
}(_terminal.default);
exports.default = SignificantTokenTypePart;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL3NpZ25pZmljYW50VG9rZW5UeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L3Rlcm1pbmFsXCI7XG5pbXBvcnQgVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL3Rlcm1pbmFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW5UeXBlKSB7XG4gICAgc3VwZXIoKTtcbiAgICBcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlID0gc2lnbmlmaWNhbnRUb2tlblR5cGU7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG5cdFx0ICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBzdGF0ZS5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpLFxuXHRcdFx0XHRcdHNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKTtcblxuICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW5UeXBlID09PSB0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlKSB7XG4gICAgICAgIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZWQgPSAodGVybWluYWxOb2RlICE9PSBudWxsKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIG5vZGVzLnB1c2godGVybWluYWxOb2RlKTtcblxuICAgICAgaWYgKGNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICBub2Rlcy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IGBbJHt0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlfV1gO1xuICAgIFxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCwgdGhpcy5zaWduaWZpY2FudFRva2VuVHlwZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJzaWduaWZpY2FudFRva2VuVHlwZSIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyc2VkIiwidGVybWluYWxOb2RlIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFR5cGUiLCJUZXJtaW5hbE5vZGUiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsInB1c2giLCJwb3AiLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsInN0cmluZyIsImNsb25lIiwiVGVybWluYWxQYXJ0Il0sIm1hcHBp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