"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BNFView;
    }
});
var _occamlexers = require("occam-lexers");
var _parser = /*#__PURE__*/ _interop_require_default(require("../../bnf/parser"));
var _view = /*#__PURE__*/ _interop_require_default(require("../view"));
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
var bnf = _parser.default.bnf;
var BNFView = /*#__PURE__*/ function(View) {
    _inherits(BNFView, View);
    var _super = _create_super(BNFView);
    function BNFView() {
        _class_call_check(this, BNFView);
        return _super.apply(this, arguments);
    }
    _create_class(BNFView, [
        {
            key: "getNode",
            value: function getNode(tokens) {
                var _this_constructor = this.constructor, Lexer = _this_constructor.Lexer, Parser = _this_constructor.Parser, lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, lexer = Lexer.fromEntries(entries), parser = Parser.fromNothing(), content = this.getContent();
                tokens = lexer.tokenise(content); ///
                var node = parser.parse(tokens);
                return node;
            }
        }
    ]);
    return BNFView;
}(_view.default);
_define_property(BNFView, "Lexer", _occamlexers.BNFLexer);
_define_property(BNFView, "Parser", _parser.default);
_define_property(BNFView, "initialContent", '\n  \n    rule ::= "blah" (1) ;\n  \n  ');
_define_property(BNFView, "defaultProperties", {
    className: "bnf"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYm5mLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IEJORlBhcnNlciBmcm9tIFwiLi4vLi4vYm5mL3BhcnNlclwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5jb25zdCB7IGJuZiB9ID0gQk5GUGFyc2VyO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCTkZWaWV3IGV4dGVuZHMgVmlldyB7XG4gIHN0YXRpYyBMZXhlciA9IEJORkxleGVyO1xuXG4gIHN0YXRpYyBQYXJzZXIgPSBCTkZQYXJzZXI7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYFxuICBcbiAgICBydWxlIDo6PSBcImJsYWhcIiAoMSkgO1xuICBcbiAgYDtcblxuICBnZXROb2RlKHRva2Vucykge1xuICAgIGNvbnN0IHsgTGV4ZXIsIFBhcnNlciB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgIGxleGVyID0gTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgcGFyc2VyID0gUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7IC8vL1xuXG4gICAgY29uc3Qgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJuZlwiXG4gIH07XG59XG5cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQk5GVmlldyIsImJuZiIsIkJORlBhcnNlciIsImdldE5vZGUiLCJ0b2tlbnMiLCJjb25zdHJ1Y3RvciIsIkxleGVyIiwiUGFyc2VyIiwibGV4aWNhbEVudHJpZXMiLCJnZXRMZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJsZXhlciIsImZyb21FbnRyaWVzIiwicGFyc2VyIiwiZnJvbU5vdGhpbmciLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwiVmlldyIsIkJORkxleGVyIiwiaW5pdGlhbENvbnRlbnQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7MkJBUkk7NkRBRUg7MkRBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpCLElBQU0sQUFBRUMsTUFBUUMsZ0JBQVJEO0FBRU8sSUFBQSxBQUFNRCx3QkFBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQVduQkcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE1BQU07Z0JBQ1osSUFBMEIsb0JBQUEsSUFBSSxDQUFDQyxhQUF2QkMsUUFBa0Isa0JBQWxCQSxPQUFPQyxTQUFXLGtCQUFYQSxRQUNUQyxpQkFBaUIsSUFBSSxDQUFDQyxxQkFDdEJDLFVBQVVGLGdCQUNWRyxRQUFRTCxNQUFNTSxZQUFZRixVQUMxQkcsU0FBU04sT0FBT08sZUFDaEJDLFVBQVUsSUFBSSxDQUFDQztnQkFFckJaLFNBQVNPLE1BQU1NLFNBQVNGLFVBQVUsR0FBRztnQkFFckMsSUFBTUcsT0FBT0wsT0FBT00sTUFBTWY7Z0JBRTFCLE9BQU9jO1lBQ1Q7OztXQXhCbUJsQjtFQUFnQm9CO0FBQ25DLGlCQURtQnBCLFNBQ1pNLFNBQVFlO0FBRWYsaUJBSG1CckIsU0FHWk8sVUFBU0w7QUFFaEIsaUJBTG1CRixTQUtac0Isa0JBQWtCO0FBcUJ6QixpQkExQm1CdEIsU0EwQlp1QixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9