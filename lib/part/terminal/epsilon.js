"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EpsilonPart;
    }
});
var _occamlexers = require("occam-lexers");
var _terminal = /*#__PURE__*/ _interop_require_default(require("../../part/terminal"));
var _epsilon = /*#__PURE__*/ _interop_require_default(require("../../node/terminal/epsilon"));
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
var epsilon = _occamlexers.specialSymbols.epsilon;
var EpsilonPart = /*#__PURE__*/ function(TerminalPart) {
    _inherits(EpsilonPart, TerminalPart);
    var _super = _create_super(EpsilonPart);
    function EpsilonPart() {
        _class_call_check(this, EpsilonPart);
        return _super.apply(this, arguments);
    }
    _create_class(EpsilonPart, [
        {
            key: "parse",
            value: function parse(nodes, state, callback) {
                var parsed;
                var savedIndex = state.getSavedIndex(), epsilonBNFNode = _epsilon.default.fromNothing();
                parsed = epsilonBNFNode !== null;
                if (parsed) {
                    nodes.push(epsilonBNFNode);
                    if (callback !== null) {
                        parsed = callback();
                        if (!parsed) {
                            nodes.pop();
                        }
                    }
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
                var string = epsilon; ///
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return new EpsilonPart();
            }
        }
    ]);
    return EpsilonPart;
}(_terminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL2Vwc2lsb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L3Rlcm1pbmFsXCI7XG5pbXBvcnQgRXBzaWxvbkJORk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvdGVybWluYWwvZXBzaWxvblwiO1xuXG5jb25zdCB7IGVwc2lsb24gfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcHNpbG9uUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBlcHNpbG9uQk5GTm9kZSA9IEVwc2lsb25CTkZOb2RlLmZyb21Ob3RoaW5nKCk7XG5cbiAgICBwYXJzZWQgPSAoZXBzaWxvbkJORk5vZGUgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgbm9kZXMucHVzaChlcHNpbG9uQk5GTm9kZSk7XG5cbiAgICAgIGlmIChjYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgICBwYXJzZWQgPSBjYWxsYmFjaygpO1xuXG4gICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgbm9kZXMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBlcHNpbG9uOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIG5ldyBFcHNpbG9uUGFydCgpOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkVwc2lsb25QYXJ0IiwiZXBzaWxvbiIsInNwZWNpYWxTeW1ib2xzIiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJwYXJzZWQiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsImVwc2lsb25CTkZOb2RlIiwiRXBzaWxvbkJORk5vZGUiLCJmcm9tTm90aGluZyIsInB1c2giLCJwb3AiLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsInN0cmluZyIsImNsb25lIiwiVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsyQkFQVTsrREFFTjs4REFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFNLEFBQUVDLFVBQVlDLDJCQUFjLENBQTFCRDtBQUVPLElBQUEsQUFBTUQsNEJBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFO2dCQUM1QixJQUFJQztnQkFFSixJQUFNQyxhQUFhSCxNQUFNSSxhQUFhLElBQ2hDQyxpQkFBaUJDLGdCQUFjLENBQUNDLFdBQVc7Z0JBRWpETCxTQUFVRyxtQkFBbUIsSUFBSTtnQkFFakMsSUFBSUgsUUFBUTtvQkFDVkgsTUFBTVMsSUFBSSxDQUFDSDtvQkFFWCxJQUFJSixhQUFhLElBQUksRUFBRTt3QkFDckJDLFNBQVNEO3dCQUVULElBQUksQ0FBQ0MsUUFBUTs0QkFDWEgsTUFBTVUsR0FBRzt3QkFDWCxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxJQUFJLENBQUNQLFFBQVE7b0JBQ1hGLE1BQU1VLFNBQVMsQ0FBQ1A7Z0JBQ2xCLENBQUM7Z0JBRUQsT0FBT0Q7WUFDVDs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULElBQU1DLFNBQVNoQixTQUFTLEdBQUc7Z0JBRTNCLE9BQU9nQjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVE7Z0JBQUUsT0FBTyxJQWxDRWxCO1lBa0NpQjs7O1dBbENqQkE7RUFBb0JtQixpQkFBWSJ9