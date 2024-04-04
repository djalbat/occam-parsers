"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PartBNFNode;
    }
});
var _necessary = require("necessary");
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
var _optionalPart = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal/optionalPart"));
var _oneOrMoreParts = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal/oneOrMoreParts"));
var _zeroOrMoreParts = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal/zeroOrMoreParts"));
var _bnf = require("../../utilities/bnf");
var _ruleNames = require("../../ruleNames");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var last = _necessary.arrayUtilities.last;
var PartBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(PartBNFNode, NonTerminalNode);
    var _super = _create_super(PartBNFNode);
    function PartBNFNode() {
        _class_call_check(this, PartBNFNode);
        return _super.apply(this, arguments);
    }
    _create_class(PartBNFNode, [
        {
            key: "generatePart",
            value: function generatePart(lookAhead) {
                var childNodes = this.getChildNodes(), nodes = childNodes.slice(), part = partFromNodes(nodes);
                return part;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _nonTerminal.default.fromRuleNameChildNodesAndOpacity(PartBNFNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return PartBNFNode;
}(_nonTerminal.default);
function partFromNodes(nodes) {
    var part = null;
    var nodesLength = nodes.length;
    if (nodesLength === 1) {
        var node = nodes.pop(), lookAhead = false;
        part = node.generatePart(lookAhead);
    } else {
        var lastNodeQuantifierNode = isLastNodeQuantifierNode(nodes);
        if (lastNodeQuantifierNode) {
            var node1 = nodes.pop(), quantifierNode = node1; ///
            part = partFromNodes(nodes);
            var ruleName = (0, _bnf.ruleNameFromQuantifierNode)(quantifierNode), collectionOfPartsPart = collectionOfPartsPartFromPartAndRuleName(part, ruleName);
            part = collectionOfPartsPart; ///
        } else {
            nodes.shift();
            part = partFromNodes(nodes);
        }
    }
    return part;
}
function isLastNodeQuantifierNode(nodes) {
    var lastNode = last(nodes), lastNodeQuantifierNode = (0, _bnf.isNodeQuantifierNode)(lastNode);
    return lastNodeQuantifierNode;
}
function collectionOfPartsPartFromPartAndRuleName(part, ruleName) {
    var collectionOfPartsPart;
    switch(ruleName){
        case _ruleNames.optionalQuantifierRuleName:
            var optionalPartPart = _optionalPart.default.fromPart(part);
            collectionOfPartsPart = optionalPartPart; ///
            break;
        case _ruleNames.oneOrMoreQuantifierRuleName:
            var oneOrMorePartsPart = _oneOrMoreParts.default.fromPart(part);
            collectionOfPartsPart = oneOrMorePartsPart; ///
            break;
        case _ruleNames.zeroOrMoreQuantifierRuleName:
            var zeroOrMorePartsPart = _zeroOrMoreParts.default.fromPart(part);
            collectionOfPartsPart = zeroOrMorePartsPart; ///
            break;
    }
    return collectionOfPartsPart;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9wYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuaW1wb3J0IE9wdGlvbmFsUGFydFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0XCI7XG5pbXBvcnQgT25lT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzXCI7XG5pbXBvcnQgWmVyb09yTW9yZVBhcnRzUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbC96ZXJvT3JNb3JlUGFydHNcIjtcblxuaW1wb3J0IHsgaXNOb2RlUXVhbnRpZmllck5vZGUsIHJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ibmZcIjtcbmltcG9ydCB7IG9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lLCBvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUsIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRCTkZOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMuc2xpY2UoKSxcbiAgICAgICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2Rlcyk7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KFBhcnRCTkZOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cblxuZnVuY3Rpb24gcGFydEZyb21Ob2Rlcyhub2Rlcykge1xuICBsZXQgcGFydCA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgaWYgKG5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5vZGVzLnBvcCgpLFxuICAgICAgICAgIGxvb2tBaGVhZCA9IGZhbHNlO1xuXG4gICAgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbGFzdE5vZGVRdWFudGlmaWVyTm9kZSA9IGlzTGFzdE5vZGVRdWFudGlmaWVyTm9kZShub2Rlcyk7XG5cbiAgICBpZiAobGFzdE5vZGVRdWFudGlmaWVyTm9kZSkge1xuICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzLnBvcCgpLFxuICAgICAgICAgICAgcXVhbnRpZmllck5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIHBhcnQgPSBwYXJ0RnJvbU5vZGVzKG5vZGVzKTtcblxuICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21RdWFudGlmaWVyTm9kZShxdWFudGlmaWVyTm9kZSksXG4gICAgICAgICAgICBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQgPSBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnRGcm9tUGFydEFuZFJ1bGVOYW1lKHBhcnQsIHJ1bGVOYW1lKTtcblxuICAgICAgcGFydCA9IGNvbGxlY3Rpb25PZlBhcnRzUGFydDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGVzLnNoaWZ0KCk7XG5cbiAgICAgIHBhcnQgPSBwYXJ0RnJvbU5vZGVzKG5vZGVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydDtcbn1cblxuZnVuY3Rpb24gaXNMYXN0Tm9kZVF1YW50aWZpZXJOb2RlKG5vZGVzKSB7XG4gIGNvbnN0IGxhc3ROb2RlID0gbGFzdChub2RlcyksXG4gICAgICAgIGxhc3ROb2RlUXVhbnRpZmllck5vZGUgPSBpc05vZGVRdWFudGlmaWVyTm9kZShsYXN0Tm9kZSk7XG5cbiAgcmV0dXJuIGxhc3ROb2RlUXVhbnRpZmllck5vZGU7XG59XG5cbmZ1bmN0aW9uIGNvbGxlY3Rpb25PZlBhcnRzUGFydEZyb21QYXJ0QW5kUnVsZU5hbWUocGFydCwgcnVsZU5hbWUpIHtcbiAgbGV0IGNvbGxlY3Rpb25PZlBhcnRzUGFydDtcblxuICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgY2FzZSBvcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSA6XG4gICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gT3B0aW9uYWxQYXJ0UGFydC5mcm9tUGFydChwYXJ0KTtcblxuICAgICAgY29sbGVjdGlvbk9mUGFydHNQYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydDsgLy8vXG4gICAgICBicmVhaztcblxuICAgIGNhc2Ugb25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIDpcbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IE9uZU9yTW9yZVBhcnRzUGFydC5mcm9tUGFydChwYXJ0KTtcblxuICAgICAgY29sbGVjdGlvbk9mUGFydHNQYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0OyAvLy9cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIDpcbiAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBaZXJvT3JNb3JlUGFydHNQYXJ0LmZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0OyAgLy8vXG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQ7XG59XG4iXSwibmFtZXMiOlsiUGFydEJORk5vZGUiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJnZW5lcmF0ZVBhcnQiLCJsb29rQWhlYWQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGVzIiwic2xpY2UiLCJwYXJ0IiwicGFydEZyb21Ob2RlcyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJvcGFjaXR5IiwiTm9uVGVybWluYWxOb2RlIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub2RlIiwicG9wIiwibGFzdE5vZGVRdWFudGlmaWVyTm9kZSIsImlzTGFzdE5vZGVRdWFudGlmaWVyTm9kZSIsInF1YW50aWZpZXJOb2RlIiwicnVsZU5hbWVGcm9tUXVhbnRpZmllck5vZGUiLCJjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQiLCJjb2xsZWN0aW9uT2ZQYXJ0c1BhcnRGcm9tUGFydEFuZFJ1bGVOYW1lIiwic2hpZnQiLCJsYXN0Tm9kZSIsImlzTm9kZVF1YW50aWZpZXJOb2RlIiwib3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUiLCJvcHRpb25hbFBhcnRQYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydCIsImZyb21QYXJ0Iiwib25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIiwib25lT3JNb3JlUGFydHNQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJaZXJvT3JNb3JlUGFydHNQYXJ0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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