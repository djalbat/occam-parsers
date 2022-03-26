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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwibGliL2NvbnN0YW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUnVsZU5hbWVQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuY29uc3QgeyBlbGxpcHNpcyB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOYW1lUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBsb29rQWhlYWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHR5cGUgPSBSdWxlTmFtZVBhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuXG4gICAgdGhpcy5sb29rQWhlYWQgPSBsb29rQWhlYWQ7XG4gIH1cbiAgXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgaXNMb29rQWhlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9va0FoZWFkO1xuICB9XG5cbiAgaXNSdWxlTmFtZVBhcnQoKSB7XG4gICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gdHJ1ZTtcblxuICAgIHJldHVybiBydWxlTmFtZVBhcnQ7XG4gIH1cblxuICBzZXRMb29rQWhlYWQobG9va0FoZWFkKSB7XG4gICAgdGhpcy5sb29rQWhlYWQgPSBsb29rQWhlYWQ7XG4gIH1cblxuICBmaW5kUnVsZShzdGF0ZSkge1xuICAgIGNvbnN0IHJ1bGVNYXAgPSBzdGF0ZS5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVNYXBbdGhpcy5ydWxlTmFtZV0gfHwgbnVsbDsgIC8vL1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmZpbmRSdWxlKHN0YXRlKTtcblxuICAgIGlmIChydWxlID09PSBudWxsKSB7XG4gICAgICBwYXJzZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcnVsZU5vZGUgPSBydWxlLnBhcnNlKHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICAgIHBhcnNlZCA9IChydWxlTm9kZSAhPT0gbnVsbCk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgbm9kZXMucHVzaChydWxlTm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IGxvb2tBaGVhZFN0cmluZyA9IHRoaXMubG9va0FoZWFkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsbGlwc2lzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHN0cmluZyA9IGAke3RoaXMucnVsZU5hbWV9JHtsb29rQWhlYWRTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFJ1bGVOYW1lUGFydCwgdGhpcy5ydWxlTmFtZSwgdGhpcy5sb29rQWhlYWQpOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuIl0sIm5hbWVzIjpbImVsbGlwc2lzIiwic3BlY2lhbFN5bWJvbHMiLCJSdWxlTmFtZVBhcnQiLCJydWxlTmFtZSIsImxvb2tBaGVhZCIsInR5cGUiLCJSdWxlTmFtZVBhcnRUeXBlIiwiZ2V0UnVsZU5hbWUiLCJpc0xvb2tBaGVhZCIsImlzUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0Iiwic2V0TG9va0FoZWFkIiwiZmluZFJ1bGUiLCJzdGF0ZSIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwicnVsZSIsInBhcnNlIiwibm9kZXMiLCJjYWxsYmFjayIsInBhcnNlZCIsInJ1bGVOb2RlIiwicHVzaCIsImFzU3RyaW5nIiwibG9va0FoZWFkU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwic3RyaW5nIiwiY2xvbmUiLCJOb25UZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFK0IsSUFBQSxZQUFjLFdBQWQsY0FBYyxDQUFBO0FBRWpCLElBQUEsWUFBd0Isa0NBQXhCLHdCQUF3QixFQUFBO0FBRXZCLElBQUEsVUFBaUIsV0FBakIsaUJBQWlCLENBQUE7QUFDYixJQUFBLFVBQWlCLFdBQWpCLGlCQUFpQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7OERBUGxEO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7OzswQkFBQTs7Ozs7Ozs7OztTQUFBOzs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7Ozt3Q0FBQTs7Ozs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFTQSxJQUFNLEFBQUVBLFFBQVEsR0FBS0MsWUFBYyxnQkFBM0JELFFBQVEsQUFBbUIsQUFBQztBQUVyQixJQUFBLEFBQU1FLFlBQVksaUJDWDlCLEFEV1k7NENBWGY7O2FBV3FCQSxZQUFZLENBQ25CQyxRQUFRO1lBQUVDLFNBQVMsR0FBVEEsK0NBQWlCLGtC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