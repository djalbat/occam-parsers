"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentTextarea;
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
var ContentTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(ContentTextarea, Textarea);
    var _super = _create_super(ContentTextarea);
    function ContentTextarea() {
        _class_call_check(this, ContentTextarea);
        return _super.apply(this, arguments);
    }
    _create_class(ContentTextarea, [
        {
            key: "getContent",
            value: function getContent() {
                var value = this.getValue(), content = value; ///
                return content;
            }
        },
        {
            key: "setContent",
            value: function setContent(content) {
                var value = content; ///
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getContent = this.getContent.bind(this), setContent = this.setContent.bind(this);
                return {
                    getContent: getContent,
                    setContent: setContent
                };
            }
        }
    ]);
    return ContentTextarea;
}(_textarea.default);
_define_property(ContentTextarea, "defaultProperties", {
    className: "content",
    spellCheck: "false"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2NvbnRlbnQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudFRleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gY29udGVudDsgIC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldENvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRDb250ZW50ID0gdGhpcy5zZXRDb250ZW50LmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldENvbnRlbnQsXG4gICAgICBzZXRDb250ZW50XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImNvbnRlbnRcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQ29udGVudFRleHRhcmVhIiwiZ2V0Q29udGVudCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7K0RBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU4sSUFBQSxBQUFNQSxnQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWE7Z0JBQ1gsSUFBTUMsUUFBUSxJQUFJLENBQUNDLFFBQVEsSUFDckJDLFVBQVVGLE9BQU8sR0FBRztnQkFFMUIsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXRCxPQUFPLEVBQUU7Z0JBQ2xCLElBQU1GLFFBQVFFLFNBQVUsR0FBRztnQkFFM0IsSUFBSSxDQUFDRSxRQUFRLENBQUNKO1lBQ2hCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxJQUFNTixhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDTyxJQUFJLENBQUMsSUFBSSxHQUN0Q0gsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ0csSUFBSSxDQUFDLElBQUk7Z0JBRTVDLE9BQVE7b0JBQ05QLFlBQUFBO29CQUNBSSxZQUFBQTtnQkFDRjtZQUNGOzs7V0F0Qm1CTDtFQUF3QlMsaUJBQVE7QUF3Qm5ELGlCQXhCbUJULGlCQXdCWlUscUJBQW9CO0lBQ3pCQyxXQUFXO0lBQ1hDLFlBQVk7QUFDZCJ9