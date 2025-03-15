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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var questionMark = _occamlexers.specialSymbols.questionMark;
var OptionalPartPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(OptionalPartPart, NonTerminalPart);
    function OptionalPartPart(type, callAhead, part) {
        _class_call_check(this, OptionalPartPart);
        var _this;
        _this = _call_super(this, OptionalPartPart, [
            type,
            callAhead
        ]);
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
                var type = _partTypes.OptionalPartPartType, callAhead = false, optionalPartPart = new OptionalPartPart(type, callAhead, part);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL29wdGlvbmFsUGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgT3B0aW9uYWxQYXJ0UGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cblxuY29uc3QgeyBxdWVzdGlvbk1hcmsgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25hbFBhcnRQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IodHlwZSwgY2FsbEFoZWFkLCBwYXJ0KSB7XG4gICAgc3VwZXIodHlwZSwgY2FsbEFoZWFkKTtcblxuICAgIHRoaXMucGFydCA9IHBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnBhcnQ7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICAgIHBhcnNlZCA9IHBhcnNlT3B0aW9uYWxQYXJ0KHRoaXMucGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IG5vZGVzTGVuZ3RoOyAgLy8vXG5cbiAgICAgIG5vZGVzLnNwbGljZShzdGFydCk7XG5cbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydFN0cmluZyA9IHRoaXMucGFydC5hc1N0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3BhcnRTdHJpbmd9JHtxdWVzdGlvbk1hcmt9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcnQocGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBPcHRpb25hbFBhcnRQYXJ0VHlwZSxcbiAgICAgICAgICBjYWxsQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBvcHRpb25hbFBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQodHlwZSwgY2FsbEFoZWFkLCBwYXJ0KTtcblxuICAgIHJldHVybiBvcHRpb25hbFBhcnRQYXJ0O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU9wdGlvbmFsUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgbGV0IHBhcnNlZDtcblxuICBpZiAoY2FsbEFoZWFkID09PSBudWxsKSB7XG4gICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG5cblxuXG5cbiAgICBwYXJzZWQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHBhcnNlZCA9IGNhbGxBaGVhZCgpO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuXG5cblxuXG5cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbIk9wdGlvbmFsUGFydFBhcnQiLCJwYXJzZU9wdGlvbmFsUGFydCIsInF1ZXN0aW9uTWFyayIsInNwZWNpYWxTeW1ib2xzIiwidHlwZSIsImNhbGxBaGVhZCIsInBhcnQiLCJnZXRQYXJ0IiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJwYXJzZWQiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwic3RhcnQiLCJzcGxpY2UiLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsInBhcnRTdHJpbmciLCJzdHJpbmciLCJmcm9tUGFydCIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwib3B0aW9uYWxQYXJ0UGFydCIsIk5vblRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQVdxQkE7O0lBOENMQyxpQkFBaUI7ZUFBakJBOzs7MkJBdkRlO2tFQUVIO3lCQUVTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3JDLElBQU0sQUFBRUMsZUFBaUJDLDJCQUFjLENBQS9CRDtBQUVPLElBQUEsQUFBTUYsaUNBQU47Y0FBTUE7YUFBQUEsaUJBQ1BJLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJO2dDQURkTjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEk7WUFBTUM7O1FBRVosTUFBS0MsSUFBSSxHQUFHQTs7O2tCQUpLTjs7WUFPbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsSUFBSTtZQUNsQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFTixTQUFTO2dCQUNyQyxJQUFJTztnQkFFSixJQUFNQyxhQUFhSCxNQUFNSSxhQUFhLElBQ2hDQyxjQUFjTixNQUFNTyxNQUFNO2dCQUVoQ0osU0FBU1gsa0JBQWtCLElBQUksQ0FBQ0ssSUFBSSxFQUFFRyxPQUFPQyxPQUFPQyxVQUFVTjtnQkFFOUQsSUFBSSxDQUFDTyxRQUFRO29CQUNYLElBQU1LLFFBQVFGLGFBQWMsR0FBRztvQkFFL0JOLE1BQU1TLE1BQU0sQ0FBQ0Q7b0JBRWJQLE1BQU1TLFNBQVMsQ0FBQ047Z0JBQ2xCO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNmLElBQUksQ0FBQ2MsUUFBUSxJQUMvQkUsU0FBUyxBQUFDLEdBQWVwQixPQUFibUIsWUFBMEIsT0FBYm5CO2dCQUUvQixPQUFPb0I7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTakIsSUFBSTtnQkFDbEIsSUFBTUYsT0FBT29CLCtCQUFvQixFQUMzQm5CLFlBQVksT0FDWm9CLG1CQUFtQixJQXhDUnpCLGlCQXdDNkJJLE1BQU1DLFdBQVdDO2dCQUUvRCxPQUFPbUI7WUFDVDs7O1dBM0NtQnpCO0VBQXlCMEIsb0JBQWU7QUE4Q3RELFNBQVN6QixrQkFBa0JLLElBQUksRUFBRUcsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRU4sU0FBUztJQUN2RSxJQUFJTztJQUVKLElBQUlQLGNBQWMsTUFBTTtRQUN0Qk8sU0FBU04sS0FBS0UsS0FBSyxDQUFDQyxPQUFPQyxPQUFPQyxVQUFVTjtRQU01Q08sU0FBUztJQUNYLE9BQU87UUFDTEEsU0FBU1A7UUFFVCxJQUFJLENBQUNPLFFBQVE7WUFDWEEsU0FBU04sS0FBS0UsS0FBSyxDQUFDQyxPQUFPQyxPQUFPQyxVQUFVTjtRQU85QztJQUNGO0lBRUEsT0FBT087QUFDVCJ9