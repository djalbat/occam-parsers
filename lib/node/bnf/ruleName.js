"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleNameBNFNode;
    }
});
var _ruleName = /*#__PURE__*/ _interopRequireDefault(require("../../part/nonTerminal/ruleName"));
var _nonTerminal = /*#__PURE__*/ _interopRequireDefault(require("../../node/nonTerminal"));
var _array = require("../../utilities/array");
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
var RuleNameBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(RuleNameBNFNode, NonTerminalNode);
    var _super = _createSuper(RuleNameBNFNode);
    function RuleNameBNFNode() {
        _classCallCheck(this, RuleNameBNFNode);
        return _super.apply(this, arguments);
    }
    _createClass(RuleNameBNFNode, [
        {
            key: "generatePart",
            value: function generatePart(lookAhead) {
                var ruleName = this.getRuleName(), ruleNamePart = new _ruleName.default(ruleName, lookAhead);
                return ruleNamePart;
            }
        },
        {
            key: "getRuleName",
            value: function getRuleName() {
                var childNodes = this.getChildNodes(), firstChildNode = (0, _array.first)(childNodes), terminalNode = firstChildNode, terminalNodeContent = terminalNode.getContent(), ruleName = terminalNodeContent; ///
                return ruleName;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(RuleNameBNFNode, ruleName, childNodes);
            }
        }
    ]);
    return RuleNameBNFNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9ydWxlTmFtZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZU5hbWVCTkZOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocnVsZU5hbWUsIGxvb2tBaGVhZCk7XG5cbiAgICByZXR1cm4gcnVsZU5hbWVQYXJ0O1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuICAgIFxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhSdWxlTmFtZUJORk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSdWxlTmFtZUJORk5vZGUiLCJnZW5lcmF0ZVBhcnQiLCJsb29rQWhlYWQiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWVQYXJ0IiwiUnVsZU5hbWVQYXJ0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7Ozs2REFMSTtnRUFDRztxQkFFTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQUEsQUFBTUEsZ0NBQU47Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxTQUFTLEVBQUU7Z0JBQ3RCLElBQU1DLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCQyxlQUFlLElBQUlDLGlCQUFZLENBQUNILFVBQVVEO2dCQUVoRCxPQUFPRztZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWM7Z0JBQ1osSUFBTUcsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGlCQUFpQkMsSUFBQUEsWUFBSyxFQUFDSCxhQUN2QkksZUFBZUYsZ0JBQ2ZHLHNCQUFzQkQsYUFBYUUsVUFBVSxJQUM3Q1YsV0FBV1MscUJBQXFCLEdBQUc7Z0JBRXpDLE9BQU9UO1lBQ1Q7Ozs7WUFFT1csS0FBQUE7bUJBQVAsU0FBT0EsMEJBQTBCWCxRQUFRLEVBQUVJLFVBQVUsRUFBRTtnQkFBRSxPQUFPUSxvQkFBZSxDQUFDRCx5QkFBeUIsQ0FsQnRGZCxpQkFrQndHRyxVQUFVSTtZQUFhOzs7V0FsQi9IUDtFQUF3QmUsb0JBQWUifQ==