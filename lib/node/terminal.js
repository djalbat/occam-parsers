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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
            key: "getSignificantTokens",
            value: function getSignificantTokens() {
                var significantTokens = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                if (this.significantToken !== null) {
                    significantTokens.push(this.significantToken);
                }
                return significantTokens;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvdGVybWluYWxOb2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW4pIHtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgaXNTdGFydE9mQ29udGVudE5vZGUoKSB7XG4gICAgY29uc3Qgc3RhcnRPZkNvbnRlbnROb2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc3RhcnRPZkNvbnRlbnROb2RlO1xuICB9XG5cbiAgaXNOb1doaXRlc3BhY2VOb2RlKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZU5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBub1doaXRlc3BhY2VOb2RlO1xuICB9XG5cbiAgaXNFcHNpbG9uTm9kZSgpIHtcbiAgICBjb25zdCBlcHNpbG9uTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGVwc2lsb25Ob2RlO1xuICB9XG5cbiAgaXNUZXJtaW5hbE5vZGUoKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgaXNOb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHsgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCk7IH1cblxuICBnZXRDb250ZW50KCkgeyByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKTsgfVxuXG4gIGdldFByZWNlZGVuY2UoKSAge1xuICAgIGNvbnN0IHByZWNlZGVuY2UgPSBudWxsO1xuXG4gICAgcmV0dXJuIHByZWNlZGVuY2U7XG4gIH1cblxuICBpc0xvd2VyUHJlY2VkZW5jZShwYXJlbnRSdWxlTmFtZSwgcGFyZW50UHJlY2VkZW5jZSkge1xuICAgIGNvbnN0IGxvd2VyUHJlY2VkZW5jZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGxvd2VyUHJlY2VkZW5jZTtcbiAgfVxuXG4gIGdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucykge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRoaXMuZ2V0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBzaWduaWZpY2FudFRva2VuSW5kZXg7IC8vL1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4O1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuSW5kZXggPSB0aGlzLmdldFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBzaWduaWZpY2FudFRva2VuSW5kZXg7IC8vL1xuXG4gICAgcmV0dXJuIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXg7XG4gIH1cblxuICBnZXRTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW5JbmRleCA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5zaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBzaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZih0aGlzLnNpZ25pZmljYW50VG9rZW4pO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuSW5kZXg7XG4gIH1cblxuICBnZXRTaWduaWZpY2FudFRva2VucyhzaWduaWZpY2FudFRva2VucyA9IFtdKSB7XG4gICAgaWYgKHRoaXMuc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlbnMucHVzaCh0aGlzLnNpZ25pZmljYW50VG9rZW4pO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VucztcbiAgfVxuXG4gIGlzSW5jbHVkZWRJbihub2RlKSB7XG4gICAgbGV0IGluY2x1ZGVkSW4gPSBmYWxzZTtcblxuICAgIGlmICh0aGlzID09PSBub2RlKSB7XG4gICAgICBpbmNsdWRlZEluID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgIGluY2x1ZGVkSW4gPSBjaGlsZE5vZGVzLnNvbWUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluY2x1ZGVkSW5DaGlsZE5vZGUgPSB0aGlzLmlzSW5jbHVkZWRJbihjaGlsZE5vZGUpO1xuXG4gICAgICAgICAgaWYgKGluY2x1ZGVkSW5DaGlsZE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluY2x1ZGVkSW47XG4gIH1cblxuICBtYXRjaChub2RlLCBkZXB0aCA9IEluZmluaXR5LCBleGFjdGx5ID0gZmFsc2UpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgICAgbWF0Y2hlcyA9IGV4YWN0bHkgP1xuICAgICAgICAgICAgICAgICAgKHRoaXMuc2lnbmlmaWNhbnRUb2tlbiA9PT0gc2lnbmlmaWNhbnRUb2tlbikgOlxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWduaWZpY2FudFRva2VuLm1hdGNoKHNpZ25pZmljYW50VG9rZW4pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBUZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbVRlcm1pbmFsTm9kZUFuZFRva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgY2xvbmUoLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgQ2xhc3MgPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSB0aGlzLnNpZ25pZmljYW50VG9rZW4sXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gbmV3IENsYXNzKHNpZ25pZmljYW50VG9rZW4sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoQ2xhc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgQ2xhc3MgPSBUZXJtaW5hbE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhzaWduaWZpY2FudFRva2VuLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlbihDbGFzcywgc2lnbmlmaWNhbnRUb2tlbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBUZXJtaW5hbE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhzaWduaWZpY2FudFRva2VuLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGUiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImlzU3RhcnRPZkNvbnRlbnROb2RlIiwic3RhcnRPZkNvbnRlbnROb2RlIiwiaXNOb1doaXRlc3BhY2VOb2RlIiwibm9XaGl0ZXNwYWNlTm9kZSIsImlzRXBzaWxvbk5vZGUiLCJlcHNpbG9uTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRUeXBlIiwiZ2V0Q29udGVudCIsImdldFByZWNlZGVuY2UiLCJwcmVjZWRlbmNlIiwiaXNMb3dlclByZWNlZGVuY2UiLCJwYXJlbnRSdWxlTmFtZSIsInBhcmVudFByZWNlZGVuY2UiLCJsb3dlclByZWNlZGVuY2UiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInRva2VucyIsInNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldFNpZ25pZmljYW50VG9rZW5JbmRleCIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJpbmRleE9mIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbnMiLCJzaWduaWZpY2FudFRva2VucyIsInB1c2giLCJpc0luY2x1ZGVkSW4iLCJub2RlIiwiaW5jbHVkZWRJbiIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNvbWUiLCJjaGlsZE5vZGUiLCJpbmNsdWRlZEluQ2hpbGROb2RlIiwibWF0Y2giLCJkZXB0aCIsIkluZmluaXR5IiwiZXhhY3RseSIsIm1hdGNoZXMiLCJub2RlVGVybWluYWxOb2RlIiwic2V0U2lnbmlmaWNhbnRUb2tlbiIsImFzUGFyc2VUcmVlIiwidGVybWluYWxOb2RlUGFyc2VUcmVlIiwiVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbVRlcm1pbmFsTm9kZUFuZFRva2VucyIsInBhcnNlVHJlZSIsImNsb25lIiwicmVtYWluaW5nQXJndW1lbnRzIiwiQ2xhc3MiLCJjb25zdHJ1Y3RvciIsImZyb21Ob3RoaW5nIiwidW5kZWZpbmVkIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O21F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