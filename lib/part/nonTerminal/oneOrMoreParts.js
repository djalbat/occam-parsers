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
var _nodes = require("../../utilities/nodes");
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
                if (callAhead === null) {
                    parsed = parseOneOrMorePartsPart(this.part, partNodes, state, callback, callAhead);
                    if (parsed) {
                        push(nodes, partNodes);
                    }
                } else {
                    callback = function() {
                        var parsed;
                        push(nodes, partNodes);
                        parsed = callAhead();
                        if (!parsed) {
                            (0, _nodes.popPartNodes)(nodes, partNodes);
                        }
                        return parsed;
                    };
                    parsed = parseOneOrMorePartsPart(this.part, partNodes, state, callback, callAhead);
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
    if (callAhead === null) {
        parsed = part.parse(nodes, state, callback, callAhead);
        if (parsed) {
            parseOneOrMorePartsPart(part, nodes, state, callback, callAhead);
        }
    } else {
        parsed = part.parse(nodes, state, callback, function() {
            var parsed;
            parsed = callAhead();
            if (!parsed) {
                parsed = parseOneOrMorePartsPart(part, nodes, state, callback, callAhead);
            }
            return parsed;
        });
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IHBvcFBhcnROb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbm9kZXNcIjtcbmltcG9ydCB7IE9uZU9yTW9yZVBhcnRzUGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHBsdXMgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPbmVPck1vcmVQYXJ0c1BhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBsb29rQWhlYWQsIHBhcnQpIHtcbiAgICBzdXBlcih0eXBlLCBsb29rQWhlYWQpO1xuXG4gICAgdGhpcy5wYXJ0ID0gcGFydDtcbiAgfVxuXG4gIGdldFBhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydDtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBwYXJ0Tm9kZXMgPSBbXSxcbiAgICAgICAgICBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpO1xuXG4gICAgaWYgKGNhbGxBaGVhZCA9PT0gbnVsbCkge1xuICAgICAgcGFyc2VkID0gcGFyc2VPbmVPck1vcmVQYXJ0c1BhcnQodGhpcy5wYXJ0LCBwYXJ0Tm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBwdXNoKG5vZGVzLCBwYXJ0Tm9kZXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayA9ICgpID0+IHsgIC8vL1xuICAgICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICAgIHB1c2gobm9kZXMsIHBhcnROb2Rlcyk7XG5cbiAgICAgICAgcGFyc2VkID0gY2FsbEFoZWFkKCk7XG5cbiAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICBwb3BQYXJ0Tm9kZXMobm9kZXMsIHBhcnROb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfTtcblxuICAgICAgcGFyc2VkID0gcGFyc2VPbmVPck1vcmVQYXJ0c1BhcnQodGhpcy5wYXJ0LCBwYXJ0Tm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0U3RyaW5nID0gdGhpcy5wYXJ0LmFzU3RyaW5nKCksXG4gICAgICAgICAgc3RyaW5nID0gYCR7cGFydFN0cmluZ30ke3BsdXN9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcnQocGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICAgIGxvb2tBaGVhZCA9IGZhbHNlLFxuICAgICAgICAgIG9uZU9yTW9yZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQodHlwZSwgbG9va0FoZWFkLCBwYXJ0KTtcblxuICAgIHJldHVybiBvbmVPck1vcmVQYXJ0c1BhcnQ7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlT25lT3JNb3JlUGFydHNQYXJ0KHBhcnQsIHBhcnROb2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgbGV0IHBhcnNlZDtcblxuICBjb25zdCBub2RlcyA9IHBhcnROb2RlczsgIC8vL1xuXG4gIGlmIChjYWxsQWhlYWQgPT09IG51bGwpIHtcbiAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBwYXJzZU9uZU9yTW9yZVBhcnRzUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuICAgIH1cblxuXG4gIH0gZWxzZSB7XG5cblxuXG5cbiAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgKCkgPT4ge1xuICAgICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICAgIHBhcnNlZCA9IGNhbGxBaGVhZCgpO1xuXG4gICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgcGFyc2VkID0gcGFyc2VPbmVPck1vcmVQYXJ0c1BhcnQocGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9KTtcblxuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdLCJuYW1lcyI6WyJPbmVPck1vcmVQYXJ0c1BhcnQiLCJwYXJzZU9uZU9yTW9yZVBhcnRzUGFydCIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsInBsdXMiLCJzcGVjaWFsU3ltYm9scyIsInR5cGUiLCJsb29rQWhlYWQiLCJwYXJ0IiwiZ2V0UGFydCIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwiY2FsbEFoZWFkIiwicGFyc2VkIiwicGFydE5vZGVzIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJwb3BQYXJ0Tm9kZXMiLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsInBhcnRTdHJpbmciLCJzdHJpbmciLCJmcm9tUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydFR5cGUiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJOb25UZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUFhcUJBOztJQWdFTEMsdUJBQXVCO2VBQXZCQTs7O3lCQTNFZTsyQkFDQTtrRUFFSDtxQkFFQzt5QkFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRCxNQUNGLEFBQUVFLE9BQVNDLDJCQUFjLENBQXZCRDtBQUVPLElBQUEsQUFBTUosbUNBZ0VsQixBQWhFWTtjQUFNQTsrQkFBQUE7YUFBQUEsbUJBQ1BNLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJO2dDQURkUjs7a0NBRVhNLE1BQU1DO1FBRVosTUFBS0MsSUFBSSxHQUFHQTs7O2tCQUpLUjs7WUFPbkJTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsSUFBSTtZQUNsQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxTQUFTO2dCQUNyQyxJQUFJQztnQkFFSixJQUFNQyxZQUFZLEVBQUUsRUFDZEMsYUFBYUwsTUFBTU0sYUFBYTtnQkFFdEMsSUFBSUosY0FBYyxNQUFNO29CQUN0QkMsU0FBU2Qsd0JBQXdCLElBQUksQ0FBQ08sSUFBSSxFQUFFUSxXQUFXSixPQUFPQyxVQUFVQztvQkFFeEUsSUFBSUMsUUFBUTt3QkFDVmIsS0FBS1MsT0FBT0s7b0JBQ2Q7Z0JBQ0YsT0FBTztvQkFDTEgsV0FBVzt3QkFDVCxJQUFJRTt3QkFFSmIsS0FBS1MsT0FBT0s7d0JBRVpELFNBQVNEO3dCQUVULElBQUksQ0FBQ0MsUUFBUTs0QkFDWEksSUFBQUEsbUJBQVksRUFBQ1IsT0FBT0s7d0JBQ3RCO3dCQUVBLE9BQU9EO29CQUNUO29CQUVBQSxTQUFTZCx3QkFBd0IsSUFBSSxDQUFDTyxJQUFJLEVBQUVRLFdBQVdKLE9BQU9DLFVBQVVDO2dCQUMxRTtnQkFFQSxJQUFJLENBQUNDLFFBQVE7b0JBQ1hILE1BQU1RLFNBQVMsQ0FBQ0g7Z0JBQ2xCO2dCQUVBLE9BQU9GO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNkLElBQUksQ0FBQ2EsUUFBUSxJQUMvQkUsU0FBUyxBQUFDLEdBQWVuQixPQUFia0IsWUFBa0IsT0FBTGxCO2dCQUUvQixPQUFPbUI7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTaEIsSUFBSTtnQkFDbEIsSUFBTUYsT0FBT21CLGlDQUFzQixFQUM3QmxCLFlBQVksT0FDWm1CLHFCQUFxQixJQTFEVjFCLG1CQTBEaUNNLE1BQU1DLFdBQVdDO2dCQUVuRSxPQUFPa0I7WUFDVDs7O1dBN0RtQjFCO0VBQTJCMkIsb0JBQWU7QUFnRXhELFNBQVMxQix3QkFBd0JPLElBQUksRUFBRVEsU0FBUyxFQUFFSixLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztJQUNqRixJQUFJQztJQUVKLElBQU1KLFFBQVFLLFdBQVksR0FBRztJQUU3QixJQUFJRixjQUFjLE1BQU07UUFDdEJDLFNBQVNQLEtBQUtFLEtBQUssQ0FBQ0MsT0FBT0MsT0FBT0MsVUFBVUM7UUFFNUMsSUFBSUMsUUFBUTtZQUNWZCx3QkFBd0JPLE1BQU1HLE9BQU9DLE9BQU9DLFVBQVVDO1FBQ3hEO0lBR0YsT0FBTztRQUtIQyxTQUFTUCxLQUFLRSxLQUFLLENBQUNDLE9BQU9DLE9BQU9DLFVBQVU7WUFDMUMsSUFBSUU7WUFFSkEsU0FBU0Q7WUFFVCxJQUFJLENBQUNDLFFBQVE7Z0JBQ1hBLFNBQVNkLHdCQUF3Qk8sTUFBTUcsT0FBT0MsT0FBT0MsVUFBVUM7WUFDakU7WUFFQSxPQUFPQztRQUNUO0lBRUo7SUFFQSxPQUFPQTtBQUNUIn0=