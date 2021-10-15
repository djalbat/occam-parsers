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
var PartNode = /*#__PURE__*/ function(NonTerminalNode) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvbm9kZS9wYXJ0LmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsIk9wdGlvbmFsUGFydFBhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwibGFzdCIsImlzTm9kZVF1YW50aWZpZXJOb2RlIiwicnVsZU5hbWVGcm9tUXVhbnRpZmllck5vZGUiLCJPcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSIsIk9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsIlplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUiLCJQYXJ0Tm9kZSIsImdlbmVyYXRlUGFydCIsImxvb2tBaGVhZCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJzbGljZSIsInBhcnQiLCJwYXJ0RnJvbU5vZGVzIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInJ1bGVOYW1lIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub2RlIiwicG9wIiwibGFzdE5vZGVRdWFudGlmaWVyTm9kZSIsImlzTGFzdE5vZGVRdWFudGlmaWVyTm9kZSIsInF1YW50aWZpZXJOb2RlIiwiY29sbGVjdGlvbk9mUGFydHNQYXJ0IiwiY29sbGVjdGlvbk9mUGFydHNQYXJ0RnJvbVBhcnRBbmRSdWxlTmFtZSIsInNoaWZ0IiwibGFzdE5vZGUiLCJvcHRpb25hbFBhcnRQYXJ0Iiwib25lT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFZ0IsR0FBK0IsQ0FBL0IsWUFBK0I7QUFDOUIsR0FBa0MsQ0FBbEMsYUFBa0M7QUFDaEMsR0FBb0MsQ0FBcEMsZUFBb0M7QUFDbkMsR0FBcUMsQ0FBckMsZ0JBQXFDO0FBRWhELEdBQXVCLENBQXZCLE1BQXVCO0FBQ3FCLEdBQXFCLENBQXJCLElBQXFCO0FBQ2dCLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7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YztZQXVFOUcsR0FBSyxDQUFDLG1CQUFtQixHQUFHLEdBQUcsQ0EzRUwsZ0JBQXFDLFNBMkVYLElBQUk7WUFFeEQscUJBQXFCLEdBQUcsbUJBQW1CLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1lBQ2pELEtBQUs7O0lBR1QsTUFBTSxDQUFDLHFCQUFxQjtBQUM5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsXCI7XG5pbXBvcnQgT3B0aW9uYWxQYXJ0UGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9vcHRpb25hbFBhcnRcIjtcbmltcG9ydCBPbmVPck1vcmVQYXJ0c1BhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvb25lT3JNb3JlUGFydHNcIjtcbmltcG9ydCBaZXJvT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0c1wiO1xuXG5pbXBvcnQgeyBsYXN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNOb2RlUXVhbnRpZmllck5vZGUsIHJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ibmZcIjtcbmltcG9ydCB7IE9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lLCBPbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUsIFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMuc2xpY2UoKSxcbiAgICAgICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2Rlcyk7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhQYXJ0Tm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbmZ1bmN0aW9uIHBhcnRGcm9tTm9kZXMobm9kZXMpIHtcbiAgbGV0IHBhcnQgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gIGlmIChub2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IG5vZGUgPSBub2Rlcy5wb3AoKSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBmYWxzZTtcblxuICAgIHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChsb29rQWhlYWQpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGxhc3ROb2RlUXVhbnRpZmllck5vZGUgPSBpc0xhc3ROb2RlUXVhbnRpZmllck5vZGUobm9kZXMpO1xuXG4gICAgaWYgKGxhc3ROb2RlUXVhbnRpZmllck5vZGUpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBub2Rlcy5wb3AoKSxcbiAgICAgICAgICAgIHF1YW50aWZpZXJOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2Rlcyk7XG5cbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tUXVhbnRpZmllck5vZGUocXVhbnRpZmllck5vZGUpLFxuICAgICAgICAgICAgY29sbGVjdGlvbk9mUGFydHNQYXJ0ID0gY29sbGVjdGlvbk9mUGFydHNQYXJ0RnJvbVBhcnRBbmRSdWxlTmFtZShwYXJ0LCBydWxlTmFtZSk7XG5cbiAgICAgIHBhcnQgPSBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQ7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBub2Rlcy5zaGlmdCgpO1xuXG4gICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIGlzTGFzdE5vZGVRdWFudGlmaWVyTm9kZShub2Rlcykge1xuICBjb25zdCBsYXN0Tm9kZSA9IGxhc3Qobm9kZXMpLFxuICAgICAgICBsYXN0Tm9kZVF1YW50aWZpZXJOb2RlID0gaXNOb2RlUXVhbnRpZmllck5vZGUobGFzdE5vZGUpO1xuXG4gIHJldHVybiBsYXN0Tm9kZVF1YW50aWZpZXJOb2RlO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnRGcm9tUGFydEFuZFJ1bGVOYW1lKHBhcnQsIHJ1bGVOYW1lKSB7XG4gIGxldCBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQ7XG5cbiAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgIGNhc2UgT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUgOlxuICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KHBhcnQpO1xuXG4gICAgICBjb2xsZWN0aW9uT2ZQYXJ0c1BhcnQgPSBvcHRpb25hbFBhcnRQYXJ0OyAvLy9cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBPbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgOlxuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICAgICAgY29sbGVjdGlvbk9mUGFydHNQYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0OyAvLy9cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIDpcbiAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICAgICAgY29sbGVjdGlvbk9mUGFydHNQYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydDsgIC8vL1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gY29sbGVjdGlvbk9mUGFydHNQYXJ0O1xufVxuIl19