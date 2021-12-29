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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "Lexer", _occamLexers.BNFLexer);
        _defineProperty(_assertThisInitialized(_this), "Parser", _index.BNFParser);
        _defineProperty(_assertThisInitialized(_this), "initialContent", bnf);
        return _this;
    }
    _createClass(BNFView, [
        {
            key: "getParseTree",
            value: function getParseTree() {
                var parseTree = null;
                var lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, lexer = this.Lexer.fromEntries(entries), parser = this.Parser.fromNothing(), content = this.getContent(), tokens = lexer.tokenise(content), node = parser.parse(tokens);
                if (node !== null) {
                    parseTree = node.asParseTree(tokens);
                }
                return parseTree;
            }
        }
    ]);
    return BNFView;
}(_view.default);
_defineProperty(BNFView, "defaultProperties", {
    className: "bnf"
});
exports.default = BNFView;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJORlBhcnNlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBWaWV3IGZyb20gXCIuLi92aWV3XCI7XG5cbmNvbnN0IHsgYm5mIH0gPSBCTkZQYXJzZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJORlZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgTGV4ZXIgPSBCTkZMZXhlcjtcblxuICBQYXJzZXIgPSBCTkZQYXJzZXI7XG5cbiAgaW5pdGlhbENvbnRlbnQgPSBibmY7IC8vL1xuXG4gIGdldFBhcnNlVHJlZSgpIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGxleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcygpLFxuICAgICAgICAgIGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG4gICAgICAgICAgbGV4ZXIgPSB0aGlzLkxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIHBhcnNlciA9IHRoaXMuUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYm5mXCJcbiAgfTtcbn1cblxuIl0sIm5hbWVzIjpbImJuZiIsIkJORlZpZXciLCJMZXhlciIsIlBhcnNlciIsImluaXRpYWxDb250ZW50IiwiZ2V0UGFyc2VUcmVlIiwicGFyc2VUcmVlIiwibGV4aWNhbEVudHJpZXMiLCJnZXRMZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJsZXhlciIsImZyb21FbnRyaWVzIiwicGFyc2VyIiwiZnJvbU5vdGhpbmciLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFYSxHQUFjLENBQWQsWUFBYztBQUNiLEdBQWEsQ0FBYixNQUFhO0FBRXRCLEdBQVMsQ0FBVCxLQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixHQUFLLENBQUdBLEdBQUcsR0FKZSxNQUFhLFdBSS9CQSxHQUFHO0lBRVVDLE9BQU8saUJBQWIsUUFBUTtjQUFGQSxPQUFPOzhCQUFQQSxPQUFPO2FBQVBBLE9BQU87OEJBQVBBLE9BQU87Ozt1REFDMUJDLENBQUssUUFSa0IsWUFBYzt1REFVckNDLENBQU0sU0FUa0IsTUFBYTt1REFXckNDLENBQWMsaUJBQUdKLEdBQUc7OztpQkFMREMsT0FBTzs7WUFPMUJJLEdBQVksRUFBWkEsQ0FBWTttQkFBWkEsUUFBUSxDQUFSQSxZQUFZLEdBQUcsQ0FBQztnQkFDZCxHQUFHLENBQUNDLFNBQVMsR0FBRyxJQUFJO2dCQUVwQixHQUFLLENBQUNDLGNBQWMsR0FBRyxJQUFJLENBQUNDLGlCQUFpQixJQUN2Q0MsT0FBTyxHQUFHRixjQUFjLEVBQ3hCRyxLQUFLLEdBQUcsSUFBSSxDQUFDUixLQUFLLENBQUNTLFdBQVcsQ0FBQ0YsT0FBTyxHQUN0Q0csTUFBTSxHQUFHLElBQUksQ0FBQ1QsTUFBTSxDQUFDVSxXQUFXLElBQ2hDQyxPQUFPLEdBQUcsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxNQUFNLEdBQUdOLEtBQUssQ0FBQ08sUUFBUSxDQUFDSCxPQUFPLEdBQy9CSSxJQUFJLEdBQUdOLE1BQU0sQ0FBQ08sS0FBSyxDQUFDSCxNQUFNO2dCQUVoQyxFQUFFLEVBQUVFLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDbEJaLFNBQVMsR0FBR1ksSUFBSSxDQUFDRSxXQUFXLENBQUNKLE1BQU07Z0JBQ3JDLENBQUM7Z0JBRUQsTUFBTSxDQUFDVixTQUFTO1lBQ2xCLENBQUM7OztXQXZCa0JMLE9BQU87RUFKWCxLQUFTO2dCQUlMQSxPQUFPLEVBeUJuQm9CLENBQWlCLG9CQUFHLENBQUM7SUFDMUJDLFNBQVMsRUFBRSxDQUFLO0FBQ2xCLENBQUM7a0JBM0JrQnJCLE9BQU8ifQ==