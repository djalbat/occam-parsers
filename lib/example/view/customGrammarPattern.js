"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CustomGrammarPatternView;
    }
});
var _view = /*#__PURE__*/ _interop_require_default(require("../view"));
var _lexer = /*#__PURE__*/ _interop_require_default(require("../../customGrammarPattern/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("../../customGrammarPattern/parser"));
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
var CustomGrammarPatternView = /*#__PURE__*/ function(View) {
    _inherits(CustomGrammarPatternView, View);
    function CustomGrammarPatternView() {
        _class_call_check(this, CustomGrammarPatternView);
        return _call_super(this, CustomGrammarPatternView, arguments);
    }
    _create_class(CustomGrammarPatternView, [
        {
            key: "getTokens",
            value: function getTokens(content) {
                var lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, customGrammarPatternLexer = _lexer.default.fromEntries(entries), tokens = customGrammarPatternLexer.tokenise(content);
                return tokens;
            }
        },
        {
            key: "getNode",
            value: function getNode(tokens) {
                var bnf = this.getBNF(), customGrammarPatternParser = _parser.default.fromBNF(bnf), node = customGrammarPatternParser.parse(tokens);
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
    return CustomGrammarPatternView;
}(_view.default);
_define_property(CustomGrammarPatternView, "initialContent", "adsf\n\n");
_define_property(CustomGrammarPatternView, "defaultProperties", {
    className: "custom-grammar-pattern"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvY3VzdG9tR3JhbW1hclBhdHRlcm4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuLi92aWV3XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyUGF0dGVybkxleGVyIGZyb20gXCIuLi8uLi9jdXN0b21HcmFtbWFyUGF0dGVybi9sZXhlclwiO1xuaW1wb3J0IEN1c3RvbUdyYW1tYXJQYXR0ZXJuUGFyc2VyIGZyb20gXCIuLi8uLi9jdXN0b21HcmFtbWFyUGF0dGVybi9wYXJzZXJcIjtcblxuY29uc3QgeyBibmYgfSA9IEN1c3RvbUdyYW1tYXJQYXR0ZXJuUGFyc2VyLFxuICAgICAgeyBlbnRyaWVzIH0gPSBDdXN0b21HcmFtbWFyUGF0dGVybkxleGVyO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyUGF0dGVyblZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgZ2V0VG9rZW5zKGNvbnRlbnQpIHtcbiAgICBjb25zdCBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgIGN1c3RvbUdyYW1tYXJQYXR0ZXJuTGV4ZXIgPSBDdXN0b21HcmFtbWFyUGF0dGVybkxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIHRva2VucyA9IGN1c3RvbUdyYW1tYXJQYXR0ZXJuTGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSh0b2tlbnMpIHtcbiAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJQYXR0ZXJuUGFyc2VyID0gQ3VzdG9tR3JhbW1hclBhdHRlcm5QYXJzZXIuZnJvbUJORihibmYpLFxuICAgICAgICAgIG5vZGUgPSBjdXN0b21HcmFtbWFyUGF0dGVyblBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQ29udGVudCB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXMsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBpbml0aWFsQ29udGVudDsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYGFkc2ZcblxuYDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImN1c3RvbS1ncmFtbWFyLXBhdHRlcm5cIixcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyUGF0dGVyblZpZXciLCJibmYiLCJDdXN0b21HcmFtbWFyUGF0dGVyblBhcnNlciIsImVudHJpZXMiLCJDdXN0b21HcmFtbWFyUGF0dGVybkxleGVyIiwiZ2V0VG9rZW5zIiwiY29udGVudCIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJjdXN0b21HcmFtbWFyUGF0dGVybkxleGVyIiwiZnJvbUVudHJpZXMiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsImdldE5vZGUiLCJnZXRCTkYiLCJjdXN0b21HcmFtbWFyUGF0dGVyblBhcnNlciIsImZyb21CTkYiLCJub2RlIiwicGFyc2UiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxDb250ZW50Iiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxFbnRyaWVzIiwia2V5VXBIYW5kbGVyIiwiVmlldyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OzsyREFSSjs0REFFcUI7NkRBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZDLElBQU0sQUFBRUMsTUFBUUMsZUFBMEIsQ0FBbENELEtBQ0YsQUFBRUUsVUFBWUMsY0FBeUIsQ0FBckNEO0FBRU8sSUFBQSxBQUFNSCx5Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkssS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLE9BQU87Z0JBQ2YsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ0MsaUJBQWlCLElBQ3ZDTCxVQUFVSSxnQkFDVkUsNEJBQTRCTCxjQUF5QixDQUFDTSxXQUFXLENBQUNQLFVBQ2xFUSxTQUFTRiwwQkFBMEJHLFFBQVEsQ0FBQ047Z0JBRWxELE9BQU9LO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUYsTUFBTTtnQkFDWixJQUFNVixNQUFNLElBQUksQ0FBQ2EsTUFBTSxJQUNqQkMsNkJBQTZCYixlQUEwQixDQUFDYyxPQUFPLENBQUNmLE1BQ2hFZ0IsT0FBT0YsMkJBQTJCRyxLQUFLLENBQUNQO2dCQUU5QyxPQUFPTTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsYUFBYTtnQkFFbEIsSUFBTSxBQUFFQyxpQkFBbUIsSUFBSSxDQUFDLFdBQVcsQ0FBbkNBLGdCQUNGZCxpQkFBaUJKLFNBQ2pCRyxVQUFVZSxnQkFBZ0IsR0FBRztnQkFFbkMsSUFBSSxDQUFDQyxNQUFNLENBQUNyQjtnQkFFWixJQUFJLENBQUNzQixVQUFVLENBQUNqQjtnQkFFaEIsSUFBSSxDQUFDa0IsaUJBQWlCLENBQUNqQjtnQkFFdkIsSUFBSSxDQUFDa0IsWUFBWTtZQUNuQjs7O1dBaENtQnpCO0VBQWlDMEIsYUFBSTtBQWtDeEQsaUJBbENtQjFCLDBCQWtDWnFCLGtCQUFrQjtBQUl6QixpQkF0Q21CckIsMEJBc0NaMkIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==