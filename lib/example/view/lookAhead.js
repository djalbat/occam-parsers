"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _lexer = _interopRequireDefault(require("../../lookAhead/lexer"));
var _parser = _interopRequireDefault(require("../../lookAhead/parser"));
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
var bnf = _parser.default.bnf, entries = _lexer.default.entries;
var LookAheadView = /*#__PURE__*/ function(View) {
    _inherits(LookAheadView, View);
    var _super1 = _createSuper(LookAheadView);
    function LookAheadView() {
        _classCallCheck(this, LookAheadView);
        var _this;
        _this = _super1.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "Lexer", function() {
            var _class = /*#__PURE__*/ function(LookAheadLexer) {
                _inherits(_class, LookAheadLexer);
                var _super = _createSuper(_class);
                function _class() {
                    _classCallCheck(this, _class);
                    return _super.apply(this, arguments);
                }
                return _class;
            }(_lexer.default);
            _defineProperty(_class, "entries", entries);
            return _class;
        }());
        _defineProperty(_assertThisInitialized(_this), "Parser", function() {
            var _class = /*#__PURE__*/ function(LookAheadParser) {
                _inherits(_class, LookAheadParser);
                var _super = _createSuper(_class);
                function _class() {
                    _classCallCheck(this, _class);
                    return _super.apply(this, arguments);
                }
                return _class;
            }(_parser.default);
            _defineProperty(_class, "bnf", bnf);
            return _class;
        }());
        _defineProperty(_assertThisInitialized(_this), "initialContent", "a b b c");
        return _this;
    }
    return LookAheadView;
}(_view.default);
exports.default = LookAheadView;
_defineProperty(LookAheadView, "defaultProperties", {
    className: "lookAhead"
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvbG9va0FoZWFkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTG9va0FoZWFkTGV4ZXIgZnJvbSBcIi4uLy4uL2xvb2tBaGVhZC9sZXhlclwiO1xuaW1wb3J0IExvb2tBaGVhZFBhcnNlciBmcm9tIFwiLi4vLi4vbG9va0FoZWFkL3BhcnNlclwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5jb25zdCB7IGJuZiB9ID0gTG9va0FoZWFkUGFyc2VyLFxuICAgICAgeyBlbnRyaWVzIH0gPSBMb29rQWhlYWRMZXhlcjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9va0FoZWFkVmlldyBleHRlbmRzIFZpZXcge1xuICBMZXhlciA9IGNsYXNzIGV4dGVuZHMgTG9va0FoZWFkTGV4ZXIge1xuICAgIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcbiAgfTtcblxuICBQYXJzZXIgPSBjbGFzcyBleHRlbmRzIExvb2tBaGVhZFBhcnNlciB7XG4gICAgc3RhdGljIGJuZiA9IGJuZjtcbiAgfTtcblxuICBpbml0aWFsQ29udGVudCA9IFwiYSBiIGIgY1wiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibG9va0FoZWFkXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJibmYiLCJMb29rQWhlYWRQYXJzZXIiLCJlbnRyaWVzIiwiTG9va0FoZWFkTGV4ZXIiLCJMb29rQWhlYWRWaWV3IiwiTGV4ZXIiLCJQYXJzZXIiLCJpbml0aWFsQ29udGVudCIsIlZpZXciLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFZSxHQUF1QixDQUF2QixNQUF1QjtBQUN0QixHQUF3QixDQUF4QixPQUF3QjtBQUVuQyxHQUFTLENBQVQsS0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLEdBQUssQ0FBR0EsR0FBRyxHQUFLQyxPQUFlLFNBQXZCRCxHQUFHLEVBQ0hFLE9BQU8sR0FBS0MsTUFBYyxTQUExQkQsT0FBTztJQUVNRSxhQUFhLGlCQUFuQixRQUFROzs7YUFBRkEsYUFBYTs7Ozt1REFDaENDLENBQUs7dUNBQUcsUUFBUTs7Ozs7Ozs7Y0FBTUYsTUFBYztvQ0FDM0JELENBQU8sVUFBR0EsT0FBTzs7O3VEQUcxQkksQ0FBTTt1Q0FBRyxRQUFROzs7Ozs7OztjQUFNTCxPQUFlO29DQUM3QkQsQ0FBRyxNQUFHQSxHQUFHOzs7dURBR2xCTyxDQUFjLGlCQUFHLENBQVM7Ozs7RUFUZUMsS0FBSTtrQkFBMUJKLGFBQWE7Z0JBQWJBLGFBQWEsRUFXekJLLENBQWlCLG9CQUFHLENBQUM7SUFDMUJDLFNBQVMsRUFBRSxDQUFXO0FBQ3hCLENBQUMifQ==