"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleBNFNode;
    }
});
var _necessary = require("necessary");
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, third = _necessary.arrayUtilities.third, fourth = _necessary.arrayUtilities.fourth;
var RuleBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(RuleBNFNode, NonTerminalNode);
    var _super = _create_super(RuleBNFNode);
    function RuleBNFNode() {
        _class_call_check(this, RuleBNFNode);
        return _super.apply(this, arguments);
    }
    _create_class(RuleBNFNode, [
        {
            key: "generateRule",
            value: function generateRule(Rule) {
                var name = this.getName(), ambiguous = this.isAmbiguous(), definitions = this.generateDefinitions(), rule = Rule.fromNameAmbiguousDefinitionsAndNonTerminalNode(name, ambiguous, definitions, _nonTerminal.default);
                return rule;
            }
        },
        {
            key: "isAmbiguous",
            value: function isAmbiguous() {
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), secondChildNodeTerminalNode = secondChildNode.isTerminalNode(), ambiguous = !secondChildNodeTerminalNode;
                return ambiguous;
            }
        },
        {
            key: "getName",
            value: function getName() {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), nameBNFNode = firstChildNode, name = nameBNFNode.getName();
                return name;
            }
        },
        {
            key: "generateDefinitions",
            value: function generateDefinitions() {
                var childNodes = this.getChildNodes(), childNodesLength = childNodes.length, thirdChildNode = third(childNodes), fourthChildNode = fourth(childNodes), definitionsBNFNode = childNodesLength === 4 ? thirdChildNode : fourthChildNode, definitions = definitionsBNFNode.generateDefinitions();
                return definitions;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndPrecedence",
            value: function fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesAndPrecedence(RuleBNFNode, ruleName, childNodes, precedence);
            }
        }
    ]);
    return RuleBNFNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlQk5GTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUnVsZShSdWxlKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIGFtYmlndW91cyA9IHRoaXMuaXNBbWJpZ3VvdXMoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHRoaXMuZ2VuZXJhdGVEZWZpbml0aW9ucygpLFxuICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21OYW1lQW1iaWd1b3VzRGVmaW5pdGlvbnNBbmROb25UZXJtaW5hbE5vZGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBzZWNvbmRDaGlsZE5vZGVUZXJtaW5hbE5vZGUgPSBzZWNvbmRDaGlsZE5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBhbWJpZ3VvdXMgPSAhc2Vjb25kQ2hpbGROb2RlVGVybWluYWxOb2RlO1xuXG4gICAgcmV0dXJuIGFtYmlndW91cztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgbmFtZUJORk5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSBuYW1lQk5GTm9kZS5nZXROYW1lKCk7XG4gICAgXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cbiAgXG4gIGdlbmVyYXRlRGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICB0aGlyZENoaWxkTm9kZSA9IHRoaXJkKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGZvdXJ0aENoaWxkTm9kZSA9IGZvdXJ0aChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBkZWZpbml0aW9uc0JORk5vZGUgPSAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gNCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcmRDaGlsZE5vZGUgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdXJ0aENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9uc0JORk5vZGUuZ2VuZXJhdGVEZWZpbml0aW9ucygpO1xuICAgIFxuICAgIHJldHVybiBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlKFJ1bGVCTkZOb2RlLCBydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUnVsZUJORk5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJnZW5lcmF0ZVJ1bGUiLCJSdWxlIiwibmFtZSIsImdldE5hbWUiLCJhbWJpZ3VvdXMiLCJpc0FtYmlndW91cyIsImRlZmluaXRpb25zIiwiZ2VuZXJhdGVEZWZpbml0aW9ucyIsInJ1bGUiLCJmcm9tTmFtZUFtYmlndW91c0RlZmluaXRpb25zQW5kTm9uVGVybWluYWxOb2RlIiwiTm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJzZWNvbmRDaGlsZE5vZGUiLCJzZWNvbmRDaGlsZE5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwibmFtZUJORk5vZGUiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwidGhpcmRDaGlsZE5vZGUiLCJmb3VydGhDaGlsZE5vZGUiLCJkZWZpbml0aW9uc0JORk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTlU7a0VBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBUUMsUUFBaUNDLDBCQUFqQ0QsT0FBT0UsU0FBMEJELDBCQUExQkMsUUFBUUMsUUFBa0JGLDBCQUFsQkUsT0FBT0MsU0FBV0gsMEJBQVhHO0FBRWYsSUFBQSxBQUFNTCw0QkFBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQk0sS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLElBQUk7Z0JBQ2YsSUFBTUMsT0FBTyxJQUFJLENBQUNDLFdBQ1pDLFlBQVksSUFBSSxDQUFDQyxlQUNqQkMsY0FBYyxJQUFJLENBQUNDLHVCQUNuQkMsT0FBT1AsS0FBS1EsK0NBQStDUCxNQUFNRSxXQUFXRSxhQUFhSTtnQkFFL0YsT0FBT0Y7WUFDVDs7O1lBRUFILEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTSxhQUFhLElBQUksQ0FBQ0MsaUJBQ2xCQyxrQkFBa0JoQixPQUFPYyxhQUN6QkcsOEJBQThCRCxnQkFBZ0JFLGtCQUM5Q1gsWUFBWSxDQUFDVTtnQkFFbkIsT0FBT1Y7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUSxhQUFhLElBQUksQ0FBQ0MsaUJBQ2xCSSxpQkFBaUJyQixNQUFNZ0IsYUFDdkJNLGNBQWNELGdCQUNkZCxPQUFPZSxZQUFZZDtnQkFFekIsT0FBT0Q7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSSxhQUFhLElBQUksQ0FBQ0MsaUJBQ2xCTSxtQkFBbUJQLFdBQVdRLFFBQzlCQyxpQkFBaUJ0QixNQUFNYSxhQUN2QlUsa0JBQWtCdEIsT0FBT1ksYUFDekJXLHFCQUFxQixBQUFDSixxQkFBcUIsSUFDcEJFLGlCQUNFQyxpQkFDekJmLGNBQWNnQixtQkFBbUJmO2dCQUV2QyxPQUFPRDtZQUNUOzs7O1lBRU9pQixLQUFBQTttQkFBUCxTQUFPQSxvQ0FBb0NDLFFBQVEsRUFBRWIsVUFBVSxFQUFFYyxVQUFVO2dCQUFJLE9BQU9mLHFCQUFnQmEsb0NBekNuRjdCLGFBeUNvSThCLFVBQVViLFlBQVljO1lBQWE7OztXQXpDdksvQjtFQUFvQmdCIn0=