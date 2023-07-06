"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OneOrMorePartsPart;
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
            key: "asString",
            value: function asString() {
                var partString = this.part.asString(), string = "".concat(partString).concat(plus);
                return string;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback) {
                var parsed;
                var part = this.getPart(), partNodes = [], savedIndex = state.getSavedIndex();
                parsed = parsePart(part, partNodes, state, callback);
                if (parsed) {
                    push(nodes, partNodes);
                }
                if (!parsed) {
                    state.backtrack(savedIndex);
                }
                return parsed;
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
function parsePart(part, nodes, state, callback) {
    var parsed;
    if (callback === null) {
        parsed = part.parse(nodes, state, callback);
        if (parsed) {
            parsePart(part, nodes, state, callback);
        }
    } else {
        parsed = part.parse(nodes, state, function() {
            var parsed = callback();
            if (!parsed) {
                parsed = parsePart(part, nodes, state, callback);
            }
            return parsed;
        });
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IE9uZU9yTW9yZVBhcnRzUGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHBsdXMgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPbmVPck1vcmVQYXJ0c1BhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBsb29rQWhlYWQsIHBhcnQpIHtcbiAgICBzdXBlcih0eXBlLCBsb29rQWhlYWQpO1xuXG4gICAgdGhpcy5wYXJ0ID0gcGFydDtcbiAgfVxuXG4gIGdldFBhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRTdHJpbmcgPSB0aGlzLnBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtwYXJ0U3RyaW5nfSR7cGx1c31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3QgcGFydCA9IHRoaXMuZ2V0UGFydCgpLFxuICAgICAgICAgIHBhcnROb2RlcyA9IFtdLFxuICAgICAgICAgIHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnQocGFydCwgcGFydE5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcHVzaChub2RlcywgcGFydE5vZGVzKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcnQocGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICAgIGxvb2tBaGVhZCA9IGZhbHNlLFxuICAgICAgICAgIG9uZU9yTW9yZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQodHlwZSwgbG9va0FoZWFkLCBwYXJ0KTtcblxuICAgIHJldHVybiBvbmVPck1vcmVQYXJ0c1BhcnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgbGV0IHBhcnNlZDtcblxuICBpZiAoY2FsbGJhY2sgPT09IG51bGwpIHtcbiAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCAoKSA9PiB7XG4gICAgICBsZXQgcGFyc2VkID0gY2FsbGJhY2soKTtcblxuICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdLCJuYW1lcyI6WyJPbmVPck1vcmVQYXJ0c1BhcnQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJwbHVzIiwic3BlY2lhbFN5bWJvbHMiLCJ0eXBlIiwibG9va0FoZWFkIiwicGFydCIsImdldFBhcnQiLCJhc1N0cmluZyIsInBhcnRTdHJpbmciLCJzdHJpbmciLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInBhcnROb2RlcyIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFyc2VQYXJ0IiwiYmFja3RyYWNrIiwiZnJvbVBhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIiwib25lT3JNb3JlUGFydHNQYXJ0IiwiTm9uVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7Ozt5QkFWVTsyQkFDQTtrRUFFSDt5QkFFVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRCxNQUNGLEFBQUVFLE9BQVNDLDJCQUFjLENBQXZCRDtBQUVPLElBQUEsQUFBTUgsbUNBK0NsQixBQS9DWTtjQUFNQTsrQkFBQUE7YUFBQUEsbUJBQ1BLLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJO2dDQURkUDs7a0NBRVhLLE1BQU1DO1FBRVosTUFBS0MsSUFBSSxHQUFHQTs7O2tCQUpLUDs7WUFPbkJRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsSUFBSTtZQUNsQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLElBQUksQ0FBQ0gsSUFBSSxDQUFDRSxRQUFRLElBQy9CRSxTQUFTLEFBQUMsR0FBZVIsT0FBYk8sWUFBa0IsT0FBTFA7Z0JBRS9CLE9BQU9RO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVE7Z0JBQzFCLElBQUlDO2dCQUVKLElBQU1ULE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CUyxZQUFZLEVBQUUsRUFDZEMsYUFBYUosTUFBTUssYUFBYTtnQkFFdENILFNBQVNJLFVBQVViLE1BQU1VLFdBQVdILE9BQU9DO2dCQUUzQyxJQUFJQyxRQUFRO29CQUNWZixLQUFLWSxPQUFPSTtnQkFDZDtnQkFFQSxJQUFJLENBQUNELFFBQVE7b0JBQ1hGLE1BQU1PLFNBQVMsQ0FBQ0g7Z0JBQ2xCO2dCQUVBLE9BQU9GO1lBQ1Q7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0EsU0FBU2YsSUFBSTtnQkFDbEIsSUFBTUYsT0FBT2tCLGlDQUFzQixFQUM3QmpCLFlBQVksT0FDWmtCLHFCQUFxQixJQXpDVnhCLG1CQXlDaUNLLE1BQU1DLFdBQVdDO2dCQUVuRSxPQUFPaUI7WUFDVDs7O1dBNUNtQnhCO0VBQTJCeUIsb0JBQWU7QUErQy9ELFNBQVNMLFVBQVViLElBQUksRUFBRU0sS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVE7SUFDN0MsSUFBSUM7SUFFSixJQUFJRCxhQUFhLE1BQU07UUFDckJDLFNBQVNULEtBQUtLLEtBQUssQ0FBQ0MsT0FBT0MsT0FBT0M7UUFFbEMsSUFBSUMsUUFBUTtZQUNWSSxVQUFVYixNQUFNTSxPQUFPQyxPQUFPQztRQUNoQztJQUNGLE9BQU87UUFDTEMsU0FBU1QsS0FBS0ssS0FBSyxDQUFDQyxPQUFPQyxPQUFPO1lBQ2hDLElBQUlFLFNBQVNEO1lBRWIsSUFBSSxDQUFDQyxRQUFRO2dCQUNYQSxTQUFTSSxVQUFVYixNQUFNTSxPQUFPQyxPQUFPQztZQUN6QztZQUVBLE9BQU9DO1FBQ1Q7SUFDRjtJQUVBLE9BQU9BO0FBQ1QifQ==