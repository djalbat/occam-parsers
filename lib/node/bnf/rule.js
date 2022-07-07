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
var RuleBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(RuleBNFNode, NonTerminalNode);
    var _super = _createSuper(RuleBNFNode);
    function RuleBNFNode() {
        _classCallCheck(this, RuleBNFNode);
        return _super.apply(this, arguments);
    }
    _createClass(RuleBNFNode, [
        {
            key: "generateRule",
            value: function generateRule(Rule) {
                var name = this.getName(), ambiguous = this.isAmbiguous(), definitions = this.generateDefinitions(), Node = _nonTerminal.default, rule = new Rule(name, ambiguous, definitions, Node);
                return rule;
            }
        },
        {
            key: "isAmbiguous",
            value: function isAmbiguous() {
                var childNodes = this.getChildNodes(), secondChildNode = (0, _array.second)(childNodes), secondChildNodeTerminalNode = secondChildNode.isTerminalNode(), ambiguous = !secondChildNodeTerminalNode;
                return ambiguous;
            }
        },
        {
            key: "getName",
            value: function getName() {
                var childNodes = this.getChildNodes(), firstChildNode = (0, _array.first)(childNodes), nameBNFNode = firstChildNode, name = nameBNFNode.getName();
                return name;
            }
        },
        {
            key: "generateDefinitions",
            value: function generateDefinitions() {
                var childNodes = this.getChildNodes(), childNodesLength = childNodes.length, thirdChildNode = (0, _array.third)(childNodes), fourthChildNode = (0, _array.fourth)(childNodes), definitionsBNFNode = childNodesLength === 4 ? thirdChildNode : fourthChildNode, definitions = definitionsBNFNode.generateDefinitions();
                return definitions;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(RuleBNFNode, ruleName, childNodes);
            }
        }
    ]);
    return RuleBNFNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVCTkZOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVSdWxlKFJ1bGUpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgYW1iaWd1b3VzID0gdGhpcy5pc0FtYmlndW91cygpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gdGhpcy5nZW5lcmF0ZURlZmluaXRpb25zKCksXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGlzQW1iaWd1b3VzKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBzZWNvbmRDaGlsZE5vZGUgPSBzZWNvbmQoY2hpbGROb2RlcyksXG4gICAgICAgICAgc2Vjb25kQ2hpbGROb2RlVGVybWluYWxOb2RlID0gc2Vjb25kQ2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgYW1iaWd1b3VzID0gIXNlY29uZENoaWxkTm9kZVRlcm1pbmFsTm9kZTtcblxuICAgIHJldHVybiBhbWJpZ3VvdXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIG5hbWVCTkZOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gbmFtZUJORk5vZGUuZ2V0TmFtZSgpO1xuICAgIFxuICAgIHJldHVybiBuYW1lO1xuICB9XG4gIFxuICBnZW5lcmF0ZURlZmluaXRpb25zKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgdGhpcmRDaGlsZE5vZGUgPSB0aGlyZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBmb3VydGhDaGlsZE5vZGUgPSBmb3VydGgoY2hpbGROb2RlcyksXG4gICAgICAgICAgZGVmaW5pdGlvbnNCTkZOb2RlID0gKGNoaWxkTm9kZXNMZW5ndGggPT09IDQpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXJkQ2hpbGROb2RlIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VydGhDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnNCTkZOb2RlLmdlbmVyYXRlRGVmaW5pdGlvbnMoKTtcbiAgICBcbiAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUnVsZUJORk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSdWxlQk5GTm9kZSIsImdlbmVyYXRlUnVsZSIsIlJ1bGUiLCJuYW1lIiwiZ2V0TmFtZSIsImFtYmlndW91cyIsImlzQW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJnZW5lcmF0ZURlZmluaXRpb25zIiwiTm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsInJ1bGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNlY29uZENoaWxkTm9kZSIsInNlY29uZCIsInNlY29uZENoaWxkTm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdCIsIm5hbWVCTkZOb2RlIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInRoaXJkQ2hpbGROb2RlIiwidGhpcmQiLCJmb3VydGhDaGlsZE5vZGUiLCJmb3VydGgiLCJkZWZpbml0aW9uc0JORk5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwicnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQU1RQSxXQUFXOzs7Z0VBSkosd0JBQXdCO3FCQUVQLHVCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRCxJQUFBLEFBQU1BLFdBQVcsaUJBQWpCOzs7YUFBTUEsV0FBVzs7Ozs7O1lBQzlCQyxHQUFZLEVBQVpBLGNBQVk7bUJBQVpBLFNBQUFBLFlBQVksQ0FBQ0MsSUFBSSxFQUFFO2dCQUNqQixJQUFNQyxJQUFJLEdBQUcsSUFBSSxDQUFDQyxPQUFPLEVBQUUsRUFDckJDLFNBQVMsR0FBRyxJQUFJLENBQUNDLFdBQVcsRUFBRSxFQUM5QkMsV0FBVyxHQUFHLElBQUksQ0FBQ0MsbUJBQW1CLEVBQUUsRUFDeENDLElBQUksR0FBR0MsWUFBZSxRQUFBLEVBQ3RCQyxJQUFJLEdBQUcsSUFBSVQsSUFBSSxDQUFDQyxJQUFJLEVBQUVFLFNBQVMsRUFBRUUsV0FBVyxFQUFFRSxJQUFJLENBQUMsQUFBQztnQkFFMUQsT0FBT0UsSUFBSSxDQUFDO2FBQ2I7OztZQUVETCxHQUFXLEVBQVhBLGFBQVc7bUJBQVhBLFNBQUFBLFdBQVcsR0FBRztnQkFDWixJQUFNTSxVQUFVLEdBQUcsSUFBSSxDQUFDQyxhQUFhLEVBQUUsRUFDakNDLGVBQWUsR0FBR0MsSUFBQUEsTUFBTSxPQUFBLEVBQUNILFVBQVUsQ0FBQyxFQUNwQ0ksMkJBQTJCLEdBQUdGLGVBQWUsQ0FBQ0csY0FBYyxFQUFFLEVBQzlEWixTQUFTLEdBQUcsQ0FBQ1csMkJBQTJCLEFBQUM7Z0JBRS9DLE9BQU9YLFNBQVMsQ0FBQzthQUNsQjs7O1lBRURELEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxHQUFHO2dCQUNSLElBQU1RLFVBQVUsR0FBRyxJQUFJLENBQUNDLGFBQWEsRUFBRSxFQUNqQ0ssY0FBYyxHQUFHQyxJQUFBQSxNQUFLLE1BQUEsRUFBQ1AsVUFBVSxDQUFDLEVBQ2xDUSxXQUFXLEdBQUdGLGNBQWMsRUFDNUJmLElBQUksR0FBR2lCLFdBQVcsQ0FBQ2hCLE9BQU8sRUFBRSxBQUFDO2dCQUVuQyxPQUFPRCxJQUFJLENBQUM7YUFDYjs7O1lBRURLLEdBQW1CLEVBQW5CQSxxQkFBbUI7bUJBQW5CQSxTQUFBQSxtQkFBbUIsR0FBRztnQkFDcEIsSUFBTUksVUFBVSxHQUFHLElBQUksQ0FBQ0MsYUFBYSxFQUFFLEVBQ2pDUSxnQkFBZ0IsR0FBR1QsVUFBVSxDQUFDVSxNQUFNLEVBQ3BDQyxjQUFjLEdBQUdDLElBQUFBLE1BQUssTUFBQSxFQUFDWixVQUFVLENBQUMsRUFDbENhLGVBQWUsR0FBR0MsSUFBQUEsTUFBTSxPQUFBLEVBQUNkLFVBQVUsQ0FBQyxFQUNwQ2Usa0JBQWtCLEdBQUcsQUFBQ04sZ0JBQWdCLEtBQUssQ0FBQyxHQUNyQkUsY0FBYyxHQUNaRSxlQUFlLEVBQ3hDbEIsV0FBVyxHQUFHb0Isa0JBQWtCLENBQUNuQixtQkFBbUIsRUFBRSxBQUFDO2dCQUU3RCxPQUFPRCxXQUFXLENBQUM7YUFDcEI7Ozs7WUFFTXFCLEdBQXlCLEVBQXpCQSwyQkFBeUI7bUJBQWhDLFNBQU9BLHlCQUF5QixDQUFDQyxRQUFRLEVBQUVqQixVQUFVLEVBQUU7Z0JBQUUsT0FBT0YsWUFBZSxRQUFBLENBQUNrQix5QkFBeUIsQ0FBQzVCLFdBQVcsRUFBRTZCLFFBQVEsRUFBRWpCLFVBQVUsQ0FBQyxDQUFDO2FBQUU7Ozs7Q0FDaEosQ0EzQ3dDRixZQUFlLFFBQUEsQ0EyQ3ZEIn0=