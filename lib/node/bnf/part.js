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
exports.default = PartBNFNode;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9wYXJ0LmpzIiwiLi4vc3JjL2NvbnN0YW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuaW1wb3J0IE9wdGlvbmFsUGFydFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0XCI7XG5pbXBvcnQgT25lT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzXCI7XG5pbXBvcnQgWmVyb09yTW9yZVBhcnRzUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbC96ZXJvT3JNb3JlUGFydHNcIjtcblxuaW1wb3J0IHsgbGFzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzTm9kZVF1YW50aWZpZXJOb2RlLCBydWxlTmFtZUZyb21RdWFudGlmaWVyTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYm5mXCI7XG5pbXBvcnQgeyBPcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSwgT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lLCBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0Qk5GTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChsb29rQWhlYWQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLnNsaWNlKCksXG4gICAgICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUGFydEJORk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5mdW5jdGlvbiBwYXJ0RnJvbU5vZGVzKG5vZGVzKSB7XG4gIGxldCBwYXJ0ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICBpZiAobm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCksXG4gICAgICAgICAgbG9va0FoZWFkID0gZmFsc2U7XG5cbiAgICBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobG9va0FoZWFkKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYXN0Tm9kZVF1YW50aWZpZXJOb2RlID0gaXNMYXN0Tm9kZVF1YW50aWZpZXJOb2RlKG5vZGVzKTtcblxuICAgIGlmIChsYXN0Tm9kZVF1YW50aWZpZXJOb2RlKSB7XG4gICAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCksXG4gICAgICAgICAgICBxdWFudGlmaWVyTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlKHF1YW50aWZpZXJOb2RlKSxcbiAgICAgICAgICAgIGNvbGxlY3Rpb25PZlBhcnRzUGFydCA9IGNvbGxlY3Rpb25PZlBhcnRzUGFydEZyb21QYXJ0QW5kUnVsZU5hbWUocGFydCwgcnVsZU5hbWUpO1xuXG4gICAgICBwYXJ0ID0gY29sbGVjdGlvbk9mUGFydHNQYXJ0OyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZXMuc2hpZnQoKTtcblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBpc0xhc3ROb2RlUXVhbnRpZmllck5vZGUobm9kZXMpIHtcbiAgY29uc3QgbGFzdE5vZGUgPSBsYXN0KG5vZGVzKSxcbiAgICAgICAgbGFzdE5vZGVRdWFudGlmaWVyTm9kZSA9IGlzTm9kZVF1YW50aWZpZXJOb2RlKGxhc3ROb2RlKTtcblxuICByZXR1cm4gbGFzdE5vZGVRdWFudGlmaWVyTm9kZTtcbn1cblxuZnVuY3Rpb24gY29sbGVjdGlvbk9mUGFydHNQYXJ0RnJvbVBhcnRBbmRSdWxlTmFtZShwYXJ0LCBydWxlTmFtZSkge1xuICBsZXQgY29sbGVjdGlvbk9mUGFydHNQYXJ0O1xuXG4gIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICBjYXNlIE9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lIDpcbiAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydChwYXJ0KTtcblxuICAgICAgY29sbGVjdGlvbk9mUGFydHNQYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydDsgLy8vXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIDpcbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICAgIGNvbGxlY3Rpb25PZlBhcnRzUGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydDsgLy8vXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSA6XG4gICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICAgIGNvbGxlY3Rpb25PZlBhcnRzUGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQ7ICAvLy9cbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGNvbGxlY3Rpb25PZlBhcnRzUGFydDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbiJdLCJuYW1lcyI6WyJQYXJ0Qk5GTm9kZSIsImdlbmVyYXRlUGFydCIsImxvb2tBaGVhZCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJzbGljZSIsInBhcnQiLCJwYXJ0RnJvbU5vZGVzIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiTm9uVGVybWluYWxOb2RlIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub2RlIiwicG9wIiwibGFzdE5vZGVRdWFudGlmaWVyTm9kZSIsImlzTGFzdE5vZGVRdWFudGlmaWVyTm9kZSIsInF1YW50aWZpZXJOb2RlIiwicnVsZU5hbWVGcm9tUXVhbnRpZmllck5vZGUiLCJjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQiLCJjb2xsZWN0aW9uT2ZQYXJ0c1BhcnRGcm9tUGFydEFuZFJ1bGVOYW1lIiwic2hpZnQiLCJsYXN0Tm9kZSIsImxhc3QiLCJpc05vZGVRdWFudGlmaWVyTm9kZSIsIk9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lIiwib3B0aW9uYWxQYXJ0UGFydCIsIk9wdGlvbmFsUGFydFBhcnQiLCJPbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIiwiemVyb09yTW9yZVBhcnRzUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFNEIsSUFBQSxZQUF3QixrQ0FBeEIsd0JBQXdCLEVBQUE7QUFDdkIsSUFBQSxhQUFxQyxrQ0FBckMscUNBQXFDLEVBQUE7QUFDbkMsSUFBQSxlQUF1QyxrQ0FBdkMsdUNBQXVDLEVBQUE7QUFDdEMsSUFBQSxnQkFBd0Msa0NBQXhDLHdDQUF3QyxFQUFBO0FBRW5E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