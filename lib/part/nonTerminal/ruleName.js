"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));
var _constants = require("../../constants");
var _partTypes = require("../../partTypes");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
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
var exclamationMark = _occamLexers.specialSymbols.exclamationMark;
var RuleNamePart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(RuleNamePart, NonTerminalPart);
    var _super = _createSuper(RuleNamePart);
    function RuleNamePart(ruleName) {
        var lookAhead = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        _classCallCheck(this, RuleNamePart);
        var _this;
        var type = _partTypes.RuleNamePartType; ///
        _this = _super.call(this, type);
        _this.ruleName = ruleName;
        _this.lookAhead = lookAhead;
        return _this;
    }
    _createClass(RuleNamePart, [
        {
            key: "getRuleName",
            value: function getRuleName() {
                return this.ruleName;
            }
        },
        {
            key: "isLookAhead",
            value: function isLookAhead() {
                return this.lookAhead;
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
            key: "setLookAhead",
            value: function setLookAhead(lookAhead) {
                this.lookAhead = lookAhead;
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
                if (rule === null) {
                    parsed = false;
                } else {
                    var ruleNode = rule.parse(state, callback);
                    parsed = ruleNode !== null;
                    if (parsed) {
                        nodes.push(ruleNode);
                    }
                }
                return parsed;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var lookAheadString = this.lookAhead ? exclamationMark : _constants.EMPTY_STRING, string = "".concat(this.ruleName).concat(lookAheadString);
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(RuleNamePart.prototype), "clone", this).call(this, RuleNamePart, this.ruleName, this.lookAhead);
            }
        }
    ]);
    return RuleNamePart;
}(_nonTerminal.default);
exports.default = RuleNamePart;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBSdWxlTmFtZVBhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IGV4Y2xhbWF0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOYW1lUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBsb29rQWhlYWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHR5cGUgPSBSdWxlTmFtZVBhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuXG4gICAgdGhpcy5sb29rQWhlYWQgPSBsb29rQWhlYWQ7XG4gIH1cbiAgXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgaXNMb29rQWhlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9va0FoZWFkO1xuICB9XG5cbiAgaXNSdWxlTmFtZVBhcnQoKSB7XG4gICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gdHJ1ZTtcblxuICAgIHJldHVybiBydWxlTmFtZVBhcnQ7XG4gIH1cblxuICBzZXRMb29rQWhlYWQobG9va0FoZWFkKSB7XG4gICAgdGhpcy5sb29rQWhlYWQgPSBsb29rQWhlYWQ7XG4gIH1cblxuICBmaW5kUnVsZShzdGF0ZSkge1xuICAgIGNvbnN0IHJ1bGVNYXAgPSBzdGF0ZS5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVNYXBbdGhpcy5ydWxlTmFtZV0gfHwgbnVsbDsgIC8vL1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmZpbmRSdWxlKHN0YXRlKTtcblxuICAgIGlmIChydWxlID09PSBudWxsKSB7XG4gICAgICBwYXJzZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcnVsZU5vZGUgPSBydWxlLnBhcnNlKHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICAgIHBhcnNlZCA9IChydWxlTm9kZSAhPT0gbnVsbCk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgbm9kZXMucHVzaChydWxlTm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IGxvb2tBaGVhZFN0cmluZyA9IHRoaXMubG9va0FoZWFkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2xhbWF0aW9uTWFyayA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBzdHJpbmcgPSBgJHt0aGlzLnJ1bGVOYW1lfSR7bG9va0FoZWFkU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShSdWxlTmFtZVBhcnQsIHRoaXMucnVsZU5hbWUsIHRoaXMubG9va0FoZWFkKTsgfVxufVxuIl0sIm5hbWVzIjpbImV4Y2xhbWF0aW9uTWFyayIsInNwZWNpYWxTeW1ib2xzIiwiUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWUiLCJsb29rQWhlYWQiLCJ0eXBlIiwiUnVsZU5hbWVQYXJ0VHlwZSIsImdldFJ1bGVOYW1lIiwiaXNMb29rQWhlYWQiLCJpc1J1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydCIsInNldExvb2tBaGVhZCIsImZpbmRSdWxlIiwic3RhdGUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInJ1bGUiLCJwYXJzZSIsIm5vZGVzIiwiY2FsbGJhY2siLCJwYXJzZWQiLCJydWxlTm9kZSIsInB1c2giLCJhc1N0cmluZyIsImxvb2tBaGVhZFN0cmluZyIsIkVNUFRZX1NUUklORyIsInN0cmluZyIsImNsb25lIiwiTm9uVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0U7d0I7QUFFa0IsR0FBYyxDQUFkLFlBQWM7QUFFakIsR0FBd0IsQ0FBeEIsWUFBd0I7QUFFdkIsR0FBaUIsQ0FBakIsVUFBaUI7QUFDYixHQUFpQixDQUFqQixVQUFpQjs7Ozs7Ozs7Ozs7Ozs7OzhEO3NDOzZEO2lFOzs7O3dFO2dFOzs7OzswQjs7Ozs7Ozs7OztTOzs7Ozs7O0s7Ozs7Ozs7Ozs7Ozs7TTt5RDs7Ozs7Ozs7Ozs7Ozs7O3VCOztLOzs7Ozt3Qzs7Ozs7OzJCOzs7Ozs7OztxRjs7Ozs7Ozs7Ozs7O21FOztpRDs7Ozs7QUFFbEQsR0FBSyxDQUFHQSxlQUFlLEdBQUtDLFlBQWMsZ0JBQWxDRCxlQUFlO0lBRUZFLFlBQVksaUJBQWxCLFFBQVE7NEM7O2FBQUZBLFlBQVksQ0FDbkJDLFFBQVE7WUFBRUMsU0FBUyxvRUFBRyxLQUFLOzJDOztRQUNyQyxHQUFLLENBQUNDLElBQUksR0FBR0MsVUFBZ0IsbUJBQUUsRUFBRyxBQUFILENBQUc7a0NBRTVCRCxJQUFJLENDZmQsQ0RlZ0I7Y0FFUEYsUUFBUSxHQUFHQSxRQUFRLENBQUM7Y0FFcEJDLFNBQVMsR0FBR0EsU0FBUyxDQUFDOzs7OztZQUc3QkcsR0FBVyxFQUFYQSxDQUFXO21CQUFYQSxRQUFRLENBQVJBLFdBQVcsR0FBRyxDQUFDO2dCQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUNKLFFBQVE7WUFD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