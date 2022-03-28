"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _bnf = _interopRequireDefault(require("./bnf"));
var _parser = _interopRequireDefault(require("../common/parser"));
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
var BasicParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(BasicParser, CommonParser);
    var _super = _createSuper(BasicParser);
    function BasicParser() {
        _classCallCheck(this, BasicParser);
        return _super.apply(this, arguments);
    }
    _createClass(BasicParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _parser.default.fromNothing(BasicParser);
            }
        },
        {
            key: "fromBNF",
            value: function fromBNF(bnf) {
                return _parser.default.fromBNF(BasicParser, bnf);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _parser.default.fromRules(BasicParser, rules);
            }
        }
    ]);
    return BasicParser;
}(_parser.default);
exports.default = BasicParser;
_defineProperty(BasicParser, "bnf", _bnf.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9wYXJzZXIuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iLCIuLi9zcmMvY29uc3RhbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuaW1wb3J0IENvbW1vblBhcnNlciBmcm9tIFwiLi4vY29tbW9uL3BhcnNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpY1BhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21Ob3RoaW5nKEJhc2ljUGFyc2VyKTsgfVxuXG4gIHN0YXRpYyBmcm9tQk5GKGJuZikgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21CTkYoQmFzaWNQYXJzZXIsIGJuZik7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKEJhc2ljUGFyc2VyLCBydWxlcyk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG4iXSwibmFtZXMiOlsiQmFzaWNQYXJzZXIiLCJmcm9tTm90aGluZyIsIkNvbW1vblBhcnNlciIsImZyb21CTkYiLCJibmYiLCJmcm9tUnVsZXMiLCJydWxlcyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVnQixJQUFBLElBQU8sa0NBQVAsT0FBTyxFQUFBO0FBQ0UsSUFBQSxPQUFrQixrQ0FBbEIsa0JBQWtCLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs4REFIM0M7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7VUFBQTs7d0JBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQUtlLElBQUEsQUFBTUEsV0FBVyxpQkNMN0IsQURLWTt3Q0FMZjs7YUFLcUJBLFdBQVc7MENBTGhDOzs7OztZQVFTQyxHQUFXLEVBQVhBLGFBQVc7WUVScEIsT0ZRRSxTQUFPQSxXQUFXLEdBQUc7Z0JBQUUsT0FBT0MsT0FBWSxTQUFDRCxXQUFXLENBQUNELFdBQVcsQ0FBQyxDQUFDO2FBQUU7OztZQUUvREcsR0FBTyxFQUFQQSxTQUFPO1lFVmhCLE9GVUUsU0FBT0EsT0FBTyxDQUFDQyxHQUFHLEVBQUU7Z0JBQUUsT0FBT0YsT0FBWSxTQUFDQyxPQUFPLENBQUNILFdBQVcsRUFBRUksR0FBRyxDQUFDLENBQUM7YUFBRTs7O1lBRS9EQyxHQUFTLEVBQVRBLFdBQVM7WUVabEIsT0ZZRSxTQUFPQSxTQUFTLENBQUNDLEtBQUssRUFBRTtnQkFBRSxPQUFPSixPQUFZLFNBQUNHLFNBQVMsQ0FBQ0wsV0FBVyxFQUFFTSxLQUFLLENBQUMsQ0FBQzthQUFFOztNQVpoRjs7Q0FhQyxDQVJ3Q0osT0FBWSxTQVFwRDtrQkFSb0JGLFdBQVcsQUFMaEM7QUFNRSxnQkFEbUJBLFdBQVcsRUFDdkJJLEtBQUcsRUFBR0EsSUFBRyxTQUFDLEFBTm5CIn0=