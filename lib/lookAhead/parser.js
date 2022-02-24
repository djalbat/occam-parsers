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
var LookAheadParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(LookAheadParser, CommonParser);
    var _super = _createSuper(LookAheadParser);
    function LookAheadParser() {
        _classCallCheck(this, LookAheadParser);
        return _super.apply(this, arguments);
    }
    _createClass(LookAheadParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _parser.default.fromNothing(LookAheadParser);
            }
        },
        {
            key: "fromBNF",
            value: function fromBNF(bnf) {
                return _parser.default.fromBNF(LookAheadParser, bnf);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _parser.default.fromRules(LookAheadParser, rules);
            }
        }
    ]);
    return LookAheadParser;
}(_parser.default);
exports.default = LookAheadParser;
_defineProperty(LookAheadParser, "bnf", _bnf.default);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb29rQWhlYWQvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuaW1wb3J0IENvbW1vblBhcnNlciBmcm9tIFwiLi4vY29tbW9uL3BhcnNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb29rQWhlYWRQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tTm90aGluZyhMb29rQWhlYWRQYXJzZXIpOyB9XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbUJORihMb29rQWhlYWRQYXJzZXIsIGJuZik7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKExvb2tBaGVhZFBhcnNlciwgcnVsZXMpOyB9XG59XG4iXSwibmFtZXMiOlsiTG9va0FoZWFkUGFyc2VyIiwiZnJvbU5vdGhpbmciLCJDb21tb25QYXJzZXIiLCJmcm9tQk5GIiwiYm5mIiwiZnJvbVJ1bGVzIiwicnVsZXMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRUksR0FBTyxDQUFQLElBQU87QUFDRSxHQUFrQixDQUFsQixPQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdEJBLGVBQWUsaUJBQXJCLFFBQVE7OzthQUFGQSxlQUFlOzs7Ozs7WUFHM0JDLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBQUNDLE9BQVksU0FBQ0QsV0FBVyxDQUFDRCxlQUFlO1lBQUcsQ0FBQzs7O1lBRW5FRyxHQUFPLEVBQVBBLENBQU87bUJBQWQsUUFBUSxDQUFEQSxPQUFPLENBQUNDLEdBQUcsRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQ0YsT0FBWSxTQUFDQyxPQUFPLENBQUNILGVBQWUsRUFBRUksR0FBRztZQUFHLENBQUM7OztZQUVuRUMsR0FBUyxFQUFUQSxDQUFTO21CQUFoQixRQUFRLENBQURBLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDSixPQUFZLFNBQUNHLFNBQVMsQ0FBQ0wsZUFBZSxFQUFFTSxLQUFLO1lBQUcsQ0FBQzs7OztFQVB2Q0osT0FBWTtrQkFBcENGLGVBQWU7Z0JBQWZBLGVBQWUsRUFDM0JJLENBQUcsTUFBR0EsSUFBRyJ9