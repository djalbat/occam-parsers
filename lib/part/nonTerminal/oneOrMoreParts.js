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
var _occamlexers = require("occam-lexers");
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal"));
var _partTypes = require("../../partTypes");
var _zeroOrMoreParts = require("./zeroOrMoreParts");
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
var plus = _occamlexers.specialSymbols.plus;
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
                var savedIndex = state.getSavedIndex(), nodesLength = nodes.length;
                parsed = parseOneOrMorePartsPart(this.part, nodes, state, callback, callAhead);
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
function parseOneOrMorePartsPart(part, nodes, state, callback, callAhead) {
    var parsed;
    if (callAhead === null) {
        parsed = part.parse(nodes, state, callback, callAhead);
        if (parsed) {
            (0, _zeroOrMoreParts.parseZeroOrMorePartsPart)(part, nodes, state, callback, callAhead);
        }
    } else {
        parsed = part.parse(nodes, state, callback, function() {
            var parsed;
            parsed = callAhead();
            if (!parsed) {
                parsed = (0, _zeroOrMoreParts.parseZeroOrMorePartsPart)(part, nodes, state, callback, callAhead);
            }
            return parsed;
        });
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuaW1wb3J0IHsgcGFyc2VaZXJvT3JNb3JlUGFydHNQYXJ0IH0gZnJvbSBcIi4vemVyb09yTW9yZVBhcnRzXCI7XG5cbmNvbnN0IHsgcGx1cyB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9uZU9yTW9yZVBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGxvb2tBaGVhZCwgcGFydCkge1xuICAgIHN1cGVyKHR5cGUsIGxvb2tBaGVhZCk7XG5cbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICBwYXJzZWQgPSBwYXJzZU9uZU9yTW9yZVBhcnRzUGFydCh0aGlzLnBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBub2Rlc0xlbmd0aDsgIC8vL1xuXG4gICAgICBub2Rlcy5zcGxpY2Uoc3RhcnQpO1xuXG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRTdHJpbmcgPSB0aGlzLnBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtwYXJ0U3RyaW5nfSR7cGx1c31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydChwYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgICAgbG9va0FoZWFkID0gZmFsc2UsXG4gICAgICAgICAgb25lT3JNb3JlUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydCh0eXBlLCBsb29rQWhlYWQsIHBhcnQpO1xuXG4gICAgcmV0dXJuIG9uZU9yTW9yZVBhcnRzUGFydDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VPbmVPck1vcmVQYXJ0c1BhcnQocGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgaWYgKGNhbGxBaGVhZCA9PT0gbnVsbCkge1xuICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHBhcnNlWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuICAgIH1cblxuXG4gIH0gZWxzZSB7XG5cblxuXG4gICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssICgpID0+IHtcbiAgICAgICAgbGV0IHBhcnNlZDtcblxuICAgICAgICBwYXJzZWQgPSBjYWxsQWhlYWQoKTtcblxuICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgIHBhcnNlZCA9IHBhcnNlWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH0pO1xuXG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbIk9uZU9yTW9yZVBhcnRzUGFydCIsInBhcnNlT25lT3JNb3JlUGFydHNQYXJ0IiwicGx1cyIsInNwZWNpYWxTeW1ib2xzIiwidHlwZSIsImxvb2tBaGVhZCIsInBhcnQiLCJnZXRQYXJ0IiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwic3RhcnQiLCJzcGxpY2UiLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsInBhcnRTdHJpbmciLCJzdHJpbmciLCJmcm9tUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydFR5cGUiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJOb25UZXJtaW5hbFBhcnQiLCJwYXJzZVplcm9Pck1vcmVQYXJ0c1BhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUFXcUJBOztJQThDTEMsdUJBQXVCO2VBQXZCQTs7OzJCQXZEZTtrRUFFSDt5QkFFVzsrQkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFNLEFBQUVDLE9BQVNDLDJCQUFjLENBQXZCRDtBQUVPLElBQUEsQUFBTUYsbUNBOENsQixBQTlDWTtjQUFNQTsrQkFBQUE7YUFBQUEsbUJBQ1BJLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJO2dDQURkTjs7a0NBRVhJLE1BQU1DO1FBRVosTUFBS0MsSUFBSSxHQUFHQTs7O2tCQUpLTjs7WUFPbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsSUFBSTtZQUNsQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxTQUFTO2dCQUNyQyxJQUFJQztnQkFFSixJQUFNQyxhQUFhSixNQUFNSyxhQUFhLElBQ2hDQyxjQUFjUCxNQUFNUSxNQUFNO2dCQUVoQ0osU0FBU1osd0JBQXdCLElBQUksQ0FBQ0ssSUFBSSxFQUFFRyxPQUFPQyxPQUFPQyxVQUFVQztnQkFFcEUsSUFBSSxDQUFDQyxRQUFRO29CQUNYLElBQU1LLFFBQVFGLGFBQWMsR0FBRztvQkFFL0JQLE1BQU1VLE1BQU0sQ0FBQ0Q7b0JBRWJSLE1BQU1VLFNBQVMsQ0FBQ047Z0JBQ2xCO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNoQixJQUFJLENBQUNlLFFBQVEsSUFDL0JFLFNBQVMsQUFBQyxHQUFlckIsT0FBYm9CLFlBQWtCLE9BQUxwQjtnQkFFL0IsT0FBT3FCO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU2xCLElBQUk7Z0JBQ2xCLElBQU1GLE9BQU9xQixpQ0FBc0IsRUFDN0JwQixZQUFZLE9BQ1pxQixxQkFBcUIsSUF4Q1YxQixtQkF3Q2lDSSxNQUFNQyxXQUFXQztnQkFFbkUsT0FBT29CO1lBQ1Q7OztXQTNDbUIxQjtFQUEyQjJCLG9CQUFlO0FBOEN4RCxTQUFTMUIsd0JBQXdCSyxJQUFJLEVBQUVHLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7SUFDN0UsSUFBSUM7SUFFSixJQUFJRCxjQUFjLE1BQU07UUFDdEJDLFNBQVNQLEtBQUtFLEtBQUssQ0FBQ0MsT0FBT0MsT0FBT0MsVUFBVUM7UUFFNUMsSUFBSUMsUUFBUTtZQUNWZSxJQUFBQSx5Q0FBd0IsRUFBQ3RCLE1BQU1HLE9BQU9DLE9BQU9DLFVBQVVDO1FBQ3pEO0lBR0YsT0FBTztRQUlIQyxTQUFTUCxLQUFLRSxLQUFLLENBQUNDLE9BQU9DLE9BQU9DLFVBQVU7WUFDMUMsSUFBSUU7WUFFSkEsU0FBU0Q7WUFFVCxJQUFJLENBQUNDLFFBQVE7Z0JBQ1hBLFNBQVNlLElBQUFBLHlDQUF3QixFQUFDdEIsTUFBTUcsT0FBT0MsT0FBT0MsVUFBVUM7WUFDbEU7WUFFQSxPQUFPQztRQUNUO0lBRUo7SUFFQSxPQUFPQTtBQUNUIn0=