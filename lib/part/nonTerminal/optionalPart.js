"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return OptionalPartPart;
    },
    parseOptionalPart: function() {
        return parseOptionalPart;
    }
});
var _necessary = require("necessary");
var _occamlexers = require("occam-lexers");
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal"));
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
var push = _necessary.arrayUtilities.push, questionMark = _occamlexers.specialSymbols.questionMark;
var OptionalPartPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(OptionalPartPart, NonTerminalPart);
    var _super = _create_super(OptionalPartPart);
    function OptionalPartPart(type, lookAhead, part) {
        _class_call_check(this, OptionalPartPart);
        var _this;
        _this = _super.call(this, type, lookAhead);
        _this.part = part;
        return _this;
    }
    _create_class(OptionalPartPart, [
        {
            key: "getPart",
            value: function getPart() {
                return this.part;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback, callAhead) {
                var parsed;
                var partNodes = [], savedIndex = state.getSavedIndex();
                var ruleName = nodes.ruleName;
                Object.assign(partNodes, {
                    ruleName: ruleName
                });
                parsed = parseOptionalPart(this.part, partNodes, state, callback, callAhead);
                if (parsed) {
                    push(nodes, partNodes);
                }
                if (!parsed) {
                    state.backtrack(savedIndex);
                }
                return parsed;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var partString = this.part.asString(), string = "".concat(partString).concat(questionMark);
                return string;
            }
        }
    ], [
        {
            key: "fromPart",
            value: function fromPart(part) {
                var type = _partTypes.OptionalPartPartType, lookAhead = false, optionalPartPart = new OptionalPartPart(type, lookAhead, part);
                return optionalPartPart;
            }
        }
    ]);
    return OptionalPartPart;
}(_nonTerminal.default);
function parseOptionalPart(part, partNodes, state, callback, callAhead) {
    var parsed;
    parsed = callback();
    if (parsed) {
        if (callAhead !== null) {
            parsed = callAhead();
        }
    }
    if (!parsed) {
        var nodes = partNodes; ///
        parsed = part.parse(nodes, state, callback, callAhead);
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL29wdGlvbmFsUGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBPcHRpb25hbFBhcnRQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcXVlc3Rpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uYWxQYXJ0UGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGxvb2tBaGVhZCwgcGFydCkge1xuICAgIHN1cGVyKHR5cGUsIGxvb2tBaGVhZCk7XG5cbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHBhcnROb2RlcyA9IFtdLFxuICAgICAgICAgIHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBjb25zdCB7IHJ1bGVOYW1lIH0gPSBub2RlcztcblxuICAgIE9iamVjdC5hc3NpZ24ocGFydE5vZGVzLCB7XG4gICAgICBydWxlTmFtZVxuICAgIH0pO1xuXG4gICAgcGFyc2VkID0gcGFyc2VPcHRpb25hbFBhcnQodGhpcy5wYXJ0LCBwYXJ0Tm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHB1c2gobm9kZXMsIHBhcnROb2Rlcyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydFN0cmluZyA9IHRoaXMucGFydC5hc1N0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3BhcnRTdHJpbmd9JHtxdWVzdGlvbk1hcmt9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcnQocGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBPcHRpb25hbFBhcnRQYXJ0VHlwZSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBvcHRpb25hbFBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQodHlwZSwgbG9va0FoZWFkLCBwYXJ0KTtcblxuICAgIHJldHVybiBvcHRpb25hbFBhcnRQYXJ0O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU9wdGlvbmFsUGFydChwYXJ0LCBwYXJ0Tm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgcGFyc2VkID0gY2FsbGJhY2soKTtcblxuICBpZiAocGFyc2VkKSB7XG4gICAgaWYgKGNhbGxBaGVhZCAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VkID0gY2FsbEFoZWFkKCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFwYXJzZWQpIHtcbiAgICBjb25zdCBub2RlcyA9IHBhcnROb2RlczsgIC8vL1xuXG4gICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG5cblxuXG5cblxuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdLCJuYW1lcyI6WyJPcHRpb25hbFBhcnRQYXJ0IiwicGFyc2VPcHRpb25hbFBhcnQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJxdWVzdGlvbk1hcmsiLCJzcGVjaWFsU3ltYm9scyIsInR5cGUiLCJsb29rQWhlYWQiLCJwYXJ0IiwiZ2V0UGFydCIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwiY2FsbEFoZWFkIiwicGFyc2VkIiwicGFydE5vZGVzIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJydWxlTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwicGFydFN0cmluZyIsInN0cmluZyIsImZyb21QYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydFR5cGUiLCJvcHRpb25hbFBhcnRQYXJ0IiwiTm9uVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBWXFCQTs7SUFvRExDLGlCQUFpQjtlQUFqQkE7Ozt5QkE5RGU7MkJBQ0E7a0VBRUg7eUJBRVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQsTUFDRixBQUFFRSxlQUFpQkMsMkJBQWMsQ0FBL0JEO0FBRU8sSUFBQSxBQUFNSixpQ0FvRGxCLEFBcERZO2NBQU1BOytCQUFBQTthQUFBQSxpQkFDUE0sSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUk7Z0NBRGRSOztrQ0FFWE0sTUFBTUM7UUFFWixNQUFLQyxJQUFJLEdBQUdBOzs7a0JBSktSOztZQU9uQlMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxJQUFJO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7Z0JBQ3JDLElBQUlDO2dCQUVKLElBQU1DLFlBQVksRUFBRSxFQUNkQyxhQUFhTCxNQUFNTSxhQUFhO2dCQUV0QyxJQUFNLEFBQUVDLFdBQWFSLE1BQWJRO2dCQUVSQyxPQUFPQyxNQUFNLENBQUNMLFdBQVc7b0JBQ3ZCRyxVQUFBQTtnQkFDRjtnQkFFQUosU0FBU2Qsa0JBQWtCLElBQUksQ0FBQ08sSUFBSSxFQUFFUSxXQUFXSixPQUFPQyxVQUFVQztnQkFFbEUsSUFBSUMsUUFBUTtvQkFDVmIsS0FBS1MsT0FBT0s7Z0JBQ2Q7Z0JBRUEsSUFBSSxDQUFDRCxRQUFRO29CQUNYSCxNQUFNVSxTQUFTLENBQUNMO2dCQUNsQjtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsSUFBSSxDQUFDaEIsSUFBSSxDQUFDZSxRQUFRLElBQy9CRSxTQUFTLEFBQUMsR0FBZXJCLE9BQWJvQixZQUEwQixPQUFicEI7Z0JBRS9CLE9BQU9xQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNsQixJQUFJO2dCQUNsQixJQUFNRixPQUFPcUIsK0JBQW9CLEVBQzNCcEIsWUFBWSxPQUNacUIsbUJBQW1CLElBOUNSNUIsaUJBOEM2Qk0sTUFBTUMsV0FBV0M7Z0JBRS9ELE9BQU9vQjtZQUNUOzs7V0FqRG1CNUI7RUFBeUI2QixvQkFBZTtBQW9EdEQsU0FBUzVCLGtCQUFrQk8sSUFBSSxFQUFFUSxTQUFTLEVBQUVKLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxTQUFTO0lBQzNFLElBQUlDO0lBRUpBLFNBQVNGO0lBRVQsSUFBSUUsUUFBUTtRQUNWLElBQUlELGNBQWMsTUFBTTtZQUN0QkMsU0FBU0Q7UUFDWDtJQUNGO0lBRUEsSUFBSSxDQUFDQyxRQUFRO1FBQ1gsSUFBTUosUUFBUUssV0FBWSxHQUFHO1FBRTdCRCxTQUFTUCxLQUFLRSxLQUFLLENBQUNDLE9BQU9DLE9BQU9DLFVBQVVDO0lBTzlDO0lBRUEsT0FBT0M7QUFDVCJ9