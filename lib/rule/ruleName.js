"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _name = _interopRequireDefault(require("../definition/name"));
var _ruleName = _interopRequireDefault(require("../bnf/node/ruleName"));
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
var RuleNameRule = /*#__PURE__*/ function(Rule) {
    _inherits(RuleNameRule, Rule);
    var _super = _createSuper(RuleNameRule);
    function RuleNameRule() {
        _classCallCheck(this, RuleNameRule);
        var nameDefinition = new _name.default(), name = _ruleNames.RuleNameRuleName, definitions = [
            nameDefinition ///
        ], Node = _ruleName.default;
        return _super.call(this, name, definitions, Node);
    }
    return RuleNameRule;
}(_rule.default);
exports.default = RuleNameRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3J1bGVOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IE5hbWVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL25hbWVcIjtcbmltcG9ydCBSdWxlTmFtZUJORk5vZGUgZnJvbSBcIi4uL2JuZi9ub2RlL3J1bGVOYW1lXCI7XG5cbmltcG9ydCB7IFJ1bGVOYW1lUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOYW1lUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lRGVmaW5pdGlvbiA9IG5ldyBOYW1lRGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5hbWUgPSBSdWxlTmFtZVJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbmFtZURlZmluaXRpb24gIC8vL1xuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFJ1bGVOYW1lQk5GTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGVOYW1lUnVsZSIsIm5hbWVEZWZpbml0aW9uIiwiTmFtZURlZmluaXRpb24iLCJuYW1lIiwiUnVsZU5hbWVSdWxlTmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIlJ1bGVOYW1lQk5GTm9kZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRUssR0FBUyxDQUFULEtBQVM7QUFDQyxHQUFvQixDQUFwQixLQUFvQjtBQUNuQixHQUFzQixDQUF0QixTQUFzQjtBQUVqQixHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFMUJBLFlBQVksaUJBQWxCLFFBQVE7OzthQUFGQSxZQUFZOztRQUU3QixHQUFLLENBQUNDLGNBQWMsR0FBRyxHQUFHLENBQUNDLEtBQWMsWUFDbkNDLElBQUksR0FBR0MsVUFBZ0IsbUJBQ3ZCQyxXQUFXLEdBQUcsQ0FBQztZQUNiSixjQUFjLEFBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1FBQ3JCLENBQUMsRUFDREssSUFBSSxHQUFHQyxTQUFlO2lDQUV0QkosSUFBSSxFQUFFRSxXQUFXLEVBQUVDLElBQUk7OztFQVRTRSxLQUFJO2tCQUF6QlIsWUFBWSJ9