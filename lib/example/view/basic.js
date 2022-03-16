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
exports.default = BasicView;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYmFzaWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJhc2ljTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzL3NyY1wiO1xuaW1wb3J0IHsgQmFzaWNQYXJzZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5jb25zdCB7IGJuZiB9ID0gQmFzaWNQYXJzZXIsXG4gICAgICB7IGVudHJpZXMgfSA9IEJhc2ljTGV4ZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljVmlldyBleHRlbmRzIFZpZXcge1xuICBzdGF0aWMgTGV4ZXIgPSBjbGFzcyBleHRlbmRzIEJhc2ljTGV4ZXIge1xuICAgIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcbiAgfTtcblxuICBzdGF0aWMgUGFyc2VyID0gY2xhc3MgZXh0ZW5kcyBCYXNpY1BhcnNlciB7XG4gICAgc3RhdGljIGJuZiA9IGJuZjtcbiAgfTtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBcIigxKzIpLzNcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJhc2ljXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJibmYiLCJCYXNpY1BhcnNlciIsImVudHJpZXMiLCJCYXNpY0xleGVyIiwiQmFzaWNWaWV3IiwiVmlldyIsIkxleGVyIiwiUGFyc2VyIiwiaW5pdGlhbENvbnRlbnQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFQUFiO3dCQUFBO0FBRTJCLEdBQWtCLENBQWxCLElBQWtCO0FBQ2pCLEdBQWEsQ0FBYixNQUFhO0FBRXhCLEdBQVMsQ0FBVCxLQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBTDFCOzt3QkFBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7OztBQU9BLEdBQUssQ0FBR0EsR0FBRyxHQUFLQyxNQUFXLGFBQW5CRCxHQUFHLEVBQ0hFLE9BQU8sR0FBS0MsSUFBVSxZQUF0QkQsT0FBTztBQUVBLEdBQUssQ0FBQ0UsU0FBUyxpQkFBZixRQUFROzhCQVZ2Qjs7YUFVcUJBLFNBQVM7d0NBVjlCOzs7O0VBVXVDQyxLQUFJO2tCQUF0QkQsU0FBUyxBQVY5QjtnQkFVcUJBLFNBQVMsRUFDckJFLENBQUssZ0NBQUcsUUFBUTtrQ0FYekI7OztzQ0FBQTs7OztFQVcrQkgsSUFBVSxzQ0FDOUJELENBQU8sVUFBR0EsT0FBTyxXQVo1QjtnQkFVcUJFLFNBQVMsRUFLckJHLENBQU0sa0NBQUcsUUFBUTttQ0FmMUI7OztzQ0FBQTs7OztFQWVnQ04sTUFBVyx3Q0FDaENELENBQUcsTUFBR0EsR0FBRyxZQWhCcEI7Z0JBVXFCSSxTQUFTLEVBU3JCSSxDQUFjLGlCQUFHLENBQVMsU0FuQm5DO2dCQVVxQkosU0FBUyxFQVdyQkssQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQkMsU0FBUyxFQUFFLENBQU87QUFDcEIsQ0FBQyxDQXZCSCJ9