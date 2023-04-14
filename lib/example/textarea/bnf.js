"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BNFTextarea;
    }
});
var _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var BNFTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(BNFTextarea, Textarea);
    var _super = _create_super(BNFTextarea);
    function BNFTextarea() {
        _class_call_check(this, BNFTextarea);
        return _super.apply(this, arguments);
    }
    _create_class(BNFTextarea, [
        {
            key: "getBNF",
            value: function getBNF() {
                var value = this.getValue(), bnf = value; ///
                return bnf;
            }
        },
        {
            key: "setBNF",
            value: function setBNF(bnf) {
                var value = bnf;
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getBNF = this.getBNF.bind(this), setBNF = this.setBNF.bind(this);
                return {
                    getBNF: getBNF,
                    setBNF: setBNF
                };
            }
        }
    ]);
    return BNFTextarea;
}(_textarea.default);
_define_property(BNFTextarea, "defaultProperties", {
    className: "bnf",
    spellCheck: "false"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2JuZi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCTkZUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0Qk5GKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGJuZiA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBibmY7XG4gIH1cblxuICBzZXRCTkYoYm5mKSB7XG4gICAgY29uc3QgdmFsdWUgPSBibmY7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Qk5GID0gdGhpcy5nZXRCTkYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRCTkYgPSB0aGlzLnNldEJORi5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRCTkYsXG4gICAgICBzZXRCTkZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYm5mXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkJORlRleHRhcmVhIiwiZ2V0Qk5GIiwidmFsdWUiLCJnZXRWYWx1ZSIsImJuZiIsInNldEJORiIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7K0RBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU4sSUFBQSxBQUFNQSw0QkFBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVM7Z0JBQ1AsSUFBTUMsUUFBUSxJQUFJLENBQUNDLFFBQVEsSUFDckJDLE1BQU1GLE9BQU8sR0FBRztnQkFFdEIsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPRCxHQUFHLEVBQUU7Z0JBQ1YsSUFBTUYsUUFBUUU7Z0JBRWQsSUFBSSxDQUFDRSxRQUFRLENBQUNKO1lBQ2hCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxJQUFNTixTQUFTLElBQUksQ0FBQ0EsTUFBTSxDQUFDTyxJQUFJLENBQUMsSUFBSSxHQUM5QkgsU0FBUyxJQUFJLENBQUNBLE1BQU0sQ0FBQ0csSUFBSSxDQUFDLElBQUk7Z0JBRXBDLE9BQVE7b0JBQ05QLFFBQUFBO29CQUNBSSxRQUFBQTtnQkFDRjtZQUNGOzs7V0F0Qm1CTDtFQUFvQlMsaUJBQVE7QUF3Qi9DLGlCQXhCbUJULGFBd0JaVSxxQkFBb0I7SUFDekJDLFdBQVc7SUFDWEMsWUFBWTtBQUNkIn0=