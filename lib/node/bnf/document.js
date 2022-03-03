"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminal = _interopRequireDefault(require("../../node/nonTerminal"));
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
var DocumentBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(DocumentBNFNode, NonTerminalNode);
    var _super = _createSuper(DocumentBNFNode);
    function DocumentBNFNode() {
        _classCallCheck(this, DocumentBNFNode);
        return _super.apply(this, arguments);
    }
    _createClass(DocumentBNFNode, [
        {
            key: "generateRules",
            value: function generateRules(Rule) {
                var childNodes = this.getChildNodes(), ruleNodes1 = childNodes.reduce(function(ruleNodes, childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var nonTerminalNode = childNode, ruleName = childNode.getRuleName(), ruleNameRuleRuleName = ruleName === _ruleNames.RuleRuleName, nonTerminalNodeRuleNode = ruleNameRuleRuleName; ///
                        if (nonTerminalNodeRuleNode) {
                            var ruleNode = nonTerminalNode; ///
                            ruleNodes.push(ruleNode);
                        }
                    }
                    return ruleNodes;
                }, []), rules = ruleNodes1.map(function(ruleNode) {
                    var rule = ruleNode.generateRule(Rule);
                    return rule;
                });
                return rules;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(DocumentBNFNode, ruleName, childNodes);
            }
        }
    ]);
    return DocumentBNFNode;
}(_nonTerminal.default);
exports.default = DocumentBNFNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IFJ1bGVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnRCTkZOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVSdWxlcyhSdWxlKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHJ1bGVOb2RlcyA9IGNoaWxkTm9kZXMucmVkdWNlKChydWxlTm9kZXMsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lID0gY2hpbGROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lUnVsZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBSdWxlUnVsZU5hbWUpLFxuICAgICAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVSdWxlTm9kZSA9IHJ1bGVOYW1lUnVsZVJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgICAgICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZVJ1bGVOb2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcnVsZU5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuXG4gICAgICAgICAgICAgICAgcnVsZU5vZGVzLnB1c2gocnVsZU5vZGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBydWxlTm9kZXM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIHJ1bGVzID0gcnVsZU5vZGVzLm1hcCgocnVsZU5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSBydWxlTm9kZS5nZW5lcmF0ZVJ1bGUoUnVsZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhEb2N1bWVudEJORk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuIl0sIm5hbWVzIjpbIkRvY3VtZW50Qk5GTm9kZSIsImdlbmVyYXRlUnVsZXMiLCJSdWxlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJydWxlTm9kZXMiLCJyZWR1Y2UiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZVJ1bGVSdWxlTmFtZSIsIlJ1bGVSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZVJ1bGVOb2RlIiwicnVsZU5vZGUiLCJwdXNoIiwicnVsZXMiLCJtYXAiLCJydWxlIiwiZ2VuZXJhdGVSdWxlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFZSxHQUF3QixDQUF4QixZQUF3QjtBQUV0QixHQUFpQixDQUFqQixVQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV6QkEsZUFBZSxpQkFBckIsUUFBUTs7O2FBQUZBLGVBQWU7Ozs7OztZQUNsQ0MsR0FBYSxFQUFiQSxDQUFhO21CQUFiQSxRQUFRLENBQVJBLGFBQWEsQ0FBQ0MsSUFBSSxFQUFFLENBQUM7Z0JBQ25CLEdBQUssQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsVUFBUyxHQUFHRixVQUFVLENBQUNHLE1BQU0sQ0FBQyxRQUFRLENBQVBELFNBQVMsRUFBRUUsU0FBUyxFQUFLLENBQUM7b0JBQ3ZELEdBQUssQ0FBQ0Msd0JBQXdCLEdBQUdELFNBQVMsQ0FBQ0UsaUJBQWlCO29CQUU1RCxFQUFFLEVBQUVELHdCQUF3QixFQUFFLENBQUM7d0JBQzdCLEdBQUssQ0FBQ0UsZUFBZSxHQUFHSCxTQUFTLEVBQzNCSSxRQUFRLEdBQUdKLFNBQVMsQ0FBQ0ssV0FBVyxJQUNoQ0Msb0JBQW9CLEdBQUlGLFFBQVEsS0FBS0csVUFBWSxlQUNqREMsdUJBQXVCLEdBQUdGLG9CQUFvQixDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt3QkFFMUQsRUFBRSxFQUFFRSx1QkFBdUIsRUFBRSxDQUFDOzRCQUM1QixHQUFLLENBQUNDLFFBQVEsR0FBR04sZUFBZSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs0QkFFckNMLFNBQVMsQ0FBQ1ksSUFBSSxDQUFDRCxRQUFRO3dCQUN6QixDQUFDO29CQUNILENBQUM7b0JBRUQsTUFBTSxDQUFDWCxTQUFTO2dCQUNsQixDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQ0xhLEtBQUssR0FBR2IsVUFBUyxDQUFDYyxHQUFHLENBQUMsUUFBUSxDQUFQSCxRQUFRLEVBQUssQ0FBQztvQkFDbkMsR0FBSyxDQUFDSSxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0ssWUFBWSxDQUFDbkIsSUFBSTtvQkFFdkMsTUFBTSxDQUFDa0IsSUFBSTtnQkFDYixDQUFDO2dCQUVQLE1BQU0sQ0FBQ0YsS0FBSztZQUNkLENBQUM7Ozs7WUFFTUksR0FBeUIsRUFBekJBLENBQXlCO21CQUFoQyxRQUFRLENBQURBLHlCQUF5QixDQUFDWCxRQUFRLEVBQUVSLFVBQVUsRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQ29CLFlBQWUsU0FBQ0QseUJBQXlCLENBQUN0QixlQUFlLEVBQUVXLFFBQVEsRUFBRVIsVUFBVTtZQUFHLENBQUM7Ozs7RUE5QnhHb0IsWUFBZTtrQkFBdkN2QixlQUFlIn0=