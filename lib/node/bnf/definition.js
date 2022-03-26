"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _definition = _interopRequireDefault(require("../../definition"));
var _nonTerminal = _interopRequireDefault(require("../../node/nonTerminal"));
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
var DefinitionBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(DefinitionBNFNode, NonTerminalNode);
    var _super = _createSuper(DefinitionBNFNode);
    function DefinitionBNFNode() {
        _classCallCheck(this, DefinitionBNFNode);
        return _super.apply(this, arguments);
    }
    _createClass(DefinitionBNFNode, [
        {
            key: "generateDefinition",
            value: function generateDefinition() {
                var childNodes = this.getChildNodes(), partNodes = childNodes, lookAhead = false, parts = partNodes.map(function(partNode) {
                    var part = partNode.generatePart(lookAhead);
                    return part;
                }), definition = new _definition.default(parts);
                return definition;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(DefinitionBNFNode, ruleName, childNodes);
            }
        }
    ]);
    return DefinitionBNFNode;
}(_nonTerminal.default);
exports.default = DefinitionBNFNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9kZWZpbml0aW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwibGliL2NvbnN0YW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbm9uVGVybWluYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbkJORk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZURlZmluaXRpb24oKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHBhcnROb2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIGxvb2tBaGVhZCA9IGZhbHNlLCAgLy8vXG4gICAgICAgICAgcGFydHMgPSBwYXJ0Tm9kZXMubWFwKChwYXJ0Tm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IHBhcnROb2RlLmdlbmVyYXRlUGFydChsb29rQWhlYWQpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhEZWZpbml0aW9uQk5GTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuIl0sIm5hbWVzIjpbIkRlZmluaXRpb25CTkZOb2RlIiwiZ2VuZXJhdGVEZWZpbml0aW9uIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJwYXJ0Tm9kZXMiLCJsb29rQWhlYWQiLCJwYXJ0cyIsIm1hcCIsInBhcnROb2RlIiwicGFydCIsImdlbmVyYXRlUGFydCIsImRlZmluaXRpb24iLCJEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRXVCLElBQUEsV0FBa0Isa0NBQWxCLGtCQUFrQixFQUFBO0FBQ2IsSUFBQSxZQUF3QixrQ0FBeEIsd0JBQXdCLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs4REFIcEQ7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBS2UsSUFBQSxBQUFNQSxpQkFBaUIsaUJDTG5DLEFES1k7aURBTGY7O2FBS3FCQSxpQkFBaUI7Z0RBTHRDOzs7OztZQU1FQyxHQUFrQixFQUFsQkEsb0JBQWtCO1lFTnBCLE9GTUVBLFNBQUFBLGtCQUFrQixHQUFHO2dCQUNuQixJQUFNQyxVQUFVLEdBQUcsSUFBSSxDQUFDQyxhQUFhLEVBQUUsRUFDakNDLFNBQVMsR0FBR0YsVUFBVSxFQUN0QkcsU0FBUyxHQUFHLEtBQUssRUFDakJDLEtBQUssR0FBR0YsU0FBUyxDQUFDRyxHQUFHLENBQUMsU0FBQ0MsUUFBUSxFQUFLO29CQUNsQyxJQUFNQyxJQUFJLEdBQUdELFFBQVEsQ0FBQ0UsWUFBWSxDQUFDTCxTQUFTLENBQUMsQUFBQztvQkFFOUMsT0FBT0ksSUFBSSxDQUFDO2lCQUNiLENBQUMsRUFDRkUsVUFBVSxHQUFHLElBQUlDLFdBQVUsU0FBQ04sS0FBSyxDQUFDLEFBQUM7Z0JBRXpDLE9BQU9LLFVBQVUsQ0FBQzthQUNuQjs7OztZQUVNRSxHQUF5QixFQUF6QkEsMkJBQXlCO1lFcEJsQyxPRm9CRSxTQUFPQSx5QkFBeUIsQ0FBQ0MsUUFBUSxFQUFFWixVQUFVLEVBQUU7Z0JBQUUsT0FBT2EsWUFBZSxTQUFDRix5QkFBeUIsQ0FBQ2IsaUJBQWlCLEVBQUVjLFFBQVEsRUFBRVosVUFBVSxDQUFDLENBQUM7YUFBRTs7TUFwQnZKOztDQXFCQyxDQWhCOENhLFlBQWUsU0FnQjdEO2tCQWhCb0JmLGlCQUFpQixBQUx0QyJ9