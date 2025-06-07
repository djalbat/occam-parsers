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
_define_property(BasicView, "initialContent", "(n+n)\n");
_define_property(BasicView, "defaultProperties", {
    className: "basic"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYmFzaWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuLi92aWV3XCI7XG5pbXBvcnQgQmFzaWNMZXhlciBmcm9tIFwiLi4vYmFzaWMvbGV4ZXJcIjtcbmltcG9ydCBCYXNpY1BhcnNlciBmcm9tIFwiLi4vYmFzaWMvcGFyc2VyXCI7XG5cbmNvbnN0IHsgYm5mIH0gPSBCYXNpY1BhcnNlcixcbiAgICAgIHsgZW50cmllcyB9ID0gQmFzaWNMZXhlcjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNWaWV3IGV4dGVuZHMgVmlldyB7XG4gIGdldFRva2Vucyhjb250ZW50KSB7XG4gICAgY29uc3QgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCksXG4gICAgICAgICAgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICB0b2tlbnMgPSBiYXNpY0xleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldE5vZGUodG9rZW5zKSB7XG4gICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICBiYXNpY1BhcnNlciA9IEJhc2ljUGFyc2VyLmZyb21CTkYoYm5mKTtcblxuICAgIGNvbnN0IG5vZGUgPSBiYXNpY1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQ29udGVudCB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXMsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBpbml0aWFsQ29udGVudDsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYChuK24pXG5gO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYmFzaWNcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkJhc2ljVmlldyIsImJuZiIsIkJhc2ljUGFyc2VyIiwiZW50cmllcyIsIkJhc2ljTGV4ZXIiLCJnZXRUb2tlbnMiLCJjb250ZW50IiwibGV4aWNhbEVudHJpZXMiLCJnZXRMZXhpY2FsRW50cmllcyIsImJhc2ljTGV4ZXIiLCJmcm9tRW50cmllcyIsInRva2VucyIsInRva2VuaXNlIiwiZ2V0Tm9kZSIsImdldEJORiIsImJhc2ljUGFyc2VyIiwiZnJvbUJORiIsIm5vZGUiLCJwYXJzZSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiaW5pdGlhbENvbnRlbnQiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbEVudHJpZXMiLCJrZXlVcEhhbmRsZXIiLCJWaWV3IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzJEQVBKOzREQUNNOzZEQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFNLEFBQUVDLE1BQVFDLGVBQVcsQ0FBbkJELEtBQ0YsQUFBRUUsVUFBWUMsY0FBVSxDQUF0QkQ7QUFFTyxJQUFBLEFBQU1ILDBCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CSyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsT0FBTztnQkFDZixJQUFNQyxpQkFBaUIsSUFBSSxDQUFDQyxpQkFBaUIsSUFDdkNMLFVBQVVJLGdCQUNWRSxhQUFhTCxjQUFVLENBQUNNLFdBQVcsQ0FBQ1AsVUFDcENRLFNBQVNGLFdBQVdHLFFBQVEsQ0FBQ047Z0JBRW5DLE9BQU9LO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUYsTUFBTTtnQkFDWixJQUFNVixNQUFNLElBQUksQ0FBQ2EsTUFBTSxJQUNqQkMsY0FBY2IsZUFBVyxDQUFDYyxPQUFPLENBQUNmO2dCQUV4QyxJQUFNZ0IsT0FBT0YsWUFBWUcsS0FBSyxDQUFDUDtnQkFFL0IsT0FBT007WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLGFBQWE7Z0JBRWxCLElBQU0sQUFBRUMsaUJBQW1CLElBQUksQ0FBQyxXQUFXLENBQW5DQSxnQkFDRmQsaUJBQWlCSixTQUNqQkcsVUFBVWUsZ0JBQWdCLEdBQUc7Z0JBRW5DLElBQUksQ0FBQ0MsTUFBTSxDQUFDckI7Z0JBRVosSUFBSSxDQUFDc0IsVUFBVSxDQUFDakI7Z0JBRWhCLElBQUksQ0FBQ2tCLGlCQUFpQixDQUFDakI7Z0JBRXZCLElBQUksQ0FBQ2tCLFlBQVk7WUFDbkI7OztXQWpDbUJ6QjtFQUFrQjBCLGFBQUk7QUFtQ3pDLGlCQW5DbUIxQixXQW1DWnFCLGtCQUFrQjtBQUd6QixpQkF0Q21CckIsV0FzQ1oyQixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9