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
    function TerminalNode(parentNode, significantToken) {
        _class_call_check(this, TerminalNode);
        this.parentNode = parentNode;
        this.significantToken = significantToken;
    }
    _create_class(TerminalNode, [
        {
            key: "getParentNode",
            value: function getParentNode() {
                return this.parentNode;
            }
        },
        {
            key: "getSignificantToken",
            value: function getSignificantToken() {
                return this.significantToken;
            }
        },
        {
            key: "setParentNode",
            value: function setParentNode(parentNode) {
                this.parentNode = parentNode;
            }
        },
        {
            key: "setSignificantToken",
            value: function setSignificantToken(significantToken) {
                this.significantToken = significantToken;
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
            key: "getAncestorNodes",
            value: function getAncestorNodes() {
                var ancestorNodes = [];
                var parentNode = this.parentNode;
                while(parentNode !== null){
                    var ancestorNode = parentNode; ///
                    ancestorNodes.push(ancestorNode);
                    parentNode = parentNode.getParentNode();
                }
                return ancestorNodes;
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
            key: "clone",
            value: function clone() {
                for(var _len = arguments.length, remainingArguments = new Array(_len), _key = 0; _key < _len; _key++){
                    remainingArguments[_key] = arguments[_key];
                }
                var Class = this.constructor, parentNode = null, significantToken = this.significantToken, terminalNode = _construct(Class, [
                    parentNode,
                    significantToken
                ].concat(_to_consumable_array(remainingArguments)));
                return terminalNode;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.parentNode = null;
                this.significantToken = null;
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
                var parentNode = null, significantToken = null, terminalNode = _construct(Class, [
                    parentNode,
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
                var parentNode = null, terminalNode = _construct(Class, [
                    parentNode,
                    significantToken
                ].concat(_to_consumable_array(remainingArguments)));
                return terminalNode;
            }
        }
    ]);
    return TerminalNode;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvdGVybWluYWxOb2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmVudE5vZGUsIHNpZ25pZmljYW50VG9rZW4pIHtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRQYXJlbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGU7XG4gIH1cblxuICBnZXRTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpIHtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICB9XG5cbiAgc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGlzU3RhcnRPZkNvbnRlbnROb2RlKCkge1xuICAgIGNvbnN0IHN0YXJ0T2ZDb250ZW50Tm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHN0YXJ0T2ZDb250ZW50Tm9kZTtcbiAgfVxuXG4gIGlzTm9XaGl0ZXNwYWNlTm9kZSgpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VOb2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlTm9kZTtcbiAgfVxuXG4gIGlzRXBzaWxvbk5vZGUoKSB7XG4gICAgY29uc3QgZXBzaWxvbk5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBlcHNpbG9uTm9kZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRydWU7XG4gICAgXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpOyB9XG5cbiAgZ2V0Q29udGVudCgpIHsgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCk7IH1cblxuICBnZXRQcmVjZWRlbmNlKCkgIHtcbiAgICBjb25zdCBwcmVjZWRlbmNlID0gbnVsbDtcblxuICAgIHJldHVybiBwcmVjZWRlbmNlO1xuICB9XG5cbiAgaXNMb3dlclByZWNlZGVuY2UocGFyZW50UnVsZU5hbWUsIHBhcmVudFByZWNlZGVuY2UpIHtcbiAgICBjb25zdCBsb3dlclByZWNlZGVuY2UgPSBmYWxzZTtcblxuICAgIHJldHVybiBsb3dlclByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuSW5kZXggPSB0aGlzLmdldFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gc2lnbmlmaWNhbnRUb2tlbkluZGV4OyAvLy9cblxuICAgIHJldHVybiBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleDtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdGhpcy5nZXRTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gc2lnbmlmaWNhbnRUb2tlbkluZGV4OyAvLy9cblxuICAgIHJldHVybiBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4O1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucykge1xuICAgIGxldCBzaWduaWZpY2FudFRva2VuSW5kZXggPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YodGhpcy5zaWduaWZpY2FudFRva2VuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbkluZGV4O1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbnMoc2lnbmlmaWNhbnRUb2tlbnMgPSBbXSkge1xuICAgIGlmICh0aGlzLnNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIHNpZ25pZmljYW50VG9rZW5zLnB1c2godGhpcy5zaWduaWZpY2FudFRva2VuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbnM7XG4gIH1cblxuICBnZXRBbmNlc3Rvck5vZGVzKCkge1xuICAgIGNvbnN0IGFuY2VzdG9yTm9kZXMgPSBbXTtcblxuICAgIGxldCBwYXJlbnROb2RlID0gdGhpcy5wYXJlbnROb2RlO1xuXG4gICAgd2hpbGUgKHBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGFuY2VzdG9yTm9kZSA9IHBhcmVudE5vZGU7ICAvLy9cblxuICAgICAgYW5jZXN0b3JOb2Rlcy5wdXNoKGFuY2VzdG9yTm9kZSk7XG5cbiAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLmdldFBhcmVudE5vZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYW5jZXN0b3JOb2RlcztcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBUZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbVRlcm1pbmFsTm9kZUFuZFRva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgbWF0Y2gobm9kZSwgZGVwdGggPSBJbmZpbml0eSwgZXhhY3RseSA9IGZhbHNlKSB7XG4gICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICAgIG1hdGNoZXMgPSBleGFjdGx5ID9cbiAgICAgICAgICAgICAgICAgICh0aGlzLnNpZ25pZmljYW50VG9rZW4gPT09IHNpZ25pZmljYW50VG9rZW4pIDpcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5tYXRjaChzaWduaWZpY2FudFRva2VuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGNsb25lKC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IENsYXNzID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBwYXJlbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhwYXJlbnROb2RlLCBzaWduaWZpY2FudFRva2VuLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoQ2xhc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgQ2xhc3MgPSBUZXJtaW5hbE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBudWxsLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhwYXJlbnROb2RlLCBzaWduaWZpY2FudFRva2VuLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlbihDbGFzcywgc2lnbmlmaWNhbnRUb2tlbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBUZXJtaW5hbE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhwYXJlbnROb2RlLCBzaWduaWZpY2FudFRva2VuLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGUiLCJwYXJlbnROb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFBhcmVudE5vZGUiLCJnZXRTaWduaWZpY2FudFRva2VuIiwic2V0UGFyZW50Tm9kZSIsInNldFNpZ25pZmljYW50VG9rZW4iLCJpc1N0YXJ0T2ZDb250ZW50Tm9kZSIsInN0YXJ0T2ZDb250ZW50Tm9kZSIsImlzTm9XaGl0ZXNwYWNlTm9kZSIsIm5vV2hpdGVzcGFjZU5vZGUiLCJpc0Vwc2lsb25Ob2RlIiwiZXBzaWxvbk5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZ2V0VHlwZSIsImdldENvbnRlbnQiLCJnZXRQcmVjZWRlbmNlIiwicHJlY2VkZW5jZSIsImlzTG93ZXJQcmVjZWRlbmNlIiwicGFyZW50UnVsZU5hbWUiLCJwYXJlbnRQcmVjZWRlbmNlIiwibG93ZXJQcmVjZWRlbmNlIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJ0b2tlbnMiLCJzaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRTaWduaWZpY2FudFRva2VuSW5kZXgiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiaW5kZXhPZiIsImdldFNpZ25pZmljYW50VG9rZW5zIiwic2lnbmlmaWNhbnRUb2tlbnMiLCJwdXNoIiwiZ2V0QW5jZXN0b3JOb2RlcyIsImFuY2VzdG9yTm9kZXMiLCJhbmNlc3Rvck5vZGUiLCJhc1BhcnNlVHJlZSIsInRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsIlRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJwYXJzZVRyZWUiLCJtYXRjaCIsIm5vZGUiLCJkZXB0aCIsIkluZmluaXR5IiwiZXhhY3RseSIsIm1hdGNoZXMiLCJub2RlVGVybWluYWxOb2RlIiwiY2xvbmUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJDbGFzcyIsImNvbnN0cnVjdG9yIiwiZGVzdHJveSIsImZyb21Ob3RoaW5nIiwidW5kZWZpbmVkIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O21FQUZhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5CLElBQUEsQUFBTUEsNkJBQU47YUFBTUEsYUFDUEMsVUFBVSxFQUFFQyxnQkFBZ0I7Z0NBRHJCRjtRQUVqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7O2tCQUhQRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsZ0JBQWdCO1lBQzlCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNKLFVBQVU7Z0JBQ3RCLElBQUksQ0FBQ0EsVUFBVSxHQUFHQTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JKLGdCQUFnQjtnQkFDbEMsSUFBSSxDQUFDQSxnQkFBZ0IsR0FBR0E7WUFDMUI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMscUJBQXFCO2dCQUUzQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1CQUFtQjtnQkFFekIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxjQUFjO2dCQUVwQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWU7Z0JBRXJCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsa0JBQWtCO2dCQUV4QixPQUFPQTtZQUNU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