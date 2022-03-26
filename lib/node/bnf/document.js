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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9kb2N1bWVudC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsImxpYi9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbVwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBSdWxlUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50Qk5GTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUnVsZXMoUnVsZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBydWxlTm9kZXMgPSBjaGlsZE5vZGVzLnJlZHVjZSgocnVsZU5vZGVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICBydWxlTmFtZSA9IGNoaWxkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBydWxlTmFtZVJ1bGVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gUnVsZVJ1bGVOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlUnVsZU5vZGUgPSBydWxlTmFtZVJ1bGVSdWxlTmFtZTsgIC8vL1xuXG4gICAgICAgICAgICAgIGlmIChub25UZXJtaW5hbE5vZGVSdWxlTm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJ1bGVOb2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cblxuICAgICAgICAgICAgICAgIHJ1bGVOb2Rlcy5wdXNoKHJ1bGVOb2RlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcnVsZU5vZGVzO1xuICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICBydWxlcyA9IHJ1bGVOb2Rlcy5tYXAoKHJ1bGVOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gcnVsZU5vZGUuZ2VuZXJhdGVSdWxlKFJ1bGUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoRG9jdW1lbnRCTkZOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG4iXSwibmFtZXMiOlsiRG9jdW1lbnRCTkZOb2RlIiwiZ2VuZXJhdGVSdWxlcyIsIlJ1bGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJ1bGVOb2RlcyIsInJlZHVjZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lUnVsZVJ1bGVOYW1lIiwiUnVsZVJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlUnVsZU5vZGUiLCJydWxlTm9kZSIsInB1c2giLCJydWxlcyIsIm1hcCIsInJ1bGUiLCJnZW5lcmF0ZVJ1bGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRTJCLElBQUEsWUFBd0Isa0NBQXhCLHdCQUF3QixFQUFBO0FBRXRCLElBQUEsVUFBaUIsV0FBakIsaUJBQWlCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs4REFKOUM7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBTWUsSUFBQSxBQUFNQSxlQUFlLGlCQ05qQyxBRE1ZOytDQU5mOzthQU1xQkEsZUFBZTs4Q0FOcEM7Ozs7O1lBT0VDLEdBQWEsRUFBYkEsZUFBYTtZRVBmLE9GT0VBLFNBQUFBLGFBQWEsQ0FBQ0MsSUFBSSxFQUFFO2dCQUNsQixJQUFNQyxVQUFVLEdBQUcsSUFBSSxDQUFDQyxhQUFhLEVBQUUsRUFDakNDLFVBQVMsR0FBR0YsVUFBVSxDQUFDRyxNQUFNLENBQUMsU0FBQ0QsU0FBUyxFQUFFRSxTQUFTLEVBQUs7b0JBQ3RELElBQU1DLHdCQUF3QixHQUFHRCxTQUFTLENBQUNFLGlCQUFpQixFQUFFLEFBQUM7b0JBRS9ELElBQUlELHdCQUF3QixFQUFFO3dCQUM1QixJQUFNRSxlQUFlLEdBQUdILFNBQVMsRUFDM0JJLFFBQVEsR0FBR0osU0FBUyxDQUFDSyxXQUFXLEVBQUUsRUFDbENDLG9CQUFvQixHQUFJRixRQUFRLEtBQUtHLFVBQVksYUFBQSxBQUFDLEVBQ2xEQyx1QkFBdUIsR0FBR0Ysb0JBQW9CLEFBQUMsRUFBRSxHQUFHO3dCQUUxRCxJQUFJRSx1QkFBdUIsRUFBRTs0QkFDM0IsSUFBTUMsUUFBUSxHQUFHTixlQUFlLEFBQUMsRUFBQyxHQUFHOzRCQUVyQ0wsU0FBUyxDQUFDWSxJQUFJLENBQUNELFFBQVEsQ0FBQyxDQUFDO3lCQUMxQjtxQkFDRjtvQkFFRCxPQUFPWCxTQUFTLENBQUM7aUJBQ2xCLEVBQUUsRUFBRSxDQUFDLEVBQ05hLEtBQUssR0FBR2IsVUFBUyxDQUFDYyxHQUFHLENBQUMsU0FBQ0gsUUFBUSxFQUFLO29CQUNsQyxJQUFNSSxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0ssWUFBWSxDQUFDbkIsSUFBSSxDQUFDLEFBQUM7b0JBRXpDLE9BQU9rQixJQUFJLENBQUM7aUJBQ2IsQ0FBQyxBQUFDO2dCQUVULE9BQU9GLEtBQUssQ0FBQzthQUNkOzs7O1lBRU1JLEdBQXlCLEVBQXpCQSwyQkFBeUI7WUVwQ2xDLE9Gb0NFLFNBQU9BLHlCQUF5QixDQUFDWCxRQUFRLEVBQUVSLFVBQVUsRUFBRTtnQkFBRSxPQUFPb0IsWUFBZSxTQUFDRCx5QkFBeUIsQ0FBQ3RCLGVBQWUsRUFBRVcsUUFBUSxFQUFFUixVQUFVLENBQUMsQ0FBQzthQUFFOztNQXBDcko7O0NBcUNDLENBL0I0Q29CLFlBQWUsU0ErQjNEO2tCQS9Cb0J2QixlQUFlLEFBTnBDIn0=