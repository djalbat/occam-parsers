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
// import { arrayUtilities } from "necessary";
//
// import { isPartLookAhead } from "./part";
//
// const { push } = arrayUtilities;
var ellipsis = _occamlexers.specialSymbols.ellipsis;
var RuleNamePart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(RuleNamePart, NonTerminalPart);
    var _super = _create_super(RuleNamePart);
    function RuleNamePart(type, ruleName, lookAhead) {
        _class_call_check(this, RuleNamePart);
        var _this;
        _this = _super.call(this, type);
        _this.ruleName = ruleName;
        _this.lookAhead = lookAhead;
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
                // const partLookAhead = isPartLookAhead(part);
                //
                // if (partLookAhead) {
                //   let remainingNodes;
                //
                //   index++;
                //
                //   const lookAheadCallback = () => {
                //     remainingNodes = [];
                //
                //     const parsed = parsePartOfParts(index, parts, remainingNodes, state, callback);
                //
                //     return parsed;
                //   };
                //
                //   Object.assign(lookAheadCallback, {
                //     callback,
                //     part
                //   });
                //
                //   state.callbacks.push(lookAheadCallback);
                //
                //   parsed = part.parse(nodes, state, lookAheadCallback);
                //
                //   state.callbacks.pop();
                //
                //   if (parsed) {
                //     push(nodes, remainingNodes);
                //   }
                //
                // } else {
                //   parsed = part.parse(nodes, state, callback);
                //
                //   if (parsed) {
                //     index++;
                //
                //     parsed = parsePartOfParts(index, parts, nodes, state, callback);
                //   }
                // }
                return parsed;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var lookAheadString = this.lookAhead ? ellipsis : _constants.EMPTY_STRING, string = "".concat(this.ruleName).concat(lookAheadString);
                return string;
            }
        }
    ], [
        {
            key: "fromRuleName",
            value: function fromRuleName(ruleName) {
                var type = _partTypes.RuleNamePartType, lookAhead = false, ruleNamePart = new RuleNamePart(type, ruleName, lookAhead);
                return ruleNamePart;
            }
        },
        {
            key: "fromRuleNameAndLookAhead",
            value: function fromRuleNameAndLookAhead(ruleName, lookAhead) {
                var type = _partTypes.RuleNamePartType, ruleNamePart = new RuleNamePart(type, ruleName, lookAhead);
                return ruleNamePart;
            }
        }
    ]);
    return RuleNamePart;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBSdWxlTmFtZVBhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG4vLyBpbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbi8vXG4vLyBpbXBvcnQgeyBpc1BhcnRMb29rQWhlYWQgfSBmcm9tIFwiLi9wYXJ0XCI7XG4vL1xuLy8gY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgeyBlbGxpcHNpcyB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOYW1lUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHJ1bGVOYW1lLCBsb29rQWhlYWQpIHtcbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcbiAgICB0aGlzLmxvb2tBaGVhZCA9IGxvb2tBaGVhZDtcbiAgfVxuICBcbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBpc0xvb2tBaGVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb29rQWhlYWQ7XG4gIH1cblxuICBpc1J1bGVOYW1lUGFydCgpIHtcbiAgICBjb25zdCBydWxlTmFtZVBhcnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbiAgfVxuXG4gIHNldExvb2tBaGVhZChsb29rQWhlYWQpIHtcbiAgICB0aGlzLmxvb2tBaGVhZCA9IGxvb2tBaGVhZDtcbiAgfVxuXG4gIGZpbmRSdWxlKHN0YXRlKSB7XG4gICAgY29uc3QgcnVsZU1hcCA9IHN0YXRlLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICBydWxlID0gcnVsZU1hcFt0aGlzLnJ1bGVOYW1lXSB8fCBudWxsOyAgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3QgcnVsZSA9IHRoaXMuZmluZFJ1bGUoc3RhdGUpO1xuXG4gICAgaWYgKHJ1bGUgPT09IG51bGwpIHtcbiAgICAgIHBhcnNlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBydWxlTm9kZSA9IHJ1bGUucGFyc2Uoc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgcGFyc2VkID0gKHJ1bGVOb2RlICE9PSBudWxsKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBub2Rlcy5wdXNoKHJ1bGVOb2RlKTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIGNvbnN0IHBhcnRMb29rQWhlYWQgPSBpc1BhcnRMb29rQWhlYWQocGFydCk7XG4gICAgLy9cbiAgICAvLyBpZiAocGFydExvb2tBaGVhZCkge1xuICAgIC8vICAgbGV0IHJlbWFpbmluZ05vZGVzO1xuICAgIC8vXG4gICAgLy8gICBpbmRleCsrO1xuICAgIC8vXG4gICAgLy8gICBjb25zdCBsb29rQWhlYWRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAvLyAgICAgcmVtYWluaW5nTm9kZXMgPSBbXTtcbiAgICAvL1xuICAgIC8vICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVBhcnRPZlBhcnRzKGluZGV4LCBwYXJ0cywgcmVtYWluaW5nTm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG4gICAgLy9cbiAgICAvLyAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAvLyAgIH07XG4gICAgLy9cbiAgICAvLyAgIE9iamVjdC5hc3NpZ24obG9va0FoZWFkQ2FsbGJhY2ssIHtcbiAgICAvLyAgICAgY2FsbGJhY2ssXG4gICAgLy8gICAgIHBhcnRcbiAgICAvLyAgIH0pO1xuICAgIC8vXG4gICAgLy8gICBzdGF0ZS5jYWxsYmFja3MucHVzaChsb29rQWhlYWRDYWxsYmFjayk7XG4gICAgLy9cbiAgICAvLyAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBsb29rQWhlYWRDYWxsYmFjayk7XG4gICAgLy9cbiAgICAvLyAgIHN0YXRlLmNhbGxiYWNrcy5wb3AoKTtcbiAgICAvL1xuICAgIC8vICAgaWYgKHBhcnNlZCkge1xuICAgIC8vICAgICBwdXNoKG5vZGVzLCByZW1haW5pbmdOb2Rlcyk7XG4gICAgLy8gICB9XG4gICAgLy9cbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcbiAgICAvL1xuICAgIC8vICAgaWYgKHBhcnNlZCkge1xuICAgIC8vICAgICBpbmRleCsrO1xuICAgIC8vXG4gICAgLy8gICAgIHBhcnNlZCA9IHBhcnNlUGFydE9mUGFydHMoaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgbG9va0FoZWFkU3RyaW5nID0gdGhpcy5sb29rQWhlYWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxsaXBzaXMgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgc3RyaW5nID0gYCR7dGhpcy5ydWxlTmFtZX0ke2xvb2tBaGVhZFN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gUnVsZU5hbWVQYXJ0VHlwZSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBydWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHR5cGUsIHJ1bGVOYW1lLCBsb29rQWhlYWQpO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRMb29rQWhlYWQocnVsZU5hbWUsIGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IHR5cGUgPSBSdWxlTmFtZVBhcnRUeXBlLFxuICAgICAgICAgIHJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQodHlwZSwgcnVsZU5hbWUsIGxvb2tBaGVhZCk7XG5cbiAgICByZXR1cm4gcnVsZU5hbWVQYXJ0O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJ1bGVOYW1lUGFydCIsImVsbGlwc2lzIiwic3BlY2lhbFN5bWJvbHMiLCJ0eXBlIiwicnVsZU5hbWUiLCJsb29rQWhlYWQiLCJnZXRSdWxlTmFtZSIsImlzTG9va0FoZWFkIiwiaXNSdWxlTmFtZVBhcnQiLCJydWxlTmFtZVBhcnQiLCJzZXRMb29rQWhlYWQiLCJmaW5kUnVsZSIsInN0YXRlIiwicnVsZU1hcCIsImdldFJ1bGVNYXAiLCJydWxlIiwicGFyc2UiLCJub2RlcyIsImNhbGxiYWNrIiwicGFyc2VkIiwicnVsZU5vZGUiLCJwdXNoIiwiYXNTdHJpbmciLCJsb29rQWhlYWRTdHJpbmciLCJFTVBUWV9TVFJJTkciLCJzdHJpbmciLCJmcm9tUnVsZU5hbWUiLCJSdWxlTmFtZVBhcnRUeXBlIiwiZnJvbVJ1bGVOYW1lQW5kTG9va0FoZWFkIiwiTm9uVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWlCcUJBOzs7MkJBZlU7a0VBRUg7eUJBRUM7eUJB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