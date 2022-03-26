"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminal = _interopRequireDefault(require("../../node/nonTerminal"));
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
                var childNodes = this.getChildNodes(), secondChildNode = (0, _array).second(childNodes), secondChildNodeTerminalNode = secondChildNode.isTerminalNode(), ambiguous = !secondChildNodeTerminalNode;
                return ambiguous;
            }
        },
        {
            key: "getName",
            value: function getName() {
                var childNodes = this.getChildNodes(), firstChildNode = (0, _array).first(childNodes), nameBNFNode = firstChildNode, name = nameBNFNode.getName();
                return name;
            }
        },
        {
            key: "generateDefinitions",
            value: function generateDefinitions() {
                var childNodes = this.getChildNodes(), childNodesLength = childNodes.length, thirdChildNode = (0, _array).third(childNodes), fourthChildNode = (0, _array).fourth(childNodes), definitionsBNFNode = childNodesLength === 4 ? thirdChildNode : fourthChildNode, definitions = definitionsBNFNode.generateDefinitions();
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
exports.default = RuleBNFNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwibGliL2NvbnN0YW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlQk5GTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUnVsZShSdWxlKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIGFtYmlndW91cyA9IHRoaXMuaXNBbWJpZ3VvdXMoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHRoaXMuZ2VuZXJhdGVEZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbE5vZGUsXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBpc0FtYmlndW91cygpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgc2Vjb25kQ2hpbGROb2RlID0gc2Vjb25kKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHNlY29uZENoaWxkTm9kZVRlcm1pbmFsTm9kZSA9IHNlY29uZENoaWxkTm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIGFtYmlndW91cyA9ICFzZWNvbmRDaGlsZE5vZGVUZXJtaW5hbE5vZGU7XG5cbiAgICByZXR1cm4gYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBuYW1lQk5GTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IG5hbWVCTkZOb2RlLmdldE5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuICBcbiAgZ2VuZXJhdGVEZWZpbml0aW9ucygpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgIHRoaXJkQ2hpbGROb2RlID0gdGhpcmQoY2hpbGROb2RlcyksXG4gICAgICAgICAgZm91cnRoQ2hpbGROb2RlID0gZm91cnRoKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGRlZmluaXRpb25zQk5GTm9kZSA9IChjaGlsZE5vZGVzTGVuZ3RoID09PSA0KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlyZENoaWxkTm9kZSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91cnRoQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zQk5GTm9kZS5nZW5lcmF0ZURlZmluaXRpb25zKCk7XG4gICAgXG4gICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKFJ1bGVCTkZOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG4iXSwibmFtZXMiOlsiUnVsZUJORk5vZGUiLCJnZW5lcmF0ZVJ1bGUiLCJSdWxlIiwibmFtZSIsImdldE5hbWUiLCJhbWJpZ3VvdXMiLCJpc0FtYmlndW91cyIsImRlZmluaXRpb25zIiwiZ2VuZXJhdGVEZWZpbml0aW9ucyIsIk5vZGUiLCJOb25UZXJtaW5hbE5vZGUiLCJydWxlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJzZWNvbmRDaGlsZE5vZGUiLCJzZWNvbmQiLCJzZWNvbmRDaGlsZE5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3QiLCJuYW1lQk5GTm9kZSIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJ0aGlyZENoaWxkTm9kZSIsInRoaXJkIiwiZm91cnRoQ2hpbGROb2RlIiwiZm91cnRoIiwiZGVmaW5pdGlvbnNCTkZOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInJ1bGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRTRCLElBQUEsWUFBd0Isa0NBQXhCLHdCQUF3QixFQUFBO0FBRVAsSUFBQSxNQUF1QixXQUF2Qix1QkFBdUIsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7OzhEQUpwRTtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFNZSxJQUFBLEFBQU1BLFdBQVcsaUJDTjdCLEFETVk7MkNBTmY7O2FBTXFCQSxXQUFXOzBDQU5oQzs7Ozs7WUFPRUMsR0FBWSxFQUFaQSxjQUFZO1lFUGQsT0ZPRUEsU0FBQUEsWUFBWSxDQUFDQyxJQUFJLEVBQUU7Z0JBQ2pCLElBQU1DLElBQUksR0FBRyxJQUFJLENBQUNDLE9BQU8sRUFBRSxFQUNyQkMsU0FBUyxHQUFHLElBQUksQ0FBQ0MsV0FBVyxFQUFFLEVBQzlCQyxXQUFXLEdBQUcsSUFBSSxDQUFDQyxtQkFBbUIsRUFBRSxFQUN4Q0MsSUFBSSxHQUFHQyxZQUFlLFFBQUEsRUFDdEJDLElBQUksR0FBRyxJQUFJVCxJQUFJLENBQUNDLElBQUksRUFBRUUsU0FBUyxFQUFFRSxXQUFXLEVBQUVFLElBQUksQ0FBQyxBQUFDO2dCQUUxRCxPQUFPRSxJQUFJLENBQUM7YUFDYjs7O1lBRURMLEdBQVcsRUFBWEEsYUFBVztZRWpCYixPRmlCRUEsU0FBQUEsV0FBVyxHQUFHO2dCQUNaLElBQU1NLFVBQVUsR0FBRyxJQUFJLENBQUNDLGFBQWEsRUFBRSxFQUNqQ0MsZUFBZSxHQUFHQyxDQUFBQSxHQUFBQSxNQUFNLEFBQVksQ0FBQSxRQUFYSCxVQUFVLENBQUMsRUFDcENJLDJCQUEyQixHQUFHRixlQUFlLENBQUNHLGNBQWMsRUFBRSxFQUM5RFosU0FBUyxHQUFHLENBQUNXLDJCQUEyQixBQUFDO2dCQUUvQyxPQUFPWCxTQUFTLENBQUM7YUFDbEI7OztZQUVERCxHQUFPLEVBQVBBLFNBQU87WUUxQlQsT0YwQkVBLFNBQUFBLE9BQU8sR0FBRztnQkFDUixJQUFNUSxVQUFVLEdBQUcsSUFBSSxDQUFDQyxhQUFhLEVBQUUsRUFDakNLLGNBQWMsR0FBR0MsQ0FBQUEsR0FBQUEsTUFBSyxBQUFZLENBQUEsT0FBWFAsVUFBVSxDQUFDLEVBQ2xDUSxXQUFXLEdBQUdGLGNBQWMsRUFDNUJmLElBQUksR0FBR2lCLFdBQVcsQ0FBQ2hCLE9BQU8sRUFBRSxBQUFDO2dCQUVuQyxPQUFPRCxJQUFJLENBQUM7YUFDYjs7O1lBRURLLEdBQW1CLEVBQW5CQSxxQkFBbUI7WUVuQ3JCLE9GbUNFQSxTQUFBQSxtQkFBbUIsR0FBRztnQkFDcEIsSUFBTUksVUFBVSxHQUFHLElBQUksQ0FBQ0MsYUFBYSxFQUFFLEVBQ2pDUSxnQkFBZ0IsR0FBR1QsVUFBVSxDQUFDVSxNQUFNLEVBQ3BDQyxjQUFjLEdBQUdDLENBQUFBLEdBQUFBLE1BQUssQUFBWSxDQUFBLE9BQVhaLFVBQVUsQ0FBQyxFQUNsQ2EsZUFBZSxHQUFHQyxDQUFBQSxHQUFBQSxNQUFNLEFBQVksQ0FBQSxRQUFYZCxVQUFVLENBQUMsRUFDcENlLGtCQUFrQixHQUFHLEFBQUNOLGdCQUFnQixLQUFLLENBQUMsR0FDckJFLGNBQWMsR0FDWkUsZUFBZSxFQUN4Q2xCLFdBQVcsR0FBR29CLGtCQUFrQixDQUFDbkIsbUJBQW1CLEVBQUUsQUFBQztnQkFFN0QsT0FBT0QsV0FBVyxDQUFDO2FBQ3BCOzs7O1lBRU1xQixHQUF5QixFQUF6QkEsMkJBQXlCO1lFaERsQyxPRmdERSxTQUFPQSx5QkFBeUIsQ0FBQ0MsUUFBUSxFQUFFakIsVUFBVSxFQUFFO2dCQUFFLE9BQU9GLFlBQWUsU0FBQ2tCLHlCQUF5QixDQUFDNUIsV0FBVyxFQUFFNkIsUUFBUSxFQUFFakIsVUFBVSxDQUFDLENBQUM7YUFBRTs7TUFoRGpKOztDQWlEQyxDQTNDd0NGLFlBQWUsU0EyQ3ZEO2tCQTNDb0JWLFdBQVcsQUFOaEMifQ==