"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SequenceOfPartsPart;
    }
});
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal"));
var _parse = require("../../utilities/parse");
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
var SequenceOfPartsPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(SequenceOfPartsPart, NonTerminalPart);
    var _super = _create_super(SequenceOfPartsPart);
    function SequenceOfPartsPart(type, lookAhead, parts) {
        _class_call_check(this, SequenceOfPartsPart);
        var _this;
        _this = _super.call(this, type, lookAhead);
        _this.parts = parts;
        return _this;
    }
    _create_class(SequenceOfPartsPart, [
        {
            key: "getParts",
            value: function getParts() {
                return this.parts;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback, callAhead) {
                var parsed;
                var savedIndex = state.getSavedIndex(), nodesLength = nodes.length;
                callback = callAhead === null ? null : function() {
                    var parsed;
                    parsed = callAhead();
                    return parsed;
                };
                parsed = (0, _parse.parseParts)(this.parts, nodes, state, callback, callAhead);
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
                var partsString = this.parts.reduce(function(partsString, part) {
                    var partString = part.asString();
                    if (partsString === null) {
                        partsString = partString;
                    } else {
                        partsString = "".concat(partsString, " ").concat(partString);
                    }
                    return partsString;
                }, null), string = "( ".concat(partsString, " )");
                return string;
            }
        }
    ], [
        {
            key: "fromParts",
            value: function fromParts(parts) {
                var type = _partTypes.SequenceOfPartsPartType, lookAhead = false, sequenceOfPartsPart = new SequenceOfPartsPart(type, lookAhead, parts);
                return sequenceOfPartsPart;
            }
        }
    ]);
    return SequenceOfPartsPart;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3NlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBwYXJzZVBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJzZVwiO1xuaW1wb3J0IHsgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBsb29rQWhlYWQsIHBhcnRzKSB7XG4gICAgc3VwZXIodHlwZSwgbG9va0FoZWFkKTtcblxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICBjYWxsYmFjayA9IChjYWxsQWhlYWQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICAgICAgICAgICAgICAgICAgcGFyc2VkID0gY2FsbEFoZWFkKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0cyh0aGlzLnBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gbm9kZXNMZW5ndGg7ICAvLy9cblxuICAgICAgbm9kZXMuc3BsaWNlKHN0YXJ0KTtcblxuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0c1N0cmluZ30gKWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0cyhwYXJ0cykge1xuICAgIGNvbnN0IHR5cGUgPSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1BhcnQodHlwZSwgbG9va0FoZWFkLCBwYXJ0cyk7XG5cbiAgICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJ0eXBlIiwibG9va0FoZWFkIiwicGFydHMiLCJnZXRQYXJ0cyIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwiY2FsbEFoZWFkIiwicGFyc2VkIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsInBhcnNlUGFydHMiLCJzdGFydCIsInNwbGljZSIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0IiwicGFydFN0cmluZyIsInN0cmluZyIsImZyb21QYXJ0cyIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIiwic2VxdWVuY2VPZlBhcnRzUGFydCIsIk5vblRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7a0VBTE87cUJBRUQ7eUJBQ2E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBQSxBQUFNQSxvQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUEsb0JBQ1BDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxLQUFLO2dDQURmSDs7a0NBRVhDLE1BQU1DO1FBRVosTUFBS0MsS0FBSyxHQUFHQTs7O2tCQUpJSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsS0FBSztZQUNuQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxTQUFTO2dCQUNyQyxJQUFJQztnQkFFSixJQUFNQyxhQUFhSixNQUFNSyxhQUFhLElBQ2hDQyxjQUFjUCxNQUFNUSxNQUFNO2dCQUVoQ04sV0FBVyxBQUFDQyxjQUFjLE9BQ1osT0FDRTtvQkFDRSxJQUFJQztvQkFFSkEsU0FBU0Q7b0JBRVQsT0FBT0M7Z0JBQ1Q7Z0JBRWhCQSxTQUFTSyxJQUFBQSxpQkFBVSxFQUFDLElBQUksQ0FBQ1osS0FBSyxFQUFFRyxPQUFPQyxPQUFPQyxVQUFVQztnQkFFeEQsSUFBSSxDQUFDQyxRQUFRO29CQUNYLElBQU1NLFFBQVFILGFBQWMsR0FBRztvQkFFL0JQLE1BQU1XLE1BQU0sQ0FBQ0Q7b0JBRWJULE1BQU1XLFNBQVMsQ0FBQ1A7Z0JBQ2xCO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsY0FBYyxJQUFJLENBQUNqQixLQUFLLENBQUNrQixNQUFNLENBQUMsU0FBQ0QsYUFBYUU7b0JBQzVDLElBQU1DLGFBQWFELEtBQUtILFFBQVE7b0JBRWhDLElBQUlDLGdCQUFnQixNQUFNO3dCQUN4QkEsY0FBY0c7b0JBQ2hCLE9BQU87d0JBQ0xILGNBQWMsQUFBQyxHQUFpQkcsT0FBZkgsYUFBWSxLQUFjLE9BQVhHO29CQUNsQztvQkFFQSxPQUFPSDtnQkFDVCxHQUFHLE9BQ0hJLFNBQVMsQUFBQyxLQUFnQixPQUFaSixhQUFZO2dCQUVoQyxPQUFPSTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFVBQVV0QixLQUFLO2dCQUNwQixJQUFNRixPQUFPeUIsa0NBQXVCLEVBQzlCeEIsWUFBWSxPQUNaeUIsc0JBQXNCLElBNURYM0Isb0JBNERtQ0MsTUFBTUMsV0FBV0M7Z0JBRXJFLE9BQU93QjtZQUNUOzs7V0EvRG1CM0I7RUFBNEI0QixvQkFBZSJ9