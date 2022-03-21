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
var ellipsis = _occamLexers.specialSymbols.ellipsis;
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
                var lookAheadString = this.lookAhead ? ellipsis : _constants.EMPTY_STRING, string = "".concat(this.ruleName).concat(lookAheadString);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBSdWxlTmFtZVBhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IGVsbGlwc2lzIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZU5hbWVQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGxvb2tBaGVhZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgdHlwZSA9IFJ1bGVOYW1lUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG5cbiAgICB0aGlzLmxvb2tBaGVhZCA9IGxvb2tBaGVhZDtcbiAgfVxuICBcbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBpc0xvb2tBaGVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb29rQWhlYWQ7XG4gIH1cblxuICBpc1J1bGVOYW1lUGFydCgpIHtcbiAgICBjb25zdCBydWxlTmFtZVBhcnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbiAgfVxuXG4gIHNldExvb2tBaGVhZChsb29rQWhlYWQpIHtcbiAgICB0aGlzLmxvb2tBaGVhZCA9IGxvb2tBaGVhZDtcbiAgfVxuXG4gIGZpbmRSdWxlKHN0YXRlKSB7XG4gICAgY29uc3QgcnVsZU1hcCA9IHN0YXRlLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICBydWxlID0gcnVsZU1hcFt0aGlzLnJ1bGVOYW1lXSB8fCBudWxsOyAgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3QgcnVsZSA9IHRoaXMuZmluZFJ1bGUoc3RhdGUpO1xuXG4gICAgaWYgKHJ1bGUgPT09IG51bGwpIHtcbiAgICAgIHBhcnNlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBydWxlTm9kZSA9IHJ1bGUucGFyc2Uoc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgcGFyc2VkID0gKHJ1bGVOb2RlICE9PSBudWxsKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBub2Rlcy5wdXNoKHJ1bGVOb2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgbG9va0FoZWFkU3RyaW5nID0gdGhpcy5sb29rQWhlYWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxsaXBzaXMgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgc3RyaW5nID0gYCR7dGhpcy5ydWxlTmFtZX0ke2xvb2tBaGVhZFN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoUnVsZU5hbWVQYXJ0LCB0aGlzLnJ1bGVOYW1lLCB0aGlzLmxvb2tBaGVhZCk7IH1cbn1cbiJdLCJuYW1lcyI6WyJlbGxpcHNpcyIsInNwZWNpYWxTeW1ib2xzIiwiUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWUiLCJsb29rQWhlYWQiLCJ0eXBlIiwiUnVsZU5hbWVQYXJ0VHlwZSIsImdldFJ1bGVOYW1lIiwiaXNMb29rQWhlYWQiLCJpc1J1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydCIsInNldExvb2tBaGVhZCIsImZpbmRSdWxlIiwic3RhdGUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInJ1bGUiLCJwYXJzZSIsIm5vZGVzIiwiY2FsbGJhY2siLCJwYXJzZWQiLCJydWxlTm9kZSIsInB1c2giLCJhc1N0cmluZyIsImxvb2tBaGVhZFN0cmluZyIsIkVNUFRZX1NUUklORyIsInN0cmluZyIsImNsb25lIiwiTm9uVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRStCLElBQUEsWUFBYyxXQUFkLGNBQWMsQ0FBQTtBQUVqQixJQUFBLFlBQXdCLGtDQUF4Qix3QkFBd0IsRUFBQTtBQUV2QixJQUFBLFVBQWlCLFdBQWpCLGlCQUFpQixDQUFBO0FBQ2IsSUFBQSxVQUFpQixXQUFqQixpQkFBaUIsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7OzhEQVBsRDtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7MEJBQUE7Ozs7Ozs7Ozs7U0FBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7Ozs7d0NBQUE7Ozs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBU0EsSUFBTSxBQUFFQSxRQUFRLEdBQUtDLFlBQWMsZ0JBQTNCRCxRQUFRLEFBQW1CLEFBQUM7QUFFckIsSUFBQSxBQUFNRSxZQUFZLGlCQ1g5QixBRFdZOzRDQVhmOzthQVdxQkEsWUFBWSxDQUNuQkMsUUFBUTtZQUFFQyxTQUFTLEdBQVRBLCtDQUFpQixrQkFBTCxLQUFLOzJDQVp6Qzs7UUFhSSxJQUFNQyxJQUFJLEdBQUdDLFVBQWdCLGlCQUFBLEFBQUMsRUFBQyxHQUFHO2tDQUU1QkQsSUFBSSxDRWZkLENGZWdCO1FBRVosTUFBS0YsUUFBUSxHQUFHQSxRQUFRLENBQUM7UUFF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