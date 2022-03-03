"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _definitions = _interopRequireDefault(require("../bnf/node/definitions"));
var _definitions1 = _interopRequireDefault(require("../definition/definitions"));
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
var DefinitionsRule = /*#__PURE__*/ function(Rule) {
    _inherits(DefinitionsRule, Rule);
    var _super = _createSuper(DefinitionsRule);
    function DefinitionsRule() {
        _classCallCheck(this, DefinitionsRule);
        var definitionsDefinition = new _definitions1.default(), name = _ruleNames.DefinitionsRuleName, definitions = [
            definitionsDefinition
        ], Node = _definitions.default;
        return _super.call(this, name, definitions, Node);
    }
    return DefinitionsRule;
}(_rule.default);
exports.default = DefinitionsRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2RlZmluaXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IERlZmluaXRpb25zQk5GTm9kZSBmcm9tIFwiLi4vYm5mL25vZGUvZGVmaW5pdGlvbnNcIjtcbmltcG9ydCBEZWZpbml0aW9uc0RlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vZGVmaW5pdGlvbnNcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbnNSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbnNSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zRGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uc0RlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gRGVmaW5pdGlvbnNSdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGRlZmluaXRpb25zRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IERlZmluaXRpb25zQk5GTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRlZmluaXRpb25zUnVsZSIsImRlZmluaXRpb25zRGVmaW5pdGlvbiIsIkRlZmluaXRpb25zRGVmaW5pdGlvbiIsIm5hbWUiLCJEZWZpbml0aW9uc1J1bGVOYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwiRGVmaW5pdGlvbnNCTkZOb2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFSyxHQUFTLENBQVQsS0FBUztBQUNLLEdBQXlCLENBQXpCLFlBQXlCO0FBQ3RCLEdBQTJCLENBQTNCLGFBQTJCO0FBRXpCLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU3QkEsZUFBZSxpQkFBckIsUUFBUTs7O2FBQUZBLGVBQWU7O1FBRWhDLEdBQUssQ0FBQ0MscUJBQXFCLEdBQUcsR0FBRyxDQUFDQyxhQUFxQixZQUNqREMsSUFBSSxHQUFHQyxVQUFtQixzQkFDMUJDLFdBQVcsR0FBRyxDQUFDO1lBQ2JKLHFCQUFxQjtRQUN2QixDQUFDLEVBQ0RLLElBQUksR0FBR0MsWUFBa0I7aUNBRXpCSixJQUFJLEVBQUVFLFdBQVcsRUFBRUMsSUFBSTs7O0VBVFlFLEtBQUk7a0JBQTVCUixlQUFlIn0=