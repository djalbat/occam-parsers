"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NonTerminalNode;
    }
});
var _necessary = require("necessary");
var _occamlexers = require("occam-lexers");
var _node = /*#__PURE__*/ _interop_require_default(require("../mixins/node"));
var _nonTerminalNode = /*#__PURE__*/ _interop_require_default(require("../parseTree/nonTerminalNode"));
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
var first = _necessary.arrayUtilities.first, match = _necessary.arrayUtilities.match, opaqueSpecialSymbol = _occamlexers.specialSymbols.opaque, semiOpaqueSpecialSymbol = _occamlexers.specialSymbols.semiOpaque;
var NonTerminalNode = /*#__PURE__*/ function() {
    function NonTerminalNode(ruleName, parentNode, childNodes, opacity, precedence) {
        _class_call_check(this, NonTerminalNode);
        this.ruleName = ruleName;
        this.parentNode = parentNode;
        this.childNodes = childNodes;
        this.opacity = opacity;
        this.precedence = precedence;
    }
    _create_class(NonTerminalNode, [
        {
            key: "getRuleName",
            value: function getRuleName() {
                return this.ruleName;
            }
        },
        {
            key: "getParentNode",
            value: function getParentNode() {
                return this.parentNode;
            }
        },
        {
            key: "getChildNodes",
            value: function getChildNodes() {
                return this.childNodes;
            }
        },
        {
            key: "getOpacity",
            value: function getOpacity() {
                return this.opacity;
            }
        },
        {
            key: "getPrecedence",
            value: function getPrecedence() {
                return this.precedence;
            }
        },
        {
            key: "setRuleName",
            value: function setRuleName(ruleName) {
                this.ruleName = ruleName;
            }
        },
        {
            key: "setParentNode",
            value: function setParentNode(parentNode) {
                this.parentNode = parentNode;
            }
        },
        {
            key: "setChildNodes",
            value: function setChildNodes(childNodes) {
                var startIndex = 0, deleteCount = Infinity, addedChildNodes = childNodes; ///
                this.spliceChildNodes(startIndex, deleteCount, addedChildNodes);
            }
        },
        {
            key: "setOpacity",
            value: function setOpacity(opacity) {
                this.opacity = opacity;
            }
        },
        {
            key: "setPrecedence",
            value: function setPrecedence(precedence) {
                this.precedence = precedence;
            }
        },
        {
            key: "isOpaque",
            value: function isOpaque() {
                var opaque = this.opacity === opaqueSpecialSymbol;
                return opaque;
            }
        },
        {
            key: "isSemiOpaque",
            value: function isSemiOpaque() {
                var semiOpaque = this.opacity === semiOpaqueSpecialSymbol;
                return semiOpaque;
            }
        },
        {
            key: "isTransparent",
            value: function isTransparent() {
                var semiOpaque = this.opacity === null;
                return semiOpaque;
            }
        },
        {
            key: "isTerminalNode",
            value: function isTerminalNode() {
                var terminalNode = false;
                return terminalNode;
            }
        },
        {
            key: "isNonTerminalNode",
            value: function isNonTerminalNode() {
                var nonTerminalNode = true;
                return nonTerminalNode;
            }
        },
        {
            key: "getDescendantNodes",
            value: function getDescendantNodes(descendantNodes) {
                return descendantNodes;
            }
        },
        {
            key: "getFirstSignificantTokenIndex",
            value: function getFirstSignificantTokenIndex(tokens) {
                var firstSignificantTokenIndex;
                this.forwardsSomeChildNode(function(childNode) {
                    var node = childNode; ///
                    firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens);
                    if (firstSignificantTokenIndex !== null) {
                        return true;
                    }
                });
                return firstSignificantTokenIndex;
            }
        },
        {
            key: "getLastSignificantTokenIndex",
            value: function getLastSignificantTokenIndex(tokens) {
                var lastSignificantTokenIndex;
                this.backwardsSomeChildNode(function(childNode) {
                    var node = childNode; ///
                    lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens);
                    if (lastSignificantTokenIndex !== null) {
                        return true;
                    }
                });
                return lastSignificantTokenIndex;
            }
        },
        {
            key: "getSignificantTokens",
            value: function getSignificantTokens() {
                var significantTokens = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                this.childNodes.forEach(function(childNode) {
                    childNode.getSignificantTokens(significantTokens);
                });
                return significantTokens;
            }
        },
        {
            key: "getMultiplicity",
            value: function getMultiplicity() {
                var childNodesLength = this.childNodes.length, multiplicity = childNodesLength; ///
                return multiplicity;
            }
        },
        {
            key: "isEmpty",
            value: function isEmpty() {
                var multiplicity = this.getMultiplicity(), empty = multiplicity === 0;
                return empty;
            }
        },
        {
            key: "isSingular",
            value: function isSingular() {
                var multiplicity = this.getMultiplicity(), singular = multiplicity === 1;
                return singular;
            }
        },
        {
            key: "isLowerPrecedence",
            value: function isLowerPrecedence(ruleName, precedence) {
                var lowerPrecedence;
                if (false) {
                ///
                } else if (this.precedence === null) {
                    lowerPrecedence = false;
                } else if (this.precedence === Infinity) {
                    var firstChildNode = first(this.childNodes);
                    lowerPrecedence = firstChildNode.isLowerPrecedence(ruleName, precedence);
                } else {
                    lowerPrecedence = this.ruleName === ruleName && this.precedence < precedence;
                }
                return lowerPrecedence;
            }
        },
        {
            key: "isUnprecedented",
            value: function isUnprecedented() {
                var _this = this;
                var unprecedented = false;
                if (this.precedence !== null) {
                    unprecedented = this.childNodes.some(function(childNode) {
                        var childNodeLowerPrecedence = childNode.isLowerPrecedence(_this.ruleName, _this.precedence);
                        if (childNodeLowerPrecedence) {
                            return true;
                        }
                    });
                }
                return unprecedented;
            }
        },
        {
            key: "asParseTree",
            value: function asParseTree(tokens) {
                var nonTerminalNode = this, nonTerminalNodeParseTree = _nonTerminalNode.default.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens), parseTree = nonTerminalNodeParseTree; ///
                return parseTree;
            }
        },
        {
            key: "match",
            value: function match1(node) {
                var depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity, exactly = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
                var matches = false;
                var nodeNonTerminalNode = node.isNonTerminalNode();
                if (nodeNonTerminalNode) {
                    var nonTerminalNode = node, nonTerminalNodeRuleName = nonTerminalNode.getRuleName();
                    if (this.ruleName === nonTerminalNodeRuleName) {
                        var nonTerminalNodeOpacity = nonTerminalNode.getOpacity();
                        if (this.opacity === nonTerminalNodeOpacity) {
                            var precedence = this.getPrecedence(), nonTerminalNodePrecedence = nonTerminalNode.getPrecedence();
                            if (precedence === nonTerminalNodePrecedence) {
                                depth--;
                                if (depth === 0) {
                                    matches = true;
                                } else {
                                    var nonTerminalNodeChildNodes = nonTerminalNode.getChildNodes();
                                    matches = match(this.childNodes, nonTerminalNodeChildNodes, function(childNode, nonTerminalNodeChildNode) {
                                        var childNodeMatchesNonTerminalNodeChildNode = childNode.match(nonTerminalNodeChildNode, depth, exactly);
                                        if (childNodeMatchesNonTerminalNodeChildNode) {
                                            return true;
                                        }
                                    });
                                }
                            }
                        }
                    }
                }
                return matches;
            }
        },
        {
            key: "rewrite",
            value: function rewrite(state) {
                var rewrittenNonTerminalNode = null;
                return rewrittenNonTerminalNode;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.forEachChildNode(function(childNode) {
                    childNode.destroy();
                });
                this.parentNode = null;
                this.childNodes = null;
            }
        },
        {
            key: "clone",
            value: function clone() {
                for(var _len = arguments.length, remainingArguments = new Array(_len), _key = 0; _key < _len; _key++){
                    remainingArguments[_key] = arguments[_key];
                }
                var Class = this.constructor, parentNode = null, ruleName = this.ruleName, childNodes = cloneChildNodes(this.childNodes), opacity = this.opacity, precedence = this.precedence, nonTerminalNode = _construct(Class, [
                    ruleName,
                    parentNode,
                    childNodes,
                    opacity,
                    precedence
                ].concat(_to_consumable_array(remainingArguments)));
                nonTerminalNode.setChildNodesParentNode();
                return nonTerminalNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++){
                    remainingArguments[_key - 4] = arguments[_key];
                }
                if (opacity === undefined) {
                    opacity = childNodes; ///
                    childNodes = ruleName; ///
                    ruleName = Class; ///
                    Class = NonTerminalNode; ///
                }
                var parentNode = null, precedence = null, nonTerminalNode = _construct(Class, [
                    ruleName,
                    parentNode,
                    childNodes,
                    opacity,
                    precedence
                ].concat(_to_consumable_array(remainingArguments)));
                nonTerminalNode.setChildNodesParentNode();
                return nonTerminalNode;
            }
        }
    ]);
    return NonTerminalNode;
}();
Object.assign(NonTerminalNode.prototype, _node.default);
function cloneChildNodes(childNodes) {
    childNodes = childNodes.map(function(childNode) {
        childNode = childNode.clone(); ///
        return childNode;
    });
    return childNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgbm9kZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL25vZGVcIjtcbmltcG9ydCBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgZnJvbSBcIi4uL3BhcnNlVHJlZS9ub25UZXJtaW5hbE5vZGVcIjtcblxuY29uc3QgeyBmaXJzdCwgbWF0Y2ggfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBvcGFxdWU6IG9wYXF1ZVNwZWNpYWxTeW1ib2wgLCBzZW1pT3BhcXVlOiBzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgICB0aGlzLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldFBhcmVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldE9wYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMub3BhY2l0eTtcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIHNldFJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICB9XG5cbiAgc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKSB7XG4gICAgdGhpcy5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgfVxuXG4gIHNldENoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSAwLFxuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksXG4gICAgICAgICAgYWRkZWRDaGlsZE5vZGVzID0gY2hpbGROb2RlczsgIC8vL1xuXG4gICAgdGhpcy5zcGxpY2VDaGlsZE5vZGVzKHN0YXJ0SW5kZXgsIGRlbGV0ZUNvdW50LCBhZGRlZENoaWxkTm9kZXMpO1xuICB9XG5cbiAgc2V0T3BhY2l0eShvcGFjaXR5KSB7XG4gICAgdGhpcy5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgfVxuXG4gIHNldFByZWNlZGVuY2UocHJlY2VkZW5jZSkge1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBpc09wYXF1ZSgpIHtcbiAgICBjb25zdCBvcGFxdWUgPSAodGhpcy5vcGFjaXR5ID09PSBvcGFxdWVTcGVjaWFsU3ltYm9sKTtcblxuICAgIHJldHVybiBvcGFxdWU7XG4gIH1cblxuICBpc1NlbWlPcGFxdWUoKSB7XG4gICAgY29uc3Qgc2VtaU9wYXF1ZSA9ICh0aGlzLm9wYWNpdHkgPT09IHNlbWlPcGFxdWVTcGVjaWFsU3ltYm9sKTtcblxuICAgIHJldHVybiBzZW1pT3BhcXVlO1xuICB9XG5cbiAgaXNUcmFuc3BhcmVudCgpIHtcbiAgICBjb25zdCBzZW1pT3BhcXVlID0gKHRoaXMub3BhY2l0eSA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2VtaU9wYXF1ZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0RGVzY2VuZGFudE5vZGVzKGRlc2NlbmRhbnROb2Rlcykge1xuICAgIHJldHVybiBkZXNjZW5kYW50Tm9kZXM7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpIHtcbiAgICBsZXQgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXg7XG5cbiAgICB0aGlzLmZvcndhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucyk7XG5cbiAgICAgIGlmIChmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleDtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSB7XG4gICAgbGV0IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXg7XG5cbiAgICB0aGlzLmJhY2t3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKTtcblxuICAgICAgaWYgKGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleDtcbiAgfVxuXG4gIGdldFNpZ25pZmljYW50VG9rZW5zKHNpZ25pZmljYW50VG9rZW5zID0gW10pIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjaGlsZE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbnMoc2lnbmlmaWNhbnRUb2tlbnMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5zO1xuICB9XG5cbiAgZ2V0TXVsdGlwbGljaXR5KCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNMZW5ndGggPSB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgIG11bHRpcGxpY2l0eSA9IGNoaWxkTm9kZXNMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBtdWx0aXBsaWNpdHk7XG4gIH1cblxuICBpc0VtcHR5KCkge1xuICAgIGNvbnN0IG11bHRpcGxpY2l0eSA9IHRoaXMuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgICAgZW1wdHkgPSAobXVsdGlwbGljaXR5ID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IChtdWx0aXBsaWNpdHkgPT09IDEpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgaXNMb3dlclByZWNlZGVuY2UocnVsZU5hbWUsIHByZWNlZGVuY2UpIHtcbiAgICBsZXQgbG93ZXJQcmVjZWRlbmNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJlY2VkZW5jZSA9PT0gbnVsbCkge1xuICAgICAgbG93ZXJQcmVjZWRlbmNlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByZWNlZGVuY2UgPT09IEluZmluaXR5KSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KHRoaXMuY2hpbGROb2Rlcyk7XG5cbiAgICAgIGxvd2VyUHJlY2VkZW5jZSA9IGZpcnN0Q2hpbGROb2RlLmlzTG93ZXJQcmVjZWRlbmNlKHJ1bGVOYW1lLCBwcmVjZWRlbmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG93ZXJQcmVjZWRlbmNlID0gKCh0aGlzLnJ1bGVOYW1lID09PSBydWxlTmFtZSkgJiYgKHRoaXMucHJlY2VkZW5jZSA8IHByZWNlZGVuY2UpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG93ZXJQcmVjZWRlbmNlO1xuICB9XG5cbiAgaXNVbnByZWNlZGVudGVkKCkge1xuICAgIGxldCB1bnByZWNlZGVudGVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5wcmVjZWRlbmNlICE9PSBudWxsKSB7XG4gICAgICB1bnByZWNlZGVudGVkID0gdGhpcy5jaGlsZE5vZGVzLnNvbWUoKGNoaWxkTm9kZSkgPT4geyAgLy8vXG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSA9IGNoaWxkTm9kZS5pc0xvd2VyUHJlY2VkZW5jZSh0aGlzLnJ1bGVOYW1lLCB0aGlzLnByZWNlZGVuY2UpO1xuXG4gICAgICAgIGlmIChjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVucHJlY2VkZW50ZWQ7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIG1hdGNoKG5vZGUsIGRlcHRoID0gSW5maW5pdHksIGV4YWN0bHkgPSBmYWxzZSkge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgaWYgKHRoaXMucnVsZU5hbWUgPT09IG5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZU9wYWNpdHkgPSBub25UZXJtaW5hbE5vZGUuZ2V0T3BhY2l0eSgpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wYWNpdHkgPT09IG5vblRlcm1pbmFsTm9kZU9wYWNpdHkpIHtcbiAgICAgICAgICBjb25zdCBwcmVjZWRlbmNlID0gdGhpcy5nZXRQcmVjZWRlbmNlKCksXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlUHJlY2VkZW5jZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRQcmVjZWRlbmNlKCk7XG5cbiAgICAgICAgICBpZiAocHJlY2VkZW5jZSA9PT0gbm9uVGVybWluYWxOb2RlUHJlY2VkZW5jZSkge1xuICAgICAgICAgICAgZGVwdGgtLTtcblxuICAgICAgICAgICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICAgICAgICAgIG1hdGNoZXMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoKHRoaXMuY2hpbGROb2Rlcywgbm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgKGNoaWxkTm9kZSwgbm9uVGVybWluYWxOb2RlQ2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTWF0Y2hlc05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSA9IGNoaWxkTm9kZS5tYXRjaChub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUsIGRlcHRoLCBleGFjdGx5KTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVNYXRjaGVzTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgcmV3cml0ZShzdGF0ZSkge1xuICAgIGNvbnN0IHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSA9IG51bGw7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmZvckVhY2hDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY2hpbGROb2RlLmRlc3Ryb3koKTtcbiAgICB9KTtcblxuICAgIHRoaXMucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gbnVsbDtcbiAgfVxuXG4gIGNsb25lKC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IENsYXNzID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBwYXJlbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMucnVsZU5hbWUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IGNsb25lQ2hpbGROb2Rlcyh0aGlzLmNoaWxkTm9kZXMpLFxuICAgICAgICAgIG9wYWNpdHkgPSB0aGlzLm9wYWNpdHksXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IHRoaXMucHJlY2VkZW5jZSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBub25UZXJtaW5hbE5vZGUuc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUoKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAob3BhY2l0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcGFjaXR5ID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgICBydWxlTmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBub25UZXJtaW5hbE5vZGUuc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUoKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihOb25UZXJtaW5hbE5vZGUucHJvdG90eXBlLCBub2RlTWl4aW5zKTtcblxuZnVuY3Rpb24gY2xvbmVDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXMubWFwKChjaGlsZE5vZGUpID0+IHsgIC8vL1xuICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5jbG9uZSgpOyAgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2RlO1xuICB9KTtcblxuICByZXR1cm4gY2hpbGROb2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwibWF0Y2giLCJvcGFxdWUiLCJvcGFxdWVTcGVjaWFsU3ltYm9sIiwic3BlY2lhbFN5bWJvbHMiLCJzZW1pT3BhcXVlIiwic2VtaU9wYXF1ZVNwZWNpYWxTeW1ib2wiLCJydWxlTmFtZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJnZXRSdWxlTmFtZSIsImdldFBhcmVudE5vZGUiLCJnZXRDaGlsZE5vZGVzIiwiZ2V0T3BhY2l0eSIsImdldFByZWNlZGVuY2UiLCJzZXRSdWxlTmFtZSIsInNldFBhcmVudE5vZGUiLCJzZXRDaGlsZE5vZGVzIiwic3RhcnRJbmRleCIsImRlbGV0ZUNvdW50IiwiSW5maW5pdHkiLCJhZGRlZENoaWxkTm9kZXMiLCJzcGxpY2VDaGlsZE5vZGVzIiwic2V0T3BhY2l0eSIsInNldFByZWNlZGVuY2UiLCJpc09wYXF1ZSIsImlzU2VtaU9wYXF1ZSIsImlzVHJhbnNwYXJlbnQiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZ2V0RGVzY2VuZGFudE5vZGVzIiwiZGVzY2VuZGFudE5vZGVzIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJ0b2tlbnMiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImZvcndhcmRzU29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsIm5vZGUiLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImJhY2t3YXJkc1NvbWVDaGlsZE5vZGUiLCJnZXRTaWduaWZpY2FudFRva2VucyIsInNpZ25pZmljYW50VG9rZW5zIiwiZm9yRWFjaCIsImdldE11bHRpcGxpY2l0eSIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJtdWx0aXBsaWNpdHkiLCJpc0VtcHR5IiwiZW1wdHkiLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJpc0xvd2VyUHJlY2VkZW5jZSIsImxvd2VyUHJlY2VkZW5jZSIsImZpcnN0Q2hpbGROb2RlIiwiaXNVbnByZWNlZGVudGVkIiwidW5wcmVjZWRlbnRlZCIsInNvbWUiLCJjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UiLCJhc1BhcnNlVHJlZSIsIm5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsIk5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJwYXJzZVRyZWUiLCJkZXB0aCIsImV4YWN0bHkiLCJtYXRjaGVzIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlT3BhY2l0eSIsIm5vblRlcm1pbmFsTm9kZVByZWNlZGVuY2UiLCJub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQ2hpbGROb2RlIiwiY2hpbGROb2RlTWF0Y2hlc05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSIsInJld3JpdGUiLCJzdGF0ZSIsInJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSIsImRlc3Ryb3kiLCJmb3JFYWNoQ2hpbGROb2RlIiwiY2xvbmUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJDbGFzcyIsImNsb25lQ2hpbGROb2RlcyIsInNldENoaWxkTm9kZXNQYXJlbnROb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJ1bmRlZmluZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJub2RlTWl4aW5zIiwibWFwIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozt5QkFUVTsyQkFDQTsyREFFUjtzRUFDYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFRQyxRQUFpQkMseUJBQWMsQ0FBL0JELE9BQU9FLFFBQVVELHlCQUFjLENBQXhCQyxPQUNQQyxBQUFRQyxzQkFBOERDLDJCQUFjLENBQXBGRixRQUE4QkcsQUFBWUMsMEJBQTRCRiwyQkFBYyxDQUF0REM7QUFFdkIsSUFBQSxBQUFNUCxnQ0FBTjthQUFNQSxnQkFDUFMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dDQUQ5Q2I7UUFFakIsSUFBSSxDQUFDUyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFORGI7O1lBU25CYyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFFBQVE7WUFDdEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFVBQVU7WUFDeEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFVBQVU7WUFDeEI7OztZ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