"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _name = _interopRequireDefault(require("../node/name"));
var _name1 = _interopRequireDefault(require("../definition/name"));
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
var NameRule = /*#__PURE__*/ function(Rule) {
    _inherits(NameRule, Rule);
    var _super = _createSuper(NameRule);
    function NameRule() {
        _classCallCheck(this, NameRule);
        var nameDefinition = new _name1.default(), name = _ruleNames.NameRuleName, definitions = [
            nameDefinition
        ], Node = _name.default;
        return _super.call(this, name, definitions, Node);
    }
    return NameRule;
}(_rule.default);
exports.default = NameRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9uYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IE5hbWVOb2RlIGZyb20gXCIuLi9ub2RlL25hbWVcIjtcbmltcG9ydCBOYW1lRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9uYW1lXCI7XG5cbmltcG9ydCB7IE5hbWVSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmFtZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZURlZmluaXRpb24gPSBuZXcgTmFtZURlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gTmFtZVJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbmFtZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOYW1lTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5hbWVSdWxlIiwibmFtZURlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVLLEdBQVMsQ0FBVCxLQUFTO0FBQ0wsR0FBYyxDQUFkLEtBQWM7QUFDUixHQUFvQixDQUFwQixNQUFvQjtBQUVsQixHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdEJBLFFBQVEsaUJBQWQsUUFBUTtjQUFGQSxRQUFROzhCQUFSQSxRQUFRO2FBQVJBLFFBQVE7OEJBQVJBLFFBQVE7UUFFekIsR0FBSyxDQUFDQyxjQUFjLEdBQUcsR0FBRyxDQU5ILE1BQW9CLFlBT3JDQyxJQUFJLEdBTGUsVUFBYyxlQU1qQ0MsV0FBVyxHQUFHLENBQUM7WUFDYkYsY0FBYztRQUNoQixDQUFDLEVBQ0RHLElBQUksR0FaTyxLQUFjO2lDQWN6QkYsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLElBQUk7O1dBVFpKLFFBQVE7RUFOWixLQUFTO2tCQU1MQSxRQUFRIn0=