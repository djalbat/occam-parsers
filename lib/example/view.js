"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _easylayout = require("easy-layout");
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _sizeable = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable"));
var _bnf = /*#__PURE__*/ _interop_require_default(require("./view/textarea/bnf"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("./view/input/ruleName"));
var _tokens = /*#__PURE__*/ _interop_require_default(require("./view/textarea/tokens"));
var _content = /*#__PURE__*/ _interop_require_default(require("./view/textarea/content"));
var _parseTree = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree"));
var _lexicalEntries = /*#__PURE__*/ _interop_require_default(require("./view/textarea/lexicalEntries"));
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "keyUpHandler", function(event, element) {
            try {
                var content = _this.getContent(), tokens = _this.getTokens(content), node = _this.getNode(tokens);
                _this.setTokens(tokens);
                if (node !== null) {
                    var parseTree = node.asParseTree(tokens);
                    _this.setParseTree(parseTree);
                } else {
                    _this.clearParseTree();
                }
            } catch (error) {
                console.log(error);
                _this.clearTokens();
                _this.clearParseTree();
            }
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "getTokens",
            value: function getTokens(content) {
                var Lexer = this.constructor.Lexer, lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, lexer = Lexer.fromEntries(entries), tokens = lexer.tokenise(content);
                return tokens;
            }
        },
        {
            key: "getNode",
            value: function getNode(tokens) {
                var Parser = this.constructor.Parser, bnf = this.getBNF(), parser = Parser.fromBNF(bnf), ruleName = this.getRuleName(), ruleMap = parser.getRuleMap(), rule = ruleMap[ruleName], node = parser.parse(tokens, rule);
                return node;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical entries"), /*#__PURE__*/ React.createElement(_lexicalEntries.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Rule name"), /*#__PURE__*/ React.createElement(_ruleName.default, {
                        onKeyUp: this.keyUpHandler
                    }))), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Tokens"), /*#__PURE__*/ React.createElement(_tokens.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null))))
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var _this_constructor = this.constructor, Lexer = _this_constructor.Lexer, Parser = _this_constructor.Parser, initialContent = _this_constructor.initialContent, bnf = Parser.bnf, entries = Lexer.entries, content = initialContent, lexicalEntries = entries; ///
                this.setBNF(bnf);
                this.setContent(content);
                this.setLexicalEntries(lexicalEntries);
                this.keyUpHandler();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5cbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3ZpZXcvc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBSdWxlTmFtZUlucHV0IGZyb20gXCIuL3ZpZXcvaW5wdXQvcnVsZU5hbWVcIjtcbmltcG9ydCBUb2tlbnNUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3Rva2Vuc1wiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IExleGljYWxFbnRyaWVzVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9sZXhpY2FsRW50cmllc1wiO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICB0b2tlbnMgPSB0aGlzLmdldFRva2Vucyhjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLmdldE5vZGUodG9rZW5zKTtcblxuICAgICAgdGhpcy5zZXRUb2tlbnModG9rZW5zKTtcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuXG4gICAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgdGhpcy5jbGVhclRva2VucygpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VG9rZW5zKGNvbnRlbnQpIHtcbiAgICBjb25zdCB7IExleGVyIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcygpLFxuICAgICAgICAgIGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKHRva2Vucykge1xuICAgIGNvbnN0IHsgUGFyc2VyIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgcGFyc2VyID0gUGFyc2VyLmZyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBydWxlTWFwID0gcGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0sXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMsIHJ1bGUpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIExleGljYWwgZW50cmllc1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUnVsZSBuYW1lXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UnVsZU5hbWVJbnB1dCBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBUb2tlbnNcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxUb2tlbnNUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IExleGVyLCBQYXJzZXIsIGluaXRpYWxDb250ZW50IH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHsgYm5mIH0gPSBQYXJzZXIsXG4gICAgICAgICAgeyBlbnRyaWVzIH0gPSBMZXhlcixcbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gZW50cmllczsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7Il0sIm5hbWVzIjpbIlZpZXciLCJrZXlVcEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsImdldFRva2VucyIsIm5vZGUiLCJnZXROb2RlIiwic2V0VG9rZW5zIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJjbGVhclBhcnNlVHJlZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyVG9rZW5zIiwiTGV4ZXIiLCJjb25zdHJ1Y3RvciIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJlbnRyaWVzIiwibGV4ZXIiLCJmcm9tRW50cmllcyIsInRva2VuaXNlIiwiUGFyc2VyIiwiYm5mIiwiZ2V0Qk5GIiwicGFyc2VyIiwiZnJvbUJORiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInJ1bGUiLCJwYXJzZSIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiU2l6ZWFibGVEaXYiLCJSb3dzRGl2IiwiU3ViSGVhZGluZyIsIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJvbktleVVwIiwiQk5GVGV4dGFyZWEiLCJSdWxlTmFtZUlucHV0IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIkNvbnRlbnRUZXh0YXJlYSIsIlRva2Vuc1RleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxDb250ZW50Iiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxFbnRyaWVzIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0lBOzs7ZUFBQTs7O29FQWhJc0I7b0JBRUU7MEJBQzRDO2lFQUU3QzsrREFDQzswREFDQTsrREFDRTs2REFDQzs4REFDQztnRUFDRTtxRUFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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