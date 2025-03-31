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
var first = _necessary.arrayUtilities.first, match = _necessary.arrayUtilities.match, forwardsSome = _necessary.arrayUtilities.forwardsSome, backwardsSome = _necessary.arrayUtilities.backwardsSome, opaqueSpecialSymbol = _occamlexers.specialSymbols.opaque, semiOpaqueSpecialSymbol = _occamlexers.specialSymbols.semiOpaque;
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
            key: "setChildNodes",
            value: function setChildNodes(childNodes) {
                var startIndex = 0, deleteCount = Infinity, addedChildNodes = childNodes; ///
                this.spliceChildNodes(startIndex, deleteCount, addedChildNodes);
            }
        },
        {
            key: "setParentNode",
            value: function setParentNode(parentNode) {
                this.parentNode = parentNode;
            }
        },
        {
            key: "setPrecedence",
            value: function setPrecedence(precedence) {
                this.precedence = precedence;
            }
        },
        {
            key: "setOpacity",
            value: function setOpacity(opacity) {
                this.opacity = opacity;
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
            key: "mapChildNode",
            value: function mapChildNode(callback) {
                return this.childNodes.map(callback);
            }
        },
        {
            key: "someChildNode",
            value: function someChildNode(callback) {
                return this.childNodes.some(callback);
            }
        },
        {
            key: "findChildNode",
            value: function findChildNode(callback) {
                return this.childNodes.find(callback);
            }
        },
        {
            key: "everyChildNode",
            value: function everyChildNode(callback) {
                return this.childNodes.every(callback);
            }
        },
        {
            key: "filterChildNode",
            value: function filterChildNode(callback) {
                return this.childNodes.filter(callback);
            }
        },
        {
            key: "reduceChildNode",
            value: function reduceChildNode(callback, initialValue) {
                return this.childNodes.reduce(callback, initialValue);
            }
        },
        {
            key: "forEachChildNode",
            value: function forEachChildNode(callback) {
                this.childNodes.forEach(callback);
            }
        },
        {
            key: "forwardsSomeChildNode",
            value: function forwardsSomeChildNode(callback) {
                return forwardsSome(this.childNodes, callback);
            }
        },
        {
            key: "backwardsSomeChildNode",
            value: function backwardsSomeChildNode(callback) {
                return backwardsSome(this.childNodes, callback);
            }
        },
        {
            key: "setChildNodesParentNode",
            value: function setChildNodesParentNode(childNodes) {
                if (childNodes === undefined) {
                    childNodes = _to_consumable_array(this.childNodes);
                }
                var parentNode = this;
                childNodes.forEach(function(childNode) {
                    childNode.setParentNode(parentNode);
                });
            }
        },
        {
            key: "resetChildNodesParentNode",
            value: function resetChildNodesParentNode(childNodes) {
                if (childNodes === undefined) {
                    childNodes = _to_consumable_array(this.childNodes);
                }
                var parentNode = null;
                childNodes.forEach(function(childNode) {
                    childNode.setParentNode(parentNode);
                });
            }
        },
        {
            key: "addChildNode",
            value: function addChildNode(addedChildNode, offset) {
                var addedChildNodes = [
                    addedChildNode
                ];
                this.addChildNodes(addedChildNodes, offset);
            }
        },
        {
            key: "addChildNodes",
            value: function addChildNodes(addedChildNodes, offset) {
                var startIndex = offset, deleteCount = 0;
                this.spliceChildNodes.apply(this, [
                    startIndex,
                    deleteCount
                ].concat(_to_consumable_array(addedChildNodes)));
            }
        },
        {
            key: "removeChildNode",
            value: function removeChildNode(removedChildNode) {
                var removedChildNodes;
                removedChildNodes = [
                    removedChildNode
                ];
                removedChildNodes = this.removeChildNodes(removedChildNodes);
                return removedChildNodes;
            }
        },
        {
            key: "removeChildNodes",
            value: function removeChildNodes(removedChildNodes) {
                if (removedChildNodes === undefined) {
                    removedChildNodes = _to_consumable_array(this.childNodes);
                }
                var removedChildNodesLength = removedChildNodes.length;
                if (removedChildNodesLength === 0) {
                    return;
                }
                var firstReplacedChildNode = first(removedChildNodes), firstIndex = this.childNodes.indexOf(firstReplacedChildNode), startIndex = firstIndex, deleteCount = removedChildNodesLength, addedChildNodes = [];
                removedChildNodes = this.spliceChildNodes(startIndex, deleteCount, addedChildNodes);
                return removedChildNodes;
            }
        },
        {
            key: "replaceChildNode",
            value: function replaceChildNode(replacedChildNode, replacementChildNodes) {
                var replacedChildNodes = [
                    replacedChildNode
                ];
                this.replaceChildNodes(replacedChildNodes, replacementChildNodes);
            }
        },
        {
            key: "replaceChildNodes",
            value: function replaceChildNodes(replacedChildNodes, replacementChildNodes) {
                var replacedChildNodesLength = replacedChildNodes.length, firstReplacedChildNode = first(replacedChildNodes), firstIndex = this.childNodes.indexOf(firstReplacedChildNode), startIndex = firstIndex, deleteCount = replacedChildNodesLength; ///
                this.spliceChildNodes(startIndex, deleteCount, replacementChildNodes);
            }
        },
        {
            key: "spliceChildNodes",
            value: function spliceChildNodes(startIndex, deleteCount) {
                var addedChildNodes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
                var _this_childNodes;
                var removedChildNodes = (_this_childNodes = this.childNodes).splice.apply(_this_childNodes, [
                    startIndex,
                    deleteCount
                ].concat(_to_consumable_array(addedChildNodes)));
                this.resetChildNodesParentNode(removedChildNodes);
                this.setChildNodesParentNode(addedChildNodes);
                return removedChildNodes;
            }
        },
        {
            key: "sliceChildNodes",
            value: function sliceChildNodes(startIndex, endIndex) {
                var childNodes = this.childNodes.slice(startIndex, endIndex);
                return childNodes;
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
            value: function rewrite() {
                var rewrittenNonTerminalNode = null;
                return rewrittenNonTerminalNode;
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
function cloneChildNodes(childNodes) {
    childNodes = childNodes.map(function(childNode) {
        childNode = childNode.clone(); ///
        return childNode;
    });
    return childNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlXCI7XG5cbmNvbnN0IHsgZmlyc3QsIG1hdGNoLCBmb3J3YXJkc1NvbWUsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBvcGFxdWU6IG9wYXF1ZVNwZWNpYWxTeW1ib2wgLCBzZW1pT3BhcXVlOiBzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgICB0aGlzLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldFBhcmVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldE9wYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMub3BhY2l0eTtcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIHNldFJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IDAsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSBJbmZpbml0eSxcbiAgICAgICAgICBhZGRlZENoaWxkTm9kZXMgPSBjaGlsZE5vZGVzOyAgLy8vXG5cbiAgICB0aGlzLnNwbGljZUNoaWxkTm9kZXMoc3RhcnRJbmRleCwgZGVsZXRlQ291bnQsIGFkZGVkQ2hpbGROb2Rlcyk7XG4gIH1cblxuICBzZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpIHtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICB9XG5cbiAgc2V0UHJlY2VkZW5jZShwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5wcmVjZWRlbmNlID0gcHJlY2VkZW5jZTtcbiAgfVxuXG4gIHNldE9wYWNpdHkob3BhY2l0eSkge1xuICAgIHRoaXMub3BhY2l0eSA9IG9wYWNpdHk7XG4gIH1cblxuICBpc09wYXF1ZSgpIHtcbiAgICBjb25zdCBvcGFxdWUgPSAodGhpcy5vcGFjaXR5ID09PSBvcGFxdWVTcGVjaWFsU3ltYm9sKTtcblxuICAgIHJldHVybiBvcGFxdWU7XG4gIH1cblxuICBpc1NlbWlPcGFxdWUoKSB7XG4gICAgY29uc3Qgc2VtaU9wYXF1ZSA9ICh0aGlzLm9wYWNpdHkgPT09IHNlbWlPcGFxdWVTcGVjaWFsU3ltYm9sKTtcblxuICAgIHJldHVybiBzZW1pT3BhcXVlO1xuICB9XG5cbiAgaXNUcmFuc3BhcmVudCgpIHtcbiAgICBjb25zdCBzZW1pT3BhcXVlID0gKHRoaXMub3BhY2l0eSA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2VtaU9wYXF1ZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSB7XG4gICAgbGV0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4O1xuXG4gICAgdGhpcy5mb3J3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpO1xuXG4gICAgICBpZiAoZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXg7XG4gIH1cblxuICBnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucykge1xuICAgIGxldCBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4O1xuXG4gICAgdGhpcy5iYWNrd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucyk7XG5cbiAgICAgIGlmIChsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXg7XG4gIH1cblxuICBnZXRTaWduaWZpY2FudFRva2VucyhzaWduaWZpY2FudFRva2VucyA9IFtdKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY2hpbGROb2RlLmdldFNpZ25pZmljYW50VG9rZW5zKHNpZ25pZmljYW50VG9rZW5zKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VucztcbiAgfVxuXG4gIGdldEFuY2VzdG9yTm9kZXMoKSB7XG4gICAgY29uc3QgYW5jZXN0b3JOb2RlcyA9IFtdO1xuXG4gICAgbGV0IHBhcmVudE5vZGUgPSB0aGlzLnBhcmVudE5vZGU7XG5cbiAgICB3aGlsZSAocGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYW5jZXN0b3JOb2RlID0gcGFyZW50Tm9kZTsgIC8vL1xuXG4gICAgICBhbmNlc3Rvck5vZGVzLnB1c2goYW5jZXN0b3JOb2RlKTtcblxuICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBhbmNlc3Rvck5vZGVzO1xuICB9XG5cbiAgZ2V0TXVsdGlwbGljaXR5KCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNMZW5ndGggPSB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgIG11bHRpcGxpY2l0eSA9IGNoaWxkTm9kZXNMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBtdWx0aXBsaWNpdHk7XG4gIH1cblxuICBpc0VtcHR5KCkge1xuICAgIGNvbnN0IG11bHRpcGxpY2l0eSA9IHRoaXMuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgICAgZW1wdHkgPSAobXVsdGlwbGljaXR5ID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IChtdWx0aXBsaWNpdHkgPT09IDEpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgaXNMb3dlclByZWNlZGVuY2UocnVsZU5hbWUsIHByZWNlZGVuY2UpIHtcbiAgICBsZXQgbG93ZXJQcmVjZWRlbmNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJlY2VkZW5jZSA9PT0gbnVsbCkge1xuICAgICAgbG93ZXJQcmVjZWRlbmNlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByZWNlZGVuY2UgPT09IEluZmluaXR5KSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KHRoaXMuY2hpbGROb2Rlcyk7XG5cbiAgICAgIGxvd2VyUHJlY2VkZW5jZSA9IGZpcnN0Q2hpbGROb2RlLmlzTG93ZXJQcmVjZWRlbmNlKHJ1bGVOYW1lLCBwcmVjZWRlbmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG93ZXJQcmVjZWRlbmNlID0gKCh0aGlzLnJ1bGVOYW1lID09PSBydWxlTmFtZSkgJiYgKHRoaXMucHJlY2VkZW5jZSA8IHByZWNlZGVuY2UpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG93ZXJQcmVjZWRlbmNlO1xuICB9XG5cbiAgaXNVbnByZWNlZGVudGVkKCkge1xuICAgIGxldCB1bnByZWNlZGVudGVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5wcmVjZWRlbmNlICE9PSBudWxsKSB7XG4gICAgICB1bnByZWNlZGVudGVkID0gdGhpcy5jaGlsZE5vZGVzLnNvbWUoKGNoaWxkTm9kZSkgPT4geyAgLy8vXG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSA9IGNoaWxkTm9kZS5pc0xvd2VyUHJlY2VkZW5jZSh0aGlzLnJ1bGVOYW1lLCB0aGlzLnByZWNlZGVuY2UpO1xuXG4gICAgICAgIGlmIChjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVucHJlY2VkZW50ZWQ7XG4gIH1cblxuICBpc0luY2x1ZGVkSW4obm9kZSkge1xuICAgIGxldCBpbmNsdWRlZEluID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcyA9PT0gbm9kZSkge1xuICAgICAgaW5jbHVkZWRJbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICBpbmNsdWRlZEluID0gY2hpbGROb2Rlcy5zb21lKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBpbmNsdWRlZEluQ2hpbGROb2RlID0gdGhpcy5pc0luY2x1ZGVkSW4oY2hpbGROb2RlKTtcblxuICAgICAgICAgIGlmIChpbmNsdWRlZEluQ2hpbGROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmNsdWRlZEluO1xuICB9XG5cbiAgbWFwQ2hpbGROb2RlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmNoaWxkTm9kZXMubWFwKGNhbGxiYWNrKTsgfVxuXG4gIHNvbWVDaGlsZE5vZGUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGZpbmRDaGlsZE5vZGUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5maW5kKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5Q2hpbGROb2RlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmNoaWxkTm9kZXMuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgZmlsdGVyQ2hpbGROb2RlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmNoaWxkTm9kZXMuZmlsdGVyKGNhbGxiYWNrKTsgfVxuXG4gIHJlZHVjZUNoaWxkTm9kZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmNoaWxkTm9kZXMucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZm9yRWFjaENoaWxkTm9kZShjYWxsYmFjaykgeyB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBmb3J3YXJkc1NvbWVDaGlsZE5vZGUoY2FsbGJhY2spIHsgcmV0dXJuIGZvcndhcmRzU29tZSh0aGlzLmNoaWxkTm9kZXMsIGNhbGxiYWNrKTsgfVxuXG4gIGJhY2t3YXJkc1NvbWVDaGlsZE5vZGUoY2FsbGJhY2spIHsgcmV0dXJuIGJhY2t3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCBjYWxsYmFjayk7IH1cblxuICBzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZShjaGlsZE5vZGVzKSB7XG4gICAgaWYgKGNoaWxkTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGROb2RlcyA9IFtcbiAgICAgICAgLi4udGhpcy5jaGlsZE5vZGVzXG4gICAgICBdO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0aGlzO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNoaWxkTm9kZS5zZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZShjaGlsZE5vZGVzKSB7XG4gICAgaWYgKGNoaWxkTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGROb2RlcyA9IFtcbiAgICAgICAgLi4udGhpcy5jaGlsZE5vZGVzXG4gICAgICBdO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBudWxsO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNoaWxkTm9kZS5zZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQ2hpbGROb2RlKGFkZGVkQ2hpbGROb2RlLCBvZmZzZXQpIHtcbiAgICBjb25zdCBhZGRlZENoaWxkTm9kZXMgPSBbXG4gICAgICAgIGFkZGVkQ2hpbGROb2RlXG4gICAgXTtcblxuICAgIHRoaXMuYWRkQ2hpbGROb2RlcyhhZGRlZENoaWxkTm9kZXMsIG9mZnNldCk7XG4gIH1cblxuICBhZGRDaGlsZE5vZGVzKGFkZGVkQ2hpbGROb2Rlcywgb2Zmc2V0KSB7XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IG9mZnNldCwgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gICAgdGhpcy5zcGxpY2VDaGlsZE5vZGVzKHN0YXJ0SW5kZXgsIGRlbGV0ZUNvdW50LCAuLi5hZGRlZENoaWxkTm9kZXMpO1xuICB9XG5cbiAgcmVtb3ZlQ2hpbGROb2RlKHJlbW92ZWRDaGlsZE5vZGUpIHtcbiAgICBsZXQgcmVtb3ZlZENoaWxkTm9kZXM7XG5cbiAgICByZW1vdmVkQ2hpbGROb2RlcyA9IFtcbiAgICAgIHJlbW92ZWRDaGlsZE5vZGVcbiAgICBdO1xuXG4gICAgcmVtb3ZlZENoaWxkTm9kZXMgPSB0aGlzLnJlbW92ZUNoaWxkTm9kZXMocmVtb3ZlZENoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIHJlbW92ZWRDaGlsZE5vZGVzO1xuICB9XG5cbiAgcmVtb3ZlQ2hpbGROb2RlcyhyZW1vdmVkQ2hpbGROb2Rlcykge1xuICAgIGlmIChyZW1vdmVkQ2hpbGROb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZW1vdmVkQ2hpbGROb2RlcyA9IFtcbiAgICAgICAgLi4udGhpcy5jaGlsZE5vZGVzXG4gICAgICBdO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZWRDaGlsZE5vZGVzTGVuZ3RoID0gcmVtb3ZlZENoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKHJlbW92ZWRDaGlsZE5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RSZXBsYWNlZENoaWxkTm9kZSA9IGZpcnN0KHJlbW92ZWRDaGlsZE5vZGVzKSxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YoZmlyc3RSZXBsYWNlZENoaWxkTm9kZSksXG4gICAgICAgICAgc3RhcnRJbmRleCA9IGZpcnN0SW5kZXgsIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gcmVtb3ZlZENoaWxkTm9kZXNMZW5ndGgsIC8vL1xuICAgICAgICAgIGFkZGVkQ2hpbGROb2RlcyA9IFtdO1xuXG4gICAgcmVtb3ZlZENoaWxkTm9kZXMgPSB0aGlzLnNwbGljZUNoaWxkTm9kZXMoc3RhcnRJbmRleCwgZGVsZXRlQ291bnQsIGFkZGVkQ2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gcmVtb3ZlZENoaWxkTm9kZXM7XG4gIH1cblxuICByZXBsYWNlQ2hpbGROb2RlKHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpIHtcbiAgICBjb25zdCByZXBsYWNlZENoaWxkTm9kZXMgPSBbXG4gICAgICByZXBsYWNlZENoaWxkTm9kZVxuICAgIF07XG5cbiAgICB0aGlzLnJlcGxhY2VDaGlsZE5vZGVzKHJlcGxhY2VkQ2hpbGROb2RlcywgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbiAgfVxuXG4gIHJlcGxhY2VDaGlsZE5vZGVzKHJlcGxhY2VkQ2hpbGROb2RlcywgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKSB7XG4gICAgY29uc3QgcmVwbGFjZWRDaGlsZE5vZGVzTGVuZ3RoID0gcmVwbGFjZWRDaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBmaXJzdFJlcGxhY2VkQ2hpbGROb2RlID0gZmlyc3QocmVwbGFjZWRDaGlsZE5vZGVzKSxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YoZmlyc3RSZXBsYWNlZENoaWxkTm9kZSksXG4gICAgICAgICAgc3RhcnRJbmRleCA9IGZpcnN0SW5kZXgsIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gcmVwbGFjZWRDaGlsZE5vZGVzTGVuZ3RoOyAvLy9cblxuICAgIHRoaXMuc3BsaWNlQ2hpbGROb2RlcyhzdGFydEluZGV4LCBkZWxldGVDb3VudCwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbiAgfVxuXG4gIHNwbGljZUNoaWxkTm9kZXMoc3RhcnRJbmRleCwgZGVsZXRlQ291bnQsIGFkZGVkQ2hpbGROb2RlcyA9IFtdKSB7XG4gICAgY29uc3QgcmVtb3ZlZENoaWxkTm9kZXMgPSB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0SW5kZXgsIGRlbGV0ZUNvdW50LCAuLi5hZGRlZENoaWxkTm9kZXMpO1xuXG4gICAgdGhpcy5yZXNldENoaWxkTm9kZXNQYXJlbnROb2RlKHJlbW92ZWRDaGlsZE5vZGVzKTtcblxuICAgIHRoaXMuc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUoYWRkZWRDaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiByZW1vdmVkQ2hpbGROb2RlcztcbiAgfVxuXG4gIHNsaWNlQ2hpbGROb2RlcyhzdGFydEluZGV4LCBlbmRJbmRleCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmNoaWxkTm9kZXMuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXM7XG4gIH1cblxuICBtYXRjaChub2RlLCBkZXB0aCA9IEluZmluaXR5LCBleGFjdGx5ID0gZmFsc2UpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgIGlmICh0aGlzLnJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVPcGFjaXR5ID0gbm9uVGVybWluYWxOb2RlLmdldE9wYWNpdHkoKTtcblxuICAgICAgICBpZiAodGhpcy5vcGFjaXR5ID09PSBub25UZXJtaW5hbE5vZGVPcGFjaXR5KSB7XG4gICAgICAgICAgY29uc3QgcHJlY2VkZW5jZSA9IHRoaXMuZ2V0UHJlY2VkZW5jZSgpLFxuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVByZWNlZGVuY2UgPSBub25UZXJtaW5hbE5vZGUuZ2V0UHJlY2VkZW5jZSgpO1xuXG4gICAgICAgICAgaWYgKHByZWNlZGVuY2UgPT09IG5vblRlcm1pbmFsTm9kZVByZWNlZGVuY2UpIHtcbiAgICAgICAgICAgIGRlcHRoLS07XG5cbiAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICBtYXRjaGVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgICAgICAgIG1hdGNoZXMgPSBtYXRjaCh0aGlzLmNoaWxkTm9kZXMsIG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIChjaGlsZE5vZGUsIG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZU1hdGNoZXNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGUgPSBjaGlsZE5vZGUubWF0Y2gobm9uVGVybWluYWxOb2RlQ2hpbGROb2RlLCBkZXB0aCwgZXhhY3RseSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlTWF0Y2hlc05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHJld3JpdGUoKSB7XG4gICAgY29uc3QgcmV3cml0dGVuTm9uVGVybWluYWxOb2RlID0gbnVsbDtcblxuICAgIHJldHVybiByZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGNsb25lKC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IENsYXNzID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBwYXJlbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMucnVsZU5hbWUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IGNsb25lQ2hpbGROb2Rlcyh0aGlzLmNoaWxkTm9kZXMpLFxuICAgICAgICAgIG9wYWNpdHkgPSB0aGlzLm9wYWNpdHksXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IHRoaXMucHJlY2VkZW5jZSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBub25UZXJtaW5hbE5vZGUuc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUoKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAob3BhY2l0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcGFjaXR5ID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgICBydWxlTmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBub25UZXJtaW5hbE5vZGUuc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUoKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvbmVDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXMubWFwKChjaGlsZE5vZGUpID0+IHsgIC8vL1xuICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5jbG9uZSgpOyAgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2RlO1xuICB9KTtcblxuICByZXR1cm4gY2hpbGROb2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwibWF0Y2giLCJmb3J3YXJkc1NvbWUiLCJiYWNrd2FyZHNTb21lIiwib3BhcXVlIiwib3BhcXVlU3BlY2lhbFN5bWJvbCIsInNwZWNpYWxTeW1ib2xzIiwic2VtaU9wYXF1ZSIsInNlbWlPcGFxdWVTcGVjaWFsU3ltYm9sIiwicnVsZU5hbWUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiZ2V0UnVsZU5hbWUiLCJnZXRQYXJlbnROb2RlIiwiZ2V0Q2hpbGROb2RlcyIsImdldE9wYWNpdHkiLCJnZXRQcmVjZWRlbmNlIiwic2V0UnVsZU5hbWUiLCJzZXRDaGlsZE5vZGVzIiwic3RhcnRJbmRleCIsImRlbGV0ZUNvdW50IiwiSW5maW5pdHkiLCJhZGRlZENoaWxkTm9kZXMiLCJzcGxpY2VDaGlsZE5vZGVzIiwic2V0UGFyZW50Tm9kZSIsInNldFByZWNlZGVuY2UiLCJzZXRPcGFjaXR5IiwiaXNPcGFxdWUiLCJpc1NlbWlPcGFxdWUiLCJpc1RyYW5zcGFyZW50IiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwidG9rZW5zIiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJmb3J3YXJkc1NvbWVDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJub2RlIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJiYWNrd2FyZHNTb21lQ2hpbGROb2RlIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbnMiLCJzaWduaWZpY2FudFRva2VucyIsImZvckVhY2giLCJnZXRBbmNlc3Rvck5vZGVzIiwiYW5jZXN0b3JOb2RlcyIsImFuY2VzdG9yTm9kZSIsInB1c2giLCJnZXRNdWx0aXBsaWNpdHkiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibXVsdGlwbGljaXR5IiwiaXNFbXB0eSIsImVtcHR5IiwiaXNTaW5ndWxhciIsInNpbmd1bGFyIiwiaXNMb3dlclByZWNlZGVuY2UiLCJsb3dlclByZWNlZGVuY2UiLCJmaXJzdENoaWxkTm9kZSIsImlzVW5wcmVjZWRlbnRlZCIsInVucHJlY2VkZW50ZWQiLCJzb21lIiwiY2hpbGROb2RlTG93ZXJQcmVjZWRlbmNlIiwiaXNJbmNsdWRlZEluIiwiaW5jbHVkZWRJbiIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpbmNsdWRlZEluQ2hpbGROb2RlIiwibWFwQ2hpbGROb2RlIiwiY2FsbGJhY2siLCJtYXAiLCJzb21lQ2hpbGROb2RlIiwiZmluZENoaWxkTm9kZSIsImZpbmQiLCJldmVyeUNoaWxkTm9kZSIsImV2ZXJ5IiwiZmlsdGVyQ2hpbGROb2RlIiwiZmlsdGVyIiwicmVkdWNlQ2hpbGROb2RlIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZm9yRWFjaENoaWxkTm9kZSIsInNldENoaWxkTm9kZXNQYXJlbnROb2RlIiwidW5kZWZpbmVkIiwicmVzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZSIsImFkZENoaWxkTm9kZSIsImFkZGVkQ2hpbGROb2RlIiwib2Zmc2V0IiwiYWRkQ2hpbGROb2RlcyIsInJlbW92ZUNoaWxkTm9kZSIsInJlbW92ZWRDaGlsZE5vZGUiLCJyZW1vdmVkQ2hpbGROb2RlcyIsInJlbW92ZUNoaWxkTm9kZXMiLCJyZW1vdmVkQ2hpbGROb2Rlc0xlbmd0aCIsImZpcnN0UmVwbGFjZWRDaGlsZE5vZGUiLCJmaXJzdEluZGV4IiwiaW5kZXhPZiIsInJlcGxhY2VDaGlsZE5vZGUiLCJyZXBsYWNlZENoaWxkTm9kZSIsInJlcGxhY2VtZW50Q2hpbGROb2RlcyIsInJlcGxhY2VkQ2hpbGROb2RlcyIsInJlcGxhY2VDaGlsZE5vZGVzIiwicmVwbGFjZWRDaGlsZE5vZGVzTGVuZ3RoIiwic3BsaWNlIiwic2xpY2VDaGlsZE5vZGVzIiwiZW5kSW5kZXgiLCJzbGljZSIsImRlcHRoIiwiZXhhY3RseSIsIm1hdGNoZXMiLCJub25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZU9wYWNpdHkiLCJub25UZXJtaW5hbE5vZGVQcmVjZWRlbmNlIiwibm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSIsImNoaWxkTm9kZU1hdGNoZXNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGUiLCJyZXdyaXRlIiwicmV3cml0dGVuTm9uVGVybWluYWxOb2RlIiwiYXNQYXJzZVRyZWUiLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIiwicGFyc2VUcmVlIiwiY2xvbmUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJDbGFzcyIsImNvbnN0cnVjdG9yIiwiY2xvbmVDaGlsZE5vZGVzIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVOzJCQUNBO3NFQUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQVFDLFFBQThDQyx5QkFBYyxDQUE1REQsT0FBT0UsUUFBdUNELHlCQUFjLENBQXJEQyxPQUFPQyxlQUFnQ0YseUJBQWMsQ0FBOUNFLGNBQWNDLGdCQUFrQkgseUJBQWMsQ0FBaENHLGVBQzVCQyxBQUFRQyxzQkFBOERDLDJCQUFjLENBQXBGRixRQUE4QkcsQUFBWUMsMEJB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