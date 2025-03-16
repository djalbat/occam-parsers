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
                var bnf = this.getBNF(), basicParser = _parser.default.fromBNF(bnf);
                var node = basicParser.parse(tokens);
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
_define_property(BasicView, "initialContent", "ehfg\n");
_define_property(BasicView, "defaultProperties", {
    className: "basic"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYmFzaWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuLi92aWV3XCI7XG5pbXBvcnQgQmFzaWNMZXhlciBmcm9tIFwiLi4vYmFzaWMvbGV4ZXJcIjtcbmltcG9ydCBCYXNpY1BhcnNlciBmcm9tIFwiLi4vYmFzaWMvcGFyc2VyXCI7XG5cbmNvbnN0IHsgYm5mIH0gPSBCYXNpY1BhcnNlcixcbiAgICAgIHsgZW50cmllcyB9ID0gQmFzaWNMZXhlcjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNWaWV3IGV4dGVuZHMgVmlldyB7XG4gIGdldFRva2Vucyhjb250ZW50KSB7XG4gICAgY29uc3QgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCksXG4gICAgICAgICAgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICB0b2tlbnMgPSBiYXNpY0xleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldE5vZGUodG9rZW5zKSB7XG4gICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICBiYXNpY1BhcnNlciA9IEJhc2ljUGFyc2VyLmZyb21CTkYoYm5mKTtcblxuICAgIGNvbnN0IG5vZGUgPSBiYXNpY1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQ29udGVudCB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXMsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBpbml0aWFsQ29udGVudDsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYGVoZmdcbmA7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJiYXNpY1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQmFzaWNWaWV3IiwiYm5mIiwiQmFzaWNQYXJzZXIiLCJlbnRyaWVzIiwiQmFzaWNMZXhlciIsImdldFRva2VucyIsImNvbnRlbnQiLCJsZXhpY2FsRW50cmllcyIsImdldExleGljYWxFbnRyaWVzIiwiYmFzaWNMZXhlciIsImZyb21FbnRyaWVzIiwidG9rZW5zIiwidG9rZW5pc2UiLCJnZXROb2RlIiwiZ2V0Qk5GIiwiYmFzaWNQYXJzZXIiLCJmcm9tQk5GIiwibm9kZSIsInBhcnNlIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsQ29udGVudCIsImNvbnN0cnVjdG9yIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxFbnRyaWVzIiwia2V5VXBIYW5kbGVyIiwiVmlldyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsyREFQSjs0REFDTTs2REFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsSUFBTSxBQUFFQyxNQUFRQyxlQUFXLENBQW5CRCxLQUNGLEFBQUVFLFVBQVlDLGNBQVUsQ0FBdEJEO0FBRU8sSUFBQSxBQUFNSCwwQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJLLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxPQUFPO2dCQUNmLElBQU1DLGlCQUFpQixJQUFJLENBQUNDLGlCQUFpQixJQUN2Q0wsVUFBVUksZ0JBQ1ZFLGFBQWFMLGNBQVUsQ0FBQ00sV0FBVyxDQUFDUCxVQUNwQ1EsU0FBU0YsV0FBV0csUUFBUSxDQUFDTjtnQkFFbkMsT0FBT0s7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRRixNQUFNO2dCQUNaLElBQU1WLE1BQU0sSUFBSSxDQUFDYSxNQUFNLElBQ2pCQyxjQUFjYixlQUFXLENBQUNjLE9BQU8sQ0FBQ2Y7Z0JBRXhDLElBQU1nQixPQUFPRixZQUFZRyxLQUFLLENBQUNQO2dCQUUvQixPQUFPTTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsYUFBYTtnQkFFbEIsSUFBTSxBQUFFQyxpQkFBbUIsSUFBSSxDQUFDQyxXQUFXLENBQW5DRCxnQkFDRmQsaUJBQWlCSixTQUNqQkcsVUFBVWUsZ0JBQWdCLEdBQUc7Z0JBRW5DLElBQUksQ0FBQ0UsTUFBTSxDQUFDdEI7Z0JBRVosSUFBSSxDQUFDdUIsVUFBVSxDQUFDbEI7Z0JBRWhCLElBQUksQ0FBQ21CLGlCQUFpQixDQUFDbEI7Z0JBRXZCLElBQUksQ0FBQ21CLFlBQVk7WUFDbkI7OztXQWpDbUIxQjtFQUFrQjJCLGFBQUk7QUFtQ3pDLGlCQW5DbUIzQixXQW1DWnFCLGtCQUFrQjtBQUd6QixpQkF0Q21CckIsV0FzQ1o0QixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9