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
var _occamLexers = require("occam-lexers");
var _parser = /*#__PURE__*/ _interopRequireDefault(require("../../bnf/parser"));
var _view = /*#__PURE__*/ _interopRequireDefault(require("../view"));
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
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
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
var bnf = _parser.default.bnf;
var BNFView = /*#__PURE__*/ function(View) {
    _inherits(BNFView, View);
    var _super = _createSuper(BNFView);
    function BNFView() {
        _classCallCheck(this, BNFView);
        return _super.apply(this, arguments);
    }
    _createClass(BNFView, [
        {
            key: "getParseTree",
            value: function getParseTree(tokens) {
                var parseTree = null;
                var _this_constructor = this.constructor, Lexer = _this_constructor.Lexer, Parser = _this_constructor.Parser, lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, lexer = Lexer.fromEntries(entries), parser = Parser.fromNothing(), content = this.getContent();
                tokens = lexer.tokenise(content);
                var node = parser.parse(tokens);
                if (node !== null) {
                    parseTree = node.asParseTree(tokens);
                }
                return parseTree;
            }
        }
    ]);
    return BNFView;
}(_view.default);
_defineProperty(BNFView, "Lexer", _occamLexers.BNFLexer);
_defineProperty(BNFView, "Parser", _parser.default);
_defineProperty(BNFView, "initialContent", bnf) ///
;
_defineProperty(BNFView, "defaultProperties", {
    className: "bnf"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYm5mLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IEJORlBhcnNlciBmcm9tIFwiLi4vLi4vYm5mL3BhcnNlclwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5jb25zdCB7IGJuZiB9ID0gQk5GUGFyc2VyO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCTkZWaWV3IGV4dGVuZHMgVmlldyB7XG4gIHN0YXRpYyBMZXhlciA9IEJORkxleGVyO1xuXG4gIHN0YXRpYyBQYXJzZXIgPSBCTkZQYXJzZXI7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYm5mOyAvLy9cblxuICBnZXRQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCB7IExleGVyLCBQYXJzZXIgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCksXG4gICAgICAgICAgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgICBsZXhlciA9IExleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIHBhcnNlciA9IFBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcblxuICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgY29uc3Qgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJibmZcIlxuICB9O1xufVxuXG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkJORlZpZXciLCJibmYiLCJCTkZQYXJzZXIiLCJnZXRQYXJzZVRyZWUiLCJ0b2tlbnMiLCJwYXJzZVRyZWUiLCJjb25zdHJ1Y3RvciIsIkxleGVyIiwiUGFyc2VyIiwibGV4aWNhbEVudHJpZXMiLCJnZXRMZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJsZXhlciIsImZyb21FbnRyaWVzIiwicGFyc2VyIiwiZnJvbU5vdGhpbmciLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJWaWV3IiwiQk5GTGV4ZXIiLCJpbml0aWFsQ29udGVudCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OzsyQkFSSTsyREFFSDt5REFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakIsSUFBTSxBQUFFQyxNQUFRQyxlQUFTLENBQWpCRDtBQUVPLElBQUEsQUFBTUQsd0JBQU47Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFPbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxNQUFNLEVBQUU7Z0JBQ25CLElBQUlDLFlBQVksSUFBSTtnQkFFcEIsSUFBMEIsb0JBQUEsSUFBSSxDQUFDQyxXQUFXLEVBQWxDQyxRQUFrQixrQkFBbEJBLE9BQU9DLFNBQVcsa0JBQVhBLFFBQ1RDLGlCQUFpQixJQUFJLENBQUNDLGlCQUFpQixJQUN2Q0MsVUFBVUYsZ0JBQ1ZHLFFBQVFMLE1BQU1NLFdBQVcsQ0FBQ0YsVUFDMUJHLFNBQVNOLE9BQU9PLFdBQVcsSUFDM0JDLFVBQVUsSUFBSSxDQUFDQyxVQUFVO2dCQUUvQmIsU0FBU1EsTUFBTU0sUUFBUSxDQUFDRjtnQkFFeEIsSUFBTUcsT0FBT0wsT0FBT00sS0FBSyxDQUFDaEI7Z0JBRTFCLElBQUllLFNBQVMsSUFBSSxFQUFFO29CQUNqQmQsWUFBWWMsS0FBS0UsV0FBVyxDQUFDakI7Z0JBQy9CLENBQUM7Z0JBRUQsT0FBT0M7WUFDVDs7O1dBMUJtQkw7RUFBZ0JzQixhQUFJO0FBQ3ZDLGdCQURtQnRCLFNBQ1pPLFNBQVFnQixxQkFBUTtBQUV2QixnQkFIbUJ2QixTQUdaUSxVQUFTTixlQUFTO0FBRXpCLGdCQUxtQkYsU0FLWndCLGtCQUFpQnZCLEtBQUssR0FBRzs7QUF1QmhDLGdCQTVCbUJELFNBNEJaeUIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==