"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _easyLayout = require("easy-layout");
var _heading = _interopRequireDefault(require("./heading"));
var _column = _interopRequireDefault(require("./div/column"));
var _subHeading = _interopRequireDefault(require("./subHeading"));
var _sizeable = _interopRequireDefault(require("./div/sizeable"));
var _bnf = _interopRequireDefault(require("./textarea/bnf"));
var _ruleName = _interopRequireDefault(require("./input/ruleName"));
var _tokens = _interopRequireDefault(require("./textarea/tokens"));
var _content = _interopRequireDefault(require("./textarea/content"));
var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));
var _vertical = _interopRequireDefault(require("./div/splitter/vertical"));
var _lexicalEntries = _interopRequireDefault(require("./textarea/lexicalEntries"));
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
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
var _typeof = function(obj) {
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
var View = function(Element1) {
    _inherits(View, _easy.Element);
    function View() {
        _classCallCheck(this, View);
        return _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
    }
    _createClass(View, [
        {
            key: "getTokens",
            value: function getTokens() {
                var lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, lexer = this.Lexer.fromEntries(entries), content = this.getContent(), tokens = lexer.tokenise(content);
                return tokens;
            }
        },
        {
            key: "getParseTree",
            value: function getParseTree(tokens) {
                var parseTree = null;
                var bnf = this.getBNF(), parser = this.Parser.fromBNF(bnf), ruleName = this.getRuleName(), ruleMap = parser.getRuleMap(), rule = ruleMap[ruleName], node = parser.parse(tokens, rule);
                if (node !== null) {
                    parseTree = node.asParseTree(tokens);
                }
                return parseTree;
            }
        },
        {
            key: "keyUpHandler",
            value: function keyUpHandler() {
                // try {
                var tokens = this.getTokens(), parseTree = this.getParseTree(tokens);
                this.setTokens(tokens);
                this.setParseTree(parseTree);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var keyUpHandler = this.keyUpHandler.bind(this);
                return [
                    React.createElement(_heading.default, null, this.heading),
                    React.createElement(_easyLayout.ColumnsDiv, null, React.createElement(_sizeable.default, null, React.createElement(_easyLayout.RowsDiv, null, React.createElement(_subHeading.default, null, "Lexical entries"), React.createElement(_lexicalEntries.default, {
                        onKeyUp: keyUpHandler
                    }), React.createElement(_subHeading.default, null, "BNF"), React.createElement(_bnf.default, {
                        onKeyUp: keyUpHandler
                    }), React.createElement(_subHeading.default, null, "Rule name"), React.createElement(_ruleName.default, {
                        onKeyUp: keyUpHandler
                    }))), React.createElement(_vertical.default, null), React.createElement(_column.default, null, React.createElement(_easyLayout.RowsDiv, null, React.createElement(_subHeading.default, null, "Content"), React.createElement(_content.default, {
                        onKeyUp: keyUpHandler
                    }), React.createElement(_subHeading.default, null, "Tokens"), React.createElement(_tokens.default, null), React.createElement(_subHeading.default, null, "Parse tree"), React.createElement(_parseTree.default, null))))
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var _Parser = this.Parser, bnf = _Parser.bnf, _Lexer = this.Lexer, entries = _Lexer.entries, content = this.initialContent, lexicalEntries = entries; ///
                this.setBNF(bnf);
                this.setContent(content);
                this.setLexicalEntries(lexicalEntries);
                this.keyUpHandler();
            }
        }
    ], [
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var exampleView = _easy.Element.fromClass(Class, properties);
                exampleView.initialise();
                return exampleView;
            }
        }
    ]);
    return View;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(View, "tagName", "div");
exports.default = View;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uc0RpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgSGVhZGluZyBmcm9tIFwiLi9oZWFkaW5nXCI7XG5pbXBvcnQgQ29sdW1uRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW5cIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBSdWxlTmFtZUlucHV0IGZyb20gXCIuL2lucHV0L3J1bGVOYW1lXCI7XG5pbXBvcnQgVG9rZW5zVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvdG9rZW5zXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbFwiO1xuaW1wb3J0IExleGljYWxFbnRyaWVzVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvbGV4aWNhbEVudHJpZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRUb2tlbnMoKSB7XG4gICAgY29uc3QgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCksXG4gICAgICAgICAgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgICBsZXhlciA9IHRoaXMuTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldFBhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgcGFyc2VyID0gdGhpcy5QYXJzZXIuZnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJ1bGVNYXAgPSBwYXJzZXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2VucywgcnVsZSk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgLy8gdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgICBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZSh0b2tlbnMpO1xuXG4gICAgICB0aGlzLnNldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy9cbiAgICAvLyAgIHRoaXMuY2xlYXJUb2tlbnMoKTtcbiAgICAvL1xuICAgIC8vICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIC8vIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8SGVhZGluZz5cbiAgICAgICAge3RoaXMuaGVhZGluZ31cbiAgICAgIDwvSGVhZGluZz4sXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIExleGljYWwgZW50cmllc1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBSdWxlIG5hbWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxSdWxlTmFtZUlucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgVG9rZW5zXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8VG9rZW5zVGV4dGFyZWEgLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBibmYgfSA9IHRoaXMuUGFyc2VyLFxuICAgICAgICAgIHsgZW50cmllcyB9ID0gdGhpcy5MZXhlcixcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5pbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZXhhbXBsZVZpZXcgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBleGFtcGxlVmlldy5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gZXhhbXBsZVZpZXdcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsS0FBQTtJQUNBLFdBQUE7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