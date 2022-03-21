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
function _get(target, property, receiver) {
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
    return _get(target, property, receiver || target);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL2NvbGxlY3Rpb25PZlBhcnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxlY3Rpb25PZlBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcnQpIHtcbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXMucGFydCA9IHBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnBhcnQ7XG4gIH1cbiAgXG4gIGFzU3RyaW5nKG9wZXJhdG9yU3RyaW5nKSB7XG4gICAgY29uc3QgcGFydFN0cmluZyA9IHRoaXMucGFydC5hc1N0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3BhcnRTdHJpbmd9JHtvcGVyYXRvclN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKFBhcnQpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFBhcnQsIHRoaXMucGFydCk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDb2xsZWN0aW9uT2ZQYXJ0c1BhcnQiLCJ0eXBlIiwicGFydCIsImdldFBhcnQiLCJhc1N0cmluZyIsIm9wZXJhdG9yU3RyaW5nIiwicGFydFN0cmluZyIsInN0cmluZyIsImNsb25lIiwiUGFydCIsIk5vblRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUU0QixJQUFBLFlBQXdCLGtDQUF4Qix3QkFBd0IsRUFBQTs7Ozs7Ozs7Ozs7Ozs7OzhEQUZwRDtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7MEJBQUE7Ozs7Ozs7Ozs7U0FBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7Ozs7d0NBQUE7Ozs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBSWUsSUFBQSxBQUFNQSxxQkFBcUIsaUJDSnZDLEFESVk7cURBSmY7O2FBSXFCQSxxQkFBcUIsQ0FDNUJDLElBQUksRUFBRUMsSUFBSTtvREFMeEI7O2tDQU1VRCxJQUFJLENFTmQsQ0ZNZ0I7UUFFWixNQUFLQyxJQUFJLEdBQUdBLElBQUksQ0FBQzs7Ozs7WUFHbkJDLEdBQU8sRUFBUEEsU0FBTztZRVhULE9GV0VBLFNBQUFBLE9BQU8sR0FBRztnQkFDUixPQUFPLElBQUksQ0FBQ0QsSUFBSSxDQUFDO2FBQ2xCOzs7WUFFREUsR0FBUSxFQUFSQSxVQUFRO1lFZlYsT0ZlRUEsU0FBQUEsUUFBUSxDQUFDQyxjQUFjLEVBQUU7Z0JBQ3ZCLElBQU1DLFVBQVUsR0FBRyxJQUFJLENBQUNKLElBQUksQ0FBQ0UsUUFBUSxFQUFFLEVBQ2pDRyxNQUFNLEdBQUcsQUFBQyxFQUFBLENBQWVGLE1BQWMsQ0FBM0JDLFVBQVUsQ0FBa0IsQ0FBQSxNQUFBLENBQWZELGNBQWMsQ0FBRSxBQUFDO2dCQUVoRCxPQUFPRSxNQUFNLENBQUM7YUFDZjs7O1lBRURDLEdBQUssRUFBTEEsT0FBSztZRXRCUCxPRnNCRUEsU0FBQUEsS0FBSyxDQUFDQyxJQUFJLEVBQUU7Z0JBQUUsT0FBTyxxQkFsQkZULHFCQUFxQixhQWtCYlEsT0FBSyxFQUFYLElBQUssQ0FBQSxZQUFPQyxJQUFJLEVBQUUsSUFBSSxDQUFDUCxJQUFJLEVBQUU7YUFBRTs7TUF0QnREOztDQXVCQyxDQW5Ca0RRLFlBQWUsU0FtQmpFO2tCQW5Cb0JWLHFCQUFxQixBQUoxQyJ9