"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _textarea = _interopRequireDefault(require("../textarea"));
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
var BNFTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(BNFTextarea, Textarea);
    var _super = _createSuper(BNFTextarea);
    function BNFTextarea() {
        _classCallCheck(this, BNFTextarea);
        return _super.apply(this, arguments);
    }
    _createClass(BNFTextarea, [
        {
            key: "getBNF",
            value: function getBNF() {
                var value = this.getValue(), bnf = value; ///
                return bnf;
            }
        },
        {
            key: "setBNF",
            value: function setBNF(bnf) {
                var value = bnf;
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getBNF = this.getBNF.bind(this), setBNF = this.setBNF.bind(this);
                return {
                    getBNF: getBNF,
                    setBNF: setBNF
                };
            }
        }
    ]);
    return BNFTextarea;
}(_textarea.default);
exports.default = BNFTextarea;
_defineProperty(BNFTextarea, "defaultProperties", {
    className: "bnf",
    spellCheck: "false"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2JuZi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsIi4uL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQk5GVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldEJORigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBibmYgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gYm5mO1xuICB9XG5cbiAgc2V0Qk5GKGJuZikge1xuICAgIGNvbnN0IHZhbHVlID0gYm5mO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldEJORiA9IHRoaXMuZ2V0Qk5GLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0Qk5GID0gdGhpcy5zZXRCTkYuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0Qk5GLFxuICAgICAgc2V0Qk5GXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJuZlwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbiJdLCJuYW1lcyI6WyJCTkZUZXh0YXJlYSIsImdldEJORiIsInZhbHVlIiwiZ2V0VmFsdWUiLCJibmYiLCJzZXRCTkYiLCJzZXRWYWx1ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiVGV4dGFyZWEiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFcUIsSUFBQSxTQUFhLGtDQUFiLGFBQWEsRUFBQTs7Ozs7Ozs7Ozs7Ozs7OzhEQUZsQztzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7OztVQUFBOzt3QkFBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBSWUsSUFBQSxBQUFNQSxXQUFXLGlCQ0o3QixBRElZO29DQUpmOzthQUlxQkEsV0FBVzswQ0FKaEM7Ozs7O1lBS0VDLEdBQU0sRUFBTkEsUUFBTTtZRUxSLE9GS0VBLFNBQUFBLE1BQU0sR0FBRztnQkFDUCxJQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxRQUFRLEVBQUUsRUFDdkJDLEdBQUcsR0FBR0YsS0FBSyxBQUFDLEVBQUMsR0FBRztnQkFFdEIsT0FBT0UsR0FBRyxDQUFDO2FBQ1o7OztZQUVEQyxHQUFNLEVBQU5BLFFBQU07WUVaUixPRllFQSxTQUFBQSxNQUFNLENBQUNELEdBQUcsRUFBRTtnQkFDVixJQUFNRixLQUFLLEdBQUdFLEdBQUcsQUFBQztnQkFFbEIsSUFBSSxDQUFDRSxRQUFRLENBQUNKLEtBQUssQ0FBQyxDQUFDO2FBQ3RCOzs7WUFFREssR0FBYSxFQUFiQSxlQUFhO1lFbEJmLE9Ga0JFQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsSUFBTU4sTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTSxDQUFDTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQy9CSCxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQztnQkFFdEMsT0FBUTtvQkFDTlAsTUFBTSxFQUFOQSxNQUFNO29CQUNOSSxNQUFNLEVBQU5BLE1BQU07aUJBQ1AsQ0FBRTthQUNKOztNQTFCSDs7Q0FnQ0MsQ0E1QndDSSxTQUFRLFNBNEJoRDtrQkE1Qm9CVCxXQUFXLEFBSmhDO0FBNEJFLGdCQXhCbUJBLFdBQVcsRUF3QnZCVSxtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLEtBQUs7SUFDaEJDLFVBQVUsRUFBRSxPQUFPO0NBQ3BCLENBQUMsQUEvQkoifQ==