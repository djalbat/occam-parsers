"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EndOfLineNode;
    }
});
var _terminal = /*#__PURE__*/ _interop_require_default(require("../terminal"));
var _endOfLineNode = /*#__PURE__*/ _interop_require_default(require("../../parseTree/endOfLineNode"));
var _constants = require("../../constants");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var EndOfLineNode = /*#__PURE__*/ function(TerminalNode) {
    _inherits(EndOfLineNode, TerminalNode);
    var _super = _create_super(EndOfLineNode);
    function EndOfLineNode() {
        _class_call_check(this, EndOfLineNode);
        return _super.apply(this, arguments);
    }
    _create_class(EndOfLineNode, [
        {
            key: "isEndOfLineNode",
            value: function isEndOfLineNode() {
                var endOfLineNode = true;
                return endOfLineNode;
            }
        },
        {
            key: "getContent",
            value: function getContent() {
                var faithful = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
                var content = faithful ? _get(_get_prototype_of(EndOfLineNode.prototype), "getContent", this).call(this) : _constants.EMPTY_STRING; ///
                return content;
            }
        },
        {
            key: "asParseTree",
            value: function asParseTree(tokens) {
                var endOfLineNodeParseTree = _endOfLineNode.default.fromNothing(), parseTree = endOfLineNodeParseTree; ///
                return parseTree;
            }
        }
    ], [
        {
            key: "fromSignificantToken",
            value: function fromSignificantToken(significantToken) {
                return _terminal.default.fromSignificantToken(EndOfLineNode, significantToken);
            }
        }
    ]);
    return EndOfLineNode;
}(_terminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsL2VuZE9mTGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vdGVybWluYWxcIjtcbmltcG9ydCBFbmRPZkxpbmVOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi8uLi9wYXJzZVRyZWUvZW5kT2ZMaW5lTm9kZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZU5vZGUgZXh0ZW5kcyBUZXJtaW5hbE5vZGUge1xuICBpc0VuZE9mTGluZU5vZGUoKSB7XG4gICAgY29uc3QgZW5kT2ZMaW5lTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lTm9kZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoZmFpdGhmdWwgPSBmYWxzZSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBmYWl0aGZ1bCA/XG4gICAgICAgICAgICAgICAgICAgICAgc3VwZXIuZ2V0Q29udGVudCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORzsgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IGVuZE9mTGluZU5vZGVQYXJzZVRyZWUgPSBFbmRPZkxpbmVOb2RlUGFyc2VUcmVlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFyc2VUcmVlID0gZW5kT2ZMaW5lTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKSB7IHJldHVybiBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oRW5kT2ZMaW5lTm9kZSwgc2lnbmlmaWNhbnRUb2tlbik7IH1cbn1cbiJdLCJuYW1lcyI6WyJFbmRPZkxpbmVOb2RlIiwiaXNFbmRPZkxpbmVOb2RlIiwiZW5kT2ZMaW5lTm9kZSIsImdldENvbnRlbnQiLCJmYWl0aGZ1bCIsImNvbnRlbnQiLCJFTVBUWV9TVFJJTkciLCJhc1BhcnNlVHJlZSIsInRva2VucyIsImVuZE9mTGluZU5vZGVQYXJzZVRyZWUiLCJFbmRPZkxpbmVOb2RlUGFyc2VUcmVlIiwiZnJvbU5vdGhpbmciLCJwYXJzZVRyZWUiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJUZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OytEQUxJO29FQUNVO3lCQUVOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLDhCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxnQkFBZ0I7Z0JBRXRCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQVdDLFdBQUFBLGlFQUFXO2dCQUNwQixJQUFNQyxVQUFVRCxXQUNFLHVCQVRESiwwQkFTT0csY0FBTixJQUFLLGVBQ0hHLHVCQUFZLEVBQUUsR0FBRztnQkFFckMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZQyxNQUFNO2dCQUNoQixJQUFNQyx5QkFBeUJDLHNCQUFzQixDQUFDQyxXQUFXLElBQzNEQyxZQUFZSCx3QkFBeUIsR0FBRztnQkFFOUMsT0FBT0c7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxxQkFBcUJDLGdCQUFnQjtnQkFBSSxPQUFPQyxpQkFBWSxDQUFDRixvQkFBb0IsQ0F0QnJFYixlQXNCcUZjO1lBQW1COzs7V0F0QnhHZDtFQUFzQmUsaUJBQVkifQ==