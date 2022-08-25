"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DefinitionsBNFNode;
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
var DefinitionsBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(DefinitionsBNFNode, NonTerminalNode);
    var _super = _createSuper(DefinitionsBNFNode);
    function DefinitionsBNFNode() {
        _classCallCheck(this, DefinitionsBNFNode);
        return _super.apply(this, arguments);
    }
    _createClass(DefinitionsBNFNode, [
        {
            key: "generateDefinitions",
            value: function generateDefinitions() {
                var childNodes = this.getChildNodes(), evenChildNodes = (0, _array.even)(childNodes), definitionBNFNodes = evenChildNodes, definitions = definitionBNFNodes.map(function(definitionBNFNode) {
                    var definition = definitionBNFNode.generateDefinition();
                    return definition;
                });
                return definitions;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(DefinitionsBNFNode, ruleName, childNodes);
            }
        }
    ]);
    return DefinitionsBNFNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9kZWZpbml0aW9ucy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBldmVuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZpbml0aW9uc0JORk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZURlZmluaXRpb25zKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBldmVuQ2hpbGROb2RlcyA9IGV2ZW4oY2hpbGROb2RlcyksICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9uQk5GTm9kZXMgPSBldmVuQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9uQk5GTm9kZXMubWFwKChkZWZpbml0aW9uQk5GTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGRlZmluaXRpb25CTkZOb2RlLmdlbmVyYXRlRGVmaW5pdGlvbigpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoRGVmaW5pdGlvbnNCTkZOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGVmaW5pdGlvbnNCTkZOb2RlIiwiZ2VuZXJhdGVEZWZpbml0aW9ucyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZXZlbkNoaWxkTm9kZXMiLCJldmVuIiwiZGVmaW5pdGlvbkJORk5vZGVzIiwiZGVmaW5pdGlvbnMiLCJtYXAiLCJkZWZpbml0aW9uQk5GTm9kZSIsImRlZmluaXRpb24iLCJnZW5lcmF0ZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwicnVsZU5hbWUiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQU1RQSxrQkFBa0I7OztnRUFKWCx3QkFBd0I7cUJBRS9CLHVCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLGtCQUFrQixpQkFBeEI7Y0FBTUEsa0JBQWtCOzhCQUFsQkEsa0JBQWtCO2FBQWxCQSxrQkFBa0I7OEJBQWxCQSxrQkFBa0I7OztpQkFBbEJBLGtCQUFrQjs7WUFDckNDLEdBQW1CLEVBQW5CQSxxQkFBbUI7bUJBQW5CQSxTQUFBQSxtQkFBbUIsR0FBRztnQkFDcEIsSUFBTUMsVUFBVSxHQUFHLElBQUksQ0FBQ0MsYUFBYSxFQUFFLEVBQ2pDQyxjQUFjLEdBQUdDLElBQUFBLE1BQUksS0FBQSxFQUFDSCxVQUFVLENBQUMsRUFDakNJLGtCQUFrQixHQUFHRixjQUFjLEVBQ25DRyxXQUFXLEdBQUdELGtCQUFrQixDQUFDRSxHQUFHLENBQUMsU0FBQ0MsaUJBQWlCLEVBQUs7b0JBQzFELElBQU1DLFVBQVUsR0FBR0QsaUJBQWlCLENBQUNFLGtCQUFrQixFQUFFLEFBQUM7b0JBRTFELE9BQU9ELFVBQVUsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLEFBQUM7Z0JBRVQsT0FBT0gsV0FBVyxDQUFDO1lBQ3JCLENBQUM7Ozs7WUFFTUssR0FBeUIsRUFBekJBLDJCQUF5QjttQkFBaEMsU0FBT0EseUJBQXlCLENBQUNDLFFBQVEsRUFBRVgsVUFBVSxFQUFFO2dCQUFFLE9BQU9ZLFlBQWUsUUFBQSxDQUFDRix5QkFBeUIsQ0FkdEZaLGtCQUFrQixFQWN5RmEsUUFBUSxFQUFFWCxVQUFVLENBQUMsQ0FBQztZQUFDLENBQUM7OztXQWRuSUYsa0JBQWtCO0NBZXRDLENBZitDYyxZQUFlLFFBQUEsQ0FlOUQifQ==