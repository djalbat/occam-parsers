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
var DocumentNode = function(NonTerminalNode) {
    _inherits(DocumentNode, NonTerminalNode);
    function DocumentNode() {
        _classCallCheck(this, DocumentNode);
        return _possibleConstructorReturn(this, _getPrototypeOf(DocumentNode).apply(this, arguments));
    }
    _createClass(DocumentNode, [
        {
            key: "generateRules",
            value: function generateRules(Rule) {
                var childNodes = this.getChildNodes(), ruleNodes = childNodes.reduce(function(ruleNodes1, childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var nonTerminalNode = childNode, ruleName = childNode.getRuleName(), ruleNameRuleRuleName = ruleName === _ruleNames.RuleRuleName, nonTerminalNodeRuleNode = ruleNameRuleRuleName; ///
                        if (nonTerminalNodeRuleNode) {
                            var ruleNode = nonTerminalNode; ///
                            ruleNodes1.push(ruleNode);
                        }
                    }
                    return ruleNodes1;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvbm9kZS9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tXCIuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBSdWxlUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUnVsZXMoUnVsZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBydWxlTm9kZXMgPSBjaGlsZE5vZGVzLnJlZHVjZSgocnVsZU5vZGVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICBydWxlTmFtZSA9IGNoaWxkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBydWxlTmFtZVJ1bGVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gUnVsZVJ1bGVOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlUnVsZU5vZGUgPSBydWxlTmFtZVJ1bGVSdWxlTmFtZTsgIC8vL1xuXG4gICAgICAgICAgICAgIGlmIChub25UZXJtaW5hbE5vZGVSdWxlTm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJ1bGVOb2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cblxuICAgICAgICAgICAgICAgIHJ1bGVOb2Rlcy5wdXNoKHJ1bGVOb2RlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcnVsZU5vZGVzO1xuICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICBydWxlcyA9IHJ1bGVOb2Rlcy5tYXAoKHJ1bGVOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gcnVsZU5vZGUuZ2VuZXJhdGVSdWxlKFJ1bGUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoRG9jdW1lbnROb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVlLFlBQStCO0lBRTdCLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV0QixZQUFZO2NBQVosWUFBWTthQUFaLFlBQVk7OEJBQVosWUFBWTtnRUFBWixZQUFZOztpQkFBWixZQUFZOztZQUMvQixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhLENBQUMsSUFBSTtvQkFDVixVQUFVLFFBQVEsYUFBYSxJQUMvQixTQUFTLEdBQUcsVUFBVSxDQUFDLE1BQU0sVUFBRSxVQUFTLEVBQUUsU0FBUzt3QkFDM0Msd0JBQXdCLEdBQUcsU0FBUyxDQUFDLGlCQUFpQjt3QkFFeEQsd0JBQXdCOzRCQUNwQixlQUFlLEdBQUcsU0FBUyxFQUMzQixRQUFRLEdBQUcsU0FBUyxDQUFDLFdBQVcsSUFDaEMsb0JBQW9CLEdBQUksUUFBUSxLQVh2QixVQUFjLGVBWXZCLHVCQUF1QixHQUFHLG9CQUFvQixDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs0QkFFdEQsdUJBQXVCO2dDQUNuQixRQUFRLEdBQUcsZUFBZSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs0QkFFckMsVUFBUyxDQUFDLElBQUksQ0FBQyxRQUFROzs7MkJBSXBCLFVBQVM7d0JBRWxCLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxVQUFFLFFBQVE7d0JBQ3ZCLElBQUksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUk7MkJBRWhDLElBQUk7O3VCQUdaLEtBQUs7Ozs7O1lBR1AsR0FBeUIsR0FBekIseUJBQXlCOzRCQUF6Qix5QkFBeUIsQ0FBQyxRQUFRLEVBQUUsVUFBVTt1QkFsQzVCLFlBQStCLFNBa0N3Qix5QkFBeUIsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLFVBQVU7Ozs7V0E5QnpILFlBQVk7RUFKTixZQUErQjtrQkFJckMsWUFBWSJ9