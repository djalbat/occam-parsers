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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvbm9kZS9wYXJ0LmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsIk9wdGlvbmFsUGFydFBhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwibGFzdCIsImlzTm9kZVF1YW50aWZpZXJOb2RlIiwicnVsZU5hbWVGcm9tUXVhbnRpZmllck5vZGUiLCJPcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSIsIk9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsIlplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUiLCJQYXJ0Tm9kZSIsImdlbmVyYXRlUGFydCIsImxvb2tBaGVhZCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJzbGljZSIsInBhcnQiLCJwYXJ0RnJvbU5vZGVzIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInJ1bGVOYW1lIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub2RlIiwicG9wIiwibGFzdE5vZGVRdWFudGlmaWVyTm9kZSIsImlzTGFzdE5vZGVRdWFudGlmaWVyTm9kZSIsInF1YW50aWZpZXJOb2RlIiwiY29sbGVjdGlvbk9mUGFydHNQYXJ0IiwiY29sbGVjdGlvbk9mUGFydHNQYXJ0RnJvbVBhcnRBbmRSdWxlTmFtZSIsInNoaWZ0IiwibGFzdE5vZGUiLCJvcHRpb25hbFBhcnRQYXJ0Iiwib25lT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFZ0IsR0FBK0IsQ0FBL0IsWUFBK0I7QUFDOUIsR0FBa0MsQ0FBbEMsYUFBa0M7QUFDaEMsR0FBb0MsQ0FBcEMsZUFBb0M7QUFDbkMsR0FBcUMsQ0FBckMsZ0JBQXFDO0FBRWhELEdBQXVCLENBQXZCLE1BQXVCO0FBQ3FCLEdBQXFCLENBQXJCLElBQXFCO0FBQ2dCLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7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