"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ZeroOrMorePartsPart;
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
    function ZeroOrMorePartsPart(type, part) {
        _class_call_check(this, ZeroOrMorePartsPart);
        var _this;
        _this = _super.call(this, type);
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
            key: "asString",
            value: function asString() {
                var partString = this.part.asString(), string = "".concat(partString).concat(asterisk);
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
                var type = _partTypes.ZeroOrMorePartsPartType, zeroOrMorePartsPart = new ZeroOrMorePartsPart(type, part);
                return zeroOrMorePartsPart;
            }
        }
    ]);
    return ZeroOrMorePartsPart;
}(_nonTerminal.default);
function parsePart(part, nodes, state, callback) {
    var parsed;
    if (callback !== null) {
        parsed = callback();
        if (!parsed) {
            var zeroOrMorePartsPartCallback = function() {
                var parsed = parsePart(part, nodes, state, callback);
                return parsed;
            };
            Object.assign(zeroOrMorePartsPartCallback, {
                callback: callback,
                part: part
            });
            state.callbacks.push(zeroOrMorePartsPartCallback);
            parsed = part.parse(nodes, state, function() {
                return zeroOrMorePartsPartCallback;
            });
            state.callbacks.pop();
        }
    } else {
        parsed = part.parse(nodes, state, callback);
        if (parsed) {
            parsePart(part, nodes, state, callback);
        }
        parsed = true;
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYXN0ZXJpc2sgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBaZXJvT3JNb3JlUGFydHNQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IodHlwZSwgcGFydCkge1xuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5wYXJ0ID0gcGFydDtcbiAgfVxuXG4gIGdldFBhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRTdHJpbmcgPSB0aGlzLnBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtwYXJ0U3RyaW5nfSR7YXN0ZXJpc2t9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHBhcnQgPSB0aGlzLmdldFBhcnQoKSxcbiAgICAgICAgICBwYXJ0Tm9kZXMgPSBbXSxcbiAgICAgICAgICBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0KHBhcnQsIHBhcnROb2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHB1c2gobm9kZXMsIHBhcnROb2Rlcyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0KHBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gWmVyb09yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHR5cGUsIHBhcnQpO1xuXG4gICAgcmV0dXJuIHplcm9Pck1vcmVQYXJ0c1BhcnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgbGV0IHBhcnNlZDtcblxuICBpZiAoY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICBwYXJzZWQgPSBjYWxsYmFjaygpO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9O1xuXG4gICAgICBPYmplY3QuYXNzaWduKHplcm9Pck1vcmVQYXJ0c1BhcnRDYWxsYmFjaywge1xuICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgcGFydFxuICAgICAgfSk7XG5cbiAgICAgIHN0YXRlLmNhbGxiYWNrcy5wdXNoKHplcm9Pck1vcmVQYXJ0c1BhcnRDYWxsYmFjayk7XG5cbiAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCAoKSA9PiB6ZXJvT3JNb3JlUGFydHNQYXJ0Q2FsbGJhY2spO1xuXG4gICAgICBzdGF0ZS5jYWxsYmFja3MucG9wKCk7XG5cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHBhcnNlUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBwYXJzZWQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdLCJuYW1lcyI6WyJaZXJvT3JNb3JlUGFydHNQYXJ0IiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiYXN0ZXJpc2siLCJzcGVjaWFsU3ltYm9scyIsInR5cGUiLCJwYXJ0IiwiZ2V0UGFydCIsImFzU3RyaW5nIiwicGFydFN0cmluZyIsInN0cmluZyIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyc2VkIiwicGFydE5vZGVzIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJwYXJzZVBhcnQiLCJiYWNrdHJhY2siLCJmcm9tUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIiwiemVyb09yTW9yZVBhcnRzUGFydCIsIk5vblRlcm1pbmFsUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnRDYWxsYmFjayIsIk9iamVjdCIsImFzc2lnbiIsImNhbGxiYWNrcyIsInBvcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7eUJBVlU7MkJBQ0E7a0VBRUg7eUJBRVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEMsSUFBTSxBQUFFQyxPQUFTQywwQkFBVEQsTUFDRixBQUFFRSxXQUFhQyw0QkFBYkQ7QUFFTyxJQUFBLEFBQU1ILG9DQThDbEIsQUE5Q1k7Y0FBTUE7K0JBQUFBO2FBQUFBLG9CQUNQSyxJQUFJLEVBQUVDLElBQUk7Z0NBREhOOztrQ0FFWEs7UUFFTixNQUFLQyxPQUFPQTs7O2tCQUpLTjs7WUFPbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Q7WUFDZDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLElBQUksQ0FBQ0gsS0FBS0UsWUFDdkJFLFNBQVMsQUFBQyxHQUFlUCxPQUFiTSxZQUFzQixPQUFUTjtnQkFFL0IsT0FBT087WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUTtnQkFDMUIsSUFBSUM7Z0JBRUosSUFBTVQsT0FBTyxJQUFJLENBQUNDLFdBQ1pTLFlBQVksRUFBRSxFQUNkQyxhQUFhSixNQUFNSztnQkFFekJILFNBQVNJLFVBQVViLE1BQU1VLFdBQVdILE9BQU9DO2dCQUUzQyxJQUFJQyxRQUFRO29CQUNWZCxLQUFLVyxPQUFPSTtnQkFDZDtnQkFFQSxJQUFJLENBQUNELFFBQVE7b0JBQ1hGLE1BQU1PLFVBQVVIO2dCQUNsQjtnQkFFQSxPQUFPRjtZQUNUOzs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNmLElBQUk7Z0JBQ2xCLElBQU1ELE9BQU9pQixvQ0FDUEMsc0JBQXNCLElBeENYdkIsb0JBd0NtQ0ssTUFBTUM7Z0JBRTFELE9BQU9pQjtZQUNUOzs7V0EzQ21CdkI7RUFBNEJ3QjtBQThDakQsU0FBU0wsVUFBVWIsSUFBSSxFQUFFTSxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUTtJQUM3QyxJQUFJQztJQUVKLElBQUlELGFBQWEsTUFBTTtRQUNyQkMsU0FBU0Q7UUFFVCxJQUFJLENBQUNDLFFBQVE7WUFDWCxJQUFNVSw4QkFBOEI7Z0JBQ2xDLElBQU1WLFNBQVNJLFVBQVViLE1BQU1NLE9BQU9DLE9BQU9DO2dCQUU3QyxPQUFPQztZQUNUO1lBRUFXLE9BQU9DLE9BQU9GLDZCQUE2QjtnQkFDekNYLFVBQUFBO2dCQUNBUixNQUFBQTtZQUNGO1lBRUFPLE1BQU1lLFVBQVUzQixLQUFLd0I7WUFFckJWLFNBQVNULEtBQUtLLE1BQU1DLE9BQU9DLE9BQU87dUJBQU1ZOztZQUV4Q1osTUFBTWUsVUFBVUM7UUFFbEI7SUFDRixPQUFPO1FBQ0xkLFNBQVNULEtBQUtLLE1BQU1DLE9BQU9DLE9BQU9DO1FBRWxDLElBQUlDLFFBQVE7WUFDVkksVUFBVWIsTUFBTU0sT0FBT0MsT0FBT0M7UUFDaEM7UUFFQUMsU0FBUztJQUNYO0lBRUEsT0FBT0E7QUFDVCJ9