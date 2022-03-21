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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVCTkZOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVSdWxlKFJ1bGUpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgYW1iaWd1b3VzID0gdGhpcy5pc0FtYmlndW91cygpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gdGhpcy5nZW5lcmF0ZURlZmluaXRpb25zKCksXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGlzQW1iaWd1b3VzKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBzZWNvbmRDaGlsZE5vZGUgPSBzZWNvbmQoY2hpbGROb2RlcyksXG4gICAgICAgICAgc2Vjb25kQ2hpbGROb2RlVGVybWluYWxOb2RlID0gc2Vjb25kQ2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgYW1iaWd1b3VzID0gIXNlY29uZENoaWxkTm9kZVRlcm1pbmFsTm9kZTtcblxuICAgIHJldHVybiBhbWJpZ3VvdXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIG5hbWVCTkZOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gbmFtZUJORk5vZGUuZ2V0TmFtZSgpO1xuICAgIFxuICAgIHJldHVybiBuYW1lO1xuICB9XG4gIFxuICBnZW5lcmF0ZURlZmluaXRpb25zKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgdGhpcmRDaGlsZE5vZGUgPSB0aGlyZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBmb3VydGhDaGlsZE5vZGUgPSBmb3VydGgoY2hpbGROb2RlcyksXG4gICAgICAgICAgZGVmaW5pdGlvbnNCTkZOb2RlID0gKGNoaWxkTm9kZXNMZW5ndGggPT09IDQpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXJkQ2hpbGROb2RlIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VydGhDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnNCTkZOb2RlLmdlbmVyYXRlRGVmaW5pdGlvbnMoKTtcbiAgICBcbiAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUnVsZUJORk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGVCTkZOb2RlIiwiZ2VuZXJhdGVSdWxlIiwiUnVsZSIsIm5hbWUiLCJnZXROYW1lIiwiYW1iaWd1b3VzIiwiaXNBbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsImdlbmVyYXRlRGVmaW5pdGlvbnMiLCJOb2RlIiwiTm9uVGVybWluYWxOb2RlIiwicnVsZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwic2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kIiwic2Vjb25kQ2hpbGROb2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwibmFtZUJORk5vZGUiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwidGhpcmRDaGlsZE5vZGUiLCJ0aGlyZCIsImZvdXJ0aENoaWxkTm9kZSIsImZvdXJ0aCIsImRlZmluaXRpb25zQk5GTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJydWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUU0QixJQUFBLFlBQXdCLGtDQUF4Qix3QkFBd0IsRUFBQTtBQUVQLElBQUEsTUFBdUIsV0FBdkIsdUJBQXVCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs4REFKcEU7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBTWUsSUFBQSxBQUFNQSxXQUFXLGlCQ043QixBRE1ZOzJDQU5mOzthQU1xQkEsV0FBVzswQ0FOaEM7Ozs7O1lBT0VDLEdBQVksRUFBWkEsY0FBWTtZRVBkLE9GT0VBLFNBQUFBLFlBQVksQ0FBQ0MsSUFBSSxFQUFFO2dCQUNqQixJQUFNQyxJQUFJLEdBQUcsSUFBSSxDQUFDQyxPQUFPLEVBQUUsRUFDckJDLFNBQVMsR0FBRyxJQUFJLENBQUNDLFdBQVcsRUFBRSxFQUM5QkMsV0FBVyxHQUFHLElBQUksQ0FBQ0MsbUJBQW1CLEVBQUUsRUFDeENDLElBQUksR0FBR0MsWUFBZSxRQUFBLEVBQ3RCQyxJQUFJLEdBQUcsSUFBSVQsSUFBSSxDQUFDQyxJQUFJLEVBQUVFLFNBQVMsRUFBRUUsV0FBVyxFQUFFRSxJQUFJLENBQUMsQUFBQztnQkFFMUQsT0FBT0UsSUFBSSxDQUFDO2FBQ2I7OztZQUVETCxHQUFXLEVBQVhBLGFBQVc7WUVqQmIsT0ZpQkVBLFNBQUFBLFdBQVcsR0FBRztnQkFDWixJQUFNTSxVQUFVLEdBQUcsSUFBSSxDQUFDQyxhQUFhLEVBQUUsRUFDakNDLGVBQWUsR0FBR0MsQ0FBQUEsR0FBQUEsTUFBTSxBQUFZLENBQUEsUUFBWEgsVUFBVSxDQUFDLEVBQ3BDSSwyQkFBMkIsR0FBR0YsZUFBZSxDQUFDRyxjQUFjLEVBQUUsRUFDOURaLFNBQVMsR0FBRyxDQUFDVywyQkFBMkIsQUFBQztnQkFFL0MsT0FBT1gsU0FBUyxDQUFDO2FBQ2xCOzs7WUFFREQsR0FBTyxFQUFQQSxTQUFPO1lFMUJULE9GMEJFQSxTQUFBQSxPQUFPLEdBQUc7Z0JBQ1IsSUFBTVEsVUFBVSxHQUFHLElBQUksQ0FBQ0MsYUFBYSxFQUFFLEVBQ2pDSyxjQUFjLEdBQUdDLENBQUFBLEdBQUFBLE1BQUssQUFBWSxDQUFBLE9BQVhQLFVBQVUsQ0FBQyxFQUNsQ1EsV0FBVyxHQUFHRixjQUFjLEVBQzVCZixJQUFJLEdBQUdpQixXQUFXLENBQUNoQixPQUFPLEVBQUUsQUFBQztnQkFFbkMsT0FBT0QsSUFBSSxDQUFDO2FBQ2I7OztZQUVESyxHQUFtQixFQUFuQkEscUJBQW1CO1lFbkNyQixPRm1DRUEsU0FBQUEsbUJBQW1CLEdBQUc7Z0JBQ3BCLElBQU1JLFVBQVUsR0FBRyxJQUFJLENBQUNDLGFBQWEsRUFBRSxFQUNqQ1EsZ0JBQWdCLEdBQUdULFVBQVUsQ0FBQ1UsTUFBTSxFQUNwQ0MsY0FBYyxHQUFHQyxDQUFBQSxHQUFBQSxNQUFLLEFBQVksQ0FBQSxPQUFYWixVQUFVLENBQUMsRUFDbENhLGVBQWUsR0FBR0MsQ0FBQUEsR0FBQUEsTUFBTSxBQUFZLENBQUEsUUFBWGQsVUFBVSxDQUFDLEVBQ3BDZSxrQkFBa0IsR0FBRyxBQUFDTixnQkFBZ0IsS0FBSyxDQUFDLEdBQ3JCRSxjQUFjLEdBQ1pFLGVBQWUsRUFDeENsQixXQUFXLEdBQUdvQixrQkFBa0IsQ0FBQ25CLG1CQUFtQixFQUFFLEFBQUM7Z0JBRTdELE9BQU9ELFdBQVcsQ0FBQzthQUNwQjs7OztZQUVNcUIsR0FBeUIsRUFBekJBLDJCQUF5QjtZRWhEbEMsT0ZnREUsU0FBT0EseUJBQXlCLENBQUNDLFFBQVEsRUFBRWpCLFVBQVUsRUFBRTtnQkFBRSxPQUFPRixZQUFlLFNBQUNrQix5QkFBeUIsQ0FBQzVCLFdBQVcsRUFBRTZCLFFBQVEsRUFBRWpCLFVBQVUsQ0FBQyxDQUFDO2FBQUU7O01BaERqSjs7Q0FpREMsQ0EzQ3dDRixZQUFlLFNBMkN2RDtrQkEzQ29CVixXQUFXLEFBTmhDIn0=