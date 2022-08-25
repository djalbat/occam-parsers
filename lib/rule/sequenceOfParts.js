"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SequenceOfPartsRule;
    }
});
var _rule = /*#__PURE__*/ _interopRequireDefault(require("../rule"));
var _sequenceOfParts = /*#__PURE__*/ _interopRequireDefault(require("../node/bnf/sequenceOfParts"));
var _sequenceOfParts1 = /*#__PURE__*/ _interopRequireDefault(require("../definition/sequenceOfParts"));
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
var SequenceOfPartsRule = /*#__PURE__*/ function(Rule) {
    _inherits(SequenceOfPartsRule, Rule);
    var _super = _createSuper(SequenceOfPartsRule);
    function SequenceOfPartsRule() {
        _classCallCheck(this, SequenceOfPartsRule);
        var name = _ruleNames.sequenceOfPartsRuleName, sequenceOfPartsDefinition = new _sequenceOfParts1.default(), ambiguous = false, definitions = [
            sequenceOfPartsDefinition
        ], Node = _sequenceOfParts.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return SequenceOfPartsRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3NlcXVlbmNlT2ZQYXJ0cy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNCTkZOb2RlIGZyb20gXCIuLi9ub2RlL2JuZi9zZXF1ZW5jZU9mUGFydHNcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3NlcXVlbmNlT2ZQYXJ0c1wiO1xuXG5pbXBvcnQgeyBzZXF1ZW5jZU9mUGFydHNSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VxdWVuY2VPZlBhcnRzUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gc2VxdWVuY2VPZlBhcnRzUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24gPSBuZXcgU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbigpLFxuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgc2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFNlcXVlbmNlT2ZQYXJ0c0JORk5vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlNlcXVlbmNlT2ZQYXJ0c1J1bGUiLCJuYW1lIiwic2VxdWVuY2VPZlBhcnRzUnVsZU5hbWUiLCJzZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uIiwiU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9kZSIsIlNlcXVlbmNlT2ZQYXJ0c0JORk5vZGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFRUUEsbUJBQW1COzs7eURBTnZCLFNBQVM7b0VBQ1MsNkJBQTZCO3FFQUMxQiwrQkFBK0I7eUJBRTdCLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZDLElBQUEsQUFBTUEsbUJBQW1CLGlCQUF6QjtjQUFNQSxtQkFBbUI7OEJBQW5CQSxtQkFBbUI7YUFBbkJBLG1CQUFtQjs4QkFBbkJBLG1CQUFtQjtRQUVwQyxJQUFNQyxJQUFJLEdBQUdDLFVBQXVCLHdCQUFBLEVBQzlCQyx5QkFBeUIsR0FBRyxJQUFJQyxpQkFBeUIsUUFBQSxFQUFFLEVBQzNEQyxTQUFTLEdBQUcsS0FBSyxFQUNqQkMsV0FBVyxHQUFHO1lBQ1pILHlCQUF5QjtTQUMxQixFQUNESSxJQUFJLEdBQUdDLGdCQUFzQixRQUFBLEFBQUM7aUNBRTlCUCxJQUFJLEVBQUVJLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxJQUFJOztXQVZ2QlAsbUJBQW1CO0NBWXZDLENBWmdEUyxLQUFJLFFBQUEsQ0FZcEQifQ==