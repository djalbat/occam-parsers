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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var CollectionOfPartsPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(CollectionOfPartsPart, NonTerminalPart);
    function CollectionOfPartsPart(type, part) {
        _classCallCheck(this, CollectionOfPartsPart);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(CollectionOfPartsPart).call(this, type));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC9ub25UZXJtaW5hbC9jb2xsZWN0aW9uT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbFBhcnQiLCJDb2xsZWN0aW9uT2ZQYXJ0c1BhcnQiLCJjb25zdHJ1Y3RvciIsInR5cGUiLCJwYXJ0IiwiZ2V0UGFydCIsImFzU3RyaW5nIiwib3BlcmF0b3JTdHJpbmciLCJwYXJ0U3RyaW5nIiwic3RyaW5nIiwiY2xvbmUiLCJQYXJ0Il0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVnQixHQUF3QixDQUF4QixZQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFL0IscUJBQXFCLGlCQUEzQixRQUFRO2NBQUYscUJBQXFCO2FBQXJCLHFCQUFxQixDQUM1QixJQUFJLEVBQUUsSUFBSTs4QkFESCxxQkFBcUI7O2lFQUFyQixxQkFBcUIsYUFFaEMsSUFBSTtjQUVMLElBQUksR0FBRyxJQUFJOzs7aUJBSkMscUJBQXFCOztZQU94QyxHQUFPLEdBQVAsT0FBTzttQkFBUCxRQUFRLENBQVIsT0FBTyxHQUFHLENBQUM7Z0JBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ2xCLENBQUM7OztZQUVELEdBQVEsR0FBUixRQUFRO21CQUFSLFFBQVEsQ0FBUixRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3hCLEdBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQy9CLE1BQU0sTUFBbUIsTUFBYyxDQUEzQixVQUFVLEVBQWtCLE1BQUEsQ0FBZixjQUFjO2dCQUU3QyxNQUFNLENBQUMsTUFBTTtZQUNmLENBQUM7OztZQUVELEdBQUssR0FBTCxLQUFLO21CQUFMLFFBQVEsQ0FBUixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQUMsTUFBTSxzQkFsQkQscUJBQXFCLGNBa0JiLEtBQUssR0FBWCxJQUFLLGFBQU8sSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQUcsQ0FBQzs7O1dBbEJqQyxxQkFBcUI7RUFGZCxZQUF3QjtrQkFFL0IscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGVjdGlvbk9mUGFydHNQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IodHlwZSwgcGFydCkge1xuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5wYXJ0ID0gcGFydDtcbiAgfVxuXG4gIGdldFBhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydDtcbiAgfVxuICBcbiAgYXNTdHJpbmcob3BlcmF0b3JTdHJpbmcpIHtcbiAgICBjb25zdCBwYXJ0U3RyaW5nID0gdGhpcy5wYXJ0LmFzU3RyaW5nKCksXG4gICAgICAgICAgc3RyaW5nID0gYCR7cGFydFN0cmluZ30ke29wZXJhdG9yU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoUGFydCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoUGFydCwgdGhpcy5wYXJ0KTsgfVxufVxuIl19