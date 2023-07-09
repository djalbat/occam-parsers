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
        return OneOrMorePartsPart;
    },
    parseOneOrMorePartsPart: function() {
        return parseOneOrMorePartsPart;
    }
});
var _necessary = require("necessary");
var _occamlexers = require("occam-lexers");
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal"));
var _partTypes = require("../../partTypes");
var _zeroOrMoreParts = require("../../part/nonTerminal/zeroOrMoreParts");
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
var push = _necessary.arrayUtilities.push, plus = _occamlexers.specialSymbols.plus;
var OneOrMorePartsPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(OneOrMorePartsPart, NonTerminalPart);
    var _super = _create_super(OneOrMorePartsPart);
    function OneOrMorePartsPart(type, lookAhead, part) {
        _class_call_check(this, OneOrMorePartsPart);
        var _this;
        _this = _super.call(this, type, lookAhead);
        _this.part = part;
        return _this;
    }
    _create_class(OneOrMorePartsPart, [
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
                parsed = parseOneOrMorePartsPart(this.part, partNodes, state, callback, callAhead);
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
                var partString = this.part.asString(), string = "".concat(partString).concat(plus);
                return string;
            }
        }
    ], [
        {
            key: "fromPart",
            value: function fromPart(part) {
                var type = _partTypes.OneOrMorePartsPartType, lookAhead = false, oneOrMorePartsPart = new OneOrMorePartsPart(type, lookAhead, part);
                return oneOrMorePartsPart;
            }
        }
    ]);
    return OneOrMorePartsPart;
}(_nonTerminal.default);
function parseOneOrMorePartsPart(part, partNodes, state, callback, callAhead) {
    var parsed;
    var nodes = partNodes; ///
    parsed = part.parse(nodes, state, function() {
        var parsed;
        parsed = (0, _zeroOrMoreParts.parseZeroOrMorePartsPart)(part, partNodes, state, callback, callAhead);
        return parsed;
    }, callAhead);
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IE9uZU9yTW9yZVBhcnRzUGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5pbXBvcnQgeyBwYXJzZVplcm9Pck1vcmVQYXJ0c1BhcnQgfSBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbC96ZXJvT3JNb3JlUGFydHNcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcGx1cyB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9uZU9yTW9yZVBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGxvb2tBaGVhZCwgcGFydCkge1xuICAgIHN1cGVyKHR5cGUsIGxvb2tBaGVhZCk7XG5cbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHBhcnROb2RlcyA9IFtdLFxuICAgICAgICAgIHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBjb25zdCB7IHJ1bGVOYW1lIH0gPSBub2RlcztcblxuICAgIE9iamVjdC5hc3NpZ24ocGFydE5vZGVzLCB7XG4gICAgICBydWxlTmFtZVxuICAgIH0pO1xuXG4gICAgcGFyc2VkID0gcGFyc2VPbmVPck1vcmVQYXJ0c1BhcnQodGhpcy5wYXJ0LCBwYXJ0Tm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHB1c2gobm9kZXMsIHBhcnROb2Rlcyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydFN0cmluZyA9IHRoaXMucGFydC5hc1N0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3BhcnRTdHJpbmd9JHtwbHVzfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0KHBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gT25lT3JNb3JlUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBvbmVPck1vcmVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHR5cGUsIGxvb2tBaGVhZCwgcGFydCk7XG5cbiAgICByZXR1cm4gb25lT3JNb3JlUGFydHNQYXJ0O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU9uZU9yTW9yZVBhcnRzUGFydChwYXJ0LCBwYXJ0Tm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gIGxldCBwYXJzZWQ7XG5cblxuXG5cblxuXG5cblxuXG5cbiAgICBjb25zdCBub2RlcyA9IHBhcnROb2RlczsgIC8vL1xuXG4gICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsICgpID0+IHtcbiAgICAgIGxldCBwYXJzZWQ7XG5cbiAgICAgIHBhcnNlZCA9IHBhcnNlWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0LCBwYXJ0Tm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9LCBjYWxsQWhlYWQpO1xuXG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdLCJuYW1lcyI6WyJPbmVPck1vcmVQYXJ0c1BhcnQiLCJwYXJzZU9uZU9yTW9yZVBhcnRzUGFydCIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsInBsdXMiLCJzcGVjaWFsU3ltYm9scyIsInR5cGUiLCJsb29rQWhlYWQiLCJwYXJ0IiwiZ2V0UGFydCIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwiY2FsbEFoZWFkIiwicGFyc2VkIiwicGFydE5vZGVzIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJydWxlTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwicGFydFN0cmluZyIsInN0cmluZyIsImZyb21QYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsIm9uZU9yTW9yZVBhcnRzUGFydCIsIk5vblRlcm1pbmFsUGFydCIsInBhcnNlWmVyb09yTW9yZVBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQWFxQkE7O0lBb0RMQyx1QkFBdUI7ZUFBdkJBOzs7eUJBL0RlOzJCQUNBO2tFQUVIO3lCQUVXOytCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJELE1BQ0YsQUFBRUUsT0FBU0MsMkJBQWMsQ0FBdkJEO0FBRU8sSUFBQSxBQUFNSixtQ0FvRGxCLEFBcERZO2NBQU1BOytCQUFBQTthQUFBQSxtQkFDUE0sSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUk7Z0NBRGRSOztrQ0FFWE0sTUFBTUM7UUFFWixNQUFLQyxJQUFJLEdBQUdBOzs7a0JBSktSOztZQU9uQlMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxJQUFJO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7Z0JBQ3JDLElBQUlDO2dCQUVKLElBQU1DLFlBQVksRUFBRSxFQUNkQyxhQUFhTCxNQUFNTSxhQUFhO2dCQUV0QyxJQUFNLEFBQUVDLFdBQWFSLE1BQWJRO2dCQUVSQyxPQUFPQyxNQUFNLENBQUNMLFdBQVc7b0JBQ3ZCRyxVQUFBQTtnQkFDRjtnQkFFQUosU0FBU2Qsd0JBQXdCLElBQUksQ0FBQ08sSUFBSSxFQUFFUSxXQUFXSixPQUFPQyxVQUFVQztnQkFFeEUsSUFBSUMsUUFBUTtvQkFDVmIsS0FBS1MsT0FBT0s7Z0JBQ2Q7Z0JBRUEsSUFBSSxDQUFDRCxRQUFRO29CQUNYSCxNQUFNVSxTQUFTLENBQUNMO2dCQUNsQjtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsSUFBSSxDQUFDaEIsSUFBSSxDQUFDZSxRQUFRLElBQy9CRSxTQUFTLEFBQUMsR0FBZXJCLE9BQWJvQixZQUFrQixPQUFMcEI7Z0JBRS9CLE9BQU9xQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNsQixJQUFJO2dCQUNsQixJQUFNRixPQUFPcUIsaUNBQXNCLEVBQzdCcEIsWUFBWSxPQUNacUIscUJBQXFCLElBOUNWNUIsbUJBOENpQ00sTUFBTUMsV0FBV0M7Z0JBRW5FLE9BQU9vQjtZQUNUOzs7V0FqRG1CNUI7RUFBMkI2QixvQkFBZTtBQW9EeEQsU0FBUzVCLHdCQUF3Qk8sSUFBSSxFQUFFUSxTQUFTLEVBQUVKLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxTQUFTO0lBQ2pGLElBQUlDO0lBV0YsSUFBTUosUUFBUUssV0FBWSxHQUFHO0lBRTdCRCxTQUFTUCxLQUFLRSxLQUFLLENBQUNDLE9BQU9DLE9BQU87UUFDaEMsSUFBSUc7UUFFSkEsU0FBU2UsSUFBQUEseUNBQXdCLEVBQUN0QixNQUFNUSxXQUFXSixPQUFPQyxVQUFVQztRQUVwRSxPQUFPQztJQUNULEdBQUdEO0lBR0wsT0FBT0M7QUFDVCJ9