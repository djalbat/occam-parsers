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
var _class, _class1;
var bnf = _index.BasicParser.bnf, entries = _occamLexers.BasicLexer.entries;
var BasicView = /*#__PURE__*/ function(View) {
    _inherits(BasicView, View);
    var _super1 = _createSuper(BasicView);
    function BasicView() {
        _classCallCheck(this, BasicView);
        var _this;
        _this = _super1.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "Lexer", (_class = /*#__PURE__*/ function(BasicLexer) {
            _inherits(_class2, BasicLexer);
            var _super = _createSuper(_class2);
            function _class2() {
                _classCallCheck(this, _class2);
                return _super.apply(this, arguments);
            }
            return _class2;
        }(_occamLexers.BasicLexer), _defineProperty(_class, "entries", entries), _class));
        _defineProperty(_assertThisInitialized(_this), "Parser", (_class1 = /*#__PURE__*/ function(BasicParser) {
            _inherits(_class2, BasicParser);
            var _super = _createSuper(_class2);
            function _class2() {
                _classCallCheck(this, _class2);
                return _super.apply(this, arguments);
            }
            return _class2;
        }(_index.BasicParser), _defineProperty(_class1, "bnf", bnf), _class1));
        _defineProperty(_assertThisInitialized(_this), "initialContent", "(1+2)/3");
        return _this;
    }
    return BasicView;
}(_view.default);
exports.default = BasicView;
_defineProperty(BasicView, "defaultProperties", {
    className: "basic"
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYmFzaWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJhc2ljTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBCYXNpY1BhcnNlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBWaWV3IGZyb20gXCIuLi92aWV3XCI7XG5cbmNvbnN0IHsgYm5mIH0gPSBCYXNpY1BhcnNlcixcbiAgICAgIHsgZW50cmllcyB9ID0gQmFzaWNMZXhlcjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNWaWV3IGV4dGVuZHMgVmlldyB7XG4gIExleGVyID0gY2xhc3MgZXh0ZW5kcyBCYXNpY0xleGVyIHtcbiAgICBzdGF0aWMgZW50cmllcyA9IGVudHJpZXM7XG4gIH07XG5cbiAgUGFyc2VyID0gY2xhc3MgZXh0ZW5kcyBCYXNpY1BhcnNlciB7XG4gICAgc3RhdGljIGJuZiA9IGJuZjtcbiAgfTtcblxuICBpbml0aWFsQ29udGVudCA9IFwiKDErMikvM1wiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYmFzaWNcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbImJuZiIsIkJhc2ljUGFyc2VyIiwiZW50cmllcyIsIkJhc2ljTGV4ZXIiLCJCYXNpY1ZpZXciLCJMZXhlciIsIlBhcnNlciIsImluaXRpYWxDb250ZW50IiwiVmlldyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0U7d0I7QUFFYyxHQUFjLENBQWQsWUFBYztBQUNiLEdBQWEsQ0FBYixNQUFhO0FBRXhCLEdBQVMsQ0FBVCxLQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1U7O3dCOzs7Ozs7O0s7Ozs7Ozs7Ozs7Ozs7TTt5RDs7Ozs7Ozs7Ozs7Ozs7O3VCOztLOzs7OzJCOzs7Ozs7OztxRjs7Ozs7Ozs7Ozs7O21FOztpRDs7Ozs7O0FBRTFCLEdBQUssQ0FBR0EsR0FBRyxHQUFLQyxNQUFXLGFBQW5CRCxHQUFHLEVBQ0hFLE9BQU8sR0FBS0MsWUFBVSxZQUF0QkQsT0FBTztJQUVNRSxTQUFTLGlCQUFmLFFBQVE7OEI7O2FBQUZBLFNBQVM7d0M7OzhDO3VEQUM1QkMsQ0FBSyxnQ0FBRyxRQUFROzBDOzs7OEM7Ozs7VUFBTUYsWUFBVSxzQ0FDdkJELENBQU8sVUFBR0EsT0FBTyxXQ1o1QixDRGFJO3VEQUVGSSxDQUFNLGtDQUFHLFFBQVE7MkM7Ozs4Qzs7OztVQUFNTCxNQUFXLHdDQUN6QkQsQ0FBRyxNQUFHQSxHQUFHLFlDaEJwQixDRGlCSTt1REFFRk8sQ0FBYyxpQkFBRyxDQUFTLFNDbkI1QixDRG1CNkI7Ozs7RUFUVUMsS0FBSTtrQkFBdEJKLFNBQVMsQTtnQkFBVEEsU0FBUyxFQVdyQkssQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQkMsU0FBUyxFQUFFLENBQU87QUFDcEIsQ0FBQyxDIn0=