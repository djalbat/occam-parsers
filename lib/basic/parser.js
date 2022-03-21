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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBibmYgZnJvbSBcIi4vYm5mXCI7XG5pbXBvcnQgQ29tbW9uUGFyc2VyIGZyb20gXCIuLi9jb21tb24vcGFyc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbU5vdGhpbmcoQmFzaWNQYXJzZXIpOyB9XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbUJORihCYXNpY1BhcnNlciwgYm5mKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tUnVsZXMoQmFzaWNQYXJzZXIsIHJ1bGVzKTsgfVxufVxuIl0sIm5hbWVzIjpbIkJhc2ljUGFyc2VyIiwiZnJvbU5vdGhpbmciLCJDb21tb25QYXJzZXIiLCJmcm9tQk5GIiwiYm5mIiwiZnJvbVJ1bGVzIiwicnVsZXMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFZ0IsSUFBQSxJQUFPLGtDQUFQLE9BQU8sRUFBQTtBQUNFLElBQUEsT0FBa0Isa0NBQWxCLGtCQUFrQixFQUFBOzs7Ozs7Ozs7Ozs7Ozs7OERBSDNDO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7Ozs7O1VBQUE7O3dCQUFBOzs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFLZSxJQUFBLEFBQU1BLFdBQVcsaUJDTDdCLEFES1k7d0NBTGY7O2FBS3FCQSxXQUFXOzBDQUxoQzs7Ozs7WUFRU0MsR0FBVyxFQUFYQSxhQUFXO1lFUnBCLE9GUUUsU0FBT0EsV0FBVyxHQUFHO2dCQUFFLE9BQU9DLE9BQVksU0FBQ0QsV0FBVyxDQUFDRCxXQUFXLENBQUMsQ0FBQzthQUFFOzs7WUFFL0RHLEdBQU8sRUFBUEEsU0FBTztZRVZoQixPRlVFLFNBQU9BLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFO2dCQUFFLE9BQU9GLE9BQVksU0FBQ0MsT0FBTyxDQUFDSCxXQUFXLEVBQUVJLEdBQUcsQ0FBQyxDQUFDO2FBQUU7OztZQUUvREMsR0FBUyxFQUFUQSxXQUFTO1lFWmxCLE9GWUUsU0FBT0EsU0FBUyxDQUFDQyxLQUFLLEVBQUU7Z0JBQUUsT0FBT0osT0FBWSxTQUFDRyxTQUFTLENBQUNMLFdBQVcsRUFBRU0sS0FBSyxDQUFDLENBQUM7YUFBRTs7TUFaaEY7O0NBYUMsQ0FSd0NKLE9BQVksU0FRcEQ7a0JBUm9CRixXQUFXLEFBTGhDO0FBTUUsZ0JBRG1CQSxXQUFXLEVBQ3ZCSSxLQUFHLEVBQUdBLElBQUcsU0FBQyxBQU5uQiJ9