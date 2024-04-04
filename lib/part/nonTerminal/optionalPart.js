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
var questionMark = _occamlexers.specialSymbols.questionMark;
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
                var savedIndex = state.getSavedIndex(), nodesLength = nodes.length;
                parsed = parseOptionalPart(this.part, nodes, state, callback, callAhead);
                if (!parsed) {
                    var start = nodesLength; ///
                    nodes.splice(start);
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
function parseOptionalPart(part, nodes, state, callback, callAhead) {
    var parsed;
    if (callAhead === null) {
        parsed = part.parse(nodes, state, callback, callAhead);
        parsed = true;
    } else {
        parsed = callAhead();
        if (!parsed) {
            parsed = part.parse(nodes, state, callback, callAhead);
        }
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL29wdGlvbmFsUGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgT3B0aW9uYWxQYXJ0UGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cblxuY29uc3QgeyBxdWVzdGlvbk1hcmsgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25hbFBhcnRQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IodHlwZSwgbG9va0FoZWFkLCBwYXJ0KSB7XG4gICAgc3VwZXIodHlwZSwgbG9va0FoZWFkKTtcblxuICAgIHRoaXMucGFydCA9IHBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnBhcnQ7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICAgIHBhcnNlZCA9IHBhcnNlT3B0aW9uYWxQYXJ0KHRoaXMucGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IG5vZGVzTGVuZ3RoOyAgLy8vXG5cbiAgICAgIG5vZGVzLnNwbGljZShzdGFydCk7XG5cbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydFN0cmluZyA9IHRoaXMucGFydC5hc1N0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3BhcnRTdHJpbmd9JHtxdWVzdGlvbk1hcmt9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcnQocGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBPcHRpb25hbFBhcnRQYXJ0VHlwZSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBvcHRpb25hbFBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQodHlwZSwgbG9va0FoZWFkLCBwYXJ0KTtcblxuICAgIHJldHVybiBvcHRpb25hbFBhcnRQYXJ0O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU9wdGlvbmFsUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgbGV0IHBhcnNlZDtcblxuICBpZiAoY2FsbEFoZWFkID09PSBudWxsKSB7XG4gICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG5cblxuXG5cbiAgICBwYXJzZWQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHBhcnNlZCA9IGNhbGxBaGVhZCgpO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuXG5cblxuXG5cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbIk9wdGlvbmFsUGFydFBhcnQiLCJwYXJzZU9wdGlvbmFsUGFydCIsInF1ZXN0aW9uTWFyayIsInNwZWNpYWxTeW1ib2xzIiwidHlwZSIsImxvb2tBaGVhZCIsInBhcnQiLCJnZXRQYXJ0IiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwic3RhcnQiLCJzcGxpY2UiLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsInBhcnRTdHJpbmciLCJzdHJpbmciLCJmcm9tUGFydCIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwib3B0aW9uYWxQYXJ0UGFydCIsIk5vblRlcm1pbmFsUGFydCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQVdxQkE7O0lBOENMQyxpQkFBaUI7ZUFBakJBOzs7MkJBdkRlO2tFQUVIO3lCQUVTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3JDLElBQU0sQUFBRUMsZUFBaUJDLDJCQUFjLENBQS9CRDtBQUVPLElBQUEsQUFBTUYsaUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEsaUJBQ1BJLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJO2dDQURkTjs7a0NBRVhJLE1BQU1DO1FBRVosTUFBS0MsSUFBSSxHQUFHQTs7O2tCQUpLTjs7WUFPbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsSUFBSTtZQUNsQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxTQUFTO2dCQUNyQyxJQUFJQztnQkFFSixJQUFNQyxhQUFhSixNQUFNSyxhQUFhLElBQ2hDQyxjQUFjUCxNQUFNUSxNQUFNO2dCQUVoQ0osU0FBU1osa0JBQWtCLElBQUksQ0FBQ0ssSUFBSSxFQUFFRyxPQUFPQyxPQUFPQyxVQUFVQztnQkFFOUQsSUFBSSxDQUFDQyxRQUFRO29CQUNYLElBQU1LLFFBQVFGLGFBQWMsR0FBRztvQkFFL0JQLE1BQU1VLE1BQU0sQ0FBQ0Q7b0JBRWJSLE1BQU1VLFNBQVMsQ0FBQ047Z0JBQ2xCO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNoQixJQUFJLENBQUNlLFFBQVEsSUFDL0JFLFNBQVMsQUFBQyxHQUFlckIsT0FBYm9CLFlBQTBCLE9BQWJwQjtnQkFFL0IsT0FBT3FCO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU2xCLElBQUk7Z0JBQ2xCLElBQU1GLE9BQU9xQiwrQkFBb0IsRUFDM0JwQixZQUFZLE9BQ1pxQixtQkFBbUIsSUF4Q1IxQixpQkF3QzZCSSxNQUFNQyxXQUFXQztnQkFFL0QsT0FBT29CO1lBQ1Q7OztXQTNDbUIxQjtFQUF5QjJCLG9CQUFlO0FBOEN0RCxTQUFTMUIsa0JBQWtCSyxJQUFJLEVBQUVHLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7SUFDdkUsSUFBSUM7SUFFSixJQUFJRCxjQUFjLE1BQU07UUFDdEJDLFNBQVNQLEtBQUtFLEtBQUssQ0FBQ0MsT0FBT0MsT0FBT0MsVUFBVUM7UUFNNUNDLFNBQVM7SUFDWCxPQUFPO1FBQ0xBLFNBQVNEO1FBRVQsSUFBSSxDQUFDQyxRQUFRO1lBQ1hBLFNBQVNQLEtBQUtFLEtBQUssQ0FBQ0MsT0FBT0MsT0FBT0MsVUFBVUM7UUFPOUM7SUFDRjtJQUVBLE9BQU9DO0FBQ1QifQ==