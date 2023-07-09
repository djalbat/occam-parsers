"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OptionalPartPart;
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
                parsed = parsePart(this.part, partNodes, state, callback, callAhead);
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
function parsePart(part, partNodes, state, callback, callAhead) {
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
        if (callAhead === null) {
            parsed = true;
        }
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL29wdGlvbmFsUGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBPcHRpb25hbFBhcnRQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcXVlc3Rpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uYWxQYXJ0UGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGxvb2tBaGVhZCwgcGFydCkge1xuICAgIHN1cGVyKHR5cGUsIGxvb2tBaGVhZCk7XG5cbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHBhcnROb2RlcyA9IFtdLFxuICAgICAgICAgIHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBjb25zdCB7IHJ1bGVOYW1lIH0gPSBub2RlcztcblxuICAgIE9iamVjdC5hc3NpZ24ocGFydE5vZGVzLCB7XG4gICAgICBydWxlTmFtZVxuICAgIH0pO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0KHRoaXMucGFydCwgcGFydE5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBwdXNoKG5vZGVzLCBwYXJ0Tm9kZXMpO1xuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRTdHJpbmcgPSB0aGlzLnBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtwYXJ0U3RyaW5nfSR7cXVlc3Rpb25NYXJrfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0KHBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gT3B0aW9uYWxQYXJ0UGFydFR5cGUsXG4gICAgICAgICAgbG9va0FoZWFkID0gZmFsc2UsXG4gICAgICAgICAgb3B0aW9uYWxQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KHR5cGUsIGxvb2tBaGVhZCwgcGFydCk7XG5cbiAgICByZXR1cm4gb3B0aW9uYWxQYXJ0UGFydDtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcnQocGFydCwgcGFydE5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICBsZXQgcGFyc2VkO1xuXG4gIHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgaWYgKHBhcnNlZCkge1xuICAgIGlmIChjYWxsQWhlYWQgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlZCA9IGNhbGxBaGVhZCgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghcGFyc2VkKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBwYXJ0Tm9kZXM7ICAvLy9cblxuICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgaWYgKGNhbGxBaGVhZCA9PT0gbnVsbCkge1xuICAgICAgcGFyc2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbIk9wdGlvbmFsUGFydFBhcnQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJxdWVzdGlvbk1hcmsiLCJzcGVjaWFsU3ltYm9scyIsInR5cGUiLCJsb29rQWhlYWQiLCJwYXJ0IiwiZ2V0UGFydCIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwiY2FsbEFoZWFkIiwicGFyc2VkIiwicGFydE5vZGVzIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJydWxlTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInBhcnNlUGFydCIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwicGFydFN0cmluZyIsInN0cmluZyIsImZyb21QYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydFR5cGUiLCJvcHRpb25hbFBhcnRQYXJ0IiwiTm9uVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7Ozt5QkFWVTsyQkFDQTtrRUFFSDt5QkFFUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRCxNQUNGLEFBQUVFLGVBQWlCQywyQkFBYyxDQUEvQkQ7QUFFTyxJQUFBLEFBQU1ILGlDQW9EbEIsQUFwRFk7Y0FBTUE7K0JBQUFBO2FBQUFBLGlCQUNQSyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsSUFBSTtnQ0FEZFA7O2tDQUVYSyxNQUFNQztRQUVaLE1BQUtDLElBQUksR0FBR0E7OztrQkFKS1A7O1lBT25CUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELElBQUk7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztnQkFDckMsSUFBSUM7Z0JBRUosSUFBTUMsWUFBWSxFQUFFLEVBQ2RDLGFBQWFMLE1BQU1NLGFBQWE7Z0JBRXRDLElBQU0sQUFBRUMsV0FBYVIsTUFBYlE7Z0JBRVJDLE9BQU9DLE1BQU0sQ0FBQ0wsV0FBVztvQkFDdkJHLFVBQUFBO2dCQUNGO2dCQUVBSixTQUFTTyxVQUFVLElBQUksQ0FBQ2QsSUFBSSxFQUFFUSxXQUFXSixPQUFPQyxVQUFVQztnQkFFMUQsSUFBSUMsUUFBUTtvQkFDVmIsS0FBS1MsT0FBT0s7Z0JBQ2Q7Z0JBRUEsSUFBSSxDQUFDRCxRQUFRO29CQUNYSCxNQUFNVyxTQUFTLENBQUNOO2dCQUNsQjtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsSUFBSSxDQUFDakIsSUFBSSxDQUFDZ0IsUUFBUSxJQUMvQkUsU0FBUyxBQUFDLEdBQWV0QixPQUFicUIsWUFBMEIsT0FBYnJCO2dCQUUvQixPQUFPc0I7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTbkIsSUFBSTtnQkFDbEIsSUFBTUYsT0FBT3NCLCtCQUFvQixFQUMzQnJCLFlBQVksT0FDWnNCLG1CQUFtQixJQTlDUjVCLGlCQThDNkJLLE1BQU1DLFdBQVdDO2dCQUUvRCxPQUFPcUI7WUFDVDs7O1dBakRtQjVCO0VBQXlCNkIsb0JBQWU7QUFvRDdELFNBQVNSLFVBQVVkLElBQUksRUFBRVEsU0FBUyxFQUFFSixLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztJQUM1RCxJQUFJQztJQUVKQSxTQUFTRjtJQUVULElBQUlFLFFBQVE7UUFDVixJQUFJRCxjQUFjLE1BQU07WUFDdEJDLFNBQVNEO1FBQ1g7SUFDRjtJQUVBLElBQUksQ0FBQ0MsUUFBUTtRQUNYLElBQU1KLFFBQVFLLFdBQVksR0FBRztRQUU3QkQsU0FBU1AsS0FBS0UsS0FBSyxDQUFDQyxPQUFPQyxPQUFPQyxVQUFVQztRQWtCNUMsSUFBSUEsY0FBYyxNQUFNO1lBQ3RCQyxTQUFTO1FBQ1g7SUFDRjtJQUVBLE9BQU9BO0FBQ1QifQ==