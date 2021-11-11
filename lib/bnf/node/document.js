"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));
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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
var DocumentNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(DocumentNode, NonTerminalNode);
    var _super = _createSuper(DocumentNode);
    function DocumentNode() {
        _classCallCheck(this, DocumentNode);
        return _super.apply(this, arguments);
    }
    _createClass(DocumentNode, [
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
                return _nonTerminal.default.fromRuleNameAndChildNodes(DocumentNode, ruleName, childNodes);
            }
        }
    ]);
    return DocumentNode;
}(_nonTerminal.default);
exports.default = DocumentNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvbm9kZS9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tXCIuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBSdWxlUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUnVsZXMoUnVsZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBydWxlTm9kZXMgPSBjaGlsZE5vZGVzLnJlZHVjZSgocnVsZU5vZGVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICBydWxlTmFtZSA9IGNoaWxkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBydWxlTmFtZVJ1bGVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gUnVsZVJ1bGVOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlUnVsZU5vZGUgPSBydWxlTmFtZVJ1bGVSdWxlTmFtZTsgIC8vL1xuXG4gICAgICAgICAgICAgIGlmIChub25UZXJtaW5hbE5vZGVSdWxlTm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJ1bGVOb2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cblxuICAgICAgICAgICAgICAgIHJ1bGVOb2Rlcy5wdXNoKHJ1bGVOb2RlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcnVsZU5vZGVzO1xuICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICBydWxlcyA9IHJ1bGVOb2Rlcy5tYXAoKHJ1bGVOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gcnVsZU5vZGUuZ2VuZXJhdGVSdWxlKFJ1bGUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoRG9jdW1lbnROb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJEb2N1bWVudE5vZGUiLCJnZW5lcmF0ZVJ1bGVzIiwiUnVsZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicnVsZU5vZGVzIiwicmVkdWNlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWVSdWxlUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVSdWxlTm9kZSIsInJ1bGVOb2RlIiwicHVzaCIsInJ1bGVzIiwibWFwIiwicnVsZSIsImdlbmVyYXRlUnVsZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWUsR0FBK0IsQ0FBL0IsWUFBK0I7QUFFN0IsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdEJBLFlBQVksaUJBQWxCLFFBQVE7Y0FBRkEsWUFBWTs4QkFBWkEsWUFBWTthQUFaQSxZQUFZOzhCQUFaQSxZQUFZOzs7aUJBQVpBLFlBQVk7O1lBQy9CQyxHQUFhLEVBQWJBLENBQWE7bUJBQWJBLFFBQVEsQ0FBUkEsYUFBYSxDQUFDQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkIsR0FBSyxDQUFDQyxVQUFVLEdBQUcsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxVQUFTLEdBQUdGLFVBQVUsQ0FBQ0csTUFBTSxDQUFDLFFBQVEsQ0FBUEQsU0FBUyxFQUFFRSxTQUFTLEVBQUssQ0FBQztvQkFDdkQsR0FBSyxDQUFDQyx3QkFBd0IsR0FBR0QsU0FBUyxDQUFDRSxpQkFBaUI7b0JBRTVELEVBQUUsRUFBRUQsd0JBQXdCLEVBQUUsQ0FBQzt3QkFDN0IsR0FBSyxDQUFDRSxlQUFlLEdBQUdILFNBQVMsRUFDM0JJLFFBQVEsR0FBR0osU0FBUyxDQUFDSyxXQUFXLElBQ2hDQyxvQkFBb0IsR0FBSUYsUUFBUSxLQVh2QixVQUFjLGVBWXZCRyx1QkFBdUIsR0FBR0Qsb0JBQW9CLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3dCQUUxRCxFQUFFLEVBQUVDLHVCQUF1QixFQUFFLENBQUM7NEJBQzVCLEdBQUssQ0FBQ0MsUUFBUSxHQUFHTCxlQUFlLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOzRCQUVyQ0wsU0FBUyxDQUFDVyxJQUFJLENBQUNELFFBQVE7d0JBQ3pCLENBQUM7b0JBQ0gsQ0FBQztvQkFFRCxNQUFNLENBQUNWLFNBQVM7Z0JBQ2xCLENBQUMsRUFBRSxDQUFDLENBQUMsR0FDTFksS0FBSyxHQUFHWixVQUFTLENBQUNhLEdBQUcsQ0FBQyxRQUFRLENBQVBILFFBQVEsRUFBSyxDQUFDO29CQUNuQyxHQUFLLENBQUNJLElBQUksR0FBR0osUUFBUSxDQUFDSyxZQUFZLENBQUNsQixJQUFJO29CQUV2QyxNQUFNLENBQUNpQixJQUFJO2dCQUNiLENBQUM7Z0JBRVAsTUFBTSxDQUFDRixLQUFLO1lBQ2QsQ0FBQzs7OztZQUVNSSxHQUF5QixFQUF6QkEsQ0FBeUI7bUJBQWhDLFFBQVEsQ0FBREEseUJBQXlCLENBQUNWLFFBQVEsRUFBRVIsVUFBVSxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQWxDdEMsWUFBK0IsU0FrQ3dCa0IseUJBQXlCLENBQUNyQixZQUFZLEVBQUVXLFFBQVEsRUFBRVIsVUFBVTtZQUFHLENBQUM7OztXQTlCN0hILFlBQVk7RUFKTixZQUErQjtrQkFJckNBLFlBQVkifQ==