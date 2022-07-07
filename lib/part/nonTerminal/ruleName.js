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
var _occamLexers = require("occam-lexers");
var _nonTerminal = /*#__PURE__*/ _interopRequireDefault(require("../../part/nonTerminal"));
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
                var ruleName = this.ruleName, lookAhead = this.lookAhead, ruleNamePart = new RuleNamePart(ruleName, lookAhead);
                return ruleNamePart;
            }
        }
    ]);
    return RuleNamePart;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBSdWxlTmFtZVBhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IGVsbGlwc2lzIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZU5hbWVQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGxvb2tBaGVhZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgdHlwZSA9IFJ1bGVOYW1lUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG5cbiAgICB0aGlzLmxvb2tBaGVhZCA9IGxvb2tBaGVhZDtcbiAgfVxuICBcbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBpc0xvb2tBaGVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb29rQWhlYWQ7XG4gIH1cblxuICBpc1J1bGVOYW1lUGFydCgpIHtcbiAgICBjb25zdCBydWxlTmFtZVBhcnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbiAgfVxuXG4gIHNldExvb2tBaGVhZChsb29rQWhlYWQpIHtcbiAgICB0aGlzLmxvb2tBaGVhZCA9IGxvb2tBaGVhZDtcbiAgfVxuXG4gIGZpbmRSdWxlKHN0YXRlKSB7XG4gICAgY29uc3QgcnVsZU1hcCA9IHN0YXRlLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICBydWxlID0gcnVsZU1hcFt0aGlzLnJ1bGVOYW1lXSB8fCBudWxsOyAgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3QgcnVsZSA9IHRoaXMuZmluZFJ1bGUoc3RhdGUpO1xuXG4gICAgaWYgKHJ1bGUgPT09IG51bGwpIHtcbiAgICAgIHBhcnNlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBydWxlTm9kZSA9IHJ1bGUucGFyc2Uoc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgcGFyc2VkID0gKHJ1bGVOb2RlICE9PSBudWxsKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBub2Rlcy5wdXNoKHJ1bGVOb2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgbG9va0FoZWFkU3RyaW5nID0gdGhpcy5sb29rQWhlYWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxsaXBzaXMgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgc3RyaW5nID0gYCR7dGhpcy5ydWxlTmFtZX0ke2xvb2tBaGVhZFN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5ydWxlTmFtZSxcbiAgICAgICAgICBsb29rQWhlYWQgPSB0aGlzLmxvb2tBaGVhZCxcbiAgICAgICAgICBydWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJ1bGVOYW1lLCBsb29rQWhlYWQpO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSdWxlTmFtZVBhcnQiLCJlbGxpcHNpcyIsInNwZWNpYWxTeW1ib2xzIiwicnVsZU5hbWUiLCJsb29rQWhlYWQiLCJ0eXBlIiwiUnVsZU5hbWVQYXJ0VHlwZSIsImdldFJ1bGVOYW1lIiwiaXNMb29rQWhlYWQiLCJpc1J1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydCIsInNldExvb2tBaGVhZCIsImZpbmRSdWxlIiwic3RhdGUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInJ1bGUiLCJwYXJzZSIsIm5vZGVzIiwiY2FsbGJhY2siLCJwYXJzZWQiLCJydWxlTm9kZSIsInB1c2giLCJhc1N0cmluZyIsImxvb2tBaGVhZFN0cmluZyIsIkVNUFRZX1NUUklORyIsInN0cmluZyIsImNsb25lIiwiTm9uVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFXUUEsWUFBWTs7OzJCQVRGLGNBQWM7Z0VBRWpCLHdCQUF3Qjt5QkFFdkIsaUJBQWlCO3lCQUNiLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxJQUFNLEFBQUVDLFFBQVEsR0FBS0MsWUFBYyxlQUFBLENBQTNCRCxRQUFRLEFBQW1CLEFBQUM7QUFFckIsSUFBQSxBQUFNRCxZQUFZLGlCQUFsQjs7O2FBQU1BLFlBQVksQ0FDbkJHLFFBQVE7WUFBRUMsU0FBUyxHQUFUQSwrQ0FBaUIsa0JBQUwsS0FBSzs7O1FBQ3JDLElBQU1DLElBQUksR0FBR0MsVUFBZ0IsaUJBQUEsQUFBQyxFQUFDLEdBQUc7a0NBRTVCRCxJQUFJLEVBQUU7UUFFWixNQUFLRixRQUFRLEdBQUdBLFFBQVEsQ0FBQztRQUV6QixNQUFLQyxTQUFTLEdBQUdBLFNBQVMsQ0FBQzs7Ozs7WUFHN0JHLEdBQVcsRUFB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