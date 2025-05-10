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
                var ancestorNode = this.parentNode; ///
                while(ancestorNode !== null){
                    ancestorNodes.push(ancestorNode);
                    var parentNode = ancestorNode.getParentNode();
                    ancestorNode = parentNode; ///
                }
                return ancestorNodes;
            }
        },
        {
            key: "mapAncestorNode",
            value: function mapAncestorNode(callback) {
                var ancestorNodes = this.getAncestorNodes();
                return ancestorNodes.map(callback);
            }
        },
        {
            key: "someAncestorNode",
            value: function someAncestorNode(callback) {
                var result = false;
                var index = 0, ancestorNode = this.parentNode; ///
                while(ancestorNode !== null){
                    result = callback(ancestorNode, index);
                    if (result) {
                        break;
                    }
                    var parentNode = ancestorNode.getParentNode();
                    ancestorNode = parentNode; ///
                    index++;
                }
                return result;
            }
        },
        {
            key: "findAncestorNode",
            value: function findAncestorNode(callback) {
                var index = 0, ancestorNode = this.parentNode; ///
                while(ancestorNode !== null){
                    var result = callback(ancestorNode, index);
                    if (result) {
                        return ancestorNode;
                    }
                    var parentNode = ancestorNode.getParentNode();
                    ancestorNode = parentNode; ///
                    index++;
                }
            }
        },
        {
            key: "everyAncestorNode",
            value: function everyAncestorNode(callback) {
                var ancestorNodes = this.getAncestorNodes();
                return ancestorNodes.every(callback);
            }
        },
        {
            key: "filterAncestorNode",
            value: function filterAncestorNode(callback) {
                var ancestorNodes = this.getAncestorNodes();
                return ancestorNodes.filter(callback);
            }
        },
        {
            key: "reduceAncestorNode",
            value: function reduceAncestorNode(callback, initialValue) {
                var ancestorNodes = this.getAncestorNodes();
                return ancestorNodes.reduce(callback, initialValue);
            }
        },
        {
            key: "forEachAncestorNode",
            value: function forEachAncestorNode(callback) {
                var ancestorNodes = this.getAncestorNodes();
                ancestorNodes.forEach(callback);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvdGVybWluYWxOb2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmVudE5vZGUsIHNpZ25pZmljYW50VG9rZW4pIHtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRQYXJlbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGU7XG4gIH1cblxuICBnZXRTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpIHtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICB9XG5cbiAgc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGlzU3RhcnRPZkNvbnRlbnROb2RlKCkge1xuICAgIGNvbnN0IHN0YXJ0T2ZDb250ZW50Tm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHN0YXJ0T2ZDb250ZW50Tm9kZTtcbiAgfVxuXG4gIGlzTm9XaGl0ZXNwYWNlTm9kZSgpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VOb2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlTm9kZTtcbiAgfVxuXG4gIGlzRXBzaWxvbk5vZGUoKSB7XG4gICAgY29uc3QgZXBzaWxvbk5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBlcHNpbG9uTm9kZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRydWU7XG4gICAgXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpOyB9XG5cbiAgZ2V0Q29udGVudCgpIHsgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCk7IH1cblxuICBnZXRQcmVjZWRlbmNlKCkgIHtcbiAgICBjb25zdCBwcmVjZWRlbmNlID0gbnVsbDtcblxuICAgIHJldHVybiBwcmVjZWRlbmNlO1xuICB9XG5cbiAgaXNMb3dlclByZWNlZGVuY2UocGFyZW50UnVsZU5hbWUsIHBhcmVudFByZWNlZGVuY2UpIHtcbiAgICBjb25zdCBsb3dlclByZWNlZGVuY2UgPSBmYWxzZTtcblxuICAgIHJldHVybiBsb3dlclByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuSW5kZXggPSB0aGlzLmdldFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gc2lnbmlmaWNhbnRUb2tlbkluZGV4OyAvLy9cblxuICAgIHJldHVybiBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleDtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdGhpcy5nZXRTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gc2lnbmlmaWNhbnRUb2tlbkluZGV4OyAvLy9cblxuICAgIHJldHVybiBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4O1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucykge1xuICAgIGxldCBzaWduaWZpY2FudFRva2VuSW5kZXggPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YodGhpcy5zaWduaWZpY2FudFRva2VuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbkluZGV4O1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbnMoc2lnbmlmaWNhbnRUb2tlbnMgPSBbXSkge1xuICAgIGlmICh0aGlzLnNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIHNpZ25pZmljYW50VG9rZW5zLnB1c2godGhpcy5zaWduaWZpY2FudFRva2VuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbnM7XG4gIH1cblxuICBnZXRBbmNlc3Rvck5vZGVzKCkge1xuICAgIGNvbnN0IGFuY2VzdG9yTm9kZXMgPSBbXTtcblxuICAgIGxldCBhbmNlc3Rvck5vZGUgPSB0aGlzLnBhcmVudE5vZGU7IC8vL1xuXG4gICAgd2hpbGUgKGFuY2VzdG9yTm9kZSAhPT0gbnVsbCkge1xuICAgICAgYW5jZXN0b3JOb2Rlcy5wdXNoKGFuY2VzdG9yTm9kZSk7XG5cbiAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSBhbmNlc3Rvck5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xuXG4gICAgICBhbmNlc3Rvck5vZGUgPSBwYXJlbnROb2RlOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGFuY2VzdG9yTm9kZXM7XG4gIH1cblxuICBtYXBBbmNlc3Rvck5vZGUoY2FsbGJhY2spIHtcbiAgICBjb25zdCBhbmNlc3Rvck5vZGVzID0gdGhpcy5nZXRBbmNlc3Rvck5vZGVzKCk7XG5cbiAgICByZXR1cm4gYW5jZXN0b3JOb2Rlcy5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgc29tZUFuY2VzdG9yTm9kZShjYWxsYmFjaykge1xuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICAgIGxldCBpbmRleCA9IDAsXG4gICAgICAgIGFuY2VzdG9yTm9kZSA9IHRoaXMucGFyZW50Tm9kZTsgLy8vXG5cbiAgICB3aGlsZSAoYW5jZXN0b3JOb2RlICE9PSBudWxsKSB7XG4gICAgICByZXN1bHQgPSBjYWxsYmFjayhhbmNlc3Rvck5vZGUsIGluZGV4KTtcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IGFuY2VzdG9yTm9kZS5nZXRQYXJlbnROb2RlKCk7XG5cbiAgICAgIGFuY2VzdG9yTm9kZSA9IHBhcmVudE5vZGU7ICAvLy9cblxuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZmluZEFuY2VzdG9yTm9kZShjYWxsYmFjaykge1xuICAgIGxldCBpbmRleCA9IDAsXG4gICAgICAgIGFuY2VzdG9yTm9kZSA9IHRoaXMucGFyZW50Tm9kZTsgLy8vXG5cbiAgICB3aGlsZSAoYW5jZXN0b3JOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhhbmNlc3Rvck5vZGUsIGluZGV4KTtcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gYW5jZXN0b3JOb2RlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJlbnROb2RlID0gYW5jZXN0b3JOb2RlLmdldFBhcmVudE5vZGUoKTtcblxuICAgICAgYW5jZXN0b3JOb2RlID0gcGFyZW50Tm9kZTsgIC8vL1xuXG4gICAgICBpbmRleCsrO1xuICAgIH1cbiAgfVxuXG4gIGV2ZXJ5QW5jZXN0b3JOb2RlKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYW5jZXN0b3JOb2RlcyA9IHRoaXMuZ2V0QW5jZXN0b3JOb2RlcygpO1xuXG4gICAgcmV0dXJuIGFuY2VzdG9yTm9kZXMuZXZlcnkoY2FsbGJhY2spO1xuICB9XG5cbiAgZmlsdGVyQW5jZXN0b3JOb2RlKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYW5jZXN0b3JOb2RlcyA9IHRoaXMuZ2V0QW5jZXN0b3JOb2RlcygpO1xuXG4gICAgcmV0dXJuIGFuY2VzdG9yTm9kZXMuZmlsdGVyKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZUFuY2VzdG9yTm9kZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgY29uc3QgYW5jZXN0b3JOb2RlcyA9IHRoaXMuZ2V0QW5jZXN0b3JOb2RlcygpO1xuXG4gICAgcmV0dXJuIGFuY2VzdG9yTm9kZXMucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpO1xuICB9XG5cbiAgZm9yRWFjaEFuY2VzdG9yTm9kZShjYWxsYmFjaykge1xuICAgIGNvbnN0IGFuY2VzdG9yTm9kZXMgPSB0aGlzLmdldEFuY2VzdG9yTm9kZXMoKTtcblxuICAgIGFuY2VzdG9yTm9kZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnModGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IHRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIG1hdGNoKG5vZGUsIGRlcHRoID0gSW5maW5pdHksIGV4YWN0bHkgPSBmYWxzZSkge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgICBtYXRjaGVzID0gZXhhY3RseSA/XG4gICAgICAgICAgICAgICAgICAodGhpcy5zaWduaWZpY2FudFRva2VuID09PSBzaWduaWZpY2FudFRva2VuKSA6XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4ubWF0Y2goc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBjbG9uZSguLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBDbGFzcyA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbixcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocGFyZW50Tm9kZSwgc2lnbmlmaWNhbnRUb2tlbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIENsYXNzID0gVGVybWluYWxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbnVsbCxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocGFyZW50Tm9kZSwgc2lnbmlmaWNhbnRUb2tlbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNpZ25pZmljYW50VG9rZW4oQ2xhc3MsIHNpZ25pZmljYW50VG9rZW4sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChzaWduaWZpY2FudFRva2VuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gVGVybWluYWxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnROb2RlID0gbnVsbCxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocGFyZW50Tm9kZSwgc2lnbmlmaWNhbnRUb2tlbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVGVybWluYWxOb2RlIiwicGFyZW50Tm9kZSIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRQYXJlbnROb2RlIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsInNldFBhcmVudE5vZGUiLCJzZXRTaWduaWZpY2FudFRva2VuIiwiaXNTdGFydE9mQ29udGVudE5vZGUiLCJzdGFydE9mQ29udGVudE5vZGUiLCJpc05vV2hpdGVzcGFjZU5vZGUiLCJub1doaXRlc3BhY2VOb2RlIiwiaXNFcHNpbG9uTm9kZSIsImVwc2lsb25Ob2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldFR5cGUiLCJnZXRDb250ZW50IiwiZ2V0UHJlY2VkZW5jZSIsInByZWNlZGVuY2UiLCJpc0xvd2VyUHJlY2VkZW5jZSIsInBhcmVudFJ1bGVOYW1lIiwicGFyZW50UHJlY2VkZW5jZSIsImxvd2VyUHJlY2VkZW5jZSIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwidG9rZW5zIiwic2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImluZGV4T2YiLCJnZXRTaWduaWZpY2FudFRva2VucyIsInNpZ25pZmljYW50VG9rZW5zIiwicHVzaCIsImdldEFuY2VzdG9yTm9kZXMiLCJhbmNlc3Rvck5vZGVzIiwiYW5jZXN0b3JOb2RlIiwibWFwQW5jZXN0b3JOb2RlIiwiY2FsbGJhY2siLCJtYXAiLCJzb21lQW5jZXN0b3JOb2RlIiwicmVzdWx0IiwiaW5kZXgiLCJmaW5kQW5jZXN0b3JOb2RlIiwiZXZlcnlBbmNlc3Rvck5vZGUiLCJldmVyeSIsImZpbHRlckFuY2VzdG9yTm9kZSIsImZpbHRlciIsInJlZHVjZUFuY2VzdG9yTm9kZSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2hBbmNlc3Rvck5vZGUiLCJmb3JFYWNoIiwiYXNQYXJzZVRyZWUiLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zIiwicGFyc2VUcmVlIiwibWF0Y2giLCJub2RlIiwiZGVwdGgiLCJJbmZpbml0eSIsImV4YWN0bHkiLCJtYXRjaGVzIiwibm9kZVRlcm1pbmFsTm9kZSIsImNsb25lIiwicmVtYWluaW5nQXJndW1lbnRzIiwiQ2xhc3MiLCJjb25zdHJ1Y3RvciIsImRlc3Ryb3kiLCJmcm9tTm90aGluZyIsInVuZGVmaW5lZCIsImZyb21TaWduaWZpY2FudFRva2Vu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