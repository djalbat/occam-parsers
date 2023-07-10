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
        return ZeroOrMorePartsPart;
    },
    parseZeroOrMorePartsPart: function() {
        return parseZeroOrMorePartsPart;
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
var push = _necessary.arrayUtilities.push, asterisk = _occamlexers.specialSymbols.asterisk;
var ZeroOrMorePartsPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(ZeroOrMorePartsPart, NonTerminalPart);
    var _super = _create_super(ZeroOrMorePartsPart);
    function ZeroOrMorePartsPart(type, lookAhead, part) {
        _class_call_check(this, ZeroOrMorePartsPart);
        var _this;
        _this = _super.call(this, type, lookAhead);
        _this.part = part;
        return _this;
    }
    _create_class(ZeroOrMorePartsPart, [
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
                parsed = parseZeroOrMorePartsPart(this.part, partNodes, state, callback, callAhead);
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
                var partString = this.part.asString(), string = "".concat(partString).concat(asterisk);
                return string;
            }
        }
    ], [
        {
            key: "fromPart",
            value: function fromPart(part) {
                var type = _partTypes.ZeroOrMorePartsPartType, lookAhead = false, zeroOrMorePartsPart = new ZeroOrMorePartsPart(type, lookAhead, part);
                return zeroOrMorePartsPart;
            }
        }
    ]);
    return ZeroOrMorePartsPart;
}(_nonTerminal.default);
function parseZeroOrMorePartsPart(part, partNodes, state, callback, callAhead) {
    var parsed;
    var nodes = partNodes; ///
    if (callAhead !== null) {
        parsed = callAhead();
        if (!parsed) {
            parsed = part.parse(nodes, state, function() {
                var parsed;
                parsed = parseZeroOrMorePartsPart(part, nodes, state, callback, callAhead);
                return parsed;
            });
        }
    } else {
        parsed = part.parse(nodes, state, callback, callAhead);
        if (parsed) {
            parseZeroOrMorePartsPart(part, nodes, state, callback, callAhead);
        }
        parsed = true;
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYXN0ZXJpc2sgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBaZXJvT3JNb3JlUGFydHNQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IodHlwZSwgbG9va0FoZWFkLCBwYXJ0KSB7XG4gICAgc3VwZXIodHlwZSwgbG9va0FoZWFkKTtcblxuICAgIHRoaXMucGFydCA9IHBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnBhcnQ7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3QgcGFydE5vZGVzID0gW10sXG4gICAgICAgICAgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKTtcblxuICAgIGNvbnN0IHsgcnVsZU5hbWUgfSA9IG5vZGVzO1xuXG4gICAgT2JqZWN0LmFzc2lnbihwYXJ0Tm9kZXMsIHtcbiAgICAgIHJ1bGVOYW1lXG4gICAgfSk7XG5cbiAgICBwYXJzZWQgPSBwYXJzZVplcm9Pck1vcmVQYXJ0c1BhcnQodGhpcy5wYXJ0LCBwYXJ0Tm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHB1c2gobm9kZXMsIHBhcnROb2Rlcyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydFN0cmluZyA9IHRoaXMucGFydC5hc1N0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3BhcnRTdHJpbmd9JHthc3Rlcmlza31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydChwYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICAgIGxvb2tBaGVhZCA9IGZhbHNlLFxuICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydCh0eXBlLCBsb29rQWhlYWQsIHBhcnQpO1xuXG4gICAgcmV0dXJuIHplcm9Pck1vcmVQYXJ0c1BhcnQ7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0LCBwYXJ0Tm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgY29uc3Qgbm9kZXMgPSBwYXJ0Tm9kZXM7ICAvLy9cblxuICBpZiAoY2FsbEFoZWFkICE9PSBudWxsKSB7XG4gICAgcGFyc2VkID0gY2FsbEFoZWFkKCk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsICgpID0+IHtcbiAgICAgICAgbGV0IHBhcnNlZDtcblxuXG5cblxuICAgICAgICAgIHBhcnNlZCA9IHBhcnNlWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBwYXJzZVplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcbiAgICB9XG5cbiAgICBwYXJzZWQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdLCJuYW1lcyI6WyJaZXJvT3JNb3JlUGFydHNQYXJ0IiwicGFyc2VaZXJvT3JNb3JlUGFydHNQYXJ0IiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiYXN0ZXJpc2siLCJzcGVjaWFsU3ltYm9scyIsInR5cGUiLCJsb29rQWhlYWQiLCJwYXJ0IiwiZ2V0UGFydCIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwiY2FsbEFoZWFkIiwicGFyc2VkIiwicGFydE5vZGVzIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJydWxlTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwicGFydFN0cmluZyIsInN0cmluZyIsImZyb21QYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0IiwiTm9uVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBWXFCQTs7SUFvRExDLHdCQUF3QjtlQUF4QkE7Ozt5QkE5RGU7MkJBQ0E7a0VBRUg7eUJBRVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEMsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQsTUFDRixBQUFFRSxXQUFhQywyQkFBYyxDQUEzQkQ7QUFFTyxJQUFBLEFBQU1KLG9DQW9EbEIsQUFwRFk7Y0FBTUE7K0JBQUFBO2FBQUFBLG9CQUNQTSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsSUFBSTtnQ0FEZFI7O2tDQUVYTSxNQUFNQztRQUVaLE1BQUtDLElBQUksR0FBR0E7OztrQkFKS1I7O1lBT25CUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELElBQUk7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztnQkFDckMsSUFBSUM7Z0JBRUosSUFBTUMsWUFBWSxFQUFFLEVBQ2RDLGFBQWFMLE1BQU1NLGFBQWE7Z0JBRXRDLElBQU0sQUFBRUMsV0FBYVIsTUFBYlE7Z0JBRVJDLE9BQU9DLE1BQU0sQ0FBQ0wsV0FBVztvQkFDdkJHLFVBQUFBO2dCQUNGO2dCQUVBSixTQUFTZCx5QkFBeUIsSUFBSSxDQUFDTyxJQUFJLEVBQUVRLFdBQVdKLE9BQU9DLFVBQVVDO2dCQUV6RSxJQUFJQyxRQUFRO29CQUNWYixLQUFLUyxPQUFPSztnQkFDZDtnQkFFQSxJQUFJLENBQUNELFFBQVE7b0JBQ1hILE1BQU1VLFNBQVMsQ0FBQ0w7Z0JBQ2xCO2dCQUVBLE9BQU9GO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNoQixJQUFJLENBQUNlLFFBQVEsSUFDL0JFLFNBQVMsQUFBQyxHQUFlckIsT0FBYm9CLFlBQXNCLE9BQVRwQjtnQkFFL0IsT0FBT3FCO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU2xCLElBQUk7Z0JBQ2xCLElBQU1GLE9BQU9xQixrQ0FBdUIsRUFDOUJwQixZQUFZLE9BQ1pxQixzQkFBc0IsSUE5Q1g1QixvQkE4Q21DTSxNQUFNQyxXQUFXQztnQkFFckUsT0FBT29CO1lBQ1Q7OztXQWpEbUI1QjtFQUE0QjZCLG9CQUFlO0FBb0R6RCxTQUFTNUIseUJBQXlCTyxJQUFJLEVBQUVRLFNBQVMsRUFBRUosS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7SUFDbEYsSUFBSUM7SUFFSixJQUFNSixRQUFRSyxXQUFZLEdBQUc7SUFFN0IsSUFBSUYsY0FBYyxNQUFNO1FBQ3RCQyxTQUFTRDtRQUVULElBQUksQ0FBQ0MsUUFBUTtZQUNYQSxTQUFTUCxLQUFLRSxLQUFLLENBQUNDLE9BQU9DLE9BQU87Z0JBQ2hDLElBQUlHO2dCQUtGQSxTQUFTZCx5QkFBeUJPLE1BQU1HLE9BQU9DLE9BQU9DLFVBQVVDO2dCQUdsRSxPQUFPQztZQUNUO1FBQ0Y7SUFDRixPQUFPO1FBQ0xBLFNBQVNQLEtBQUtFLEtBQUssQ0FBQ0MsT0FBT0MsT0FBT0MsVUFBVUM7UUFFNUMsSUFBSUMsUUFBUTtZQUNWZCx5QkFBeUJPLE1BQU1HLE9BQU9DLE9BQU9DLFVBQVVDO1FBQ3pEO1FBRUFDLFNBQVM7SUFDWDtJQUVBLE9BQU9BO0FBQ1QifQ==