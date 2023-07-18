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
            parsed = (0, _zeroOrMoreParts.parseZeroOrMorePartsPart)(part, nodes, state, callback, callAhead);
            return parsed;
        });
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuaW1wb3J0IHsgcGFyc2VaZXJvT3JNb3JlUGFydHNQYXJ0IH0gZnJvbSBcIi4vemVyb09yTW9yZVBhcnRzXCI7XG5cbmNvbnN0IHsgcGx1cyB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9uZU9yTW9yZVBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGxvb2tBaGVhZCwgcGFydCkge1xuICAgIHN1cGVyKHR5cGUsIGxvb2tBaGVhZCk7XG5cbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICBwYXJzZWQgPSBwYXJzZU9uZU9yTW9yZVBhcnRzUGFydCh0aGlzLnBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBub2Rlc0xlbmd0aDsgIC8vL1xuXG4gICAgICBub2Rlcy5zcGxpY2Uoc3RhcnQpO1xuXG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRTdHJpbmcgPSB0aGlzLnBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtwYXJ0U3RyaW5nfSR7cGx1c31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydChwYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgICAgbG9va0FoZWFkID0gZmFsc2UsXG4gICAgICAgICAgb25lT3JNb3JlUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydCh0eXBlLCBsb29rQWhlYWQsIHBhcnQpO1xuXG4gICAgcmV0dXJuIG9uZU9yTW9yZVBhcnRzUGFydDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VPbmVPck1vcmVQYXJ0c1BhcnQocGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgaWYgKGNhbGxBaGVhZCA9PT0gbnVsbCkge1xuICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHBhcnNlWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuICAgIH1cblxuXG4gIH0gZWxzZSB7XG5cblxuXG4gICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssICgpID0+IHtcbiAgICAgICAgbGV0IHBhcnNlZDtcblxuICAgICAgICBwYXJzZWQgPSBwYXJzZVplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfSk7XG5cbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG4iXSwibmFtZXMiOlsiT25lT3JNb3JlUGFydHNQYXJ0IiwicGFyc2VPbmVPck1vcmVQYXJ0c1BhcnQiLCJwbHVzIiwic3BlY2lhbFN5bWJvbHMiLCJ0eXBlIiwibG9va0FoZWFkIiwicGFydCIsImdldFBhcnQiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsImNhbGxBaGVhZCIsInBhcnNlZCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4Iiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJzdGFydCIsInNwbGljZSIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwicGFydFN0cmluZyIsInN0cmluZyIsImZyb21QYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsIm9uZU9yTW9yZVBhcnRzUGFydCIsIk5vblRlcm1pbmFsUGFydCIsInBhcnNlWmVyb09yTW9yZVBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQVdxQkE7O0lBOENMQyx1QkFBdUI7ZUFBdkJBOzs7MkJBdkRlO2tFQUVIO3lCQUVXOytCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU0sQUFBRUMsT0FBU0MsMkJBQWMsQ0FBdkJEO0FBRU8sSUFBQSxBQUFNRixtQ0E4Q2xCLEFBOUNZO2NBQU1BOytCQUFBQTthQUFBQSxtQkFDUEksSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUk7Z0NBRGROOztrQ0FFWEksTUFBTUM7UUFFWixNQUFLQyxJQUFJLEdBQUdBOzs7a0JBSktOOztZQU9uQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxJQUFJO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7Z0JBQ3JDLElBQUlDO2dCQUVKLElBQU1DLGFBQWFKLE1BQU1LLGFBQWEsSUFDaENDLGNBQWNQLE1BQU1RLE1BQU07Z0JBRWhDSixTQUFTWix3QkFBd0IsSUFBSSxDQUFDSyxJQUFJLEVBQUVHLE9BQU9DLE9BQU9DLFVBQVVDO2dCQUVwRSxJQUFJLENBQUNDLFFBQVE7b0JBQ1gsSUFBTUssUUFBUUYsYUFBYyxHQUFHO29CQUUvQlAsTUFBTVUsTUFBTSxDQUFDRDtvQkFFYlIsTUFBTVUsU0FBUyxDQUFDTjtnQkFDbEI7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLElBQUksQ0FBQ2hCLElBQUksQ0FBQ2UsUUFBUSxJQUMvQkUsU0FBUyxBQUFDLEdBQWVyQixPQUFib0IsWUFBa0IsT0FBTHBCO2dCQUUvQixPQUFPcUI7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTbEIsSUFBSTtnQkFDbEIsSUFBTUYsT0FBT3FCLGlDQUFzQixFQUM3QnBCLFlBQVksT0FDWnFCLHFCQUFxQixJQXhDVjFCLG1CQXdDaUNJLE1BQU1DLFdBQVdDO2dCQUVuRSxPQUFPb0I7WUFDVDs7O1dBM0NtQjFCO0VBQTJCMkIsb0JBQWU7QUE4Q3hELFNBQVMxQix3QkFBd0JLLElBQUksRUFBRUcsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztJQUM3RSxJQUFJQztJQUVKLElBQUlELGNBQWMsTUFBTTtRQUN0QkMsU0FBU1AsS0FBS0UsS0FBSyxDQUFDQyxPQUFPQyxPQUFPQyxVQUFVQztRQUU1QyxJQUFJQyxRQUFRO1lBQ1ZlLElBQUFBLHlDQUF3QixFQUFDdEIsTUFBTUcsT0FBT0MsT0FBT0MsVUFBVUM7UUFDekQ7SUFHRixPQUFPO1FBSUhDLFNBQVNQLEtBQUtFLEtBQUssQ0FBQ0MsT0FBT0MsT0FBT0MsVUFBVTtZQUMxQyxJQUFJRTtZQUVKQSxTQUFTZSxJQUFBQSx5Q0FBd0IsRUFBQ3RCLE1BQU1HLE9BQU9DLE9BQU9DLFVBQVVDO1lBRWhFLE9BQU9DO1FBQ1Q7SUFFSjtJQUVBLE9BQU9BO0FBQ1QifQ==