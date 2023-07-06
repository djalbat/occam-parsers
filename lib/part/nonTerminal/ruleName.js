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
            value: function parse(nodes, state, callback) {
                var parsed;
                var rule = this.findRule(state);
                parsed = rule !== null ? rule.parse(nodes, state, callback) : null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBSdWxlTmFtZVBhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IGVsbGlwc2lzIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZU5hbWVQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IodHlwZSwgbG9va0FoZWFkLCBydWxlTmFtZSkge1xuICAgIHN1cGVyKHR5cGUsIGxvb2tBaGVhZCk7XG5cbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gIH1cbiAgXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgaXNSdWxlTmFtZVBhcnQoKSB7XG4gICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gdHJ1ZTtcblxuICAgIHJldHVybiBydWxlTmFtZVBhcnQ7XG4gIH1cblxuICBmaW5kUnVsZShzdGF0ZSkge1xuICAgIGNvbnN0IHJ1bGVNYXAgPSBzdGF0ZS5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVNYXBbdGhpcy5ydWxlTmFtZV0gfHwgbnVsbDsgIC8vL1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmZpbmRSdWxlKHN0YXRlKTtcblxuICAgIHBhcnNlZCA9IChydWxlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICBydWxlLnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIDpcbiAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBsb29rQWhlYWQgPSB0aGlzLmlzTG9va0FoZWFkKCksXG4gICAgICAgICAgbG9va0FoZWFkU3RyaW5nID0gbG9va0FoZWFkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsbGlwc2lzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHN0cmluZyA9IGAke3RoaXMucnVsZU5hbWV9JHtsb29rQWhlYWRTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZSA9IFJ1bGVOYW1lUGFydFR5cGUsXG4gICAgICAgICAgbG9va0FoZWFkID0gZmFsc2UsXG4gICAgICAgICAgcnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydCh0eXBlLCBsb29rQWhlYWQsIHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBydWxlTmFtZVBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvb2tBaGVhZEFuZFJ1bGVOYW1lKGxvb2tBaGVhZCwgcnVsZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gUnVsZU5hbWVQYXJ0VHlwZSxcbiAgICAgICAgICBydWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHR5cGUsIGxvb2tBaGVhZCwgcnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSdWxlTmFtZVBhcnQiLCJlbGxpcHNpcyIsInNwZWNpYWxTeW1ib2xzIiwidHlwZSIsImxvb2tBaGVhZCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJpc1J1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydCIsImZpbmRSdWxlIiwic3RhdGUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInJ1bGUiLCJwYXJzZSIsIm5vZGVzIiwiY2FsbGJhY2siLCJwYXJzZWQiLCJhc1N0cmluZyIsImlzTG9va0FoZWFkIiwibG9va0FoZWFkU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwic3RyaW5nIiwiZnJvbVJ1bGVOYW1lIiwiUnVsZU5hbWVQYXJ0VHlwZSIsImZyb21Mb29rQWhlYWRBbmRSdWxlTmFtZSIsIk5vblRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7MkJBVFU7a0VBRUg7eUJBRUM7eUJBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakMsSUFBTSxBQUFFQyxXQUFhQywyQkFBYyxDQUEzQkQ7QUFFTyxJQUFBLEFBQU1ELDZCQUFOO2NBQU1BOytCQUFBQTthQUFBQSxhQUNQRyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsUUFBUTtnQ0FEbEJMOztrQ0FFWEcsTUFBTUM7UUFFWixNQUFLQyxRQUFRLEdBQUdBOzs7a0JBSkNMOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWU7Z0JBRXJCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsS0FBSztnQkFDWixJQUFNQyxVQUFVRCxNQUFNRSxVQUFVLElBQzFCQyxPQUFPRixPQUFPLENBQUMsSUFBSSxDQUFDTixRQUFRLENBQUMsSUFBSSxNQUFPLEdBQUc7Z0JBRWpELE9BQU9RO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsS0FBSyxFQUFFTCxLQUFLLEVBQUVNLFFBQVE7Z0JBQzFCLElBQUlDO2dCQUVKLElBQU1KLE9BQU8sSUFBSSxDQUFDSixRQUFRLENBQUNDO2dCQUUzQk8sU0FBUyxBQUFDSixTQUFTLE9BQ1JBLEtBQUtDLEtBQUssQ0FBQ0MsT0FBT0wsT0FBT00sWUFDdkI7Z0JBRWIsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNZCxZQUFZLElBQUksQ0FBQ2UsV0FBVyxJQUM1QkMsa0JBQWtCaEIsWUFDRUgsV0FDRW9CLHVCQUFZLEVBQ2xDQyxTQUFTLEFBQUMsR0FBa0JGLE9BQWhCLElBQUksQ0FBQ2YsUUFBUSxFQUFtQixPQUFoQmU7Z0JBRWxDLE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYWxCLFFBQVE7Z0JBQzFCLElBQU1GLE9BQU9xQiwyQkFBZ0IsRUFDdkJwQixZQUFZLE9BQ1pJLGVBQWUsSUFqREpSLGFBaURxQkcsTUFBTUMsV0FBV0M7Z0JBRXZELE9BQU9HO1lBQ1Q7OztZQUVPaUIsS0FBQUE7bUJBQVAsU0FBT0EseUJBQXlCckIsU0FBUyxFQUFFQyxRQUFRO2dCQUNqRCxJQUFNRixPQUFPcUIsMkJBQWdCLEVBQ3ZCaEIsZUFBZSxJQXhESlIsYUF3RHFCRyxNQUFNQyxXQUFXQztnQkFFdkQsT0FBT0c7WUFDVDs7O1dBM0RtQlI7RUFBcUIwQixvQkFBZSJ9