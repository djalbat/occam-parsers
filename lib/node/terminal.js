"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TerminalNode;
    }
});
var _terminalNode = /*#__PURE__*/ _interop_require_default(require("../parseTree/terminalNode"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
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
var TerminalNode = /*#__PURE__*/ function() {
    function TerminalNode(significantToken) {
        _class_call_check(this, TerminalNode);
        this.significantToken = significantToken;
    }
    _create_class(TerminalNode, [
        {
            key: "getSignificantToken",
            value: function getSignificantToken() {
                return this.significantToken;
            }
        },
        {
            key: "isStartOfContentNode",
            value: function isStartOfContentNode() {
                var startOfContentNode = false;
                return startOfContentNode;
            }
        },
        {
            key: "isNoWhitespaceNode",
            value: function isNoWhitespaceNode() {
                var noWhitespaceNode = false;
                return noWhitespaceNode;
            }
        },
        {
            key: "isEpsilonNode",
            value: function isEpsilonNode() {
                var epsilonNode = false;
                return epsilonNode;
            }
        },
        {
            key: "isTerminalNode",
            value: function isTerminalNode() {
                var terminalNode = true;
                return terminalNode;
            }
        },
        {
            key: "isNonTerminalNode",
            value: function isNonTerminalNode() {
                var nonTerminalNode = false;
                return nonTerminalNode;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.significantToken.getType();
            }
        },
        {
            key: "getContent",
            value: function getContent() {
                return this.significantToken.getContent();
            }
        },
        {
            key: "getPrecedence",
            value: function getPrecedence() {
                var precedence = null;
                return precedence;
            }
        },
        {
            key: "isLowerPrecedence",
            value: function isLowerPrecedence(parentRuleName, parentPrecedence) {
                var lowerPrecedence = false;
                return lowerPrecedence;
            }
        },
        {
            key: "getFirstSignificantTokenIndex",
            value: function getFirstSignificantTokenIndex(tokens) {
                var significantTokenIndex = this.getSignificantTokenIndex(tokens), firstSignificantTokenIndex = significantTokenIndex; ///
                return firstSignificantTokenIndex;
            }
        },
        {
            key: "getLastSignificantTokenIndex",
            value: function getLastSignificantTokenIndex(tokens) {
                var significantTokenIndex = this.getSignificantTokenIndex(tokens), lastSignificantTokenIndex = significantTokenIndex; ///
                return lastSignificantTokenIndex;
            }
        },
        {
            key: "getSignificantTokenIndex",
            value: function getSignificantTokenIndex(tokens) {
                var significantTokenIndex = null;
                if (this.significantToken !== null) {
                    significantTokenIndex = tokens.indexOf(this.significantToken);
                }
                return significantTokenIndex;
            }
        },
        {
            key: "isIncludedIn",
            value: function isIncludedIn(node) {
                var _this = this;
                var includedIn = false;
                if (this === node) {
                    includedIn = true;
                } else {
                    var nodeNonTerminalNode = node.isNonTerminalNode();
                    if (nodeNonTerminalNode) {
                        var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
                        includedIn = childNodes.some(function(childNode) {
                            var includedInChildNode = _this.isIncludedIn(childNode);
                            if (includedInChildNode) {
                                return true;
                            }
                        });
                    }
                }
                return includedIn;
            }
        },
        {
            key: "match",
            value: function match(node) {
                var depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity, exactly = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
                var matches = false;
                var nodeTerminalNode = node.isTerminalNode();
                if (nodeTerminalNode) {
                    var terminalNode = node, significantToken = terminalNode.getSignificantToken();
                    matches = exactly ? this.significantToken === significantToken : this.significantToken.match(significantToken);
                }
                return matches;
            }
        },
        {
            key: "setSignificantToken",
            value: function setSignificantToken(significantToken) {
                this.significantToken = significantToken;
            }
        },
        {
            key: "asParseTree",
            value: function asParseTree(tokens) {
                var terminalNode = this, terminalNodeParseTree = _terminalNode.default.fromTerminalNodeAndTokens(terminalNode, tokens), parseTree = terminalNodeParseTree; ///
                return parseTree;
            }
        },
        {
            key: "clone",
            value: function clone() {
                for(var _len = arguments.length, remainingArguments = new Array(_len), _key = 0; _key < _len; _key++){
                    remainingArguments[_key] = arguments[_key];
                }
                var Class = this.constructor, significantToken = this.significantToken, terminalNode = _construct(Class, [
                    significantToken
                ].concat(_to_consumable_array(remainingArguments)));
                return terminalNode;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                if (Class === undefined) {
                    Class = TerminalNode; ///
                }
                var significantToken = null, terminalNode = _construct(Class, [
                    significantToken
                ].concat(_to_consumable_array(remainingArguments)));
                return terminalNode;
            }
        },
        {
            key: "fromSignificantToken",
            value: function fromSignificantToken(Class, significantToken) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                if (significantToken === undefined) {
                    significantToken = Class; ///
                    Class = TerminalNode; ///
                }
                var terminalNode = _construct(Class, [
                    significantToken
                ].concat(_to_consumable_array(remainingArguments)));
                return terminalNode;
            }
        }
    ]);
    return TerminalNode;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvdGVybWluYWxOb2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW4pIHtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgaXNTdGFydE9mQ29udGVudE5vZGUoKSB7XG4gICAgY29uc3Qgc3RhcnRPZkNvbnRlbnROb2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc3RhcnRPZkNvbnRlbnROb2RlO1xuICB9XG5cbiAgaXNOb1doaXRlc3BhY2VOb2RlKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZU5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBub1doaXRlc3BhY2VOb2RlO1xuICB9XG5cbiAgaXNFcHNpbG9uTm9kZSgpIHtcbiAgICBjb25zdCBlcHNpbG9uTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGVwc2lsb25Ob2RlO1xuICB9XG5cbiAgaXNUZXJtaW5hbE5vZGUoKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgaXNOb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHsgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCk7IH1cblxuICBnZXRDb250ZW50KCkgeyByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKTsgfVxuXG4gIGdldFByZWNlZGVuY2UoKSAge1xuICAgIGNvbnN0IHByZWNlZGVuY2UgPSBudWxsO1xuXG4gICAgcmV0dXJuIHByZWNlZGVuY2U7XG4gIH1cblxuICBpc0xvd2VyUHJlY2VkZW5jZShwYXJlbnRSdWxlTmFtZSwgcGFyZW50UHJlY2VkZW5jZSkge1xuICAgIGNvbnN0IGxvd2VyUHJlY2VkZW5jZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGxvd2VyUHJlY2VkZW5jZTtcbiAgfVxuXG4gIGdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucykge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRoaXMuZ2V0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBzaWduaWZpY2FudFRva2VuSW5kZXg7IC8vL1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4O1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuSW5kZXggPSB0aGlzLmdldFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBzaWduaWZpY2FudFRva2VuSW5kZXg7IC8vL1xuXG4gICAgcmV0dXJuIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXg7XG4gIH1cblxuICBnZXRTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW5JbmRleCA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5zaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBzaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZih0aGlzLnNpZ25pZmljYW50VG9rZW4pO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuSW5kZXg7XG4gIH1cblxuICBpc0luY2x1ZGVkSW4obm9kZSkge1xuICAgIGxldCBpbmNsdWRlZEluID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcyA9PT0gbm9kZSkge1xuICAgICAgaW5jbHVkZWRJbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICBpbmNsdWRlZEluID0gY2hpbGROb2Rlcy5zb21lKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBpbmNsdWRlZEluQ2hpbGROb2RlID0gdGhpcy5pc0luY2x1ZGVkSW4oY2hpbGROb2RlKTtcblxuICAgICAgICAgIGlmIChpbmNsdWRlZEluQ2hpbGROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmNsdWRlZEluO1xuICB9XG5cbiAgbWF0Y2gobm9kZSwgZGVwdGggPSBJbmZpbml0eSwgZXhhY3RseSA9IGZhbHNlKSB7XG4gICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICAgIG1hdGNoZXMgPSBleGFjdGx5ID9cbiAgICAgICAgICAgICAgICAgICh0aGlzLnNpZ25pZmljYW50VG9rZW4gPT09IHNpZ25pZmljYW50VG9rZW4pIDpcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5tYXRjaChzaWduaWZpY2FudFRva2VuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHNldFNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbikge1xuICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnModGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IHRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGNsb25lKC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IENsYXNzID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhzaWduaWZpY2FudFRva2VuLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIENsYXNzID0gVGVybWluYWxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gbnVsbCxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3Moc2lnbmlmaWNhbnRUb2tlbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNpZ25pZmljYW50VG9rZW4oQ2xhc3MsIHNpZ25pZmljYW50VG9rZW4sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChzaWduaWZpY2FudFRva2VuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gVGVybWluYWxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3Moc2lnbmlmaWNhbnRUb2tlbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJpc1N0YXJ0T2ZDb250ZW50Tm9kZSIsInN0YXJ0T2ZDb250ZW50Tm9kZSIsImlzTm9XaGl0ZXNwYWNlTm9kZSIsIm5vV2hpdGVzcGFjZU5vZGUiLCJpc0Vwc2lsb25Ob2RlIiwiZXBzaWxvbk5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZ2V0VHlwZSIsImdldENvbnRlbnQiLCJnZXRQcmVjZWRlbmNlIiwicHJlY2VkZW5jZSIsImlzTG93ZXJQcmVjZWRlbmNlIiwicGFyZW50UnVsZU5hbWUiLCJwYXJlbnRQcmVjZWRlbmNlIiwibG93ZXJQcmVjZWRlbmNlIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJ0b2tlbnMiLCJzaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRTaWduaWZpY2FudFRva2VuSW5kZXgiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiaW5kZXhPZiIsImlzSW5jbHVkZWRJbiIsIm5vZGUiLCJpbmNsdWRlZEluIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwic29tZSIsImNoaWxkTm9kZSIsImluY2x1ZGVkSW5DaGlsZE5vZGUiLCJtYXRjaCIsImRlcHRoIiwiSW5maW5pdHkiLCJleGFjdGx5IiwibWF0Y2hlcyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJzZXRTaWduaWZpY2FudFRva2VuIiwiYXNQYXJzZVRyZWUiLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zIiwicGFyc2VUcmVlIiwiY2xvbmUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJDbGFzcyIsImNvbnN0cnVjdG9yIiwiZnJvbU5vdGhpbmciLCJ1bmRlZmluZWQiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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