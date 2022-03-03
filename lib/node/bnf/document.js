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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IFJ1bGVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnRCTkZOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVSdWxlcyhSdWxlKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHJ1bGVOb2RlcyA9IGNoaWxkTm9kZXMucmVkdWNlKChydWxlTm9kZXMsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lID0gY2hpbGROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lUnVsZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBSdWxlUnVsZU5hbWUpLFxuICAgICAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVSdWxlTm9kZSA9IHJ1bGVOYW1lUnVsZVJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgICAgICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZVJ1bGVOb2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcnVsZU5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuXG4gICAgICAgICAgICAgICAgcnVsZU5vZGVzLnB1c2gocnVsZU5vZGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBydWxlTm9kZXM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIHJ1bGVzID0gcnVsZU5vZGVzLm1hcCgocnVsZU5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSBydWxlTm9kZS5nZW5lcmF0ZVJ1bGUoUnVsZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhEb2N1bWVudEJORk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuIl0sIm5hbWVzIjpbIkRvY3VtZW50Qk5GTm9kZSIsImdlbmVyYXRlUnVsZXMiLCJSdWxlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJydWxlTm9kZXMiLCJyZWR1Y2UiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZVJ1bGVSdWxlTmFtZSIsIlJ1bGVSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZVJ1bGVOb2RlIiwicnVsZU5vZGUiLCJwdXNoIiwicnVsZXMiLCJtYXAiLCJydWxlIiwiZ2VuZXJhdGVSdWxlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFO3dCO0FBRWMsR0FBd0IsQ0FBeEIsWUFBd0I7QUFFdEIsR0FBaUIsQ0FBakIsVUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs4RDtzQzs2RDtpRTs7Ozt3RTtnRTs7Ozs7O0s7Ozs7Ozs7Ozs7Ozs7TTt5RDs7Ozs7Ozs7Ozs7Ozs7O3VCOztLOzs7OzJCOzs7Ozs7OztxRjs7Ozs7Ozs7Ozs7O21FOztpRDs7Ozs7SUFFekJBLGVBQWUsaUJBQXJCLFFBQVE7K0M7O2FBQUZBLGVBQWU7OEM7Ozs7O1lBQ2xDQyxHQUFhLEVBQWJBLENBQWE7bUJBQWJBLFFBQVEsQ0FBUkEsYUFBYSxDQUFDQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkIsR0FBSyxDQUFDQyxVQUFVLEdBQUcsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxVQUFTLEdBQUdGLFVBQVUsQ0FBQ0csTUFBTSxDQUFDLFFBQVEsQ0FBUEQsU0FBUyxFQUFFRSxTQUFTLEVBQUssQ0FBQztvQkFDdkQsR0FBSyxDQUFDQyx3QkFBd0IsR0FBR0QsU0FBUyxDQUFDRSxpQkFBaUI7b0JBRTVELEVBQUUsRUFBRUQsd0JBQXdCLEVBQUUsQ0FBQzt3QkFDN0IsR0FBSyxDQUFDRSxlQUFlLEdBQUdILFNBQVMsRUFDM0JJLFFBQVEsR0FBR0osU0FBUyxDQUFDSyxXQUFXLElBQ2hDQyxvQkFBb0IsR0FBSUYsUUFBUSxLQUFLRyxVQUFZLGVBQ2pEQyx1QkFBdUIsR0FBR0Ysb0JBQW9CLEVBQUcsRUFBRyxBQUFILENBQUc7d0JBRTFELEVBQUUsRUFBRUUsdUJBQXVCLEVBQUUsQ0FBQzs0QkFDNUIsR0FBSyxDQUFDQyxRQUFRLEdBQUdOLGVBQWUsRUFBRSxFQUFHLEFBQUgsQ0FBRzs0QkFFckNMLFNBQVMsQ0FBQ1ksSUFBSSxDQUFDRCxRQUFRLENBQUMsQ0FBQzt3QkFDM0IsQ0FBQztvQkFDSCxDQUFDO29CQUVELE1BQU0sQ0FBQ1gsU0FBUztnQkFDbEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUNMYSxLQUFLLEdBQUdiLFVBQVMsQ0FBQ2MsR0FBRyxDQUFDLFFBQVEsQ0FBUEgsUUFBUSxFQUFLLENBQUM7b0JBQ25DLEdBQUssQ0FBQ0ksSUFBSSxHQUFHSixRQUFRLENBQUNLLFlBQVksQ0FBQ25CLElBQUk7b0JBRXZDLE1BQU0sQ0FBQ2tCLElBQUk7Z0JBQ2IsQ0FBQztnQkFFUCxNQUFNLENBQUNGLEtBQUs7WUFDZCxDQUFDOzs7O1lBRU1JLEdBQXlCLEVBQXpCQSxDQUF5QjttQkFBaEMsUUFBUSxDQUFEQSx5QkFBeUIsQ0FBQ1gsUUFBUSxFQUFFUixVQUFVLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUNvQixZQUFlLFNBQUNELHlCQUF5QixDQUFDdEIsZUFBZSxFQUFFVyxRQUFRLEVBQUVSLFVBQVU7WUFBRyxDQUFDOztNOztFQTlCeEdvQixZQUFlO2tCQUF2Q3ZCLGVBQWUsQSJ9