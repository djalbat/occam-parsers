"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _index = require("../../index");
var _view = _interopRequireDefault(require("../view"));
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
var bnf = _index.BNFParser.bnf;
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
                var _constructor = this.constructor, Lexer = _constructor.Lexer, Parser = _constructor.Parser, lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, lexer = Lexer.fromEntries(entries), parser = Parser.fromNothing(), content = this.getContent();
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
_defineProperty(BNFView, "Parser", _index.BNFParser);
_defineProperty(BNFView, "initialContent", bnf) ///
;
_defineProperty(BNFView, "defaultProperties", {
    className: "bnf"
});
exports.default = BNFView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYm5mLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJORlBhcnNlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBWaWV3IGZyb20gXCIuLi92aWV3XCI7XG5cbmNvbnN0IHsgYm5mIH0gPSBCTkZQYXJzZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJORlZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgc3RhdGljIExleGVyID0gQk5GTGV4ZXI7XG5cbiAgc3RhdGljIFBhcnNlciA9IEJORlBhcnNlcjtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBibmY7IC8vL1xuXG4gIGdldFBhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IHsgTGV4ZXIsIFBhcnNlciB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgIGxleGVyID0gTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgcGFyc2VyID0gUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICBjb25zdCBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJuZlwiXG4gIH07XG59XG5cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiYm5mIiwiQk5GUGFyc2VyIiwiQk5GVmlldyIsImdldFBhcnNlVHJlZSIsInRva2VucyIsInBhcnNlVHJlZSIsImNvbnN0cnVjdG9yIiwiTGV4ZXIiLCJQYXJzZXIiLCJsZXhpY2FsRW50cmllcyIsImdldExleGljYWxFbnRyaWVzIiwiZW50cmllcyIsImxleGVyIiwiZnJvbUVudHJpZXMiLCJwYXJzZXIiLCJmcm9tTm90aGluZyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJhc1BhcnNlVHJlZSIsIlZpZXciLCJCTkZMZXhlciIsImluaXRpYWxDb250ZW50IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFWSxJQUFBLFlBQWMsV0FBZCxjQUFjLENBQUE7QUFDYixJQUFBLE1BQWEsV0FBYixhQUFhLENBQUE7QUFFdEIsSUFBQSxLQUFTLGtDQUFULFNBQVMsRUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTSxBQUFFQSxHQUFHLEdBQUtDLE1BQVMsVUFBQSxDQUFqQkQsR0FBRyxBQUFjLEFBQUM7QUFFWCxJQUFBLEFBQU1FLE9BQU8saUJBQWI7OzthQUFNQSxPQUFPOzs7Ozs7WUFPMUJDLEdBQVksRUFBWkEsY0FBWTttQkFBWkEsU0FBQUEsWUFBWSxDQUFDQyxNQUFNLEVBQUU7Z0JBQ25CLElBQUlDLFNBQVMsR0FBRyxJQUFJLEFBQUM7Z0JBRXJCLElBQTBCLFlBQWdCLEdBQWhCLElBQUksQ0FBQ0MsV0FBVyxFQUFsQ0MsS0FBSyxHQUFhLFlBQWdCLENBQWxDQSxLQUFLLEVBQUVDLE1BQU0sR0FBSyxZQUFnQixDQUEzQkEsTUFBTSxFQUNmQyxjQUFjLEdBQUcsSUFBSSxDQUFDQyxpQkFBaUIsRUFBRSxFQUN6Q0MsT0FBTyxHQUFHRixjQUFjLEVBQ3hCRyxLQUFLLEdBQUdMLEtBQUssQ0FBQ00sV0FBVyxDQUFDRixPQUFPLENBQUMsRUFDbENHLE1BQU0sR0FBR04sTUFBTSxDQUFDTyxXQUFXLEVBQUUsRUFDN0JDLE9BQU8sR0FBRyxJQUFJLENBQUNDLFVBQVUsRUFBRSxBQUFDO2dCQUVsQ2IsTUFBTSxHQUFHUSxLQUFLLENBQUNNLFFBQVEsQ0FBQ0YsT0FBTyxDQUFDLENBQUM7Z0JBRWpDLElBQU1HLElBQUksR0FBR0wsTUFBTSxDQUFDTSxLQUFLLENBQUNoQixNQUFNLENBQUMsQUFBQztnQkFFbEMsSUFBSWUsSUFBSSxLQUFLLElBQUksRUFBRTtvQkFDakJkLFNBQVMsR0FBR2MsSUFBSSxDQUFDRSxXQUFXLENBQUNqQixNQUFNLENBQUMsQ0FBQztpQkFDdEM7Z0JBRUQsT0FBT0MsU0FBUyxDQUFDO2FBQ2xCOzs7O0NBS0YsQ0EvQm9DaUIsS0FBSSxRQUFBLENBK0J4QztBQTlCQyxnQkFEbUJwQixPQUFPLEVBQ25CSyxPQUFLLEVBQUdnQixZQUFRLFNBQUEsQ0FBQztBQUV4QixnQkFIbUJyQixPQUFPLEVBR25CTSxRQUFNLEVBQUdQLE1BQVMsVUFBQSxDQUFDO0FBRTFCLGdCQUxtQkMsT0FBTyxFQUtuQnNCLGdCQUFjLEVBQUd4QixHQUFHLENBQUMsQ0FBQyxHQUFHOztBQXVCaEMsZ0JBNUJtQkUsT0FBTyxFQTRCbkJ1QixtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLEtBQUs7Q0FDakIsQ0FBQztrQkE5QmlCeEIsT0FBTyJ9