"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _src = require("occam-lexers/src");
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
var _class, _class1;
var bnf = _index.BasicParser.bnf, entries = _src.BasicLexer.entries;
var BasicView = /*#__PURE__*/ function(View) {
    _inherits(BasicView, View);
    var _super = _createSuper(BasicView);
    function BasicView() {
        _classCallCheck(this, BasicView);
        return _super.apply(this, arguments);
    }
    return BasicView;
}(_view.default);
_defineProperty(BasicView, "Lexer", (_class = /*#__PURE__*/ function(BasicLexer) {
    _inherits(_class2, BasicLexer);
    var _super = _createSuper(_class2);
    function _class2() {
        _classCallCheck(this, _class2);
        return _super.apply(this, arguments);
    }
    return _class2;
}(_src.BasicLexer), _defineProperty(_class, "entries", entries), _class));
_defineProperty(BasicView, "Parser", (_class1 = /*#__PURE__*/ function(BasicParser) {
    _inherits(_class2, BasicParser);
    var _super = _createSuper(_class2);
    function _class2() {
        _classCallCheck(this, _class2);
        return _super.apply(this, arguments);
    }
    return _class2;
}(_index.BasicParser), _defineProperty(_class1, "bnf", bnf), _class1));
_defineProperty(BasicView, "initialContent", "(1+2)/3");
_defineProperty(BasicView, "defaultProperties", {
    className: "basic"
});
exports.default = BasicView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYmFzaWMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJhc2ljTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzL3NyY1wiO1xuaW1wb3J0IHsgQmFzaWNQYXJzZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5jb25zdCB7IGJuZiB9ID0gQmFzaWNQYXJzZXIsXG4gICAgICB7IGVudHJpZXMgfSA9IEJhc2ljTGV4ZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljVmlldyBleHRlbmRzIFZpZXcge1xuICBzdGF0aWMgTGV4ZXIgPSBjbGFzcyBleHRlbmRzIEJhc2ljTGV4ZXIge1xuICAgIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcbiAgfTtcblxuICBzdGF0aWMgUGFyc2VyID0gY2xhc3MgZXh0ZW5kcyBCYXNpY1BhcnNlciB7XG4gICAgc3RhdGljIGJuZiA9IGJuZjtcbiAgfTtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBcIigxKzIpLzNcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJhc2ljXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiYm5mIiwiQmFzaWNQYXJzZXIiLCJlbnRyaWVzIiwiQmFzaWNMZXhlciIsIkJhc2ljVmlldyIsIlZpZXciLCJMZXhlciIsIlBhcnNlciIsImluaXRpYWxDb250ZW50IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFYyxJQUFBLElBQWtCLFdBQWxCLGtCQUFrQixDQUFBO0FBQ2pCLElBQUEsTUFBYSxXQUFiLGFBQWEsQ0FBQTtBQUV4QixJQUFBLEtBQVMsa0NBQVQsU0FBUyxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU0sQUFBRUEsR0FBRyxHQUFLQyxNQUFXLFlBQUEsQ0FBbkJELEdBQUcsQUFBZ0IsRUFDckIsQUFBRUUsT0FBTyxHQUFLQyxJQUFVLFdBQUEsQ0FBdEJELE9BQU8sQUFBZSxBQUFDO0FBRWhCLElBQUEsQUFBTUUsU0FBUyxpQkFBZjs7O2FBQU1BLFNBQVM7Ozs7O0NBYzdCLENBZHNDQyxLQUFJLFFBQUEsQ0FjMUM7QUFiQyxnQkFEbUJELFNBQVMsRUFDckJFLE9BQUssMEJBQUc7Ozs7Ozs7O0NBRWQsQ0FGNEJILElBQVUsV0FBQSxDQUV0QyxFQURDLHdCQUFPRCxTQUFPLEVBQUdBLE9BQU8sQ0FBQyxVQUN6QjtBQUVGLGdCQUxtQkUsU0FBUyxFQUtyQkcsUUFBTSwyQkFBRzs7Ozs7Ozs7Q0FFZixDQUY2Qk4sTUFBVyxZQUFBLENBRXhDLEVBREMseUJBQU9ELEtBQUcsRUFBR0EsR0FBRyxDQUFDLFdBQ2pCO0FBRUYsZ0JBVG1CSSxTQUFTLEVBU3JCSSxnQkFBYyxFQUFHLFNBQVMsQ0FBQztBQUVsQyxnQkFYbUJKLFNBQVMsRUFXckJLLG1CQUFpQixFQUFHO0lBQ3pCQyxTQUFTLEVBQUUsT0FBTztDQUNuQixDQUFDO2tCQWJpQk4sU0FBUyJ9