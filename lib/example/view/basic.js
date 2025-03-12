"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BasicView;
    }
});
var _view = /*#__PURE__*/ _interop_require_default(require("../view"));
var _lexer = /*#__PURE__*/ _interop_require_default(require("../basic/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("../basic/parser"));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var bnf = _parser.default.bnf, entries = _lexer.default.entries;
var BasicView = /*#__PURE__*/ function(View) {
    _inherits(BasicView, View);
    function BasicView() {
        _class_call_check(this, BasicView);
        return _call_super(this, BasicView, arguments);
    }
    _create_class(BasicView, [
        {
            key: "getTokens",
            value: function getTokens(content) {
                var lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, basicLexer = _lexer.default.fromEntries(entries), tokens = basicLexer.tokenise(content);
                return tokens;
            }
        },
        {
            key: "getNode",
            value: function getNode(tokens) {
                var bnf = this.getBNF(), basicParser = _parser.default.fromBNF(bnf), node = basicParser.parse(tokens);
                return node;
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var initialContent = this.constructor.initialContent, lexicalEntries = entries, content = initialContent; ///
                this.setBNF(bnf);
                this.setContent(content);
                this.setLexicalEntries(lexicalEntries);
                this.keyUpHandler();
            }
        }
    ]);
    return BasicView;
}(_view.default);
_define_property(BasicView, "initialContent", "f:A:M\n");
_define_property(BasicView, "defaultProperties", {
    className: "basic"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYmFzaWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuLi92aWV3XCI7XG5pbXBvcnQgQmFzaWNMZXhlciBmcm9tIFwiLi4vYmFzaWMvbGV4ZXJcIjtcbmltcG9ydCBCYXNpY1BhcnNlciBmcm9tIFwiLi4vYmFzaWMvcGFyc2VyXCI7XG5cbmNvbnN0IHsgYm5mIH0gPSBCYXNpY1BhcnNlcixcbiAgICAgIHsgZW50cmllcyB9ID0gQmFzaWNMZXhlcjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNWaWV3IGV4dGVuZHMgVmlldyB7XG4gIGdldFRva2Vucyhjb250ZW50KSB7XG4gICAgY29uc3QgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCksXG4gICAgICAgICAgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICB0b2tlbnMgPSBiYXNpY0xleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldE5vZGUodG9rZW5zKSB7XG4gICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICBiYXNpY1BhcnNlciA9IEJhc2ljUGFyc2VyLmZyb21CTkYoYm5mKSxcbiAgICAgICAgICBub2RlID0gYmFzaWNQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbENvbnRlbnQgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQ7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGBmOkE6TVxuYDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJhc2ljXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJCYXNpY1ZpZXciLCJibmYiLCJCYXNpY1BhcnNlciIsImVudHJpZXMiLCJCYXNpY0xleGVyIiwiZ2V0VG9rZW5zIiwiY29udGVudCIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJiYXNpY0xleGVyIiwiZnJvbUVudHJpZXMiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsImdldE5vZGUiLCJnZXRCTkYiLCJiYXNpY1BhcnNlciIsImZyb21CTkYiLCJub2RlIiwicGFyc2UiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxDb250ZW50IiwiY29uc3RydWN0b3IiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbEVudHJpZXMiLCJrZXlVcEhhbmRsZXIiLCJWaWV3IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzJEQVBKOzREQUNNOzZEQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFNLEFBQUVDLE1BQVFDLGVBQVcsQ0FBbkJELEtBQ0YsQUFBRUUsVUFBWUMsY0FBVSxDQUF0QkQ7QUFFTyxJQUFBLEFBQU1ILDBCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkssS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLE9BQU87Z0JBQ2YsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ0MsaUJBQWlCLElBQ3ZDTCxVQUFVSSxnQkFDVkUsYUFBYUwsY0FBVSxDQUFDTSxXQUFXLENBQUNQLFVBQ3BDUSxTQUFTRixXQUFXRyxRQUFRLENBQUNOO2dCQUVuQyxPQUFPSztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFGLE1BQU07Z0JBQ1osSUFBTVYsTUFBTSxJQUFJLENBQUNhLE1BQU0sSUFDakJDLGNBQWNiLGVBQVcsQ0FBQ2MsT0FBTyxDQUFDZixNQUNsQ2dCLE9BQU9GLFlBQVlHLEtBQUssQ0FBQ1A7Z0JBRS9CLE9BQU9NO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxhQUFhO2dCQUVsQixJQUFNLEFBQUVDLGlCQUFtQixJQUFJLENBQUNDLFdBQVcsQ0FBbkNELGdCQUNGZCxpQkFBaUJKLFNBQ2pCRyxVQUFVZSxnQkFBZ0IsR0FBRztnQkFFbkMsSUFBSSxDQUFDRSxNQUFNLENBQUN0QjtnQkFFWixJQUFJLENBQUN1QixVQUFVLENBQUNsQjtnQkFFaEIsSUFBSSxDQUFDbUIsaUJBQWlCLENBQUNsQjtnQkFFdkIsSUFBSSxDQUFDbUIsWUFBWTtZQUNuQjs7O1dBaENtQjFCO0VBQWtCMkIsYUFBSTtBQWtDekMsaUJBbENtQjNCLFdBa0NacUIsa0JBQWtCO0FBR3pCLGlCQXJDbUJyQixXQXFDWjRCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=