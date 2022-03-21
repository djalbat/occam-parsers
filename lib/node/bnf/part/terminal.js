"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminal = _interopRequireDefault(require("../../../node/nonTerminal"));
var _array = require("../../../utilities/array");
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
var TerminalPartBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TerminalPartBNFNode, NonTerminalNode);
    var _super = _createSuper(TerminalPartBNFNode);
    function TerminalPartBNFNode() {
        _classCallCheck(this, TerminalPartBNFNode);
        return _super.apply(this, arguments);
    }
    _createClass(TerminalPartBNFNode, [
        {
            key: "generatePart",
            value: function generatePart(lookAhead) {
                var childNodes = this.getChildNodes(), firstChildNode = (0, _array).first(childNodes), node = firstChildNode, part = node.generatePart(lookAhead);
                return part;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(TerminalPartBNFNode, ruleName, childNodes);
            }
        }
    ]);
    return TerminalPartBNFNode;
}(_nonTerminal.default);
exports.default = TerminalPartBNFNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2JuZi9wYXJ0L3Rlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbFBhcnRCTkZOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIG5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChsb29rQWhlYWQpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoVGVybWluYWxQYXJ0Qk5GTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG4iXSwibmFtZXMiOlsiVGVybWluYWxQYXJ0Qk5GTm9kZSIsImdlbmVyYXRlUGFydCIsImxvb2tBaGVhZCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdCIsIm5vZGUiLCJwYXJ0IiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRTRCLElBQUEsWUFBMkIsa0NBQTNCLDJCQUEyQixFQUFBO0FBRWpDLElBQUEsTUFBMEIsV0FBMUIsMEJBQTBCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs4REFKaEQ7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBTWUsSUFBQSxBQUFNQSxtQkFBbUIsaUJDTnJDLEFETVk7bURBTmY7O2FBTXFCQSxtQkFBbUI7a0RBTnhDOzs7OztZQU9FQyxHQUFZLEVBQVpBLGNBQVk7WUVQZCxPRk9FQSxTQUFBQSxZQUFZLENBQUNDLFNBQVMsRUFBRTtnQkFDdEIsSUFBTUMsVUFBVSxHQUFHLElBQUksQ0FBQ0MsYUFBYSxFQUFFLEVBQ2pDQyxjQUFjLEdBQUdDLENBQUFBLEdBQUFBLE1BQUssQUFBWSxDQUFBLE9BQVhILFVBQVUsQ0FBQyxFQUNsQ0ksSUFBSSxHQUFHRixjQUFjLEVBQ3JCRyxJQUFJLEdBQUdELElBQUksQ0FBQ04sWUFBWSxDQUFDQyxTQUFTLENBQUMsQUFBQztnQkFFMUMsT0FBT00sSUFBSSxDQUFDO2FBQ2I7Ozs7WUFFTUMsR0FBeUIsRUFBekJBLDJCQUF5QjtZRWhCbEMsT0ZnQkUsU0FBT0EseUJBQXlCLENBQUNDLFFBQVEsRUFBRVAsVUFBVSxFQUFFO2dCQUFFLE9BQU9RLFlBQWUsU0FBQ0YseUJBQXlCLENBQUNULG1CQUFtQixFQUFFVSxRQUFRLEVBQUVQLFVBQVUsQ0FBQyxDQUFDO2FBQUU7O01BaEJ6Sjs7Q0FpQkMsQ0FYZ0RRLFlBQWUsU0FXL0Q7a0JBWG9CWCxtQkFBbUIsQUFOeEMifQ==