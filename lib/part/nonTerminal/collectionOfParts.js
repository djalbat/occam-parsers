"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));
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
function _get(target1, property1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target1, property1, receiver1 || target1);
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
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
var CollectionOfPartsPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(CollectionOfPartsPart, NonTerminalPart);
    var _super = _createSuper(CollectionOfPartsPart);
    function CollectionOfPartsPart(type, part) {
        _classCallCheck(this, CollectionOfPartsPart);
        var _this;
        _this = _super.call(this, type);
        _this.part = part;
        return _this;
    }
    _createClass(CollectionOfPartsPart, [
        {
            key: "getPart",
            value: function getPart() {
                return this.part;
            }
        },
        {
            key: "asString",
            value: function asString(operatorString) {
                var partString = this.part.asString(), string = "".concat(partString).concat(operatorString);
                return string;
            }
        },
        {
            key: "clone",
            value: function clone(Part) {
                return _get(_getPrototypeOf(CollectionOfPartsPart.prototype), "clone", this).call(this, Part, this.part);
            }
        }
    ]);
    return CollectionOfPartsPart;
}(_nonTerminal.default);
exports.default = CollectionOfPartsPart;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL2NvbGxlY3Rpb25PZlBhcnRzLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwiLi4vc3JjL2NvbnN0YW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsZWN0aW9uT2ZQYXJ0c1BhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBwYXJ0KSB7XG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG4gIFxuICBhc1N0cmluZyhvcGVyYXRvclN0cmluZykge1xuICAgIGNvbnN0IHBhcnRTdHJpbmcgPSB0aGlzLnBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtwYXJ0U3RyaW5nfSR7b3BlcmF0b3JTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZShQYXJ0KSB7IHJldHVybiBzdXBlci5jbG9uZShQYXJ0LCB0aGlzLnBhcnQpOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuIl0sIm5hbWVzIjpbIkNvbGxlY3Rpb25PZlBhcnRzUGFydCIsInR5cGUiLCJwYXJ0IiwiZ2V0UGFydCIsImFzU3RyaW5nIiwib3BlcmF0b3JTdHJpbmciLCJwYXJ0U3RyaW5nIiwic3RyaW5nIiwiY2xvbmUiLCJQYXJ0IiwiTm9uVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRWUsSUFBQSxZQUF3QixrQ0FBeEIsd0JBQXdCLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFBLEFBQU1BLHFCQUFxQixpQkNKdkMsQURJWTs7O2FBQU1BLHFCQUFxQixDQUM1QkMsSUFBSSxFQUFFQyxJQUFJOzs7a0NBQ2RELElBQUksQ0VOZCxDRk1nQjtRQUVaLE1BQUtDLElBQUksR0FBR0EsSUFBSSxDQUFDOzs7OztZQUduQkMsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLEdBQUc7Z0JBQ1IsT0FBTyxJQUFJLENBQUNELElBQUksQ0FBQzthQUNsQjs7O1lBRURFLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxDQUFDQyxjQUFjLEVBQUU7Z0JBQ3ZCLElBQU1DLFVBQVUsR0FBRyxJQUFJLENBQUNKLElBQUksQ0FBQ0UsUUFBUSxFQUFFLEVBQ2pDRyxNQUFNLEdBQUcsQUFBQyxFQUFBLENBQWVGLE1BQWMsQ0FBM0JDLFVBQVUsQ0FBa0IsQ0FBQSxNQUFBLENBQWZELGNBQWMsQ0FBRSxBQUFDO2dCQUVoRCxPQUFPRSxNQUFNLENBQUM7YUFDZjs7O1lBRURDLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDQyxJQUFJLEVBQUU7Z0JBQUUsT0FBTyxxQkFsQkZULHFCQUFxQixhQWtCYlEsT0FBSyxFQUFYLElBQUssQ0FBQSxZQUFPQyxJQUFJLEVBQUUsSUFBSSxDQUFDUCxJQUFJLEVBQUU7YUFBRTs7OztDQUNyRCxDQW5Ca0RRLFlBQWUsUUFBQSxDQW1CakU7a0JBbkJvQlYscUJBQXFCIn0=