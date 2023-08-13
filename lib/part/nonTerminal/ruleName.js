"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleNamePart;
    }
});
var _occamlexers = require("occam-lexers");
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal"));
var _constants = require("../../constants");
var _partTypes = require("../../partTypes");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var ellipsis = _occamlexers.specialSymbols.ellipsis;
var RuleNamePart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(RuleNamePart, NonTerminalPart);
    var _super = _create_super(RuleNamePart);
    function RuleNamePart(type, lookAhead, ruleName) {
        _class_call_check(this, RuleNamePart);
        var _this;
        _this = _super.call(this, type, lookAhead);
        _this.ruleName = ruleName;
        return _this;
    }
    _create_class(RuleNamePart, [
        {
            key: "getRuleName",
            value: function getRuleName() {
                return this.ruleName;
            }
        },
        {
            key: "isRuleNamePart",
            value: function isRuleNamePart() {
                var ruleNamePart = true;
                return ruleNamePart;
            }
        },
        {
            key: "findRule",
            value: function findRule(state) {
                var ruleMap = state.getRuleMap(), rule = ruleMap[this.ruleName] || null; ///
                return rule;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback, callAhead) {
                var parsed;
                var rule = this.findRule(state);
                parsed = rule !== null ? rule.parse(nodes, state, callback, callAhead) : false;
                return parsed;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var lookAhead = this.isLookAhead(), lookAheadString = lookAhead ? ellipsis : _constants.EMPTY_STRING, string = "".concat(this.ruleName).concat(lookAheadString);
                return string;
            }
        }
    ], [
        {
            key: "fromRuleName",
            value: function fromRuleName(ruleName) {
                var type = _partTypes.RuleNamePartType, lookAhead = false, ruleNamePart = new RuleNamePart(type, lookAhead, ruleName);
                return ruleNamePart;
            }
        },
        {
            key: "fromLookAheadAndRuleName",
            value: function fromLookAheadAndRuleName(lookAhead, ruleName) {
                var type = _partTypes.RuleNamePartType, ruleNamePart = new RuleNamePart(type, lookAhead, ruleName);
                return ruleNamePart;
            }
        }
    ]);
    return RuleNamePart;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBSdWxlTmFtZVBhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IGVsbGlwc2lzIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZU5hbWVQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IodHlwZSwgbG9va0FoZWFkLCBydWxlTmFtZSkge1xuICAgIHN1cGVyKHR5cGUsIGxvb2tBaGVhZCk7XG5cbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gIH1cbiAgXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgaXNSdWxlTmFtZVBhcnQoKSB7XG4gICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gdHJ1ZTtcblxuICAgIHJldHVybiBydWxlTmFtZVBhcnQ7XG4gIH1cblxuICBmaW5kUnVsZShzdGF0ZSkge1xuICAgIGNvbnN0IHJ1bGVNYXAgPSBzdGF0ZS5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVNYXBbdGhpcy5ydWxlTmFtZV0gfHwgbnVsbDsgIC8vL1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3QgcnVsZSA9IHRoaXMuZmluZFJ1bGUoc3RhdGUpO1xuXG4gICAgcGFyc2VkID0gKHJ1bGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgIHJ1bGUucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSA6XG4gICAgICAgICAgICAgICAgIGZhbHNlO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IGxvb2tBaGVhZCA9IHRoaXMuaXNMb29rQWhlYWQoKSxcbiAgICAgICAgICBsb29rQWhlYWRTdHJpbmcgPSBsb29rQWhlYWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxsaXBzaXMgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgc3RyaW5nID0gYCR7dGhpcy5ydWxlTmFtZX0ke2xvb2tBaGVhZFN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gUnVsZU5hbWVQYXJ0VHlwZSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBydWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHR5cGUsIGxvb2tBaGVhZCwgcnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9va0FoZWFkQW5kUnVsZU5hbWUobG9va0FoZWFkLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IHR5cGUgPSBSdWxlTmFtZVBhcnRUeXBlLFxuICAgICAgICAgIHJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQodHlwZSwgbG9va0FoZWFkLCBydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcnVsZU5hbWVQYXJ0O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJ1bGVOYW1lUGFydCIsImVsbGlwc2lzIiwic3BlY2lhbFN5bWJvbHMiLCJ0eXBlIiwibG9va0FoZWFkIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImlzUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0IiwiZmluZFJ1bGUiLCJzdGF0ZSIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwicnVsZSIsInBhcnNlIiwibm9kZXMiLCJjYWxsYmFjayIsImNhbGxBaGVhZCIsInBhcnNlZCIsImFzU3RyaW5nIiwiaXNMb29rQWhlYWQiLCJsb29rQWhlYWRTdHJpbmciLCJFTVBUWV9TVFJJTkciLCJzdHJpbmciLCJmcm9tUnVsZU5hbWUiLCJSdWxlTmFtZVBhcnRUeXBlIiwiZnJvbUxvb2tBaGVhZEFuZFJ1bGVOYW1lIiwiTm9uVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7OzsyQkFUVTtrRUFFSDt5QkFFQzt5QkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQyxJQUFNLEFBQUVDLFdBQWFDLDJCQUFjLENBQTNCRDtBQUVPLElBQUEsQUFBTUQsNkJBQU47Y0FBTUE7K0JBQUFBO2FBQUFBLGFBQ1BHLElBQUksRUFBRUMsU0FBUyxFQUFFQyxRQUFRO2dDQURsQkw7O2tDQUVYRyxNQUFNQztRQUVaLE1BQUtDLFFBQVEsR0FBR0E7OztrQkFKQ0w7O1lBT25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFFBQVE7WUFDdEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZUFBZTtnQkFFckIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxLQUFLO2dCQUNaLElBQU1DLFVBQVVELE1BQU1FLFVBQVUsSUFDMUJDLE9BQU9GLE9BQU8sQ0FBQyxJQUFJLENBQUNOLFFBQVEsQ0FBQyxJQUFJLE1BQU8sR0FBRztnQkFFakQsT0FBT1E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVMLEtBQUssRUFBRU0sUUFBUSxFQUFFQyxTQUFTO2dCQUNyQyxJQUFJQztnQkFFSixJQUFNTCxPQUFPLElBQUksQ0FBQ0osUUFBUSxDQUFDQztnQkFFM0JRLFNBQVMsQUFBQ0wsU0FBUyxPQUNSQSxLQUFLQyxLQUFLLENBQUNDLE9BQU9MLE9BQU9NLFVBQVVDLGFBQ2pDO2dCQUViLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWYsWUFBWSxJQUFJLENBQUNnQixXQUFXLElBQzVCQyxrQkFBa0JqQixZQUNFSCxXQUNFcUIsdUJBQVksRUFDbENDLFNBQVMsQUFBQyxHQUFrQkYsT0FBaEIsSUFBSSxDQUFDaEIsUUFBUSxFQUFtQixPQUFoQmdCO2dCQUVsQyxPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFuQixRQUFRO2dCQUMxQixJQUFNRixPQUFPc0IsMkJBQWdCLEVBQ3ZCckIsWUFBWSxPQUNaSSxlQUFlLElBakRKUixhQWlEcUJHLE1BQU1DLFdBQVdDO2dCQUV2RCxPQUFPRztZQUNUOzs7WUFFT2tCLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QnRCLFNBQVMsRUFBRUMsUUFBUTtnQkFDakQsSUFBTUYsT0FBT3NCLDJCQUFnQixFQUN2QmpCLGVBQWUsSUF4REpSLGFBd0RxQkcsTUFBTUMsV0FBV0M7Z0JBRXZELE9BQU9HO1lBQ1Q7OztXQTNEbUJSO0VBQXFCMkIsb0JBQWUifQ==