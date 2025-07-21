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
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++){
                    remainingArguments[_key - 5] = arguments[_key];
                }
                if (opacity === undefined) {
                    opacity = childNodes; ///
                    childNodes = ruleName; ///
                    ruleName = Class; ///
                    Class = NonTerminalNode; ///
                }
                var parentNode = null, nonTerminalNode = _construct(Class, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgbm9kZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL25vZGVcIjtcbmltcG9ydCBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgZnJvbSBcIi4uL3BhcnNlVHJlZS9ub25UZXJtaW5hbE5vZGVcIjtcblxuY29uc3QgeyBmaXJzdCwgbWF0Y2ggfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBvcGFxdWU6IG9wYXF1ZVNwZWNpYWxTeW1ib2wgLCBzZW1pT3BhcXVlOiBzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgICB0aGlzLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldFBhcmVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldE9wYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMub3BhY2l0eTtcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIHNldFJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICB9XG5cbiAgc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKSB7XG4gICAgdGhpcy5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgfVxuXG4gIHNldENoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSAwLFxuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksXG4gICAgICAgICAgYWRkZWRDaGlsZE5vZGVzID0gY2hpbGROb2RlczsgIC8vL1xuXG4gICAgdGhpcy5zcGxpY2VDaGlsZE5vZGVzKHN0YXJ0SW5kZXgsIGRlbGV0ZUNvdW50LCBhZGRlZENoaWxkTm9kZXMpO1xuICB9XG5cbiAgc2V0T3BhY2l0eShvcGFjaXR5KSB7XG4gICAgdGhpcy5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgfVxuXG4gIHNldFByZWNlZGVuY2UocHJlY2VkZW5jZSkge1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBpc09wYXF1ZSgpIHtcbiAgICBjb25zdCBvcGFxdWUgPSAodGhpcy5vcGFjaXR5ID09PSBvcGFxdWVTcGVjaWFsU3ltYm9sKTtcblxuICAgIHJldHVybiBvcGFxdWU7XG4gIH1cblxuICBpc1NlbWlPcGFxdWUoKSB7XG4gICAgY29uc3Qgc2VtaU9wYXF1ZSA9ICh0aGlzLm9wYWNpdHkgPT09IHNlbWlPcGFxdWVTcGVjaWFsU3ltYm9sKTtcblxuICAgIHJldHVybiBzZW1pT3BhcXVlO1xuICB9XG5cbiAgaXNUcmFuc3BhcmVudCgpIHtcbiAgICBjb25zdCBzZW1pT3BhcXVlID0gKHRoaXMub3BhY2l0eSA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2VtaU9wYXF1ZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0RGVzY2VuZGFudE5vZGVzKGRlc2NlbmRhbnROb2Rlcykge1xuICAgIHJldHVybiBkZXNjZW5kYW50Tm9kZXM7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpIHtcbiAgICBsZXQgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXg7XG5cbiAgICB0aGlzLmZvcndhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucyk7XG5cbiAgICAgIGlmIChmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleDtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSB7XG4gICAgbGV0IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXg7XG5cbiAgICB0aGlzLmJhY2t3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKTtcblxuICAgICAgaWYgKGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleDtcbiAgfVxuXG4gIGdldFNpZ25pZmljYW50VG9rZW5zKHNpZ25pZmljYW50VG9rZW5zID0gW10pIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjaGlsZE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbnMoc2lnbmlmaWNhbnRUb2tlbnMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5zO1xuICB9XG5cbiAgZ2V0TXVsdGlwbGljaXR5KCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNMZW5ndGggPSB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgIG11bHRpcGxpY2l0eSA9IGNoaWxkTm9kZXNMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBtdWx0aXBsaWNpdHk7XG4gIH1cblxuICBpc0VtcHR5KCkge1xuICAgIGNvbnN0IG11bHRpcGxpY2l0eSA9IHRoaXMuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgICAgZW1wdHkgPSAobXVsdGlwbGljaXR5ID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IChtdWx0aXBsaWNpdHkgPT09IDEpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgaXNMb3dlclByZWNlZGVuY2UocnVsZU5hbWUsIHByZWNlZGVuY2UpIHtcbiAgICBsZXQgbG93ZXJQcmVjZWRlbmNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJlY2VkZW5jZSA9PT0gbnVsbCkge1xuICAgICAgbG93ZXJQcmVjZWRlbmNlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByZWNlZGVuY2UgPT09IEluZmluaXR5KSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KHRoaXMuY2hpbGROb2Rlcyk7XG5cbiAgICAgIGxvd2VyUHJlY2VkZW5jZSA9IGZpcnN0Q2hpbGROb2RlLmlzTG93ZXJQcmVjZWRlbmNlKHJ1bGVOYW1lLCBwcmVjZWRlbmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG93ZXJQcmVjZWRlbmNlID0gKCh0aGlzLnJ1bGVOYW1lID09PSBydWxlTmFtZSkgJiYgKHRoaXMucHJlY2VkZW5jZSA8IHByZWNlZGVuY2UpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG93ZXJQcmVjZWRlbmNlO1xuICB9XG5cbiAgaXNVbnByZWNlZGVudGVkKCkge1xuICAgIGxldCB1bnByZWNlZGVudGVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5wcmVjZWRlbmNlICE9PSBudWxsKSB7XG4gICAgICB1bnByZWNlZGVudGVkID0gdGhpcy5jaGlsZE5vZGVzLnNvbWUoKGNoaWxkTm9kZSkgPT4geyAgLy8vXG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSA9IGNoaWxkTm9kZS5pc0xvd2VyUHJlY2VkZW5jZSh0aGlzLnJ1bGVOYW1lLCB0aGlzLnByZWNlZGVuY2UpO1xuXG4gICAgICAgIGlmIChjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVucHJlY2VkZW50ZWQ7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIG1hdGNoKG5vZGUsIGRlcHRoID0gSW5maW5pdHksIGV4YWN0bHkgPSBmYWxzZSkge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgaWYgKHRoaXMucnVsZU5hbWUgPT09IG5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZU9wYWNpdHkgPSBub25UZXJtaW5hbE5vZGUuZ2V0T3BhY2l0eSgpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wYWNpdHkgPT09IG5vblRlcm1pbmFsTm9kZU9wYWNpdHkpIHtcbiAgICAgICAgICBjb25zdCBwcmVjZWRlbmNlID0gdGhpcy5nZXRQcmVjZWRlbmNlKCksXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlUHJlY2VkZW5jZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRQcmVjZWRlbmNlKCk7XG5cbiAgICAgICAgICBpZiAocHJlY2VkZW5jZSA9PT0gbm9uVGVybWluYWxOb2RlUHJlY2VkZW5jZSkge1xuICAgICAgICAgICAgZGVwdGgtLTtcblxuICAgICAgICAgICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICAgICAgICAgIG1hdGNoZXMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoKHRoaXMuY2hpbGROb2Rlcywgbm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgKGNoaWxkTm9kZSwgbm9uVGVybWluYWxOb2RlQ2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTWF0Y2hlc05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSA9IGNoaWxkTm9kZS5tYXRjaChub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUsIGRlcHRoLCBleGFjdGx5KTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVNYXRjaGVzTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgcmV3cml0ZShzdGF0ZSkge1xuICAgIGNvbnN0IHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSA9IG51bGw7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmZvckVhY2hDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY2hpbGROb2RlLmRlc3Ryb3koKTtcbiAgICB9KTtcblxuICAgIHRoaXMucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gbnVsbDtcbiAgfVxuXG4gIGNsb25lKC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IENsYXNzID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBwYXJlbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMucnVsZU5hbWUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IGNsb25lQ2hpbGROb2Rlcyh0aGlzLmNoaWxkTm9kZXMpLFxuICAgICAgICAgIG9wYWNpdHkgPSB0aGlzLm9wYWNpdHksXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IHRoaXMucHJlY2VkZW5jZSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBub25UZXJtaW5hbE5vZGUuc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUoKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKG9wYWNpdHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3BhY2l0eSA9IGNoaWxkTm9kZXM7IC8vL1xuXG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7ICAvLy9cblxuICAgICAgcnVsZU5hbWUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gTm9uVGVybWluYWxOb2RlOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlLnNldENoaWxkTm9kZXNQYXJlbnROb2RlKCk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTm9uVGVybWluYWxOb2RlLnByb3RvdHlwZSwgbm9kZU1peGlucyk7XG5cbmZ1bmN0aW9uIGNsb25lQ2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gIGNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzLm1hcCgoY2hpbGROb2RlKSA9PiB7ICAvLy9cbiAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGUuY2xvbmUoKTsgIC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkTm9kZXM7XG59XG4iXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIm1hdGNoIiwib3BhcXVlIiwib3BhcXVlU3BlY2lhbFN5bWJvbCIsInNwZWNpYWxTeW1ib2xzIiwic2VtaU9wYXF1ZSIsInNlbWlPcGFxdWVTcGVjaWFsU3ltYm9sIiwicnVsZU5hbWUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiZ2V0UnVsZU5hbWUiLCJnZXRQYXJlbnROb2RlIiwiZ2V0Q2hpbGROb2RlcyIsImdldE9wYWNpdHkiLCJnZXRQcmVjZWRlbmNlIiwic2V0UnVsZU5hbWUiLCJzZXRQYXJlbnROb2RlIiwic2V0Q2hpbGROb2RlcyIsInN0YXJ0SW5kZXgiLCJkZWxldGVDb3VudCIsIkluZmluaXR5IiwiYWRkZWRDaGlsZE5vZGVzIiwic3BsaWNlQ2hpbGROb2RlcyIsInNldE9wYWNpdHkiLCJzZXRQcmVjZWRlbmNlIiwiaXNPcGFxdWUiLCJpc1NlbWlPcGFxdWUiLCJpc1RyYW5zcGFyZW50IiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldERlc2NlbmRhbnROb2RlcyIsImRlc2NlbmRhbnROb2RlcyIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwidG9rZW5zIiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJmb3J3YXJkc1NvbWVDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJub2RlIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJiYWNrd2FyZHNTb21lQ2hpbGROb2RlIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbnMiLCJzaWduaWZpY2FudFRva2VucyIsImZvckVhY2giLCJnZXRNdWx0aXBsaWNpdHkiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibXVsdGlwbGljaXR5IiwiaXNFbXB0eSIsImVtcHR5IiwiaXNTaW5ndWxhciIsInNpbmd1bGFyIiwiaXNMb3dlclByZWNlZGVuY2UiLCJsb3dlclByZWNlZGVuY2UiLCJmaXJzdENoaWxkTm9kZSIsImlzVW5wcmVjZWRlbnRlZCIsInVucHJlY2VkZW50ZWQiLCJzb21lIiwiY2hpbGROb2RlTG93ZXJQcmVjZWRlbmNlIiwiYXNQYXJzZVRyZWUiLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIiwicGFyc2VUcmVlIiwiZGVwdGgiLCJleGFjdGx5IiwibWF0Y2hlcyIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZU9wYWNpdHkiLCJub25UZXJtaW5hbE5vZGVQcmVjZWRlbmNlIiwibm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSIsImNoaWxkTm9kZU1hdGNoZXNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGUiLCJyZXdyaXRlIiwic3RhdGUiLCJyZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUiLCJkZXN0cm95IiwiZm9yRWFjaENoaWxkTm9kZSIsImNsb25lIiwicmVtYWluaW5nQXJndW1lbnRzIiwiQ2xhc3MiLCJjbG9uZUNoaWxkTm9kZXMiLCJzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInVuZGVmaW5lZCIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm5vZGVNaXhpbnMiLCJtYXAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O3lCQVRVOzJCQUNBOzJEQUVSO3NFQUNjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQVFDLFFBQWlCQyx5QkFBYyxDQUEvQkQsT0FBT0UsUUFBVUQseUJBQWMsQ0FBeEJDLE9BQ1BDLEFBQVFDLHNCQUE4REMsMkJBQWMsQ0FBcEZGLFFBQThCRyxBQUFZQywwQkFBNEJGLDJCQUFjLENBQXREQztBQUV2QixJQUFBLEFBQU1QLGdDQUFOO2FBQU1BLGdCQUNQUyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0NBRDlDYjtRQUVqQixJQUFJLENBQUNTLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQU5EYjs7WUFTbkJjLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsUUFBUTtZQUN0Qjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsVUFBVTtZQUN4Qjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsVUFBVTtZQUN4Qjs7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