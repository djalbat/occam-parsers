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
    function RuleNamePart(type, callAAhead, ruleName) {
        _class_call_check(this, RuleNamePart);
        var _this;
        _this = _call_super(this, RuleNamePart, [
            type,
            callAAhead
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
                var callAAhead = this.isCallAhead(), callAAheadString = callAAhead ? ellipsis : _constants.EMPTY_STRING, string = "".concat(this.ruleName).concat(callAAheadString);
                return string;
            }
        }
    ], [
        {
            key: "fromRuleName",
            value: function fromRuleName(ruleName) {
                var type = _partTypes.RuleNamePartType, callAAhead = false, ruleNamePart = new RuleNamePart(type, callAAhead, ruleName);
                return ruleNamePart;
            }
        },
        {
            key: "fromCallAheadAndRuleName",
            value: function fromCallAheadAndRuleName(callAAhead, ruleName) {
                var type = _partTypes.RuleNamePartType, ruleNamePart = new RuleNamePart(type, callAAhead, ruleName);
                return ruleNamePart;
            }
        }
    ]);
    return RuleNamePart;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBSdWxlTmFtZVBhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IGVsbGlwc2lzIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZU5hbWVQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IodHlwZSwgY2FsbEFBaGVhZCwgcnVsZU5hbWUpIHtcbiAgICBzdXBlcih0eXBlLCBjYWxsQUFoZWFkKTtcblxuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcbiAgfVxuICBcbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBpc1J1bGVOYW1lUGFydCgpIHtcbiAgICBjb25zdCBydWxlTmFtZVBhcnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbiAgfVxuXG4gIGZpbmRSdWxlKHN0YXRlKSB7XG4gICAgY29uc3QgcnVsZU1hcCA9IHN0YXRlLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICBydWxlID0gcnVsZU1hcFt0aGlzLnJ1bGVOYW1lXSB8fCBudWxsOyAgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBydWxlID0gdGhpcy5maW5kUnVsZShzdGF0ZSk7XG5cbiAgICBwYXJzZWQgPSAocnVsZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgcnVsZS5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIDpcbiAgICAgICAgICAgICAgICAgZmFsc2U7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgY2FsbEFBaGVhZCA9IHRoaXMuaXNDYWxsQWhlYWQoKSxcbiAgICAgICAgICBjYWxsQUFoZWFkU3RyaW5nID0gY2FsbEFBaGVhZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGxpcHNpcyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBzdHJpbmcgPSBgJHt0aGlzLnJ1bGVOYW1lfSR7Y2FsbEFBaGVhZFN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gUnVsZU5hbWVQYXJ0VHlwZSxcbiAgICAgICAgICBjYWxsQUFoZWFkID0gZmFsc2UsXG4gICAgICAgICAgcnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydCh0eXBlLCBjYWxsQUFoZWFkLCBydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcnVsZU5hbWVQYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21DYWxsQWhlYWRBbmRSdWxlTmFtZShjYWxsQUFoZWFkLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IHR5cGUgPSBSdWxlTmFtZVBhcnRUeXBlLFxuICAgICAgICAgIHJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQodHlwZSwgY2FsbEFBaGVhZCwgcnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGVOYW1lUGFydCIsImVsbGlwc2lzIiwic3BlY2lhbFN5bWJvbHMiLCJ0eXBlIiwiY2FsbEFBaGVhZCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJpc1J1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydCIsImZpbmRSdWxlIiwic3RhdGUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInJ1bGUiLCJwYXJzZSIsIm5vZGVzIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJhc1N0cmluZyIsImlzQ2FsbEFoZWFkIiwiY2FsbEFBaGVhZFN0cmluZyIsIkVNUFRZX1NUUklORyIsInN0cmluZyIsImZyb21SdWxlTmFtZSIsIlJ1bGVOYW1lUGFydFR5cGUiLCJmcm9tQ2FsbEFoZWFkQW5kUnVsZU5hbWUiLCJOb25UZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7OzJCQVRVO2tFQUVIO3lCQUVDO3lCQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpDLElBQU0sQUFBRUMsV0FBYUMsMkJBQWMsQ0FBM0JEO0FBRU8sSUFBQSxBQUFNRCw2QkFBTjtjQUFNQTthQUFBQSxhQUNQRyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsUUFBUTtnQ0FEbkJMOztnQkFFakIsa0JBRmlCQTtZQUVYRztZQUFNQzs7UUFFWixNQUFLQyxRQUFRLEdBQUdBOzs7a0JBSkNMOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWU7Z0JBRXJCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsS0FBSztnQkFDWixJQUFNQyxVQUFVRCxNQUFNRSxVQUFVLElBQzFCQyxPQUFPRixPQUFPLENBQUMsSUFBSSxDQUFDTixRQUFRLENBQUMsSUFBSSxNQUFPLEdBQUc7Z0JBRWpELE9BQU9RO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsS0FBSyxFQUFFTCxLQUFLLEVBQUVNLFFBQVEsRUFBRUMsU0FBUztnQkFDckMsSUFBSUM7Z0JBRUosSUFBTUwsT0FBTyxJQUFJLENBQUNKLFFBQVEsQ0FBQ0M7Z0JBRTNCUSxTQUFTLEFBQUNMLFNBQVMsT0FDUkEsS0FBS0MsS0FBSyxDQUFDQyxPQUFPTCxPQUFPTSxVQUFVQyxhQUNqQztnQkFFYixPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1mLGFBQWEsSUFBSSxDQUFDZ0IsV0FBVyxJQUM3QkMsbUJBQW1CakIsYUFDQ0gsV0FDRXFCLHVCQUFZLEVBQ2xDQyxTQUFTLEFBQUMsR0FBa0JGLE9BQWhCLElBQUksQ0FBQ2hCLFFBQVEsRUFBb0IsT0FBakJnQjtnQkFFbEMsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxhQUFhbkIsUUFBUTtnQkFDMUIsSUFBTUYsT0FBT3NCLDJCQUFnQixFQUN2QnJCLGFBQWEsT0FDYkksZUFBZSxJQWpESlIsYUFpRHFCRyxNQUFNQyxZQUFZQztnQkFFeEQsT0FBT0c7WUFDVDs7O1lBRU9rQixLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJ0QixVQUFVLEVBQUVDLFFBQVE7Z0JBQ2xELElBQU1GLE9BQU9zQiwyQkFBZ0IsRUFDdkJqQixlQUFlLElBeERKUixhQXdEcUJHLE1BQU1DLFlBQVlDO2dCQUV4RCxPQUFPRztZQUNUOzs7V0EzRG1CUjtFQUFxQjJCLG9CQUFlIn0=