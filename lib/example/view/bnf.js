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
exports.default = BNFView;
_defineProperty(BNFView, "Lexer", _occamLexers.BNFLexer);
_defineProperty(BNFView, "Parser", _index.BNFParser);
_defineProperty(BNFView, "initialContent", bnf) ///
;
_defineProperty(BNFView, "defaultProperties", {
    className: "bnf"
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJORlBhcnNlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBWaWV3IGZyb20gXCIuLi92aWV3XCI7XG5cbmNvbnN0IHsgYm5mIH0gPSBCTkZQYXJzZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJORlZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgc3RhdGljIExleGVyID0gQk5GTGV4ZXI7XG5cbiAgc3RhdGljIFBhcnNlciA9IEJORlBhcnNlcjtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBibmY7IC8vL1xuXG4gIGdldFBhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IHsgTGV4ZXIsIFBhcnNlciB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgIGxleGVyID0gTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgcGFyc2VyID0gUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICBjb25zdCBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJuZlwiXG4gIH07XG59XG5cbiJdLCJuYW1lcyI6WyJibmYiLCJCTkZQYXJzZXIiLCJCTkZWaWV3IiwiZ2V0UGFyc2VUcmVlIiwidG9rZW5zIiwicGFyc2VUcmVlIiwiY29uc3RydWN0b3IiLCJMZXhlciIsIlBhcnNlciIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJlbnRyaWVzIiwibGV4ZXIiLCJmcm9tRW50cmllcyIsInBhcnNlciIsImZyb21Ob3RoaW5nIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImFzUGFyc2VUcmVlIiwiVmlldyIsIkJORkxleGVyIiwiaW5pdGlhbENvbnRlbnQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUV5QixJQUFBLFlBQWMsV0FBZCxjQUFjLENBQUE7QUFDYixJQUFBLE1BQWEsV0FBYixhQUFhLENBQUE7QUFFdEIsSUFBQSxLQUFTLGtDQUFULFNBQVMsRUFBQTs7Ozs7Ozs7Ozs7Ozs7OzhEQUwxQjtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7OztVQUFBOzt3QkFBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBT0EsSUFBTSxBQUFFQSxHQUFHLEdBQUtDLE1BQVMsV0FBakJELEdBQUcsQUFBYyxBQUFDO0FBRVgsSUFBQSxBQUFNRSxPQUFPLGlCQ1QxQixBRFNhOzRCQVRmOzthQVNxQkEsT0FBTztzQ0FUNUI7Ozs7O1lBZ0JFQyxHQUFZLEVBQVpBLGNBQVk7WUVoQmQsT0ZnQkVBLFNBQUFBLFlBQVksQ0FBQ0MsTUFBTSxFQUFFO2dCQUNuQixJQUFJQyxTQUFTLEdBQUcsSUFBSSxBQUFDO2dCQUVyQixJQUEwQixZQUFnQixHQUFoQixJQUFJLENBQUNDLFdBQVcsRUFBbENDLEtBQUssR0FBYSxZQUFnQixDQUFsQ0EsS0FBSyxFQUFFQyxNQUFNLEdBQUssWUFBZ0IsQ0FBM0JBLE1BQU0sRUFDZkMsY0FBYyxHQUFHLElBQUksQ0FBQ0MsaUJBQWlCLEVBQUUsRUFDekNDLE9BQU8sR0FBR0YsY0FBYyxFQUN4QkcsS0FBSyxHQUFHTCxLQUFLLENBQUNNLFdBQVcsQ0FBQ0YsT0FBTyxDQUFDLEVBQ2xDRyxNQUFNLEdBQUdOLE1BQU0sQ0FBQ08sV0FBVyxFQUFFLEVBQzdCQyxPQUFPLEdBQUcsSUFBSSxDQUFDQyxVQUFVLEVBQUUsQUFBQztnQkFFbENiLE1BQU0sR0FBR1EsS0FBSyxDQUFDTSxRQUFRLENBQUNGLE9BQU8sQ0FBQyxDQUFDO2dCQUVqQyxJQUFNRyxJQUFJLEdBQUdMLE1BQU0sQ0FBQ00sS0FBSyxDQUFDaEIsTUFBTSxDQUFDLEFBQUM7Z0JBRWxDLElBQUllLElBQUksS0FBSyxJQUFJLEVBQUU7b0JBQ2pCZCxTQUFTLEdBQUdjLElBQUksQ0FBQ0UsV0FBVyxDQUFDakIsTUFBTSxDQUFDLENBQUM7aUJBQ3RDO2dCQUVELE9BQU9DLFNBQVMsQ0FBQzthQUNsQjs7TUFuQ0g7O0NBd0NDLENBL0JvQ2lCLEtBQUksU0ErQnhDO2tCQS9Cb0JwQixPQUFPLEFBVDVCO0FBVUUsZ0JBRG1CQSxPQUFPLEVBQ25CSyxPQUFLLEVBQUdnQixZQUFRLFVBQUMsQUFWMUI7QUFZRSxnQkFIbUJyQixPQUFPLEVBR25CTSxRQUFNLEVBQUdQLE1BQVMsV0FBQyxBQVo1QjtBQWNFLGdCQUxtQkMsT0FBTyxFQUtuQnNCLGdCQUFjLEVBQUd4QixHQUFHLENBQUMsQ0FBQyxHQUFHO0FBZGxDO0FBcUNFLGdCQTVCbUJFLE9BQU8sRUE0Qm5CdUIsbUJBQWlCLEVBQUc7SUFDekJDLFNBQVMsRUFBRSxLQUFLO0NBQ2pCLENBQUMsQUF2Q0oifQ==