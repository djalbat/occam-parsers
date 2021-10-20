"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var RuleNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(RuleNode, NonTerminalNode);
    function RuleNode() {
        _classCallCheck(this, RuleNode);
        return _possibleConstructorReturn(this, _getPrototypeOf(RuleNode).apply(this, arguments));
    }
    _createClass(RuleNode, [
        {
            key: "generateRule",
            value: function generateRule(Rule) {
                var name = this.getName(), definitions = this.generateDefinitions(), Node = _nonTerminal.default, rule = new Rule(name, definitions, Node);
                return rule;
            }
        },
        {
            key: "getName",
            value: function getName() {
                var childNodes = this.getChildNodes(), firstChildNode = (0, _array).first(childNodes), nameNode = firstChildNode, name = nameNode.getName();
                return name;
            }
        },
        {
            key: "generateDefinitions",
            value: function generateDefinitions() {
                var childNodes = this.getChildNodes(), thirdChildNode = (0, _array).third(childNodes), definitionsNode = thirdChildNode, definitions = definitionsNode.generateDefinitions();
                return definitions;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(RuleNode, ruleName, childNodes);
            }
        }
    ]);
    return RuleNode;
}(_nonTerminal.default);
exports.default = RuleNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvbm9kZS9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgdGhpcmQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVSdWxlKFJ1bGUpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSB0aGlzLmdlbmVyYXRlRGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgbmFtZU5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSBuYW1lTm9kZS5nZXROYW1lKCk7XG4gICAgXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cbiAgXG4gIGdlbmVyYXRlRGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHRoaXJkQ2hpbGROb2RlID0gdGhpcmQoY2hpbGROb2RlcyksXG4gICAgICAgICAgZGVmaW5pdGlvbnNOb2RlID0gdGhpcmRDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zTm9kZS5nZW5lcmF0ZURlZmluaXRpb25zKCk7XG4gICAgXG4gICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKFJ1bGVOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlTm9kZSIsImdlbmVyYXRlUnVsZSIsIlJ1bGUiLCJuYW1lIiwiZ2V0TmFtZSIsImRlZmluaXRpb25zIiwiZ2VuZXJhdGVEZWZpbml0aW9ucyIsIk5vZGUiLCJydWxlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsIm5hbWVOb2RlIiwidGhpcmRDaGlsZE5vZGUiLCJkZWZpbml0aW9uc05vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwicnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWdCLEdBQStCLENBQS9CLFlBQStCO0FBRTlCLEdBQXVCLENBQXZCLE1BQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFL0JBLFFBQVEsaUJBQWQsUUFBUTtjQUFGQSxRQUFRO2FBQVJBLFFBQVE7OEJBQVJBLFFBQVE7Z0VBQVJBLFFBQVE7O2lCQUFSQSxRQUFROztZQUMzQkMsR0FBWSxFQUFaQSxDQUFZO21CQUFaQSxRQUFRLENBQVJBLFlBQVksQ0FBQ0MsSUFBSSxFQUFFLENBQUM7Z0JBQ2xCLEdBQUssQ0FBQ0MsSUFBSSxHQUFHLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsV0FBVyxHQUFHLElBQUksQ0FBQ0MsbUJBQW1CLElBQ3RDQyxJQUFJLEdBUmMsWUFBK0IsVUFTakRDLElBQUksR0FBRyxHQUFHLENBQUNOLElBQUksQ0FBQ0MsSUFBSSxFQUFFRSxXQUFXLEVBQUVFLElBQUk7Z0JBRTdDLE1BQU0sQ0FBQ0MsSUFBSTtZQUNiLENBQUM7OztZQUVESixHQUFPLEVBQVBBLENBQU87bUJBQVBBLFFBQVEsQ0FBUkEsT0FBTyxHQUFHLENBQUM7Z0JBQ1QsR0FBSyxDQUFDSyxVQUFVLEdBQUcsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxjQUFjLE9BZEssTUFBdUIsUUFjbkJGLFVBQVUsR0FDakNHLFFBQVEsR0FBR0QsY0FBYyxFQUN6QlIsSUFBSSxHQUFHUyxRQUFRLENBQUNSLE9BQU87Z0JBRTdCLE1BQU0sQ0FBQ0QsSUFBSTtZQUNiLENBQUM7OztZQUVERyxHQUFtQixFQUFuQkEsQ0FBbUI7bUJBQW5CQSxRQUFRLENBQVJBLG1CQUFtQixHQUFHLENBQUM7Z0JBQ3JCLEdBQUssQ0FBQ0csVUFBVSxHQUFHLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkcsY0FBYyxPQXZCSyxNQUF1QixRQXVCbkJKLFVBQVUsR0FDakNLLGVBQWUsR0FBR0QsY0FBYyxFQUNoQ1IsV0FBVyxHQUFHUyxlQUFlLENBQUNSLG1CQUFtQjtnQkFFdkQsTUFBTSxDQUFDRCxXQUFXO1lBQ3BCLENBQUM7Ozs7WUFFTVUsR0FBeUIsRUFBekJBLENBQXlCO21CQUFoQyxRQUFRLENBQURBLHlCQUF5QixDQUFDQyxRQUFRLEVBQUVQLFVBQVUsRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FoQ3JDLFlBQStCLFNBZ0N1Qk0seUJBQXlCLENBQUNmLFFBQVEsRUFBRWdCLFFBQVEsRUFBRVAsVUFBVTtZQUFHLENBQUM7OztXQTVCekhULFFBQVE7RUFKRCxZQUErQjtrQkFJdENBLFFBQVEifQ==