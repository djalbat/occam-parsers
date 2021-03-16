"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));
var _choiceOfParts = _interopRequireDefault(require("../part/nonTerminal/choiceOfParts"));
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
var ChoiceOfPartsNode = function(NonTerminalNode) {
    _inherits(ChoiceOfPartsNode, _nonTerminal.default);
    function ChoiceOfPartsNode() {
        _classCallCheck(this, ChoiceOfPartsNode);
        return _possibleConstructorReturn(this, _getPrototypeOf(ChoiceOfPartsNode).apply(this, arguments));
    }
    _createClass(ChoiceOfPartsNode, [
        {
            key: "generatePart",
            value: function generatePart(lookAhead) {
                var childNodes = this.getChildNodes(), nodes = childNodes.slice(), part = _choiceOfParts.default.fromNodes(nodes);
                return part;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(ChoiceOfPartsNode, ruleName, childNodes);
            }
        }
    ]);
    return ChoiceOfPartsNode;
}(_nonTerminal.default);
exports.default = ChoiceOfPartsNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvbm9kZS9jaG9pY2VPZlBhcnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbFwiO1xuaW1wb3J0IENob2ljZU9mUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL2Nob2ljZU9mUGFydHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hvaWNlT2ZQYXJ0c05vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQobG9va0FoZWFkKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vZGVzID0gY2hpbGROb2Rlcy5zbGljZSgpLFxuICAgICAgICAgIHBhcnQgPSBDaG9pY2VPZlBhcnRzUGFydC5mcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoQ2hvaWNlT2ZQYXJ0c05vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsWUFBQTtJQUNBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLGlCQUFBLFlBQUEsZUFBQTtjQUFBLGlCQUFBLEVBSEEsWUFBQTthQUdBLGlCQUFBOzhCQUFBLGlCQUFBO2dFQUFBLGlCQUFBOztpQkFBQSxpQkFBQTs7QUFDQSxlQUFBLEdBQUEsWUFBQTs0QkFBQSxZQUFBLENBQUEsU0FBQTtvQkFDQSxVQUFBLFFBQUEsYUFBQSxJQUNBLEtBQUEsR0FBQSxVQUFBLENBQUEsS0FBQSxJQUNBLElBQUEsR0FOQSxjQUFBLFNBTUEsU0FBQSxDQUFBLEtBQUE7dUJBRUEsSUFBQTs7Ozs7QUFHQSxlQUFBLEdBQUEseUJBQUE7NEJBQUEseUJBQUEsQ0FBQSxRQUFBLEVBQUEsVUFBQTt1QkFaQSxZQUFBLFNBWUEseUJBQUEsQ0FBQSxpQkFBQSxFQUFBLFFBQUEsRUFBQSxVQUFBOzs7O1dBVEEsaUJBQUE7RUFIQSxZQUFBO2tCQUdBLGlCQUFBIn0=