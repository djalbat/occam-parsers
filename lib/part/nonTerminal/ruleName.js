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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var ellipsis = _occamlexers.specialSymbols.ellipsis;
var RuleNamePart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(RuleNamePart, NonTerminalPart);
    function RuleNamePart(type, lookAhead, ruleName) {
        _class_call_check(this, RuleNamePart);
        var _this;
        _this = _call_super(this, RuleNamePart, [
            type,
            lookAhead
        ]);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBSdWxlTmFtZVBhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IGVsbGlwc2lzIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZU5hbWVQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IodHlwZSwgbG9va0FoZWFkLCBydWxlTmFtZSkge1xuICAgIHN1cGVyKHR5cGUsIGxvb2tBaGVhZCk7XG5cbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gIH1cbiAgXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgaXNSdWxlTmFtZVBhcnQoKSB7XG4gICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gdHJ1ZTtcblxuICAgIHJldHVybiBydWxlTmFtZVBhcnQ7XG4gIH1cblxuICBmaW5kUnVsZShzdGF0ZSkge1xuICAgIGNvbnN0IHJ1bGVNYXAgPSBzdGF0ZS5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVNYXBbdGhpcy5ydWxlTmFtZV0gfHwgbnVsbDsgIC8vL1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3QgcnVsZSA9IHRoaXMuZmluZFJ1bGUoc3RhdGUpO1xuXG4gICAgcGFyc2VkID0gKHJ1bGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgIHJ1bGUucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSA6XG4gICAgICAgICAgICAgICAgIGZhbHNlO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IGxvb2tBaGVhZCA9IHRoaXMuaXNMb29rQWhlYWQoKSxcbiAgICAgICAgICBsb29rQWhlYWRTdHJpbmcgPSBsb29rQWhlYWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxsaXBzaXMgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgc3RyaW5nID0gYCR7dGhpcy5ydWxlTmFtZX0ke2xvb2tBaGVhZFN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gUnVsZU5hbWVQYXJ0VHlwZSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBydWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHR5cGUsIGxvb2tBaGVhZCwgcnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9va0FoZWFkQW5kUnVsZU5hbWUobG9va0FoZWFkLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IHR5cGUgPSBSdWxlTmFtZVBhcnRUeXBlLFxuICAgICAgICAgIHJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQodHlwZSwgbG9va0FoZWFkLCBydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcnVsZU5hbWVQYXJ0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiUnVsZU5hbWVQYXJ0IiwiZWxsaXBzaXMiLCJzcGVjaWFsU3ltYm9scyIsInR5cGUiLCJsb29rQWhlYWQiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiaXNSdWxlTmFtZVBhcnQiLCJydWxlTmFtZVBhcnQiLCJmaW5kUnVsZSIsInN0YXRlIiwicnVsZU1hcCIsImdldFJ1bGVNYXAiLCJydWxlIiwicGFyc2UiLCJub2RlcyIsImNhbGxiYWNrIiwiY2FsbEFoZWFkIiwicGFyc2VkIiwiYXNTdHJpbmciLCJpc0xvb2tBaGVhZCIsImxvb2tBaGVhZFN0cmluZyIsIkVNUFRZX1NUUklORyIsInN0cmluZyIsImZyb21SdWxlTmFtZSIsIlJ1bGVOYW1lUGFydFR5cGUiLCJmcm9tTG9va0FoZWFkQW5kUnVsZU5hbWUiLCJOb25UZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7OzJCQVRVO2tFQUVIO3lCQUVDO3lCQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpDLElBQU0sQUFBRUMsV0FBYUMsMkJBQWMsQ0FBM0JEO0FBRU8sSUFBQSxBQUFNRCw2QkFBTjtjQUFNQTthQUFBQSxhQUNQRyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsUUFBUTtnQ0FEbEJMOztnQkFFakIsa0JBRmlCQTtZQUVYRztZQUFNQzs7UUFFWixNQUFLQyxRQUFRLEdBQUdBOzs7a0JBSkNMOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWU7Z0JBRXJCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsS0FBSztnQkFDWixJQUFNQyxVQUFVRCxNQUFNRSxVQUFVLElBQzFCQyxPQUFPRixPQUFPLENBQUMsSUFBSSxDQUFDTixRQUFRLENBQUMsSUFBSSxNQUFPLEdBQUc7Z0JBRWpELE9BQU9RO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsS0FBSyxFQUFFTCxLQUFLLEVBQUVNLFFBQVEsRUFBRUMsU0FBUztnQkFDckMsSUFBSUM7Z0JBRUosSUFBTUwsT0FBTyxJQUFJLENBQUNKLFFBQVEsQ0FBQ0M7Z0JBRTNCUSxTQUFTLEFBQUNMLFNBQVMsT0FDUkEsS0FBS0MsS0FBSyxDQUFDQyxPQUFPTCxPQUFPTSxVQUFVQyxhQUNqQztnQkFFYixPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1mLFlBQVksSUFBSSxDQUFDZ0IsV0FBVyxJQUM1QkMsa0JBQWtCakIsWUFDRUgsV0FDRXFCLHVCQUFZLEVBQ2xDQyxTQUFTLEFBQUMsR0FBa0JGLE9BQWhCLElBQUksQ0FBQ2hCLFFBQVEsRUFBbUIsT0FBaEJnQjtnQkFFbEMsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxhQUFhbkIsUUFBUTtnQkFDMUIsSUFBTUYsT0FBT3NCLDJCQUFnQixFQUN2QnJCLFlBQVksT0FDWkksZUFBZSxJQWpESlIsYUFpRHFCRyxNQUFNQyxXQUFXQztnQkFFdkQsT0FBT0c7WUFDVDs7O1lBRU9rQixLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJ0QixTQUFTLEVBQUVDLFFBQVE7Z0JBQ2pELElBQU1GLE9BQU9zQiwyQkFBZ0IsRUFDdkJqQixlQUFlLElBeERKUixhQXdEcUJHLE1BQU1DLFdBQVdDO2dCQUV2RCxPQUFPRztZQUNUOzs7V0EzRG1CUjtFQUFxQjJCLG9CQUFlIn0=