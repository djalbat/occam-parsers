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
                this.resetChildNodesParentNode();
                this.childNodes = childNodes;
                this.setChildNodesParentNode();
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
            key: "isSingular",
            value: function isSingular() {
                var childNodesLength = this.childNodes.length, singular = childNodesLength === 1;
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
            key: "getFirstSignificantTokenIndex",
            value: function getFirstSignificantTokenIndex(tokens) {
                var firstSignificantTokenIndex;
                forwardsSome(this.childNodes, function(childNode) {
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
                backwardsSome(this.childNodes, function(childNode) {
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
            key: "isEmpty",
            value: function isEmpty() {
                var childNodesLength = this.childNodes.length, empty = childNodesLength === 0;
                return empty;
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
            key: "everyChildNode",
            value: function everyChildNode(callback) {
                return this.childNodes.every(callback);
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
                var _this_childNodes;
                var start = offset, deleteCount = 0;
                (_this_childNodes = this.childNodes).splice.apply(_this_childNodes, [
                    start,
                    deleteCount
                ].concat(_to_consumable_array(addedChildNodes)));
                this.setChildNodesParentNode(addedChildNodes);
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
                var firstReplacedChildNode = first(removedChildNodes), firstIndex = this.childNodes.indexOf(firstReplacedChildNode), start = firstIndex, deleteCount = removedChildNodesLength; ///
                this.childNodes.splice(start, deleteCount);
                this.resetChildNodesParentNode(removedChildNodes);
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
                var _this_childNodes;
                var replacedChildNodesLength = replacedChildNodes.length, firstReplacedChildNode = first(replacedChildNodes), firstIndex = this.childNodes.indexOf(firstReplacedChildNode), start = firstIndex, deleteCount = replacedChildNodesLength; ///
                (_this_childNodes = this.childNodes).splice.apply(_this_childNodes, [
                    start,
                    deleteCount
                ].concat(_to_consumable_array(replacementChildNodes)));
                this.resetChildNodesParentNode(replacedChildNodes);
                this.setChildNodesParentNode(replacementChildNodes);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlXCI7XG5cbmNvbnN0IHsgZmlyc3QsIG1hdGNoLCBmb3J3YXJkc1NvbWUsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBvcGFxdWU6IG9wYXF1ZVNwZWNpYWxTeW1ib2wgLCBzZW1pT3BhcXVlOiBzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgICB0aGlzLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldFBhcmVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldE9wYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMub3BhY2l0eTtcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIHNldFJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5yZXNldENoaWxkTm9kZXNQYXJlbnROb2RlKCk7XG5cbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuXG4gICAgdGhpcy5zZXRDaGlsZE5vZGVzUGFyZW50Tm9kZSgpO1xuICB9XG5cbiAgc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKSB7XG4gICAgdGhpcy5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgfVxuXG4gIHNldFByZWNlZGVuY2UocHJlY2VkZW5jZSkge1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBzZXRPcGFjaXR5KG9wYWNpdHkpIHtcbiAgICB0aGlzLm9wYWNpdHkgPSBvcGFjaXR5O1xuICB9XG5cbiAgaXNPcGFxdWUoKSB7XG4gICAgY29uc3Qgb3BhcXVlID0gKHRoaXMub3BhY2l0eSA9PT0gb3BhcXVlU3BlY2lhbFN5bWJvbCk7XG5cbiAgICByZXR1cm4gb3BhcXVlO1xuICB9XG5cbiAgaXNTZW1pT3BhcXVlKCkge1xuICAgIGNvbnN0IHNlbWlPcGFxdWUgPSAodGhpcy5vcGFjaXR5ID09PSBzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCk7XG5cbiAgICByZXR1cm4gc2VtaU9wYXF1ZTtcbiAgfVxuXG4gIGlzVHJhbnNwYXJlbnQoKSB7XG4gICAgY29uc3Qgc2VtaU9wYXF1ZSA9ICh0aGlzLm9wYWNpdHkgPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNlbWlPcGFxdWU7XG4gIH1cblxuICBpc1Rlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBpc05vblRlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc0xlbmd0aCA9IHRoaXMuY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgc2luZ3VsYXIgPSAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMSk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBpc0xvd2VyUHJlY2VkZW5jZShydWxlTmFtZSwgcHJlY2VkZW5jZSkge1xuICAgIGxldCBsb3dlclByZWNlZGVuY2U7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcmVjZWRlbmNlID09PSBudWxsKSB7XG4gICAgICBsb3dlclByZWNlZGVuY2UgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJlY2VkZW5jZSA9PT0gSW5maW5pdHkpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QodGhpcy5jaGlsZE5vZGVzKTtcblxuICAgICAgbG93ZXJQcmVjZWRlbmNlID0gZmlyc3RDaGlsZE5vZGUuaXNMb3dlclByZWNlZGVuY2UocnVsZU5hbWUsIHByZWNlZGVuY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb3dlclByZWNlZGVuY2UgPSAoKHRoaXMucnVsZU5hbWUgPT09IHJ1bGVOYW1lKSAmJiAodGhpcy5wcmVjZWRlbmNlIDwgcHJlY2VkZW5jZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBsb3dlclByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpIHtcbiAgICBsZXQgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXg7XG5cbiAgICBmb3J3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucyk7XG5cbiAgICAgIGlmIChmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleDtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSB7XG4gICAgbGV0IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXg7XG5cbiAgICBiYWNrd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKTtcblxuICAgICAgaWYgKGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleDtcbiAgfVxuXG4gIGdldFNpZ25pZmljYW50VG9rZW5zKHNpZ25pZmljYW50VG9rZW5zID0gW10pIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjaGlsZE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbnMoc2lnbmlmaWNhbnRUb2tlbnMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5zO1xuICB9XG5cbiAgZ2V0QW5jZXN0b3JOb2RlcygpIHtcbiAgICBjb25zdCBhbmNlc3Rvck5vZGVzID0gW107XG5cbiAgICBsZXQgcGFyZW50Tm9kZSA9IHRoaXMucGFyZW50Tm9kZTtcblxuICAgIHdoaWxlIChwYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBhbmNlc3Rvck5vZGUgPSBwYXJlbnROb2RlOyAgLy8vXG5cbiAgICAgIGFuY2VzdG9yTm9kZXMucHVzaChhbmNlc3Rvck5vZGUpO1xuXG4gICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5nZXRQYXJlbnROb2RlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFuY2VzdG9yTm9kZXM7XG4gIH1cblxuICBpc1VucHJlY2VkZW50ZWQoKSB7XG4gICAgbGV0IHVucHJlY2VkZW50ZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnByZWNlZGVuY2UgIT09IG51bGwpIHtcbiAgICAgIHVucHJlY2VkZW50ZWQgPSB0aGlzLmNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlKSA9PiB7ICAvLy9cbiAgICAgICAgY29uc3QgY2hpbGROb2RlTG93ZXJQcmVjZWRlbmNlID0gY2hpbGROb2RlLmlzTG93ZXJQcmVjZWRlbmNlKHRoaXMucnVsZU5hbWUsIHRoaXMucHJlY2VkZW5jZSk7XG5cbiAgICAgICAgaWYgKGNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5wcmVjZWRlbnRlZDtcbiAgfVxuXG4gIGlzSW5jbHVkZWRJbihub2RlKSB7XG4gICAgbGV0IGluY2x1ZGVkSW4gPSBmYWxzZTtcblxuICAgIGlmICh0aGlzID09PSBub2RlKSB7XG4gICAgICBpbmNsdWRlZEluID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgIGluY2x1ZGVkSW4gPSBjaGlsZE5vZGVzLnNvbWUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluY2x1ZGVkSW5DaGlsZE5vZGUgPSB0aGlzLmlzSW5jbHVkZWRJbihjaGlsZE5vZGUpO1xuXG4gICAgICAgICAgaWYgKGluY2x1ZGVkSW5DaGlsZE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluY2x1ZGVkSW47XG4gIH1cblxuICBpc0VtcHR5KCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNMZW5ndGggPSB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgIGVtcHR5ID0gKGNoaWxkTm9kZXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGVtcHR5O1xuICB9XG5cbiAgbWFwQ2hpbGROb2RlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmNoaWxkTm9kZXMubWFwKGNhbGxiYWNrKTsgfVxuXG4gIHNvbWVDaGlsZE5vZGUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5Q2hpbGROb2RlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmNoaWxkTm9kZXMuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlQ2hpbGROb2RlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICBmb3JFYWNoQ2hpbGROb2RlKGNhbGxiYWNrKSB7IHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIG1hdGNoKG5vZGUsIGRlcHRoID0gSW5maW5pdHksIGV4YWN0bHkgPSBmYWxzZSkge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgaWYgKHRoaXMucnVsZU5hbWUgPT09IG5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZU9wYWNpdHkgPSBub25UZXJtaW5hbE5vZGUuZ2V0T3BhY2l0eSgpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wYWNpdHkgPT09IG5vblRlcm1pbmFsTm9kZU9wYWNpdHkpIHtcbiAgICAgICAgICBjb25zdCBwcmVjZWRlbmNlID0gdGhpcy5nZXRQcmVjZWRlbmNlKCksXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlUHJlY2VkZW5jZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRQcmVjZWRlbmNlKCk7XG5cbiAgICAgICAgICBpZiAocHJlY2VkZW5jZSA9PT0gbm9uVGVybWluYWxOb2RlUHJlY2VkZW5jZSkge1xuICAgICAgICAgICAgZGVwdGgtLTtcblxuICAgICAgICAgICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICAgICAgICAgIG1hdGNoZXMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoKHRoaXMuY2hpbGROb2Rlcywgbm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgKGNoaWxkTm9kZSwgbm9uVGVybWluYWxOb2RlQ2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTWF0Y2hlc05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSA9IGNoaWxkTm9kZS5tYXRjaChub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUsIGRlcHRoLCBleGFjdGx5KTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVNYXRjaGVzTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgcmV3cml0ZSgpIHtcbiAgICBjb25zdCByZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGFkZENoaWxkTm9kZShhZGRlZENoaWxkTm9kZSwgb2Zmc2V0KSB7XG4gICAgY29uc3QgYWRkZWRDaGlsZE5vZGVzID0gW1xuICAgICAgICBhZGRlZENoaWxkTm9kZVxuICAgIF07XG5cbiAgICB0aGlzLmFkZENoaWxkTm9kZXMoYWRkZWRDaGlsZE5vZGVzLCBvZmZzZXQpO1xuICB9XG5cbiAgYWRkQ2hpbGROb2RlcyhhZGRlZENoaWxkTm9kZXMsIG9mZnNldCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gb2Zmc2V0LCAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uYWRkZWRDaGlsZE5vZGVzKTtcblxuICAgIHRoaXMuc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUoYWRkZWRDaGlsZE5vZGVzKTtcbiAgfVxuXG4gIHJlbW92ZUNoaWxkTm9kZShyZW1vdmVkQ2hpbGROb2RlKSB7XG4gICAgbGV0IHJlbW92ZWRDaGlsZE5vZGVzO1xuXG4gICAgcmVtb3ZlZENoaWxkTm9kZXMgPSBbXG4gICAgICByZW1vdmVkQ2hpbGROb2RlXG4gICAgXTtcblxuICAgIHJlbW92ZWRDaGlsZE5vZGVzID0gdGhpcy5yZW1vdmVDaGlsZE5vZGVzKHJlbW92ZWRDaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiByZW1vdmVkQ2hpbGROb2RlcztcbiAgfVxuXG4gIHJlbW92ZUNoaWxkTm9kZXMocmVtb3ZlZENoaWxkTm9kZXMpIHtcbiAgICBpZiAocmVtb3ZlZENoaWxkTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVtb3ZlZENoaWxkTm9kZXMgPSBbXG4gICAgICAgIC4uLnRoaXMuY2hpbGROb2Rlc1xuICAgICAgXTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVkQ2hpbGROb2Rlc0xlbmd0aCA9IHJlbW92ZWRDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChyZW1vdmVkQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0UmVwbGFjZWRDaGlsZE5vZGUgPSBmaXJzdChyZW1vdmVkQ2hpbGROb2RlcyksXG4gICAgICAgICAgZmlyc3RJbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKGZpcnN0UmVwbGFjZWRDaGlsZE5vZGUpLFxuICAgICAgICAgIHN0YXJ0ID0gZmlyc3RJbmRleCwgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSByZW1vdmVkQ2hpbGROb2Rlc0xlbmd0aDsgLy8vXG5cbiAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgICB0aGlzLnJlc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUocmVtb3ZlZENoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIHJlbW92ZWRDaGlsZE5vZGVzO1xuICB9XG5cbiAgcmVwbGFjZUNoaWxkTm9kZShyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKSB7XG4gICAgY29uc3QgcmVwbGFjZWRDaGlsZE5vZGVzID0gW1xuICAgICAgcmVwbGFjZWRDaGlsZE5vZGVcbiAgICBdO1xuXG4gICAgdGhpcy5yZXBsYWNlQ2hpbGROb2RlcyhyZXBsYWNlZENoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG4gIH1cblxuICByZXBsYWNlQ2hpbGROb2RlcyhyZXBsYWNlZENoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICAgIGNvbnN0IHJlcGxhY2VkQ2hpbGROb2Rlc0xlbmd0aCA9IHJlcGxhY2VkQ2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgZmlyc3RSZXBsYWNlZENoaWxkTm9kZSA9IGZpcnN0KHJlcGxhY2VkQ2hpbGROb2RlcyksXG4gICAgICAgICAgZmlyc3RJbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKGZpcnN0UmVwbGFjZWRDaGlsZE5vZGUpLFxuICAgICAgICAgIHN0YXJ0ID0gZmlyc3RJbmRleCwgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSByZXBsYWNlZENoaWxkTm9kZXNMZW5ndGg7IC8vL1xuXG4gICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG5cbiAgICB0aGlzLnJlc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUocmVwbGFjZWRDaGlsZE5vZGVzKTtcblxuICAgIHRoaXMuc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUocmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbiAgfVxuXG4gIHNldENoaWxkTm9kZXNQYXJlbnROb2RlKGNoaWxkTm9kZXMpIHtcbiAgICBpZiAoY2hpbGROb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGlsZE5vZGVzID0gW1xuICAgICAgICAuLi50aGlzLmNoaWxkTm9kZXNcbiAgICAgIF07XG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHRoaXM7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY2hpbGROb2RlLnNldFBhcmVudE5vZGUocGFyZW50Tm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNldENoaWxkTm9kZXNQYXJlbnROb2RlKGNoaWxkTm9kZXMpIHtcbiAgICBpZiAoY2hpbGROb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGlsZE5vZGVzID0gW1xuICAgICAgICAuLi50aGlzLmNoaWxkTm9kZXNcbiAgICAgIF07XG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IG51bGw7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY2hpbGROb2RlLnNldFBhcmVudE5vZGUocGFyZW50Tm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGNsb25lKC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IENsYXNzID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBwYXJlbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMucnVsZU5hbWUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IGNsb25lQ2hpbGROb2Rlcyh0aGlzLmNoaWxkTm9kZXMpLFxuICAgICAgICAgIG9wYWNpdHkgPSB0aGlzLm9wYWNpdHksXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IHRoaXMucHJlY2VkZW5jZSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBub25UZXJtaW5hbE5vZGUuc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUoKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAob3BhY2l0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcGFjaXR5ID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgICBydWxlTmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBub25UZXJtaW5hbE5vZGUuc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUoKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvbmVDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXMubWFwKChjaGlsZE5vZGUpID0+IHsgIC8vL1xuICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5jbG9uZSgpOyAgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2RlO1xuICB9KTtcblxuICByZXR1cm4gY2hpbGROb2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwibWF0Y2giLCJmb3J3YXJkc1NvbWUiLCJiYWNrd2FyZHNTb21lIiwib3BhcXVlIiwib3BhcXVlU3BlY2lhbFN5bWJvbCIsInNwZWNpYWxTeW1ib2xzIiwic2VtaU9wYXF1ZSIsInNlbWlPcGFxdWVTcGVjaWFsU3ltYm9sIiwicnVsZU5hbWUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiZ2V0UnVsZU5hbWUiLCJnZXRQYXJlbnROb2RlIiwiZ2V0Q2hpbGROb2RlcyIsImdldE9wYWNpdHkiLCJnZXRQcmVjZWRlbmNlIiwic2V0UnVsZU5hbWUiLCJzZXRDaGlsZE5vZGVzIiwicmVzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZSIsInNldENoaWxkTm9kZXNQYXJlbnROb2RlIiwic2V0UGFyZW50Tm9kZSIsInNldFByZWNlZGVuY2UiLCJzZXRPcGFjaXR5IiwiaXNPcGFxdWUiLCJpc1NlbWlPcGFxdWUiLCJpc1RyYW5zcGFyZW50IiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImlzU2luZ3VsYXIiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwic2luZ3VsYXIiLCJpc0xvd2VyUHJlY2VkZW5jZSIsImxvd2VyUHJlY2VkZW5jZSIsIkluZmluaXR5IiwiZmlyc3RDaGlsZE5vZGUiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInRva2VucyIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiY2hpbGROb2RlIiwibm9kZSIsImdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0U2lnbmlmaWNhbnRUb2tlbnMiLCJzaWduaWZpY2FudFRva2VucyIsImZvckVhY2giLCJnZXRBbmNlc3Rvck5vZGVzIiwiYW5jZXN0b3JOb2RlcyIsImFuY2VzdG9yTm9kZSIsInB1c2giLCJpc1VucHJlY2VkZW50ZWQiLCJ1bnByZWNlZGVudGVkIiwic29tZSIsImNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSIsImlzSW5jbHVkZWRJbiIsImluY2x1ZGVkSW4iLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaW5jbHVkZWRJbkNoaWxkTm9kZSIsImlzRW1wdHkiLCJlbXB0eSIsIm1hcENoaWxkTm9kZSIsImNhbGxiYWNrIiwibWFwIiwic29tZUNoaWxkTm9kZSIsImV2ZXJ5Q2hpbGROb2RlIiwiZXZlcnkiLCJyZWR1Y2VDaGlsZE5vZGUiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJmb3JFYWNoQ2hpbGROb2RlIiwiZGVwdGgiLCJleGFjdGx5IiwibWF0Y2hlcyIsIm5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlT3BhY2l0eSIsIm5vblRlcm1pbmFsTm9kZVByZWNlZGVuY2UiLCJub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQ2hpbGROb2RlIiwiY2hpbGROb2RlTWF0Y2hlc05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSIsInJld3JpdGUiLCJyZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUiLCJhZGRDaGlsZE5vZGUiLCJhZGRlZENoaWxkTm9kZSIsIm9mZnNldCIsImFkZGVkQ2hpbGROb2RlcyIsImFkZENoaWxkTm9kZXMiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicmVtb3ZlQ2hpbGROb2RlIiwicmVtb3ZlZENoaWxkTm9kZSIsInJlbW92ZWRDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGROb2RlcyIsInVuZGVmaW5lZCIsInJlbW92ZWRDaGlsZE5vZGVzTGVuZ3RoIiwiZmlyc3RSZXBsYWNlZENoaWxkTm9kZSIsImZpcnN0SW5kZXgiLCJpbmRleE9mIiwicmVwbGFjZUNoaWxkTm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlIiwicmVwbGFjZW1lbnRDaGlsZE5vZGVzIiwicmVwbGFjZWRDaGlsZE5vZGVzIiwicmVwbGFjZUNoaWxkTm9kZXMiLCJyZXBsYWNlZENoaWxkTm9kZXNMZW5ndGgiLCJhc1BhcnNlVHJlZSIsIm5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsIk5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJwYXJzZVRyZWUiLCJjbG9uZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkNsYXNzIiwiY29uc3RydWN0b3IiLCJjbG9uZUNoaWxkTm9kZXMiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUlU7MkJBQ0E7c0VBRU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBUUMsUUFBOENDLHlCQUFjLENBQTVERCxPQUFPRSxRQUF1Q0QseUJBQWMsQ0FBckRDLE9BQU9DLGVBQWdDRix5QkFBYyxDQUE5Q0UsY0FBY0MsZ0JBQWtCSCx5QkFBYyxDQUFoQ0csZUFDNUJDLEFBQVFDLHNCQUE4REMsMkJBQWMsQ0FBcEZGLFFBQThCRyxBQUFZQywwQkFBNEJGLDJCQUFjLENBQXREQztBQUV2QixJQUFBLEFBQU1ULGdDQUFOO2FBQU1BLGdCQUNQVyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0NBRDlDZjtRQUVqQixJQUFJLENBQUNXLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFD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