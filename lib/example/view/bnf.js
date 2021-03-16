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
var bnf = _index.BNFParser.bnf;
var BNFView = function(View) {
    _inherits(BNFView, _view.default);
    function BNFView() {
        _classCallCheck(this, BNFView);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(BNFView).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "Lexer", _occamLexers.BNFLexer);
        _defineProperty(_assertThisInitialized(_this), "Parser", _index.BNFParser);
        _defineProperty(_assertThisInitialized(_this), "heading", "BNF parser example");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJORlBhcnNlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBWaWV3IGZyb20gXCIuLi92aWV3XCI7XG5cbmNvbnN0IHsgYm5mIH0gPSBCTkZQYXJzZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJORlZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgTGV4ZXIgPSBCTkZMZXhlcjtcblxuICBQYXJzZXIgPSBCTkZQYXJzZXI7XG5cbiAgaGVhZGluZyA9IFwiQk5GIHBhcnNlciBleGFtcGxlXCI7XG5cbiAgaW5pdGlhbENvbnRlbnQgPSBibmY7IC8vL1xuXG4gIGdldFBhcnNlVHJlZSgpIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGxleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcygpLFxuICAgICAgICAgIGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG4gICAgICAgICAgbGV4ZXIgPSB0aGlzLkxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIHBhcnNlciA9IHRoaXMuUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYm5mXCJcbiAgfTtcbn1cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsWUFBQTtJQUNBLE1BQUE7SUFFQSxLQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRUEsR0FBQSxHQUpBLE1BQUEsV0FJQSxHQUFBO0lBRUEsT0FBQSxZQUFBLElBQUE7Y0FBQSxPQUFBLEVBSkEsS0FBQTthQUlBLE9BQUE7OEJBQUEsT0FBQTs7aUVBQUEsT0FBQTt3REFDQSxLQUFBLEdBUkEsWUFBQTt3REFVQSxNQUFBLEdBVEEsTUFBQTt3REFXQSxPQUFBLElBQUEsa0JBQUE7d0RBRUEsY0FBQSxHQUFBLEdBQUE7OztpQkFQQSxPQUFBOztBQVNBLGVBQUEsR0FBQSxZQUFBOzRCQUFBLFlBQUE7b0JBQ0EsU0FBQSxHQUFBLElBQUE7b0JBRUEsY0FBQSxRQUFBLGlCQUFBLElBQ0EsT0FBQSxHQUFBLGNBQUEsRUFDQSxLQUFBLFFBQUEsS0FBQSxDQUFBLFdBQUEsQ0FBQSxPQUFBLEdBQ0EsTUFBQSxRQUFBLE1BQUEsQ0FBQSxXQUFBLElBQ0EsT0FBQSxRQUFBLFVBQUEsSUFDQSxNQUFBLEdBQUEsS0FBQSxDQUFBLFFBQUEsQ0FBQSxPQUFBLEdBQ0EsSUFBQSxHQUFBLE1BQUEsQ0FBQSxLQUFBLENBQUEsTUFBQTtvQkFFQSxJQUFBLEtBQUEsSUFBQTtBQUNBLDZCQUFBLEdBQUEsSUFBQSxDQUFBLFdBQUEsQ0FBQSxNQUFBOzt1QkFHQSxTQUFBOzs7O1dBeEJBLE9BQUE7RUFKQSxLQUFBO2dCQUlBLE9BQUEsR0EyQkEsaUJBQUE7QUFDQSxhQUFBLEdBQUEsR0FBQTs7a0JBNUJBLE9BQUEifQ==