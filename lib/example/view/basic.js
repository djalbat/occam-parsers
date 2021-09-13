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
var BasicView = /*#__PURE__*/ function(View) {
    _inherits(BasicView, View);
    function BasicView() {
        _classCallCheck(this, BasicView);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(BasicView).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "Lexer", function() {
            var _class = /*#__PURE__*/ function(BasicLexer) {
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
            var _class = /*#__PURE__*/ function(BasicParser) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYmFzaWMuanMiXSwibmFtZXMiOlsiQmFzaWNMZXhlciIsIkJhc2ljUGFyc2VyIiwiVmlldyIsImJuZiIsImVudHJpZXMiLCJCYXNpY1ZpZXciLCJMZXhlciIsIlBhcnNlciIsImhlYWRpbmciLCJpbml0aWFsQ29udGVudCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVlLEdBQWMsQ0FBZCxZQUFjO0FBQ2IsR0FBYSxDQUFiLE1BQWE7QUFFeEIsR0FBUyxDQUFULEtBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLEdBQUssQ0FBRyxHQUFHLEdBSmlCLE1BQWEsYUFJakMsR0FBRyxFQUNILE9BQU8sR0FOWSxZQUFjLFlBTWpDLE9BQU87SUFFTSxTQUFTLGlCQUFmLFFBQVE7Y0FBRixTQUFTO2FBQVQsU0FBUzs4QkFBVCxTQUFTOztpRUFBVCxTQUFTO3dEQUM1QixLQUFLO3VDQUFHLFFBQVE7Ozs7Ozs7Y0FUUyxZQUFjO3FDQVU5QixPQUFPLEdBQUcsT0FBTzs7O3dEQUcxQixNQUFNO3VDQUFHLFFBQVE7Ozs7Ozs7Y0FaUyxNQUFhO3FDQWE5QixHQUFHLEdBQUcsR0FBRzs7O3dEQUdsQixPQUFPLElBQUcsb0JBQXNCO3dEQUVoQyxjQUFjLElBQUcsT0FBUzs7O1dBWFAsU0FBUztFQUxiLEtBQVM7Z0JBS0wsU0FBUyxHQWFyQixpQkFBaUIsR0FBRyxDQUFDO0lBQzFCLFNBQVMsR0FBRSxLQUFPO0FBQ3BCLENBQUM7a0JBZmtCLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJhc2ljUGFyc2VyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuY29uc3QgeyBibmYgfSA9IEJhc2ljUGFyc2VyLFxuICAgICAgeyBlbnRyaWVzIH0gPSBCYXNpY0xleGVyO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpY1ZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgTGV4ZXIgPSBjbGFzcyBleHRlbmRzIEJhc2ljTGV4ZXIge1xuICAgIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcbiAgfTtcblxuICBQYXJzZXIgPSBjbGFzcyBleHRlbmRzIEJhc2ljUGFyc2VyIHtcbiAgICBzdGF0aWMgYm5mID0gYm5mO1xuICB9O1xuXG4gIGhlYWRpbmcgPSBcIkJhc2ljIHBhcnNlciBleGFtcGxlXCI7XG5cbiAgaW5pdGlhbENvbnRlbnQgPSBcIigxKzIpLzNcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJhc2ljXCJcbiAgfTtcbn1cbiJdfQ==