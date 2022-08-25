"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ChoiceOfPartsRule;
    }
});
var _rule = /*#__PURE__*/ _interopRequireDefault(require("../rule"));
var _choiceOfParts = /*#__PURE__*/ _interopRequireDefault(require("../node/bnf/choiceOfParts"));
var _choiceOfParts1 = /*#__PURE__*/ _interopRequireDefault(require("../definition/choiceOfParts"));
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
var ChoiceOfPartsRule = /*#__PURE__*/ function(Rule) {
    _inherits(ChoiceOfPartsRule, Rule);
    var _super = _createSuper(ChoiceOfPartsRule);
    function ChoiceOfPartsRule() {
        _classCallCheck(this, ChoiceOfPartsRule);
        var name = _ruleNames.choiceOfPartsRuleName, choiceOfPartsDefinition = new _choiceOfParts1.default(), ambiguous = false, definitions = [
            choiceOfPartsDefinition
        ], Node = _choiceOfParts.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return ChoiceOfPartsRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2Nob2ljZU9mUGFydHMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgQ2hvaWNlT2ZQYXJ0c0JORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL2Nob2ljZU9mUGFydHNcIjtcbmltcG9ydCBDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9jaG9pY2VPZlBhcnRzXCI7XG5cbmltcG9ydCB7IGNob2ljZU9mUGFydHNSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hvaWNlT2ZQYXJ0c1J1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IGNob2ljZU9mUGFydHNSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24gPSBuZXcgQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24oKSxcbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGNob2ljZU9mUGFydHNEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gQ2hvaWNlT2ZQYXJ0c0JORk5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDaG9pY2VPZlBhcnRzUnVsZSIsIm5hbWUiLCJjaG9pY2VPZlBhcnRzUnVsZU5hbWUiLCJjaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiIsIkNob2ljZU9mUGFydHNEZWZpbml0aW9uIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwiQ2hvaWNlT2ZQYXJ0c0JORk5vZGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFRUUEsaUJBQWlCOzs7eURBTnJCLFNBQVM7a0VBQ08sMkJBQTJCO21FQUN4Qiw2QkFBNkI7eUJBRTNCLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQUEsQUFBTUEsaUJBQWlCLGlCQUF2QjtjQUFNQSxpQkFBaUI7OEJBQWpCQSxpQkFBaUI7YUFBakJBLGlCQUFpQjs4QkFBakJBLGlCQUFpQjtRQUVsQyxJQUFNQyxJQUFJLEdBQUdDLFVBQXFCLHNCQUFBLEVBQzVCQyx1QkFBdUIsR0FBRyxJQUFJQyxlQUF1QixRQUFBLEVBQUUsRUFDdkRDLFNBQVMsR0FBRyxLQUFLLEVBQ2pCQyxXQUFXLEdBQUc7WUFDWkgsdUJBQXVCO1NBQ3hCLEVBQ0RJLElBQUksR0FBR0MsY0FBb0IsUUFBQSxBQUFDO2lDQUU1QlAsSUFBSSxFQUFFSSxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsSUFBSTs7V0FWdkJQLGlCQUFpQjtDQVlyQyxDQVo4Q1MsS0FBSSxRQUFBLENBWWxEIn0=