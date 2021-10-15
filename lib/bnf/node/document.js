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
var DocumentNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(DocumentNode, NonTerminalNode);
    function DocumentNode() {
        _classCallCheck(this, DocumentNode);
        return _possibleConstructorReturn(this, _getPrototypeOf(DocumentNode).apply(this, arguments));
    }
    _createClass(DocumentNode, [
        {
            key: "generateRules",
            value: function generateRules(Rule) {
                var childNodes = this.getChildNodes(), ruleNodes = childNodes.reduce(function(ruleNodes, childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var nonTerminalNode = childNode, ruleName = childNode.getRuleName(), ruleNameRuleRuleName = ruleName === _ruleNames.RuleRuleName, nonTerminalNodeRuleNode = ruleNameRuleRuleName; ///
                        if (nonTerminalNodeRuleNode) {
                            var ruleNode = nonTerminalNode; ///
                            ruleNodes.push(ruleNode);
                        }
                    }
                    return ruleNodes;
                }, []), rules = ruleNodes.map(function(ruleNode) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvbm9kZS9kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJSdWxlUnVsZU5hbWUiLCJEb2N1bWVudE5vZGUiLCJnZW5lcmF0ZVJ1bGVzIiwiUnVsZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicnVsZU5vZGVzIiwicmVkdWNlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWVSdWxlUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVSdWxlTm9kZSIsInJ1bGVOb2RlIiwicHVzaCIsInJ1bGVzIiwibWFwIiwicnVsZSIsImdlbmVyYXRlUnVsZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWUsR0FBK0IsQ0FBL0IsWUFBK0I7QUFFN0IsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV0QixZQUFZLGlCQUFsQixRQUFRO2NBQUYsWUFBWTthQUFaLFlBQVk7OEJBQVosWUFBWTtnRUFBWixZQUFZOztpQkFBWixZQUFZOztZQUMvQixHQUFhLEVBQWIsQ0FBYTttQkFBYixRQUFRLENBQVIsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNuQixHQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLElBQy9CLFNBQVMsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBUCxTQUFTLEVBQUUsU0FBUyxFQUFLLENBQUM7b0JBQ3ZELEdBQUssQ0FBQyx3QkFBd0IsR0FBRyxTQUFTLENBQUMsaUJBQWlCO29CQUU1RCxFQUFFLEVBQUUsd0JBQXdCLEVBQUUsQ0FBQzt3QkFDN0IsR0FBSyxDQUFDLGVBQWUsR0FBRyxTQUFTLEVBQzNCLFFBQVEsR0FBRyxTQUFTLENBQUMsV0FBVyxJQUNoQyxvQkFBb0IsR0FBSSxRQUFRLEtBWHZCLFVBQWMsZUFZdkIsdUJBQXVCLEdBQUcsb0JBQW9CLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3dCQUUxRCxFQUFFLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQzs0QkFDNUIsR0FBSyxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOzRCQUVyQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVE7d0JBQ3pCLENBQUM7b0JBQ0gsQ0FBQztvQkFFRCxNQUFNLENBQUMsU0FBUztnQkFDbEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUNMLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBUCxRQUFRLEVBQUssQ0FBQztvQkFDbkMsR0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUk7b0JBRXZDLE1BQU0sQ0FBQyxJQUFJO2dCQUNiLENBQUM7Z0JBRVAsTUFBTSxDQUFDLEtBQUs7WUFDZCxDQUFDOzs7O1lBRU0sR0FBeUIsRUFBekIsQ0FBeUI7bUJBQWhDLFFBQVEsQ0FBRCx5QkFBeUIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQWxDdEMsWUFBK0IsU0FrQ3dCLHlCQUF5QixDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsVUFBVTtZQUFHLENBQUM7OztXQTlCN0gsWUFBWTtFQUpOLFlBQStCO2tCQUlyQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbVwiLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgUnVsZVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVJ1bGVzKFJ1bGUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcnVsZU5vZGVzID0gY2hpbGROb2Rlcy5yZWR1Y2UoKHJ1bGVOb2RlcywgY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgcnVsZU5hbWUgPSBjaGlsZE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgcnVsZU5hbWVSdWxlUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IFJ1bGVSdWxlTmFtZSksXG4gICAgICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVJ1bGVOb2RlID0gcnVsZU5hbWVSdWxlUnVsZU5hbWU7ICAvLy9cblxuICAgICAgICAgICAgICBpZiAobm9uVGVybWluYWxOb2RlUnVsZU5vZGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBydWxlTm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG5cbiAgICAgICAgICAgICAgICBydWxlTm9kZXMucHVzaChydWxlTm9kZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVOb2RlcztcbiAgICAgICAgICB9LCBbXSksXG4gICAgICAgICAgcnVsZXMgPSBydWxlTm9kZXMubWFwKChydWxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVOb2RlLmdlbmVyYXRlUnVsZShSdWxlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKERvY3VtZW50Tm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG4iXX0=