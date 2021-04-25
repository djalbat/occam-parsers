"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));
var _optionalPart = _interopRequireDefault(require("../part/nonTerminal/optionalPart"));
var _oneOrMoreParts = _interopRequireDefault(require("../part/nonTerminal/oneOrMoreParts"));
var _zeroOrMoreParts = _interopRequireDefault(require("../part/nonTerminal/zeroOrMoreParts"));
var _array = require("../../utilities/array");
var _bnf = require("../../utilities/bnf");
var _ruleNames = require("../ruleNames");
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
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var PartNode = function(NonTerminalNode) {
    _inherits(PartNode, NonTerminalNode);
    function PartNode() {
        _classCallCheck(this, PartNode);
        return _possibleConstructorReturn(this, _getPrototypeOf(PartNode).apply(this, arguments));
    }
    _createClass(PartNode, [
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
                return _nonTerminal.default.fromRuleNameAndChildNodes(PartNode, ruleName, childNodes);
            }
        }
    ]);
    return PartNode;
}(_nonTerminal.default);
exports.default = PartNode;
function partFromNodes(nodes) {
    var part = null;
    var nodesLength = nodes.length;
    if (nodesLength === 1) {
        var node = nodes.pop(), lookAhead = false;
        part = node.generatePart(lookAhead);
    } else {
        var lastNodeQuantifierNode = isLastNodeQuantifierNode(nodes);
        if (lastNodeQuantifierNode) {
            var node = nodes.pop(), quantifierNode = node; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvbm9kZS9wYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbFwiO1xuaW1wb3J0IE9wdGlvbmFsUGFydFBhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0XCI7XG5pbXBvcnQgT25lT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzXCI7XG5pbXBvcnQgWmVyb09yTW9yZVBhcnRzUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC96ZXJvT3JNb3JlUGFydHNcIjtcblxuaW1wb3J0IHsgbGFzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzTm9kZVF1YW50aWZpZXJOb2RlLCBydWxlTmFtZUZyb21RdWFudGlmaWVyTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYm5mXCI7XG5pbXBvcnQgeyBPcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSwgT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lLCBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChsb29rQWhlYWQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLnNsaWNlKCksXG4gICAgICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUGFydE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5mdW5jdGlvbiBwYXJ0RnJvbU5vZGVzKG5vZGVzKSB7XG4gIGxldCBwYXJ0ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICBpZiAobm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCksXG4gICAgICAgICAgbG9va0FoZWFkID0gZmFsc2U7XG5cbiAgICBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobG9va0FoZWFkKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYXN0Tm9kZVF1YW50aWZpZXJOb2RlID0gaXNMYXN0Tm9kZVF1YW50aWZpZXJOb2RlKG5vZGVzKTtcblxuICAgIGlmIChsYXN0Tm9kZVF1YW50aWZpZXJOb2RlKSB7XG4gICAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCksXG4gICAgICAgICAgICBxdWFudGlmaWVyTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlKHF1YW50aWZpZXJOb2RlKSxcbiAgICAgICAgICAgIGNvbGxlY3Rpb25PZlBhcnRzUGFydCA9IGNvbGxlY3Rpb25PZlBhcnRzUGFydEZyb21QYXJ0QW5kUnVsZU5hbWUocGFydCwgcnVsZU5hbWUpO1xuXG4gICAgICBwYXJ0ID0gY29sbGVjdGlvbk9mUGFydHNQYXJ0OyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZXMuc2hpZnQoKTtcblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBpc0xhc3ROb2RlUXVhbnRpZmllck5vZGUobm9kZXMpIHtcbiAgY29uc3QgbGFzdE5vZGUgPSBsYXN0KG5vZGVzKSxcbiAgICAgICAgbGFzdE5vZGVRdWFudGlmaWVyTm9kZSA9IGlzTm9kZVF1YW50aWZpZXJOb2RlKGxhc3ROb2RlKTtcblxuICByZXR1cm4gbGFzdE5vZGVRdWFudGlmaWVyTm9kZTtcbn1cblxuZnVuY3Rpb24gY29sbGVjdGlvbk9mUGFydHNQYXJ0RnJvbVBhcnRBbmRSdWxlTmFtZShwYXJ0LCBydWxlTmFtZSkge1xuICBsZXQgY29sbGVjdGlvbk9mUGFydHNQYXJ0O1xuXG4gIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICBjYXNlIE9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lIDpcbiAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydChwYXJ0KTtcblxuICAgICAgY29sbGVjdGlvbk9mUGFydHNQYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydDsgLy8vXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIDpcbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICAgIGNvbGxlY3Rpb25PZlBhcnRzUGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydDsgLy8vXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSA6XG4gICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICAgIGNvbGxlY3Rpb25PZlBhcnRzUGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQ7ICAvLy9cbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGNvbGxlY3Rpb25PZlBhcnRzUGFydDtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdz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