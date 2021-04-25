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
var bnf = _index.BasicParser.bnf, entries = _occamLexers.BasicLexer.entries;
var BasicView = function(View) {
    _inherits(BasicView, View);
    function BasicView() {
        _classCallCheck(this, BasicView);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(BasicView).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "Lexer", function() {
            var _class = function(BasicLexer) {
                _inherits(_class, BasicLexer);
                function _class() {
                    _classCallCheck(this, _class);
                    return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
                }
                return _class;
            }(_occamLexers.BasicLexer);
            _defineProperty(_class, "entries", entries);
            return _class;
        }());
        _defineProperty(_assertThisInitialized(_this), "Parser", function() {
            var _class = function(BasicParser) {
                _inherits(_class, BasicParser);
                function _class() {
                    _classCallCheck(this, _class);
                    return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
                }
                return _class;
            }(_index.BasicParser);
            _defineProperty(_class, "bnf", bnf);
            return _class;
        }());
        _defineProperty(_assertThisInitialized(_this), "heading", "Basic parser example");
        _defineProperty(_assertThisInitialized(_this), "initialContent", "(1+2)/3");
        return _this;
    }
    return BasicView;
}(_view.default);
_defineProperty(BasicView, "defaultProperties", {
    className: "basic"
});
exports.default = BasicView;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYmFzaWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJhc2ljTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBCYXNpY1BhcnNlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBWaWV3IGZyb20gXCIuLi92aWV3XCI7XG5cbmNvbnN0IHsgYm5mIH0gPSBCYXNpY1BhcnNlcixcbiAgICAgIHsgZW50cmllcyB9ID0gQmFzaWNMZXhlcjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNWaWV3IGV4dGVuZHMgVmlldyB7XG4gIExleGVyID0gY2xhc3MgZXh0ZW5kcyBCYXNpY0xleGVyIHtcbiAgICBzdGF0aWMgZW50cmllcyA9IGVudHJpZXM7XG4gIH07XG5cbiAgUGFyc2VyID0gY2xhc3MgZXh0ZW5kcyBCYXNpY1BhcnNlciB7XG4gICAgc3RhdGljIGJuZiA9IGJuZjtcbiAgfTtcblxuICBoZWFkaW5nID0gXCJCYXNpYyBwYXJzZXIgZXhhbXBsZVwiO1xuXG4gIGluaXRpYWxDb250ZW50ID0gXCIoMSsyKS8zXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJiYXNpY1wiXG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFZSxZQUFjO0lBQ2IsTUFBYTtJQUV4QixLQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVsQixHQUFHLEdBSmlCLE1BQWEsYUFJakMsR0FBRyxFQUNILE9BQU8sR0FOWSxZQUFjLFlBTWpDLE9BQU87SUFFTSxTQUFTO2NBQVQsU0FBUzthQUFULFNBQVM7OEJBQVQsU0FBUzs7aUVBQVQsU0FBUzt3REFDNUIsS0FBSzs7Ozs7Ozs7Y0FUb0IsWUFBYztxQ0FVOUIsT0FBTyxHQUFHLE9BQU87Ozt3REFHMUIsTUFBTTs7Ozs7Ozs7Y0Fab0IsTUFBYTtxQ0FhOUIsR0FBRyxHQUFHLEdBQUc7Ozt3REFHbEIsT0FBTyxJQUFHLG9CQUFzQjt3REFFaEMsY0FBYyxJQUFHLE9BQVM7OztXQVhQLFNBQVM7RUFMYixLQUFTO2dCQUtMLFNBQVMsR0FhckIsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxLQUFPOztrQkFkRCxTQUFTIn0=