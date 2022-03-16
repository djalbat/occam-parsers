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
var TerminalSymbolPart = /*#__PURE__*/ function(TerminalPart) {
    _inherits(TerminalSymbolPart, TerminalPart);
    var _super = _createSuper(TerminalSymbolPart);
    function TerminalSymbolPart(content) {
        _classCallCheck(this, TerminalSymbolPart);
        var _this;
        _this = _super.call(this);
        _this.content = content;
        return _this;
    }
    _createClass(TerminalSymbolPart, [
        {
            key: "parse",
            value: function parse(nodes, state, callback) {
                var parsed;
                var terminalNode = null;
                var savedIndex = state.getSavedIndex(), nextSignificantToken = state.getNextSignificantToken(), significantToken = nextSignificantToken; ///
                if (significantToken !== null) {
                    var content = significantToken.getContent();
                    if (content === this.content) {
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
                var content = this.content.replace(/\\/, "\\\\"), string = "\"".concat(content, "\"");
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(TerminalSymbolPart.prototype), "clone", this).call(this, TerminalSymbolPart, this.content);
            }
        }
    ]);
    return TerminalSymbolPart;
}(_terminal.default);
exports.default = TerminalSymbolPart;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L3Rlcm1pbmFsXCI7XG5pbXBvcnQgVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL3Rlcm1pbmFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsU3ltYm9sUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQpIHtcbiAgICBzdXBlcigpO1xuICAgIFxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG5cdFx0ICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBzdGF0ZS5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpLFxuXHRcdFx0XHRcdHNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgICBpZiAoY29udGVudCA9PT0gdGhpcy5jb250ZW50KSB7XG4gICAgICAgIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZWQgPSAodGVybWluYWxOb2RlICE9PSBudWxsKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIG5vZGVzLnB1c2godGVybWluYWxOb2RlKTtcblxuICAgICAgaWYgKGNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICBub2Rlcy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuICBcbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudC5yZXBsYWNlKC9cXFxcLywgXCJcXFxcXFxcXFwiKSxcbiAgICAgICAgICBzdHJpbmcgPSBgXCIke2NvbnRlbnR9XCJgO1xuICAgIFxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFRlcm1pbmFsU3ltYm9sUGFydCwgdGhpcy5jb250ZW50KTsgfVxufVxuIl0sIm5hbWVzIjpbIlRlcm1pbmFsU3ltYm9sUGFydCIsImNvbnRlbnQiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInRlcm1pbmFsTm9kZSIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJnZXROZXh0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRDb250ZW50IiwiVGVybWluYWxOb2RlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJwdXNoIiwicG9wIiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJyZXBsYWNlIiwic3RyaW5nIiwiY2xvbmUiLCJUZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RUFBYjt3QkFBQTtBQUV5QixHQUFxQixDQUFyQixTQUFx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