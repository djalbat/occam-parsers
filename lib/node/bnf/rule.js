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
                var name = this.getName(), definitions = this.generateDefinitions(), Node = _nonTerminal.default, rule = new Rule(name, definitions, Node);
                return rule;
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
                var childNodes = this.getChildNodes(), thirdChildNode = (0, _array).third(childNodes), definitionsNode = thirdChildNode, definitions = definitionsNode.generateDefinitions();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IGZpcnN0LCB0aGlyZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZUJORk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVJ1bGUoUnVsZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHRoaXMuZ2VuZXJhdGVEZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbE5vZGUsXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBuYW1lQk5GTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IG5hbWVCTkZOb2RlLmdldE5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuICBcbiAgZ2VuZXJhdGVEZWZpbml0aW9ucygpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgdGhpcmRDaGlsZE5vZGUgPSB0aGlyZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBkZWZpbml0aW9uc05vZGUgPSB0aGlyZENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnNOb2RlLmdlbmVyYXRlRGVmaW5pdGlvbnMoKTtcbiAgICBcbiAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUnVsZUJORk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGVCTkZOb2RlIiwiZ2VuZXJhdGVSdWxlIiwiUnVsZSIsIm5hbWUiLCJnZXROYW1lIiwiZGVmaW5pdGlvbnMiLCJnZW5lcmF0ZURlZmluaXRpb25zIiwiTm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsInJ1bGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3QiLCJuYW1lQk5GTm9kZSIsInRoaXJkQ2hpbGROb2RlIiwidGhpcmQiLCJkZWZpbml0aW9uc05vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwicnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RTt3QjtBQUVlLEdBQXdCLENBQXhCLFlBQXdCO0FBRXZCLEdBQXVCLENBQXZCLE1BQXVCOzs7Ozs7Ozs7Ozs7Ozs7OEQ7c0M7NkQ7aUU7Ozs7d0U7Z0U7Ozs7OztLOzs7Ozs7Ozs7Ozs7O007eUQ7Ozs7Ozs7Ozs7Ozs7Ozt1Qjs7Szs7OzsyQjs7Ozs7Ozs7cUY7Ozs7Ozs7Ozs7OzttRTs7aUQ7Ozs7O0lBRS9CQSxXQUFXLGlCQUFqQixRQUFROzJDOzthQUFGQSxXQUFXOzBDOzs7OztZQUM5QkMsR0FBWSxFQUFaQSxDQUFZO21CQUFaQSxRQUFRLENBQVJBLFlBQVksQ0FBQ0MsSUFBSSxFQUFFLENBQUM7Z0JBQ2xCLEdBQUssQ0FBQ0MsSUFBSSxHQUFHLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsV0FBVyxHQUFHLElBQUksQ0FBQ0MsbUJBQW1CLElBQ3RDQyxJQUFJLEdBQUdDLFlBQWUsVUFDdEJDLElBQUksR0FBRyxHQUFHLENBQUNQLElBQUksQ0FBQ0MsSUFBSSxFQUFFRSxXQUFXLEVBQUVFLElBQUk7Z0JBRTdDLE1BQU0sQ0FBQ0UsSUFBSTtZQUNiLENBQUM7OztZQUVETCxHQUFPLEVBQVBBLENBQU87bUJBQVBBLFFBQVEsQ0FBUkEsT0FBTyxHQUFHLENBQUM7Z0JBQ1QsR0FBSyxDQUFDTSxVQUFVLEdBQUcsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxjQUFjLE9BQUdDLE1BQUssUUFBQ0gsVUFBVSxHQUNqQ0ksV0FBVyxHQUFHRixjQUFjLEVBQzVCVCxJQUFJLEdBQUdXLFdBQVcsQ0FBQ1YsT0FBTztnQkFFaEMsTUFBTSxDQUFDRCxJQUFJO1lBQ2IsQ0FBQzs7O1lBRURHLEdBQW1CLEVBQW5CQSxDQUFtQjttQkFBbkJBLFFBQVEsQ0FBUkEsbUJBQW1CLEdBQUcsQ0FBQztnQkFDckIsR0FBSyxDQUFDSSxVQUFVLEdBQUcsSUFBSSxDQUFDQyxhQUFhLElBQy9CSSxjQUFjLE9BQUdDLE1BQUssUUFBQ04sVUFBVSxHQUNqQ08sZUFBZSxHQUFHRixjQUFjLEVBQ2hDVixXQUFXLEdBQUdZLGVBQWUsQ0FBQ1gsbUJBQW1CO2dCQUV2RCxNQUFNLENBQUNELFdBQVc7WUFDcEIsQ0FBQzs7OztZQUVNYSxHQUF5QixFQUF6QkEsQ0FBeUI7bUJBQWhDLFFBQVEsQ0FBREEseUJBQXlCLENBQUNDLFFBQVEsRUFBRVQsVUFBVSxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDRixZQUFlLFNBQUNVLHlCQUF5QixDQUFDbEIsV0FBVyxFQUFFbUIsUUFBUSxFQUFFVCxVQUFVO1lBQUcsQ0FBQzs7TTs7RUE1QnhHRixZQUFlO2tCQUFuQ1IsV0FBVyxBIn0=