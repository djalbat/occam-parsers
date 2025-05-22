"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return OneOrMorePartsPart;
    },
    get parseOneOrMorePartsPart () {
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
var plus = _occamlexers.specialSymbols.plus;
var OneOrMorePartsPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(OneOrMorePartsPart, NonTerminalPart);
    function OneOrMorePartsPart(type, callAhead, part) {
        _class_call_check(this, OneOrMorePartsPart);
        var _this;
        _this = _call_super(this, OneOrMorePartsPart, [
            type,
            callAhead
        ]);
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
                var type = _partTypes.OneOrMorePartsPartType, callAhead = false, oneOrMorePartsPart = new OneOrMorePartsPart(type, callAhead, part);
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
            parsed = (0, _zeroOrMoreParts.parseZeroOrMorePartsPart)(part, nodes, state, callback, callAhead);
            return parsed;
        });
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuaW1wb3J0IHsgcGFyc2VaZXJvT3JNb3JlUGFydHNQYXJ0IH0gZnJvbSBcIi4vemVyb09yTW9yZVBhcnRzXCI7XG5cbmNvbnN0IHsgcGx1cyB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9uZU9yTW9yZVBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGNhbGxBaGVhZCwgcGFydCkge1xuICAgIHN1cGVyKHR5cGUsIGNhbGxBaGVhZCk7XG5cbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICBwYXJzZWQgPSBwYXJzZU9uZU9yTW9yZVBhcnRzUGFydCh0aGlzLnBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBub2Rlc0xlbmd0aDsgIC8vL1xuXG4gICAgICBub2Rlcy5zcGxpY2Uoc3RhcnQpO1xuXG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRTdHJpbmcgPSB0aGlzLnBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtwYXJ0U3RyaW5nfSR7cGx1c31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydChwYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgICAgY2FsbEFoZWFkID0gZmFsc2UsXG4gICAgICAgICAgb25lT3JNb3JlUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydCh0eXBlLCBjYWxsQWhlYWQsIHBhcnQpO1xuXG4gICAgcmV0dXJuIG9uZU9yTW9yZVBhcnRzUGFydDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VPbmVPck1vcmVQYXJ0c1BhcnQocGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgaWYgKGNhbGxBaGVhZCA9PT0gbnVsbCkge1xuICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHBhcnNlWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuICAgIH1cblxuXG4gIH0gZWxzZSB7XG5cblxuXG4gICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssICgpID0+IHtcbiAgICAgICAgbGV0IHBhcnNlZDtcblxuICAgICAgICBwYXJzZWQgPSBwYXJzZVplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfSk7XG5cbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG4iXSwibmFtZXMiOlsiT25lT3JNb3JlUGFydHNQYXJ0IiwicGFyc2VPbmVPck1vcmVQYXJ0c1BhcnQiLCJwbHVzIiwic3BlY2lhbFN5bWJvbHMiLCJ0eXBlIiwiY2FsbEFoZWFkIiwicGFydCIsImdldFBhcnQiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4Iiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJzdGFydCIsInNwbGljZSIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwicGFydFN0cmluZyIsInN0cmluZyIsImZyb21QYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsIm9uZU9yTW9yZVBhcnRzUGFydCIsIk5vblRlcm1pbmFsUGFydCIsInBhcnNlWmVyb09yTW9yZVBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQVdxQkE7O1FBOENMQztlQUFBQTs7OzJCQXZEZTtrRUFFSDt5QkFFVzsrQkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFNLEFBQUVDLE9BQVNDLDJCQUFjLENBQXZCRDtBQUVPLElBQUEsQUFBTUYsbUNBQU47Y0FBTUE7YUFBQUEsbUJBQ1BJLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJO2dDQURkTjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEk7WUFBTUM7O1FBRVosTUFBS0MsSUFBSSxHQUFHQTs7O2tCQUpLTjs7WUFPbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsSUFBSTtZQUNsQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFTixTQUFTO2dCQUNyQyxJQUFJTztnQkFFSixJQUFNQyxhQUFhSCxNQUFNSSxhQUFhLElBQ2hDQyxjQUFjTixNQUFNTyxNQUFNO2dCQUVoQ0osU0FBU1gsd0JBQXdCLElBQUksQ0FBQ0ssSUFBSSxFQUFFRyxPQUFPQyxPQUFPQyxVQUFVTjtnQkFFcEUsSUFBSSxDQUFDTyxRQUFRO29CQUNYLElBQU1LLFFBQVFGLGFBQWMsR0FBRztvQkFFL0JOLE1BQU1TLE1BQU0sQ0FBQ0Q7b0JBRWJQLE1BQU1TLFNBQVMsQ0FBQ047Z0JBQ2xCO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNmLElBQUksQ0FBQ2MsUUFBUSxJQUMvQkUsU0FBUyxBQUFDLEdBQWVwQixPQUFibUIsWUFBa0IsT0FBTG5CO2dCQUUvQixPQUFPb0I7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTakIsSUFBSTtnQkFDbEIsSUFBTUYsT0FBT29CLGlDQUFzQixFQUM3Qm5CLFlBQVksT0FDWm9CLHFCQUFxQixJQXhDVnpCLG1CQXdDaUNJLE1BQU1DLFdBQVdDO2dCQUVuRSxPQUFPbUI7WUFDVDs7O1dBM0NtQnpCO0VBQTJCMEIsb0JBQWU7QUE4Q3hELFNBQVN6Qix3QkFBd0JLLElBQUksRUFBRUcsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRU4sU0FBUztJQUM3RSxJQUFJTztJQUVKLElBQUlQLGNBQWMsTUFBTTtRQUN0Qk8sU0FBU04sS0FBS0UsS0FBSyxDQUFDQyxPQUFPQyxPQUFPQyxVQUFVTjtRQUU1QyxJQUFJTyxRQUFRO1lBQ1ZlLElBQUFBLHlDQUF3QixFQUFDckIsTUFBTUcsT0FBT0MsT0FBT0MsVUFBVU47UUFDekQ7SUFHRixPQUFPO1FBSUhPLFNBQVNOLEtBQUtFLEtBQUssQ0FBQ0MsT0FBT0MsT0FBT0MsVUFBVTtZQUMxQyxJQUFJQztZQUVKQSxTQUFTZSxJQUFBQSx5Q0FBd0IsRUFBQ3JCLE1BQU1HLE9BQU9DLE9BQU9DLFVBQVVOO1lBRWhFLE9BQU9PO1FBQ1Q7SUFFSjtJQUVBLE9BQU9BO0FBQ1QifQ==