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
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _easyLayout = require("easy-layout");
var _subHeading = /*#__PURE__*/ _interopRequireDefault(require("./subHeading"));
var _sizeable = /*#__PURE__*/ _interopRequireDefault(require("./div/sizeable"));
var _bnf = /*#__PURE__*/ _interopRequireDefault(require("./textarea/bnf"));
var _ruleName = /*#__PURE__*/ _interopRequireDefault(require("./input/ruleName"));
var _tokens = /*#__PURE__*/ _interopRequireDefault(require("./textarea/tokens"));
var _content = /*#__PURE__*/ _interopRequireDefault(require("./textarea/content"));
var _parseTree = /*#__PURE__*/ _interopRequireDefault(require("./textarea/parseTree"));
var _lexicalEntries = /*#__PURE__*/ _interopRequireDefault(require("./textarea/lexicalEntries"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
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
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _createSuper(View);
    function View() {
        _classCallCheck(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "keyUpHandler", function(event, element) {
            try {
                var tokens = _this.getTokens(), parseTree = _this.getParseTree(tokens);
                _this.setTokens(tokens);
                _this.setParseTree(parseTree);
            } catch (error) {
                console.log(error);
                _this.clearTokens();
                _this.clearParseTree();
            }
        });
        return _this;
    }
    _createClass(View, [
        {
            key: "getTokens",
            value: function getTokens() {
                var Lexer = this.constructor.Lexer, lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, lexer = Lexer.fromEntries(entries), content = this.getContent(), tokens = lexer.tokenise(content);
                return tokens;
            }
        },
        {
            key: "getParseTree",
            value: function getParseTree(tokens) {
                var parseTree = null;
                var Parser = this.constructor.Parser, bnf = this.getBNF(), parser = Parser.fromBNF(bnf), ruleName = this.getRuleName(), ruleMap = parser.getRuleMap(), rule = ruleMap[ruleName], node = parser.parse(tokens, rule);
                if (node !== null) {
                    parseTree = node.asParseTree(tokens);
                }
                return parseTree;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical entries"), /*#__PURE__*/ React.createElement(_lexicalEntries.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Rule name"), /*#__PURE__*/ React.createElement(_ruleName.default, {
                        onKeyUp: this.keyUpHandler
                    }))), /*#__PURE__*/ React.createElement(_easyLayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easyLayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Tokens"), /*#__PURE__*/ React.createElement(_tokens.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null))))
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var _constructor = this.constructor, Lexer = _constructor.Lexer, Parser = _constructor.Parser, initialContent = _constructor.initialContent, bnf = Parser.bnf, entries = Lexer.entries, content = initialContent, lexicalEntries = entries; ///
                this.setBNF(bnf);
                this.setContent(content);
                this.setLexicalEntries(lexicalEntries);
                this.keyUpHandler();
            }
        }
    ]);
    return View;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5cbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBSdWxlTmFtZUlucHV0IGZyb20gXCIuL2lucHV0L3J1bGVOYW1lXCI7XG5pbXBvcnQgVG9rZW5zVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvdG9rZW5zXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBMZXhpY2FsRW50cmllc1RleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2xleGljYWxFbnRyaWVzXCI7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5VXBIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgICBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZSh0b2tlbnMpO1xuXG4gICAgICB0aGlzLnNldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2tlbnMoKTtcblxuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICBjb25zdCB7IExleGVyIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcygpLFxuICAgICAgICAgIGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKHRva2Vucykge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgeyBQYXJzZXIgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICBwYXJzZXIgPSBQYXJzZXIuZnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJ1bGVNYXAgPSBwYXJzZXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2VucywgcnVsZSk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIExleGljYWwgZW50cmllc1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUnVsZSBuYW1lXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UnVsZU5hbWVJbnB1dCBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBUb2tlbnNcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxUb2tlbnNUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IExleGVyLCBQYXJzZXIsIGluaXRpYWxDb250ZW50IH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHsgYm5mIH0gPSBQYXJzZXIsXG4gICAgICAgICAgeyBlbnRyaWVzIH0gPSBMZXhlcixcbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gZW50cmllczsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcbiAgICB0aGlzLnNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDsiXSwibmFtZXMiOlsiVmlldyIsImtleVVwSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInRva2VucyIsImdldFRva2VucyIsInBhcnNlVHJlZSIsImdldFBhcnNlVHJlZSIsInNldFRva2VucyIsInNldFBhcnNlVHJlZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyVG9rZW5zIiwiY2xlYXJQYXJzZVRyZWUiLCJMZXhlciIsImNvbnN0cnVjdG9yIiwibGV4aWNhbEVudHJpZXMiLCJnZXRMZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJsZXhlciIsImZyb21FbnRyaWVzIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbmlzZSIsIlBhcnNlciIsImJuZiIsImdldEJORiIsInBhcnNlciIsImZyb21CTkYiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicnVsZU1hcCIsImdldFJ1bGVNYXAiLCJydWxlIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJMZXhpY2FsRW50cmllc1RleHRhcmVhIiwib25LZXlVcCIsIkJORlRleHRhcmVhIiwiUnVsZU5hbWVJbnB1dCIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJDb250ZW50VGV4dGFyZWEiLCJUb2tlbnNUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsQ29udGVudCIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRMZXhpY2FsRW50cmllcyIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFnSWIsU0FJRTs7O2VBSkYsUUFJRTs7O2tFQWxJb0IsaUJBQWlCO29CQUVmLE1BQU07MEJBQ3NDLGFBQWE7K0RBRTFELGNBQWM7NkRBQ2IsZ0JBQWdCO3dEQUNoQixnQkFBZ0I7NkRBQ2Qsa0JBQWtCOzJEQUNqQixtQkFBbUI7NERBQ2xCLG9CQUFvQjs4REFDbEIsc0JBQXNCO21FQUNqQiwyQkFBMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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