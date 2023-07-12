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
                if (callAhead === null) {
                    parsed = parseOptionalPart(this.part, partNodes, state, callback, callAhead);
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
                    parsed = parseOptionalPart(this.part, partNodes, state, callback, callAhead);
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
function parseOptionalPart(part, partNodes, state, callback, callAhead) {
    var parsed;
    var nodes = partNodes; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL29wdGlvbmFsUGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBwb3BQYXJ0Tm9kZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25vZGVzXCI7XG5pbXBvcnQgeyBPcHRpb25hbFBhcnRQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcXVlc3Rpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uYWxQYXJ0UGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGxvb2tBaGVhZCwgcGFydCkge1xuICAgIHN1cGVyKHR5cGUsIGxvb2tBaGVhZCk7XG5cbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHBhcnROb2RlcyA9IFtdLFxuICAgICAgICAgIHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBpZiAoY2FsbEFoZWFkID09PSBudWxsKSB7XG4gICAgICBwYXJzZWQgPSBwYXJzZU9wdGlvbmFsUGFydCh0aGlzLnBhcnQsIHBhcnROb2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHB1c2gobm9kZXMsIHBhcnROb2Rlcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrID0gKCkgPT4geyAgLy8vXG4gICAgICAgIGxldCBwYXJzZWQ7XG5cbiAgICAgICAgcHVzaChub2RlcywgcGFydE5vZGVzKTtcblxuICAgICAgICBwYXJzZWQgPSBjYWxsQWhlYWQoKTtcblxuICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgIHBvcFBhcnROb2Rlcyhub2RlcywgcGFydE5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9O1xuXG4gICAgICBwYXJzZWQgPSBwYXJzZU9wdGlvbmFsUGFydCh0aGlzLnBhcnQsIHBhcnROb2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRTdHJpbmcgPSB0aGlzLnBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtwYXJ0U3RyaW5nfSR7cXVlc3Rpb25NYXJrfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0KHBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gT3B0aW9uYWxQYXJ0UGFydFR5cGUsXG4gICAgICAgICAgbG9va0FoZWFkID0gZmFsc2UsXG4gICAgICAgICAgb3B0aW9uYWxQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KHR5cGUsIGxvb2tBaGVhZCwgcGFydCk7XG5cbiAgICByZXR1cm4gb3B0aW9uYWxQYXJ0UGFydDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VPcHRpb25hbFBhcnQocGFydCwgcGFydE5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICBsZXQgcGFyc2VkO1xuXG4gIGNvbnN0IG5vZGVzID0gcGFydE5vZGVzOyAgLy8vXG5cbiAgaWYgKGNhbGxBaGVhZCA9PT0gbnVsbCkge1xuICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuXG5cblxuXG4gICAgcGFyc2VkID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBwYXJzZWQgPSBjYWxsQWhlYWQoKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cblxuXG5cblxuXG5cblxuXG5cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbIk9wdGlvbmFsUGFydFBhcnQiLCJwYXJzZU9wdGlvbmFsUGFydCIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsInF1ZXN0aW9uTWFyayIsInNwZWNpYWxTeW1ib2xzIiwidHlwZSIsImxvb2tBaGVhZCIsInBhcnQiLCJnZXRQYXJ0IiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJwYXJ0Tm9kZXMiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInBvcFBhcnROb2RlcyIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwicGFydFN0cmluZyIsInN0cmluZyIsImZyb21QYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydFR5cGUiLCJvcHRpb25hbFBhcnRQYXJ0IiwiTm9uVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBYXFCQTs7SUFnRUxDLGlCQUFpQjtlQUFqQkE7Ozt5QkEzRWU7MkJBQ0E7a0VBRUg7cUJBRUM7eUJBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQsTUFDRixBQUFFRSxlQUFpQkMsMkJBQWMsQ0FBL0JEO0FBRU8sSUFBQSxBQUFNSixpQ0FnRWxCLEFBaEVZO2NBQU1BOytCQUFBQTthQUFBQSxpQkFDUE0sSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUk7Z0NBRGRSOztrQ0FFWE0sTUFBTUM7UUFFWixNQUFLQyxJQUFJLEdBQUdBOzs7a0JBSktSOztZQU9uQlMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxJQUFJO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7Z0JBQ3JDLElBQUlDO2dCQUVKLElBQU1DLFlBQVksRUFBRSxFQUNkQyxhQUFhTCxNQUFNTSxhQUFhO2dCQUV0QyxJQUFJSixjQUFjLE1BQU07b0JBQ3RCQyxTQUFTZCxrQkFBa0IsSUFBSSxDQUFDTyxJQUFJLEVBQUVRLFdBQVdKLE9BQU9DLFVBQVVDO29CQUVsRSxJQUFJQyxRQUFRO3dCQUNWYixLQUFLUyxPQUFPSztvQkFDZDtnQkFDRixPQUFPO29CQUNMSCxXQUFXO3dCQUNULElBQUlFO3dCQUVKYixLQUFLUyxPQUFPSzt3QkFFWkQsU0FBU0Q7d0JBRVQsSUFBSSxDQUFDQyxRQUFROzRCQUNYSSxJQUFBQSxtQkFBWSxFQUFDUixPQUFPSzt3QkFDdEI7d0JBRUEsT0FBT0Q7b0JBQ1Q7b0JBRUFBLFNBQVNkLGtCQUFrQixJQUFJLENBQUNPLElBQUksRUFBRVEsV0FBV0osT0FBT0MsVUFBVUM7Z0JBQ3BFO2dCQUVBLElBQUksQ0FBQ0MsUUFBUTtvQkFDWEgsTUFBTVEsU0FBUyxDQUFDSDtnQkFDbEI7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLElBQUksQ0FBQ2QsSUFBSSxDQUFDYSxRQUFRLElBQy9CRSxTQUFTLEFBQUMsR0FBZW5CLE9BQWJrQixZQUEwQixPQUFibEI7Z0JBRS9CLE9BQU9tQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNoQixJQUFJO2dCQUNsQixJQUFNRixPQUFPbUIsK0JBQW9CLEVBQzNCbEIsWUFBWSxPQUNabUIsbUJBQW1CLElBMURSMUIsaUJBMEQ2Qk0sTUFBTUMsV0FBV0M7Z0JBRS9ELE9BQU9rQjtZQUNUOzs7V0E3RG1CMUI7RUFBeUIyQixvQkFBZTtBQWdFdEQsU0FBUzFCLGtCQUFrQk8sSUFBSSxFQUFFUSxTQUFTLEVBQUVKLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxTQUFTO0lBQzNFLElBQUlDO0lBRUosSUFBTUosUUFBUUssV0FBWSxHQUFHO0lBRTdCLElBQUlGLGNBQWMsTUFBTTtRQUN0QkMsU0FBU1AsS0FBS0UsS0FBSyxDQUFDQyxPQUFPQyxPQUFPQyxVQUFVQztRQU01Q0MsU0FBUztJQUNYLE9BQU87UUFDTEEsU0FBU0Q7UUFFVCxJQUFJLENBQUNDLFFBQVE7WUFDWEEsU0FBU1AsS0FBS0UsS0FBSyxDQUFDQyxPQUFPQyxPQUFPQyxVQUFVQztRQVc5QztJQUNGO0lBRUEsT0FBT0M7QUFDVCJ9