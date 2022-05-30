"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminal = _interopRequireDefault(require("../../node/nonTerminal"));
var _optionalPart = _interopRequireDefault(require("../../part/nonTerminal/optionalPart"));
var _oneOrMoreParts = _interopRequireDefault(require("../../part/nonTerminal/oneOrMoreParts"));
var _zeroOrMoreParts = _interopRequireDefault(require("../../part/nonTerminal/zeroOrMoreParts"));
var _array = require("../../utilities/array");
var _bnf = require("../../utilities/bnf");
var _ruleNames = require("../../ruleNames");
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
var PartBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(PartBNFNode, NonTerminalNode);
    var _super = _createSuper(PartBNFNode);
    function PartBNFNode() {
        _classCallCheck(this, PartBNFNode);
        return _super.apply(this, arguments);
    }
    _createClass(PartBNFNode, [
        {
            key: "generatePart",
            value: function generatePart(lookAhead) {
                var childNodes = this.getChildNodes(), nodes = childNodes.slice(), part = partFromNodes(nodes);
                return part;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(PartBNFNode, ruleName, childNodes);
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
            var ruleName = (0, _bnf).ruleNameFromQuantifierNode(quantifierNode), collectionOfPartsPart = collectionOfPartsPartFromPartAndRuleName(part, ruleName);
            part = collectionOfPartsPart; ///
        } else {
            nodes.shift();
            part = partFromNodes(nodes);
        }
    }
    return part;
}
function isLastNodeQuantifierNode(nodes) {
    var lastNode = (0, _array).last(nodes), lastNodeQuantifierNode = (0, _bnf).isNodeQuantifierNode(lastNode);
    return lastNodeQuantifierNode;
}
function collectionOfPartsPartFromPartAndRuleName(part, ruleName) {
    var collectionOfPartsPart;
    switch(ruleName){
        case _ruleNames.OptionalQuantifierRuleName:
            var optionalPartPart = new _optionalPart.default(part);
            collectionOfPartsPart = optionalPartPart; ///
            break;
        case _ruleNames.OneOrMoreQuantifierRuleName:
            var oneOrMorePartsPart = new _oneOrMoreParts.default(part);
            collectionOfPartsPart = oneOrMorePartsPart; ///
            break;
        case _ruleNames.ZeroOrMoreQuantifierRuleName:
            var zeroOrMorePartsPart = new _zeroOrMoreParts.default(part);
            collectionOfPartsPart = zeroOrMorePartsPart; ///
            break;
    }
    return collectionOfPartsPart;
}
exports.default = PartBNFNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9wYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5pbXBvcnQgT3B0aW9uYWxQYXJ0UGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbC9vcHRpb25hbFBhcnRcIjtcbmltcG9ydCBPbmVPck1vcmVQYXJ0c1BhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWwvb25lT3JNb3JlUGFydHNcIjtcbmltcG9ydCBaZXJvT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0c1wiO1xuXG5pbXBvcnQgeyBsYXN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNOb2RlUXVhbnRpZmllck5vZGUsIHJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ibmZcIjtcbmltcG9ydCB7IE9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lLCBPbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUsIFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRCTkZOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMuc2xpY2UoKSxcbiAgICAgICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2Rlcyk7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhQYXJ0Qk5GTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbmZ1bmN0aW9uIHBhcnRGcm9tTm9kZXMobm9kZXMpIHtcbiAgbGV0IHBhcnQgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gIGlmIChub2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IG5vZGUgPSBub2Rlcy5wb3AoKSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBmYWxzZTtcblxuICAgIHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChsb29rQWhlYWQpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGxhc3ROb2RlUXVhbnRpZmllck5vZGUgPSBpc0xhc3ROb2RlUXVhbnRpZmllck5vZGUobm9kZXMpO1xuXG4gICAgaWYgKGxhc3ROb2RlUXVhbnRpZmllck5vZGUpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBub2Rlcy5wb3AoKSxcbiAgICAgICAgICAgIHF1YW50aWZpZXJOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2Rlcyk7XG5cbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tUXVhbnRpZmllck5vZGUocXVhbnRpZmllck5vZGUpLFxuICAgICAgICAgICAgY29sbGVjdGlvbk9mUGFydHNQYXJ0ID0gY29sbGVjdGlvbk9mUGFydHNQYXJ0RnJvbVBhcnRBbmRSdWxlTmFtZShwYXJ0LCBydWxlTmFtZSk7XG5cbiAgICAgIHBhcnQgPSBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQ7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBub2Rlcy5zaGlmdCgpO1xuXG4gICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIGlzTGFzdE5vZGVRdWFudGlmaWVyTm9kZShub2Rlcykge1xuICBjb25zdCBsYXN0Tm9kZSA9IGxhc3Qobm9kZXMpLFxuICAgICAgICBsYXN0Tm9kZVF1YW50aWZpZXJOb2RlID0gaXNOb2RlUXVhbnRpZmllck5vZGUobGFzdE5vZGUpO1xuXG4gIHJldHVybiBsYXN0Tm9kZVF1YW50aWZpZXJOb2RlO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnRGcm9tUGFydEFuZFJ1bGVOYW1lKHBhcnQsIHJ1bGVOYW1lKSB7XG4gIGxldCBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQ7XG5cbiAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgIGNhc2UgT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUgOlxuICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KHBhcnQpO1xuXG4gICAgICBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQgPSBvcHRpb25hbFBhcnRQYXJ0OyAvLy9cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBPbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgOlxuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICAgICAgY29sbGVjdGlvbk9mUGFydHNQYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0OyAvLy9cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIDpcbiAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICAgICAgY29sbGVjdGlvbk9mUGFydHNQYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydDsgIC8vL1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gY29sbGVjdGlvbk9mUGFydHNQYXJ0O1xufVxuIl0sIm5hbWVzIjpbIlBhcnRCTkZOb2RlIiwiZ2VuZXJhdGVQYXJ0IiwibG9va0FoZWFkIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub2RlcyIsInNsaWNlIiwicGFydCIsInBhcnRGcm9tTm9kZXMiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwicnVsZU5hbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsIm5vZGUiLCJwb3AiLCJsYXN0Tm9kZVF1YW50aWZpZXJOb2RlIiwiaXNMYXN0Tm9kZVF1YW50aWZpZXJOb2RlIiwicXVhbnRpZmllck5vZGUiLCJydWxlTmFtZUZyb21RdWFudGlmaWVyTm9kZSIsImNvbGxlY3Rpb25PZlBhcnRzUGFydCIsImNvbGxlY3Rpb25PZlBhcnRzUGFydEZyb21QYXJ0QW5kUnVsZU5hbWUiLCJzaGlmdCIsImxhc3ROb2RlIiwibGFzdCIsImlzTm9kZVF1YW50aWZpZXJOb2RlIiwiT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUiLCJvcHRpb25hbFBhcnRQYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydCIsIk9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsIm9uZU9yTW9yZVBhcnRzUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVlLElBQUEsWUFBd0Isa0NBQXhCLHdCQUF3QixFQUFBO0FBQ3ZCLElBQUEsYUFBcUMsa0NBQXJDLHFDQUFxQyxFQUFBO0FBQ25DLElBQUEsZUFBdUMsa0NBQXZDLHVDQUF1QyxFQUFBO0FBQ3RDLElBQUEsZ0JBQXdDLGtDQUF4Qyx3Q0FBd0MsRUFBQTtBQUVuRCxJQUFBLE1BQXVCLFdBQXZCLHVCQUF1QixDQUFBO0FBQ3FCLElBQUEsSUFBcUIsV0FBckIscUJBQXFCLENBQUE7QUFDZ0IsSUFBQSxVQUFpQixXQUFqQixp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